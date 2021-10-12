const nowPassword = document.getElementById('nowPassword');
const setPassword = document.getElementById('setPassword');

let password = 'aaaaa';
nowPassword.textContent = `現在のパスワードは ${password}`;

setPassword.addEventListener('click', function () {
    const confirmPassword = document.getElementById('confirmPassword').value;
    const newPassword = document.getElementById('newPassword').value;

    if (password !== confirmPassword) {
        alert('古いパスワードが間違っています！');
    } else if (password === newPassword) {
        alert('同じパスワードはつかえません！');
        // } else if (newPassword.length < 8) {
        //     alert('8文字以上にしてください。');
        // } else if (!/^\d{3}-\d{4}$/.test(newPassword)) {
        //     alert('xxx-yyyyの形式で入力してください');
        // } else if (/(.)\1+/.test(newPassword)) {
        //     alert('同じ文字を連続してはつかえません！');
    } else if (/abc/.test(newPassword)) {
        alert('ルールに反しているものはつかえません！');
    } else {
        password = newPassword;
        alert(`新しいパスワードは${password}です`);
        nowPassword.textContent = `現在のパスワードは ${password}`;
    }
});