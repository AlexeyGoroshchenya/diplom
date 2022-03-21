import { blockBody } from './helpers';
import { unblockBody } from './helpers';

export const documents = () => {

    const sertificats = document.querySelector('#documents')
    const imageContainer = document.createElement('div');

    const closeBigImage = () => {
        sertificats.scrollIntoView({ block: "start", behavior: "smooth" });
        imageContainer.remove()
        unblockBody()
    }

    const showBigImage = (e) => {
        sertificats.append(imageContainer)
        imageContainer.classList.add('documentBigImg')
        imageContainer.querySelector('img').setAttribute('src', e.target.closest('a').href)
        imageContainer.scrollIntoView({ block: "start", behavior: "smooth" });
        blockBody()

    }

    imageContainer.innerHTML = `<div><img src="" alt=""><span>+</span></div>`

    sertificats.addEventListener('click', (e) => {
        e.preventDefault()

        if (e.target.classList.contains('document-overlay')) {
            console.dir(e.target.closest('a').href);
            showBigImage(e)
        }
    })

    imageContainer.querySelector('span').addEventListener('click', (e) => {
        closeBigImage()
    })

}