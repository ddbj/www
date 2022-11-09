---
layout: tabbed_indexed_content
service_name: BioSample
title: Sample Information
category: biosample
current_tab: submission
lang: en
---

Required<span class="red">\*</span>  
Conditionally required<span class="conditionally_required">\*</span>

## Submitter  {#Submitter}

### Submitter  {#Area_biosample-submitter}

Contact information of submitter(s). Questions and notifications about a submission are contacted to the e-mail address(es) listed here. Personal contact information is considered confidential and is collected to be used by DDBJ staff should questions arise; the general information about the research center is used for public display.

[First name](#BioSample_First_name)<span class="red">\*</span><a name="BioSample_First_name"></a> 
: Submitter's first name.

[Last name](#BioSample_Last_name)<span class="red">\*</span><a name="BioSample_Last_name"></a>  
: Submitter's last name.

[E-mail](#BioSample_E-mail)<span class="red">\*</span><a name="BioSample_E-mail"></a>  
: E-mail address. Enter an address from the organizations domain.

### Organization  {#Area_biosample-organization}

[Organization](#Organization)<a name="Organization"></a>  
: Organization to which a contact person belongs.

[Submitting organization](#BioSample_Submitting_organization)<span class="red">\*</span><a name="BioSample_Submitting_organization"></a>  
: Full name of organization.

[Submitting organization URL](#BioSample_Submitting_organization_URL)<a name="BioSample_Submitting_organization_URL"></a>  
: The URL of submitter's organization.

## General info  {#General-info}

### Data Release  {#Area_biosample-data-release}

Select "Hold" or "Release". You cannot specify hold date. Please see [Data Release](#sample-release) for detailed release mechanism.

[Release](#BioSample_Release)<a name="BioSample_Release"></a>  
: Submitted BioSample record will be released immediately after the curation process finishes.

[Hold](#BioSample_Hold)<a name="BioSample_Hold"></a>  
: Submitted BioSample record is released when the DDBJ, DRA and GEA record(s) referencing this BioSample ID is released. Private DDBJ record(s) referencing this BioSample ID is not released.

FAQ: [How to request data release?](/faq/en/request-release-e.html)

### External Links {#Area_biosample-external-links}

[Link description](#Link_description)<a name="Link_description"></a>  
: Display name of web site that is related to this sample.

[URL](#BioSample_URL)<a name="BioSample_URL"></a>  
: URL of the web site that is related to this sample.

### Comments {#Area_comments}

[Private comments to DDBJ staff](#Private_comments)<a name="Private_comments"></a>
: Use this field if you have questions for database support staff. The content is not made public.

## Sample package {#Sample-package}

BioSample supports richer sample description and standardization of sample attributes by providing sample packages designed for each type of sample and sequences.

### Standard {#standard}

When it is not appropriate to use [MIxS](#mixs), use standard packages according to sample types and organisms.  
For GEA functional genomics data and MetaboBank metabolomics data, "Omics" package is recommended.  

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

### Pathogen {#pathogen}

Use for pathogen samples that are relevant to public health. Required attributes include those considered useful for the rapid analysis and trace back of pathogens.

* Pathogen: clinical or host-associated - Use for clinical or host-associated pathogen samples
* Pathogen: environmental/food/other - Use for environmental/food/other pathogen samples

### MIxS  {#mixs}

Used for samples from which genome and metagenome sequences were obtained.  
When it is not appropriate to use [MIxS](#mixs), use [standard](#standard) packages.

* Cultured Bacterial/Archaeal Genomic Sequences (MIGS.ba) - Use for cultured bacterial or archaeal genomic sequences. Organism must have lineage [Bacteria](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2) or [Archaea](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2157).
* Eukaryotic Genomic Sequences (MIGS.eu) - Use for eukaryotic genomic sequences. Organism must have lineage [Eukaryota](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2759).
* Viral Genomic Sequences (MIGS.vi) - Use for virus genomic sequences. Organism must have lineage [Viruses](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=10239).
* Environmental/Metagenome Genomic Sequences (MIMS.me) - Use for environmental and metagenome sequences. Organism must be a metagenome, where lineage starts with [unclassified sequences](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908) and scientific name ends with 'metagenome'.
* Metagenome-assembled Genome Sequences (MIMAG) - Use for metagenome-assembled genome sequences produced using computational binning tools that group sequences into individual organism genome assemblies starting from metagenomic data sets. Organism cannot contain the term 'metagenome'. Use the MIUVIG package for virus genomes.
* Single Amplified Genome Sequences (MISAG) - Use for single amplified genome sequences produced by isolating individual cells, amplifying the genome of each cell using whole genome amplification, and then sequencing the amplified DNA. Organism cannot contain the term 'metagenome'.
* Specimen Marker Sequences (MIMARKS.specimen) - Use for any type of marker gene sequences, eg, 16S, 18S, 23S, 28S rRNA or COI obtained from cultured or voucher-identifiable specimens. Organism cannot contain the term 'metagenome'.
* Survey-related Marker Sequences (MIMARKS.survey) - Use for any type of marker gene sequences, eg, 16S, 18S, 23S, 28S rRNA or COI obtained directly from the environment, without culturing or identification of the organisms. Organism must be a metagenome, where lineage starts with [unclassified sequences](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908) and scientific name ends with 'metagenome'.
* Uncultivated Viral Genome Sequences (MIUVIG) - Use for uncultivated virus genome identified in metagenome and metatranscriptome datasets. Organism must have lineage [Viruses](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=10239).

### Environmental package  {#environmental-package}

Select appropriate environmental packages for MIxS environmental/metagenome samples. 
Predefined attributes to describe sampling environments are added (for example, "altitude" for the air environmental package).  
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
    
## Attributes  {#Attributes}

[Sample attributes](#Sample_attributes)<a name="Sample_attributes"></a>  
: Download BioSample worksheet which has been customised to fit models. This is a tab-delimited text file that may be opened with a spreadsheet program or a text editor. The validator checks the uploaded text file and feedbacks [warning and error messages](/biosample/validation-e.html). According to the messages, revise the text file and upload the file again. Submitters can not submit the BioSample unless all errors are resolved.

[Attributes](#BioSample_Attributes)<a name="BioSample_Attributes"></a>  
: [List of attributes](/biosample/attribute-e.html). Besides the mandatory fields, there are several optional attribute fields. To make the BioSample record most useful, you should include all available information in the submission. Commonly used and useful attributes have been defined, with standardized nomenclature. In preparing your submission, please refer to [this attributes list](/biosample/attribute-e.html) and [BioSample examples](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482) and fill in the relevant fields.  
If you have information of a type that does not appear in the standard list, you can create it as a user-defined attribute.

## Overview  {#Overview}

[Overview](#BioSample_Overview)<a name="BioSample_Overview"></a>  
: Review your submission and submit the BioSample by clicking the "Submit" button at bottom. The uploaded sample attribute file can be downloaded at "Submission ID.txt".
