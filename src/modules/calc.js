import { animate } from "./helpers";

export const calc = (price = 100) => {

    const calcBlock = document.querySelector('#calc');
    const calcType = document.querySelector('#calc-type');
    const calcTypeMaterial = document.querySelector('#calc-type-material');
    const calcSquare = document.querySelector('#calc-input');
    const total = document.querySelector('#calc-total');

    const showTotal = (value) => {

        animate({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                total.attributes[4].nodeValue = `${parseInt(value * progress)},00 рублей`
            }
        });
    }

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
        const calcSquareValue = +calcSquare.value

        let totalValue = 0;

        if (calcTypeValue && calcTypeMaterialValue && calcSquareValue) {
            totalValue = price * calcTypeValue * calcTypeMaterialValue * calcSquareValue;
            showTotal(totalValue);
        }
    }

    const validation = (e) => {

        e.target.value = e.target.value.replace(/\D/, "");
    }

    document.body.addEventListener('input', (e) => {

        if (e.target === calcSquare) { validation(e) }

        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcTypeMaterial) {
            countCalc()
        }
    })

}