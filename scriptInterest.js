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

document.addEventListener('click', function (event) {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});

function showImages(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    var images = dropdown.querySelectorAll('img');

    images[0].style.display = 'block';

    var i = 1;

    setInterval(function () {
        images.forEach(function (img) {
            img.style.display = 'none';
        });

        images[i].style.display = 'block';

        i++;

        if (i >= images.length) {
            i = 0;
        }
    }, 3000);
}

showImages('hikingDropdown');
showImages('volleyballDropdown');
showImages('singingDropdown');
