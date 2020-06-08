// アコーディオンメニュー
export default function AccordionMenu() {
  $('.accordion-menu dt').on('click', function () {

    $(this)
      .next('dd')
      .slideToggle(500);
  });

  $('.close-btn').click(function () {
    $(this).parents('.accordion-menu dd').slideUp();
  });
}