---
layout: indexed_content
title: TSA
pathname: tsa
category: ddbj
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /ddbj/index.html
  - id: submission
    title: Submission
    url: /ddbj/submission.html
    children:
      - title: 塩基配列の登録
        url: /ddbj/submission.html
      - title: Web 版塩基配列登録システム
        url: /ddbj/web-submission.html
      - title: Mass Submission System
        url: /ddbj/mss.html
      - title: 登録データの修正・更新
        url: /ddbj/update.html
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/arsa/?lang=ja
    children:
      - title: getentry
        url: http://getentry.ddbj.nig.ac.jp/top-j.html
      - title: ARSA
        url: http://ddbj.nig.ac.jp/arsa/?lang=ja
  - id: flat_file
    title: Flat file
    url: /ddbj/flat-file.html
    children:
      - title: Feature key の定義
        url: /ddbj/features.html
      - title: Qualifier key の定義
        url: /ddbj/qualifiers.html
      - title: Organism qualifier に記載する生物名
        url: /ddbj/organism.html
      - title: Location の記述法
        url: /ddbj/location.html
      - title: タンパク質コード配列
        url: /ddbj/cds.html
      - title: The Genetic Codes
        url: /ddbj/geneticcode.html
      - title: 配列の記載に用いる略号
        url: /ddbj/code.html
      - title: 登録の見本
        url: /ddbj/example.html
  - id: data_categories
    title: Data categories
    url: /ddbj/data-categories.html
    children:
      - title: Genome project のデータ登録
        url: /ddbj/genome.html
      - title: Pseudohaplotype
        url: /ddbj/pseudohaplotype.html
      - title: WGS
        url: /ddbj/wgs.html
      - title: メタゲノムアセンブリ
        url: /ddbj/metagenome-assembly.html
      - title: Single amplified genome
        url: /ddbj/single-amplified-genome.html
      - title: CON
        url: /ddbj/con.html
      - title: GSS
        url: /ddbj/gss.html
      - title: HTG
        url: /ddbj/htg.html
      - title: Environmental sequence の登録
        url: /ddbj/environmental.html
      - title: ENV
        url: /ddbj/env.html
      - title: TLS
        url: /ddbj/tls.html
      - title: Transcriptome Project のデータ登録
        url: /ddbj/transcriptome.html
      - title: TSA
        url: /ddbj/tsa.html
      - title: EST
        url: /ddbj/est.html
      - title: HTC
        url: /ddbj/htc.html
      - title: Third Party Data (TPA)
        url: /ddbj/tpa.html
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?tags%5B%5D=ddbj
  - id: other
    title: Other
    url: /ddbj/index-e.html
    children:
      - title: Patent
        url: /ddbj/patent-data.html
      - title: MGA
        url: /ddbj/mga.html
lang: ja
related_pages:
  - title: Genome Project のデータ登録
    url: /ddbj/genome.html
  - title: WGS
    url: /ddbj/wgs.html
  - title: CON
    url: /ddbj/con.html
  - title: GSS
    url: /ddbj/gss.html
  - title: HTG
    url: /ddbj/htg.html
  - title: Environmental sequence の登録
    url: /ddbj/environmental.html
  - title: ENV
    url: /ddbj/env.html
  - title: TLS
    url: /ddbj/tls.html
  - title: Transcriptome Project のデータ登録
    url: /ddbj/transcriptome.html
  - title: TSA
    url: /ddbj/tsa.html
  - title: EST
    url: /ddbj/est.html
  - title: HTC
    url: /ddbj/htc.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa.html
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

TSA 登録における注意事項
:     
  - 登録に先立ち、[BioProject Database](/bioproject/index.html) と [BioSample Database](/biosample/index.html) への登録が必要です。
  - ２種以上の生物から得られた [プライマリーエントリ](#definition_of_primary) の assembly は受け付けることができません。ただし、環境サンプル様の対象に由来する Transcriptome Shotgun Assembly は登録可能です。
  - TSA データの登録には、アセンブリの元となる[プライマリーエントリ](#definition_of_primary)が既に DDBJ/ENA/GenBank の [EST division](/ddbj/est.html)、[DDBJ Trace Archive](/dta/index.html)、[DDBJ Read Archive](/dra/index.html) の何れかに登録されている必要があります。
  - [EST division](/ddbj/est.html) または [DDBJ Trace Archive](/dta/index.html) のみの引用で構成される場合、[プライマリーエントリ](#definition_of_primary)の配列群と、結果として構築された配列との対応付けのために、[PRIMARY](#PrimaryA) 行に両者の位置情報を記載します。 [DDBJ Read Archive](/dra/index.html) を引用する場合は、DRA の run accession number を [DBLINK](#DblinkA) 行に記載します。
  - 発現条件に相当する 組織 ([tissue\_type](/ddbj/qualifiers.html#tissue_type))、発生段階 ([dev\_stage](/ddbj/qualifiers.html#dev_stage))、性別 ([mating\_type](/ddbj/qualifiers.html#mating_type) または [sex](/ddbj/qualifiers.html#sex))、などの qualifier の記載を推奨します。ただし、異なる条件に由来する対象を引用して構築された場合は記載できません。
  - 登録前に low quality reads, chimeric sequences の除去を行っておいてください。

TSA におけるプライマリーエントリの定義<a name="definition_of_primary"></a>
: プライマリーエントリとは、DDBJ/ENA/GenBank、[Trace Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi)、[Sequence Read Archive](https://www.ncbi.nlm.nih.gov/Traces/sra/sra.cgi) の何れかから取得可能なデータであり、当該エントリの登録者が実験的に配列決定を行った RNA 配列データです。
    
: TSA 登録の時点では、プライマリーエントリが非公開でも問題ありませんが、TSA の公開時には、プライマリーエントリ取得・閲覧可能な状態である必要があります。

TSA とプライマリーエントリの配列アラインメントに関する規則
:     
  - TSA エントリの領域は単一の EST、もしくは、read からアセンブル可能であり、1x coverage でも構いません。
  - paired end sequences などを根拠として gap 領域を挟んでアセンブルされている場合、配列中では連続した n として記載可能です。ただし、その gap 領域は[assembly\_gap](/ddbj/features.html#assembly_gap) feature で示されていなければなりません。
  - [assembly\_gap](/ddbj/features.html#assembly_gap) feature を記載していない領域の配列における曖昧さの制限
    1. 'n' で示される塩基は 5% より少ないこと
    2. 連続した 'n' で示される区間が 5 塩基以下であること

## DDBJ フォーマットの例 <a name="flat-file"></a>

TSA エントリの特徴

  - [アクセッション番号](#AccessionA) は アルファベット 4 文字と数字 8 桁を基本 とします。
  - [LOCUS](#LocusA) 行に表示される DIVISION は、"TSA" です。
  - [DEFINITION](#DefinitionA) 行は "TSA:" で始まります。
  - [KEYWORDS](#KeywordsA) 行には "TSA" と "Transcriptome Shotgun Assembly"
    が表示されます。
  - [PRIMARY](#PrimaryA) 行には、引用されたプライマリーエントリの配列領域と、これに対応する TSA
    配列の領域が記載されます。

[DDBJ Read Archive](/dra/index.html) を引用した例

<pre><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">IZZY01000001</a>              <a id="SequenceLengthA" href="/ddbj/flat-file#SequenceLengthB">800 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">mRNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">TSA</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">15-OCT-2015</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  TSA: Mus musculus RNA, contig1_1.
<a id="AccessionA" href="/ddbj/flat-file#AccessionB">ACCESSION</a>   IZZY01000001
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     IZZY01000001.1
<a id="DblinkA" href="/ddbj/flat-file#DblinkB">DBLINK</a>      BioProject:PRJDA43210
            Sequence Read Archive: DRR900001
            BioSample: SAMD98765431
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    TSA; Transcriptome Shotgun Assembly.
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      Mus musculus (house mouse)
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  Mus musculus
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Glires; Rodentia;
            Sciurognathi; Muroidea; Muridae; Murinae; Mus; Mus.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 800)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Transcriptome shotgun assembly of mouse
  JOURNAL   TSA Biol 12, 61-70 (2015)
<a id="CommentA" href="/ddbj/flat-file#CommentB">COMMENT</a>     ##Assembly-Data-START##
            Assembly Method       :: Velvet v.1.1.05
            Sequencing Technology :: Illumina GAIIx
            ##Assembly-Data-END##            
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..800</a>
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:10090"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="transcribed RNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Mus musculus"
                     /<a href="/ddbj/qualifiers.html#submitter_seqid">submitter_seqid</a>="contig1_1"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          199 a          203 c          198 g          200 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file#EndB">//</a></code></pre>

[EST](/ddbj/est.html) を引用した例

<pre class="code flat-file"><code><a href="/ddbj/flat-file#LocusB">LOCUS</a>       <a href="/ddbj/flat-file#LocusNameB">IZZY01000001</a>              <a href="/ddbj/flat-file#SequenceLengthB">800 bp</a>    <a href="/ddbj/flat-file#MoleculeTypeB">mRNA</a>    <a href="/ddbj/flat-file#ModificationDateB">linear</a>   <a href="/ddbj/flat-file#DivisionB">TSA</a> <a href="/ddbj/flat-file#ModificationDateB">15-OCT-2015</a>
<a href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  TSA: Homo sapiens GAPD mRNA for glyceraldehyde-3-phosphate
            dehydrogenase, complete cds.
<a href="/ddbj/flat-file#AccessionB">ACCESSION</a>   IZZY01000001
<a href="/ddbj/flat-file#VersionB">VERSION</a>     IZZY01000001.1
<a href="/ddbj/flat-file#DblinkB">DBLINK</a>      BioProject:PRJDA43211
            BioSample: SAMD98765433
<a href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    TSA; Transcriptome Shotgun Assembly.
<a href="/ddbj/flat-file#SourceB">SOURCE</a>      Homo sapiens (human)
  <a href="/ddbj/flat-file#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 800)
  <a href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     EST assembly of human
  JOURNAL   TSA Biol 12, 61-70 (2008)
<a href="/ddbj/flat-file#CommentB">COMMENT</a>           
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
<a href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a href="/ddbj/flat-file#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..800</a>
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="transcribed RNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens"
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">73..669</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="GAPD"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="glyceraldehyde-3-phosphate dehydrogenase"
                     /<a href="/ddbj/qualifiers.html#protein_id">protein_id</a>="LZZ00001.1"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="MWYQSLVIIEKLNLEANIGKLINTKDNINIRCRLSHTEEHSWHS
                     -- The rest of amino acid sequence is omitted -- "
<a href="#BaseCountB">BASE COUNT</a>          199 a          203 c          198 g          200 t
<a href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a href="/ddbj/flat-file#EndB">//</a></code></pre>
