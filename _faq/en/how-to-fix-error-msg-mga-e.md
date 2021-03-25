---
layout: simple
title: 'How to fix error message: "MGA:No entry name is found other than [ COMMON ], without feature [ DATATYPE/type=MGA ]."?'
category: faq
db:
  - ddbj
tags: 
  - Nucleotide Sequence Submission System
date: 2014-07-07T14:57:17
lang: en
---

Though you have not yet enter either
/[organism](/ddbj/qualifiers-e.html#organism) or
/[mol\_type](/ddbj/qualifiers-e.html#mol_type) on annotation table, you
click \[Confirm\] button.  
You must fill mandatory items of annotation (feature, location,
qualifier) before clicking \[Confirm\] button.

On [7.Annotation](/ddbj/web-submission-help-e.html#flow-7), click
\[Select Qualifier\] button beside 'source', and select qualifiers as
needed. Then, click \[Edit\] button beside entry name and input
/organism and others. Note that it is required to input at least one
feature other than source.  
See also [7.Annotation – Organism
name](/ddbj/web-submission-help-e.html#flow-7-4).
