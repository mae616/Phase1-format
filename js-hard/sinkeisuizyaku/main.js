'use strict';

const panel = document.getElementById('panel');

const PAIR_CARD_NUM = 2; // 揃ったとする同じ数字の数
const SUM_CARD_NUM = 8; // カードの合計枚数

if (SUM_CARD_NUM % PAIR_CARD_NUM !== 0) {
    throw new Error('プログラムエラー：カードの合計枚数がペアとなる枚数で割り切れません！');
}

// カードの値の配列を作成
const cards = new Array(SUM_CARD_NUM).fill().map((_, index) => Math.floor(index / PAIR_CARD_NUM) + 1);

// シャッフル
const shuffle = aryCards => {
    const picked = new Array(aryCards.length);
    picked.fill(false);
    let remainingCardsNum = aryCards.length;    // シャッフルしてない枚数
    const shuffled = [];
    while (remainingCardsNum > 0) {

        let count = 0;
        const random = Math.floor(Math.random() * remainingCardsNum);

        // peickedの値がfalseだけの分で先頭から数えて(乱数)番目の添え字を取得する
        const index = picked.findIndex(element => !element && count++ === random);
        picked[index] = true;

        shuffled.push(aryCards[index]);
        remainingCardsNum--;
    }
    return shuffled;
};


const shuffledCards = shuffle(cards);

// カードのdiv要素を作成
let choiceNums = [];    // カードを選択した値の配列
let choiceIds = [];    // カードを選択したIDの配列
let countDownCard = SUM_CARD_NUM;

const finishCards = choiceIds => {
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
};

const backCards = choiceIds => {
    choiceIds.forEach(element => {
        const div = document.getElementById(element);
        div.textContent = '';
        div.classList.add('back');
    });
};

shuffledCards.forEach((_, index) => {
    const div = document.createElement('div');
    div.classList.add('card', 'back');
    div.setAttribute('id', index);

    div.addEventListener('click', e => {
        const index = parseInt(e.target.id);
        e.target.classList.remove('back');
        e.target.textContent = shuffledCards[index];
        choiceNums.push(shuffledCards[index]);
        choiceIds.push(index);

        if (choiceNums.length === PAIR_CARD_NUM) {
            setTimeout(() => {
                if (choiceNums.every((element, _, arr) => element === arr[0])) {
                    finishCards(choiceIds);
                } else {
                    backCards(choiceIds);
                }
                choiceNums = [];
                choiceIds = [];
            }, 500);
        }
    });

    panel.appendChild(div);
})

