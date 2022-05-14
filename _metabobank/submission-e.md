---
layout: tabbed_indexed_content
service_name: MetaboBank
title: Submission to MetaboBank
category: metabobank
current_tab: submission
lang: en
---

## Overview  {#overview}

MetaboBank archives metabolomics data from mass spectrometry (MS), NMR and MS imaging researches. 
Metadata are described in the MAGE-TAB format. 
MAGE-TAB has long been used by functional genomics databases [GEA](/gea/index-e.html) and EBI [ArrayExpress](https://www.ebi.ac.uk/arrayexpress/). MAGE-TAB is also starting to be used in proteomics fields ([SDRF-Proteomics](https://www.nature.com/articles/s41467-021-26111-3)). The EBI metabolomics database [MetaboLights](https://www.ebi.ac.uk/metabolights/) has used ISA-TAB which is compatible with MAGE-TAB. MetaboBank and MetaboLights collaborates for data standardization.

<div class="attention" markdown="1">
  <span class="red">Submission of research data from human subjects</span>  
  : For submitting data from human subjects (human data) to the databases of Bioinformation and DDBJ center, it is submitter's responsibility to ensure that the dignity and right of human subject are protected in accordance with all applicable laws, ordinances, guidelines and policies of submitter's institution. In principle, make sure to remove any direct personal identifiers of human subjects from your data to be submitted. Before submitting human data, read the "[Submission of research data from human subjects](/policies-e.html#submission-of-human-data)".
</div>

## Submission flow  {#submission}

MetaboBank data are linked to BioProject and BioSample. 
By linking to BioProject and BioSample, metabolomics data are integrated with related data such as sequencing and gene expression data in different databases.   
Create metadata by filling in the excel file prepared for each submission type. 
Submit experimental raw and processed data files, and identified metabolites as Metabolite assignment file(s) (MAF) with pre-defined fields.

### 1. Create submission account  {#account}

- Create a [D-way submission account](https://ddbj.nig.ac.jp/D-way/) ([Manual](/account-e.html))
- [Register a public key and a center name](/account-e.html#enable-dra-submission-in-account) to enable data upload to MetaboBank.

### 2. Apply submission {#form}

Apply a submission from the [MetaboBank submission form](https://docs.google.com/forms/d/157KHuapqWPBXDhxIE6V0GqyvoOTgojhOQNAI4hsJKfA). MetaboBank team will inform you how to submit your data.   
If you can not access the form, [download the form file](/assets/files/text/mb-form-e.txt), fill in and send it to <img src="/assets/images/ddbj/mb-address.png" style="vertical-align:middle"> by email.

### 3. Create BioProject {#bp}

Register your project to [BioProject](/bioproject/submission-e.html). 
An accession number with prefix PRJDB will be assigned to the project.

### 4. Create BioSample {#bs}

Register samples (typical metabolomics experiment has more than one sample) to [BioSample](/biosample/submission-e.html) by using the [Omics package](/biosample/submission-e.html#Sample-type).   
For an organism name of non-living samples, choose an appropriate name from the NCBI Taxonomy [metagenomes](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock). For example, use "[food metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=870726&lvl=3&lin=f&keep=1&srchmode=1&unlock)" for food samples. 
For the other examples, please see the FAQ: [Which organism name should I use for non-living sample?](/faq/en/organism-for-material-e.html).       
Accession numbers with prefix SAMD will be assigned to samples.

### 5. Create metadata  {#metadata}

[Download a metadata excel]((/metabobank/metadata-e.html)) for the submission type you want to submit. 
The excel consists of two sheets, IDF and SDRF. 
Submit data of different types as separate studies and group them by a BioProject. For example, group MTBKS1000 (LC-MS) and MTBKS1001 (GC-MS) by a BioProject PRJDB100.  

- IDF (Investigation Description Format): study overview, experimental design, protocol, publication and submitter information.
- SDRF (Sample and Data Relationship Format): sample characteristics and relationship between sample, measurement instrument and data file.

### 6. Prepare data files {#data-files}

Prepare following data files. Submit identified metabolites as [Metabolite assignment file(s) (MAF)](/metabobank/datafile-e.html). MAF registration is not required but highly recommended.

- [Raw data file](/metabobank/datafile-e.html)
- [Processed data file](/metabobank/datafile-e.html)
- [Metabolite assignment file (MAF)](/metabobank/datafile-e.html)

Provide a list of filename and its md5 checksum for checking file integrity. 
Upload output of [md5sum command](#supplement-md5) as a file with the extension ".md5" (e.g., my-study.md5).  
Alternatively, you may provide md5 values in Comment[Raw Data File md5], Comment[Processed Data File md5] and Comment[Metabolite Assignment File md5] columns of SDRF.

### 7. Upload files {#upload}

Upload metadata and data files (raw, processed data files and MAF) to the file server by [scp/sftp](/dra/submission-e.html#upload-sequence-data).  
When submitting studies, group files per study by using tar or zip. 
Upload the metabobank directory under your home.  
The scp command is as follows.

```
$ scp -i private-key-for-auth <Your Files> <D-way Login ID>@ftp-private.ddbj.nig.ac.jp:~/metabobank
```

## Accession number  {#accession}

MetaboBank assigns an accession number to a study (n is natural number). 
Cite this study accession number in your publication.

MTBKSn (e.g., MTBKS1)

## Data release  {#release}

The data can be hold private until associated paper is published. 
Submitters can set the hold date within three years and extend the date. 
The private data are released according to the [data release policy](/documents/data-release-policy-e.html).  
Please note that public MetaboBank data are not exchanged with the EBI [MetaboLights](https://www.ebi.ac.uk/metabolights/).

FAQ: [How to request data release?](/faq/ja/request-release-e.html)

## Reviewer access  {#reviewer-access}

If you want to provide your private data to journal reviewers via password-protected site, 
please contact the [MetaboBank team](/contact-ddbj-e.html).  

## Update  {#update}

To update your data, please contact the [MetaboBank team](/contact-ddbj-e.html).

## Supplement: MD5 {#supplement-md5} 

MD5 (Message Digest Algorithm 5) is a hash function which calculates a hash value (MD5 number, 32-digit numbers and letters) of a given file. Because the MD5 number of the damaged file is distinct from the original one, we can check whether the transferred file is intact or not by comparing the numbers before and after the file transfer.

### Obtain MD5 number (Linux)

Obtain the MD5 numbers of the files by executing,

```
# obtain md5 values of file1 and file2.
$ md5sum file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2

# obtain md5 values of all files in the sub directory.
$ md5sum sub/*
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
B636E0063E29709B6082F324C76D0911 file3

# obtain md5 values of all files end with .txt.
$ md5sum *.txt

# Output values to a file.
$ md5sum *.txt > study.md
```

### Obtain MD5 number (Mac OS X)

Obtain the MD5 numbers of the files by executing,

```
# obtain md5 values of file1 and file2.
$ md5sum file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2

# obtain md5 values of all files in the sub directory.
$ md5sum sub/*
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
B636E0063E29709B6082F324C76D0911 file3

# obtain md5 values of all files end with .txt.
$ md5sum *.txt

# Output values to a file.
$ md5sum *.txt > study.md
```

### Obtain MD5 number (Windows)

Install and run the [Fsum Frontend](https://sourceforge.net/projects/fsumfe/).  
At first, tick off "md5".

<a href="/assets/images/books/Fsum1.jpg" title="Generate md5 in the tool 1" class=""><img src="/assets/images/books/Fsum1.jpg" alt="" title="" class="w500"></a>

After clicking the \[+\] button, open the sequence data files that you need. You can select multiple files at the same time.

<a href="/assets/images/books/Fsum2.jpg" title="Generate md5 in the tool 2" class=""><img src="/assets/images/books/Fsum2.jpg" alt="" title="" class="w500"></a>

Click the \[Calculate hashes\] button. The MD5 numbers of the files are displayed.  
By clicking the \[Export\] button, you can obtain the list of the MD5 numbers as a html, a csv, or a xml file.
