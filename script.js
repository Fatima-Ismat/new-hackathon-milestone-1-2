document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-section');
    var skills = document.getElementById('skills');
    toggleButton.addEventListener('click', function () {
        if (skills.style.display === 'none' || skills.style.display === '') {
            skills.style.display = 'block';
        }
        else {
            skills.style.display = 'none';
        }
    });
});
