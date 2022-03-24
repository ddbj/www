---
layout: simple
title: Are fastq files of NCBI/ENA SRA not available?
category: faq
db:
  - dra
tags: 
  - Downloading files
date: 2021-12-09T10:39:46
lang: en
---

We have stopped to generating fastq files from mirrored NCBI/ENA SRA data to save storage spaces since 11th December 2019. We have generated and will generate fastq files of DRA data.

* NCBI SRA: sra file only
* ENA SRA: sra and fastq files
* DDBJ SRA: Before 10th December 2019, sra and fastq files. After 11th December 2019, fastq of DRA only.

| Archive | sra files | NCBI SRA fastq | ENA SRA fastq | DDBJ SRA fastq |
|---|
| NCBI SRA | O | X | X | X |
| ENA SRA | O | O | O | O |
| DDBJ SRA | O | X (since 2019-12-10) | X (since 2019-12-10) | O |

For NCBI/ENA SRA data whose fastq files are not generated, you may obtain the fastq as follows.

### Download from ENA {#ena}

If ENA has generated fastq of the Run of your interest (for example, ERR3350433), you may download the fastq from ENA.

[ERR3350433](https://www.ebi.ac.uk/ena/browser/view/ERR3350433?show=reads)

<figure><a href="{{ site.baseurl }}/assets/images/books/ena-sra-fastq.jpg" title="Download fastq from ENA"><img src="{{ site.baseurl }}/assets/images/books/ena-sra-fastq.jpg" alt="Download fastq from ENA" title="Download fastq from ENA" class="w450"></a>
  <figcaption class="caption">Download fastq from ENA</figcaption>
</figure>

### Generating fastq from DRA mirrored sra file {#dra}

Search the Run in [DDBJ Search](https://ddbj.nig.ac.jp/search?query=%22ERR3350433%22).   
Example; [ERR3350433](https://ddbj.nig.ac.jp/resource/sra-run/ERR3350433)

<figure><a href="{{ site.baseurl }}/assets/images/books/ddbj-sra-download.jpg" title="Download the sra file from DRA"><img src="{{ site.baseurl }}/assets/images/books/ddbj-sra-download.jpg" alt="Download the sra file from DRA" title="Download the sra file from DRA" class="w250"></a>
  <figcaption class="caption">Download the sra file from DRA</figcaption>
</figure>

sra filepath;
* https://ddbj.nig.ac.jp/public/ddbj_database/dra/sralite/ByExp/litesra/ERX/ERX337/ERX3374941/ERR3350433/ERR3350433.sra
* ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/sralite/ByExp/litesra/ERX/ERX337/ERX3374941/ERR3350433/ERR3350433.sra

Please see [How to use prefetch and fasterq-dump to extract FASTQ-files from SRA-accessions](https://github.com/ncbi/sra-tools/wiki/08.-prefetch-and-fasterq-dump) regarding how to generate fastq from sra.
