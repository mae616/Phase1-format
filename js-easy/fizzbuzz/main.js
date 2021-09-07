let i = 0;

const showNum = document.getElementById('showNum');
showNum.textContent = i;

const fizzBtn = function () {
    i++;

    if (i % 3 === 0) {
        showNum.textContent = 'fizz'
    } else {
        alert('ちがいます')
        location.reload();
    }
}

const buzzBtn = function () {
    i++;

    if (i % 5 === 0) {
        showNum.textContent = 'buzz'
    } else {
        alert('ちがいます')
        location.reload();
    }
}

const fizzbuzzBtn = function () {
    i++;

    if (i % 3 === 0 && i % 5 === 0) {
        showNum.textContent = 'fizzbuzz'
    } else {
        alert('ちがいます')
        location.reload();
    }
}

const numBtn = function () {
    i++;

    if (i % 3 === 0 || i % 5 === 0) {
        alert('ちがいます')
        location.reload();
    } else {
        showNum.textContent = i
    }
}
