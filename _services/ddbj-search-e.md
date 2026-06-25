---
layout: indexed_content
title: DDBJ Search
category: services
lang: en
related_pages:
  - title: ARSA Help
    url: /services/arsa-e.html
  - title: getentry Help
    url: /services/getentry-e.html
  - title: BLAST Help
    url: /services/blast-e.html
  - title: TXSearch Help
    url: /services/txsearch-e.html
  - title: ClustalW Help
    url: /services/clustalw-e.html
  - title: VecScreen Help
    url: /services/vecscreen-e.html
  - title: References
    url: /services/references-e.html
  - title: Services in past
    url: /services/past-services-e.html
  - title: WABI (Web API for Biology)
    url: /services/wabi-e.html
  - title: WABI BLAST Help
    url: /services/wabi-blast-e.html
---

## About DDBJ Search  {#About_ddbjsearch}
- DDBJ Search is a search system for INSDC BioProject/BioSample/SRA and JGA/GEA/MetaboBank by [accession number](/insdc/accessions-e.html) and keyword.
- Revision history search is not provided.
- DDBJ Search is, as well as a simple web form, available by WebAPI program which calls up the data directly.
- DDBJ flat file data retrieval is unavailable in DDBJ Search, please refer [getentry](https://getentry.ddbj.nig.ac.jp/top-e.html).

## Search from Web Browser  {#Search_from_Web_Browser}
URL : [https://ddbj.nig.ac.jp/search](https://ddbj.nig.ac.jp/search)

### Search by keywords {#Keyword_}
- Accession number and keywords are searchable.  
- Wildcards (\*,?) cannot be used.

#### 1) Accession numbers  
- Input the Accession Number.  
- Performs a forward-matching, case-insensitive search.   
- Multiple number search and range search are not available.  

Example:  
PRJDB1000  
SAMD00020000  

#### 2) Keywords
- Input the term or letters of the metadata of BioProject, BioSample, SRA, JGA , GEA and MetaboBank records.  
- Contents of Title, Description and Organism are searchable.  
- Performs a forward-matching, case-insensitive search.  
- AND/OR search is not available.  

Example:  
Homo sapiens  
metagenome  

### Selection by faceted Menu  {#Faceted_}
- You can narrow down your query by using the faceted menu (Database, Type, Organism, Published Date) on the left side of the page.　　

#### 1) Database  
- There are six items to choose from: BioProject, BioSample, SRA, JGA, GEA and MetaboBank.

#### 2) Type  
- There are fourteen items to choose from: bioproject, biosample, sra-submission, sra-study, sra-sample, sra-experiment, sra-run, sra-analysis, jga-dataset, jga-study, jga-policy, jga-dac, gea and metabobank.

#### 3) Organism  
- You can choose from a list of organism names.  
- In the Organism keyword field, you can input the name of organism listed in the facet menu (the top 100 organisms). For other organism names, please use the keyword search at the top left side of the page.

#### 4) Published Date  
- You can set a range of data published dates (Date Published).

### Output format {#output_}
- The search results by keyword and selected facet items are displayed.  
- Details information of the record is displayed by cricking each record ID.  
- The following metadata items are displayed.  
- Each item may not be displayed if it has no value.  

#### 1) Common Item

|---|
Identifier      |Accession number
Type		    |Data type, one of the following values: bioproject, biosample, sra-submission, sra-study, sra-sample, sra-experiment, sra-run, sra-analysis, jga-dataset, jga-study, jga-policy, jga-da, gea, metabobank
sameAs	　　    |Number (ID) of equivalent records in other databases
Organism 	    |Organism name (value in [NCBI Taxonomy database](https://www.ncbi.nlm.nih.gov/taxonomy))
Title		    |Short title
Description	    |Description of the contents
Properties	|The metadata of this record represented in JSON format. The "+" icon at the upper right of the black frame allows you to switch between full view and partial view. The icon to the left of the icon allows you to copy the contents.
dbXrefs		    |Links to the related accession numbers in the INSDC databases (BioProject, BioSample, SRA, Assembly, conventional sequence data, master record of bulk sequence data (WGS/TLS/TSA), NCBI taxonomy), the DDBJ databases (GEA, MetaboBank, JGA), the NBDC human database and the NCBI PubMed database.\*
Download	    |Link to download file
Status		    |Status of INSDC data publication
Accessibility   |State of restricted access to data\*\*
Date Created    |Date of data submitted
Date Modified   |Date of last data published
Date Published  |Date of first data published

\* The maximum number of accession numbers listed is 100. In case of there are accession numbers more than 100, whole list can get by the JSON format from cricking "dedicated API" in the upper right position.  
\*\* Controlled-access indicates restricted access data for samples from human individuals that require an application to the NBDC human 	database to obtain raw data and detailed metadata.  

#### 2) Type-specific items

**bioproject**

|---|
Project type	|Umbrella BioProject (if the BioProject is an Umbrella BioProject)
parentBioprojects	|List of umbrella projects of this project
childBioprojects	|List of child projects of this project
Organization	|Name of the implementing organization of this project
Publication	    |Literature information related to this project
Grant		    |Project budget information
External link  	|URLs of resources directly related to the project (Examples: GEA, MetaboBank, GEO, GOLD) 

**biosample**

|---|
Host		|The natural (as opposed to laboratory) host to the organism from which the sample was obtained
Strain		|Microbial or eukaryotic strain name
Isolate		|Identifier of the specific individual or sample
Geo Loc Name	|Geographical origin of the sample
Collection Date	|Time of sampling
Attributes	|Sample package's [attribute](https://www.ddbj.nig.ac.jp/biosample/attribute-e.html) information

**sra-sample**

|---|
Geo Loc Name	|Geographical origin of the sample
Collection Date	|Time of sampling
Attributes	|Sample package's [attribute](https://www.ddbj.nig.ac.jp/biosample/attribute-e.html) information

**sra-experiment**

|---|
Library Strategy	|Sequencing technique intended for this library
Library Source		|Library source specifies the type of source material that is being sequenced
Library Selection	|Method used to select and/or enrich the material being sequenced
Library Layout		|Layout of reads in sequencing data files
Library Name		|Submitter’s name for this library
Library Construction Protocol	|Protocol by which the sequencing library was constructed
Platform		    |Sequencing instrument used
Instrument Model	|Sequencing instrument model

**gea**

|---|
Experiment Type  	|The type of experimental method

**metabobank**

|---|
Study Type		    |The type of the study content
Experiment Type		|The type of experimental method
Submission Type		|The type of this submission (Examples: LC-MS, GC-MS)


### Limit（upper limit of the data acquisition）  {#Limit_}

10000 recoreds   

### Download files {#Downliad_}

|---|
[BioProject/BioSample] metadata |JSON, JSON-LD
[SRA] metadata                  |XML
[SRA] fastq                     |FASTQ
[SRA] sra                       |SRA
[SRA] analysis data             |DATA
[GEA] metadata                  |DATA
[MetaboBank] raw and metadata   |DATA

## Search by WebAPI

DDBJ Search is available from WebAPI program, as well as a simple web form, which calls up the data directly. For details, see below.  

[https://github.com/ddbj/ddbj-search-api](https://github.com/ddbj/ddbj-search-api)(in Japanease)

## How to Create Links to BioProject/BioSample/SRA/JGA Records {#ds_createlinks}

### You can create links to individual BioProject, BioSample, SRA, JGA, GEA and MetaboBank records.  

Format:  
https://ddbj.nig.ac.jp/search/entry/{Type name}/{Accession number}  

Example:  
https://ddbj.nig.ac.jp/search/entry/bioproject/PRJDB1000  
https://ddbj.nig.ac.jp/search/entry/sra-experiment/SRX10474797  
https://ddbj.nig.ac.jp/search/entry/gea/E-GEAD-282  
https://ddbj.nig.ac.jp/search/entry/metabobank/MTBKS201  
