---
layout: simple
title: DRASearch で DRA 番号が検索できません。論文ではどのように引用したらよいでしょうか？
category: faq
db:
  - dra
tags: 
  - アクセッション番号
date: 2021-11-05T01:53:52
lang: ja
---

[DRASearch](https://ddbj.nig.ac.jp/DRASearch/) はデータ量が当初の想定を超えて増加しているため、インデックス処理に遅れが生じています。    
特に月初に NCBI から公開されるフルセットのメタデータ XML のインデックス処理に時間がかかるため、月初から1-2週間は DRA 公開データのインデックス処理が遅延することがあります。   

[DRA ftp](https://ddbj.nig.ac.jp/public/ddbj_database/dra) ではスパコンのトラブルが無ければ、公開日の翌日にメタデータ XML と sra/fastq ファイルが公開されます。    
例 [DRA000001](https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA000/DRA000001/)    
DRASearch でインデックスされていない場合、ftp のリンクを論文査読者に提出することをご検討ください。    

[DRASearch](https://ddbj.nig.ac.jp/DRASearch/) で検索できない場合、[NCBI SRA](https://www.ncbi.nlm.nih.gov/sra) や [ENA](https://www.ebi.ac.uk/ena/browser/search) で検索を試してみるよう、お願いいたします。   
NCBI や ENA で検索できる場合、そちらの URL を論文査読者にご提出ください。    

DDBJ センターでは[新しい検索システム](https://ddbj.nig.ac.jp/search)を開発しております。   
しかし、新システムは NCBI 経由で DRA 公開データを取り込んでおり、NCBI SRA での DRA データミラーリングが遅れると、新検索システムでの公開も遅れてしまいます。   
この点を改善すべく新システムでは DRA 公開データを DRA ftp から取り込むべく開発を続けておりますが、実現時期は2021年12月頃になる見込みです。





