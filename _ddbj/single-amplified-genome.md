---
layout: indexed_content
title: Single amplified genome
pathname: single-amplified-genome
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
    url: /faq/ja/index.html
  - id: other
    title: Other
    url: /ddbj/index-e.html
    children:
      - title: Patent
        url: /ddbj/patent-data.html
      - title: MGA
        url: /ddbj/mga.html
lang: ja
---

Single amplified genome (SAG) は一細胞を単離、溶解し、全ゲノムを増幅してシークエンスすることで得られます。SAG は1～数コピーのゲノムを出発材料としているため、極微量のDNAのコンタミネーションがデータ品質に大きな影響を与えます。そのため DDBJ センターでは SAG を区別できるように登録方法を定めています。

## 一細胞の場合 <a name="single-cell"></a>

### DDBJ <a name="multi-ddbj"></a> 

source feature

  - [metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock)
    や uncultured を冠した生物名は記載できません。
  - /note="single amplified genome" を所定属性として記載します。
  - /isolation\_source にサンプルの単離源を記載します。例 "one of ten single-cell
    amplified genomes of the same hot spring water; single-cell genome
    amplified by MDA (multiple displacement amplification)"

### BioSample <a name="multi-biosample"></a>

パッケージと属性

  - [Other
    samples](/biosample/attribute.html?Core=Generic&definition=definition)
    パッケージを選択します。
  - [metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock)
    や uncultured を冠した生物名は記載できません。DDBJ の SAG エントリと同じ生物名を記載します。
  - [isolate](/biosample/attribute.html?all=all#isolate) と
    [isolation\_source](/biosample/attribute.html?all=all#isolation_source)
    を記載します。
  - [sample\_type](/biosample/attribute.html?all=all#sample_type)=”single
    amplified genome” を所定属性として記載します。

## 複数細胞の場合 <a name="multi-cells"></a>

### DDBJ <a name="multi-ddbj"></a>

source feature

  - [metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock)
    や uncultured を冠した生物名は記載できません。
  - /note="single amplified genome" を所定属性として記載します。
  - /note に複数サンプル・ゲノムに由来する SAG であることを記載します。例 "co-assembly of 10
    single-cell amplified genomes"
  - /isolation\_source にサンプルの単離源を記載します。

### BioSample <a name="single-biosample"></a> 

パッケージと属性

  - [Other
    samples](/biosample/attribute.html?Core=Generic&definition=definition)
    パッケージを選択し、[「一細胞の場合」](#single-biosample)で作成したサンプルの結合サンプルを作成します。
  - [sample\_title](/biosample/attribute.html?all=all#sample_title)
    に結合サンプルであることを記載します。例 “Sample group: combined samples of
    SAMD00192892-SAMD00192901 (Co\_assembled genome)“
  - derived\_from = “SAMD00192892-SAMD00192901”、note = “This sample
    group is the combination of the individual BioSamples:
    SAMD00192892-SAMD00192901.” のように結合元サンプルのアクセッション番号を記載します。
  - [isolate](/biosample/attribute.html?all=all#isolate) と
    [isolation\_source](/biosample/attribute.html?all=all#isolation_source)
    を記載します。

## 登録例 <a name="real-examples"></a>

  - BioProject:
    [PRJDB8357](https://www.ncbi.nlm.nih.gov/bioproject/632761)
  - BioSample:
    [SAMD00192895](https://www.ncbi.nlm.nih.gov/biosample/?term=SAMD00192895)
  - BioSample:
    [SAMD00192902](https://www.ncbi.nlm.nih.gov/biosample/?term=SAMD00192902)
  - DDBJ:
    [BLSE00000000.1](https://www.ncbi.nlm.nih.gov/nuccore/BLSE00000000.1)
