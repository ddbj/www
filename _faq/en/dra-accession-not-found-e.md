---
layout: simple
title: I cannot find my DRA accession number in DRASearch. What should I do?
category: faq
db:
  - dra
tags: 
  - Accession number
date: 2021-11-05T01:53:52
lang: en
---

The indexing of public SRA metadata by [DRASearch](https://ddbj.nig.ac.jp/DRASearch/) has been significantly delayed because the data volume has been increased far more than expected at the time of the DRASearch initial development.   
The DRASearch regularly indexes metadata XML full dump monthly released by NCBI SRA, so at the beginning of the month, the delay will be a few weeks for refreshing metadata indexes.    

The metadata XML and sra/fastq files are usually distributed at [DRA ftp](https://ddbj.nig.ac.jp/public/ddbj_database/dra) within a next day of data release if there is no supercomputer troubles.   
Example: [DRA000001](https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA000/DRA000001/)    

If you cannot find your DRA accession numbers in [DRASearch](https://ddbj.nig.ac.jp/DRASearch/), please try [NCBI SRA](https://www.ncbi.nlm.nih.gov/sra) and [ENA](https://www.ebi.ac.uk/ena/browser/search).   
If your data is accessible at NCBI and ENA sites, please provide the URLs to journal editors.    

We are developing the [new search system](https://ddbj.nig.ac.jp/search).  
However, this system incorporates public DRA data via NCBI, so when DRA data mirroring to NCBI is delayed, the DRA metadata indexing by the new system is also delayed.   
To solve this issue, we will develop the new search system to incorporate public DRA data from our ftp. This function will be realized in December, 2021.

Accession numbers are accessible by including them in DRASearch and new system URLs as follows.   

Submission accession:    
* DRASearch: [https://ddbj.nig.ac.jp/DRASearch/submission?acc=DRA000001](https://ddbj.nig.ac.jp/DRASearch/submission?acc=DRA000001)
* New search: [https://ddbj.nig.ac.jp/resource/dra-submission/DRA000001](https://ddbj.nig.ac.jp/resource/dra-submission/DRA000001)

Experiment accession:    
* DRASearch: [https://ddbj.nig.ac.jp/DRASearch/experiment?acc=DRX000001](https://ddbj.nig.ac.jp/DRASearch/experiment?acc=DRX000001)
* New search: [https://ddbj.nig.ac.jp/resource/dra-experiment/DRX000001](https://ddbj.nig.ac.jp/resource/dra-experiment/DRX000001)

Run accession:    
* DRASearch: [https://ddbj.nig.ac.jp/DRASearch/run?acc=DRR000001](https://ddbj.nig.ac.jp/DRASearch/run?acc=DRR000001)
* New search: [https://ddbj.nig.ac.jp/resource/dra-run/DRR000001](https://ddbj.nig.ac.jp/resource/dra-run/DRR000001)

The new search system incorporates public DRA data via NCBI, so when DRA data mirroring to NCBI is delayed, the DRA metadata indexing by the new system is also delayed.    
To solve this issue, we will develop the new search system to incorporate public DRA data from our ftp. This function will be realized in December, 2021.  




