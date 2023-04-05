---
layout: simple
title: BioProject/BioSample/実験データの連動公開の仕組みは？
category: faq
db:
  - bioproject
  - biosample
  - dra
  - gea
  - metabobank
tags: 
  - データの公開
date: 2014-12-15T11:16:30
lang: ja
---

相互にリンクされている
[BioProject](/bioproject/index.html)、[BioSample](/biosample/index.html)、[DDBJ](/ddbj/submission.html)、[DRA](/dra/index.html) と [MetaboBank](/metabobank/index.html) に登録されたデータの連動公開の仕組みは以下のようになっています。

- BioProject と BioSample の公開はリンクされているデータの連動公開を引き起こしません。
- BioSample の公開は derived_from 属性で引用されている BioSample の連動公開を引き起こします。
- DDBJ、DRA、GEA と MetaboBank の公開はリンクしている BioProject と BioSample の連動公開を引き起こします。
- DDBJ の公開は DBLINK で参照している DRA Run の公開を引き起こします。
- DRA の公開は DDBJ の連動公開を引き起こしません。

<p class="attention">DRA ではメタデータとシークエンスデータは DRA 登録 (submission) 単位で公開されます。</p>

<figure><a href="/assets/images/books/bp-bs-seq_release.jpg" title="Release of linked BioProject/BioSample/sequence records"><img src="/assets/images/books/bp-bs-seq_release.jpg" alt="Release of linked BioProject/BioSample/sequence records" title="Release of linked BioProject/BioSample/sequence records" class="w400"></a>
	<figcaption class="caption">BioProject/BioSample/実験データの連動公開</figcaption>
</figure>
<br>
<br>
<br>
<figure><a href="/assets/images/books/bp-bs-seq_release-2.jpg" title="Release of the other data linked to BioProject/BioSample"><img src="/assets/images/books/bp-bs-seq_release-2.jpg" alt="Release of the other data linked to BioProject/BioSample" title="Release of the other data linked to BioProject/BioSample" class="w550"></a>
	<figcaption class="caption">BioProject/BioSample にリンクしている別の実験データの連動公開</figcaption>
</figure>
<br>
<br>
<br>
<figure><a href="/assets/images/books/bp-bs-seq_release-3.jpg" title="Release of derived BioSample"><img src="/assets/images/books/bp-bs-seq_release-3.jpg" alt="Release of derived BioSample" title="Release of derived BioSample" class="w400"></a>
	<figcaption class="caption">派生 BioSample の連動公開</figcaption>
</figure>

