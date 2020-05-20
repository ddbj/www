/* global $ */

// 内部リンク
export default function internalLink() {
  const createIndex = () => {
    const indexWrap = document.querySelector('.internal-link');  //H2タグの前に挿入したdivタグ
    if (indexWrap) {
      const postContent = document.querySelector('.md-content');  //記事本文が書かれているラッパー
      const hTags = postContent.querySelectorAll('h2, h3');         //記事内のH2とH3タグを全て取得
      if (hTags.length > 0) {
        let indexList = document.createElement('ul');
        let listSrc = "";
        let subListSrc = "";    //h3タグを取得しておくための変数

        for (let i = 0; i < hTags.length; i++) {
          let theHeading = hTags[i];
          const id = 'index_id' + i;
          theHeading.setAttribute('id', id);  //リンクで飛べるようにIDをつける
          if (theHeading.tagName === 'H2') {
            if (subListSrc !== "") {
              //h3リストが生成されていれば
              listSrc += '<ul>' + subListSrc + '</ul>';
              subListSrc = '';
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
    console.log('createIndex完了')
  }

  // 各コンテンツのページ上部からの開始位置と終了位置を配列に格納しておく
  let contentsArr = new Array();
  const createContentsArr = () => {
    // ナビゲーションのリンクを指定
    const $navLink = $('#TableOfContents li a');
    for (let i = 0; i < $navLink.length; i++) {
      // コンテンツのIDを取得
      let targetContents = $navLink.eq(i).attr('href');
      // ページ内リンクでないナビゲーションが含まれている場合は除外する
      if (targetContents.charAt(0) == '#') {
        // ページ上部からコンテンツの開始位置までの距離を取得
        let targetContentsTop = $(targetContents).offset().top;
        // ページ上部からコンテンツの終了位置までの距離を取得
        let targetContentsBottom = targetContentsTop + $(targetContents).outerHeight(true) - 1;
        // 配列に格納
        contentsArr[i] = [targetContentsTop, targetContentsBottom]
      }
    }
  }

  // 現在地をチェックする
  function currentCheck() {
    // ナビゲーションのリンクを指定
    const $navLink = $('#TableOfContents li a');
    // 現在のスクロール位置を取得
    let windowScrolltop = $(window).scrollTop();
    for (let i = 0; i < contentsArr.length; i++) {
      // 現在のスクロール位置が、配列に格納した開始位置と終了位置の間にあるものを調べる
      if (contentsArr[i][0] <= windowScrolltop && contentsArr[i][1] >= windowScrolltop) {
        // 開始位置と終了位置の間にある場合、ナビゲーションにclass="current"をつける
        $navLink.removeClass('current');
        $navLink.eq(i).addClass('current');
        i == contentsArr.length;
      }
    }
  }

  // ページ読み込み時とスクロール時に、現在地をチェックする
  $(window).on('load scroll', function () {
    currentCheck();
  });

  console.log('ホゲ')
  const $navLink = $('#TableOfContents li a');
  // ナビゲーションクリック時の動作：スムーズスクロール・アドレスバーにID付与
  $navLink.on('click', function () {
    console.log('href', $(this).attr('href'))
    history.replaceState('', '', this.href);
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 400);
    return false;
  })

  let promise = new Promise((resolve, reject) => {
    createIndex()
    resolve()
  })

  promise.then(() => {
    console.log('パラメーター確認開始')
    // IDを付け終わっていたら
    // URLを確認し
    // URLの末尾に#がついていれば
    if (document.URL.match(/#index_id/)) {
      // その#の位置に移動する
    }
  }).then(() => {
    createContentsArr()
  }).catch((error) => { // エラーハンドリング
    console.error(error)
  })
}