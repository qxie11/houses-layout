export const initMenu = () => {
  const burger: HTMLButtonElement = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");

  burger.addEventListener("click", (e) => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });
};
