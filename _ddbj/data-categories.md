---
layout: indexed_content
title: データの種類
pathname: data-categories
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

## [Division](/ddbj/flat-file.html#Division) conventional sequence data <a name="division"></a>

### 通常の登録: 由来生物種による区分 <a name="general"></a>

完成したゲノム配列を含めて一般的な登録データは、ここに属します。  
source feature と、それ以外に最低 1 つ [Biological feature](/ddbj/file-format.html#biological_feature) の記載が必要となります。  
由来する生物の系統分類に基づいて自動的に下記の DIVISION に振り分けられます。

| Division | Description             |
| -------- | ----------------------- |
| HUM      | ヒト                      |
| PRI      | 霊長類(ヒトを除く)              |
| ROD      | 齧歯類                     |
| MAM      | 哺乳類(ヒト、霊長類、齧歯類を除く)      |
| VRT      | 脊椎動物(ヒト、霊長類、齧歯類、哺乳類を除く) |
| INV      | 無脊椎動物                   |
| PLN      | 植物・真菌類など                |
| BCT      | バクテリア                   |
| VRL      | ウィルス                    |
| PHG      | ファージ                    |

### ENV/SYN: 由来生物種を特定できない場合、環境サンプルと合成配列 <a name="env"></a>

環境サンプル、および、人為的な操作により構築された配列は、それぞれ、[ENV](/ddbj/env.html)、SYN と DIVISION を記載し区別します。  
source feature と、それ以外に最低1つの [Biological feature](/ddbj/file-format.html#biological_feature) による特徴づけが必要となります。

|  Division  |  Description  |
| ---- | ---- |
|  ENV  |  PCR, DGGE, あるいは、その他の方法で直接、分子を単離した環境上のサンプルに由来した配列。<br/> ENV の場合は source feature に [environmental_sample qualifier](/ddbj/qualifiers.html#environmental_sample) を記載する必要があります。  |
|  SYN  |  人為的な操作により構築された合成配列<br/>SYN は合成配列、例えば発現ベクターの配列、プライマーの配列、キメラ配列、fusion 配列、人為的に変異を導入した配列などが該当します。複数の生物種や遺伝子由来の断片をつなぎ合わせた合成配列では、各々の配列の由来を示すために複数の source feature を使用して記載する場合があります。<br/>[登録の見本; E05) synthetic construct](/ddbj/example.html#E05) もご参照ください。  |

### EST/GSS/HTC/HTG/STS: 配列決定の確度 あるいは 目的による区別 <a name="est"></a>

EST に代表される大量解析、長大なゲノム配列の決定の途上、などの配列を以下に示す DIVISION に区別します。  
生物学的な特徴づけは source feature のみを基本とします。  
ただし、HTC、HTG には研究段階に応じて記載する情報が異なりますが、通常の登録と同様に [Biological features](/ddbj/file-format.html#biological_feature) を記載することも可能です。  
それぞれのデータに関する説明ページも合わせてご覧ください。

|  Division  |  Description  |
| ---- | ---- |
|  [EST](/ddbj/est.html)  |  expressed sequence tags; short single pass の cDNA 配列。  |
|  [GSS](/ddbj/gss.html)  |  genome survey sequences; short single pass のゲノム配列。  |
|  STS  |  sequence tagged sites; genome sequencing の tag となる配列。<br/>ゲノム上の位置情報、[primer_bind](/ddbj/features.html#primer_bind)  feature, [PCR_conditions](/ddbj/qualifiers.html#PCR_conditions)  qualifier などの記載を推奨します。  |
|  [HTC](/ddbj/htc.html)  |  high throughput cDNA sequences; EST 以外の大規模 cDNA 配列プロジェクトにする配列。<br/> full length cDNA 解析途上の配列なども含めます。  |
|  [HTG](/ddbj/htg.html)  |  high throughput genomic sequences; ゲノムプロジェクトに由来し、頻繁に update されることが期待される配列。<br/> [Genome Project の各段階と登録データの種別](/ddbj/genome.html) もご参照ください。<br/>HTG の unfinished 配列は段階に応じて以下の 3 phase に分類されます。{::nomarkdown}<ul><li>phase0；piece contig が構築される以前の配列</li><li>phase1；構築された piece contig の向きや順序が未確定の配列</li><li>phase2；piece contig の向きや順序が確定した unfinished の配列</li></ul>{:/}  |

### CON: Contig / Constructed 配列のタイリング <a name="con"></a>

HTG または WGS などを基本としたゲノムプロジェクトでは、個々に登録された一連の配列データを相互に結合し、ゲノム構造を再構築するための情報が必要になります。そのようなタイリング情報に対して、１つのアクセッション番号を割り当てて特殊なエントリとして登録を受け付けています。このようなエントリを [CON エントリ](/ddbj/con.html)と呼び、CON division に格納します。  
[Genome Project の各段階と登録データの種別](/ddbj/genome.html) もご参照ください。

<span class="red">CON エントリ のみの登録は受け付けておりません。</span>  
まず、CON エントリを構成する個々のピースエントリを登録していただきます。その上で CON エントリを構築します。  
CON エントリの登録には [AGP ファイル](/ddbj/file-format.html#agp) が必要です。

## Data type bulk sequence data <a name="data_type"></a>

### WGS; Whole Genome Shotgun ゲノムの概要配列 <a name="wgs"></a>

ホールゲノムショットガン配列決定法を用いて全ゲノム配列を決定するゲノムプロジェクトに由来する整理が不十分な段階の大量の DNA 断片の bulk sequence data を [WGS](/ddbj/wgs.html)として受け付けています。  
WGS データは他のデータと[アクセッション番号の書式](/ddbj/flat-file.html#Accession)が異なります。  
[Genome Project の各段階と登録データの種別](/ddbj/genome.html) もご参照ください。

### TSA: Transcriptome Shotgun Assembly

2008 年からアセンブルされた RNA transcript の bulk sequence data を [Transcriptome Shotgun Assembly (TSA)](/ddbj/tsa.html) として受け付けています。  
生物学的な特徴づけは source feature のみを基本とします。  
ただし、通常の登録と同様に [Biological features](/ddbj/file-format.html#biological_feature)を記載することも可能です。  
TSA データは他のデータと[アクセッション番号の書式](/ddbj/flat-file.html#Accession)が異なることがあります。  
[Transcriptome Project の各段階と登録データの種別](/ddbj/transcriptome.html) もご参照ください。

### TLS: Targeted Locus Study <a name="tls"></a>

2016 年から 16S rRNA または、他の特定 locus を標的とした配列で構成され、主として operational taxonomic unit クラスター化に用いられる bulk sequence data を [TLS (Targeted Locus Study)](/ddbj/tls.html) として受け付けています。  
通常の登録と同様に [Biological features](/ddbj/file-format.html#biological_feature)を記載することも可能です。  
TLS データは他のデータと[アクセッション番号の書式](/ddbj/flat-file.html#Accession)が異なります。

## 配列決定 <a name="whom"></a>

### TPA: 第三者再構築 または アノテーション <a name="tpa"></a>

[TPA (Third Party Data)](/ddbj/tpa.html) は, DDBJ/EMBL-Bank/GenBank、[Trace Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi)、もしくは、Sequence Read Archiveに既に登録されているエントリ (これをプライマリーエントリと呼びます) を元に, 第三者がアセンブル (assemble), もしくは, (再)アノテーションを行ったデータのコレクションです。配列のアセンブルには, 既存のプライマリーエントリの組み合わせのみで構成された場合と, 新規に TPA の登録者が実験的に決定した配列を混在させた場合とが存在します。DDBJ/EMBL-Bank/GenBank では, 既報のプライマリーエントリに記載されている配列に関する研究を公開するための手段として TPA 登録を受け入れています。  
[TPA Submission Guidelines](/ddbj/tpa-table.html) もご参照ください。

{::options parse_block_html="true" /}
<div class="attention">

登録予定の塩基配列データをどのように登録すべきか不明な場合は以下をご参照ください。

  - [Genome Project の各段階と登録データの種別](/ddbj/genome.html)
  - [Transcriptome Project の各段階と登録データの種別](/ddbj/transcriptome.html)
  - [Division の詳細](/ddbj/flat-file.html#Division)

[Mass Submission System (MSS)](/ddbj/mss.html) の場合、登録時に DATATYPE, DIVISION, KEYWORD の記載に基づいて、データ種別を区別しています。

</div>