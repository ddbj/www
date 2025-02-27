---
layout: tabbed_indexed_content
title: 特許出願に含まれる配列データの提供
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: other
lang: ja
---

DDBJ センターでは、特許出願に含まれる配列データを検索・閲覧可能なサービスを提供しています。

ただし、配列データの使用により、如何なる問題が生じても、DDBJ では一切の責任を負いません。  
[サイトポリシーと免責事項](/policies.html)をご参照ください。

## 塩基配列データ  {#nt}

[日本国特許庁](//www.jpo.go.jp/index.html) (JPO) と [韓国特許庁](//www.kipo.go.kr/) (KIPO) が収集・処理した特許出願に含まれる塩基配列データは DDBJ を経由して [INSD](/insdc/index.html#insd) に取り込まれて公開されています。  
同様に、[欧州特許庁](//www.epo.org/index.html) (EPO)、 [米国特許商標庁](https://www.uspto.gov/) (USPTO) が受理し公開可能となった配列データも、それぞれ EMBL-Bank/ENA, GenBank を経由し、[INSD](/insdc/index.html#insd) に取り込まれております。   
KIPO 由来の配列データを DDBJ 経由で、[INSD](/insdc/index.html#insd) から公開する仕 みは 2008 年2月より開始されました。   
特許出願に含まれる塩基配列データを表す[アクセッション番号](/insdc/accessions.html) は [プレフィックス](/documents/prefix.html) で識別可能です。

DDBJ おいて、特許出願に含まれる塩基配列データ (注: JPO, KIPO, EPO, USPTO
を参照データセットとしては区別できません) は以下のサービスから検索・閲覧が可能です。

[anonymous FTP](https://ddbj.nig.ac.jp/public/ddbj_database/ddbj/)  
: ディレクトリ配下の名前に ddbjpat を含むファイル。

[getentry](http://getentry.ddbj.nig.ac.jp/top-j.html)  
: DNA データベース: DDBJ/GenBank/EMBL を選択。

[ARSA](http://ddbj.nig.ac.jp/arsa/advanced_search?lang=ja)  
: [Division] で PAT、[Molecular Type] で DNA/RNA/mRNA/rRNA を必要に応じて指定することで、DDBJ [PAT division](/？/flat-file.html#division)に検索対象を限定。

[BLAST](http://blast.ddbj.nig.ac.jp/blastn?lang=ja)  
: [DDBJ ALL (DDBJ periodical release + daily updates)] を選択し、[Other divisions] の [Patent] を選択。

## アミノ酸配列  {#aa}

JPO と KIPO が収集・処理した特許出願に含まれるアミノ酸配列データは DDBJ センターから公開されています。  
同様に、EPO, USPTO が収集したアミノ酸配列データは、それぞれ EBI, NCBI から公開されています。

DDBJ において、特許出願に含まれるアミノ配列データは以下のサービスから検索・閲覧が可能です。

[anonymous FTP](https://ddbj.nig.ac.jp/public/ddbj_database/patent/)  
: ディレクトリ配下のファイル、対象は JPO と KIPO のみ。

[getentry](http://getentry.ddbj.nig.ac.jp/top-j.html)  
: Protein データベース で [Patent] を選択、検索対象は JPO と KIPO のみ。

[ARSA](http://ddbj.nig.ac.jp/arsa/?lang=ja)  
: [Division] で PAT、[Molecular Type] で PRT を指定、検索対象は JPO と KIPO のみ。

