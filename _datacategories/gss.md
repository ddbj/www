---
layout: indexed_content
title: GSS
pathname: gss
category: datacategories
pdf: https://www.ddbj.nig.ac.jp/pdf/ddbj/gss.pdf
---

DDBJ/ENA/GenBank の GSS division は [EST](/ddbj/est.html) division
に似ていますが、その配列の大半が cDNA (RNA transcript)
ではなく、ゲノムに由来するという点で異なります。  
ただし、exon trap と gene trap は cDNA
を介することもあります。このようなタイプの配列を解析する際には、splicing
が生じてゲノム配列と比較して分断されている可能性があるため、注意が必要です。  
GSS division には以下を含みますが、下記で全てを網羅している訳ではありません。

  - ランダムな "single pass read" のゲノム配列 例) RAPD, RFLP, AFLP など
  - cosmid/BAC/YAC clone の末端配列
  - exon trap, gene trap
  - transposon に隣接した配列

GSS 登録には、[Mass Submission System (MSS)](/ddbj/mss.html) をご利用ください。

GSS 登録における注意事項
:     
  - 登録前に cloning vector に由来する領域は配列から取り除いておいてください。
  - [clone](/ddbj/qualifiers.html#clone) qualifier の記載が必須です。

## DDBJ フォーマットの例

GSS エントリの特徴

  - 例外もありますが、source feature 以外の [feature](#FeaturesB) は記載されません。
  - [LOCUS](#LocusA) 行に表示される DIVISION は、"GSS" です。
  - [KEYWORDS](#KeywordsA) 行には "GSS" が表示されます。

<!-- end list -->

<pre><a id="LocusA" href="#LocusB">LOCUS</a>       <a id="LocusNameA" href="#LocusNameB">GA000000</a>              <a id="SequenceLengthA" href="#SequenceLengthB">423 bp</a>    <a id="MoleculeTypeA" href="#MoleculeTypeB">DNA</a>    <a id="ModificationDateA" href="#ModificationDateB">linear</a>   <a id="DivisionA" href="#DivisionB">GSS</a> <a id="ModificationDateA" href="#ModificationDateB">15-OCT-2008</a>
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
<a id="EndA" href="#EndB">//</a></pre>