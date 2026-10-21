---
layout: tabbed_indexed_content
service_name: BioProject
title: BioProject information
category: bioproject
current_tab: submission
lang: en
---

Required <span class="red">\*</span>  
Conditionally required <span class="conditionally_required">\*</span>

## Submitter  {#Submitter}

### Submitter  {#Area_bioproject-submitter}

Contact information of submitter(s). Questions and notifications about a submission are contacted to the e-mail address(es) listed here. Personal contact information is considered confidential and is collected to be used by DDBJ BioProject staff should questions arise; the general information about the research center is used for public display.

[First name](#BioProject_First_name)<a name="BioProject_First_name"></a>  
: Submitter's first name.

[Last name](#BioProject_Last_name)<span class="red">\*</span><a name="BioProject_Last_name"></a>  
: Submitter's last name.

[E-mail](#BioProject_E-mail) <span class="red">\*</span><a name="BioProject_E-mail"></a>  
: E-mail address. Enter an address from the organizations domain.

### Organization  {#Area_organization}

Organization to which a contact person belongs.

[Submitting organization](#BioProject_Submitting_organization)<span class="red">\*</span><a name="BioProject_Submitting_organization"></a>  
: full name of organization.

[Submitting organization URL](#BioProject_Submitting_organization_URL)<a name="BioProject_Submitting_organization_URL"></a>  
: The URL of submitter's organization.

### Data Release  {#Area_data-release}

Select "Hold" or "Release". You cannot specify hold date. Please see [Release of projects](/bioproject/submission-e.html#project-release) for detailed release mechanism.

[Hold](#BioProject_Hold)<a name="BioProject_Hold"></a>  
: Released concurrently when the DDBJ/DRA/GEA/MetaboBank data citing this ID are released.

[Release](#BioProject_Release)<a name="BioProject_Release"></a>  
: Release project data immediately. Private DDBJ/DRA/GEA/MetaboBank data citing this ID are not released.

## General info  {#General-info}

### Project Description  {#Area_project-description}

An informative paragraph that describes the project and provides informative context for the displayed project record. Only ASCII characters can be used.

[Project title](#Project_title)<span class="red">\*</span><a name="Project_title"></a>  
: Short descriptive name of the project for caption, labels, etc for public display in 20-250 characters including spaces. For example: Chromosome Y sequencing, Global studies of microbial diversity on human skin.

[Description](#Public_description)<span class="red">\*</span><a name="Public_description"></a>  
: Description (a paragraph) of the project goals and purposes in 20-4,000 characters including spaces.

[Private comments to DDBJ staff](#Private_comments)<a name="Private_comments"></a>  
: Use this field if you have questions for database support staff. The content is not made public. If you intend to [submit an umbrella project](/bioproject/submission-e.html#submit-umbrella-project), please inform us that "this is umbrella project" (e.g., Please register this project as an umbrella project).  
For [human data submissions](/bioproject/submission-e.html#human-data) approved by DBCLS, please provide both the hum ID and application ID (e.g., hum0001, J-
DS000001-001).

### Umbrella BioProject {#Area_linked-project}

If you are registering a project that is part of an initiative which is already registered in the BioProject database, then please tell us the existing BioProject accession number and provide a general description of the larger initiative. This information is needed for [project linking](/bioproject/submission-e.html#link-primary-project-umbrella).

[Initiative description](#Initiative_description)<span class="conditionally_required">\*</span><a name="Initiative_description"></a>  
: Description of an initiative.

[Umbrella BioProject accession](#BioProject_BioProject_ID)<span class="conditionally_required">\*</span><a name="BioProject_BioProject_ID"></a>  
: A BioProject accession number of an initiative which is already registered in the BioProject database.

### External Links  {#Area_external-links}

An URL may be provided, with a label for the resource, to reference a resource that is directly relevant to the submitted project.

[Link description](#URL_link_description)<a name="URL_link_description"></a>  
: Display name of web site that is related to this study.

[URL](#BioProject_URL)<a name="BioProject_URL"></a>  
: URL of web site that is related to this study.

### Grants  {#Area_grants}

Funding information for a project.

[Agency](#Agency)<a name="Agency"></a>  
: Name of funding agency. For example: Japan Society for the Promotion of Science.

[Agency abbreviation](#Agency_abbreviation)<a name="Agency_abbreviation"></a>  
: Abbreviation of funding agency. For example: JSPS.

[Grant ID](#Grant_ID)<a name="Grant_ID"></a>  
: Grant number is collected to support searches (e.g., publications often cite Grant numbers). For example: JSPS KAKENHI Grant Number 12345678.

[Grant title](#Grant_title)<a name="Grant_title"></a>  
: Grant title may also support searches.

## Project type  {#Project-type}

### Project data type {#Project_data_type}

[Project data type](#Project_data_type)<span class="red">\*</span><a name="Project_data_type"></a>
: A general label indicating the primary study goal. Select appropriate types. [News: A BioProject record can have multiple project data types](/news/en/2014-11-12-e.html)
    
NCBI individually assigns the [Project data type](https://www.ncbi.nlm.nih.gov/books/NBK54364/def-item/project-data-type/) based on the experimental data linked to the project. This type is not used by [EBI](https://www.ebi.ac.uk/ena/submit/project-format).
    
| Project Data type                | Description                                                                                                                     |
|---|
| Genome Sequencing and Assembly   | whole, or partial, genome sequencing project (with a genome assembly)                                                |
| Raw Sequence Reads   |   Next-generation sequencing reads   |
| Genome Sequencing                | whole, or partial, genome sequencing project (with or without a genome assembly)                                                |
| Clone Ends                       | clone-end sequencing project                                                                                                    |
| Epigenomics                      | DNA methylation, histone modification, chromatin accessibility datasets                                                         |
| Exome                            | exome resequencing project                                                                                                      |
| Map                              | project that results in non-sequence map data such as genetic map, radiation hybrid map, cytogenetic map, optical map, and etc. |
| Metagenome                       | sequence analysis of environmental samples                                                                                      |
| Metagenomic Assembly | metagenome assembly |
| Random Survey                    | sequence generated from a random sampling of the collected sample; not intended to be comprehensive sampling of the material.   |
| Targeted Loci Cultured            | project to sequence specific loci, such as a 16S rRNA sequencing (cultured sample)                                                                |
| Targeted Loci Environmental        | project to sequence specific loci, such as a 16S rRNA sequencing (environmental sample)                                                               |
| Targeted Locus (Loci)            | project to sequence specific loci, such as a 16S rRNA sequencing                                                                |
| Transcriptome or Gene Expression | large scale RNA sequencing or expression analysis. Includes cDNA, EST, RNA\_seq, and microarray.                                |
| Variation                        | project with a primary goal of identifying large or small sequence variation across populations.                                |
| Phenotype and Genotype           | project correlating phenotype and genotype                                                                                      |
| Metabolome                        | metabolomics |
| Proteome                         | large scale proteomics experiment including mass spec. analysis                                                                 |
| Other                            | a free text description is provided to indicate Other data type                                                                 |
   
[Project data type description](#Project_data_type_description)<span class="conditionally_required">\*</span><a name="Project_data_type_description"></a>  
: Describe the project data type when the Other is selected.

### Sample scope {#Area_sample-scope}

[Sample scope](#BioProject_Sample_scope)<span class="red">\*</span><a name="BioProject_Sample_scope"></a>  
: The scope and purity of the biological sample used for the study.

| Sample scope  | Description                                                                                                                                                                       |
|---|
| Monoisolate   | A single animal, cultured cell-line, inbred population (or possibly a heterogeneous population when a single genome assembly is generated from the pooled sample; not preferred). |
| Multiisolate  | Multiple individuals, a population (representation of a species).                                                                                                                 |
| Multi-species | Sample represents multiple species.                                                                                                                                               |
| Environment   | Species content of the sample is not known.                                                                                                                                       |
| Synthetic     | Sample is synthetically created by a machine.                                                                                                                                     |

## Target  {#Target}

### Organism information  {#Area_organism-information}

Taxonomy and description of target organism.

[Organism name](#BioProject_Organism_name)<span class="red">\*</span><a name="BioProject_Organism_name"></a><a name="BioProject_Organism_name"></a>
: Organism name in the [Taxonomy database](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html). Unclassified sequences including metagenome and environmental samples may be found at [here](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908&lvl=3&lin=f&keep=1&srchmode=1&unlock).
    
If the project targets multiple organisms, enter a common lineage e.g. "Mammalia" (taxonomy id: [40674](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=40674&lvl=3&lin=f&keep=1&srchmode=1&unlock)) for the project targeting "Homo sapiens" and "Mus musculus".   
If an organism name is not found in the NCBI Taxonomy, enter a lineage or a species name with sp. e.g. "Escherichia sp." (tax id: [1884818](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=1884818)) for a novel species "Escherichia sp. ABCDEF".
Apply a novel organism name in BioSample.

[Taxonomy ID](#BioProject_Taxonomy_ID)<a name="BioProject_Taxonomy_ID"></a>  
: [NCBI Taxonomy ID](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html)

[Strain, breed, cultivar](#Strain_breed_cultivar)<a name="Strain_breed_cultivar"></a>  
: Microbial strain name, or eukaryotic breed or cultivar name. Please provide this or "Isolate name or label"

[Isolate name or label](#Isolate_name_label)<a name="Isolate_name_label"></a>  
: A label for an isolated sample, or name of an individual animal (e.g., Clint). Please provide this or "Strain, breed, cultivar".

[Description](#BioProject_Description)<a name="BioProject_Description"></a>  
: A brief description, to elaborate upon the brief label.

## Publication {#Publication}

[PubMed ID](#BioProject_PubMed_ID)<a name="BioProject_PubMed_ID"></a>  
: The PubMed ID(s) will be used to populate the publication information.

```
<Publication id="15557739">
  <DbType>ePubmed</DbType>
</Publication>
<ProjectReleaseDate>
```

[DOI](#BioProject_DOI)<a name="BioProject_DOI"></a>  
: Provide a DOI if a PubMed ID is not available.

```
<Publication id="10.1093/nar/gku1120">
  <DbType>eDOI</DbType>
</Publication>
<ProjectReleaseDate>
```

## XML schema  {#xml-schema}

[BioProject XML schema](https://github.com/ddbj/pub/tree/master/docs/bioproject)

