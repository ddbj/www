---
layout: indexed_content
title: INSDC standards for genome assembly submission

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

The original site; [INSDC standards for genome assembly submission](http://www.insdc.org/insdc-standards-genome-assembly-submission) 2013.08.14 version

Genome assemblies comprise a number of possible layers of information, including reads, contigs, scaffolds and chromosomes (see figure I). This document lays out the requirements for submission of genome assembly information into INSDC databases.

## Figure I. Three typical assembly processes <a name="Figure_I._Three_typical_assembly_processes"></a>

![]({{ site.baseurl }}/assets/images/ddbj/assembly1.gif)
![]({{ site.baseurl }}/assets/images/ddbj/assembly2.gif)
![]({{ site.baseurl }}/assets/images/ddbj/assembly3.gif)

Figure I. The figure shows three typical assembly processes and the
layers of information that they yield.  
A) Clone-based assembly with scaffolding and finishing steps.  
B) Shotgun assembly direct to chromosomes.  
C) Partial assembly to contigs only.

## Table I. New genome assembly submissions <a name="Table_I._New_genome_assembly_submissions"></a>

{::options parse_block_html="true" /}
<table>
  <tr>
    <td><strong>Component</strong></td>
    <td><strong>Level</strong></td>
    <td><strong>Comment</strong></td>
  </tr>
  <tr>
    <td>Reads</td>
    <td>Recommended</td>
    <td>Complete read and quality data</td>
  </tr>
  <tr>
    <td>Read to contig mapping</td>
    <td rowspan="2">One of, as appropriate, optional</td>
    <td>e.g. BAM alignment of reads to contigs</td>
  </tr>
  <tr>
    <td>Read to chromosome mapping</td>
    <td>e.g. BAM alignment of reads to new chromosome</td>
  </tr>
  <tr>
    <td>Contigs</td>
    <td rowspan="3">At least one layer mandatory</td>
    <td rowspan="3"></td>
  </tr>
  <tr>
    <td>Scaffolds</td>
  </tr>
  <tr>
    <td>Chromosomes</td>
  </tr>
  <tr>
    <td>Scaffold to chromosome mapping</td>
    <td>Mandatory if both layers are present</td>
    <td>e.g. AGP file</td>
  </tr>
  <tr>
    <td>Contig to scaffold mapping</td>
    <td>Mandatory if both layers are present</td>
    <td>e.g. AGP file</td>
  </tr>
  <tr>
    <td>Assembly description</td>
    <td>Mandatory</td>
    <td>Brief information relating to assembly and future plans</td>
  </tr>
  <tr>
    <td>Functional annotation</td>
    <td>Optional</td>
    <td></td>
  </tr>
</table>
 
Consistent with the variety of assembly processes, submitters to INSDC approach with data for the layers in different combinations of layers.
Tables I and II shows requirements for new genome assembly submissions and updates to existing assembly submissions.

## Table II. Update to existing genome assembly <a name="Table_II._Update_to_existing_genome_assembly"></a>

<table>
  <tr>
    <td><strong>Component</strong></td>
    <td><strong>Level</strong></td>
    <td><strong>Comment</strong></td>
  </tr>

  <tr>
    <td>Reads</td>
    <td>Recommended</td>
    <td>Complete read and quality data</td>
  </tr>

  <tr>
    <td>Read to contig mapping</td>
    <td rowspan="2">One of, as appropriate, optional</td>
    <td>e.g. BAM   alignment of reads to contigs</td>
  </tr>

  <tr>
    <td>Read to chromosome mapping</td>
    <td>e.g. BAM alignment of reads to new chromosome</td>
  </tr>

  <tr>
    <td>Contigs</td>
    <td rowspan="3">At least one layer mandatory, with highest layer no lower than for existing assembly</td>
    <td rowspan="3"></td>
  </tr>

  <tr>
    <td>Scaffolds</td>
  </tr>

  <tr>
    <td>Chromosomes</td>
  </tr>

  <tr>
    <td>Scaffold to chromosome mapping</td>
    <td>Mandatory if both layers are present</td>
    <td>e.g. AGP file</td>
  </tr>

  <tr>
    <td>Contig to scaffold mapping</td>
    <td>Mandatory if both layers are present</td>
    <td>e.g. AGP file</td>
  </tr>

  <tr>
    <td>Assembly description</td>
    <td>Mandatory</td>
    <td>Brief information relating to assembly and future plans</td>
  </tr>

  <tr>
    <td>Regenerated (or lifted-over) functional annotation</td>
    <td>Recommended</td>
    <td>If associated with existing assembly</td>
  </tr>

  <tr>
    <td>Coding annotation mappings between old and new assemblies</td>
    <td>Recommended where   functional annotation is provided for the updated assembly</td>
    <td>Typically through INSDC protein ID mappings</td>
  </tr>
</table>

Third party genome assembly submissions and updates, in which the submitting group does not hold complete ownership of data, are subject to existing third party annotation rules, including the requirement for presentation of the new/updated genome assembly in a peer reviewed publication prior to public release from INSDC.

