---
layout: tabbed_indexed_content
title: Finished level genomic sequences
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

**Finished level genomic sequences (non-WGS)**

Nucleotide sequence must meet the following items as finished level genomic sequences
* Finished level genomic sequences represent the full-length sequences of each of the [replicons](#replicon) that make up the genome, and there must be one entry per [replicon](#replicon). It can contain sequencing gaps. In general, finished level genomic sequences refer to the full-length sequences of the chromosome.
* Each chromosome entry must be a single contiguous sequence. Finished level genomic sequences can include organelle in eukaryotes or plasmid in prokaryotes sequences as well as chromosomes.
* Each entry comprising a genome must be assigned either a chromosome, an organelle, or a plasmid. Chromosomes can include [unlocalized sequences](#unlocalized) and [unplaced sequences](#unplaced) as part of a set of finished level genomic sequences. The [unlocalized sequence](#unlocalized) is defined as a sequence in which the chromosome number has been determined but its position or orientation is unknown. The [unplaced sequence](#unplaced) is defined as a sequence in which the chromosome number is unknown.
* In prokaryotes and viruses / phages, the full length of the nucleotide sequence of a [replicon](#replicon) (chromosome or plasmid or segment) is expected to be submitted.
* In eukaryotes, the sequence of each chromosome that contains sequencing gaps (difficult-to-read regions such as centromeres, telomeres, and repeats) can be registered as finished level. In this entry, annotation of the sequencing gap region is required.


## How to submit to finished level genomic sequences and requirements

* In order to submit finished level genomic sequences, please apply at the[ Mass Submission System (MSS)](https://www.ddbj.nig.ac.jp/ddbj/mss-e.html)<span style="text-decoration:underline;"> </span>.
* Registration of both[BioProject](https://www.ddbj.nig.ac.jp/bioproject/index-e.html) and [BioSample](https://www.ddbj.nig.ac.jp/biosample/index-e.html) are required for submission of finished level genomic sequences in advance. Description of a single accession number of BioProject and BioSample are needed on Finished level genomic sequences.
* Raw read sequences can be registered at the[ DDBJ Sequence Read Archive (DRA)](https://www.ddbj.nig.ac.jp/dra/index-e.html). Accession number of run data that are used to construct the assembled genome sequences should be written on entries of Finished level genomic sequences.
* If biological features such as CDS, tRNA, rRNA and so on are annotated to the sequences, application of a[ locus_tag prefix](https://www.ddbj.nig.ac.jp/ddbj/locus_tag-e.html) for each genomes is mandatory one the submission of[ BioSample Database](https://www.ddbj.nig.ac.jp/biosample/index-e.html).
* If biological features such as CDS, tRNA, rRNA and so on are annotated to the sequences, registration of a[ locus_tag prefix](https://www.ddbj.nig.ac.jp/ddbj/locus_tag-e.html) is mandatory on the submission of [BioSample](https://www.ddbj.nig.ac.jp/biosample/index-e.html) every  genomes.
* Although annotation of biological features is optional, it is required for genome sequences from species that have not been available.
* The chromosome number, organelle name, plasmid name, and segment number must be described in the source feature using the specified qualifiers. For [unlocalized](#unlocalized) and [unplaced](#unplaced) sequences, please describe the scaffold or contig number in note qualifier.

Please also visit the following web site in more detail.

* [Data submission from Genome Project](https://www.ddbj.nig.ac.jp/ddbj/genome-e.html)
* [INSDC standards for genome assembly submission](https://www.ddbj.nig.ac.jp/ddbj/assembly.html)

## The components of the sequences

* The components of the sequences are as follows
    * chromosome level assembly sequence (chromosome)
    * unlocalized sequence (scaffold and contig)
    * unplaced sequence　(scaffold and contig)
    * organelle genome sequence
    * plasmid sequence
    * segment sequence (for virus genome)
* Examples of components
    * Eukaryotic genome
       * chromosome, unlocalized, unplaced, organelle
    * Prokaryotic genome
       * chromosome, plasmid
    * Virus or phage genome
      * chromosome, segment
    * Synthetic genome
       * chromosome

## Glossary

|<a id="replicon">replicon</a>|A structural unit of DNA or RNA that is initiated from a single origin of replication and replicated sequentially by a series of regulatory factors.|
|chromosome|A set of one or more chromosomes, with or without gaps. Unlocalized and unplaced sequences may be included.|
|<a id="unlocalized">unlocalized sequence</a>|A sequence that belongs to a particular chromosome but the position or orientation on that chromosome has not been determined.|
|<a id="unplaced">unplaced sequence</a>|A sequence that the chromosome number has not been determined.|

## Example DDBJ flat file format

**Aspect of Finished level genomic sequences** 

* [Accession number](https://www.ddbj.nig.ac.jp/ddbj/flat-file-e.html#ACCESSION); Basically, each Finished level genomic sequence submitted to DDBJ is assigned an accession number that consists of 2 alphabet characters and 6 digits .
* [DEFINITION](https://www.ddbj.nig.ac.jp/ddbj/flat-file-e.html#DEFINITION) ; The following information is displayed. 
    * In the case of  which entry consists of only a single chromosome in prokaryotes genome sequences,  “complete genome” is shown to indicate that entry is the full length of genome sequence.
    * In eukaryotes, an entry that is composed of consecutive sequences for a single chromosome shows chromosome number.

* [COMMENT](https://www.ddbj.nig.ac.jp/ddbj/flat-file.html#COMMENT) block includes Genome-Assembly-Data and information related to genome assembly. Here are the tag names of  Genome-Assembly-Data.

|Tag name|Value （information）|
|Assembly Method|Name of the assembly algorithm(s) with version number it was run.|
|Assembly Name|A brief name suitable for display that does not include the organism name. This is mandatory for eukaryotes.|
|Genome Coverage|The estimated base coverage across the genome.|
|Sequencing Technology|sequencing platform(s) used.|


* Example flat file for prokaryotes genome sequences entries 
    * Accession:[ AP025277-AP025279](https://getentry.ddbj.nig.ac.jp/getentry/na/AP025277-AP025279/?format=flatfile&filetype=html&trace=true&show_suppressed=false&limit=10)
    * Aeromonas hydrophila strain; NUITM-VA1, chromosome and plasmid
* Example flat file for eukaryotes genome sequences entries 
    * Accession:[ AP023152-AP023171](https://getentry.ddbj.nig.ac.jp/getentry/na/AP023152-AP023171/?format=flatfile&filetype=html&trace=true&show_suppressed=false&limit=10)
    * Felis catus, chromosome genome assemblies
    * [AP023152](https://getentry.ddbj.nig.ac.jp/getentry/na/AP023152/?format=flatfile&filetype=html&trace=true&show_suppressed=false&limit=10)  chromosome A1 entry
