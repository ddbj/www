/* global $ */

// サービス一覧
export default function taggingListView() {

  const taggingListView = document.querySelector('.tagging-list-view');
  if (taggingListView) {
    let taggingItems;
    const selectedTags = {}, tagViews = {};
    const facetSearch = document.querySelector('.facet-search');

    Object.defineProperties(selectedTags, {
      concatenated: {
        get() {
          return Object.keys(this).reduce((acc, tags) => acc.concat(this[tags]), []);
        }
      },
      count: {
        get() {
          return Object.keys(this).reduce((acc, tags) => acc + this[tags].length, 0);
        }
      }
    });

    setupTaggingItems();
    setupTabMenu();
    setupKeywordTag();
    setupYearTag();
    setupFacetSearch();

    function setupTaggingItems() {
      taggingItems = taggingListView.querySelectorAll('.taggingitem');
      taggingItems.forEach(item => {
        item.ddbj_facetsearch_tags = item.dataset.tags.split(',').filter(tag => tag !== '');
      });
    }

    /**
     * タブ切り替え
     */
    function setupTabMenu() {
      const tabMenuView = facetSearch.querySelector(':scope > .tab-menu-view');
      if (tabMenuView) {
        const tabMenuItems = tabMenuView.querySelectorAll(':scope > .tabmenucontainer > li');
        const tabbedContents = tabMenuView.querySelectorAll(':scope > .tabbedcontent');
        tabMenuItems.forEach(item => {
          item.target = tabMenuView.querySelector(`:scope > .tabbedcontent[data-tab="${item.dataset.tab}"]`);
          item.addEventListener('click', () => {
            // 表示状態の切り替え
            tabMenuItems.forEach(item => item.classList.remove('-current'));
            item.classList.add('-current');
            tabbedContents.forEach(tabbedContent => tabbedContent.classList.remove('-current'));
            item.target.classList.add('-current');
          });
        });
      }
    }

    /**
     * ファセット検索の準備
     */
    function setupKeywordTag() {
      const categoryTags = {}, affiliationTags = {}, tagLabels = {};
      // タグの収集
      for (const item of taggingItems) {
        const tags = item.querySelectorAll('.tag-list-view > .tag-view');
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
      const facetSearchTags = facetSearch.querySelector(':scope .tags[data-tab="keyword"]');
      for (const tags of [categoryTags, affiliationTags]) {
        for (const tag in tags) {
          html += `<li class="tag-view${affiliationTags[tag] === undefined ? '' : ' -reverse'}" data-tag="${tag}"><span class="label">${tagLabels[tag]}</span><span class="count">${tags[tag].length}</span></li>`;
        }
      }
      facetSearchTags.innerHTML = html;

      // アイテムのインタラクション
      taggingListView.querySelectorAll('.bottom.-collapsed').forEach(elm => {
        const collapsedbutton = elm.querySelector('.collapsedbutton');
        collapsedbutton.addEventListener('click', () => {
          elm.classList.toggle('-opened');
        });
      })

    }

    function setupYearTag() {
      if (facetSearch.dataset.facetSearchYear === 'true') {
        const yearTags = {};
        // タグの収集
        for (const item of taggingItems) {
          const datetime = item.querySelector('.tag-list-view > .date > time').getAttribute('datetime');
          const year = new Date(datetime).getFullYear();
          if (!yearTags[year]) {
            yearTags[year] = [];
          }
          yearTags[year].push(item);
        }
        // ファセット検索用ビューの生成
        let html = '';
        const facetSearchTags = facetSearch.querySelector(':scope .tags[data-tab="year"]');
        for (const tag in yearTags) {
          html += `<li class="tag-view" data-tag="${tag}">${tag}<span class="count">${yearTags[tag].length}</span></li>`;
        }
        facetSearchTags.innerHTML = html;
      }
    }

    function setupFacetSearch() {
      const urlParameters = $.deparam(window.location.search.substr(1));
      const path = window.location.origin + window.location.pathname;
      Object.keys(urlParameters).forEach(key => selectedTags[key] = urlParameters[key]);
      const facetSearchTags = facetSearch.querySelectorAll(':scope .tags');
      facetSearchTags.forEach(tags => {
        const tagKey = tags.dataset.tab;
        if (selectedTags[tagKey] === undefined) {
          selectedTags[tagKey] = [];
        }
        tagViews[tagKey] = tags.querySelectorAll('.tag-view');
        tagViews[tagKey].forEach(tagView => tagView.addEventListener('click', () => {
          const tag = tagView.dataset.tag;
          // 選択中のタグに追加・削除
          if (selectedTags[tagKey].indexOf(tag) === -1) {
            if (tagKey === 'year') {
              // 'year' であれば排他的
              selectedTags[tagKey] = [tag];
            } else {
              selectedTags[tagKey].push(tag);
            }
          } else {
            selectedTags[tagKey].splice(selectedTags[tagKey].indexOf(tag), 1);
          }
          // URLパラメータにセット
          const parameters = selectedTags.count ? `?${ $.param(selectedTags) }` : '';
          window.history.pushState(selectedTags, '', `${ path }${ parameters }`);
          updateTag();
        }));
      });
      updateTag();

    }

    // アイテムの表示更新
    function updateTag() {
      if (selectedTags.count) {
        // 何か選択されている場合、選択されているもののみ表示
        for (const key in tagViews) {
          tagViews[key].forEach(tagView => {
            if (selectedTags[key].indexOf(tagView.dataset.tag) === -1) {
              tagView.classList.add('-disable');
            } else {
              tagView.classList.remove('-disable');
            }
          });
        }
        const concatenatedSelectedTags = selectedTags.concatenated;
        for (const taggingItem of taggingItems) {
          let isHidden = false;
          for (const selectedTag of concatenatedSelectedTags) {
            if (taggingItem.ddbj_facetsearch_tags.indexOf(selectedTag) === -1) {
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
        for (const key in tagViews) {
          tagViews[key].forEach(tagView => tagView.classList.add('-disable'));
        }
        taggingItems.forEach(taggingItem => taggingItem.classList.remove('-hidden'));
      }
    }
  
  }

}