---
layout: indexed_content
title: Submit microarray experiment
pathname: submit-array-e
category: gea
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /gea/index-e.html
  - id: submission overview
    title: Submission Overview
    url: /gea/overview-e.html
    children:
      - title: Submit microarray experiment
        url: /gea/submit-array-e.html
      - title: Submit sequencing experiment
        url: /gea/submit-sequence-e.html
      - title: Metadata
        url: /gea/metadata-e.html
      - title: Data File
        url: /gea/datafile-e.html
      - title: Validation
        url: /gea/validation-e.html
      - title: Single-cell submission guide
        url: /gea/single-cell-e.html
      - title: Example
        url: /gea/example-e.html
      - title: Array Design
        url: /gea/adf-e.html
      - title: Data matrix
        url: /gea/matrix-e.html
      - title: Reviewer Access
        url: /gea/reviewer-access-e.html
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html
  - id: search
    title: Search (AOE)
    url: http://aoe.dbcls.jp/
    children:
      - title: RefEx
        url: http://refex.dbcls.jp/index.php?lang=en
      - title: Search (ArrayExpress)
        url: https://www.ebi.ac.uk/arrayexpress/browse.html
  - id: downloads
    title: Downloads
    url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/gea
  - id: about gea
    title: About GEA
    url: /gea/about-gea-e.html
lang: en
---

## GEA submission flow <a name="gea-submission-flow"></a>

### 1\. Obtain a submission account

  - Create a [D-way submission account](https://ddbj.nig.ac.jp/D-way/).
  - To enable GEA submission, [register a public key and a center name to your account](/account-e.html#enable-dra-submission-in-account).

### 2\. Register a BioProject and BioSample(s)

#### [BioProject](/bioproject/submission-e.html) <a name="BioProject"></a>

  - A description of the reseach effort.

#### [BioSample](/biosample/submission-e.html) <a name="_BioSample"></a> ![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv} 

  - A description of biologically or physically unique samples used to generate experimental data.

![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv}
metadata can be submitted as a tab-delimited text file.

### 3\. Upload raw and processed data files

  - Upload raw and processed data files into the GEA submission directory.
  - \[Optional\] When an array design is not available in [ArrayExpress](https://www.ebi.ac.uk/arrayexpress/arrays/browse.html)/GEA, upload an array design file into the GEA submission directory along with data files.

### 4\. Select a BioProject and BioSample(s)

  - Select a registed BioProject for the GEA submission.
  - Select registed BioSample(s) for the GEA submission. Majority of GEA submissions require more than one sample.

### 5\. Prepare IDF and SDRF

#### IDF <a name="idf"></a> 

  - The [IDF (Investigation Description Format)](/gea/metadata-e.html#idf) file is used to give an overview of the experiment, including the experimental design, protocols and publication information.

#### SDRF <a name="SDRF"></a> ![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv}

  - The [SDRF (Sample and Data Relationship Format)](/gea/metadata-e.html#sdrf) describes the sample characteristics and the relationship between samples, arrays, data files etc.
  - SDRF template is generated from selected BioProject and BioSample(s). Enter additional information.

### 6\. Submit IDF, SDRF and validate data files 

  - After submitting IDF and SDRF in the submission web system, [validation](/gea/validation-e.html) of the uploaded data files will automatically begin.
  - The submission passed validation will be reviewed.

## Pre-submission checklist <a name="checklist"></a>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Two-color microarray experiment</a></h4>
<div class="accordion-content">

At the moment GEA submission interface only supports one type of two-color workflow ([see graphic here](/gea/example-e.html#sdrf_example2)), where two samples are connected with one common raw data file, which includes both channels.
If you select the dual-channel option in the IDF tab, it will expect that you provide one file for the two samples that were hybridized together. Some recent two-color microarray technologies generate two separate raw data files (usually one for each channel), which will cause validation to fail (if you connect a single file per sample).

If you have separate files for each channel, please [contact GEA team](/contact-ddbj-e.html).

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Single-cell sequencing experiment</a></h4>
<div class="accordion-content">

Refer to [ArrayExpress Single-cell submission guide](https://www.ebi.ac.uk/arrayexpress/help/single-cell_submission_guide.html).
Please [contact GEA team](/contact-ddbj-e.html) to upload any additional files for custom spike-ins or to facilitate data analysis.

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">More than one technology per experiment</a></h4>
<div class="accordion-content">

GEA will ask you for the technology and name of the array, and applies it to the whole submission. If you have used different types of technologies for the same set of samples, we ask you to create separate submissions. Please make sure that the submissions have distinct titles (even though they may belong to the same study), in order to avoid mistakes. If you have samples from more than one array design in your experiment, it is possible to submit only one experiment. If you wish to do this, please [contact GEA team](/contact-ddbj-e.html).

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

## Microarray experiment submission <a name="array-sub"></a>

### Create a new submission <a name="create-new-submission"></a>

Login [the D-way (https://trace.ddbj.nig.ac.jp/D-way)](https://ddbj.nig.ac.jp/D-way/) and the top page is displayed. Move to the GEA submission site from the "GEA" menu at the top.

Create a new microarray experiment submission by selecting "Microarray" and clicking the \[New submission\]. At the same time, in the DDBJ file server (ftp-private.ddbj.nig.ac.jp), a corresponding subdirectory is created under the submitter’s GEA upload directory. [Upload data files to this subdirectory](#upload-data).

<div class="attention red">

If there is no reply from submitters after three months of initial contact, submissions will be cancelled.

</div>

{::nomarkdown}
{% include image.html url="books/array-sub1.jpg" caption="Create a new microarray experiment submission" class="w450" %}
{:/}

List of submission status is as follows. The GEA team reviews submission whose status is in "submission\_validated" or "data\_error".

List of submission status
{: .tablecaption}

| Status           | Explanation                                              |
| ---------------- | -------------------------------------------------------- |
| New              | Metadata are not submitted.                              |
| Data Submitted   | Metadata and data files are submitted.                   |
| Data Validating  | Validating data files.                                   |
| Validation Error | Error occurred in data validation process.               |
| Data Validated   | Metadata and data are validated.                         |
| Curating         | Curator is reviewing the submission.                     |
| Accession Issued | Accession number is issued to the submission.            |
| Confidential     | Archive files are created and submission is kept private |
| Public           | Released to public.                                      |

{::options parse_block_html="true"/}
### Upload raw and processed data files<a name="upload-data"></a> 

{::options parse_block_html="true"/}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Upload files by using terminal (Linux/Mac OS X)</a></h4>
<div class="accordion-content">

Upload files by executing,

  - \<Your Files\> Files to be transferred. Ex: file1 file2 (file1 and file2), file\* (all files whose filenames start with "file")
  - \<D-way Login ID\> D-way Login ID (ex. test07)
  - \<GEA Submission ID\> GEA Submission ID (ex. ESUB000350)
  - command example: scp Arabidopsis\_control\_rep\_1.CEL test07@ftp-private.ddbj.nig.ac.jp:\~/gea/ESUB000350

Enter the passphrase set for the keys.

You can directly handle the transferred files by logging in the server. SSH login the server by executing,

Enter the passphrase set for the keys.

After logging in successfully, the following prompt is displayed.

The login environment is private for the submitter. Users other than the submitter cannot access the data. Executable commands are restricted to the following ones. Users can delete unnecessary files.

[« Close](javascript:void(0)){: .close-content-btn}
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

<div class="attention red">

Be sure to select the "binary mode" for file transfer. Do NOT select the "text mode".

</div>

- File protocol: SFTP
- Host name: ftp-private.ddbj.nig.ac.jp
- Port number: 22
- User name: (D-way Login ID)
- Password: (Leave empty)

[![]({{ site.baseurl }}/assets/images/books/winscp1_400.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/winscp1_400.jpg "privatekey1"){:.group1}

Please select the private key, which you created beforehand, from "Private key file" in "Authentication".

[![]({{ site.baseurl }}/assets/images/books/winscp2_400.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/winscp2_400.jpg "privatekey2"){:.group1}

Last, click the \[Login\] button in the lower center

[![]({{ site.baseurl }}/assets/images/books/winscp3_400.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/winscp3_400.jpg "login to winSCP"){:.group1}

At the first time of login, a warning message is displayed; however, please select "Yes" (this message will not be displayed again). Next, enter the passphrase set for the keys.

After login successfully, a folder of your PC is displayed at left, and your private directory in the server is displayed at right. Select the files at the left window and drag & drop them into the right window to transfer the files to the server.

[![]({{ site.baseurl }}/assets/images/books/winscp4_400.jpg){:.w500}]({{ site.baseurl }}/assets/images/books/winscp4_400.jpg "transfer files"){:.group1}

You can delete the transferred files by selecting the files and clicking the \[Delete\] button.

[« Close](javascript:void(0)){: .close-content-btn}
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

[![]({{ site.baseurl }}/assets/images/books/Cyberduck_1.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/Cyberduck_1.jpg "open connection"){:.group1}

Select "SFTP (SSH File Transfer Protocol)" .

[![]({{ site.baseurl }}/assets/images/books/Cyberduck_2.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/Cyberduck_2.jpg "SFTP in the WinSCP"){:.group1}

Set as follows and tick off "Use Public Key Authentication" in the More Options.

- Server: ftp-private.ddbj.nig.ac.jp
- Port: 22
- Username: (D-way Login ID)
- Password: (Leave empty)
- Add to Keychain: (Check)

[![]({{ site.baseurl }}/assets/images/books/Cyberduck_3.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/Cyberduck_3.jpg "key authentication"){:.group1}

By default, the private key is created in "User’s home folder \> .ssh folder (invisible in Finder) \> id\_rsa".

[![]({{ site.baseurl }}/assets/images/books/Cyberduck_4.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/Cyberduck_4.jpg "private_key"){:.group1}

At the first time of login, a warning message is displayed; however, please select "Always" (this message will not be displayed again).

After login successfully, your private directory in the server is displayed in the window. Select the files in your PC and drag & drop them into the window to transfer the files to the server.

[![]({{ site.baseurl }}/assets/images/books/Cyberduck_5.jpg){:.w500}]({{ site.baseurl }}/assets/images/books/Cyberduck_5.jpg "transfer"){:.group1}

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

<div class="attention">

Users can ssh login ftp-private.ddbj.nig.ac.jp server by using a private key. Executable commands are restricted to the following ones. Users can delete unnecessary files.  
ls cd cp mv rm more mkdir tar gzip gunzip bzip2 bunzip2 zip unzip

</div>

### Submission <a name="Submission"></a>

Set the hold date within four years or choose immediate release when processed. Submitters' name and affiliation will be public but e-mail address will not be disclosed.

<div class="attention red">

You can delete an un-submitted GEA submission at "Delete submission".

</div>


{::nomarkdown}
{% include image.html url="books/array-sub2.jpg" caption="Enter submission information" class="w550" %}
{:/}

### BioProject <a name="BioProject"></a>

Select a submitted project registered in your account. If a BioProject is not registered, please go to the [BioProject submission site](/bioproject/submission-e.html#bioproject-submission) and submit a project.

To use a project obtained in the other account, please [contact GEA team](/contact-ddbj-e.html).

{::nomarkdown}
{% include image.html url="books/gea-bp.jpg" caption="Select a BioProject for the GEA experiment" class="w550" %}
{:/}

### BioSample <a name="BioSample"></a>

Select submitted BioSamples registered in your account. If BioSamples are not registered, please go to the [BioSample submission site](/biosample/submission-e.html#biosample-submission) and submit samples.

To use samples obtained in the other account, please [contact GEA team](/contact-ddbj-e.html).

{::nomarkdown}
{% include image.html url="books/gea-bs.jpg" caption="Select BioSamples for the GEA experiment" class="w550" %}
{:/}

### IDF <a name="idf"></a>

Enter information for [IDF (Investigation Description Format)](/gea/metadata-e.html#idf).

[Example IDF](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=0)

  - Protocol: Pre-checked protocols are mandatory.
  - Publication: Describe associated publications by PubMed ID or DOI. For unpublished manuscript, please [inform us](/contact-ddbj-e.html) the publication ID after assignment.
  - Array Design: When an array design is available in [ArrayExpress](https://www.ebi.ac.uk/arrayexpress/arrays/browse.html)/GEA, enter an array design accession number "A-XXXX-n". When an array design is not available, [register a new array design](/gea/adf-e.html) by uploading an array design file into the GEA submission directory.
  - Data File Type: Raw and processed data files are required for microarray experiment submission. We strongly recommend to submitting raw and processed data file per sample. [Accepted Data Files Formats for microarray experiment](/gea/datafile-e.html#array_data).

{::nomarkdown}
{% include image.html url="books/array-idf.jpg" caption="Enter information for IDF" class="w600" %}
{:/}

### SDRF <a name="sdrf"></a>

{::nomarkdown}
{% include image.html url="books/array-sdrf.jpg" caption="Download a SDRF template file" class="w400" %}
{:/}

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

{::nomarkdown}
{% include image.html url="books/array-sdrf-template.jpg" caption="SDRF template, yellow-highlighted fields need to be filled by
submitter" class="w600" %}
{:/}

Select the entered SDRF file and continue.

{::nomarkdown}
{% include image.html url="books/array-sdrf2.jpg" caption="Select entered SDRF file" class="w450" %}
{:/}

### Overview and submit <a name="submit"></a>

You can download the IDF and SDRF files and check them. When correction is necessary, go back to the previous tab and corrent metadata.

Submit the IDF and SDRF metadata by clicking the "Submit" button.

{::nomarkdown}
{% include image.html url="books/array-overview.jpg" caption="Check the IDF and SDRF and submit" class="w450" %}
{:/}

### Validation <a name="validation"></a>

When data files described in the IDF and SDRF are not found in the submission directory, an error message "Data file is not uploaded" is shown and the submission is aborted.

The validator checks submitted IDF and SDRF files according to the [validation rules](/gea/validation-e.html) and gives warning and error messages. Errors need to be resolved for submission.

{::nomarkdown}
{% include image.html url="books/array-validation.jpg" caption="Warning and error messages" class="w500" %}
{:/}

### Accession number <a name="accession"></a>

[GEA accession numbers](/gea/overview-e.html#acc) are issued to completed GEA experiment.

You can allow reviewers access to private records by [communicating a reviewer accesss token](/gea/reviewer-access-e.html).

{::nomarkdown}
{% include image.html url="books/array-accession.jpg" caption="GEA accession numbers" class="w500" %}
{:/}

## Update submission <a name="update-submission"></a>

### Update in each database <a name="update-in-each-database"></a>

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

### Withdraw archived objects <a name="withdraw-archived-objects"></a>

To withdrawing archived Experiment, please [contact us](/contact-ddbj-e.html).

## Supplement: MD5<a name="supplement-md5"></a>

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

[« Close](javascript:void(0)){: .close-content-btn}
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

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)">Obtain MD5 number (Windows)</a></h3>
<div class="accordion-content">

Install and run the [Fsum Frontend (sourceforge.net/projects/fsumfe/)](//sourceforge.net/projects/fsumfe/).  
At first, tick off "md5".

[![]({{ site.baseurl }}/assets/images/books/Fsum1.jpg){:.w500}]({{ site.baseurl }}/assets/images/books/Fsum1.jpg "Generate md5 in the tool 1")

After clicking the \[+\] button, open the sequence data files that you need. You can select multiple files at the same time.

[![]({{ site.baseurl }}/assets/images/books/Fsum2.jpg){:.w500}]({{ site.baseurl }}/assets/images/books/Fsum2.jpg "Generate md5 in the tool 2")

Click the \[Calculate hashes\] button. The MD5 numbers of the files are displayed.  
By clicking the \[Export\] button, you can obtain the list of the MD5 numbers as a html, a csv, or a xml file.

[![]({{ site.baseurl }}/assets/images/books/Fsum3.jpg){:.w500}]({{ site.baseurl }}/assets/images/books/Fsum3.jpg "Generate md5 in the tool 3")

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>