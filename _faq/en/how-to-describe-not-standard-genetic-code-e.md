---
layout: simple
title: When the correspondences between nucleotides and amino acids are different from the standard genetic code, how to describe CDS feature?
category: faq
db:
  - ddbj
tags: 
  - Submission
date: 2014-06-30T17:21:44
lang: en
---



<p>At first, please confirm whether <a href="/ddbj/geneticcode-e.html">The Genetic Code</a> is appropriately selected or not. <br>Generally, if <a href="/ddbj/qualifiers-e.html#transl_table">/transl_table</a> qualifier is appropriately described with a number of the genetic code, the nucleotide sequence is automatically translated to amino acid sequence according to the genetic code. </p>
<p>In exceptional cases of specific codons (selenocysteine etc.) that is not followed the genetic codes, describe /<a href="/ddbj/qualifiers-e.html#transl_except">transl_except</a> qualifier, appropriately. </p>
<p>In cases of <a href="/ddbj/example-e.html#B09">RNA editing，</a><a href="/ddbj/example-e.html#B10">ribosomal frameshift</a>，<a href="/ddbj/example-e.html#B11">mitochondrial TAA stop codon</a>, see <a href="/ddbj/example-e.html">Example of submission</a> and describe with /<a href="/ddbj/qualifiers-e.html#exception">exception</a> and /<a href="/ddbj/qualifiers-e.html#translation">translation</a>, /<a href="/ddbj/qualifiers-e.html#ribosomal_slippage">ribosomal_slippage</a>, /<a href="/ddbj/qualifiers-e.html#transl_except">transl_except</a>, respectively. </p>
<p>In case of rare initiation of translation, staring with an amino acid other than methionine, describe the <a href="/ddbj/location-e.html">location</a> of CDS feature with starting from "&lt;", operatively indicating 5'end not complete. And describe brief explanation about the translation mechanism in /<a href="/ddbj/qualifiers-e.html#note">note</a> qualifier. </p>
