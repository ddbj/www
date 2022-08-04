---
layout: simple
title: How to deal with validation errors in DRA submission?
category: faq
db:
  - dra
tags: 
  - Sequencing data
date: 2014-01-23T11:16:53
lang: en
---

### Make Sra Error {#make_sra_error}
**constraint violated while executing function within virtual database module**

[Read names are possibly not unique in Run](/faq/en/data-files-sra-e.html).

**path not found while accessing directory within file system module - no message text available**

Files are not recognized. This error occurs in the following cases:
- filename contains whitespace
- files are in sub-directories" and
- fastq files are *tar* archived

### CheckSum Error {#check_sum_error}

The [md5 values](/dra/submission-e.html#supplement-md5) in the Run metadata are different from those of the uploaded files. Please check the followings.

Check whether the md5 values of the files in your computer match those entered in the Run metadata or not.
- If the md5 values in the Run metadata are not correct, revise the values in the metadata. 
- If those values match, corresponding uploaded files may be corrupted during file transfer, please re-upload the files.

### File Name Error {#file_name_error}

**Undefined or File not found: @SQ SN:**

Please upload the SN-reference mapping table files to the directory.

https://www.ddbj.nig.ac.jp/dra/submission-e.html#bam-file

