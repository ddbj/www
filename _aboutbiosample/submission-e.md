---
layout: indexed_content
title: DDBJ BioSample Handbook
pathname: submission-e
category: aboutbiosample
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
  - [Japanese](/biosample/submission.html)

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

[BioSample](/biosample/index-e.html)

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

  - [Home](/biosample/index-e.html)
  - [Handbook](/biosample/submission-e.html)
  - [Sample
    Attribute![](/images/parts/arrow_down.svg)](/biosample/attribute-e.html)
      - [Example
        files](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482)
  - [Validation Rules](/biosample/validation-e.html)
  - [FAQ](/biosample/faq-e.html)
  - [Search](http://ddbj.nig.ac.jp/BSSearch/)
  - [Download![](/images/parts/arrow_down.svg)](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/biosample)
      - [XML
        Schema](https://github.com/ddbj/pub/tree/master/docs/biosample/xsd)
  - [About Biosample](/biosample/about-e.html)

</div>

</div>

<div id="main" class="clearfix">

<div id="breadcrumb" class="clearfix">

  - [HOME](/biosample/index-e.html "DDBJ BioSample top page")
  - \>
  - Handbook

</div>

<div id="primary">

<div id="page_main">

<div id="book">

# DDBJ BioSample Handbook

<div class="section book">

# BioSample

<div class="section chapter">

## Overview

<div class="section section">

### Purpose

[The BioSample database](/biosample/index-e.html)was developed to serve
as a central location in which to store descriptive information about
biological samples used to generate experimental data in any of primary
data archives.

Following figure depicts how BioSample records are organized and linked
with other objects. This example is composed of one umbrella project
that encompasses three subprojects, each of which generated data derived
from two BioSample records. Users can query either the BioProject or the
BioSample database to retrieve the relevant records, and then navigate
through links to the corresponding experimental data which continue to
be stored in DDBJ's primary data archives,
[DDBJ](/ddbj/index-e.html%20), [DRA](/dra/index-e.html) and
[DOR](/dor/index-e.html).

![Overview of BioSample and BioProject integration with other DDBJ
databases](/images/submission/biosample_integration.jpg
"Overview of BioSample and BioProject integration with other DDBJ databases")

</div>

<div class="section">

### Sample

Given the huge diversity of sample types handled by archival databases,
and the fact that appropriate sample descriptions are often dependent on
the context of the study, the definition of what a BioSample represents
is deliberately flexible. Typical examples of a BioSample include a cell
line, a primary tissue biopsy, an individual organism or an
environmental isolate.

Biological and technical replicates are represented by separate
BioSamples with distinct 'replicate' attribute, e.g., 'biological
replicate 1' and 'biological replicate 2'. [FAQ: How many samples do I
need for my DRA submission?](/biosample/faq-e.html#samples-for-sra)

Information about the sample will include:

<div class="sub_index">

  - Species
  - The material sampled, e.g., organs, tissues, cell type
  - Phenotypic information including disease states and clinical
    information about the individual

</div>

The information about human subjects and access to it will be compliant
with all relevant ethical requirements. The DDBJ BioSample database does
not support controlled access mechanisms and thus cannot host human
clinical samples that may have associated privacy concerns.

</div>

<div class="section">

### Reference biosamples

A particular set of biosamples submitted to BioSample databases directly
may be referenced subsequently from many experiments. We will refer to
this set of samples as *reference biosamples*. Example of these may be
some commonly used cell lines or mouse strains. The BioSample
pre-registered commonly-used samples and make it easy to reference these
from other databases at INSDC. Reference biosamples include
[ATCC](http://www.atcc.org/) and [Coriell](http://ccr.coriell.org/).

</div>

<div class="section">

### Sample attributes

A major component of a BioSample record is the sample attributes
section. Attributes define the material under investigation and can
include sample characteristics such as cell type, collection site and
phenotypic information like disease state.

BioSample attributes are captured as structured name: value pairs, for
example, tissue:liver

The database supports and encourages use of dictionaries of attribute
names.

The first targeted dictionaries implemented in the DDBJ BioSample
database are the [MIxS](http://wiki.gensc.org/index.php?title=MIxS)
minimum information checklists for standardizing descriptions of
genomes, metagenomes and targeted locus sequences as recently developed
by the [Genomics Standards
Consortium](http://wiki.gensc.org/index.php?title=Main_Page).

For the MIxS check lists, please see Nature Biotechnology 29, 415–420
(2011) | doi: 10.1038/nbt.1823
(PMID:[21552244](https://www.ncbi.nlm.nih.gov/pubmed/21552244) ).

![MIxS check list](/images/books/mixs.jpg "MIxS check list")

</div>

<div class="section section">

### Organism

For an organism name of the BioSample
[organism](/biosample/attribute-e.html?all=all#organism) attribute, see
the ["Organism name"](/ddbj/organism-e.html) page. Previously, a strain
name or some other lower taxon was required for the organism name of
whole genomic sequence, mainly microorganisms. However, currently, the
value of organism qualifier should be just a scientific name, in
principle, even though for microbial genomes. Please describe a strain
name in the [strain](/biosample/attribute-e.html?all=all#strain)
attribute of BioSample.

Related news: [Changes in organism strain information
management](/news/en/2013-12-13-e.html)

</div>

<div class="section section">

### Antibiogram

An antibiogram table can be included in a BioSample record (Example:
[SAMN07958491](https://www.ncbi.nlm.nih.gov/biosample/SAMN07958491)). To
submit the table, please contact [BioSample team](/contact-e.html).

For the antibiogram submission guidelines, please see the NCBI BioSample
pages.

<div class="sub_index">

  - [Antibiograms - beta-lactamase
    MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/beta-lactamase/)
  - [Antibiograms - pathogen
    MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram/)
  - [Antibiograms - mycobacterial
    non-MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram-myco/)

</div>

</div>

<div class="section">

### XML schema

[BioSample XML
schema](https://github.com/ddbj/pub/tree/master/docs/biosample)

</div>

</div>

<div class="section chapter">

## Metadata

Required<span class="required">\*</span>  
Conditionally required<span class="conditionally_required">\*</span>

<div class="news_post_container archive glossary biosample">

<div class="section terms section">

### Submitter

#### Submitter

Contact information of submitter(s). Questions and notifications about a
submission are contacted to the e-mail address(es) listed here. Personal
contact information is considered confidential and is collected to be
used by DDBJ staff should questions arise; the general information about
the research center is used for public display.

  - [First
    name](#BioSample_First_name)<span class="required">\*</span>  
    Submitter's first name.

<!-- end list -->

  - [Last name](#BioSample_Last_name)<span class="required">\*</span>  
    Submitter's last name.

<!-- end list -->

  - [E-mail](#BioSample_E-mail)<span class="required">\*</span>  
    E-mail address. Enter an address from the organizations domain.

#### Organization

  - [Organization](#Organization)  
    Organization to which a contact person belongs.

<!-- end list -->

  - [Submitting
    organization](#BioSample_Submitting_organization)<span class="required">\*</span>  
    Full name of organization.

<!-- end list -->

  - [Submitting organization
    URL](#BioSample_Submitting_organization_URL)  
    The URL of submitter's organization.

#### Data Release

Select "Hold" or "Release". You cannot specify hold date. Please see
[Data Release](#sample-release) for detailed release mechanism.

  - [Release](#BioSample_Release)  
    Submitted BioSample record will be released immediately after the
    curation process finishes.

<!-- end list -->

  - [Hold](#BioSample_Hold)  
    Submitted BioSample record is released when the DDBJ, DRA and DTA
    record(s) referencing this BioSample ID is released. Private DDBJ
    record(s) referencing this BioSample ID is not released.

</div>

<div class="section terms section">

### General info

  - [External Links](#Link)  
    An URL may be provided, with a label for the resource, to reference
    a resource that is directly relevant to the submitted sample.

<!-- end list -->

  - [Link description](#Link_description)  
    Display name of web site that is related to this sample.

<!-- end list -->

  - [URL](#BioSample_URL)  
    URL of the web site.

</div>

<div class="section terms section">

### Sample type

#### Core Package

  - [Genome, metagenome or marker sequences (MIxS
    compliant)](#MIxS_Sample)  
    Use for genomes, metagenomes, and marker sequences. These samples
    include specific attributes that have been defined by the Genome
    Standards Consortium (GSC) to formally describe and standardize
    sample metadata for genomes, metagenomes, and marker sequences. The
    samples are validated for compliance based on the presence of the
    required core attributes as described in
    [MIxS](http://wiki.gensc.org/index.php?title=MIxS). For details,
    please see [the GSC
    websites](http://wiki.gensc.org/index.php?title=MIxS).

<!-- end list -->

  - [Functional genomics samples (e.g. transcriptome, epigenetics
    etc)](#functional_genomics_samples)  
    Use for submission to [Genomic Expression Archive
    (GEA)](/gea/index-e.html) which accepts functional genomics
    experiments that examine gene expression, regulation, epigenetics or
    genome variation. These sample attributes consist of frequently used
    ones in functional genomics experiments.

<!-- end list -->

  - [Other samples (e.g. transcriptome, epigenetics
    etc)](#General_Sample)  
    Use for any sample type (e.g. transcriptome, epigenetics etc). These
    samples are described using common core attributes and
    submitter-supplied custom attributes.

#### MIxS

  - [(Meta)Genomic Sequences Sample
    (MIMS)](#Meta_Genomic_Sequences_Sample)
    
    |                                            |
    | ------------------------------------------ |
    | Environmental/Metagenome Genomic Sequences |
    

    Please refer to [environmental samples](/ddbj/env-e.html).

<!-- end list -->

  - [Genomic Sequences Sample (MIGS)](#Genomic_Sequences_Sample)
    
    |                                               |
    | --------------------------------------------- |
    | Cultured Bacterial/Archaeal Genomic Sequences |
    | Eukaryotic Genomic Sequences                  |
    | Viral Genomic Sequences                       |
    

    Environmental samples do not include endosymbionts that can be
    reliably recovered from a particular host, organisms from a readily
    identifiable but uncultured field sample (e.g., many cyanobacteria),
    or phytoplasmas that can be reliably recovered from diseased plants
    (even though these cannot be grown in axenic culture). Select
    "Cultured Bacterial/Archaeal" or "Eukaryotic" or "Viral".

<!-- end list -->

  - [Marker Sequences Sample (MIMARKS)](#Marker_Sequences_Sample)
    
    |                                 |
    | ------------------------------- |
    | Specimen Marker Sequences       |
    | Survey related Marker Sequences |
    

      
    
    MIMARKS specimen: for marker gene (e.g., COI) sequences obtained
    from any material identifiable by means of specimens
    
    MIMARKS-specimen applies to the contextual data for marker gene
    sequences from cultured or voucher-identifiable specimens.
    
    MIMARKS survey: for uncultured diversity marker gene (e.g., 16S
    rRNA, 18S rRNA, nif, amoA, rpo) surveys
    
    MIMARKS-survey is applicable to contextual data for marker gene
    sequences, obtained directly from the environment, without culturing
    or identification of the organisms.

#### Environmental package

  - [Environmental package (MIxS Sample)](#Environmental_package)
    
    |                             |
    | --------------------------- |
    | No package                  |
    | air                         |
    | host-associated             |
    | human-associated            |
    | human-gut                   |
    | human-oral                  |
    | human-skin                  |
    | human-vaginal               |
    | microbial mat/biofilm       |
    | miscellaneous or artificial |
    | plant-associated            |
    | sediment                    |
    | soil                        |
    | wastewater/sludge           |
    | water                       |
    

</div>

<div class="section terms section">

### Attributes

  - [Sample attributes](#Sample_attributes)  
    Download BioSample worksheet which has been customised to fit
    models. This is a tab-delimited text file that may be opened with a
    spreadsheet program or a text editor. The validator checks the
    uploaded text file and feedbacks [warning and error
    messages](/biosample/validation-e.html). According to the messages,
    revise the text file and upload the file again. Submitters can not
    submit the BioSample unless all errors are resolved.

<!-- end list -->

  - [Attributes](#BioSample_Attributes)  
    [List of attributes](/biosample/attribute-e.html). Besides the
    mandatory fields, there are several optional attribute fields. To
    make the BioSample record most useful, you should include all
    available information in the submission. Commonly used and useful
    attributes have been defined, with standardized nomenclature. In
    preparing your submission, please refer to [this attributes
    list](/biosample/attribute-e.html) and [BioSample
    examples](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482)
    and fill in the relevant fields. If you have information of a type
    that does not appear in the standard list, you can create it as a
    user-defined attribute.

</div>

<div class="section terms section">

### Overview

  - [Overview](#BioSample_Overview)  
    Review your submission and submit the BioSample by clicking the
    "Submit" button at bottom. The uploaded sample attribute file can be
    downloaded at "Submission ID.txt".

</div>

</div>

</div>

</div>

<div class="section book">

# Submission to BioSample

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

## Submission to BioSample

<div class="section section">

### Create a new sample submission

Obtain a submission account according to the [Account
Handbook](/account-e.html).

Move to the Biosample submission page from the “Biosample” menu at the
top. Create a new sample submission by clicking the \[New submission\]
button.

Upper limit is about 2,000 samples per submission.

If there is no reply from submitters after three months of initial
contact, submissions will be cancelled.

![Create a new sample submission](/images/books/hbs-01.jpg)

To submit a BioSample, enter content from left to right tabs.

For BioSample metadata, please see the [BioSample metadata](#metadata).

![Submit new samples](/images/books/hbs-02.jpg "Submit new samples")

Select a sample type in the "SAMPLE TYPE". For genome samples, minimum
sample attributes are defined by [MIxS](#sample-attributes).

For the Sample type, please see the [BioSample Handbook](#Sample_type).

![Select a sample type](/images/books/hbs-03.jpg "Select a sample type")

</div>

<div class="section section">

### Enter sample attributes

[List and explanation of BioSample
attributes](/biosample/attribute-e.html). User-defined attributes can be
added to the rightmost column.

[Example BioSample submission
files](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482)

Download a template text file according to the selected sample type to
enter sample attributes.

A main sample submission step is to describe samples by required,
optional and user-defined attributes.

![Download a text file for entering sample
attributes](/images/books/hbs-04.jpg
"Download a text file for entering sample attributes")

A text file is separated by tab and can be opened and editted in
spreadsheet editor (e.g. Excel®). Attribute names are in a header line.
Attributes with "\*" are required.

From second lines, enter one sample per line. Enter PSUB submission id
in [bioproject\_id](/biosample/attribute-e.html?all=all#bioproject_id)
for project without PRJD accession numbers.

In one submission, samples can be submitted as 1 sample - 1 line in
sample attributes tab-delimited text file.

#### Missing value reporting

[The International Nucleotide Database Collaboration
(INSDC)](https://www.ebi.ac.uk/ena/about/missing-values-reporting)have
developed a standardised missing/null value reporting language to be
used where a value of an expected format for sample metadata reporting
can not be provided. Submitters are strongly encouraged to always
provide true values of expected formats. However, if missing/null value
reporting is required submitters are asked to use a term with the finest
granularity for their reported situation. If appropriate, use a term in
the "lower level", if not, use a term in the "top level".

To facilitate an understanding of the supported terms we enclose a table
with the missing/null value terms and their definitions.

Please use the following standardised missing value vocabulary only if a
true value of an expected format for a mandatory field is missing. If a
true value is missing for a recommended or an optional field then these
fields should not be used for reporting at all.

INSDC missing value reporting terms

<div class="main_table">

INSDC term  
(top level)

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

INSDC term  
(lower level)

Definition

not applicable

 

information is inappropriate to report, can indicate that the standard
itself fails to model or represent the information appropriately

missing

not collected

information of an expected format was not given because it has not been
collected

not provided

information of an expected format was not given, a value may be given at
the later stage

restricted access

information exists but can not be released openly because of privacy
concerns

#### Sample attributes validation

Upload the sample attribute file by selecting the file and click the
Continue button. The validator checks the uploaded file accoring to the
rules and feedbacks the error and warning messages. Submitters can not
submit the BioSample unless all errors are resolved.

For validation rules and messages, please see [Validation rules
page](/biosample/validation-e.html).

![BioSample validation. In this example, an error for the future date in
the collection\_date and a warning for inconsistent countries between
geo\_loc\_name and lat\_lon of the sample "KOME-2" are
displayed.](/images/books/hbs-04-2.jpg "BioSample validation")

Check content in the last "OVERVIEW" and submit samples. In the
"ATTRIBUTES" area, the submitted sample attribute file can be
downloaded.

![Submit BioSample](/images/books/hbs-05.jpg "Submit BioSample")

<div class="section section">

### Accession numbers

When creating a new submission, a temporary ID starts with SSUB is
assigned. The DDBJ BioSample issues accession numbers with prefix SAMD
to the submitted samples passed validation. When an unregistered
organism is described in the organism or the locus\_tag\_prefix has
values, accession numbers are issued after curator review. You can view
status and accession numbers of submitted samples in your [submission
account](https://ddbj.nig.ac.jp/D-way/).

<div class="sub_index attention">

  - Do NOT cite a temporary ID starts with SSUB in references.
  - Do not double submit the samples which have been registered to EBI
    and NCBI.

</div>

</div>

<div class="section section">

### Release of BioSample

You can select the following options:

<div class="sub_index">

  - Release immediately following curation
  - Release when referenced data is published

</div>

Hold date cannot be set for BioSample.

The submitted sample data can be kept private. Sample data are
automatically released when the linked DDBJ record(s) is published. The
release of the BioSample record does not trigger the release of private
DDBJ sequence record(s) referencing this BioSample accession.However,
the release of the BioSample record does trigger the release of
referencing BioProject.

FAQ: [How are linked BioProject/BioSample/sequence data
released?](/faq/en/bp_bs_seq_release-e.html)

</div>

<div class="section section">

### Update BioSample

It is possible to update data after registration. Please contact us from
[Message form](/contact-e.html).

</div>

 

<div id="side_navigation">

<div class="side_nav_menu handbook_contents handbook submission">

<div id="in_this_page">

## In this page

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
  - Last modified: 2019-02-26

</div>