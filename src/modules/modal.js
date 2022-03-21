
import { blockBody } from './helpers';
import { unblockBody } from './helpers';

export const modal = () => {

    const headerModal = document.querySelector('.header-modal');
    const overlay = document.querySelector('.overlay');
    const servicesModal = document.querySelector('.services-modal');

    const openModal = (element, classElem) => {
        element.classList.add(classElem);
        overlay.style.display = 'block';
        blockBody();
    }

    const closeModal = (element, classElem) => {
        element.style.transitionDuration = '0.5s';
        element.classList.remove(classElem);
        overlay.style.display = 'none';
        unblockBody();
    }

    const init = () => {
        document.body.addEventListener('click', (e) => {

            if (e.target.matches('a.btn-block')) {
                e.preventDefault()
                openModal(headerModal, 'header-modal--opened')
            } else if (e.target.matches('a.btn-success')) {
                e.preventDefault()
                openModal(servicesModal, 'services-modal--opened')
            } else if (e.target.classList.contains('header-modal__close')) {
                e.preventDefault()
                closeModal(headerModal, 'header-modal--opened')
            } else if (e.target.classList.contains('services-modal__close')) {
                e.preventDefault()
                closeModal(servicesModal, 'services-modal--opened')
            }
        })
        headerModal.classList.remove('header-modal--opened');

        servicesModal.classList.remove('services-modal--opened');

    }

    init()
}

