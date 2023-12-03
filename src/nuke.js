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
    var targetCell = document.getElementById('cell-6-9');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_heaven_corner.png', 'Flash A Site from Heaven Corner', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/flash_a_site_from_heaven_corner.png', 'Throw', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_heaven_corner.png', 'Molly A Default from Heaven Corner', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/moly_a_default_from_heaven_corner.png', 'Throw', 'image4', 'text4'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/heaven_spot.png', 'Molly Squeaky from Heaven', 'image5', 'text5'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/molly_squeak_from_heaven.png', 'Throw', 'image6', 'text6'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_heaven_back_corner.png', 'Molly Hut from Heaven back corner', 'image7', 'text7'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/molly_hut_from_heaven_back_corner.png', 'Throw', 'image8', 'text8'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 6-9`);
      });
    } else {
      console.log('Cell 6-9 not found');
    }
    var targetCell = document.getElementById('cell-8-8');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_outside_hut.png', 'Flash Vent from Outside Hut', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/flash_vent_from_outside_hut.png', 'Jump Throw', 'image2', 'text2'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 8-8`);
      });
    } else {
      console.log('Cell 8-8 not found');
    }
    var targetCell = document.getElementById('cell-7-7');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_t_roof_heat_1.png', 'Flash A Site from T Roof', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/flash_a_site_from_t_roof.png', 'Jump Throw', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/t_roof_edge.png', 'Molly Top of Hut from Roof', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/molly_top_of_hut_fromt_roof.png', 'Running Throw release at end of roof detail', 'image4', 'text4'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_lobby.png', 'Flash Hut from Lobby', 'image5', 'text5'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/flash_running_throw_hut_from_lobby.png', 'Running Throw', 'image6', 'text6'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 7-7`);
      });
    } else {
      console.log('Cell 7-7 not found');
    }
    var targetCell = document.getElementById('cell-8-7');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_lobby_corner.png', 'Flash Hut from Lobby', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/flash_hut_from_lobby.png', 'Throw', 'image2', 'text2'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 8-7`);
      });
    } else {
      console.log('Cell 8-7 not found');
    }
    var targetCell = document.getElementById('cell-5-8');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_ramp.png', 'Nade Trophy from Ramp', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/nade_trophy_from_ramp.png', 'Running Throw at Green Line', 'image2', 'text2'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 5-8`);
      });
    } else {
      console.log('Cell 5-8 not found');
    }
    var targetCell = document.getElementById('cell-9-9');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_outside_mini.png', 'Nade Marshmallow from Outside Mini', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/nade_marsh_from_outside_mini.png', 'Throw', 'image2', 'text2'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 9-9`);
      });
    } else {
      console.log('Cell 9-9 not found');
    }
    var targetCell = document.getElementById('cell-10-7');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_under_silo.png', 'Nade Redbox from Under Silo', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/nade_redbox_from_under_silo.png', 'Throw', 'image2', 'text2'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 10-7`);
      });
    } else {
      console.log('Cell 10-7 not found');
    }
    var targetCell = document.getElementById('cell-9-5');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_fence.png', 'Smoke Outside Far from Fence', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/smoke_outside_far_from_fence.png', 'Jump Throw', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_fence.png', 'Smoke Outside Close from Fence', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/smoke_outside_close_from_fence.png', 'Jump Throw', 'image4', 'text4'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 9-5`);
      });
    } else {
      console.log('Cell 9-5 not found');
    }
    var targetCell = document.getElementById('cell-6-6');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_roof_cooling.png', 'Smoke Mini from Roof Cooling', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/smoke_mini_jump_throw_from_roof_cooling.png', 'Jump Throw', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_roof_cooling.png', 'Flash A Site from Roof Cooling', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/flash_a_site_from_t_roof_cooling.png', 'Throw', 'image4', 'text4'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 6-6`);
      });
    } else {
      console.log('Cell 6-6 not found');
    }
    var targetCell = document.getElementById('cell-8-10');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_outside_of_ct.png', 'Molly A Site from Outside of CT', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/molly_outside_from_outside_of_ct.png', 'Aim at Cornerstone then Shift + Jump Throw at end of ramp', 'image2', 'text2'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 8-10`);
      });
    } else {
      console.log('Cell 8-10 not found');
    }
    var targetCell = document.getElementById('cell-6-7');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_trophy_logo.png', 'Smoke Ramp from Trophy', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/smoke_ramp_from_trophy.png', 'Running Throw', 'image2', 'text2'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 6-7`);
      });
    } else {
      console.log('Cell 6-7 not found');
    }
    var targetCell = document.getElementById('cell-8-3');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_yellow_pole.png', 'Big Smoke Mini from Yellow Pole (T-Spawn)', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/smoke_mini_big_from_yellow_pole.png', 'Jump Throw', 'image2', 'text2'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 8-3`);
      });
    } else {
      console.log('Cell 8-3 not found');
    }
    var targetCell = document.getElementById('cell-7-5');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('nuke_nades/spot_tspawn_wall.png', 'Smoke Vent from wall (T Spawn)', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('nuke_nades/smoke_vent_from_tspawn.png', 'Jump Throw', 'image2', 'text2'));
        attachMagnifierToImages();
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 7-5`);
      });
    } else {
      console.log('Cell 7-5 not found');
    }
});
