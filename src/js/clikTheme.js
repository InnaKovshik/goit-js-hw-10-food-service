const refs = {
    body: document.querySelector('body'),
    checkbox: document.querySelector('#theme-switch-toggle'),
};

refs.checkbox.addEventListener('click', clikThemeSwitch);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('theme') === Theme.DARK) {
    refs.body.setAttribute('class', Theme.DARK);
    refs.checkbox.checked = true;
} else {
    refs.body.setAttribute('class', Theme.LIGHT);
}

function clikThemeSwitch() {
    if (refs.checkbox.checked) {
        refs.body.setAttribute('class', Theme.DARK);       
    } else {
        refs.body.setAttribute('class', Theme.LIGHT); 
    }
    let switchTheme = refs.body.getAttribute('class');

    localStorage.setItem('theme', switchTheme);
}






