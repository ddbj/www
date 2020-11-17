---
layout: indexed_content
title: TSA
pathname: tsa-e
category: ddbj
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
  - title: EST
    url: /ddbj/est-a.html
  - title: HTC
    url: /ddbj/htc-e.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa-e.html
---

Since 2008, INSDC has accepted the sequence data of "Transcriptome Shotgun Assembly (TSA)" categorised into TSA division for assembled cDNA sequences.

With new sequencing technologies, INSDC has faced many requests to accept assembled EST sequences. These sequence data have become more useful than used to be, although they may not be correctly assembled or exist in nature. Therefore, DDBJ/ENA/GenBank decided to collect assembled EST sequences and classified them into the TSA division.  
See also [steps of transcriptome project, categories of sequence data and their correspondences.](/ddbj/transcriptome-e.html)

[The list of publicized TSA data.](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/tsa/TSA_ORGANISM_LIST.html)

You can submit TSA data to DDBJ through [Mass Submission System (MSS)](/ddbj/mss-e.html).

Notes on the TSA submission
:   
  - Prior to sequence data submission, it is required to submit to [BioProject Database](/bioproject/index-e.html) and [BioSample Database](/biosample/index-e.html).
  - Assemblies obtained from multiple species are not acceptable, except Transcriptome Shotgun Assembly derived from environmental sample.
  - The sequences of primary entries used for a TSA assembly are required to be submitted to the [EST division](/ddbj/est-e.html) of DDBJ/ENA/GenBank, [DDBJ Trace Archive](/dta/index-e.html) or [DDBJ Read Archive](/dra/index-e.html). If you have not yet submitted primary entries of your TSA data, at first, you have to submit them.
  - To describe the correspondence of sequence regions between TSA and primary entries from only [EST division](/ddbj/est-e.html) or [DDBJ Trace Archive](/dta/index-e.html), both locations should be prepared to describe in [PRIMARY](#PrimaryA) line.  
    For primary entries from [DDBJ Read Archive](/dra/index-e.html), cited run accession number is required to describe in [DBLINK](#DblinkA) line.
  - It is strongly recommended to include qualifiers indicating expression conditions; tissue ([tissue\_type](/ddbj/qualifiers-e.html#tissue_type)), developmental stage ([dev\_stage](/ddbj/qualifiers-e.html#dev_stage)), mating type ([mating\_type](/ddbj/qualifiers-e.html#mating_type) or [sex](/ddbj/qualifiers-e.html#sex)) and so on. However, when the TSA sequence is constructed from two or more different origins, those conditions can not be described.
  - Remove low quality reads and chimeric sequences before submission.

Definition of primary entry for TSA  
: Primary entries used to build a TSA sequence are RNA sequences that have been experimentally determined by their submitters and are publicly available on INSDC, [Trace Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi) or [Sequence Read Archive](https://www.ncbi.nlm.nih.gov/Traces/sra/sra.cgi).
    
: It is possible that primary entries are not yet publicized at the TSA submission. However, the primary entries must be publicized by when the corresponding TSA entry is open to the public.

The sequence alignment rules between TSA and primary entries
:    
  - Regions of a TSA entry can be assembled from a single EST or read so that coverage is only 1x.
  - When the assembled sequence includes gap region supported by some evidence (pair end sequences, etc), you can describe gap region by sequential n's in the sequence. The gap region must be specified by [assembly\_gap](/ddbj/features-e.html#assembly_gap) feature.
  - Limits to ambiguity in the sequence out of location described with [assembly\_gap](/ddbj/features-e.html#assembly_gap) features are that;
    1. the allowable percent of bases that are 'n' should be less than 5% and
    2. a TSA entry can have a stretch of no more than 5 n' s in a row

## Sample flat file <a name="flat-file"></a>

Aspects of TSA

  - Basically, each TSA sequence submitted to DDBJ is assigned an [accession number](#AccessionA) that consists of 4 alphabet characters and 8 digits.
  - [LOCUS](#LocusA) line provides the division name, "TSA".
  - "TSA:" is shown at the beginning of [DEFINITION](#DefinitionA) line.
  - "TSA" and "Transcriptome Shotgun Assembly" are indicated in [KEYWORDS](#KeywordsA) line.
  - [PRIMARY](#PrimaryA) line provides base spans cited from sequeces of primary entries that contribute to regions of the TSA sequence.

In case of citing [DDBJ Read Archive](/dra/index-e.html)

<pre><code><a id="LocusA" href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file-e#LocusNameB">IZZY01000001</a>              <a id="SequenceLengthA" href="/ddbj/flat-file-e#SequenceLengthB">800 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">mRNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file-e#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file-e#DivisionB">TSA</a> <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">15-OCT-2015</a>
<a id="DefinitionA" href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  TSA: Mus musculus RNA, contig1_1.
<a id="AccessionA" href="/ddbj/flat-file-e#AccessionB">ACCESSION</a>   IZZY01000001
<a id="VersionA" href="/ddbj/flat-file-e#VersionB">VERSION</a>     IZZY01000001.1
<a id="DblinkA" href="/ddbj/flat-file-e#DblinkB">DBLINK</a>      BioProject:PRJDA43210
            Sequence Read Archive: DRR900001
            BioSample: SAMD98765431
<a id="KeywordsA" href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    TSA; Transcriptome Shotgun Assembly.
<a id="SourceA" href="/ddbj/flat-file-e#SourceB">SOURCE</a>      Mus musculus (house mouse)
  <a id="OrganismA" href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  Mus musculus
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Glires; Rodentia;
            Sciurognathi; Muroidea; Muridae; Murinae; Mus; Mus.
<a id="Reference1A" href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 800)
  <a id="AuthorsA" href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Transcriptome shotgun assembly of mouse
  JOURNAL   TSA Biol 12, 61-70 (2015)
<a id="CommentA" href="/ddbj/flat-file-e#CommentB">COMMENT</a>     ##Assembly-Data-START##
            Assembly Method       :: Velvet v.1.1.05
            Sequencing Technology :: Illumina GAIIx
            ##Assembly-Data-END##            
<a id="FeaturesA" href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file-e#FeaturesSourceB">source</a>          <a href="/ddbj/location-e.html">1..800</a>
                     /<a href="/ddbj/qualifiers-e.html#db_xref">db_xref</a>="taxon:10090"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="transcribed RNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Mus musculus"
                     /<a href="/ddbj/qualifiers-e.html#submitter_seqid">submitter_seqid</a>="contig1_1"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          199 a          203 c          198 g          200 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file-e#EndB">//</a></code></pre>

In case of citing [EST](/ddbj/est-e.html)

<pre class="code flat-file"><code><a href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a href="/ddbj/flat-file-e#LocusNameB">IZZY01000001</a>              <a href="/ddbj/flat-file-e#SequenceLengthB">800 bp</a>    <a href="/ddbj/flat-file-e#MoleculeTypeB">mRNA</a>    <a href="/ddbj/flat-file-e#ModificationDateB">linear</a>   <a href="/ddbj/flat-file-e#DivisionB">TSA</a> <a href="/ddbj/flat-file-e#ModificationDateB">15-OCT-2015</a>
<a href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  TSA: Homo sapiens GAPD mRNA for glyceraldehyde-3-phosphate
            dehydrogenase, complete cds.
<a href="/ddbj/flat-file-e#AccessionB">ACCESSION</a>   IZZY01000001
<a href="/ddbj/flat-file-e#VersionB">VERSION</a>     IZZY01000001.1
<a href="/ddbj/flat-file-e#DblinkB">DBLINK</a>      BioProject:PRJDA43211
            BioSample: SAMD98765433
<a href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    TSA; Transcriptome Shotgun Assembly.
<a href="/ddbj/flat-file-e#SourceB">SOURCE</a>      Homo sapiens (human)
  <a href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 800)
  <a href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     EST assembly of human
  JOURNAL   TSA Biol 12, 61-70 (2008)
<a href="/ddbj/flat-file-e#CommentB">COMMENT</a>           
<a id="PrimaryA" href="#PrimaryB">PRIMARY</a>     TSA_SPAN            PRIMARY_IDENTIFIER PRIMARY_SPAN        COMP
            1-599               ZZ000004.1         2-598
            1-669               ZZ000005.1         11-679
            2-596               ZZ000006.1         1-595
            2-575               ZZ000007.1         1-574
            5-676               ZZ000008.1         1-672
            6-725               ZZ000009.1         1-720
            59-369              ZZ000010.1         13-322
            605-800             ZZ000011.1         1-196               c
            1451-1550           ZZ000003.1         201-300
<a href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a href="/ddbj/flat-file-e#FeaturesSourceB">source</a>          <a href="/ddbj/location-e.html">1..800</a>
                     /<a href="/ddbj/qualifiers-e.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="transcribed RNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Homo sapiens"
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location-e.html">73..669</a>
                     /<a href="/ddbj/qualifiers-e.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers-e.html#gene">gene</a>="GAPD"
                     /<a href="/ddbj/qualifiers-e.html#product">product</a>="glyceraldehyde-3-phosphate dehydrogenase"
                     /<a href="/ddbj/qualifiers-e.html#protein_id">protein_id</a>="LZZ00001.1"
                     /<a href="/ddbj/qualifiers-e.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers-e.html#translation">translation</a>="MWYQSLVIIEKLNLEANIGKLINTKDNINIRCRLSHTEEHSWHS
                     -- The rest of amino acid sequence is omitted -- "
<a href="#BaseCountB">BASE COUNT</a>          199 a          203 c          198 g          200 t
<a href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a href="/ddbj/flat-file-e#EndB">//</a></code></pre>
