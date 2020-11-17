---
layout: indexed_content
title: Submission to AGD
pathname: submission-e
category: agd
lang: en
---

## Submission Guide <a name="submission"></a>

The AGD accepts only de-identified data approved by NBDC. The users apply for data submission directly to the [NBDC](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines) and the AGD will only accept submissions once the information of a successful application process has been passed from the NBDC to the AGD.

Following internal IDs are issued to metadata objects with prefixes.

| Prefix | Metadata object | Digit | Example           |
| ------ | --------------- | ----- | ----------------- |
| AGD\_  | Submission      | 11    | AGD\_00000000001  |
| AGDS\_ | Study           | 11    | AGDS\_00000000001 |
| AGDN\_ | Sample          | 11    | AGDN\_00000000001 |
| AGDX\_ | Experiment      | 11    | AGDX\_00000000001 |
| AGDR\_ | Data            | 11    | AGDR\_00000000001 |
| AGDZ\_ | Analysis        | 11    | AGDZ\_00000000001 |
| AGDD\_ | Data set        | 11    | AGDD\_00000000001 |
| AGDP\_ | Policy          | 11    | AGDP\_00000000001 |

## Sequence data file (raw/unaligned and aligned) <a name="sequence"></a>

Supported AGD data submission formats are described below. If you have data in any other format or have any questions please [contact the AGD](/contact-ddbj-e.html).

Data files should be de-multiplexed prior to submission so that each data object is submitted with files containing data for a single sample only.

### BAM format <a name="bam-format"></a>

Binary Alignment/Map files (BAM) represent one of the preferred AGD submission formats. BAM is a compressed version of the Sequence Alignment/Map (SAM) format (see [SAMv1.pdf](https://samtools.github.io/hts-specs/SAMv1.pdf)). BAM files can be decompressed to a human-readable text format (SAM) using SAM/BAM-specific utilities (e.g. [samtools](http://www.htslib.org/)) and can contain unaligned sequences as well.  
AGD strongly recommends to submit BAM including unaligned reads as primary data into Data.

The BAM files are nearly optimal in terms of compression and should be submitted uncompressed.

### Fastq format <a name="fastq-format"></a>

Primary sequence data submissions of single and paired reads are accepted as [Fastq](http://en.wikipedia.org/wiki/FASTQ_format#Quality) files that meet the following the requirements:

  - Quality scores must be in [Phred](http://en.wikipedia.org/wiki/Phred_quality_score) scale. For example, quality scores from early Solexa pipelines must be converted to use this scale. Both ASCII and space delimitered decimal encoding of quality scores are supported. We will automatically detect the Phred quality offset of either 33 or 64.
  - No technical reads (adapters, linkers, barcodes) are allowed.
  - Single reads must be submitted using a single Fastq file.
  - Paired reads must split and submitted using two Fastq files. The read names must have a suffix identifying the first and second read from the pair, for example '/1' and '/2'; (regular expression for the reads "^(.\*)(\[\\\\.\|:\|/\|\_\])(\[12\])$").
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

### SFF format <a name="sff-format"></a>

The recommended submission format for the 454 platform is SFF.

The SFF files are nearly optimal in terms of compression and should be submitted uncompressed.

## Array based (Genotypes, SNP, Expression) <a name="array"></a>

The AGD accepts processed data from all types of array based technologies, such as genotypes, gene expression, methylations, etc.

We are very flexible regarding these submissions and would accept all types of files affiliated to the array experiment into the AGD array.

We recommend that both raw data (CELs) and analysis files be submitted, which will enable potential users of the data to recreate your results cited in the paper as well as view the described results.

The AGD also archives any sample-associated phenotype information.

## Variation data file <a name="variations"></a>

The AGD supports submissions of sequence variations in [VCF format](http://en.wikipedia.org/wiki/Variant_Call_Format). The vcf files are accepted as secondary analysis object.

## Other data files <a name="other"></a>

Analysis can refer to multiple Data and Sample objects and summary data summarizing data files of these objects can be registered to the Analysis. Example analysis files are listed below.

  - A reference sequence GFF3 file assembled by using multiple sequence files in a objects.
  - A table file summarizes normalized array data files in Arrays.
  - A phenotype table file summarizes phenotype information of Samples.

## Metadata <a name="metadata"></a>

The AGD data model is created by extending the [Sequence Read Archive's model](/dra/submission.html). The AGD metadata are composed of the XML objects.

AGD XML schema: [AGD xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

{::nomarkdown}
{% include image.html url="submission/jga_metadata_1.jpg" caption="Example: single policy." class="w500" %}
{:/}

{::nomarkdown}
{% include image.html url="submission/jga_metadata_2.jpg" caption="Example: separate policies for control and case." class="w500" %}
{:/}

### Summary information for public display <a name="public"></a>

When AGD submissions are released, following metadata objects will be public on the AGD and NBDC websites to display summary of submissions.

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

### Submission <a name="Submission"></a>

The submission XML is used to describe the submission transaction. It contains contact details of the submitter.

XML schema: [AGD.submission.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Study <a name="Study"></a>

The study XML describes your study in detail. It contains a title, a study type and an abstract, as it would appear in the publication. After publication, the study can be updated to include the PubMed ID of the paper containing the submitted data.

XML schema: [AGD.study.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Sample <a name="Sample"></a>

The sample XML describes each of the samples used in your submission. A sample generally corresponds to a participant. Whilst the mandatory fields are minimal we highly recommend to describe the sample in as much detail as possible.

XML schema: [AGD.sample.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Experiment <a name="Experiment"></a>

The experiment XML is used to describe each unique set of experimental setup details. This includes the library preparation details, sequencing and microarray platforms. The experiment XML can represent both sequencing and array experiments.

XML schema: [AGD.experiment.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Data <a name="Data"></a>

The data XML describes the data files and their relationship with the experiments. The data XML serves as a file container.

XML schema: [AGD.data.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Analysis <a name="Analysis"></a>

The Analysis XML can be used to submit analyzed and summarized data to JGA. Sample phenotype files can also be submitted. Variation data can be submitted as VCF files. Only one VCF file can be submitted in each analysis and the samples used within the VCF files must be associated with JGA Samples. Optimally the VCF file would be associated with an INSDC reference assembly and sequences either by using accessions or by using commonly used labels.

XML schema: [AGD.analysis.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Data set <a name="Dataset"></a>

The dataset XML describes the data files, defined by the Data XML and Analysis XML, that make up the dataset and links the collection of data files to a specified Policy (Data Access Agreement). Submitters do not need to create data set when single policy is associated with all data files. Please consider the number of datasets that your submission consists of, for example, a case control study is likely to consist of at least two datasets.

In general, policy is determined by informed consent with participants.

XML schema: [AGD.dataset.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Policy <a name="Policy"></a>

The Policy XML describes the Data Access Agreement (DAA).

XML schema: [AGD.policy.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

## Analysis only submission <a name="analysis_only"></a>

To submitting only aggregated data or data which are not suitable for Sample-Experiment-Data, these data can be submitted as Sample-Analysis instead of Sample-Experiment-Data.

{::nomarkdown}
{% include image.html url="submission/sample-analysis.jpg" caption="One Analysis for each Sample" class="w500" %}
{:/}

{::nomarkdown}
{% include image.html url="submission/samples-analysis.jpg" caption="Analysis data aggregating Samples" class="w500" %}
{:/}

To submitting Analysis only data, please contact [JGA team](/contact-ddbj-e.html).

## Update submissions <a name="update"></a>

To update your submissions, please [contact to the AGD team](/contact-ddbj-e.html).
