const startTimer = document.getElementById('startTimer');
const confirmTime = document.getElementById('confirmTime');

let timerId;
let countTime = 0;
startTimer.addEventListener('click', function () {

    timerId = setInterval(function () {
        countTime++;
        if (countTime === 40) {
            clearInterval(timerId)
            confirm(`時間オーバー...再挑戦してください`);
            countTime = 0;
        }
    }, 1000);

});

confirmTime.addEventListener('click', function () {
    clearInterval(timerId)
    if (countTime === 20) {
        alert('成功です');
    } else if (countTime < 20) {
        alert(`まだ、${countTime}秒...再スタートしてください`);
    } else {
        alert(`もう、${countTime}秒...再挑戦してください`);
    }
    countTime = 0;
});
