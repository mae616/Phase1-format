const view = document.getElementById('view');
const hitNum = document.getElementById('hitNum');

const FREE_TEXT = 'free';

class BingoSheet {

    constructor() {

        // ビンゴ列の最小値と最大値情報(添え字が列数に対応)
        this._BINGO_COL_MIN_MAX_ARRAY = [
            { header: 'B', min: 1, max: 15 },
            { header: 'I', min: 16, max: 30 },
            { header: 'N', min: 31, max: 45 },
            { header: 'G', min: 46, max: 60 },
            { header: 'O', min: 61, max: 75 }
        ];

        // ビンゴシート方眼の数(ヘッダー含まず)　:ビンゴ列の最小値と最大値情報の配列数
        this._BINGO_SHEET_LENGTH = this._BINGO_COL_MIN_MAX_ARRAY.length;

        this._HEADER_ROW_COUNT = 1; // 数値以外のヘッダー行数

        // ビンゴシート二次元配列の生成
        this._create();

        // ビンゴシートの数値の設定
        this._setNumber();
    }

    // ビンゴシート二次元配列の生成
    _create() {
        this._aryBingoSheet = new Array(this._BINGO_SHEET_LENGTH + this._HEADER_ROW_COUNT);
        for (let row = 0; row < this._aryBingoSheet.length; row++) {
            if (row === 0) {
                // ヘッダーの作成
                this._aryBingoSheet[row] = this._BINGO_COL_MIN_MAX_ARRAY.map(element => element.header);
            } else {
                // ヘッダー以外の数値の配列の作成
                this._aryBingoSheet[row] = new Array(this._BINGO_SHEET_LENGTH);
            }
        }
    }

    // ビンゴシートの数値の設定
    _setNumber() {
        const center = Math.floor((this._BINGO_SHEET_LENGTH + 1) / 2) - 1; // freeの位置

        // 同じ数字が2次元配列に存在するか　存在する:true　存在しない:false
        const checkSameNum = (num, ary) => ary.some(element => element.includes(num));

        // ビンゴシートの数値の作成
        for (let col = 0; col < this._BINGO_SHEET_LENGTH; col++) {
            const max = this._BINGO_COL_MIN_MAX_ARRAY[col].max + 1;
            const min = this._BINGO_COL_MIN_MAX_ARRAY[col].min;

            for (let row = this._HEADER_ROW_COUNT; row < this._aryBingoSheet.length; row++) {
                // 真ん中ならFREE
                if (row === center + this._HEADER_ROW_COUNT && col === center) {
                    this._aryBingoSheet[row][col] = FREE_TEXT;
                    continue;
                }

                // それ以外なら数値
                let num;
                do {
                    num = Math.floor(Math.random() * (max - min) + min);
                } while (checkSameNum(num, this._aryBingoSheet)); // 同じ数字がでたら、決め直す

                this._aryBingoSheet[row][col] = num;
            }
        }
    }

    get aryBingoSheet() {
        return this._aryBingoSheet;
    }

}

const bingoSheet = new BingoSheet();
const aryBingoSheet = bingoSheet.aryBingoSheet;
const aryNumberLottery = [];

// ビンゴシートの表示
for (let row = 0; row < aryBingoSheet.length; row++) {
    const tr = document.createElement('tr');
    view.appendChild(tr);
    for (let col = 0; col < aryBingoSheet[0].length; col++) {
        const td = document.createElement('td');
        td.textContent = aryBingoSheet[row][col];

        if (aryBingoSheet[row][col] === FREE_TEXT) {
            td.classList.add('hit-num');
        }
        tr.appendChild(td);
    }
}

hitNum.addEventListener('click', () => {
    const MIN_NUM = 1;
    const MAX_NUM = 75;

    // すべての数字が出た時の考慮
    if (aryNumberLottery.length === MAX_NUM) {
        return;
    }

    let num;
    do {
        num = Math.floor(Math.random() * ((MAX_NUM + 1) - MIN_NUM) + MIN_NUM);
    } while (aryNumberLottery.includes(num));   // 既に出た数字だったら、決め直す

    aryNumberLottery.push(num);

    alert(`数字は${num}番です！`);

    // クラスの追加
    const hitRow = aryBingoSheet.findIndex(element => element.includes(num));
    // 見つからなかった場合
    if (hitRow < 0) {
        return;
    }
    const hitCol = aryBingoSheet[hitRow].findIndex(element => element === num);

    view.children[hitRow].children[hitCol].classList.add('hit-num');

});