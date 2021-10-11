const sampleForm = document.getElementById('sampleForm');
const textCounter = document.getElementById('textCounter');
const resetBtn = document.getElementById('resetBtn');
const iniDel = document.getElementById('iniDel');
const endDel = document.getElementById('endDel');

const MAX_LENGTH = 400;
let lenght = 0;

textCounter.textContent = `あと ${MAX_LENGTH} 文字`;

sampleForm.addEventListener('keyup', function (e) {
    lenght = e.target.value.length;
    textCounter.textContent = `あと ${MAX_LENGTH - lenght} 文字`;
});

resetBtn.addEventListener('click', function () {
    sampleForm.value = '';
    textCounter.textContent = `あと ${MAX_LENGTH} 文字`;
});

iniDel.addEventListener('click', function () {
    sampleForm.value = sampleForm.value.slice(1);
    lenght = sampleForm.value.length;
    textCounter.textContent = `あと ${MAX_LENGTH - lenght} 文字`;
});

endDel.addEventListener('click', function () {
    sampleForm.value = sampleForm.value.slice(0, -1);
    lenght = sampleForm.value.length;
    textCounter.textContent = `あと ${MAX_LENGTH - lenght} 文字`;
});