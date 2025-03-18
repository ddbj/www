---
layout: simple
title: SNP のデータを DDBJ に登録すると dbSNP にも反映されますか？
category: faq
db:
  - ddbj
  - togovar
tags: 
  - 登録
date: 2014-06-03T15:12:04
lang: ja
---

ヒトの SNP データは [TogoVar-repository](/togovar/index.html) で受付けています。    
TogoVar-repository はヒトのバリアントと頻度情報のための公的データベースで、バリアントを「50 bp 以下の短いバリアント」と「50 bp よりも大きい構造バリアント」の二つに分けて受付けています。

* 短いバリアント: 50 bp 以下のバリアント。一塩基バリアントや短い挿入・欠失。データは NCBI [dbSNP](https://ncbi.nlm.nih.gov/snp/) と交換されます。
* 構造バリアント: 50 bp よりも大きい構造バリアント。挿入、欠失、重複、逆位、転座や複雑なバリアント。データは NCBI [dbVar](https://ncbi.nlm.nih.gov/dbvar/) と交換されます。

TogoVar-repository と dbSNP/dbVar はヒトのバリアントのみ受付けています。EBI の [European Variation Archive](https://www.ebi.ac.uk/eva/) はヒトとヒト以外の生物からのバリアントを受付けています。

