const ary = [
    { img: './img/slide1.png', btnValue: '春へ' },
    { img: './img/slide2.png', btnValue: '夏へ' },
    { img: './img/slide3.png', btnValue: '秋へ' },
    { img: './img/slide4.png', btnValue: '冬へ' }
];

const pushBtn = document.getElementById('pushBtn');
const seasonNum = document.getElementById('seasonNum');
const skipBtn = document.getElementById('skipBtn');
const viewImg = document.getElementById('viewImg');

let num = 0;

const changSeason = function (num) {
    pushBtn.textContent = ary[num].btnValue;
    viewImg.setAttribute('src', ary[num].img);
};

changSeason(num);

skipBtn.addEventListener('click', function (e) {
    num = parseInt(seasonNum.value);
    changSeason(num);
});

pushBtn.addEventListener('click', function () {
    num = ++num % ary.length;
    changSeason(num);

})