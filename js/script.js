const btn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".menuList");
const sns = document.querySelector(".snsicon");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
  sns.classList.toggle("active");
});