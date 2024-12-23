---
layout: tabbed_indexed_content
service_name: BioProject
title: BioProject Submission
category: bioproject
current_tab: submission
lang: en
---

## Primary and umbrella projects {#primary-and-umbrella}

There are two types of project: primary and umbrella.

Primary project:  
: Submitted projects which are intended to represent and be linked to current or future data submissions. <span class="red">Primary projects can be kept private.</span>

Umbrella project:
: Administrative project that is created to group multiple projects that are related by a single effort from a single submitter or group of submitters. <span class="red">Umbrella projects cannot be kept private.</span>
    
* Submitted data can directly refer to primary projects but can not refer to umbrella projects. The data are indirectly linked to the umbrella project through the primary project.
* Submitted primary projects are not directly linked to other primary projects: they are linked indirectly by way of links to the umbrella project.

## Hierarchy  {#bioproject-hierarchy}

Some large initiatives are represented by more than one layer of umbrella projects (see Figure B below), for instance, a top-most level may identify the largest definition of the collaboration, a second level of umbrella projects represent sub-projects at participating institutions, and finally a third layer represents the projects that actually generate the data that is submitted. 

{% include image.html url="submission/bp_org.jpg" caption="Schematic diagram of BioProject hierarchies. (A) Two layers. (B) Three layers." class="w450" %}

## Cases requiring project registration {#project-registration}

Please check whether a project registration is necessary for your data submission at[submission navigation](/submission-navigation-e.html).

## Submit a new BioProject submission  {#new-bioproject-submission}

Obtain a submission [account](/account-e.html).  
Submit a new project by clicking the [New submission].

{% include image.html url="books/hbp-01.jpg" caption="Submit a new BioProject" class="w450" %}

To submit a BioProject, enter content from left to right tabs. Submitter information is copied from the account information. 
For BioProject information fields, please see [BioProject information](/bioproject/project-info-e.html).

{% include image.html url="books/hbp-02.jpg" caption="Enter project content" class="w450" %}

To submit genome sequences with annotations to [DDBJ](/ddbj/genome-e.html), [locus tag prefix(s)](/ddbj/locus_tag-e.html) should be registered in [BioSample](/biosample/submission-e.html).  
Check the content in "OVERVIEW" and submit a project from [Submit].

{% include image.html url="books/hbp-04.jpg" caption="Submit BioProject" class="w450" %}

## Accession number {#accession-number}

A BioProject accession number with prefix PRJDB is automatically assigned to the submitted project.  
When the data release is specified as "Release immediately following curation", the project will be automatically released at night.

<div class="attention" markdown="1">
- Do NOT cite submission ID with prefix PSUB in your publication.<br>
- Do not double submit the projects to us which have been registered to EBI and NCBI.
</div>

## Human data {#human-data}

To submit human data, [your data submission application needs to be approved by DBCLS](/policies-e.html#unrestricted-access) before submission. Write the approved application ID (for example, J-DS000001-001) in "Private comments to DDBJ staff" of BioProject.

{% include image.html url="books/bp-nbdc-approval.jpg" caption="Data submission application ID" class="w450" %}

## Submit an umbrella project {#submit-umbrella-project}

Umbrella project can be submitted as primary project in [D-way](https://ddbj.nig.ac.jp/D-way/). <span class="red">Be sure to tell the DDBJ BioProject staff that submitting project is umbrella by writing so in the [Private comments to DDBJ staff](#Private_comments). Umbrell project cannot be kept private.</span>

When submitting an umbrella project to organize [haplotype](/ddbj/pseudohaplotype-e.html#bioproject) datasets, enter accession numbers of primary BioProjects to be linked and their names for haplotypes (e.g. PRJDB1 Principal, PRJDB2 Alternate and PRJDB3 DRA).

{% include image.html url="books/hbp-05.jpg" caption="Tell DDBJ staff that submitting project is umbrella" class="w450" %}

## Link primary project to umbrella  {#link-primary-project-umbrella}

When submitting project, in the [Umbrella BioProject](/bioproject/project-info-e.html#Area_linked-project), enter abstract and accession number of an umbrella to be linked. The DDBJ BioProject staff will link the submitted primary project to the umbrella based on this information.

{% include image.html url="books/hbp-06.jpg" caption="Link to umbrella" class="w450" %}

## Release of projects  {#project-release}

Registered projects can be released in the following two ways. Hold date cannot be set for BioProject.
* Release immediately after registration.
* Release when records citing the BioProject accession are made public.

The projects can be kept private and are released as follows.   

* You can "immediately release" or "hold" the registered primary project.
* The submitted primary project data can be kept private until the linked DDBJ/DRA/GEA/MetaboBank data made be public.
* Hold date of the project data cannot be specified. 
* Primary project data are automatically released when the linked DDBJ/DRA/GEA/MetaboBank data are published. 
* Publication of the primary project do not cause automatic release of the linked DDBJ/DRA/GEA/MetaboBank data.
* Under a primary project, publication of data does not cause the indirect release of the other data belong to the same project.

FAQ: [How are linked BioProject/BioSample/sequence data released?](/faq/en/bp-bs-seq-release.html)

{% include image.html url="submission/release_re.jpg" caption="Triggering of data release between primary projects and data records." class="w450" %}

<span class="red">An umbrella project cannot be kept private.</span>

An umbrella project can have public and private primary projects. Hierarchical relationship between the public umbrella project and the un-released primary project is invisible.

{% include image.html url="submission/um_pri_visibility.jpg" caption="Visibility of relationships between a public umbrella and primary projects." class="w400" %}

Released projects are exchanged with [NCBI](https://www.ncbi.nlm.nih.gov/bioproject)and [EBI](https://www.ebi.ac.uk/).

## Update {#update}

Registered projects can be updated such as addition of publication information. 
Please request update through [BioProject/BioSample/DRA update request form](https://forms.gle/T7faNoDCvmQoTiWq9).

