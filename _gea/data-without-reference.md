---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Data without reference sequences
category: gea
current_tab: submission overview
lang: ja
---

リファレンス配列が存在しない生物の RNA-seq データから転写産物の de novo アセンブリを構築し、アセンブリに対してリードをアライメントすることで遺伝子発現データを得ることが広く行われています。  
本ページではそのようにして得られた遺伝子発現データと転写産物アセンブリの登録方法を説明しています。

## 遺伝子発現データ  {#expression}

GEA の[解析データファイル](/gea/datafile.html#seq_proc) (processed data file) として遺伝子やコンティグの発現量 (カウント) を登録します。
コンティグ発現量の場合、コンティグと遺伝子、もしくは、RefSeq や Ensembl ID との対応表も合わせて解析データファイルとして登録します。

## Transcriptome Shotgun Assembly {#tsa}

転写産物アセンブリ配列は DDBJ [Transcriptome Shotgun Assembly (TSA)](/ddbj/tsa.html) として INSDC に登録することを検討してください。
TSA の遺伝子アノテーションは必須ではありません。  
[TSA](/ddbj/tsa.html) には複数サンプルをまとめてアセンブルした配列を登録することができます。

