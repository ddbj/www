---
layout: indexed_content
title: Controlled vocabulary for /pseudogene qualifier
pathname: pseudogene-e
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

## Controlled vocabulary for /pseudogene qualifier

The original site; [Controlled vocabulary for /pseudogene
qualifier](http://www.insdc.org/documents/pseudogene-qualifier-vocabulary)
2012.08.15 version

A new qualifier was introduced in version 10.1 (May 2012) of the Feature
table definitions: /pseudogene. This qualifier is used to annotate
pseudogenes only.

The text below outlines the format and the present list of allowed
controlled vocabulary.

```
Qualifier:          /pseudogene=
Definition:         indicates that this feature is a pseudogene of the 
                    element named by the feature key
Value format:       "TYPE"      
                    where TYPE is one of the following:
                    processed, unprocessed, unitary, allelic, unknown
Examples:           /pseudogene="processed"
                    /pseudogene="unprocessed"
                    /pseudogene="unitary"
                    /pseudogene="allelic"
                    /pseudogene="unknown"
```

Comment: TYPE is a term taken from the INSDC controlled vocabulary for
pseudogenes:


processed:  
: the pseudogene has arisen by reverse transcription of a mRNA into
cDNA, followed by reintegration into the genome. Therefore, it has
lost any intron/exon structure, and it might have a
pseudo-polyA-tail.

unprocessed:  
: the pseudogene has arisen from a copy of the parent gene by
duplication followed by accumulation of random mutation. The
changes, compared to their functional homolog, include insertions,
deletions, premature stop codons, frameshifts and a higher
proportion of non-synonymous versus synonymous substitutions.

unitary:  
: the pseudogene has no parent. It is the original gene, which is
functional in some species but disrupted in some way (indels,
mutation, recombination) in another species or strain.

allelic:  
: a (unitary) pseudogene that is stable in the population but
importantly it has a functional alternative allele also in the
population. i.e., one strain may have the gene, another strain may
have the pseudogene. MHC haplotypes have allelic pseudogenes.

unknown:  
: the submitter does not know the method of pseudogenisation.
