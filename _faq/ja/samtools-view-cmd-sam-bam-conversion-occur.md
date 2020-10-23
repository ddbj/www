---
layout: indexed_content
title: [Detail view 画面] samtools view -bS -o out.bam out.sam このコマンドでSAM--->BAM変換するのか？
category: faq
db:
  - pipeline
date: 2014-06-05T16:39:50
lang: ja
---

## [Detail view 画面] samtools view -bS -o out.bam out.sam このコマンドでSAM--->BAM変換するのか？

samtools view はレファレンス配列(ゲノム)へのマップ結果のうち、特定領域の結果のみ出力するコマンドです。しかし、基本的に許可していないので、レファレンス配列(ゲノム)全体での結果となります。<br><a href="http://samtools.sourceforge.net/samtools.shtml#3" rel="nofollow" style="text-decoration:underline;background-color:initial;font-weight:bold;padding-top:2px;padding-right:2px;padding-bottom:2px;padding-left:2px">http://samtools.sourceforge.net/samtools.shtml#3</a>