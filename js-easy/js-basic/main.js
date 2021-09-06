// 関数

// 定義と実行

// // 関数(処理をまとめて名前をつけるもの)の定義
// function cook() {
//     console.log('生姜焼きが出来上がりました。')
// }

// // 実行(呼び出し)
// // 関数を実行する際は、関数名に()をつける
// cook()
// cook()

// ----------------------------
// 関数(処理をまとめて名前をつけるもの)の定義
// function cook(food) {
//     console.log(`${food}が出来上がりました。`)
// }

// 定義の時点
// * function 関数名(仮引数){
// *    処理
// * }

//　仮引数…最初、値が入っていないから

// // 実行(呼び出し)
// // 関数を実行する際は、関数名に()をつける
// cook('生姜焼き')
// cook('カレー')
// cook('肉じゃが')



// function cook(food1, food2) {
//     console.log(`${food1}が出来上がりました。`)
//     console.log(`${food2}が出来上がりました。`)
// }

// // cook('生姜焼き', 'カレー')
// // cook('ステーキ', 'マッシュポテト')
// cook('生姜焼き') // 渡してない方はundefinedになる

// -------------------------------------
// 戻り値

// function applyTax(price) {
//     // ! return文を使用することで、任意の値を「戻り値」として指定できる！
//     return price * 1.1
// }

// // * function 関数名(仮引数){
// // *    処理
// // *    return 戻り値
// // * }

// const result1 = applyTax(1000)
// const result2 = applyTax(580)

// // TODO: 上の結果を合計したい…
// // console.log(applyTax(1000) + applyTax(580))
// console.log(result1 + result2)


// 関数を使うと…
// - 好きな時に何度でも呼び出せる
// - 引数を用いて、実行時に任意の値を渡せる
// - 戻り値を指定して、関数内の任意の値を別の場所（コンテクスト）で使用することができる

// ----------------------------------

// アロー関数

// 関数宣言
// function applyTax(price) {
//     return price * 1.1
// }


// 関数式
// 再帰関数の場合
//　const applyTax = function hogehoge(price) {
// で名前を書いて参照する
// それ以外はfunctionの後に関数名書かない
const applyTax = function (price) {
    return price * 1.1
}

// アロー関数
// 書き方を省略しているだけでなく、関数式との挙動の違いがある（今理解できるとこだけ説明）
//　基本的な書き方
const applyTax = (price) => {
    return price * 1.1
}

// もっと省略した書き方
// 引数が1つの場合、()を省略できる
const applyTax = price => {
    return price * 1.1
}

// 処理が1行の場合、returnとブロック({})を省略できる
const applyTax = price => price * 1.1

// 慣れるとすごい便利!