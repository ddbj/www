---
layout: simple
title: BioProject/BioSample/塩基配列データの連動公開の仕組みは？
category: faq
db:
  - bioproject
  - biosample
  - dra
tags: 
  - データの公開
date: 2014-12-15T11:16:30
lang: ja
---



<p>相互にリンクされている <a href="/bioproject/index.html">BioProject</a>，<a href="/biosample/index.html">BioSample</a>，<a href="/ddbj/submission.html">DDBJ</a> と <a href="/dra/index.html">DRA</a> に登録された塩基配列データの連動公開の仕組みは以下のようになっています。</p>
<div class="sub_index">
  <ul class="disc">
    <li>BioProject の公開はリンクされているデータの連動公開を引き起こしません。</li>
    <li>BioSample の公開はリンクされている BioProject の連動公開を引き起こしますが，塩基配列データの連動公開を引き起こしません。</li>
    <li>DDBJ と DRA の塩基配列データはリンクしている BioProject と BioSample の連動公開を引き起こします。</li>
    <li>DRA の公開は DDBJ の連動公開を引き起こしません。</li></ul>
</div>
<p id="release_unit" class="attention red">DRA ではメタデータとシークエンスデータは DRA 登録 (submission) 単位で公開されます。</p>
<figure><a href="{{ site.baseurl }}/assets/images/books/bp-bs-seq_release.jpg" title="BioProject/BioSample/塩基配列データの連動公開"><img src="{{ site.baseurl }}/assets/images/books/bp-bs-seq_release.jpg" alt="BioProject/BioSample/塩基配列データの連動公開" title="BioProject/BioSample/塩基配列データの連動公開" class="w450"></a>
  <figcaption class="caption">BioProject/BioSample/塩基配列データの連動公開</figcaption>
</figure>
<p>DRA Handbook: <a href="/dra/submission.html#data-release">DRA のデータ公開</a><br>BioProject Handbook: <a href="/bioproject/submission.html#data-release">BioProject のデータ公開</a><br>BioSample Handbook: <a href="/biosample/submission.html#sample-release">BioSample のデータ公開</a></p>
