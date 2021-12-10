---
layout: simple
title: NCBI/ENA SRA データの fastq ファイルが見当たりません
category: faq
db:
  - dra
tags: 
  - データのダウンロード
date: 2021-12-09T10:39:46
lang: ja
---

ストレージ容量節約のため、2019年12月11日以降、DRA では NCBI/ENA SRA データの fastq ファイル生成を停止しております。DRA データの fastq 生成は継続しており、今後も継続します。  

* NCBI SRA: sra ファイルのみ
* ENA SRA: sra と fastq ファイル
* DDBJ SRA: 2019年12月10日以前は sra と fastq ファイル。2019年12月11日以降、fastq は DRA 分のみ

| Archive | sra files | NCBI SRA fastq | ENA SRA fastq | DDBJ SRA fastq |
|---|
| NCBI SRA | O | X | X | X |
| ENA SRA | O | O | O | O |
| DDBJ SRA | O | X (since 2019-12-10) | X (since 2019-12-10) | O |

fastq が生成されていない NCBI/ENA SRA の fastq は以下の手順で入手することができます。   

### ENA からダウンロード  {#ena}

Run データ（例 ERR3350433）の fastq が生成されている場合、ENA からダウンロードすることができます。

[ERR3350433](https://www.ebi.ac.uk/ena/browser/view/ERR3350433?show=reads)

<figure><a href="{{ site.baseurl }}/assets/images/books/ena-sra-fastq.jpg" title="ENA から fastq ファイルをダウンロード"><img src="{{ site.baseurl }}/assets/images/books/ena-sra-fastq.jpg" alt="ENA から fastq ファイルをダウンロード" title="ENA から fastq ファイルをダウンロード" class="w450"></a>
  <figcaption class="caption">ENA から fastq ファイルをダウンロード</figcaption>
</figure>

### DRA でミラーしている sra ファイルから fastq を生成  {#dra}

[DDBJ Search](https://ddbj.nig.ac.jp/search?query=%22ERR3350433%22) で検索します。    
例 [ERR3350433](https://ddbj.nig.ac.jp/resource/sra-run/ERR3350433)

<figure><a href="{{ site.baseurl }}/assets/images/books/ddbj-sra-download.jpg" title="DRA から sra ファイルをダウンロード"><img src="{{ site.baseurl }}/assets/images/books/ddbj-sra-download.jpg" alt="DRA から sra ファイルをダウンロード" title="DRA から sra ファイルをダウンロード" class="w250"></a>
  <figcaption class="caption">DRA から sra ファイルをダウンロード</figcaption>
</figure>

sra ファイルパス
* https://ddbj.nig.ac.jp/public/ddbj_database/dra/sralite/ByExp/litesra/ERX/ERX337/ERX3374941/ERR3350433/ERR3350433.sra
* ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/sralite/ByExp/litesra/ERX/ERX337/ERX3374941/ERR3350433/ERR3350433.sra

sra ファイルから SRA toolkit で fastq を生成する方法は [How to use prefetch and fasterq-dump to extract FASTQ-files from SRA-accessions](https://github.com/ncbi/sra-tools/wiki/08.-prefetch-and-fasterq-dump) をご覧ください。
