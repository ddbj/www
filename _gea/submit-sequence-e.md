---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Submit sequencing experiment
category: gea
current_tab: submission overview
lang: en
---

## GEA submission flow  {#gea-submission-flow}

### 1. Obtain a submission account {#account}

- Create a [D-way submission account](https://ddbj.nig.ac.jp/D-way/).
- To enable GEA submission, [register a public key and a center name to your account](/account-e.html#enable-dra-submission-in-account).

### 2. Register a BioProject, BioSamples and Sequence Read Archive (DRA) {#bioproject-biosample}

BioProject and BioSample registration is required for DRA submission.

#### [BioProject](/bioproject/submission-e.html)  {#BioProject}

- A description of the reseach effort.

#### [BioSample](/biosample/submission-e.html) <img src="/assets/images/parts/tsv.png" alt="" title="" class="tsv"> {#BioSample}

- A description of biologically or physically unique samples used to generate experimental data.

#### [DRA](/dra/submission-e.html) <img src="/assets/images/parts/tsv.png" alt="" title="" class="tsv"> {#DRA}

- Raw sequencing reads and alignments.

<img src="/assets/images/parts/tsv.png" alt="" title="" class="tsv">metadata can be submitted as a tab-delimited text file.

### 3. Upload processed data files {#upload}

- Upload processed data files into the GEA submission directory.

### 4. Select a DRA submission {#DRA-submission}

- Select a DRA submission which contains raw sequencing reads for the GEA submission.
- Select DRA submissions when the GEA experiment has processed data from raw sequencing reads in multiple DRA submissions.

### 5. Select a BioProject {#select-BioProject}

- Select a BioProject used in the DRA submission when the GEA experiment and DRA submission belong to same project.
- Select a BioProject not used in the DRA submission when the GEA experiment and DRA submission belong to different projects.

### 6. Prepare IDF and SDRF {#create-idf-sdrf}

#### IDF  {#idf}

- The IDF (Investigation Description Format) file is used to give an overview of the experiment, including the experimental design, protocols and publication information.

#### SDRF  <img src="/assets/images/parts/tsv.png" alt="" title="" class="tsv"> {#sdrf}

- The SDRF (Sample and Data Relationship Format) describes the sample characteristics and the relationship between samples, data files etc.
- SDRF template is generated from selected BioProject, BioSample(s) and DRA submission(s). Enter additional information.

### 7. Submit IDF and SDRF and validate data files  {#validation}

- After submitting IDF and SDRF metadata in the submission web system, validation of the uploaded data files are automatically started.
- The submission passed validation will be reviewed.

## Pre-submission checklist  {#checklist}

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Single-cell sequencing experiment</a></h4>
<div class="accordion-content">

Refer to [ArrayExpress Single-cell submission guide](https://www.ebi.ac.uk/arrayexpress/help/single-cell_submission_guide.html). Please [contact GEA team](/contact-ddbj-e.html) to upload any additional files for custom spike-ins or to facilitate data analysis.

<a href="javascript:void(0)" class="close-content-btn">[« Close]</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">More than one technology per experiment</a></h4>
<div class="accordion-content">

GEA will ask you for the technology and name of the array, and applies it to the whole submission. If you have used different types of technologies for the same set of samples, we ask you to create separate submissions. Please make sure that the submissions have distinct titles (even though they may belong to the same study), in order to avoid mistakes. If you have samples from more than one array design in your experiment, it is possible to submit only one experiment. If you wish to do this, please [contact GEA team](/contact-ddbj-e.html).

<a href="javascript:void(0)" class="close-content-btn">[« Close]</a>
</div>
</div>

## Sequencing experiment submission  {#seq-sub}

### Create a new submission  {#create-new-submission}

Login [the D-way (https://trace.ddbj.nig.ac.jp/D-way)](https://ddbj.nig.ac.jp/D-way/) and the top page is displayed. Move to the GEA submission site from the "GEA" menu at the top.

Create a new microarray experiment submission by selecting "Sequencing" and clicking the \[New submission\]. At the same time, in the DDBJ file server (ftp-private.ddbj.nig.ac.jp), a corresponding subdirectory is created under the submitter’s GEA upload directory. [Upload data files to this subdirectory](#upload-data).

<div class="attention">
If there is no reply from submitters after three months of initial contact, submissions will be cancelled.
</div>

{::nomarkdown}
{% include image.html url="books/array-sub1.jpg" caption="Create a new submission" class="w450" %}
{:/}

List of submission status is as follows. The GEA team reviews submission whose status is in "submission_validated" or "data_error".

List of submission status
{: .tablecaption}

| Status            | Explanation                            |
|---|
| New              | Metadata are not submitted.                     |
| Data Submitted   | Metadata and data files are submitted.            |
| Data Validating  | Validating data files.                 |
| Validation Error | Error occurred in data validation process.               |
| Data Validated   | Metadata and data are validated.         |
| Curating         | Curator is reviewing the submission.                  |
| Accession Issued | Accession number is issued to the submission.               |
| Confidential     | Archive files are created and submission is kept private |
| Public           | Released to public.                     |

### Upload processed data files {#upload-data} 

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Upload files by using terminal (Linux/Mac OS X)</a></h4>
<div class="accordion-content">

Upload files by executing,

- \<Your Files\> Files to be transferred. Ex: file1 file2 (file1 and file2), file\* (all files whose filenames start with "file")
- \<D-way Login ID\> D-way Login ID (ex. test07)
- \<GEA Submission ID\> GEA Submission ID (ex. ESUB000350)
- command example: scp Arabidopsis_control_rep_1.CEL test07@ftp-private.ddbj.nig.ac.jp:\~/gea/ESUB000350

Enter the passphrase set for the keys.

You can directly handle the transferred files by logging in the server. SSH login the server by executing,

Enter the passphrase set for the keys.

After logging in successfully, the following prompt is displayed.

The login environment is private for the submitter. Users other than the submitter cannot access the data. Executable commands are restricted to the following ones. Users can delete unnecessary files.

<a href="javascript:void(0)" class="close-content-btn">[« Close]</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Upload files by using WinSCP (Windows)</a></h4>
<div class="accordion-content">

<iframe width="560" height="315" src="https://www.youtube.com/embed/gJqgCvUc0Y8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Submission to DRA ～upload data files (Windows)～

Install and run the ["WinSCP" (http://winscp.net/eng/download.php)](http://winscp.net/eng/download.php).

Set items as below and click the \[Advanced...\] button.

<div class="attention">
Be sure to select the "binary mode" for file transfer. Do NOT select the "text mode".
</div>

- File protocol: SFTP
- Host name: ftp-private.ddbj.nig.ac.jp
- Port number: 22
- User name: (D-way Login ID)
- Password: (Leave empty)

<a href="/assets/images/books/winscp1_400.jpg" title="privatekey1" class=""><img src="/assets/images/books/winscp1_400.jpg" alt="" title="" class="w300"></a>

Please select the private key, which you created beforehand, from "Private key file" in "Authentication".

<a href="/assets/images/books/winscp2_400.jpg" title="privatekey2" class=""><img src="/assets/images/books/winscp2_400.jpg" alt="" title="" class="w300"></a>

Last, click the \[Login\] button in the lower center

<a href="/assets/images/books/winscp3_400.jpg" title="login to winSCP" class=""><img src="/assets/images/books/winscp3_400.jpg" alt="" title="" class="w300"></a>

At the first time of login, a warning message is displayed; however, please select "Yes" (this message will not be displayed again). Next, enter the passphrase set for the keys.

After login successfully, a folder of your PC is displayed at left, and your private directory in the server is displayed at right. Select the files at the left window and drag & drop them into the right window to transfer the files to the server.

<a href="/assets/images/books/winscp4_400.jpg" title="transfer files" class=""><img src="/assets/images/books/winscp4_400.jpg" alt="" title="" class="w500"></a>

You can delete the transferred files by selecting the files and clicking the \[Delete\] button.

<a href="javascript:void(0)" class="close-content-btn">[« Close]</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Upload sequence data by using Cyberduck (Mac OS X)</a></h4>
<div class="accordion-content">

<iframe width="560" height="315" src="https://www.youtube.com/embed/aO2aVafS3ZE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Submission to DRA ～upload data files (Mac) ～

Download and install [the Cyberduck (http://cyberduck.ch)](http://cyberduck.ch).

Run the Cyberduck and click the \[Open Connection\] button in the Cyberduck menu.

<a href="/assets/images/books/Cyberduck_1.jpg" title="open connection" class=""><img src="/assets/images/books/Cyberduck_1.jpg" alt="" title="" class="w300"></a>

Select "SFTP (SSH File Transfer Protocol)" .

<a href="/assets/images/books/Cyberduck_2.jpg" title="SFTP in the WinSCP" class=""><img src="/assets/images/books/Cyberduck_2.jpg" alt="" title="" class="w300"></a>

Set as follows and tick off "Use Public Key Authentication" in the More Options.

- Server: ftp-private.ddbj.nig.ac.jp
- Port: 22
- Username: (D-way Login ID)
- Password: (Leave empty)
- Add to Keychain: (Check)

<a href="/assets/images/books/Cyberduck_3.jpg" title="key authentication" class=""><img src="/assets/images/books/Cyberduck_3.jpg" alt="" title="" class="w300"></a>

By default, the private key is created in "User’s home folder \> .ssh folder (invisible in Finder) \> id\_rsa".

<a href="/assets/images/books/Cyberduck_4.jpg" title="private_key" class=""><img src="/assets/images/books/Cyberduck_4.jpg" alt="" title="" class="w300"></a>

At the first time of login, a warning message is displayed; however, please select "Always" (this message will not be displayed again).

After login successfully, your private directory in the server is displayed in the window. Select the files in your PC and drag & drop them into the window to transfer the files to the server.

<a href="/assets/images/books/Cyberduck_5.jpg" title="transfer" class=""><img src="/assets/images/books/Cyberduck_5.jpg" alt="" title="" class="w500"></a>

<a href="javascript:void(0)" class="close-content-btn">[« Close]</a>
</div>
</div>

<div class="attention">
Users can ssh login ftp-private.ddbj.nig.ac.jp server by using a private key. Executable commands are restricted to the following ones. Users can delete unnecessary files.  
ls cd cp mv rm more mkdir tar gzip gunzip bzip2 bunzip2 zip unzip
</div>

### Submission  {#Submission-tab}

Set the hold date within four years. Submitters' name and affiliation will be public but e-mail address will not be disclosed.

<div class="attention">
You can delete an un-submitted GEA submission.
</div>

{::nomarkdown}
{% include image.html url="books/array-sub2.jpg" caption="Enter submission information" class="w550" %}
{:/}

### DRA  {#DRA-tab}

Select a DRA submission registered in your account. If DRA submission is not registered, please go to the [DRA submission site](/dra/submission-e.html#dra-submission) and submit DRA.

To use DRA submissions obtained in the other account, please [contact GEA team](/contact-ddbj-e.html).

{::nomarkdown}
{% include image.html url="books/seq-dra.jpg" caption="Select a DRA submission for the GEA experiment" class="w550" %}
{:/}

### BioProject  {#BioProject-tab}

Select a project registered in your account. If a BioProject is not registered, please go to the [BioProject submission site](/bioproject/submission-e.html#bioproject-submission) and submit a project.

Select a BioProject used in the DRA submission when the GEA experiment and DRA submission belong to same project (usual case). When the GEA experiment and DRA submission belong to different projects, select a BioProject not used in the DRA submission.

To use a project obtained in the other account, please [contact GEA team](/contact-ddbj-e.html).

{::nomarkdown}
{% include image.html url="books/seq-bp.jpg" caption="Select a BioProject for the GEA experiment" class="w550" %}
{:/}

### IDF  {#idf-tab}

Enter information for [IDF (Investigation Description Format)](/gea/metadata-e.html#idf).

[Example IDF](/gea/example-e.html#idf).

- Protocol: Pre-checked protocols are mandatory.
- Publication: Describe associated publications by PubMed ID or DOI. For unpublished manuscript, please [inform us](/contact-ddbj-e.html) the ID after assignment.
- Data File Type: Processed data files are required for sequencing experiment submission. [Accepted Data Files Formats for sequencing experiment](/gea/datafile-e.html#seq_data). We strongly recommend to submitting processed data file per sample.

{::nomarkdown}
{% include image.html url="books/seq-idf.jpg" caption="Enter information for IDF" class="w600" %}
{:/}

### SDRF  {#sdrf-tab}

{::nomarkdown}
{% include image.html url="books/seq-sdrf-down.jpg" caption="Download a SDRF template file" class="w400" %}
{:/}

Enter information for [SDRF (Sample and Data Relationship Format)](/gea/metadata-e.html#sdrf).

[Example SDRF](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=513795053).

Auto-filled fields.

- Name columns and attribute columns for Source Name: Generated from BioSamples.
- SDRF rows: 1 row for 1 Run.
- Protocols: Protocols described in IDF are inserted to appropriate positions of SDRF with temporary protocol IDs (e.g., ESUB000352\_Protocol\_1)
- Technology Type: "sequencing assay" for sequencing submission.
- SRA Experiment and Run Comments to Extract and Assay Names: Generated from DRA Experiment and Run.

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
- Derived Array Data File and Comment\[Derived Array Data File md5\]: Enter filename and [md5 checksum](#supplement-md5) pair for each processed data file.
- A list of filename and its md5 checksum (output of [md5sum command](#supplement-md5)) can be provided as a file \<GEA submission ID\>.md5 (e.g., ESUB000001.md5) (when the checksum values are provided in both SDRF and .md5 file, those in the .md5 are used).
- Factor Value\[enter experiment factor name here\]: A user-defined name for each experimental factor studied by the experiment. These experimental factors represent the variables within the investigation (e.g. growth condition, genotype, organism part). The actual values of these variables will be listed in the "Factor Value \[\]" columns. Example:
    - Factor Value\[strain\]
    - AT76
    - KU-2003
    - KU-PI499262

{::nomarkdown}
{% include image.html url="books/seq-sdrf-template.jpg" caption="SDRF template, yellow-highlighted fields need to be filled by submitter" class="w600" %}
{:/}

Select the entered SDRF file and continue.

{::nomarkdown}
{% include image.html url="books/seq-sdrf-up.jpg" caption="Select entered SDRF file" class="w450" %}
{:/}

### Overview and submit  {#submit}

You can download the IDF and SDRF files and check them. When correction is necessary, go back to the previous tab and corrent metadata.

Submit the IDF and SDRF metadata by clicking the "Submit" button.

{::nomarkdown}
{% include image.html url="books/seq-submit.jpg" caption="Check the IDF and SDRF and submit" class="w450" %}
{:/}

### Validation  {#validation-step}

When data files described in the IDF and SDRF are not found in the submission directory, an error message "Data file is not uploaded" is shown and the submission is aborted.

The validator checks submitted IDF and SDRF files according to the [validation rules.](/gea/validation-e.html) and gives warning and error messages. Errors need to be resolved for submission.

{::nomarkdown}
{% include image.html url="books/seq-validation.jpg" caption="Warning and error messages" class="w500" %}
{:/}

### Accession numbers  {#accession}

[GEA accession numbers](/gea/overview-e.html#acc) are issued to the completed GEA experiment. You can allow reviewers access to private records by [communicating a reviewer accesss token](/gea/reviewer-access-e.html).

{::nomarkdown}
{% include image.html url="books/seq-accession.jpg" caption="GEA accession numbers" class="w500" %}
{:/}

## Update submission  {#update-submission}

### Update in each database  {#update-in-each-database}

<table>
<thead>
<tr>
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
<a href="/contact-ddbj-e.html">To add or withdraw sequencing data, request updates from web form</a></td>
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

## Supplement: MD5 {#supplement-md5} 

MD5 (Message Digest Algorithm 5) is a hash function which calculates a hash value (MD5 number, 32-digit numbers and letters) of a given file. Because the MD5 number of the damaged file is distinct from the original one, we can check whether the transferred file is intact or not by comparing the numbers before and after the file transfer.

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)">Obtain MD5 number (Linux)</a></h3>
<div class="accordion-content">

Obtain the MD5 numbers of the files by executing,

```
$ md5sum file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
```

<a href="javascript:void(0)" class="close-content-btn">[« Close]</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)">Obtain MD5 number (Mac OS X)</a></h3>
<div class="accordion-content">

Obtain the MD5 numbers of the files by executing,

```
$ md5 file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
```

<a href="javascript:void(0)" class="close-content-btn">[« Close]</a>
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)">Obtain MD5 number (Windows)</a></h3>
<div class="accordion-content">

Install and run the [Fsum Frontend (sourceforge.net/projects/fsumfe/)](//sourceforge.net/projects/fsumfe/).  
At first, tick off "md5".

<a href="/assets/images/books/Fsum1.jpg" title="Generate md5 in the tool 1" class=""><img src="/assets/images/books/Fsum1.jpg" alt="" title="" class="w500"></a>

After clicking the \[+\] button, open the sequence data files that you need. You can select multiple files at the same time.

<a href="/assets/images/books/Fsum2.jpg" title="Generate md5 in the tool 2" class=""><img src="/assets/images/books/Fsum2.jpg" alt="" title="" class="w500"></a>

Click the \[Calculate hashes\] button. The MD5 numbers of the files are displayed.  
By clicking the \[Export\] button, you can obtain the list of the MD5 numbers as a html, a csv, or a xml file.

<a href="/assets/images/books/Fsum3.jpg" title="Generate md5 in the tool 3" class=""><img src="/assets/images/books/Fsum3.jpg" alt="" title="" class="w500"></a>

<a href="javascript:void(0)" class="close-content-btn">[« Close]</a>
</div>
</div>
