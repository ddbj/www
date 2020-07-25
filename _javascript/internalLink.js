/* global $ */

// 内部リンク
export default function internalLink() {
  let itemsOfToc = []; // 目次管理用配列

  createToc(); // 目次の生成
  setupSmoothScroll(); // 目次をクリックしたらスクロール
  $(window).on('resize', updateSectionSize).trigger('resize'); // セクションの矩形サイズを更新
  $(window).on('scroll', updateHighlightingOfToc).trigger('scroll'); // 目次のハイライトを更新
  // ハッシュが指定されていたら、そこまでスクロール
  const hash = (window.location.hash.substr(1));
  if (hash) {
    const decodedHash = decodeURIComponent(hash);
    const target = itemsOfToc.filter(item => item.target.id === decodedHash);
    if (target.length > 0) {
      $(target[0].elm).trigger('click');
    }
  }


  // 目次の生成
  function createToc() {
    const tocContainer = document.getElementById('TableOfContents');
    if (tocContainer) {
      const postContent = document.querySelector('.md-content');
      const headings = postContent.querySelectorAll('h2, h3, h4');
      const outline = []; // 階層構造を持った見出しのリスト
      let currentNode = outline;
      for (let i = 0; i < headings.length; i++) {
        const currentHeading = headings[i];
        //// 階層構造を持った見出しのリストの作成
        switch (currentHeading.tagName) {
          case 'H2': // 大見出しの場合
            currentNode = []; // 子の階層を作り、現在操作中の階層にする
            outline.push(currentHeading, currentNode); // 見出しリストに追加
            break;
          case 'H3':
            currentNode.push(currentHeading); // 見出しリストの子の階層に追加
            break;
        }
        //// IDの付与
        const namedAnchor = currentHeading.querySelector('a[name]');
        if (namedAnchor) {
          // 見出しにname属性持ちのアンカーがあれば、name属性をIDに 
          currentHeading.setAttribute('id', namedAnchor.name);
        } else if (!currentHeading.getAttribute('id')) {
          // そうでなく、かつ見出しにIDが付与されていなければ、見出し内容をIDに
          // （ただしどうやらJekyllは自動的にそれをやっているっぽい。だとしたら不要
          currentHeading.setAttribute('id', currentHeading.textContent.replace(/[\/\s]/g, '-'));
        }
        //// 見出しにリンク用のアンカーを追加
        if (currentHeading.tagName === 'H2' || currentHeading.tagName === 'H3') {
          const anchor = document.createElement('a');
          currentHeading.appendChild(anchor);
          anchor.setAttribute('href', '#' + currentHeading.id);
          anchor.classList.add('link-icon');
        }
      }
      //// 目次のHTMLを作り、DOM生成
      tocContainer.innerHTML = '<ul>' + outline.map(item => createItemOfToc(item)).join('').replace(/<li><ul><\/ul><\/li>/g, '').replace(/<\/li><li><ul><\/ul>/g, '<ul>') + '</ul>';
    }
    //// 目次管理用の配列作成
    $('a', tocContainer).each((index, item) => {
      itemsOfToc.push({
        elm: item, // 目次の項目
        target: document.getElementById(item.dataset.target), // 目次の対象の見出し
        rect: { y: undefined, height: undefined } // 対象の矩形情報（後で生成）
      })
    });
  }
  // 目次の各項目の生成（再帰処理をしてる）
  function createItemOfToc(item) {
    switch (true) {
      case item.nodeName !== undefined: // タグの場合、<LI>を追加
        return '<li><a href="#' + item.id + '" data-target="' + item.id + '">' + item.textContent + '</a></li>';
      case item.length !== undefined: // 配列の場合、<UL>を追加し、中身を再帰処理で生成
        return '<li><ul>' + item.map(subitem => createItemOfToc(subitem)).join('') + '</ul></li>';
    }
  }

  // セクションの矩形サイズを更新
  function updateSectionSize() {
    const container = document.querySelector('#MainContentView > .md-content');
    for (let i = 0; i < itemsOfToc.length; i++) { // 目次管理用配列を回す
      const item = itemsOfToc[i];
      item.rect.y = item.target.offsetTop;
      item.rect.height = (i < itemsOfToc.length - 1 ? itemsOfToc[i + 1].target.offsetTop : container.offsetTop + container.clientHeight) - item.rect.y; // 最後の項目でなければ、次の項目のY座標、そうであれば、.md-contentの高さからセクションのサイズを計測
    }
    updateHighlightingOfToc();
  }

  // 目次のハイライトを更新
  function updateHighlightingOfToc() {
    const screenTop = window.scrollY;
    for (let i = 0; i < itemsOfToc.length; i++) { // 目次管理用配列を回す
      const item = itemsOfToc[i];
      const rect = intersect({y: screenTop, height: window.innerHeight}, item.rect); // セクションの矩形と、現在表示中の矩形を重ね合わせる
      if (rect.height > 0) { // 重なり合う領域があればハイライト
        item.elm.classList.add('current');
      } else {
        item.elm.classList.remove('current');
      }
    }
  }

  // 矩形の重ね合わせを計算
  function intersect(rect1, rect2) {
    const
      sy = Math.max(rect1.y, rect2.y),
      ey = Math.min(rect1.y + rect1.height, rect2.y + rect2.height),
      h = ey - sy;
    if (h > 0) {
      return { y: sy, height: h };
    }
    return { y: 0, height: 0 };
  }


  // 目次をクリックしたらスクロール
  function setupSmoothScroll() {
    $('#TableOfContents a').on('click', (e) => {
      history.replaceState('', '', e.delegateTarget.href);
      const target = document.getElementById(e.delegateTarget.dataset.target);
      if (target) {
        $('html').animate({
          scrollTop: target.offsetTop - 16,
          duration: 400
        });
      }
      return false;
    });
  }

}
