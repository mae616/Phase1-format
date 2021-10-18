# フロー

<div class="card">1</div>
<div class="card back"></div>
<div class="card finish">1</div>

変数ペア
変数　枚数
枚数%ペア　が0でない場合 on error

-8/2?　1～4までを2枚ずつ　計8枚
-シャッフルする
-最初すべて card back 
-クリックするとbackとって値入れて<div class="card">1</div>
-2つクリックして　同じ値で残りのカードが0の場合、アラート「終了です」のOKでリロード
-削除/裏返しの実行は 2 枚目をクリックしてから 0.5 秒後
-終了でなくて同じ値ならcard finishに2つする
-違うとfinishでないのすべてcard backに戻す

#アレンジ
-カードの枚数、変えれるようにする
-同じ値の数、変えれるようにする