package main

import (
	"fmt"
	"log"
	"os"
	"image"
	"image/color"
	"image/draw"
	"image/jpeg"
	"os/exec"

	dem "github.com/markus-wa/demoinfocs-golang/v4/pkg/demoinfocs"
	events "github.com/markus-wa/demoinfocs-golang/v4/pkg/demoinfocs/events"
	common "github.com/markus-wa/demoinfocs-golang/v4/pkg/demoinfocs/common"
	"myproject/metadata" // Importing the local metadata package
	"encoding/csv"
)

// FlashbangEvent represents a flashbang throw event
type FlashbangEvent struct {
	Round     int
	Thrower   string
	PosX, PosY float64
}

func main() {

	// var player_focus = "chaoticS"

	// SETUP CSV FOR WRITE
	csvFile, err := os.Create("flashbang_data.csv")
	if err != nil {
		log.Fatal("failed to create CSV file: ", err)
	}
	defer csvFile.Close()

	writer := csv.NewWriter(csvFile)
	defer writer.Flush()
	// writer.Write([]string{"Round", "Thrower", "Position X", "Position Y"})
	writer.Write([]string{"Round", "Thrower", "Position X", "Position Y", "Flashed Player", "Duration"})

	// Map to store flashbang events
	flashbangEvents := make(map[string]FlashbangEvent)

	// OPEN DEMO

	f, err := os.Open("mirage_2023_12_03_21_21.dem")
	if err != nil {
		log.Panic("failed to open demo file: ", err)
	}
	defer f.Close()

	p := dem.NewParser(f)
	defer p.Close()

	// Parse header to get map information
	header, err := p.ParseHeader()
	if err != nil {
		log.Panic("failed to parse demo header: ", err)
	}


	header.MapName = "de_mirage"
	// fmt.Println("Detected Map:", header.MapName)
	// MapName appears to be empty

	// Retrieve map metadata
	mapMetadata := metadata.MapNameToMap[header.MapName]

	var currentRound int

	p.RegisterEventHandler(func(e events.RoundStart) {
		currentRound++
		// fmt.Println("Round", currentRound)
	})
	
	// Create an image to draw on (assuming de_mirage.jpg is in the current directory)
	mapImage := loadImage("de_mirage.jpg")
	// flashesByChaoticS := loadImage("de_mirage.jpg")

	// plot all
	p.RegisterEventHandler(func(e events.GrenadeProjectileThrow) {
		if e.Projectile.WeaponInstance.Type == common.EqFlash {
			pos := e.Projectile.Position()

			// Translate in-game coordinates to 2D map coordinates
			x, y := mapMetadata.TranslateScale(pos.X, pos.Y)

			// fmt.Printf("Round %d: Flashbang thrown by %s at map position (X: %f, Y: %f)\n", currentRound, e.Projectile.Thrower, x, y)

			// Plot the translated coordinates on the map image
			plotPoint(mapImage, x, y)
		}
	})

	p.RegisterEventHandler(func(e events.GrenadeProjectileThrow) {
		if e.Projectile.WeaponInstance.Type == common.EqFlash {
			pos := e.Projectile.Position()
			x, y := mapMetadata.TranslateScale(pos.X, pos.Y)

			// Store the flashbang event
			eventKey := fmt.Sprintf("%d_%s", currentRound, e.Projectile.Thrower.Name)
			flashbangEvents[eventKey] = FlashbangEvent{
				Round:   currentRound,
				Thrower: e.Projectile.Thrower.Name,
				PosX:    x,
				PosY:    y,
			}
		}
	})

	p.RegisterEventHandler(func(e events.PlayerFlashed) {
		if e.Player != nil && e.Attacker != nil {
			flashDurationSeconds := e.FlashDuration().Seconds()
			formattedDuration := fmt.Sprintf("%.2f", flashDurationSeconds)

			// FILTER FOR PLAYER THAT IS PLAYER_FOCUS
			// if e.Attacker.Name == player_focus {
			// 	// Match the flashbang event
			// 	eventKey := fmt.Sprintf("%d_%s", currentRound, e.Attacker.Name)
			// 	if fbEvent, exists := flashbangEvents[eventKey]; exists {
			// 		// Write to CSV file
			// 		writer.Write([]string{
			// 			fmt.Sprintf("%d", fbEvent.Round),
			// 			fbEvent.Thrower,
			// 			fmt.Sprintf("%.2f", fbEvent.PosX),
			// 			fmt.Sprintf("%.2f", fbEvent.PosY),
			// 			e.Player.Name,
			// 			formattedDuration,
			// 		})
			// 	}
			// }

			// Match the flashbang event
			eventKey := fmt.Sprintf("%d_%s", currentRound, e.Attacker.Name)
			if fbEvent, exists := flashbangEvents[eventKey]; exists {
				// Write to CSV file
				writer.Write([]string{
					fmt.Sprintf("%d", fbEvent.Round),
					fbEvent.Thrower,
					fmt.Sprintf("%.2f", fbEvent.PosX),
					fmt.Sprintf("%.2f", fbEvent.PosY),
					e.Player.Name,
					formattedDuration,
				})
			}


		}
	})

	err = p.ParseToEnd()
	if err != nil {
		log.Panic("failed to parse demo: ", err)
	}

	saveImage(mapImage, "map_with_points.jpg")
	// saveImage(flashesByChaoticS, "flashes_by_chaoticS.jpg")

}

func loadImage(filename string) *image.RGBA {
	file, err := os.Open(filename)
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	img, _, err := image.Decode(file)
	if err != nil {
		log.Fatal(err)
	}

	rgba := image.NewRGBA(img.Bounds())
	draw.Draw(rgba, rgba.Bounds(), img, image.Point{}, draw.Src)

	return rgba
}

func plotPoint(img *image.RGBA, x, y float64) {
	// Convert map coordinates to image coordinates (adjust as needed)
	imgX := int(x)
	imgY := int(y)

	// Draw a red point at the translated coordinates
	colorRed := color.RGBA{255, 0, 0, 255}
	draw.Draw(img, image.Rect(imgX-2, imgY-2, imgX+2, imgY+2), &image.Uniform{colorRed}, image.Point{}, draw.Src)
}

func plotPoint2(img *image.RGBA, x, y float64, pointColor color.Color) {
	// Convert map coordinates to image coordinates (adjust as needed)
	imgX := int(x)
	imgY := int(y)

	// Draw a point at the translated coordinates using the specified color
	draw.Draw(img, image.Rect(imgX-2, imgY-2, imgX+2, imgY+2), &image.Uniform{pointColor}, image.Point{}, draw.Src)
}


func saveImage(img *image.RGBA, filename string) {
	file, err := os.Create(filename)
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	err = jpeg.Encode(file, img, nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Image with plotted points saved as %s\n", filename)
	exec.Command("start", filename).Run()
}

	// p.RegisterEventHandler(func(e events.GrenadeProjectileThrow) {
	// 	if e.Projectile.WeaponInstance.Type == common.EqFlash {
	// 		pos := e.Projectile.Position()
	// 		// Debugging: Print out in-game coordinates
	// 		fmt.Printf("In-game coordinates (X: %f, Y: %f)\n", pos.X, pos.Y)
	
	// 		// Translate in-game coordinates to 2D map coordinates
	// 		x, y := mapMetadata.TranslateScale(pos.X, pos.Y)
	// 		// Debugging: Print out translated coordinates
	// 		fmt.Printf("Translated map coordinates (X: %f, Y: %f)\n", x, y)
	
	// 		fmt.Printf("Round %d: Flashbang thrown by %s at map position (X: %f, Y: %f)\n", currentRound, e.Projectile.Thrower, x, y)
	// 	}
	// })

	// p.RegisterEventHandler(func(e events.GrenadeProjectileThrow) {
	// 	if e.Projectile.WeaponInstance.Type == common.EqFlash {
	// 		pos := e.Projectile.Position()

	// 		// Translate in-game coordinates to 2D map coordinates
	// 		x, y := mapMetadata.TranslateScale(pos.X, pos.Y)

	// 		fmt.Printf("Round %d: Flashbang thrown by %s at map position (X: %f, Y: %f)\n", currentRound, e.Projectile.Thrower, x, y)

	// 		// Check if thrown by "chaoticS"
	// 		if e.Projectile.Thrower.Name == player_focus {
	// 			// Plot the translated coordinates on the flashesByChaoticS map (in green)
	// 			plotPoint2(flashesByChaoticS, x, y, color.RGBA{0, 255, 0, 255}) // Green
	// 		}

	// 		// Write to CSV file
	// 		writer.Write([]string{
	// 			fmt.Sprintf("%d", currentRound),
	// 			e.Projectile.Thrower.Name,
	// 			fmt.Sprintf("%.2f", x),
	// 			fmt.Sprintf("%.2f", y),
	// 		})
	// 	}
	// })

	// p.RegisterEventHandler(func(e events.PlayerFlashed) {
	// 	if e.Player != nil && e.Attacker != nil {
	// 		flashDurationSeconds := e.FlashDuration().Seconds()
	// 		formattedDuration := fmt.Sprintf("%.2f", flashDurationSeconds)

	// 		if e.Attacker.Name == player_focus{
	// 			fmt.Printf("Round %d: Player %s was flashed by %s for %s seconds\n", currentRound, e.Player.Name, e.Attacker.Name, formattedDuration)
	// 		}
			
	// 	}
	// })