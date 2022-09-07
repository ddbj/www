---
layout: tabbed_indexed_content
service_name: BioSample
title: BioSample Overview
category: biosample
current_tab: submission
lang: en
---

## Purpose of BioSample {#purpose}

The BioSample database is descriptive information about the biological source materials, or samples, used to generate experimental data in any of primary data archives.

Following figure depicts how BioSample records are organized and linked with other objects. This example is composed of one umbrella project that encompasses three subprojects, each of which generated data derived from two BioSample records. Users can query either the BioProject or the BioSample database to retrieve the relevant records, and then navigate through links to the corresponding experimental data which continue to be stored in DDBJ's primary data archives, [DDBJ](/ddbj/index-e.html), [DRA](/dra/index-e.html) and [GEA](/gea/index-e.html).

{% include image.html url="submission/biosample_integration.jpg" caption="Overview of BioSample and BioProject integration with other DDBJ databases" class="w450" %}

## Sample {#sample}

Given the huge diversity of sample types handled by archival databases, and the fact that appropriate sample descriptions are often dependent on the context of the study, the definition of what a BioSample represents is deliberately flexible. Typical examples of a BioSample include a cell line, a primary tissue biopsy, an individual organism or an environmental isolate.

Biological replicates are represented by separate BioSamples with distinct 'replicate' attribute, e.g., 'biological replicate 1' and 'biological replicate 2'. [FAQ: How many samples do I need for my DRA submission?](/faq/en/samples-for-sra-e.html)

Information about the sample will include:

- Species
- The material sampled, e.g., organs, tissues, cell type
- Phenotypic information including disease states and clinical information about the individual

The information about human subjects and access to it will be compliant with all relevant ethical requirements. The DDBJ BioSample database does not support controlled access mechanisms and thus cannot host human clinical samples that may have associated privacy concerns. 
Submit such human samples to [JGA](/jga/index-e.html) which have access-control mechanism.

## Sample granularity {#granularity}

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

## Genome assembly sample {#genome-assembly-sample}

For sample(s) used for genome assembly, see [Genome Assembly Sample](/biosample/genome-assembly-sample-e.html).

## Human sample {#human-sample}

For sample(s) derived from human, see [Human Sample](/biosample/human-sample-e.html).

## Sample attributes  {#sample-attributes}

A major component of a BioSample record is the sample attributes section. Attributes define the material under investigation and can include sample characteristics such as cell type, collection site and phenotypic information like disease state.

BioSample attributes are captured as structured name: value pairs, for example, tissue:liver

The database supports and encourages use of dictionaries of attribute names by providing packages with pre-defined attributes. 

## Sample package {#package}

BioSample promotes richer sample description and standardization of attribute name by providing sample packages designed for each type of sample and sequences.

* See "[Sample Information](/biosample/sample-info-e.html#Sample-type)" regarding how to select a package.
* See "[Sample attributes](/biosample/attribute-e.html)" regarding sample attributes.

The package itself is a mechanism to promote adequate sample description and attributes are more important for sample interpretation. Therefore, if samples are described by appropriate attributes, you do not change the package even though submitted samples use not-recommended package.

## Organism  {#organism}

For an organism name of the BioSample [organism](/biosample/attribute-e.html?all=all#organism) attribute, see the ["Organism name"](/ddbj/organism-e.html) page. Previously, a strain name or some other lower taxon was required for the organism name of whole genomic sequence, mainly microorganisms. However, currently, the value of organism qualifier should be just a scientific name, in principle, even though for microbial genomes. Please describe a strain name in the [strain](/biosample/attribute-e.html?all=all#strain) attribute of BioSample.

Related news: [Changes in organism strain information management](/news/en/2013-12-13-e.html)

## Antibiogram  {#antibiogram}

An antibiogram table can be included in a BioSample record (Example: [SAMN07958491](https://www.ncbi.nlm.nih.gov/biosample/SAMN07958491)). To submit the table, please contact [BioSample team](/contact-ddbj-e.html).

For the antibiogram submission guidelines, please see the NCBI BioSample pages.

- [Antibiograms - beta-lactamase MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/beta-lactamase/)
- [Antibiograms - pathogen MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram/)
- [Antibiograms - mycobacterial non-MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram-myco/)

## XML schema  {#xml-schema}

[BioSample XML schema](https://github.com/ddbj/pub/tree/master/docs/biosample)
