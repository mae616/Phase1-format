let isRolledPlayer1 = false;  // サイコロ実行済み
let isRolledPlayer2 = false;  // サイコロ実行済み

// result
const result = document.getElementById('result');
const defaultResult = '???';

// img
const dicePlayer1 = document.getElementById('setPlayer1dice');
const dicePlayer2 = document.getElementById('setPlayer2dice');

let diceNumPlayer1 = 1;
dicePlayer1.setAttribute('src', `./img/saikoro${diceNumPlayer1}.png`);
let diceNumPlayer2 = 1;
dicePlayer2.setAttribute('src', `./img/saikoro${diceNumPlayer2}.png`);

// ボタン
const btnPlayer1 = document.getElementById('player1Btn');
const btnPlayer2 = document.getElementById('player2Btn');

btnPlayer1.addEventListener('click', function () {
    btnPlayer1.disabled = true;
    result.textContent = defaultResult;

    let timer = setInterval(function () {
        diceNumPlayer1 = random(dicePlayer1)
    }, 100);

    setTimeout(() => {
        clearInterval(timer);

        isRolledPlayer1 = true;
        if (isRolledPlayer1 && isRolledPlayer2) {
            displayResult();
        }
    }, 3000)
});

btnPlayer2.addEventListener('click', function () {
    btnPlayer2.disabled = true;
    result.textContent = defaultResult;

    let timer = setInterval(function () {
        diceNumPlayer2 = random(dicePlayer2)
    }, 100);

    setTimeout(() => {
        clearInterval(timer);

        isRolledPlayer2 = true;
        if (isRolledPlayer1 && isRolledPlayer2) {
            displayResult();
        }
    }, 3000)
});

const random = function (imgElement) {
    const diceNum = Math.floor(Math.random() * 6 + 1);
    imgElement.setAttribute('src', `./img/saikoro${diceNum}.png`);
    return diceNum;
};

function displayResult() {
    if (diceNumPlayer1 > diceNumPlayer2) {
        result.textContent = 'player1の勝利';
    } else if (diceNumPlayer1 < diceNumPlayer2) {
        result.textContent = 'player2の勝利';
    } else {
        result.textContent = '引き分け';
    }

    isRolledPlayer1 = false;
    isRolledPlayer2 = false;
    btnPlayer1.disabled = false;
    btnPlayer2.disabled = false;
}
