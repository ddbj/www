---
layout: indexed_content
title: HTG
pathname: htg
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
    url: /faq/ja/index.html?keyword%5B%5D=ddbj
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

DDBJ/ENA/GenBank の HTG division は finished
レベルに達していないゲノム配列を迅速に利用可能にするという科学界の需要に対応するために作られました。
HTG division には処理能力の高いゲノム解析センターから提供された finished
レベルに達していないゲノム配列データが含まれています。
配列が finished level に更新された後には、HTG ではなく、taxonomic lineage に基づく division
に移行します。

HTG 登録には、[Mass Submission System (MSS)](/ddbj/mss.html) をご利用ください。

HTG の登録における注意事項
:     
  - 登録に先立ち、[BioProject Database](/bioproject/index.html) へ登録し
    BioProject ID を取得してください。
  - [clone](/ddbj/qualifiers.html#clone) qualifier を記載してください。  
    基本的に HTG division への主な対象はfinished レベルに達していない BAC, YAC, fosmid
    cloneです。

## DDBJ フォーマットの例 <a name="flat-file"></a>

HTG の特徴

  - 配列が finished level と見做せる場合、[LOCUS](#LocusA) 行に表示される DIVISION は
    taxonomic lineage に基づいて、"HUM", "PRI", "ROD", "MAM", "VRT", "INV",
    "PLN", "BCT" の何れかになります。  
    配列が finished level ではない場合、DIVISION は、"HTG" です。
  - 配列が finished level と見做せる場合は、[KEYWORDS](#KeywordsA) 行には
    特に何も表示されません。  
    配列が finished level ではない場合、KEYWORDS には"HTG" および "HTGS\_PHASE0",
    "HTGS\_PHASE1", "HTGS\_PHASE2" の何れかが表示されます。
      - <span class="red">HTGS\_PHASE0</span>:
        １つの配列決定用サブクローン当たり、１回から数回読んだのみ
      - <span class="red">HTGS\_PHASE1</span>: unfinished で gap
        が残っており、contig の順序と向きが不明な箇所がある
      - <span class="red">HTGS\_PHASE2</span>: unfinished で gap
        が残っている場合も残っていない場合もあり、contig の順序と向きは判明している
  - さらに [KEYWORDS](#KeywordsA) 行に "HTGS\_DRAFT", "HTGS\_ENRICHED",
    "HTGS\_POOLED\_CLONE", "HTGS\_POOLED\_MULTICLONE" などが表示される場合もあります。
  - HTG では [DEFINITION](#DefinitionA) に "\*\*\* SEQUENCING IN PROGRESS
    \*\*\*" などの進捗を示す語句が示されることがあります。

<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">AP000000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file#SequenceLengthB">121001 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">DNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">HTG</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">15-OCT-2008</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  Arabidopsis thaliana DNA, chromosome 1, BAC clone: CIC5D1, ***
            SEQUENCING IN PROGRESS ***, 10 unordered pieces.
<a id="AccessionA" href="/ddbj/flat-file#AccessionB">ACCESSION</a>   AP000000
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     AP000000.1
<a id="DblinkA" href="/ddbj/flat-file#DblinkB">DBLINK</a>      BioProject:PRJDB04321
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    HTG; HTGS_PHASE1.
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      Arabidopsis thaliana (thale cress)
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  Arabidopsis thaliana
            Eukaryota; Viridiplantae; Streptophyta; Embryophyta; Tracheophyta;
            Spermatophyta; Magnoliophyta; eudicotyledons; core eudicotyledons;
            rosids; malvids; Brassicales; Brassicaceae; Camelineae;
            Arabidopsis.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 423)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>    Mishima,H., Yamada,T. and Liu,G.Q.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Yamada,T., Park,C.S. and Liu,G.Q.
  TITLE     Arabidopsis thaliana DNA
  JOURNAL   Unpublished (2008)
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..121001</a>
                     /<a href="/ddbj/qualifiers.html#chromosome">chromosome</a>="1"
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="CIC5D1"
                     /<a href="/ddbj/qualifiers.html#clone_lib">clone_lib</a>="AT01 BAC"
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:3702"
                     /<a href="/ddbj/qualifiers.html#ecotype">ecotype</a>="columbia"
                     /<a href="/ddbj/qualifiers.html#map">map</a>="between mi303 and mi259"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Arabidopsis thaliana"
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">2079..2128</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">7295..7344</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">15694..15743</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">32780..32829</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">40371..40420</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">59441..59490</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">79080..79129</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">88074..88123</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">107128..107177</a>
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>         105 a          98 c          112 g          108 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file#EndB">//</a></code></pre>
