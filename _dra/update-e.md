---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: DRA Update
category: dra
current_tab: overview
lang: en
---

## Hold date change {#change-hold-date}

You can set the hold date for a maximum of 4 years and can change it. To
change the hold date, click the [Change] button in the Hold Date and
move to hold date change page.

<a href="/assets/images/books/hold_date.jpg" title="Change hold date" class="group1"><img src="/assets/images/books/hold_date.jpg" alt="Change hold date" title="Change hold date" class="w400"></a>

To immediately release the submission, click the [Release Now]. In the
middle of the night, the submission is released, data files will be made
available at [ftp](https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/) and metadata will be indexed by the [DDBJ search](https://ddbj.nig.ac.jp/search) in a few days.

## Add publication information {#publication}

Add publication information related to DRA data to BioProject.
Request addition of [publication information](/bioproject/project-info-e.html#Publication) (pubmed ID, doi when pubmed ID is not available) to BioProject through the [DRA/BioProject/BioSample update request](https://forms.gle/T7faNoDCvmQoTiWq9) by selecting "BioProject/BioSample/Sequence Read Archive (DRA)" in the Contacts menu.

## Metadata update  {#update-metadata}

Update metadata by clicking [Enter/Update metadata].
A part of fields are blocked from editing. After editing your metadata, please be sure to click the [Submit/Update DRA metadata] button and reflect the updates.

## Data file addition {#add-data-files}

<div class="attention">
Data files cannot be added to archived Submissions. In addition, archived Runs cannot be modified.
</div>

To add data files, create a new Submission and add Experiment-Run objects to existing BioProject and BioSample accessions.

Similar to Run, data files cannot be added to archived Analysis objects.
To replace archived Analysis, please [DRA/BioProject/BioSample update request](https://forms.gle/T7faNoDCvmQoTiWq9).

Login [D-way](https://ddbj.nig.ac.jp/D-way/)and create a new submission by clicking the [New submission].
Select the BioProject and BioSample accessions to which data to be added. Next, add the DRA Experiment and Run objects.

- To add a new sample, share a BioProject accession and create a BioSample-Experiment-Run in a new DRA submission.
- To add data files to existing sample, reference existing BioProject and BioSample accessions and create an Experiment-Run in a new DRA submission.

Submit metadata and validate the appended data files. Accession numbers
will be issued to the appended Experiment/Run objects.

<div class="attention">
The BioProject accession is same, however, different DRA submission accession is assigned.
Please cite the BioProject accession or Run accessions.
</div>

{% include image.html url="books/add_data_files.jpg" caption="Add a sample and a data file to existing BioProject" class="w500" %}


{% include image.html url="books/add_run.jpg" caption="Add a data file to existing BioProject and BioSample" class="w500" %}

## Object deletion  {#delete}

To delete archived Experiment, Run and Analysis objects, please [DRA/BioProject/BioSample update request](https://forms.gle/T7faNoDCvmQoTiWq9).
