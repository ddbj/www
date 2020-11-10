---
layout: indexed_content
title: MSS - Mass Submission System
category: ddbj
lang: en
related_pages:
  - title: Submission File Format
    url: /ddbj/file-format-e.html)
  - title: Validation tools for MSS data files
    url: /ddbj/mss-tool-e.html)
  - title: UME User’s manual
    url: /ddbj/ume-e.html)
  - title: Parser User’s Manual
    url: /ddbj/parser-e.html)
  - title: transChecker User’s Manual
    url: /ddbj/transchecker-e.html)
  - title: Validator error message
    url: /ddbj/validator-e.html)
  - title: Application form for MSS
    url: /ddbj/mss-form-e.html)
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

## What is MSS? <a name="outline"></a>

{::options parse_block_html="true" /}
<div class="attention">

Mass Submission System (MSS) is the service to accept relatively large
scale nucleotide sequence data (not reads) through sending text files.  
We at DDBJ recommend using MSS when:

  - the submission is not applicable for Nucleotide Sequence Submission
    System (NSSS)  
    → [EST](/ddbj/est-e.html), STS, [TSA](/ddbj/tsa-e.html),
    [HTC](/ddbj/htc-e.html), [GSS](/ddbj/gss-e.html),
    [HTG](/sub/htg-e.html), [WGS](/ddbj/wgs-e.html),
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

## The Flow of MSS <a name="flow"></a>

![]({{ site.baseurl }}/assets/images/ddbj/MSS-flow-en.png "The Flow of MSS")

### 1. Application <a name="flow-1"></a>

Please apply for your submission from [MSS application　form](/ddbj/mss-form-e.html).

After confirmation, we will introduce submission procedures in detail.

### 2. Make submission files <a name="flow-2"></a>

#### Submission files required for MSS <a name="Submission_files_required_for_MSS"></a>

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

{::options parse_block_html="true" /}
<div class="attention red">

When you like to submit [TSA](/ddbj/tsa-e.html), complete genome, draft
genome ([WGS](/ddbj/wgs-e.html) or [HTG](/ddbj/htg-e.html)), please
submit [BioProject](/bioproject/index-e.html) and
[BioSample](/biosample/index-e.html) at first. Then, describe accession
numbers of them in annotation file.

</div>

#### Check submission files <a name="Check_submission_files"></a>

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

{::options parse_block_html="true" /}
<div class="attention red">

Download => [Validation tools for MSS data
files](/ddbj/mss-tool-e.html)

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

### 3. Test submission <a name="flow-3"></a>

In the test submission, you can confirm contents and format of your data
before making all of your data to submit to DDBJ.  
Please send a part of your submission files (several entries/features)
as the sample data. We will confirm contents and format of your data for
test submission and contact you.  
Before sending, please validate your files by software tools and fix
errors.

If you are familiar to make data files required by MSS, you can omit the
test submission.

### 4. Submission <a name="flow-4"></a>

According to the suggestions in test submission, please make and send
sequence and annotation files for all data.  
Before sending, please validate your files by software tools and fix
errors.  
The test data will be validated in accordance with a international rule
agreed with DDBJ / EMBL-Bank / GenBank and DDBJ rule.We ask you to
revise the files, if necessary.  
If there is no problem, we will assign and acknowledge accession numbers
for your data to the e-mail address of contact person.

#### File transfer <a name="File_transfer"></a>

Attach to e-mail  
File transfer by SCP  
: If the total size of files is more than 10 M bytes, we recommend you
to use file transfer by SCP using public/private key pair.
: Please visit [DDBJ Submission Portal
D-way](https://ddbj.nig.ac.jp/D-way/) to get D-way login account and
to upload files.  
For detail, see [Upload sequence
data](/dra/services/index.html#upload-sequence-data%0A) or Tutorial
movies.
: **Tutorial movies**
: Generate key pair（[Windows](https://youtu.be/Aos7KR6XwUw) /
[macOS](https://youtu.be/jBfOqsJxDZU)）
: Upload data files（[Windows](https://youtu.be/gJqgCvUc0Y8) /
[macOS](https://youtu.be/aO2aVafS3ZE)）

### 5. Data release <a name="flow-5"></a>

If you do not set any hold-date, your data will be released
immediately.  
When you set a [hold-date](/ddbj/services/index.html#hold-date) for your
data, we will release your data according to [Principle of
"Hold-Until-Published" data release](/documents/data-release-policy-e.html).

Based on your sequence and annotation files, your data will be processed
and publicized into the DDBJ format, so called "[flat
file](/ddbj/flat-file-e.html)".  
See also [relationships between annotation file and DDBJ flat
file](/ddbj/file-format-e.html#sample).
