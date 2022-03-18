export const blockBody = () => {
    function calcScroll() {
        let scrollWidth = 0;
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        if (scrollHeight > document.documentElement.clientHeight) {
            let div = document.createElement('div');
            div.style.width = '500px';
            div.style.height = '500px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
            document.body.appendChild(div);
            scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
        }
        return scrollWidth;
    }
    document.body.style.marginRight = `${calcScroll()}px`;
    document.body.style.overflow = 'hidden'

}

export const unblockBody = () => {
    document.body.style.overflow = 'auto';
    document.body.style.marginRight = '0'

}