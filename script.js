const darkBtn = document.getElementById('darkbtn');
const lightBtn = document.getElementById('lightbtn');
const footer = document.querySelector('.footer');
const themeBar = document.querySelector('.themeBar');
const links = document.getElementsByTagName('a');
const content = document.querySelector('.content');

function enableDarkMode() {
    footer.style.backgroundColor = '#282828';
    themeBar.style.backgroundColor = '#282828';
    footer.style.color = '#fff';
    themeBar.style.color = '#fff';
    darkBtn.style.display = 'none';
    lightBtn.style.display = 'inline-block';
    for (let index = 0; index < links.length; index++) {
        links[index].style.color = '#fff';
    }
    content.style.backgroundColor = '#3468d9';
    content.style.color = '#fff';
}

function enableLightMode() {
    darkBtn.style.display = 'inline-block';
    lightBtn.style.display = 'none';
    footer.style.backgroundColor = null;
    themeBar.style.backgroundColor = null;
    footer.style.color = null;
    themeBar.style.color = null;
    for (let index = 0; index < links.length; index++) {
        links[index].style.color = null;
    }
    content.style.backgroundColor = null;
    content.style.color = null;
}

darkBtn.addEventListener('click', enableDarkMode);
lightBtn.addEventListener('click', enableLightMode);
