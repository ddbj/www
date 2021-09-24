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
**data excessive while validating formatter within short read archive
module - cumulative length of reads data in file(s): 152 is greater than
spot length declared in experiment: 76 in spot 'xxxx'**

Run の [filetype](/dra/submission.html#File_Type) で ‘fastq’ を選択している場合、Experiment の [Spot length](/dra/submission.html#Spot_Length) に記載されているリード長と実際の配列長が一致しなければなりません。ペアリードの場合は両者を足し合わせた長さが Spot length に相当します。もし、リード長が一定でない場合は Run の filetype で ‘generic_fastq’ を選択し、平均の配列長を記載してください。

**fastq-load err: data inconsistent while validating formatter within
short read archive module - cumulative length of reads data in file(s):
70 is less than spot length declared in experiment: 152, most probably
mate-pair is absent in spot 'xxxx'**

Run の [filetype](/dra/submission.html#File_Type) が 'fastq'
の場合，「リード長が揃っていること」と「ペアの場合，ペアとなっているファイル中でペアリードが同じ順番で記載されていること」が必要になり，そうではない場合にエラーになります。これらを揃えるか、Run の [filetype](/dra/submission.html#File_Type) を 'generic\_fastq' に変更します。

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
以下を確認します。
- ファイルの破損がないかどうか
- メタデータに入力した md5 値が間違っていないかどうか

### File Name Error {#file_name_error}

**Undefined or File not found: @SQ SN:**

Bam ファイルの登録では Bam ファイルの他に「SN-リファレンス配列の対応表」が必要です。
詳細は以下をご参照ください。
https://www.ddbj.nig.ac.jp/dra/submission.html#bam-file



