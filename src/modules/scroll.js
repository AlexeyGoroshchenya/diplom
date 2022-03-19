export const scroll = () => {

    const btnScrollUp = document.querySelector('.smooth-scroll')
    const borderBtnLine = (document.querySelector('#offer').offsetHeight +
        document.querySelector('#offer').offsetTop) - 50;

    const moveBtn = (str) => {
        btnScrollUp.style.transitionDuration = '0.5s'
        if (str === 'hide') {
            btnScrollUp.style.transform = 'translateX(200%)';
        } else if (str === 'show') {
            btnScrollUp.style.transform = 'translateX(0%)';
        }
    }

    const init = () => {
        btnScrollUp.style.transform = 'translateX(200%)';

        window.addEventListener('scroll', function () {

            if (scrollY >= borderBtnLine) {
                moveBtn('show')
            } else {
                moveBtn('hide')
            }
        });

        btnScrollUp.addEventListener('click', (event) => {
            event.preventDefault();

            const goUp = document.getElementById('header');
            goUp.scrollIntoView({ block: "start", behavior: "smooth" });
        })
    }

    init()


}