const numCheckBtn = document.getElementById('numCheck');
const remainTurn = document.getElementById('remainTurn');

const NUM_LENGTH = 3;           // ゲームの桁数
const MAX_COUNT_ANSWER = 10;    // 答えられる回数

// 同じ文字を2回使用しているかチェック
// 使用している:(true), 使用していない(false)
const checkSameNumber = numToCheck => /(.).*\1/.test(numToCheck);

// 文字列を1文字づつ要素に分割し、数値の配列にする
const convertStringToNumArray = str => str.split('').map(element => parseInt(element));

//EATとBITEを判定し、アラートを表示する。
const showMsg_EatAndBiteText = (CpAnswer, inputAnswer) => {
    // EATとBITEの判定
    let countEat = 0;
    let countBite = 0;
    for (let inputIndex = 0; inputIndex < inputAnswer.length; inputIndex++) {
        const CpIndex = CpAnswer.indexOf(inputAnswer[inputIndex]);
        if (CpIndex < 0) {     // EATでもBITEでもない
            continue;
        } else if (CpIndex === inputIndex) { // EAT
            countEat++;
        } else {  // BITE
            countBite++;
        }
    }

    // アラートの表示
    if (!alert(`${countEat} Eat, ${countBite} BITE`)) {
        // アラートのOKボタンが押されたら
        if (countEat === NUM_LENGTH) {
            if (!alert('正解です！')) {
                location.reload();
            }
        }
    }
};

// CPの数字を決める
let cp;
do {
    cp = '';
    for (let i = 0; i < NUM_LENGTH; i++) {
        cp += Math.floor(Math.random() * 10);
    }
} while (checkSameNumber(cp)); // 同じ数を2回使用していたら、数字を決め直す

// 文字列を配列に変換する
const cpAnswerArray = convertStringToNumArray(cp);

// 回答回数をカウントダウンする
let countDownAnswer = MAX_COUNT_ANSWER;
remainTurn.textContent = `あと残り${countDownAnswer}回です`;

numCheckBtn.addEventListener('click', () => {
    const answerNum = document.getElementById('answerNum');


    // チェック
    if (answerNum.value.length !== NUM_LENGTH) {
        alert(`${NUM_LENGTH}桁の数を入れて下さい`);
        answerNum.value = '';
        return;
    }

    if (checkSameNumber(answerNum.value)) {
        alert('同じ数を2回使ってはいけません');
        answerNum.value = '';
        return;
    }

    countDownAnswer--;

    // 判定
    const inputAnswerArray = convertStringToNumArray(answerNum.value);
    showMsg_EatAndBiteText(cpAnswerArray, inputAnswerArray);

    // 回数制限の表示
    if (countDownAnswer === 0) {
        remainTurn.textContent = `終了です。答えは${cp}でした`;
    } else {
        remainTurn.textContent = `あと残り${countDownAnswer}回です`;
    }

    answerNum.value = '';
});