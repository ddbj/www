// ライトボックス
export default function lightBox() {
  $(document).ready(function () {
    $(".group1").colorbox({ rel: 'group1', maxWidth: "90%", maxHeight: "90%", current: '{current} / {total}', opacity: 1 });
  });

}
