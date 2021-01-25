---
layout: top
service_name: BioSample
title: BioSample
category: biosample
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /biosample/index-e.html
  - id: handbook
    title: Handbook
    url: /biosample/submission-e.html
  - id: sample attribute
    title: Sample Attribute
    url: /biosample/attribute-e.html
    children:
      - title: Example files
        url: https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482
  - id: validation rules
    title: Validation Rules
    url: /biosample/validation-e.html
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html?keyword%5B%5D=biosample
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/BSSearch/
  - id: downloads
    title: Downloads
    url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/biosample
    children:
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/biosample/xsd
  - id: about biosample
    title: About BioSample
    url: /biosample/about-biosample-e.html
panels:
- title: How to submit
  url: /biosample/submission-e.html
  icon: ../assets/images/icon-search_analysis.png
- title: Login and submit
  url: https://ddbj.nig.ac.jp/D-way/
  icon: ../assets/images/icon-search_analysis.png
lang: en
---

[The BioSample database](/biosample/index-e.html) was developed to serve as a central location in which to capture and store descriptive information about the biological source materials, or samples, used to generate experimental data in any of DDBJ’s primary data archives. Typical examples of a BioSample include a cell line, a primary tissue biopsy, an individual organism, or an environmental isolate.

The data are shared among [DDBJ](../index-e.html), [EBI](https://www.ebi.ac.uk/biosamples/) and [NCBI](https://www.ncbi.nlm.nih.gov/biosample) BioSample databases; all sample information in one of these databases will also be held in the other database.

The general aims of this project include:

-   Allowing submitters to explicitly indicate when the same samples have been used across multiple studies.
-   to provide a submission portal that promotes the use of controlled vocabularies for sample attributes, thus helping to harmonize sample descriptions across databases.
-   to link samples to corresponding experimental data in multiple archival databases, making it possible for users to aggregate all available data derived from a given sample.
