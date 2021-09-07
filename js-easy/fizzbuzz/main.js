let i = 0

const showNum = document.getElementById('showNum')
showNum.textContent = i

// fizzBuzzの正解の値
function correctFizzbBuzz() {

    i++

    const isFizz = i % 3 === 0    // 3の倍数
    const isBuzz = i % 5 === 0    // 5の倍数

    // fizz、buzz、fizzbuzz以外の場合
    let fizzBuzzTxt = i

    // 3と5の公倍数
    if (isFizz && isBuzz) {
        fizzBuzzTxt = 'fizzbuzz'

    } else if (isFizz) {
        fizzBuzzTxt = 'fizz'

    } else if (isBuzz) {
        fizzBuzzTxt = 'buzz'
    }

    return fizzBuzzTxt
}

function answerFizzbBuzz(correct) {
    return isNaN(correct) ? correct : 'number'
}


function commonButtonClick(response) {

    const fizzBuzzTxt = correctFizzbBuzz()

    if (response === answerFizzbBuzz(fizzBuzzTxt)) {
        showNum.textContent = fizzBuzzTxt
    } else {
        alert('ちがいます')
        location.reload();
    }

}

function fizzBtn() {
    commonButtonClick('fizz')
}

function buzzBtn() {
    commonButtonClick('buzz')
}

function fizzbuzzBtn() {
    commonButtonClick('fizzbuzz')
}

function numBtn() {
    commonButtonClick('number')
}