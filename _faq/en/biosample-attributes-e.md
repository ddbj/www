---
layout: simple
title: How to find an appropriate BioSample attribute?
category: faq
db:
  - biosample
tags:
  - attributes
date: 2023-09-06T09:52:37
lang: en
---

Here is an example of how to find an appropriate attribute to describe "transplant recipient tissues".

### NCBI BioSample

If you have some idea, you may grasp the overview by seeing attribute name and their numbers in the NCBI BioSample [Advanced Search Builder](https://www.ncbi.nlm.nih.gov/biosample/advanced).

Select "Attribute Name" for the field name and input "transplant", then names and their numbers are displayed. You may find most used name. If you want to see BioSample records using the name, select the name and search.
{% include image.html url="faq/ncbi-bs-advanced.jpg" caption="Advanced Search Builder" class="w600" %}

### BioSample dump file

Download the BioSample XML file which contains all public records.

```
wget https://ddbj.nig.ac.jp/public/ddbj_database/biosample/biosample_set.xml.gz
```

Search attribute names and values by using grep.
```
grep "attribute_name=\"transplant" biosample_set.xml

<Attribute attribute_name="transplant">intertidal</Attribute>
<Attribute attribute_name="transplant">subtidal</Attribute>
<Attribute attribute_name="transplant">subtidal</Attribute>
<Attribute attribute_name="transplant">intertidal</Attribute>
<Attribute attribute_name="transplanted with">non-targeting scramble shRNA control MLL-AF9 primary AML</Attribute>
<Attribute attribute_name="transplanted with">non-targeting scramble shRNA control MLL-AF9 primary AML</Attribute>
<Attribute attribute_name="transplanted with">Cdkn1b specific shRNA expressing MLL-AF9 primary AML</Attribute>
...
```