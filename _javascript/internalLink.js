/* global $ */

// 内部リンク
export default function internalLink() {
  let itemsOfToc = [];

  createToc(); // 目次の生成
  setupSmoothScroll(); // 目次をクリックしたらスクロール
  $(window).on('resize', updateSectionSize).trigger('resize'); // セクションの矩形サイズを更新
  $(window).on('scroll', updateHighlightingOfToc).trigger('scroll'); // 目次のハイライトを更新
  // ハッシュが指定されていたら、そこまでスクロール
  const hash = (window.location.hash.substr(1));
  if (hash) {
    const decodedHash = decodeURIComponent(hash);
    const target = itemsOfToc.filter(item => item.target.id === decodedHash);
    if (target) {
      $(target[0].elm).trigger('click');
    }
  }


  // 目次の生成
  function createToc() {
    const tocContainer = document.getElementById('TableOfContents');
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
      // make table of content
      tocContainer.innerHTML = '<ul>' + outline.map(item => createItemOfToc(item)).join('').replace(/<li><ul><\/ul><\/li>/g, '').replace(/<\/li><li><ul><\/ul>/g, '<ul>') + '</ul>';
    }
    $('a', tocContainer).each((index, item) => {
      itemsOfToc.push({
        elm: item,
        target: document.getElementById(item.dataset.target),
        rect: { y: undefined, height: undefined }
      })
    });
  }
  // 目次の各項目の生成（再帰処理）
  function createItemOfToc(item) {
    switch (true) {
      case item.nodeName !== undefined:
        return '<li><a href="#' + item.id + '" data-target="' + item.id + '">' + item.textContent + '</a></li>';
      case item.length !== undefined:
        return '<li><ul>' + item.map(subitem => createItemOfToc(subitem)).join('') + '</ul></li>';
    }
  }

  // セクションの矩形サイズを更新
  function updateSectionSize() {
    const container = document.querySelector('#MainContentView > .md-content');
    for (let i = 0; i < itemsOfToc.length; i++) {
      const item = itemsOfToc[i];
      item.rect.y = item.target.offsetTop;
      item.rect.height = (i < itemsOfToc.length - 1 ? itemsOfToc[i + 1].target.offsetTop : container.offsetTop + container.clientHeight) - item.rect.y;
    }
    updateHighlightingOfToc();
  }

  // 目次のハイライトを更新
  function updateHighlightingOfToc() {
    const screenTop = window.scrollY;
    for (let i = 0; i < itemsOfToc.length; i++) {
      const item = itemsOfToc[i];
      const rect = intersect({y: screenTop, height: window.innerHeight}, item.rect);
      if (rect.height > 0) {
        item.elm.classList.add('current');
      } else {
        item.elm.classList.remove('current');
      }
    }
  }

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
