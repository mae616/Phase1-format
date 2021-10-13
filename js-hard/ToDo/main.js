const addTaskBtn = document.getElementsByClassName('add-btn');

addTaskBtn[0].addEventListener('click', () => {
    const todoArea = document.getElementById('todo');
    const addTaskText = document.getElementById('add-area');

    if (addTaskText.value.length === 0) {
        alert('空欄です！');
        return;
    }

    // タスクの追加
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = addTaskText.value;
    li.appendChild(p);

    const finishBtn = document.createElement('button');
    finishBtn.textContent = '完了';
    // イベントリスナーの登録
    finishBtn.addEventListener('click', function finishTask(e) {
        // イベントリスナーの削除
        e.target.removeEventListener('click', finishTask);
        // タスクの削除
        const removeChild = e.target.parentNode;
        const parentNode = removeChild.parentNode;

        parentNode.removeChild(removeChild);
    });
    li.appendChild(finishBtn);

    todoArea.appendChild(li);
    addTaskText.value = '';
});