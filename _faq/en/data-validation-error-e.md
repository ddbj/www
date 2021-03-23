---
layout: simple
title: How to deal with validation errors?
category: faq
db:
  - dra
tags: 
  - Sequencing data
date: 2014-01-23T11:16:53
lang: en
---

**data excessive while validating formatter within short read archive module - cumulative length of reads data in file(s): 152 is greater than spot length declared in experiment: 76 in spot 'xxxx'**

[Spot length](/dra/submission.html#Spot_Length) value in Experiment differs from actual read length. For paired library, enter a sum of paired read lengths in the Spot length.

**fastq-load err: data inconsistent while validating formatter within short read archive module - cumulative length of reads data in file(s): 70 is less than spot length declared in experiment: 152, most probably mate-pair is absent in spot 'xxxx'**

When 'fastq' is selected for the [filetype](/dra/submission.html#File_Type) in Run, "read length should be constant" and "paired reads must appear in the same order in the paired files". If the fastq files do not meet these conditions, validation errors occur. Revise the [filetype](/dra/submission.html#File_Type) from 'fastq' to 'generic\_fastq'.

**constraint violated while executing function within virtual database module**

[Read names are possibly not unique in Run](/faq/en/index-e.html#data-files-sra).

**path not found while accessing directory within file system module - no message text available**

Files are not recognized. This error occurs in the following cases:
- filename contains whitespace
- files are in sub-directories" and
- fastq files are *tar* archived

**CheckSum Error**

The [md5 values](/dra/submission.html#Supplement__MD5) in Run differs from actual md5. Check the following
- files are not corrupted 
- md5 values in Run are not wrong


