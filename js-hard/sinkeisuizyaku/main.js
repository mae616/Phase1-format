'use strict';

const panel = document.getElementById('panel');
const nextPlayer = document.getElementById('nextPlayer');
const player1Point = document.getElementById('player1Point');
const player2Point = document.getElementById('player2Point');

const PAIR_CARD_NUM = 2; // 揃ったとする同じ数字の数
const SUM_CARD_NUM = 8; // カードの合計枚数


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
const players = [
    { playerName: 'player1', element: player1Point },
    { playerName: 'player2', element: player2Point }
];
const PLAYER_NUM = players.length;   // プレイヤーの数

let choiceNums = [];    // カードを選択した値の配列
let choiceIds = [];    // カードを選択したIDの配列
let countDownCard = SUM_CARD_NUM;   // 残りのカードの枚数
let turn = 0;
const playerPoint = new Array(PLAYER_NUM).fill(0);


// ターンを変える
const changeTurn = turn => ++turn % PLAYER_NUM;

const getNextPlayer = turn => `次は${players[turn].playerName}の番です`;

// 全プレイヤーのポイントを表示する
const displayPoint = () => {
    for (let [playerNum, { playerName, element }] of players.entries()) {
        element.textContent = `${playerName}: ${playerPoint[playerNum]}`;
    }
};

// 初期表示
nextPlayer.textContent = getNextPlayer(turn);
displayPoint(); // プレイヤーのポイントを表示する




// カードのdiv要素を作成
for (let [index, cardValue] of cards.entries()) {
    const div = document.createElement('div');
    div.classList.add('card', 'back');
    div.setAttribute('id', index);

    // イベントリスナー登録
    div.addEventListener('click', function clickFunck(e) {

        // 1回で選択するカードの数を超えた場合の考慮
        if (choiceNums.length === PAIR_CARD_NUM) {
            return;
        }

        const targetIndex = parseInt(e.target.id);
        // 同じカードを2回クリックしたときの考慮
        if (choiceIds.includes(targetIndex)) {
            return;
        }

        // 揃った場合の処理の関数
        const finishCards = () => {
            playerPoint[turn]++;
            displayPoint(); // プレイヤーのポイントを表示する

            setTimeout(() => {
                for (let choiceId of choiceIds) {
                    const div = document.getElementById(choiceId);
                    div.classList.add('finish');
                    div.removeEventListener('click', clickFunck);
                }

                countDownCard -= PAIR_CARD_NUM;
                choiceNums = [];
                choiceIds = [];

                if (countDownCard === 0) {
                    if (!alert('終了です')) {
                        location.reload();
                    }
                }
            }, 500);
        };

        // 揃わなくて裏返しにする処理の関数
        const backCards = () => {
            setTimeout(() => {
                for (let choiceId of choiceIds) {
                    const div = document.getElementById(choiceId);
                    div.textContent = '';
                    div.classList.add('back');
                }

                turn = changeTurn(turn);
                nextPlayer.textContent = getNextPlayer(turn);
                choiceNums = [];
                choiceIds = [];
            }, 500);
        };

        e.target.classList.remove('back');
        e.target.textContent = cardValue;
        choiceNums.push(cardValue);
        choiceIds.push(targetIndex);

        if (choiceNums.length === PAIR_CARD_NUM) {

            // すべて同じ数字か
            if (choiceNums.every((choiceNum, _, arr) => choiceNum === arr[0])) {
                // 揃った場合の処理
                finishCards();
            } else {
                // 揃わなくて裏返しにする処理
                backCards();
            }
        }
    });

    panel.appendChild(div);
}

