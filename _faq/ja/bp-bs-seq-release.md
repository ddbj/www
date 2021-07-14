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

相互にリンクされている
[BioProject](/bioproject/index.html)，[BioSample](/biosample/index.html)，[DDBJ](/ddbj/submission.html)
と [DRA](/dra/index.html) に登録された塩基配列データの連動公開の仕組みは以下のようになっています。

- BioProject と BioSample の公開はリンクされているデータの連動公開を引き起こしません。
- BioSample の公開は derived_from 属性で引用されている BioSample の連動公開を引き起こします。
- DDBJ と DRA Experiment、Run、Analysis の公開はリンクしている BioProject と BioSample の連動公開を引き起こします。
- DRA の公開は DDBJ の連動公開を引き起こしません。

<p class="attention">DRA ではメタデータとシークエンスデータは DRA 登録 (submission) 単位で公開されます。</p>

<figure><a href="{{ site.baseurl }}/assets/images/books/bp-bs-seq_release.jpg" title="Release of linked BioProject/BioSample/sequence records"><img src="{{ site.baseurl }}/assets/images/books/bp-bs-seq_release.jpg" alt="Release of linked BioProject/BioSample/sequence records" title="Release of linked BioProject/BioSample/sequence records" class="w450"></a>
  <figcaption class="caption">BioProject/BioSample/塩基配列データの連動公開</figcaption>
</figure>

DRA Handbook: [DRA のデータ公開](/dra/submission.html#data-release)  
BioProject Handbook: [BioProject
のデータ公開](/bioproject/submission.html#data-release)  
BioSample Handbook: [BioSample
のデータ公開](/biosample/submission.html#sample-release)
