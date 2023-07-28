---
layout: tabbed_indexed_content
title: Data Categories
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
lang: en
related_pages:
  - title: Data Submission from Genome Project
    url: /ddbj/genome-e.html
  - title: Submission of environmental sequences
    url: /ddbj/environmental-e.html
  - title: Data Submission from Transcriptome Project
    url: /ddbj/transcriptome-e.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa-e.html
---

## Division  {#division}

### General data: classified by source species  {#general}

The data that are not classified into any categories described in the
sections are called general data and belong here.  
In principle, it is required for general data to have at least one
source feature and at least one other [Biological feature](/ddbj/file-format-e.html#biological_feature).  
Submitted sequences are automatically classified into one of the
following divisions on the basis of the taxonomy of the source
organisms.


| Division | Description                              |
|---|
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



### ENV/SYN: impossible to identify souce species, Environmental Samples and Synthetic Constructs  {#env}

Environmental samples and artificially constructed sequences are
classified into [ENV](/ddbj/env-e.html) and SYN division,respectively.  
In principle, it is required for ENV and SYN data to have at least one
source feature and at least one other [Biological
feature](/ddbj/file-format-e.html#biological_feature).



| Division | Description |
|---|
| ENV | Sequences obtained via environmental sampling methods, direct PCR, DGGE, etc.<br />For ENV submissions, it is necessary to describe an [environmental_sample qualifier](/ddbj/qualifiers-e.html#environmental_sample) on the source feature.  |
| SYN | Synthetic constructs; sequences constructed by artificial manipulations<br />For SYN submissions, in general, the entry often has plural source features, so it should be cared.<br />See also [Example of Submission; E05) synthetic construct.](/ddbj/example-e.html#E05).  |

<!-- ### CON: Contig/Constructed, Tiling of Entries  {#con} -->
<!-- Many genome projects submitting a lot of [HTG](/ddbj/htg-e.html) and/or -->
<!-- [WGS](/ddbj/wgs-e.html) entries can often provide the information to assemble a series of their entries and reconstruct a genome structure.      -->
<!-- An accession number would be assigned for such contig tiling path, so called "[CON entry](/ddbj/con-e.html)", which is classified into CON division.      -->
<!-- See also [Steps of genome sequencing, categories of sequence data and their correspondences.](/ddbj/genome-e.html )     -->
<!-- At first you have to submit all piece entries to construct the contig, then a CON entry will be constructed.     -->
<!-- [AGP file](/ddbj/file-format-e.html#agp) is required to submit CON entries.     -->

### EST/GSS/HTC/HTG: Divisions for Feasibility of Sequencing  {#est}

Sequences derived from high throughput projects, such as large scale analyses like EST dataset, 
ongoing whole genome scale sequencing, and so on, are classified into the following divisions, respectively.    
Basically only one source feature should be described for an entry in those divisions.    
In this regard, however, the entries including HTC or HTG division can have some 
[Biological features](/ddbj/file-format-e.html#biological_feature) like as generaldata, if necessary.    

| Division | Description |
|---|
| [EST](/ddbj/est-e.html) | Expressed sequence tags, cDNA sequences read short single pass.  |
| [GSS](/ddbj/gss-e.html) | Genome survey sequences, genome sequences read short single pass.  |
| [HTC](/ddbj/htc-e.html) | High throughput cDNA sequences from cDNA sequencing projects, not EST.<br> This division is to include unfinished high throughput cDNA sequences.  |
| [HTG](/ddbj/htg-e.html) | High throughput genomic sequences mainly from genome sequencing projects.<br> Unfinished HTG entries are classified into different levels, as follow;{::nomarkdown}<ul><li>phase0；Survey sequence generated for the purpose of library quality assessment and detection of overlaps with other clones before construction of piece contig(s)</li><li>phase1；Unfinished sequence having contigs that have NOT been ordered and oriented</li><li>phase2；Unfinished sequence having contigs that have been ordered and oriented</li></ul>{:/}  |


## Data type, bulk sequence data  {#data_type}

### WGS: Fragment Sequences during WGS Assembling Process  {#wgs}

The large set of contigs from the proceeding genome project can be
submitted as one of bulk sequence data, [Whole Genome Shotgun
(WGS)](/ddbj/wgs-e.html).  
Please note that WGS data is different from others in its [format of
accession number](/ddbj/flat-file-e.html#Accession).  
See also [Steps of genome sequencing, categories of sequence data and
their correspondences](/ddbj/genome-e.html) .

### TSA: Transcriptome Shotgun Assembly  {#tsa}

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

### TLS: Targeted Locus Study  {#tls}

Since 2016, we have accepted one of bulk sequence data, [Targeted Locus
Study (TLS)](/ddbj/tls-e.html), including 16S rRNA or some other
targeted loci mainly to be clustered into operational taxonomic unit.  
TLS entries can have some [Biological
features](/ddbj/file-format-e.html#biological_feature) like as general
data.  
Please note that TLS data is different from others in its [format of
accession number](/ddbj/flat-file-e.html#Accession).

## Distinguishing that the nucleotide sequences are not determined by the submitters  {#whom}

### TPA: Third Party Data and primary sequence data  {#tpa}

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

## Data types in MSS submission  {#sub}

| Type | Description |
|---|
| WGS: Whole Genome Shotgun | The sequences are [WGS (draft genome)](/ddbj/wgs-e.html) excluding MAG or SAG. |
| GNM: Finished Level Genome Sequence, non-WGS | The sequences are [Finished Level Genomic Sequences (not WGS)](/ddbj/finished_level_genome-e.html) excluding MAG or SAG. |
| MAG: Metagenome-Assembled Genome | The sequences are [MAG](/ddbj/metagenome-assembly-e.html). |
| SAG: Single Amplified Genome | The sequences are [SAG](/ddbj/single-amplified-genome-e.html). |
| TLS: Targeted Locus Study | The sequences are [TLS](/ddbj/tls-e.html). |
| HTG: High Throughput Genomic Sequences | The sequences are [HTG](/ddbj/htg-e.html). |
| TSA: Transcriptome Shotgun Assembly | The sequences are [TSA](/ddbj/tsa-e.html). |
| HTC: High Throughput cDNA Sequences | The sequences are [HTC](/ddbj/htc-e.html). |
| EST: Expressed Sequence Tags | The sequences are [EST](/ddbj/est-e.html). |
| MISC: Sequences that are not included in above types | The sequences do not match any types. |
| ASK: Ask DDBJ curator to judge a correct datatype | Ask DDBJ curators to counsult the data type. |

## Decision of the data type and the registration site for submitting the nucleotide sequences 

  - [Steps of genome sequencing, categories of sequence data and their correspondences](/ddbj/genome-e.html)
  - [Steps of transcriptome project, categories of sequence data and their correspondences](/ddbj/transcriptome-e.html)
  - [Navigation](/submission-navigation-e.html)
