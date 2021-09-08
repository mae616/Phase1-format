let count = 0;

const cntUp = function () {
    count++;
}

const reply = function () {
    const action = Array(1 * count + 1).join('どうぞどうぞ');
    alert(action);
    count = 0;
}
