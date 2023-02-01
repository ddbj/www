---
layout: tabbed_indexed_content
title: TLS
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
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

Since 2016, INSDC has accepted sequence data including 16S rRNA or
some other targeted loci mainly to be clustered into operational
taxonomic unit as Targeted Locus Study (TLS) data type.

With regard to comprehensive analysis of marker sequences by using NGS, 
TLS data submission is not required in many cases, 
because it is reproducible if the original reads are submitted to 
[DDBJ Read Archive](/dra/index-e.html).  
So, please consider if you have to submit TLS data to DDBJ or not.  

See [the list of publicized TLS
data](https://ddbj.nig.ac.jp/public/ddbj_database/tls/TLS_ORGANISM_LIST.html).

You can submit TSA data to DDBJ through [Mass Submission System
(MSS)](/ddbj/mss-e.html).

Notes on the TLS data submission
: 
  - Prior to TLS data submission, it is required to submit to
    [BioProject Database](/bioproject/index-e.html) and [BioSample
    Database](/biosample/index-e.html).
  - It is strongly recommended that the TLS data submission with the
    original sequence data of primary sequences are classified into
    [DDBJ Read Archive](/dra/index-e.html).
  - Remove low quality reads and chimeric sequences before
    submission.

## Sample flat file  {#flat-file}

Aspects of TLS

  - Basically, each TLS sequence submitted to DDBJ is assigned an
    [accession number](#AccessionA) that consists of 4 alphabet
    characters and 8 digits.
  - "TLS:" is shown at the beginning of [DEFINITION](#DefinitionA) line.
  - "TLS" and "Targeted Locus Study" are indicated in
    [KEYWORDS](#KeywordsA) line.

<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file-e#LocusNameB">TZZZ01000001</a>             <a id="SequenceLengthA" href="/ddbj/flat-file-e#SequenceLengthB">800 bp</a>   <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">mRNA</a>     <a id="MoleculeFormA" href="/ddbj/flat-file-e#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file-e#DivisionB">TLS</a> <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">15-NOV-2017</a>
<a id="DefinitionA" href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  TLS: Uncultured bacterium OTU:MS213 gene for 16S ribosomal RNA, 
            partial sequence.
<a id="AccessionA" href="/ddbj/flat-file-e#AccessionB">ACCESSION</a>   TZZZ01000001
<a id="VersionA" href="/ddbj/flat-file-e#VersionB">VERSION</a>     TZZZ01000001.1
<a id="DblinkA" href="/ddbj/flat-file-e#DblinkB">DBLINK</a>      BioProject:PRJDA43211
            Sequence Read Archive: DRR800001
            BioSample: SAMD98765439
<a id="KeywordsA" href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    TLS; Targeted Locus Study; ENV.
<a id="SourceA" href="/ddbj/flat-file-e#SourceB">SOURCE</a>      uncultured bacterium
  <a id="OrganismA" href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  uncultured bacterium
            Bacteria; environmental samples.
<a id="Reference1A" href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 800)
  <a id="AuthorsA" href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (30-SEP-2017) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>  
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Metagenomic Taxonomy Profile in Sea Water
  JOURNAL   TLS Biol 15, 161-170 (2017)
<a id="CommentA" href="/ddbj/flat-file-e#CommentB">COMMENT</a>     ##Assembly-Data-START##
            Assembly Method       :: FLASH v. 2015
            Sequencing Technology :: Illumina
            ##Assembly-Data-END##
<a id="FeaturesA" href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location-e.html">1..301</a>
                     /<a href="/ddbj/qualifiers-e.html#altitude">altitude</a>="-20 m"
                     /<a href="/ddbj/qualifiers-e.html#db_xref">country</a>="Pacific Ocean"
                     /<a href="/ddbj/qualifiers-e.html#db_xref">db_xref</a>="taxon:77133"
                     /<a href="/ddbj/qualifiers-e.html#environmental_sample">environmental_sample</a>
                     /<a href="/ddbj/qualifiers-e.html#isolation_source">isolation_source</a>="marine water"
                     /<a href="/ddbj/qualifiers-e.html#lat_lon">lat_lon</a>="29.3116 N 148.6778 E"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="uncultured bacterium"
                     /<a href="/ddbj/qualifiers-e.html#submitter_seqid">submitter_seqid</a>="OTU:MS213"
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location-e.html">&lt;1..&gt;301</a>
                     /<a href="/ddbj/qualifiers-e.html#product">product</a>="16S ribosomal RNA"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>           75 a           59 c          102 g           65 t
<a id="OriginA" href="#OriginB">ORIGIN</a>      
        1 cagtcgccgc gggaatacgg agggggctag cgttgttcgg aattactggg cgtaaagcgc
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file-e#EndB">//</a></code></pre>
