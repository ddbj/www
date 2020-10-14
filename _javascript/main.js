import internalLink from "./internalLink"
import accordionMenu from "./accordionMenu"
import switchAppearance from "./switchAppearance"
import taggingListView from "./taggingListView"
import lightBox from "./lightBox"
window.onload = function () {

  // 内部リンク
  internalLink();
  // アコーディオンメニュー
  accordionMenu();
  // 外観変更スイッチ
  switchAppearance();
  // サービス一覧
  taggingListView();
  // ライトボックス
  lightBox();

}
