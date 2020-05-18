// アコーディオンメニュー
export default function accordionMenu() {
  $('.example-of-use dt').on('click', function () {

    $(this)
      .next('dd')
      .slideToggle(500);
  });

  $('.close-btn').click(function () {
    $(this).parents('.example-of-use dd').slideUp();
  });
}