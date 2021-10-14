const aryNowTime = [
    [
        document.getElementById('nowTime4'),
        document.getElementById('nowTime5'),
        document.getElementById('nowTime6')
    ],
    [
        document.getElementById('nowTime'),
        document.getElementById('nowTime2'),
        document.getElementById('nowTime3')
    ],
    [
        document.getElementById('nowTime7'),
        document.getElementById('nowTime8'),
        document.getElementById('nowTime9')
    ]
];

const startTimer = document.getElementById('startTimer');
const setTime1 = document.getElementById('setTime1');
const setTime2 = document.getElementById('setTime2');
const setTime3 = document.getElementById('setTime3');

let countStop = 0; // ストップを押した回数
const arySlot = [
    { timerId: null, num: 0 },
    { timerId: null, num: 0 },
    { timerId: null, num: 0 }];

// スロットの数値を1つ減らす
const minusSlotNum = middleSlotNum => {
    let num = (middleSlotNum - 1) % 10;
    return num < 0 ? 10 + num : num;
}

// スロットの数値を1つ増やす
const plusSlotNum = middleSlotNum => (middleSlotNum + 1) % 10;

// スロットの数字のセット（縦一列）
const setSlotNum = (col, middleSlotNum) => {
    aryNowTime[0][col].textContent = minusSlotNum(middleSlotNum);
    aryNowTime[1][col].textContent = middleSlotNum;
    aryNowTime[2][col].textContent = plusSlotNum(middleSlotNum);
};

for (let col = 0; col < aryNowTime[1].length; col++) {
    setSlotNum(col, arySlot[col].num);
}

// スタートボタン
startTimer.addEventListener('click', () => {
    // 2回スタートした時の考慮
    for (let i = 0; i < arySlot.length; i++) {
        clearInterval(arySlot[i].timerId);
    }

    // スロットを回す
    arySlot[0].timerId = setInterval(() => {
        arySlot[0].num = ++arySlot[0].num % 10;
        setSlotNum(0, arySlot[0].num);
    }, 1000);

    arySlot[1].timerId = setInterval(() => {
        arySlot[1].num = ++arySlot[1].num % 10;
        setSlotNum(1, arySlot[1].num);
    }, 1000);

    arySlot[2].timerId = setInterval(() => {
        arySlot[2].num = ++arySlot[2].num % 10;
        setSlotNum(2, arySlot[2].num);
    }, 1000);

    setTime1.disabled = false;
    setTime2.disabled = false;
    setTime3.disabled = false;
});

// ストップボタンから呼ばれる関数

// 揃ったか判定部分だけ
const isHit = () => {

    // 横
    if (arySlot[0].num === arySlot[1].num
        && arySlot[1].num === arySlot[2].num) {
        return true;
    }
    // 斜め
    if (arySlot[0].num === minusSlotNum(arySlot[1].num)
        && arySlot[1].num === minusSlotNum(arySlot[2].num)) {
        return true;
    }

    if (arySlot[0].num === plusSlotNum(arySlot[1].num)
        && arySlot[1].num === plusSlotNum(arySlot[2].num)) {
        return true;
    }
    return false;
};

// 揃ったか判定し、メッセージ
const slotHit = () => {
    if (countStop === 3) {
        if (isHit()) {
            alert('おめでとう');
        } else {
            alert('再挑戦');
        }
        countStop = 0;
    }
};

// ストップボタン
setTime1.addEventListener('click', () => {
    countStop++;
    clearInterval(arySlot[0].timerId);
    arySlot[0].timerId = null;
    setTime1.disabled = true;
    slotHit();
});

setTime2.addEventListener('click', () => {
    countStop++;
    clearInterval(arySlot[1].timerId);
    arySlot[1].timerId = null;
    setTime2.disabled = true;
    slotHit();
});

setTime3.addEventListener('click', () => {
    countStop++;
    clearInterval(arySlot[2].timerId);
    arySlot[2].timerId = null;
    setTime3.disabled = true;
    slotHit();
});