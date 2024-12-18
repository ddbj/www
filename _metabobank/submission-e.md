---
layout: tabbed_indexed_content
service_name: MetaboBank
title: Submission to MetaboBank
category: metabobank
current_tab: submission
lang: en
---

## Submission flow  {#submission}

MetaboBank data are linked to BioProject and BioSample data so that the data are linked with related data such as sequencing and gene expression data in different databases.
Metadata are prepared in the Excel format (IDF and SDRF in the MAGE-TAB style) for each submission type.
Processed data (identified metabolites) are prepared as Metabolite assignment file(s) (MAF) with pre-defined fields.

### 1. Create submission account  {#account}

- Create a [D-way submission account](https://ddbj.nig.ac.jp/D-way/) ([Manual](/account-e.html))
- [Register a public key to your account](/account-e.html#public-key) to enable data upload to MetaboBank.

### 2. Apply submission {#form}

Apply your submission from the [MetaboBank submission form](https://docs.google.com/forms/d/157KHuapqWPBXDhxIE6V0GqyvoOTgojhOQNAI4hsJKfA). MetaboBank team will inform you how to submit your data.
If you cannot access the form, [download the submission file](/assets/files/text/mb-form-e.txt), and send it to <img src="/assets/images/ddbj/mb-address.png" style="vertical-align:middle"> by email.

### 3. Register BioProject {#bp}

Register your project to [BioProject](/bioproject/submission-e.html).
An accession number with prefix PRJDB will be assigned to your project.

### 4. Register BioSample {#bs}

Register your samples to [BioSample](/biosample/submission-e.html) by using the [Omics package](/biosample/submission-e.html#Sample-type). Please check [sample granurity](/biosample/overview-e.html) before the registration.
For an organism name of non-living materials, choose an appropriate name from the NCBI Taxonomy [metagenomes](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock).
- Blank as [blank sample](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=2582415&lvl=3&lin=f&keep=1&srchmode=1&unlock)
- Food as [food metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=870726&lvl=3&lin=f&keep=1&srchmode=1&unlock)
- For others, see FAQ: [Which organism name should I use for non-living sample?](/faq/en/organism-for-material-e.html)
-
Accession numbers with prefix SAMD will be assigned to samples.

### 5. Create metadata  {#metadata}

[Download a metadata excel]((/metabobank/metadata-e.html)) for the experiment type you want to submit.
The excel consists of two sheets, IDF and SDRF.
Different experiments are prepared as separate studies, grouped by a BioProject. For example, group MTBKS1000 (LC-MS) and MTBKS1001 (GC-MS) by a BioProject PRJDB100.

- IDF (Investigation Description Format): study overview, experimental design, protocol, publication and submitter information.
- SDRF (Sample and Data Relationship Format): sample characteristics and relationship between sample, measurement instrument and data file.

### 6. Prepare data files {#data-files}

Prepare the following data files. Identified metabolites are prepared as [Metabolite assignment file(s) (MAF)](/metabobank/datafile-e.html). MAF registration is not mandatory but strongly recommended for data reuse.

- [Raw data file](/metabobank/datafile-e.html)
- [Processed data file](/metabobank/datafile-e.html)
- [Metabolite assignment file (MAF)](/metabobank/datafile-e.html)

Provide a list of filename and its md5 checksum for checking file integrity.
Upload the output of [md5sum command](#supplement-md5) as a file with the extension ".md5" (e.g., my-study.md5).
Alternatively, you may provide the md5 values in the columns of SDRF as Comment[Raw Data File md5], Comment[Processed Data File md5] and Comment[Metabolite Assignment File md5].

### 7. Upload files {#upload}

Upload metadata and data files (raw, processed data files and MAF) to our file server by scp/sftp.
Group all files for each study by using either tar or zip. Upload your files under the metabobank directory.

Regarding how to upload your data files, please see "[Data upload](/upload.html)".

## Accession number  {#accession}

MetaboBank assigns an accession number to a study (n is a serial number).
Cite this accession number in your publication.

MTBKSn (e.g., MTBKS1)

## Data release  {#release}

The data can remain private until your paper publication.
Submitters can designate the hold date within three years and extend the date.
The private data are released according to the [data release policy](/documents/data-release-policy-e.html).
Please note that public MetaboBank data are not exchanged with the EBI [MetaboLights](https://www.ebi.ac.uk/metabolights/).

FAQ: [How to request data release?](/faq/ja/request-release-e.html)

## Reviewer access  {#reviewer-access}

If you want to provide your private data to journal reviewers via password-protected site,
please contact the [MetaboBank team](/contact-ddbj-e.html).

## Update  {#update}

To update your data, please contact the [MetaboBank team](https://forms.gle/awH9aMrfpsk4NeyK7).

## MD5 checksum value {#md5}

See "[MD5 checksum value](/checksum.html)" for how to obtain MD5 checksum values.
