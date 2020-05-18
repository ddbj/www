/* global $ */

// 内部リンク
import internalLink from "./internal_link.js"
internalLink();

// アコーディオンメニュー
accordionMenu();

// アコーディオンメニュー
function accordionMenu() {
  $('.example-of-use dt').on('click', function () {
    $(this)
      .next('dd')
      .slideToggle(500);
  });

  $('.close-btn').click(function () {
    $(this).parents('.example-of-use dd').slideUp();
  });
}

// 外観変更スイッチ
switchAppearance();

// サービス一覧
ServicesView();

// 外観変更スイッチ
function switchAppearance() {
  const appearanceWwitch = document.querySelector('.appearance-switch');
  if (appearanceWwitch) {
    const buttons = appearanceWwitch.querySelectorAll('.button');
    buttons.forEach(button => {
      button.addEventListener('click', e => {
        appearanceWwitch.parentNode.dataset.appearanceType = e.target.dataset.appearanceValue;
        // ボタンのハイライト切替
        buttons.forEach(button => {
          if (button === e.target) {
            button.classList.add('-current');
          } else {
            button.classList.remove('-current');
          }
        });
      });
    });
  }
}

// サービス一覧
function ServicesView() {
  const servicesView = document.getElementById('ServicesView');
  if (servicesView) {
    // タグの収集
    const categoryTags = {}, affiliationTags = {};
    const services = servicesView.querySelectorAll('.service')
    for (const service of services) {
      const tags = service.querySelectorAll('.tags > .service-tag');
      for (const tag of tags) {
        let array;
        if (tag.classList.contains('-reverse')) {
          // 所属
          array = affiliationTags;
        } else {
          // カテゴリ
          array = categoryTags;
        }
        if (!array[tag.dataset.tag]) {
          array[tag.dataset.tag] = [];
        }
        array[tag.dataset.tag].push(service);
      }
    }
    // ファセット検索用ビューの生成
    let html = '';
    const facetSearchTags = document.querySelector('.facet-search > .tags');
    html += Object.keys(categoryTags).map(tag => `<li class="service-tag" data-tag="${tag}">${tag}<span class="count">${categoryTags[tag].length}</span></li>`).join('');
    html += Object.keys(affiliationTags).map(tag => `<li class="service-tag -reverse" data-tag="${tag}">${tag}<span class="count">${affiliationTags[tag].length}</span></li>`).join('');
    facetSearchTags.innerHTML = html;
    // インタラクション
    const selectedTags = [];
    const $selectedTags = $('.service-tag', facetSearchTags);
    $selectedTags.on('click', e => selectTag(e.target.dataset.tag));
    function selectTag(tag) {
      // 選択中のタグに追加・削除
      if (selectedTags.indexOf(tag) === -1) {
        selectedTags.push(tag);
      } else {
        selectedTags.splice(selectedTags.indexOf(tag), 1);
      }
      if (selectedTags.length) {
        // 何か選択されている場合、選択されているもののみ表示
        $selectedTags.each((index, elm) => {
          if (selectedTags.indexOf(elm.dataset.tag) === -1) {
            elm.classList.add('-disable');
          } else {
            elm.classList.remove('-disable');
          }
        });
        for (const service of services) {
          let isHidden = true;
          const tags = Array.from(service.querySelectorAll('.tags > .service-tag'), tag => tag.dataset.tag);
          for (const tag of tags) {
            if (selectedTags.indexOf(tag) !== -1) {
              isHidden = false;
              break;
            }
          }
          if (isHidden) {
            service.classList.add('-hidden');
          } else {
            service.classList.remove('-hidden');
          }
        }
      } else {
        // 無選択の場合、全部選択
        $selectedTags.each((index, elm) => elm.classList.remove('-disable'));
        services.forEach(service => service.classList.remove('-hidden'));
      }
    }

  }
}




