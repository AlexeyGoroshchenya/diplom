/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_documents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/documents */ \"./modules/documents.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n//import { swiper } from './modules/swiper';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\r\n//swiper();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__.timer)('01 april 2022');\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.scroll)();\r\n//Формула цены в п.3 ТЗ для калькулятора дает в результате\r\n// что-то не очень похожее на цену. По логике просится какой-то\r\n// тариф, который будет умножаться на получаемый по формуле коэффициент.\r\n// Добавил тут аргумент для передачи такого тарифа в расчет\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__.calc)(100);\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__.validation)();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__.sendForm)('.form-horizontal');\r\n(0,_modules_documents__WEBPACK_IMPORTED_MODULE_6__.documents)()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__.slider)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calc\": () => (/* binding */ calc)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst calc = (price = 100) => {\r\n\r\n    const calcBlock = document.querySelector('#calc');\r\n    const calcType = document.querySelector('#calc-type');\r\n    const calcTypeMaterial = document.querySelector('#calc-type-material');\r\n    const calcSquare = document.querySelector('#calc-input');\r\n    const total = document.querySelector('#calc-total');\r\n\r\n    const showTotal = (value) => {\r\n\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 300,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                total.attributes[4].nodeValue = `${parseInt(value * progress)},00 рублей`\r\n            }\r\n        });\r\n    }\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;\r\n        const calcSquareValue = +calcSquare.value\r\n\r\n        let totalValue = 0;\r\n\r\n        if (calcTypeValue && calcTypeMaterialValue && calcSquareValue) {\r\n            totalValue = price * calcTypeValue * calcTypeMaterialValue * calcSquareValue;\r\n            showTotal(totalValue);\r\n        }\r\n    }\r\n\r\n    const validation = (e) => {\r\n\r\n        e.target.value = e.target.value.replace(/\\D/, \"\");\r\n    }\r\n\r\n    document.body.addEventListener('input', (e) => {\r\n\r\n        if (e.target === calcSquare) { validation(e) }\r\n\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n            e.target === calcTypeMaterial) {\r\n            countCalc()\r\n        }\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/documents.js":
/*!******************************!*\
  !*** ./modules/documents.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"documents\": () => (/* binding */ documents)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\nconst documents = () => {\r\n\r\n    const sertificats = document.querySelector('#documents')\r\n    const imageContainer = document.createElement('div');\r\n\r\n    const closeBigImage = () => {\r\n        sertificats.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\r\n        imageContainer.remove()\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.unblockBody)()\r\n    }\r\n\r\n    const showBigImage = (e) => {\r\n        sertificats.append(imageContainer)\r\n        imageContainer.classList.add('documentBigImg')\r\n        imageContainer.querySelector('img').setAttribute('src', e.target.closest('a').href)\r\n        imageContainer.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.blockBody)()\r\n\r\n    }\r\n\r\n    imageContainer.innerHTML = `<div><img src=\"\" alt=\"\"><span>+</span></div>`\r\n\r\n    sertificats.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n\r\n        if (e.target.classList.contains('document-overlay')) {\r\n            console.dir(e.target.closest('a').href);\r\n            showBigImage(e)\r\n        }\r\n    })\r\n\r\n    imageContainer.querySelector('span').addEventListener('click', (e) => {\r\n        closeBigImage()\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/documents.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"blockBody\": () => (/* binding */ blockBody),\n/* harmony export */   \"unblockBody\": () => (/* binding */ unblockBody)\n/* harmony export */ });\nconst blockBody = () => {\r\n    function calcScroll() {\r\n        let scrollWidth = 0;\r\n        let scrollHeight = Math.max(\r\n            document.body.scrollHeight, document.documentElement.scrollHeight,\r\n            document.body.offsetHeight, document.documentElement.offsetHeight,\r\n            document.body.clientHeight, document.documentElement.clientHeight\r\n        );\r\n\r\n        if (scrollHeight > document.documentElement.clientHeight) {\r\n            let div = document.createElement('div');\r\n            div.style.width = '100px';\r\n            div.style.height = '100px';\r\n            div.style.overflowY = 'scroll';\r\n            div.style.visibility = 'hidden';\r\n            document.body.appendChild(div);\r\n            scrollWidth = div.offsetWidth - div.clientWidth;\r\n            div.remove();\r\n        }\r\n        return scrollWidth;\r\n    }\r\n\r\n    document.body.style.marginRight = `${calcScroll()}px`;\r\n    document.body.style.overflow = 'hidden'\r\n\r\n}\r\n\r\nconst unblockBody = () => {\r\n    document.body.style.marginRight = '0';\r\n    document.body.style.overflow = 'auto';\r\n\r\n}\r\n\r\nconst animate = ({ timing, draw, duration }) => {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst modal = () => {\r\n\r\n    const headerModal = document.querySelector('.header-modal');\r\n    const overlay = document.querySelector('.overlay');\r\n    const servicesModal = document.querySelector('.services-modal');\r\n\r\n    const openModal = (element, classElem) => {\r\n        element.classList.add(classElem);\r\n        overlay.style.display = 'block';\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.blockBody)();\r\n    }\r\n\r\n    const closeModal = (element, classElem) => {\r\n        element.style.transitionDuration = '0.5s';\r\n        element.classList.remove(classElem);\r\n        overlay.style.display = 'none';\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.unblockBody)();\r\n    }\r\n\r\n    const init = () => {\r\n        document.body.addEventListener('click', (e) => {\r\n\r\n            if (e.target.matches('a.btn-block')) {\r\n                e.preventDefault()\r\n                openModal(headerModal, 'header-modal--opened')\r\n            } else if (e.target.matches('a.btn-success')) {\r\n                e.preventDefault()\r\n                openModal(servicesModal, 'services-modal--opened')\r\n            } else if (e.target.classList.contains('header-modal__close')) {\r\n                e.preventDefault()\r\n                closeModal(headerModal, 'header-modal--opened')\r\n            } else if (e.target.classList.contains('services-modal__close')) {\r\n                e.preventDefault()\r\n                closeModal(servicesModal, 'services-modal--opened')\r\n            }\r\n        })\r\n        headerModal.classList.remove('header-modal--opened');\r\n\r\n        servicesModal.classList.remove('services-modal--opened');\r\n\r\n    }\r\n\r\n    init()\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\nconst scroll = () => {\r\n\r\n    const btnScrollUp = document.querySelector('.smooth-scroll')\r\n    const borderBtnLine = (document.querySelector('#offer').offsetHeight +\r\n        document.querySelector('#offer').offsetTop) - 50;\r\n\r\n    const moveBtn = (str) => {\r\n        btnScrollUp.style.transitionDuration = '0.5s'\r\n        if (str === 'hide') {\r\n            btnScrollUp.style.transform = 'translateX(200%)';\r\n        } else if (str === 'show') {\r\n            btnScrollUp.style.transform = 'translateX(0%)';\r\n        }\r\n    }\r\n\r\n    const init = () => {\r\n        btnScrollUp.style.transform = 'translateX(200%)';\r\n\r\n        window.addEventListener('scroll', function () {\r\n\r\n            if (scrollY >= borderBtnLine) {\r\n                moveBtn('show')\r\n            } else {\r\n                moveBtn('hide')\r\n            }\r\n        });\r\n\r\n        btnScrollUp.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n\r\n            const goUp = document.getElementById('header');\r\n            goUp.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\r\n        })\r\n    }\r\n\r\n    init()\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\nconst sendForm = (formClass) => {\r\n\r\n    const forms = document.querySelectorAll(formClass)\r\n\r\n    forms.forEach((form) => {\r\n        const statusBlock = document.createElement('div');\r\n        const errorText = 'Что-то пошло не так...';\r\n        const loadText = 'Заявка отправляется...';\r\n        const successText = 'С вами свяжется наш менеджер';\r\n        const notValidText = 'Пожалуйста проверьте введенные данные'\r\n\r\n        const showSubmitStatus = (str) => {\r\n            statusBlock.style.textAlign = 'center'\r\n\r\n            if (str === loadText || str === successText) {\r\n                statusBlock.style.color = 'green'\r\n            } else if (str === errorText || str === notValidText) {\r\n                statusBlock.style.color = 'red'\r\n            }\r\n            form.append(statusBlock)\r\n            statusBlock.textContent = str\r\n        }\r\n\r\n        const showUncorrectInput = (input) => {\r\n            input.style.border = '2px solid red'\r\n\r\n            setTimeout(() => {\r\n                input.style.border = ''\r\n            }, 3000)\r\n        }\r\n\r\n        const validate = (list) => {\r\n\r\n            let nameInput = true\r\n            let phoneInput = true\r\n\r\n            list.forEach(input => {\r\n\r\n                if (input.matches('input[name=fio]')) {\r\n                    if (input.value.match(/[^а-яА-яa-zA-Z\\s]/) || input.value.length < 1) {\r\n                        showUncorrectInput(input)\r\n                        showSubmitStatus(notValidText)\r\n                        nameInput = false\r\n                    }\r\n                }\r\n                if (input.matches('input[name = phone]')) {\r\n                    if (input.value.length < 1 || input.value.match(/[^0-9\\+]/)) {\r\n                        showUncorrectInput(input)\r\n                        showSubmitStatus(notValidText)\r\n                        phoneInput = false\r\n                    }\r\n                }\r\n            })\r\n            let success = nameInput && phoneInput\r\n\r\n            return success\r\n        }\r\n\r\n        const sendData = (data) => {\r\n            console.log(data);\r\n            return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n                method: 'POST',\r\n                body: JSON.stringify(data),\r\n                headers: {\r\n                    \"Content-Type\": \"aplication/json\"\r\n                }\r\n            }).then(res => res.json())\r\n        }\r\n\r\n        const submitData = () => {\r\n            const formElements = form.querySelectorAll('input[type = text]')\r\n            const formData = new FormData(form)\r\n            const formBody = {}\r\n\r\n            showSubmitStatus(loadText)\r\n\r\n            formData.forEach((val, key) => {\r\n                formBody[key] = val;\r\n            })\r\n\r\n            if (document.getElementById('calc-total')) {\r\n                const element = document.getElementById('calc-total')\r\n\r\n                if (element.attributes[4].nodeValue !== 'Итого') {\r\n                    formBody['calc-total'] = element.attributes[4].nodeValue\r\n                }\r\n            }\r\n\r\n            if (validate(formElements)) {\r\n                sendData(formBody)\r\n                    .then(data => {\r\n                        showSubmitStatus(successText)\r\n\r\n                        setTimeout(() => {\r\n                            statusBlock.remove()\r\n                        }, 5000)\r\n                        formElements.forEach(input => {\r\n                            input.value = ''\r\n                        })\r\n                    })\r\n                    .catch(error => {\r\n                        console.log(error);\r\n                        successText(errorText)\r\n                    })\r\n            } else {\r\n                console.log('данные не валидны');\r\n            }\r\n        }\r\n\r\n        try {\r\n            if (!form) {\r\n                throw new Error('верните форму')\r\n            }\r\n\r\n            form.addEventListener('submit', (e) => {\r\n                e.preventDefault();\r\n                submitData()\r\n            })\r\n        } catch (error) {\r\n            console.log(error.message);\r\n        }\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = () => {\r\n\r\n    const slides = document.querySelectorAll('.service-block');\r\n    const arrows = document.querySelector('.services-arrows');\r\n    const sliderBlock = document.querySelector('#services')\r\n\r\n    let currentSlide = 0;\r\n    let interval;\r\n    let timeInterval = 3000;\r\n\r\n    const checkCorrectCurrent = (num = 1) => {\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - num\r\n        }\r\n\r\n    }\r\n\r\n    const changeSlide = (elems, index) => {\r\n        if (window.screen.width < 576) {\r\n            elems[index].classList.toggle('slide-active');\r\n        } else {\r\n            elems[index].classList.toggle('slide-active');\r\n            elems[(index + 1)].classList.toggle('slide-active');\r\n        }\r\n\r\n    }\r\n\r\n    const changeCurrent = (direction) => {\r\n        if (direction === 'perv') {\r\n            if (window.screen.width < 576) {\r\n                currentSlide--;\r\n            } else {\r\n                currentSlide -= 2;\r\n                checkCorrectCurrent(2)\r\n            }\r\n        } else {\r\n            if (window.screen.width < 576) {\r\n                currentSlide++;\r\n            } else {\r\n                currentSlide += 2;\r\n            }\r\n        }\r\n        checkCorrectCurrent()\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        changeSlide(slides, currentSlide);\r\n\r\n        changeCurrent()\r\n\r\n        changeSlide(slides, currentSlide);\r\n    }\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer)\r\n    }\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    }\r\n\r\n    const init = () => {\r\n        slides.forEach((slide, index) => {\r\n\r\n\r\n        })\r\n        if (window.screen.width < 576) {\r\n            slides[0].classList.add('slide-active')\r\n        } else {\r\n            slides[0].classList.add('slide-active')\r\n            slides[1].classList.add('slide-active')\r\n        }\r\n\r\n        startSlide(timeInterval)\r\n    }\r\n\r\n    arrows.addEventListener('click', (e) => {\r\n\r\n        changeSlide(slides, currentSlide);\r\n\r\n        if (e.target.closest('.services__arrow--right')) {\r\n            changeCurrent()\r\n        } else if (e.target.closest('.services__arrow--left')) {\r\n            changeCurrent('perv')\r\n        }\r\n\r\n        changeSlide(slides, currentSlide);\r\n    })\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n\r\n        if (e.target.matches('.slide-active') || e.target.matches('.services__arrow')) stopSlide(timeInterval);\r\n\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n\r\n        if (e.target.matches('.slide-active') || e.target.matches('.services__arrow')) startSlide(timeInterval);\r\n\r\n    }, true)\r\n\r\n    init()\r\n\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n    const timerDays = document.querySelectorAll('.count_1>span');\r\n    const timerHours = document.querySelectorAll('.count_2>span');\r\n    const timerMinutes = document.querySelectorAll('.count_3>span');\r\n    const timerSeconds = document.querySelectorAll('.count_4>span');\r\n\r\n    const getTimerRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n\r\n        let timeRemaning = (dateStop - dateNow) / 1000;\r\n        let seconds = Math.floor(timeRemaning % 60);\r\n        let minutes = Math.floor((timeRemaning / 60) % 60);\r\n        let hours = Math.floor(((timeRemaning / 60) / 60) % 60);\r\n        let days = Math.floor(((timeRemaning / 60) / 60) / 24);\r\n\r\n        return { timeRemaning, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const addZero = (number) => {\r\n        return number < 10 ? `0${number}` : number;\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimerRemaining();\r\n\r\n        if (getTime.timeRemaning > 0) {\r\n            timerHours.forEach((item) => {\r\n                item.textContent = addZero(getTime.hours)\r\n            })\r\n            timerMinutes.forEach((item) => {\r\n                item.textContent = addZero(getTime.minutes)\r\n            })\r\n            timerSeconds.forEach((item) => {\r\n                item.textContent = addZero(getTime.seconds)\r\n            })\r\n            timerDays.forEach((item) => {\r\n                item.textContent = addZero(getTime.days)\r\n            })\r\n\r\n        }\r\n    }\r\n\r\n    if (getTimerRemaining().timeRemaning > 0) {\r\n        updateClock();\r\n        setInterval(updateClock, 1000, deadline)\r\n    } else {\r\n        timerHours.forEach((item) => {\r\n            item.textContent = '00'\r\n        })\r\n        timerMinutes.forEach((item) => {\r\n            item.textContent = '00'\r\n        })\r\n        timerSeconds.forEach((item) => {\r\n            item.textContent = '00'\r\n        })\r\n        timerDays.forEach((item) => {\r\n            item.textContent = '00'\r\n        })\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validation\": () => (/* binding */ validation)\n/* harmony export */ });\nconst validation = () => {\r\n\r\n    const checkConditionsValidation = (e) => {\r\n        if (e.target.matches('input[name=fio]')) {\r\n            e.target.value = e.target.value.replace(/[^а-яА-яa-zA-Z\\s]/, \"\");\r\n\r\n        }\r\n        else if (e.target.matches('input[name = phone]')) {\r\n            e.target.value = e.target.value.replace(/[^0-9\\+]/, \"\");\r\n            if (e.target.value.length >= 16) {\r\n                e.target.value = e.target.value.slice(0, 16)\r\n            }\r\n        }\r\n    }\r\n\r\n    document.body.addEventListener('input', (e) => {\r\n        checkConditionsValidation(e);\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;