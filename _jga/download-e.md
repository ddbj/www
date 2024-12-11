---
layout: tabbed_indexed_content
service_name: Japanese Genotype-phenotype Archive
title: Download steps
category: jga
current_tab: submission
lang: en
---

## From data use application and JGA data use {#du}

Apply a data use application in the [application system](https://humandbs.ddbj.nig.ac.jp/nbdc/application/) after login with your D-way account.   
In the application, create a data user group, specify JGA Study and Dataset accessions you want to use, and register a public key for dataset decryption.   
After your application is approved, access to the JGA server with your D-way account and donwload data to on-/off-premise servers by [WinSCP](#winscp) or [sftp](#sftp). Encrypted data files and decryption tools are provided, decrypt the data files by using the private key paired with the public key for dataset decryption registered in the application.

* [Search JGA dataset](#search)
* [D-way account and a public key for data transfer](#account-key)
* [Generate a public and private key pair for dataset decryption](#key-for-decryption)
* [Data use application](#du-application)
* [Data user group](#data-user-group)
* [Register a puclic key for dataset decryption](#public-key-for-dataset-decryption)
* [Download data](#download)
	* [WinSCP](#winscp)
	* [sftp](#sftp)
* [Decrypt data files](#decrypt)

### Search JGA dataset {#search}

Search Study (e.g., JGAS999992) and Dataset (e.g., JGAD999993) [accessions](/jga/submission-e.html) of your interest.   
You may search JGA data in [list of researches](https://humandbs.dbcls.jp/en/data-use/all-researches) at DBCLS and [DDBJ Search](https://ddbj.nig.ac.jp/search).

### D-way account and a public key for data transfer  {#account-key}

A D-way account is necessary for data use application and JGA data download. If you do not have an acccount, [create a D-way account](https://ddbj.nig.ac.jp/D-way/) before application.   

<div class="attention" markdown="1">
After creating a D-way account, it takes about 10 minutes for the D-way account becomes active in the [application system](https://humandbs.ddbj.nig.ac.jp/nbdc/application/).
</div>

Generate a public and private key pair for data transfer and [register the public key to your D-way account](/account-e.html#public-key) for data download. 

### Generate a public and private key pair for data decryption {#key-for-decryption}

The JGA data are provided as encrypted files. A user downloads data by sftp and decrypts the files by using the private key paired with the public key for dataset decryption registered in the data use application.  
The public key for dataset decryption is separate from [the public key for data transfer registered to the D-way account](/account-e.html#public-key). See "[How to generate public/private key pair](/account-e.html#generate-key-pair)". <span class="red">The key for dataset decryption should be in the RSA format. The ed25519 format is not supported.</span>

In total, 2 pairs 4 keys are necessary for data use application and JGA data use.

A key pair for dataset decryption.
* A public key for dataset decryption (register per data use application)
* A private key for dataset decryption

A key pair for data transfer.
* A public key for data transfer (register to a D-way account)
* A private key for data transfer

{% include image.html url="books/two-key-pairs.jpg" caption="Key pairs for data transfer and dataset decryption" class="w450" %}

Save the public and private keys for decryption as filenames having the application ID.
Example:  
* Public key for decryption: J-DU999991.pub
* Private key for decryption: J-DU999991

## Data use application {#du-application}

[Apply the data use application](https://humandbs.dbcls.jp/en/data-use) in the [application system](https://humandbs.ddbj.nig.ac.jp/nbdc/application).
Also see the [data use page](https://humandbs.dbcls.jp/en/data-use).

### Data user group {#data-user-group}

Before starting the application, create a data user group. In the following example group (usergrp1), an owner is researcher (account_b) who apply the application and download the data, and a member is PI (account_c).

{% include image.html url="books/DS-group-e.png" caption="Data user group" class="w450" %}

[Start the application](https://humandbs.dbcls.jp/en/data-use) and select the group.

{% include image.html url="books/DU-start-e.png" caption="Start data use application" class="w450" %}

{% include image.html url="books/DU-group-e.png" caption="Select the data user group" class="w450" %}

### Register a puclic key for dataset decryption {#public-key-for-dataset-decryption}

Register a public key for dataset decryption in the data use application.

{% include image.html url="books/public-key-for-dataset-decryption-e.png" caption="Registration of the public key for dataset decryption" class="w400" %}

### Data use application approval  {#approval}

Generate a public and private key pair for data transfer and [register the public key to your D-way account](/account-e.html#public-key) for data download from the JGA server (jga-gw.ddbj.nig.ac.jp).   
After the application is approved by DBCLS, metadata, encrypted data files and decryption tools are created in the download directory in the JGA server.

{% include image.html url="books/data-use-approved-e.png" caption="Data use application approval" class="w400" %}

### Download {#download}

In the "/controlled-access/download/jga/" directory in the JGA file server (jga-gw.ddbj.nig.ac.jp), the DU number directory is created. Download the directory by [WinSCP](#winscp) or [sftp](#sftp).

### Download by WinSCP {#winscp}

Download [WinSCP (https://winscp.net/eng/download.php)](https://winscp.net/eng/download.php) and install it to Windows PC.

Configure as follows.

- File protocol: SFTP
- Host name: jga-gw.ddbj.nig.ac.jp
- Port number: 443
- User name: D-way account ID
- Password: leave empty

{% include image.html url="books/jga-winscp1-e.jpg" caption="WinSCP session" class="w400" %}

{% include image.html url="books/jga-winscp2-e.jpg" caption="Specify the private key for data transfer" class="w400" %}
    
When first time access, a waring message will be shown and select "Yes" (it will not be shown in next time). Enter a passphrase if it has been set.  

{% include image.html url="books/jga-winscp3-e.jpg" caption="WinSCP data file transfer" class="w400" %}
    
After login, drag and drop JGA data files in the right window to the local server in the left window.

### sftp download {#sftp}

Specify the [private key registered to your D-way account](/account-e.html#generate-key-pair) and the port number 443 for sftp data transfer (this key is different from the private key for dataset decryption).

```
# Account ID: account_b
# Data use application ID: J-DU999991
# Private key for data transfer: ~/.ssh/id_rsa

$ sftp -i ~/.ssh/id_rsa -P 443 account_b@jga-gw.ddbj.nig.ac.jp
$ cd controlled-access/download/jga/
$ get -r J-DU999991
```

In the DU directory, there are study directory and tools directory which contains the decryption tools. 
The Dataset directory under the Study directory contains metadata in tab-delimited text (tsv) and XML formats, and the Data and Analysis directories contain encrypted data files.

The data access is explained below.

```
# JGA Study: JGAS999992
# JGA Dataset: JGAD999993
# JGA Data: JGAR999999994-JGAR999999995
# JGA Analysis: JGAZ999999996-JGAZ999999997

$ tree J-DU999991/	
J-DU999991/
├── JGAS999992                           # JGA Study
│   └── JGAD999993                       # JGA Dataset   
│       ├── JGAR999999994                # JGA Data
│       │   └── case1.fastq.gz.encrypt     # encrypted data file
│       ├── JGAR999999995                # JGA Data
│       │   └── case2.fastq.gz.encrypt     # encrypted data file
│       ├── JGAZ999999996                # JGA Analysis
│       │   └── case1.vcf.gz.encrypt       # encrypted data file
│       ├── JGAZ999999997                # JGA Analysis
│       │   └── case2.vcf.gz.encrypt       # encrypted data file
│       └── metadata
└── tools
    └── J-DU999991.tool.zip

```

## Decrypt data files {#decrypt}

<div class="attention">
Use the decryption tools in Linux. Windows is not supported.
</div>

Decrypt downloaded encrypted data files by using the decryption tools.    
Move to the J-DU999991 directory and unzip the "J-DU999991.tool.zip" in the tools directory.

```
$ cd J-DU999991
$ unzip tools/J-DU999991.tool.zip

$ tree ../J-DU999991/
J-DU999991/
├── J-DU999991.decrypt.sh                     # decryption script for all files in DU.
├── JGAS999992
│   └── JGAD999993
│       ├── JGAR999999994
│       │   ├── case1.fastq.gz.decrypt.sh     # decryption script for each data file.
│       │   ├── case1.fastq.gz.encrypt
│       │   └── case1.fastq.gz.encrypt.dat    # common key for the data file decryption.
│       ├── JGAR999999995
│       │   ├── case2.fastq.gz.encrypt
│       │   ├── case2.fastq.gz.encrypt.dat    # common key for the data file decryption.
│       │   └── case2.fastq.gz.encrypt.sh     # decryption script for each data file.
│       ├── JGAZ999999996
│       │   ├── case1.vcf.gz.encrypt
│       │   ├── case1.vcf.gz.encrypt.dat      # common key for the data file decryption.
│       │   └── case1.vcf.gz.encrypt.sh       # decryption script for each data file.
│       ├── JGAZ999999997
│       │   ├── case2.vcf.gz.encrypt
│       │   ├── case2.vcf.gz.encrypt.dat      # common key for the data file decryption.
│       │   └── case2.vcf.gz.encrypt.sh       # decryption script for each data file.
│       └── metadata
└── tools
    └── J-DU999991.tool.zip

# .decrypt.sh: decryption scripts
# .dat: encrypted common keys
```

Add execute permission to all decryption scripts.  
You can add permissions to all decryption scripts by using wild cards (\*) as below.

```
$ chmod 754 J-DU999991.decrypt.sh 
$ chmod 754 JGAS999992/JGAD999993/JGAR999999994/case1.fastq.gz.decrypt.sh
$ chmod 754 JGAS999992/JGAD999993/JGAR999999995/case2.fastq.gz.decrypt.sh
$ chmod 754 JGAS999992/JGAD999993/JGAZ999999996/case1.vcf.gz.decrypt.sh 
$ chmod 754 JGAS999992/JGAD999993/JGAZ999999997/case2.vcf.gz.decrypt.sh 
```

The permission may be added to the scripts in batch by using the wild card (\*) as follows.

```
$ chmod 754 J-DU999991.decrypt.sh 
$ chmod 754 JGAS999992/**/**/*.decrypt.sh
```

Decrypt the data files by running "J-DU999991.decrypt.sh" with the private key paired with the public key for dataset encryption registered in the data use application.

- -k: specify the private key paired with the public key for dataset decryption (for example, J-DU999991_private_key).
- -p: specify the passphrase of the private key (\*\*\*\*\*\*).

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

### Metadata {#metadata}

The metadata directory contains following files. Metadata files are not encrypted.   
[JGA metadata example tsv](https://docs.google.com/spreadsheets/d/1NSYUV6KOuQp8zh1lge7450UxBjb5YrUTYOMkwtBxI7o/edit#gid=0)

#### Metadata in tsv {#metadata-tsv}

- JGAD999993.sample.txt
- JGAD999993.analysis.SEQUENCE_VARIATION.txt
  
For Sample and Analysis, metadata are provided in tsv with attribute names in the header and contents from the second line. The Analysis tsv filename contains Analysis type and the Analysis tsv files are created for each Analysis type. Please note that Study, Dataset and Policy metadata are also fully available in the [DDBJ Search](https://ddbj.nig.ac.jp/search)

#### Metadata relation tsv {#metadata-relation-tsv}

- JGAD999993.study_sample_experiment_data.mapping.txt

The mapping table of "Data → Experiment → Sample → Study". For Experiment and Data, this mapping table also provides metadata contents.

- JGAD999993.study_analysis_sample.mapping.txt

The mapping table of "Analysis → Sample → Study". For the analysis data summarizing multiple samples, the Analysis refers not sample accessions but numbers of samples.

- JGAD999993.analysis_sample.mapping.txt

The mapping table of Analysis and Sample. If Analysis refers Samples, all refered Sample accessions are listed.

- JGAD999993.dataset_policy_data_analysis.mapping.txt

The mapping table of Dataset, Data, Analysis and Policy.

#### Metadata in XML {#metadata-xml}

- JGAD999993.study.xml
- JGAD999993.dataset.xml
- JGAD999993.policy.xml
- JGAD999993.sample.xml
- JGAD999993.experiment.xml
- JGAD999993.data.xml
- JGAD999993.analysis.xml
- JGAD999993.dac.xml

These XML files can be used for programmatic use.

#### Filelist {#filelist}

- JGAD999993.filelist.txt

The list summarizes filenames, sizes, MD5 hash values, and Data/Analysis accessions. 
By comparing MD5 values of downloaded files and those in the list, you can check corruption of the files.

## Update public key for decryption {#key-update}

Select "Update Public key" in the data use application page.  
Select a new OpenSSH-format public key and click "Update" to replace the public key.  
The approved dataset will be re-processed. Please do NOT re-update the key until the re-processing finishes.  

<div class="attention" markdown="1">
When the dataset contains thousands of files, re-processing will take several days.  
Do not re-update the key until the re-processing finishes.
</div>

If timestamps of the decryption tools (for example, J-DU999991.tool.zip) are updated, the re-processing is finished.   
After the re-processing finishes, download the decryption tools again according to [download](#sftp). You do not need to download encrypted data files again.  
Decrypt data files by using a private key which is a pair of the newly updated public key according to [decrypt date files](#decrypt).

{% include image.html url="books/update-key-for-decryption-e.png" caption="Update public key for decryption" class="w300" %}

