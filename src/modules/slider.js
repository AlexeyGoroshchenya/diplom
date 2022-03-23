export const slider = () => {

    const slides = document.querySelectorAll('.service-block');
    const arrows = document.querySelector('.services-arrows');
    const sliderBlock = document.querySelector('#services')

    let currentSlide = 0;
    let interval;
    let timeInterval = 3000;
    let bigScreen = false;

    const pervSlide = (elems, index) => {
        let secondSlide = index + 1;
        elems[index].classList.remove('slide-active');
        if (bigScreen) { elems[secondSlide].classList.remove('slide-active'); }
    }

    const nextSlide = (elems, index) => {
        let secondSlide = index + 1;
        elems[index].classList.add('slide-active');
        if (bigScreen) { elems[secondSlide].classList.add('slide-active'); }
    }

    const changeCurrent = (direction) => {

        const checkCorrectCurrent = (num = 1) => {
            if (currentSlide >= slides.length) {
                currentSlide = 0
            }
            if (currentSlide < 0) {
                currentSlide = slides.length - num
            }
        }

        if (direction === 'perv') {
            if (!bigScreen) {
                currentSlide--;
            } else {
                currentSlide -= 2;
                checkCorrectCurrent(2)
            }
        } else {

            if (!bigScreen) {
                currentSlide++;
            } else {
                currentSlide += 2;
            }
        }

        checkCorrectCurrent()
    }

    const autoSlide = () => {
        pervSlide(slides, currentSlide);

        changeCurrent()

        nextSlide(slides, currentSlide);
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(() => {
            autoSlide()
            if (window.screen.width > 576) {
                bigScreen = true;
            } else {
                bigScreen = false;
            }
        }, timer)

    }

    const stopSlide = () => {
        clearInterval(interval);
    }

    const init = () => {

        if (window.screen.width > 576) {
            bigScreen = true;
        } else {
            bigScreen = false;
        }

        slides.forEach((slide, index) => {
            if (!bigScreen) {
                if (index < 1) slide.classList.add('slide-active')
            } else {
                if (index < 2) slide.classList.add('slide-active')
            }
        })

        startSlide(timeInterval)
    }

    arrows.addEventListener('click', (e) => {

        pervSlide(slides, currentSlide);

        if (e.target.closest('.services__arrow--right')) {
            changeCurrent()
        } else if (e.target.closest('.services__arrow--left')) {
            changeCurrent('perv')
        }

        nextSlide(slides, currentSlide);
    })

    sliderBlock.addEventListener('mouseenter', (e) => {

        if (e.target.matches('.slide-active') || e.target.matches('.services__arrow')) stopSlide(timeInterval);

    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {

        if (e.target.matches('.slide-active') || e.target.matches('.services__arrow')) startSlide(timeInterval);

    }, true)

    init()

}
