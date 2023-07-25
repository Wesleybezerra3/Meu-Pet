document.addEventListener("DOMContentLoaded", () => {
  const openModalButton = document.querySelector("#openNav");
  const closeModalButton = document.querySelector("#closeNav");
  const nav = document.querySelector("nav");
  const fade = document.querySelector("#fade");
  const body = document.querySelector('body');
  const toggleModal = () => {
    nav.classList.toggle("hide");
    fade.classList.toggle("hide");
    body.classList.toggle("disable-scrol")
  };

  [openModalButton, closeModalButton, fade].forEach((el) => {
    
    el.addEventListener("click", () => toggleModal());

  });
});
