---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Submit microarray experiment
category: gea
current_tab: submission overview
lang: en
---

## GEA submission flow  {#gea-submission-flow}

### 1. Obtain a submission account {#account}

- Create a [D-way submission account](https://ddbj.nig.ac.jp/D-way/).
- To enable GEA submission, [register a public key to your account](/account-e.html#enable-dra-submission-in-account).

### 2. Register a BioProject and BioSample(s) {#bioproject-biosample}

#### [BioProject](/bioproject/submission-e.html)  {#BioProject}

- A description of the reseach effort.

#### [BioSample](/biosample/submission-e.html) <img src="/assets/images/parts/tsv.png" alt="" title="" class="tsv">  {#BioSample}

- A description of biologically or physically unique samples used to generate experimental data.

<img src="/assets/images/parts/tsv.png" alt="" title="" class="tsv">
metadata can be submitted as a tab-delimited text file.

### 3. Upload raw and processed data files {#upload}

- Upload raw and processed data files into the GEA submission directory.
- \[Optional\] When an array design is not available in [ArrayExpress](https://www.ebi.ac.uk/biostudies/arrayexpress/studies?query=type%3Aarray)/GEA, upload an array design file into the GEA submission directory along with data files.

### 4. Select a BioProject and BioSample(s) {#select-bp-bs}

- Select a registed BioProject for the GEA submission.
- Select registed BioSample(s) for the GEA submission. Majority of GEA submissions require more than one sample.

### 5. Prepare IDF and SDRF {#create-idf-sdrf}

#### IDF  {#idf}

- The [IDF (Investigation Description Format)](/gea/metadata-e.html#idf) file is used to give an overview of the experiment, including the experimental design, protocols and publication information.

#### SDRF  <img src="/assets/images/parts/tsv.png" alt="" title="" class="tsv"> {#SDRF}

- The [SDRF (Sample and Data Relationship Format)](/gea/metadata-e.html#sdrf) describes the sample characteristics and the relationship between samples, arrays, data files etc.
- SDRF template is generated from selected BioProject and BioSample(s). Enter additional information.

### 6. Submit IDF, SDRF and validate data files {#validation}

- After submitting IDF and SDRF in the submission web system, [validation](/gea/validation-e.html) of the uploaded data files will automatically begin.
- The submission passed validation will be reviewed.

## Pre-submission checklist  {#checklist}

### Two-color microarray experiment {#two-color}

At the moment GEA submission interface only supports one type of two-color workflow ([see graphic here](/gea/example-e.html#sdrf_example2)), where two samples are connected with one common raw data file, which includes both channels.
If you select the dual-channel option in the IDF tab, it will expect that you provide one file for the two samples that were hybridized together. Some recent two-color microarray technologies generate two separate raw data files (usually one for each channel), which will cause validation to fail (if you connect a single file per sample).

If you have separate files for each channel, please [contact GEA team](/contact-ddbj-e.html).

### Single-cell sequencing experiment {#single-cell}

Refer to [ArrayExpress Single-cell submission guide](https://www.ebi.ac.uk/arrayexpress/help/single-cell_submission_guide.html).
Please [contact GEA team](/contact-ddbj-e.html) to upload any additional files for custom spike-ins or to facilitate data analysis.

### More than one technology per experiment {#technologies}

GEA will ask you for the technology and name of the array, and applies it to the whole submission. If you have used different types of technologies for the same set of samples, we ask you to create separate submissions. Please make sure that the submissions have distinct titles (even though they may belong to the same study), in order to avoid mistakes. If you have samples from more than one array design in your experiment, it is possible to submit only one experiment. If you wish to do this, please [contact GEA team](/contact-ddbj-e.html).

## Microarray experiment submission  {#array-sub}

### Create a new submission  {#create-new-submission}

Login [D-way](https://ddbj.nig.ac.jp/D-way/) and the top page is displayed. Move to the GEA submission site from the "GEA" menu at the top.

Create a new microarray experiment submission by selecting "Microarray" and clicking the \[New submission\]. At the same time, in the DDBJ file server (ftp-private.ddbj.nig.ac.jp), a corresponding subdirectory is created under the submitter’s GEA upload directory. [Upload data files to this subdirectory](#upload-data).

<div class="attention">
If there is no reply from submitters after three months of initial contact, submissions will be cancelled.
</div>

<div class="attention">
The maximum number of assay per submission is 1,000. If you have more than 1,000 assays, please create multiple submissions with the same BioProject reference.
</div>

{% include image.html url="books/array-sub1.jpg" caption="Create a new microarray experiment submission" class="w450" %}


List of submission status is as follows. The GEA team reviews submission whose status is in "submission\_validated" or "data\_error".

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

### Submission  {#Submission-tab}

Set the hold date within four years or choose immediate release when processed. Submitters' name and affiliation will be public but e-mail address will not be disclosed.

<div class="attention">
Email regarding GEA submission is sent to addresses entered in the GEA Submission.
If you change email address registered in your D-way account, you need to update addresses of GEA Submissions to receive emails regarding the submissions.
</div>

{% include image.html url="books/array-sub2.jpg" caption="Enter submission information" class="w550" %}


### BioProject  {#BioProject-tab}

Select a submitted project registered in your account. If a BioProject is not registered, please go to the [BioProject submission site](/bioproject/submission-e.html#bioproject-submission) and submit a project.

To use a project obtained in the other account, please [contact GEA team](/contact-ddbj-e.html).


{% include image.html url="books/gea-bp.jpg" caption="Select a BioProject for the GEA experiment" class="w550" %}


### BioSample  {#BioSample-tab}

Select submitted BioSamples registered in your account. If BioSamples are not registered, please go to the [BioSample submission site](/biosample/submission-e.html#biosample-submission) and submit samples.

To use samples obtained in the other account, please [contact GEA team](/contact-ddbj-e.html).


{% include image.html url="books/gea-bs.jpg" caption="Select BioSamples for the GEA experiment" class="w550" %}


### IDF  {#idf-tab}

Enter information for [IDF (Investigation Description Format)](/gea/metadata-e.html#idf).

[Example IDF](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=0)

- Protocol: Pre-checked protocols are mandatory.
- Publication: Describe associated publications by PubMed ID or DOI. For unpublished manuscript, please [inform us](/contact-ddbj-e.html) the publication ID after assignment.
- Array Design: When an array design is available in [ArrayExpress](https://www.ebi.ac.uk/biostudies/arrayexpress/studies?query=type%3Aarray)/GEA, enter an array design accession number "A-XXXX-n". When an array design is not available, [register a new array design](/gea/adf-e.html) by uploading an array design file into the GEA submission directory.
- Data File Type: Raw and processed data files are required for microarray experiment submission. We strongly recommend to submitting raw and processed data file per sample. [Accepted Data Files Formats for microarray experiment](/gea/datafile-e.html#array_data).


{% include image.html url="books/array-idf.jpg" caption="Enter information for IDF" class="w600" %}


### SDRF  {#sdrf-tab}


{% include image.html url="books/array-sdrf.jpg" caption="Download a SDRF template file" class="w600" %}


Enter information for [SDRF (Sample and Data Relationship Format)](/gea/metadata-e.html#sdrf).

[Example SDRF](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=657626667)

Auto-filled fields.

- Name columns and attribute columns for Source Name: Generated from BioSamples.
- SDRF rows: 1 row for 1 BioSample.
- Protocols: Protocols described in IDF are inserted to appropriate positions of SDRF with temporary protocol IDs (e.g., ESUB000350\_Protocol\_1)
- Technology Type: "array assay" for microarray submission.
- Array Design REF: array design accession or filename described in IDF.

Enter required fields by overwriting \<Required: fill in the content\> tags.

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
- Array Data File and Comment\[Array Data File md5\]: Enter filename and [md5 checksum](#supplement-md5) pair for each raw data file.
- Derived Array Data File and Comment\[Derived Array Data File md5\]: Enter filename and [md5 checksum](#supplement-md5) pair for each processed data file.
- A list of filename and its md5 checksum (output of [md5sum command](#supplement-md5)) can be provided as a file \<GEA submission ID\>.md5 (e.g., ESUB000001.md5) (when the checksum values are provided in both SDRF and .md5 file, those in the .md5 are used).
- Factor Value\[enter experiment factor name here\]: A user-defined name for each experimental factor studied by the experiment. These experimental factors represent the variables within the investigation (e.g. growth condition, genotype, organism part). The actual values of these variables will be listed in the "Factor Value \[\]" columns. Example:
    - Factor Value\[strain\]
    - AT76
    - KU-2003
    - KU-PI499262


{% include image.html url="books/array-sdrf-template.jpg" caption="SDRF template, yellow-highlighted fields need to be filled by submitter" class="w600" %}


Select the entered SDRF file and continue.


{% include image.html url="books/array-sdrf2.jpg" caption="Select entered SDRF file" class="w450" %}


### Overview and submit  {#submit}

You can download the IDF and SDRF files and check them. When correction is necessary, go back to the previous tab and corrent metadata.

Submit the IDF and SDRF metadata by clicking the "Submit" button.


{% include image.html url="books/array-overview.jpg" caption="Check the IDF and SDRF and submit" class="w450" %}


### Validation  {#validation-step}

When data files described in the IDF and SDRF are not found in the submission directory, an error message "Data file is not uploaded" is shown and the submission is aborted.

The validator checks submitted IDF and SDRF files according to the [validation rules](/gea/validation-e.html) and gives warning and error messages. Errors need to be resolved for submission.


{% include image.html url="books/array-validation.jpg" caption="Warning and error messages" class="w500" %}


### Accession number  {#accession}

[GEA accession numbers](/gea/overview-e.html#acc) are issued to completed GEA experiment.

You can allow reviewers access to private records by [communicating a reviewer accesss token](/gea/reviewer-access-e.html).


{% include image.html url="books/array-accession.jpg" caption="GEA accession numbers" class="w500" %}


## Update submission  {#update-submission}

### Update in each database  {#update-in-each-database}

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Database</th>
<th>Update</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/ddbj/index.html">Annotated sequence database</a></td>
<td><a href="/ddbj/update-form-e.html">Request updates from web form</a></td>
</tr>
<tr>
<td>Sequence Read Archive (DRA)</td>
<td><a href="https://ddbj.nig.ac.jp/D-way/">Login D-way and update metadata</a><br />
<a href="/contact-ddbj-e.html">To add or delete sequencing data, request updates from web form</a></td>
</tr>
<tr>
<td>Genomic Expression Archive (GEA)</td>
<td><a href="/contact-ddbj-e.html">Request updates from web form</a></td>
</tr>
<tr>
<td>BioProject/BioSample</td>
<td><a href="/contact-ddbj-e.html">Request updates from web form</a></td>
</tr>
</tbody>
</table>

### Withdraw archived objects  {#withdraw-archived-objects}

To withdrawing archived Experiment, please [contact us](/contact-ddbj-e.html).

## MD5 checksum value {#md5}

See "[MD5 checksum value](/checksum.html)" for how to obtain MD5 checksum values.