---
layout: indexed_content
title: Metadata
pathname: metadata-e
category: aboutgea
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
  - [Japanese](/gea/metadata.html)

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

[Genomic Expression Archive](/gea/index-e.html)

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

  - [Home](/gea/index-e.html)
  - [Submission
    Overview![](/images/parts/arrow_down.svg)](/gea/overview-e.html)
      - [Submit microarray experiment](/gea/submit-array-e.html)
      - [Submit sequencing experiment](/gea/submit-seq-e.html)
      - [Metadata](/gea/metadata-e.html)
      - [Data File](/gea/datafile-e.html)
      - [Validation](/gea/validation-e.html)
      - [Example](/gea/example-e.html)
      - [Array Design](/gea/adf-e.html)
      - [Data matrix](/gea/matrix-e.html)
      - [Reviewer Access](/gea/reviewer-access-e.html)
  - [FAQ](/gea/faq-e.html)
  - [Search
    (AOE)![](/images/parts/arrow_down.svg)](http://aoe.dbcls.jp/en)
      - [RefEx](http://refex.dbcls.jp/index.php?lang=en)
      - [Search
        (ArrayExpress)](https://www.ebi.ac.uk/arrayexpress/browse.html)
  - [Downloads](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/gea)
  - [About GEA](/gea/about-e.html)

</div>

</div>

<div id="main" class="clearfix">

<div id="breadcrumb" class="clearfix">

  - [HOME](/gea/index-e.html "Genomic Expression Archive top page")
  - \>
  - Metadata

</div>

<div id="primary">

<div id="page_main">

<div id="book">

# Metadata

<div class="section book">

<div class="section chapter">

## MAGE-TAB

The MicroArray Gene Expression Tabular
([MAGE-TAB](http://fged.org/projects/mage-tab/)) format has been
developed and adopted by the functional genomics community as a means of
representing and communicating data about a functional genomics
experiment in a structured and standardised way. It was designed for
data collection and annotation, as well as for data exchange between
tools and databases, including submission tools to public repositories
such as ArrayExpress and GEA. The full
[specification](http://fged.org/projects/mage-tab/) outlines the format.

![Relationships between IDF, SDRF, ADF and raw and processed data
files](/images/magetab/magetab_over.jpg
"Relationships between IDF, SDRF, ADF and raw and processed data files")

</div>

<div class="section chapter">

## IDF

The IDF (Investigation Description Format) file is used to give an
overview of the experiment, including the experimental design,
protocols, publication information and submitter details.

<div class="section section">

### IDF example

[Full IDF example in
spreadsheet.](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=0)

<div class="idf_format">

|                                                       |                                                                                 |     |
| ----------------------------------------------------- | ------------------------------------------------------------------------------- | --- |
| [Comment\[GEAAccession\]](#Comment_idf)               | E-GEAD-369                                                                      |     |
| MAGE-TAB Version                                      | 1.1                                                                             |     |
| [Investigation Title](#Investigation_Title)           | Transcriptional profiling of Arabidopsis leaves exposed to elevated temperature |     |
| [Experiment Description](#Experiment_Description)     | We investigated genome-wide ... biological replicates were analyzed.            |     |
| [Experimental Design](#Experimental_Design)           | stimulus or stress design                                                       |     |
| [Experimental Factor Name](#Experimental_Factor_Name) | temperature                                                                     |     |
| [Experimental Factor Type](#Experimental_Factor_Type) | temperature                                                                     |     |
| [Person Last Name](#Person_Last_Name)                 | Test                                                                            |     |
| [Person First Name](#Person_First_Name)               | Tarou                                                                           |     |
| [Person Affiliation](#Person_Affiliation)             | DDBJ Center, National Institute of Genetics                                     |     |
| [Person Roles](#Person_Roles)                         | submitter                                                                       |     |
| [Public Release Date](#Public_Release_Date)           | 2018-06-22                                                                      |     |
| [PubMed ID](#PubMed_ID)                               | 29040613                                                                        |     |
| [Protocol Name](#Protocol_Name)                       | P-GEAD-535                                                                      | ... |
| [Protocol Type](#Protocol_Type)                       | sample collection protocol                                                      | ... |
| [Protocol Description](#Protocol_Description)         | Plants were sown on GM medium ... 22 degrees celsius.                           | ... |
| [SDRF File](#SDRF_File)                               | E-GEAD-369.sdrf.txt                                                             |     |
| [Comment\[Number of channel\]](#Comment_idf)          | single-channel                                                                  |     |
| [Comment\[Array Design REF\]](#Comment_idf)           | A-AFFY-2                                                                        |     |
| [Comment\[AEExperimentType\]](#Comment_idf)           | transcription profiling by array                                                |     |
| [Comment\[BioProject\]](#Comment_idf)                 | PRJDB3647                                                                       |     |
| [Comment\[Public Release Date\]](#Comment_idf)        | 2018-06-22                                                                      |     |
| [Comment\[Last Update Date\]](#Comment_idf)           | 2018-06-22                                                                      |     |

</div>

</div>

<div class="section section">

### IDF tags

The IDF component of a MAGE-TAB document consists of a set of unique
tags attached to their corresponding values in a simple tab-delimited
text format. For example, "Experiment Description" should be followed by
a free-text description of the experiment. Most of the following fields
can be used with more than one value, so that multiple protocols,
persons, experimental factors etc. can be defined in a single IDF file.
In these cases, the different "objects" are separated by tabs. Those
fields which can contain only one value are indicated below.

<div class="item_container">

<div class="news_post_container archive glossary gea">

<div class="terms">

  - [Investigation Title](#Investigation_Title)  
    The overall title of the investigation. This tag can only have one
    value.

<!-- end list -->

  - [Experimental Design](#Experimental_Design)  
    The experiment design types which are applicable to this study.
    These terms should come from [controlled
    terms](https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=1804523015).

<!-- end list -->

  - Experimental Factor Name  
    A user-defined name for each experimental factor studied by the
    experiment. These experimental factors represent the variables
    within the investigation (e.g. growth condition, genotype, organism
    part). The actual values of these variables will be listed in the
    SDRF file, in "Factor Value\[\<factor name\>\]" columns. GEA copies
    the Factor Value names in SDRF to IDF.

<!-- end list -->

  - Experimental Factor Type  
    A term describing the type of each experimental factor. GEA uses the
    Experimental Factor Name for the Experimental Factor Type.

<!-- end list -->

  - [Person Last Name](#Person_Last_Name)  
    The last name of each person associated with the experiment.

<!-- end list -->

  - [Person First Name](#Person_First_Name)  
    The first name of each person associated with the experiment.

<!-- end list -->

  - [Person Mid Initials](#Person_Mid_Initials)

<!-- end list -->

  - [Person Affiliation](#Person_Affiliation)  
    The organization affiliation for each person associated with the
    experiment.

<!-- end list -->

  - [Person Roles](#Person_Roles)  
    The role(s) performed by each person. GEA only permits "submitter"
    role.

<!-- end list -->

  - [Public Release Date](#Public_Release_Date)  
    The date on which the experimental data was released. This tag can
    only have one value.

<!-- end list -->

  - [PubMed ID](#PubMed_ID)  
    The PubMed IDs of the publication(s) associated with this
    investigation (where available).

<!-- end list -->

  - [Publication DOI](#Publication_DOI)  
    A Digital Object Identifier (DOI) for each publication (where
    available). When PubMed ID and DOI are available, use PubMed ID.

<!-- end list -->

  - [Experiment Description](#Experiment_Description)  
    A short paragraph describing the experiment as free-text. This tag
    can only have one value. The text should clearly explain what you
    did in your experiment - this will help the curation team to check
    and process your MAGE-TAB document.

<!-- end list -->

  - Protocol Name  
    The names of the protocols used within the MAGE-TAB document. These
    will be referenced in the SDRF in the "Protocol REF" columns by
    procotol's temporary IDs (e.g. ESUB000350\_Protocol\_1) or
    accessions (e.g. P-GEAD-100). GEA does not support protocol
    reference across experiments.

<!-- end list -->

  - Protocol Type  
    The type of the protocol. Pre-defined types are as follows.
    [Necessary protocol
    sets](https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=961166619)
    are different between Microarray and Sequencing experiments.
    
      - array scanning and feature extraction protocol
      - conversion protocol
      - dissection protocol
      - growth protocol
      - high throughput sequence alignment protocol
      - normalization data transformation protocol
      - nucleic acid extraction protocol
      - nucleic acid hybridization to array protocol
      - nucleic acid labeling protocol
      - nucleic acid library construction protocol
      - nucleic acid sequencing protocol
      - sample collection protocol
      - treatment protocol

<!-- end list -->

  - [Protocol Description](#Protocol_Description)  
    A free-text description of the protocol. This text is included in a
    single tab-delimited field.

<!-- end list -->

  - [SDRF File](#SDRF_File)  
    The name(s) of the SDRF file(s) accompanying this IDF file. GEA
    automatically embeds the value.

<!-- end list -->

  - [Comment\[\<user-defined tag\>\]](#Comment_idf)  
    A user- or archive-defined value which is associated with the
    investigation. Following Comment tags are used by GEA.
    
      - Comment\[GEAAccession\]
      - Comment\[AEExperimentType\]
      - Comment\[Number of channel\]
      - Comment\[Array Design REF\]
      - Comment\[BioProject\]
      - Comment\[Public Release Date\]
      - Comment\[Last Update Date\]
      - Comment\[AdditionalFile:TXT\]

</div>

</div>

</div>

</div>

</div>

<div class="section chapter">

## SDRF

The SDRF (Sample and Data Relationship Format) describes the sample
characteristics and the relationship between samples, arrays, data files
etc. The information in the SDRF is organized so that it follows the
natural flow of a functional genomics experiment. It begins with
describing your samples and finishes with the names of the data files
generated from the analysis of the experiment results. For
single-channel microarray data one row in the SDRF is equal to one
hybridization. For two-channel microarray data one row is equal to one
channel. For sequencing submissions you generally create one row per raw
file (Run) including paired sequencing.

![SDRF overall structure](/images/magetab/sdrf.jpg
"SDRF overall structure")

<div class="section section">

### SDRF sections

<div class="item_container">

<div class="news_post_container archive glossary gea sdrf-section">

<div class="terms">

  - [Protocols](#Protocols_section)  
    In most cases, each treatment within an experiment will be
    represented simply by a [Protocol REF](#Protocol_REF) column
    containing references to the [Protocol Names](#Protocol_Name)
    defined in the IDF.
    
    In un-registered submission, protocols in IDF are assigned temporal
    IDs (e.g., ESUB000001\_Protocol\_1) and are referenced by SDRF by
    these IDs. After accession numbers are assigned, these protocols are
    referenced by their accession numbers (P-GEAD-n).
    
    |                                 |                                  |                         |
    | ------------------------------- | -------------------------------- | ----------------------- |
    | [Protocol Name](#Protocol_Name) | ESUB000500\_Protocol\_1          | ESUB000500\_Protocol\_2 |
    | [Protocol Type](#Protocol_Type) | nucleic acid extraction protocol | labelling protocol      |
    

    The SDRF describing the use of these protocols might look as
    follows:
    
    |                               |                               |
    | ----------------------------- | ----------------------------- |
    | [Protocol REF](#Protocol_REF) | [Protocol REF](#Protocol_REF) |
    | OSUB000500\_Protocol\_2       | OSUB000500\_Protocol\_3       |
    

<!-- end list -->

  - [Sources](#Sources_section)  
    Sources are the starting material for the experiment. The section
    starts with a [Source Name](#Source_Name) column, which will
    typically be followed by several [Characteristics](#Characteristics)
    columns.
    
    In the GEA submission system, a sample\_name of relevant BioSample
    is commonly used for Names of Source, Extract, Labeled Extract and
    Assay columns.
    
    |                                            |                                                 |                                                |
    | ------------------------------------------ | ----------------------------------------------- | ---------------------------------------------- |
    | [Source Name](#Source_Name)                | [Characteristics\[organism\]](#Characteristics) | [Characteristics\[ecotype\]](#Characteristics) |
    | Arabidopsis control for heat stress\_rep 1 | Arabidopsis thaliana                            | Col-0                                          |
    

    Additional columns which may be used to annotate Sources are:
    [Provider](#Provider) and [Comment](#Comment_sdrf).

<!-- end list -->

  - [Extracts](#Extracts_section)  
    Extracts refer to the extracted nucleic acid used in the experiment.
    
    |                                            |                               |                                            |                                 |
    | ------------------------------------------ | ----------------------------- | ------------------------------------------ | ------------------------------- |
    | [Source Name](#Source_Name)                | [Protocol REF](#Protocol_REF) | [Extract Name](#Extract_Name)              | [Material Type](#Material_Type) |
    | Arabidopsis control for heat stress\_rep 1 | OSUB000500\_Protocol\_2       | Arabidopsis control for heat stress\_rep 1 | total RNA                       |
    

    Columns which may be used to annotate Extracts are:
    [Characteristics\[\]](#Characteristics), [Material
    Type](#Material_Type) and [Comment](#Comment_sdrf).

<!-- end list -->

  - Labeled Extracts  
    The Labeled Extracts in an experiment are those materials which have
    been conjugated to a label, prior to hybridization on an array.
    Typically there is only one labeled extract step. For microarray
    experiment submission to GEA, a [Label](#Label) column must be
    included with the [Labeled Extract Name](#Labeled_Extract_Name)
    column to indicate which label (and therefore scanner channel)
    corresponds to which sample:
    
    |                                            |                                 |                               |                                               |                 |
    | ------------------------------------------ | ------------------------------- | ----------------------------- | --------------------------------------------- | --------------- |
    | [Extract Name](#Extract_Name)              | [Material Type](#Material_Type) | [Protocol REF](#Protocol_REF) | [Labeled Extract Name](#Labeled_Extract_Name) | [Label](#Label) |
    | Arabidopsis control for heat stress\_rep 1 | total RNA                       | OSUB000500\_Protocol\_3       | Arabidopsis control for heat stress\_rep 1    | biotin          |
    

    Columns which may be used to annotate Labeled Extracts are:
    [Characteristics\[\]](#Characteristics), [Material
    Type](#Material_Type) and [Comment](#Comment_sdrf).

<!-- end list -->

  - Assays  
    The hybridization of labeled extract to an array or the sequencing
    of a library is a key step in the SDRF, since it connects the
    "materials" section of the SDRF to the "data" section. For an array
    submission to GEA, an [Array Design REF](#Array_Design_REF) column
    must be included with the [Assay Name](#Assay_Name) column,
    indicating which array design was used
    
    |                                               |                 |                                            |                                     |                                       |
    | --------------------------------------------- | --------------- | ------------------------------------------ | ----------------------------------- | ------------------------------------- |
    | [Labeled Extract Name](#Labeled_Extract_Name) | [Label](#Label) | [Assay Name](#Assay_Name)                  | [Technology Type](#Technology_Type) | [Array Design REF](#Array_Design_REF) |
    | Arabidopsis control for heat stress\_rep 1    | biotin          | Arabidopsis control for heat stress\_rep 1 | array assay                         | A-AFFY-2                              |
    

    It is also possible to use [Comment](#Comment_sdrf) columns to
    annotate both "Assay Name" columns. Note that the values in Assay
    Name columns may be used in [Data Matrix](/gea/matrix-e.html) files
    to link columns of data to individual assays.

<!-- end list -->

  - [Raw Data Files](#Raw_Data_Files_section)  
    The raw data files generated by an investigation should be listed in
    an [Array Data File](#Array_Data_File) column following the [Assay
    Name](#Assay_Name) column.
    
    |                                            |                                     |                                       |                                     |
    | ------------------------------------------ | ----------------------------------- | ------------------------------------- | ----------------------------------- |
    | [Assay Name](#Assay_Name)                  | [Technology Type](#Technology_Type) | [Array Design REF](#Array_Design_REF) | [Array Data File](#Array_Data_File) |
    | Arabidopsis control for heat stress\_rep 1 | array assay                         | A-AFFY-2                              | Arabidopsis\_control\_rep\_1.CEL    |
    

    [Comment](#Comment_sdrf) columns can be used to add information
    relating to the raw files.

<!-- end list -->

  - [Processed Data Files](#Processed_Data_Files_section)  
    The processed data files which have been derived from the raw data
    should be listed in a [Derived Array Data
    File](#Derived_Array_Data_File) column for both microarray- and
    sequencing-based experiments. Note that this generally only applies
    to processed data arranged into one file per assay. If your files
    contain processed data columns for more than one assay, you should
    reformat these into the [Data Matrix format](/gea/matrix-e.html) and
    include them instead in a [Derived Array Data Matrix
    File](#Derived_Array_Data_Matrix_File) column.
    
    |                                            |                                     |                                       |                                     |                                                     |
    | ------------------------------------------ | ----------------------------------- | ------------------------------------- | ----------------------------------- | --------------------------------------------------- |
    | [Assay Name](#Assay_Name)                  | [Technology Type](#Technology_Type) | [Array Design REF](#Array_Design_REF) | [Array Data File](#Array_Data_File) | [Derived Array Data File](#Derived_Array_Data_File) |
    | Arabidopsis control for heat stress\_rep 1 | array assay                         | A-AFFY-2                              | Arabidopsis\_control\_rep\_1.CEL    | Arabidopsis\_control\_rep\_1.processed.txt          |
    

<!-- end list -->

  - [Factor Values](#Factor_Values_section)  
    The factor values for an experiment are the values of the variables
    under investigation. For example, an experiment studying the effect
    of different temparature (heat stress) on a cell culture would have
    "temparature" as an experimental variable with "Unit" column to
    indicate the unit.
    
    |                                           |                                                             |                                           |                                              |                                   |
    | ----------------------------------------- | ----------------------------------------------------------- | ----------------------------------------- | -------------------------------------------- | --------------------------------- |
    | [Source Name](#Source_Name)               | [Comment\[description\]](#Comment_sdrf)                     | [Assay Name](#Assay_Name)                 | [Factor Value\[temparature\]](#Factor_Value) | [Unit\[temperature unit\]](#Unit) |
    | Arabidopsis control for heat stress rep 1 | Arabidopsis control for heat stress, biological replicate 1 | Arabidopsis control for heat stress rep 1 | 22                                           | degree\_C                         |
    | Arabidopsis heat stress rep 1             | Arabidopsis heat stress, biological replicate 1             | Arabidopsis heat stress rep 1             | 37                                           | degree\_C                         |
    

    Note that there is inevitably duplication between factor values and
    values entered elsewhere in the SDRF. It is particularly common to
    have the "Factor Value" column duplicate either a
    [Characteristics\[\]](#Characteristics) column.
    
    Factor Value columns must be placed at the end (i.e., the far right)
    of the SDRF.
    
    GEA lists the variable in the IDF as "Experimental Factor Name" with
    associated Type (usually same with the name).
    
    |                                                       |             |
    | ----------------------------------------------------- | ----------- |
    | [Experimental Factor Name](#Experimental_Factor_Name) | temperature |
    | [Experimental Factor Type](#Experimental_Factor_Type) | temperature |
    

</div>

</div>

</div>

</div>

<div class="section section">

### All valid SDRF column headings

<div class="item_container">

<div class="news_post_container archive glossary gea sdrf-section">

<div class="terms">

  - [Source Name](#Source_Name)  
    Used as an identifier within the MAGE-TAB document. This column
    contains user-defined names (by default, a sample name of
    corresponding BioSample is used) for the [Source](#Sources_section)
    materials. The following columns can be used to annotate "Source
    Name" columns:
    
      - [Characteristics\[\]](#Characteristics)
      - [Provider](#Provider)
      - [Comment\[\]](#Comment_sdrf)

<!-- end list -->

  - [Sample Name](#Sample_Name)  
    Used as an identifier within the MAGE-TAB document. This column
    contains user-defined names (by default, a sample name of
    corresponding BioSample is used) for each [Sample](#Sources_section)
    material. The following columns can be used to annotate "Sample
    Name" columns:
    
      - [Characteristics\[\]](#Characteristics)
      - [Comment\[\]](#Comment_sdrf)

<!-- end list -->

  - [Extract Name](#Extract_Name)  
    Used as an identifier within the MAGE-TAB document. This column
    contains user-defined names (by default, a sample name of
    corresponding BioSample is used) for each
    [Extract](#Extracts_section) material. The following columns can be
    used to annotate "Extract Name" columns:
    
      - [Material Type](#Material_Type)
      - [Comment\[\]](#Comment_sdrf)

<!-- end list -->

  - [Labeled Extract Name](#Labeled_Extract_Name)  
    Used as an identifier within the MAGE-TAB document. This column
    contains user-defined names (by default, a sample name of
    corresponding BioSample is used) for each [Labeled
    Extract](#Labeled_Extracts_section) material. The following columns
    can be used to annotate "Labeled Extract" Name columns:
    
      - [Label](#Label) (required for array submissions)
      - [Comment\[\]](#Comment_sdrf)

<!-- end list -->

  - [Assay Name](#Assay_Name)  
    Used as an identifier within the MAGE-TAB document. This column
    contains user-defined names (by default, a sample name of
    corresponding BioSample is used) for each [Assay](#Assays_section).
    The following columns can be used to annotate "Assay Name" columns:
    
      - [Array Design REF](#Array_Design_REF) (required for array
        submissions)
      - [Technology Type](#Technology_Type) ("array assay" for
        microarray and "sequencing assay" for sequencing experiment)
      - [Comment\[\]](#Comment_sdrf)
    
    All "Assay Name" columns must be followed by a "Technology Type"
    column.

<!-- end list -->

  - [Scan Name](#Scan_Name)  
    Used as an identifier within the MAGE-TAB document. This optional
    column contains user-defined names for each [Scan](#Assays_section)
    event. The following columns can be used to annotate "Scan Name"
    columns:
    
      - [Comment\[\]](#Comment_sdrf)

<!-- end list -->

  - [Normalization Name](#Normalization_Name)  
    Used as an identifier within the MAGE-TAB document. This optional
    column contains user-defined names for each
    [Normalization](#Processed_Data_Files_section) event. The following
    columns can be used to annotate "Normalization Name" columns:
    
      - [Comment\[\]](#Comment_sdrf)

<!-- end list -->

  - [Array Data File](#Array_Data_File)  
    This column contains a list of [raw data
    files](#Raw_Data_Files_section), one for each row of the SDRF file,
    linking these data files to their respective assays. The following
    columns can be used to annotate "Array Data File" columns:
    
      - [Comment\[\]](#Comment_sdrf)

<!-- end list -->

  - [Derived Array Data File](#Derived_Array_Data_File)  
    This column contains a list of microarray and sequencing [processed
    data files](#Processed_Data_Files_section), one for each row of the
    SDRF file, linking these data files to their respective assays. The
    following columns can be used to annotate "Derived Array Data File"
    columns:
    
      - [Comment\[\]](#Comment_sdrf)

<!-- end list -->

  - [Array Data Matrix File](#Array_Data_Matrix_File)  
    This column contains a list of microarray and sequencing raw data
    matrix files, where data from multiple assays is stored in a single
    file, and the data mapped to each assay via the [Data
    Matrix](/gea/matrix-e.html) format itself. The following columns can
    be used to annotate "Array Data Matrix File" columns:
    
      - [Comment\[\]](#Comment_sdrf)

<!-- end list -->

  - [Derived Array Data Matrix File](#Derived_Array_Data_Matrix_File)  
    This column contains a list of microarray and sequencing processed
    data matrix files, where data from multiple assays is stored in a
    single file, and the data mapped to each assay (or scan, or
    normalization) via the [Data Matrix](/gea/matrix-e.html) format
    itself. The following columns can be used to annotate "Derived Array
    Data Matrix File" columns:
    
      - [Comment\[\]](#Comment_sdrf)

<!-- end list -->

  - [Array Design REF](#Array_Design_REF)  
    This column contains references to the array design used for each
    assay. For GEA submissions this should be an ArrayExpress/GEA
    accession number, e.g. "A-AFFY-2". An array design accession can be
    found at [ArrayExpress array design search
    page](https://www.ebi.ac.uk/arrayexpress/arrays/browse.html). The
    following columns can be used to annotate "Array Design REF"
    columns:
    
      - [Comment\[\]](#Comment_sdrf)

<!-- end list -->

  - [Protocol REF](#Protocol_REF)  
    This column contains references to [Protocol Names](#Protocol_Name)
    defined in the IDF. Before registration, a protocol is referenced by
    its temporal ID like "ESUB000500\_Protocol\_1". After registration,
    this ID is replaced by a protocol accession number like
    "P-GEAD-100". The following columns can be used to annotate
    "Protocol REF" columns:
    
      - [Parameter Value\[\]](#Parameter_Value)
      - [Performer](#Performer)
      - [Date](#Date)
      - [Comment\[\]](#Comment_sdrf)

<!-- end list -->

  - [Characteristics\[\<category term\>\]](#Characteristics)  
    Controlled vocabulary term or measurement. Used as an attribute
    column following [Source Name](#Source_Name), [Sample
    Name](#Sample_Name), [Extract Name](#Extract_Name), or [Labeled
    Extract Name](#Labeled_Extract_Name). This column contains terms
    describing each material according to the characteristics category
    indicated in the column header. For example, a column headed
    "Characteristics\[organism\]" would contain organism names, for
    example "Homo sapiens". These terms may be user-defined (the
    default), from an external ontology source ([NCBI
    Taxonomy](https://www.ncbi.nlm.nih.gov/taxonomy) for organism name),
    or a measurement (indicated using a Unit\[\] column).
    
      - [Term Source REF](#Term_Source_REF)
      - [Unit\[\]](#Unit)

<!-- end list -->

  - [Provider](#Provider)  
    Used as an attribute column following [Source Name](#Source_Name). A
    free-text string identifying the organization or person from which
    the Source was obtained.

<!-- end list -->

  - [Material Type](#Material_Type)  
    [Controlled vocabulary
    term](https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=986287710).
    Used as an attribute column following [Source Name](#Source_Name),
    [Sample Name](#Sample_Name), [Extract Name](#Extract_Name), or
    [Labeled Extract Name](#Labeled_Extract_Name). This column contains
    the following controlled terms describing the type of each material.
    
    <div class="sub_index">
    
      - total RNA
      - polyA RNA
      - cytoplasmic RNA
      - nuclear RNA
      - genomic DNA
      - protein
      - other
    
    </div>

<!-- end list -->

  - [Label](#Label)  
    Controlled vocabulary term. Used as an attribute column following
    [Labeled Extract Name](#Labeled_Extract_Name). The label compound
    which is conjugated to an Extract to create the Labeled Extract.
    Examples: Cy3, Cy5, biotin, alexa\_546. The following columns can be
    used to annotate Label columns:
    
      - [Term Source REF](#Term_Source_REF)

<!-- end list -->

  - [Technology Type](#Technology_Type)  
    [Controlled vocabulary
    term](https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=156878890).
    Used as an attribute column following [Assay Name](#Assay_Name). GEA
    auto-fills "array assay" for array submission and "sequencing assay"
    for sequencing submission. The following columns can be used to
    annotate Technology Type columns:
    
      - [Term Source REF](#Term_Source_REF)

<!-- end list -->

  - [Factor Value\[\<experiment factor name\>\]](#Factor_Value)  
    Controlled vocabulary term or measurement. This column contains
    terms describing the experimental factor values (i.e., variables)
    for each row of the SDRF. The Experimental Factor Name to which it
    pertains should be indicated in the column heading.
    
    Example SDRF:
    
    |                                         |
    | --------------------------------------- |
    | [Factor Value\[tissue\]](#Factor_Value) |
    | gall bladder                            |
    | kidney                                  |
    | liver                                   |
    | intestine                               |
    | pancreas                                |
    

    In the example above, the column terms would be treated as
    describing tissues. For more precise control over the treatment of
    these terms, the optional form "Factor Value\[\]()" is available,
    e.g. "Factor Value\[growthconditionEF\](Nutrients)".
    
    When a combination of more than one variables are studied, factor
    values are described by more than one columns. Example SDRF:
    
    |                                           |                                       |                                  |
    | ----------------------------------------- | ------------------------------------- | -------------------------------- |
    | [Factor Value\[compound\]](#Factor_Value) | [Factor Value\[dose\]](#Factor_Value) | [Unit\[molar mass unit\]](#Unit) |
    | none                                      |                                       |                                  |
    | potassium cyanide                         | 25                                    | micromolar                       |
    | potassium cyanide                         | 35                                    | micromolar                       |
    | potassium cyanide                         | 50                                    | micromolar                       |
    

The factor name shoud be defined in accompanying IDF (GEA auto-fills the
factor name in SDRF to IDF):

|                                                       |        |
| ----------------------------------------------------- | ------ |
| [Experimental Factor Name](#Experimental_Factor_Name) | tissue |
| [Experimental Factor Type](#Experimental_Factor_Type) | tissue |

  - [Performer](#Performer)  
    Used as an attribute column following [Protocol REF](#Protocol_REF).
    The name of the researcher or center where the protocol was carried
    out.

<!-- end list -->

  - [Date](#Date)  
    Used as an attribute column following [Protocol REF](#Protocol_REF).
    The date (and time, where available) upon which the protocol was
    performed, in the following format: YYYY-MM-DD.

<!-- end list -->

  - [Parameter Value\[\<protocol parameter\>\]](#Parameter_Value)  
    Used as an attribute column following [Protocol REF](#Protocol_REF)
    columns. This column contains values for the protocol parameters
    referenced in the column header. The following columns can be used
    to annotate Parameter Value\[\] columns:
    
      - [Unit\[\]](#Unit)
      - [Term Source REF](#Term_Source_REF)
      - [Comment\[\]](#Comment_sdrf)
    
    For example, if a Protocol Name "Array Hybridization" is defined in
    the accompanying IDF, with Protocol Parameters "hyb temp", the
    following would be valid:
    
    |                               |                                                 |                                   |
    | ----------------------------- | ----------------------------------------------- | --------------------------------- |
    | [Protocol REF](#Protocol_REF) | [Parameter Value\[hyb temp\]](#Parameter_Value) | [Unit\[temperature unit\]](#Unit) |
    | Array Hybridization           | 55                                              | degree celsius                    |
    

      

<!-- end list -->

  - [Unit\[\<unit category\>\]](#Unit)  
    Controlled vocabulary term. Used as an attribute column following
    [Characteristics\[\]](#Characteristics), [Factor
    Value\[\]](#Factor_Value) or [Parameter
    Value\[\]](#Parameter_Value). This column contains terms describing
    the unit(s) to be applied to the values in the preceding column. The
    type of unit is included in the column heading, e.g. "Unit\[volume
    unit\]". These unit types should correspond to
    [Unit](http://purl.obolibrary.org/obo/UO_0000000) subclasses from
    [EFO](/efo/). The following columns can be used to annotate Unit\[\]
    columns:
    
      - [Term Source REF](#Term_Source_REF)
    
    The Term Source REF column in this case would point to the ontology
    from which the Unit terms are taken.

<!-- end list -->

  - [Description](#Description)  
    Used as an attribute column following [Source Name](#Source_Name),
    [Sample Name](#Sample_Name), [Extract Name](#Extract_Name), or
    [Labeled Extract Name](#Labeled_Extract_Name). A free-text
    description to be attached to the corresponding material. To be used
    sparingly, if at all - most annotations should be provided using
    controlled vocabulary terms, using
    [Characteristics\[\]](#Characteristics) columns.

<!-- end list -->

  - [Term Source REF](#Term_Source_REF)  
    Used as an attribute column following any controlled vocabulary
    column (e.g., [Characteristics\[\]](#Characteristics)), or column
    allowing reference of external entities (e.g., [Protocol
    REF](#Protocol_REF)). This column contains references to ontology or
    database Term Sources defined in the IDF, and from which the values
    in the previous column were taken. The following columns can be used
    to annotate Term Source REF columns. <span class="attention_text">At
    the point of submission, GEA does not require ontology usage as
    ArrayExpress</span>.
    
      - [Term Accession Number](#Term_Accession_Number)

<!-- end list -->

  - [Term Accession Number](#Term_Accession_Number)  
    Used as an attribute column following [Term Source
    REF](#Term_Source_REF) columns. This column contains the accession
    numbers from the term source used to identify the ontology or
    database terms in question. For example:
    
    |                             |                                                |                                     |                                                 |
    | --------------------------- | ---------------------------------------------- | ----------------------------------- | ----------------------------------------------- |
    | [Source Name](#Source_Name) | [Characteristics\[disease\]](#Characteristics) | [Term Source REF](#Term_Source_REF) | [Term Accession Number](#Term_Accession_Number) |
    | Sample 1                    | acute lymphoblastic leukemia                   | EFO                                 | EFO\_0000220                                    |
    

    (This example relies on the [EFO](https://www.ebi.ac.uk/efo/) Term
    Source having been pre-defined in the
    [IDF](/gea/metadata-e.html#idf) accompanying the SDRF.)
    <span class="attention_text">At the point of submission, GEA does
    not require ontology usage as ArrayExpress</span>.

<!-- end list -->

  - [Comment\[\<comment name\>\]](#Comment_sdrf)  
    This column can be used to annotate the main graph node and edge
    columns listed above. It is included as an extensibility mechanism,
    and should not generally be used to encode meaningful biological
    annotation. The column heading should contain a name for the type of
    values included in the column.

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

<div id="side_navigation">

<div class="side_nav_menu handbook_contents handbook metadata">

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
  - Last modified: 2019-02-25

</div>

</div>