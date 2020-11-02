---
layout: indexed_content
title: 'How to fix error message: "Invalid value [***] for [transl_table] qualifier."?'
category: faq
db:
  - ddbj
tags: 
  - Nucleotide Sequence Submission System
date: 2014-07-04T19:09:43
lang: en
---

## How to fix error message: "Invalid value [***] for [transl_table] qualifier."?

<p>The error is occurred because you do not enter correct <a href="/ddbj/geneticcode-e.html">genetic code</a>. <br>See <a href="/ddbj/websub-help-e.html#flow-7-4">7.Annotation -- Organism name</a>. <br>To specify <a href="/ddbj/geneticcode-e.html">genetic code</a>, enter digit in the input field. <br>The value will be automatically applied for /<a href="/ddbj/qualifiers-e.html#transl_table">transl_table</a> qualifier for <a href="/ddbj/cds-e.html">CDS feature</a>. </p>
<p>For your information, in case of a previously reported organism, the genetic code is automatically specified, by describing Scientific name (<a href="/ddbj/organism-e.html">/organism qualifier</a>) and <a href="/ddbj/qualifiers-e.html#organelle">/organelle qualifier</a>. If your sequence is derived from an organelle other than nuclei, you have to specify /organelle qualifier to set the genetic code for mitochondrion, chloroplast or some, appropriately. </p>
<dl><dt>References</dt>
  <dd><a href="/ddbj/websub-help-e.html#flow-7">7.Annotation</a></dd>
  <dd><a href="/ddbj/websub-help-e.html#flow-7-4">7.Annotation – Organism name</a></dd>
  <dd><a href="/ddbj/geneticcode-e.html">The Genetic Codes</a></dd>
  <dd><a href="/ddbj/qualifiers-e.html#transl_table">About /transl_table qualifier</a></dd>
</dl>