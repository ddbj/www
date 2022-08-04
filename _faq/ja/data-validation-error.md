---
layout: simple
title: データファイルの検証処理エラーへの対処方法は？
category: faq
db:
  - dra
tags: 
  - シークエンスデータ
date: 2013-10-07T14:48:54
lang: ja
---

### Make Sra Error {#make_sra_error}
**constraint violated while executing function within virtual database
module**

[リード名が Run 単位でユニーク](/faq/ja/data-files-sra.html)ではない可能性があります。

**path not found while accessing directory within file system module - no
message text available**

ファイルが認識されていません。次の場合にエラーになります。
- ファイル名に空白が含まれている
- ファイルがサブディレクトリ下にある
- fastq ファイルが tar などでまとめられている

### CheckSum Error {#check_sum_error}

Run に記載されている [md5
値](/dra/submission.html#supplement-md5)とサーバにアップロードされたファイルの
[md5
値](/dra/submission.html#supplement-md5)が異なっています。

まずはお手元のファイルの md5 値とメタデータに入力した md5 値が一致しているかどうかを確認します。
- メタデータに入力した md5 値が間違っている場合は、メタデータを修正します。
- 一致している場合は、転送中にファイルが破損した可能性があるので、ファイルを再アップロードします。

### File Name Error {#file_name_error}

**Undefined or File not found: @SQ SN:**

Bam ファイルの登録では Bam ファイルの他に「SN-リファレンス配列の対応表」が必要です。
詳細は以下をご参照ください。
https://www.ddbj.nig.ac.jp/dra/submission.html#bam-file



