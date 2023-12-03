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

    function attachMagnifierToImages() {
        var images = document.querySelectorAll('.modal-content-container .modal-content');
        images.forEach(function(img) {
            img.addEventListener('mousemove', showMagnifier);
            img.addEventListener('mouseleave', function() {
                magnifier.style.display = 'none';
            });
        });
    }

    function showMagnifier(e) {
        var magnifier = document.getElementById('magnifier');
        if (!magnifier) {
            magnifier = document.createElement('div');
            magnifier.id = 'magnifier';
            document.body.appendChild(magnifier);
        }
        magnifier.style.display = 'block';
        magnifier.style.left = e.pageX - 50 + 'px';
        magnifier.style.top = e.pageY - 50 + 'px';
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        magnifier.style.backgroundImage = "url('" + e.target.src + "')";
        magnifier.style.backgroundRepeat = 'no-repeat';
        magnifier.style.backgroundSize = (e.target.width * 2) + 'px ' + (e.target.height * 2) + 'px';
        magnifier.style.backgroundPosition = '-' + (x * 2) + 'px -' + (y * 2) + 'px';
    }

    document.querySelector('.modal .close').addEventListener('click', function() {
        document.getElementById('imageModal').style.display = 'none';
        clearModalContent();
    });

    // Additional code for handling cell click events and other functionalities
    // ...
    var targetCell = document.getElementById('cell-12-8');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('vertigo_nades/scaffolding_spot.png', 'Big Smoke Default', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('vertigo_nades/big_default_smoke_from_scaff.png', 'Throw', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('vertigo_nades/scaffolding_spot.png', 'Smoke Double', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('vertigo_nades/smoke_double_from_scaff.png', 'Throw', 'image4', 'text4'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 12-8`);
      });
    } else {
      console.log('Cell 12-8 not found');
    }
});
