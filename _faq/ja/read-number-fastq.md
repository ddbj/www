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

## DRA で公開されている fastq のリード数が生データのそれよりも少ないのは何故でしょうか?

<p>DRA では <a href="http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc">NCBI SRA Toolkit</a> に含まれている <a href="http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc&amp;f=fastq-dump">fastq-dump</a> を使い，以下のオプションで生データである SRA ファイルから fastq ファイルを作成しています。</p>
<p class="code break">fastq-dump -M 25 -E --skip-technical --split-3 -W <span class="italic">&lt;SRA file&gt;</span></p>
<div class="sub_index">
  <ul>
    <li>-M 25: 25 塩基以上の配列のみを含める。デフォルトは 25。</li>
    <li>-E: リードの開始，もしくは終わりに 10 以上の N が存在しない</li>
    <li>--skip-technical: technical read を除き biological read のみを出力</li>
    <li>--split-3: ペアリードで最初と二番目の biological read をそれぞれ *_1.fastq と *_2.fastq として出力する。一つしか biological read が存在しない場合，*.fastq として出力する。</li>
    <li>-W: 指定されていた場合，left と right を clip する</li>
  </ul>
</div>
<!-- .sub_index -->
<p>上記の出力条件でリードがフィルタリング，トリミングされるため，一般的に fastq のリード数は SRA ファイルのそれよりも少なくなっています。フィルタリング，トリミングされていない fastq ファイルを得るには以下のコマンドで fastq を生成します。</p>
<p class="code break">fastq-dump -M 1 --split-3 <span class="italic">&lt;SRA file&gt;</span></p>