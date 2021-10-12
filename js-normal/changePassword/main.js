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
    } else if (newPassword.length < 8) {
        alert('8文字以上にしてください。');
    } else {
        password = newPassword;
        alert(`新しいパスワードは${password}です`);
        nowPassword.textContent = `現在のパスワードは ${password}`;
    }
});