/* global $ */

// サービス一覧
export default function taggingListView() {
  const taggingListView = document.querySelector('.tagging-list-view');
  if (taggingListView) {
    // タグの収集
    const categoryTags = {}, affiliationTags = {}, tagLabels = {};
    const taggingItems = taggingListView.querySelectorAll('.taggingitem')
    for (const item of taggingItems) {
      const tags = item.querySelectorAll('.tags > .tag-view');
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
          tagLabels[tag.dataset.tag] = tag.textContent;
        }
        array[tag.dataset.tag].push(item);
      }
    }
    // ファセット検索用ビューの生成
    let html = '';
    const facetSearchTags = document.querySelector('.facet-search > .tags');
    for (const array of [categoryTags, affiliationTags]) {
      for (const tag in array) {
        html += `<li class="tag-view${affiliationTags[tag] === undefined ? '' : ' -reverse'}" data-tag="${tag}">${tagLabels[tag]}<span class="count">${array[tag].length}</span></li>`;
      }
    }
    facetSearchTags.innerHTML = html;
    // インタラクション
    const selectedTags = [];
    const $selectedTags = $('.tag-view', facetSearchTags);
    $selectedTags.on('click', e => {
      const tag = e.target.dataset.tag;
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
        for (const service of taggingItems) {
          let isHidden = true;
          const tags = Array.from(service.querySelectorAll('.tags > .tag-view'), tag => tag.dataset.tag);
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
        taggingItems.forEach(service => service.classList.remove('-hidden'));
      }
    });

    // アイテムのインタラクション
    taggingListView.querySelectorAll('.bottom.-collapsed').forEach(elm => {
      console.log(elm)
      const collapsedbutton = elm.querySelector('.collapsedbutton');
      collapsedbutton.addEventListener('click', () => {
        elm.classList.toggle('-opened');
      });
    })
  }
}