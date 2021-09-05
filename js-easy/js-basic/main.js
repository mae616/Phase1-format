// 配列の操作

// const nengou = ['明治', '大正', '昭和', '平成']
// console.log(nengou)

// // 要素の追加
// nengou.push('令和')

// console.log(nengou) // => ["明治", "大正", "昭和", "平成", "令和"]

// nengou.splice(3, 1) // 配列.splice(削除したい要素のインデックス, 削除したい要素の個数)

// console.log(nengou) // => ["明治", "大正", "昭和", "令和"]

// nengou.splice(2, 2) // 配列.splice(削除したい要素のインデックス, 削除したい要素の個数)

// console.log(nengou) // =>  ["明治", "大正"]
// -------------------------------

const nengou = ['明治', '大正', '昭和', '平成']
console.log(nengou)

// 要素の変更
nengou[2] = 'showa'

console.log(nengou) // ["明治", "大正", "showa", "平成"]






// -------------------------------
// 自分で勝手にやったの
// const nengou = ['明治', '大正', '昭和', '平成']
// console.log(nengou)

// // 要素の追加（要素数が返る）
// const nengou2 = nengou.push('令和')

// console.log(nengou) // =>追加されたの
// console.log(nengou2) // =>追加された後の要素数