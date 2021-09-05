// 条件式の書き方

const a = 2
const b = 3
const c = 10
const d = 10

// X === Y
// XとYが等しいとみなされる際にtrueになる

console.log(a === b) // false
console.log(c === d) // true

// a >= b 左辺が右辺以上の際にtrueを返す

// &(アンパーサンド)
console.log(a === b && c === d) // => false
// A && B => AがtrueかつBがtrueの場合、trueになる

// |(バーティカルバー)
console.log(a === b || c === d) // => true
// A || B => AがtrueまたはBがtrueの場合、trueになる

console.log(!(a === b))
// => 真偽値を逆転させたいとき使う

console.log(!true)
console.log(!false)
