export const headerModal = () => {

    const btnOpenModal = document.querySelector('.button')
    const modal = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')

    const openModal = () => {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    }

    const closeModal = () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }

    btnOpenModal.addEventListener('click', (e) => {
        e.preventDefault()

        openModal()
    })

    modal.addEventListener('click', (e) => {
        //доделать закрытие по клику мимо модального окна

        if (!e.target.closest('.box-modal') || e.target.classList.contains('header-modal__close')) {
            closeModal()
        }
    })

}

