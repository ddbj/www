---
layout: tabbed_indexed_content
service_name: BioSample
title: BioSample Overview
category: biosample
current_tab: submission
lang: en
---

The BioSample database is descriptive information about the biological source materials, or samples, used to generate experimental data in any of primary data archives. BioSample, together with BioProject, serve a function of organizing related data across databases.

## Sample granularity {#granularity}

In general, create a BioSample record for a biological source material. Extracted molecules, nucleic acids and metabolites are represented by [DRA](/dra/metadata-e.html), [GEA](/gea/metadata-e.html) and [MetaboBank](/metabobank/metadata-e.html) metadata.

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

A major component of a BioSample record is the sample attributes section. Attributes define the material under investigation and can include sample characteristics such as collection site and phenotypic information.
 BioSample attributes are captured as structured name: value pairs, for example, tissue:liver ([attributes list](/biosample/attribute-e.html))   
The database supports and encourages use of dictionaries of attribute names by providing [packages](#package) with pre-defined attributes.

## Organism  {#organism}

For an organism name of the BioSample [organism](/biosample/attribute-e.html#organism) attribute, see the ["Organism name"](/ddbj/organism-e.html) page. 

## Spatio-temporal annotation {#spatio-temporal}

[INSDC](https://www.insdc.org/) improves utility of sequence data and sample traceability by making sample location and collection date description mandatory. Please also see [INSDC spatio-temporal annotation standards](https://www.insdc.org/news/spatio-temporal-annotation-policy-18-11-2021/).

* Location of collection: Specification of where the sequenced sample was collected. Provide a meaningful location to interpret the data. At a minimum, describe the names for countries, oceans, or seas. Relevant attributes are, BioSample and DDBJ [geo_loc_name](/biosample/attribute-e.html#geo_loc_name).
* Date and time of collection: Date and time when the sequenced sample was collected. Provide a meaningful date and time to interpret the data. Describe at least to the nearest year. Relevant attributes are, BioSample and DDBJ [collection_date](/biosample/attribute-e.html#collection_date).

In cases where this information cannot be provided (e.g., pathogen samples for which this information would lead to identifiability of a human) or is not relevant (e.g., study of a model organism lab stock), you can declare an appropriate exemption using the exemption terms defined in the [INSDC Missing Value Reporting Standards](https://www.insdc.org/submitting-standards/missing-value-reporting/). [FAQs regarding sample collection location and time](/faq/en/index-e.html?tag=spatiotemporal)

## Sample package {#package}

BioSample promotes richer sample description and standardization of attribute name by providing sample packages designed for each type of sample and sequences. See "[Sample attributes](/biosample/attribute-e.html)" for attributes provided by packages.   
The package itself is a mechanism to promote adequate sample description and attributes are more important for sample interpretation. Therefore, if samples are described by appropriate attributes, you do not change the package even though submitted samples use not-recommended package.

Package series.
* [Standard](#standard)
* [Pathogen](#pathogen)
* [MIxS](#mixs)
	* [MIxS Environmental package](#environmental-package)

### Standard {#standard}

Standard packages according to sample types and organisms.  

<div class="bspac">
<ul>
	<li id="SARS-CoV-2.cl"><a href="/biosample/attribute-e.html?core=Standard&type=SARS-CoV-2.cl">SARS-CoV-2: clinical or host-associated</a><p class="def">SARS-CoV-2 samples that are relevant to public health.</p></li>
	<li id="SARS-CoV-2.wwsurv"><a href="/biosample/attribute-e.html?core=Standard&type=SARS-CoV-2.wwsurv">SARS-CoV-2: wastewater surveillance</a><p class="def">SARS-CoV-2 wastewater surveillance samples that are relevant to public health.</p></li>
	<li id="Microbe"><a href="/biosample/attribute-e.html?core=Standard&type=Microbe">Microbe</a><p class="def">Bacteria or other unicellular microbes.</p></li>
	<li id="Model.organism.animal"><a href="/biosample/attribute-e.html?core=Standard&type=Model.organism.animal">Model organism or animal</a><p class="def">Animals or common laboratory model organisms, e.g., mouse and Drosophila.</p></li>
	<li id="Metagenome.environmental"><a href="/biosample/attribute-e.html?core=Standard&type=Metagenome.environmental">Metagenome or environmental</a><p class="def">Metagenomic and environmental samples.</p></li>
	<li id="Invertebrate"><a href="/biosample/attribute-e.html?core=Standard&type=Invertebrate">Invertebrate</a><p class="def">Invertebrate sample.</p></li>
	<li id="Human"><a href="/biosample/attribute-e.html?core=Standard&type=Human">Human</a><p class="def">Human samples. "WARNING": Only for human samples that have no privacy concerns. Make sure to remove any direct personal identifiers from your submission. If you need to protect samples, please submit samples and data to <a href="/jga/index-e.html">Japanese Genotype-phenotype Archive (JGA)</a> which has controlled access mechanisms.</p></li>
	<li id="Plant"><a href="/biosample/attribute-e.html?core=Standard&type=Plant">Plant</a><p class="def">Plant sample or cell line.</p></li>
	<li id="Virus"><a href="/biosample/attribute-e.html?core=Standard&type=Virus">Viral</a><p class="def">Virus samples not directly associated with disease. For viral pathogens, use the <a href="Pathogen.cl">Pathogen: clinical or host-associated</a>.</p></li>
	<li id="Beta-lactamase"><a href="/biosample/attribute-e.html?core=Standard&type=Beta-lactamase">Beta-lactamase</a><p class="def">Beta-lactamase gene transformants that have antibiotic resistance data.</p></li>
	<li id="Omics"><a href="/biosample/attribute-e.html?core=Standard&type=Omics">Omics</a><p class="def">Gene expression, epigenetics and and metabolomics data samples.</p></li>
</ul>
</div>   
	 
### Pathogen {#pathogen}

Use for pathogen samples that are relevant to public health.

<div class="bspac">
<ul>
	<li id="Pathogen.cl"><a href="/biosample/attribute-e.html?core=Pathogen&type=Pathogen.cl">Pathogen: clinical or host-associated</a><p class="def">Clinical or host-associated pathogen samples.</p></li>
	<li id="Pathogen.env"><a href="/biosample/attribute-e.html?core=Pathogen&type=Pathogen.env">Pathogen: environmental/food/other</a><p class="def">Environmental/food/other pathogen samples.</p></li>
</ul>
</div>    
		
### MIxS {#mixs}

Used for samples from which genome and metagenome sequences were obtained. 

<div class="bspac">
<ul>
	<li id="MIGS.ba"><a href="/biosample/attribute-e.html?core=MIxS&type=MIGS.ba&env=No_package">Cultured Bacterial/Archaeal Genomic Sequences (MIGS.ba)</a><p class="def"> cultured bacterial or archaeal genomic sequences. Organism must have lineage <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2">Bacteria</a> or <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2157">Archaea</a>.</p></li>
	<li id="MIGS.eu"><a href="/biosample/attribute-e.html?core=MIxS&type=MIGS.eu&env=No_package">Eukaryotic Genomic Sequences (MIGS.eu)</a><p class="def">Eukaryotic genomic sequences. Organism must have lineage <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2759">Eukaryota</a>.</p></li>
	<li id="MIGS.vi"><a href="/biosample/attribute-e.html?core=MIxS&type=MIGS.vi&env=No_package">Viral Genomic Sequences (MIGS.vi)</a><p class="def">Virus genomic sequences. Organism must have lineage <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=10239">Viruses</a>.</p></li>
	<li id="MIMS.me"><a href="/biosample/attribute-e.html?core=MIxS&type=MIMS.me&env=agriculture">Environmental and metagenome sequences</a><p class="def">Organism must be a metagenome, where lineage starts with<a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908">unclassified sequences</a> and scientific name ends with 'metagenome'.</p></li>
	<li id="MIMAG"><a href="/biosample/attribute-e.html?core=MIxS&type=MIMAG&env=No_package">Metagenome-assembled Genome Sequences (MIMAG)</a><p class="def">Metagenome-assembled genome sequences. Use the <a href="#MIUVIG">MIUVIG</a> package for virus genomes.</p></li>
	<li id="MISAG"><a href="/biosample/attribute-e.html?core=MIxS&type=MISAG&env=No_package">Single Amplified Genome Sequences (MISAG)</a><p class="def">Single amplified genome sequences produced by isolating individual cells.</p></li>
	<li id="MIMARKS.specimen"><a href="/biosample/attribute-e.html?core=MIxS&type=MIMARKS.specimen&env=No_package">Specimen Marker Sequences (MIMARKS.specimen)</a><p class="def">Marker gene sequences, eg, 16S, 18S, 23S, 28S rRNA or COI obtained from specimens.</p></li>
	<li id="MIMARKS.survey"><a href="/biosample/attribute-e.html?core=MIxS&type=MIMARKS.survey&env=agriculture">Survey-related Marker Sequences (MIMARKS.survey)</a><p class="def">Marker gene sequences, eg, 16S, 18S, 23S, 28S rRNA or COI obtained directly from the environment, without culturing or identification of the organisms. Organism must be a metagenome.</p></li>
	<li id="MIUVIG"><a href="/biosample/attribute-e.html?core=MIxS&type=MIUVIG&env=No_package">Uncultivated Viral Genome Sequences (MIUVIG)</a><p class="def">Uncultivated virus genome identified in metagenome and metatranscriptome datasets. Organism must have lineage <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=10239">Viruses</a>.</p></li>
</ul>
</div>   
		 
### MIxS Environmental package {#environmental-package}

Select an appropriate environmental package for a MIxS environmental/metagenome sample. Predefined attributes to describe sampling environments are added (for example, "altitude" for the "air" environmental package).  
For the [MIMS.me](#MIMS.me) and [MIMARKS.survey](#MIMARKS.survey) packages, "No package" cannot be selected.   

<div class="bspac env">
<ul>
	<li id="agriculture">agriculture</li>
	<li id="air">air</li>
	<li id="built">built</li>
	<li id="food-animal">food-animal</li>
	<li id="food-farm_env">food-farm_env</li>
	<li id="food-human_foods">food-human_foods</li>
	<li id="food-prod_facility">food-prod_facility</li>
	<li id="host-associated">host-associated</li>
	<li id="human-associated">human-associated</li>
	<li id="human-gut">human-gut</li>
	<li id="human-oral">human-oral</li>
	<li id="human-skin">human-skin</li>
	<li id="human-vaginal">human-vaginal</li>
	<li id="hydrocarbon-cores">hydrocarbon-cores</li>
	<li id="hydrocarbon-fluids_swabs">hydrocarbon-fluids_swabs</li>
	<li id="microbial">microbial</li>
	<li id="miscellaneous">miscellaneous</li>
	<li id="plant-associated">plant-associated</li>
	<li id="sediment">sediment</li>
	<li id="soil">soil</li>
	<li id="symbiont-associated">symbiont-associated</li>
	<li id="wastewater">wastewater</li>
	<li id="water">water</li>
</ul>
</div>

## How to select a package {#select-package}   
	 
Select a package according to organism and data. When appropriate packages are found in both [Standard](#Standard) and [MIxS](#MIxS) series, please see [attribute list](/biosample/attribute-e.html) and select a better one to describe your sample.

### Genome assembly sample {#genome-assembly-sample-package}  

A [DDBJ/ENA/GenBank genome sequence](/ddbj/finished_level_genome-e.html) should be linked to one BioProject and one BioSample.  
Select a package according to species of your sample.

<div class="bspac">
<ul>
	<li id="genome-prokaryote">Isolated, cultured prokaryotes<p class="def"><a href="#Microbe">Microbe</a> or <a href="#MIGS.ba">MIGS.ba</a></p></li>
	<li id="genome-eukaryote">Eukaryotes<p class="def"><a href="#Model.organism.animal">Model organism or animal</a>/<a href="#Invertebrate">Invertebrate</a>/<a href="#Plant">Plant</a> or <a href="#MIGS.eu">MIGS.eu</a></p></li>
</ul>
</div>

Register a [locus tag prefix](/ddbj/locus_tag-e.html) necessary for an annotated genome submission by entering a prefix in the BioSample locus_tag_prefix attribute.

### Metagenome samples {#metagenome-sample-package}

Different packages need to be used for metagenome assembly samples at different assembly levels. Please see [Metagenome assembly](/ddbj/metagenome-assembly-e.html).

<div class="bspac">
<ul>
	<li id="raw-primary">Raw reads and primary metagenome.<p class="def"><a href="#MIGS.me">MIGS.me</a> or <a href="#Metagenome.environmental">Metagenome or environmental</a></p></li>
	<li id="binned-mag">Binned metagenome and MAG<p class="def"><a href="#MIMAG">MIMAG</a>. Use <a href="#MIUVIG">MIUVIG</a> for virus metagenomic assemblies.</p></li>
</ul>
</div>

## Derived sample {#derived-sample}

For a mixed sample which consist of samples, register a derived sample and list accession numbers (separated by comma or hyphen) of the component samples in [derived_from](/biosample/attribute-e.html#derived_from). Examples: SAMD00000001,SAMD00000002,SAMD00000008-SAMD00000100. A derived sample is necessary in the following cases.    
INSDC restricts "[A genome assembly sequence](/ddbj/finished_level_genome-e.html) links to a BioProject and a BioSample". Therefore, when submitting a genome sequence assembled from reads of samples to [DDBJ](/ddbj/index-e.html), you need to represent samples by a derived sample. For example, to submit a genome sequence assembled from reads of male and female samples, register a derived sample citing both BioSample accessions.  
Another example is to submit a MAG computationally constructed from environmental samples, register a derived sample for the MAG and list accession numbers of the environmental samples in the [derived_from](/biosample/attribute-e.html#derived_from) attribute.

## Human sample {#human-sample}

### Submission of research data from human subjects {#submission-of-human-data}

Submit data derived from human subjects (human data) to the databases of Bioinformation and DDBJ Center in compliant with "[Submission of Research Data from Human Subjects](/policies-e.html#submission-of-human-data)".

WARNING: Only use for human samples or cell lines that have no privacy concerns.
For all studies involving human subjects, it is the submitter's responsibility to ensure that the information supplied protects participant privacy in accordance with all applicable laws, regulations and institutional policies. Make sure to remove any direct personal identifiers from your submission. If there are patient privacy concerns regarding making data fully public, please submit samples and data to Japanese Genotype-phenotype Archive (JGA) database. [JGA](/jga/submission-e.html) has controlled access mechanisms and is an appropriate resource for hosting sensitive patient data.

### Sample attributes {#attribute}

Describe following attributes for Human (*Homo sapiens*) sample by using [Human](/biosample/sample-info-e.html#Sample-type) package. Please see [this page](/biosample/attribute-e.html?all=all) for attribute explanation.

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
