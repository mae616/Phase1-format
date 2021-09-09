let isRolling = false;  // サイコロ実行中

// サイコロイメージをドキュメントに追加
const diceBtn = document.getElementById('diceBtn');
const bodyElement = document.querySelector('body');

const diceImg = document.createElement('img');
bodyElement.appendChild(diceImg);
diceImg.style.width = '100px';
diceImg.style.height = '100px';

// 初期値
let diceNum = './img/saikoro1.png';
diceImg.setAttribute('src', diceNum);

function randomDice() {
    diceNum = `./img/saikoro${Math.floor(Math.random() * 6) + 1}.png`;
    diceImg.setAttribute('src', diceNum);
}

diceBtn.addEventListener('click', () => {
    if (!isRolling) {
        isRolling = true;
        let timer = setInterval(randomDice, 100)
        setTimeout(function () {
            clearInterval(timer);
            isRolling = false;
        }, 3000);
    }
});