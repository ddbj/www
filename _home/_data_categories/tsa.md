---
layout: indexed_content
title: TSA
pathname: tsa
category: _data_categories
---

2008年から INSDC では、アセンブルされた cDNA 配列データを、Transcriptome Shotgun Assembly
(TSA) division に受け付けています。

以前、INSDC は EST
アセンブルによって得られた配列データの登録を受け付けていませんでした。しかし、新しい塩基配列決定技術の普及に伴い、INSDC
に EST
アセンブルに相当する配列データの登録依頼が急増しました。このような配列データは、正しくアセンブルされておらず自然界に存在していないケースをも含んでいる可能性がありますが、近年、その需要も高まってきました。そこで、DDBJ/ENA/GenBank
は EST アセンブルに相当する配列データを専用に格納する TSA division を新設し、登録を受け付けることを決定しました。  
[Transcriptome Project の各段階と登録データの種別](/ddbj/transcriptome.html)もご参照ください。

[公開されているTSAデータ](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/tsa/TSA_ORGANISM_LIST.html)

TSA 登録には、[Mass Submission System (MSS)](/ddbj/mss.html) をご利用ください。

  - TSA 登録における注意事項
    
      - 登録に先立ち、[BioProject Database](/bioproject/index.html) と
        [BioSample Database](/biosample/index.html) への登録が必要です。
      - ２種以上の生物から得られた [プライマリーエントリ](#definition_of_primary) の assembly
        は受け付けることができません。ただし、環境サンプル様の対象に由来する Transcriptome Shotgun
        Assembly は登録可能です。
      - TSA データの登録には、アセンブリの元となる[プライマリーエントリ](#definition_of_primary)が既に
        DDBJ/ENA/GenBank の [EST division](/ddbj/est.html)、[DDBJ Trace
        Archive](/dta/index.html)、[DDBJ Read Archive](/dra/index.html)
        の何れかに登録されている必要があります。
      - [EST division](/ddbj/est.html) または [DDBJ Trace
        Archive](/dta/index.html)
        のみの引用で構成される場合、[プライマリーエントリ](#definition_of_primary)の配列群と、結果として構築された配列との対応付けのために、[PRIMARY](#PrimaryA)
        行に両者の位置情報を記載します。  
        [DDBJ Read Archive](/dra/index.html) を引用する場合は、DRA の run
        accession number を [DBLINK](#DblinkA) 行に記載します。
      - 発現条件に相当する 組織
        ([tissue\_type](/ddbj/qualifiers.html#tissue_type))、発生段階
        ([dev\_stage](/ddbj/qualifiers.html#dev_stage))、性別
        ([mating\_type](/ddbj/qualifiers.html#mating_type) または
        [sex](/ddbj/qualifiers.html#sex))、などの qualifier
        の記載を推奨します。ただし、異なる条件に由来する対象を引用して構築された場合は記載できません。
      - 登録前に low quality reads, chimeric sequences の除去を行っておいてください。

  - TSA におけるプライマリーエントリの定義  
    プライマリーエントリとは、DDBJ/ENA/GenBank、[Trace
    Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi)、[Sequence
    Read Archive](https://www.ncbi.nlm.nih.gov/Traces/sra/sra.cgi)
    の何れかから取得可能なデータであり、当該エントリの登録者が実験的に配列決定を行った RNA 配列データです。
    
    TSA 登録の時点では、プライマリーエントリが非公開でも問題ありませんが、TSA
    の公開時には、プライマリーエントリ取得・閲覧可能な状態である必要があります。

  - TSA とプライマリーエントリの配列アラインメントに関する規則
    
      - TSA エントリの領域は単一の EST、もしくは、read からアセンブル可能であり、1x coverage でも構いません。
      - paired end sequences などを根拠として gap 領域を挟んでアセンブルされている場合、配列中では連続した n
        として記載可能です。ただし、その gap
        領域は[assembly\_gap](/ddbj/features.html#assembly_gap)
        feature で示されていなければなりません。
      - [assembly\_gap](/ddbj/features.html#assembly_gap) feature
        を記載していない領域の配列における曖昧さの制限
          - \[1\] 'n' で示される塩基は 5% より少ないこと
          - \[2\] 連続した 'n' で示される区間が 5 塩基以下であること

## DDBJ フォーマットの例

TSA エントリの特徴

  - [アクセッション番号](#AccessionA) は[アルファベット 4 文字と数字 8
    桁を基本](#bulk_sequence)とします。
  - [LOCUS](#LocusA) 行に表示される DIVISION は、"TSA" です。
  - [DEFINITION](#DefinitionA) 行は "TSA:" で始まります。
  - [KEYWORDS](#KeywordsA) 行には "TSA" と "Transcriptome Shotgun Assembly"
    が表示されます。
  - [PRIMARY](#PrimaryA) 行には、引用されたプライマリーエントリの配列領域と、これに対応する TSA
    配列の領域が記載されます。

[DDBJ Read Archive](/dra/index.html) を引用した例

``` code flat-file
LOCUS       IZZY01000001              800 bp    mRNA    linear   TSA 15-OCT-2015
DEFINITION  TSA: Mus musculus RNA, contig1_1.
ACCESSION   IZZY01000001
VERSION     IZZY01000001.1
DBLINK      BioProject:PRJDA43210
            Sequence Read Archive: DRR900001
            BioSample: SAMD98765431
KEYWORDS    TSA; Transcriptome Shotgun Assembly.
SOURCE      Mus musculus (house mouse)
  ORGANISM  Mus musculus
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Glires; Rodentia;
            Sciurognathi; Muroidea; Muridae; Murinae; Mus; Mus.
REFERENCE   1  (bases 1 to 800)
  AUTHORS   Mishima,H. and Shizuoka,T.
  TITLE     Direct Submission
  JOURNAL   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
REFERENCE   2
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Transcriptome shotgun assembly of mouse
  JOURNAL   TSA Biol 12, 61-70 (2015)
COMMENT     ##Assembly-Data-START##
            Assembly Method       :: Velvet v.1.1.05
            Sequencing Technology :: Illumina GAIIx
            ##Assembly-Data-END##            
FEATURES             Location/Qualifiers
     source          1..800
                     /db_xref="taxon:10090"
                     /mol_type="transcribed RNA"
                     /organism="Mus musculus"
                     /submitter_seqid="contig1_1"
BASE COUNT          199 a          203 c          198 g          200 t
ORIGIN
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
//
```

[EST](/ddbj/est.html) を引用した例

``` code flat-file
LOCUS       IZZY01000001              800 bp    mRNA    linear   TSA 15-OCT-2015
DEFINITION  TSA: Homo sapiens GAPD mRNA for glyceraldehyde-3-phosphate
            dehydrogenase, complete cds.
ACCESSION   IZZY01000001
VERSION     IZZY01000001.1
DBLINK      BioProject:PRJDA43211
            BioSample: SAMD98765433
KEYWORDS    TSA; Transcriptome Shotgun Assembly.
SOURCE      Homo sapiens (human)
  ORGANISM  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
REFERENCE   1  (bases 1 to 800)
  AUTHORS   Mishima,H. and Shizuoka,T.
  TITLE     Direct Submission
  JOURNAL   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
REFERENCE   2
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     EST assembly of human
  JOURNAL   TSA Biol 12, 61-70 (2008)
COMMENT           
PRIMARY     TSA_SPAN            PRIMARY_IDENTIFIER PRIMARY_SPAN        COMP
            1-599               ZZ000004.1         2-598
            1-669               ZZ000005.1         11-679
            2-596               ZZ000006.1         1-595
            2-575               ZZ000007.1         1-574
            5-676               ZZ000008.1         1-672
            6-725               ZZ000009.1         1-720
            59-369              ZZ000010.1         13-322
            605-800             ZZ000011.1         1-196               c
            1451-1550           ZZ000003.1         201-300
FEATURES             Location/Qualifiers
     source          1..800
                     /db_xref="taxon:9606"
                     /mol_type="transcribed RNA"
                     /organism="Homo sapiens"
     CDS             73..669
                     /codon_start=1
                     /gene="GAPD"
                     /product="glyceraldehyde-3-phosphate dehydrogenase"
                     /protein_id="LZZ00001.1"
                     /transl_table=1
                     /translation="MWYQSLVIIEKLNLEANIGKLINTKDNINIRCRLSHTEEHSWHS
                     -- The rest of amino acid sequence is omitted -- "
BASE COUNT          199 a          203 c          198 g          200 t
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

<div id="Primary">

</div>

<div id="Features">

</div>

<div id="FeaturesSource">

</div>

<div id="CDS">

</div>

<div id="BaseCount">

</div>

<div id="Origin">

</div>

<div id="End">

</div>
