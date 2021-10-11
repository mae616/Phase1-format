const inputTime = document.getElementById('inputTime');
const setTime = document.getElementById('setTime');
const startTimer = document.getElementById('startTimer');
const stopTimer = document.getElementById('stopTimer');
const nowTime = document.getElementById('nowTime');

startTimer.disabled = true;
stopTimer.disabled = true;

let confirmInputTime;
let timerId;

setTime.addEventListener('click', function () {
    confirmInputTime = inputTime.value;
    nowTime.textContent = `${confirmInputTime}：セット完了です`;

    startTimer.disabled = false;    // 活性
    stopTimer.disabled = true;
});

startTimer.addEventListener('click', function () {
    if (isNaN(confirmInputTime) || confirmInputTime <= 0) {
        confirmInputTime = 10;
    }
    timerId = setInterval(function () {
        confirmInputTime--;
        if (confirmInputTime === 0) {
            alert('終了')
            clearInterval(timerId);
            setTime.disabled = false;    // 活性
            startTimer.disabled = true;
            stopTimer.disabled = true;
        }
        nowTime.textContent = confirmInputTime;
    }, 1000);

    setTime.disabled = true;
    startTimer.disabled = true;
    stopTimer.disabled = false; // 活性
});

stopTimer.addEventListener('click', function () {
    clearInterval(timerId);
    nowTime.textContent = `${confirmInputTime}：ストップしました`;

    setTime.disabled = false;    // 活性
    startTimer.disabled = false;    // 活性
    stopTimer.disabled = true;
});
