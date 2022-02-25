---
layout: tabbed_indexed_content
service_name: BioSample
title: Human Sample
category: biosample
current_tab: sample attribute
lang: en
---

## Submission of research data from human subjects {#submission-of-human-data}

Submit data derived from human subjects (human data) to the databases of Bioinformation and DDBJ Center in compliant with "[Submission of Research Data from Human Subjects](/policies-e.html#submission-of-human-data)".

WARNING: Only use for human samples or cell lines that have no privacy concerns. 
For all studies involving human subjects, it is the submitter's responsibility to ensure that the information supplied protects participant privacy in accordance with all applicable laws, regulations and institutional policies. Make sure to remove any direct personal identifiers from your submission. If there are patient privacy concerns regarding making data fully public, please submit samples and data to Japanese Genotype-phenotype Archive (JGA) database. [JGA](/jga/submission-e.html) has controlled access mechanisms and is an appropriate resource for hosting sensitive patient data. For samples isolated from humans use the Pathogen, Microbe or appropriate MIxS package.

## Sample attributes {#attribute}

Describe following attributes for Human (*Homo sapiens*) sample by using [Human](/biosample/submission.html#Sample-type) package. Please see [this page](/biosample/attribute-e.html?all=all) for attribute explanation.  

### Sample derived from human subjects {#human-subject}

Fill in anonymized subject id in isolate.

### Cell line {#cell-line}

Recommended;
- cell_type

## Primary cell {#primary}

Indicate primary cell in sample_type.    
sample_type: primary cell

## iPS cell {#ips}

In most cases, iPS cells are used in differentiated state, so information regarding before and after the differentiation are important.  
In addition to the above, provide attributes indicated below. It is also applied to ES cells used after differentiation.  
Complex samples such as differentiated a few times, provide description in free-text.

### Samples from human subjects {#ips-human-subject}

Describe information regarding differentiation in cell_type.    
For example, cell_type： iPS cell derived megarocyte cell.

### Cell line {#ips-cell-line}

Describe information regarding differentiation in cell_type.    
For example, cell_type： iPS cell (cell_line:253G1) derived megarocyte cell.    
In addition, describe provider information in biomaterial_provider.    
For example, biomaterial_provider： ATCC.



