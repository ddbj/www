// アコーディオンメニュー
export default function accordionMenu() {
  $('.btn').on('click', function () {

    $(this)
      .next('.content')
      .toggleClass("active");
    $(this).toggleClass("active");
  });

  $('.close-btn').click(function () {
    $(this).parents('.content').removeClass("active");
    $(this).removeClass("active");
  });
}