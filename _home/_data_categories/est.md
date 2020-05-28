---
layout: indexed_content
title: EST
pathname: est
category: _data_categories
---

DDBJ/ENA/GenBank の EST division "Expressed Sequence Tags" は様々な生物に由来する
"single-pass" cDNA 配列 (つまり mRNA, RNA 転写産物) と その付帯情報からなる配列データです。

EST 登録には、[Mass Submission System (MSS)](/ddbj/mss.html) をご利用ください。

  - EST 登録における注意事項
    
      - 登録前に cloning vector に由来する領域は配列から取り除いておいてください。
      - [clone](/ddbj/qualifiers.html#clone) qualifier の記載が必須です。
      - 発現条件に相当する 組織
        ([tissue\_type](/ddbj/qualifiers.html#tissue_type))、発生段階
        ([dev\_stage](/ddbj/qualifiers.html#dev_stage))、性別
        ([mating\_type](/ddbj/qualifiers.html#mating_type) または
        [sex](/ddbj/qualifiers.html#sex))、などの qualifier の記載を推奨します。
      - 原則として、Sanger 法により決定された配列を対象しています。  
        いわゆる次世代シークエンサにより読まれた配列は [DDBJ Sequence Read
        Archive](/dra/index.html) に ご登録ください。
      - EST assemble に相当する配列は [TSA: Transcriptome Shotgun
        Assembly](/ddbj/tsa.html) として登録を受け付けます。

## DDBJ フォーマットの例

EST エントリの特徴

  - 原則として、source feature 以外の [feature](#FeaturesB) は記載されません。

  - [LOCUS](#LocusA) 行に表示される DIVISION は、"EST" です。

  - [KEYWORDS](#KeywordsA) 行には "EST" と次のいずれかが表示されます。
    
    以下の controlled vocabulary は EST を得る際の手法、strategy を示すものであり、実際に RNA
    transcript の 5' 末端、または、3' 末端に相当する配列であることを保証するものではありません。
    
    <div class="news_post_container glossary">
    
    |             |                          |
    | ----------- | ------------------------ |
    | 5'EST の場合   | 5'-end sequence (5'-EST) |
    | 3'EST の場合   | 3'-end sequence (3'-EST) |
    | 上記を特定できない場合 | unspecified EST          |
    

    </div>

  - [COMMENT](#CommentA) 行には，登録される塩基配列が anti-sense 鎖側，sense
    鎖側のどちらであるかを示すため，次のいずれかを COMMENT に記載します。
    
    3'EST 登録の場合にのみ該当します。
    
    <div class="news_post_container glossary">
    
    |                     |                                                      |
    | ------------------- | ---------------------------------------------------- |
    | anti-sense 鎖を登録する場合 | 3'-EST sequences are presented as anti-sense strand. |
    | sense 鎖を登録する場合      | 3'-EST sequences are presented as sense strand.      |
    

    </div>

<!-- end list -->

``` code flat-file
LOCUS       HY000000              300 bp    mRNA    linear   EST 15-OCT-2008
DEFINITION  Mus musculus mRNA, clone: 2310009A01, 3' end sequence, expressed 
            in tongue.
ACCESSION   HY000000
VERSION     HY000000.1
KEYWORDS    EST; 3'-end sequence (3'-EST).
SOURCE      Mus musculus (house mouse)
  ORGANISM  Mus musculus
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Glires; Rodentia;
            Sciurognathi; Muroidea; Muridae; Murinae; Mus; Mus.
REFERENCE   1  (bases 1 to 300)
  AUTHORS   Mishima,H., Yamada,T. and Liu,G.Q.
  TITLE     Direct Submission
  JOURNAL   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
REFERENCE   2
  AUTHORS   Mishima,H., Yamada,T., Park,C.S. and Liu,G.Q.
  TITLE     Mus musculus EST
  JOURNAL   Unpublished (2008)
COMMENT             3'-EST sequences are presented as anti-sense strand.
FEATURES             Location/Qualifiers
     source          1..300
                     /clone="2310009A01"
                     /clone_lib="full-length enriched mouse cDNA library A01"
                     /db_xref="taxon:10090"
                     /dev_stage="adult"
                     /mol_type="mRNA"
                     /organism="Mus musculus"
                     /sex="male"
                     /tissue_type="tongue"
BASE COUNT          86 a          90 c          73 g           51 t
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

<div id="Comment">

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
