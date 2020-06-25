// アコーディオンメニュー
export default function accordionMenu() {
  $('.accordion-menu dt').on('click', function () {

    $(this)
      .next('dd')
      .slideToggle(500);
    $(this).toggleClass("active");
  });

  $('.close-btn').click(function () {
    $(this).parents('.accordion-menu dd').slideUp();
    $(this).removeClass("active");
  });
}