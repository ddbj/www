---
layout: tabbed_indexed_content
title: Sequence data derived from environmental samples
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
lang: en
related_pages:
  - title: Data Submission from Genome Project
    url: /ddbj/genome-e.html
  - title: Data Submission from Transcriptome Project
    url: /ddbj/transcriptome-e.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa-e.html
---

## Sequence data derived from environmental samples

Here shows procedures for sequence data obtained from studies that do not specify individuals or species.    

These kinds of data contain sequences and other information on environmental samples.    
Though frequently confused, <span class="red">**the term, 'environmental samples', does NOT mean "wild type"**</span>.    
Environmental samples are identified sequences derived by direct molecular isolation from 
a bulk environmental DNA sample (by PCR with or without subsequent cloning of the product, DGGE, or other anonymous methods) 
with no reliable identification of the source organism.

The ENV division contains (but is not limited to) the following types of data:

  - sequences derived by direct molecular isolation from soil, sea  water, etc.
  - clinical samples, gut contents, and other sequences from anonymous organisms that may be associated with a particular host
  - mixed culture derived from an environmental sample
  - see [Metagenome Assembly](/ddbj/metagenome-assembly-e.html ) 

### Cases not treated as environmental samples {#not_env}

- Isoalted and cultured microorganisms
    - Though frequently confused, <span class="red">**the term, 'environmental samples', does NOT mean "wild type"**</span>.    
- Highly reproducible samples though difficult to be cultured (not limited to follows)
    - endosymbionts that can be reliably recovered from a particular host
    - organisms from a readily identifiable but uncultured field sample (e.g., many cyanobacteria)
    - phytoplasmas that can be reliably recovered from diseased plants (even though these cannot be grown in axenic culture).


### Notes on environmental sample submission  {#notice}

  - In many cases of environmental samples, we assign the lineage that as far as submitters could specify 
    is used for the description of organism name with the header "uncultured".    
    See also [Organism Qualifier 3. Environmental sample](/ddbj/organism-e.html#env) for further detail.
  - The /[environmental_sample](/ddbj/qualifiers-e.html#environmental_sample)
    qualifier is required in [source](/ddbj/features-e.html#source) feature.
  - The /[isolation_source](/ddbj/qualifiers-e.html#isolation_source) 
    qualifier is required in [source](/ddbj/features-e.html#source) feature to describe origin of the sample.
  - Either /[isolate](/ddbj/qualifiers-e.html#isolate), /[clone](/ddbj/qualifiers-e.html#clone) or 
    /[submitter_seqid](/ddbj/qualifiers-e.html#submitter_seqid) qualifier is required as an identifier.    
    See also [Identifiers](/ddbj/identifiers-e.html) for further detail.  
  - Do not use [strain](/ddbj/qualifiers-e.html#strain) qualifier.

<!-- end list -->

### For small scale sequence data  {#small}
Sequence data obtained from environmental samples are treated as [ENV](/ddbj/env-e.html) division.    

### For large scale sequence data  {#large}
For large scale sequencing studies, particularly derived fro NGS, please submit [BioProject](/bioproject/index-e.html) and [BioSample](/biosample/index-e.html).    

Large scale analyses of targeted loci are treated as [Targeted Locus Study](/ddbj/tls-e.html).    

In cases of analyses for assembling sequences for species or individuals, 
depending on from genomes or from RNA transcripts, the data should be submitted as 
[Genome Project](/ddbj/genome-e.html) or [Transcriptome Project](/ddbj/transcriptome-e.html), respectively.    

