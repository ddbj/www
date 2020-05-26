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

  - GSS 登録における注意事項
    
      - 登録前に cloning vector に由来する領域は配列から取り除いておいてください。
      - [clone](/ddbj/qualifiers.html#clone) qualifier の記載が必須です。

## DDBJ フォーマットの例

GSS エントリの特徴

  - 例外もありますが、source feature 以外の [feature](#FeaturesB) は記載されません。
  - [LOCUS](#LocusA) 行に表示される DIVISION は、"GSS" です。
  - [KEYWORDS](#KeywordsA) 行には "GSS" が表示されます。

<!-- end list -->

``` code flat-file
LOCUS       GA000000              423 bp    DNA    linear   GSS 15-OCT-2008
DEFINITION  Arabidopsis thaliana DNA, BAC clone: CIC5D1, left end, chromosome 1 
            between mi303 and mi259.
ACCESSION   GA000000
VERSION     GA000000.1
KEYWORDS    GSS.
SOURCE      Arabidopsis thaliana (thale cress)
  ORGANISM  Arabidopsis thaliana
            Eukaryota; Viridiplantae; Streptophyta; Embryophyta; Tracheophyta;
            Spermatophyta; Magnoliophyta; eudicotyledons; core eudicotyledons;
            rosids; malvids; Brassicales; Brassicaceae; Camelineae;
            Arabidopsis.
REFERENCE   1  (bases 1 to 423)
  AUTHORS   Mishima,H., Yamada,T. and Liu,G.Q.
  TITLE     Direct Submission
  JOURNAL   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
REFERENCE   2
  AUTHORS   Mishima,H., Yamada,T., Park,C.S. and Liu,G.Q.
  TITLE     Arabidopsis thaliana DNA
  JOURNAL   Unpublished (2008)
FEATURES             Location/Qualifiers
     source          1..423
                     /chromosome="1"
                     /clone="CIC5D1"
                     /clone_lib="AT01 BAC"
                     /db_xref="taxon:3702"
                     /ecotype="columbia"
                     /map="between mi303 and mi259"
                     /mol_type="genomic DNA"
                     /organism="Arabidopsis thaliana"
BASE COUNT          105 a          98 c          112 g          108 t
ORIGIN
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
//
```

## FIELD COMMENTS

<div id="Locus">

</div>

<div id="LocusName">

</div>

<div id="SequenceLength">

</div>

<div id="MoleculeType">

</div>

<div id="MoleculeForm">

</div>

<div id="Division">

</div>

<div id="ModificationDate">

</div>

<div id="Definition">

</div>

<div id="Accession">

</div>

<div id="Version">

</div>

<div id="Keywords">

</div>

<div id="Source">

</div>

<div id="Organism">

</div>

<div id="Reference1">

</div>

<div id="Authors">

</div>

<div id="Title">

</div>

<div id="Journal">

</div>

<div id="Reference2">

</div>

<div id="Features">

</div>

<div id="FeaturesSource">

</div>

<div id="BaseCount">

</div>

<div id="Origin">

</div>

<div id="End">

</div>
