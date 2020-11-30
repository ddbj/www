---
layout: indexed_content
title: Single amplified genome
pathname: single-amplified-genome-e
category: ddbj
current_tab: data_categories
tab_menu:
  - id: home
    title: Home
    url: /ddbj/index-e.html
  - id: submission
    title: Submission
    url: /ddbj/submission-e.html
    children:
      - title: Before Submission
        url: /ddbj/submission-e.html
      - title: Web submission
        url: /ddbj/web-submission-e.html
      - title: Mass Submission
        url: /ddbj/mss-e.html
      - title: Data Update
        url: /ddbj/update-e.html
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/arsa/?lang=en
    children:
      - title: getentry
        url: http://getentry.ddbj.nig.ac.jp/top-e.html
      - title: ARSA
        url: http://ddbj.nig.ac.jp/arsa/?lang=en
  - id: flat_file
    title: Flat file
    url: /ddbj/flat-file-e.html
    children:
      - title: Feature key
        url: /ddbj/features-e.html
      - title: Qualifier key
        url: /ddbj/qualifiers-e.html
      - title: Organism qualifier
        url: /ddbj/organism-e.html
      - title: Description of Location
        url: /ddbj/location-e.html
      - title: Protein Coding Sequence
        url: /ddbj/cds-e.html
      - title: The Genetic Codes
        url: /ddbj/geneticcode-e.html
      - title: Codes Used in Sequence Description
        url: /ddbj/code-e.html
      - title: Example of Submission
        url: /ddbj/example-e.html
  - id: data_categories
    title: Data categories
    url: /ddbj/data-categories-e.html
    children:
      - title: Data Submission from Genome Project
        url: /ddbj/genome-e.html
      - title: Pseudohaplotype
        url: /ddbj/pseudohaplotype-e.html
      - title: WGS
        url: /ddbj/wgs-e.html
      - title: Metagenome Assembly
        url: /ddbj/metagenome-assembly-e.html
      - title: Single amplified genome
        url: /ddbj/single-amplified-genome-e.html
      - title: CON
        url: /ddbj/con-e.html
      - title: GSS
        url: /ddbj/gss-e.html
      - title: HTG
        url: /ddbj/htg-e.html
      - title: Submission of environmental sequences
        url: /ddbj/environmental-e.html
      - title: ENV
        url: /ddbj/env-e.html
      - title: TLS
        url: /ddbj/tls-e.html
      - title: Data Submission from Transcriptome Project
        url: /ddbj/transcriptome-e.html
      - title: TSA
        url: /ddbj/tsa-e.html
      - title: EST
        url: /ddbj/est-e.html
      - title: HTC
        url: /ddbj/htc-e.html
      - title: Third Party Data (TPA)
        url: /ddbj/tpa-e.html
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html
  - id: other
    title: Other
    url: /ddbj/index-e.html
    children:
      - title: Patent
        url: /ddbj/patent-data-e.html
      - title: MGA
        url: /ddbj/mga-e.html
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
    [isolate](/biosample/attribute-e.html?all=all#isolate) and isolation
    souce in
    [isolation\_source](/biosample/attribute-e.html?all=all#isolation_source).
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
    [isolate](/biosample/attribute-e.html?all=all#isolate) and isolation
    souce in
    [isolation\_source](/biosample/attribute-e.html?all=all#isolation_source).

## Real-world examples <a name="real-examples"></a>

  - BioProject:
    [PRJDB8357](https://www.ncbi.nlm.nih.gov/bioproject/632761)
  - BioSample:
    [SAMD00192895](https://www.ncbi.nlm.nih.gov/biosample/?term=SAMD00192895)
  - BioSample:
    [SAMD00192902](https://www.ncbi.nlm.nih.gov/biosample/?term=SAMD00192902)
  - DDBJ:
    [BLSE00000000.1](https://www.ncbi.nlm.nih.gov/nuccore/BLSE00000000.1)
