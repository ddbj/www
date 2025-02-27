---
layout: simple
title: What is secondary accession number?
category: faq
db:
  - ddbj
tags: 
  - Accession number
date: 2014-07-07T19:23:45
lang: en
---




[INSD; International Nucleotide Sequence Database](/insdc/index-e.html#insd) are composed of DDBJ, ENA and NCBI, and collect experimentally determined nucleotide sequence data.    
A unique **accession number** issued by INSD for each submitted sequence data is defined as [the INSD accession number](/insdc/accessions.html).     
On [DDBJ flat file](/ddbj/flat-file-e.html), the accession number is described in [ACCESSION](/ddbj/flat-file-e.html#AccessionB) line. 

If multiple entries are united to an entry, or if an entry is extensively modified after the submission, the responsible data banks may assign a new accession number to it. In these cases, the new accession number is called the primary accession number, and the old accession number(s) is/are called the secondary accession number(s). 

In the flat file, the primary accession number is indicated first, then the secondary accession number(s) follows. 

**Example**

<pre class="flatfile">ACCESSION   <span style="border-bottom:solid 3px #ff0000;">AB999999</span> <span style="border-bottom:solid 3px #0000ff;">AB888888</span> <span style="border-bottom:solid 3px #0000ff;">AB777777</span></pre>

<span style="color: #ff0000">AB999999 -- primary accession number</span>    
<span style="color: #0000ff">AB888888 AB777777 -- secondary accession number</span>


You can find the same updated entry with both the primary and the secondary accession numbers, in general.    
However, if the old entry with secondary accession number has previously been open to the public, the old one is not removed. So, you can find the old record by [getentry](http://getentry.ddbj.nig.ac.jp/top-e.html). 

References
: - [getentry HELP](/services/getentry-e.html)
 - [INSDC Status Document](/about/insdc-status-e): Replaced
 - [Why is the retracted data still available?](/faq/en/why-retracted-data-available-e.html)

