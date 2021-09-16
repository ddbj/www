---
layout: simple
title: DRA で公開されている fastq のリード数が生データのそれよりも少ないのは何故でしょうか?
category: faq
db:
  - dra
tags: 
  - データのダウンロード
date: 2013-10-08T10:39:46
lang: ja
---

DRA では [NCBI SRA Toolkit](http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc) に含まれている [fastq-dump](http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc&amp;f=fastq-dump) を使い，以下のオプションで生データである SRA ファイルから fastq ファイルを作成しています。

```
fastq-dump -M 25 -E --skip-technical --split-3 -W <SRA file>
```
 - -M 25: 25 塩基以上の配列のみを含める。デフォルトは 25。
 - -E: リードの開始，もしくは終わりに 10 以上の N が存在しない
 - --skip-technical: technical read を除き biological read のみを出力
 - --split-3: ペアリードで最初と二番目の biological read をそれぞれ *_1.fastq と *_2.fastq として出力する。一つしか biological read が存在しない場合，*.fastq として出力する。
 - -W: 指定されていた場合，left と right を clip する

上記の出力条件でリードがフィルタリング，トリミングされるため，一般的に fastq のリード数は SRA ファイルのそれよりも少なくなっています。フィルタリング，トリミングされていない fastq ファイルを得るには以下のコマンドで fastq を生成します。
```
fastq-dump -M 1 --split-3 <SRA file>
```