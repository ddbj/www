/* global $ */

// 内部リンク
export default function internalLink() {
  let $navLink = '';

  function createIndex() {
    console.log('createIndex')
    const tocContainer = document.querySelector('.internal-link');
    if (tocContainer) {
      const postContent = document.querySelector('.md-content');
      const headings = postContent.querySelectorAll('h2, h3, h4');
      const outline = [];
      let currentNode = outline;
      for (let i = 0; i < headings.length; i++) {
        const currentHeading = headings[i];
        // make outline
        switch (currentHeading.tagName) {
          case 'H2':
            currentNode = [];
            outline.push(currentHeading, currentNode);
            break;
          case 'H3':
            currentNode.push(currentHeading);
            break;
        }
        // add ID
        const namedAnchor = currentHeading.querySelector('a[name]');
        if (namedAnchor) {
          // 見出しにname属性持ちのアンカーがあれば、name属性をIDに 
          currentHeading.setAttribute('id', namedAnchor.name);
        } else if (!currentHeading.getAttribute('id')) {
          // そうでなく、かつ見出しにIDが付与されていなければ、見出し内容をIDに
          // （ただしどうやらJekyllは自動的にそれをやっているっぽい。だとしたら不要
          // * encodeURIComponent は不要？
          currentHeading.setAttribute('id', currentHeading.textContent.replace(/[\/\s]/g, '-'));
        }
        // add anchor
        if (currentHeading.tagName === 'H2' || currentHeading.tagName === 'H3') {
          const anchor = document.createElement('a');
          currentHeading.appendChild(anchor);
          anchor.setAttribute('href', '#' + currentHeading.id);
          anchor.classList.add('link-icon');
        }
      }
      console.log(outline);



      const hTags = postContent.querySelectorAll('h2, h3');
      const hTagsIncludeH4 = postContent.querySelectorAll('h2, h3, h4');
      if (hTags.length > 0) {
        const indexList = document.createElement('ul');
        let listSrc = '';
        let subListSrc = ''; //h3タグを取得しておくための変数

        for (let i = 0; i < hTags.length; i++) {
          let theHeading = hTags[i];
          let theHeadingIncludeH4 = hTagsIncludeH4[i]
          let id = '';
          if ( $(theHeadingIncludeH4).children('a').attr('name') ){//既にidがあれば
            id = $(theHeadingIncludeH4).children('a').attr('name');//既存のidを使う
          }else{
            id = $(theHeadingIncludeH4).text().replace(/ |:/g, '_').replace(/\(|\)/g, '');//不要な箇所を除去
            id = jQuery.trim(id);//不要な箇所を除去
          }
          id = encodeURIComponent(id);//idをエンコード
          //$(theHeadingIncludeH4).attr("id", id);//リンクで飛べるようにIDをつける
          //const a = document.createElement('a');
          //theHeading.appendChild(a);
          //a.setAttribute("href","#" + id);
          //a.classList.add("link-icon");
          if (theHeading.tagName === 'H2') {
            if (subListSrc !== '') {
              //h3リストが生成されていれば
              listSrc += '<ul>' + subListSrc + '</ul>';
              subListSrc = '';
            }
            listSrc +=
              '</li><li><a href="#' +
              id +
              '">' +
              theHeading.textContent +
              "</a>";
          } else if (theHeading.tagName === "H3") {
            subListSrc +=
              '<li><a href="#' +
              id +
              '">' +
              theHeading.textContent +
              "</a></li>";
          }
        }

        if (subListSrc !== '') {
          //最後のリストがh3だった場合
          listSrc += "<ul>" + subListSrc + "</ul></li>";
        } else {
          listSrc += "</li>";
        }
        indexList.innerHTML = listSrc;
        //tocContainer.appendChild(indexList);
        tocContainer.innerHTML = indexList.outerHTML;
      }
    }
    $navLink = $("#TableOfContents li a");
  };

  // 各コンテンツのページ上部からの開始位置と終了位置を配列に格納しておく
  let contentsArr = new Array();
  const createContentsArr = () => {
    console.log('createContentsArr')
    for (let i = 0; i < $navLink.length; i++) {
      // コンテンツのIDを取得
      let targetContents = $navLink.eq(i).attr("href");
      // ページ内リンクでないナビゲーションが含まれている場合は除外する
      if (targetContents.charAt(0) == "#") {
        // ページ上部からコンテンツの開始位置までの距離を取得
        const $targetContents = $(document.getElementById(targetContents.substr(1)));
        let targetContentsTop = $targetContents.offset().top;
        // ページ上部からコンテンツの終了位置までの距離を取得
        let targetContentsBottom =
          targetContentsTop + $targetContents.outerHeight(true) - 1;
        // 配列に格納
        contentsArr[i] = [targetContentsTop, targetContentsBottom];
      }
    }
  };

  // 現在地をチェックする
  function currentCheck() {
    console.log('currentCheck')
    // 現在のスクロール位置を取得
    let windowScrolltop = $(window).scrollTop();
    for (let i = 0; i < contentsArr.length; i++) {
      // 現在のスクロール位置が、配列に格納した開始位置と終了位置の間にあるものを調べる
      if ( contentsArr[0][0] > windowScrolltop ) {
        $navLink.removeClass("current");
        $navLink.eq(0).addClass("current");
        break;
      } else if (
        contentsArr[i][0] <= windowScrolltop &&
        contentsArr[i][1] >= windowScrolltop
      ) {
        // 開始位置と終了位置の間にある場合、ナビゲーションにclass="current"をつける
        $navLink.removeClass("current");
        $navLink.eq(i).addClass("current");
        i == contentsArr.length;
      }
    }
  }

  // ページ読み込み時とスクロール時に、現在地をチェックする
  $(window).on("scroll", function () {
    currentCheck();
  });

  // ナビゲーションクリック時の動作：スムーズスクロール・アドレスバーにID付与
  const smoothScroll = () => {
    $navLink.on("click", function () {
      history.replaceState('', '', this.href);
      $("html,body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - 24,
        },
        400
      );
      return false;
    });
  };

  console.log('before of promise1')
  let promise = new Promise((resolve, reject) => {
    createIndex();
    console.log('before of resolve')
    resolve();
  });

  console.log('before of promise2')
  promise
    .then(() => {
      createContentsArr();
      currentCheck();
      console.log("createContentsArr完了");
    }).then(() => {
      console.log("パラメーター確認開始");
      // URLパラメータ文字列を取得
      let param = location.hash;
      // 変数paramに#がついていれば
      if (param.match('#')) {
        // その#の位置に移動
        let element = document.getElementById(param.slice(1));
        element.scrollIntoView({
          behavior: "smooth",
          inline: "nearest",
        });
      }
    }).then(() => {
      smoothScroll();
      // hashを調べる
      const hash = window.location.hash.substr(1);
      // hashがあれば、スクロール
    }).catch((error) => {
      // エラーハンドリング
      console.error(error);
    });
    
}
