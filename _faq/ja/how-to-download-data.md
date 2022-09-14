---
layout: simple
title: 公開されている DRA データにアクセスする方法を教えてください
category: faq
db:
  - dra
tags: データのダウンロード
date: 2013-10-08T10:31:22
lang: ja
---

https/ftp/スパコンでアクセスすることができます。
アクセッション番号に対するファイルパスは [DDBJ Search](https://ddbj.nig.ac.jp/search) で検索します。

* https: https://ddbj.nig.ac.jp/public/ddbj_database/dra
* ftp: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra
* ascp: anonftp@ascp.ddbj.nig.ac.jp:/ddbj_database/dra
* スパコン: /usr/local/resources/dra

### https {#https}

ブラウザーでアクセスします。

例  
DRR000001 fastq  
* https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001.fastq.bz2
* https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001_1.fastq.bz2
* https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001_2.fastq.bz2

DRR000001 sra
* https://ddbj.nig.ac.jp/public/ddbj_database/dra/sra/ByExp/sra/DRX/DRX000/DRX000001/DRR000001/DRR000001.sra

### ftp {#ftp}

wget コマンド等でファイルをダウンロードします。

例  
DRR000001 fastq  
```
wget ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001.fastq.bz2
wget ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001_1.fastq.bz2
wget ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001_2.fastq.bz2
```

DRR000001 sra
```
wget ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/sra/ByExp/sra/DRX/DRX000/DRX000001/DRR000001/DRR000001.sra
```

### ascp {#ascp}

[Aspera のインストール](https://sc.ddbj.nig.ac.jp/software/aspera/install_Aspera)を参照して、クライアントソフトウェアをインストールします。  
データのダウンロード方法は [Aspera の使い方](https://sc.ddbj.nig.ac.jp/software/aspera/)を参照してください。

### スパコン {#sc}

[遺伝研スパコンの一般区画](https://sc.ddbj.nig.ac.jp/general_analysis_division/ga_introduction)ではマウントされた /usr/local/resources/ でデータに直接アクセスすることができます。   

例
DRR000001 fastq をホーム直下にコピー。
```
cp /usr/local/resources/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001.fastq.bz2 ~/
cp /usr/local/resources/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001_1.fastq.bz2 ~/
cp /usr/local/resources/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001_2.fastq.bz2 ~/
```


