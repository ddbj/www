---
layout: tabbed_indexed_content
service_name: BioSample
title: DDBJ BioSample Handbook
category: biosample
current_tab: handbook
lang: en
---

## Overview {#overview}

### Purpose {#purpose}

[The BioSample database](/biosample/index-e.html) is descriptive information about the biological source materials, or samples, used to generate experimental data in any of primary data archives.

Following figure depicts how BioSample records are organized and linked with other objects. This example is composed of one umbrella project that encompasses three subprojects, each of which generated data derived from two BioSample records. Users can query either the BioProject or the BioSample database to retrieve the relevant records, and then navigate through links to the corresponding experimental data which continue to be stored in DDBJ's primary data archives, [DDBJ](/ddbj/index-e.html), [DRA](/dra/index-e.html) and [GEA](/gea/index-e.html).

{% include image.html url="submission/biosample_integration.jpg" caption="Overview of BioSample and BioProject integration with other DDBJ databases" class="w450" %}

### Sample {#sample}

Given the huge diversity of sample types handled by archival databases, and the fact that appropriate sample descriptions are often dependent on the context of the study, the definition of what a BioSample represents is deliberately flexible. Typical examples of a BioSample include a cell line, a primary tissue biopsy, an individual organism or an environmental isolate.

Biological replicates are represented by separate BioSamples with distinct 'replicate' attribute, e.g., 'biological replicate 1' and 'biological replicate 2'. [FAQ: How many samples do I need for my DRA submission?](/faq/en/samples-for-sra-e.html)

Information about the sample will include:

- Species
- The material sampled, e.g., organs, tissues, cell type
- Phenotypic information including disease states and clinical information about the individual

The information about human subjects and access to it will be compliant with all relevant ethical requirements. The DDBJ BioSample database does not support controlled access mechanisms and thus cannot host human clinical samples that may have associated privacy concerns.

### Sample granularity {#granularity}

- Biological replicates are represented by separate BioSamples with distinct 'biological_replicate' attributes. [DRA objects organization](/dra/submission-e.html#ex_replicates) For example, 'biological_replicate = 1' and 'biological_replicate = 2'.
- Technical replicates are represented by DRA Experiments and GEA SDRF. Use a BioSample for technical replicates.
- If a paired-end library from single sample is sequenced, do not create separate sample for forward and reverse reads but register both reads in a DRA Run. [DRA objects organization](/dra/submission-e.html#ex_samples)
- If a sample is sequenced by different sequencing instruments, link DRA Experiments with distinct [Instrument model](/dra/submission-e.html#Instrument) to a BioSample.
- Register a separate BioSample for each unique source, e.g., RNA from the wings is a separate BioSample than RNA from legs if those two sources were sequenced independently.

Examples:
- 23,000 unique 16S amplicons from a single seawater collection point \- 1 BioSample (1 sample was collected and then analyzed to deduce 16S diversity)
- 3 "identical" transgenic mice treated with the same drug as part of an experiment \- 3 BioSamples (biological replicates are represented by separate BioSamples)
- To examine gene expression profiles, CHO cells infected with a virus and sampled at 0, 2, 4, and 8 hours post infection \- 4 BioSamples (4 time points)
- To analyze differences in gene expression levels, RNA-seq data from a single male anteater taken from the brain, heart, lungs, testes, and liver \- 5 BioSamples (5 different tissues isolated)

### Genome assembly sample {#genome-assembly-sample}

For sample(s) used for genome assembly, see [Genome Assembly Sample](/biosample/genome-assembly-sample-e.html).

### Reference biosamples  {#reference-biosamples}

A particular set of biosamples submitted to BioSample databases directly may be referenced subsequently from many experiments. We will refer to this set of samples as *reference biosamples*. Example of these may be some commonly used cell lines or mouse strains. The BioSample pre-registered commonly-used samples and make it easy to reference these from other databases at INSDC. Reference biosamples include [ATCC](http://www.atcc.org/) and [Coriell](http://ccr.coriell.org/).

### Sample attributes  {#sample-attributes}

A major component of a BioSample record is the sample attributes section. Attributes define the material under investigation and can include sample characteristics such as cell type, collection site and phenotypic information like disease state.

BioSample attributes are captured as structured name: value pairs, for example, tissue:liver

The database supports and encourages use of dictionaries of attribute names by providing packages with pre-defined attributes. 

### Organism  {#organism}

For an organism name of the BioSample [organism](/biosample/attribute-e.html?all=all#organism) attribute, see the ["Organism name"](/ddbj/organism-e.html) page. Previously, a strain name or some other lower taxon was required for the organism name of whole genomic sequence, mainly microorganisms. However, currently, the value of organism qualifier should be just a scientific name, in principle, even though for microbial genomes. Please describe a strain name in the [strain](/biosample/attribute-e.html?all=all#strain) attribute of BioSample.

Related news: [Changes in organism strain information management](/news/en/2013-12-13-e.html)

### Antibiogram  {#antibiogram}

An antibiogram table can be included in a BioSample record (Example: [SAMN07958491](https://www.ncbi.nlm.nih.gov/biosample/SAMN07958491)). To submit the table, please contact [BioSample team](/contact-ddbj-e.html).

For the antibiogram submission guidelines, please see the NCBI BioSample pages.

- [Antibiograms - beta-lactamase MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/beta-lactamase/)
- [Antibiograms - pathogen MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram/)
- [Antibiograms - mycobacterial non-MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram-myco/)

### XML schema  {#xml-schema}

[BioSample XML schema](https://github.com/ddbj/pub/tree/master/docs/biosample)

## Metadata  {#metadata}

Required<span class="red">\*</span>  
Conditionally required<span class="conditionally_required">\*</span>

### Submitter  {#Submitter}

#### Submitter  {#Area_biosample-submitter}

Contact information of submitter(s). Questions and notifications about a submission are contacted to the e-mail address(es) listed here. Personal contact information is considered confidential and is collected to be used by DDBJ staff should questions arise; the general information about the research center is used for public display.

[First name](#BioSample_First_name)<span class="red">\*</span><a name="BioSample_First_name"></a> 
: Submitter's first name.

[Last name](#BioSample_Last_name)<span class="red">\*</span><a name="BioSample_Last_name"></a>  
: Submitter's last name.

[E-mail](#BioSample_E-mail)<span class="red">\*</span><a name="BioSample_E-mail"></a>  
: E-mail address. Enter an address from the organizations domain.

#### Organization  {#Area_biosample-organization}

[Organization](#Organization)<a name="Organization"></a>  
: Organization to which a contact person belongs.

[Submitting organization](#BioSample_Submitting_organization)<span class="red">\*</span><a name="BioSample_Submitting_organization"></a>  
: Full name of organization.

[Submitting organization URL](#BioSample_Submitting_organization_URL)<a name="BioSample_Submitting_organization_URL"></a>  
: The URL of submitter's organization.

#### Data Release  {#Area_biosample-data-release}

Select "Hold" or "Release". You cannot specify hold date. Please see [Data Release](#sample-release) for detailed release mechanism.

[Release](#BioSample_Release)<a name="BioSample_Release"></a>  
: Submitted BioSample record will be released immediately after the curation process finishes.

[Hold](#BioSample_Hold)<a name="BioSample_Hold"></a>  
: Submitted BioSample record is released when the DDBJ, DRA and GEA record(s) referencing this BioSample ID is released. Private DDBJ record(s) referencing this BioSample ID is not released.

FAQ: [How to request data release?](/faq/en/request-release-e.html)

### General info  {#General-info}

[External Links](#Link)<a name="Link"></a>  
: An URL may be provided, with a label for the resource, to reference a resource that is directly relevant to the submitted sample.

[Link description](#Link_description)<a name="Link_description"></a>  
: Display name of web site that is related to this sample.

[URL](#BioSample_URL)<a name="BioSample_URL"></a>  
: URL of the web site.

### Sample type  {#Sample-type}

#### Standard {#standard}

When it is not appropriate to use [MIxS](#mixs), use standard packages according to sample types and organisms.  
For GEA functional genomics data and MetaboBank metabolomics data, use "Omics" package.  

* SARS-CoV-2: clinical or host-associated - Use for SARS-CoV-2 samples that are relevant to public health. Required attributes include those considered useful for the rapid analysis and trace back of SARS-CoV-2 cases.
* SARS-CoV-2: wastewater surveillance - Use for SARS-CoV-2 wastewater surveillance samples that are relevant to public health. Required attributes include those considered useful for the rapid analysis and trace back of SARS-CoV-2 cases.
* Microbe - Use for bacteria or other unicellular microbes when it is not appropriate or advantageous to use MIxS, Pathogen or Virus packages.
* Model organism or animal - Use for multicellular samples or cell lines derived from common laboratory model organisms, e.g., mouse, rat, Drosophila, worm, fish, frog, or large mammals including zoo and farm animals.
* Metagenome or environmental - Use for metagenomic and environmental samples when it is not appropriate or advantageous to use MIxS packages.
* Invertebrate - Use for any invertebrate sample.
* Human - "WARNING: Only use for human samples or cell lines that have no privacy concerns. For all studies involving human subjects, it is the submitter's responsibility to ensure that the information supplied protects participant privacy in accordance with all applicable laws, regulations and institutional policies. Make sure to remove any direct personal identifiers from your submission. If there are patient privacy concerns regarding making data fully public, please submit samples and data to Japanese Genotype-phenotype Archive (JGA) database. [JGA](/jga/index-e.html) has controlled access mechanisms and is an appropriate resource for hosting sensitive patient data. 
* For samples isolated from humans use the Pathogen, Microbe or appropriate MIxS package."
* Plant - Use for any plant sample or cell line.
* Viral - Use for all virus samples not directly associated with disease. Viral pathogens should be submitted using the Pathogen: Clinical or host-associated pathogen package.
* Beta-lactamase - Use for beta-lactamase gene transformants that have antibiotic resistance data.
* Omics - Use for submission of functional genomics data to Genomic Expression Archive (GEA) and metabolomics data to MetaboBank.

#### Pathogen {#pathogen}

Use for pathogen samples that are relevant to public health. Required attributes include those considered useful for the rapid analysis and trace back of pathogens.

* Pathogen: clinical or host-associated - Use for clinical or host-associated pathogen samples
* Pathogen: environmental/food/other - Use for environmental/food/other pathogen samples

#### MIxS  {#mixs}

* Cultured Bacterial/Archaeal Genomic Sequences (MIGS.ba) - Use for cultured bacterial or archaeal genomic sequences. Organism must have lineage [Bacteria](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2) or [Archaea](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2157).
* Eukaryotic Genomic Sequences (MIGS.eu) - Use for eukaryotic genomic sequences. Organism must have lineage [Eukaryota](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2759).
* Viral Genomic Sequences (MIGS.vi) - Use for virus genomic sequences. Organism must have lineage [Viruses](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=10239).
* Environmental/Metagenome Genomic Sequences (MIMS.me) - Use for environmental and metagenome sequences. Organism must be a metagenome, where lineage starts with [unclassified sequences](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908) and scientific name ends with 'metagenome'.
* Metagenome-assembled Genome Sequences (MIMAG) - Use for metagenome-assembled genome sequences produced using computational binning tools that group sequences into individual organism genome assemblies starting from metagenomic data sets. Organism cannot contain the term 'metagenome'. Use the MIUVIG package for virus genomes.
* Single Amplified Genome Sequences (MISAG) - Use for single amplified genome sequences produced by isolating individual cells, amplifying the genome of each cell using whole genome amplification, and then sequencing the amplified DNA. Organism cannot contain the term 'metagenome'.
* Specimen Marker Sequences (MIMARKS.specimen) - Use for any type of marker gene sequences, eg, 16S, 18S, 23S, 28S rRNA or COI obtained from cultured or voucher-identifiable specimens. Organism cannot contain the term 'metagenome'.
* Survey-related Marker Sequences (MIMARKS.survey) - Use for any type of marker gene sequences, eg, 16S, 18S, 23S, 28S rRNA or COI obtained directly from the environment, without culturing or identification of the organisms. Organism must be a metagenome, where lineage starts with [unclassified sequences](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908) and scientific name ends with 'metagenome'.
* Uncultivated Viral Genome Sequences (MIUVIG) - Use for uncultivated virus genome identified in metagenome and metatranscriptome datasets. Organism must have lineage [Viruses](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=10239).

#### Environmental package  {#environmental-package}

Select appropriate environmental packages for MIxS environmental/metagenome samples. Predefined attributes are added.  
For the MIMS.me and MIMARKS.survey packages, "No package" cannot be selected.  

* air
* built
* host-associated
* human-associated
* human-gut
* human-oral
* human-skin
* human-vaginal
* microbial
* miscellaneous
* plant-associated
* sediment
* soil
* wastewater
* water
    
### Attributes  {#Attributes}

[Sample attributes](#Sample_attributes)<a name="Sample_attributes"></a>  
: Download BioSample worksheet which has been customised to fit models. This is a tab-delimited text file that may be opened with a spreadsheet program or a text editor. The validator checks the uploaded text file and feedbacks [warning and error messages](/biosample/validation-e.html). According to the messages, revise the text file and upload the file again. Submitters can not submit the BioSample unless all errors are resolved.

[Attributes](#BioSample_Attributes)<a name="BioSample_Attributes"></a>  
: [List of attributes](/biosample/attribute-e.html). Besides the mandatory fields, there are several optional attribute fields. To make the BioSample record most useful, you should include all available information in the submission. Commonly used and useful attributes have been defined, with standardized nomenclature. In preparing your submission, please refer to [this attributes list](/biosample/attribute-e.html) and [BioSample examples](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482) and fill in the relevant fields. If you have information of a type that does not appear in the standard list, you can create it as a user-defined attribute.

### Overview  {#Overview}

[Overview](#BioSample_Overview)<a name="BioSample_Overview"></a>  
: Review your submission and submit the BioSample by clicking the "Submit" button at bottom. The uploaded sample attribute file can be downloaded at "Submission ID.txt".

# Submission to BioSample

<div class="attention" markdown="1">
Submission of research data from human subjects
: <span class="red">For submitting data from human subjects (human data) to the databases of DDBJ center, it is submitter's responsibility to ensure that the dignity and right of human subject are protected in accordance with all applicable laws, ordinances, guidelines and policies of submitter's institution. In principle, make sure to remove any direct personal identifiers of human subjects from your data to be submitted. Before submitting human data, read the "[Submission of research data from human subjects](/policies-e.html#submission-of-human-data)".</span>
</div>

## Submission to BioSample  {#sample-submission}

### Create a new sample submission  {#create-new-sample-submission}

Obtain a submission account according to the [Account Handbook](/account-e.html).

Move to the Biosample submission page from the “Biosample” menu at the top. Create a new sample submission by clicking the \[New submission\] button.

<div class="attention">
The maximum number of samples per submission is 1,000. If you have more than 1,000 samples, please create multiple submissions.
</div>

<div class="attention">
If there is no reply from submitters after three months of initial contact, submissions will be cancelled.
</div>


{% include image.html url="books/hbs-01.jpg" caption="Create a new sample submission" class="w400" %}


To submit a BioSample, enter content from left to right tabs.

For BioSample metadata, please see the [BioSample metadata](#metadata).


{% include image.html url="books/hbs-02.jpg" caption="Submit new samples" class="w450" %}


Select a sample type in the "SAMPLE TYPE". For genome samples, minimum sample attributes are defined by [MIxS](#sample-attributes).

For the Sample type, please see the [BioSample Handbook](#Sample_type).


{% include image.html url="books/hbs-03.jpg" caption="Select a sample type" class="w450" %}


### Enter sample attributes  {#enter-sample-attributes}

[List and explanation of BioSample attributes](/biosample/attribute-e.html). User-defined attributes can be added to the rightmost column.

[Example BioSample submission files](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482)

Download a template text file according to the selected sample type to enter sample attributes.

A main sample submission step is to describe samples by required, optional and user-defined attributes.


{% include image.html url="books/hbs-04.jpg" caption="Download a text file for entering sample attributes" class="w450" %}


A text file is separated by tab and can be opened and editted in spreadsheet editor (e.g. Excel®). Attribute names are in a header line. Attributes with "\*" are required.

From second lines, enter one sample per line. Enter PSUB submission id in [bioproject\_id](/biosample/attribute-e.html?all=all#bioproject_id) for project without PRJD accession numbers.

<div class="attention">
In one submission, samples can be submitted as 1 sample - 1 line in sample attributes tab-delimited text file.
</div>

#### Missing value reporting  {#missing-value-reporting}

[The International Nucleotide Database Collaboration (INSDC)](https://www.ebi.ac.uk/ena/about/missing-values-reporting)have developed a standardised missing/null value reporting language to be used where a value of an expected format for sample metadata reporting can not be provided. Submitters are strongly encouraged to always provide true values of expected formats. However, if missing/null value reporting is required submitters are asked to use a term with the finest granularity for their reported situation. If appropriate, use a term in the "lower level", if not, use a term in the "top level".

To facilitate an understanding of the supported terms we enclose a table with the missing/null value terms and their definitions.

Please use the following standardised missing value vocabulary only if a true value of an expected format for a mandatory field is missing. If a true value is missing for a recommended or an optional field then these fields should not be used for reporting at all.

INSDC missing value reporting terms

<table>
  <tr>
    <th>
    INSDC term  
    (top level)
    </th>
    <th>
    INSDC term  
    (lower level)
    </th>
    <th>Definition</th>
  </tr>
  <tbody>
  <tr>
    <td>
      not applicable
    </td>
    <td></td>
    <td>
    information is inappropriate to report, can indicate that the standard itself fails to model or represent the information appropriately
    </td>
  </tr>
  <tr>
    <td rowspan="3" class="borderbtm">
      missing
    </td>
    <td>
      not collected
    </td>
    <td>
      information of an expected format was not given because it has not been collected
    </td>
  </tr>
  <tr>
    <td>
      not provided
    </td>
    <td>
      information of an expected format was not given, a value may be given at the later stage
    </td>
  </tr>
  <tr>
    <td>
      restricted access
    </td>
    <td>
      information exists but can not be released openly because of privacy concerns
    </td>
  </tr>
  </tbody>
</table>

#### Sample attributes validation  {#validation}

Upload the sample attribute file by selecting the file and click the Continue button. The validator checks the uploaded file accoring to the rules and feedbacks the error and warning messages. Submitters can not submit the BioSample unless all errors are resolved.

For validation rules and messages, please see [Validation rules page](/biosample/validation-e.html).

In the following packages, at least one of attributes is required. For example, strain or isolate is mandatory in the Microbe package.  
In the BioSample submission tsv, required attributes are marked with "*", however, at least one required attributes are not marked.  

| Package | 'either-one-mandatory' attributes | 'either-one-mandatory' attributes |
|---|
| Microbe | strain, isolate | isolation_source, host |
| Model.organism.animal | strain, isolate, breed, cultivar, ecotype | age, dev_stage |
| Metagenome.environmental | isolation_source, host ||
| Invertebrate | isolate, breed | isolation_source, host |
| Plant | isolate, cultivar, ecotype | age, dev_stage |
| Virus | host, lab_host ||
| Beta-lactamase | strain, isolate ||
| Pathogen.cl | strain, isolate ||
| Pathogen.env | strain, isolate ||

{% include image.html url="books/hbs-04-2.jpg" caption="BioSample validation.In this example, an error for the future date in the collection_date and a warning for inconsistent countries between geo_loc_name and lat_lon of the sample KOME-2 are displayed" class="w450" %}

Check content in the last "OVERVIEW" and submit samples. In the "ATTRIBUTES" area, the submitted sample attribute file can be downloaded.


{% include image.html url="books/hbs-05.jpg" caption="Submit BioSample" class="w450" %}


### Accession numbers  {#accession-numbers}

When creating a new submission, a temporary ID starts with SSUB is assigned. The DDBJ BioSample issues accession numbers with prefix SAMD to the submitted samples passed validation. When an unregistered organism is described in the organism or the locus\_tag\_prefix has values, accession numbers are issued after curator review. You can view status and accession numbers of submitted samples in your [submission account](https://ddbj.nig.ac.jp/D-way/).

<div class="attention">
- Do NOT cite a temporary ID starts with SSUB in references.
- Do not double submit the samples which have been registered to EBI and NCBI.
</div>

### Release of BioSample {#sample-release} 

You can select the following options:

- Release immediately following curation
- Release when referenced data is published

<div class="attention">
Hold date cannot be set for BioSample.
</div>

The submitted sample data can be kept private. Sample data are automatically released when the linked DDBJ/DRA/GEA record(s) is published. The release of the BioSample record does not trigger the release of private DDBJ/DRA/GEA record(s) referencing this BioSample accession. The release of the BioSample record does trigger the release of referencing BioSample in derived_from attributes.

FAQ: [How are linked BioProject/BioSample/sequence data released?](/faq/en/bp-bs-seq-release.html)

### Update BioSample  {#update-biosample}

It is possible to update data after registration. Please contact us from [Message form](/contact-ddbj-e.html).
