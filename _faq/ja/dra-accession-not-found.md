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

DRA000001 は [DRASearch](https://ddbj.nig.ac.jp/DRASearch/) 

[DRA ftp](https://ddbj.nig.ac.jp/public/ddbj_database/dra) ではスパコンのトラブルが無ければ、公開日の翌日にメタデータ XML と sra/fastq ファイルが公開されます。    
例 [DRA000001](https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA000/DRA000001/)    
DRASearch でインデックスされていない場合、ftp のリンクを論文査読者に提出することをご検討ください。    

[DRASearch](https://ddbj.nig.ac.jp/DRASearch/) で検索できない場合、[NCBI SRA](https://www.ncbi.nlm.nih.gov/sra) や [ENA](https://www.ebi.ac.uk/ena/browser/search) で検索を試してみるよう、お願いいたします。   
NCBI や ENA で検索できる場合、そちらの URL を論文査読者にご提出ください。    

例 DRA011729
* ftp: accessible [https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA011/DRA011729/](https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA011/DRA011729/)
* DRASearch: not found [https://ddbj.nig.ac.jp/DRASearch/submission?acc=DRA011729](https://ddbj.nig.ac.jp/DRASearch/submission?acc=DRA011729)
* NCBI SRA: not found [https://www.ncbi.nlm.nih.gov/sra/DRA011729](https://www.ncbi.nlm.nih.gov/sra/DRA011729)
* ENA: submission and sample metadata are indexed [https://www.ebi.ac.uk/ena/browser/view/DRA011729](https://www.ebi.ac.uk/ena/browser/view/DRA011729)

DDBJ センターでは[新しい検索システム](https://ddbj.nig.ac.jp/search)を開発しております。   
しかし、新システムは NCBI 経由で DRA 公開データを取り込んでおり、NCBI SRA での DRA データミラーリングが遅れると、新検索システムでの公開も遅れてしまいます。   
この点を改善すべく新システムでは DRA 公開データを DRA ftp から取り込むべく開発を続けておりますが、実現時期は2021年12月頃になる見込みです。

DRASearch と新検索システムでのアクセッション番号指定方法は以下になります。    

Submission accession:    
* DRASearch: [https://ddbj.nig.ac.jp/DRASearch/submission?acc=DRA000001](https://ddbj.nig.ac.jp/DRASearch/submission?acc=DRA000001)
* 新検索システム: [https://ddbj.nig.ac.jp/resource/dra-submission/DRA000001](https://ddbj.nig.ac.jp/resource/dra-submission/DRA000001)

Experiment accession:    
* DRASearch: [https://ddbj.nig.ac.jp/DRASearch/experiment?acc=DRX000001](https://ddbj.nig.ac.jp/DRASearch/experiment?acc=DRX000001)
* 新検索システム: [https://ddbj.nig.ac.jp/resource/dra-experiment/DRX000001](https://ddbj.nig.ac.jp/resource/dra-experiment/DRX000001)

Run accession:    
* DRASearch: [https://ddbj.nig.ac.jp/DRASearch/run?acc=DRR000001](https://ddbj.nig.ac.jp/DRASearch/run?acc=DRR000001)
* 新検索システム: [https://ddbj.nig.ac.jp/resource/dra-run/DRR000001](https://ddbj.nig.ac.jp/resource/dra-run/DRR000001)

[DRASearch](https://ddbj.nig.ac.jp/DRASearch/) は法定停電にあわせて実施される次回スパコンメンテナンス [2021年11月10日～11/19日 DDBJ センターの登録検索解析サービス停止のお知らせ](/news/ja/2021-10-15.html) 時に閉鎖する予定です。   
閉鎖後は DRASearch へのアクセッション番号リンクは対応する新検索システムのリンクにリダイレクトされます。    

新検索系は DRA データを NCBI 経由で取り込んでいるため、NCBI のミラーリングが遅延するとインデックスも遅延します。これを改善すべく DRA データは DRA ftp から直接取得する機能開発は2021年12月頃になる見込みです。


