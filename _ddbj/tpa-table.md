---
layout: tabbed_indexed_content
title: TPA Submission Guidelines
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: home
lang: ja
---

The original site; [TPA Submission Guidelines](https://insdc.org/submitting-standards/tpa-submission-guidelines/) 2013.10.15 version

Third PArty data (TPA) are submitted to the International Nucleotide Sequence Databases as part of the process of publishing biological studies that include the assembly and/or annotation of existing INSDC reads and primary sequences. Publicly accessible TPA data are therefore linked to a publication or publications that document the derivation of the data supported by peer-reviewed scientific evidence.

## TPA subcategories  {#subcategories}

All TPA records belong to one of these classes: <span class="bold">TPA:experimental</span>, <span class="bold">TPA:inferential, TPA:specialist_db,</span> or <span class="bold">TPA:assembly</span>.


TPA:experimental  
: describes records that include functional annotation derived at least in part from peer-reviewed wet-lab experimental investigation.

TPA:inferential  
: describes records that include functional annotation derived from peer-reviewed bioinformatic investigation.

TPA:specialist_db  
: describes records whose sequences are submitted from an existing authoritative public database that is built using INSDC sequence data and is described in an accepted peer-reviewed publication. The existing database is therefore recognized to be comprehensive, to have added value, and to be maintained long term.

TPA:assembly  
: describes records reporting assembly or reassembly, for which the generation, whether it is purely informatic or informed by experimentation, has been subject to peer review. Annotation may or may not be available and does not require to be part of the peer review for this TPA class. A further requirement for TPA:assembly is for submitters to provide an alignment file containing the reads/sequences mapped to the assembly.

TPA records are clearly labeled with keywords indicating their TPA status and their class. Constructed genomes where no experimental evidence is presented (in <span style="font-weight:bold">TPA:assembly</span>) are permitted to include only annotation relating to genes of known function (as opposed to hypothetical proteins, for example). Submissions containing neither assembly information nor annotation that has resulted from peer-reviewed *in vivo*, *in vitro* or *in silico* experimentation are not accepted in TPA. The outputs of computational tools, feature identification algorithms, and homology search tools alone are not sufficient for TPA.

## Acceptable records for TPA  {#table}

Below is a list of typical TPA entry types and the class to which they belong. Please note that this list is neither exhaustive (there may be further entry types that would be acceptable) nor defining of the complete set of requirements (other constraints will be applied that are documented outside this list)


|  Record<br/>Type  |  TPA Tier  |  Description  |
|---|
|  1  |  Experimental  |  DS and related annotation applied to a sequence derived from existing genomic, EST and/or mRNA primary records with wet laboratory experimental evidence for existence of at least part of the transcript (eg.RT-PCR, Northern)  |
|  2  |  Experimental  |  CDS and related annotation applied to a sequence derived from existing genomic, EST and/or mRNA primary records, in addition to novel sequencing, with wet laboratory experimental evidence for existence of at least part of the transcript (eg. RT-PCR, Northern)  |
|  3  |  Experimental  |  CDS and related annotation applied to a sequence derived from existing genomic, EST and/or mRNA primary records with experimental evidence for the presence of the product (eg. antibody staining, biochemical assay)  |
|  4  |  Experimental  |  CDS and related annotation applied to a sequence derived from existing genomic, EST and/or mRNA primary records, in addition to novel sequencing, with experimental evidence for the presence of the product (eg. antibody staining, biochemical assay)  |
|  5  |  Experimental  |  Re-assignment of the product name and/or function of a coding gene where there is no change to existing annotated exon, mRNA and CDS locations and wet laboratory experimental evidence is presented  |
|  6  |  Experimental  |  Annotation of non-coding transcripts, such as antisense regulators, with wet laboratory experimental evidence for their existence and/or function  |
|  7  |  Experimental  |  Annotation of repeat features in association with transposon, retrotransposon, integron, iteron and insertion sequences with wet laboratory experimental evidence.  |
|  8  |  Experimental  |  Annotation of functional RNA genes, such as tRNAs, scRNAs, etc. with wet laboratory experimental evidence  |
|  9  |  Experimental  |  A record submitted as part of a collection of annotated members of a gene family, where wet laboratory experimental evidence exists for the annotation.  |
|  10  |  Experimental  |  A record or set of records representing a novel assembly or reassembly of primary read and sequence data that exist in INSDC, for which wet laboratory experimental functional annotation data are presented and have been subject to peer review associated with the linked publication.  |
|  11  |  Inferential  |  CDS and related annotation applied to a sequence derived from existing genomic, EST and/or mRNA primary records with reported wet laboratory experimental evidence for a homologous molecule, but no direct wet laboratory experimental evidence. The reported experimental evidence must have been generated by the submission group and must comply with TPA requirements for peer review.  |
|  12  |  Inferential  |  CDS and related annotation applied to a sequence derived from existing genomic, EST and/or mRNA primary records, in addition to novel sequencing, with no wet laboratory experimental evidence. If novel sequence is used to bridge two pieces of sequence, experimental evidence for a homologous molecule should exist.  |
|  13  |  Inferential  |  Record of sequence and annotation concepts covered in a review paper or discussion section, where wet laboratory experimental evidence is reported, but not generated by the TPA submitter  |
|  14  |  Inferential  |  Annotation of non-coding genes and transcripts with no wet laboratory experimental evidence for their existence and/or function, when submitted as part of a collection of sequences with experimental evidence for at least one member of the collection  |
|  15  |  Inferential  |  Annotation of pseudogenes with no wet laboratory experimental evidence, when submitted as part of a study that includes TPA records of functional homologues of the pseudogene  |
|  16  |  Inferential  |  Annotation of pseudogenes that are not part of a study for which there exists experimental evidence  |
|  17  |  Inferential  |  A record submitted as part of a collection of annotated members of a gene family, where wet laboratory experimental evidence does not exist for the annotation. One or more other members of the set should have experimental evidence and should have been submitted to TPA:experimental or to the INSDC primary database.  |
|  18  |  Inferential  |  A record representing a completely sequenced genome, or completely sequenced naturally occurring extrachromosomal element, comprising features, most of which have assigned gene symbols or product identifiers, where the annotated features may be a mix of experimentally and inferentially determined data.  |
|  19  |  Inferential  |  A record or set of records representing a novel assembly or reassembly of primary read and sequence data that exist in INSDC, for which inferred functional annotation data are presented and have been subject to peer review associated with the linked publication.  |
|  20  |  Specialist DB  |  A record submitted as part of a comprehensive collection of annotations from a given class or set of classes of gene that are derived using a published standard operating procedure that has undergone peer review. These submissions will come only from authoritative public databases of standing (such as those meeting the criteria for repeated publications in the NAR Annual Database Issue*) for which a genuine case can be made for the use of TPA.  |
|  21  |  Assembly  |  A record or set of records representing a novel assembly or reassembly of primary read and sequence data that exist in INSDC, for which no functional annotation data are presented, but for which the assembly has been assessed in the peer review process associated with the linked publication.  |
|  22  |  Assembly  |  A record or set of records representing a novel assembly or reassembly, with functional annotation, of primary read and sequence data that exist in INSDC, for which the assembly but not the functional annotation has been assessed in the peer review process associated with the linked publication.  |

## Unacceptable records for TPA  {#nottpa}

Please note that this list is not exhaustive.


|  Record<br/>Type  |  TPA Tier  |  Description  |
|---|
|  A  |  Not accepted  |  Annotation of repeat (and no other) features  |
|  B  |  Not accepted  |  Annotation that has arisen from an automated tool, such as GeneMark, tRNA scan or ORF finder, where no further evidence, experimental or otherwise, is presented for the annotation. The annotation in these cases has not been the subject of the peer review of the publication.  |
|  C  |  Not accepted  |  A record representing a completely sequenced genome including only features that have not been assigned gene symbols or product identifiers, for which none has wet laboratory experimental evidence.  |
