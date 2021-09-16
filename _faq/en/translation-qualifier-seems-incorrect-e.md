---
layout: simple
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

The rule to translate nucleotide sequence into amino acid sequence is specified in accordance with agreements of [International Nucleotide Sequence Database Collaboration](/about/insdc-e.html).     
The codon table using a CDS feature is specified in the value of /[transl_table](/ddbj/qualifiers-e.html#transl_table) qualifier as a number of [The Genetic Codes](/ddbj/geneticcode-e.html). 

There are three points frequently misunderstood. 
- You should specify /[organelle](/ddbj/qualifiers-e.html#organelle) qualifier to assign correct genetic code for mitochondrion or chloroplast. 
- The initiation codon is M, Met, methyonine, not G or V.     
   See [Start codon](http://en.wikipedia.org/wiki/Start_codon) and [N-Formylmethionine](http://en.wikipedia.org/wiki/Formylmethionine)
- When an amino acid can be specified by two bases (i.e. degeneracy of codons), it will be outputted. 

There are some [exceptional cases](/faq/en/how-to-describe-not-standard-genetic-code-e.html), represented by [RNA editing](/ddbj/cds-e.html#stop_e) and so on. 
