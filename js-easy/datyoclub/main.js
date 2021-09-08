let count = 0;

const cntUp = function () {
    count++;
    console.log(count);
}

const reply = function () {
    const msgTxt = 'どうぞどうぞ';
    alert(msgTxt.repeat(count));
    count = 0;
}