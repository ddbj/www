import internalLink from "./internalLink"
import accordionMenu from "./accordionMenu"
import switchAppearance from "./switchAppearance"
import servicesView from "./servicesView"
window.onload = function () {

  // 内部リンク
  internalLink();
  // アコーディオンメニュー
  accordionMenu();
  // 外観変更スイッチ
  switchAppearance();
  // サービス一覧
  servicesView();

}
