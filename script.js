const burgerMenu = document.querySelector(".burger");
const burgerLine = document.querySelector(".burger__line");
const headerList = document.querySelector(".header__list");



burgerMenu.addEventListener("click", function(){
  burgerLine.classList.toggle("active");
  headerList.classList.toggle("active");
})
