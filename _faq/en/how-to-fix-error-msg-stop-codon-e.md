---
layout: simple
title: 'How to fix error message: "Stop codon ‘*’ is found in the range."?'
category: faq
db:
  - ddbj
tags: 
  - Nucleotide Sequence Submission System
date: 2014-07-07T17:41:01
lang: en
---

In general, see [How to describe CDS feature, when termination codon is
found in the range](/ddbj/cds-e.html#stop).  
You can also see [Protein Coding Sequence; CDS
feature](/ddbj/cds-e.html) to describe CDS feature.  
Following items are case study for the error.

**1.** Did you correctly specify
/[codon\_start](/ddbj/qualifiers-e.html#codon_start) qualifier to
indicate reading frame of the CDS feature?  
Select 1, 2 or 3, appropriately.

  - References:  
    [Offset of the frame at translation initiation by
    codon\_start](/ddbj/cds-e.html#frame)
    [How to fix error message: “First codon \[\*\*\*\] is not a start
    codon.” / “Final codon \[\*\*\*\] is not a stop
    codon.”?](/faq/en/how-to-fix-error-msg-first-codon-e.html)
    How to fix error message: "Value of \[ codon\_start \] is not 1, but
    \[

**2.** Have you specify correct [genetic code](/ddbj/geneticcode-e.html)
for /[transl\_table](/ddbj/qualifiers-e.html#transl_table) qualifier?  
See followings and specify genetic code, appropriately.

  - References  
    [The Genetic Codes](/ddbj/geneticcode-e.html)
    [About /transl\_table
    qualifier](/ddbj/qualifiers-e.html#transl_table)
    [How to fix error message: "Invalid value \[\*\*\*\] for
    \[transl\_table\]
    qualifier."?](/faq/en/how-to-fix-error-msg-transl-table-e.html)

**3.** Are there really some stop codons in the range of CDS feature
because of frame shift, nonsense mutation, or some other reason?  

**3-1.** In case of pseudogene  
Click \[Select Qualifier\] button beside CDS and add [/pseudogene
qualifier](/ddbj/qualifiers-e.html#pseudogene). Then, you can specify
/pseudogene qualifier with [its controlled
vocabularies](/ddbj/pseudogene-e.html).  
See also [b) considered pseudogene](/ddbj/cds-e.html#stop_b) in detail.

**3-2.** In cases of unsure whether it is pseudogene or not, the reason
of stop codon is uncertain, or on the process of diversity increasing
related to acquired immunity, describe misc\_feature, not CDS feature.  
See [a) Putative nonsense mutation, frameshift caused by uncertain
reason, or on the process of diversity increasing related to acquired
immunity for IgG etc.](/ddbj/cds-e.html#stop_a) in detail.

**In other cases.** There are some possibilities to output this error
because of [ribosomal slippage](/ddbj/cds-e.html#stop_d), [RNA
editing](/ddbj/cds-e.html#stop_e), [exceptional amino acid
usage](/ddbj/cds-e.html#stop_f), [transpon
insertion](/ddbj/cds-e.html#stop_g) and so on.
