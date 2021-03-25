---
layout: simple
title: 公開されているデータをダウンロードする方法を教えてください
category: faq
db:
  - dra
tags: データのダウンロード
date: 2013-10-08T10:31:22
lang: ja
---

DDBJ ftp サーバ <ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq>
からダウンロードしてください。

wget
: wget コマンドを使って ftp サーバからデータを簡単に取得することができます。

```
wget ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001.fastq.bz2
```

ascp

: OS を指定して [Aspera ascp
コマンドラインクライアント](http://downloads.asperasoft.com/downloadsconnect)をダウンロードします。ascp
コマンドラインクライアントは Aspera connect high-performance transfer browser plug-in
の一部として配布されています。

: 以下のようなコマンドでデータを取得します。

```
ascp -i <aspera connect SSH key> <option> -P 33001 anonftp@ascp.ddbj.nig.ac.jp:<file or files to download> <download location>
```

コマンドの例: 
```
ascp -i <aspera connect SSH key> -QT -l 300m -P 33001 anonftp@ascp.ddbj.nig.ac.jp:/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001.fastq.bz2 .
```
