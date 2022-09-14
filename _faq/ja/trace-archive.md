---
layout: simple
title: 波形データを登録できますか？
category: faq
db:
  - dta
  - dra
tags: 
  - シークエンスデータ
date: 2021-05-16T10:21:37
lang: ja
---

キャピラリ式シークエンサからの波形データ（クロマトグラム）を受付けていた [DDBJ Trace Archive](/dta/index.html) は SRA に統合される予定であるため、
基本的に波形データは受付けていません。塩基配列と Quality value から構成される生データを fastq ファイルとして DRA Experiment [Instrument Model](/dra/metadata.html#Instrument) で Genetic Analyzer シリーズの機種を選択して DRA に登録してください。

