---
layout: tabbed_indexed_content
title: Metagenome Assembly
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
lang: en
---

Microorganisms comprise the majority of the planet's biological
diversity, however, due to the varied environments and conditions in
which these organisms reside, many of these cannot be cultured. By
standard genome analysis methods requiring isolation and laboratory
cultivation, limited knowledge was gained regarding these uncultured
microorganisms. Metagenomics is a culture-independent genomic analysis
method which surveys genomes of uncultured microorganisms and has
brought new discoveries about the genetic diversity, population
structure and ecological roles of these uncultured microorganisms.

Data from metagenome projects are grouped into four groups depending on their assembly level.

(1) NGS raw reads before assembly.    
(2) Assembled contigs of unknown taxa (Primary metagenome).     
(3) Binned assemblies asserted to known taxonomies (Binned metagenome).    
(4) A highest quality (in terms of completeness and contamination) representative binned assembly (Metagenome-Assembled Genome, MAG) for each predicted species. 

DDBJ Center accepts (1)-(3) in DRA and (4) in DDBJ. Regarding quality of MAG assembly, please refer to [this publication](https://www.nature.com/articles/nbt.3893).

This guide explains how to submit these metagenomic sequencing data to
the BioProject/BioSample/DRA/DDBJ. Raw sequencing data deposition to DRA is basically required.

## Submission of metagenome assembly data  {#mag-submission}

{% include image.html url="submission/mag-e.jpg" caption="Submission of metagenome assembly data" class="w600" %}

### (1) Raw reads {#raw-reads}

Unassembled raw sequence data should be submitted to [DRA
Run](/dra/submission-e.html).

#### BioProject  {#raw-reads-bioproject}

Register your BioProject as a [metagenome/environmental
project](/bioproject/submission-e.html#Project-type). For the organism
name, choose the most appropriate "xyz metagenome" (e.g., soil
metagenome) from this list of [metagenome organism
names](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/)
in the taxonomy database. 

#### BioSample  {#raw-reads-biosample}

Register your BioSample by using the ["Genome, metagenome or marker
sequences (MIxS compliant) - Environmental/Metagenome Genomic Sequences
(MIMS)"](/biosample/submission-e.html#Meta_Genomic_Sequences_Sample)
package. For the organism name, choose the most appropriate "xyz
metagenome" (e.g., soil metagenome) from this list of [metagenome
organism
names](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/)
in the taxonomy database. Please provide as much metadata and
information as possible about the samples in order to provide context
for the experimental data.

#### DRA  {#raw-reads-dra}

Submit unassembled raw sequence data to [DRA
Run](/dra/submission-e.html).

### (2) Primary metagenome {#primary-metagenome}

Assembled contigs derived from the raw sequence data should be submitted to [DRA Analysis](/dra/submission-e.html).

#### BioProject  {#primary-metagenome-bioproject}

Same as (1) Raw reads.

#### BioSample  {#primary-metagenome-biosample}

Same as (1) Raw reads.

#### DRA  {#primary-metagenome-dra}

Submit assembled contigs derived from the raw sequence data in fasta/bam
files to the [DRA Analysis](/dra/submission-e.html#Analysis_Type)
(Analysis type = 'De Novo Assembly'). Submit the Analysis along with the
Run registered in (1). Please note that Analysis data are not shared with NCBI/ENA. 
Analysis is not indexed by [DDBJ Search](https://ddbj.nig.ac.jp/search). Only analysis metadata XML and data files are provided in ftp. (For example, [DRZ000001](https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA000/DRA000072/).

### (3) Binned metagenome {#binned-metagenome}

Binned metagenome assemblies derived from a subset of the raw sequence data should be submitted to [DRA Analysis](/dra/submission-e.html).

#### BioProject  {#binned-metagenome-bioproject}

Same as (1) Raw reads.

#### BioSample  {#binned-metagenome-biosample}

Register a virtual BioSample by using the ["Other
samples"](/biosample/submission-e.html#General_Sample) package. Describe
an organism name without 'uncultured' (e.g., "Agrobacterium tumefaciens", "Agrobacterium sp.", "Rhizobiaceae bacterium")
in the taxonomy database from which the MAG was derived. Please note
that a virtual BioSample derived from the MIMS metagenomic sample used
in (1) is required for a binned submission.

Among organism names assigned by [GTDB](https://gtdb.ecogenomic.org/), please convert ones not registered in [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi) to corresponding NCBI Taxonomy's names.

Following sample attributes other than the organism are necessary.

Fixed terms
- sample\_type: metagenomic assembly

Sample isolation
- metagenome\_source: xyz metagenome
- isolate
- isolation\_source

Sample collection
- collection\_date
- env\_biome
- env\_feature
- env\_material
- geo\_loc\_name
- lat\_lon

Derived BioSample
- derived\_from: This biosample is a metagenomic assembly obtained from the xyz metagenome BioSample: SAMD00000001,SAMD00000002,SAMD00000010-SAMD00000015.

#### DRA  {#binned-metagenome-dra}

Submit binned metagenome assemblies derived from the raw sequence data
in fasta/bam files to the [DRA
Analysis](/dra/submission-e.html#Analysis_Type) (Analysis type = 'De
Novo Assembly'). Include information of analysis software used and
organism bin in the description. Submit the Analysis along with the Run
registered in (1). Please note that Analysis data are not shared with NCBI/ENA. 
Analysis is not indexed by [DDBJ Search](https://ddbj.nig.ac.jp/search). Only analysis metadata XML and data files are provided in ftp. (For example, [DRZ000001](https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA000/DRA000072/).

### (4) MAG {#mag}

Metagenomic assemblies (Metagenome-Assembled Genomes, MAGs) predicted to be
derived from taxonomically defined organisms should be submitted to DDBJ
as genome entries of [ENV division](/ddbj/env-e.html).

#### BioProject  {#mag-bioproject}

Register your BioProject as a [metagenome/environmental
project](/bioproject/submission-e.html#Project-type). If you have
already registered a BioProject for submission of the corresponding raw
reads to DRA, then, in general, you would use the BioProject when you
submit the MAG to DDBJ.

#### BioSample  {#mag-biosample}

Register a virtual BioSample by using the ["Other
samples"](/biosample/submission-e.html#General_Sample) package. Describe
an organism name without 'uncultured' (e.g., Agrobacterium tumefaciens)
in the taxonomy database from which the MAG was derived. Please note
that a virtual BioSample derived from the MIMS metagenomic sample used
in (1) is required for a MAG submission.

Among organism names assigned by [GTDB](https://gtdb.ecogenomic.org/), please convert ones not registered in [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi) to corresponding NCBI Taxonomy's names.

Following sample attributes other than the organism are necessary.
[Example BioSample](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=272411182)

Fixed terms
- sample\_type: metagenomic assembly

Sample isolation
- metagenome\_source: xyz metagenome
- isolate
- isolation\_source

Sample collection
- collection\_date
- env\_biome
- env\_feature
- env\_material
- geo\_loc\_name
- lat\_lon

Derived BioSample
- derived\_from: This biosample is a metagenomic assembly obtained from the xyz metagenome BioSample: SAMD00000001,SAMD00000002,SAMD00000010-SAMD00000015.

#### DRA  {#mag-dra}

The raw sequence data used for the MAG assembly should be submitted to
the DRA Run.

#### DDBJ  {#mag-ddbj}

Submit the MAG as a genome entry of [ENV division](/ddbj/env-e.html)
through the [Mass Submission System (MSS)](/ddbj/mss-e.html). 
Following [Qualifier](/ddbj/qualifiers-e.html) of [source feature](/ddbj/features-e.html#source) are required for the MAG submission.

Required for the MAG entry.
- /metagenome\_source = 'xyz metagenome' ('xyz metagenome' should
  be from this list of [metagenome organism
  names](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/)
  in the taxonomy database).

Required for the ENV division entry.

- [/environmental\_sample](/ddbj/qualifiers-e.html#environmental_sample)
- [/isolation\_source](/ddbj/qualifiers-e.html#isolation_source)
- [/isolate](/ddbj/qualifiers-e.html#isolate)

The assebly information is necessary in [ST\_COMMENT](/ddbj/file-format-e.html#describing_st_comment) as a genome entry.

- Assembly Method
- Genome Coverage
- Sequencing Technology
- Assembly Name (required in the case of eukaryotes)

In the MAG (ENV division) entry,
[/strain](/ddbj/qualifiers-e.html#strain) can not be used. Please
describe natural host of the organism from which sequenced molecule was
obtained in /host.


