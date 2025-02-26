---
layout: tabbed_indexed_content
title: locus tag
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: home
lang: en
---

## locus tag {#locus_tag}

The locus tags are identifiers systematically assigned to every gene in a genome.    
INSD (DDBJ/ENA/GenBank) introduced the locus tag to prevent confusion caused by similar names assigned to different genes of different genomes. All component sequences of a genome assembly such as chromosomes and plasmids should use the same locus tag prefix in the /locus_tag qualifiers to systematically distinguish genes.    

## locus tag prefix registration {#locus_tag_prefix}

A genome assembly submission requires a [BioProject](/bioproject/submission-e.html) and a [BioSample](/biosample/submission-e.html).    
Register a locus tag prefix during the BioSample submission. Enter a prefix you want to use in the [locus_tag_prefix attribute](/biosample/attribute-e.html#locus_tag_prefix) provided by the BioSample [packages used for genome assembly samples](/biosample/overview-e.html#genome-assembly-sample).    
The locus_tag prefix should consist of 3-12 alpha-numeric characters and should start with a letter, 
but numerals can be used after the 2nd character (e.g. A1C).   There should be no symbols such as '-', '\' and '\*'.    
A locus tag prefix cannot be changed after registration, so avoid to register a prefix following an organism name or a strain name which may be changed in the future.

## /locus_tag qualifier {#locus_tag_qualifier}

Submit genome assembled sequences to DDBJ through [Mass Submission System](/ddbj/mss-e.html).   
In /locus_tag qualifiers, enter the prefix which has been registered in the corresponding BioSample.  Assign /locus_tag qualifiers to both protein-coding genes and non-coding RNA genes. Separate the prefix and the tag value by an underscore (e.g. A1C_00001). It is recommended to use the same numbering convention for all /locus_tag qualifiers in order of appearance regardless of types of annotating genes such as protein-coding, structural RNA and originating chromosome. However, if you want to include information regarding chromosome number and RNA type, you may add these information after the underscode following the prefix.

```
ABC_I00001 for gene 1, chromosome I
ABC_II00001 for gene 1, chromosome II
ABC_r1112 for ribosomal RNA genes
ABC_t1113 for tRNA genes
```

Add the /locus_tag qualifiers to the following features (do not add to [repeat_region](/ddbj/features-e.html#repeat_region)).  

* [mRNA](/ddbj/features-e.html#mRNA)
* [CDS](/ddbj/features-e.html#cds)
* [5'UTR](/ddbj/features-e.html#5UTR)
* [3'UTR](/ddbj/features-e.html#3UTR)
* [intron](/ddbj/features-e.html#intron)
* [exon](/ddbj/features-e.html#exon)
* [tRNA](/ddbj/features-e.html#tRNA)
* [rRNA](/ddbj/features-e.html#rRNA)
* [ncRNA](/ddbj/features-e.html#ncRNA)
* [tmRNA](/ddbj/features-e.html#tmRNA)
* [precursor_RNA](/ddbj/features-e.html#precursor_RNA)
* [prim_transcript](/ddbj/feature-table.html#prim_transcript)
* [misc_RNA](/ddbj/features-e.html#misc_RNA)

Use the same value in the /locus_tag qualifiers of exon/CDS/mRNA features which constitute single gene.    
One locus_tag should be associated with one [/gene](/ddbj/qualifiers-e.html#gene).    

## How to add /locus_tag {#add}

A new /locus_tag can be added in either of the following ways when updating genome sequences and annotations.  

No. 1: Deletion and addition

```
Before     After
ABC_0022
           ABC_4568 (new gene)
ABC_0023   ABC_0023
```

No. 2: Add into the gap

```
Before     After
ABC_0020   ABC_0020
           ABC_0021 (new gene)
ABC_0030   ABC_0030
```

Decimal integers like versioning (e.g. ABC_0020.1) can not be used.  

