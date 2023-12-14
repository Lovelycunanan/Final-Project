// display dropdown
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);

    if (dropdown.style.display === 'block' || dropdown.style.display === '') {
        dropdown.style.display = 'none';
    } else {
        var allDropdowns = document.querySelectorAll('.dropdown');
        allDropdowns.forEach(function (otherDropdown) {
            if (otherDropdown !== dropdown) {
                otherDropdown.style.display = 'none';
            }
        });

        dropdown.style.display = 'block';
    }
}

// Hide dropdowns when clicking outside of them
document.addEventListener('click', function (event) {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});

// Cycles through images in a dropdown
function showImages(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    var images = dropdown.querySelectorAll('img');

    
    images[0].style.display = 'block';

    var i = 1;

    // Switches image every 3 seconds
    setInterval(function () {
        images.forEach(function (img) {
            img.style.display = 'none';
        });

        images[i].style.display = 'block';

        i++;

        // Reset counter when it reaches the last image
        if (i >= images.length) {
            i = 0;
        }
    }, 3000);
}

// Show images in specific dropdowns
showImages('hikingDropdown');
showImages('volleyballDropdown');
showImages('singingDropdown');
