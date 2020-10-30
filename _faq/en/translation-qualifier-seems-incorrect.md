---
layout: indexed_content
title: The amino acid sequence in the value of /translation qualifier seems to be incorrect.
category: faq
db:
  - ddbj
tags: 
  - format
  - search
  - submission
date: 2014-07-03T16:28:42
lang: en
---

## The amino acid sequence in the value of /translation qualifier seems to be incorrect.

<p>The rule to translate nucleotide sequence into amino acid sequence is specified in accordance with agreements of <a href="/insdc-e.html">International Nucleotide Sequence Database Collaboration</a>. <br>The codon table using a CDS feature is specified in the value of /<a href="/ddbj/qualifiers-e.html#transl_table">transl_table</a> qualifier as a number of <a href="/ddbj/geneticcode-e.html">The Genetic Codes</a>. </p>
<p>There are three points frequently misunderstood. </p>
<ul>
  <li>You should specify /<a href="/ddbj/qualifiers-e.html#organelle">organelle</a> qualifier to assign correct genetic code for mitochondrion or chloroplast. </li>
  <li>The initiation codon is M, Met, methyonine, not G or V. <br> See <a href="http://en.wikipedia.org/wiki/Start_codon">Start codon</a> and <a href="http://en.wikipedia.org/wiki/Formylmethionine">N-Formylmethionine</a></li>
  <li>When an amino acid can be specified by two bases (i.e. degeneracy of codons), it will be outputted. </li>
</ul>
<p>There are some <a href="/faq/en/how-to-describe-not-standard-genetic-code-e.html">exceptional cases</a>, represented by <a href="/ddbj/cds-e.html#stop_e">RNA editing</a> and so on. </p>