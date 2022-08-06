---
layout: simple
title: How to describe samples labeled by isotopes?
category: faq
db:
  - metabobank
tags: 
  - metadata
date: 2022-08-05T09:52:37
lang: en
---

### Samples are metabolically labeled by isotopes

When samples are labeled by metabolically uptaking stable isotopes (metabolic isotope labeling), describe isotope-labeled compounds in the “isotope_labeled_compound” attributes of BioSample records. Stable isotopes are described in the “isotope” attributes.
   
* isotope_labeled_compound=[U-13C]-glucose 
* isotope=13C

In the SDRF rows correspond to the samples, describe the compounds and isotopes in the Characteristics columns.

|Characteristics[isotope_labeled_compound]|Characteristics[isotope]|
|[U-13C]-glucose|13C|

In this case, isotopes are described at sample-level, so the Labeled Extract Name and Label column values can be left empty.

### Extracted metabolites are chemically labeled by isotopes

When samples are chemically labeled by isotopes (chemical isotope labeling), describe isotopes in the SDRF Label column and isotope-labeled compounds in the Comment[isotope_labeled_compound] column.

|Labeled Extract Name|Label|Comment[isotope_labeled_compound]|
|human urine sample 1 12C|12C|12C-dansyl chloride|
|human urine pooled sample 13C|13C|13C-dansyl chloride|

In this case, isotopes are described at the extract-level, so BioSample records may not contain attributes for isotopes.






