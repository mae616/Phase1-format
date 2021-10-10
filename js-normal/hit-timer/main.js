// const startTimer = document.getElementById('startTimer');
// const confirmTime = document.getElementById('confirmTime');

// let timerId;
// let countTime = 0;
// startTimer.addEventListener('click', function () {

//     timerId = setInterval(function () {
//         countTime++;
//         if (countTime === 40) {
//             clearInterval(timerId)
//             confirm(`時間オーバー...再挑戦してください`);
//             countTime = 0;
//         }
//     }, 1000);

// });

// confirmTime.addEventListener('click', function () {
//     clearInterval(timerId)
//     if (countTime === 20) {
//         alert('成功です');
//     } else if (countTime < 20) {
//         alert(`まだ、${countTime}秒...再スタートしてください`);
//     } else {
//         alert(`もう、${countTime}秒...再挑戦してください`);
//     }
//     countTime = 0;
// });


const startTimer2 = document.getElementById('startTimer2');
const confirmTime2 = document.getElementById('confirmTime2');

let timerIds = [];
let currentTimerId;
let startDate;
let countTime;
startTimer2.addEventListener('click', function () {
    startDate = new Date();
    currentTimerId = setInterval(function () {
        console.log("currentTimerId: " + currentTimerId);
        console.log("timerIds: " + timerIds);
        console.log("start " + startDate);
        countTime = getProgressSeconds(startDate);
        if (countTime === 40) {
            confirm(`時間オーバー...再挑戦してください`);
            clearCount(currentTimerId, timerIds, startDate);
        }
    }, 1000);
    timerIds.push(currentTimerId);
});

confirmTime2.addEventListener('click', function () {

    if (startDate) {
        if (countTime === 20) {
            alert('成功です');
        } else if (countTime < 20) {
            alert(`まだ、${countTime}秒...再スタートしてください`);
        } else {
            alert(`もう、${countTime}秒...再挑戦してください`);
        }
        clearCount(currentTimerId, timerIds, startDate);
    } else {
        alert('スタートしてください');
    }
});

function getProgressSeconds(startDate) {

    return Math.floor((new Date().getTime() - startDate.getTime()) / 1000);
}


function clearCount() {

    clearInterval(currentTimerId);
    while (timerIds.length > 0) {
        currentTimerId = timerIds.shift();
        clearInterval(currentTimerId);
    }

    startDate = null;
}


// let timer;

// const confirmTime2 = document.getElementById("confirmTime2");
// const startTimer2 = document.getElementById("startTimer2");

// let startTime;
// let nowTime;
// let diffTime;

// confirmTime2.addEventListener("click", function () {
//     nowTime = new Date();
//     if (startTime === undefined) {
//         return;
//     }
//     if (diffTime === 20) {
//         alert("大正解^-^");
//     } else if (diffTime < 20) {
//         alert(`まだ${diffTime}秒、、、再スタートだ`);
//     } else {
//         alert(`もう${diffTime}秒だ！再挑戦せよ`);
//     }
//     clearInterval(timer);
// });

// startTimer2.addEventListener("click", function () {
//     startTime = new Date();
//     timer = setInterval(countUp2, 1000);
// });

// const countUp2 = function () {
//     let checkTime = new Date();
//     console.log("☆");
//     diffTime = Math.floor((checkTime.getTime() - startTime.getTime()) / 1000);
//     if (diffTime === 40) {
//         alert("終了/また挑戦しろ");
//     }
// };