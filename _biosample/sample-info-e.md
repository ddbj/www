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

Choose a package accoding to species or data type of your submission. Please see "[Sample package](/biosample/overview-e.html#package)" for how to select appropriate one. [Attribute list](/biosample/attribute-e.html)

* Standard
	* SARS-CoV-2: clinical or host-associated
	* SARS-CoV-2: wastewater surveillance
	* Microbe
	* Model organism or animal
	* Metagenome or environmental
	* Invertebrate
	* Human
	* Plant
	* Viral
	* Beta-lactamase
	* Omics
* Pathogen
	* Pathogen: clinical or host-associated
	* Pathogen: environmental/food/other
* MIxS
	* Cultured Bacterial/Archaeal Genomic Sequences (MIGS.ba)
	* Eukaryotic Genomic Sequences (MIGS.eu)
	* Viral Genomic Sequences (MIGS.vi)
	* Environmental/Metagenome Genomic Sequences (MIMS.me)
	* Metagenome-assembled Genome Sequences (MIMAG)
	* Single Amplified Genome Sequences (MISAG)
	* Specimen Marker Sequences (MIMARKS.specimen)
	* Survey-related Marker Sequences (MIMARKS.survey)
	* Uncultivated Viral Genome Sequences (MIUVIG)

* Environmental package
	* agriculture
	* air
	* built
	* food-animal
	* food-farm_env
	* food-human_foods
	* food-prod_facility
	* host-associated
	* human-associated
	* human-gut
	* human-oral
	* human-skin
	* human-vaginal
	* hydrocarbon-cores
	* hydrocarbon-fluids_swabs
	* microbial
	* miscellaneous
	* plant-associated
	* sediment
	* soil
	* symbiont-associated
	* wastewater
	* water
    
## Attributes  {#Attributes}

[Sample attributes](#Sample_attributes)<a name="Sample_attributes"></a>  
: Download BioSample worksheet which has been customised to fit models. This is a tab-delimited text file that may be opened with a spreadsheet program or a text editor. The validator checks the uploaded text file and feedbacks [warning and error messages](/biosample/validation-e.html). According to the messages, revise the text file and upload the file again. Submitters can not submit the BioSample unless all errors are resolved.

[Attributes](#BioSample_Attributes)<a name="BioSample_Attributes"></a>  
: [List of attributes](/biosample/attribute-e.html). Besides the mandatory fields, there are several optional attribute fields. To make the BioSample record most useful, you should include all available information in the submission. Commonly used and useful attributes have been defined, with standardized nomenclature. In preparing your submission, please refer to [this attributes list](/biosample/attribute-e.html) and [BioSample examples](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482) and fill in the relevant fields.  
If you have information of a type that does not appear in the standard list, you can create it as a user-defined attribute.

### organism {#organism}

An organism name in the [organism](/biosample/attribute-e.html#organism) attribute must be a "scientific name" ranked as species or lower taxa in [NCBI Taxonomy](https://ncbi.nlm.nih.gov/taxonomy).  
When an organism name is not registered in the [NCBI Taxonomy](https://ncbi.nlm.nih.gov/taxonomy), 
enter a proposed name as described in [Organism qualifier](/biosample/attribute.html) and submit a BioSample with the other information. 
DDBJ staff will apply a novel name to the NCBI Taxonomy. After the name is registered, BioSample accession number(s) will be assigned.

### locus tag prefix {#locus_tag_prefix}

When submitting annotated genome sequences to [DDBJ](/ddbj/index-e.html), [Locus tag prefix](/ddbj/locus_tag-e.html) is necessary. Enter locus tag(s) you want to use in [locus_tag_prefix](/biosample/attribute-e.html#locus_tag_prefix) attribute(s) and submit BioSample records.  
DDBJ staff will reserve locus tag prefix(es) to NCBI. BioSample accession number(s) will be assigned after the reservation.

## Overview  {#Overview}

[Overview](#BioSample_Overview)<a name="BioSample_Overview"></a>  
: Review your submission and submit the BioSample by clicking the "Submit" button at bottom. The uploaded sample attribute file can be downloaded at "Submission ID.txt".
