---
layout: simple
title: BioSample のサンプル属性ファイルがアップロードできません
category: faq
db:
  - biosample
tags: 
  - サンプル属性
date: 2021-09-22T10:00:00
lang: ja
---

**Header must be enter with sample name**

tsv ファイル（タブ区切りテキスト）ではなく, エクセルファイルをアップロードしている場合はエラーになります。

tsv ファイルをアップロードしている場合、二行目から一行一サンプルで
サンプル情報を記入します。[登録例](https://docs.google.com/spreadsheets/d/1zVgr1JWDVsHwotDBfhhp32KCp8cKCv83UQ3Hygmcewg/edit#gid=726659595)をご参考ください。

その他のエラーメッセージやValidation ルールについては [Validation rules ページ](/biosample/validation.html)をご覧いただき、修正したファイルをアップロードしてください。

