---
layout: tabbed_indexed_content
service_name: BioProject
title: BioProject Overview
category: bioproject
current_tab: submission
lang: en
---

## Purpose of BioProject {#purpose}

As measuring technologies dramatically advances in life sciences, vast and diverse data are submitted to public databases.  
The BioProject resource organizes both the projects and the data from those projects . This allows searching by characteristics of these projects, using the project description and project content across the databases.

{% include image.html url="submission/biosample_integration.jpg" caption="Overview of BioSample and BioProject integration with other DDBJ databases" class="w450" %}

## Project  {#project}

The definition of a set of related data, a 'project' is very flexible.  
For example, BioProject records can be established for the following researches.  
* Genome sequencing and assembly
* Metagenomes
* Transcriptome sequencing and expression
* Targeted locus sequencing
* Epigenetics
* Phenotype or Genotype
* Variation detection
* Metabolomics study

BioProject represents a submission, initiative, or group of data that is logically related in some manner, or is of interest to retrieve as a distinct dataset. 

## Complex project  {#complex-project}

By selecting [Project Data Types](/bioproject/project-info-e.html#Project_data_type) (for example, "Genome Sequencing" and "Transcriptome or Gene Expression"), multiple studies can be merged into single project.  
In the project spanning multiple species, enter a taxonomic classification common to the species (e.g., genus name).

## Primary and Umbrella projects {#primary-and-umbrella}

There are two basic types of projects; primary and umbrella projects.

Primary project:  
: Submitted projects which are intended to represent and be linked to current or future data submissions. <span class="red">Primary projects can be kept private.</span>

Umbrella project:
: Administrative project that is created to group multiple projects that are related by a single effort from a single submitter or group of submitters. <span class="red">Umbrella projects cannot be kept private.</span>
    
* Submitted data can directly refer to primary projects but can not refer to umbrella projects. The data are linked to the umbrella project through the primary project.
* Submitted primary projects are not directly linked to other primary projects; they are linked indirectly by way of links to the umbrella project.

## BioProject hierarchy  {#bioproject-hierarchy}

Some large initiatives are represented by more than one layer of umbrella projects (see Figure B below); for instance, a top-most level may identify the largest definition of the collaboration; a second level of umbrella projects identify the primary categories of data production; and finally a third layer represents the projects that actually generate the data that is submitted. 

{% include image.html url="submission/bp_org.jpg" caption="Schematic diagram of BioProject hierarchies. (A)Two layers. (B)Three layers." class="w450" %}

Two layers (A)  
: Initiatives may be organized as a single Umbrella project with one or many submitted projects that are connected to data. Example: [Neanderthal Metagenome](https://www.ncbi.nlm.nih.gov/bioproject/18309).

Three layers (B)  
: Very large initiatives which have distinct sub-projects may have two levels of Umbrella project. For example, a top-level Umbrella project groups all components of the initiative; mid-level Umbrella projects reflect two distinct branches of the project (such as sequencing vs. epigenetics); and several primary projects denote distinct project data types (e.g., genome sequencing, transcriptome, epigenetics, etc.). Example: [NIH Human Microbiome Project (HMP) Roadmap Project](https://www.ncbi.nlm.nih.gov/bioproject/43021).

## Data release  {#release}

{% include image.html url="submission/release_re.jpg" caption="Triggering of data release between primary projects and data records." class="w450" %}

* You can "immediately release" or "hold" the registered primary project.
* The submitted primary project data can be kept private until the linked DDBJ/DRA/GEA/MetaboBank data made be public.
* Hold date of the project data cannot be specified. 
* Primary project data are automatically released when the linked DDBJ/DRA/GEA/MetaboBank data are published. 
* Publication of the primary project do not cause automatic release of the linked DDBJ/DRA/GEA/MetaboBank data.
* Under a primary project, publication of data does not cause the indirect release of the other data belong to the same project.

FAQ: [How are linked BioProject/BioSample/sequence data released?](/faq/en/bp-bs-seq-release.html)

{% include image.html url="submission/um_pri_visibility.jpg" caption="Visibility of relationships between a public umbrella and primary projects." class="w450" %}

<span class="red">An umbrella project cannot be kept private.</span>

An umbrella project can have public and private primary projects. Hierarchical relationship between the public umbrella project and the un-released primary project is invisible.

Released project data are exchanged with the other two INSDC partners [NCBI](https://www.ncbi.nlm.nih.gov/bioproject)and [EBI](https://www.ebi.ac.uk/) BioProject databases.

FAQ: [How to request data release?](/faq/en/request-release-e.html)

## Use an umbrella project  {#use-umbrella-project}

You can submit an umbrella project from the [D-way submission system](https://ddbj.nig.ac.jp/D-way/) in the same way as primary project. To remind the DDBJ BioProject team, you need to enter "this is an umbrella project" in the [Private comments to DDBJ staff](/bioproject/project-info-e.html#Private_comments).  
Registered umbrella project cannot be kept private.

To group primary projects under an umbrella, please follow the steps below.   
First, submit and release an umbrella project. If necessary, please share the assigned PRJDB number with relevant researchers.  
When submitting related primary projects, please provide the PRJDB number of parent umbrella in the [Umbrella BioProject](/bioproject/project-info-e.html#Area_linked-project). Released primary projects are automatically linked to the specified umbrella project.

If you want to add already registered primary projects to the umbrella, please [e-mail](/contact-ddbj-e.html)the PRJDB numbers of umbrella and related primary projects to the DDBJ BioProject team.
