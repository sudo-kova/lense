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

    var targetCell = document.getElementById('cell-9-8');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_coffin_from_mid_spot.png', 'Smoke Coffins from mid', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_coffin_from_mid_lineup.png', 'Align lower right window with wood and wall Jump Throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 9-8`);
      });
    } else {
      console.log('Cell 9-8 not found');
    }
    var targetCell = document.getElementById('cell-3-7');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/fountain_spot.png', 'Smoke Mid from fountain', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_mid_from_fountain_lineup.png', 'Jump Throw', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/fountain_spot.png', 'Molly Top Banana from fountain', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/molly_top_banana_from_fountain_lineup.png', 'Jump Throw', 'image4', 'text4'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 3-7`);
      });
    } else {
      console.log('Cell 3-7 not found');
    }
    var targetCell = document.getElementById('cell-7-11');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_moto_from_arch_spot.png', 'Smoke Moto from arch', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_moto_from_arch_lineup.png', 'Throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 7-11`);
      });
    } else {
      console.log('Cell 7-11 not found');
    }
    var targetCell = document.getElementById('cell-7-12');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/molly_mini_pit_spot.png', 'Molly Mini-Pit from arch', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/molly_mini_pit_lineup.png', 'On top of red box Jump Throw', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/molly_mini_pit_spot.png', 'Molly Pit from arch', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/molly_pit_lineup.png', 'On top of red box Jump Throw', 'image4', 'text4'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/long_spot_wall.png', 'Molly A Corner', 'image5', 'text5'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/molly_a_corner_from_long.png', 'Throw', 'image6', 'text6'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 7-12`);
      });
    } else {
      console.log('Cell 7-12 not found');
    }
    var targetCell = document.getElementById('cell-8-10');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_top_banana_from_long_spot.png', 'Smoke Top Banana from long', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_top_banana_from_long_lineup.png', 'Throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 8-10`);
      });
    } else {
      console.log('Cell 8-10 not found');
    }
    var targetCell = document.getElementById('cell-9-3');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_bracket_from_spawn_spot.png', 'Smoke left bracket from spawn', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_bracket_from_spawn_lineup.png', 'Jump Throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 9-3`);
      });
    } else {
      console.log('Cell 9-3 not found');
    }
    var targetCell = document.getElementById('cell-10-3');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_right_bracket_from_spawn_spot.png', 'Smoke right bracket from spawn', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_right_bracket_from_spawn_lineup.png', 'Shift W + Jump Throw at green line', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_right_bracket_from_spawn_spot.png', 'Smoke CT', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_ct_spawn.png', ' W + Jump Throw at antenna', 'image4', 'text4'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 10-3`);
      });
    } else {
      console.log('Cell 10-3 not found');
    }
    var targetCell = document.getElementById('cell-6-7');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/front_of_halfwall_spot.png', 'Smoke Coffin', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_coffin_from_halfwall_lineup.png', 'Jump Throw', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/front_of_halfwall_spot.png', 'Molly infront of coffin smoke', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/molly_coffin_from_halfwall_lineup.png', 'Jump Throw', 'image4', 'text4'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 6-7`);
      });
    } else {
      console.log('Cell 6-7 not found');
    }
    var targetCell = document.getElementById('cell-5-12');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/chair_ct_spawn.png', 'Smoke bottom banana from ct spawn', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_bottom_banana_from_ct_spawn.png', 'A + Jump Throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 5-12`);
      });
    } else {
      console.log('Cell 5-12 not found');
    }
    var targetCell = document.getElementById('cell-5-13');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/back_ct_spawn.png', 'Smoke T-Stairs from ct spawn', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_t_steps.png', 'Running Jump Throw at green line', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/ct_spawn_looking.png', 'Smoke Mid from CT', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_mid_from_spawn.png', 'Jump Throw', 'image4', 'text4'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 5-13`);
      });
    } else {
      console.log('Cell 5-13 not found');
    }
    var targetCell = document.getElementById('cell-4-8');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/b_wall_spot.png', 'Molly Deep Banana safe', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/deep_banana_molly_safe.png', 'Jump Throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 4-8`);
      });
    } else {
      console.log('Cell 4-8 not found');
    }
    var targetCell = document.getElementById('cell-10-4');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/rail_corner_spot.png', 'Smoke Coffin', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_coffin_corner_spot.png', ' 1 Step + Jump Throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 10-4`);
      });
    } else {
      console.log('Cell 10-4 not found');
    }
    var targetCell = document.getElementById('cell-11-12');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/a_default_spot.png', 'Smoke Moto from Default', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_moto_from_default.png', 'Align TENUTA in view and Throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 11-12`);
      });
    } else {
      console.log('Cell 11-12 not found');
    }
    var targetCell = document.getElementById('cell-4-7');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/top_first_orange_spot.png', 'Molly infront of halfwall from first oranges', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/molly_infront_of_halfwall_from_first_orange.png', 'Throw', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/top_first_orange_spot.png', 'Smoke behind halfwall from first oranges', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_behind_halfway_from_first_orange.png', 'Throw', 'image4', 'text4'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 4-7`);
      });
    } else {
      console.log('Cell 4-7 not found');
    }
    var targetCell = document.getElementById('cell-10-8');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/second_mid_under_window.png', 'Smoke right bracket', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_right_side_bracket_lineup.png', 'Throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 10-8`);
      });
    } else {
      console.log('Cell 10-8 not found');
    }
    var targetCell = document.getElementById('cell-12-7');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/second_mid_door_spot.png', 'Smoke right bracket from 2nd mid', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_right_bracket_from_second_mid_door_lineup.png', 'Jump Throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 12-7`);
      });
    } else {
      console.log('Cell 12-7 not found');
    }
    var targetCell = document.getElementById('cell-9-6');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/t_steps_wall.png', 'Smoke CT from T steps', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_ct_from_t_steps.png', 'Jump Throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 9-6`);
      });
    } else {
      console.log('Cell 9-6 not found');
    }
    var targetCell = document.getElementById('cell-10-9');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/midwall_spot.png', 'Smoke Moto from Mid', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_moto_from_mid.png', 'Throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 10-9`);
      });
    } else {
      console.log('Cell 10-9 not found');
    }
    var targetCell = document.getElementById('cell-2-7');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/top_corner_coffin_spot.png', 'Smoke Deep Banana from coffin', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_deep_banana_from_coffin.png', 'Throw', 'image2', 'text2'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/top_corner_coffin_spot.png', 'Molly behind halfwall from coffin', 'image3', 'text3'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/molly_behind_halfwall_from_coffin.png', 'Throw', 'image4', 'text4'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 2-7`);
      });
    } else {
      console.log('Cell 2-7 not found');
    }
    var targetCell = document.getElementById('cell-3-9');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/molly_dark_spot.png', 'Molly Dark behind smoke', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/molly_dark_lineup.png', 'Lineup then strafe to left wall and throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 3-9`);
      });
    } else {
      console.log('Cell 3-9 not found');
    }
    var targetCell = document.getElementById('cell-3-12');
    if (targetCell) {
      targetCell.classList.add('clickable-cell');
      targetCell.addEventListener('click', function() {
        clearModalContent();
        const modalContentContainer = document.querySelector('.modal-content-container');
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_behind_halfwall_from_couch_spot.png', 'Smoke behind halfwall from couch in CT Spawn', 'image1', 'text1'));
        modalContentContainer.appendChild(createImageContainer('inferno_nades/smoke_behind_halfwall_from_couch_lineup.png', 'Jump Throw', 'image2', 'text2'));
        document.getElementById('imageModal').style.display = 'block';
        console.log(`Modal for: Cell 3-12`);
      });
    } else {
      console.log('Cell 3-12 not found');
    }
});
