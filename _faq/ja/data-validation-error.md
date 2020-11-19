---
layout: indexed_content
title: データファイルの検証処理エラーへの対処方法は？
category: faq
db:
  - dra
tags: 
  - シークエンスデータ
date: 2013-10-07T14:48:54
lang: ja
---

## データファイルの検証処理エラーへの対処方法は？

<p></p>
<div class="faq_list">
  <div id="length" class="faq">
    <p class="question">data excessive while validating formatter within short read archive module - cumulative length of reads data in file(s): 152 is greater than spot length declared in experiment: 76 in spot 'xxxx'</p>
    <p class="answer">Experiment の <a href="/dra/submission.html#Spot_Length">Spot length</a> に記載されているリード長と実際の配列長が異なっています。ペアリードの場合は両者を足し合わせた長さを Spot length に記載します。</p>
  </div>
  <div id="fastq" class="faq">
    <p class="question">fastq-load err: data inconsistent while validating formatter within short read archive module - cumulative length of reads data in file(s): 70 is less than spot length declared in experiment: 152, most probably mate-pair is absent in spot 'xxxx'</p>
    <p class="answer">Run の <a href="/dra/submission.html#File_Type">filetype</a> が 'fastq' の場合，「リード長が揃っていること」と「ペアの場合，ペアとなっているファイル中でペアリードが同じ順番で記載されていること」が必要になり，そうではない場合にエラーになります。Run の <a href="/dra/submission.html#File_Type">filetype</a> を 'generic_fastq' に変更します。</p>
  </div>
  <div id="violated" class="faq">
    <p class="question">constraint violated while executing function within virtual database module</p>
    <p class="answer"><a href="/faq/index.html#data-files-sra">リード名が Run 単位でユニーク</a>ではない可能性があります。</p>
  </div>
  <div id="path_not_found" class="faq">
    <p class="question">path not found while accessing directory within file system module - no message text available</p>
    <p class="answer">ファイルが認識されていません。次の場合にエラーになります。「ファイル名に空白が含まれている」，「ファイルがサブディレクトリ下にある」，「fastq ファイルが tar などでまとめられている」。</p>
  </div>
  <div id="md5" class="faq">
    <p class="question">CheckSum Error</p>
    <p class="answer">Run に記載されている <a href="/dra/submission.html#supplement-md5">md5 値</a>とサーバにアップロードされたファイルの <a href="/dra/submission.html#supplement-md5">md5 値</a>が異なっています。「ファイルの破損がないかどうか」「メタデータに入力した md5 値が間違っていないかどうか」を確認します。</p>
  </div>
</div>
