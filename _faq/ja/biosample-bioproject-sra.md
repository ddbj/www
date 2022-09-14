---
layout: simple
title: BioSample、DRA Experiment、Run とデータファイルとの関係は?
category: faq
db:
  - biosample
  - dra
tags: 
  - メタデータの登録
date: 2014-06-04T17:12:53
lang: ja
---

BioSample はデータベースに登録する実験データを得るために使われた生物学的な試料やサンプルに対して作成します。詳細は[サンプルの粒度](/biosample/overview.html#granularity)をご覧ください。  
DRA のデータファイルは一つの BioSample にしかリンクできないことに注意してください。

[Experiment](/dra/metadata.html#Experiment) は特定のサンプルに由来するシークエンス用ライブラリーとシークエンス方法を記載します。データについて一般に公開される情報の多くが Experiment に記載されます。

[Run](/dra/metadata.html#Run) は Experiment にリンクすべきデータファイルをまとめるオブジェクトで、データについての内容説明はあまり含まれていません。
Run にリストされたすべてのデータファイルはアーカイブ用の SRA ファイル (配布用の fastq ファイル) にマージされます。
