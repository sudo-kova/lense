let isSetupMode = false;
let imageAssociations = {};

// Load Grid
document.addEventListener('DOMContentLoaded', function() {

    const gridOverlay = document.getElementById('gridOverlay');
    const mapContainer = document.getElementById('mapContainer');
  
    // Fixed dimensions for a 10x10 grid
    // const rowheight = mapContainer.offsetHeight / 10;
    // const colwidth = mapContainer.offsetWidth / 10;
    
    // Fixed number of rows and columns for a 10x10 grid
    const rows = 15;
    const cols = 15;
  
    // Create the grid cells
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        
        // Set data attributes for the cell coordinates
        cell.dataset.row = i;
        cell.dataset.col = j;

        // Generate and assign a unique ID to each cell
        cell.id = `cell-${i}-${j}`;

        // Optionally, add a click event listener to each cell
        cell.addEventListener('click', function() {
            if (isSetupMode) {
                console.log(`Setup mode: Cell clicked: Row ${this.dataset.row}, Col ${this.dataset.col}`);
                // Show the setup modal
                document.getElementById('setupModal').style.display = 'block';
              } else {
                console.log(`Normal mode: Cell clicked: Row ${this.dataset.row}, Col ${this.dataset.col}`);
                // Normal mode logic
              }
          });
        
        gridOverlay.appendChild(cell);
      }
    }

});

// Sidebar
document.querySelector('.hamburger').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var graphDiv = document.getElementById('graphDiv2');
    var graphDiv3 = document.getElementById('graphDiv3');
    const hamburgerIcon = document.querySelector('.hamburger svg');    

    document.getElementById("sidebar").style.left = "0";
    // sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';

});

document.querySelector('.closebtn').addEventListener('click', function() {
    document.getElementById("sidebar").style.left = "-250px";
});

// Add event listener for sidebar links
// document.querySelectorAll('.sidebar-link').forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault();



        
//         changeMap(this.textContent.toLowerCase());
//     });
// });

// function changeMap(mapName) {
//     // Change the map image source
//     document.getElementById('mapImage').src = mapName + '.png';

//     // Remove the existing script if present
//     const existingScript = document.querySelector('#dynamicMapScript');
//     if (existingScript) {
//         existingScript.remove();
//     }

//     // Create a new script element
//     const script = document.createElement('script');
//     script.src = mapName + '.js';
//     script.type = 'module';
//     script.id = 'dynamicMapScript';
//     document.body.appendChild(script);
//     console.log('map loaded')
// }







// document.addEventListener('DOMContentLoaded', function() {
//     // Function to change the map
//     function changeMap(mapName) {
//         // Change the map image source
//         document.getElementById('mapImage').src = mapName + '.png';

//         console.log('map switched to: ' + mapName)

//         // Remove the existing script if present
//         const existingScript = document.querySelector('#dynamicMapScript');
//         if (existingScript) {
//             existingScript.remove();
//         }

//     //     // Create a new script element
//     //     const script = document.createElement('script');
//     //     // script.type = 'module';
//     //     script.src = mapName + '.js';
//     //     script.id = 'dynamicMapScript';
//     //     document.body.appendChild(script);

//     //     console.log('map changed to de_' + mapName);

//     // // Fetch and execute the script
//     // fetch(mapName + '.js')
//     //   .then(response => {
//     //     if (!response.ok) {
//     //         throw new Error(`HTTP error! status: ${response.status}`);
//     //     }
//     //     return response.text();
//     //   })
//     //   .then(scriptContent => {
//     //     console.log(`Executing script for: ${mapName}`);
//     //     const script = document.createElement('script');
//     //     script.textContent = scriptContent;
//     //     document.body.appendChild(script);
//     //   })
//     //   .catch(error => console.error('Failed to load script:', error));

//     // // Dynamically import the module script
//     // import('./' + mapName + '.js')
//     //     .then(module => {
//     //         console.log(mapName + ' map module loaded', module);
//     //     })
//     //     .catch(error => console.error('Failed to load module script:', error));

//     }

//     // Attach event listeners to sidebar links
//     document.querySelectorAll('.sidebar-link').forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const mapName = this.textContent.trim().toLowerCase();
//             changeMap(mapName);
//         });
//     });
  
// });
