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

Select "Hold" or "Release". You cannot specify hold date. Please see [Release of projects](#Release_of_projects) for detailed release mechanism.

[Hold](#BioProject_Hold)<a name="BioProject_Hold"></a>  
: Released concurrently when the DDBJ/DRA/GEA/MetaboBank data citing this ID are released.

[Release](#BioProject_Release)<a name="BioProject_Release"></a>  
: Release project data immediately. Private DDBJ/DRA/GEA/MetaboBank data citing this ID are not released.

## General info  {#General-info}

### Project Description  {#Area_project-description}

An informative paragraph that describes the project and provides informative context for the displayed project record.

[Project title](#Project_title)<span class="red">\*</span><a name="Project_title"></a>  
: Very short descriptive name of the project for caption, labels, etc for public display. For example: Chromosome Y sequencing, Global studies of microbial diversity on human skin.

[Description](#Public_description)<span class="red">\*</span><a name="Public_description"></a>  
: Description (a paragraph) of the project goals and purposes. Provide enough information (more than 100 characters) in the description for other users to interpret the data.

[Private comments to DDBJ staff](#Private_comments)<a name="Private_comments"></a>  
: Use this field if you have questions for database support staff. The content is not made public. If you intend to [submit an umbrella project](/bioproject/submission-e.html#submit-umbrella-project), please inform us that "this is umbrella project" (e.g., Please register this project as an umbrella project).  
To submit data corresponding to personal identification code, write the approved NBDC data submission application ID (for example, J-DS000001-001).

[Relevance](#Relevance)<a name="Relevance"></a>  
: Select the primary general relevance of the study.
  
| Relevance     | Description                                                                                                    |
|---|
| Agricultural  |                                                                                                                |
| Medical       |                                                                                                                |
| Industrial    | Could include bio-remediation, bio-fuels and other areas of research where there are areas of mass production. |
| Environmental |                                                                                                                |
| Evolution     |                                                                                                                |
| ModelOrganism |                                                                                                                |
| Other         | Unspecified major impact categories to be defined in the "Relevance description".                              |

[Relevance description](#Relevance_description)<span class="conditionally_required">\*</span><a name="Relevance_description"></a>  
: Describe the relevance when the Other is selected.

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

### Consortium  {#Area_consortium}

[Consortium name](#Consortium_name)<a name="Consortium_name"></a> 
: If study is carried out as part of a consortium, provide the consortium name.

[Consortium URL](#Consortium_URL)<a name="Consortium_URL"></a>  
: If the consortium maintains a web site, provide the URL.

## Project type  {#Project-type}

### Project data type {#Project_data_type}

[Project data type](#Project_data_type)<span class="red">\*</span><a name="Project_data_type"></a>
: A general label indicating the primary study goal. Select appropriate types. [News: A BioProject record can have multiple project data types](/news/en/2014-11-12-e.html)
    
NCBI individually assigns the [Project data type](https://www.ncbi.nlm.nih.gov/books/NBK54364/def-item/project-data-type/) based on the experimental data linked to the project. This type is not used by [EBI](https://www.ebi.ac.uk/ena/submit/project-format).
    
| Project Data type                | Description                                                                                                                     |
|---|
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
   
[Project data type description](#Project_data_type_description)<span class="conditionally_required">\*</span><a name="Project_data_type_description"></a>  
: Describe the project data type when the Other is selected.

### Sample scope/Material/Capture/Methodology  {#Area_sample-scopematerialcapturemethodology}

[Sample scope](#BioProject_Sample_scope)<span class="red">\*</span><a name="BioProject_Sample_scope"></a>  
: The scope and purity of the biological sample used for the study.

| Sample scope  | Description                                                                                                                                                                       |
|---|
| Monoisolate   | A single animal, cultured cell-line, inbred population (or possibly a heterogeneous population when a single genome assembly is generated from the pooled sample; not preferred). |
| Multiisolate  | Multiple individuals, a population (representation of a species).                                                                                                                 |
| Multi-species | Sample represents multiple species.                                                                                                                                               |
| Environment   | Species content of the sample is not known.                                                                                                                                       |
| Synthetic     | Sample is synthetically created by a machine.                                                                                                                                     |
| Other         | Specify the sample scope that was used in the "Target description".                                                                                                               |

[Material](#Material)<span class="red">\*</span><a name="Material"></a>
: The type of material that is isolated from the sample for use in the experimental study.

| Material       | Description                                                                                    |
|---|
| Genome         | A whole genome initiative. May be only the nuclear genome. Use for DNA of a metagenome sample. |
| Partial Genome | One or more chromosomes or replicons were experimentally purified.                             |
| Transcriptome  | Transcript data.                                                                               |
| Reagent        | Material studied was obtained by chemical reaction, precipitation.                             |
| Proteome       | Protein or peptide data.                                                                       |
| Phenotype      | Phenotypic descriptive data.                                                                   |
| Other          | Specify the material that was used in the "Target description".                                |

[Capture](#Capture)<span class="red">\*</span><a name="Capture"></a>  
: The scale, or type, of information that the study is designed to generate from the sample material.

| Capture             | Description                                                                     |
|---|
| Whole               | The project makes use of the whole sample material (most common case).          |
| Clone Ends          | Capturing clone end data.                                                       |
| Exome               | Capturing exon-specific data.                                                   |
| Targeted Locus/Loci | Capturing specific loci (gene, genomic region, barcode standard).               |
| Random Survey       | Not using whole sample, an incomplete survey of the sample.                     |
| Other               | Specify the scale or type of the captured material in the "Target description". |

[Target description](#Target_description)<span class="conditionally_required">\*</span><a name="Target_description"></a> 
: Describe the Sample scope/Material/Capture when the Other(s) is selected.

[Methodology](#Methodology)<span class="red">\*</span><a name="Methodology"></a>  
: The core experimental approach used to obtain the data that is submitted to archival databases.

| Methodology       | Description                                                     |
|---|
| Sequencing        | Sequencing using Sanger, 454, Illumina, etc wit                 |
| Array             | Data/Sequence are generated by hybridization arrays.            |
| Mass Spectroscopy | Data are generated by mass spectroscopy.                        |
| Other             | Please provide data description in the "Methodogy description". |

[Methodology description](#Methodology_description)<span class="conditionally_required">\*</span><a name="Methodology_description"></a>  
: Describe the methodology type when the Other is selected.

### Objective  {#Area_objective}

Project goals with respect to the type of data that will be generated and submitted to an INSDC-associated database. Select all relevant menu options.

[Objective](#Objective)<span class="red">\*</span><a name="Objective"></a>  
: Project goals with respect to the type of data that will be generated and submitted to an INSDC-associated database. Select all relevant menu options.

| Objective          | Description                                                                    |
|---|
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

## Target  {#Target}

### Organism information  {#Area_organism-information}

Taxonomy and description of target organism.

[Organism name](#BioProject_Organism_name)<span class="red">\*</span><a name="BioProject_Organism_name"></a><a name="BioProject_Organism_name"></a>
: Organism name in the [Taxonomy database](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html). Unclassified sequences including metagenome and environmental samples may be found at [here](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908&lvl=3&lin=f&keep=1&srchmode=1&unlock).
    
In the project spanning multiple species, enter a taxonomic classification common to the species (e.g., genus name).
    
If you intend to submit un-registered novel organism, please provide us the [detailed organism information](/ddbj/organism-e.html) in the [Description of novel organism](#Novel_organism) and proposed organism name in the Organism Name.

[Taxonomy ID](#BioProject_Taxonomy_ID)<a name="BioProject_Taxonomy_ID"></a>  
: [NCBI Taxonomy ID](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html)

[Strain, breed, cultivar](#Strain_breed_cultivar)<a name="Strain_breed_cultivar"></a>  
: Microbial strain name, or eukaryotic breed or cultivar name. Please provide this or "Isolate name or label"

[Isolate name or label](#Isolate_name_label)<a name="Isolate_name_label"></a>  
: A label for an isolated sample, or name of an individual animal (e.g., Clint). Please provide this or "Strain, breed, cultivar".

[Description](#BioProject_Description)<a name="BioProject_Description"></a>  
: A brief description, to elaborate upon the brief label.

[Description of novel organism](#Novel_organism)<a name="Novel_organism"></a>  
: Enter necessary information to register an organism to the [taxonomy database](https://www.ncbi.nlm.nih.gov/Taxonomy/).

### General Properties  {#Area_general-properties}

General properties of target organism.

[Cellularity](#Cellularity)<a name="Cellularity"></a>  
: Select a cellularity.

| Cellularity   |
|---|
| Unicellular   |
| Multicellular |
| Colonial      |

[Reproduction](#Reproduction)<a name="Reproduction"></a>  
: Select a Reproduction.

| Reproduction |
|---|
| Sexual       |
| Asexual      |

[Haploid genome size](#Haploid_genome_size)<a name="Haploid_genome_size"></a>  
: Haploid genome size in Kb, Mb or cM.

[Ploidy](#Ploidy)<a name="Ploidy"></a>  
: Select a Ploidy.

| Ploidy        |
|---|
| Haploid       |
| Diploid       |
| Polyploid     |
| Allopolyploid |

### Organism Replicons  {#Area_organism-replicons}

Describe how many replicons this organism has, how they are named (e.g., 1, 2, 3 vs. I, II, III), the replicon type (chromosome etc.), and the subcellular structure that the replicon is located in.

[Name](#Replicon_name)<a name="Replicon_name"></a>  
: The preferred standard for the replicon name.

[Type](#Replicon_type)<a name="Replicon_type"></a>  
: Select a replicon type.

| Replicon type |
|---|
| Chromosome    |
| Plasmid       |
| Linkage Group |
| Segment       |
| Other         |

[Location](#Location)<a name="Location"></a>  
: The replicon subcellular location. For instance, the nucleus, or a differentiated organella. Please select "Nuclear or Prokaryote" for the chromosomes of eularyotes, bacteria or archaea.

| Location              |
|---|
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

[Size](#Size)<a name="Size"></a>  
: The size and unit of measurement for the estimated genome size.

[Description](#Replicon_description)<a name="Replicon_description"></a>  
: A description of any unusual features of the replicon.

### Phenotype  {#Area_phenotype}

Phenotype of target organism.

[Disease](#Disease)<a name="Disease"></a>  
: Enter a disease name.

[Biotic Relationship](#BioticRelationship)<a name="BioticRelationship"></a>
: Select a BioticRelationship.

| BioticRelationship |
|---|
| FreeLiving         |
| Commensal          |
| Symbiont           |
| Episymbiont        |
| Intracellular      |
| Parasite           |
| Host               |
| Endosymbiont       |

[Trophic Level](#TrophicLevel)<a name="TrophicLevel"></a>
: Select a TrophicLevel.

| TrophicLevel |
|---|
| Autotroph    |
| Heterotroph  |
| Mixotroph    |

### Prokaryote Morphology  {#Area_prokaryote-morphology}

When the target organism is prokaryote, please describe the general morphology if known.

[Shape](#Shape)<a name="Shape"></a>
: Select all relevant menu options.

| Shape        | Description                                          |
|---|
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

[Gram](#Gram)<a name="Gram"></a>
: Choose gram positive or negative.

| Gram     |
|---|
| Positive |
| Negative |

[Motility](#Motility)<a name="Motility"></a>  
: Choose a Motility.

| Motility |
|---|
| Yes      |
| No       |

[Enveloped](#Enveloped)<a name="Enveloped"></a>  
: Choose enveloped or not.

| Enveloped |
|---|
| Yes       |
| No        |

[Endospores](#Endospores)<a name="Endospores"></a>  
: Choose target bacteria forms endospores or not.

| Endospores |
|---|
| Yes        |
| No         |

### Ecological Environment  {#Area_ecological-environment}

The general habitat for any organism. Please indicate additional extremophile parameters if known.

[Habitat](#Habitat)<a name="Habitat"></a>  
: Choose a Habitat.

| Habitat        |
|---|
| HostAssociated |
| Aquatic        |
| Terrestrial    |
| Specialized    |
| Multiple       |
| Unknown        |

[Salinity](#Salinity)<a name="Salinity"></a>  
: Choose a Salinity.

| Salinity           |
|---|
| NonHalophilic      |
| Mesophilic         |
| ModerateHalophilic |
| ExtremeHalophilic  |
| Unknown            |

[Oxygen requirement](#OxygenReq)<a name="OxygenReq"></a>  
: Choose an Oxygen requirement.

| OxygenReq       |
|---|
| Aerobic         |
| Microaerophilic |
| Facultative     |
| Anaerobic       |
| Unknown         |

[Temperature range](#TemperatureRange)<a name="TemperatureRange"></a>  
: Choose a temperature range.

| TemperatureRange  |
|---|
| Cryophilic        |
| Psychrophilic     |
| Mesophilic        |
| Thermophilic      |
| Hyperthermophilic |
| Unknown           |

[Optimum Temperature](#OptimumTemperature)<a name="OptimumTemperature"></a>  
: Optimum temperature in Celsius.

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
: Provide a DOI if a PubMed ID is not available. Provide the additional reference information.

```
<Publication id="10.1093/nar/gku1120">
  <DbType>eDOI</DbType>
</Publication>
<ProjectReleaseDate>
```

[Reference title](#BioProject_Reference_title)<span class="red">\*</span><a name="BioProject_Reference_title"></a>  
: A title of reference.

[Journal title](#BioProject_Journal_title)<span class="red">\*</span><a name="BioProject_Journal_title"></a>  
: A title of journal.

[Year](#BioProject_Year)<span class="red">\*</span><a name="BioProject_Year"></a>  
: Publication year.

[Volume](#BioProject_Volume)<span class="red">\*</span><a name="BioProject_Volume"></a>  
: Journal volume.

[Issue](#BioProject_Issue)<span class="red">\*</span><a name="BioProject_Issue"></a>  
: Journal issue.

[Pages from](#BioProject_Pages_from)<span class="red">\*</span><a name="BioProject_Pages_from"></a>  
: Reference start page.

[Pages to](#BioProject_Pages_to)<span class="red">\*</span><a name="BioProject_Pages_to"></a>  
: Reference end page.

[First name](#BioProject_First_name_publication)<span class="red">\*</span><a name="BioProject_First_name_publication"></a>  
: First name of author.

[MI](#BioProject_MI)<a name="BioProject_MI"></a>  
: Middle initial.

[Last name](#BioProject_Last_name_publication)<span class="red">\*</span><a name="BioProject_Last_name_publication"></a>  
: Last name of author.

[Suffix](#BioProject_Suffix)<a name="BioProject_Suffix"></a>  
: Suffix for author.

[This publication has multiple authors](#BioProject_This_publication_has_multiple_authors)<a name="BioProject_This_publication_has_multiple_authors"></a>  
: If this is checked, then "et al" is added to the author name provided above.

## XML schema  {#xml-schema}

[BioProject XML schema](https://github.com/ddbj/pub/tree/master/docs/bioproject)

