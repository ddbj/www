---
layout: indexed_content
title: ENV

category: ddbj
current_tab: data_categories
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

DDBJ/ENA/GenBank の ENV division は 環境サンプル (environmental sample) 由来の配列と
その付帯情報からなるデータです。  
よく混同されますが、<span class="red">**環境サンプルとは「野生型」という意味ではありません**</span>。  
環境サンプルとは、生物種が同定できない大量の環境DNAサンプルに由来した配列です。PCR、DGGE、あるいは、その他の方法で直接、分子を単離した場合などが該当します。  
環境サンプルには以下を含みますが、下記で全てを網羅している訳ではありません。

  - 土壌、海水などから、直接、分子を単離したサンプル
  - 臨床系サンプル、腸の内容物、表皮上、その他、特定宿主に関連すると推測される種を同定できない生物
  - 環境サンプル由来の混合培養系

ただし、特定宿主から確実に回収できる内部共生生物、多くの cyanobacteria
のように容易に同定可能であるが培養ができない生物、純粋培養は不可能でも罹患植物から確実に回収できる
phytoplasmas といった対象は環境サンプルとは扱いません。

環境サンプルの登録における注意事項
:   
  - 例外もありますが、原則、判明している範囲での lineage に "uncultured" を冠して「生物名」を記載します。
    詳しくは、[Organism Qualifier について 3.
    環境サンプル](/ddbj/organism.html#env)を ご参照ください。
  - [source](/ddbj/features.html#source) feature に
    [environmental\_sample](/ddbj/qualifiers.html#environmental_sample)
    qualifier の記載が必須です。
  - [source](/ddbj/features.html#source) feature に
    [isolation\_source](/ddbj/qualifiers.html#isolation_source)
    qualifier の記載してサンプルの由来の概略を示す必要があります。
  - [clone](/ddbj/qualifiers.html#clone) あるいは
    [isolate](/ddbj/qualifiers.html#isolate) qualifier に識別子の記載が必要です。
  - [strain](/ddbj/qualifiers.html#strain) qualifier を記載することはできません。

## DDBJ フォーマットの例 <a name="flat-file"></a>

環境サンプル(ENV)の特徴

  - [LOCUS](/ddbj/flat-file#LocusB) 行に表示される DIVISION は、"ENV" です。
  - [KEYWORDS](/ddbj/flat-file#KeywordsB) 行には "ENV" が表示されます。
  - 例外もありますが、多くの場合、[ORGANISM](/ddbj/flat-file#OrganismB) 行の lineage には "environmental
    samples" が表示されます。

<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">AB000000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file#SequenceLengthB">450 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">mRNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">ENV</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">16-DEC-2012</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  Uncultured Acetobacter sp. gene for 16S ribosomal RNA, partial
            sequence, clone: M12-34.
<a id="AccessionA" href="/ddbj/flat-file#AccessionB">ACCESSION</a>   AB000000
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     AB000000.1
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    ENV.
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      uncultured Acetobacter sp.
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  uncultured Acetobacter sp.
            Bacteria; Proteobacteria; Alphaproteobacteria; Rhodospirillales;
            Acetobacteraceae; Acetobacter; environmental samples.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 450)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (15-DEC-2012) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Phylogenetic Profile of Sediment in Japan
  JOURNAL   Env Biol 12, 34-36 (2013)
<a id="CommentA" href="/ddbj/flat-file#CommentB">COMMENT</a>
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..450</a>
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="M12-34"
                     /<a href="/ddbj/qualifiers.html#country">country</a>="Japan:Osaka"
                     /db_xref="taxon:114714"
                     /<a href="/ddbj/qualifiers.html#environmental_sample">environmental_sample</a>
                     /<a href="/ddbj/qualifiers.html#isolation_source">isolation_source</a>="PCR-derived sequence from sediment"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="uncultured Acetobacter sp."
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location.html">&lt;1..&gt;450</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="16S ribosomal RNA"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          199 a          223 c          198 g           230 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 agtcgcacga aggtttcggc cttagtggcg gacgggtgag taacgcgtag gaatctatcc
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file#EndB">//</a></code></pre>
