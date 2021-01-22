---
layout: tabbed_indexed_content
title: Pseudohaplotype
service_name: DDBJ Annotated/Assembled Sequences
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

Historically, whole-genome sequencing generated a single consensus sequence without distinguishing between alleles on homologous chromosomes. Long-read sequencing technologies can identify haploid chromosomes (called “pseudohaplotype” in INSDC). Because two genome sequences are produced from single sample in pseudohaplotype sequencing, INSDC establishes the guideline for pseudohaplotype sequence submission.

## pseudohaplotype  {#pseudohaplotype}

This page describes a typical case of the pseudohaplotype sequence submission. To distinguish pseudohaplotype assemblies, name one of the assemblies as “Principal” and another as “Alternate”. There is no absolute criteria, however, please name them based on their sequence length or sequencing accuracy. Because each pseudohaplotype assembly is derived from the same sample, both assemblies share the same BioSample. Because INSDC manages a genome assembly by unique combination of BioProject and BioSample, create separate BioProject for each principal and alternate pseudohaplotype to make the combination unique. Create an umbrella BioProject to group these projects.

If the raw DRA sequencing data contain both pseudohaplotypes, create a BioProject for DRA apart from those for assemblies. If the DRA data are derived from the same sample for the assemblies, use the same BioSample.


{% include image.html url="submission/pseudohaplotype.jpg" caption="Pseudohaplotype data submission" class="w600" %}


### BioProject  {#bioproject}

Create separate BioProject for each principal and alternate pseudohaplotype and an umbrella BioProject to group these projects.

  - BioProject 1: Principal
      - Add phasing information in the title. For example, Principal
        pseudohaplotype or Primary haplotype.
  - BioProject 2: Alternate
      - Add phasing information in the title. For example, Alternate
        pseudohaplotype or Alternate haplotype.
  - Umbrella BioProject
      - For grouping BioProject 1, 2 and the other related BioProjects
        (BioProject 3 for DRA in the figure).

### BioSample  {#biosample}

Because the sample is shared by pseudohaplotypes, create single BioSample.

  - Select [MIGS](/biosample/submission-e.html#Genomic_Sequences_Sample)
    package.
  - Create a common BioSample for principal and alternate
    pseudohaplotype.
  - If you add gene annotations to the pseudohaplotype sequences, enter
    a [locus tag prefix](/ddbj/locus_tag-e.html) you want to use for the
    principal and the alternate pseudohaplotype in the
    locus\_tag\_prefix attribute. The locus tag prefix is shared by the
    principal and the alternate pseudohaplotypes, loci can be
    distinguished by tags, for example, A1C\_p00001 (principal) and
    A1C\_a00001 (alternate).

### DDBJ  {#ddbj}

Submit the principal and the alternate pseudohaplotype sequences.

  - Principal pseudohaplotype
      - Reference the BioProject 1 (Principal) in
        [DBLINK](/ddbj/file-format-e.html#dblink).
      - Add the pre-defined comment in
        [ST\_COMMENT](/ddbj/file-format-e.html#comment).  
        Genome-Assembly-Data ST\_COMMENT: Diploid :: Principal
        Pseudohaplotype
  - Alternate pseudohaplotype
      - Reference the BioProject 2 (Alternate) in
        [DBLINK](/ddbj/file-format-e.html#dblink).
      - Add the pre-defined comment in
        [ST\_COMMENT](/ddbj/file-format-e.html#comment).  
        Genome-Assembly-Data ST\_COMMENT: Diploid :: Alternate
        Pseudohaplotype

### Real-world examples  {#real-examples}

#### Common  {#common}

  - BioProject: [PRJDB10054
    (Umbrella)](https://www.ncbi.nlm.nih.gov/bioproject/PRJDB10054)
  - BioSample:
    [SAMD00229903](https://www.ncbi.nlm.nih.gov/biosample/SAMD00229903)

#### Principal pseudohaplotype  {#principal}

  - BioProject:
    [PRJDB10055](https://www.ncbi.nlm.nih.gov/bioproject/PRJDB10055)
  - DDBJ:
    [BLYA01000001-BLYA01003780](https://www.ncbi.nlm.nih.gov/nuccore/BLYA00000000)

#### Alternate pseudohaplotype  {#alternate}

  - BioProject:
    [PRJDB10056](https://www.ncbi.nlm.nih.gov/bioproject/PRJDB10056)
  - DDBJ:
    [BLYB01000001-BLYB01003780](https://www.ncbi.nlm.nih.gov/nuccore/BLYB00000000)

#### DRA  {#dra}

  - BioProject:
    [PRJDB9979](https://www.ncbi.nlm.nih.gov/bioproject/PRJDB9979)
  - DRA: [DRX222432-DRX222163,
    DRR231909-DRR231923](https://www.ncbi.nlm.nih.gov/sra?term=DRP006217)
