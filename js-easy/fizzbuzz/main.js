for (let i = 1; i <= 20; i++) {

    const isFizz = i % 3 === 0    // 3の倍数
    const isBuzz = i % 5 === 0    // 5の倍数

    // 3と5の公倍数
    if (isFizz && isBuzz) {
        console.log('fizzbuzz')

    } else if (isFizz) {
        console.log('fizz')

    } else if (isBuzz) {
        console.log('buss')

    } else {
        console.log(i)
    }

}