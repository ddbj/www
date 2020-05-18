// 外観変更スイッチ
export default function switchAppearance() {
  const appearanceWwitch = document.querySelector('.appearance-switch');
  if (appearanceWwitch) {
    const buttons = appearanceWwitch.querySelectorAll('.button');
    buttons.forEach(button => {
      button.addEventListener('click', e => {
        appearanceWwitch.parentNode.dataset.appearanceType = e.target.dataset.appearanceValue;
        // ボタンのハイライト切替
        buttons.forEach(button => {
          if (button === e.target) {
            button.classList.add('-current');
          } else {
            button.classList.remove('-current');
          }
        });
      });
    });
  }
}