---
layout: indexed_content
title: How do I download files?
category: faq
db:
  - dra
tags: 
  - Downloading files
date: 2014-01-23T11:21:04
lang: en
---

## How do I download files?

<p>Download files from DDBJ ftp server at <a href="ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq">ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq</a>.</p>
<h4 class="bold">wget</h4>
<p>wget is a convenient way to download files over FTP.</p>
<p class="code break">wget ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001.fastq.bz2</p>
<h4 class="bold">ascp</h4>
<p>Aspera ascp command line client can be dowloaded <a href="http://downloads.asperasoft.com/downloadsconnect">here</a>.Please select the correct operating system. The ascp command line client is distributed as part of the Aspera connect high-performance transfer browser plug-in.</p>
<p>Your command should look similar to this:</p>
<p class="code break">ascp -i <span class="italic">&lt;aspera connect SSH key&gt;</span> <span class="italic">&lt;option&gt;</span> -P 33001 anonftp@ascp.ddbj.nig.ac.jp:<span class="italic">&lt;file or files to download&gt;</span> <span class="italic">&lt;download location&gt;</span></p>
<p>Examples:</p>
<p class="code break">ascp -i <span class="italic">&lt;aspera connect SSH key&gt;</span> -QT -l 300m -P 33001 anonftp@ascp.ddbj.nig.ac.jp:/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001.fastq.bz2 .</p>