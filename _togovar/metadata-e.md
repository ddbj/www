---
layout: tabbed_indexed_content
service_name: TogoVar-repository
title: Metadata
category: togovar
current_tab: submission
lang: en
---

## Data model {#data-model}

TogoVar-repository uses a data model common to SNP and SV.

{% include image.html url="togovar/data-model.jpg" caption="TogoVar-repository data model" class="w600" %}

* BioProject and BioSample are required.
* Variants are linked to Study/SampleSet through Dataset.
* SampleSet, Experiment and Dataset are internally referenced by serial numbers.

Accession numbers
* SNP: study (dstd), variant (dss). Public dss variants are merged to rs in the next dbSNP build.
* SV: study (dstd), variant call (dssv), variant region (dsv)

## Submission excel {#excel}

Download a submission excel file and fill in the file. 
Submit variants of different types as separate studies.  

[TogoVar-repository submission excel](https://github.com/ddbj/togovar-repository/raw/main/submission_excel/TogoVar_v1.4.xlsx)

