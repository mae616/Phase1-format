let i = 0

const rewriteNum = document.getElementById('rewriteNum')
rewriteNum.textContent = i

function rewriteCntUp() {

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
        fizzBuzzTxt = 'buss'
    }

    rewriteNum.textContent = fizzBuzzTxt
}