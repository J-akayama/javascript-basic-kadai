const btn = document.getElementById('btn');
const textchange = document.getElementById('text');

btn.addEventListener('click', () => {
// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {
    textchange.textContent = "ボタンをクリックしました";
  }, 2000);
});