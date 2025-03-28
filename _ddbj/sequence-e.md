---
layout: tabbed_indexed_content
title: Nucleotide Sequences
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: flat_file
lang: en
related_pages:
  - title: DDBJ flat file format
    url: /ddbj/flat-file-e.html
  - title: Description of Location
    url: /ddbj/location-e.html
  - title: Codes Used in Sequence Description
    url: /ddbj/code-e.html
---

## Introduction  {#intro}

This site is to explain about nucleotide sequences on the flat files of DDBJ (Annotated/Assembled Sequences), in a narrow sense: as a counterpart of GenBank.    
When you are to publicize raw output data of NGS and so on, please contact [DDBJ Sequence Read Archive](/dra/index-e.html).    
    
For the request of [primary entry](/ddbj/submission-e.html#primary_entry) submission, in principle, DDBJ accepts any nucleotide sequences that are experimentally determined by submitters, but can not accept computational predicted and/or cited sequences.
    
Even if your sequence is identical to previously reported sequence(s), on the condition that the sequence is independently determined, you can submit it as a "new" one.    
See also [Representative submissions of identical sequences for variation studies](/ddbj/representative-sequence-e.html).    
    
DDBJ also accepts an entry that is obtained by assembling primary entries publicized from INSDC and/or is added annotation(s) by experimental or inferential method by submitter as [TPA (third party data)](ddbj/tpa-e.html).    


## Not acceptable sequences  {#not_acceptable}

The following sequence data is not acceptable for DDBJ:    
  - Amino acid sequences with no underlying nucleotide submission
  - Sequence containing a mix of genomic DNA and RNA transcript
  - Sequences without a physical counterpart (consensus sequences)
  - Sequences with length less than 100 nucleotides (since June 2021)
  - Sequence consisting only of primer (since June 2021)

## Codes for nucleotide sequence  {#code}

You can use [IUPAC nucleotide base codes](/ddbj/code-e.html#nucleotide-1) to describe your nucleotide sequences.    

To simplify, U (uracil) in RNA sequence is written as T.    

## Required preparation before submission  {#process}

In general, we accept sequences to share the data enough to believe 'as is' in nature.    
It is incorrect to submit the sequencer output 'as is' without scrutinizing it.    

  - [Remove regions derived from vector](#vector)
  - [Remove primer binding sites](#primer)
  - [Remove unreliable regions, etc.](#noise)
  - [Make the direction of nucleotide sequences the same strandedness](#complement)
  - [Indicate sequecing gaps](#gap)
  - It is no problem to construct assemblies and/or contigs as long as they are within the scope of scientific reproduction of primary structure. 
  - If you need to avoid virus contamination for expression analysis or so, remove viral sequences by computational preprocessing.  

### Remove regions derived from vector  {#vector}

You should exclude the following sequences from your data except that you are to submit an artificially constructed sequence such as expression vector, etc.    

  - The sequence derived from a vector.
  - The sequence derived from a linker and/or an adapter.

Before your submission, we strongly recommend you to screen your sequences with our web service, [VecScreen](http://ddbj.nig.ac.jp/vecscreen/?lang=en).    

### Remove primer binding sites  {#primer}

For PCR products, please remove the sequence derived from primer that is designed by targeting the region of which the sequence is unknown.    
The [/PCR_primers](/ddbj/qualifiers-e.html#PCR_primers) qualifier should be described primer pairs that used to amplify your sequences, 
so, it should be located out of submitted sequence, in principle.    

In the case of eukaryotic mRNA sequences, it is better not to delete the poly A tail, however, 
it may often be difficult to determine the range to be left, such as when designing as a primer.    

### Remove unreliable regions, etc.  {#noise}

Before the data submission, you should remove artifacts, unreliable regions, and so on from your sequences.    

  - Trimming the unreliable regions in the output generated by sequencer, mainly at the 5'- and 3'- ends of the Sanger method. 
  - It is recommended to correct the sequencer output based on the traces and score if it is within a reasonable range. 

### Make the direction of nucleotide sequences the same strandedness, (avoid complementary strand)  {#complement}

The nucleotide sequence of RNA transcripts should be in the direction of transcription.    

For genomic sequences, it is difficult to rigorously define which direction is correct, however, in general, when focusing on a gene, it is easier for the users to describe the sequence in the transcription direction of the gene.    

Especially for rRNA, ITS and so on, frequently used for molecular phylogenetics, this rule is applied regardless of which strand you have sequenced.    


### Indicate sequecing gaps  {#gap}

When you submit a sequence with sequencing gaps, insert the serial "N"s as a flag of gap in your sequences, appropriately.    
    
If the length of the gap region cannot be estimated, we recommend to indicate the gap region with 100 serial "N"s.    
    
To indicate the region of the sequencing gap, use [gap](/ddbj/features-e.html#gap) or [assembly_gap](/ddbj/features-e.html#assembly_gap) feature.    
    
In cases of exome or the like, indicate intron regions by gap features.    
See [Description Examples of Sequence Data G: Sequencing gap](/ddbj/example-e.html#G)    
    
On the other hand, the convenience of mutual alignment has nothing to do with array data registration, so it is prohibited to insert 'n' as a non-existent region.    
