---
layout: tabbed_indexed_content
title: MSS - Mass Submission System
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: submission
lang: en
related_pages:
  - title: Submission File Format
    url: /ddbj/file-format-e.html
  - title: Validation tools for MSS data files
    url: /ddbj/mss-tool-e.html
  - title: UME User’s manual
    url: /ddbj/ume-e.html
  - title: Parser User’s Manual
    url: /ddbj/parser-e.html
  - title: transChecker User’s Manual
    url: /ddbj/transchecker-e.html
  - title: Validator error message
    url: /ddbj/validator-e.html
  - title: Application form for MSS
    url: /ddbj/mss-form-e.html
---

<div class="attention" markdown="1">

<span class="red">Submission of research data from human subjects</span>

For all data from human subjects researches submitted to DDBJ, it is
submitter's responsibility to ensure that the dignity and the right of
participant (human subject) is protected in accordance with all
applicable laws, regulations and policies of submitter's institute.  
In principle, make sure to remove any direct personal identifiers of
human subjects from your submissions.  
Before submission, read "[Submission of research data from human subjects](/policies-e.html#submission-of-human-data)".

</div>

## Overview  {#outline}

Mass Submission System (MSS) is the service to accept relatively large scale nucleotide sequence data (not reads) through sending text files.    
The nucleotide sequence data belonging to <span class="red">either of the following cases</span> should be submitted via MSS, 
because they are not acceptable via the [NSSS: DDBJ Nucleotide Sequence Submission System](/ddbj/web-submission-e.html).    
Please note the points other than number or length of your data.  

#### a) Either of the following categories or amounts of sequence data

<div class="attention" markdown="1">
- [EST](/ddbj/est-e.html), STS, [TSA](/ddbj/tsa-e.html),
  [HTC](/ddbj/htc-e.html), [GSS](/ddbj/gss-e.html),
  [HTG](/ddbj/htg-e.html), [WGS](/ddbj/wgs-e.html),
  [CON](/ddbj/con-e.html), [TLS](/ddbj/tls-e.html)
    - See [Categories for Sequence Data](/documents/data-categories-e.html#division) in detail.
- Submission with long sequences, greater than 500 kb in its length
- Complex submission containing many features for one sequence, more than 30 features
- Submission consists of large number of sequences, greater than 100 in total
</div>

#### b) Regardless finished or draft level, sequence data of whole-length scale replicons  

<div class="attention" markdown="1">
- (Nuclear) genome
- Organelle genome
- Chromosome
- Virus/Phage genome/segments
- Plasmid
</div>

#### c) Sequence data to be described BioProject or BioSample in DBLINK  

When you need to use [DBLINK](/ddbj/flat-file-e.html#DBLINK) to link BioProject or BioSample, 
the following cases are included, but not limited to them.    

<div class="attention" markdown="1">
- Sequence data from metagenome analyses, environmental profilings, and so on 
- Sequence data of targeted genes to be linked each other
- When you are planning to submit or have submitted whole genome scale data obtained from the same samples. 
    - Required to submit prokaryotic 16S rRNA gene for phylogenic report  
    - Advanced paper submission of any other targeted gene(s)/cluster region(s) 
</div>

- Basically, if none of the above applies to your data, DDBJ recommends using the [NSSS: DDBJ Nucleotide Sequence Submission System](/ddbj/web-submission-e.html).   
- If you are to submit reads from sequencers, see [DRA, DDBJ Sequence Read Archive](/dra/index-e.html).  

## Registration process in MSS  {#flow}

<style type="text/css">
.mssflow, .mssflowend {position: relative; display: inline-block; margin: 5px 5px; padding: 0.2em 0.5em; border: solid 2px #FFC091; border-radius: 8px; box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);}
.mssflow::after {
  display: inline-block;
  margin: 0 0 0 -15px;
  border: 8px solid transparent;
  border-left-color: #FFC300;
  content: "";
  position: relative;
  top: 4px;
  left: 28px;
}
table tr:hover {
  background-color: #FEC091;
}
</style>

<!-- **Recomend:** A. Apply for the submission after you have prepared the submission files -->
<div class="mssflow">Create the submission files</div>
<div class="mssflow"><a href="https://mss.ddbj.nig.ac.jp/">Login to https://mss.ddbj.nig.ac.jp/ with D-way account</a></div>
<div class="mssflow">Fill MSS form & upload the submission files</div>
<div class="mssflow">DDBJ creats a new Mass-ID, sends autoreply</div>
<div class="mssflow">Review, inquiring and answering by email</div>
<div class="mssflow">You can obtain accession numbers</div>
<div class="mssflowend">Release the data, or hold until specified date</div>
<p></p>
<!-- B. Apply for the submission, and then you prepare the submission files
<div class="mssflow"><a href="https://mss.ddbj.nig.ac.jp/">Login to https://mss.ddbj.nig.ac.jp/ with D-way account</a></div>
<div class="mssflow">Fill MSS form</div>
<div class="mssflow">DDBJ creats a new Mass-ID, sends autoreply</div>
<div class="mssflow">Create the submission files</div>
<div class="mssflow">Upload the submission files</div>
<div class="mssflow">Review, inquiring and answering by email</div>
<div class="mssflow">You can obtain accession numbers</div>
<div class="mssflowend">Release the data, or hold until specified date</div> -->

<!-- <img src="/assets/images/ddbj/MSS-flow_20200916-en.png" alt="The Flow of MSS" title="" class=""> -->

## Preparation of the submission files  {#prep}
### Required files for the registration  {#prep-1}
- Sequence file
  - The text file that contains all nucleotide sequences in FASTA-like format.    
    see [Submission file format：Sequence file](/ddbj/file-format-e.html#sequence).
- Annotation file    
  - The tab delimited text file that contains metadata (submitters, reference) and annotation (Feature/Qualifier)    
    see [Submission file format：Annotation file](/ddbj/file-format-e.html#annotation)
  - For the prokaryote genome, you [can create the files by using DFAST(DDBJ Fast Annotation and Submission Tool)](/ddbj/mss-e.html#mssdfast).
- AGP file（only in case of [CON](/ddbj/con-e.html) entries)    
  - The tab delimited text file to construct CON sequence that contains the order, orientation, and type of each piece entry.    
  If nucleotide sequence can be assembled from an AGP file, you do not need to send a sequence file.    
    see [Submission file format：AGP file](/ddbj/file-format-e.html#agp) 

### Getting BioProject & BioSample ID  {#prep-2}
- According to the type of the data, you must obtain BioProject ID and BioSample ID (also reserve locus_tag prefix) to prepare the submission files.
- See the [table](#mssprjtable) to know what data type needs BioProject and BioSample.

### Annotation  {#prep-3}
- **[Sample annotation](/ddbj/file-format-e.html#sample)**
- For prokaryote genome, we strongly recommend that you should use [**DFAST (DDBJ Fast Annotation and Submission Tool)**](https://dfast.ddbj.nig.ac.jp/).
  - See [DFAST: creating the submission files](/ddbj/mss-e.html#mssdfast) and obtain the submission files.
- For [whole genome-scale sequence](/ddbj/genome-e.html), it is optional to describe biological features except source and assembly_gap. However, in case of a novel species that have not been reported so far, it is required to describe feature annotation against at least one genome as a representative.
- When you submit a genome with annotation, it is required to reserve [locus_tag prefix](/ddbj/qualifiers-e.html#locus_tag) at the registration of [BioSample](/biosample/index-e.html).
- For [TSA](/ddbj/tsa-e.html) data, it is optional (basically unnecessary) to describe biological features except source and assembly_gap.
- In case of [EST](/ddbj/est-e.html), you can not describe any biological features except source.
- See the [table](#mssprjtable) to know what data type needs annotation.

### Tool for checking the submission files   {#prep-4}
Before submitting to DDBJ, **the files must be checked with software tools** provided from DDBJ.

- UME (Utilities for MSS file Error check)    
The tool checks the syntax, format and amino acid translation of CDS features in [sequence file](/ddbj/file-format-e.html#sequence) and [annotation file](/ddbj/file-format-e.html#annotation). It includes both Parser and transChecker.    
OS: Windows, Linux/macOS    
Details：[UME User’s Manual](/ddbj/ume-e.html)
- Parser    
The tool checks the syntax and format of [sequence file](/ddbj/file-format-e.html#sequence) and [annotation file](/ddbj/file-format.html#annotation).    
OS: Linux    
Details：[Parser User’s Manual](/ddbj/parser-e.html)
- transChecker    
The tool validates the amino acid translation of CDS features (protein-coding sequence) in [annotation file](/ddbj/file-format.html#annotation) and [sequence file](/ddbj/file-format-e.html#sequence).    
OS: Linux    
Details：[transChecker User’s Manual](/ddbj/transchecker-e.html)
<div class="attention" markdown="1">
Download: [Validation tools for MSS data files](/ddbj/mss-tool-e.html)
</div>
- Validation tools for data files do not have any function to make files for your submission. So, please make your submission files by using text editor, spreadsheet software, or some application in your PC, appropriately.
- Syntax errors due to using undefined characters, contamination of control codes, and so on would cause a major obstacle during processing submitted data, which may result in significant delay of issuing accession numbers.
- When you have to describe CDS (protein coding sequences) as one of [Biological feature](/ddbj/file-format-e.html#biological_feature) for the annotation of your sequence, you must check the amino acid translation of CDS features 
 by using UME or transChecker tool before submitting to DDBJ.
- Before installing the validation tools, see [End-user license agreement](/ddbj/mss-tool-e.html#license).

## Creating account  {#account}
- If you have not obtained D-way account, create your account by clicking "Register for a new account" on [D-way](https://ddbj.nig.ac.jp/D-way/) (see [HELP](/account-e.html)).
- If you would like to use SCP/SFTP for transferring the files to DDBJ, you also need to [register center name and public key](/account-e.html#register-center-name-and-public-key) on the account setting page on D-way. See "[Data upload](/upload-e.html)" for detailed descriptions how to transfer the files.

## Applying for the registration  {#submission}
Please apply for your submission through ["Application form for MSS"](https://mss.ddbj.nig.ac.jp/).
You can include multiple submission to the same application only if the submission data meet the requirements shown below. You need to separate the submission if any one of the files does not meet the requirements.

You can upload the files in the application form if you have prepared the submission files. If you have not created the submission files and could not upload the files during the MSS application, please upload the submission file later. You will see the description for uploading the files in the reply email.

A Mass-ID is issued just after you complete the application. The Mass-ID (e.g. [DDBJ:NSUB000001]) is included within the subject name of the email. Please keep the subject when you reply to the email sent from DDBJ.

Requirements that you can include the same application
: &#x00B7; All submission files have the same contact person
: &#x00B7; All submission files have the same data type
: &#x00B7; All submission files have the same hold date

- Example cases that are allowed for the same application
  - Draft genomes consist of twenty Bacterial strains    
    &#x279E; WGS: Whole Genome Shotgun
  - Finished level genome sequences from three isolates of eukaryote genomes    
    &#x279E; GNM: Finished Level Genome sequence, non-WGS
  - Assembled transcribed sequences among the same species. It comprises multiple sets from different organisms.    
    &#x279E; TSA: Transcriptome Shotgun Assembly

### Example case where you must apply for the registration more than two times  {#submission-1}

a. Draft genome of chromosome, and complete plasmid sequences from a Bacterial strain
: You must separate into two submissions.
- Draft genome &#x279E; WGS: Whole Genome Shotgun
- Complete plasmid sequence(s) &#x279E; MISC: Sequences that are not included in above types

b. Draft genome sequences of chromosomes from a eukaryotic isolate, and complete organelle genome
: You must separate into two submissions.
- Draft genome &#x279E; WGS: Whole Genome Shotgun
- Complete organelle sequence(s) &#x279E; MISC: Sequences that are not included in above types

c. Draft genome sequences of chromosomes from a eukaryotic isolate, and assembled transcript sequences in large-scale
: You must separate into two submissions.
- Draft genome &#x279E; WGS: Whole Genome Shotgun
- Assembled transcripts &#x279E; TSA: Transcriptome Shotgun Assembly

## How to upload the submission files  {#sendfiles}
- Uploading in MSS form    
In the process of MSS application, you can upload the submission files in MSS form. Even if you cannot upload the submission files during the application, you can upload them later. You will find the link to upload files in the email that is sent from DDBJ just after the application.
- Transferring by SFTP    
If the total submission files exceed more than 10 Gbytes in uncompressed size, we recommend that you use SCP/SFTP by using [public/private key pair](/account-e.html#generate-key-pair). First, [register center name and public key](/account-e.html#register-center-name-and-public-key) to your account, and then send the files according to ["Data upload"](/upload-e.html).

<div class="attention" markdown="1">
＜NOTE＞ Do not send submission files as email attachment unless there is some particular reason.
</div>

## Review of the submission files   {#review}
Upload the submission files to DDBJ after you have checked the submission files by using [the file checking tool](/ddbj/mss-e.html#prep-4).

DDBJ reviews submission files and then informs the submitter of some correction requests and/or inquiries. If there is no problem with the submitted the files, DDBJ will register the submitted data to our database and send the accession number(s) to the contact person and/or submitters by an email.

*Optional: Before preparing the entire sequence and annotation files, you can send a part of your data as a test submission, and then ask DDBJ whether the submission files are correctly created or not.*

## Publication of the data  {#publication}
If you specified immediate release in the submission process, the submitted data are open to public as soon as possible. Whereas, if you specified [the hold date](/ddbj/submission-e.html#hold-date), the data will be released based on the principle of [“Hold-Until-Published” data release](https://www.ddbj.nig.ac.jp/documents/data-release-policy-e.html). The registered data are distributed in a flat file format converted according to a DDBJ defined rule, depending on the contents of sequence and annotation. Please refer to [the relationships between annotation files and flat files](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=961825804).

## Requirement of BioProject, BioSample ID {#mssprjtable}
- Genome

| Your submission | BioProject | BioSample | Annotation with<br> biological feature | locus_tag | Need DRA | You should select |
|---|
| Draft genome w/ annotation | M | M | M | M | OPT | WGS |
| Draft genome w/o annotation | M | M | NR | NR | OPT | WGS |
| Finished level genome sequence, non-WGS | M | M | M | M | OPT | GNM |
| Metagenome-Assembled Genome w/ annotation | M | M | M | M | M | MAG |
| Metagenome-Assembled Genome w/o annotation | M | M | NR | NR | M | MAG |
| Single Amplified Genome w/ annotation | M | M | M | M | OPT | SAG |
| Single Amplified Genome w/o annotation | M | M | NR | NR | OPT | SAG |
| High Throughput Genomic Sequences | M | M | OPT | NR | OPT | HTG |
| Transcriptome Shotgun Assembly | M | M | OPT | NR | M | TSA |
| High Throughput cDNA Sequences | M | M | OPT | NR | OPT | HTC |
| Expressed Sequence Tags | M | M | NR | NR | OPT | EST |
| Virus/Phage genome | NR | NR | OPT | NR | OPT | MISC |
| Plasmid genome only | NR | NR | OPT | NR | OPT | MISC |
| Organelle genome only | NR | NR | OPT | NR | OPT | MISC |
| Finished Level Genome + Plasmid | M | M | M | M | OPT | GNM, MISC for each submission |
| Finished Level Genome + Organelle | M | M | M | M | OPT | GNM, MISC for each submission |

M, Mandatory; NR, Not required; OPT, Optional

- Transcriptome

| Your submission | BioProject | BioSample | Annotation with<br> biological feature | locus_tag | Need DRA | You should select |
|---|
| Transcriptome Shotgun Assembly | M | M | OPT | NR | M | TSA |
| High Throughput cDNA Sequences | M | M | OPT | NR | OPT | HTC |
| Expressed Sequence Tags | M | M | NR | NR | OPT | EST |

M, Mandatory; NR, Not required; OPT, Optional

- Targeted Locus Study

| Your submission | BioProject | BioSample | Annotation with<br> biological feature | locus_tag | Need DRA | You should select |
|---|
| Targeted Locus Study | M | M | M | NR | OPT | TLS |

M, Mandatory; NR, Not required; OPT, Optional

## DFAST for the submission of prokaryote genomes  {#mssdfast}
### DFAST（DDBJ Fast Annotation and Submission Tool）  {#mssdfast-1}
[DFAST](https://dfast.ddbj.nig.ac.jp/) is a rapid annotation pipeline service for prokaryote genomes, which also generates the annotation files that can be directly submitted to DDBJ. We strongly recommend that the submitters use [DFAST](https://dfast.ddbj.nig.ac.jp/) for the registration of the prokaryote genomes to Annotated/Assembled Sequences database.

### Registration procedure for the prokaryote genome  {#mssdfast-2}
1. You need [D-way account](/account-e.html) which has been obtained through [DFAST](https://dfast.ddbj.nig.ac.jp/) in order to register the prokaryote genome and the annotation into DDBJ. Registration of [BioProject](https://www.ddbj.nig.ac.jp/bioproject/index-e.html),  [BioSample](https://www.ddbj.nig.ac.jp/biosample/index-e.html) and [locus_tag prefix](https://www.ddbj.nig.ac.jp/ddbj/locus_tag-e.html) when biological feature are descriebed are required in advance.
1. If you login to [DFAST](https://dfast.ddbj.nig.ac.jp/) with [D-way account](/account-e.html), you can manage the [jobs analyzed](https://dfast.ddbj.nig.ac.jp/help_login) in [DFAST](https://dfast.ddbj.nig.ac.jp/). If you have not obtained the login account, see [“Create a D-way account in the website”](/account-e.html#account-for-bioproject-biosample-submissions) to get a new account. 

### How to submit the data obtained in DFAST  {#mssdfast-3}
1. Login to [DFAST](https://dfast.ddbj.nig.ac.jp/) with your account. First, upload the fasta file in “job submission page”, and start the job to analyze the genome. At this stage, you can obtain a job ID. When the job is finished, click “DDBJ submission” tab on the page. The annotation and sequence files, which are needed for MSS submission, are created after you fill the form in metadata section.(*1)
1. On the [job management page](https://dfast.ddbj.nig.ac.jp/help_login), add checkmark to the job number that you would like to submit to DDBJ.
1. Select "MSS" for the file format type, and click “DOWNLOAD” to download the submission files. Please check the meta information carefully. If you encounter a warning, check again and correct the metadata that you have filled (*2). If you would like to edit the annotation and meta data on a text file, download the files and open them by text editor.
1. Apply for the submission through ["Application form for MSS"](https://mss.ddbj.nig.ac.jp/). According to the process shown in ["The Flow of MSS"](/ddbj/mss-e.html#flow), send the submission files that you have downloaded in DFAST to DDBJ.

*1 You can use [DFAST](https://dfast.ddbj.nig.ac.jp/) and obtain the result of genome annotation without logging in. In that case, you should remember the job ID. When you login to DFAST, you can import the job into your account by the function of job history on the menu bar.

*2 The function in [DFAST](https://dfast.ddbj.nig.ac.jp/) for checking the metadata is simple. You may be asked to correct the files by DDBJ curators after you submit the data.
