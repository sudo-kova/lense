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
    var targetCell = document.getElementById('cell-6-7');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('mirage_nades/mollyplantfromcat_spot.png', 'Deny A defuse from cat', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('mirage_nades/mollyplantfromcat_lineup.png', 'Jump throw from bottom of shadow', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 6-7`);
      });
    } else {
      console.log('Cell 6-7 not found');
    }
    var targetCell = document.getElementById('cell-3-5');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('mirage_nades/mollyplantB_spot.png', ' Deny B default defuse from apts', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('mirage_nades/mollyplantB_lineup.png', ' Left click throw at top of green tarp', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 3-5`);
      });
    } else {
      console.log('Cell 3-5 not found');
    }
    var targetCell = document.getElementById('cell-5-13');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('mirage_nades/tspawntrashcorner.png', ' Smoke Window', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('mirage_nades/windowfromtrash.png', ' Hold D for 0.5s and Jump Throw', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('mirage_nades/tspawntrashcorner.png', ' Smoke Conn', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('mirage_nades/smokeconnfromtrash.png', ' Jump Throw', 'image4', 'text4'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 5-13`);
      });
    } else {
      console.log('Cell 5-13 not found');
    }
    var targetCell = document.getElementById('cell-7-10');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('mirage_nades/topmidbox.png', ' Smoke Window', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('mirage_nades/resmokemidwindowfrombox.png', ' Throw', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('mirage_nades/topmixboxleft.png', 'Smoke Cat', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('mirage_nades/resmokecatfromtopmixboxleft.png', 'Throw', 'image4', 'text4'));
        modalContentContainer.appendChild(createImageContainer('mirage_nades/topmixboxleft.png', 'Smoke Jungle', 'image5', 'text5'));
        modalContentContainer.appendChild(createImageContainer('mirage_nades/smokejunglefrommidboxleft.png', 'Throw', 'image6', 'text6'));
        modalContentContainer.appendChild(createImageContainer('mirage_nades/topmixboxleft.png', 'Smoke CT', 'image7', 'text7'));
        modalContentContainer.appendChild(createImageContainer('mirage_nades/smokectfrommidxboxleft.png', 'Throw', 'image8', 'text8'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 7-10`);
      });
    } else {
      console.log('Cell 7-10 not found');
    }
});
