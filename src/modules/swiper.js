import Swiper, { Autoplay, Navigation } from 'swiper';


export const swiper = () => {



    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        modules: [Autoplay, Navigation],
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
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