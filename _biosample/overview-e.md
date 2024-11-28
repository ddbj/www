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

In general, create BioSample records for biological source materials and represent extracted molecules, nucleic acids and metabolites, by [DRA](/dra/metadata-e.html), [GEA](/gea/metadata-e.html) and [MetaboBank](/metabobank/metadata-e.html) metadata.

- Biological replicates are represented by separate BioSamples with distinct 'biological_replicate' attributes. [DRA objects organization](/dra/metadata-e.html#ex_replicates) For example, 'biological_replicate = 1' and 'biological_replicate = 2'.
- Technical replicates are represented by DRA Experiments and GEA SDRF. Use a BioSample for technical replicates.
- RNA and metabolites samples extracted from a plant leaf, create one BioSample and represent extracts by [GEA](/gea/metadata-e.html) and [MetaboBank](/metabobank/metadata-e.html) metadata.
- If a paired-end library from single sample is sequenced, do not create separate sample for forward and reverse reads but register both reads in a DRA Run. [DRA objects organization](/dra/submission-e.html#ex_samples)
- If a sample is sequenced by different sequencing instruments, link DRA Experiments with distinct [Instrument model](/dra/submission-e.html#Instrument) to a BioSample.
- Register a separate BioSample for each unique source, e.g., RNA from the wings is a separate BioSample than RNA from legs if those two sources were sequenced independently.
- [Genome Assembly Sample](/biosample/genome-assembly-sample-e.html) requires genome-specific attributes such as locus tag prefix, so it needs to be separated from other RNA and metabolites samples.

Examples:

- 23,000 unique 16S amplicons from a single seawater collection point \- 1 BioSample (1 sample was collected and then analyzed to deduce 16S diversity)
- 3 "identical" transgenic mice treated with the same drug as part of an experiment \- 3 BioSamples (biological replicates are represented by separate BioSamples)
- To examine gene expression profiles, CHO cells infected with a virus and sampled at 0, 2, 4, and 8 hours post infection \- 4 BioSamples (4 time points)
- To analyze differences in gene expression levels, RNA-seq data from a single male anteater taken from the brain, heart, lungs, testes, and liver \- 5 BioSamples (5 different tissues isolated)

## Sample attributes  {#sample-attributes}

A major component of a BioSample record is the sample attributes section. Attributes define the material under investigation and can include sample characteristics such as cell type, collection site and phenotypic information like disease state.

BioSample attributes are captured as structured name: value pairs, for example, tissue:liver

The database supports and encourages use of dictionaries of attribute names by providing packages with pre-defined attributes.

## Sample package {#package}

BioSample promotes richer sample description and standardization of attribute name by providing sample packages designed for each type of sample and sequences.

* See "[Sample Information](/biosample/sample-info-e.html#Sample-package)" regarding how to select a package.
* See "[Sample attributes](/biosample/attribute-e.html)" regarding sample attributes.

The package itself is a mechanism to promote adequate sample description and attributes are more important for sample interpretation. Therefore, if samples are described by appropriate attributes, you do not change the package even though submitted samples use not-recommended package.

## Organism  {#organism}

For an organism name of the BioSample [organism](/biosample/attribute-e.html?all=all#organism) attribute, see the ["Organism name"](/ddbj/organism-e.html) page. Previously, a strain name or some other lower taxon was required for the organism name of whole genomic sequence, mainly microorganisms. However, currently, the value of organism qualifier should be just a scientific name, in principle, even though for microbial genomes. Please describe a strain name in the [strain](/biosample/attribute-e.html?all=all#strain) attribute of BioSample.

Related news: [Changes in organism strain information management](/news/en/2013-12-13-e.html)

## Spatio-temporal annotation {#spatio-temporal}

[International Nucleotide Sequence Database Collaboration (INSDC)](https://www.insdc.org/) improves utility of sequence data and sample traceability by making sample location and collection date description mandatory. Please also see [INSDC spatio-temporal annotation standards](https://www.insdc.org/news/spatio-temporal-annotation-policy-18-11-2021/).

* Location of collection: Specification of where the sequenced sample was collected. Provide a meaningful location to interpret the data. At a minimum, describe the names for countries, oceans, or seas. Relevant attributes are, BioSample [geo_loc_name](/biosample/attribute-e.html#geo_loc_name) and DDBJ [country](/ddbj/qualifiers-e.html#country).
* Date and time of collection: Date and time when the sequenced sample was collected. Provide a meaningful date and time to interpret the data. Describe at least to the nearest year. Relevant attributes are, BioSample and DDBJ [collection_date](/biosample/attribute-e.html#collection_date).

In cases where this information cannot be provided (e.g., pathogen samples for which this information would lead to identifiability of a human) or is not relevant (e.g., study of a model organism lab stock or an established cell line), you can declare an appropriate exemption using the exemption terms defined in the [INSDC Missing Value Reporting Standards](https://www.insdc.org/submitting-standards/missing-value-reporting/) or use one of general [missing values](/biosample/submission-e.html#missing-value-reporting) as before.

### FAQ and examples {#spatio-temporal-faq}

* [I cultured and sequenced a bacterial strain distributed from a culture collection. How should I describe the location and time?](/faq/en/sample-from-collection-e.html)
* [I collected my sample for sequencing from a species outside of its natural environment (e.g. zoo, botanic garden) - how do I provide the spatiotemporal information for my sample?](/faq/en/sample-from-none-natural-environment-e.html)
* [My sample was collected from the Pacific Ocean but the date was not recorded and I only know the year in which it was sampled was sometime in 2010 - how do I report this?](/faq/en/sample-from-pacific-ocean-2010-e.html)
* [My sample was collected in Shizuoka, Japan at 14:12:55 on the 5th May 2023. How do I format this for submission?](/faq/en/location-and-date-of-sample-e.html)
* [I have an ancient DNA sample - how do I provide the spatiotemporal information for my sample?](/faq/en/ancient-dna-sample-e.html)
* [I am not able to report on my spatiotemporal metadata but my exemption reason is not on the list - what should I do?](/faq/en/appropriate-exemption-not-found-e.html)
* [As part of my consortium, we set up an agreement that the data would be submitted to INSDC but that all metadata would not be shared until after 2 years. This agreement was organised prior to the standards change so we can’t comply. How do I report this?](/faq/en/data-agreement-established-pre-2023-e.html)
* [What do I do if I can submit one of the mandatory fields but not the other?](/faq/en/either-one-of-location-and-date-cannot-be-described-e.html)

## Genome assembly sample {#genome-assembly-sample}

### Package {#genome-assembly-sample-package}

A [DDBJ genome sequence](/ddbj/mss-e.html) should be linked to one BioProject and one BioSample. This constraint is set by INSDC to manage genome sequences.
Submit sample(s) used for genome assembly in following packages. When it is not appropriate to use [MIxS](/biosample/sample-info-e.html#mixs), use standard packages according to organisms.

- In the case of isolated, cultured prokaryotes: [Cultured Bacterial/Archaeal Genomic Sequences (MIGS.ba)](/biosample/attribute-e.html) or [Microbe](/biosample/sample-info-e.html#Sample-type)
- In the case of eukaryotes: [Eukaryotic Genomic Sequences (MIGS.eu)](/biosample/attribute-e.html) or one of the standard packages for organism, [Model organism or animal](/biosample/sample-info-e.html#Sample-type), [Invertebrate](/biosample/sample-info-e.html#Sample-type) or [Plant](/biosample/sample-info-e.html#Sample-type)

Register a [locus tag prefix](/ddbj/locus_tag-e.html) necessary for an annotated genome submission by entering a prefix in the BioSample locus_tag_prefix attribute.

### Genome assembled from multiple samples {#samples}

When submitting a genome sequence assembled from DNA reads extracted from different samples to [DDBJ](/ddbj/index-e.html), we recommend to register a BioSample even though samples are different (an assembled genome needs to be linked to single BioSample).

* genome sequences of different samples were treated as the "same" molecule.
* Apart from a genome sequence, quantitative data such as gene expression are not linked.

Example submissions.

* Genome DNAs extracted from a same sample on a different day. You may not describe the extracted dates in BioSample attributes. Instead, you may describe the dates in DRA Experiment or BioSample description.
* Genome DNAs prepared for Illumina and PacBio sequencing. Differentiate at the DRA Experiment level and not at the BioSample level.

When you want to register more than one BioSample, register a derived BioSample because a genome sequence cannot be linked to multiple BioSamples. For example, sequencing reads of male and female samples are submitted to DRA, and submit a genome sequence assembled from both samples, register a derived BioSample citing both BioSample accessions.
Enter the originating BioSample accessions in derived_from attribute of the derived BioSample in the format of "This sample group is the combination of the [number of samples] individual BioSamples: [BioSample accessions]". For example, "This sample group is the combination of the 2 individual BioSamples: SAMN12623203 and SAMN12623206"

Real examples:
* A Genome sequence [JAGDQO010000000](https://www.ncbi.nlm.nih.gov/nuccore/2035211276) and a derived sample [SAMN17974349](https://www.ncbi.nlm.nih.gov/biosample/17974349).

### Metagenome assembly {#mag}

There are four tiers of [metagenome assembly](/ddbj/metagenome-assembly-e.html) (Metagenome-Assembled Genome, MAG) submission depending on the degree of assembly.

Submit a MAG from a particular organism to the [ENV division](/ddbj/env-e.html) of DDBJ.

Create a virtual BioSample for MAG submission.
Use the [MIMAG](/biosample/sample-info-e.html#Sample-type) package and use an organism name without uncultured (e.g., Methanosarcina thermophila).
Indicate deriving source sample as "derived_from: SAMD00000001". [Examples](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=272411182)
A MAG also needs to be linked to a BioSample, create a derived BioSample for MAG.

### Haplotype {#haplotype}

Because two genome sequences are produced from single sample in haplotype sequencing, INSDC establishes the guideline for haplotype sequence submission. See (Haplotype)[/ddbj/haplotype-e.html] for how to submit haplotype genomes.

## Human sample {#human-sample}

### Submission of research data from human subjects {#submission-of-human-data}

Submit data derived from human subjects (human data) to the databases of Bioinformation and DDBJ Center in compliant with "[Submission of Research Data from Human Subjects](/policies-e.html#submission-of-human-data)".

WARNING: Only use for human samples or cell lines that have no privacy concerns.
For all studies involving human subjects, it is the submitter's responsibility to ensure that the information supplied protects participant privacy in accordance with all applicable laws, regulations and institutional policies. Make sure to remove any direct personal identifiers from your submission. If there are patient privacy concerns regarding making data fully public, please submit samples and data to Japanese Genotype-phenotype Archive (JGA) database. [JGA](/jga/submission-e.html) has controlled access mechanisms and is an appropriate resource for hosting sensitive patient data.

### Sample attributes {#attribute}

Describe following attributes for Human (*Homo sapiens*) sample by using [Human](/biosample/sample-info.html#Sample-type) package. Please see [this page](/biosample/attribute-e.html?all=all) for attribute explanation.

#### Sample derived from human subjects {#human-subject}

Fill in anonymized subject id in isolate.

#### Cell line {#cell-line}

Recommended;
- cell_type

### Primary cell {#primary}

Indicate primary cell in sample_type.
sample_type: primary cell

### iPS cell {#ips}

In most cases, iPS cells are used in differentiated state, so information regarding before and after the differentiation are important.
In addition to the above, provide attributes indicated below. It is also applied to ES cells used after differentiation.
Complex samples such as differentiated a few times, provide description in free-text.

#### Samples from human subjects {#ips-human-subject}

Describe information regarding differentiation in cell_type.
For example, cell_type： iPS cell derived megarocyte cell.

#### Cell line {#ips-cell-line}

Describe information regarding differentiation in cell_type.
For example, cell_type： iPS cell (cell_line:253G1) derived megarocyte cell.
In addition, describe provider information in biomaterial_provider.
For example, biomaterial_provider： ATCC.

## Antibiogram  {#antibiogram}

An antibiogram table can be included in a BioSample record (Example: [SAMN07958491](https://www.ncbi.nlm.nih.gov/biosample/SAMN07958491)). To submit the table, please contact [BioProject/BioSample/DRA update request form](https://forms.gle/T7faNoDCvmQoTiWq9).

For the antibiogram submission guidelines, please see the NCBI BioSample pages.

- [Antibiograms - beta-lactamase MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/beta-lactamase/)
- [Antibiograms - pathogen MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram/)
- [Antibiograms - mycobacterial non-MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram-myco/)

## XML schema  {#xml-schema}

[BioSample XML schema](https://github.com/ddbj/pub/tree/master/docs/biosample)
