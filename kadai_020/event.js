  //定数に代入する
const outputBtn  = document.getElementById('btn');
// クリックされたときにイベント処理を実行する
outputBtn .addEventListener('click' ,() => {
//'text'を書き換える
    const textChange = document.getElementById('text');
    textChange.textContent = 'ボタンをクリックしました'
});