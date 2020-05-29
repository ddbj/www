---
layout: indexed_content
title: WGS
pathname: wgs
category: datacategories
---

様々な生物においてホールゲノムショットガン配列決定法（whole genome shotgun:
ゲノム全体を物理的に断片化し、シークエンサで各断片の塩基配列を決定した後、コンピューター・プログラムを用いて整理、アセンブルして完成させる手法）を用いて全ゲノム配列を決定するゲノムプロジェクトが進められています。

DDBJ/ENA/GenBank では、そのようなゲノムプロジェクトに由来する、整理が不十分な段階の大量の DNA 断片の配列を、WGS
データとして受け付けています。  
[INSDC standards for genome assembly
submission](/ddbj/assembly.html)もご参照ください。

[公開されているWGSデータ](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/wgs/WGS_ORGANISM_LIST.html)

WGSデータの登録は [Mass Submission System (MSS)](/ddbj/mss.html) で受け付けております。

  - WGS データとして登録可能なデータ  
    原則、冗長な raw read sequences ではなく、ある程度 計算機処理を経た contigs (overlapping
    reads) の配列を受付けます。冗長な raw read sequences
    を公表することが必要な場合は、DDBJ/ENA/GenBank
    とは別枠のデータベースである [DDBJ Sequence Read Archive
    (DRA)](/dra/index.html)をご利用ください。
      - 登録に先立ち、[BioProject Database](/bioproject/index.html) と
        [BioSample Database](/biosample/index.html) への登録が必要です。
      - assembly 過程を表現する WGS の登録には２種類の方法があります。
          - a) WGS + scaffold CON:  
            各 contig (overlapping reads) の配列を WGS entry として登録します。
            WGS 配列には sequencing gap を表現する連続した"n"を含むことはできません。
            gap を含めた連結構造の記載が必要な場合、[AGP
            ファイル](/ddbj/file-format.html#agp)による登録が可能です。  
            scaffold (assembled contigs separated by gaps) を
            [CON](/ddbj/con.html) entry として WGS の連結を表現する形式で登録を受付けます。
          - b) WGS with gaps:  
            各 scaffold (assembled contigs separated by gaps) の配列を WGS
            entry として登録します。
            sequencing gap を連続した"n"として WGS 配列に含めて記載します。
            [AGP ファイル](/ddbj/file-format.html#agp)は必要ありません。

## DDBJ フォーマットの例

WGS エントリの特徴

  - [アクセッション番号](#AccessionB) は[アルファベット 4 文字と数字 8
    桁](#bulk_sequence)を基本とします。
  - [KEYWORDS](#KeywordsB) 行には "WGS" とゲノムとしての完成度を示す規定値が表示されます。

<!-- end list -->

``` code flat-file
LOCUS       ZZZZ01000001              123456 bp    DNA    linear   HUM 01-MAY-2003
DEFINITION  Homo sapiens DNA, chromosome 7, A01234B01. 
ACCESSION   ZZZZ01000001 ZZZZ01000000
VERSION     ZZZZ01000001.1
DBLINK      BioProject:PRJDA12345
            BioSample:SAMD01234567
            Sequence Read Archive:DRR012345, DRR012346
KEYWORDS    WGS; STANDARD_DRAFT.
SOURCE      Homo sapiens
  ORGANISM  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
REFERENCE   1  (bases 1 to 123456)
  AUTHORS   Mishima,H. and Shizuoka,T.
  TITLE     Direct Submission
  JOURNAL   Submitted (01-APR-2003) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
REFERENCE   2
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Human whole genome shotgun sequence
  JOURNAL   Unpublished (2003)
COMMENT     Whole genome shotgun sequencing project.
FEATURES             Location/Qualifiers
     source          1..123456
                     /db_xref="taxon:9606"
                     /chromosome="7"
                     /mol_type="genomic DNA"
                     /organism="Homo sapiens"
                     /submitter_seqid="A01234B01"

-- The rest is snipped --
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

<div id="Dblink">

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

<div id="End">

</div>
