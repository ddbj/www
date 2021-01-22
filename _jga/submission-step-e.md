---
layout: tabbed_indexed_content
service_name: Japanese Genotype-phenotype Archive
title: JGA submission steps

category: jga
current_tab: submission
tab_menu:
  - id: home
    title: Home
    url: /jga/index-e.html
  - id: browse researches at nbdc
    title: Browse researches at NBDC
    url: https://humandbs.biosciencedbc.jp/en/data-use/all-researches
    children:
      - title: DDBJ Search
        url: https://ddbj.nig.ac.jp/search
  - id: submission
    title: Submission
    url: /jga/submission-e.html
    children:
      - title: How to submit
        url: /jga/submission-step-e.html
      - title: How to access data
        url: /jga/download-e.html
      - title: Groups
        url: /jga/group-e.html
      - title: Example submission
        url: https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318
      - title: Updates in 2020
        url: /jga/update-202009-e.html
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/jga/xsd/
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html?keyword%5B%5D=jga?keyword%5B%5D=jga
lang: en
---

## Data submission application to NBDC {#ds-application}

[Submit a data submission application](https://humandbs.biosciencedbc.jp/data-submission) in [the NBDC application system](https://humandbs.ddbj.nig.ac.jp/nbdc/application)</a>. Create a data submitter group before application. After the application is apprived by NBDC, an upload directory will be created in the JGA server.

For application, a D-way account is required. Please obtain [a D-way account](https://ddbj.nig.ac.jp/D-way/) before application.

<p class="attention">After creating a D-way account, it takes about 10 minutes for the D-way account becomes active in the <a href="https://humandbs.ddbj.nig.ac.jp/nbdc/application/">NBDC application system</a>.</p>

This page describes how to submit data to JGA.

## Data submitter group {#data-submitter-group}

Create a data submitter group before application. In the example group "subgrp1", a researcher (account_b) who applies application and submits data is a group owner and a PI (account_c) is a member.

In the NBDC application system, an account who actually submits an application will automatically become an applicant. If there are submitters other than PI and applicant, include all submitters as members. Emails regarding the submission are sent to members.
      

{% include image.html url="books/DS-group-e.png" caption="Data submitter group" class="w400" %}


[Start the data submission application process](https://humandbs.biosciencedbc.jp/data-submission) and select the data submitter group.


{% include image.html url="books/DS-start-e.png" caption="Start data submission application process" class="w450" %}



{% include image.html url="books/DS-group-select-e.png" caption="Select the data submitter group" class="w450" %}


## Data submission application approval {#du-approval}

After the application is approved by NBDC, a JGA submission ID (for example, JSUB000353) is issued and a corresponding directory for data upload is created in the JGA server.


{% include image.html url="books/DS-approved-e.png" caption="Approval of data submission application" class="w450" %}



{% include image.html url="books/DS-JSUB-e.png" caption="Data submission application and JGA submission ID" class="w250" %}


A JGA submission directory is created in "/controlled-access/submission/jga/" of the JGA file server (jga-gw.ddbj.nig.ac.jp), upload metadata and data files to this directory by scp. In this example, the upload directory is "/controlled-access/submission/jga/JSUB000353/".

## Create metadata excel {#create-metadata-using-excel}

### Enter metadata in the excel {#enter-metadata-into-excel}

Download the excel for metadata description below and enter metadata in English. Regarding metadata, see [this page](/jga/submission.html).

[![JGA metadata excel](/assets/images/parts/download.png "JGA metadata excel"){:.w40}](/assets/files/submission/JGA_metadata.xlsx)

last updated: 2020-09-26


<div class="attention" markdown="1">
Data files to be uploaded to JGA should not have spaces in their filenames.
</div>


<div class="attention" markdown="1">
All datasets in a JGA submission are distributed at the same time. Do NOT include datasets to be distributed at different time in a submission.
</div>

### Example metadata {#example-submission}

[Example metadata](https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318)

### Upload excel {#upload-excel}


<div class="attention" markdown="1">
To upload files to the JGA server by scp, you need to [register a center name and a public key to your D-way account](/account-e.html#enable-dra-submission-in-account). Access to the JGA server is restricted by IP addresses. Inform your IP address of your connecting source to NBDC in application form.
</div>

In the JGA submission directory in "/controlled-access/submission/jga/" in JGA file server (jga-gw.ddbj.nig.ac.jp), upload the excel to this directory by scp specifying the port number 443 with P option. The scp uses public/private key authentication, specify [a private key registered to your D-way account](/account.html#generate-key-pair) for authentication.

Example
  - account ID: account_b
  - JGA Submission ID: JSUB000353

When specifying a private key for the account authentication with "i" option, specify target files after the "P" and "i" options.

```
$ scp -P443 -i private-key-for-auth JSUB000353_metadata.xlsx account_b@jga-gw.ddbj.nig.ac.jp:/controlled-access/submission/jga/JSUB000353
```
-P: specify the port number 443
-i: specify the private key for authentication


Login to the JGA file server by ssh.
```
$ ssh -p443 -i private-key-for-auth account_b@jga-gw.ddbj.nig.ac.jp
```
-p: specify the port number 443 (use lowercase "p" for ssh)
-i: specify the private key for authentication

## Data files uploading {#upload-data-files}

### Data file format {#data-file-format}

The JGA submission system discriminates archive and compression formats by the extension of the filenames.

  - The extensions, zip, tar, tar.gz, tgz, tar.bz2, tbz2, gz and bz2 are treated as archived and compressed in standard formats. Files whose extensions and formats are different will cause errors in the file processing.
  - Do NOT compress bam files.
  - Do NOT archive files compressed by gz and bzip. Instead, archive compressed files by tar.gz.

### File formats for submission {#file-formats-submission}

Submit individual-level next-generation sequencing data such as fastq and bam files to Data. And submit microarray data, variant analysis data and documents such as questionnaires to Analysis.        


<div class="attention" markdown="1">
For reproducibility, it is important to submit processed data from which conclusion of associated paper is derived. Please submit processed data files such as VCF to Analysis.
</div>

### Upload data files {#data-files-upload}

Upload data files to the upload directory by scp.

Example
  - Account ID: account_b
  - JGA Submission ID: JSUB000353

```
$ scp -P443 -i private-key-for-auth wgs1.fastq account_b@jga-gw.ddbj.nig.ac.jp:/controlled-access/submission/jga/JSUB000353
```
-P: specify the port number 443
-i: specify the private key for authentication

Upload all files with "fastq" in the extensions.
```
$ scp -P443 -i private-key-for-auth *.fastq account_b@jga-gw.ddbj.nig.ac.jp:/controlled-access/submission/jga/JSUB000353
```

## Submission of metadata and data files {#metadata-data-submission}

The JGA curator reviews your metadata and data files. After reviewing process, the curator creates XML files from the metadata excel and submit them.

After the metadata and data files pass the validation, accession numbers will be issued.
