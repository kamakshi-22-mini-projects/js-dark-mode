//select buttons
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const icon = document.getElementById('toggle-icon');
//const iconName = icon.getAttribute('name');

// update variable when page is loaded
let darkMode = localStorage.getItem('darkMode');

//when page is loaded, check if dark mode is enabled
if (darkMode === 'enabled') {
    enableDarkMode();
}

function enableDarkMode() {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
    icon.setAttribute('name', 'sunny-outline');
}

function disableDarkMode() {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
    icon.setAttribute('name', 'moon-outline');
}


darkModeToggle.addEventListener('click', () => {
    //update variable every time the button is clicked
    darkMode = localStorage.getItem('darkMode');
    //check if dark mode is enabled => turn it off
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

});

