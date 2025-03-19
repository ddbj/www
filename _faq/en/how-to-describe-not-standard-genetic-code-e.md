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

At first, please confirm whether [The Genetic Code](/ddbj/geneticcode-e.html) is appropriately selected or not.    
Generally, if [/transl\_table](/ddbj/qualifiers-e.html#transl_table) 
qualifier is appropriately described with a number of the genetic code, 
the nucleotide sequence is automatically translated to amino acid sequence according to the genetic code.    

In exceptional cases of specific codons (selenocysteine etc.) that is not followed the genetic codes, describe
/[transl\_except](/ddbj/qualifiers-e.html#transl_except) qualifier, appropriately.    

In cases of [RNA editing](/ddbj/example-e.html#B09), 
[ribosomal frameshift](/ddbj/example-e.html#B10) or 
[mitochondrial TAA stop codon](/ddbj/example-e.html#B11), 
see [Description Examples of Sequence Data](/ddbj/example-e.html) and describe with either of qualifier(s), 
/[exception](/ddbj/qualifiers-e.html#exception) and 
/[translation](/ddbj/qualifiers-e.html#translation), 
/[ribosomal\_slippage](/ddbj/qualifiers-e.html#ribosomal_slippage) or 
/[transl\_except](/ddbj/qualifiers-e.html#transl_except), respectively.    

In case of rare initiation of translation, staring with an amino acid 
other than methionine, describe the [location](/ddbj/location-e.html) of 
CDS feature with starting from "\<", operatively indicating 5'end not complete.    
And describe brief explanation about the translation mechanism in 
/[note](/ddbj/qualifiers-e.html#note) qualifier. 
