---
layout: simple
title: セカンダリアクセッション番号とは何ですか
category: faq
db:
  - ddbj
tags: 
  - アクセッション番号
date: 2014-06-03T16:48:55
lang: ja
---



<p>DDBJ を含む<a href="/about/insdc.html">国際塩基配列データベース</a> が、登録された塩基配列データに対して発行する番号を<a href="/documents/accessions.html">アクセッション番号 (accession number)</a> と呼んでいます。<br><a href="/ddbj/flat-file.html">DDBJ 公開形式 (flat file)</a> においては <a href="/ddbj/flat-file.html#AccessionB">ACCESSION</a> 行に記載されています。</p>
<p>複数エントリの統合、大幅な内容変更など、既に登録された塩基配列の更新に相当する場合でも、新規に登録し直して アクセッション番号を発行することがあります。 この際に、新規のアクセッション番号 (プライマリアクセッション番号) に対して、既存のアクセッション番号をセカンダリアクセッション番号とすることがあります。</p>
<p>flat file には、先頭にプライマリアクセッション番号、２つ目以降にセカンダリアクセッション番号を記載します。</p>
<pre class="flatfile"><strong>例</strong>ACCESSION   <span style="border-bottom:solid 3px #ff0000;">AB999999</span> <span style="border-bottom:solid 3px #0000ff;">AB888888</span> <span style="border-bottom:solid 3px #0000ff;">AB777777</span></pre>
<dl>
  <dd><span style="color: #ff0000">AB999999 -- primary accession number</span></dd>
  <dd><span style="color: #0000ff">AB888888 AB777777 -- secondary accession number</span></dd>
</dl>
<p>通常は、プライマリアクセッション番号とセカンダリアクセッション番号のどちらで検索しても、変更後のデータが返ります。</p>
<p>ただし、セカンダリアクセッション番号のエントリが既に公開済みの場合、データベース上から抹消される訳ではありませんので、<a href="http://getentry.ddbj.nig.ac.jp/top-j.html">getentry</a> では、直接番号を指定することで検索と閲覧が可能です。</p>
<dl><dt>参考</dt>
  <dd>
    <ul>
      <li><a href="/services/getentry.html">getentry ヘルプ</a></li>
      <li><a href="/about/insdc-status-e">INSDC Status Document</a>: Replaced</li>
      <li><a href="/faq/ja/why-retracted-data-available.html">公開を取り消したデータが現在も参照できるのはなぜですか?</a></li>
    </ul>
  </dd>
</dl>
