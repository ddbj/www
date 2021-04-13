---
layout: simple
title: 'How to fix error message: "Invalid value [***] for [transl_table] qualifier."?'
category: faq
db:
  - ddbj
tags: 
  - Nucleotide Sequence Submission System
date: 2014-07-04T19:09:43
lang: en
---

The error is occurred because you do not enter correct [genetic code](/ddbj/geneticcode-e.html).     
See [7.Annotation -- Organism name](/ddbj/web-submission-help-e.html#flow-7-4).     
To specify [genetic code](/ddbj/geneticcode-e.html), enter digit in the input field.     
The value will be automatically applied for /[transl_table](/ddbj/qualifiers-e.html#transl_table) qualifier for [CDS feature](/ddbj/cds-e.html). 

For your information, in case of a previously reported organism, the genetic code is automatically specified, by describing Scientific name ([/organism qualifier](/ddbj/organism-e.html)) and [/organelle qualifier](/ddbj/qualifiers-e.html#organelle). If your sequence is derived from an organelle other than nuclei, you have to specify /organelle qualifier to set the genetic code for mitochondrion, chloroplast or some, appropriately. 

References
: [7.Annotation](/ddbj/web-submission-help-e.html#flow-7)
: [7.Annotation – Organism name](/ddbj/web-submission-help-e.html#flow-7-4)
: [The Genetic Codes](/ddbj/geneticcode-e.html)
: [About /transl_table qualifier](/ddbj/qualifiers-e.html#transl_table)

