const openBtn = document.getElementById("modal_button");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal_overlay");
// const closeBtn = modal.querySelector(".closeBtn");
const closeBtn = modal.querySelectorAll(".closeBtn");

const openModal = () => {
    modal.classList.remove("hidden");
}

const closeModal = () => {
    modal.classList.add("hidden");
}

openBtn.addEventListener("click", openModal);
modalOverlay.addEventListener("click", closeModal);
closeBtn.forEach((item)=>{item.addEventListener("click", closeModal);});