const openBtn = document.querySelector(".elgroupModal_button");
const modal = document.querySelector(".elgroupModal");
const modalOverlay = document.querySelector(".modal_overlay");
const closeBtn = modal.querySelector(".modal_content button");

const openModal = () => {
    modal.classList.remove("d-none");
}

const closeModal = () => {
    modal.classList.add("d-none");
}

openBtn.addEventListener("click", openModal);
modalOverlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);