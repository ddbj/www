---
layout: indexed_content
title: DDBJ BioProject Handbook
pathname: submission-e
category: aboutbioproject
---

<div id="page" class="top">

<div id="header" class="clearfix">

<div id="header-top">

[![](/images/parts/ddbj-logo-white.svg)](/index-e.html "DNA Data Bank of Japan")

<div id="header-top-left">

<span class="resources-btn">Services**</span>

</div>

<div id="header-top-right">

  - [Login & Submit](https://ddbj.nig.ac.jp/D-way)
  - [Policies and Disclaimers](/policies-e.html)
  - [Contact](/contact-e.html)
  - [Japanese](/bioproject/submission.html)

</div>

</div>

<div class="resources-contents">

<div class="boxContainer">

<div class="resources-box">

  - ### ![](/images/logos/service-org.svg)Search

  - [getentry](http://getentry.ddbj.nig.ac.jp/top-e.html "Retrieve sequence records by accession numbers")

  - [ARSA](http://ddbj.nig.ac.jp/arsa/ "Retrieve sequence and annotation by keywords")

  - [DRA
    Search](http://ddbj.nig.ac.jp/DRASearch "Search and retrieve sequencing data.")

  - [TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=en "Search unified taxonomy database")

  - [BLAST](http://blast.ddbj.nig.ac.jp/blastn?lang=en "Search nucleotide sequences by sequence similarity")

<!-- end list -->

  - ### ![](/images/logos/wrench.svg)Analysis

  - [Vector Screening
    System](http://ddbj.nig.ac.jp/vecscreen/ "Screen vector sequences")

  - [ClustalW](http://clustalw.ddbj.nig.ac.jp/index.php?lang=en "Multiple alignment and tree-making")

  - [WABI (Web API for
    Biology)](/search/help/wabi/wabi-e.html "Web API for using the search services of DDB")

  - [DDBJ FTP
    Site](ftp://ftp.ddbj.nig.ac.jp/ "Download public data by ftp")

</div>

<div class="resources-box">

  - ### ![](/images/logos/database-org.svg)Databases

  - [Annotated/Assembled Sequences
    (DDBJ)](/ddbj/index-e.html "Annotated/Assembled Sequences (DDBJ)")

  - [Sequence Read Archive
    (DRA)](/dra/index-e.html "Sequence Read Archive")

  - [Genomic Expression Archive
    (GEA)](/gea/index-e.html "Genomic Expression Archive")

  - [BioProject](/bioproject/index-e.html "BioProject")

  - [BioSample](/biosample/index-e.html "BioSample")

  - [Japanese Genotype-phenotype Archive
    (JGA)](/jga/index-e.html "Japanese Genotype-phenotype Archive")

  - [Submission portal
    D-way](https://ddbj.nig.ac.jp/D-way "Submission portal D-way")

<!-- end list -->

  - ### ![](/images/logos/sc-org.svg)NIG SuperComputer

  - [NIG
    SuperComputer](https://sc.ddbj.nig.ac.jp/en "NIG SuperComputer")

</div>

<div class="resources-box dbcls">

  - ### ![](/images/logos/dbcls-s.svg)DBCLS Services

  - [AOE](http://aoe.dbcls.jp/en "Statistics and trends of gene expression data")

  - [CRISPRdirect](https://crispr.dbcls.jp/ "Designing CRISPR/Cas9 guide RNA with reduced off-target sites")

  - [DBCLS
    SRA](http://sra.dbcls.jp/ "Statistics and trends of SRA data")

  - [Gendoo](http://gendoo.dbcls.jp/ "Functional profiling of gene and disease features for omics analysis")

  - [GGGenome](https://gggenome.dbcls.jp/en/ "A ultrafast sequence search")

  - [GGRNA](https://ggrna.dbcls.jp/en/ "A Google-like, ultrafast search engine for genes and transcripts")

  - [RefEx](http://refex.dbcls.jp/index.php?lang=en "A web tool for a comfortable search of reference data for gene expression analysis")

</div>

</div>

</div>

<div id="header-middle" class="clearfix">

<div class="page-title">

[BioProject](/bioproject/index-e.html)

</div>

<div class="search-box">

<div id="search-box-flex">

<div class="search-options-wrapper">

BI-DDBJ Web Sites Annotated/Assembled Sequences Sequence Read Archive

</div>

</div>

</div>

</div>

<div id="header-bottom">

  - [Home](/bioproject/index-e.html)
  - [Handbook](/bioproject/submission-e.html)
  - [FAQ](/bioproject/faq-e.html)
  - [Search](http://ddbj.nig.ac.jp/BPSearch/)
  - [Download![](/images/parts/arrow_down.svg)](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/bioproject)
      - [XML
        Schema](https://github.com/ddbj/pub/tree/master/docs/bioproject/xsd)
  - [About BioProject](/bioproject/about-e.html)

</div>

</div>

<div id="main" class="clearfix">

<div id="breadcrumb" class="clearfix">

  - [HOME](/bioproject/index-e.html "DDBJ BioProject top page")
  - \>
  - Handbook

</div>

<div id="primary">

<div id="page_main">

<div id="book">

# DDBJ BioProject Handbook

<div class="section book">

# BioProject

<div class="section chapter">

## Overview

<div class="section section">

### Purpose

New sequencing technologies have significantly increased the volume of
data that can be generated. Coupled with this, research is increasingly
collaborative and data resulting from collaboration can include distinct
types of data which may be submitted by more than one research group to
more than one archival database.

The BioProject resource organizes both the projects and the data from
those projects which is deposited into several archival databases
maintained by members of the [INSDC](http://www.insdc.org/). This allows
searching by characteristics of these projects, using the project
description and project content across the
[INSDC](http://www.insdc.org/)-associated databases.

![Overview of BioSample and BioProject integration with other DDBJ
databases](/images/submission/biosample_integration.jpg
"Overview of BioSample and BioProject integration with other DDBJ databases")

</div>

<div class="section section">

### Project

The definition of a set of related data, a 'project' is very flexible
and supports the need to define a complex project and various distinct
sub-projects using different parameters.

For example, BioProject records can be established for:

<div class="sub_index">

  - Genome sequencing and assembly
  - Metagenomes
  - Transcriptome sequencing and expression
  - Targeted locus sequencing
  - Genetic or RH Maps
  - Epigenetics
  - Phenotype or Genotype
  - Variation detection

</div>

BioProject represents a submission, initiative, or group of data that is
logically related in some manner, or is of interest to retrieve as a
distinct dataset. A project may be identified in terms of distinctions
in the type of data produced.

</div>

<div class="section section">

### Complex project

By selecting [Project Data Types](#Project_data_type)(for example,
"Genome Sequencing" and "Transcriptome or Gene Expression"), multiple
studies can be merged into single project.

In the project spanning multiple species, enter a taxonomic
classification common to the species (e.g., genus name).

In the [Sample scope](#BioProject_Sample_scope),
[Material](#Material)and [Capture](#Capture), select "Other" if
appropriate ones are not available.

A series of publications can be listed in the
[Publication](#Publication).

</div>

<div class="section section">

### Primary and Umbrella projects

There are two basic types of projects; primary and umbrella projects.

<div class="term_def">

  - Primary project:  
    Submitted projects which are intended to represent and be linked to
    current or future data submissions.
    <span class="attention_text">Primary projects can be kept
    private.</span>

  - Umbrella project:  
    Administrative project that is created to group multiple projects
    that are related by a single effort from a single submitter or group
    of submitters. Umbrella projects may be created automatically using
    a rule-based logic or may be created by database staff upon request
    or upon identification of a needed grouping.
    <span class="attention_text">Umbrella projects cannot be kept
    private.</span>
    
    Umbrella projects exist to provide an organizational structure to a
    large collaborative project and to group projects that are related
    via funding or submitting source or collaboration. Submitted primary
    projects are linked to data as it is submitted, and are linked to
    one or many umbrella projects. Submitted primary projects are not
    directly linked to other primary projects; they are linked
    indirectly by way of links to the umbrella project.
    
    Nucleotide sequence data can not directly refer an umbrella project.
    Sequence data are linked to an umbrella via a primary project.

</div>

</div>

<div class="section section">

### BioProject hierarchy

Definition of an umbrella project may be done in collaboration with a
funding source. For example, there may be a top-most administrative
project to represent the overarching initiative ("Genome Support
Project"), with a secondary layer of primary projects defining core
components of this initiative (reference genomes, rRNA sequencing,
metagenomes, etc.).

Some large initiatives are represented by more than one layer of
umbrella projects (see Figure B below); for instance, a top-most level
may identify the largest definition of the collaboration; a second level
of umbrella projects identify the primary categories of data production;
and finally a third layer represents the projects that actually generate
the data that is submitted. The Human Microbiome project is an example
of this type of complex hierarchy where the top-most project,
[PRJNA43021](https://www.ncbi.nlm.nih.gov/bioproject?term=PRJNA43021),
represents the most inclusive definition of the initiative, and a
secondary level (such as
[PRJNA28331](https://www.ncbi.nlm.nih.gov/bioproject?term=PRJNA28331))
identifies a major sub-project to sequence multiple reference genomes
each of which has a distinct project accession.

![Schematic diagram of BioProject hierarchies. (A)Two layers. (B)Three
layers.](/images/submission/bp_org.jpg
"Schematic diagram of BioProject hierarchies. (A)Two layers. (B)Three layers.")

<div class="term_def">

  - Two layers (A)  
    Initiatives may be organized as a single Umbrella project with one
    or many submitted projects that are connected to data. Example:
    [Neanderthal
    Metagenome](https://www.ncbi.nlm.nih.gov/bioproject/18309).

  - Three layers (B)  
    Very large initiatives which have distinct sub-projects may have two
    levels of Umbrella project. For example, a top-level Umbrella
    project groups all components of the initiative; mid-level Umbrella
    projects reflect two distinct branches of the project (such as
    sequencing vs. epigenetics); and several primary projects denote
    distinct project data types (e.g., genome sequencing, transcriptome,
    epigenetics, etc.). Example: [NIH Human Microbiome Project (HMP)
    Roadmap Project](https://www.ncbi.nlm.nih.gov/bioproject/43021).

</div>

</div>

<div class="section section">

### Data release

![Triggering of data release between primary projects and data
records.](/images/submission/release_re.jpg
"Figure 1. Triggering of data release between primary projects and data records.")

You can "immediately release" or "hold" the registered primary project.

The submitted primary project data can be kept private until the linked
DDBJ, DRA, DTA and DOR records made be public. Hold date of the project
data cannot be specified. Primary project data are automatically
released when the linked DDBJ record(s) is published. On the other hand,
publication of the primary project data do not cause automatic release
of the linked DDBJ record(s). Thus, under a primary project, publication
of a data record does not cause the indirect release of the other
records. Publication of the DDBJ records is independent from the release
of the linked project(s).

FAQ: [How are linked BioProject/BioSample/sequence data
released?](/faq/en/bp_bs_seq_release-e.html)

![Visibility of relationships between a public umbrella and primary
projects.](/images/submission/um_pri_visibility.jpg
"Visibility of relationships between public umbrella and primary projects.")

<span class="attention_text">An umbrella project cannot be kept
private.</span>An umbrella project can have public and private primary
projects. Hierarchical relationship between the public umbrella project
and the un-released primary project is invisible.

Released project data are exchanged with the other two INSDC partners
[NCBI](https://www.ncbi.nlm.nih.gov/bioproject)and
[EBI](https://www.ebi.ac.uk/)BioProject databases.

</div>

<div class="section section">

### Use an umbrella project

Please group related primary projects by using an umbrella project. An
umbrella project can group and present outputs from research project.

NCBI visualizes data under an umbrella project with some statistics for
easy navigation.

Project presentation examples:  
[Neanderthal
Metagenome](https://www.ncbi.nlm.nih.gov/bioproject/18309)  
[Escherichia coli
O104:H4](https://www.ncbi.nlm.nih.gov/bioproject/68275)

You can submit an umbrella project from [DDBJ submission
system](https://ddbj.nig.ac.jp/D-way/)in the same way as primary
project. <span class="attention_text">To remind the DDBJ BioProject
team, you need to enter "this is an umbrella project" in the [Private
comments to DDBJ staff](/bioproject/submission-e.html#Private_comments).
</span>Registered umbrella project cannot be kept private, but some
fields can be omitted.

To group primary projects under an umbrella, please follow the steps
below.  
First, submit and release an umbrella project. If necessary, please
share the assigned PRJDB number with relevant researchers.  
When submitting related primary projects, please provide the PRJDB
number of parent umbrella in the [Umbrella
BioProject](/bioproject/submission-e.html#Area_linked-project). Released
primary projects are automatically linked to the specified umbrella
project.

If you want to add already registered primary projects to the umbrella,
please [e-mail](/contact-e.html)the PRJDB numbers of umbrella and
related primary projects to the DDBJ BioProject team.

<span class="attention_text">Private primary projects are not released
by linking to public umbrella project.</span>

</div>

</div>

<div class="section chapter">

## Metadata

Required <span class="required">\*</span>  
Conditionally required <span class="conditionally_required">\*</span>

<div class="news_post_container archive glossary bioproject">

<div class="section terms section">

### Submitter

#### Submitter

Contact information of submitter(s). Questions and notifications about a
submission are contacted to the e-mail address(es) listed here. Personal
contact information is considered confidential and is collected to be
used by DDBJ BioProject staff should questions arise; the general
information about the research center is used for public display.

  - [First name](#BioProject_First_name)  
    Submitter's first name.

<!-- end list -->

  - [Last name](#BioProject_Last_name)<span class="required">\*</span>  
    Submitter's last name.

<!-- end list -->

  - [E-mail](#BioProject_E-mail) <span class="required">\*</span>  
    E-mail address. Enter an address from the organizations domain.

#### Organization

Organization to which a contact person belongs.

  - [Submitting organization](#BioProject_Submitting_organization)
    <span class="required">\*</span>  
    full name of organization.

<!-- end list -->

  - [Submitting organization
    URL](#BioProject_Submitting_organization_URL)  
    The URL of submitter's organization.

#### Data Release

Select "Hold" or "Release". You cannot specify hold date. Please see
[Release of projects](#Release_of_projects) for detailed release
mechanism.

  - [Hold](#BioProject_Hold)  
    Released concurrently when the DDBJ, DRA, DTA and DOR record(s)
    citing this ID is released.

<!-- end list -->

  - [Release](#BioProject_Release)  
    Release project data immediately. Private DDBJ record(s) citing this
    ID is not released.

</div>

<div class="section terms section">

### General info

#### Project Description

An informative paragraph that describes the project and provides
informative context for the displayed project record.

  - [Project title](#Project_title)<span class="required">\*</span>  
    Very short descriptive name of the project for caption, labels, etc
    for public display. For example: Chromosome Y sequencing, Global
    studies of microbial diversity on human skin.

<!-- end list -->

  - [Description](#Public_description)<span class="required">\*</span>  
    Description (a paragraph) of the project goals and purposes. Provide
    enough information (more than 100 characters) in the description for
    other users to interpret the data.

<!-- end list -->

  - [Private comments to DDBJ staff](#Private_comments)  
    Use this field if you have questions for database support staff. The
    content is not made public. If you intend to submit an umbrella
    project, please inform us that "this is umbrella project".

<!-- end list -->

  - [Relevance](#Relevance)  
    Select the primary general relevance of the study.
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

  - [Relevance
    description](#Relevance_description)<span class="conditionally_required">\*</span>  
    Describe the relevance when the Other is selected.

#### Umbrella BioProject

If you are registering a project that is part of an initiative which is
already registered in the BioProject database, then please tell us the
existing BioProject accession number and provide a general description
of the larger initiative. This information is needed for [project
linking](#primary-and-umbrella).

  - [Initiative
    description](#Initiative_description)<span class="conditionally_required">\*</span>  
    Description of an initiative.

<!-- end list -->

  - [Umbrella BioProject
    accession](#BioProject_BioProject_ID)<span class="conditionally_required">\*</span>  
    A BioProject accession number of an initiative which is already
    registered in the BioProject database.

#### External Links

An URL may be provided, with a label for the resource, to reference a
resource that is directly relevant to the submitted project.

  - [Link description](#URL_link_description)  
    Display name of web site that is related to this study.

<!-- end list -->

  - [URL](#BioProject_URL)  
    URL of web site that is related to this study.

#### Grants

Funding information for a project.

  - [Agency](#Agency)  
    Name of funding agency. For example: Japan Society for the Promotion
    of Science.

<!-- end list -->

  - [Agency abbreviation](#Agency_abbreviation)  
    Abbreviation of funding agency. For example: JSPS.

<!-- end list -->

  - [Grant ID](#Grant_ID)  
    Grant number is collected to support searches (e.g., publications
    often cite Grant numbers). For example: JSPS KAKENHI Grant Number
    12345678.

<!-- end list -->

  - [Grant title](#Grant_title)  
    Grant title may also support searches.

#### Consortium

  - [Consortium name](#Consortium_name)  
    If study is carried out as part of a consortium, provide the
    consortium name.

<!-- end list -->

  - [Consortium URL](#Consortium_URL)  
    If the consortium maintains a web site, provide the URL.

</div>

<div class="section terms section">

### Project type

#### Project data type

  - [Project data
    type](#Project_data_type)<span class="required">\*</span>  
    A general label indicating the primary study goal. Select
    appropriate types. [News: A BioProject record can have multiple
    project data types](/news/en/2014-11-12-e.html)
    
    NCBI individually assigns the [Project data
    type](https://www.ncbi.nlm.nih.gov/books/NBK54364/def-item/project-data-type/)
    based on the experimental data linked to the project. This type is
    not used by [EBI](https://www.ebi.ac.uk/ena/submit/project-format).
    
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

  - [Project data type
    description](#Project_data_type_description)<span class="conditionally_required">\*</span>  
    Describe the project data type when the Other is selected.

#### Sample scope/Material/Capture/Methodology

  - [Sample
    scope](#BioProject_Sample_scope)<span class="required">\*</span>  
    The scope and purity of the biological sample used for the study.
    | Sample scope  | Description                                                                                                                                                                       |
    | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Monoisolate   | A single animal, cultured cell-line, inbred population (or possibly a heterogeneous population when a single genome assembly is generated from the pooled sample; not preferred). |
    | Multiisolate  | Multiple individuals, a population (representation of a species).                                                                                                                 |
    | Multi-species | Sample represents multiple species.                                                                                                                                               |
    | Environment   | Species content of the sample is not known.                                                                                                                                       |
    | Synthetic     | Sample is synthetically created by a machine.                                                                                                                                     |
    | Other         | Specify the sample scope that was used in the "Target description".                                                                                                               |

<!-- end list -->

  - [Material](#Material)<span class="required">\*</span>  
    The type of material that is isolated from the sample for use in the
    experimental study.
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

  - [Capture](#Capture)<span class="required">\*</span>  
    The scale, or type, of information that the study is designed to
    generate from the sample material.
    | Capture             | Description                                                                     |
    | ------------------- | ------------------------------------------------------------------------------- |
    | Whole               | The project makes use of the whole sample material (most common case).          |
    | Clone Ends          | Capturing clone end data.                                                       |
    | Exome               | Capturing exon-specific data.                                                   |
    | Targeted Locus/Loci | Capturing specific loci (gene, genomic region, barcode standard).               |
    | Random Survey       | Not using whole sample, an incomplete survey of the sample.                     |
    | Other               | Specify the scale or type of the captured material in the "Target description". |

<!-- end list -->

  - [Target
    description](#Target_description)<span class="conditionally_required">\*</span>  
    Describe the Sample scope/Material/Capture when the Other(s) is
    selected.

<!-- end list -->

  - [Methodology](#Methodology)<span class="required">\*</span>  
    The core experimental approach used to obtain the data that is
    submitted to archival databases.
    | Methodology       | Description                                                     |
    | ----------------- | --------------------------------------------------------------- |
    | Sequencing        | Sequencing using Sanger, 454, Illumina, etc wit                 |
    | Array             | Data/Sequence are generated by hybridization arrays.            |
    | Mass Spectroscopy | Data are generated by mass spectroscopy.                        |
    | Other             | Please provide data description in the "Methodogy description". |

<!-- end list -->

  - [Methodology
    description](#Methodology_description)<span class="conditionally_required">\*</span>  
    Describe the methodology type when the Other is selected.

#### Objective

Project goals with respect to the type of data that will be generated
and submitted to an INSDC-associated database. Select all relevant menu
options.

  - [Objective](#Objective)<span class="required">\*</span>  
    Project goals with respect to the type of data that will be
    generated and submitted to an INSDC-associated database. Select all
    relevant menu options.
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

#### Locus tag prefix

  - [Locus tag
    prefix](#Locus_tag_prefix)<span class="conditionally_required">\*</span>  
    Locus tag prefix generation box will appear when \[Project data
    type="Genome Sequencing" or "Metagenome"\] AND \[Capture="Whole"\]
    AND \[Objective="Sequence" or "Annotation" or "Assembly"\].
    
    Registration of a unique locus tag prefix is required for studies
    that result in genome assemblies. Please leave the prefix box empty,
    when a prefix is not necessary for [WGS](/ddbj/wgs-e.html) only
    submission.
    
    [Locus tag prefix guideline](/ddbj/locus_tag-e.html).
    
    Locus tag prefix format  
    The locus\_tag prefix can contain only alpha-numeric characters and
    it must be 3-12 characters long. It should start with a letter, but
    numerals can be in the 2nd position or later in the string. (ex.
    A1C). There should be no symbols, such as -\_\* in the prefix. The
    locus\_tag prefix is to be separated from the tag value by an
    underscore ‘\_’, eg A1C\_00001.
    
    DDBJ BioProject limits the maximum tag length to 12 characters. In
    the BioProject submission system, the locus tag is displayed in
    capital letters. However, the tag is reserved in case-insensitive
    manner.

</div>

<div class="section terms section">

### Target

#### Organism information

Taxonomy and description of target organism.

  - [Organism
    name](#BioProject_Organism_name)<span class="required">\*</span>  
    Organism name in the [Taxonomy
    database](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html).
    Unclassified sequences including metagenome and environmental
    samples may be found at
    [here](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908&lvl=3&lin=f&keep=1&srchmode=1&unlock).
    
    In the project spanning multiple species, enter a taxonomic
    classification common to the species (e.g., genus name).
    
    If you intend to submit un-registered novel organism, please provide
    us the [detailed organism information](/ddbj/organism-e.html) in the
    [Description of novel organism](#Novel_organism) and proposed
    organism name in the Organism Name.

<!-- end list -->

  - [Taxonomy ID](#BioProject_Taxonomy_ID)  
    [NCBI Taxonomy
    ID](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html)

<!-- end list -->

  - [Strain, breed, cultivar](#Strain_breed_cultivar)  
    Microbial strain name, or eukaryotic breed or cultivar name. Please
    provide this or "Isolate name or label"

<!-- end list -->

  - [Isolate name or label](#Isolate_name_label)  
    A label for an isolated sample, or name of an individual animal
    (e.g., Clint). Please provide this or "Strain, breed, cultivar".

<!-- end list -->

  - [Description](#BioProject_Description)  
    A brief description, to elaborate upon the brief label.

<!-- end list -->

  - [Description of novel organism](#Novel_organism)  
    Enter necessary information to register an organism to the [taxonomy
    database](https://www.ncbi.nlm.nih.gov/Taxonomy/).

#### Environmental sample information

This section appears instead of the [Organism
information](#BioProject_Organism_name) when the Sample
scope="Environment" in the Target.

  - [Environmental sample
    name](#Environmental_sample_name)<span class="required">\*</span>  
    Unclassified sequences including metagenome and environmental
    samples may be found at
    [here](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908&lvl=3&lin=f&keep=1&srchmode=1&unlock).
    If an appropriate name was not found, describe a novel name you
    propose and details of sample information in the [Environmental
    sample description](#Environmental_sample_description).

<!-- end list -->

  - [Environmental sample
    description](#Environmental_sample_description)  
    Describe details of sample information.

#### General Properties

General properties of target organism.

  - [Cellularity](#Cellularity)  
    Select a cellularity.
    | Cellularity   |
    | ------------- |
    | Unicellular   |
    | Multicellular |
    | Colonial      |

<!-- end list -->

  - [Reproduction](#Reproduction)  
    Select a Reproduction.
    | Reproduction |
    | ------------ |
    | Sexual       |
    | Asexual      |

<!-- end list -->

  - [Haploid genome size](#Haploid_genome_size)  
    Haploid genome size in Kb, Mb or cM.

<!-- end list -->

  - [Ploidy](#Ploidy)  
    Select a Ploidy.
    | Ploidy        |
    | ------------- |
    | Haploid       |
    | Diploid       |
    | Polyploid     |
    | Allopolyploid |

#### Organism Replicons

Describe how many replicons this organism has, how they are named (e.g.,
1, 2, 3 vs. I, II, III), the replicon type (chromosome etc.), and the
subcellular structure that the replicon is located in.

  - [Name](#Replicon_name)  
    The preferred standard for the replicon name.

<!-- end list -->

  - [Type](#Replicon_type)  
    Select a replicon type.
    | Replicon type |
    | ------------- |
    | Chromosome    |
    | Plasmid       |
    | Linkage Group |
    | Segment       |
    | Other         |

<!-- end list -->

  - [Location](#Location)  
    The replicon subcellular location. For instance, the nucleus, or a
    differentiated organella. Please select "Nuclear or Prokaryote" for
    the chromosomes of eularyotes, bacteria or archaea.
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

  - [Size](#Size)  
    The size and unit of measurement for the estimated genome size.

<!-- end list -->

  - [Description](#Replicon_description)  
    A description of any unusual features of the replicon.

#### Phenotype

Phenotype of target organism.

  - [Disease](#Disease)  
    Enter a disease name.

<!-- end list -->

  - [Biotic Relationship](#BioticRelationship)  
    Select a BioticRelationship.
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

  - [Trophic Level](#TrophicLevel)  
    Select a TrophicLevel.
    | TrophicLevel |
    | ------------ |
    | Autotroph    |
    | Heterotroph  |
    | Mixotroph    |

#### Prokaryote Morphology

When the target organism is prokaryote, please describe the general
morphology if known.

  - [Shape](#Shape)  
    Select all relevant menu options.
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

  - [Gram](#Gram)  
    Choose gram positive or negative.
    | Gram     |
    | -------- |
    | Positive |
    | Negative |

<!-- end list -->

  - [Motility](#Motility)  
    Choose a Motility.
    | Motility |
    | -------- |
    | Yes      |
    | No       |

<!-- end list -->

  - [Enveloped](#Enveloped)  
    Choose enveloped or not.
    | Enveloped |
    | --------- |
    | Yes       |
    | No        |

<!-- end list -->

  - [Endospores](#Endospores)  
    Choose target bacteria forms endospores or not.
    | Endospores |
    | ---------- |
    | Yes        |
    | No         |

#### Ecological Environment

The general habitat for any organism. Please indicate additional
extremophile parameters if known.

  - [Habitat](#Habitat)  
    Choose a Habitat.
    | Habitat        |
    | -------------- |
    | HostAssociated |
    | Aquatic        |
    | Terrestrial    |
    | Specialized    |
    | Multiple       |
    | Unknown        |

<!-- end list -->

  - [Salinity](#Salinity)  
    Choose a Salinity.
    | Salinity           |
    | ------------------ |
    | NonHalophilic      |
    | Mesophilic         |
    | ModerateHalophilic |
    | ExtremeHalophilic  |
    | Unknown            |

<!-- end list -->

  - [Oxygen requirement](#OxygenReq)  
    Choose an Oxygen requirement.
    | OxygenReq       |
    | --------------- |
    | Aerobic         |
    | Microaerophilic |
    | Facultative     |
    | Anaerobic       |
    | Unknown         |

<!-- end list -->

  - [Temperature range](#TemperatureRange)  
    Choose a temperature range.
    | TemperatureRange  |
    | ----------------- |
    | Cryophilic        |
    | Psychrophilic     |
    | Mesophilic        |
    | Thermophilic      |
    | Hyperthermophilic |
    | Unknown           |

<!-- end list -->

  - [Optimum Temperature](#OptimumTemperature)  
    Optimum temperature in Celsius.

</div>

<div class="section terms section">

### Publication

  - [PubMed ID](#BioProject_PubMed_ID)  
    The PubMed ID(s) will be used to populate the publication
    information.

<!-- end list -->

  - [DOI](#BioProject_DOI)  
    Provide a DOI if a PubMed ID is not available. Provide the
    additional reference information.

<!-- end list -->

  - [Reference
    title](#BioProject_Reference_title)<span class="required">\*</span>  
    A title of reference.

<!-- end list -->

  - [Journal
    title](#BioProject_Journal_title)<span class="required">\*</span>  
    A title of journal.

<!-- end list -->

  - [Year](#BioProject_Year)<span class="required">\*</span>  
    Publication year.

<!-- end list -->

  - [Volume](#BioProject_Volume)<span class="required">\*</span>  
    Journal volume.

<!-- end list -->

  - [Issue](#BioProject_Issue)<span class="required">\*</span>  
    Journal issue.

<!-- end list -->

  - [Pages
    from](#BioProject_Pages_from)<span class="required">\*</span>  
    Reference start page.

<!-- end list -->

  - [Pages to](#BioProject_Pages_to)<span class="required">\*</span>  
    Reference end page.

<!-- end list -->

  - [First
    name](#BioProject_First_name_publication)<span class="required">\*</span>  
    First name of author.

<!-- end list -->

  - [MI](#BioProject_MI)  
    Middle initial.

<!-- end list -->

  - [Last
    name](#BioProject_Last_name_publication)<span class="required">\*</span>  
    Last name of author.

<!-- end list -->

  - [Suffix](#BioProject_Suffix)  
    Suffix for author.

<!-- end list -->

  - [This publication has multiple
    authors](#BioProject_This_publication_has_multiple_authors)  
    If this is checked, then "et al" is added to the author name
    provided above.

</div>

</div>

<div class="section section">

### XML schema

[BioProject XML
schema](https://github.com/ddbj/pub/tree/master/docs/bioproject)

</div>

</div>

</div>

<div class="section book">

# Submission to BioProject

<div id="human_subject" class="attention no_top">

  - Submission of research data from human subjects  
    For submitting data from human subjects (human data) to the
    databases of DDBJ center, it is submitter's responsibility to ensure
    that the dignity and right of human subject are protected in
    accordance with all applicable laws, ordinances, guidelines and
    policies of submitter's institution. In principle, make sure to
    remove any direct personal identifiers of human subjects from your
    data to be submitted. Before submitting human data, read the
    "[Submission of research data from human
    subjects](/policies-e.html#human)".

</div>

<div class="section chapter">

## Submission to BioProject

<div class="section section">

### Cases requiring project registration

Registration for a BioProject accession is required in the following
cases.

<div class="sub_index">

  - submit sequencing data to DRA
  - submit genome sequences to DDBJ

</div>

Registration for a BioProject accession is encouraged in the following
cases.

<div class="sub_index">

  - projects that result in a very large volume of data submissions
  - submissions from multiple members of a collaboration
  - submissions to multiple archival databases

</div>

Registration for a BioProject accession is not required in the following
cases. Register an accession if necessary.

<div class="sub_index">

  - small datasets for which the results are found in one (or a small
    number) of accession numbers such as a single plasmid, viral or
    organelle genome sequencing study

</div>

A BioProject accession is required for submission to [Sequence Read
Archive](/dra/index-e.html), and microbial and eukaryotic genomes
submissions to the DDBJ. If you obtain a BioProject accession from DDBJ,
please submit your related biological data to the
[DDBJ](http://www.ddbj.nig.ac.jp), [Sequence Read
Archive](/dra/index-e.html)and [Trace Archive](/dta/index-e.html).

[The INSDC stopped to assigning strain-level taxonomy ID to microbes
whose genomes have been submitted to the
INSDC.](/news/en/2014-02-12-e.html)

</div>

<div class="section section">

### Submit a new BioProject submission

According to the [Account Handbook](/account-e.html), obtain a
submission account.

Submit a new project by clicking the \[New submission\].

If there is no reply from submitters after three months of initial
contact, submissions will be cancelled.

![Submit a new BioProject](/images/books/hbp-01.jpg
"Submit a new BioProject")

To submit a BioProject, enter content from left to right tabs. Submitter
information is copied with account information.

For BioProject metadata, please see [here](#metadata).

![Enter project content](/images/books/hbp-02.jpg
"Enter project content")

To submit genome assemblies to DDBJ, a unique [Locus tag
prefix](/ddbj/locus_tag-e.html)is necessary.

Locus tag prefix generation box will appear when \[Project data
type="Genome Sequencing" or "Metagenome"\] AND \[Capture="Whole"\] AND
\[Objective="Sequence" or "Annotation" or "Assembly"\]. Registration of
a unique locus tag prefix is required for studies that result in genome
assemblies.

The locus\_tag prefix can contain only alpha-numeric characters and it
must be at least 3 characters long. It should start with a letter, but
numerals can be in the 2nd position or later in the string. (ex. A1C).
There should be no symbols, such as -\_\* in the prefix. The locus\_tag
prefix is to be separated from the tag value by an underscore ‘\_’, eg
A1C\_00001.

Please leave the prefix box empty, when a prefix is not necessary for
[WGS](/ddbj/wgs-e.html)only submission.

Prefix is managed by NCBI. When a project is submitted, our system tries
to reserve prefix to NCBI. When the prefix has already been reserved, an
error message will be displayed. Please enter a different prefix and
submit again.

When multiple prefixes are necessary, please [contact
us](/contact-e.html).

![Reserve a locus tag prefix](/images/books/hbp-03.jpg
"Reserve a locus tag prefix")

Check the content in "OVERVIEW" and submit a project by clicking the
\[Submit\].

![Submit BioProject](/images/books/hbp-04.jpg "Submit BioProject")

The "OVERVIEW" tab continue to display submitted content. Updates will
not be reflected in the "OVERVIEW" tab.

</div>

<div class="section section">

### Accession number

Temporary numbers with prefix PSUB are automatically assigned to
submitted projects. Projects can be referred by the PSUB numbers until
official accession numbers will be assigned. DDBJ BioProject staff
review submissions and issue accession numbers with prefix PRJD to
completed projects. Submitters can view accession numbers and submission
status in your [submission account](https://ddbj.nig.ac.jp/D-way/).

<div class="sub_index attention">

  - Do NOT cite numbers with prefix PSUB in publication.
  - Do not double submit the projects which have been registered to EBI
    and NCBI.

</div>

</div>

<div class="section section">

### Submit an umbrella project

Umbrella project can be submitted as primary project in [submission
account](https://ddbj.nig.ac.jp/D-way/). <span class="attention_text">Be
sure to tell the DDBJ BioProject staff that submitting project is
umbrella by writing so in the [Private comments to DDBJ
staff](#Private_comments). </span>Umbrell project cannot be kept
private.

![Tell DDBJ staff that submitting project is
umbrella](/images/books/hbp-05.jpg
"Tell DDBJ staff that submitting project is umbrella")

</div>

<div class="section section">

### Link primary project to umbrella

When submitting project, in the [Umbrella
BioProject](#Area_linked-project), enter abstract and accession number
of an umbrella to be linked. The DDBJ BioProject staff link the
submitted primary project to the umbrella based on this information.

![Link to umbrella](/images/books/hbp-06.jpg "Link to umbrella")

</div>

<div class="section section">

### Release of projects

Registered projects can be released in the following two ways:

<div class="sub_index">

  - Release immediately after registration.
  - Release when records citing the BioProject accession are made
    public.

</div>

The projects can be kept private. If DDBJ records citing the BioProject
accession are made public, [cited projects are automatically
released](#data-release). Private DDBJ records citing this BioProject
accession are not made public.

Hold date cannot be set for BioProject.

Public projects are exchanged among
[NCBI](https://www.ncbi.nlm.nih.gov/bioproject)and
[EBI](https://www.ebi.ac.uk/)BioProject databases.

</div>

<div class="section section">

### Update

Registered projects can be updated. Please [contact the BioProject
staff](/contact.html)to update the projects.

</div>

<div class="section section">

### Link experimental data and project

For the SRA submission, select the BioProject accession that you
registered in advance in the Study.

For genome and TSA submissions to the DDBJ, enter the BioProject
accession in the DBLINK.

</div>

</div>

</div>

</div>

</div>

</div>

<div id="side_navigation">

<div class="side_nav_menu handbook_contents handbook submission">

<div id="in_this_page">

## In this page

</div>

</div>

</div>

</div>

<div id="footer_original" class="clearfix">

  - [Policies and
    Disclaimers](/policies-e.html "Policies and Disclaimers")
  - [News](/news/en/index-e.html "News archives")
  - [FAQs](/faq/en/index-e.html "Frequently asked questions")
  - [Sitemap](/sitemap-e.html "Sitemap")
  - [Calendar](/calendar-e.html "DDBJ Center Calendar")
  - [Address](/access-e.html "DDBJ Center address")
  - [Contact](/contact-e.html "Contact to DDBJ Center")
  - Last modified: 2018-06-04

</div>

</div>