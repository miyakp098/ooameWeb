document.getElementById('processButton').addEventListener('click', processText);

function processText() {
    const textInput = document.getElementById('textInput');
    const outputDiv = document.getElementById('output');

    const text = textInput.value.trim(); // テキストエリアからテキストを取得
    if (!text) {
        alert('テキストを入力してください。');
        return;
    }

    const modifiedText = modifyText(text);
    outputDiv.innerHTML = modifiedText;


    //textInput.value = modifiedText; // テキストエリアに修正されたテキストを上書きして表示
}

function modifyText(text) {
    // 「.」の前後の空白を削除
    let modifiedText = text.replace(/\s*\.\s*/g, '.');
    // アルファベットの後ろにある空白を削除（アルファベットの前の空白は削除しない）
    modifiedText = modifiedText.replace(/([a-zA-Z])\s+/g, '$1');
    // 残りの空白（改行を除く）をすべてコンマに置き換える
    modifiedText = modifiedText.replace(/ /g, ",");

    return modifiedText;
}

document.getElementById('copyButton').addEventListener('click', copyText);

function copyText() {
    const outputDiv = document.getElementById('output');

    // テキストを選択してクリップボードにコピー
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(outputDiv);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();

    // コピー完了メッセージを表示
    alert('右のテキストボックス内をコピーしました');
}

document.getElementById('resetButton').addEventListener('click', resetText);

function resetText() {
    const textInput = document.getElementById('textInput');
    const outputDiv = document.getElementById('output');

    // テキストボックスを空にする
    textInput.value = '';
    outputDiv.value = '';
}