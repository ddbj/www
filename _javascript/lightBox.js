// ライトボックス
export default function lightBox() {
  $(document).ready(function () {
    let closeText;
    switch ($('html').attr('lang')) {
      case 'ja':
        closeText = '閉じる';
        break;
      case 'en':
        closeText = 'Close';
        break;
    };
    $(".group1").colorbox({ rel: 'group1', maxWidth: "90%", maxHeight: "90%", current: '{current} / {total}', opacity: 1, close: closeText , closeButton: true　});
  });
}
