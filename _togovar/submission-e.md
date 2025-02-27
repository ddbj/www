---
layout: tabbed_indexed_content
service_name: TogoVar-repository
title: Submission
category: togovar
current_tab: submission
lang: en
---

## Submission flow {#submission}

TogoVar-repository has two submission types SNP and SV.

* Short variants (SNP): variants &le;50 bp, exchanged with the NCBI [dbSNP](https://ncbi.nlm.nih.gov/snp/).
* Large structural variants (SV): variants >50 bp, exchanged with the NCBI [dbVar](https://ncbi.nlm.nih.gov/dbvar/).

BioProject and BioSample are necessary so that related data are grouped by BioProject and BioSample across databases. Metadata are prepared in the Excel format for each submission type. Variants are submitted in VCF. SV variant calls can also be submitted in the Excel sheet.

### 1. Create submission account  {#account}

- Create a [D-way submission account](https://ddbj.nig.ac.jp/D-way/) ([Manual](/account-e.html))
- [Register a public key to your account](/account-e.html#public-key) to enable data upload to TogoVar-repository.

### 2. Apply submission {#form}

Apply your submission from the [TogoVar-repository submission form](https://docs.google.com/forms/d/e/1FAIpQLSdVpwfXrkE-IxDC8J9rP0DeRHpGNo4SiJ2BfL65_6F4Z_CWXQ/viewform?usp=sf_link). TogoVar-repository team will inform you how to submit your data.

### 3. Register BioProject {#bp}

Register your project to [BioProject](/bioproject/submission-e.html).
An accession number with prefix PRJDB will be assigned to your project.

### 4. Register BioSample {#bs}

Register your samples to [BioSample](/biosample/submission-e.html). Accession numbers with prefix SAMD will be assigned to samples.

### 5. Create metadata  {#metadata}

[Download a TogoVar-repository excel](https://github.com/ddbj/togovar-repository/raw/main/submission_excel/TogoVar_v1.4.xlsx).
The excel consists of the following sheets.

* TogoVar_Study: describes overall study.
* TogoVar_SampleSet: sample set (population).
* TogoVar_Sample: samples used.
* TogoVar_Experiment: experimental methods and analysis protocols.
* TogoVar_Dataset: dataset (1 dataset - 1 VCF).
* Variant Call (SV): when submitting variant calls in the sheet.
* Variant Region (SV): when submitting variant calls in the sheet.

### 6. Prepare data files {#data-files}

Provide variants (necessary), allele (recommended) and genotype (optional) frequencies in VCF. Please see the following VCF guidelines.

* [dbSNP VCF Submission Format Guidelines](/assets/files/submission/dbSNP_VCF_Submission.pdf)
* [dbVar VCF Submission Format Guidelines](/assets/files/submission/dbVar_VCF_Submission.pdf)

### 7. Upload files {#upload}

Upload a metadata Excel and VCF files to our file server by scp/sftp. Regarding how to upload your data files, please see "[Data upload](/upload.html)".

## Accession number  {#accession}

TogoVar-repository assigns accession numbers to objects with distinct prefixes. 
Please also see [Overview of Structural Variation at dbVar](https://www.ncbi.nlm.nih.gov/dbvar/content/overview/).

* SNP/SV
	* study: dstd
* SNP
	* variant: dss
* SV
	* variant call: dssv
	* variant region: dsv
	
## Data release  {#release}

The data can remain private until your paper publication.
Submitters can designate the hold date within three years and extend the date.
The private data are released according to the [data release policy](/insdc/data-release-policy-e.html).

## Update  {#update}

To update your data, please contact the [TogoVar-repository team](/contact-ddbj-e.html).
