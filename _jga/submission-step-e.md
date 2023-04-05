---
layout: tabbed_indexed_content
service_name: Japanese Genotype-phenotype Archive
title: JGA submission steps
category: jga
current_tab: submission
lang: en
---

## From NBDC data submission application to JGA data upload {#ds}

Apply a data submission application in the [NBDC application system](https://humandbs.ddbj.nig.ac.jp/nbdc/application/) after login with your D-way account.   
A data submitter group is necessary for the application.  
After your application is approved, access to the JGA server with your D-way account and upload data by [sftp](#sftp) or [WinSCP](#winscp).

* [D-way account and a public key for data transfer](#account-key)
* [Data submission application approval](#approval)
* [Create metadata excel](#create-metadata-using-excel)
* [Data upload](#upload-data-files)
	* [sftp](#sftp)
	* [WinSCP](#winscp)

## D-way account and a public key for data transfer {#account-key}

A D-way account is necessary for data submission application and JGA data upload. If you do not have an acccount, [create a D-way account](https://ddbj.nig.ac.jp/D-way/) before application.   

<div class="attention" markdown="1">
After creating a D-way account, it takes about 10 minutes for the D-way account becomes active in the [NBDC application system](https://humandbs.ddbj.nig.ac.jp/nbdc/application/).
</div>

Generate a public and private key pair for data transfer and [register the public key to your D-way account](/account-e.html#enable-dra-submission-in-account) for data upload.    

## Data submitter group {#data-submitter-group}

Create a data submitter group before application. In the example group "subgrp1", a researcher (account_b) who applies application and submits data is a group owner and a PI (account_c) is a member.

In the NBDC application system, an account who actually submits an application will automatically become an applicant. If there are submitters other than PI and applicant, include all submitters as members. Emails regarding the submission are sent to members.     

{% include image.html url="books/DS-group-e.png" caption="Data submitter group" class="w400" %}

Start the data submission application process and select the data submitter group.

{% include image.html url="books/DS-start-e.png" caption="Start data submission application process" class="w450" %}

{% include image.html url="books/DS-group-select-e.png" caption="Select the data submitter group" class="w450" %}

Also see the [NBDC data submission page](https://humandbs.biosciencedbc.jp/en/data-submission).

## Data submission application approval {#du-approval}

Generate a public and private key pair for data transfer and [register the public key to your D-way account](/account-e.html#enable-dra-submission-in-account) for data upload to the JGA server (jga-gw.ddbj.nig.ac.jp).   
After the application is approved by NBDC, a JGA submission ID (for example, JSUB000353) is issued and a corresponding directory for data upload is created in the JGA server.

{% include image.html url="books/DS-approved-e.png" caption="Approval of data submission application" class="w450" %}

{% include image.html url="books/DS-JSUB-e.png" caption="Data submission application and JGA submission ID" class="w250" %}

A JGA submission directory is created in "/controlled-access/submission/jga/" of the JGA file server (jga-gw.ddbj.nig.ac.jp), upload metadata and data files to this directory by [sftp](#sftp) or [WinSCP](#winscp). In this example, the upload directory is "/controlled-access/submission/jga/JSUB000353/".

## Create metadata excel {#create-metadata-using-excel}

### Enter metadata in the excel {#enter-metadata-into-excel}

Download the excel for metadata description below and enter metadata in English. Regarding metadata, see [this page](/jga/submission.html).

[![JGA metadata excel](/assets/images/parts/download.png "JGA metadata excel"){:.w40}](https://github.com/ddbj/submission-excel2xml/raw/master/JGA_metadata.xlsx)

last updated: 2022-04-27  

<div class="attention" markdown="1">
Data files to be uploaded to JGA should not have spaces in their filenames.
</div>

<div class="attention" markdown="1">
All datasets in a JGA submission are distributed at the same time. Do NOT include datasets to be distributed at different time in a submission.
</div>

### Example metadata {#example-submission}

[Example metadata](https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318)

### Upload excel by sftp {#sftp}

In the JGA submission directory in "/controlled-access/submission/jga/" in JGA file server (jga-gw.ddbj.nig.ac.jp), upload the excel to this directory by sftp specifying the port number 443 with P option. The sftp uses public/private key authentication, specify the private key paired with [the public key registered to your D-way account](/account-e.html#generate-key-pair) for data transfer.

```
# Account ID: account_b
# JGA Submission ID： JSUB000353
# Private key for data transfer: ~/.ssh/id_rsa

$ sftp -i ~/.ssh/id_rsa -P 443 account_b@jga-gw.ddbj.nig.ac.jp
$ cd controlled-access/submission/jga/JSUB000353
$ put JSUB000353_metadata.xlsx 
```

## Data upload {#upload-data-files}

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

### Upload data files by sftp {#data-files-sftp-upload}

Upload data files to the upload directory by sftp.

```
# Account ID: account_b
# JGA Submission ID： JSUB000353
# Private key for data transfer: ~/.ssh/id_rsa

$ sftp -i ~/.ssh/id_rsa -P 443 account_b@jga-gw.ddbj.nig.ac.jp
$ cd controlled-access/submission/jga/JSUB000353
$ put wgs1.fastq
```

Upload all files with "fastq" in the extensions.
```
$ mput *.fastq
```

### Upload files by WinSCP {#winscp}

Download [WinSCP (https://winscp.net/eng/download.php)](https://winscp.net/eng/download.php) and install it to Windows PC.

Configure as follows.

- File protocol: SFTP
- Host name: jga-gw.ddbj.nig.ac.jp
- Port number: 443
- User name: D-way account ID
- Password: leave empty

{% include image.html url="books/jga-winscp1-e.jpg" caption="WinSCP session" class="w400" %}

{% include image.html url="books/jga-winscp2-e.jpg" caption="Specify the private key for data transfer" class="w400" %}
    
When first time access, an waring message will be shown and select "Yes" (it will not be shown in next time). Enter a passphrase if necessary.  

{% include image.html url="books/jga-winscp3-e.jpg" caption="WinSCP data file transfer" class="w400" %}
    
After login, drag and drop local data files in the left window to the JGA server in the right window.

## Submission of metadata and data files {#metadata-data-submission}

The JGA curator reviews your metadata and data files. After reviewing process, the curator creates XML files from the metadata excel and submit them.

After the metadata and data files pass the validation, accession numbers will be issued.
