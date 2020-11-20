---
layout: simple
title: 'How to fix error message: "Value of [ codon_start ] is not 1, but [
category: faq
db:
  - ddbj
tags: 
  - Nucleotide Sequence Submission System
date: 2014-07-06T16:30:25
lang: en
---



<p>You may enter incorrect values for <a href="/ddbj/location-e.html">Location</a> and/or /<a href="/ddbj/qualifiers-e.html#codon_start">codon_start</a> of <a href="/ddbj/cds-e.html">CDS</a> feature. <br>If the value of /codon_start is either of "2" or "3", the location of CDS feature should be 5' end not complete. </p>
<p>See <a href="/ddbj/location-e.html">Description of Location</a> and modify the location with flag for "5' end not complete", for an example, from "1..300" to "&lt;1..300". <br>When the CDS feature is started with an initiation codon, correct /codon_start with "1". </p>
<dl><dt>References:</dt>
  <dd><a href="/ddbj/cds-e.html#frame">Offset of the frame at translation initiation by codon_start</a></dd>
  <dd><a href="/faq/en/how-to-fix-error-msg-first-codon.html">How to fix error message: "First codon [***] is not a start codon." / "Final codon [***] is not a stop codon."?</a></dd>
  <dd><a href="/faq/en/how-to-fix-error-msg-stop-codon.html">How to fix error message: "Stop codon ‘*’ is found in the range."?</a></dd>
</dl>
