---
layout: indexed_content
title: GSS
pathname: gss-e
category: ddbj
current_tab: data_categories
tab_menu:
  - id: home
    title: Home
    url: /ddbj/index-e.html
  - id: submission
    title: Submission
    url: /ddbj/submission-e.html
    children:
      - title: Before Submission
        url: /ddbj/submission-e.html
      - title: Web submission
        url: /ddbj/web-submission-e.html
      - title: Mass Submission
        url: /ddbj/mss-e.html
      - title: Data Update
        url: /ddbj/update-e.html
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/arsa/?lang=en
    children:
      - title: getentry
        url: http://getentry.ddbj.nig.ac.jp/top-e.html
      - title: ARSA
        url: http://ddbj.nig.ac.jp/arsa/?lang=en
  - id: flat_file
    title: Flat file
    url: /ddbj/flat-file-e.html
    children:
      - title: Feature key
        url: /ddbj/features-e.html
      - title: Qualifier key
        url: /ddbj/qualifiers-e.html
      - title: Organism qualifier
        url: /ddbj/organism-e.html
      - title: Description of Location
        url: /ddbj/location-e.html
      - title: Protein Coding Sequence
        url: /ddbj/cds-e.html
      - title: The Genetic Codes
        url: /ddbj/geneticcode-e.html
      - title: Codes Used in Sequence Description
        url: /ddbj/code-e.html
      - title: Example of Submission
        url: /ddbj/example-e.html
  - id: data_categories
    title: Data categories
    url: /ddbj/data-categories-e.html
    children:
      - title: Data Submission from Genome Project
        url: /ddbj/genome-e.html
      - title: Pseudohaplotype
        url: /ddbj/pseudohaplotype-e.html
      - title: WGS
        url: /ddbj/wgs-e.html
      - title: Metagenome Assembly
        url: /ddbj/metagenome-assembly-e.html
      - title: Single amplified genome
        url: /ddbj/single-amplified-genome-e.html
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
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html
  - id: other
    title: Other
    url: /ddbj/index-e.html
    children:
      - title: Patent
        url: /ddbj/patent-data-e.html
      - title: MGA
        url: /ddbj/mga-e.html
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

## Sample flat file <a name="flat-file"></a>

Aspects of GSS

  - Though there are exceptions, no [feature](/ddbj/flat-file-e#FeaturesB) information is
    provided except source.
  - [LOCUS](#LocusA) line provides the division name, "GSS".
  - "GSS" is indicated in [KEYWORDS](#KeywordsA) line.

<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file-e#LocusNameB">GA000000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file-e#SequenceLengthB">423 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">DNA</a>    <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file-e#DivisionB">GSS</a> <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">15-OCT-2008</a>
<a id="DefinitionA" href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  Arabidopsis thaliana DNA, BAC clone: CIC5D1, left end, chromosome 1 
            between mi303 and mi259.
<a id="AccessionA" href="/ddbj/flat-file-e#AccessionB">ACCESSION</a>   GA000000
<a id="VersionA" href="/ddbj/flat-file-e#VersionB">VERSION</a>     GA000000.1
<a id="KeywordsA" href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    GSS.
<a id="SourceA" href="/ddbj/flat-file-e#SourceB">SOURCE</a>      Arabidopsis thaliana (thale cress)
  <a id="OrganismA" href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  Arabidopsis thaliana
            Eukaryota; Viridiplantae; Streptophyta; Embryophyta; Tracheophyta;
            Spermatophyta; Magnoliophyta; eudicotyledons; core eudicotyledons;
            rosids; malvids; Brassicales; Brassicaceae; Camelineae;
            Arabidopsis.
<a id="Reference1A" href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 423)
  <a id="AuthorsA" href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>   Mishima,H., Yamada,T. and Liu,G.Q.
  <a id="TitleA" href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Yamada,T., Park,C.S. and Liu,G.Q.
  TITLE     Arabidopsis thaliana DNA
  JOURNAL   Unpublished (2008)
<a id="FeaturesA" href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file-e#FeaturesSourceB">source</a>          <a href="/ddbj/location-e.html">1..423</a>
                     /<a href="/ddbj/qualifiers-e.html#chromosome">chromosome</a>="1"
                     /<a href="/ddbj/qualifiers-e.html#clone">clone</a>="CIC5D1"
                     /<a href="/ddbj/qualifiers-e.html#clone_lib">clone_lib</a>="AT01 BAC"
                     /<a href="/ddbj/qualifiers-e.html#db_xref">db_xref</a>="taxon:3702"
                     /<a href="/ddbj/qualifiers-e.html#ecotype">ecotype</a>="columbia"
                     /<a href="/ddbj/qualifiers-e.html#map">map</a>="between mi303 and mi259"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Arabidopsis thaliana"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          105 a          98 c          112 g          108 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file-e#EndB">//</a></code></pre>
