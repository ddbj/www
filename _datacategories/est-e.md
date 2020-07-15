---
layout: indexed_content
title: EST
pathname: est-e
category: datacategories
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
  - title: Third Party Data (TPA
    url: /ddbj/tpa-e.html
---

EST is a division of DDBJ/ENA/GenBank that contains sequence data and
other information on "single-pass" cDNA (i.e. mRNA or other RNA
transcript) sequences, or "Expressed Sequence Tags", from a number of
organisms.

You can submit EST data to DDBJ through [Mass Submission System
(MSS)](/ddbj/mss-e.html)

Notes on the EST submission
: 
  - Prior to your submission, remove regions of cloning vectors from
    your sequences.
  - Clone ID is required for [clone](/ddbj/qualifiers-e.html#clone)
    qualifier.
  - It is strongly recommended to include qualifiers indicating
    expression conditions; tissue
    ([tissue_type](/ddbj/qualifiers-e.html#tissue_type)),
    developmental stage
    ([dev_stage](/ddbj/qualifiers-e.html#dev_stage)), mating type
    ([mating_type](/ddbj/qualifiers-e.html#mating_type) or
    [sex](/ddbj/qualifiers-e.html#sex)) and so on.
  - In principle, only sequences derived from Sanger method are
    acceptable for EST division.  
    Sequence reads generated from, so-called, Next Generation
    Sequencers are accepted at [DDBJ Sequence Read
    Archive](/dra/index-e.html).
  - EST assemble sequence would be accepted as [TSA: Transcriptome
    Shotgun Assembly](/ddbj/tsa-e.html)

## Sample flat file

Aspects of EST

  - In principle, no [feature](#FeaturesB) information is provided
    except source.

  - [LOCUS](#LocusA) line provides the division name, "EST".

  - [KEYWORDS](#KeywordsA) line provides the keywords name, "EST" and
    one of following three terms.
    
    Since following controlled vocabularies indicate strategies of
    methods which are used to obtain ESTs, there is no guarantee if the
    sequence is really derived from 5'- or 3'- end of RNA transcript or
    not.
    
  
    | For 5' EST submissions     | 5'-end sequence (5'-EST) |
    | For 3' EST submissions     | 3'-end sequence (3'-EST) |
    | Other than above two cases | unspecified EST          |
    

  - In the case of 3' EST, to distinguish whether your sequences are
    corresponding to anti-sense or sense strand, please describe either
    of following two [COMMENT](#CommentA)s.
    

    | For anti-sense strand | 3'-EST sequences are presented as anti-sense strand. |
    | For sense strand      | 3'-EST sequences are presented as sense strand.      |
    
<!-- end list -->

<pre><a id="LocusA" href="#LocusB">LOCUS</a>       <a id="LocusNameA" href="#LocusNameB">HY000000</a>              <a id="SequenceLengthA" href="#SequenceLengthB">300 bp</a>    <a id="MoleculeTypeA" href="#MoleculeTypeB">mRNA</a>    <a id="MoleculeFormA" href="#MoleculeFormB">linear</a>   <a id="DivisionA" href="#DivisionB">EST</a> <a id="ModificationDateA" href="#ModificationDateB">15-OCT-2008</a>
<a id="DefinitionA" href="#DefinitionB">DEFINITION</a>  Mus musculus mRNA, clone: 2310009A01, 3' end sequence, expressed 
            in tongue.
<a id="AccessionA" href="#AccessionB">ACCESSION</a>   HY000000
<a id="VersionA" href="#VersionB">VERSION</a>     HY000000.1
<a id="KeywordsA" href="#KeywordsB">KEYWORDS</a>    EST; 3'-end sequence (3'-EST).
<a id="SourceA" href="#SourceB">SOURCE</a>      Mus musculus (house mouse)
  <a id="OrganismA" href="#OrganismB">ORGANISM</a>  Mus musculus
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Glires; Rodentia;
            Sciurognathi; Muroidea; Muridae; Murinae; Mus; Mus.
<a id="Reference1A" href="#Reference1B">REFERENCE   1</a>  (bases 1 to 300)
  <a id="AuthorsA" href="#AuthorsB">AUTHORS</a>   Mishima,H., Yamada,T. and Liu,G.Q.
  <a id="TitleA" href="#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="#JournalB">JOURNAL</a>   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Yamada,T., Park,C.S. and Liu,G.Q.
  TITLE     Mus musculus EST
  JOURNAL   Unpublished (2008)
<a id="CommentA" href="#CommentB">COMMENT</a>             3'-EST sequences are presented as anti-sense strand.
<a id="FeaturesA" href="#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..300</a>
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="2310009A01"
                     /<a href="/ddbj/qualifiers.html#clone_lib">clone_lib</a>="full-length enriched mouse cDNA library A01"
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:10090"
                     /<a href="/ddbj/qualifiers.html#dev_stage">dev_stage</a>="adult"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Mus musculus"
                     /<a href="/ddbj/qualifiers.html#sex">sex</a>="male"
                     /<a href="/ddbj/qualifiers.html#tissue_type">tissue_type</a>="tongue"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          86 a          90 c          73 g           51 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="#EndB">//</a></pre>