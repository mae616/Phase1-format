const setBtn = document.getElementById('setBtn');
const resetBtn = document.getElementById('resetBtn');
const showImg = document.getElementById('showImg');


const getEvolutionImgNum = function () {
    const randomNum = Math.floor(Math.random() * 10);

    let imgNum;
    if (randomNum >= 0 && randomNum <= 3) {
        imgNum = 1;
    } else if (randomNum >= 4 && randomNum <= 6) {
        imgNum = 2;
    } else if (randomNum >= 7 && randomNum <= 8) {
        imgNum = 3;
    } else {
        imgNum = 4;
    }
    return imgNum;
};

const getEvolutionAltText = function (num) {
    const altText = ['原人', '旧人', '新人', '現代人'];
    return altText[num - 1];
};

setBtn.addEventListener('click', function () {
    showImg.innerHTML = '';

    const imgNum = getEvolutionImgNum();



    for (let i = 1; i <= imgNum; i++) {
        const div = document.createElement('div');

        const img = document.createElement('img');
        img.setAttribute('src', `./img/evolution${i}.png`);
        img.setAttribute('alt', getEvolutionAltText(i));

        const p = document.createElement('p');
        p.textContent = getEvolutionAltText(i);

        div.appendChild(img);
        div.appendChild(p);
        showImg.appendChild(div);
    }
});

resetBtn.addEventListener('click', function () {
    showImg.innerHTML = '';
});