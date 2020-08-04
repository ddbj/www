---
layout: indexed_content
title: GSS
pathname: gss-e
category: datacategories
lang: en
related_pages:
  - title: Data Submission from Genome Project
    url: /ddbj/genome-e.html
  - title: WGS
    url: /ddbj/wgs-e.html
  - title: CON
    url: /ddbj/con-e.html
  - title: GSS
    url: /ddbj/gss-e.html
  - title: HTG
    url: /ddbj/htg-e.html
  - title: Submission of environmental sequences
    url: /ddbj/environmental-e.html
  - title: ENV
    url: /ddbj/env-e.html
  - title: TLS
    url: /ddbj/tls-e.html
  - title: Data Submission from Transcriptome Project
    url: /ddbj/transcriptome-e.html
  - title: TSA
    url: /ddbj/tsa-e.html
  - title: EST
    url: /ddbj/est-e.html
  - title: HTC
    url: /ddbj/htc-e.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa-e.html
---

The GSS division of DDBJ/ENA/GenBank is similar to the
[EST](/ddbj/est-e.html) division, with the exception that most of the
sequences are genomic in origin, rather than cDNA (mRNA, RNA
transcript).  
It should be noted that two classes (exon trapped products and gene
trapped products) may be derived via a cDNA intermediate. Care should be
taken when analyzing sequences from either of these classes, as a
splicing event could have occurred and the sequence represented in the
record may be interrupted when compared to genomic sequence.  
The GSS division contains (but is not limited to) the following types of
data:

  - random "single pass read" genome survey sequences; e.g. RAPD, RFLP,
    AFLP and so on.
  - cosmid/BAC/HTCYAC end sequences
  - exon trap, gene trap
  - transposon-tagged sequences

You can submit GSS data to DDBJ through [Mass Submission System (MSS)](/ddbj/mss-e.html)

Notes on the GSS submission
: 
  - Prior to your submission, remove regions of cloning vectors from
    your sequences.
  - Clone Id is required for [clone](/ddbj/qualifiers-e.html#clone)
    qualifer.

## Sample flat file

Aspects of GSS

  - Though there are exceptions, no [feature](#FeaturesB) information is
    provided except source.
  - [LOCUS](#LocusA) line provides the division name, "GSS".
  - "GSS" is indicated in [KEYWORDS](#KeywordsA) line.

<!-- end list -->

<pre><code><a id="LocusA" href="#LocusB">LOCUS</a>       <a id="LocusNameA" href="#LocusNameB">GA000000</a>              <a id="SequenceLengthA" href="#SequenceLengthB">423 bp</a>    <a id="MoleculeTypeA" href="#MoleculeTypeB">DNA</a>    <a id="ModificationDateA" href="#ModificationDateB">linear</a>   <a id="DivisionA" href="#DivisionB">GSS</a> <a id="ModificationDateA" href="#ModificationDateB">15-OCT-2008</a>
<a id="DefinitionA" href="#DefinitionB">DEFINITION</a>  Arabidopsis thaliana DNA, BAC clone: CIC5D1, left end, chromosome 1 
            between mi303 and mi259.
<a id="AccessionA" href="#AccessionB">ACCESSION</a>   GA000000
<a id="VersionA" href="#VersionB">VERSION</a>     GA000000.1
<a id="KeywordsA" href="#KeywordsB">KEYWORDS</a>    GSS.
<a id="SourceA" href="#SourceB">SOURCE</a>      Arabidopsis thaliana (thale cress)
  <a id="OrganismA" href="#OrganismB">ORGANISM</a>  Arabidopsis thaliana
            Eukaryota; Viridiplantae; Streptophyta; Embryophyta; Tracheophyta;
            Spermatophyta; Magnoliophyta; eudicotyledons; core eudicotyledons;
            rosids; malvids; Brassicales; Brassicaceae; Camelineae;
            Arabidopsis.
<a id="Reference1A" href="#Reference1B">REFERENCE   1</a>  (bases 1 to 423)
  <a id="AuthorsA" href="#AuthorsB">AUTHORS</a>   Mishima,H., Yamada,T. and Liu,G.Q.
  <a id="TitleA" href="#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="#JournalB">JOURNAL</a>   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Yamada,T., Park,C.S. and Liu,G.Q.
  TITLE     Arabidopsis thaliana DNA
  JOURNAL   Unpublished (2008)
<a id="FeaturesA" href="#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..423</a>
                     /<a href="/ddbj/qualifiers.html#chromosome">chromosome</a>="1"
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="CIC5D1"
                     /<a href="/ddbj/qualifiers.html#clone_lib">clone_lib</a>="AT01 BAC"
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:3702"
                     /<a href="/ddbj/qualifiers.html#ecotype">ecotype</a>="columbia"
                     /<a href="/ddbj/qualifiers.html#map">map</a>="between mi303 and mi259"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Arabidopsis thaliana"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          105 a          98 c          112 g          108 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="#EndB">//</a></code></pre>
