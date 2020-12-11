---
layout: tabbed_indexed_content
title: 特許出願に含まれる配列データの提供
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: other
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
---

DDBJ センターでは、特許出願に含まれる配列データを検索・閲覧可能なサービスを提供しています。

ただし、配列データの使用により、如何なる問題が生じても、DDBJ では一切の責任を負いません。  
[サイトポリシーと免責事項]({{ site.baseurl }}/policies.html)をご参照ください。

## 塩基配列データ <a name="nt"></a>

[日本国特許庁](//www.jpo.go.jp/index.html) (JPO) と [韓国特許庁](//www.kipo.go.kr/) (KIPO) が収集・処理した特許出願に含まれる塩基配列データは DDBJ を経由して [INSD]({{ site.baseurl }}/insdc.html#insd) に取り込まれて公開されています。  
同様に、[欧州特許庁](//www.epo.org/index.html) (EPO)、 [米国特許商標庁](https://www.uspto.gov/) (USPTO) が受理し公開可能となった配列データも、それぞれ EMBL-Bank/ENA, GenBank を経由し、[INSD]({{ site.baseurl }}/insdc.html#insd) に取り込まれております。   
KIPO 由来の配列データを DDBJ 経由で、[INSD]({{ site.baseurl }}/insdc.html#insd) から公開する仕 みは 2008 年2月より開始されました。   
特許出願に含まれる塩基配列データを表す[アクセッション番号]({{ site.baseurl }}/documents/accessions.html) は [プレフィックス]({{ site.baseurl }}/documents/prefix.html) で識別可能です。

DDBJ おいて、特許出願に含まれる塩基配列データ (注: JPO, KIPO, EPO, USPTO
を参照データセットとしては区別できません) は以下のサービスから検索・閲覧が可能です。

[anonymous FTP](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/ddbj/)  
: ディレクトリ配下の名前に ddbjpat を含むファイル。

[getentry](http://getentry.ddbj.nig.ac.jp/top-j.html)  
: DNA データベース: DDBJ/GenBank/EMBL を選択。

[ARSA](http://ddbj.nig.ac.jp/arsa/advanced_search?lang=ja)  
: [Division] で PAT、[Molecular Type] で DNA/RNA/mRNA/rRNA を必要に応じて指定することで、DDBJ [PAT division]({{ site.baseurl }}/？/flat-file.html#division)に検索対象を限定。

[BLAST](http://blast.ddbj.nig.ac.jp/blastn?lang=ja)  
: [DDBJ ALL (DDBJ periodical release + daily updates)] を選択し、[Other divisions] の [Patent] を選択。

## アミノ酸配列 <a name="aa"></a>

JPO と KIPO が収集・処理した特許出願に含まれるアミノ酸配列データは DDBJ センターから公開されています。  
同様に、EPO, USPTO が収集したアミノ酸配列データは、それぞれ EBI, NCBI から公開されています。

DDBJ において、特許出願に含まれるアミノ配列データは以下のサービスから検索・閲覧が可能です。

[anonymous FTP](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/patent/)  
: ディレクトリ配下のファイル、対象は JPO と KIPO のみ。

[getentry](http://getentry.ddbj.nig.ac.jp/top-j.html)  
: Protein データベース で [Patent] を選択、検索対象は JPO と KIPO のみ。

[ARSA](http://ddbj.nig.ac.jp/arsa/?lang=ja)  
: [Division] で PAT、[Molecular Type] で PRT を指定、検索対象は JPO と KIPO のみ。

[BLAST](http://blast.ddbj.nig.ac.jp/blastp?lang=ja)  
: [Data Sets] で [Patent] を選択し、JPO, KIPO, USPTO, EPO を必要に応じて選択。
