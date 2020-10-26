---
layout: indexed_content
title: What are the meanings of the three symbols “*”, “.”, and “:” in ClustalW?
category: faq
db:
  - clustalw
tags: 
  - Analysis
date: 2015-06-08T15:41:43
lang: en
---

## What are the meanings of the three symbols “*”, “.”, and “:” in ClustalW?"

These symbols are used to indicate amino acids aligned at the sites marked with the symbol. <br>“*” indicates perfect alignment.  <br>“:” indicates a site belonging to group exhibiting strong similarity.  <br>“.” indicates a site belonging to a group exhibiting weak similarity.  <br>The criterion for distinguishing strong from weak similarity is as follows: Strong similarity corresponds to a PAM250 MATRIX score between amino acids of greater than 0.5, while weak similarity corresponds to a score of 0.5 or less. In the README excerpt, the lines horizontally adjacent to the phrases  <br>　　　　　STA  <br>　　　　　NEQK  <br>　　　　　:  <br>indicate the amino-acid groups in cases for which the corresponding symbol is present (These are written using single-character notation for amino acids).  <br> <br>The README file included with the ClustalW source package contains the following text. <br> --------------------------------------------------------------------------- <br>12. The conservation line output in the clustal format alignment file has been changed.  <br>Three characters are now used: <br>'*' indicates positions which have a single, fully conserved residue <br>':' indicates that one of the following 'strong' groups is fully conserved:- <br>　　　　　　　STA　　　　　　　NEQK <br>　　　　　　　NHQK <br>　　　　　　　NDEQ <br>　　　　　　　QHRK <br>　　　　　　　MILV <br>　　　　　　　MILF <br>　　　　　　　HY <br>　　　　　　　FYW <br>'.' indicates that one of the following 'weaker' groups is fully conserved:- <br>　　　　　　　CSA <br>　　　　　　　ATV <br>　　　　　　　SAG <br>　　　　　　　STNK <br>　　　　　　　STPA <br>　　　　　　　SGND <br>　　　　　　　SNDEQK <br>　　　　　　　NDEQHK <br>　　　　　　　NEQHRK <br>　　　　　　　FVLIM <br>　　　　　　　HFY <br>These are all the positively scoring groups that occur in the Gonnet Pam250 <br>matrix. The strong and weak groups are defined as strong score &gt;0.5 and weak <br>score =&lt;0.5 respectively. <br>--------------------------------------------------------------------------- 