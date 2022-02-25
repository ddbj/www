---
layout: tabbed_indexed_content
title: Single amplified genome
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
lang: en
---

Single amplified genome (SAG) data are produced through processes of single-cell isolation, cell lysis, whole genome amplification and
sequencing. Because most cells contain a single or very few genome copies, introducing even trace amounts of contaminant DNA can severely affect SAG data quality. This page describes the guideline for SAG data submission to distinguish SAG from other genomes.

## Single cell  {#single-cell}

### DDBJ  {#multi-ddbj} 

source feature

- For an organism name,
  [metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock)
  and names with “uncultured" can not be used.
- As a keyword, add /note="single amplified genome".
- Describe isolation source in /isolation_source. For example, "one
  of ten single-cell amplified genomes of the same hot spring water;
  single-cell genome amplified by MDA (multiple displacement
  amplification)".

### BioSample  {#multi-biosample}

Package and attributes

- Select [MISAG](/biosample/attribute-e.html) package.
- For an organism name,
  [metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock)
  and names with “uncultured" can not be used. Use an organism name
  same as SAG entry.
- As a keyword, add
  [sample\_type](/biosample/attribute-e.html?all=all#sample_type)="single
  amplified genome".

## Multiple cells  {#multi-cells}

### DDBJ  {#multi-ddbj}

source feature

- For an organism name,
  [metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock)
  and names with "uncultured" can not be used.
- As a keyword, add /note="single amplified genome".
- Indicate that SAG derives from multiple samples and genomes in
  /note. For example, "co-assembly of 10 single-cell amplified
  genomes".
- Describe isolation source in /isolation_source.

### BioSample  {#single-biosample} 

Package and attributes

- Select [MISAG](/biosample/attribute-e.html) package and create a combined sample of samples registered as ["Single cell"](#single-biosample).
- Indicate source sample accessions of the combined sample as derived_from = "SAMD00192892-SAMD00192901"
