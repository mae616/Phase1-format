// スコープ
/*
 * var
 */
{
    var a = 0;
}
// ブロックスコープが適用されないため、ブロック外でも値の参照が可能
console.log(a); // 0


/*
 * let
 */
{
    // ブロックスコープにより、再宣言にならない。
    let a = 1;
    console.log(a); // 1
}
// letはブロックスコープであり参照できないため、varで宣言した値が参照される。
console.log(a); // 0

/*
 * const
 */
{
    const b = 2;
    console.log(b); //2
}
console.log(b) // b is not defined 