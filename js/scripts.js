// burger menu
let burgerMenu = document.getElementById("menu-burger");
let navList = document.getElementById("nav");

burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('open-menu');
    burgerMenu.classList.toggle('close');
});

document.addEventListener('scroll', () => {
    navList.classList.remove('open-menu');
    burgerMenu.classList.remove('close');
})