---
layout: indexed_content
title: Validation tools for MSS data files
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

## System requirements <a name="system"></a>

### Hardware <a name="system-1"></a>

  - About 20 MB of hard disk space to install.
  - At least 512 MB of RAM. More RAM, 1 GB or over, is recommended.

### Software <a name="system-2"></a>

  - Each tool requires [Java Development Kit 8 (JDK8)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed properly on a PC that it runs.
  - DDBJ recommends either of following operating systems, because DDBJ has tested the program only on these environments.  
    Windows: Windows 10  
    unix/macOS: Ubuntu 16.04 LTS, macOS High Sierra

<span class="red">\*</span>UME (Utilities for MSS file Error check) includes software developed by [the Apache Software Foundation](//www.apache.org/).

## Download <a name="download"></a>

Download either of following UME archive packages that suits for your system environment.  
Please refer each manuals for how to install and use.

<table>
    <caption></caption> 
    <thead>
      <tr>
        <th>Name</th>
        <th colspan="2">Link</th>
        <th>OS</th>
        <th>Updated Date</th>
        <th>Manual</th>
        <th>Comments</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>UME_win_V1.51.zip</td>
        <td><a href="ftp://ftp.ddbj.nig.ac.jp/ddbj-cib/MSS/UME_win_V1.51.zip">FTP</a></td>
        <td rowspan="4"><a href="https://drive.google.com/drive/u/1/folders/1SlveeY38FdHOrcmgjcVgzrL8RvXlx96g">HTTPS</a></td>  
        <td>Windows</td>
        <td rowspan="2">2020/11/25</td>
        <td rowspan="2"><a href="/ddbj/ume.html">User's manual</a></td>
        <td rowspan="2">UME contains Parser and transChecker.</td>
      </tr>
      <tr>
        <td>UME_unix_V1.51.zip</td>
        <td><a href="ftp://ftp.ddbj.nig.ac.jp/ddbj-cib/MSS/UME_unix_V1.51.zip">FTP</a></td>
        <td>Unix/macOS</td>
      </tr>
      <tr>
        <td>Parser_V6.65.tar.gz</td>
        <td><a href="ftp://ftp.ddbj.nig.ac.jp/ddbj-cib/MSS/Parser_V6.65.tar.gz">FTP</a></td>
        <td>Unix/macOS</td>
        <td>2020/11/25</td>
        <td><a href="/ddbj/parser.html">User's manual</a></td>
        <td></td>
      </tr>
      <tr>
        <td>transChecker_V2.22.tar.gz</td>
        <td><a href="ftp://ftp.ddbj.nig.ac.jp/ddbj-cib/MSS/transChecker_V2.22.tar.gz">FTP</a></td>
        <td>Unix/macOS</td>
        <td>2020/09/02</td>
        <td><a href="/ddbj/transchecker.html">User's manual</a></td>
        <td></td>
      </tr>
    </tbody>
</table>

## End-User License Agreement <a name="license"></a>

**Please read the following agreement carefully before you use the software for Mass Submission System.**

NOTICE TO USERS:  
Carefully read the following agreement. Use of the tools for Mass Submission System provided by DDBJ with this agreement (hereinafter collectively called "the Software") constitutes your acceptance of these terms. If you do not agree to the terms of this agreement, do not install and/or use the Software. User's use of the Software is conditioned upon compliance by user with the terms of this agreement.

1.  All copyright related to the Software except the following third-party software (included in only "UME") must belong to the DDBJ:  
    a) Axis 1.1  
    b) Xerces 1.4.4  
    The Software includes the source code thereof and documentation thereto.
2.  In the event you provide to any third party all or any portion of the Software, prior written consent of DDBJ is required.
3.  You agree that you will not attempt to reverse compile, modify, translate, or disassemble the Software in whole or in part.
4.  Except as required by law, DDBJ will not be liable to you for any damages arising out of the use or inability to use of the Software.
5.  Requirements specified in this agreement are subject to change without notice.
