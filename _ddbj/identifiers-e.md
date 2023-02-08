---
layout: tabbed_indexed_content
title: Identifiers
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: flat_file
lang: en
related_pages:
  - title: DDBJ flat file format
    url: /ddbj/flat-file-e.html
  - title: Feature Key
    url: /ddbj/features-e.html
  - title: Qualifier key
    url: /ddbj/qualifiers-e.html
  - title: Organism qualifier
    url: /ddbj/organism-e.html
  - title: Example of Submission
    url: /ddbj/example-e.html
  - title: Representative submissions of identical sequences for variation studies
    url: /ddbj/representative-sequence-e.html
---

[The organism names (values of /organism qualifier)](/ddbj/organism-e.html) are required to submit your sequence data.  If you do not identify the species of the organisms, or if you need to submit a large number of sequences from the same species, it may be required to use some identifiers of the sample organisms for your sequence data.

For many cases of bacteria, yeasts, and other microorganisms, especially <span class="red">**to submit whole genome sequences of the microorganisms**</span>, you may need to add identifiers of strains and/or culture collections for the organisms.    
Further, when you propose a new species name, you have to deposit the organism to two or more culture collections. 


## Type of Idetifiers  {#type}

There are two types of identifiers that are acceptable for us.

### Assign to the Sample Organisms  {#sample}

In general, we expect you to use this type of identifier.    
A typical case is to use the [/strain](/ddbj/qualifiers-e.html#strain) qualifier.  The other qualifiers would be 
[/isolate](/ddbj/qualifiers-e.html#isolate), 
[/culture_collection](/ddbj/qualifiers-e.html#culture_collection), 
[/ecotype](/ddbj/qualifiers-e.html#ecotype), 
[/specimen_voucher](/ddbj/qualifiers-e.html#specimen_voucher), 
[/cultivar](/ddbj/qualifiers-e.html#cultivar), 
[/bio_material](/ddbj/qualifiers-e.html#bio_material), 
[/cell_line](/ddbj/qualifiers-e.html#cell_line), 
 and so on. 

### Assign to the Sequences   {#seq}

This type of identifier is operatively described. In cases of your research purpose, you may need to use this type of identifier.    

The typical ones are [/clone](/ddbj/qualifiers-e.html#clone) and [/submitter_seqid](/ddbj/qualifiers-e.html#submitter_seqid) qualifiers.    
Also, [/isolate](/ddbj/qualifiers-e.html#isolate) qualifiers for OTU of environmental samples, [/bio_material](/ddbj/qualifiers-e.html#bio_material) qualifiers in some conditions would be assigned to the sequences.    

For using every identical sequence, [/haplotype](/ddbj/qualifiers-e.html#haplotype) qualifier is also corresponding to the case.  For submitting data related to population genetics, see [Representative submissions of identical sequences for variation studies](/ddbj/representative-sequence-e.html). 


## Format of Identifiers  {#format}

In cases of commercial samples, model strains and any other official names, you should use them 'as is'.    
For [/bio_material](/ddbj/qualifiers-e.html#bio_material), [/culture_collection](/ddbj/qualifiers-e.html#culture_collection) and [/specimen_voucher](/ddbj/qualifiers-e.html#specimen_voucher) qualifiers, we have the formats to enhance their traceability, so, please follow the formats.  

When you isolate the sample organisms, please name them by yourself.    
Please note that "1", "2", "A", "B" , or something like them are too simple to keep uniqueness among the data submitted from many researchers, in advance. 

For example, to make it easier keeping uniqueness by adding acronyms of geographical names of collection sites or the initials of the person who collected samples and the collected years to serial numbers,    
i.e. [serial number]-[acronym of geographical name]-[collected year], "1-MS-2021" etc. 

Please note we do not systematically manage the identifiers of samples.  So, at least, it is required to assign unique names within your submissions for your study. 


## In Detail about Identifiers  {#detail}

### Situations where the identifiers not required  {#not_required}

When your samples meet all of the following conditions, it is not required to use identifiers for your samples.    
Please note we do not intend to prohibit using identifiers for your samples, so, we will accept the identifiers of your samples if you need.  

- Sequences derived from multicellular organisms
- Aimed to study neither of identifying species, biogeography, epidemiology, population genetics or the like.
- Aimed to study identifying and/or functional analysis genes/proteins and so on to describe general features of the subject organisms.

### Bacteria or Archaea  {#bact}

Some identifiers are required regardless of the taxonomic identification level of the organisms or the number of sequences. 

- For the pure cultured lines that are expected to be genetically uniform, use [/strain](/ddbj/qualifiers-e.html#strain) qualifier
- For cultured strains deposited to or divided from culture collections, use [/culture_collection](/ddbj/qualifiers-e.html#culture_collection) qualifier
- In cases difficult to call the pure cultured lines, use [/isolate](/ddbj/qualifiers-e.html#isolate) qualifier

### Fungi  {#fungi}

In cases of unicellular organisms like yeasts, some identifiers are required regardless of the taxonomic identification level of the organisms or the number of sequences. 

- For the pure cultured lines that are expected to be genetically uniform, use [/strain](/ddbj/qualifiers-e.html#strain) qualifier
- For cultured strains deposited to or divided from culture collections, use [/culture_collection](/ddbj/qualifiers-e.html#culture_collection) qualifier
- In cases difficult to call the pure cultured lines, use [/isolate](/ddbj/qualifiers-e.html#isolate) qualifier

In cases of multicellular organisms like mushrooms, some identifiers may be required when the species is not identified or when you submit many sequences from multiple individuals of the same species. 

- For the identifiers of individuals, use [/isolate](/ddbj/qualifiers-e.html#isolate) qualifier
- For specimens deposited to or divided from museum/collections, use [/specimen_voucher](/ddbj/qualifiers-e.html#specimen_voucher) qualifier
- For the pure lines that are expected to be genetically uniform, [/strain](/ddbj/qualifiers-e.html#strain) qualifier

### Plants  {#plant}

In cases of unicellular organisms like algae, some identifiers are required regardless of the taxonomic identification level of the organisms or the number of sequences. 

- For the pure cultured lines that are expected to be genetically uniform, use [/strain](/ddbj/qualifiers-e.html#strain) qualifier
- For cultured strains deposited to or divided from culture collections, use [/culture_collection](/ddbj/qualifiers-e.html#culture_collection) qualifier
- In cases difficult to call the pure cultured lines, use [/isolate](/ddbj/qualifiers-e.html#isolate) qualifier

In cases of multicellular organisms, some identifiers may be required when the species is not identified or when you submit many sequences from multiple individuals of the same species. 

- For the identifiers of individuals, use [/isolate](/ddbj/qualifiers-e.html#isolate) qualifier
- For specimens deposited to or divided from museum/collections, use [/specimen_voucher](/ddbj/qualifiers-e.html#specimen_voucher) qualifier
- For variants phenotypically/geographically distinguished, but not yet subspecies, use [/ecotype](/ddbj/qualifiers-e.html#ecotype) qualifier 
- For cultivated varieties, use [/cultivar](/ddbj/qualifiers-e.html#cultivar) qualifier
- For the pure lines that are expected to be genetically uniform, use [/strain](/ddbj/qualifiers-e.html#strain) qualifier

### Animals  {#animal}

In cases of unicellular organisms like protists, some identifiers are required regardless of the taxonomic identification level of the organisms or the number of sequences. 

- For the pure cultured lines that are expected to be genetically uniform, use [/strain](/ddbj/qualifiers-e.html#strain) qualifier
- For cultured strains deposited to or divided from culture collections, use [/culture_collection](/ddbj/qualifiers-e.html#culture_collection) qualifier
- In cases difficult to call the pure cultured lines, use [/isolate](/ddbj/qualifiers-e.html#isolate) qualifier

In cases of multicellular organisms, some identifiers may be required when the species is not identified or when you submit many sequences from multiple individuals of the same species. 

- For the identifiers of individuals, use [/isolate](/ddbj/qualifiers-e.html#isolate) qualifier
- For specimens deposited to or divided from museum/collections, use [/specimen_voucher](/ddbj/qualifiers-e.html#specimen_voucher) qualifier
- For breeded varieties, use [/note](/ddbj/qualifiers-e.html#note) qualifier with "breed:" prefix. 
- For pure or congenic lines of model organisms, use [/strain](/ddbj/qualifiers-e.html#strain) qualifier
- For mutated strains of model organisms, use [/bio_material](/ddbj/qualifiers-e.html#bio_material) qualifier
- For immortalised cell lines deposited to or divided from collections, [/cell_line](/ddbj/qualifiers-e.html#cell_line) qualifier

### Human Subjects  {#human}

For the data derived from human subjects, description of individual identifiers may be needed to report polymorphisms or so.    
Even in these cases, the identifiers must be anonymized.  We prohibit using any personal names or any identifiers that enable inferring personal names. 

- For the identifiers of individuals, use [/isolate](/ddbj/qualifiers-e.html#isolate) qualifier
- For immortalised cell lines deposited to or divided from collections, use [/cell_line](/ddbj/qualifiers-e.html#cell_line) qualifier

### Viruses  {#virus}

Usually, we recommend using [/isolate](/ddbj/qualifiers-e.html#isolate) qualifiers for viral data.    
For frequently submitted pathogenic viruses like SARS-CoV-2 or others, we strongly recommend you using [/isolate](/ddbj/qualifiers-e.html#isolate) qualifiers with the identifiers in the following format recommended by [ICTV](https://ictv.global/ ).    
-   Format: [virus_type]/[host_common_name]/[locality_name]/[sample_identifier]/[year]    
    virus_type: the abbreviated name, genotype or type of the virus     
    host_common_name: the common name of the viral host organism indicated in [/host](/ddbj/qualifiers-e.html#host) qualifier    
    locality_name: the name of country or region of the collection site indicated in [/country](/ddbj/qualifiers-e.html#country) qualifier     
    sample_identifier: any identifiers/numbers assigned by the submitters or the collectors     
    year: the year of the sampling date indicated in [/collection_date](/ddbj/qualifiers-e.html#collection_date) qualifier     
-   Example: SARS-CoV-2/human/Japan/A12/2021

It is difficult for viruses to confirm the pure strains strictly, but we conventionally accepted [/strain](/ddbj/qualifiers-e.html#strain) qualifiers for viral sequences.    
However, we recommend using /isolate qualifiers.     
Please note that a genotype (or genogroup etc.) is similar to viral species/lineage, so, it cannot be sample identifiers.    

### Environmental Samples  {#env}

In general, please describe [/isolate](/ddbj/qualifiers-e.html#isolate) qualifiers as names of individuals or OTUs.  
You can not use [/strain](/ddbj/qualifiers-e.html#strain) qualifiers for environmental samples.    
When you have cloned the corresponding DNA samples, describe the clone names in [/clone](/ddbj/qualifiers-e.html#clone) qualifiers.  


## Organism Names (/organism qualifier) and Identifiers {#organism} 

When you describe the organism names in species, subspecies, varieties or lower levels, it is not required to include any identifiers into the organism names.    
However, please pay attention to the following cases.    

### Bacteria, Archaea, or Unicellular Fungi  {#org_uni}

In cases of unicellular organisms, it is not required to include any identifiers in organism names regardless of the taxonomic identification level. 

- When you propose new species, it is recommended to include some identifiers such as strain names in organism names.  
- In cases of cyanobacteria, it is required to include some identifiers such as strain names in organism names. 
- Previously, the strain names or some other lower taxa was required to be included in the organism names for whole genomic scale sequences from microorganisms.    However, currently, the organism name should be just a scientific name, in principle, even for microbial genomes.

### Animals, Plants, or Multicellular Fungi   {#org_multi}

In cases of multicellular organisms, it is required to include some identifiers in organism names when the species is not identified or when you propose new species.    
The identifiers included in organism names do not have to be assigned to every individual, so you should assign an identifier in each unit that is considered to be the same species.

### Viruses  {#org_virus}

- Different from other domains, descriptions like scientific names can be accepted during species proposing.    In that case, we recommend to include some identifiers into the virus names.
- By 2017, we used informal names for frequently submitted pathogenic viruses including their strain names and serotypes in the description of organism names.    However, the rule has been discontinued for future submissions.
 

### Environmental Samples  {#org_env}

For most cases, the species names of the organisms can not be identified, however, it is not required to include any identifiers into the organism names.  
