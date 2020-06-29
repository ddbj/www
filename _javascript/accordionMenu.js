// アコーディオンメニュー
export default function accordionMenu() {
  $('.btn').on('click', function () {
    const content = $(this).next('.content')
    content.slideToggle(500)
    $(this).toggleClass("active");
  });

  $('.close-btn').click(function () {
    const content = $(this).next('.content')
    content.slideToggle(500)
    $(this).removeClass("active");
  });
}