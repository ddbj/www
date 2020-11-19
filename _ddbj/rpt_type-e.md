---
layout: indexed_content
title: Controlled vocabulary for /rpt_type qualifier
pathname: rpt_type-e
category: ddbj
current_tab: home
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

The original site; [Controlled vocabulary for /rpt_type qualifier](http://www.insdc.org/controlled-vocabulary-rpttype-qualifier) 2015.11.11 version.

This page contains the current definition, format and controlled
vocabularly for repeat type qualifier.

```
Qualifier: /rpt_type=
Definition: organization of repeated sequence 
Value format: tandem, inverted, flanking, terminal, direct, dispersed, and other
Example: /rpt_type=INVERTED 
Comment: the values are case-insensitive, i.e. both "INVERTED" and "inverted" are valid;
```

## Definitions of the values: <a name="Definitions_of_the_values_"></a>

tandem:  
: a repeat that consists of two or more adjacent copies of a region
whose length is greater than one in the same orientation;

inverted:  
: a repeat pair occurring in reverse orientation to one another on the
same molecule;

flanking:  
: a repeat lying outside the sequence for which it has functional
significance (eg. transposon insertion target sites);

terminal:  
: a repeat at the ends of and within the sequence for which it has
functional significance other than long terminal repeat;

direct:  
: a repeat where the same sequence is repeated in the same direction;

dispersed:  
: a repeat that is located at dispersed sites in the genome;

*nested:*  
: a repeat that is disrupted by the insertion of another element;

*long_terminal_repeat:*  
: a sequence directly repeated at both ends of a defined sequence, of
the sort typically found in retroviruses (replaces LTR Feature Key);

*non_ltr_retrotransposon_polymeric_tract:*  
: a polymeric tract, such as poly(dA), within a non LTR
retrotransposon;

*x_element_combinatorial_repeat:*  
: a repeat region located between the X element and the telomere or
adjacent Y' element;

*y_prime_element:*  
: a repeat region located adjacent to telomeric repeats or X element
combinatorial repeats, either as a single copy or tandem repeat of
two to four copies;

*telomeric_repeat:*  
: a repeat region found within the telomere;

*centromeric_repeat:*  
: a repeat region found within the modular centromere;

other:  
: a repeat exhibiting important attributes that cannot be described by
other values.
