---
layout: simple
title: DRA メタデータ XML をアップロードした後、submission ステータスが一日待っても変わりません
category: faq
db:
  - dra
tags: 
  - メタデータ
date: 2021-12-16T01:39:46
lang: ja
---

D-way の DRA submission ページでメタデータ [XML をアップロード](/dra/submission.html#metadata-excel)、ブラウザーがタイムアウトした後、一日以上待っても submission status が変わらない場合があります。   
その場合、XML ファイルについて以下の点を確認し、必要に応じて XML を修正して再度アップロードします。不明な場合は [DRA に問い合わせます](/contact-ddbj.html)。

&middot; Run XML の checksum の値に空白が含まれている。

```
<FILE checksum="20e7fbbe6e8 2265383ad4d9e92a7463e" checksum_method="MD5" ascii_offset="!" quality_encoding="ascii" quality_scoring_system="phred" filetype="fastq" filename="Y1_Read1.fq.gz"/>
```