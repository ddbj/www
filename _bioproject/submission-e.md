---
layout: indexed_content
title: DDBJ BioProject Handbook
category: bioproject
current_tab: handbook
tab_menu:
  - id: home
    title: Home
    url: /bioproject/index-e.html
  - id: handbook
    title: Handbook
    url: /bioproject/submission-e.html
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html?keyword%5B%5D=bioproject
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/BPSearch/
  - id: downloads
    title: Downloads
    url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/bioproject
    children:
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/bioproject/xsd
  - id: about bioProject
    title: About BioProject
    url: /bioproject/about-bioproject-e.html
lang: en
---

## Overview <a name="overview"></a>

### Purpose <a name="purpose"></a>

New sequencing technologies have significantly increased the volume of data that can be generated. Coupled with this, research is increasingly collaborative and data resulting from collaboration can include distinct types of data which may be submitted by more than one research group to more than one archival database.

The BioProject resource organizes both the projects and the data from those projects which is deposited into several archival databases maintained by members of the [INSDC](http://www.insdc.org/). This allows searching by characteristics of these projects, using the project description and project content across the [INSDC](http://www.insdc.org/)-associated databases.

{::nomarkdown}
{% include image.html url="submission/biosample_integration.jpg" caption="Overview of BioSample and BioProject integration with other DDBJ
databases" class="w450" %}
{:/}

### Project <a name="project"></a>

The definition of a set of related data, a 'project' is very flexible and supports the need to define a complex project and various distinct sub-projects using different parameters.

For example, BioProject records can be established for:

  - Genome sequencing and assembly
  - Metagenomes
  - Transcriptome sequencing and expression
  - Targeted locus sequencing
  - Genetic or RH Maps
  - Epigenetics
  - Phenotype or Genotype
  - Variation detection

BioProject represents a submission, initiative, or group of data that is logically related in some manner, or is of interest to retrieve as a distinct dataset. A project may be identified in terms of distinctions in the type of data produced.

### Complex project <a name="complex-project"></a>

By selecting [Project Data Types](#Project_data_type)(for example, "Genome Sequencing" and "Transcriptome or Gene Expression"), multiple studies can be merged into single project.

In the project spanning multiple species, enter a taxonomic classification common to the species (e.g., genus name).

In the [Sample scope](#BioProject_Sample_scope), [Material](#Material)and [Capture](#Capture), select "Other" if appropriate ones are not available.

A series of publications can be listed in the [Publication](#Publication).

### Primary and Umbrella projects<a name="primary-and-umbrella"></a>

There are two basic types of projects; primary and umbrella projects.

Primary project:  
: Submitted projects which are intended to represent and be linked to current or future data submissions. <span class="red">Primary projects can be kept private.</span>

Umbrella project:

: Administrative project that is created to group multiple projects that are related by a single effort from a single submitter or group of submitters. Umbrella projects may be created automatically using a rule-based logic or may be created by database staff upon request or upon identification of a needed grouping. <span class="red">Umbrella projects cannot be kept private.</span>
    
  Umbrella projects exist to provide an organizational structure to a large collaborative project and to group projects that are related via funding or submitting source or collaboration. Submitted primary projects are linked to data as it is submitted, and are linked to one or many umbrella projects. Submitted primary projects are not directly linked to other primary projects; they are linked indirectly by way of links to the umbrella project.

  <div class="attention red">  

  Nucleotide sequence data can not directly refer an umbrella project. Sequence data are linked to an umbrella via a primary project.

  </div>

### BioProject hierarchy <a name="bioproject-hierarchy"></a>

Definition of an umbrella project may be done in collaboration with a funding source. For example, there may be a top-most administrative project to represent the overarching initiative ("Genome Support Project"), with a secondary layer of primary projects defining core components of this initiative (reference genomes, rRNA sequencing, metagenomes, etc.).

Some large initiatives are represented by more than one layer of umbrella projects (see Figure B below); for instance, a top-most level may identify the largest definition of the collaboration; a second level of umbrella projects identify the primary categories of data production; and finally a third layer represents the projects that actually generate the data that is submitted. The Human Microbiome project is an example of this type of complex hierarchy where the top-most project, [PRJNA43021](https://www.ncbi.nlm.nih.gov/bioproject?term=PRJNA43021), represents the most inclusive definition of the initiative, and a secondary level (such as [PRJNA28331](https://www.ncbi.nlm.nih.gov/bioproject?term=PRJNA28331)) identifies a major sub-project to sequence multiple reference genomes each of which has a distinct project accession.

{::nomarkdown}
{% include image.html url="submission/bp_org.jpg" caption="Schematic diagram of BioProject hierarchies. (A)Two layers. (B)Three layers." class="w450" %}
{:/}

Two layers (A)  
: Initiatives may be organized as a single Umbrella project with one or many submitted projects that are connected to data. Example: [Neanderthal Metagenome](https://www.ncbi.nlm.nih.gov/bioproject/18309).

Three layers (B)  
: Very large initiatives which have distinct sub-projects may have two levels of Umbrella project. For example, a top-level Umbrella project groups all components of the initiative; mid-level Umbrella projects reflect two distinct branches of the project (such as sequencing vs. epigenetics); and several primary projects denote distinct project data types (e.g., genome sequencing, transcriptome, epigenetics, etc.). Example: [NIH Human Microbiome Project (HMP) Roadmap Project](https://www.ncbi.nlm.nih.gov/bioproject/43021).

### Data release <a name="data-release"></a>

{::nomarkdown}
{% include image.html url="submission/release_re.jpg" caption="Triggering of data release between primary projects and data records." class="w450" %}
{:/}

You can "immediately release" or "hold" the registered primary project.

The submitted primary project data can be kept private until the linked DDBJ, DRA, DTA and DOR records made be public. Hold date of the project data cannot be specified. Primary project data are automatically released when the linked DDBJ record(s) is published. On the other hand, publication of the primary project data do not cause automatic release of the linked DDBJ record(s). Thus, under a primary project, publication of a data record does not cause the indirect release of the other records. Publication of the DDBJ records is independent from the release of the linked project(s).

FAQ: [How are linked BioProject/BioSample/sequence data released?](/faq/en/bp-bs-seq-release.html)

{::nomarkdown}
{% include image.html url="submission/um_pri_visibility.jpg" caption="Visibility of relationships between a public umbrella and primary projects." class="w450" %}
{:/}

<span class="red">An umbrella project cannot be kept private.</span>An umbrella project can have public and private primary projects. Hierarchical relationship between the public umbrella project and the un-released primary project is invisible.

Released project data are exchanged with the other two INSDC partners [NCBI](https://www.ncbi.nlm.nih.gov/bioproject)and [EBI](https://www.ebi.ac.uk/)BioProject databases.

### Use an umbrella project <a name="use-umbrella-project"></a>

Please group related primary projects by using an umbrella project. An umbrella project can group and present outputs from research project.

NCBI visualizes data under an umbrella project with some statistics for easy navigation.

Project presentation examples:  
[Neanderthal Metagenome](https://www.ncbi.nlm.nih.gov/bioproject/18309)  
[Escherichia coli O104:H4](https://www.ncbi.nlm.nih.gov/bioproject/68275)

You can submit an umbrella project from [DDBJ submission system](https://ddbj.nig.ac.jp/D-way/)in the same way as primary project. <span class="red">To remind the DDBJ BioProject team, you need to enter "this is an umbrella project" in the [Private comments to DDBJ staff](/bioproject/submission-e.html#Private_comments). </span>Registered umbrella project cannot be kept private, but some fields can be omitted.

To group primary projects under an umbrella, please follow the steps below.  
First, submit and release an umbrella project. If necessary, please share the assigned PRJDB number with relevant researchers.  
When submitting related primary projects, please provide the PRJDB number of parent umbrella in the [Umbrella BioProject](/bioproject/submission-e.html#Area_linked-project). Released primary projects are automatically linked to the specified umbrella project.

If you want to add already registered primary projects to the umbrella, please [e-mail](/contact-ddbj-e.html)the PRJDB numbers of umbrella and related primary projects to the DDBJ BioProject team.

<span class="red">Private primary projects are not released by linking to public umbrella project.</span>

## Metadata<a name="metadata"></a> <a name=""></a>

Required <span class="red">\*</span>  
Conditionally required <span class="conditionally_required">\*</span>

### Submitter <a name="Submitter"></a>

#### Submitter <a name="Area_bioproject-submitter"></a>

Contact information of submitter(s). Questions and notifications about a submission are contacted to the e-mail address(es) listed here. Personal contact information is considered confidential and is collected to be used by DDBJ BioProject staff should questions arise; the general information about the research center is used for public display.

[First name](#BioProject_First_name)<a name="BioProject_First_name"></a>  
: Submitter's first name.

<!-- end list -->

[Last name](#BioProject_Last_name)<span class="red">\*</span><a name="BioProject_Last_name"></a>  
: Submitter's last name.

<!-- end list -->

[E-mail](#BioProject_E-mail) <span class="red">\*</span><a name="BioProject_E-mail"></a>  
: E-mail address. Enter an address from the organizations domain.

#### Organization <a name="Area_organization"></a>

Organization to which a contact person belongs.

[Submitting organization](#BioProject_Submitting_organization)<span class="red">\*</span><a name="BioProject_Submitting_organization"></a>  
: full name of organization.

<!-- end list -->

[Submitting organization URL](#BioProject_Submitting_organization_URL)<a name="BioProject_Submitting_organization_URL"></a>  
: The URL of submitter's organization.

#### Data Release <a name="Area_data-release"></a>

Select "Hold" or "Release". You cannot specify hold date. Please see [Release of projects](#Release_of_projects) for detailed release mechanism.

[Hold](#BioProject_Hold)<a name="BioProject_Hold"></a>  
: Released concurrently when the DDBJ, DRA, DTA and DOR record(s) citing this ID is released.

<!-- end list -->

[Release](#BioProject_Release)<a name="BioProject_Release"></a>  
: Release project data immediately. Private DDBJ record(s) citing this ID is not released.

### General info <a name="General-info"></a>

#### Project Description <a name="Area_project-description"></a>

An informative paragraph that describes the project and provides informative context for the displayed project record.

[Project title](#Project_title)<span class="red">\*</span><a name="Project_title"></a>  
: Very short descriptive name of the project for caption, labels, etc for public display. For example: Chromosome Y sequencing, Global studies of microbial diversity on human skin.

<!-- end list -->

[Description](#Public_description)<span class="red">\*</span><a name="Public_description"></a>  
: Description (a paragraph) of the project goals and purposes. Provide enough information (more than 100 characters) in the description for other users to interpret the data.

<!-- end list -->

[Private comments to DDBJ staff](#Private_comments)<a name="Private_comments"></a>  
: Use this field if you have questions for database support staff. The content is not made public. If you intend to submit an umbrella project, please inform us that "this is umbrella project".

<!-- end list -->

[Relevance](#Relevance)<a name="Relevance"></a>  
: Select the primary general relevance of the study.
  
  | Relevance     | Description                                                                                                    |
  | ------------- | -------------------------------------------------------------------------------------------------------------- |
  | Agricultural  |                                                                                                                |
  | Medical       |                                                                                                                |
  | Industrial    | Could include bio-remediation, bio-fuels and other areas of research where there are areas of mass production. |
  | Environmental |                                                                                                                |
  | Evolution     |                                                                                                                |
  | ModelOrganism |                                                                                                                |
  | Other         | Unspecified major impact categories to be defined in the "Relevance description".                              |

<!-- end list -->

[Relevance description](#Relevance_description)<span class="conditionally_required">\*</span><a name="Relevance_description"></a>  
: Describe the relevance when the Other is selected.

#### Umbrella BioProject<a name="Area_linked-project"></a>

If you are registering a project that is part of an initiative which is already registered in the BioProject database, then please tell us the existing BioProject accession number and provide a general description of the larger initiative. This information is needed for [project linking](#primary-and-umbrella).

[Initiative description](#Initiative_description)<span class="conditionally_required">\*</span><a name="Initiative_description"></a>  
: Description of an initiative.

<!-- end list -->

[Umbrella BioProject accession](#BioProject_BioProject_ID)<span class="conditionally_required">\*</span><a name="BioProject_BioProject_ID"></a>  
: A BioProject accession number of an initiative which is already registered in the BioProject database.

#### External Links <a name="Area_external-links"></a>

An URL may be provided, with a label for the resource, to reference a resource that is directly relevant to the submitted project.

[Link description](#URL_link_description)<a name="URL_link_description"></a>  
: Display name of web site that is related to this study.

<!-- end list -->

[URL](#BioProject_URL)<a name="BioProject_URL"></a>  
: URL of web site that is related to this study.

#### Grants <a name="Area_grants"></a>

Funding information for a project.

[Agency](#Agency)<a name="Agency"></a>  
: Name of funding agency. For example: Japan Society for the Promotion of Science.

<!-- end list -->

[Agency abbreviation](#Agency_abbreviation)<a name="Agency_abbreviation"></a>  
: Abbreviation of funding agency. For example: JSPS.

<!-- end list -->

[Grant ID](#Grant_ID)<a name="Grant_ID"></a>  
: Grant number is collected to support searches (e.g., publications often cite Grant numbers). For example: JSPS KAKENHI Grant Number 12345678.

<!-- end list -->

[Grant title](#Grant_title)<a name="Grant_title"></a>  
: Grant title may also support searches.

#### Consortium <a name="Area_consortium"></a>

[Consortium name](#Consortium_name)<a name="Consortium_name"></a> 
: If study is carried out as part of a consortium, provide the consortium name.

<!-- end list -->

[Consortium URL](#Consortium_URL)<a name="Consortium_URL"></a>  
: If the consortium maintains a web site, provide the URL.

### Project type <a name="Project-type"></a>

#### Project data type<a name="Project_data_type"></a>

[Project data type](#Project_data_type)<span class="red">\*</span><a name="Project_data_type"></a>

: A general label indicating the primary study goal. Select appropriate types. [News: A BioProject record can have multiple project data types](/news/en/2014-11-12-e.html)
    
  NCBI individually assigns the [Project data type](https://www.ncbi.nlm.nih.gov/books/NBK54364/def-item/project-data-type/) based on the experimental data linked to the project. This type is not used by [EBI](https://www.ebi.ac.uk/ena/submit/project-format).
    
  | Project Data type                | Description                                                                                                                     |
  | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
  | Genome Sequencing                | whole, or partial, genome sequencing project (with or without a genome assembly)                                                |
  | Clone Ends                       | clone-end sequencing project                                                                                                    |
  | Epigenomics                      | DNA methylation, histone modification, chromatin accessibility datasets                                                         |
  | Exome                            | exome resequencing project                                                                                                      |
  | Map                              | project that results in non-sequence map data such as genetic map, radiation hybrid map, cytogenetic map, optical map, and etc. |
  | Metagenome                       | sequence analysis of environmental samples                                                                                      |
  | Phenotype and Genotype           | project correlating phenotype and genotype                                                                                      |
  | Proteome                         | large scale proteomics experiment including mass spec. analysis                                                                 |
  | Random Survey                    | sequence generated from a random sampling of the collected sample; not intended to be comprehensive sampling of the material.   |
  | Targeted Locus (Loci)            | project to sequence specific loci, such as a 16S rRNA sequencing                                                                |
  | Transcriptome or Gene Expression | large scale RNA sequencing or expression analysis. Includes cDNA, EST, RNA\_seq, and microarray.                                |
  | Variation                        | project with a primary goal of identifying large or small sequence variation across populations.                                |
  | Other                            | a free text description is provided to indicate Other data type                                                                 |
    
<!-- end list -->

[Project data type description](#Project_data_type_description)<span class="conditionally_required">\*</span><a name="Project_data_type_description"></a>  
: Describe the project data type when the Other is selected.

#### Sample scope/Material/Capture/Methodology <a name="Area_sample-scopematerialcapturemethodology"></a>

[Sample scope](#BioProject_Sample_scope)<span class="red">\*</span><a name="BioProject_Sample_scope"></a>  
: The scope and purity of the biological sample used for the study.

  | Sample scope  | Description                                                                                                                                                                       |
  | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Monoisolate   | A single animal, cultured cell-line, inbred population (or possibly a heterogeneous population when a single genome assembly is generated from the pooled sample; not preferred). |
  | Multiisolate  | Multiple individuals, a population (representation of a species).                                                                                                                 |
  | Multi-species | Sample represents multiple species.                                                                                                                                               |
  | Environment   | Species content of the sample is not known.                                                                                                                                       |
  | Synthetic     | Sample is synthetically created by a machine.                                                                                                                                     |
  | Other         | Specify the sample scope that was used in the "Target description".                                                                                                               |

<!-- end list -->

[Material](#Material)<span class="red">\*</span><a name="Material"></a>
: The type of material that is isolated from the sample for use in the experimental study.

  | Material       | Description                                                                                    |
  | -------------- | ---------------------------------------------------------------------------------------------- |
  | Genome         | A whole genome initiative. May be only the nuclear genome. Use for DNA of a metagenome sample. |
  | Partial Genome | One or more chromosomes or replicons were experimentally purified.                             |
  | Transcriptome  | Transcript data.                                                                               |
  | Reagent        | Material studied was obtained by chemical reaction, precipitation.                             |
  | Proteome       | Protein or peptide data.                                                                       |
  | Phenotype      | Phenotypic descriptive data.                                                                   |
  | Other          | Specify the material that was used in the "Target description".                                |

<!-- end list -->

[Capture](#Capture)<span class="red">\*</span><a name="Capture"></a>  
: The scale, or type, of information that the study is designed to generate from the sample material.

  | Capture             | Description                                                                     |
  | ------------------- | ------------------------------------------------------------------------------- |
  | Whole               | The project makes use of the whole sample material (most common case).          |
  | Clone Ends          | Capturing clone end data.                                                       |
  | Exome               | Capturing exon-specific data.                                                   |
  | Targeted Locus/Loci | Capturing specific loci (gene, genomic region, barcode standard).               |
  | Random Survey       | Not using whole sample, an incomplete survey of the sample.                     |
  | Other               | Specify the scale or type of the captured material in the "Target description". |

<!-- end list -->

[Target description](#Target_description)<span class="conditionally_required">\*</span><a name="Target_description"></a>  
: Describe the Sample scope/Material/Capture when the Other(s) is selected.

<!-- end list -->

[Methodology](#Methodology)<span class="red">\*</span><a name="Methodology"></a>  
: The core experimental approach used to obtain the data that is submitted to archival databases.

  | Methodology       | Description                                                     |
  | ----------------- | --------------------------------------------------------------- |
  | Sequencing        | Sequencing using Sanger, 454, Illumina, etc wit                 |
  | Array             | Data/Sequence are generated by hybridization arrays.            |
  | Mass Spectroscopy | Data are generated by mass spectroscopy.                        |
  | Other             | Please provide data description in the "Methodogy description". |

<!-- end list -->

[Methodology description](#Methodology_description)<span class="conditionally_required">\*</span><a name="Methodology_description"></a>  
: Describe the methodology type when the Other is selected.

#### Objective <a name="Area_objective"></a>

Project goals with respect to the type of data that will be generated and submitted to an INSDC-associated database. Select all relevant menu options.

[Objective](#Objective)<span class="red">\*</span><a name="Objective"></a>  
: Project goals with respect to the type of data that will be generated and submitted to an INSDC-associated database. Select all relevant menu options.

  | Objective          | Description                                                                    |
  | ------------------ | ------------------------------------------------------------------------------ |
  | Raw Sequence Reads | Submission of raw sequencing information as it comes out of machine.           |
  | Sequence           | Sequence which is not raw - meaning processed (clipped, matepaired, oriented). |
  | Analysis           | Higher level interpretation of the data.                                       |
  | Assembly           | Experiment will result in assemblies (genome or transcriptome).                |
  | Annotation         | Experiment wil result in Annotation.                                           |
  | Variation          | Submission of variations.                                                      |
  | Epigenetic Markers | Experiment will result in Epigenetic markers.                                  |
  | Expression         | Submission of gene expression.                                                 |
  | Maps               | Experiment will result in cytogenetic, physical, Rh, etc...maps.               |
  | Phenotype          | Experiment will deliver phenotypes.                                            |
  | Other              |                                                                                |

#### Locus tag prefix <a name="Area_locus-tag-prefix"></a>

[Locus tag prefix](#Locus_tag_prefix)<span class="conditionally_required">\*</span><a name="Locus_tag_prefix"></a>
: Locus tag prefix generation box will appear when \[Project data type="Genome Sequencing" or "Metagenome"\] AND \[Capture="Whole"\] AND \[Objective="Sequence" or "Annotation" or "Assembly"\].

  Registration of a unique locus tag prefix is required for studies that result in genome assemblies. Please leave the prefix box empty, when a prefix is not necessary for [WGS](/ddbj/wgs-e.html) only submission.
    
  [Locus tag prefix guideline](/ddbj/locus_tag-e.html).
    
  Locus tag prefix format  
  The locus\_tag prefix can contain only alpha-numeric characters and it must be 3-12 characters long. It should start with a letter, but numerals can be in the 2nd position or later in the string. (ex. A1C). There should be no symbols, such as -\_\* in the prefix. The locus\_tag prefix is to be separated from the tag value by an underscore ‘\_’, eg A1C\_00001.
    
  DDBJ BioProject limits the maximum tag length to 12 characters. In the BioProject submission system, the locus tag is displayed in capital letters. However, the tag is reserved in case-insensitive manner.

### Target <a name="Target"></a>

#### Organism information <a name="Area_organism-information"></a>

Taxonomy and description of target organism.

[Organism name](#BioProject_Organism_name)<span class="red">\*</span><a name="BioProject_Organism_name"></a><a name="BioProject_Organism_name"></a>

: Organism name in the [Taxonomy database](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html). Unclassified sequences including metagenome and environmental samples may be found at [here](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908&lvl=3&lin=f&keep=1&srchmode=1&unlock).
    
  In the project spanning multiple species, enter a taxonomic classification common to the species (e.g., genus name).
    
  If you intend to submit un-registered novel organism, please provide us the [detailed organism information](/ddbj/organism-e.html) in the [Description of novel organism](#Novel_organism) and proposed organism name in the Organism Name.

<!-- end list -->

[Taxonomy ID](#BioProject_Taxonomy_ID)<a name="BioProject_Taxonomy_ID"></a>  
: [NCBI Taxonomy ID](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html)

<!-- end list -->

[Strain, breed, cultivar](#Strain_breed_cultivar)<a name="Strain_breed_cultivar"></a>  
: Microbial strain name, or eukaryotic breed or cultivar name. Please provide this or "Isolate name or label"

<!-- end list -->

[Isolate name or label](#Isolate_name_label)<a name="Isolate_name_label"></a>  
: A label for an isolated sample, or name of an individual animal (e.g., Clint). Please provide this or "Strain, breed, cultivar".

<!-- end list -->

[Description](#BioProject_Description)<a name="BioProject_Description"></a>  
: A brief description, to elaborate upon the brief label.

<!-- end list -->

[Description of novel organism](#Novel_organism)<a name="Novel_organism"></a>  
: Enter necessary information to register an organism to the [taxonomy database](https://www.ncbi.nlm.nih.gov/Taxonomy/).

#### Environmental sample information <a name="Area_environmental-sample-information"></a>

This section appears instead of the [Organism information](#BioProject_Organism_name) when the Sample scope="Environment" in the Target.

[Environmental sample name](#Environmental_sample_name)<span class="red">\*</span><a name="Environmental_sample_name"></a>  
: Unclassified sequences including metagenome and environmental samples may be found at [here](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908&lvl=3&lin=f&keep=1&srchmode=1&unlock). If an appropriate name was not found, describe a novel name you propose and details of sample information in the [Environmental sample description](#Environmental_sample_description).

<!-- end list -->

[Environmental sample description](#Environmental_sample_description)<a name="Environmental_sample_description"></a>  
: Describe details of sample information.

#### General Properties <a name="Area_general-properties"></a>

General properties of target organism.

[Cellularity](#Cellularity)<a name="Cellularity"></a>  
: Select a cellularity.

  | Cellularity   |
  | ------------- |
  | Unicellular   |
  | Multicellular |
  | Colonial      |

<!-- end list -->

[Reproduction](#Reproduction)<a name="Reproduction"></a>  
: Select a Reproduction.

  | Reproduction |
  | ------------ |
  | Sexual       |
  | Asexual      |

<!-- end list -->

[Haploid genome size](#Haploid_genome_size)<a name="Haploid_genome_size"></a>  
: Haploid genome size in Kb, Mb or cM.

<!-- end list -->

[Ploidy](#Ploidy)<a name="Ploidy"></a>  
: Select a Ploidy.

  | Ploidy        |
  | ------------- |
  | Haploid       |
  | Diploid       |
  | Polyploid     |
  | Allopolyploid |

#### Organism Replicons <a name="Area_organism-replicons"></a>

Describe how many replicons this organism has, how they are named (e.g., 1, 2, 3 vs. I, II, III), the replicon type (chromosome etc.), and the subcellular structure that the replicon is located in.

[Name](#Replicon_name)<a name="Replicon_name"></a>  
: The preferred standard for the replicon name.

<!-- end list -->

[Type](#Replicon_type)<a name="Replicon_type"></a>  
: Select a replicon type.

  | Replicon type |
  | ------------- |
  | Chromosome    |
  | Plasmid       |
  | Linkage Group |
  | Segment       |
  | Other         |

<!-- end list -->

[Location](#Location)<a name="Location"></a>  
: The replicon subcellular location. For instance, the nucleus, or a differentiated organella. Please select "Nuclear or Prokaryote" for the chromosomes of eularyotes, bacteria or archaea.

  | Location              |
  | --------------------- |
  | Nuclear or Prokaryote |
  | Macronuclear          |
  | Nucleomorph           |
  | Mitochondrion         |
  | Kinetoplast           |
  | Chloroplast           |
  | Chromoplast           |
  | Plastid               |
  | Virion or Phage       |
  | Proviral or Prophage  |
  | Viroid                |
  | Extrachrom            |
  | Cyanelle              |
  | Apicoplast            |
  | Leucoplast            |
  | Proplastid            |
  | Hydrogenosome         |
  | Chromatophore         |
  | Other                 |

<!-- end list -->

[Size](#Size)<a name="Size"></a>  
: The size and unit of measurement for the estimated genome size.

<!-- end list -->

[Description](#Replicon_description)<a name="Replicon_description"></a>  
: A description of any unusual features of the replicon.

#### Phenotype <a name="Area_phenotype"></a>

Phenotype of target organism.

[Disease](#Disease)<a name="Disease"></a>  
: Enter a disease name.

<!-- end list -->

[Biotic Relationship](#BioticRelationship)<a name="BioticRelationship"></a>
: Select a BioticRelationship.

  | BioticRelationship |
  | ------------------ |
  | FreeLiving         |
  | Commensal          |
  | Symbiont           |
  | Episymbiont        |
  | Intracellular      |
  | Parasite           |
  | Host               |
  | Endosymbiont       |

<!-- end list -->

[Trophic Level](#TrophicLevel)<a name="TrophicLevel"></a>
: Select a TrophicLevel.

  | TrophicLevel |
  | ------------ |
  | Autotroph    |
  | Heterotroph  |
  | Mixotroph    |

#### Prokaryote Morphology <a name="Area_prokaryote-morphology"></a>

When the target organism is prokaryote, please describe the general morphology if known.

[Shape](#Shape)<a name="Shape"></a>
: Select all relevant menu options.

  | Shape        | Description                                          |
  | ------------ | ---------------------------------------------------- |
  | Bacilli      | rod-shaped                                           |
  | Cocci        | spherical-shaped                                     |
  | Spirilla     | spiral-shaped                                        |
  | Coccobacilli | elongated coccal form                                |
  | Filamentous  | filament-shaped (bacilli thar occur in long threads) |
  | Vibrios      | vibrio-shaped (short, slightly curved rods)          |
  | Fusobacteria | fusiform or spindle-shaped (rods with tapered ends)  |
  | SquareShaped |                                                      |
  | CurvedShaped |                                                      |
  | Tailed       |                                                      |

<!-- end list -->

[Gram](#Gram)<a name="Gram"></a>
: Choose gram positive or negative.

  | Gram     |
  | -------- |
  | Positive |
  | Negative |

<!-- end list -->

[Motility](#Motility)<a name="Motility"></a>  
: Choose a Motility.

  | Motility |
  | -------- |
  | Yes      |
  | No       |

<!-- end list -->

[Enveloped](#Enveloped)<a name="Enveloped"></a>  
: Choose enveloped or not.

  | Enveloped |
  | --------- |
  | Yes       |
  | No        |

<!-- end list -->

[Endospores](#Endospores)<a name="Endospores"></a>  
: Choose target bacteria forms endospores or not.

  | Endospores |
  | ---------- |
  | Yes        |
  | No         |

#### Ecological Environment <a name="Area_ecological-environment"></a>

The general habitat for any organism. Please indicate additional extremophile parameters if known.

[Habitat](#Habitat)<a name="Habitat"></a>  
: Choose a Habitat.

  | Habitat        |
  | -------------- |
  | HostAssociated |
  | Aquatic        |
  | Terrestrial    |
  | Specialized    |
  | Multiple       |
  | Unknown        |

<!-- end list -->

[Salinity](#Salinity)<a name="Salinity"></a>  
: Choose a Salinity.

  | Salinity           |
  | ------------------ |
  | NonHalophilic      |
  | Mesophilic         |
  | ModerateHalophilic |
  | ExtremeHalophilic  |
  | Unknown            |

<!-- end list -->

[Oxygen requirement](#OxygenReq)<a name="OxygenReq"></a>  
: Choose an Oxygen requirement.

  | OxygenReq       |
  | --------------- |
  | Aerobic         |
  | Microaerophilic |
  | Facultative     |
  | Anaerobic       |
  | Unknown         |

<!-- end list -->

[Temperature range](#TemperatureRange)<a name="TemperatureRange"></a>  
: Choose a temperature range.

  | TemperatureRange  |
  | ----------------- |
  | Cryophilic        |
  | Psychrophilic     |
  | Mesophilic        |
  | Thermophilic      |
  | Hyperthermophilic |
  | Unknown           |

<!-- end list -->

[Optimum Temperature](#OptimumTemperature)<a name="OptimumTemperature"></a>  
: Optimum temperature in Celsius.

### Publication<a name="Publication"></a>

[PubMed ID](#BioProject_PubMed_ID)<a name="BioProject_PubMed_ID"></a>  
: The PubMed ID(s) will be used to populate the publication information.

<!-- end list -->

[DOI](#BioProject_DOI)<a name="BioProject_DOI"></a>  
: Provide a DOI if a PubMed ID is not available. Provide the additional reference information.

<!-- end list -->

[Reference title](#BioProject_Reference_title)<span class="red">\*</span><a name="BioProject_Reference_title"></a>  
: A title of reference.

<!-- end list -->

[Journal title](#BioProject_Journal_title)<span class="red">\*</span><a name="BioProject_Journal_title"></a>  
: A title of journal.

<!-- end list -->

[Year](#BioProject_Year)<span class="red">\*</span><a name="BioProject_Year"></a>  
: Publication year.

<!-- end list -->

[Volume](#BioProject_Volume)<span class="red">\*</span><a name="BioProject_Volume"></a>  
: Journal volume.

<!-- end list -->

[Issue](#BioProject_Issue)<span class="red">\*</span><a name="BioProject_Issue"></a>  
: Journal issue.

<!-- end list -->

[Pages from](#BioProject_Pages_from)<span class="red">\*</span><a name="BioProject_Pages_from"></a>  
: Reference start page.

<!-- end list -->

[Pages to](#BioProject_Pages_to)<span class="red">\*</span><a name="BioProject_Pages_to"></a>  
: Reference end page.

<!-- end list -->

[First name](#BioProject_First_name_publication)<span class="red">\*</span><a name="BioProject_First_name_publication"></a>  
: First name of author.

<!-- end list -->

[MI](#BioProject_MI)<a name="BioProject_MI"></a>  
: Middle initial.

<!-- end list -->

[Last name](#BioProject_Last_name_publication)<span class="red">\*</span><a name="BioProject_Last_name_publication"></a>  
: Last name of author.

<!-- end list -->

[Suffix](#BioProject_Suffix)<a name="BioProject_Suffix"></a>  
: Suffix for author.

<!-- end list -->

[This publication has multiple authors](#BioProject_This_publication_has_multiple_authors)<a name="BioProject_This_publication_has_multiple_authors"></a>  
: If this is checked, then "et al" is added to the author name provided above.

### XML schema <a name="xml-schema"></a>

[BioProject XML schema](https://github.com/ddbj/pub/tree/master/docs/bioproject)

# Submission to BioProject

{::options parse_block_html="true" /}
<div class="attention">
Submission of research data from human subjects  
: <span class="red">For submitting data from human subjects (human data) to the databases of DDBJ center, it is submitter's responsibility to ensure that the dignity and right of human subject are protected in accordance with all applicable laws, ordinances, guidelines and policies of submitter's institution. In principle, make sure to remove any direct personal identifiers of human subjects from your data to be submitted. Before submitting human data, read the "[Submission of research data from human subjects](/policies-e.html#human)".</span>
</div>

## Submission to BioProject <a name="project-submission"></a>

### Cases requiring project registration <a name="project-registration"></a>

Registration for a BioProject accession is required in the following cases.

- submit sequencing data to DRA
- submit genome sequences to DDBJ

Registration for a BioProject accession is encouraged in the following cases.

- projects that result in a very large volume of data submissions
- submissions from multiple members of a collaboration
- submissions to multiple archival databases

Registration for a BioProject accession is not required in the following cases. Register an accession if necessary.

- small datasets for which the results are found in one (or a small number) of accession numbers such as a single plasmid, viral or organelle genome sequencing study

A BioProject accession is required for submission to [Sequence Read Archive](/dra/index-e.html), and microbial and eukaryotic genomes
submissions to the DDBJ. If you obtain a BioProject accession from DDBJ, please submit your related biological data to the [DDBJ](http://www.ddbj.nig.ac.jp), [Sequence Read Archive](/dra/index-e.html)and [Trace Archive](/dta/index-e.html).

{::options parse_block_html="true" /}
<div class="attention red">
[The INSDC stopped to assigning strain-level taxonomy ID to microbes whose genomes have been submitted to the INSDC.](/news/en/2014-02-12-e.html)
</div>

### Submit a new BioProject submission <a name="new-bioproject-submission"></a>

According to the [Account Handbook](/account-e.html), obtain a submission account.

Submit a new project by clicking the \[New submission\].

<div class="attention red">
If there is no reply from submitters after three months of initial contact, submissions will be cancelled.
</div>

{::nomarkdown}
{% include image.html url="books/hbp-01.jpg" caption="Submit a new BioProject" class="w450" %}
{:/}

To submit a BioProject, enter content from left to right tabs. Submitter information is copied with account information.

For BioProject metadata, please see [here](#metadata).

{::nomarkdown}
{% include image.html url="books/hbp-02.jpg" caption="Enter project content" class="w450" %}
{:/}

To submit genome assemblies to DDBJ, a unique [Locus tag prefix](/ddbj/locus_tag-e.html)is necessary.

Locus tag prefix generation box will appear when \[Project data type="Genome Sequencing" or "Metagenome"\] AND \[Capture="Whole"\] AND \[Objective="Sequence" or "Annotation" or "Assembly"\]. Registration of a unique locus tag prefix is required for studies that result in genome assemblies.

The locus\_tag prefix can contain only alpha-numeric characters and it must be at least 3 characters long. It should start with a letter, but numerals can be in the 2nd position or later in the string. (ex. A1C). There should be no symbols, such as -\_\* in the prefix. The locus\_tag prefix is to be separated from the tag value by an underscore ‘\_’, eg A1C\_00001.

Please leave the prefix box empty, when a prefix is not necessary for [WGS](/ddbj/wgs-e.html)only submission.

Prefix is managed by NCBI. When a project is submitted, our system tries to reserve prefix to NCBI. When the prefix has already been reserved, anerror message will be displayed. Please enter a different prefix and submit again.

<div class="attention red">
When multiple prefixes are necessary, please [contact us](/contact-ddbj-e.html).
</div>

{::nomarkdown}
{% include image.html url="books/hbp-03.jpg" caption="Reserve a locus tag prefix" class="w450" %}
{:/}

Check the content in "OVERVIEW" and submit a project by clicking the \[Submit\].

{::nomarkdown}
{% include image.html url="books/hbp-04.jpg" caption="Submit BioProject" class="w450" %}
{:/}

The "OVERVIEW" tab continue to display submitted content. Updates will not be reflected in the "OVERVIEW" tab.

### Accession number <a name="accession-number"></a>

Temporary numbers with prefix PSUB are automatically assigned to submitted projects. Projects can be referred by the PSUB numbers until official accession numbers will be assigned. DDBJ BioProject staff review submissions and issue accession numbers with prefix PRJD to completed projects. Submitters can view accession numbers and submission status in your [submission account](https://ddbj.nig.ac.jp/D-way/).

<div class="attention red">
- Do NOT cite numbers with prefix PSUB in publication.
- Do not double submit the projects which have been registered to EBI and NCBI.
</div>

### Submit an umbrella project <a name="submit-umbrella-project"></a>

Umbrella project can be submitted as primary project in [submission account](https://ddbj.nig.ac.jp/D-way/). <span class="red">Be sure to tell the DDBJ BioProject staff that submitting project is umbrella by writing so in the [Private comments to DDBJ staff](#Private_comments). </span>Umbrell project cannot be kept private.

{::nomarkdown}
{% include image.html url="books/hbp-05.jpg" caption="Tell DDBJ staff that submitting project is umbrella" class="w450" %}
{:/}

### Link primary project to umbrella <a name="link-primary-project-umbrella"></a>

When submitting project, in the [Umbrella BioProject](#Area_linked-project), enter abstract and accession number of an umbrella to be linked. The DDBJ BioProject staff link the submitted primary project to the umbrella based on this information.

{::nomarkdown}
{% include image.html url="books/hbp-06.jpg" caption="Link to umbrella" class="w450" %}
{:/}

### Release of projects <a name="project-release"></a>

Registered projects can be released in the following two ways:

- Release immediately after registration.
- Release when records citing the BioProject accession are made public.

The projects can be kept private. If DDBJ records citing the BioProject accession are made public, [cited projects are automatically released](#data-release). Private DDBJ records citing this BioProject accession are not made public.

<div class="attention red">
Hold date cannot be set for BioProject.
</div>

Public projects are exchanged among
[NCBI](https://www.ncbi.nlm.nih.gov/bioproject)and
[EBI](https://www.ebi.ac.uk/)BioProject databases.

### Update <a name="update"></a>

Registered projects can be updated. Please [contact the BioProject staff](/contact-ddbj-e.html)to update the projects.

### Link experimental data and project <a name="link-experimental-data-project"></a>

For the SRA submission, select the BioProject accession that you registered in advance in the Study.

For genome and TSA submissions to the DDBJ, enter the BioProject accession in the DBLINK.
