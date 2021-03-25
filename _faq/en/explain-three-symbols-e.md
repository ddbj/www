---
layout: simple
title: What are the meanings of the three symbols “*”, “.”, and “:” in ClustalW?
category: faq
db:
  - clustalw
tags: 
  - Analysis
date: 2015-06-08T15:41:43
lang: en
---



These symbols are used to indicate amino acids aligned at the sites marked with the symbol.    
“*” indicates perfect alignment.    
“:” indicates a site belonging to group exhibiting strong similarity.    
“.” indicates a site belonging to a group exhibiting weak similarity.    
The criterion for distinguishing strong from weak similarity is as follows: Strong similarity corresponds to a PAM250 MATRIX score between amino acids of greater than 0.5, while weak similarity corresponds to a score of 0.5 or less.    
In the README excerpt, the lines horizontally adjacent to the phrases    
　　　　　STA    
　　　　　NEQK    
　　　　　:    
indicate the amino-acid groups in cases for which the corresponding symbol is present (These are written using single-character notation for amino acids).

The README file included with the ClustalW source package contains the following text. 

---

12.The conservation line output in the clustal format alignment file has been changed.    
Three characters are now used:    
'*' indicates positions which have a single, fully conserved residue    
':' indicates that one of the following 'strong' groups is fully conserved:-    
　　　　　　　STA    
　　　　　　　NEQK    
　　　　　　　NHQK    
　　　　　　　NDEQ    
　　　　　　　QHRK    
　　　　　　　MILV    
　　　　　　　MILF    
　　　　　　　HY    
　　　　　　　FYW    
'.' indicates that one of the following 'weaker' groups is fully conserved:-    
　　　　　　　CSA    
　　　　　　　ATV    
　　　　　　　SAG    
　　　　　　　STNK    
　　　　　　　STPA    
　　　　　　　SGND    
　　　　　　　SNDEQK    
　　　　　　　NDEQHK    
　　　　　　　NEQHRK    
　　　　　　　FVLIM    
　　　　　　　HFY    
These are all the positively scoring groups that occur in the Gonnet    
Pam250 matrix. The strong and weak groups are defined as strong score &gt;0.5 and weak    
score =&lt;0.5 respectively.    

----
