
import { blockBody } from './helpers';
import { unblockBody } from './helpers';

export const modal = () => {

    const headerModal = document.querySelector('.header-modal');
    const overlay = document.querySelector('.overlay');
    const servicesModal = document.querySelector('.services-modal');

    const openModal = (element, classElem) => {
        element.style.transitionDuration = '0.5s';
        element.style.display = 'block';
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

            //console.log(e.target);
            if (e.target.classList.contains('header-button')) {
                e.preventDefault()
                openModal(headerModal, 'header-modal--opened')
            } else if (e.target.classList.contains('fancyboxModal')) {
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
        headerModal.style.display = 'block';
        servicesModal.classList.remove('services-modal--opened');
        servicesModal.style.display = 'block';
    }

    init()
}
