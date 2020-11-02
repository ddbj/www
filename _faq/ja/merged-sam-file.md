---
layout: indexed_content
title: '[Detail view 画面] samtools view -hX out.bam>out.samXとmerged SAMがどのようなファイルなのかわかりません'
category: faq
db:
  - pipeline
date: 2014-06-05T16:43:18
lang: ja
---

## [Detail view 画面] samtools view -hX out.bam>out.samXとmerged SAMがどのようなファイルなのかわかりません

merged.samは、Detail view画面「Download merged pileup file」枠内のファイルの事であると思いますが、これは染色体ごとのsamの結果を１つに合わせたものとなっております。out.samX は<pre>samtools view -hXUsage: samtools view [options]<in.bam>|<in.sam>[region1 [...]]Options: -h     print header for the SAM output            -X     output FLAG in string (samtools-C specific)</in.sam></in.bam></pre><br>samとsamXで2カラムめの表記が変わります。以下をご参考ください。<br><a href="http://sourceforge.net/apps/mediawiki/samtools/index.php?title=SAM_FAQ#The_integer_FLAG_field_is_not_friendly_to_eyes" rel="nofollow" style="text-decoration:underline;background-color:initial;font-weight:bold;padding-top:2px;padding-right:2px;padding-bottom:2px;padding-left:2px">http://sourceforge.net/apps/mediawiki/samtools/index.php?title=SAM_FAQ#The_integer_FLAG_field_is_not_friendly_to_eyes</a><br>merged SAMは染色体１本の場合out.sam(Downloadのファイルは圧縮されているが）中身は同じです。