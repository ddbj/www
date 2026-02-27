---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: DRA Update
category: dra
current_tab: submission
lang: en
---

## Hold date change {#change-hold-date}

You can set the hold date for a maximum of 4 years and can change it. To
change the hold date, click [Change] in the Hold Date and move to the hold date change page.

<a href="/assets/images/books/hold_date.jpg" title="Change hold date" class="group1"><img src="/assets/images/books/hold_date.jpg" alt="Change hold date" title="Change hold date" class="w400"></a>

To release your submission immediately, click [Release Now]. At night, the submission will be released, data files will be made
available at [ftp](https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/) and metadata will be indexed by [DDBJ search](https://ddbj.nig.ac.jp/search) in a few days.

## Add publication information {#publication}

Add publication(s) related to the DRA data to BioProject.
Request addition of [publication information](/bioproject/project-info-e.html#Publication) to BioProject at [DRA/BioProject/BioSample update request](https://forms.gle/T7faNoDCvmQoTiWq9).

## Metadata update  {#update-metadata}

Update metadata by clicking [Enter/Update metadata]. Uneditable fields are blocked. After editing your metadata, please be sure to click [Submit/Update DRA metadata] and reflect the updates.

## Data file addition {#add-data-files}

<div class="attention">
Data files cannot be added to archived DRA submissions. In addition, archived Runs cannot be modified.
</div>

To add data files, create a new Submission and add Experiment-Run objects to existing BioProject and BioSample accessions.  
Login [D-way](https://ddbj.nig.ac.jp/D-way/) and create a new submission. 
Select the BioProject and BioSample accessions to which data to be added. Next, add the DRA Experiment and Run objects.

- To add a new sample, share a BioProject accession and create a BioSample-Experiment-Run in a new DRA submission.
- To add data files to existing sample, reference existing BioProject and BioSample accessions and create an Experiment-Run in a new DRA submission.

Submit metadata and validate the appended data files. Accession numbers
will be issued to the appended Experiment/Run objects.

<div class="attention">
The BioProject accession remains same, however, different DRA submission accession is assigned. Please cite the BioProject accession or Run accessions.
</div>

{% include image.html url="books/add_data_files.jpg" caption="Add a sample and a data file to existing BioProject" class="w500" %}

{% include image.html url="books/add_run.jpg" caption="Add a data file to existing BioProject and BioSample" class="w500" %}

## Deletion  {#delete}

To delete archived Experiment, Run and Analysis objects, please apply deletion from [DRA/BioProject/BioSample update request](https://forms.gle/T7faNoDCvmQoTiWq9).  
Please refer to [DDBJ and SRA Data Processing](/data-processing-e.html) for information on statuses. Please note that if you suppress some of the Experiments/Runs within a DRA submission after publication, they cannot be made public again.