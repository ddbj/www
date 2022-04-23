---
layout: tabbed_indexed_content
service_name: MetaboBank
title: MetaboBank への登録
category: metabobank
current_tab: submission
lang: ja
---

## 概要  {#overview}

MetaboBank は質量分析 (Mass spectrometry)、NMR や質量分析イメージングによって得られたメタボロミクスデータの登録を受付けています。
メタデータは MAGE-TAB 形式を使用しています。MAGE-TAB は機能ゲノミクスデータのためのデータベース [GEA](/gea/index.html) と EBI [ArrayExpress](https://www.ebi.ac.uk/arrayexpress/) で長年使用されており、最近はプロテオミクス分野でも使われ始めています ([SDRF-Proteomics]())。EBI のメタボロミクスデータベース [MetaboLights](https://www.ebi.ac.uk/metabolights/) は MAGE-TAB と互換性のある ISA-TAB 形式を使用しており、MetaboBank と MetaboLights はデータの標準化において協力しています。

<div class="attention" markdown="1">
  <span class="red">ヒトを対象とした研究データの登録について</span>  
  : 研究対象者に由来するデータを DDBJ
    センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。 ヒトを対象とした研究データを登録する場合は「[ヒトを対象とした研究データの登録について](/policies.html#submission-of-human-data)」を熟読してください。
</div>

## 登録の流れ  {#submission}

MetaboBank は関連するデータをまとめるため BioProject と BioSample と連携しています。
BioProject と BioSample は他のデータベースからも参照されているため、メタボロミクスデータおよび関連する塩基配列や遺伝子発現データがデータベースを横断してまとめられます。  
メタデータは実験種別毎に用意されたエクセルファイルに記入して作成します。  
データファイルとしては生データと解析済みデータを準備し、同定・推定された化合物に関する情報は所定形式である Metabolite assignment file (MAF) に記載します。

### 1. 登録アカウントを取得  {#account}

- [D-way 登録アカウント](https://ddbj.nig.ac.jp/D-way/)を作成します。[マニュアル](/account.html)
- [公開鍵と center name をアカウントに登録](/account.html#enable-dra-submission-in-account)し MetaboBank 登録を可能にします。

### 2. BioProject を登録 {#bp}

研究プロジェクトの内容を [BioProject に登録](/bioproject/submission.html)します。
プレフィックス PRJDB のアクセッション番号がプロジェクトに対して発行されます。 

### 3. BioSample を登録 {#bs}

データを得るために使われたサンプルを BioSample に登録します。メタボロミクス用サンプルには [Omics パッケージ](/biosample/submission.html#Sample-type)の使用を推奨します。プレフィックス SAMD のアクセッション番号がサンプルに対して発行されます。

### 4. メタデータの作成  {#metadata}

[実験の種類毎に用意されたエクセルファイル](/metabobank/metadata.html)をダウンロードし、メタデータを記入します。
エクセルは MAGE-TAB の IDF と SDRF に対応したタブから構成されています。

- IDF (Investigation Description Format): 研究概要、実験デザイン、プロトコール、文献情報や登録者情報といった研究全体を記述
- SDRF (Sample and Data Relationship Format): サンプル属性およびサンプル、測定機器とデータファイルの関係性を記述

### 5. データファイルの準備  {#data-files}

以下のファイルを準備します。同定・推定された化合物に関する情報は所定形式の [Metabolite assignment file (MAF)](/metabobank/datafile.html) として登録します。MAF 登録は強く推奨しますが必須ではありません。

- [生データファイル (raw data file)](/metabobank/datafile.html)
- [解析済みデータファイル (processed data file)](/metabobank/datafile.html)
- [Metabolite assignment file (MAF)](/metabobank/datafile.html)

### 6. ファイルのアップロード   {#upload}

メタデータエクセルとデータファイル (生・解析済みデータファイル・MAF) を [scp/sftp でファイルサーバにアップロード](/dra/submission.html#upload-sequence-data)します。アップロード先は mass ディレクトリで、コマンドで転送する場合は以下のようになります。

```
$ scp -i private-key-for-auth <Your Files> <D-way Login ID>@ftp-private.ddbj.nig.ac.jp:~/<DRA Submission ID>
```

## アクセッション番号  {#accession}

Study に対して以下の形式のアクセッション番号が発行されます (n は自然数)。
論文で MetaboBank のメタボロミクスデータに言及するときはこの番号を引用してください。

MTBKSn (例 MTBKS1)

## データ公開  {#release}

関連する論文が公表されるまでデータを非公開にすることができます。三年後までの公開予定日を設定し、随時延長することができます。登録されたデータは[データ公開原則](/documents/data-release-policy.html)に従って公開されます。EBI [MetaboLights](https://www.ebi.ac.uk/metabolights/) とはデータを交換していません。

FAQ: [データ公開の依頼方法は？](/faq/ja/request-release.html)

## Reviewer access  {#reviewer-access}

登録した非公開データをパスワードで保護されたサイト経由で査読者に提供したい場合は [MetaboBank チームに連絡](/contact-ddbj.html)してください。

## 更新  {#update}

登録されたデータを更新・削除する場合は [MetaboBank チームに連絡](/contact-ddbj.html)してください。
