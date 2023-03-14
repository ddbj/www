---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: Submission Overview
category: dra
current_tab: overview
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

- [Obtain a submission account](/account-e.html)
- [Create a new submission](/dra/submission-e.html#new-submission)
- [Upload](/upload-e.html) sequencing data files
- [Submit a BioProject](/dra/submission-e.html#bioproject)
- [Submit BioSample(s)](/dra/submission-e.html#biosample)
- [Submit Experiment/Run metadata](/dra/submission-e.html#experiment)
- [Validate data files](/dra/submission-e.html#validation)

## Submission status {#status}

You can monitor the submission process by the submission status. 
The DRA team reviews submission whose status is in "submission_validated" or "data_error".

| Status                | Explanation                                                   |
|---|
| new                   | Metadata has not been submitted.                              |
| metadata_submitted   | Metadata has been submitted.                                  |
| data_validating      | Validating data files.                                        |
| data_error           | Error occurred in data validation process.                    |
| submission_validated | Metadata and data have been validated.                        |
| completed             | Accession numbers have been issued.                           |
| confidential          | Archive files has been created and submission is kept private |
| public                | Released to public.                                           |
| wait_for_release                | Within 30 days to publish                                           |
| canceled                | Submission was canceled                                           |

## Accession numbers  {#accession-numbers}

When metadata and sequence data are successfully registered, accession numbers are assigned. 

* Experiment (prefix DRX)
* Run (prefix DRR)
* Analysis (prefix DRZ)
* Submission (prefix DRA)

Regarding how to cite accession numbers, see "[FAQ: Which accession numbers should be cited in publication?](/faq/en/cite-accession-e.html)".

## Data release {#data-release}

The DRA submission is released according to the [data release policy](/policies-e.html#data-release). 
Please see "FAQ: [How are linked BioProject/BioSample/sequence data released?](/faq/en/bp-bs-seq-release.html)" regarding how linked data are released.  
After data release process, data files are released at [ftp](https://ddbj.nig.ac.jp/public/ddbj_database/dra/), indexed by [DDBJ Search](https://ddbj.nig.ac.jp/search), and mirrored by [NCBI SRA](https://www.ncbi.nlm.nih.gov/Traces/sra/sra.cgi) and [EBI SRA](https://ebi.ac.uk/ena) in a few days.

<div class="attention">
All data in a submission are released at the same time. If you want to release data at different time, please divide a submission.
</div>

## Limited-time access to archived data files  {#fastq-sra-files}

To allow submitter to download and check archived fastq/SRA files, the files are copied to the following directories on the ftp-private.ddbj.nig.ac.jp server. To save disk space, the copied files are deleted in one month.

- (submitter's home)/report/dra/(DRA submission accession)/fastq/
- (submitter's home)/report/dra/(DRA submission accession)/sra/

Example: /report/dra/DRA000001/fastq/DRR000001.fastq.bz2

## Data update {#update-submission}

To change hold date, update metadata, add or delete data files, please see [DRA Update](/dra/update-e.html).