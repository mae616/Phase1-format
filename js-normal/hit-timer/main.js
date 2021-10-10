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

let timerId;
let startDate;
let countTime;
startTimer2.addEventListener('click', function () {
    startDate = new Date();
    timerId = setInterval(function () {
        console.log("★ " + timerId);
        console.log("start " + startDate);
        countTime = getProgressSeconds(startDate);
        if (countTime === 40) {
            confirm(`時間オーバー...再挑戦してください`);
            console.log("☆" + timerId);
            clearInterval(timerId);
            startDate = null;
        }
    }, 1000);
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
        console.log("◎" + timerId);
        clearInterval(timerId);
        startDate = null;
    } else {
        alert('スタートしてください');
    }
});

function getProgressSeconds(startDate) {

    return Math.floor((new Date().getTime() - startDate.getTime()) / 1000);
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
//     diffTime = Math.floor((checkTime.getTime() - startTime.getTime()) / 1000);
//     if (diffTime === 40) {
//         alert("終了/また挑戦しろ");
//     }
// };