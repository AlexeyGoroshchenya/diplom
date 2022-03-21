export const validation = () => {

    const checkConditionsValidation = (e) => {
        if (e.target.matches('input[name=fio]')) {
            e.target.value = e.target.value.replace(/[^а-яА-яa-zA-Z\s]/, "");

        }
        else if (e.target.matches('input[name = phone]')) {
            e.target.value = e.target.value.replace(/[^0-9\+]/, "");
            if (e.target.value.length >= 16) {
                e.target.value = e.target.value.slice(0, 16)
            }
        }
    }

    document.body.addEventListener('input', (e) => {
        checkConditionsValidation(e);
    })

}