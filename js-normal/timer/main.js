const inputTime = document.getElementById('inputTime');
const setTime = document.getElementById('setTime');
const startTimer = document.getElementById('startTimer');
const stopTimer = document.getElementById('stopTimer');
const nowTime = document.getElementById('nowTime');

startTimer.disabled = true;
stopTimer.disabled = true;

let sec;
let timerId;

const toTimeStirng = function (sec) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec - h * 3600) / 60);
    const s = sec % 60;
    return h + '時' + m + '分' + s + '秒';
}

setTime.addEventListener('click', function () {
    sec = inputTime.value;
    nowTime.textContent = `${toTimeStirng(sec)}：セット完了です`;

    startTimer.disabled = false;    // 活性
    stopTimer.disabled = true;
});

startTimer.addEventListener('click', function () {
    if (isNaN(sec) || sec <= 0) {
        confirmInputTime = 10;
    }
    clearInterval(timerId);
    timerId = setInterval(function () {
        sec--;
        if (sec === 0) {
            alert('終了')
            clearInterval(timerId);
            setTime.disabled = false;    // 活性
            startTimer.disabled = true;
            stopTimer.disabled = true;
        }
        nowTime.textContent = toTimeStirng(sec);
    }, 1000);

    setTime.disabled = true;
    startTimer.disabled = true;
    stopTimer.disabled = false; // 活性
});

stopTimer.addEventListener('click', function () {
    clearInterval(timerId);
    nowTime.textContent = `${toTimeStirng(sec)}：ストップしました`;

    setTime.disabled = false;    // 活性
    startTimer.disabled = false;    // 活性
    stopTimer.disabled = true;
});


