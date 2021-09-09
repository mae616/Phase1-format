// 解答例
const startBtn = document.getElementById('diceBtn');
const body = document.querySelector('body');
const dice = document.createElement('img');
dice.style.width = '100px';
dice.style.height = '100px';

let diceNum = './img/saikoro1.png';
dice.setAttribute('src', diceNum);
body.appendChild(dice);

let count = 0;
let timer_g;

startBtn.addEventListener('click', function () {

    clearInterval(timer_g);
    count = 0;
    let timer = setInterval('random()', 100);

    setTimeout(() => {
        console.log("☆" + timer);
        clearInterval(timer);
    }, 3000);
    console.log("★" + timer);
    timer_g = timer;
});

const random = function () {
    console.log(count++);
    diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
    dice.setAttribute('src', diceNum);
};

// -----------------------------

// clearTimeout
// サイコロイメージをドキュメントに追加
// const diceBtn = document.getElementById('diceBtn');
// const bodyElement = document.querySelector('body');

// const diceImg = document.createElement('img');
// bodyElement.appendChild(diceImg);
// diceImg.style.width = '100px';
// diceImg.style.height = '100px';

// // 初期値
// let diceNum = './img/saikoro1.png';
// diceImg.setAttribute('src', diceNum);

// let timer;
// let timeout;
// let count = 0;
// function randomDice() {
//     console.log(count++);
//     diceNum = `./img/saikoro${Math.floor(Math.random() * 6) + 1}.png`;
//     diceImg.setAttribute('src', diceNum);
// }

// diceBtn.addEventListener('click', () => {
//     clearInterval(timer);
//     clearTimeout(timeout);
//     count = 0;
//     timer = setInterval(randomDice, 100)
//     timeout = setTimeout(function () {
//         clearInterval(timer);
//         count = 0;
//     }, 3000);
// });

// ---------------------
// 自分で書いたフラグ式
// let isRolling = false;  // サイコロ実行中

// // サイコロイメージをドキュメントに追加
// const diceBtn = document.getElementById('diceBtn');
// const bodyElement = document.querySelector('body');

// const diceImg = document.createElement('img');
// bodyElement.appendChild(diceImg);
// diceImg.style.width = '100px';
// diceImg.style.height = '100px';

// // 初期値
// let diceNum = './img/saikoro1.png';
// diceImg.setAttribute('src', diceNum);

// function randomDice() {
//     diceNum = `./img/saikoro${Math.floor(Math.random() * 6) + 1}.png`;
//     diceImg.setAttribute('src', diceNum);
// }

// diceBtn.addEventListener('click', () => {
//     if (!isRolling) {
//         isRolling = true;
//         let timer = setInterval(randomDice, 100)
//         setTimeout(function () {
//             clearInterval(timer);
//             isRolling = false;
//         }, 3000);
//     }
// });