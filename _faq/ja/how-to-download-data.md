---
layout: indexed_content
title: 公開されているデータをダウンロードする方法を教えてください
category: faq
db:
  - dra
tags: データのダウンロード
date: 2013-10-08T10:31:22
lang: ja
---

## 公開されているデータをダウンロードする方法を教えてください

<p>DDBJ ftp サーバ <a href="ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq">ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq</a> からダウンロードしてください。</p>
<h4 class="bold">wget</h4>
<p>wget コマンドを使って ftp サーバからデータを簡単に取得することができます。</p>
<p class="code break">wget ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001.fastq.bz2</p>
<h4 class="bold">ascp</h4>
<p>OS を指定して <a href="http://downloads.asperasoft.com/downloadsconnect">Aspera ascp コマンドラインクライアント</a>をダウンロードします。ascp コマンドラインクライアントは Aspera connect high-performance transfer browser plug-in の一部として配布されています。</p>
<p>以下のようなコマンドでデータを取得します。</p>
<p class="code break">ascp -i <span class="italic">&lt;aspera connect SSH key&gt;</span> <span class="italic">&lt;option&gt;</span> -P 33001 anonftp@ascp.ddbj.nig.ac.jp:<span class="italic">&lt;file or files to download&gt;</span> <span class="italic">&lt;download location&gt;</span></p>
<p>コマンドの例</p>
<p class="code break">ascp -i <span class="italic">&lt;aspera connect SSH key&gt;</span> -QT -l 300m -P 33001 anonftp@ascp.ddbj.nig.ac.jp:/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001.fastq.bz2 .</p>