import Swiper, { Autoplay, Navigation } from 'swiper';


export const swiper = () => {



    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        //spaceBetween: 30,
        loop: true,
        modules: [Autoplay],
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        modules: [Navigation],
        navigation: {
            nextEl: '.benefits__arrow--right',
            prevEl: '.benefits__arrow--left',
        },
        //breakpoints: {
        //    576: {
        //        slidesPerView: 3,
        //    }
        //}

    }
    );
}