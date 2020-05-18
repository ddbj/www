/* global $ */
import internalLink from "./internal_link"
import accordionMenu from "./accordion_menu"
import switchAppearance from "./switch_appearance"
import ServicesView from "./services_view"
window.onload = function () {

  // 内部リンク
  internalLink();
  // アコーディオンメニュー
  accordionMenu();
  // 外観変更スイッチ
  switchAppearance();
  // サービス一覧
  ServicesView();

}