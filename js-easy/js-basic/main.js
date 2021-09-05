const num = Math.random() // Math.random() => 0から1までのランダムな数を返してくれるプログラム

if (num >= 0.5) { // numが0.5以上である場合
    console.log('大きめ')
} else {
    console.log('小さめ')
}

console.log(`数: ${num}`)

//-------------------
// 実行したいのが一行の場合こういう書き方もできる
if (num >= 0.5) console.log('大きめ')