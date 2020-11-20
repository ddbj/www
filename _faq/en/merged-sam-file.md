---
layout: simple
title: I don’t know what kind of files samtools view –hX out.bam>out.sam and merged SAM are.
category: faq
db:
  - pipeline
date: 2014-10-27T11:58:07
lang: en
---



Merged.sam is likely to be the files within the framework of “Download merged pileup file” from the Detail view screen, but this is the results of sam per chromosome, combined into one.<br>out.samX
<pre><code>samtools view -hXUsage: samtools view [options]<in.bam>|<in.sam>[region1 [...]]Options: -h     print header for the SAM output            -X     output FLAG in string (samtools-C specific) </in.sam></in.bam></code></pre><br>For sam and samX, the 2nd column inscription changes. Please refer to the below.<br><a href="http://sourceforge.net/apps/mediawiki/samtools/index.php?title=SAM_FAQ#The_integer_FLAG_field_is_not_friendly_to_eyes" rel="nofollow" style="text-decoration:underline;background-color:initial;font-weight:bold;padding-top:2px;padding-right:2px;padding-bottom:2px;padding-left:2px">http://sourceforge.net/apps/mediawiki/samtools/index.php?title=SAM_FAQ#The_integer_FLAG_field_is_not_friendly_to_eyes</a><br> Merged SAM, if there is one chromosome, has the same contents as out.sam (but the Download files are compressed).