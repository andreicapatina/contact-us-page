document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');
    const options = document.querySelectorAll('.option')
    // Toggle dropdown on button click
    dropdownButton.addEventListener('click', function() {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    })
    // Close dropdown if clicked outside
    window.addEventListener('click', function(event) {
        if (!event.target.closest('.custom-dropdown')) {
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            }
        }
    })
    // Update button text on option click
    options.forEach(function(option) {
        option.addEventListener('click', function() {
            dropdownButton.innerHTML = option.querySelector('.fi').outerHTML + ' ' + option.textContent.trim();
            dropdownContent.style.display = 'none';
        });
    });
});
