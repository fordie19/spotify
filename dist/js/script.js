const togglemenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
togglemenu.addEventListener("click", () => {
     togglemenu.classList.toggle("open")
     headerNav.classList.toggle("open")
})