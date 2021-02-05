---
layout: tabbed_indexed_content
title: メタゲノムアセンブリ
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
lang: ja
---

微生物は生物多様性の多くの部分を占めていますが、生息環境が多様であることからそれらの多くは培養することができず、従来の培養を経たゲノム解析で得られる知見は限られています。メタゲノム解析とは培養に依存することなく網羅的に微生物のゲノムを解析する手法であり、培養することができない微生物種について多くの知見をもたらしています。

メタゲノムプロジェクトは解析段階に応じたいくつかのデータから構成されており、環境サンプルから収集された生シークエンスデータ、生データからアセンブルされたコンティグ配列、生物の分類群毎にビニングされたアセンブリ配列、及び、特定の生物種に由来するメタゲノムアセンブリ配列（Metagenomic
Assembly、MAG）を含んでいます。

本ページでは各段階のデータを BioProject/BioSample/DRA/DDBJ へ登録する方法を説明しています。DRA への生シークエンスデータの登録は必須ではありませんが強く推奨します。

## メタゲノムアセンブリデータの登録  {#submission}


{% include image.html url="submission/mag.jpg" caption="メタゲノムアセンブリデータの登録" class="w600" %}


### 1\) Raw reads (Run)  {#raw-reads}

メタゲノムプロジェクトの生シークエンスデータは [DRA Run](/dra/submission.html) に登録します。

#### BioProject  {#raw-reads-bioproject}

[メタゲノム/環境サンプルプロジェクト](/bioproject/submission.html#Project-type)として
BioProject を登録します。生物名は [metagenome organism
names](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/)
から適切なものを選び、"xyz metagenome" (例 soil metagenome)
を記載します。サンプルの単離源やプロジェクトの目的といったプロジェクトに関する情報を記載してください。

#### BioSample  {#raw-reads-biosample}

パッケージとして ["Genome, metagenome or marker sequences (MIxS compliant) -
Environmental/Metagenome Genomic Sequences
(MIMS)"](/biosample/submission.html#Meta_Genomic_Sequences_Sample)
を選択します。メタゲノムサンプルの場合、生物名は [metagenome organism
names](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/)
から適切なものを選び、"xyz metagenome" (例 soil metagenome)
を記載します。実験データがどのようにして得られたのかを理解できるようにサンプルに関する情報をできるだけ記載してください。

#### DRA  {#raw-reads-dra}

生シークエンスデータを [DRA Run](/dra/submission.html) に登録します。

### 2\) Primary metagenome {#primary-metagenome}

生シークエンスデータをアセンブルしたコンティグ配列を DDBJ もしくは DRA に登録します。

#### BioProject  {#primary-metagenome-bioproject}

1\) Raw reads (Run) と同じです。

#### BioSample  {#primary-metagenome-biosample}

1\) Raw reads (Run) と同じです。

#### DDBJ  {#primary-metagenome-ddbj}
生シークエンスデータをアセンブルしたコンティグ配列を [ENV](/ddbj/env.html) division の [WGS](/ddbj/wgs.html) エントリとして登録します。[MSS](/ddbj/mss.html)が登録受付窓口になります。

#### DRA  {#primary-metagenome-dra}

DRA に登録する場合、fasta/bam ファイル等で [DRA Analysis](/dra/submission.html#Analysis_Type)（Analysis type = "De Novo Assembly"）に登録します。1) の生シークエンスデータが登録された DRA Run とセットで Analysis を登録します。Analysis は ENA/NCBI と共有されません。

### 3\) Binned metagenome {#binned-metagenome}

生物の分類毎にビニングされたアセンブリ配列を DDBJ もしくは DRA に登録します。

#### BioProject  {#binned-metagenome-bioproject}

1\) Raw reads (Run) と同じです。

#### BioSample  {#binned-metagenome-biosample}

1\) Raw reads (Run) と同じです。

#### DDBJ  {#binned-metagenome-ddbj}

生物の分類毎にビニングされたアセンブリ配列を [ENV](/ddbj/env.html) division の [WGS](/ddbj/wgs.html) エントリとして登録します。[MSS](/ddbj/mss.html)が登録受付窓口になります。

#### DRA  {#binned-metagenome-dra}

DRA に登録する場合、fasta/bam ファイル等で [DRA Analysis](/dra/submission.html#Analysis_Type)（Analysis type = "De Novo Assembly"）に登録し、description に使用した解析ソフトウェアやビニング方法に関する情報を記載します。1) の生シークエンスデータが登録された DRA Run とセットで Analysis を登録します。Analysis は ENA/NCBI と共有されません。

### 4\) MAG (DDBJ)  {#mag}

特定の生物に由来すると推測されるメタゲノムアセンブリ配列（Metagenomic Assembly、MAG）は DDBJ の [ENV
division](/ddbj/env.html) にゲノムエントリとして登録します。

#### BioProject  {#mag-bioproject}

[メタゲノム/環境サンプルプロジェクト](/bioproject/submission.html#Project-type)として
BioProject を登録します。BioProject は DRA と共通のプロジェクトを使うことができます。

#### BioSample  {#mag-biosample}

MAG 用にバーチャルなサンプルを登録します。パッケージは ["Other
samples"](/biosample/submission.html#General_Sample) を選択し、生物名には
uncultured が冠されていない、MAG が由来する生物種名を記載します (例 Methanosarcina
thermophila)。1) の DRA Run 登録に使用する "xyz metagenome" MIMS サンプルとは別にバーチャルな
MAG 用サンプルが必要な点に注意してください。

生物名以外に以下のサンプル属性が必須になります。[登録例](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=272411182)

規定値

  - sample\_type: metagenomic assembly
  - environmental\_sample: TRUE

サンプルの由来情報

  - metagenome\_source: xyz metagenome
  - isolate
  - isolation\_source

サンプルの採取情報

  - collection\_date
  - env\_biome
  - env\_feature
  - env\_material
  - geo\_loc\_name
  - lat\_lon

派生元 BioSample

  - note: This biosample is a metagenomic assembly obtained from the xyz
    metagenome BioSample: SAMDxxxxxxxx.
  - derived\_from: SAMDxxxxxxxx

#### DRA  {#mag-dra}

MAG アセンブルに使用した生シークエンスデータを 1) で DRA Run に登録します。

#### DDBJ  {#mag-ddbj}

MAG は [ENV division](/ddbj/env.html)
のゲノムエントリとして登録します。[MSS](/ddbj/mss.html)
が登録受付窓口になります。以下の情報が必須になります。

MAG 特有のルールとして必須

  - source feature に /metagenome\_source = "xyz metagenome"（"xyz
    metagenome" は [metagenome organism
    names](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/)
    に含まれていること）を記載。

ENV Division エントリとして必須

  - source feature に
    [/environmental\_sample](/ddbj/qualifiers.html#environmental_sample)、[/isolation\_source](/ddbj/qualifiers.html#isolation_source)
    と [/isolate](/ddbj/qualifiers.html#isolate) を記載。

ゲノムエントリとして必須

  - [ST\_COMMENT](/ddbj/file-format.html#describing_st_comment)
    にアセンブリに関する Assembly Method、Genome
    Coverage、Sequencing Technology を記載。
  - 真核生物の場合、加えて
    [ST\_COMMENT](/ddbj/file-format.html#describing_st_comment) に
    Assembly Name を記載。

MAG エントリ（ENV division）では [/strain](/ddbj/qualifiers.html#strain)
を記載することはできません。また、宿主の情報がある場合は source feature に
[/host](/ddbj/qualifiers.html#host) で記載します。
