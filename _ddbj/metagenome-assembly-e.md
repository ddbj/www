---
layout: indexed_content
title: Metagenome Assembly
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

Microorganisms comprise the majority of the planet's biological
diversity, however, due to the varied environments and conditions in
which these organisms reside, many of these cannot be cultured. By
standard genome analysis methods requiring isolation and laboratory
cultivation, limited knowledge was gained regarding these uncultured
microorganisms. Metagenomics is a culture-independent genomic analysis
method which surveys genomes of uncultured microorganisms and has
brought new discoveries about the genetic diversity, population
structure and ecological roles of these uncultured microorganisms.

Metagenome projects may include raw sequence reads collected from an
ecological or organismal source (submitted to the DDBJ Sequence Read
Archive), assembled contigs derived from the raw sequence data, binned
metagenome assemblies derived from a subset of the raw sequence data,
and metagenomic assemblies (Metagenomic Assembly, MAG) from
taxonomically defined organisms.

This guide explains how to submit these metagenomic sequencing data to
the BioProject/BioSample/DRA/DDBJ. Raw sequencing data deposition to DRA is not required but highly recommended.

## Submission of metagenome assembly data <a name="mag-submission"></a>

{::nomarkdown}
{% include image.html url="submission/mag.jpg" caption="Submission of metagenome assembly data" class="w600" %}
{:/}

### 1\) Raw reads (Run) <a name="raw-reads"></a>

Unassembled raw sequence data should be submitted to [DRA
Run](/dra/submission-e.html).

#### BioProject <a name="raw-reads-bioproject"></a>

Register your BioProject as a [metagenome/environmental
project](/bioproject/submission-e.html#Project-type). For the organism
name, choose the most appropriate "xyz metagenome" (e.g., soil
metagenome) from this list of [metagenome organism
names](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/)
in the taxonomy database. Please include information about the project,
including a detailed description of the isolation source, and the scope
of the project.

#### BioSample <a name="raw-reads-biosample"></a>

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

#### DRA <a name="raw-reads-dra"></a>

Submit unassembled raw sequence data to [DRA
Run](/dra/submission-e.html).

### 2\) Primary metagenome<a name="primary-metagenome"></a>

Assembled contigs derived from the raw sequence data should be submitted to DDBJ or DRA.

#### BioProject <a name="primary-metagenome-bioproject"></a>

Same as 1) Raw reads (Run).

#### BioSample <a name="primary-metagenome-biosample"></a>

Same as 1) Raw reads (Run).

#### DDBJ <a name="primary-metagenome-ddbj"></a>

Submit assembled contigs as [WGS entries](/ddbj/wgs.html) of [ENV division](/ddbj/env.html) through the [Mass Submission System (MSS)](/ddbj/mss.html).

#### DRA <a name="primary-metagenome-dra"></a>

Submit assembled contigs derived from the raw sequence data in fasta/bam
files to the [DRA Analysis](/dra/submission-e.html#Analysis_Type)
(Analysis type = 'De Novo Assembly'). Submit the Analysis along with the
Run registered in 1). Please note that Analysis data are not shared with NCBI/ENA.

### 3\) Binned metagenome<a name="binned-metagenome"></a>

Binned metagenome assemblies derived from a subset of the raw sequence data should be submitted to DDBJ or DRA. Example cases are when there are only a few short contigs for each organism, or when the organisms were binned based only on BLAST similarity.

#### BioProject <a name="binned-metagenome-bioproject"></a>

Same as 1) Raw reads (Run).

#### BioSample <a name="binned-metagenome-biosample"></a>

Same as 1) Raw reads (Run).

#### DDBJ <a name="binned-metagenome-ddbj"></a>

Submit binned metagenome assemblies as [WGS entries](/ddbj/wgs.html) of [ENV division](/ddbj/env.html) through the [Mass Submission System (MSS)](/ddbj/mss.html).

#### DRA <a name="binned-metagenome-dra"></a>

Submit binned metagenome assemblies derived from the raw sequence data
in fasta/bam files to the [DRA
Analysis](/dra/submission-e.html#Analysis_Type) (Analysis type = 'De
Novo Assembly'). Include information of analysis software used and
organism bin in the description. Submit the Analysis along with the Run
registered in 1). Please note that Analysis data are not shared with NCBI/ENA.

### 4\) MAG (DDBJ) <a name="mag"></a>

Metagenomic assemblies (Metagenomic Assembly, MAG) predicted to be
derived from taxonomically defined organisms should be submitted to DDBJ
as genome entries of [ENV division](/ddbj/env-e.html).

#### BioProject <a name="mag-bioproject"></a>

Register your BioProject as a [metagenome/environmental
project](/bioproject/submission-e.html#Project-type). If you have
already registered a BioProject for submission of the corresponding raw
reads to DRA, then, in general, you would use the BioProject when you
submit the MAG to DDBJ.

#### BioSample <a name="mag-biosample"></a>

Register a virtual BioSample by using the ["Other
samples"](/biosample/submission-e.html#General_Sample) package. Describe
an organism name without 'uncultured' (e.g., Methanosarcina thermophila)
in the taxonomy database from which the MAG was derived. Please note
that a virtual BioSample derived from the MIMS metagenomic sample used
in 1) is required for a MAG submission.

Following sample attributes other than the organism are necessary.
[Example
BioSample](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=272411182)

Fixed terms

  - sample\_type: metagenomic assembly
  - environmental\_sample: TRUE

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

  - note: This biosample is a metagenomic assembly obtained from the xyz
    metagenome BioSample: SAMDxxxxxxxx.
  - derived\_from: SAMDxxxxxxxx

#### DRA <a name="mag-dra"></a>

The raw sequence data used for the MAG assembly should be submitted to
the DRA Run.

#### DDBJ <a name="mag-ddbj"></a>

Submit the MAG as a genome entry of [ENV division](/ddbj/env-e.html)
through the [Mass Submission System (MSS)](/ddbj/mss-e.html). Following
information is necessary.

Required for the MAG entry.

  - Add /metagenome\_source = 'xyz metagenome' ('xyz metagenome' should
    be from this list of [metagenome organism
    names](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/)
    in the taxonomy database) to the source feature.

Required for the ENV division entry.

  - Add
    [/environmental\_sample](/ddbj/qualifiers-e.html#environmental_sample),
    [/isolation\_source](/ddbj/qualifiers-e.html#isolation_source) and
    [/isolate](/ddbj/qualifiers-e.html#isolate) to the source feature.

Required for the genome entry.

  - Include Assembly Method, Genome Coverage and Sequencing Technology
    in the [ST\_COMMENT](/ddbj/file-format-e.html#describing_st_comment)
  - Include Assembly Name in the
    [ST\_COMMENT](/ddbj/file-format-e.html#describing_st_comment) for
    eukaryotes.

In the MAG (ENV division) entry,
[/strain](/ddbj/qualifiers-e.html#strain) can not be used. Please
describe natural host of the organism from which sequenced molecule was
obtained in /host.
