---
layout: indexed_content
title: Data Categories
pathname: data-categories-e
category: datacategories
related_pages:
  - title: Data Submission from Genome Project
    url: /ddbj/genome-e.html)
  - title: WGS
    url: /ddbj/wgs-e.html)
  - title: CON
    url: /ddbj/con-e.html)
  - title: GSS
    url: /ddbj/gss-e.html)
  - title: HTG
    url: /ddbj/htg-e.html)
  - title: Submission of environmental sequences
    url: /ddbj/environmental-e.html)
  - title: ENV
    url: /ddbj/env-e.html)
  - title: TLS
    url: /ddbj/tls-e.html)
  - title: Data Submission from Transcriptome Project
    url: /ddbj/transcriptome-e.html)
  - title: TSA
    url: /ddbj/tsa-e.html)
  - title: EST
    url: /ddbj/est-e.html)
  - title: HTC
    url: /ddbj/htc-e.html)
  - title: Third Party Data (TPA)
    url: /ddbj/tpa-e.html)
---


# Data Categories

## [Division](/ddbj/flat-file-e.html#Division) conventional sequence data

### General data: classified by source species

The data that are not classified into any categories described in the
sections are called general data and belong here.  
In principle, it is required for general data to have at least one
source feature and at least one other [Biological feature](/ddbj/file-format-e.html#biological_feature).  
Submitted sequences are automatically classified into one of the
following divisions on the basis of the taxonomy of the source
organisms.


| Division | Description                              |
| -------- | ---------------------------------------- |
| HUM      | Human                                    |
| PRI      | Primates (other than human)              |
| ROD      | Rodents                                  |
| MAM      | Mammals (other than primates or rodents) |
| VRT      | Vertebrates (other than mammals)         |
| INV      | Invertebrates                            |
| PLN      | Plants or fungi                          |
| BCT      | Bacteria                                 |
| VRL      | Viruses                                  |
| PHG      | Phages                                   |



### ENV/SYN: impossible to identify souce species, Environmental Samples and Synthetic Constructs

Environmental samples and artificially constructed sequences are
classified into [ENV](/ddbj/env-e.html) and SYN division,respectively.  
In principle, it is required for ENV and SYN data to have at least one
source feature and at least one other [Biological
feature](/ddbj/file-format-e.html#biological_feature).



| Division | Description |
| --- | --- |
| ENV | Sequences obtained via environmental sampling methods, direct PCR, DGGE, etc.<br />For ENV submissions, it is necessary to describe an [environmental_sample qualifier](/ddbj/qualifiers-e.html#environmental_sample) on the source feature.  |
| SYN | Synthetic constructs, sequences constructed by artificial manipulations<br />For SYN submissions, in general, the entry often has plural source features, so it should be cared.<br />See also [Example of Submission; E05) synthetic construct.](/ddbj/example-e.html#E05).  |



### EST/GSS/HTC/HTG/STS: Divisions for Feasibility of Sequencing

Sequences derived from high throughput projects, such as large scale
analyses like EST dataset, ongoing whole genome scale sequencing, and so
on, are classified into the following divisions, respectively.  
Basically only one source feature should be described for an entry in
those divisions.  
In this regard, however, the entries including HTC or HTG division can
have some [Biological
features](/ddbj/file-format-e.html#biological_feature) like as general
data, if necessary.



| Division | Description |
| --- | --- |
| [EST](/ddbj/est-e.html) | Expressed sequence tags, cDNA sequences read short single pass.  |
| [GSS](/ddbj/gss-e.html) | Genome survey sequences, genome sequences read short single pass.  |
| STS | Sequence tagged sites, tagged sequences for genome sequencing.<br />Recommended to use [primer_bind](/ddbj/features-e.html#primer_bind) feature and [PCR_conditions](/ddbj/qualifiers-e.html#PCR_conditions) qualifier.  |
| [HTC](/ddbj/htc-e.html) | High throughput cDNA sequences from cDNA sequencing projects, not EST.<br />This division is to include unfinished high throughput cDNA sequences.  |
| [HTG](/ddbj/htg-e.html) | High throughput genomic sequences mainly from genome sequencing projects.<br />Unfinished HTG entries are classified into different levels, as follow;{::nomarkdown}<ul><li>phase0；Survey sequence generated for the purpose of library quality assessment and detection of overlaps with other clones before construction of piece contig(s)</li><li>phase1；Unfinished sequence having contigs that have NOT been ordered and oriented</li><li>phase2；Unfinished sequence having contigs that have been ordered and oriented</li></ul>{:/}  |



### CON: Contig / Constructed, Tiling of Entries

Many genome projects submitting a lot of [HTG](/ddbj/htg-e.html) and/or
[WGS](/ddbj/wgs-e.html) entries can often provide the information to
assemble a series of their entries and reconstruct a genome structure.
An accession number would be assigned for such contig tiling path, so
called "[CON entry](/ddbj/con-e.html)", which is classified into CON
division.  
See also [Steps of genome sequencing, categories of sequence data and
their correspondences.](/ddbj/genome-e.html)

<span class="red">We can NOT directly accept only the submission of CON entry.</span>  
At first you have to submit all piece entries to construct the contig,
then a CON entry will be constructed.  
[AGP file](/ddbj/file-format-e.html#agp) is required to submit CON
entries.

## Data type, bulk sequence data

### WGS: Fragment Sequences during WGS Assembling Process

The large set of contigs from the proceeding genome project can be
submitted as one of bulk sequence data, [Whole Genome Shotgun
(WGS)](/ddbj/wgs-e.html).  
Please note that WGS data is different from others in its [format of
accession number](/ddbj/flat-file-e.html#Accession).  
See also [Steps of genome sequencing, categories of sequence data and
their correspondences](/ddbj/genome-e.html) .

### TSA: Transcriptome Shotgun Assembly

Since 2008, we have accepted one of bulk sequence data, [Transcriptome
Shotgun Assembly (TSA)](/ddbj/tsa-e.html) categorized for assembled RNA
transcript sequences.  
Basically only one source feature should be described for a TSA entry.  
TSA entries can have some [Biological
features](/ddbj/file-format-e.html#biological_feature) like as general
data, if necessary.  
Please note that TSA data may be different from others in its [format of
accession number](/ddbj/flat-file-e.html#Accession).  
See also [steps of transcriptome project, categories of sequence data
and their correspondences](/ddbj/transcriptome-e.html)

### TLS: Targeted Locus Study

Since 2016, we have accepted one of bulk sequence data, [Targeted Locus
Study (TLS)](/ddbj/tls-e.html), including 16S rRNA or some other
targeted loci mainly to be clustered into operational taxonomic unit.  
TLS entries can have some [Biological
features](/ddbj/file-format-e.html#biological_feature) like as general
data.  
Please note that TLS data is different from others in its [format of
accession number](/ddbj/flat-file-e.html#Accession).

## Sequenced by whom

### TPA; Third Party Data and primary sequence data

[TPA (Third Party Data)](/ddbj/tpa-e.html) is a nucleotide sequence data
collection in which each entry is obtained by assembling primary entries
publicized from DDBJ/EMBL-Bank/GenBank, [Trace
Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi), and/or
[Sequence Read Archive](/dra/index-e.html) with additional feature
annotation(s) determined by experimental or inferential methods by TPA
submitter. Those assemblies include two cases; one or more primary
entries are used and newly determined sequence is contained. TPA
sequence data should be submitted to DDBJ/EMBL-Bank/GenBank as a part of
the process to publish biological research for primary nucleotide
sequences.  
See also [TPA Submission Guidelines](/ddbj/tpa-table-e.html).

{::options parse_block_html="true" /}
<div class="attention">
If you are not sure to which database you should submit your data, see
following sites;

  - [steps of genome sequencing, categories of sequence data and their
    correspondences](/ddbj/genome-e.html)
  - [steps of transcriptome project, categories of sequence data and
    their correspondences](/ddbj/transcriptome-e.html)
  - [Division](/ddbj/flat-file-e.html#Division)

Using [Mass Submission System (MSS)](/ddbj/mss-e.html), the submitted
nucleotide sequences are classified into one of the categories according
to the descriptions of the DATATYPE, DIVISION, KEYWORD.
</div>