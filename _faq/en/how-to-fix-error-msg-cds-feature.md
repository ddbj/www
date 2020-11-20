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

## How to fix error message: "To use [translation] qualifier, [exception] qualifier is required in the [CDS] feature." ?

<p>This error message is outputted, because you select /<a href="/ddbj/qualifiers-e.html#translation">translation</a> for <a href="/ddbj/cds-e.html#translation">CDS feature</a> by dialog of [Select Qualifier] button. <br>Generally, since /translation qualifier is automatically created according to items under CDS feature, do not enter any amino acid sequence. <br>So, you can fix the error by removing /translation qualifier. </p>
<p>For your information, /translation qualifier is required only in case describing with /<a href="/ddbj/qualifiers-e.html#exception">exception</a> qualifier. <br>Typically, /exception qualifier indicates "RNA editing" is occurred on mRNA. In that case, conceptual amino acid translation of genome sequence is different from protein product of real mRNA molecules. </p>
<dl><dt>References</dt>
  <dd><a href="/ddbj/example-e.html">Example of Submission</a>: <a href="/ddbj/example-e.html#B09">B09) RNA editing</a></dd>
  <dd><a href="/faq/en/how-to-input-amino-acid-seq-e.html">How can I input amino acid sequence (/translation qualifier) for CDS feature?</a></dd>
  <dd><a href="/faq/en/how-to-confirm-translated-amino-acid-seq-e.html">How to confirm translated amino acid sequences (i.e. /translation qualifier) for CDS features?</a></dd>
  <dd><a href="/faq/en/translation-qualifier-seems-incorrect-e.html">The amino acid sequence in the value of /translation qualifier seems to be incorrect.</a></dd>
</dl>
