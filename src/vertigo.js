// js file 
// - purpose: handle click events of cells
// - dynamically appended in setup mode

// - for reload after exiting setup mode

document.addEventListener('DOMContentLoaded', function() {
    function createImageContainer(imageSrc, textContent, imageId, textId) {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const img = document.createElement('img');
        img.classList.add('modal-content');
        img.id = imageId;
        img.src = imageSrc;

        const textDiv = document.createElement('div');
        textDiv.classList.add('image-title');
        textDiv.id = textId;
        textDiv.textContent = textContent;

        imageContainer.appendChild(img);
        imageContainer.appendChild(textDiv);
        return imageContainer;
    }

    function clearModalContent() {
        const modalContentContainer = document.querySelector('.modal-content-container');
        while (modalContentContainer.firstChild) {
            modalContentContainer.removeChild(modalContentContainer.firstChild);
        }
    }

    document.querySelector('.modal .close').addEventListener('click', function() {
        document.getElementById('imageModal').style.display = 'none';
        clearModalContent();
    });

    var targetCell = document.getElementById('cell-12-4');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('mirage_nades/god_spot.png', 'Deny A plant from CT', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('mirage_nades/god_lineup.png', 'Top of Steeple', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 12-4`);
      });
    } else {
      console.log('Cell 12-4 not found');
    }
});
