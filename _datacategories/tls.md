---
layout: indexed_content
title: TLS
pathname: tls
category: datacategories
---

2016年から INSDC では 16S rRNA または、他の特定 locus を標的とした配列で構成され、主として operational
taxonomic unit クラスター化に用いられる bulk sequence data を Targeted Locus Study
(TLS) data type として受け付けています。

NGS を利用した marker 配列の網羅的解析に関しましては、reads が [DDBJ Read
Archive](/dra/index.html) に登録されているならば再現可能ですので、多くの場合、TLS
データ登録は必須ではありません。  
念のため、TLS データの登録が必要か否かご検討ください。

[公開されているTLSデータ](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/tls/TLS_ORGANISM_LIST.html)

TLS 登録には、[Mass Submission System (MSS)](/ddbj/mss.html) をご利用ください。

  - TLS 登録における注意事項
    
      - 登録に先立ち、[BioProject Database](/bioproject/index.html) と
        [BioSample Database](/biosample/index.html) への登録が必要です。
      - 解析元となる配列データが [DDBJ Read Archive](/dra/index.html)
        に登録されていることが推奨されます。
      - 登録前に low quality reads, chimeric sequences の除去を行っておいてください。

## DDBJ フォーマットの例

TLS エントリの特徴

  - [アクセッション番号](#AccessionA) は[アルファベット 4 文字と数字 8
    桁](#bulk_sequence)を基本とします。
  - [DEFINITION](#DefinitionA) 行は "TLS:" で始まります。
  - [KEYWORDS](#KeywordsA) 行には "TLS" と "Targeted Locus Study" が表示されます。

<!-- end list -->

``` flat-file code
LOCUS       TZZZ01000001             800 bp   mRNA     linear   TLS 15-NOV-2017
DEFINITION  TLS: Uncultured bacterium OTU:MS213 gene for 16S ribosomal RNA, 
            partial sequence.
ACCESSION   TZZZ01000001
VERSION     TZZZ01000001.1
DBLINK      BioProject:PRJDA43211
            Sequence Read Archive: DRR800001
            BioSample: SAMD98765439
KEYWORDS    TLS; Targeted Locus Study; ENV.
SOURCE      uncultured bacterium
  ORGANISM  uncultured bacterium
            Bacteria; environmental samples.
REFERENCE   1  (bases 1 to 800)
  AUTHORS   Mishima,H. and Shizuoka,T.
  TITLE     Direct Submission
  JOURNAL   Submitted (30-SEP-2017) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
REFERENCE   2  
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Metagenomic Taxonomy Profile in Sea Water
  JOURNAL   TLS Biol 15, 161-170 (2017)
COMMENT     ##Assembly-Data-START##
            Assembly Method       :: FLASH v. 2015
            Sequencing Technology :: Illumina
            ##Assembly-Data-END##
FEATURES             Location/Qualifiers
     source          1..301
                     /altitude="-20 m"
                     /country="Pacific Ocean"
                     /db_xref="taxon:77133"
                     /environmental_sample
                     /isolation_source="marine water"
                     /lat_lon="29.3116 N 148.6778 E"
                     /mol_type="genomic DNA"
                     /organism="uncultured bacterium"
                     /submitter_seqid="OTU:MS213"
     rRNA            <1..>301
                     /product="16S ribosomal RNA"
BASE COUNT           75 a           59 c          102 g           65 t
ORIGIN      
        1 cagtcgccgc gggaatacgg agggggctag cgttgttcgg aattactggg cgtaaagcgc
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

<div id="BaseCount">

</div>

<div id="Origin">

</div>

<div id="End">

</div>
