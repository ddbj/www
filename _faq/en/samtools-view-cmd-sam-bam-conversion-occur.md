---
layout: indexed_content
title: With the command samtools view -bS -o out.bam out.sam, will SAM--->BAM conversion occur?
category: faq
db:
  - pipeline
date: 2014-10-27T11:48:45
lang: en
---

## With the command samtools view -bS -o out.bam out.sam, will SAM--->BAM conversion occur?

samtools view is a command which outputs, from the results mapped onto the reference sequence (genome), only the results from a specified domain. However, basically this is not permitted, so it will be all the reference sequence (genome) results.<br><a href="http://samtools.sourceforge.net/samtools.shtml#3" rel="nofollow" style="text-decoration:underline;background-color:initial;font-weight:bold;padding-top:2px;padding-right:2px;padding-bottom:2px;padding-left:2px">http://samtools.sourceforge.net/samtools.shtml#3</a>