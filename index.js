let btnDonar = document.getElementById(`btn-donar`)
let boxModal = document.querySelector(`.box-donar`)
let btnClose = document.querySelector(`.close`)


const openModal = ()=> {
    boxModal.classList.toggle(`modal-active`)
}

const closeModal = ()=>{
    boxModal.classList.toggle(`modal-active`)
}

btnDonar.addEventListener(`click`, openModal);
btnClose.addEventListener(`click`, closeModal);