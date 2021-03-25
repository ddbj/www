---
layout: simple
title: 'How to fix error message: "To use [translation] qualifier, [exception] qualifier is required in the [CDS] feature." ?'
category: faq
db:
  - ddbj
tags: 
  - Nucleotide Sequence Submission System
date: 2014-07-04T17:21:10
lang: en
---

This error message is outputted, because you select
/[translation](/ddbj/qualifiers-e.html#translation) for [CDS
feature](/ddbj/cds-e.html#translation) by dialog of \[Select Qualifier\]
button.  
Generally, since /translation qualifier is automatically created
according to items under CDS feature, do not enter any amino acid
sequence.  
So, you can fix the error by removing /translation qualifier.

For your information, /translation qualifier is required only in case
describing with /[exception](/ddbj/qualifiers-e.html#exception)
qualifier.  
Typically, /exception qualifier indicates "RNA editing" is occurred on
mRNA. In that case, conceptual amino acid translation of genome sequence
is different from protein product of real mRNA molecules.

References  
: [Example of Submission](/ddbj/example-e.html): [B09) RNA
    editing](/ddbj/example-e.html#B09)
: [How can I input amino acid sequence (/translation qualifier) for
    CDS feature?](/faq/en/how-to-input-amino-acid-seq-e.html)
: [How to confirm translated amino acid sequences (i.e. /translation
    qualifier) for CDS
    features?](/faq/en/how-to-confirm-translated-amino-acid-seq-e.html)
: [The amino acid sequence in the value of /translation qualifier
    seems to be
    incorrect.](/faq/en/translation-qualifier-seems-incorrect-e.html)
