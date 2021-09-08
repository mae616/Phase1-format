const setBtn = function () {

    const word1 = 'ぺっぺぺー';
    const word2 = '斎藤さんだぞ！';

    if (Math.floor(Math.random() * 10) < 5) {
        confirm(word1) ?
            alert(word1) : alert(word2);

    } else {
        confirm(word2) ?
            alert(word2) : alert(word1);
    }
}