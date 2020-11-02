---
layout: indexed_content
title: 'How to fix error message: "Stop codon ‘*’ is found in the range."?'
category: faq
db:
  - ddbj
tags: 
  - Nucleotide Sequence Submission System
date: 2014-07-07T17:41:01
lang: en
---

## How to fix error message: "Stop codon ‘*’ is found in the range."?

<p>In general, see <a href="/ddbj/cds-e.html#stop">How to describe CDS feature, when termination codon is found in the range</a>. <br>You can also see <a href="/ddbj/cds-e.html">Protein Coding Sequence; CDS feature</a> to describe CDS feature. <br>Following items are case study for the error. </p>
<p><strong>1.</strong> Did you correctly specify /<a href="/ddbj/qualifiers-e.html#codon_start">codon_start</a> qualifier to indicate reading frame of the CDS feature?<br> Select 1, 2 or 3, appropriately. </p>
<dl><dt>References:</dt>
  <dd><a href="/ddbj/cds-e.html#frame">Offset of the frame at translation initiation by codon_start</a></dd>
  <dd><a href="/faq/en/how-to-fix-error-msg-first-codon-e.html">How to fix error message: “First codon [***] is not a start codon.” / “Final codon [***] is not a stop codon.”?</a></dd>
  <dd><a href="/faq/en/how-to-fix-error-msg-codon-start-e.html">How to fix error message: "Value of [ codon_start ] is not 1, but [###..###] is 5' complete type."?</a></dd>
</dl>
<p><strong>2.</strong> Have you specify correct <a href="/ddbj/geneticcode-e.html">genetic code</a> for /<a href="/ddbj/qualifiers-e.html#transl_table">transl_table</a> qualifier?<br>See followings and specify genetic code, appropriately. </p>
<dl><dt>References</dt>
  <dd><a href="/ddbj/geneticcode-e.html">The Genetic Codes</a></dd>
  <dd><a href="/ddbj/qualifiers-e.html#transl_table">About /transl_table qualifier</a></dd>
  <dd><a href="/faq/en/how-to-fix-error-msg-transl-table-e.html">How to fix error message: "Invalid value [***] for [transl_table] qualifier."?</a></dd>
</dl>
<p><strong>3.</strong> Are there really some stop codons in the range of CDS feature because of frame shift, nonsense mutation, or some other reason?<br></p>
<p><strong>3-1.</strong> In case of pseudogene<br>Click [Select Qualifier] button beside CDS and add <a href="/ddbj/qualifiers-e.html#pseudogene">/pseudogene qualifier</a>. Then, you can specify /pseudogene qualifier with <a href="/ddbj/pseudogene-e.html">its controlled vocabularies</a>. <br>See also <a href="/ddbj/cds-e.html#stop_b">b) considered pseudogene</a> in detail. </p>
<p><strong>3-2.</strong> In cases of unsure whether it is pseudogene or not, the reason of stop codon is uncertain, or on the process of diversity increasing related to acquired immunity, describe misc_feature, not CDS feature. <br>See <a href="/ddbj/cds-e.html#stop_a">a) Putative nonsense mutation, frameshift caused by uncertain reason, or on the process of diversity increasing related to acquired immunity for IgG etc.</a> in detail. </p>
<p><strong>In other cases.</strong> There are some possibilities to output this error because of <a href="/ddbj/cds-e.html#stop_d">ribosomal slippage</a>, <a href="/ddbj/cds-e.html#stop_e">RNA editing</a>, <a href="/ddbj/cds-e.html#stop_f">exceptional amino acid usage</a>, <a href="/ddbj/cds-e.html#stop_g">transpon insertion</a> and so on. </p>