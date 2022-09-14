---
layout: simple
title: How do I access public DRA data?
category: faq
db:
  - dra
tags: 
  - Downloading files
date: 2014-01-23T11:21:04
lang: en
---

You can access the public DRA data through https/ftp and in the NIG supercomputer.  
You can retrieve the filepath by searching accession numbers in the [DDBJ Search](https://ddbj.nig.ac.jp/search).

* https: https://ddbj.nig.ac.jp/public/ddbj_database/dra
* ftp: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra
* ascp: anonftp@ascp.ddbj.nig.ac.jp:/ddbj_database/dra
* Supercomputer: /usr/local/resources/dra

### https {#https}

Access through your web browser.

Examples:   
DRR000001 fastq    
* https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001.fastq.bz2
* https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001_1.fastq.bz2
* https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001_2.fastq.bz2

DRR000001 sra   
* https://ddbj.nig.ac.jp/public/ddbj_database/dra/sra/ByExp/sra/DRX/DRX000/DRX000001/DRR000001/DRR000001.sra

### ftp {#ftp}

Download files by wget etc.

Examples:  
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

[Installing Aspera](https://sc.ddbj.nig.ac.jp/en/software/aspera/install_Aspera/) and install the aspera.  
To download data, please see [How to use Aspera](https://sc.ddbj.nig.ac.jp/en/software/aspera/).

### Supercomputer {#sc}

You can direcly access the public data at /usr/local/resources/ in the [General Analysis Section of the NIG supercomputer](https://sc.ddbj.nig.ac.jp/en/general_analysis_division/ga_introduction).

Examples:
Copy DRR000001 fastq files to your home directory.
```
cp /usr/local/resources/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001.fastq.bz2 ~/
cp /usr/local/resources/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001_1.fastq.bz2 ~/
cp /usr/local/resources/dra/fastq/DRA000/DRA000001/DRX000001/DRR000001_2.fastq.bz2 ~/
```


