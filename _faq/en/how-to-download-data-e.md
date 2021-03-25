---
layout: simple
title: How do I download files?
category: faq
db:
  - dra
tags: 
  - Downloading files
date: 2014-01-23T11:21:04
lang: en
---

Download files from DDBJ ftp server at
<ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq>.

wget
: wget is a convenient way to download files over FTP.

```
wget ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001.fastq.bz2
```
ascp
: Aspera ascp command line client can be dowloaded
[here](http://downloads.asperasoft.com/downloadsconnect).Please select
the correct operating system. The ascp command line client is
distributed as part of the Aspera connect high-performance transfer
browser plug-in.

Your command should look similar to this:

```
ascp -i <aspera connect SSH key> <option> -P 33001 anonftp@ascp.ddbj.nig.ac.jp:<file or files to download> <download location>
```
Examples:
```
ascp -i <aspera connect SSH key> -QT -l 300m -P 33001 anonftp@ascp.ddbj.nig.ac.jp:/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001.fastq.bz2 .
```