---
layout: simple
title: BioSample のサンプル属性ファイルをアップロードできません
category: faq
db:
  - biosample
tags: 
  - サンプル属性
date: 2021-09-22T10:00:00
lang: ja
---

### Header must be enter with sample name {#header}

タブ区切りテキストファイル（tsv）ではなく、エクセルファイルをアップロードするとこのエラーになります。  
tsv ファイルをアップロードしている場合、二行目から一行一サンプルでサンプル情報を記入します。[登録例](https://docs.google.com/spreadsheets/d/1zVgr1JWDVsHwotDBfhhp32KCp8cKCv83UQ3Hygmcewg/edit#gid=726659595)

その他のエラーメッセージや Validation ルールについては [Validation rules ページ](/biosample/validation.html)を参照し、修正したファイルをアップロードしてください。

<figure><a href="/assets/images/books/bs-tsv-1.jpg" title="正しい属性ファイルの例"><img src="/assets/images/books/bs-tsv-1.jpg" alt="正しい属性ファイルの例" title="正しい属性ファイルの例" class="w400"></a>
  <figcaption class="caption">正しい属性ファイルの例</figcaption>
</figure>

<figure><a href="/assets/images/books/bs-tsv-2.jpg" title="ヘッダーが無い不正な属性ファイルの例"><img src="/assets/images/books/bs-tsv-2.jpg" alt="ヘッダーが無い不正な属性ファイルの例" title="ヘッダーが無い不正な属性ファイルの例" class="w400"></a>
  <figcaption class="caption">ヘッダーが無い不正な属性ファイルの例</figcaption>
</figure>

<figure><a href="/assets/images/books/bs-tsv-3.jpg" title=" サンプル行が離れている不正な属性ファイルの例"><img src="/assets/images/books/bs-tsv-3.jpg" alt=" サンプル行が離れている不正な属性ファイルの例" title=" サンプル行が離れている不正な属性ファイルの例" class="w400"></a>
  <figcaption class="caption"> サンプル行が離れている不正な属性ファイルの例</figcaption>
</figure>


