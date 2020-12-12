---
layout: tabbed_indexed_content
service_name: Japanese Genotype-phenotype Archive
title: Download steps
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

## Data use application to NBDC<a name="du-application"></a>

You may search JGA data at [the list of researches at the NBDC Human Database](https://humandbs.biosciencedbc.jp/en/data-use/all-researches). [DDBJ Search](https://ddbj.nig.ac.jp/search) is also available, however, regular indexing of new data will be implemented in November 2020. Until this implementation, new JGA data are not indexed.
Take notes of JGA Dataset accession number(s) you want to use. For example, JGAD000001 (or JGAD00000000001 in the previous accession number format)

[Apply the data use application](https://humandbs.biosciencedbc.jp/en/data-use) in the [NBDC Application system](https://humandbs.ddbj.nig.ac.jp/nbdc/application).
In the application, create a data user group, specify requesting Study (for example, JGAS999992) and Dataset (for example, JGAD999993) accessions and register a public key for the dataset encryption. 
After the application is approved by NBDC, datasets will be accessible in the JGA server.

To apply the application, a D-way account is required. If you do not have an account, please [create your D-way account](https://ddbj.nig.ac.jp/D-way/) and [register a public key for authentication](/account-e.html#generate-key-pair).


{::options parse_block_html="true" /}
<div class="attention">
It takes about 10 minutes for the created D-way account becoming active in the NBDC application system.
</div>

The JGA datasets download and access steps are described below.

## Data user group<a name="data-user-group"></a>

Before starting the application, create a data user group. In the following example group (usergrp1), an owner is researcher (account_b) who apply the application and download the data, and a member is PI (account_c).

{::nomarkdown}
{% include image.html url="books/DS-group-e.png" caption="Data user group" class="w450" %}
{:/}

[Start the application](https://humandbs.biosciencedbc.jp/en/data-use) and select the group.

{::nomarkdown}
{% include image.html url="books/DU-start-e.png" caption="Start data use application" class="w450" %}
{:/}

{::nomarkdown}
{% include image.html url="books/DU-group-e.png" caption="Select the data user group" class="w450" %}
{:/}

## Public key for dataset encryption<a name="public-key-for-dataset-encryption"></a>

For security, the JGA datasets are encrypted by the public key for dataset encryption registered by the applicant in the data use application. The applicant needs to first decrypt the datasets downloaded by scp by using the private key.

{::options parse_block_html="true" /}
<div class="attention">
The public key for dataset encryption is different from the [public/private key pair for the D-way account authentication](/account.html#enable-dra-submission-in-account).
</div>

### Generate a public and private key pair for dataset encryption<a name="generate-key-pair"></a>

Generate a public/private key pair for encrypting datasets in each data use application. Please see ["Generate public and private key pair"](/account-e.html#generate-key-pair) for details.
Register the public key for dataset encryption in the data use application system.

### Registration of the public key for dataset encryption<a name="key-registration"></a>

Register the public key for dataset encryption in the NBDC data use application.

{::nomarkdown}
{% include image.html url="books/public-key-for-dataset-encryption-e.png" caption="egistration of the public key for dataset encryption" class="w400" %}
{:/}

## Data use application approval and download<a name="data-use-approval-download"></a>

### Data use application approval<a name="data-use-approval"></a>

After the application is approved by NBDC, metadata, encrypted data files and decryption tools is created in the download directory in the JGA server.

{::nomarkdown}
{% include image.html url="books/data-use-approved-e.png" caption="Data use application approval" class="w400" %}
{:/}

### Download<a name="download"></a>

{::options parse_block_html="true" /}
<div class="attention">
To download files from the JGA server by scp, you need to [register a center name and a public key to your D-way account](/account-e.html#enable-dra-submission-in-account). Access to the JGA server is restricted by IP addresses. Inform your IP address of your connecting source to NBDC in application form.
</div>

In the "/controlled-access/download/jga/" directory in the JGA file server (jga-gw.ddbj.nig.ac.jp), the DU number directory is created. Download the directory by scp. Because the scp requires public/private key authentication, specify the [private key registered to your D-way account](/account-e.html#generate-key-pair) for authentication (this is different from the private key for dataset decryption).

Example
  - D-way account: account_b
  - Data use application number： J-DU999991

```
$ scp -P443 -i private-key-for-auth -r account_b@jga-gw.ddbj.nig.ac.jp:/controlled-access/download/jga/J-DU999991 .
```
-P: specify the port number 443
-i: specify the private key paired with the public key registered to the D-way account for authentication

Login to the JGA file server by ssh.
```
$ ssh -p443 -i private-key-for-auth account_b@jga-gw.ddbj.nig.ac.jp
```
-P: specify the port number 443
-i: specify the private key paired with the public key registered to the D-way account for authentication

In the DU directory, there are Study directory and tools directory which contains the decryption tools. 
The Dataset directory under the Study directory contains metadata in tab-delimited text (tsv) and XML formats, and the Data and Analysis directories contain encrypted data files.

The data access is explained with the following example numbers.

  - JGA Study: JGAS999992
  - JGA Dataset: JGAD999993
  - JGA Data: JGAR999999994-JGAR999999995
  - Encrypted data files of Data: case1.fastq.gz.encrypt (JGAR999999994), case2.fastq.gz.encrypt (JGAR999999995)
  - JGA Analysis: JGAZ999999996-JGAZ999999997
  - Encrypted data files of Analysis： case1.vcf.gz.encrypt (JGAZ999999996), case2.vcf.gz.encrypt (JGAZ999999997)

```
$ ls J-DU999991/
JGAS999992 　　
tools　
$ ls J-DU999991/tools
J-DU999991.tool.zip
$ ls J-DU999991/JGAS999992/JGAD999993
metadata
JGAR999999994
JGAR999999995
JGAZ999999996
JGAZ999999997
$ ls J-DU999991/JGAS999992/JGAD999993/**
J-DU999991/JGAS999992/JGAD999993/metadata:
JGAD999993.study.xml
JGAD999993.sample.xml
JGAD999993.experiment.xml
JGAD999993.data.xml
JGAD999993.analysis.xml
JGAD999993.dataset.xml
JGAD999993.policy.xml
JGAD999993.dac.xml
JGAD999993.filelist.txt
JGAD999993.sample.txt
JGAD999993.analysis.SEQUENCE_VARIATION.txt
JGAD999993.study_sample_experiment_data.mapping.txt
JGAD999993.study_analysis_sample.mapping.txt
JGAD999993.analysis_sample.mapping.txt
JGAD999993.dataset_policy_data_analysis.mapping.txt

J-DU999991/JGAS999992/JGAD999993/JGAR999999994:
case1.fastq.gz.encrypt

J-DU999991/JGAS999992/JGAD999993/JGAR999999995:
case2.fastq.gz.encrypt

J-DU999991/JGAS999992/JGAD999993/JGAZ999999996:
case1.vcf.gz.encrypt

J-DU999991/JGAS999992/JGAD999993/JGAZ999999997:
case2.vcf.gz.encrypt
```

## Decrypt data files<a name="decrypt"></a>

Decrypt downloaded encrypted data files by using the decryption tools.

<div class="attention">
Use the decryption tools in Linux. Windows is not supported.
</div>

Move to the J-DU999991 directory and unzip the "J-DU999991.tool.zip" in the tools directory.

```
$ cd J-DU999991
$ unzip tools/J-DU999991.tool.zip
```

The scripts for decryption and encrypted common keys are extracted. 
"J-DU999991.decrypt.sh" decrypt all files in the DU directory is extracted under the J-DU999991 directory and "case1.fastq.gz.decrypt.sh" decrypt individual data file is extracted in the Data/Analysis directories which contain encrypted data files.

```
$ ls 
J-DU999991.decrypt.sh
JGAS999992 　　
tools　　　　　　
$ ls JGAS999992/JGAD999993/JGAR999999994/
case1.fastq.gz.decrypt.sh
case1.fastq.gz.encrypt
case1.fastq.gz.encrypt.dat
$ ls JGAS999992/JGAD999993/JGAZ999999996/
case1.vcf.gz.decrypt.sh
case1.vcf.gz.encrypt
case1.vcf.gz.encrypt.dat
```

  - .decrypt.sh: scripts for decryption
  - .dat: encrypted common keys

Add execute permission to all decryption scripts.

```
$ chmod 754 J-DU999991.decrypt.sh 
$ chmod 754 JGAS999992/JGAD999993/JGAR999999994/case1.fastq.gz.decrypt.sh
$ chmod 754 JGAS999992/JGAD999993/JGAR999999995/case2.fastq.gz.decrypt.sh
$ chmod 754 JGAS999992/JGAD999993/JGAZ999999996/case1.vcf.gz.decrypt.sh 
$ chmod 754 JGAS999992/JGAD999993/JGAZ999999997/case2.vcf.gz.decrypt.sh 
```

The permission may be added in batch by using the wild card (*).

```
$ chmod 754 J-DU999991.decrypt.sh 
$ chmod 754 JGAS999992/**/**/*.decrypt.sh
```

Decrypt the data files by running "J-DU999991.decrypt.sh" with the private key paired with the public key for dataset encryption registered in the data use application.

Decryption is explained with the following examples.

  - -k: specify the private key paired with the public key for dataset encryption (for example, J-DU999991_private_key).
  - -p: specify the passphrase of the private key.

```
$ ./J-DU999991.decrypt.sh -k J-DU999991_private_key -p ******
$ ls JGAS999992/JGAD999993/JGAR999999994/
case1.fastq.gz　　          # decrypted data file
case1.fastq.gz.decrypt.sh
case1.fastq.gz.encrypt
case1.fastq.gz.encrypt.dat
$ ls JGAS999992/JGAD999993/JGAZ999999996/
case1.vcf.gz　　            # decrypted data file
case1.vcf.gz.decrypt.sh
case1.vcf.gz.encrypt
case1.vcf.gz.encrypt.dat
```

Place a decrypting script for all files under the DU directory and decrypting scripts for each data file in each Data/Analysis directories which contain target encrypted data file.

```
$ J-DU999991/
J-DU999991/J-DU999991.decrypt.sh
J-DU999991/JGAS999992/JGAD999993
```

### Metadata<a name="metadata"></a>

The metadata directory contains following files. Metadata files are not encrypted.

#### Metadata in tsv<a name="metadata-tsv"></a>

  - JGAD999993.sample.txt
  - JGAD999993.analysis.SEQUENCE_VARIATION.txt
  
For Sample and Analysis, metadata are provided in tsv with attribute names in the header and contents from the second line. The Analysis tsv filename contains Analysis type and the Analysis tsv files are created for each Analysis type. Please note that Study, Dataset and Policy metadata are also fully available in the [DDBJ Search](https://ddbj.nig.ac.jp/search)

#### Metadata relation tsv<a name="metadata-relation-tsv"></a>

  - JGAD999993.study_sample_experiment_data.mapping.txt

The mapping table of "Data → Experiment → Sample → Study". For Experiment and Data, this mapping table also provides metadata contents.

  - JGAD999993.study_analysis_sample.mapping.txt

The mapping table of "Analysis → Sample → Study". For the analysis data summarizing multiple samples, the Analysis refers not sample accessions but numbers of samples.

  - JGAD999993.analysis_sample.mapping.txt

The mapping table of Analysis and Sample. If Analysis refers Samples, all refered Sample accessions are listed.

  - JGAD999993.dataset_policy_data_analysis.mapping.txt

The mapping table of Dataset, Data, Analysis and Policy.

#### Metadata in XML<a name="metadata-xml"></a>

  - JGAD999993.study.xml
  - JGAD999993.dataset.xml
  - JGAD999993.policy.xml
  - JGAD999993.sample.xml
  - JGAD999993.experiment.xml
  - JGAD999993.data.xml
  - JGAD999993.analysis.xml
  - JGAD999993.dac.xml

These XML files can be used for programmatic use.

#### Filelist<a name="filelist"></a>

  - JGAD999993.filelist.txt

The list summarizes filenames, sizes, MD5 hash values, and Data/Analysis accessions. 
By comparing MD5 values of downloaded files and those in the list, you can check corruption of the files.

