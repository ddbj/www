---
layout: tabbed_indexed_content
title: Validator error message
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: home
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
  - title: Application form for MSS
    url: /ddbj/mss-form-e.html
---

## Validator error message

In this site, error messages outputted from checking tools for nucleotide sequence data submission are briefly explained.  
If you find any error message, please make some appropriate correction.  
If you have any problems and/or questions, please [contact us](/contact-ddbj-e.html) with error messages.

### Parser <a name="Parser"></a>

#### Format <a name="agpparser-1"></a>

{::nomarkdown}[Code Number]:[Level]:[Type]:[File]:[Region]:[Body Text]{:/}

<table>
  <tbody>
  <tr><th>Code Number</th><td colspan="2">Indicate the code number of the message</td></tr>
  <tr><th rowspan="6">Level</th><td colspan="2">Indicate the level of the message</td></tr>
  <tr><td>ER1</td><td>Type 1 error of the file format. Correction is required.</td></tr>
  <tr><td>ER2</td><td>Type 2 error of the file format. Correction is required.</td></tr>
  <tr><td>FAT</td><td>Fatal error, related to system environment.</td></tr>
  <tr><td>WAR</td><td>Warning for the file format. Correction is sometimes required.</td></tr>
  <tr><td>MES</td><td>Reference message for some other error(s).</td></tr>
  <tr><th rowspan="4">Type</th><td colspan="2">Indicate the category of the message</td></tr>
  <tr><td>STX</td><td>Syntax</td></tr>
  <tr><td>SYS</td><td>Related to the checking performance</td></tr>
  <tr><td>LOC</td><td>Compare between sequence and location</td></tr>
  <tr><th rowspan="4">File</th><td colspan="2">Indicate the file occurred the problem</td></tr>
  <tr><td>ANN</td><td>Annotation file</td></tr>
  <tr><td>SEQ</td><td>Sequence file</td></tr>
  <tr><td>AxS</td><td>Comparison between Annotation and Sequence files</td></tr>
  <tr><th>Region</th><td colspan="2">Indicate the region of the error as line number and/or entry name</td></tr>
  <tr><th>Body Text</th><td colspan="2">Detail descriptions of the message</td></tr>
  </tbody>
</table>

#### Error messeages <a name="parser-2"></a>

Terms and numbers closed with brackets ( **\[** and **\]** ) and started from **\#**, are substituted by each real value that is used in your submission.

Terms closed with brackets ( **\[** and **\]** ) and not started from \# are the reserved words for features or qualifiers.

[List of Parser error messeages](https://docs.google.com/spreadsheets/d/1djQ52hOYXFRQru3-CJZyvzANaZOZ_TuuQW8i0IKg5Ls/edit#gid=1311635655)

-----

<div id="Parser-rule">

</div>

-----

### TransChecker Error Messages <a name="transChecker"></a>

#### Format <a name="agpparser-1"></a>

{::nomarkdown}[Code Number]:[Level]: [Body Text]{:/}

<table>
  <tbody>
    <tr><th>Code Number</th><td colspan="2">Indicate the code number of the message</td></tr>
    <tr><th rowspan="4">Level</th><td colspan="2">Indicate the level of the message</td></tr>
    <tr><td>ER2</td><td>Type 2 error of the file format. Correction is required.</td></tr>
    <tr><td>FAT</td><td>Fatal error, related to system environment.</td></tr>
    <tr><td>WAR</td><td>Warning for the file format. Correction is sometimes required.</td></tr>
    <tr><th>Body Text</th><td colspan="2">Detail descriptions of the message</td></tr>
  </tbody>
</table>

**ex)**

```
>entry1.1 <1..>366
TC0020:WAR: [codon_start] qualifier should be selected. The value is automatically set 1. 
TC0020:WAR: [transl_table] qualifier should be selected. The value is automatically set 1. 
//
>entry2.3 4315..4997
TC0017:ER2: First codon [cct] is not a start codon.
TC0018:ER2: Final codon [cat] is not a stop codon.
TC0019:ER2: Stop codon is found in mid of CDS location.
//
```

#### Error message <a name="agpparser-2"></a>

Terms and numbers closed with brackets ( **\[** and **\]** ) and started from **\#**, are substituted by each real value that is used in your submission.

Terms closed with brackets ( \[ and \] ) and not started from \# are the reserved words for features or qualifiers.

[List of trans Checker error message](https://docs.google.com/spreadsheets/d/1djQ52hOYXFRQru3-CJZyvzANaZOZ_TuuQW8i0IKg5Ls/edit#gid=215659657)

-----

<div id="transChecker-rule">

</div>

-----

### AGP Parser Error Messages <a name="AGP Parser"></a>

#### Format <a name="agpparser-1"></a>

{::nomarkdown}[Code Number]:[Level]:[Region]:[Body Text] or [Code Number]:[Level]:[Body Text]{:/}

<table>
  <tbody>
    <tr><th>Code Number</th><td colspan="2">Indicate the code number of the message</td></tr>
    <tr><th rowspan="5">Level</th><td colspan="2">Indicate the level of the message</td></tr>
    <tr><td>FAT</td><td>Fatal error, related to system environment.</td></tr>
    <tr><td>ER1</td><td>Type 1 error of the file format. Correction is required.</td></tr>
    <tr><td>ER2</td><td>Type 2 error of the file format. Correction is required.</td></tr>
    <tr><td>WAR</td><td>Warning for the file format. Correction is sometimes required.</td></tr>
    <tr><th>Region</th><td colspan="2">Indicate the region of the error as line number or object name</td></tr>
    <tr><th>Body text</th><td colspan="2">Detail descriptions of the message</td></tr>
  </tbody>
</table>

#### Error message <a name="agpparser-2"></a>

Terms and numbers closed with brackets ( **\[** and **\]** ) and started from **\#**, are substituted by each real value that is used in your submission.

You can search explanations for AGPParser error messages by selecting error code from followings;

[List of AGP Parser error message](https://docs.google.com/spreadsheets/d/1djQ52hOYXFRQru3-CJZyvzANaZOZ_TuuQW8i0IKg5Ls/edit#gid=2134091722)

-----

<div id="AgpParser-rule">

</div>

-----