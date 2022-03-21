import { modal } from './modules/modal';
import { swiper } from './modules/swiper';
import { timer } from './modules/timer';
import { scroll } from './modules/scroll';
import { calc } from './modules/calc';
import { validation } from './modules/validation';
import { sendForm } from './modules/sendForm';

modal();
swiper();
timer('01 april 2022');
scroll();
//Формула цены в п.3 ТЗ для калькулятора дает в результате
// что-то не очень похожее на цену. По логике просится какой-то
// тариф, который будет умножаться на получаемый по формуле коэффициент.
// Добавил тут аргумент для передачи такого тарифа в расчет
calc(100);
validation();
sendForm('.form-horizontal');
