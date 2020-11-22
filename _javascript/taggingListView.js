/* global $ */

// サービス一覧
export default function taggingListView() {
  const taggingListView = document.querySelector('.tagging-list-view');
  if (taggingListView) {
    // タグの収集
    const categoryTags = {}, affiliationTags = {}, tagLabels = {};
    const taggingItems = taggingListView.querySelectorAll('.taggingitem');
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
    for (const tags of [categoryTags, affiliationTags]) {
      for (const tag in tags) {
        html += `<li class="tag-view${affiliationTags[tag] === undefined ? '' : ' -reverse'}" data-tag="${tag}">${tagLabels[tag]}<span class="count">${tags[tag].length}</span></li>`;
      }
    }
    facetSearchTags.innerHTML = html;
    // インタラクション
    const URIParameters = $.deparam(window.location.search.substr(1)).tags;
    const selectedTags = URIParameters ? URIParameters : [];
    const tagViews = facetSearchTags.querySelectorAll('.tag-view');
    updateTag();
    // インタラクション
    tagViews.forEach(tagView => tagView.addEventListener('click', () => {
      const tag = tagView.dataset.tag;
      // 選択中のタグに追加・削除
      if (selectedTags.indexOf(tag) === -1) {
        selectedTags.push(tag);
      } else {
        selectedTags.splice(selectedTags.indexOf(tag), 1);
      }
      // URLパラメータにセット
      window.history.pushState(selectedTags, '', `${ window.location.origin }${ window.location.pathname }?${ $.param({tags: selectedTags}) }`);
      updateTag();
    }))

    // アイテムのインタラクション
    taggingListView.querySelectorAll('.bottom.-collapsed').forEach(elm => {
      const collapsedbutton = elm.querySelector('.collapsedbutton');
      collapsedbutton.addEventListener('click', () => {
        elm.classList.toggle('-opened');
      });
    })

    // アイテムの表示更新
    function updateTag() {
      if (selectedTags.length) {
        // 何か選択されている場合、選択されているもののみ表示
        tagViews.forEach(tagView => {
          if (selectedTags.indexOf(tagView.dataset.tag) === -1) {
            tagView.classList.add('-disable');
          } else {
            tagView.classList.remove('-disable');
          }
        });
        for (const taggingItem of taggingItems) {
          let isHidden = false;
          const tags = Array.from(taggingItem.querySelectorAll('.tags > .tag-view'), tag => tag.dataset.tag);
          for (const selectedTag of selectedTags) {
            if (tags.indexOf(selectedTag) === -1) {
              isHidden = true;
              break;
            }
          }
          if (isHidden) {
            taggingItem.classList.add('-hidden');
          } else {
            taggingItem.classList.remove('-hidden');
          }
        }
      } else {
        // 無選択の場合、全部選択
        tagViews.forEach(tagView => tagView.classList.add('-disable'));
        taggingItems.forEach(taggingItem => taggingItem.classList.remove('-hidden'));
      }
    }
  
  }

}