---
layout: tabbed_indexed_content
service_name: BioProject
title: BioProject Submission
category: bioproject
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
"[Submission of research data from human
subjects](/policies-e.html#submission-of-human-data)".</span>
</div>

## Cases requiring project registration  {#project-registration}

Please check whether a project registration is necessary or not for your data submission in the [submission navigation site](/submission-navigation-e.html).  
Registration for a BioProject accession is not required for small datasets for which the results are found in one (or a small number) of accession numbers such as a single plasmid, viral or organelle genome sequencing study.

## Submit a new BioProject submission  {#new-bioproject-submission}

Obtain a submission [account](/account-e.html).

Submit a new project by clicking the \[New submission\].

<div class="attention">
If there is no reply from submitters after three months of initial contact, submissions will be cancelled.
</div>

{% include image.html url="books/hbp-01.jpg" caption="Submit a new BioProject" class="w450" %}

To submit a BioProject, enter content from left to right tabs. Submitter information is copied with account information.

For BioProject information fileds, please see [BioProject information fields](/bioproject/project-info-e.html).

{% include image.html url="books/hbp-02.jpg" caption="Enter project content" class="w450" %}

To submit genome assemblies to DDBJ, a unique [Locus tag prefix](/ddbj/locus_tag-e.html)is necessary.

Locus tag prefix generation box will appear when \[Project data type="Genome Sequencing" or "Metagenome"\] AND \[Capture="Whole"\] AND \[Objective="Sequence" or "Annotation" or "Assembly"\]. Registration of a unique locus tag prefix is required for studies that result in genome assemblies.

The locus\_tag prefix can contain only alpha-numeric characters and it must be at least 3 characters long. It should start with a letter, but numerals can be in the 2nd position or later in the string. (ex. A1C). There should be no symbols, such as -\_\* in the prefix. The locus\_tag prefix is to be separated from the tag value by an underscore ‘\_’, eg A1C\_00001.

Please leave the prefix box empty, when a prefix is not necessary for [WGS](/ddbj/wgs-e.html)only submission.

Prefix is managed by NCBI. When a project is submitted, our system tries to reserve prefix to NCBI. When the prefix has already been reserved, anerror message will be displayed. Please enter a different prefix and submit again.

<div class="attention" markdown="1">
Locus tag prefix can be registered in [BioSample](/biosample/submission-e.html).  
Registration of multiple prefixes is possible in BioSample but is not possible in BioProject.
</div>

{% include image.html url="books/hbp-03.jpg" caption="Reserve a locus tag prefix" class="w450" %}

To submit data corresponding to personal identification code to DRA/GEA/DDBJ, [your data submission application needs to be approved by NBDC before the submission](/policies-e.html#unrestricted-access). If your application was approved, write the NBDC application ID (for example, J-DS000001-001) in "Private comments to DDBJ staff" of BioProject.

{% include image.html url="books/bp-nbdc-approval.jpg" caption="NBDC data submission application ID" class="w450" %}

Check the content in "OVERVIEW" and submit a project by clicking the \[Submit\].

{% include image.html url="books/hbp-04.jpg" caption="Submit BioProject" class="w450" %}

The "OVERVIEW" tab continue to display submitted content. Updates will not be reflected in the "OVERVIEW" tab.

## Accession number  {#accession-number}

Temporary numbers with prefix PSUB are automatically assigned to submitted projects. Projects can be referred by the PSUB numbers until official accession numbers will be assigned. DDBJ BioProject staff review submissions and issue accession numbers with prefix PRJD to completed projects. Submitters can view accession numbers and submission status in your [submission account](https://ddbj.nig.ac.jp/D-way/).

<div class="attention">
- Do NOT cite numbers with prefix PSUB in publication.<br>
- Do not double submit the projects which have been registered to EBI and NCBI.
</div>

## Submit an umbrella project  {#submit-umbrella-project}

Umbrella project can be submitted as primary project in [D-way](https://ddbj.nig.ac.jp/D-way/). <span class="red">Be sure to tell the DDBJ BioProject staff that submitting project is umbrella by writing so in the [Private comments to DDBJ staff](#Private_comments). </span>  
Umbrell project cannot be kept private.

{% include image.html url="books/hbp-05.jpg" caption="Tell DDBJ staff that submitting project is umbrella" class="w450" %}

## Link primary project to umbrella  {#link-primary-project-umbrella}

When submitting project, in the [Umbrella BioProject](/bioproject/project-info-e.html#Area_linked-project), enter abstract and accession number of an umbrella to be linked. The DDBJ BioProject staff link the submitted primary project to the umbrella based on this information.

{% include image.html url="books/hbp-06.jpg" caption="Link to umbrella" class="w450" %}

## Release of projects  {#project-release}

Registered projects can be released in the following two ways. Hold date cannot be set for BioProject.
* Release immediately after registration.
* Release when records citing the BioProject accession are made public.

The projects can be kept private. 
If DDBJ/DRA/GEA/MetaboBank records citing the BioProject accession are made public, 
[cited projects are automatically released](/bioproject/project-e.html#release). 
The BioProject release does not trigger release of private DDBJ/DRA/GEA/MetaboBank data citing the BioProject accession.

Public projects are exchanged among [NCBI](https://www.ncbi.nlm.nih.gov/bioproject) and [EBI](https://www.ebi.ac.uk/) BioProject databases.

## Update  {#update}

Registered projects can be updated. Please [contact the BioProject staff](/contact-ddbj-e.html)to update the projects.

## Link experimental data and project  {#link-experimental-data-project}

For the DRA/GEA/MetaboBank submissions, select the BioProject accession that you registered in advance in the Study.  
For genome and TSA submissions to the DDBJ, enter the BioProject accession in the DBLINK.
