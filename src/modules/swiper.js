import Swiper, { Autoplay, Navigation } from 'swiper';


export const swiper = () => {



    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        //speed: 2000,
        //centeredSlides: true,
        //setWrapperSize: true,
        width: 185,
        spaceBetween: 95,
        translate: 280,
        virtualTranslate: false,
        //loop: true,
        //loopedSlides: 0,
        loopAdditionalSlides: 10,
        modules: [Autoplay, Navigation],
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.benefits__arrow--right',
            prevEl: '.benefits__arrow--left',
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
            }
        }

    }
    );

}