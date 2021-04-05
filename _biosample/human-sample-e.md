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

## Sample attributes {#attribute}

Describe following attributes for Human (*Homo sapiens*) sample. Please see [this page](/biosample/attribute-e.html?all=all) for attribute explanation.  

### Sample derived from human subjects {#human-subject}

Required;
- biomaterial provider
- isolate
- age
- tissue
- sex

Fill in anonymized subject id in isolate.

### Cell line {#cell-line}

Required;
- cell line 
- biomaterial provider

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







