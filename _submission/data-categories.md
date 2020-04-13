---
layout: indexed_content
title: 登録データ種別
service_link: https://www.ddbj.nig.ac.jp/data-categories.html
category: submission
---

# 登録データ種別

## DDBJ に登録可能なデータ {#accept}

DDBJ では, [Primary entry](/ddbj/submission.html#primary_entry)
のデータとして登録依頼のあったデータにつきましては,
２次的な引用やコンピューターで予測したものでなく,
登録者が実験的に決定した, もしくは,
企業等からその配列の使用権を得たものであれば, 原則, 受け付けています。

配列が全く同じでも, 独立に配列が決定されたデータならば,
\"新規データ\"として別々にDDBJ に登録可能です。

また, DDBJ/EMBL-Bank/GenBank では, 既に報告されている primary data
を２次的に引用し, 生物学的付加情報を付与し直す目的で [TPA(third party
data)](/ddbj/tpa.html) を受け付けています。

その上で一定の基準を満たしていればすべて登録し,
アクセッション番号を発行しています。もし一定の基準を満たしていない場合は,
訂正をお願いして再度送付していただいています。

SNPs, [WGS](/ddbj/wgs.html#acceptance), [transcriptome](/ddbj/tsa.html)
解析などにおいて raw output data を公表することが必要な場合は,
DDBJ/EMBL-Bank/GenBank とは別枠のデータベースである [DTA; DDBJ Trace
Archive](/dta/index.html), または [DRA; DDBJ Sequence Read
Archive](/dra/index.html) へのご登録をお願いいたします。

参照：[登録データの 取り扱いについて](/insdc.html#policy)

### 配列が同一, あるいは, 部分的に重複するデータの登録

DDBJ では, 配列が同一であっても独立に配列決定されたデータならば,
基本的には,
配列データの個別登録を受け付けております。[多型関連研究において同一配列が多数得られた場合](/ddbj/represent.html)は代表データを登録する形式でも
受け付けています。

由来する個体などを含めて同一な場合,
配列データを繰り返し新規登録するよりも既登録分を更新することを強く推奨しますが,
配列に関する権利, 配列決定の進捗などを考える上で,
複数回の登録が必要なケースもありますので, 特に禁じてはおりません。

## 配列データ {#real}

### アノテーションを付与した/アセンブルした塩基配列 {#ann}

[DDBJ Annotated/Assembled Sequences](/ddbj/index.html)
:   狭義の DDBJ。GenBank, EMBL-Bank (ENA) に相当し、feature annotation
    を記載した配列データを[フラットファイル](/ddbj/flat-file.html)として提供。
:   DDBJ の配列データの詳細な分類は「[Annotated/Assembled
    データの区分](#detail)」をご覧ください。

::: {.attention .no_color}
登録予定の塩基配列データをどのように登録すべきか不明な場合は以下をご参照ください。

-   [Genome Project の各段階と登録データの種別](/ddbj/genome.html)
-   [Transcriptome Project
    の各段階と登録データの種別](/ddbj/transcriptome.html)
-   [Division の詳細](/ddbj/flat-file.html#Division)
-   [Annotated/Assembled データの区分](#detail)

[Mass Submission System (MSS)](/ddbj/mss.html) の場合、登録時に
[DATATYPE, DIVISION, KEYWORD](/ddbj/file-format.html#annotation)
の記載に基づいて、データ種別を区別しています。
:::

### 次世代シークエンスデータ {#ngs}

[DRA: DDBJ Sequence Read Archive](/dra/index.html)
:   次世代シークエンサからの出力データとアライメントデータのためのデータベース。従来
    Trace Archive
    で受付けていたサンガー式シークエンスの配列，Quality，クロマトグラムデータも
    DRA で受け付けています。

### 機能ゲノミクスデータ {#fg}

[Genomic Expression Archive (GEA)](/gea/index.html)
:   遺伝子発現、エピジェネティクスやジェノタイピング SNP
    アレイ等の機能ゲノミクスデータの登録先。

## プロジェクト {#project}

[BioProject](/bioproject/index.html)
:   研究プロジェクトとプロジェクトに由来するデータをまとめるためのデータベース。\
    ウイルス、プラスミド、オルガネラのみの場合を除く[全ゲノム規模配列](/ddbj/genome.html),
    [WGS](/ddbj/wgs.html), [TLS](/ddbj/tls.html), [TSA](/ddbj/tsa.html)
    の登録の際は、登録が義務付けられています。

## サンプル {#project}

[BioSample](/biosample/index.html)
:   実験データを得るために使用された生物学的な試料 (サンプル)
    についての情報を集中して管理するデータベース。

## アクセス制限が必要なヒトデータの登録 {#control}

[JGA: Japanese Genotype-phenotype Archive](/jga/index.html)
:   個人に由来するアクセス制限が必要な遺伝学的なデータと表現型情報の登録。

## Annotated/Assembled データの区分 {#detail}

### [Division](/ddbj/flat-file.html#Division) conventional sequence data {#division}

#### 通常の登録: 由来生物種による区分 {#geeral .bold}

完成したゲノム配列を含めて一般的な登録データは、ここに属します。\
source feature と、それ以外に最低 1 つ [Biological
feature](/ddbj/file-format.html#biological_feature)
の記載が必要となります。\
由来する生物の系統分類に基づいて自動的に下記の DIVISION
に振り分けられます。

::: {.news_post_container .glossary}
  Division   Description
  ---------- ----------------------------------------------
  HUM        ヒト
  PRI        霊長類(ヒトを除く)
  ROD        齧歯類
  MAM        哺乳類(ヒト、霊長類、齧歯類を除く)
  VRT        脊椎動物(ヒト、霊長類、齧歯類、哺乳類を除く)
  INV        無脊椎動物
  PLN        植物・真菌類など
  BCT        バクテリア
  VRL        ウィルス
  PHG        ファージ
:::

#### ENV/SYN: 由来生物種を特定できない場合、環境サンプルと合成配列 {#env .bold}

環境サンプル、および、人為的な操作により構築された配列は、それぞれ、[ENV](/ddbj/env.html)、SYN
と DIVISION を記載し区別します。\
source feature と、それ以外に最低 1 つの [Biological
feature](ddbj/file-format.html#biological_feature)
による特徴づけが必要となります。

::: {.news_post_container .glossary}
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Division                            Description
  ----------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------
  [ENV](/ddbj/env.html)               PCR, DGGE, あるいは、その他の方法で直接、分子を単離した環境上のサンプルに由来した配列。\
                                      ENV の場合は source feature に [environmental\_sample qualifier](/ddbj/qualifiers.html#environmental_sample) を記載する必要があります。

  SYN                                 人為的な操作により構築された合成配列\
                                      SYN は合成配列、例えば発現ベクターの配列、プライマーの配列、キメラ配列、fusion
                                      配列、人為的に変異を導入した配列などが該当します。複数の生物種や遺伝子由来の断片をつなぎ合わせた合成配列では、各々の配列の由来を示すために複数の
                                      source feature を使用して記載する場合があります。\
                                      [登録の見本; E05) synthetic construct](/ddbj/example.html#E05) もご参照ください。
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
:::

#### EST/GSS/HTC/HTG/STS: 配列決定の確度、あるいは、目的による区別 {#est .bold}

EST
に代表される大量解析、長大なゲノム配列の決定の途上、などの配列を以下に示す
DIVISION に区別します。\
生物学的な特徴づけは source feature のみを基本とします。\
ただし、HTC、HTG には研究段階に応じて記載する情報が異なりますが
通常の登録と同様に [Biological
features](ddbj/file-format.html#biological_feature)
を記載することも可能です。\
それぞれのデータに関する説明ページも合わせてご覧ください。

::: {.news_post_container .glossary}
+-----------------------------------+-----------------------------------+
| Division                          | Description                       |
+===================================+===================================+
| [EST](/ddbj/est.html)             | expressed sequence tags; short    |
|                                   | single pass の cDNA 配列。        |
+-----------------------------------+-----------------------------------+
| [GSS](/ddbj/gss.html)             | genome survey sequences; short    |
|                                   | single pass のゲノム配列。        |
+-----------------------------------+-----------------------------------+
| STS                               | sequence tagged sites; genome     |
|                                   | sequencing の tag となる配列。\   |
|                                   | ゲノム上の位置情報、[primer\_bind] (/ddbj/features.html#primer_bind)feature,[PCR\_conditions](/ddbj/qualifiers.html#PCR_conditions)qualifier などの記載を推奨します。   |
|                                   | (/ddbj/features.html#primer_bind) |
|                                   | feature,                          |
|                                   | [PCR\_conditions](/ddb            |
|                                   | j/qualifiers.html#PCR_conditions) |
|                                   | qualifier                         |
|                                   | などの記載を推奨します。          |
+-----------------------------------+-----------------------------------+
| [HTC](/ddbj/htc.html)             | high throughput cDNA sequences;   |
|                                   | EST 以外の大規模 cDNA             |
|                                   | 配列プロジェクトにする配列。\     |
|                                   | full length cDNA                  |
|                                   | 解析途上の配列なども含めます。    |
+-----------------------------------+-----------------------------------+
| [HTG](/ddbj/htg.html)             | high throughput genomic           |
|                                   | sequences;                        |
|                                   | ゲ                                |
|                                   | ノムプロジェクトに由来し、頻繁に  |
|                                   | update                            |
|                                   | されることが期待される配列。\     |
|                                   | [Genome Project                   |
|                                   | の各段階と登録                    |
|                                   | データの種別](/ddbj/genome.html)  |
|                                   | もご参照ください。\               |
|                                   | HTG の unfinished                 |
|                                   | 配列は段階に応じて以下の 3 phase  |
|                                   | に分類されます。                  |
|                                   |                                   |
|                                   | -   phase0；piece contig          |
|                                   |     が構築される以前の配列        |
|                                   | -   phase1；構築された piece      |
|                                   |     contig                        |
|                                   |     の向きや順序が未確定の配列    |
|                                   | -   phase2；piece contig          |
|                                   |     の向きや順序が確定した        |
|                                   |     unfinished の配列             |
+-----------------------------------+-----------------------------------+
:::

#### CON: Contig / Constructed 配列のタイリング {#con .bold}

[HTG](/ddbj/htg.html) 、または、[WGS](/ddbj/wgs.html)
などを基本としたゲノムプロジェクトでは、個々に登録された一連の配列データを相互に結合し、ゲノム構造を再構築するための情報が必要になります。そのようなタイリング情報に対して、１つのアクセッション番号を割り当てて特殊なエントリとして登録を受け付けています。このようなエントリを
[CON エントリ](/ddbj/con.html)と呼び、CON division に格納します。\
[Genome Project の各段階と登録データの種別](/ddbj/genome.html)
もご参照ください。

[CON エントリ のみの登録は受け付けておりません。]{.red}\
まず、CON
エントリを構成する個々のピースエントリを登録していただきます。その上で
CON エントリを構築します。\
CON エントリの登録には [AGP ファイル](/ddbj/file-format.html#agp)
が必要です。

### Data type bulk sequence data {#data_type}

#### WGS: Whole Genome Shotgun ゲノムの概要配列 {#wgs .bold}

ホールゲノムショットガン配列決定法を用いて全ゲノム配列を決定するゲノムプロジェクトに由来する整理が不十分な段階の大量の
DNA 断片の bulk sequence data を [WGS (Whole Genome
Shotgun)](/ddbj/wgs.html)として受け付けています。\
WGS データは他のデータとアクセッション番号の書式が異なります。\
[Genome Project の各段階と登録データの種別](/ddbj/genome.html)
もご参照ください。

#### TSA: Transcriptome Shotgun Assembly {#tsa-transcriptome-shotgun-assembly .bold d="tsa"}

2008 年からアセンブルされた RNA transcript の bulk sequence data を
[Transcriptome Shotgun Assembly (TSA)](/ddbj/tsa.html)
として受け付けています。\
生物学的な特徴づけは source feature のみを基本とします。\
ただし、通常の登録と同様に [Biological
features](/ddbj/file-format.html#biological_feature)を記載することも可能です。\
TSA
データは他のデータとアクセッション番号の書式が異なることがあります。\
Transcriptome Project の各段階と登録データの種別もご参照ください。

#### TLS: Targeted Locus Study {#tls .bold}

2016 年から 16S rRNA または、他の特定 locus
を標的とした配列で構成され、主として operational taxonomic unit
クラスター化に用いられる bulk sequence data を Targeted Locus Study
(TLS) として受け付けています。\
通常の登録と同様に [Biological
features](ddbj/file-format.html#biological_feature)を記載することも可能です。\
TLS データは他のデータとアクセッション番号の書式が異なります。

### 配列決定 {#whom}

#### TPA: 第三者再構築、または、アノテーション {#tpa .bold}

TPA (Third Party Data) は, DDBJ/EMBL-Bank/GenBank、Trace
Archive、もしくは、Sequence Read Archiveに既に登録されているエントリ
(これをプライマリーエントリと呼びます) を元に, 第三者がアセンブル
(assemble), もしくは,
(再)アノテーションを行ったデータのコレクションです。配列のアセンブルには,
既存のプライマリーエントリの組み合わせのみで構成された場合と, 新規に TPA
の登録者が実験的に決定した配列を混在させた場合とが存在します。DDBJ/EMBL-Bank/GenBank
では,
既報のプライマリーエントリに記載されている配列に関する研究を公開するための手段として
TPA 登録を受け入れています。\
TPA Submission Guidelines もご参照ください。
