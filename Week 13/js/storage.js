function themeToggle(){
    let body = document.body;
    body.classList.toggle('dark-theme')
    body.classList.toggle('light-theme')

    // Store the current theme prefrence in LocalStorage
    let currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light'
    localStorage.setItem('theme', currentTheme)
}

// check the user's theme prefrence in localstorage
let savedTheme = localStorage.getItem('theme')

// Apply the saved theme or default the theme to light
if (savedTheme == 'dark'){
    document.body.classList.add('dark-theme')
} else {
    document.body.classList.add('light-theme')
}

document.getElementById('theme-toggle').addEventListener('click', themeToggle);
