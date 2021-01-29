---
layout: tabbed_indexed_content
title: Description of Location
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: flat_file
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
    url: /faq/en/index-e.html?keyword%5B%5D=ddbj
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

## Description of Location

Location, the region of the presented sequence where corresponds to a
feature, described with the International Nucleotide Sequence Database
is as follows.

| **Example of Location**           | **Meaning**                                                                                                                                                                                                                                                  |
|---|
| 340..565                          | Points to a continuous range of bases bounded by and including bases 340 and 565.                                                                                                                                                                            |
| complement(261..457)              | Points to a continuous range of bases bounded by and including bases 261 and 457 on complementary strand.                                                                                                                                                    |
| <345..500                        | Indicates that the location begins at some base previous to base 345 and continues to and includes base 500. The 5'-end point of a feature is not included in the presented sequence, or the exact lower 5'-end point of a feature than base 345 is unknown. |
| 345..>500                        | Indicates that the location begins and includes base 345 and continues to beyond base 500. The 3'-end point of a feature is not included in the presented sequence, or the exact higher 3'-end point of a feature than base 500 is unknown.                  |
| <345..>500                      | The both of 5'-end point and 3'-end point of a feature are not included in the presented sequence, or the both of exact 5'-end point and 3'-end point of a feature are unknown.                                                                              |
| join(12..78,134..202)             | Regions 12 to 78 and 134 to 202 should be joined to form one contiguous sequence                                                                                                                                                                             |
| complement(join(12..78,134..202)) | Regions 12 to 78 and 134 to 202 sequence on complementary strand should be joined to form one contiguous sequence.                                                                                                                                           |
| 467                               | Points to a single base 467 in the presented sequence.                                                                                                                                                                                                       |
| 123^124                           | Points to a site between bases 123 and 124                                                                                                                                                                                                                   |



The following description of location can not be entered on [Nucleotide
Sequence Submission System](/ddbj/web-submission-e.html).  
Please describe details at "Submission Information"; on Nucleotide
Sequence Submission System, or use [Mass Submission System](mss-e.html).



| **Example of Location**            | **Meaning**                                                                                                                                                                                                                       |
|---|
| join(AB000000.1:100..202,134..222) | Indicates that the regions 100 to 202 in the entry (in this database) with primary accession number 'AB000000' (its version number '1') and 134 to 222 in the presented sequence should be joined to form one contiguous sequence |



With the combination of list above, it is able to describe various ways
of indicating the sequence location.

For further information of the location, see [Feature Table　Definition](/ddbj/feature-table-e.html) : [3.4　Location](/ddbj/feature-table-e.html#3.4)

