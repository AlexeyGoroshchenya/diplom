import { modal } from './modules/modal';
import { swiper } from './modules/swiper';
import { timer } from './modules/timer';
import { scroll } from './modules/scroll';
import { calc } from './modules/calc';
import { validation } from './modules/validation';
import { sendForm } from './modules/sendForm';
import { documents } from './modules/documents';
import { slider } from './modules/slider';
import { burger } from './modules/burger';
import { reviews } from './modules/reviews';


modal();
swiper();
timer('01 october 2022');
scroll();

calc(100);
validation();
sendForm('form');
documents()
slider();
burger();
reviews();