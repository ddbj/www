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
  };
  console.log(contentsArr)
  
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
      };
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
  
}


    

