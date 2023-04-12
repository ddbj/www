---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Expression analysis using transcriptome as references
category: gea
current_tab: submission overview
lang: ja
---

リファレンスゲノムが整備されていない生物の RNA-seq データから転写産物の de novo アセンブリを構築し、アセンブリをリファレンスとしてリードから発現量を取得する研究が広く行われています。  
本ページではそのようにして得られた発現データと転写産物アセンブリの登録方法を説明しています。

## 発現データ  {#expression}

GEA の[解析データファイル](/gea/datafile.html#seq_proc) (processed data file) として遺伝子や転写産物の発現量 (カウント) を登録します。
遺伝子と転写産物は、RefSeq、Ensembl や INSDC の ID と対応がとれるようにします。

## Transcriptome Shotgun Assembly {#tsa}

転写産物アセンブリ配列は DDBJ [Transcriptome Shotgun Assembly (TSA)](/ddbj/tsa.html) として INSDC に登録することを検討してください。
TSA の遺伝子アノテーションは必須ではありません。  
[TSA](/ddbj/tsa.html) には RNA-Seq リードの混合アセンブルなどのように、複数サンプルをまとめてアセンブルした配列を登録することができます。

