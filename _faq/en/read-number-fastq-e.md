---
layout: simple
title: Why is reads number of fastq less than that of SRA file?
category: faq
db:
  - dra
tags: 
  - Downloading files
date: 2014-01-23T11:18:42
lang: en
---

The DRA generates fastq files from the raw data SRA files by using the [fastq-dump](http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc&amp;f=fastq-dump) in the [NCBI SRA Toolkit](http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc) with following options.
```
fastq-dump -M 25 -E --skip-technical --split-3 -W <SRA file>
```
 - -M 25: Minimum read length to output is 25 (default is 25)</li>
 - -E: No sequences starting or ending with &gt;= 10N</li>
 - --skip-technical: Dump only biological reads</li>
 - --split-3: Legacy 3-file splitting for mate-pairs: first and second biological reads satisfying dumping conditions are placed in files *_1.fastq and *_2.fastq, respectively. If only one biological read is present, it is placed in *.fastq.</li>
 - -W: Apply left and right clips</li>

Reads are filtered and trimmed according to above dumping conditions, reads number of fastq is generally less than that of SRA file.Users can generate unfiltered and untrimmed fastq files by using following fastq-dump options.
```
fastq-dump -M 1 --split-3 <SRA file>
```