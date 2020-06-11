---
layout: indexed_content
title: MSS - Mass Submission System
category: services
---

<div id="page" class="top">

<div id="header" class="clearfix">

<div id="header-top">

[![](/images/parts/ddbj-logo-white.svg)](/index-e.html "DNA Data Bank of Japan")

<div id="header-top-left">

<span class="resources-btn">Services**</span>

</div>

<div id="header-top-right">

  - [Login & Submit](https://ddbj.nig.ac.jp/D-way)
  - [Policies and Disclaimers](/policies-e.html)
  - [Contact](/contact-e.html)
  - [Japanese](/ddbj/mss.html)

</div>

</div>

<div class="resources-contents">

<div class="boxContainer">






</div>

</div>

<div id="header-middle" class="clearfix">

<div class="page-title">

[DDBJ Annotated/Assembled Sequences](/ddbj/index-e.html)

</div>

<div class="search-box">

<div id="search-box-flex">

<div class="search-options-wrapper">

BI-DDBJ Web Sites Annotated/Assembled Sequences Sequence Read Archive

</div>

</div>

</div>

</div>

<div id="header-bottom">

  - [Home](/ddbj/index-e.html)
  - [Submission![](/images/parts/arrow_down.svg)](/ddbj/submission-e.html)
      - [Before Submission](submission-e.html)
      - [Web submission](websub-e.html)
      - [Mass submission](mss-e.html)
      - [Data Update](updt-e.html)
  - [Search![](/images/parts/arrow_down.svg)](http://ddbj.nig.ac.jp/arsa/?lang=en)
      - [getentry](http://getentry.ddbj.nig.ac.jp/top-e.html)
      - [ARSA](http://ddbj.nig.ac.jp/arsa/?lang=en)
  - [Flat File![](/images/parts/arrow_down.svg)](/ddbj/flat-file-e.html)
      - [Feature key](/ddbj/features-e.html)
      - [Qualifier key](/ddbj/qualifiers-e.html)
      - [Organism qualifier](/ddbj/organism-e.html)
      - [Description of Location](/ddbj/location-e.html)
      - [Protein Coding Sequence](/ddbj/cds-e.html)
      - [The Genetic Codes](/ddbj/geneticcode-e.html)
      - [Codes Used in Sequence Description](/ddbj/code-e.html)
      - [Example of Submission](/ddbj/example-e.html)
  - [Data
    Categories![](/images/parts/arrow_down.svg)](/ddbj/data-categories-e.html)
      - [Data Submission from Genome Project](/ddbj/genome-e.html)
      - [WGS](/ddbj/wgs-e.html)
      - [CON](/ddbj/con-e.html)
      - [GSS](/ddbj/gss-e.html)
      - [HTG](/ddbj/htg-e.html)
      - [Submission of environmental
        sequences](/ddbj/environmental-e.html)
      - [ENV](/ddbj/env-e.html)
      - [TLS](/ddbj/tls-e.html)
      - [Data Submission from Transcriptome
        Project](/ddbj/transcriptome-e.html)
      - [TSA](/ddbj/tsa-e.html)
      - [EST](/ddbj/est-e.html)
      - [HTC](/ddbj/htc-e.html)
      - [Third Party Data (TPA)](/ddbj/tpa-e.html)
  - [FAQ](/ddbj/faq-e.html)
  - [Other![](/images/parts/arrow_down.svg)](/)
      - [Patent](/ddbj/pat-data-e.html)
      - [MGA](/ddbj/mga-e.html)

</div>

</div>

<div id="main" class="clearfix">

<div id="breadcrumb" class="clearfix">

  - [HOME](/ddbj/index-e.html "DDBJ Annotated/Assembled Sequences top page")
  - \>
  - MSS - Mass Submission System

</div>

<div id="primary">

<div id="page_main">

<div id="book">

# MSS - Mass Submission System

<div class="section book">

# MSS - Mass Submission System

Submission of research data from human subjects

For all data from human subjects researches submitted to DDBJ, it is
submitter's responsibility to ensure that the dignity and the right of
participant (human subject) is protected in accordance with all
applicable laws, regulations and policies of submitter's institute.  
In principle, make sure to remove any direct personal identifiers of
human subjects from your submissions.  
Before submission, read "[Submission of research data from human
subjects](/policies-e.html#human)".

<div class="section chapter">

## What is MSS?

<div class="attention no_color">

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
Submission System (NSSS)](/ddbj/websub-e.html) .

If you are to submit reads from sequencers, please refer [DRA; DDBJ
Sequence Read Archive](/dra/index-e.html).  
Please confirm [Categories for Sequence Data](/data-categories-e.html).

</div>

<div class="section chapter">

## The Flow of MSS

<div>

![](/images/ddbj/MSS-flow-en.png "The Flow of MSS")

</div>

<div class="section section">

### 1\. Application

Please apply for your submission from [MSS application
form](/ddbj/mass-form-e.html).

After confirmation, we will introduce submission procedures in detail.

</div>

<div class="section section">

### 2\. Make submission files

#### Submission files required for MSS

Prepare following files required to submit your sequence data.

  - Sequence file  
    The text file that contains all nucleotide sequences in FASTA-like
    format.
    Details : [Submission file format：Sequence
    file](/ddbj/file-format-e.html#sequence).
  - Annotation file  
    The tab delimited text file that contains your data other than
    sequences, such as submitters, references and biological features.
    Details : [Submission file format：Annotation
    file](/ddbj/file-format-e.html#annotation).
  - AGP file <span class="font-normal">（in case of
    [CON](/ddbj/con-e.html) entries）</span>  
    The tab delimited text file of nine columns that contains your data
    , such as the order and orientation of the piece entries to
    construct CON entry.
    If you can build a sequence from an AGP file, you do not need a
    sequence file.
    Details : [Submission file format： AGP
    file](/ddbj/file-format-e.html#agp).

<div class="attention no_top">

When you like to submit [TSA](/ddbj/tsa-e.html), complete genome, draft
genome ([WGS](/ddbj/wgs-e.html) or [HTG](/ddbj/htg-e.html)), please
submit [BioProject](/bioproject/index-e.html) and
[BioSample](/biosample/index-e.html) at first. Then, describe accession
numbers of them in annotation file.

</div>

#### Check submission files

Before submitting to DDBJ, the files should be checked with software
tools provided from DDBJ.

  - UME (Utilities for MSS file Error check)  
    You can verify the syntax, format and amino acid translation of [CDS
    features](/ddbj/cds-e.html) of [Sequence
    file](/ddbj/file-format-e.html#sequence) and [Annotation
    file](/ddbj/file-format-e.html#annotation). UME includes both Parser
    and transChecker.
    OS : Windows, unix/macOS
    Details : [UME User's Manual](/ddbj/ume-e.html).
  - Parser  
    You can verify the syntax and format of [Sequence
    file](/ddbj/file-format-e.html#sequence) and [Annotation
    file](/ddbj/file-format-e.html#annotation).
    OS : Unix
    Details : [Parser User's Manual](/ddbj/parser-e.html).
  - transChecker  
    If your data include [CDS features](/ddbj/cds-e.html)
    (protein-coding sequence), you can validate the amino acid
    translation.
    OS : Unix
    Details : [transChecker User's Manual](/ddbj/transchecker-e.html)

<div class="attention no_top">

Download =\> [Validation tools for MSS data
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

</div>

<div class="section section">

### 3\. Test submission

In the test submission, you can confirm contents and format of your data
before making all of your data to submit to DDBJ.  
Please send a part of your submission files (several entries/features)
as the sample data. We will confirm contents and format of your data for
test submission and contact you.  
Before sending, please validate your files by software tools and fix
errors.

If you are familiar to make data files required by MSS, you can omit the
test submission.

</div>

<div class="section section">

### 4\. Submission

According to the suggestions in test submission, please make and send
sequence and annotation files for all data.  
Before sending, please validate your files by software tools and fix
errors.  
The test data will be validated in accordance with a international rule
agreed with DDBJ / EMBL-Bank / GenBank and DDBJ rule.We ask you to
revise the files, if necessary.  
If there is no problem, we will assign and acknowledge accession numbers
for your data to the e-mail address of contact person.

#### File transfer

  - Attach to e-mail  
    File transfer by SCP  
    If the total size of files is more than 10 M bytes, we recommend you
    to use file transfer by SCP using public/private key pair.
    Please visit [DDBJ Submission Portal
    D-way](https://ddbj.nig.ac.jp/D-way/) to get D-way login account and
    to upload files.  
    For detail, see [Upload sequence
    data](/dra/submission-e.html#upload-sequence-data%0A) or Tutorial
    movies.
    <span class="font-bold">Tutorial movies</span>
    Generate key pair（[Windows](https://youtu.be/Aos7KR6XwUw) /
    [macOS](https://youtu.be/jBfOqsJxDZU)）
    Upload data files（[Windows](https://youtu.be/gJqgCvUc0Y8) /
    [macOS](https://youtu.be/aO2aVafS3ZE)）

</div>

<div class="section section">

### 5\. Data release

If you do not set any hold-date, your data will be released
immediately.  
When you set a [hold-date](/ddbj/submission-e.html#hold-date) for your
data, we will release your data according to [Principle of
"Hold-Until-Published" data release](/data-release-policy-e.html).

Based on your sequence and annotation files, your data will be processed
and publicized into the DDBJ format, so called "[flat
file](/ddbj/flat-file-e.html)".  
See also [relationships between annotation file and DDBJ flat
file](/ddbj/file-format-e.html#sample).

</div>

</div>

</div>

</div>

</div>

</div>

<div id="side_navigation">

<div class="side_nav_menu handbook_contents handbook mss">

<div id="in_this_page">

## In this page

</div>

</div>

<div class="side_nav_menu handbook_related">

<div id="related_pages">

## Related pages

  - [Submission File Format](/ddbj/file-format-e.html)
  - [Validation tools for MSS data files](/ddbj/mss-tool-e.html)
  - [UME User’s manual](/ddbj/ume-e.html)
  - [Parser User’s Manual](/ddbj/parser-e.html)
  - [transChecker User’s Manual](/ddbj/transchecker-e.html)
  - [Validator error message](/ddbj/validator-e.html)
  - [Application form for MSS](/ddbj/mass-form-e.html)

</div>

</div>

</div>

</div>

</div>
