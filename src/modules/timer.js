export const timer = (deadline) => {

    const timerDays = document.querySelectorAll('.count_1>span');
    const timerHours = document.querySelectorAll('.count_2>span');
    const timerMinutes = document.querySelectorAll('.count_3>span');
    const timerSeconds = document.querySelectorAll('.count_4>span');

    const getTimerRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();

        let timeRemaning = (dateStop - dateNow) / 1000;
        let seconds = Math.floor(timeRemaning % 60);
        let minutes = Math.floor((timeRemaning / 60) % 60);
        let hours = Math.floor(((timeRemaning / 60) / 60) % 60);
        let days = Math.floor(((timeRemaning / 60) / 60) / 24);

        return { timeRemaning, days, hours, minutes, seconds }
    }

    const addZero = (number) => {
        return number < 10 ? `0${number}` : number;
    }

    const updateClock = () => {
        let getTime = getTimerRemaining();

        if (getTime.timeRemaning > 0) {
            timerHours.forEach((item) => {
                item.textContent = addZero(getTime.hours)
            })
            timerMinutes.forEach((item) => {
                item.textContent = addZero(getTime.minutes)
            })
            timerSeconds.forEach((item) => {
                item.textContent = addZero(getTime.seconds)
            })
            timerDays.forEach((item) => {
                item.textContent = addZero(getTime.days)
            })

        }
    }

    if (getTimerRemaining().timeRemaning > 0) {
        updateClock();
        setInterval(updateClock, 1000, deadline)
    } else {
        timerHours.forEach((item) => {
            item.textContent = '00'
        })
        timerMinutes.forEach((item) => {
            item.textContent = '00'
        })
        timerSeconds.forEach((item) => {
            item.textContent = '00'
        })
        timerDays.forEach((item) => {
            item.textContent = '00'
        })
    }

}
