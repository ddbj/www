---
layout: indexed_content
lang: ja
title: DDBJ Search
category: services
lang: ja
related_pages:
  - title: ARSA ヘルプ
    url: /services/arsa.html
  - title: getentry ヘルプ
    url: /services/getentry.html
  - title: BLAST ヘルプ
    url: /services/blast.html
  - title: VecScreen ヘルプ
    url: /services/vecscreen.html
  - title: ClustalW ヘルプ
    url: /services/clustalw.html
  - title: TXSearch ヘルプ
    url: /services/txsearch.html
  - title: 過去のサービス
    url: /services/past-services.html
  - title: 関連論文
    url: /services/references.html
  - title: WABI (Web API for Biology)
    url: /services/wabi.html
  - title: WABI BLAST ヘルプ
    url: /services/wabi-blast.html
  - title: WABI ClustalW ヘルプ
    url: /services/wabi-clustalw.html
  - title: WABI VecScreen ヘルプ
    url: /services/wabi-vecscreen.html
  - title: WABI MAFFT ヘルプ
    url: /services/wabi-mafft.html
  - title: Pipeline ヘルプ
    url: /services/pipeline.html
---

## DDBJ Searchの機能について  {#ddbjsearch_の機能について}
- DDBJ Search は、[アクセッション番号](/insdc/accessions.html)やキーワードによる INSDC BioProject/BioSample/SRA および JGA/GEA/MetaboBank の検索にご利用いただけます。
- データの変更履歴の検索は、行うことができません。
- DDBJ Search は webAPI として実装しており、入力フォームからだけでなく、プログラムなどから直接呼び出すことも可能です。
- DDBJ フラットファイルの検索 は DDBJ Search ではなく、[getentry](https://getentry.ddbj.nig.ac.jp/top-e.html) をご利用ください。

## 入力フォームによる検索  {#入力フォームによる検索}
[https://ddbj.nig.ac.jp/search](https://ddbj.nig.ac.jp/search)からご利用下さい。

### Keyword欄の入力 {#Keyword_}
- アクセッション番号やキーワードで検索できます。
- ワイルドカード（\*、?）は使用不可できません。

#### 1) アクセッション番号  
- アクセッション番号を入力します。  
- 入力したアクセッション番号に対して、前方一致、大文字小文字の区別なしで検索を行います。  
- 複数アクセッション番号の指定、範囲の指定はできません。  
例：PRJDB1000  
例：SAMD00020000  

#### 2) キーワード
- BioProject、BioSample、SRA、JGA、GEA、MetaboBankのメタデータの内容をキーワードとして入力します。  
- 検索対象は、Title、Description とOrganism の記載内容になります。  
- 入力した文字列に対して、前方一致、大文字小文字の区別なしで検索を行います。  
- AND/OR 検索はできません。入力された文字列は、スペースも含めて一つながりの文字列として検索します。  
例：Homo sapiens  
例：metagenome  

### ファセットメニューの選択 {#Faceted_}

・画面左のファセットメニュー（Database、Type、Organism、Published Date）を用いて、検索対象を絞り込むことができます。

#### 1) Database  
・BioProject、BioSample、SRA、JGA、GEA、MetaboBankの6項目から選択できます。

#### 2) Type  
・bioproject、biosample、sra-submission、sra-study、sra-sample、sra-experiment、sra-run、sra-analysis、jga-dataset、jga-study、jga-policy、jga-dac、gea、metabobankの14項目から選択できます。

#### 3) Organism  
- リストされた生物名から選択できます。  
- Organismのキーワード欄には、ファセットメニューにリストされた生物名（件数上位100件）を入力できます。それ以外の生物名に関しては、一番左上のキーワード検索欄をご利用ください。

#### 4) Published Date  
・データ公開日の範囲を指定することができます。

### 出力形式  {#出力形式}

- フォームでの入力とファセットメニューの選択の組み合わせの検索結果が表示されます。
- 各レコードをクリックすると、各データベースで定められている形式で表示されます。
- 表示されるメタデータの項目は以下になります。
- 各項目は、値がない場合には項目自体が表示されない場合があります。

#### 1) 共通項目

|---|
Identifier      |アクセッション番号
Type		    |データタイプ：bioproject、biosample、sra-submission、sra-study、sra-sample、sra-experiment、sra-run、sra-analysis、jga-dataset、jga-study、jga-policy、jga-dac、gea、metabobankのいずれかの値
sameAs	　　    |同一内容のレコードの、他のデータベースでの番号（ID）
Organism 	    |生物名（[NCBI Taxonomy database](https://www.ncbi.nlm.nih.gov/taxonomy)の値） 
Title		    |内容を表す短いタイトル
Description	    |内容に関する記載
Properties	|メタデータのJSON形式での表示。黒枠の右上の「+」のアイコンで全体表示、「－」のアイコンで部分表示の切り替えを行うことができ、その左側のアイコンで内容をコピーできます。
dbXrefs		    |INSDCのデータベース（BioProject、BioSample、SRA、Assembly、conventional sequence data、bulk sequence data (WGS/TLS/TSA) のmaster record、NCBI taxonomy）、DDBJのデータベース（GEA、MetaboBank、JGA）、NBDCヒトデータベースおよびNCBI PubMedの関連するアクセッション番号へのリンク\*
Download	    |ダウンロードファイルへのリンク
Status		    |INSDCのデータ公開ステータス
Accessibility   |データへのアクセス制限状態\*\*
Date Created    |データの登録日
Date Modified   |データの最終公開日
Date Published  |データの初回公開日

\* 項目別に100件まで表示。それ以上の件数の場合は、右上のdedicated APIをクリックすることでJSON形式で全件を表示。  
\*\* controlled-accessは、生データおよび詳細メタデータの取得にNBDCヒトデータベースへの利用申請が必要な、ヒト個人由来サンプルのアクセス制限データであることを示す。  

#### 2) Type ごとの個別項目

**bioproject**

|---|
Project type	|Umbrellaプロジェクトの場合、UmbrellaBioProjectと表示
parentBioprojects	|上の階層のBioProjectのリスト
childBioprojects	|下の階層のBioProjectのリスト
Organization	|プロジェクトの実施機関
Publication	|文献情報
Grant		|プロジェクトの予算の情報
External link  	|プロジェクトに直接関連するリソース（例：GEA、MetaboBank、GEO）の URL

**biosample**

|---|
Host		|生物の(実験室ではない)自然界における宿主の学名
Strain		|微生物や真核生物の株名
Isolate		|サンプルが得られた個体やサンプルの識別子
Geo Loc Name	|サンプルを採集した場所
Collection Date	|サンプルを採集した日時
Attributes	|サンプルパッケージの属性（[attribute](https://www.ddbj.nig.ac.jp/biosample/attribute.html)）情報

**sra-sample**

|---|
Geo Loc Name	|サンプルを採集した場所
Collection Date	|サンプルを採集した日時
Attributes	|サンプルパッケージの属性（[attribute](https://www.ddbj.nig.ac.jp/biosample/attribute.html)）情報

**sra-experiment**

|---|
Library Strategy	|ライブラリーの構築手法
Library Source		|ライブラリー構築に用いた試料
Library Selection	|シークエンスに用いたライブラリを構築するためのサンプルの選別や濃縮方法
Library Layout		|データファイル中のリード構成
Library Name		|ライブラリーの名前
Library Construction Protocol	|ライブラリーの構築方法の詳細
Platform		    |分析装置名
Instrument Model	|シークエンサの機種

**gea**

|---|
Experiment Type  	|実験方法の種別

**metabobank**

|---|
Study Type		    |研究内容の種別
Experiment Type		|実験方法の種別
Submission Type		|登録の種別 (例：LC-MS、GC-MS)


### 上限（最大表示件数）  {#上限（最大表示件数）}

10000件   

###  ダウンロードファイル {#ダウンロードファイル}

|---|
[BioProject/BioSample]のメタデータ|JSON, JSON-LD
[SRA]のメタデータ　　　　　　     |XML
[SRA] fastq        　　　　　     |FASTQ
[SRA] sra          　　　　　     |SRA
[SRA]のanalysisデータ             |DATA

## WebAPI プログラムによる検索

DDBJ Search は webAPI として実装しており，入力フォームからだけでなく，プログラムなどから直接呼び出すことも可能です。詳細は以下をご参照ください。

[https://github.com/ddbj/ddbj-search-api](https://github.com/ddbj/ddbj-search-api)（日本語）

##  各レコードへのリンク設定方法  {#ds_createlinks}

### BioProject、BioSample、SRA、JGA、GEA、MetaboBank の個々のレコードに対して，以下の方法でリンクを設定することができます。

https://ddbj.nig.ac.jp/search/entry/Type名/アクセッション番号

例：  
https://ddbj.nig.ac.jp/search/entry/bioproject/PRJDB1000  
https://ddbj.nig.ac.jp/search/entry/sra-experiment/SRX10474797  
https://ddbj.nig.ac.jp/search/entry/gea/E-GEAD-282  
https://ddbj.nig.ac.jp/search/entry/metabobank/MTBKS201  

上記の指定をすると，該当のレコードが表示されます。

