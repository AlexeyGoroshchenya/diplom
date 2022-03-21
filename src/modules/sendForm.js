export const sendForm = (formClass) => {

    const forms = document.querySelectorAll(formClass)

    forms.forEach((form) => {
        const statusBlock = document.createElement('div');
        const errorText = 'Что-то пошло не так...';
        const loadText = 'Заявка отправляется...';
        const successText = 'С вами свяжется наш менеджер';
        const notValidText = 'Пожалуйста проверьте введенные данные'

        const showSubmitStatus = (str) => {
            statusBlock.style.textAlign = 'center'

            if (str === loadText || str === successText) {
                statusBlock.style.color = 'green'
            } else if (str === errorText || str === notValidText) {
                statusBlock.style.color = 'red'
            }
            form.append(statusBlock)
            statusBlock.textContent = str
        }

        const showUncorrectInput = (input) => {
            input.style.border = '2px solid red'

            setTimeout(() => {
                input.style.border = ''
            }, 3000)
        }

        const validate = (list) => {

            let nameInput = true
            let phoneInput = true

            list.forEach(input => {

                if (input.matches('input[name=fio]')) {
                    if (input.value.match(/[^а-яА-яa-zA-Z\s]/) || input.value.length < 1) {
                        showUncorrectInput(input)
                        showSubmitStatus(notValidText)
                        nameInput = false
                    }
                }
                if (input.matches('input[name = phone]')) {
                    if (input.value.length < 1 || input.value.match(/[^0-9\+]/)) {
                        showUncorrectInput(input)
                        showSubmitStatus(notValidText)
                        phoneInput = false
                    }
                }
            })
            let success = nameInput && phoneInput

            return success
        }

        const sendData = (data) => {
            console.log(data);
            return fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "aplication/json"
                }
            }).then(res => res.json())
        }

        const submitData = () => {
            const formElements = form.querySelectorAll('input[type = text]')
            const formData = new FormData(form)
            const formBody = {}

            showSubmitStatus(loadText)

            formData.forEach((val, key) => {
                formBody[key] = val;
            })

            if (document.getElementById('calc-total')) {
                const element = document.getElementById('calc-total')

                if (element.attributes[4].nodeValue !== 'Итого') {
                    formBody['calc-total'] = element.attributes[4].nodeValue
                }
            }

            if (validate(formElements)) {
                sendData(formBody)
                    .then(data => {
                        showSubmitStatus(successText)

                        setTimeout(() => {
                            statusBlock.remove()
                        }, 5000)
                        formElements.forEach(input => {
                            input.value = ''
                        })
                    })
                    .catch(error => {
                        console.log(error);
                        successText(errorText)
                    })
            } else {
                console.log('данные не валидны');
            }
        }

        try {
            if (!form) {
                throw new Error('верните форму')
            }

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                submitData()
            })
        } catch (error) {
            console.log(error.message);
        }
    })

}