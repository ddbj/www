/* global $ */

window.onload = function () {
  const indexWrap = document.querySelector('.internal-link');  //H2タグの前に挿入したdivタグ
  if (indexWrap) {
    const postContent = document.querySelector('.md-content');  //記事本文が書かれているラッパー
    const hTags = postContent.querySelectorAll('h2, h3');         //記事内のH2とH3タグを全て取得
    if (hTags.length > 0) {
      let indexList = document.createElement("ul");
      let listSrc = "";
      let subListSrc = "";    //h3タグを取得しておくための変数

      for (let i = 0; i < hTags.length; i++) {
        let theHeading = hTags[i];
        theHeading.setAttribute('id', "index_id" + i);  //リンクで飛べるようにIDをつける
        if (theHeading.tagName === 'H2') {
          if (subListSrc !== "") {
            //h3リストが生成されていれば
            listSrc += '<ul>' + subListSrc + '</ul>';
            subListSrc = "";
          }
          listSrc += '</li><li><a href="#index_id' + i + '">' + theHeading.textContent + '</a>';
        } else if (theHeading.tagName === 'H3') {
          subListSrc += '<li><a href="#index_id' + i + '">' + theHeading.textContent + '</a></li>';
        }
      }

      if (subListSrc !== "") {
        //最後のリストがh3だった場合
        listSrc += '<ul>' + subListSrc + '</ul></li>';
      } else {
        listSrc += '</li>';
      }
      indexList.innerHTML = listSrc;
      //indexWrap.appendChild(indexList);
      indexWrap.innerHTML = indexList.outerHTML;
    }
  }
  // ナビゲーションのリンクを指定
  var navLink = $('#gnav li a');
  
    // 各コンテンツのページ上部からの開始位置と終了位置を配列に格納しておく
  var contentsArr = new Array();
  for (var i = 0; i < navLink.length; i++) {
       // コンテンツのIDを取得
      var targetContents = navLink.eq(i).attr('href');
      // ページ内リンクでないナビゲーションが含まれている場合は除外する
      if(targetContents.charAt(0) == '#') {
         // ページ上部からコンテンツの開始位置までの距離を取得
            var targetContentsTop = $(targetContents).offset().top;
         // ページ上部からコンテンツの終了位置までの距離を取得
            var targetContentsBottom = targetContentsTop + $(targetContents).outerHeight(true) - 1;
         // 配列に格納
            contentsArr[i] = [targetContentsTop, targetContentsBottom]
      }
  }
  window.console.log(contentsArr)
  
  // 現在地をチェックする
  function currentCheck() {
       // 現在のスクロール位置を取得
        var windowScrolltop = $(window).scrollTop();
        for (var i = 0; i < contentsArr.length; i++) {
           // 現在のスクロール位置が、配列に格納した開始位置と終了位置の間にあるものを調べる
          if(contentsArr[i][0] <= windowScrolltop && contentsArr[i][1] >= windowScrolltop) {
                // 開始位置と終了位置の間にある場合、ナビゲーションにclass="current"をつける
              navLink.removeClass('current');
              navLink.eq(i).addClass('current');
                i == contentsArr.length;
            }
      }
  }
  
   // ページ読み込み時とスクロール時に、現在地をチェックする
  $(window).on('load scroll', function() {
      currentCheck();
  });
  
  // ナビゲーションをクリックした時のスムーズスクロール
    navLink.click(function() {
      $('html,body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 400);
        return false;
  })

  //アコーディオンメニュー
  
  $(".example-of-use dt").on("click", function() {
    $(this)
      .next("dd")
      .slideToggle(500);
  });

  $('.close-btn').click(function () {
    $(this).parents('.example-of-use dd').slideUp();
});


  // 外観変更スイッチ
  switchAppearance();

  // サービス一覧
  ServicesView();
  
}

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
    html += Object.keys(categoryTags).map( tag => `<li class="service-tag" data-tag="${tag}">${tag}<span class="count">${categoryTags[tag].length}</span></li>` ).join('');
    html += Object.keys(affiliationTags).map( tag => `<li class="service-tag -reverse" data-tag="${tag}">${tag}<span class="count">${affiliationTags[tag].length}</span></li>` ).join('');
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
