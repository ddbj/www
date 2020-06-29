// アコーディオンメニュー
export default function accordionMenu() {
  $('.toggle-content-btn').on('click', function () {
    const content = $(this).next('.accordion-content')
    content.slideToggle(500)
    $(this).toggleClass("active");
  });

  $('.close-content-btn').click(function () {
    const content = $(this).parent().parent()
    content.slideToggle(500)
    $(this).parent().parent().prev().removeClass("active");
  });
}