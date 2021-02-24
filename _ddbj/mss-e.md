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

<span class="red">Submission of research data from human subjects</span>

For all data from human subjects researches submitted to DDBJ, it is
submitter's responsibility to ensure that the dignity and the right of
participant (human subject) is protected in accordance with all
applicable laws, regulations and policies of submitter's institute.  
In principle, make sure to remove any direct personal identifiers of
human subjects from your submissions.  
Before submission, read "[Submission of research data from human
subjects](/policies-e.html#human)".

## What is MSS?  {#outline}

<div class="attention" markdown="1">

Mass Submission System (MSS) is the service to accept relatively large
scale nucleotide sequence data (not reads) through sending text files.  
We at DDBJ recommend using MSS when:

- the submission is not applicable for Nucleotide Sequence Submission
  System (NSSS)  
  → [EST](/ddbj/est-e.html), STS, [TSA](/ddbj/tsa-e.html),
  [HTC](/ddbj/htc-e.html), [GSS](/ddbj/gss-e.html),
  [HTG](/ddbj/htg-e.html), [WGS](/ddbj/wgs-e.html),
  [CON](/ddbj/con-e.html), [TLS](/ddbj/tls-e.html)
- the submission with long sequences.  
  → greater than 500 kb in its length
- the complex submission containing many features  
  → more than 30 features
- the submission consists of large number of sequences.  
  → When number of sequences is greater than 1024, you have to submit
  two or more times via NSSS

</div>

Otherwise, DDBJ recommends using the [DDBJ Nucleotide Sequence
Submission System (NSSS)](/ddbj/web-submission-e.html) .

If you are to submit reads from sequencers, please refer [DRA; DDBJ
Sequence Read Archive](/dra/index-e.html).  
Please confirm [Categories for Sequence Data](/documents/data-categories-e.html).

## The Flow of MSS  {#flow}

<img src="/assets/images/ddbj/MSS-flow_20200916-en.png" alt="The Flow of MSS" title="" class="">

### 1. Application  {#flow-1}

Please apply for your submission through ["Application form for MSS"](/ddbj/mass-form-e.html). 
According to your application, DDBJ MSS sends you how to use MSS via an email.

#### Preparation for sequence data submission

When your data are corresponding to the following cases, please register [BioProject](/bioproject/index-e.html) and [BioSample](/biosample/index-e.html) before using MSS.

- [whole genome-scale sequence](/ddbj/genome-e.html):
  - Complete genome, nearly complete genome and draft genome ([WGS](/ddbj/wgs-e.html) and [HTG](/ddbj/htg-e.html)).
  - Excluding sequence data consisting only of organelle, virus/phage or plasmid sequence(s).
- [transcriptome](/ddbj/transcriptome-e.html): [TSA](/ddbj/tsa-e.html) (Transcriptome Shotgun Assembly) and [EST](/ddbj/est-e.html).
  - It is also required to submit non-assembled data (original reads, or the alternative) to DRA before [TSA](/ddbj/tsa-e.html) submission.
  - In the case of [EST](/ddbj/est-e.html), [BioProject](/bioproject/index-e.html) and [BioSample](/biosample/index-e.html) are not required, but recommended.
- [TLS](/ddbj/tls-e.html) (Targeted Locus Study)

#### Description of annotation

- For [whole genome-scale sequence](/ddbj/genome-e.html), it is optional to describe biological features except source and  assembly_gap. However, in case of highly novel species, i.e. not available any sequence data, it is required to describe feature annotation for at least one genome as a representative.
- If you decide to submit a genome with annotation, it is required to reserve [locus_tag prefix](/ddbj/qualifiers-e.html#locus_tag) on [BioSample](/biosample/index-e.html) submission.
- For feature annotation of prokaryotic genome, we recommend to use [DFAST (DDBJ Fast Annotation and Submission Tool)](https://dfast.ddbj.nig.ac.jp/)
- For [TSA](/ddbj/tsa-e.html) data, it is optional (basically unnecessary) to describe biological features except source and assembly_gap.
- In the case of [EST](/ddbj/est-e.html), you can not describe any biological features except source.

### 2. Make submission files  {#flow-2}

#### Submission files required for MSS  {#Submission_files_required_for_MSS}

Prepare following files required to submit your sequence data.

Sequence file  
: The text file that contains all nucleotide sequences in FASTA-like format.
: Details : [Submission file format：Sequence
file](/ddbj/file-format-e.html#sequence).

Annotation file  
: The tab delimited text file that contains your data other than
sequences, such as submitters, references and biological features.
: Details : [Submission file format：Annotation
file](/ddbj/file-format-e.html#annotation).

AGP file（in case of
: [CON](/ddbj/con-e.html) entries
The tab delimited text file of nine columns that contains your data
, such as the order and orientation of the piece entries to
construct CON entry.
If you can build a sequence from an AGP file, you do not need a
sequence file.
: Details : [Submission file format： AGP
file](/ddbj/file-format-e.html#agp).

<div class="attention" markdown="1">

When you like to submit [TSA](/ddbj/tsa-e.html), complete genome, draft
genome ([WGS](/ddbj/wgs-e.html) or [HTG](/ddbj/htg-e.html)), please
submit [BioProject](/bioproject/index-e.html) and
[BioSample](/biosample/index-e.html) at first. Then, describe accession
numbers of them in annotation file.

</div>

#### Check submission files  {#Check_submission_files}

Before submitting to DDBJ, the files should be checked with software
tools provided from DDBJ.

UME (Utilities for MSS file Error check)  
: You can verify the syntax, format and amino acid translation of [CDS
features](/ddbj/cds-e.html) of [Sequence
file](/ddbj/file-format-e.html#sequence) and [Annotation
file](/ddbj/file-format-e.html#annotation). UME includes both Parser and transChecker.
: OS : Windows, unix/macOS
: Details : [UME User's Manual](/ddbj/ume-e.html).

Parser  
: You can verify the syntax and format of [Sequence
file](/ddbj/file-format-e.html#sequence) and [Annotation
file](/ddbj/file-format-e.html#annotation).
: OS : Unix
: Details : [Parser User's Manual](/ddbj/parser-e.html).

transChecker  
: If your data include [CDS features](/ddbj/cds-e.html)
(protein-coding sequence), you can validate the amino acid
translation.
: OS : Unix
: Details : [transChecker User's Manual](/ddbj/transchecker-e.html)

<div class="attention" markdown="1">

Download => [Validation tools for MSS data files](/ddbj/mss-tool-e.html)

</div>

- Validation tools for data files do not have any function to make
  files for your submission. So, please make your submission files by
  using text editor, spreadsheet software, or some application in your
  PC, appropriately.
- Syntax errors due to using undefined characters, contamination of
  control codes, and so on would cause a major obstacle during
  processing submitted data, which may result in significant delay of
  issuing accession numbers.
- When you have to describe protein coding sequences for annotation of
  your sequence, the annotation file containing [CDS
  feature(s)](/ddbj/cds-e.html) as [Biological
  feature](/ddbj/file-format-e.html#biological_feature) should be
  checked with UME or transChecker tool before submitting to DDBJ.
- Before installing Validation tools for data files, see [End-user
  license agreement](/ddbj/mss-tool-e.html#license).

### 3. Review the submission files {#flow-3}

After validating the sequence and annotation files by using the check tools, send them to DDBJ. 

- Before preparing the entire sequence and annotation files, you can send a part of your data as a trial basis and then ask DDBJ whether the submission files are correctly created or not. (This step can be omitted).

DDBJ reviews submission files and then informs the submitter of some correction requests and/or inquiries. If there is no problem with the contents of the file, DDBJ will issue accession number(s) for your data and acknowledge the accession number(s) to the contact person by email.

#### File transfer  {#File_transfer}

Attach to e-mail  
File transfer by SCP  
: If the total size of files is more than 10 M bytes, we recommend you
to use file transfer by SCP using public/private key pair.
: Please visit [DDBJ Submission Portal
D-way](https://ddbj.nig.ac.jp/D-way/) to get D-way login account and
to upload files.  
For detail, see [Upload sequence
data](/dra/submission.html#upload-sequence-data%0A) or Tutorial
movies.
: **Tutorial movies**
: Generate key pair（[Windows](https://youtu.be/Aos7KR6XwUw) /
[macOS](https://youtu.be/jBfOqsJxDZU)）
: Upload data files（[Windows](https://youtu.be/gJqgCvUc0Y8) /
[macOS](https://youtu.be/aO2aVafS3ZE)）

### 4. Distribution  {#flow-4}

If you do not set any hold-date, your data will be released
immediately.  
When you set a [hold-date](/ddbj/submission.html#hold-date) for your
data, we will release your data according to [Principle of
"Hold-Until-Published" data release](/documents/data-release-policy-e.html).

The registered data will be published in a [flat file format](/ddbj/flat-file-e.html) defined by DDBJ. Please refer to the figure, [correspondence between annotation files and flat files](/ddbj/file-format-e.html#sample)


