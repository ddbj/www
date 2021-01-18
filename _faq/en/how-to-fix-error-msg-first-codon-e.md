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



<p>These errors mean amino acid translation for <a href="/ddbj/cds-e.html">CDS (protein coding sequence) feature</a> is not appropriate in the 5' or 3' end, respectively. <br>When the CDS feature is not complete (i.e. partial) at 5' and/or 3' ends, its location is required to include flag for 'not complete'. <br>According to rules on <a href="/ddbj/location-e.html">Description of Location</a>, partial sequences should be appropriately specified with flags for 5' end not complete, "<strong>&lt;</strong>", and/or for 3' end not complete, "<strong>&gt;</strong>" on its feature location. </p>
<table class="t04">
  <caption>For example: partial CDS feature in the range, 1..295</caption>
  <tbody>
    <tr>
      <th>location</th>
      <th>condition</th>
    </tr>
    <tr>
      <td> &lt;1..295</td>
      <td> [not start with initiation codon] and [stop with termination codon]</td>
    </tr>
    <tr>
      <td>1.. &gt;295</td>
      <td> [start with initiation codon] and [not stop with termination codon]</td>
    </tr>
    <tr>
      <td> &lt;1.. &gt;295</td>
      <td> [not start with initiation codon] and [not stop with termination codon]</td>
    </tr>
  </tbody>
</table>
<dl><dt>References</dt>
  <dd><a href="/faq/en/how-to-fix-error-msg-stop-codon-e.html">How to fix error message: “Stop codon ‘*’ is found in the range.”?</a></dd>
  <dd><a href="/faq/en/how-to-fix-error-msg-codon-start-e.html">How to fix error message: "Value of [ codon_start ] is not 1, but [
  <dd><a href="/ddbj/cds-e.html#frame">Offset of the frame at translation initiation by codon_start</a></dd>
</dl>
