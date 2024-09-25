// Отметим ориентир перед уходом.
window.sessionStorage.setItem('scrollPosition', window.scrollY);

// После обновления вернёмся к отмеченному месту.
window.scrollTo(0, window.sessionStorage.getItem('scrollPosition'));

const popupSocialsBtn = document.querySelector('.popup-socials__btn');
const popupSocials = document.querySelector('.popup-socials a');
console.log(popupSocialsBtn);
popupSocialsBtn.addEventListener('click', () => {
  popupSocials.classList.toggle("active");
  popupSocialsBtn.classList.toggle("active");
})

const openMenuBtn = document.querySelector(".hamburger-menu");
const closeMenuBtn = document.querySelector(".menu__btn");
const body = document.body;
const menu = document.querySelector(".header-nav");
const menuLinks = document.querySelectorAll(".header-menu__link");

openMenuBtn.addEventListener('click', () => {
  menu.classList.add('active');
  body.style.overflow = "hidden";
})

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  body.style.overflow = "auto";
})

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    body.style.overflow = "auto";
  })
})