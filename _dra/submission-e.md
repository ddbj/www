---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: DRA Submission
category: dra
current_tab: submission
lang: en
---

<div class="attention" markdown="1">
Submission of research data from human subjects  
: <span class="red">For submitting data from human subjects (human data) to the
databases of DDBJ center, it is submitter's responsibility to ensure
that the dignity and right of human subject are protected in
accordance with all applicable laws, ordinances, guidelines and
policies of submitter's institution. In principle, make sure to
remove any direct personal identifiers of human subjects from your
data to be submitted. Before submitting human data, read the
"[Submission of research data from human subjects](/policies-e.html#submission-of-human-data)".</span>
</div>

## Submission flow {#flow}

### 1. Obtain a submission account {#step-account}

Obtain a [D-way submission account](/account-e.html) and 
[register a public key and a center name to the account](/account-e.html#enable-dra-submission-in-account) to enable DRA submission.

### 2. Create a new DRA submission {#step-new-submission}

Login [D-way](https://ddbj.nig.ac.jp/D-way) and [create a new submission](#new-submission).

### 3. Upload data files {#step-upload}

Before submitting [metadata](/dra/metadata-e.html), [upload sequencing data files](/upload-e.html) to the DRA submission directory of the file server.

### 4. BioProject submission {#step-BioProject}

Newly submit a project to [BioProject](/bioproject/submission-e.html) or select a project from registered projects.

### 5. BioSample submission  {#step-BioSample}

Newly submit samples from which sequencing data was obtained to [BioSample](/biosample/submission-e.html) or select samples from registered samples.

### 6. DRA Experiment submission {#step-Experiment}

Submit sequencing libraries and instruments information as [DRA Experiments](#experiment).

### 7. DRA Run submission {#step-Run}

Submit sequencing data files as [DRA Runs](#run).

### 8. Data file validation  {#step-validation}

Start the [validation process](#validation) to check the format and content of submitted data files.

### 9. Accession numbers assignment {#step-accession}

After the submission passes the validation, [DRA accession numbers](#accession) are assigned.

## DRA submission {#submit}

## Create a new submission  {#new-submission}

Login [D-way](https://ddbj.nig.ac.jp/D-way/) and move to the DRA submission site from the "DRA" menu at the top.  
Create a new submission by [New submission]. At the same time, in the DRA file server (ftp-private.ddbj.nig.ac.jp), the
corresponding directory is created under the submitter’s home.  
[Upload sequence data files to this directory](/upload-e.html).

<div class="attention">
* If there is no reply from submitters after three months of initial contact, submissions will be cancelled.
* All data in a submission are released at the same time. If you want to release data at different time, please divide a submission.
* Maximum numbers of objects per submission are, BioSample:1,000, DRA:2,000 (Runs) and GEA:1,000 (Assays). If you have objects more than these limits, please create multiple submissions with the same BioProject reference.
</div>

{% include image.html url="books/hdra01.jpg" caption="Create a new submission" class="w500" %}

You can monitor the submission process by the submission status. 
The DRA team reviews submission whose status is in "submission_validated" or "data_error".

List of submission status
{: .tablecaption}

| Status                | Explanation                                                   |
|---|
| New                   | Metadata has not been submitted.                              |
| metadata_submitted   | Metadata has been submitted.                                  |
| data_validating      | Validating data files.                                        |
| data_error           | Error occurred in data validation process.                    |
| submission_validated | Metadata and data have been validated.                        |
| completed             | Accession numbers have been issued.                           |
| confidential          | Archive files has been created and submission is kept private |
| Public                | Released to public.                                           |

## Upload sequence data  {#upload} 

Upload data files to the corresponding DRA submission directory on the file server.   
Regarding how to upload your data files, please see "[Data upload](/upload.html)".

## Metadata submission {#submit-metadata}

You may submit the metadata in two ways, one is "[Submit metadata by the web tool](#metadata-web)" and second is "[Submit metadata by the excel](#metadata-excel)".    
When it is difficult to submit large-scale metadata (exceeds 100 Runs) by using the web tool whose resnposen is slow, it is recommended to submit the metadata by the metadata excel and XMLs generated from the excel.    

### Submit metadata by the web tool  {#metadata-web} 

Move to the submission detail page by clicking the submission ID.

{% include image.html url="books/hdra02.jpg" caption="Move to the submission page" class="w500" %}

Click the [Enter/Update metadata] to run the DRA metadata submission web tool.

{% include image.html url="books/hdra03.jpg" caption="run the DRA metadata creation tool" class="w500" %}

When no file is uploaded to the submission directory, following message is displayed. 
Then [upload data files](/upload-e.html).

The metadata are composed of following objects.  
Reference BioProject and BioSample records in the other databases.

* Submission (DRA)
* BioProject
* BioSample
* Experiment (DRA)
* Run (DRA)
* Analysis (DRA, optional)

Enter the content in English.   
Required items are marked with <span class="red">*</span>.  
The entered content is checked when submitters click the [Save] button or before moving to the other tab. When error messages are displayed, please revise the content.

The web tool supports metadata preparation by tab-delimited text (tsv) files. 
For examples, please see the [Metadata tsv examples sheet](https://docs.google.com/spreadsheets/d/1DTdUQ-WWOMjOA2eYQWmFYUB24hJysuwhvHLJoDFX4rc).

## Submission  {#Submission}

Enter submission information regarding data release and submitters. 

{% include image.html url="books/hdra-submission01.jpg" caption="Enter metadata in the tool" class="w500" %}

## Study  {#study}

<div class="attention">
When the Study and Sample tab contents are not displayed, please open them by using Edge or Firefox.
</div>

Select a project registered in the account or newly submit a project from [New submission].  
To reference a project registered in the other account, please [contact the DRA team](/contact-ddbj-e.html).

{% include image.html url="books/hdra-bp01.jpg" caption="Select a registered project or submit a new one" class="w500" %}

Please see "[Project Submission](/bioproject/submission-e.html#metadata)" page for how to submit your project.
Submitter information is copied to BioProject by that of the DRA submission.

After submitting a project, submitted project is selected in the Study tab. 

{% include image.html url="books//hdra-bp04.jpg" caption="Submitted project is selected" class="w500" %}

## Sample  {#sample}

Select samples (more than one sample is common in the DRA submission) registered in the account or newly submit samples from [New submission].    
To select a range of samples, first check a checkbox and click next box with pressing the "Shift".  
Filter samples by entering text in the upper box, and click [Select filtered BioSamples] to select all filtered samples.  
To reference samples registered in the other account, please [contact the DRA team](/contact-ddbj-e.html).   

{% include image.html url="books/hdra-bs01.jpg" caption="Select registered samples or submit new samples" class="w500" %}

Please see the "[Sample Submission](/biosample/submission-e.html)" page for how to submit your samples.

After submitting BioSamples, submitted BioSamples are selected in the Sample tab.

{% include image.html url="books/hdra-bs06.jpg" caption="Submitted BioSamples are selected" class="w500"%}

## Experiment  {#experiment}

Experiment and Run as same as selected BioSamples are automatically created. 
Each BioSample,Experiment and Run are referenced.   
The Experiment and Run are automatically generated when the Experiment tab is initially displayed. Newly selected samples are not reflected after the initial Experiment tab display.

Auto-generation of Experiments and Runs after selecting three BioSamples.
| BioProject | - BioSample (1) | - Experiment (1) | - Run (1) |
|            | - BioSample (2) | - Experiment (2) | - Run (2) |
|            | - BioSample (3) | - Experiment (3) | - Run (3) |

Add an Experiment by clicking [Add new Experiment(s)]. 
Delete an Experiment by clicking [Delete]. 
Experiment referenced by Run cannot be deleted.

{% include image.html url="books/hdra-experiment01.jpg" caption="Experiment referencing selected BioSample, is automatically created" class="w500" %}

Experiments can be submitted in a tab-delimited text file. 
First save and fix Aliases (e.g., test07-0040_Experiment_0001-0003) by clicking [Save]. 
Alias is used as a name until accession numbers are issued.

Download content into a tab-delimited text file by clicking [Download TSV file].

{% include image.html url="books/hdra-experiment02.jpg" caption="Save, fix aliases and download as a tab-delimited text file" class="w500" %}

Metadata can be editted in spreadsheet software (e.g. Excel).

If "Title" values are empty, titles are automatically constructed as
"[Sequencing Instrument Model] [paired end] sequencing of
[BioSample ID]" (e.g., "Illumina HiSeq 2000 paired end sequencing of
SAMD00025741"). It is recommended to provide user-defined text in the "Title".

Reference samples in "BioSample Used" by SAMD accessions (example, SAMD00000001) or "SSUB BioSample Submission ID"
: "Sample name" (example, SSUB003746 : Genome bacteria strain A). Spaces
around ":" are ignored.

{% include image.html url="books/hdra-experiment03.jpg" caption="Experiment template file" class="w500" %}

Save editted content in a tab-delimited text file and select and upload
it by clicking the [Upload TSV file].

{% include image.html url="books/hdra-experiment04.jpg" caption="Upload Experiment in a tab-delimited text file" class="w500" %}

<div class="attention">
Upload in tab-delimited text file and NOT in spreadsheet software specific format (.xlsx).
</div>

## Run  {#run}

Experiment and Run as same as selected BioSamples are automatically created. Each Run references unique Experiment.

In this example, three Runs are created and each Run references unique Experiment.

Add Run by clicking [Add another Run(s)]. 
Delete Run by clicking [Delete]. Run linked to files cannot be deleted.

{% include image.html url="books/hdra-run01.jpg" caption="Save and fix Aliases" class="w500" %}

After fixing aliases by clicking the [Save], run content can be
downloaded into a tab-delimited text file. To distinguish the data files
for Run, enter "Run" in the leftmost "Run/Analysis" column.

Click [Select data files for Run] and link uploaded files to Run.

{% include image.html url="books/hdra-run02.jpg" caption="Move to next site to link files to Run" class="w500" %}

All files uploaded to the submission directory are shown. Associate a
file to a Run by selecting a Run alias in "Run/Analysis contains files".

Enter [File type](/dra/metadata-e.html#File_Type) and [MD5 Checksum](/checksum-e.html) for files. 
File attributes can be entered by uploading a tab-delimited text file.

<div class="attention">
Paired-end data files must be listed in a single run in order for the two files to be correctly processed as paired-end.
</div>

{% include image.html url="books/hdra-runfinish.jpg" caption="Enter file attributes and link files to Run" class="w500" %}

When an Analysis (optional) is unnecessary, submit metadata by clicking
the [Submit/Update DRA metadata].

{% include image.html url="books/hdra-submit01.jpg" caption="Submit DRA metadata" class="w500" %}

After submitting DRA metadata, start validation of data files. 
Click the link "Validate uploaded data files to finish this submission".

{% include image.html url="books/hdra-submit02.jpg" caption="Go to data validation after submitting metadata" class="w500" %}

## Analysis (optional)  {#analysis}

You may submit data files related to the Run sequenicng data which do not have dedicated databases to Analysis. Analysis data are not shared with NCBI and EBI.   
Please check databases to be submitted in the "[Submission Navigation](/submission-navigation.html)" and "[Databases and Data Submission Systems](/submission-e.html)".

Create Analysis as many as required, enter content of each Analysis. 
Unnecessary Analysis can be deleted by clicking [Delete].

Click [Select data files for Analysis] and link files to Analysis.

{% include image.html url="books/hdra-analysis01.jpg" caption="Enter Analysis content" class="w500" %}

Enter file attributes and associate them with Analysis. When submitting
the file attributes by uploading the tab-delimited text file, to
distinguish the data files for Analysis, enter "Analysis" in the
leftmost "Run/Analysis" column.

{% include image.html url="books/hdra-analysisfile01.jpg" caption="Enter file attributes and link files to Analysis" class="w500" %}

Submit DRA metadata by clicking [Submit/Update DRA metadata] and
proceed to data validation process. Only MD5 of analysis files are checked during validation.

<div class="attention">
For large number of analysis, please submit them by using [Analysis metadata excel](/dra/analysis-e.html).
</div>

## Submit metadata by the excel {#metadata-excel}

Sometimes it is difficult to submit large-scale metadata (exceeds 100 Runs) by using the web tool whose response is too slow, 
please submit the metadata by the excel.

Before filling in the metadata excel, you need to finish followings.

* [BioProject submission](#study)
* [BioSample submission](#sample)
* [Create a new DRA submission](#new-submission)
* [Upload sequencing data files](#upload)

Download the [DRA metadata excel](https://github.com/ddbj/submission-excel2xml/raw/master/metadata_dra.xlsx) and describe your metadata. 
[Example excel](https://github.com/ddbj/submission-excel2xml/raw/master/example-0001_dra_metadata.xlsx) 

Next, [upload XMLs generated from the excel](#upload-xml) or [send the excel by email attachment](#send-metadata-excel).

### Upload XMLs generated from the excel {#upload-xml}

Please upload XMLs if you are familiar with command lines.

You can submit metadata by uploading XMLs in the D-way submission page by using [the metadata excel](https://github.com/ddbj/submission-excel2xml/raw/master/metadata_dra.xlsx) and container images.   
Generate metadata XMLs according to the [GitHub](https://github.com/ddbj/submission-excel2xml) page.

To add XML elements not covered by the web tool nor the excel such as technical reads, please refer to the [metadata XML examples](/dra/example-xml-e.html).

Login [D-way](https://ddbj.nig.ac.jp/D-way) and move to the DRA submission page.  
Following is an example of uploading the Submission/Experiment/Run XMLs to the DRA submission "test07-0040".

<a href="/assets/images/books/hdra-xmlupload.jpg" title="Upload metadata XMLs" class="group1"><img src="/assets/images/books/hdra-xmlupload.jpg" alt="Upload metadata XMLs" title="Upload metadata XMLs" class="w500"></a>

### Send the excel by email attachment  {#send-metadata-excel}

Send us the excel by email attachment if you are not familir with command lines.

Send your metadata excel with DRA submission ID by the [email attachment](mailto:trace@ddbj.nig.ac.jp).  
DRA curator generates XMLs and upload them instead of you.  
After uploading the XMLs, the curator send backs the metadata in a table file. 
Please check the file and proceed to the [data file validation step](#validation-data-files) if the file is correct.

### Validation of data files {#validation-data-files}

The MD5 value, file format and content of data files are validated during the validation process.

In the "Data Files", filenames in the Run and Analysis, MD5 values in
the Run and Analysis and those of uploaded files, are displayed.

Click [Validate data files] and validate uploaded data files.

{% include image.html url="books/hdra-validate.jpg" caption="UStart validationo of data files" class="w500" %}

### MD5 Check  {#MD5_Check}

Consistency between the MD5 values in the metadata and those of uploaded files are checked. Inconsistency in the MD5 values cause errors. 
Calculate the MD5 values of the files at your local computer and compare them to those in the metadata. If the values are same, the file may be corrupted during file transfer, so re-upload the files.  
When the values in the metadata are wrong, revise the values in the metadat by clicking [Enter/Update metadata].

### Data Check  {#Data_Check}

The format and content of data files are validated. 
If no errors occur, submission status become "submission_validated", and validated files are moved to separate directory.

The DRA staff review submissions with status "submission_validated".
Please do not touch submissions until the DRA staff contact submitters.

### Response to data_error  {#data_error}

Any errors in the validation process make the submission status to "data_error". 
Please see [FAQ: How to deal with validation errors?](/faq/en/data-validation-error) regarding how to response to errors.  
Clicking [Stop validation] button and the status backs to "metadata_submitted". 
Then revise metadata and/or re-upload data files and start validation again by clicking [Validate data files].

{% include image.html url="books/hdra-error.jpg" caption="Stop validation" class="w500" %}

{% include image.html url="books/hdra-edit.jpg" caption="Revise submission" class="w500" %}

## Accession numbers  {#accession-numbers}

When both the metadata and sequence data are validated (Status
"submission_validated"), accession numbers with the prefix DR are assigned. 
Accession numbers are displayed in the "Component".

* Submission (prefix DRA)
* Experiment (prefixDRX)
* Run (prefixDRR)
* Analysis (prefix DRZ)

Regarding how to cite accession numbers, see [FAQ: Which accession numbers should be cited in publication?](/faq/en/cite-accession-e.html).

## Data release  {#data-release}

After the registered data is loaded into the database, the Status becomes "complete (private)". 
When the immediate release is set for the submission, data files are released at [ftp](https://ddbj.nig.ac.jp/public/ddbj_database/dra/) in midnight and will be indexed in the [DDBJ Search](https://ddbj.nig.ac.jp/search) in a few days. 
The public data will be mirrored by [NCBI SRA](https://www.ncbi.nlm.nih.gov/Traces/sra/sra.cgi) and [EBI SRA](https://ebi.ac.uk/ena).

* The DRA submissions are released accoring to the [data release policy](/policies-e.html#data-release).
* Please see FAQ: [How are linked BioProject/BioSample/sequence data released?](/faq/en/bp-bs-seq-release.html) for additional information.

<div class="attention">
All data in a submission are released at the same time. If you want to release data at different time, please divide a submission.
</div>

### Limited-time access to archived fastq/SRA files  {#fastq-sra-files}

To allow submitter to download and check archived fastq/SRA files, the
files are copied to the following directories on the
ftp-private.ddbj.nig.ac.jp server. To save disk space, the copied files
are automatically deleted in one month.

- (submitter's home)/report/dra/(DRA submission accession)/fastq/
- (submitter's home)/report/dra/(DRA submission accession)/sra/

Example:

- submitter/report/dra/DRA000001/fastq/DRR000001.fastq.bz2
- submitter/report/dra/DRA000001/fastq/DRR000002.fastq.bz2
- submitter/report/dra/DRA000001/fastq/DRR000002_1.fastq.bz2
- submitter/report/dra/DRA000001/fastq/DRR000002_2.fastq.bz2
- submitter/report/dra/DRA000001/sra/DRR000001.sra
- submitter/report/dra/DRA000001/sra/DRR000002.sra

## Data update {#update-submission}

[DRA Update](/dra/update-e.html)