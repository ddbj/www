---
layout: indexed_content
title: Environmental sequence の登録
pathname: environmental
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

## Environmental sequence の登録

種、あるいは、個体を特定しない手法により得られた配列データの種別の対応を示します。

環境サンプル (environmental sample) 由来の配列と その付帯情報からなるデータです。  
よく混同されますが、<span class="red">**環境サンプルとは「野生型」という意味ではありません**</span>。  
環境サンプルとは、生物種が同定できない環境 DNA サンプルに由来した配列です。PCR、DGGE、あるいは、その他の方法で直接、分子を単離した場合などが該当します。  
環境サンプルには以下を含みますが、下記で全てを網羅している訳ではありません。

  - 土壌、海水などから、直接、分子を単離したサンプル
  - 臨床系サンプル、腸の内容物、表皮上、その他、特定宿主に関連すると推測される種を同定できない生物
  - 環境サンプル由来の混合培養系

ただし、特定宿主から確実に回収できる内部共生生物、多くの cyanobacteria のように容易に同定可能であるが培養ができない生物、純粋培養は不可能でも罹患植物から確実に回収できる phytoplasmas といった対象は環境サンプルとは扱いません。

登録における注意事項
: 
  - 例外もありますが、原則、判明している範囲での lineage に "uncultured" を冠して「生物名」を記載します。
    詳しくは、[Organism Qualifier について 3. 環境サンプル](/ddbj/organism.html#env)を ご参照ください。
  - [source](/ddbj/features.html#source) feature に [environmental\_sample](/ddbj/qualifiers.html#environmental_sample) qualifier の記載が必須です。
  - [source](/ddbj/features.html#source) feature に [isolation\_source](/ddbj/qualifiers.html#isolation_source)
    qualifier の記載してサンプルの由来の概略を示す必要があります。
  - [clone](/ddbj/qualifiers.html#clone), [isolate](/ddbj/qualifiers.html#isolate) あるいは [submitter\_seqid](/ddbj/qualifiers.html#submitter_seqid) qualifier に識別子の記載が必要です。
  - [strain](/ddbj/qualifiers.html#strain) qualifier を記載することはできません。

<!-- end list -->

小規模な配列データ  
: [ENV](env.html) division と扱います。

大規模な配列データ  
: 特に NGS データを用いた研究などは [BioProject](/bioproject/index.html) と [BioSample](/biosample/index.html) にも ご登録ください。
: 特定の標的遺伝子を大規模解析した場合は [Targeted Locus Study](tls.html) と扱います。
: 種・個体の再構成を意図した解析の場合、対象がゲノムか RNA 転写産物か に依り、適宜、[Genome Project](genome.html) あるいは [Transcriptome Project](transcriptome.html) に則った登録が必要です。