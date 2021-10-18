'use strict';

const panel = document.getElementById('panel');
const nextPlayer = document.getElementById('nextPlayer');
const player1Point = document.getElementById('player1Point');
const player2Point = document.getElementById('player2Point');

const PAIR_CARD_NUM = 2; // 揃ったとする同じ数字の数
const SUM_CARD_NUM = 8; // カードの合計枚数
const PLAYER_NUM = 2;   // プレイヤーの数

if (SUM_CARD_NUM % PAIR_CARD_NUM !== 0) {
    throw new Error('プログラムエラー：カードの合計枚数がペアとなる枚数で割り切れません！');
}

// カードの値の配列を作成
const cards = new Array(SUM_CARD_NUM).fill().map((_, index) => Math.floor(index / PAIR_CARD_NUM) + 1);

// シャッフル
const shuffle = aryCards => {
    for (let i = 0; i <= aryCards.length - 2; i++) {
        const random = Math.floor(Math.random() * (aryCards.length - i) + i);
        [aryCards[i], aryCards[random]] = [aryCards[random], aryCards[i]];
    }
};

shuffle(cards);

// カードの表示
let choiceNums = [];    // カードを選択した値の配列
let choiceIds = [];    // カードを選択したIDの配列
let countDownCard = SUM_CARD_NUM;   // 残りのカードの枚数
let turn = 0;
const playerPoint = new Array(PLAYER_NUM).fill(0);

// ターンを変える
const changeTurn = turn => ++turn % PLAYER_NUM;

const getNextPlayer = turn => `次は${turn === 0 ? 'player1' : 'player2'}の番です`;
const getPointPlayer1 = () => `player1: ${playerPoint[0]}`;
const getPointPlayer2 = () => `player2: ${playerPoint[1]}`;

// 初期表示
nextPlayer.textContent = getNextPlayer(turn);
player1Point.textContent = getPointPlayer1();
player2Point.textContent = getPointPlayer2();


// 揃った場合の処理の関数
const finishCards = choiceIds => {
    playerPoint[turn]++;
    player1Point.textContent = getPointPlayer1();
    player2Point.textContent = getPointPlayer2();

    setTimeout(() => {
        choiceIds.forEach(element => {
            const div = document.getElementById(element);
            div.classList.add('finish');
        });

        countDownCard -= PAIR_CARD_NUM;

        if (countDownCard === 0) {
            if (!alert('終了です')) {
                location.reload();
            }
        }
    }, 500);
};

// 揃わなくて裏返しにする処理の関数
const backCards = choiceIds => {
    setTimeout(() => {
        choiceIds.forEach(element => {
            const div = document.getElementById(element);
            div.textContent = '';
            div.classList.add('back');
        });
        turn = changeTurn(turn);
        nextPlayer.textContent = getNextPlayer(turn);
    }, 500);
};

// カードのdiv要素を作成
cards.forEach((element, index) => {
    const div = document.createElement('div');
    div.classList.add('card', 'back');
    div.setAttribute('id', index);

    // イベントリスナー登録
    div.addEventListener('click', e => {
        const index = parseInt(e.target.id);
        e.target.classList.remove('back');
        e.target.textContent = element;
        choiceNums.push(element);
        choiceIds.push(index);

        if (choiceNums.length === PAIR_CARD_NUM) {

            // すべて同じ数字か
            if (choiceNums.every((ele, _, arr) => ele === arr[0])) {
                // 揃った場合の処理
                finishCards(choiceIds);
            } else {
                // 揃わなくて裏返しにする処理
                backCards(choiceIds);
            }
            choiceNums = [];
            choiceIds = [];
        }
    });

    panel.appendChild(div);
});

