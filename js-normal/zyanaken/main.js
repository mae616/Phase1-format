// const gameStart = document.getElementById('gameStart');
// const cpHand = document.getElementById('cpHand');
// const log = document.getElementById('log');

// ary = ['グー', 'チョキ', 'パー'];

// cpHand.textContent = '相手の手：'
// log.textContent = '結果：';
// gameStart.addEventListener('click', function () {
//     const myHand = parseInt(document.getElementById('myHand').value);

//     const cpHandNum = Math.floor(Math.random() * 3);
//     cpHand.textContent = `相手の手：${ary[cpHandNum]}`;
//     if (myHand === cpHandNum) {
//         log.textContent = '結果：引き分け';
//     } else if ((myHand + 1) % 3 === cpHandNum) {
//         log.textContent = '結果：勝ち';
//     } else {
//         log.textContent = '結果：負け';
//     }
// });

const setHand = document.getElementById('setHand');
const gameStart = document.getElementById('gameStart');
const log = document.getElementById('log');
const player = document.getElementById('player');
const player1Hand = document.getElementById('player1Hand');
const player2Hand = document.getElementById('player2Hand');

let player1Num = null;
let player2Num = null;
let isPlayer1 = true;

log.textContent = '結果：';
setHand.addEventListener('click', function () {
    const playerHand = parseInt(document.getElementById('playerHand').value);

    if (isPlayer1) {
        player1Num = playerHand;
        player.textContent = 'player2';
        player1Hand.textContent = 'player1:セット完了';
        isPlayer1 = false;
    } else {
        player2Num = playerHand;
        player.textContent = '両者セット完了';
        player2Hand.textContent = 'player2:セット完了';
    }

});

gameStart.addEventListener('click', function () {
    if (player1Num === null || player2Num === null) {
        alert('2回以上押さないでください。');
        return;
    }

    if (player1Num === player2Num) {
        log.textContent = '結果：引き分け';
    } else if ((player1Num + 1) % 3 === player2Num) {
        log.textContent = '結果：Player1の勝ち';
    } else {
        log.textContent = '結果：Player2の勝ち';
    }

    player1Num = null;
    player2Num = null;
    isPlayer1 = true;
    player.textContent = 'player1';
    player1Hand.textContent = 'player1:';
    player2Hand.textContent = 'player2:';
});