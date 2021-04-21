---
layout: tabbed_indexed_content
title: MGA
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: other
lang: en
related_pages:
  - title: ENV
    url: /ddbj/env-e.html
  - title: Data Submission from Genome Project
    url: /ddbj/genome-e.html
  - title: Data Submission from Transcriptome Project
    url: /ddbj/transcriptome-e.html
  - title: TSA
    url: /ddbj/tsa-e.html
  - title: WGS
    url: /ddbj/wgs-e.html
  - title: CON
    url: /ddbj/con-e.html
  - title: TLS
    url: /ddbj/tls-e.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa-e.html
  - title: EST
    url: /ddbj/est-e.html
  - title: GSS
    url: /ddbj/gss-e.html
  - title: HTC
    url: /ddbj/htc-e.html
  - title: HTG
    url: /ddbj/htg-e.html
  - title: Submission of environmental sequences
    url: /ddbj/environmental-e.html
  - title: MGA
    url: /ddbj/mga-e.html
---

<span class="red">**[Caution] DDBJ terminated
accepting new submission of MGA data.**</span>

In order to accept a large scale of sequence data that provide useful
information for annotation of genome assemblies/sequences, the
International Nucleotide Sequence Database Collaboration (INSDC;
DDBJ/EMBL-Bank/GenBank) have created a new category. The name of this
new category is Mass sequence for Genome Annotation (MGA). The
definition of MGA data is the following.。

The definition of MGA data  
: MGA is defined as those sequences which are produced in large
quantity in view of genome annotation.

The data which can be acceptable to the MGA category of INSDC are 
: Those which include useful biological features for genome annotation
( e.g. start or end terminus of a transcript).
The large of quantity here means that the number of sequences in one
resource is 10,000 or more.

## Sample flat file  {#flat-file}

MGA data are published a resource as a unit. The data consist of "Master
record" and "Variable record" for a resource.

### Master record

Common parts of information such as submitters, keywords (MGA and
others), references, comments and so on. Master record is provided for
every resource unit.

<strong>Example</strong>
<pre><code><a id="LocusA" href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file-e#LocusNameB">ZZZZZ0000000</a>                       <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">mRNA</a>    <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file-e#DivisionB">ROD</a> <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">24-JAN-2005</a>
<a id="DefinitionA" href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  Mus musculus 1 month adult cerebellum short transcripts tag.
<a id="AccessionA" href="#Accession_MGA">ACCESSION</a>   ZZZZZ0000000
<a id="VersionA" href="/ddbj/flat-file-e#VersionB">VERSION</a>     ZZZZZ0000000.1
<a id="KeywordsA" href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    MGA; CAGE (Cap Analysis Gene Expression).
<a id="SourceA" href="/ddbj/flat-file-e#SourceB">SOURCE</a>      Mus musculus (house mouse)
  <a id="OrganismA" href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  Mus musculus
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Glires; Rodentia;
            Sciurognathi; Muroidea; Muridae; Murinae; Mus; Mus.
<a id="Reference1A" href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 1450)
  <a id="AuthorsA" href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>   Mishima,H., Yamada,T. and Liu,G.Q.
  <a id="TitleA" href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (30-NOV-2009) to the DDBJ/EMBL/GenBank databases. 
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I
  TITLE     The gene expression analysis of short transcripts tags
  JOURNAL   Unpublished (2010)
<a id="CommentA" href="/ddbj/flat-file-e#CommentB">COMMENT</a>     The CAGE (cap analysis gene expression) is based on preparation
            and sequencing of concatamers of DNA tags deriving from the
            initial 20/21 nucleotides from 5' end mRNAs.
            Full-length cDNAs were at first selected with the Cap-Trapper
            method. Then, a specific linker (Linker1, some linker contain 5 bp
            sequences that have 15 variations for each rna sample) containing
            the ClassIIs restriction enzyme site MmeI was then ligated to the
            single-strand cDNA and then the second strand of cDNA synthesized.
            (omitted)
<a id="FeaturesA" href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     source          
                     /db_xref="taxon:10090"
                     /dev_stage="1 month adult"
                     /mol_type="mRNA"
                     /organism="Mus musculus"
                     /strain="C57BL/6J"
                     /tissue_type="cerebellum"
<a id="MgaA" href="#MgaB">MGA</a>         ZZZZZ0000001-ZZZZ0340780
            total number of count : 856609
            Header Format
            &gt;[ACC#]|[submitter's identifier]|[number of sequence
            count]|[map]|[free text]|[db_xref1(,db_xref2,...)]|
<a id="EndA" href="/ddbj/flat-file-e#EndB">//</a>
</code></pre>

### Variable record

All nucleotide sequences of the resource unit described in the Master
record, and the items specific to each sequence, such as map location,
count number of the sequence, and db_xrefs.

<strong>Example</strong>
```
>ZZZZZ0000001|ABC1004AA60F1902|10|9B|lipidosis-related protein Lipidosin| 
GI:2385656|
gactgtcttcggtgaatgca
>ZZZZZ0000002|ABC1003AE78G1607|5||||
gcggaagtcggaccggtcgca
>ZZZZZ0000003|ABC1003AE72P1806|6||||
gggagaccgatccgggatct
>ZZZZZ0000004|ABC1003AE30G1801|91||||
gagtcgggtcggtggggctgt
>ZZZZZ0000005|ABC1003AA45J1501|55||||
ggggaatctgcagcctgggc
>ZZZZZ0000006|ABC1003AE67B0902|152||||
gagccgtccccgacgccgcca
 (Followings are omitted) 
```

| <strong>Format</strong>: | &gt;[ACC#]\|[submitter's identifier]\|[number of sequence count]\|[map]\|[free text]\|[db_xref1(,db_xref2,...)]\| |


  - One entry is consisted of "Header" line and nucleotide
    sequence.Header line starts ">" and follows six items related to
    each entry.Six items are delimited by "|"(pipe).
  - The related information of an entry can be changed, but revise of
    nucleotide sequence can not be allowed. If the sequence which has
    already been submitted into INSDC is taken from identical resource,
    the item, [number of sequence count] of the entry has to be
    updated.

<!-- end list -->

```
>ZZZZZ0000001|ABC1004AA60F1902|100|9B|lipidosis-related protein Lipidosin| MGI:2385656|
gactgtcttcggtgaatgca
```

| ```ZZZZZ0000001``` [ACC#]                            | accession number of the entry                    |
| ```ABC1004AA60F1902``` [submitter's identifier]       | identifier assigned by submitter to the entry    |
| ```100``` [number of sequence count]                  | number of the count of this entry in the resouce |
| ```9B``` [map]                                        | map information                                  |
| ```lipidosis-related protein Lipidosin``` [free text] | Map location (in this case, chromosome number)   |
| ```MGI:2385656``` [db_xref1(,db_xref2,...)]         | free-text-formatted description of the entry     |
| ```gactgtcttcggtgaatgca```                              | external database information of the entry       |
