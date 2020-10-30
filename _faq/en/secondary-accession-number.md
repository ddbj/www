---
layout: indexed_content
title: What is secondary accession number?
category: faq
db:
  - ddbj
tags: 
  - Accession number
date: 2014-07-07T19:23:45
lang: en
---

## What is secondary accession number?

<p><a href="/insdc-e.html#insd">INSD; International Nucleotide Sequence Database</a> are composed of DDBJ, ENA and NCBI, and collect experimentally determined nucleotide sequence data. <br>A unique <strong>accession number</strong> issued by INSD for each submitted sequence data is defined as <a href="/acc_def-e.html">the INSD accession number</a>. <br>On <a href="/ddbj/flat-file-e.html">DDBJ flat file</a>, the accession number is described in <a href="/ddbj/flat-file-e.html#AccessionB">ACCESSION</a> line. </p>
<p>If multiple entries are united to an entry, or if an entry is extensively modified after the submission, the responsible data banks may assign a new accession number to it. In these cases, the new accession number is called the primary accession number, and the old accession number(s) is/are called the secondary accession number(s). </p>
<p>In the flat file, the primary accession number is indicated first, then the secondary accession number(s) follows. </p>
<pre class="flatfile"><strong>example</strong>ACCESSION   <span style="border-bottom:solid 3px #ff0000;">AB999999</span> <span style="border-bottom:solid 3px #0000ff;">AB888888</span> <span style="border-bottom:solid 3px #0000ff;">AB777777</span></pre>
<dl>
  <dd><span style="color: #ff0000">AB999999 -- primary accession number</span></dd>
  <dd><span style="color: #0000ff">AB888888 AB777777 -- secondary accession number</span></dd>
</dl>
<p>You can find the same updated entry with both the primary and the secondary accession numbers, in general. <br>However, if the old entry with secondary accession number has previously been open to the public, the old one is not removed. So, you can find the old record by <a href="http://getentry.ddbj.nig.ac.jp/top-e.html">getentry</a>. </p>
<dl><dt>References</dt>
  <dd><a href="/getentry-help-e.html">getentry HELP</a></dd>
  <dd><a href="/insdc-status-e.html">INSDC Status Document</a>: Replaced</dd>
  <dd><a href="/faq/en/why-retracted-data-available-e.html">Why is the retracted data still available?</a></dd>
</dl>