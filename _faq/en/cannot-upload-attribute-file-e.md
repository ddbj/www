---
layout: simple
title: BioSample attribute file cannot be uploaded.
category: faq
db:
  - biosample
tags: 
  - attributes
date: 2021-09-22T10:00:00
lang: en
---

### Header must be enter with sample name {#header}

If you upload an Excel file instead of a tab-separated text (tsv) file, an error will occur.     
If you are uploading a tsv file, please fill in the sample information from the second line, one sample per line.

Please refer to the [example of BioSample submission files](https://docs.google.com/spreadsheets/d/1zVgr1JWDVsHwotDBfhhp32KCp8cKCv83UQ3Hygmcewg/edit#gid=726659595).

For other messages and validation rules, please see the [Validation rules page](/biosample/validation-e.html) and upload the revised file.

<figure><a href="/assets/images/books/bs-tsv-1.jpg" title="Example of valid tsv file"><img src="/assets/images/books/bs-tsv-1.jpg" alt="Example of valid tsv file" title="Example of valid tsv file" class="w400"></a>
  <figcaption class="caption">Example of valid tsv file</figcaption>
</figure>

<figure><a href="/assets/images/books/bs-tsv-2.jpg" title="Example of invalid tsv file which lacks a header"><img src="/assets/images/books/bs-tsv-2.jpg" alt="Example of invalid tsv file which lacks a header" title="Example of invalid tsv file which lacks a header" class="w400"></a>
  <figcaption class="caption">Example of invalid tsv file which lacks a header</figcaption>
</figure>

<figure><a href="/assets/images/books/bs-tsv-3.jpg" title="Example of invalid tsv file which has a blank line between sample lines"><img src="/assets/images/books/bs-tsv-3.jpg" alt="Example of invalid tsv file which has a blank line between sample lines" title="Example of invalid tsv file which has a blank line between sample lines" class="w400"></a>
  <figcaption class="caption">Example of invalid tsv file which has a blank line between sample lines</figcaption>
</figure>


