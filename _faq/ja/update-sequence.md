---
layout: indexed_content
title: 配列を更新したい
category: faq
db:
  - ddbj
tags: 
  - 更新
date: 2014-05-30T18:09:07
lang: ja
---

## 配列を更新したい

<p>依頼者のお名前、ご所属を明記の上、以下の項目について <a href="/contact.html#to-ddbj">DDBJへのお問い合わせ</a> よりお知らせください。nn<br>宛先: <img src="{{ site.baseurl }}/assets/images/news/ad_updt.gif" alt="ddbjupdt#64;ddbj.nig.ac.jp" title="ad_updt" width="180" height="19" class="alignnone size-full wp-image-1298"></p>
<ul>
  <li>アクセッション番号:</li>
  <li>変更箇所:</li>
  <li>更新後の総塩基数:</li>
  <li>配列の更新に伴う Feature の塩基番号など、変更項目の詳細:</li>
  <li>更新後の全長配列: 以下のフォーマットでお願いします。</li>
</ul>
<pre class="code">&gt;AB******   &lt;--- 当該データのアクセッション番号<br>aaaaaaaaaattttttttttggggggggggccccccccccaaaaaaaaaatttttttttt<br>ggggggggggccccccccccaaaaaaaaaattttttttttggggggggggcccccccccc<br>//<br>&gt;AB******<br>aaaaaaaaaattttttttttggggggggggccccccccccaaaaaaaaaatttttttttt<br>ggggggggggccccccccccaaaaaaaaaattttttttttggggggggggcccccccccc<br>aaaaaaaaaat<br>//</pre>
<ul>
  <li>ヘッダ行; リダイレクション "&gt;" のあとにスペースなしでアクセッション番号。</li>
  <li>塩基配列; 半角６０文字/行の fasta 類似フォーマットです。</li>
  <li>終了フラグ; "//" を入力してください。</li>
</ul>