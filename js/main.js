window.onload = function () {
  const indexWrap = document.querySelector('.internal-link');  //H2タグの前に挿入したdivタグ
  if (indexWrap) {

    let postContent = document.querySelector('.main-content');  //記事本文が書かれているラッパー
    let hTags = postContent.querySelectorAll('h2, h3');         //記事内のH2とH3タグを全て取得

    if (hTags.length > 0) {
      let indexList = document.createElement("ul");
      let listSrc = "";
      let h3List = "";    //h3タグを取得しておくための変数

      for (let i = 0; i < hTags.length; i++) {
        let theHeading = hTags[i];
        theHeading.setAttribute('id', "index_id" + i);  //リンクで飛べるようにIDをつける
        if (theHeading.tagName === 'H2') {
          if (h3List !== "") {
            //h3リストが生成されていれば
            listSrc += '<ul>' + h3List + '</ul>';
            h3List = "";
          }
          listSrc += '</li><li><a href="#index_id' + i + '">' + theHeading.textContent + '</a>';
        } else if (theHeading.tagName === 'H3') {
          h3List += '<li><a href="#index_id' + i + '">' + theHeading.textContent + '</a></li>';
        }
      }

      if (h3List !== "") {
        //最後のリストがh3だった場合
        listSrc += '<ul>' + h3List + '</ul></li>';
      } else {
        listSrc += '</li>';
      }
      indexList.innerHTML = listSrc;
      indexWrap.appendChild(indexList);
    }
  }
}