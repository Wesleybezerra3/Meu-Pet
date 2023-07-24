document.addEventListener("DOMContentLoaded", () => {
    const openModalButton = document.querySelector("#openNav");
    const closeModalButton = document.querySelector("#closeNav");
    const nav = document.querySelector("nav");
    const fade = document.querySelector("#fade");

    const toggleModal = () => {
      nav.classList.toggle("hide");
      fade.classList.toggle("hide");
    };

    [openModalButton, closeModalButton].forEach((el) => {
      el.addEventListener("click", () => toggleModal());
    });
  });