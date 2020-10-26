---
layout: indexed_content
title: How to deal with validation errors?
category: faq
db:
  - dra
tags: 
  - Sequencing data
date: 2014-01-23T11:16:53
lang: en
---

## How to deal with validation errors?

<p></p><div class=\"faq_list\"><div id=\"length\" class=\"faq\"><p class=\"question\">data excessive while validating formatter within short read archive module - cumulative length of reads data in file(s): 152 is greater than spot length declared in experiment: 76 in spot 'xxxx'</p><p class=\"answer\"><a href=\"/dra/submission-e.html#Spot_Length\">Spot length</a> value in Experiment differs from actual read length. For paired library, enter a sum of paired read lengths in the Spot length.</p></div><div id=\"fastq\" class=\"faq\"><p class=\"question\">fastq-load err: data inconsistent while validating formatter within short read archive module - cumulative length of reads data in file(s): 70 is less than spot length declared in experiment: 152, most probably mate-pair is absent in spot 'xxxx'</p><p class=\"answer\">When 'fastq' is selected for the <a href=\"/dra/submission-e.html#File_Type\">filetype</a> in Run, \"read length should be constant\" and \"paired reads must appear in the same order in the paired files\". If the fastq files do not meet these conditions, validation errors occur. Revise the <a href=\"/dra/submission-e.html#File_Type\">filetype</a> from 'fastq' to 'generic_fastq'.</p></div><div id=\"violated\" class=\"faq\"><p class=\"question\">constraint violated while executing function within virtual database module</p><p class=\"answer\"><a href=\"/dra/faq-e.html#data-files-sra\">Read names are possibly not unique in Run</a>.</p></div><div id=\"path_not_found\" class=\"faq\"><p class=\"question\">path not found while accessing directory within file system module - no message text available</p><p class=\"answer\">Files are not recognized. This error occurs in the following cases: \"filename contains whitespace\", \"files are in sub-directories\" and \"fastq files are <span class=\"italic\">tar</span> archived\".</p></div><div id=\"md5\" class=\"faq\"><p class=\"question\">CheckSum Error</p><p class=\"answer\">The <a href=\"/dra/submission-e.html#Supplement__MD5\">md5 values</a> in Run differs from actual md5. Check \"files are not corrupted\" and \"md5 values in Run are not wrong\".</p></div></div>