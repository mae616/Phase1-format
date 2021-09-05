// 真偽値 (if文のより厳密な挙動)

if (true) {
    console.log('条件はtrueです!')
}

const num = Math.random()

// 原則、if文は、条件式がtrueの場合に実行される。
// if (num >= 0.5) {
//     console.log('条件はtrueです!')
// } else {
//     console.log('条件はfalseです!')
// }


// 実行される
// if ('abcde') {
//     console.log('このプログラムは実行される!')
// }

// if (1000) {
//     console.log('このプログラムは実行される!')
// }

// if (-100) {
//     console.log('このプログラムは実行される!')
// }

if ([]) {
    console.log('このプログラムは実行される!')
}

// 実行されない
// if (0) {
//     console.log('このプログラムは実行される!')
// }

// if ('') {
//     console.log('このプログラムは実行される!')
// }

// falsy (フォルシー)　フォルシーな値
// 条件式でfalseとみなされる値 => 0, ""(空文字列)