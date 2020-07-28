---
layout: indexed_content
title: Submission to JGA
pathname: submission-e
category: aboutjga
lang: en
---

## Submission Guide

The JGA accepts only de-identified data approved by NBDC. The users apply for data submission directly to the [NBDC](http://humandbs.biosciencedbc.jp/en/) and the JGA will only accept submissions once the information of a successful application process has been passed from the NBDC to the JGA.

It should be clear from the original consent agreements affiliated to your samples if your data should be subject to controlled access. All data submitted to the JGA has controlled access, which means that access to the data submitted is subject to approval by [NBDC](http://humandbs.biosciencedbc.jp/en/) as a part of a formal application procedure.

Controlled access does not correspond to holding a release prior to publication. All the DDBJ archival resources including the JGA enable you to hold a submission before publication.

Accession numbers are issued to metadata objects with following prefixes.

| Prefix | Metadata object | Number digit | Example         |
| ------ | --------------- | ------------ | --------------- |
| JGA    | Submission      | 11           | JGA00000000001  |
| JGAS   | Study           | 11           | JGAS00000000001 |
| JGAN   | Sample          | 11           | JGAN00000000001 |
| JGAX   | Experiment      | 11           | JGAX00000000001 |
| JGAR   | Data            | 11           | JGAR00000000001 |
| JGAZ   | Analysis        | 11           | JGAZ00000000001 |
| JGAD   | Data set        | 11           | JGAD00000000001 |
| JGAP   | Policy          | 11           | JGAP00000000001 |

<div class="attention red">
It is important for making data reusable and reproducible that the processed data on which the conclusions in the related manuscript are based, are registered to JGA. Please submit processed data files such as VCF in Analysis objects.
</div>

Currently, there is no requirement for authors to use a specific JGA accession in their publications. We would recommend that authors use the JGAS (study) accession, which would provide the reader/user with a complete overview of the study and a set of links to all the data from that study.

An example of accession number citation: "Genotype data has been deposited at the Japanese Genotype-phenotype Archive (JGA, http://trace.ddbj.nig.ac.jp/jga), which is hosted by the DDBJ, under accession number JGASXXXXXXXXX."

## Sequence data file (raw/unaligned and aligned)

Supported JGA data submission formats are described below. If you have data in any other format or have any questions please [contact the JGA](/contact-e.html) .

Data files should be de-multiplexed prior to submission so that each data object is submitted with files containing data for a single sample only.

### BAM format

Binary Alignment/Map files (BAM) represent one of the preferred JGA submission formats. BAM is a compressed version of the Sequence
Alignment/Map (SAM) format (see [SAMv1.pdf](https://samtools.github.io/hts-specs/SAMv1.pdf)). BAM files can be decompressed to a human-readable text format (SAM) using SAM/BAM-specific utilities (e.g. [samtools](http://www.htslib.org/)) and can contain unaligned sequences as well.  
JGA strongly recommends to submit BAM including unaligned reads as primary data into Data.

The BAM files are nearly optimal in terms of compression and should be submitted uncompressed.

### Fastq format

Primary sequence data submissions of single and paired reads are accepted as [Fastq](http://en.wikipedia.org/wiki/FASTQ_format#Quality) files that meet the following the requirements:

  - Quality scores must be in [Phred](http://en.wikipedia.org/wiki/Phred_quality_score) scale. For example, quality scores from early Solexa pipelines must be converted to use this scale. Both ASCII and space delimitered decimal encoding of quality scores are supported. We will automatically detect the Phred quality offset of either 33 or 64.
  - No technical reads (adapters, linkers, barcodes) are allowed.
  - Single reads must be submitted using a single Fastq file.
  - Paired reads must split and submitted using two Fastq files. The read names must have a suffix identifying the first and second read from the pair, for example '/1' and '/2'; (regular expression for the reads "^(.\*)(\[\\\\.\|:\|/\|\_\])(\[12\])$").
  - The first line for each read must start with '@'.
  - The base calls and quality scores must be separated by a line starting with '+'.
  - The Fastq files must be compressed using gzip or bzip2.

Example of Fastq file containing single reads:

```
@read_name
GATTTGGGGTTCAAAGCAGTATCGATCAAATAGTAAATCCATTTGTTCAACTCACAGTTT
+
!''*((((***+))%%%++)(%%%%).1***-+*''))**55CCF>>>>>>CCCCCCC65
...
```

Example of Fastq file containing paired reads:

```
@read_name/1
GATTTGGGGTTCAAAGCAGTATCGATCAAATAGTAAATCCATTTGTTCAACTCACAGTTT
+
!''*((((***+))%%%++)(%%%%).1***-+*''))**55CCF>>>>>>CCCCCCC65
@read_name/2
GATTTGGGGTTCAAAGCAGTATCGATCAAATAGTAAATCCATTTGTTCAACTCACAGTTT
+
!''*((((***+))%%%++)(%%%%).1***-+*''))**55CCF>>>>>>CCCCCCC65
...
```

### SFF format

The recommended submission format for the 454 platform is SFF.

The SFF files are nearly optimal in terms of compression and should be submitted uncompressed.

## Array based (Genotypes, SNP, Expression)

The JGA accepts processed data from all types of array based technologies, such as genotypes, gene expression, methylations, etc.

We are very flexible regarding these submissions and would accept all types of files affiliated to the array experiment into the JGA Analysis.

We recommend that both raw data (CELs) and analysis files be submitted, which will enable potential users of the data to recreate your results cited in the paper as well as view the described results.

## Variation data file

The JGA supports submissions of sequence variations in [VCF format](http://en.wikipedia.org/wiki/Variant_Call_Format) . The vcf files are accepted as secondary analysis object.

## Other data files

Analysis can refer to multiple Data and Sample objects and summary data summarizing data files of these objects can be registered to the Analysis. Example analysis files are listed below.

  - A reference sequence GFF3 file assembled by using multiple sequence files in a objects.
  - A table file summarizes normalized array data files in Analysis.

## Metadata

The JGA data model is created by extending the [Sequence Read Archive's model](/dra/submission-e.html). The JGA metadata are composed of the XML objects.

JGA XML schema: [JGA xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

{::nomarkdown}
{% include image.html url="submission/jga_metadata_1.jpg" caption="Example: single policy." class="w500" %}
{:/}

{::nomarkdown}
{% include image.html url="submission/jga_metadata_2.jpg" caption="Example: separate policies for control and case." class="w500" %}
{:/}

### Summary information for public display

When JGA submissions are released, following metadata objects will be public on the JGA and NBDC websites to display summary of submissions.

{::options parse_block_html="true" /}
<div class="dl-list">

Submission:  
: All fields excluding submitters' contact information.

Study:  
: All fields.

Data set:  
: All fields, number of samples, and filesize.

Policy:  
: All fields.

</div>

### Submission

The submission XML is used to describe the submission transaction. It contains contact details of the submitter.

XML schema: [JGA.submission.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Study

The study XML describes your study in detail. It contains a title, a study type and an abstract, as it would appear in the publication. After publication, the study can be updated to include the PubMed ID of the paper containing the submitted data.

XML schema: [JGA.study.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Sample

The sample XML describes each of the samples used in your submission. A sample generally corresponds to a participant. Whilst the mandatory fields are minimal we highly recommend to describe the sample in as much detail as possible including subject phenotypes.

XML schema: [JGA.sample.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Experiment

The experiment XML is used to describe each unique set of experimental setup details. This includes the library preparation details, next generation sequencing platforms. The experiment XML can represent next generation sequencing experiments.

XML schema: [JGA.experiment.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Data

The data XML describes the next generation sequencing data files and their relationship with the experiments. The data XML serves as a file container.

XML schema: [JGA.data.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Analysis

The Analysis XML can be used to submit array data, analyzed and summarized data to JGA. Variation data can be submitted as VCF files. Only one VCF file can be submitted in each analysis and the samples used within the VCF files must be associated with JGA Samples. Optimally the VCF file would be associated with an INSDC reference assembly and sequences either by using accessions or by using commonly used labels.

XML schema: [JGA.analysis.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Data set

The dataset XML describes the data files, defined by the Data XML and Analysis XML, that make up the dataset and links the collection of data files to a specified Policy (Data Access Agreement). When a Study contains datasets with different policies, separate Datasets need to be created.

In general, policy is determined by informed consent with participants.

XML schema: [JGA.dataset.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Policy

The Policy XML describes the Data Access Agreement (DAA). If only [NBDC policy](http://humandbs.biosciencedbc.jp/en/nbdc-policy) is associated with a submission, submitters do not need to create a new policy.

If additional policies are needed, you need to register a policy to NBDC and reference issued JGAP number from submitting data set.

XML schema: [JGA.policy.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

## Analysis only submission

To submitting only aggregated data or data which are not suitable for Sample-Experiment-Data, these data can be submitted as Sample-Analysis instead of Sample-Experiment-Data.

{::nomarkdown}
{% include image.html url="submission/sample-analysis.jpg" caption="One Analysis for each Sample" class="w500" %}
{:/}

{::nomarkdown}
{% include image.html url="submission/samples-analysis.jpg" caption="Analysis data aggregating Samples" class="w500" %}
{:/}

To submitting Analysis only data, please contact [JGA team](/contact-e.html) .

## Update submissions

To update your submissions, please [contact to the JGA team](/contact-e.html) .