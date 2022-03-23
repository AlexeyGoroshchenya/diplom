export const slider = () => {

    const slides = document.querySelectorAll('.service-block');
    const arrows = document.querySelector('.services-arrows');
    const sliderBlock = document.querySelector('#services')

    let currentSlide = 0;
    let interval;
    let timeInterval = 3000;

    const checkCorrectCurrent = (num = 1) => {
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - num
        }

    }

    const changeSlide = (elems, index) => {
        if (window.screen.width < 576) {
            elems[index].classList.toggle('slide-active');
        } else {
            elems[index].classList.toggle('slide-active');
            elems[(index + 1)].classList.toggle('slide-active');
        }

    }

    const changeCurrent = (direction) => {
        if (direction === 'perv') {
            if (window.screen.width < 576) {
                currentSlide--;
            } else {
                currentSlide -= 2;
                checkCorrectCurrent(2)
            }
        } else {
            if (window.screen.width < 576) {
                currentSlide++;
            } else {
                currentSlide += 2;
            }
        }
        checkCorrectCurrent()
    }

    const autoSlide = () => {
        changeSlide(slides, currentSlide);

        changeCurrent()

        changeSlide(slides, currentSlide);
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval);
    }

    const init = () => {
        slides.forEach((slide, index) => {


        })
        if (window.screen.width < 576) {
            slides[0].classList.add('slide-active')
        } else {
            slides[0].classList.add('slide-active')
            slides[1].classList.add('slide-active')
        }

        startSlide(timeInterval)
    }

    arrows.addEventListener('click', (e) => {

        changeSlide(slides, currentSlide);

        if (e.target.closest('.services__arrow--right')) {
            changeCurrent()
        } else if (e.target.closest('.services__arrow--left')) {
            changeCurrent('perv')
        }

        changeSlide(slides, currentSlide);
    })

    sliderBlock.addEventListener('mouseenter', (e) => {

        if (e.target.matches('.slide-active') || e.target.matches('.services__arrow')) stopSlide(timeInterval);

    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {

        if (e.target.matches('.slide-active') || e.target.matches('.services__arrow')) startSlide(timeInterval);

    }, true)

    init()



}
