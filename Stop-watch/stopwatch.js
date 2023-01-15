let mins = 00;
let seconds = 00;
let tens = 00;

const getmins = document.querySelector('.mins');
const getseconds = document.querySelector('.seconds');
const gettens = document.querySelector('.tens');
const start_btn = document.querySelector('.start-btn');
const stop_btn = document.querySelector('.stop-btn');
const reset_btn = document.querySelector('.reset-btn');

let Timer;


start_btn.addEventListener('click', () => {
    clearInterval(Timer);
    Timer = setInterval(startTimer, 10);
})

stop_btn.addEventListener("click", () => {
    clearInterval(Timer);
})

reset_btn.addEventListener('click', () => {
    clearInterval(Timer);

    tens = '00';
    seconds = '00';
    mins = '00';

    getmins.innerHTML = mins;
    getseconds.innerHTML = seconds;
    gettens.innerHTML = tens;

})

function startTimer() {
    tens++;
    if (tens <= 9) {
        gettens.innerHTML = '0' + tens;
    }

    if (tens > 9) {
        gettens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        getseconds.innerHTML = '0' + seconds;
        tens = 0;
        gettens.innerHTML = '0' + 0;
    }

    if (seconds > 9) {
        getseconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        mins++;
        getmins.innerHTML = '0' + mins;
        seconds = 0;
        getseconds.innerHTML = '0' + 0;

    }

    if (mins > 9) {
        getmins.innerHTML = mins;


    }
}

