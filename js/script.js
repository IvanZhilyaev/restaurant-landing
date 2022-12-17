const menuBtn = document.querySelector('.anim-menu');
const menu = document.querySelector('.menu');

menuBtn.onclick = () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}