import csv
from collections import defaultdict

def generate_js_from_csv(csv_file_path, js_file_path):
    with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        
        # Aggregate data by cell ID
        cell_data = defaultdict(list)
        for row in reader:
            cell_data[row['cell']].append((row['filename'], row['text']))

        # Start JavaScript content
        js_content = (
            "// js file \n"
            "// - purpose: handle click events of cells\n"
            "// - dynamically appended in setup mode\n\n"
            "// - for reload after exiting setup mode\n\n"
            "document.addEventListener('DOMContentLoaded', function() {\n"
            "    function createImageContainer(imageSrc, textContent, imageId, textId) {\n"
            "        const imageContainer = document.createElement('div');\n"
            "        imageContainer.classList.add('image-container');\n\n"
            "        const img = document.createElement('img');\n"
            "        img.classList.add('modal-content');\n"
            "        img.id = imageId;\n"
            "        img.src = imageSrc;\n\n"
            "        const textDiv = document.createElement('div');\n"
            "        textDiv.classList.add('image-title');\n"
            "        textDiv.id = textId;\n"
            "        textDiv.textContent = textContent;\n\n"
            "        imageContainer.appendChild(img);\n"
            "        imageContainer.appendChild(textDiv);\n"
            "        return imageContainer;\n"
            "    }\n\n"
            "    function clearModalContent() {\n"
            "        const modalContentContainer = document.querySelector('.modal-content-container');\n"
            "        while (modalContentContainer.firstChild) {\n"
            "            modalContentContainer.removeChild(modalContentContainer.firstChild);\n"
            "        }\n"
            "    }\n\n"
            "    function attachMagnifierToImages() {\n"
            "        var images = document.querySelectorAll('.modal-content-container .modal-content');\n"
            "        images.forEach(function(img) {\n"
            "            img.addEventListener('mousemove', showMagnifier);\n"
            "            img.addEventListener('mouseleave', function() {\n"
            "                magnifier.style.display = 'none';\n"
            "            });\n"
            "        });\n"
            "    }\n\n"
            "    function showMagnifier(e) {\n"
            "        var magnifier = document.getElementById('magnifier');\n"
            "        if (!magnifier) {\n"
            "            magnifier = document.createElement('div');\n"
            "            magnifier.id = 'magnifier';\n"
            "            document.body.appendChild(magnifier);\n"
            "        }\n"
            "        magnifier.style.display = 'block';\n"
            "        magnifier.style.left = e.pageX - 50 + 'px';\n"
            "        magnifier.style.top = e.pageY - 50 + 'px';\n"
            "        var rect = e.target.getBoundingClientRect();\n"
            "        var x = e.clientX - rect.left;\n"
            "        var y = e.clientY - rect.top;\n"
            "        magnifier.style.backgroundImage = \"url('\" + e.target.src + \"')\";\n"
            "        magnifier.style.backgroundRepeat = 'no-repeat';\n"
            "        magnifier.style.backgroundSize = (e.target.width * 2) + 'px ' + (e.target.height * 2) + 'px';\n"
            "        magnifier.style.backgroundPosition = '-' + (x * 2) + 'px -' + (y * 2) + 'px';\n"
            "    }\n\n"
            "    document.querySelector('.modal .close').addEventListener('click', function() {\n"
            "        document.getElementById('imageModal').style.display = 'none';\n"
            "        clearModalContent();\n"
            "    });\n\n"
            "    // Additional code for handling cell click events and other functionalities\n"
            "    // ...\n"
        )

# You can now use 'js_content' as your JavaScript content


        # Generate JavaScript for each cell
        for cell_id, images in cell_data.items():
            js_content += (
                f"    var targetCell = document.getElementById('cell-{cell_id}');\n"
                f"    if (targetCell) {{\n"
                f"      targetCell.classList.add('clickable-cell');\n"
                f"      targetCell.addEventListener('click', function() {{\n"
                f"        clearModalContent();\n"
                f"        const modalContentContainer = document.querySelector('.modal-content-container');\n"
            )
            for idx, (image_src, text) in enumerate(images, start=1):
                js_content += (
                    f"        modalContentContainer.appendChild(createImageContainer('{image_src}', '{text}', 'image{idx}', 'text{idx}'));\n"
                )
            js_content += (
                f"        attachMagnifierToImages();\n"
                f"        document.getElementById('imageModal').style.display = 'block';\n"
                f"        console.log(`Modal for: Cell {cell_id}`);\n"
                f"      }});\n"
                f"    }} else {{\n"
                f"      console.log('Cell {cell_id} not found');\n"
                f"    }}\n"
            )

        js_content += "});\n"

        # Write JavaScript content to file
        with open(js_file_path, 'w', encoding='utf-8') as jsfile:
            jsfile.write(js_content)

maps = ['mirage', 'inferno', 'vertigo','nuke']
# maps = ['inferno']
for map in maps:
    csv_file_path = 'import_' + map + '_nades.csv'
    js_file_path = map + '.js'
    generate_js_from_csv(csv_file_path, js_file_path)