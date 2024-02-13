---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: Metadata
category: dra
current_tab: overview
lang: en
---

## Objects {#objects}

The metadata describes how the associated data have been obtained.
The metadata are composed of 6 objects and each of these objects is defined by its [XML schema](https://github.com/ddbj/pub/tree/master/docs/dra/xsd/1-5) and is related each other.

{% include image.html url="books/sra_object.png" caption="Data model" class="w500" %}

[Submission](#Submission){: #Submission-obj}
: Submission information such as data release and submitters. A container object for grouping objects to be submitted.

[BioProject](#BioProject){: #BioProject-obj}
: Research project information. External database.

[BioSample](#BioSample){: #BioSample-obj}
: Biological sample from which sequencing data were obtained. External database.

[Experiment](#Experiment){: #Experiment-obj}
: A description of sequencing library and instrument. An Experiment references 1 BioProject and 1 BioSample.
Multiple Experiments can "point" to a single Sample, but not vice-versa.

[Run](#Run){: #Run-obj}
: A Run archives data files which belong to the previously created
Experiment (library and instrument).
Note that all data files listed in a Run will be merged into a single SRA archive file.
Paired-end data files must be listed in a single run in order for the two files to be correctly processed as paired-end.

[Analysis](#Analysis){: #Analysis-obj}
: Packages data associated with sequence read objects which do not have dedicated databases.
Analysis date are not shared among NCBI and EBI.

[Metadata examples](/dra/example-e.html)

## Metadata fields {#metadata}

Required<span class="red">*</span>
Conditionally required<span class="conditionally_required">*</span>

## Submission  {#Submission}

### Submitting organization  {#Area_submitting_organization}

The organization of the account is copied as the Submitting organization.
At 20th December 2023, the center name and organization abbreviations were discontinued.

### Hold Until  {#Area_hold-until}

Specify how to release the data.

[Hold Until](#Hold_Until)<a name="Hold_Until"></a><span class="conditionally_required">*</span>
: Direct the DRA to release the record on or after the specified
date.Submitter can set the hold date for a maximum of 2 years and can change the date before the record is released.

[Immediate Release](#Immediate_Release)<a name="Immediate_Release"></a><span class="conditionally_required">*</span>
: Direct the DRA to release the record immediately after submission is processed.

### Submitter  {#Area_submitter-submission}

The DRA contacts the listed address(es) regarding the submission by e-mail.
The contact information is not made public.

<div class="attention">
Email regarding the DRA submission is sent to addresses entered in the DRA Submission.
If you change email address registered in your D-way account, you need to update addresses of DRA Submissions to receive emails regarding the submissions.
</div>

[Name](#Contact_Name)<a name="Contact_Name"></a><span class="red">*</span>
: Name of submitter.

[E-mail](#Contact_E-mail)<a name="Contact_E-mail"></a><span class="red">*</span>
: E-mail of submitter.

## BioProject  {#BioProject}

[BioProject ID](#DRA_BioProjectID)<a name="DRA_BioProjectID"></a><span class="red">*</span>
: Select a project registered to [BioProject](/bioproject/index-e.html) or submit a new project. For submission to BioProject, please refer to the [BioProject Submission](/bioproject/submission-e.html).

## BioSample  {#BioSample}

[BioSample ID](#DRA_BioSampleID)<a name="DRA_BioSampleID"></a><span class="red">*</span>
: Select samples registered to [BioSample](/biosample/index-e.html) or create and submit new samples. For submission to BioSample, please refer to the [BioSample Submission](/biosample/submission-e.html).

## Experiment  {#Experiment}

[Alias](#Experiment_Alias)<a name="Experiment_Alias"></a>
: Name of the experiment designated by the archive. This alias is used to reference metadata objects without accession numbers.

[BioSample Used](#BioSample_Used)<a name="BioSample_Used"></a><span class="red">*</span>
: Select the BioSample this experiment uses.

[Title](#Experiment_Title)<a name="Experiment_Title"></a><span class="red">*</span>
: Short text that can be used to call out experiment records in
searches or in displays. A title like "[Sequencing Instrument
Model] [paired end] sequencing of [BioSample ID]" (for example,
"Illumina HiSeq 2000 paired end sequencing of SAMD00025741") is
automatically constructed. To enter user-defined titles, download Experiment metadata into a tab-delimited text file, edit title values and upload it.

[Library Name](#Library_Name)<a name="Library_Name"></a>
: The submitter's name for this library.

[Library Source](#Library_Source)<a name="Library_Source"></a><span class="red">*</span>
: The Library Source specifies the type of source material that is being sequenced.

| Library Source | Description |
|---|
| GENOMIC            | Genomic DNA (includes PCR products from genomic DNA).                              |
| TRANSCRIPTOMIC     | Transcription products or non genomic DNA (EST, cDNA, RT-PCR, screened libraries). |
| METAGENOMIC        | Mixed material from metagenome.                                                    |
| METATRANSCRIPTOMIC | Transcription products from community targets.                                     |
| SYNTHETIC          | Synthetic DNA.                                                                     |
| VIRAL RNA          | Viral RNA.                                                                         |
| OTHER              | Other, unspecified, or unknown library source material.                            |

[Library Selection](#Library_Selection)<a name="Library_Selection"></a><span class="red">*</span>
: Whether any method was used to select and/or enrich the material
being sequenced.

| Library Selection | Description |
|---|
| RANDOM                                 | Random shearing only.                                                                                                                                                                              |
| PCR                                    | Source material was selected by designed primers.                                                                                                                                                  |
| RANDOM PCR                             | Source material was selected by randomly generated primers.                                                                                                                                        |
| RT-PCR                                 | Source material was selected by reverse transcription PCR.                                                                                                                                         |
| HMPR                                   | Hypo-methylated partial restriction digest.                                                                                                                                                        |
| MF                                     | Methyl Filtrated.                                                                                                                                                                                  |
| repeat fractionation                   | Selection for less repetitive (and more gene rich) sequence through Cot filtration (CF) or other fractionation techniques based on DNA kinetics.                                                   |
| size fractionation                     | Physical selection of size appropriate targets.                                                                                                                                                    |
| MSLL                                   | Methylation Spanning Linking Library.                                                                                                                                                              |
| cDNA                                   | complementary DNA.                                                                                                                                                                                 |
| cDNA_randomPriming                    |                                                                                                                                                                                                    |
| cDNA_oligo_dT                        |                                                                                                                                                                                                    |
| PolyA                                  | PolyA selection or enrichment for messenger RNA (mRNA); should replace cDNA enumeration.                                                                                                           |
| Oligo-dT                               | enrichment of messenger RNA (mRNA) by hybridization to Oligo-dT.                                                                                                                                   |
| Inverse rRNA                           | depletion of ribosomal RNA by oligo hybridization.                                                                                                                                                 |
| ChIP                                   | Chromatin immunoprecipitation.                                                                                                                                                                     |
| MNase                                  | Micrococcal Nuclease (MNase) digestion.                                                                                                                                                            |
| DNAse                                  | Deoxyribonuclease (DNase) digestion.                                                                                                                                                               |
| Hybrid Selection                       | Selection by hybridization in array or solution.                                                                                                                                                   |
| Reduced Representation                 | Reproducible genomic subsets, often generated by restriction fragment size selection, containing a manageable number of loci to facilitate re-sampling.                                            |
| Restriction Digest                     | DNA fractionation using restriction enzymes.                                                                                                                                                       |
| 5-methylcytidine antibody              | Selection of methylated DNA fragments using an antibody raised against 5-methylcytosine or 5-methylcytidine (m5C)MBD2 protein methyl-CpG binding domain : Enrichment by methyl-CpG binding domain. |
| MBD2 protein methyl-CpG binding domain | MBD2 protein methyl-CpG binding domain.                                                                                                                                                            |
| CAGE                                   | Cap-analysis gene expression.                                                                                                                                                                      |
| RACE                                   | Rapid Amplification of cDNA Ends.                                                                                                                                                                  |
| MDA                                    | multiple displacement amplification.                                                                                                                                                               |
| padlock probes capture method          | Padlock Probes capture strategy to be used in conjuction with Bisulfite-Seq.                                                                                                                       |
| other                                  | Other library enrichment, screening, or selection process.                                                                                                                                         |
| unspecified                            | Library enrichment, screening, or selection is not specified.                                                                                                                                      |

[Library Strategy](#Library_Strategy)<a name="Library_Strategy"></a><span class="red">*</span>
: Sequencing technique intended for this library.
For the "Sequel IIe", select the "Sequel II" and indicate "Sequel IIe" usage in the [Library Construction Protocol](#Library_Construction_Protocol).

| Library Strategy | Description |
|---|
| WGS                                     | Whole genome shotgun.                                                                                                                                                                                                                                                     |
| WGA                                     | Whole genome amplification.                                                                                                                                                                                                                                               |
| WXS                                     | Random sequencing of exonic regions selected from the genome.                                                                                                                                                                                                             |
| RNA-Seq                                 | Random sequencing of whole transcriptome.                                                                                                                                                                                                                                 |
| miRNA-Seq                               | Micro RNA and other small non-coding RNA sequencing.                                                                                                                                                                                                                      |
| ncRNA-Seq                               | Capture of other non-coding RNA types, including post-translation modification types such as snRNA (small nuclear RNA) or snoRNA (small nucleolar RNA), or expression regulation types such as siRNA (small interfering RNA) or piRNA/piwi/RNA (piwi-interacting RNA).    |
| ssRNA-seq                               | strand-specific RNA sequencing                                                                                                                                                                                                                                            |
| WCS                                     | Whole chromosome (or other replicon) shotgun.                                                                                                                                                                                                                             |
| CLONE                                   | Genomic clone based (hierarchical) sequencing.                                                                                                                                                                                                                            |
| POOLCLONE                               | Shotgun of pooled clones (usually BACs and Fosmids).                                                                                                                                                                                                                      |
| AMPLICON                                | Sequencing of overlapping or distinct PCR or RT-PCR products.                                                                                                                                                                                                             |
| CLONEEND                                | Clone end (5', 3', or both) sequencing.                                                                                                                                                                                                                                   |
| FINISHING                               | Sequencing intended to finish (close) gaps in existing coverage.                                                                                                                                                                                                          |
| RAD-Seq                                 | Restriction Site Associated DNA Sequence                                                                                                                                                                                                                                  |
| ChIP-Seq                                | Direct sequencing of chromatin immunoprecipitates.                                                                                                                                                                                                                        |
| MNase-Seq                               | Direct sequencing following MNase digestion.                                                                                                                                                                                                                              |
| DNase-Hypersensitivity                  | Sequencing of hypersensitive sites, or segments of open chromatin that are more readily cleaved by DNaseI.                                                                                                                                                                |
| Bisulfite-Seq                           | Sequencing following treatment of DNA with bisulfite to convert cytosine residues to uracil depending on methylation status.                                                                                                                                              |
| EST                                     | Single pass sequencing of cDNA templates.                                                                                                                                                                                                                                 |
| FL-cDNA                                 | Full-length sequencing of cDNA templates.                                                                                                                                                                                                                                 |
| CTS                                     | Concatenated Tag Sequencing.                                                                                                                                                                                                                                              |
| MRE-Seq                                 | Methylation-Sensitive Restriction Enzyme Sequencing strategy.                                                                                                                                                                                                             |
| MeDIP-Seq                               | Methylated DNA Immunoprecipitation Sequencing strategy.                                                                                                                                                                                                                   |
| MBD-Seq                                 | Direct sequencing of methylated fractions sequencing strategy.                                                                                                                                                                                                            |
| Tn-Seq                                  | Gene fitness determination through transposon seeding.                                                                                                                                                                                                                    |
| FAIRE-seq                               | Formaldehyde Assisted Isolation of Regulatory Elements                                                                                                                                                                                                                    |
| SELEX                                   | Systematic Evolution of Ligands by EXponential enrichment                                                                                                                                                                                                                 |
| NOMe-Seq                                | Nucleosome Occupancy and Methylome sequencing.                                                                                                                                                                                                                            |
| RIP-Seq                                 | Direct sequencing of RNA immunoprecipitates (includes CLIP-Seq, HITS-CLIP and PAR-CLIP).                                                                                                                                                                                  |
| ChIA-PET                                | Direct sequencing of proximity-ligated chromatin immunoprecipitates.                                                                                                                                                                                                      |
| Hi-C                                    | Chromosome Conformation Capture technique where a biotin-labeled nucleotide is incorporated at the ligation junction, enabling selective purification of chimeric DNA ligation junctions followed by deep sequencing                                                      |
| ATAC-seq                                | Assay for Transposase-Accessible Chromatin (ATAC) strategy is used to study genome-wide chromatin accessibility. alternative method to DNase-seq that uses an engineered Tn5 transposase to cleave DNA and to integrate primer DNA sequences into the cleaved genomic DNA |
| Targeted-Capture                        |                                                                                                                                                                                                                                                                           |
| Tethered Chromatin Conformation Capture |                                                                                                                                                                                                                                                                           |
| Synthetic-Long-Read                     | binning and barcoding of large DNA fragments to facilitate assembly of the fragment                                                                                                                                                                                       |
| Other                                   | Library strategy not listed.                                                                                                                                                                                                                                              |

[Library Construction Protocol](#Library_Construction_Protocol)<a name="Library_Construction_Protocol"></a>
: Free form text describing the protocol by which the sequencing
library was constructed. Please include protocols of DNA
fragmentation, ligation and enrichment. If a library preparation kit
is used, include the name and version (if any) of the kit (for
example, Illumina Nextera DNA Library Preparation Kit).

Reference: Alnasir J, Shanahan HP. Investigation into the annotation
of protocol sequencing steps in the sequence read archive.
Gigascience. 2015 May 9;4:23. doi: 10.1186/s13742-015-0064-7.
eCollection 2015. PMID:
[25960871](https://www.ncbi.nlm.nih.gov/pubmed/25960871/) (Open Access)

[Instrument](#Instrument)<a name="Instrument"></a><span class="red">*</span>
: Select a sequencing instrument model.

| Instrument Model |
|---|
| 454 GS |
| 454 GS 20 |
| 454 GS FLX |
| 454 GS FLX+ |
| 454 GS FLX Titanium |
| 454 GS Junior |
| Illumina Genome Analyzer |
| Illumina Genome Analyzer II |
| Illumina Genome Analyzer IIx |
| Illumina HiSeq 1000 |
| Illumina HiSeq 1500 |
| Illumina HiSeq 2000 |
| Illumina HiSeq 2500 |
| Illumina HiSeq 3000 |
| Illumina HiSeq 4000 |
| HiSeq X Five |
| HiSeq X Ten |
| Illumina HiSeq X |
| Illumina HiScanSQ |
| Illumina NovaSeq 6000 |
| Illumina NovaSeq X |
| Illumina MiSeq |
| Illumina MiniSeq |
| Illumina iSeq 100 |
| NextSeq 500 |
| NextSeq 550 |
| NextSeq 1000 |
| NextSeq 2000 |
| Helicos HeliScope |
| AB SOLiD System |
| AB SOLiD System 2.0 |
| AB SOLiD System 3.0 |
| AB SOLiD 3 Plus System |
| AB SOLiD 4 System |
| AB SOLiD 4hq System |
| AB SOLiD PI System |
| AB 5500 Genetic Analyzer |
| AB 5500xl Genetic Analyzer |
| AB 5500xl-W Genetic Analysis System |
| Complete Genomics |
| BGISEQ-50 |
| BGISEQ-500 |
| MGISEQ-2000RS |
| DNBSEQ-G400 |
| DNBSEQ-G400 FAST |
| DNBSEQ-T7 |
| DNBSEQ-G50 |
| PacBio RS |
| PacBio RS II |
| Sequel |
| Sequel II |
| Sequel IIe |
| Onso |
| Revio |
| Ion Torrent PGM |
| Ion Torrent Proton |
| Ion Torrent S5 |
| Ion Torrent S5 XL |
| Ion GeneStudio S5 |
| Ion GeneStudio S5 plus |
| Ion GeneStudio S5 prime |
| Ion Torrent Genexus |
| MinION |
| GridION |
| PromethION |
| GENIUS |
| Genapsys Sequencer |
| GS111 |
| Sentosa SQ301 |
| Element AVITI |
| GenoCare 1600 |
| GenoLab M |
| FASTASeq 300 |
| UG 100 |
| Tapestri |
| AB 3730xL Genetic Analyzer |
| AB 3730 Genetic Analyzer |
| AB 3500xL Genetic Analyzer |
| AB 3500 Genetic Analyzer |
| AB 3130xL Genetic Analyzer |
| AB 3130 Genetic Analyzer |
| AB 310 Genetic Analyzer |

[Library Layout](#Library_Layout)<a name="Library_Layout"></a><span class="red">*</span>
: Select a layout of reads in sequencing data files.
Directions of reads (Forward or Reverse) are automatically determined from the Instrument values.
In December 2022, the display name was changed from "Spot Type" to "Library Layout".

| Spot Type | Description |
|---|
| single | Single read |
| paired | Paired reads |

[Insert Size](#Insert_Size)<a name="Insert_Size"></a><span class="conditionally_required">*</span>
: Size of the insert for Paired reads.
In December 2022, the display name was changed from "Nominal Length" to "Insert Size".

## Run  {#Run}

[Alias](#Run_Alias)<a name="Run_Alias"></a>
: Name of the run designated by the archive. This alias is used to
reference metadata objects without accession numbers.

[Title](#Run_Title)<a name="Run_Title"></a><span class="red">*</span>
: Short text that can be used to call out run records in searches or
in displays. A title like "[Sequencing Instrument Model] [paired
end] sequencing of [BioSample ID]" (for example, "Illumina HiSeq
2000 paired end sequencing of SAMD00025741") is automatically
constructed. To enter user-defined titles, download Run metadata
into a tab-delimited text file, edit title values and upload it.

[Experiment Referenced](#Experiment_Referenced)<a name="Experiment_Referenced"></a><span class="red">*</span>
: Select the experiment this run belongs to.

### Data files for Run  {#Area_data-files-for-run}

Select data files for a Run.

[Run/Analysis](#Run_Analysis)<a name="Run_Analysis"></a>
: Specify whether a data file belongs to the Run or Analysis. In the
web submission form, this field is un-editable and is automatically
filled according to the selected Run or Analysis. To upload metadata
in tsv file, this field needs to be specified manually.

[File Name](#File_Name)<a name="File_Name"></a><span class="red">*</span>
: The name of a sequence data file. Uploaded filenames are automatically filled in.

[Run/Analysis contains files](#Run_Analysis_contains_files)<a name="Run_Analysis_contains_files"></a><span class="red">*</span>
: Select a Run to which the data file belongs.

[File Type](#File_Type)<a name="File_Type"></a><span class="red">*</span>
: The sequence data file format. For the fastq files, select 'fastq' irrespective of read length.

| File Type | Description |
|---|
| fastq            | fastq file                                                                       |
| hdf5             | PacBio hdf5 Format file                                                                                                |
| bam              | Binary SAM format for use by loaders that combine alignment and sequencing data                                        |
| tab              | A tab-delimited table maps "SN in SQ line of BAM header" and "reference fasta file"                                    |
| reference_fasta | Reference sequence file in single fasta format used to construct SRA archive file format. Filename must end with ".fa" |

[MD5 Checksum](#MD5_Checksum)<a name="MD5_Checksum"></a><span class="red">*</span>
: MD5 checksum of a sequence data file. [How to obtain the MD5
checksum values.](#supplement-md5)

## Analysis  {#Analysis}

[Alias](#Analysis_Alias)<a name="Analysis_Alias"></a>
: Name of the analysis designated by the archive.This alias is used to reference metadata objects without accession numbers.

[Title](#Analysis_Title)<a name="Analysis_Title"></a><span class="red">*</span>
: Title of the analyis object.

[Description](#Analysis_Description)<a name="Analysis_Description"></a><span class="red">*</span>
: Describes the contents of the analysis.

[Analysis Type](#Analysis_Type)<a name="Analysis_Type"></a><span class="red">*</span>
: Select an Analysis type. Submit alignment data to Run in bam format.

|  Analysis Type  |  Description  |
|---|
|  De Novo Assembly  |  A placement of sequences including trace, SRA, GI records into a multiple alignment from which a consensus is computed..  |
|  Sequence Annotation  |  Per sequence annotation of named attributes and values.<br> Example: Processed sequencing data for submission to dbEST without assembly.<br> Reads have already been submitted to one of the sequence read archives in raw form.<br> The fasta data submitted under this analysis object result from the following treatments, which may serve to filter reads from the raw dataset:<br>     - sequencing adapter removal<br>     - low quality trimming<br>- poly-A tail removal<br>- strand orientation <br>- contaminant removal.  |
|  Abundance Measurement  |  Identify the tools and processing steps used to produce the abundance measurements (coverage tracks).  |

### Data files for Analysis  {#Area_data-files-for-analysis}

Select data files for an Analysis.

[Run/Analysis](#Run_Analysis_for_Analysis)<a name="Run_Analysis_for_Analysis"></a>
: Specify whether a data file belongs to the Run or Analysis. In the
web submission form, this field is un-editable and is automatically
filled according to the selected Run or Analysis. To upload metadata
in tsv file, this field needs to be specified manually.

[File Name](#Analysis_File_Name)<a name="Analysis_File_Name"></a><span class="red">*</span>
: The name of an analysis file.

[Run/Analysis contains files](#Analysis_Run_Analysis_contains_files)<a name="Analysis_Run_Analysis_contains_files"></a><span class="red">*</span>
: Select an Analysis to which the data file belongs.

[File Type](#Analysis_File_Type)<a name="Analysis_File_Type"></a><span class="red">*</span>
: The analysis data file format.

| File Type | Description |
|---|
| bam |  Binary form of the Sequence alignment/map format for read placements, from the SAM tools project.<br/>See <a href="http://sourceforge.net/projects/samtools/">http://sourceforge.net/projects/samtools/</a>.  |
| tab |  A tab delimited text file that can be viewed as a spreadsheet. The first line should contain column headers..  |
| ace |  Multiple alignment file output from the phred assembler and similar programs.<br/>See <a href="http://www.phrap.org/consed/distributions/README.16.0.txt">http://www.phrap.org/consed/distributions/README.16.0.txt</a> for a description of the ACE file format..  |
| fasta |  Sequence data format indicating sequence base calls.The format is simple: a header line initiated with the &gt; character, data lines following with base calls..  |
| wig |  The wiggle (WIG) format allows display of continuous-valued data in track format.This display type is useful for GC percent, probability scores, and transcriptome data.<br/> See <a href="http://genome.ucsc.edu/goldenPath/help/wiggle.html">http://genome.ucsc.edu/goldenPath/help/wiggle.html</a> for a description of the Wiggle Track format..  |
| bed |  BED format provides a flexible way to define the data lines that are displayed in an annotation track.<br/> See <a href="http://genome.ucsc.edu/FAQ/FAQformat#format1">http://genome.ucsc.edu/FAQ/FAQformat#format1</a> for a description of the BED format..  |
| vcf |  Variant Call Format.<br/>See <a href="http://www.1000genomes.org/wiki/analysis/variant%20call%20format/vcf-variant-call-format-version-41">http://www.1000genomes.org/wiki/analysis/variant%20call%20format/vcf-variant-call-format-version-41</a> for a description of the VCF format.  |
| maf |  Mutation Annotation Format  |
| gff |  General Feature Format  |
| csv |    |
| tsv |    |

[MD5 Checksum](#Analysis_MD5_Checksum)<a name="Analysis_MD5_Checksum"></a><span class="red">*</span>
: MD5 checksum of a run data file. [How to obtain the MD5 checksum values.](/checksum-e.html)
