const nowTime = document.getElementById('nowTime');
const nowTime2 = document.getElementById('nowTime2');
const nowTime3 = document.getElementById('nowTime3');
const startTimer = document.getElementById('startTimer');
const setTime1 = document.getElementById('setTime1');
const setTime2 = document.getElementById('setTime2');
const setTime3 = document.getElementById('setTime3');

let countStop = 0;
const arySlot = [
    { timerId: null, num: 0 },
    { timerId: null, num: 0 },
    { timerId: null, num: 0 }];

nowTime.textContent = arySlot[0].num;
nowTime2.textContent = arySlot[1].num;
nowTime3.textContent = arySlot[2].num;

const slotHit = () => {
    if (countStop === 3) {
        if (arySlot[0].num === arySlot[1].num
            && arySlot[1].num === arySlot[2].num) {
            alert('おめでとう');
        } else {
            alert('再挑戦');
        }
        countStop = 0;
    }
};

startTimer.addEventListener('click', () => {
    for (let i = 0; i < arySlot.length; i++) {
        clearInterval(arySlot[i].timerId);
    }

    arySlot[0].timerId = setInterval(() => {
        arySlot[0].num = ++arySlot[0].num % 10;
        nowTime.textContent = arySlot[0].num;
    }, 100);

    arySlot[1].timerId = setInterval(() => {
        arySlot[1].num = ++arySlot[1].num % 10;
        nowTime2.textContent = arySlot[1].num;
    }, 100);

    arySlot[2].timerId = setInterval(() => {
        arySlot[2].num = ++arySlot[2].num % 10;
        nowTime3.textContent = arySlot[2].num;
    }, 100);

    setTime1.disabled = false;
    setTime2.disabled = false;
    setTime3.disabled = false;
});

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