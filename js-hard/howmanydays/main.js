// // ドラえもんの誕生日
// const doraBirthday = moment('2112-09-03 12:00');    // 12:00は演習のデモと同じにするため

// const p = document.createElement('p');
// document.body.appendChild(p);

// setInterval(() => {
//     const diff = doraBirthday.diff(moment());
//     const duration = moment.duration(diff).locale('ja');

//     p.textContent = 'ドラえもんが生まれるまで後'
//         + Math.trunc(duration.asDays()) + '日'
//         + duration.hours() + '時間'
//         + duration.minutes() + '分'
//         + duration.seconds() + '秒';
// }, 1000);


const dateSet = document.getElementById('dateSet');
const dateSearchBtn = document.getElementById('dateSearch');
const diffTime = document.getElementById('diffTime');

let timerId = null;
dateSearchBtn.addEventListener('click', () => {
    const dateSetValue = dateSet.value;
    const dateSetMoment = moment(dateSetValue);

    clearInterval(timerId);
    timerId = setInterval(() => {
        const diff = dateSetMoment.diff(moment());
        const duration = moment.duration(diff).locale('ja');

        diffTime.textContent = dateSetValue + 'まで後'
            + Math.trunc(duration.asDays()) + '日'
            + duration.hours() + '時間'
            + duration.minutes() + '分'
            + duration.seconds() + '秒';
    }, 1000);
});

dateSet.addEventListener('change', () => {
    if (timerId) {
        const dateSetValue = dateSet.value;
        const dateSetMoment = moment(dateSetValue);

        clearInterval(timerId);
        timerId = setInterval(() => {
            const diff = dateSetMoment.diff(moment());
            const duration = moment.duration(diff).locale('ja');

            diffTime.textContent = dateSetValue + 'まで後'
                + Math.trunc(duration.asDays()) + '日'
                + duration.hours() + '時間'
                + duration.minutes() + '分'
                + duration.seconds() + '秒';
        }, 1000);
    }
});

