export const burger = () => {

    const burgerMenu = document.querySelector('#navbar-collapse');

    document.querySelector('#navigation').addEventListener('click', (e) => {
        if (e.target.matches('.navbar-toggle') || e.target.closest('.navbar-toggle')) {
            burgerMenu.classList.toggle('collapse');
        }
    })
}