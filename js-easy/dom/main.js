const title = document.getElementById('title')
console.log(`<h1>タグの中身のテキストは ${title.textContent} です。`)


const list = document.querySelector('.list')
console.log(`<ul>タグの2つめの子要素のテキストは ${list.children[1].textContent} です。`)
// ある要素の親要素にアクセスしたければ、parentNodeプロパティを使います。

// 「DOMのAPI」と言ったときは、「DOMという機能でアプリケーションを書くために用意されているオブジェクトやメソッド」という意味になります

const newItem = document.createElement('li')
newItem.textContent = 'もも'
list.appendChild(newItem)

const button = document.getElementById('button')

// ボタンをクリックした時、確認画面を出す！
// イベントリスナー(イベントハンドラー) => 何か対象の要素にイベントが起こった際に、実行したい処理を記述できる機能
// document.addEventListener('click', event => {   //　ドキュメントのどこをクリックしても確認を出す
//     confirm("削除してよろしいですか？")
// })

// button.addEventListener('click', function(){  // でもいい

// })

button.addEventListener('click', event => { // 第二引数を関数にする、関数にしないで命令だけだと、ブラウザを更新した時に実行されてしまう
    confirm('削除してよろしいですか？')
})

// DOMの勉強、ブラウザが用意したどんな関数があるが、学習を進めながら使ってみて覚える
// DOMにはどんな機能があるのか

/*
要素を見つける
documentには、HTMLの要素を見つける方法がいくつか用意されています。

document.getElementById(ID): HTML側にid="xxx"のように書いておき、そのIDを指定して要素を取得します。
document.getElementByTagName(タグ名): HTML内のタグElementのノードを取得する
document.getElementByClassName(class): HTML側にclass="xxx"のように書いておき、そのIDを指定して要素を取得します。
document.querySelector(セレクタ): CSSと同じ「セレクタ」の書き方で要素を探し、始めに見つかった要素を取得します。
document.querySelectorAll(セレクタ): querySelectorとほぼ同じですが、こちらはセレクタに合致する要素をすべて取得します。
*/


/*
要素の情報を取得する、操作する
上記のようにHTMLから見つけてきた要素に対しては、以下のような情報を取得したり、操作を行うことができます。以下、要素を代入した変数をelemとします。

elem.textContent: タグで囲まれた中身のテキストを取得します。また、elem.textContent = "..."とすることで中身のテキストを書き換えることができます。
elem.innerHTML: タグで囲まれた中身のHTMLを取得します。また、elem.innerHTML = "..."とすることで中身のHTMLを書き換えることができます。
elem.children: 子要素の配列（のようなもの）を取得します。
elem.firstElementChild: 子要素のうち、最初に書かれている要素を取得します。
elem.lastElementChild: 子要素のうち、最後に書かれている要素を取得します。
elem.parentElement: 親要素を取得します。
elem.getAttribute(属性): <タグ 属性="値">の属性の部分を引数に渡して、値の部分を取得します。
elem.setAttribute(属性, 値): 属性と値を引数に渡すと、それがHTMLに<タグ 属性="値">のように反映されます。
*/

/*
子要素を追加・削除する
HTMLには書かれていない要素をJavaScript側で作成し、HTMLに追加することができます。また、要素を削除することも可能です。

document.createElement(タグ名): タグ名で指定したタグの要素を作成します。作成した時点では、HTMLにはまだ追加されていない点に注意してください。
elem.appendChild(子要素): elemに子要素で指定した要素を子要素として追加します。
elem.removeChild(子要素): elemの子要素から子要素で指定した要素を削除します。
*/