---
layout: tabbed_indexed_content
service_name: BioSample
title: Genome Assembly Sample
category: biosample
current_tab: sample attribute
lang: en
---

## Package {#package}

A [DDBJ genome sequence](/ddbj/mss-e.html) should be linked to one BioProject and one BioSample. This constraint is set by INSDC to manage genome sequences.    
Submit sample(s) used for genome assembly in following packages. When it is not appropriate to use [MIxS](/biosample/sample-info-e.html#mixs), use standard packages according to organisms.  

- In the case of isolated, cultured prokaryotes: [Cultured Bacterial/Archaeal Genomic Sequences (MIGS.ba)](/biosample/attribute-e.html) or [Microbe](/biosample/sample-info-e.html#Sample-type)
- In the case of eukaryotes: [Eukaryotic Genomic Sequences (MIGS.eu)](/biosample/attribute-e.html) or one of the standard packages for organism, [Model organism or animal](/biosample/sample-info-e.html#Sample-type), [Invertebrate](/biosample/sample-info-e.html#Sample-type) or [Plant](/biosample/sample-info-e.html#Sample-type)

Register a [locus tag prefix](/ddbj/locus_tag-e.html) necessary for an annotated genome submission by entering a prefix in the BioSample locus_tag_prefix attribute.

## Genome assembled from multiple samples {#samples}

When submitting a genome sequence assembled from reads of multiple samples, register a derived BioSample because a genome sequence cannot be linked to multiple BioSamples. For example, sequencing reads of male and female samples are submitted to DRA, and submit a genome sequence assembled from both samples, register a derived BioSample citing both BioSample accessions.    
Enter the originating BioSample accessions in derived_from attribute of the derived BioSample in the format of "This sample group is the combination of the [number of samples] individual BioSamples: [BioSample accessions]". For example, "This sample group is the combination of the 2 individual BioSamples: SAMN12623203 and SAMN12623206"    
Real examples: A Genome sequence [JAGDQO010000000](https://www.ncbi.nlm.nih.gov/nuccore/2035211276) and a derived sample [SAMN17974349](https://www.ncbi.nlm.nih.gov/biosample/17974349).

## Metagenome assembly {#mag}

There are four tiers of [metagenome assembly](/ddbj/metagenome-assembly-e.html) (Metagenome-Assembled Genome, MAG) submission depending on the degree of assembly.    

Submit a MAG from a particular organism to the [ENV division](/ddbj/env-e.html) of DDBJ.    

Create a virtual BioSample for MAG submission. 
Use the [MIMAG](/biosample/sample-info-e.html#Sample-type) package and use an organism name without uncultured (e.g., Methanosarcina thermophila). 
Indicate deriving source sample as "derived_from: SAMD00000001". [Examples](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=272411182)  
A MAG also needs to be linked to a BioSample, create a derived BioSample for MAG.
