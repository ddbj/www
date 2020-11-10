---
layout: indexed_content
title: Single amplified genome
pathname: single-amplified-genome-e
category: ddbj
lang: en
---

Single amplified genome (SAG) data are produced through processes of single-cell isolation, cell lysis, whole genome amplification and
sequencing. Because most cells contain a single or very few genome copies, introducing even trace amounts of contaminant DNA can severely affect SAG data quality. This page describes the guideline for SAG data submission to distinguish SAG from other genomes.

## Single cell <a name="single-cell"></a>

### DDBJ <a name="multi-ddbj"></a> 

source feature

  - For an organism name,
    [metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock)
    and names with “uncultured” can not be used.
  - As a keyword, add /note="single amplified genome".
  - Describe isolation source in /isolation\_source. For example, "one
    of ten single-cell amplified genomes of the same hot spring water;
    single-cell genome amplified by MDA (multiple displacement
    amplification)".

### BioSample <a name="multi-biosample"></a>

Package and attributes

  - Select [Other
    samples](/biosample/attribute-e.html?Core=Generic&definition=definition)
    package.
  - For an organism name,
    [metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock)
    and names with “uncultured” can not be used. Use an organism name
    same as SAG entry.
  - Describe identification or description of the specific individual in
    [isolate](/biosample/attribute.html?all=all#isolate) and isolation
    souce in
    [isolation\_source](/biosample/attribute.html?all=all#isolation_source).
  - As a keyword, add
    [sample\_type](/biosample/attribute-e.html?all=all#sample_type)=”single
    amplified genome”.

## Multiple cells <a name="multi-cells"></a>

### DDBJ <a name="multi-ddbj"></a>

source feature

  - For an organism name,
    [metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock)
    and names with “uncultured” can not be used.
  - As a keyword, add /note="single amplified genome".
  - Indicate that SAG derives from multiple samples and genomes in
    /note. For example, "co-assembly of 10 single-cell amplified
    genomes".
  - Describe isolation source in /isolation\_source.

### BioSample <a name="single-biosample"></a> 

Package and attributes

  - Select [Other
    samples](/biosample/attribute-e.html?Core=Generic&definition=definition)
    package and create a combined sample of samples registered as
    [”Single cell”](#single-biosample).
  - Indicate that the sample is combined in
    [sample\_title](/biosample/attribute-e.html?all=all#sample_title).
    For example, “Sample group: combined samples of
    SAMD00192892-SAMD00192901 (Co\_assembled genome)“
  - Indicate source sample accessions of the combined sample as
    derived\_from = “SAMD00192892-SAMD00192901” and note = “This sample
    group is the combination of the individual BioSamples:
    SAMD00192892-SAMD00192901.”
  - Describe identification or description of the specific individual in
    [isolate](/biosample/attribute.html?all=all#isolate) and isolation
    souce in
    [isolation\_source](/biosample/attribute.html?all=all#isolation_source).

## Real-world examples <a name="real-examples"></a>

  - BioProject:
    [PRJDB8357](https://www.ncbi.nlm.nih.gov/bioproject/632761)
  - BioSample:
    [SAMD00192895](https://www.ncbi.nlm.nih.gov/biosample/?term=SAMD00192895)
  - BioSample:
    [SAMD00192902](https://www.ncbi.nlm.nih.gov/biosample/?term=SAMD00192902)
  - DDBJ:
    [BLSE00000000.1](https://www.ncbi.nlm.nih.gov/nuccore/BLSE00000000.1)
