---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Submit microarray data
category: gea
current_tab: submission overview
lang: en
---

## Pre-submission checklist {#checklist}

### Two-color microarray experiment {#two-color}

At the moment GEA submission interface only supports one type of two-color workflow ([see example here](/gea/example-e.html#sdrf_example2)), where two samples are connected with one common raw data file, which includes both channels. If you select the dual-channel option in the IDF tab, it will expect that you provide one file for the two samples that were hybridized together. Some recent two-color microarray technologies generate two separate raw data files (usually one for each channel), which will cause validation to fail (if you connect a single file per sample). If you have separate files for each channel, please [contact GEA team](/contact-ddbj-e.html).

### Single-cell sequencing experiment {#single-cell}

Refer to [Single-cell submission guide](/gea/single-cell-e.html). Please [contact GEA team](/contact-ddbj-e.html) to upload any additional files for custom spike-ins or to facilitate data analysis.

### More than one technology per experiment {#technologies}

GEA will ask you for the technology and name of the array, and applies it to the whole submission. If you have used different types of technologies for the same set of samples, we ask you to create separate submissions. Please make sure that the submissions have distinct titles (even though they may belong to the same study), in order to avoid mistakes. If you have samples from more than one array design in your experiment, it is possible to submit only one experiment. If you wish to do this, please [contact GEA team](/contact-ddbj-e.html).

## Microarray data submission {#array-sub}

### Create a new submission {#create-new-submission}

Login [D-way](https://ddbj.nig.ac.jp/D-way/) and navigate to the GEA submission page from the top menu.  
Create a new microarray experiment submission by selecting "Microarray" and clicking the [New submission]. At the same time, in the DDBJ file server (ftp-private.ddbj.nig.ac.jp), a corresponding subdirectory is created under the submitter’s GEA upload directory. [Upload data files to this subdirectory](#upload-data).

<div class="attention">
The maximum number of assay per submission is 1,000. If you have more than 1,000 assays, please create multiple submissions with the same BioProject reference.
</div>

{% include image.html url="books/array-sub1.jpg" caption="Create a new microarray experiment submission" class="w450" %}

List of submission status is as follows. The GEA team reviews submission whose status is in "submission_validated" or "data_error".

List of submission status
{: .tablecaption}

| Status           | Explanation                                              |
|---|
| New              | Metadata are not submitted.                              |
| Data Submitted   | Metadata and data files are submitted.                   |
| Data Validating  | Validating data files.                                   |
| Validation Error | Error occurred in data validation process.               |
| Data Validated   | Metadata and data are validated.                         |
| Curating         | Curator is reviewing the submission.                     |
| Accession Issued | Accession number is issued to the submission.            |
| Confidential     | Archive files are created and submission is kept private |
| Public           | Released to public.                                      |

### Upload raw and processed data files {#upload-data}

Regarding how to upload your data files, please see "[Data upload](/upload.html)".

### Submission {#Submission-tab}

Set the hold date within four years or choose immediate release when processed. Submitters' name and affiliation will be public but e-mail address will not be disclosed.

<div class="attention">
Email regarding GEA submission is sent to addresses entered in the GEA Submission.
If you change email address registered in your DDBJ account, you need to update addresses of GEA Submissions to receive emails regarding the submissions.
</div>

{% include image.html url="books/array-sub2.jpg" caption="Enter submission information" class="w550" %}

### BioProject {#BioProject-tab}

Select a submitted project registered in your account. If a BioProject is not registered, please submit a new project at [BioProject submission site](/bioproject/submission-e.html#bioproject-submission). To use a project registered in another account, please [apply cross-reference](https://docs.google.com/forms/d/e/1FAIpQLSevpYmu-Xt5PiFGecuVQ9gdi2QrUmCUErtj4oLDOXnpWiNjhg/viewform).

{% include image.html url="books/gea-bp.jpg" caption="Select a BioProject for the GEA experiment" class="w550" %}

### BioSample {#BioSample-tab}

Select submitted BioSamples registered in your account. If BioSamples are not registered, please submit new samples at [BioSample submission site](/biosample/submission-e.html#biosample-submission). To use samples registered in another account, please [apply cross-reference](https://docs.google.com/forms/d/e/1FAIpQLSevpYmu-Xt5PiFGecuVQ9gdi2QrUmCUErtj4oLDOXnpWiNjhg/viewform).

{% include image.html url="books/gea-bs.jpg" caption="Select BioSamples for the GEA experiment" class="w550" %}

### IDF {#idf-tab}

Enter information for [IDF (Investigation Description Format)](/gea/metadata-e.html#idf). [Example IDF](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=0)

- Protocol: Pre-checked protocols are mandatory.
- Publication: Describe associated publications by PubMed ID or DOI. For unpublished manuscript, please [inform us](/contact-ddbj-e.html) the publication ID after assignment.
- Array Design: When an array design is available in [ArrayExpress](https://www.ebi.ac.uk/biostudies/arrayexpress/studies?query=type%3Aarray)/[GEA](https://ddbj.nig.ac.jp/public/ddbj_database/gea/array/A-GEAD-000/), enter an array design accession number "A-XXXX-n". When an array design is not available, [register a new array design](/gea/adf-e.html) by uploading an array design file into the GEA submission directory.
- Data File Type: Raw and processed data files are required for microarray experiment submission. We strongly recommend to submitting raw and processed data file per sample. [Accepted Data Files Formats for microarray experiment](/gea/datafile-e.html#array_data).

{% include image.html url="books/array-idf.jpg" caption="Enter information for IDF" class="w600" %}

### SDRF {#sdrf-tab}

{% include image.html url="books/array-sdrf.jpg" caption="Download a SDRF template file" class="w600" %}

Enter information for [SDRF (Sample and Data Relationship Format)](/gea/metadata-e.html#sdrf). [Example SDRF](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=657626667)

Auto-filled fields.

- Name columns and attribute columns for Source Name: Generated from BioSamples.
- SDRF rows: 1 row for 1 BioSample.
- Protocols: Protocols described in IDF are inserted to appropriate positions of SDRF with temporary protocol IDs (e.g., ESUB000350_Protocol_1)
- Technology Type: "array assay" for microarray submission.
- Array Design REF: array design accession or filename described in IDF.

Enter required fields by overwriting <Required: fill in the content> tags.

Fields you need to add.

- Material Type: Enter [controlled terms](/gea/metadata-e.html#Material_Type).
    - total RNA
    - polyA RNA
    - cytoplasmic RNA
    - nuclear RNA
    - genomic DNA
    - protein
    - other
- Label: Enter label compounds used to label the extracted molecule such as biotin, Cy3 and Cy5.
- Array Data File and Comment[Array Data File md5]: Enter filename and [md5 checksum](#supplement-md5) pair for each raw data file.
- Derived Array Data File and Comment[Derived Array Data File md5]: Enter filename and [md5 checksum](#supplement-md5) pair for each processed data file.
- A list of filename and its md5 checksum (output of [md5sum command](#supplement-md5)) can be provided as a file <GEA submission ID>.md5 (e.g., ESUB000001.md5) (when the checksum values are provided in both SDRF and .md5 file, those in the .md5 are used).
- Factor Value[enter experiment factor name here]: A user-defined name for each experimental factor studied by the experiment. These experimental factors represent the variables within the investigation (e.g. growth condition, genotype, organism part). The actual values of these variables will be listed in the "Factor Value []" columns.   
Example:   
- Factor Value[strain]
- AT76
- KU-2003
- KU-PI499262

{% include image.html url="books/array-sdrf-template.jpg" caption="SDRF template, yellow-highlighted fields need to be filled by submitter" class="w600" %}

Select the entered SDRF file and continue.

{% include image.html url="books/array-sdrf2.jpg" caption="Select entered SDRF file" class="w450" %}

### md5 checksum {#checksum}

GEA uses [md5 checksum values](#supplement-md5) to detect corruption of files.  
When there are many files or you are familiar with command line, provide output of [md5sum command](#supplement-md5) as a separate file with the filename <GEA submission ID>.md5 (for example, ESUB000001.md5) and upload it along with the data files. Values of the .md5 file are used over those of the SDRF.

Example: ESUB000001.md5 (checksum values and filenames are delimited by two spaces)    
```
ed3d9b2adb5b29aa476b9d4164e208d5  raw1.txt
3d77463ca6f43416a6c1925b7704d304  raw2.txt
0e5be28700daa6d61ea3351921d6e578  processed1.txt
351fb1324feebe954405ca610e46ae44  processed2.txt
3d5749b63617da9002c7376deee8e0a3  array-design.txt
```

### Overview and submit {#submit}

You can download the IDF and SDRF files and check them. When correction is necessary, go back to the previous tab and corrent metadata.  
Submit the IDF and SDRF metadata by clicking [Submit].

{% include image.html url="books/array-overview.jpg" caption="Check the IDF and SDRF and submit" class="w450" %}

### Validation {#validation-step}

When data files described in the IDF and SDRF are not found in the submission directory, an error message "Data file is not uploaded" is shown and the submission is aborted.   
The validator checks submitted IDF and SDRF files according to the [validation rules](/gea/validation-e.html) and gives warning and error messages. Errors need to be resolved for submission.

{% include image.html url="books/array-validation.jpg" caption="Warning and error messages" class="w500" %}

## Accession number {#accession}

[GEA accession numbers](/gea/overview-e.html#acc) are issued to completed GEA experiment. You can allow reviewers access to private records by [communicating a reviewer accesss token](/gea/reviewer-access-e.html).

{% include image.html url="books/array-accession.jpg" caption="GEA accession numbers" class="w500" %}

## Update submission {#update-submission}

For updates or deletions, please request them via the [form](/contact-ddbj-e.html) to the GEA team.