---
layout: simple
title: 'How to fix error message: "First codon [***] is not a start codon." / "Final codon [***] is not a stop codon."?'
category: faq
db:
  - ddbj
tags: 
  - Nucleotide Sequence Submission System
date: 2014-07-04T15:30:54
lang: en
---

These errors mean amino acid translation for [CDS (protein coding sequence) feature](/ddbj/cds-e.html) is not appropriate in the 5' or 3' end, respectively.
When the CDS feature is not complete (i.e. partial) at 5' and/or 3' ends, its location is required to include flag for 'not complete'.
According to rules on [Description of Location](/ddbj/location-e.html), partial sequences should be appropriately specified with flags for 5' end not complete, "<", and/or for 3' end not complete, ">" on its feature location.

|location|condition|
|---|
| \<1..295    | \[not start with initiation codon\] and \[stop with termination codon\]     |
| 1.. \>295   | \[start with initiation codon\] and \[not stop with termination codon\]     |
| \<1.. \>295 | \[not start with initiation codon\] and \[not stop with termination codon\] |

For example: partial CDS feature in the range, 1..295

References  
: [How to fix error message: “Stop codon ‘\*’ is found in the
    range.”?](/faq/en/how-to-fix-error-msg-stop-codon-e.html)
: [How to fix error message: "Value of \[ codon\_start \] is not 1,
    but \[](/faq/en/how-to-fix-error-msg-codon-start-e.html)
: [Offset of the frame at translation initiation by
    codon\_start](/ddbj/cds-e.html#frame)
