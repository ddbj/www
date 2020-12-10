---
layout: indexed_content
title: WGS
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

様々な生物においてホールゲノムショットガン配列決定法（whole genome shotgun:
ゲノム全体を物理的に断片化し、シークエンサで各断片の塩基配列を決定した後、コンピューター・プログラムを用いて整理、アセンブルして完成させる手法）を用いて全ゲノム配列を決定するゲノムプロジェクトが進められています。

DDBJ/ENA/GenBank では、そのようなゲノムプロジェクトに由来する、整理が不十分な段階の大量の DNA 断片の配列を、WGS
データとして受け付けています。  
[INSDC standards for genome assembly
submission](/ddbj/assembly.html)もご参照ください。

[公開されているWGSデータ](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/wgs/WGS_ORGANISM_LIST.html)

WGSデータの登録は [Mass Submission System (MSS)](/ddbj/mss.html) で受け付けております。

<dl>
  <dt>WGS データとして登録可能なデータ</dt>
  <dd>原則、冗長な raw read sequences ではなく、ある程度 計算機処理を経た contigs (overlapping reads) の配列を受付けます。冗長な raw read sequences を公表することが必要な場合は、DDBJ/ENA/GenBank とは別枠のデータベースである <a href="/dra/index.html">DDBJ Sequence Read Archive (DRA)</a>をご利用ください。</dd>
  <dd>
    <ul>
      <li>登録に先立ち、<a href="/bioproject/index.html">BioProject Database</a> と <a href="/biosample/index.html">BioSample Database</a> への登録が必要です。</li>
      <li>assembly 過程を表現する WGS の登録には２種類の方法があります。
        <dl>
          <dt>a) WGS + scaffold CON:</dt>
          <dd>各 contig (overlapping reads) の配列を WGS entry として登録します。</dd>
          <dd>WGS 配列には sequencing gap を表現する連続した"n"を含むことはできません。</dd>
          <dd>gap を含めた連結構造の記載が必要な場合、<a href="/ddbj/file-format.html#agp">AGP ファイル</a>による登録が可能です。<br>
            scaffold (assembled contigs separated by gaps) を <a href="/ddbj/con.html">CON</a> entry として WGS の連結を表現する形式で登録を受付けます。</dd>
          <dt>b) WGS with gaps:</dt>
          <dd>各 scaffold (assembled contigs separated by gaps) の配列を WGS entry として登録します。</dd>
          <dd>sequencing gap を連続した"n"として WGS 配列に含めて記載します。</dd>
          <dd>
<a href="/ddbj/file-format.html#agp">AGP ファイル</a>は必要ありません。</dd>
        </dl>
      </li>
    </ul>
  </dd>
</dl>

## DDBJ フォーマットの例 <a name="flat-file"></a>

WGS エントリの特徴

  - [アクセッション番号](#AccessionA) は アルファベット 4 文字と数字 8
    桁 を基本とします。
  - [KEYWORDS](#KeywordsA) 行には "WGS" とゲノムとしての完成度を示す規定値が表示されます。

<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">ZZZZ01000001</a>              <a id="SequenceLengthA" href="/ddbj/flat-file#SequenceLengthB">123456 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">DNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">HUM</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">01-MAY-2003</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  Homo sapiens DNA, chromosome 7, A01234B01. 
<a id="AccessionA" href="/ddbj/flat-file#AccessionB">ACCESSION</a>   ZZZZ01000001 ZZZZ01000000
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     ZZZZ01000001.1
<a id="DblinkA" href="/ddbj/flat-file#DblinkB">DBLINK</a>      BioProject:PRJDA12345
            BioSample:SAMD01234567
            Sequence Read Archive:DRR012345, DRR012346
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    WGS; STANDARD_DRAFT.
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      Homo sapiens
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 123456)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (01-APR-2003) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Human whole genome shotgun sequence
  JOURNAL   Unpublished (2003)
<a id="CommentA" href="/ddbj/flat-file#CommentB">COMMENT</a>     Whole genome shotgun sequencing project.
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..123456</a>
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers.html#chromosome">chromosome</a>="7"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens"
                     /<a href="/ddbj/qualifiers.html#submitter_seqid">submitter_seqid</a>="A01234B01"

-- The rest is snipped --
<a id="EndA" href="/ddbj/flat-file#EndB">//</a></code></pre>
