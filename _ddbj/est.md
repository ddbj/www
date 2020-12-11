---
layout: tabbed_indexed_content
title: EST
service_name: DDBJ Annotated/Assembled Sequences
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

DDBJ/ENA/GenBank の EST division "Expressed Sequence Tags" は様々な生物に由来する
"single-pass" cDNA 配列 (つまり mRNA, RNA 転写産物) と その付帯情報からなる配列データです。

EST 登録には、[Mass Submission System (MSS)](/ddbj/mss.html) をご利用ください。

EST 登録における注意事項
:     
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

## DDBJ フォーマットの例 <a name="flat-file"></a>

EST エントリの特徴

  - 原則として、source feature 以外の [feature](/ddbj/flat-file#FeaturesB) は記載されません。

  - [LOCUS](/ddbj/flat-file#LocusB) 行に表示される DIVISION は、"EST" です。

  - [KEYWORDS](/ddbj/flat-file#KeywordsB) 行には "EST" と次のいずれかが表示されます。
    
    以下の controlled vocabulary は EST を得る際の手法、strategy を示すものであり、実際に RNA
    transcript の 5' 末端、または、3' 末端に相当する配列であることを保証するものではありません。
    
    | 5'EST の場合   | 5'-end sequence (5'-EST) |
    | 3'EST の場合   | 3'-end sequence (3'-EST) |
    | 上記を特定できない場合 | unspecified EST          |

  - [COMMENT](/ddbj/flat-file#CommentB) 行には，登録される塩基配列が anti-sense 鎖側，sense
    鎖側のどちらであるかを示すため，次のいずれかを COMMENT に記載します。
    
    3'EST 登録の場合にのみ該当します。
    
    | anti-sense 鎖を登録する場合 | 3'-EST sequences are presented as anti-sense strand. |
    | sense 鎖を登録する場合      | 3'-EST sequences are presented as sense strand.      |
    
<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">HY000000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file#SequenceLengthB">300 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">mRNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">EST</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">15-OCT-2008</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  Mus musculus mRNA, clone: 2310009A01, 3' end sequence, expressed 
            in tongue.
<a id="AccessionA" href="/ddbj/flat-file#AccessionB">ACCESSION</a>   HY000000
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     HY000000.1
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    EST; 3'-end sequence (3'-EST).
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      Mus musculus (house mouse)
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  Mus musculus
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Glires; Rodentia;
            Sciurognathi; Muroidea; Muridae; Murinae; Mus; Mus.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 300)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H., Yamada,T. and Liu,G.Q.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Yamada,T., Park,C.S. and Liu,G.Q.
  TITLE     Mus musculus EST
  JOURNAL   Unpublished (2008)
<a id="CommentA" href="/ddbj/flat-file#CommentB">COMMENT</a>             3'-EST sequences are presented as anti-sense strand.
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..300</a>
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="2310009A01"
                     /<a href="/ddbj/qualifiers.html#clone_lib">clone_lib</a>="full-length enriched mouse cDNA library A01"
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:10090"
                     /<a href="/ddbj/qualifiers.html#dev_stage">dev_stage</a>="adult"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Mus musculus"
                     /<a href="/ddbj/qualifiers.html#sex">sex</a>="male"
                     /<a href="/ddbj/qualifiers.html#tissue_type">tissue_type</a>="tongue"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          86 a          90 c          73 g           51 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file#EndB">//</a></code></pre>
