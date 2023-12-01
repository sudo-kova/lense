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
            "    document.querySelector('.modal .close').addEventListener('click', function() {\n"
            "        document.getElementById('imageModal').style.display = 'none';\n"
            "        clearModalContent();\n"
            "    });\n\n"
        )

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

maps = ['mirage', 'inferno']
maps = ['inferno']
for map in maps:
    csv_file_path = 'import_' + map + '_nades.csv'
    js_file_path = map + '.js'
    generate_js_from_csv(csv_file_path, js_file_path)