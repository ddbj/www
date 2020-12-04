---
layout: indexed_content
title: Submission of environmental sequences

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
related_pages:
  - title: Data Submission from Genome Project
    url: /ddbj/genome-e.html
  - title: WGS
    url: /ddbj/wgs-e.html
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
---

## Submission of environmental sequences

Here shows procedures for sequence data obtained from studies that do
not specify individuals or species.

These kinds of data contain sequences and other information on
environmental samples.  
Though frequently confused, <span class="red">**the term,
'environmental samples', does NOT mean "wild type"**</span>.  
Environmental samples are identified sequences derived by direct
molecular isolation from a bulk environmental DNA sample (by PCR with or
without subsequent cloning of the product, DGGE, or other anonymous
methods) with no reliable identification of the source organism.

The ENV division contains (but is not limited to) the following types of
data:

  - sequences derived by direct molecular isolation from soil, sea
    water, etc.
  - clinical samples, gut contents, and other sequences from anonymous
    organisms that may be associated with a particular host
  - mixed culture derived from an environmental sample

Environmental samples do not include endosymbionts that can be reliably
recovered from a particular host, organisms from a readily identifiable
but uncultured field sample (e.g., many cyanobacteria), or phytoplasmas
that can be reliably recovered from diseased plants (even though these
cannot be grown in axenic culture).

Notes on environmental sample submission
: 
  - In many cases of environmental samples, we assign the lineage
    that as far as submitters could specify is used for the
    description of organism name with the header "uncultured". See
    also [Organism Qualifier 3. Environmental
    sample](/ddbj/organism-e.html#env) for further detail.
  - The
    [environmental_sample](/ddbj/qualifiers-e.html#environmental_sample)
    qualifier is required in [source](/ddbj/features-e.html#source)
    feature.
  - The
    [isolation_source](/ddbj/qualifiers-e.html#isolation_source)
    qualifier is required in [source](/ddbj/features-e.html#source)
    feature to describe origin of the sample.
  - Either [clone](/ddbj/qualifiers-e.html#clone),
    [isolate](/ddbj/qualifiers-e.html#isolate) or
    [submitter_seqid](/ddbj/qualifiers-e.html#submitter_seqid)
    qualifier is required as an identifier.
  - Do not use [strain](/ddbj/qualifiers-e.html#strain) qualifier.

<!-- end list -->

For small scale sequence data  
: Sequence data obtained from environmental samples are treated as
[ENV](/ddbj/env-e.html) division.

For large scale sequence data  
: For large scale sequencing studies, particularly derived fro NGS, please submit [BioProject](/bioproject/index-e.html) and
[BioSample](/biosample/index-e.html).

: Large scale analyses of targeted loci are treated as [Targeted Locus
Study](/ddbj/tls-e.html).

: In cases of analyses for assembling sequences for species or
individuals, depending on from genomes or from RNA transcripts, the data should be submitted as [Genome Project](/ddbj/genome-e.html) or [Transcriptome Project](/ddbj/transcriptome-e.html), respectively.

