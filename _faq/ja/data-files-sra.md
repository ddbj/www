---
layout: simple
title: DRA データファイルはどのように処理されますか？
category: faq
db:
  - dra
tags: 
  - シークエンスデータ
date: 2014-12-25T10:21:37
lang: ja
---

アップロードされたデータファイルは Run 単位で処理されます。Run にリンクしている全てのデータファイルから [SRA toolkit](http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc)
により[バイナリーの SRA ファイル](http://www.ncbi.nlm.nih.gov/books/NBK47539/#SRA_Overview_BK.SRA_Architecture)が作成されます。この過程でリード長やリード名の書式などが全ての配列に渡ってチェックされます。  
元々のリード名は Run 単位でユニークである必要があります。

リード名は編集され、DRR アクセッション番号に連番が付された ID が自動的に挿入されます。ファイル名には DRR
アクセッション番号が付与されます ([例:
DRR000001](http://trace.ncbi.nlm.nih.gov/Traces/sra/?view=run_browser&run=DRR000001))。filetype
に [fastq](/dra/metadata.html#File_Type) を指定した場合、リード名は DRR 番号に連番が付された ID で置換されます ([例:
DRR030615](http://trace.ncbi.nlm.nih.gov/Traces/sra/?view=run_browser&run=DRR030615))。

Experiment で PAIRED が指定されている場合、Run 単位でペアリードが自動的にまとめられます。

DRA では [SRA toolkit](http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc)
を使い SRA ファイルから汎用されている fastq ファイルを生成し、SRA ファイルとともにダウンロード提供しています。

ペアリードの場合二種類以上の fastq ファイルが生成されます。ペアリードはファイル名に _1 (例
DRR000001_1.fastq.bz2) と _2 (例 DRR000001_2.fastq.bz2) が付いた fastq
ファイルに分けて出力されます。ペアが見付からなかったリードは _1 や _2 が付いていないファイル (例
DRR000001.fastq.bz2) にまとめられます。
