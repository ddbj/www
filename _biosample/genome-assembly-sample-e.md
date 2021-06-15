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
Submit sample(s) used for genome assembly in following packages.
- In the case of isolated, cultured prokaryotes: [Cultured Bacterial/Archaeal Genomic Sequences (MIGS)](/biosample/attribute-e.html)
- In the case of eukaryotes: [Eukaryotic Genomic Sequences (MIGS)](/biosample/attribute-e.html)

Register a [locus tag prefix](/ddbj/locus_tag-e.html) necessary for an annotated genome submission by entering a prefix in the BioSample locus_tag_prefix attribute.

## Genome assembled from multiple samples {#samples}

When submitting a genome sequence assembled from reads of multiple samples, register a derived BioSample because a genome sequence cannot be linked to multiple BioSamples. For example, sequencing reads of male and female samples are submitted to DRA, and submit a genome sequence assembled from both samples, register a derived BioSample citing both BioSample accessions.    
Enter the originating BioSample accessions in derived_from attribute of the derived BioSample in the format of "This sample group is the combination of the [number of samples] individual BioSamples: [BioSample accessions]". For example, "This sample group is the combination of the 2 individual BioSamples: SAMN12623203 and SAMN12623206"    
Real examples: A Genome sequence [JAGDQO010000000](https://www.ncbi.nlm.nih.gov/nuccore/2035211276) and a derived sample [SAMN17974349](https://www.ncbi.nlm.nih.gov/biosample/17974349).

## Metagenome assembly {#mag}

There are four tiers of [metagenome assembly](/ddbj/metagenome-assembly-e.html) (Metagenome-Assembled Genome, MAG) submission depending on the degree of assembly.    

Submit a MAG from a particular organism to the [ENV division](/ddbj/env-e.html) of DDBJ.    

Create a virtual BioSample for MAG submission. Use the ["Other samples"](/biosample/submission-e.html#General_Sample) package and use an organism name without uncultured (e.g., Methanosarcina thermophila). Following attributes are required besides the organism name. [Examples](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=272411182)

Fixed attributes.
- sample\_type: metagenomic assembly
- environmental\_sample: TRUE

Attributes regarding sample origin.
- metagenome\_source: xyz metagenome
- isolate
- isolation\_source

Attributes regarding sample collection.
- collection\_date
- env\_biome
- env\_feature
- env\_material
- geo\_loc\_name
- lat\_lon

Derivation source BioSample.
- derived\_from: This biosample is a metagenomic assembly obtained from the xyz metagenome BioSample: SAMDxxxxxxxx.

A MAG also needs to be linked to a BioSample, create a derived BioSample for MAG. For example, a MAG [JAGEZF000000000.1](https://www.ncbi.nlm.nih.gov/nuccore/JAGEZF000000000.1) and a derived BioSample [SAMN18318557](https://www.ncbi.nlm.nih.gov/biosample/SAMN18318557).
