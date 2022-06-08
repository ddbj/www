---
layout: tabbed_indexed_content
service_name: MetaboBank
title: MetaboBank への登録
category: metabobank
current_tab: submission
lang: ja
---

## 登録の流れ  {#submission}

MetaboBank は、塩基配列や遺伝子発現データと関連づけられるように BioProject と BioSample と連携しています。
メタデータは実験種別毎に用意されたエクセルファイル（以下に記載するMAGE-TAB の IDF と SDRF）に記載します。  
解析済みのデータ（同定・推定された化合物に関する情報）は所定の形式である Metabolite assignment file (MAF) に記載します。

### 1. 登録アカウントの取得  {#account}

- [D-way 登録アカウント](https://ddbj.nig.ac.jp/D-way/)を作成します。[マニュアル](/account.html)
- [公開鍵と center name をアカウントに登録](/account.html#enable-dra-submission-in-account)し MetaboBank 登録を可能にします。

### 2. 登録申し込み  {#form}

[MetaboBank 登録申し込みフォーム](https://docs.google.com/forms/d/1yrBo95x5leK9aEZImzT6Y5iVyzgwELCgFZtTU9paguU)から登録を申し込みます。申し込み内容に応じて担当者が個別に登録方法をご案内します。  
フォームにアクセスできない場合、[申し込みファイル](/assets/files/text/mb-form.txt)をダウンロードし、必要事項を記入のうえ <img src="/assets/images/ddbj/mb-address.png" style="vertical-align:middle"> にメールで申し込んでください。

### 3. BioProject の登録 {#bp}

研究プロジェクトの内容を [BioProject に登録](/bioproject/submission.html)します。
プレフィックス PRJDB のアクセッション番号がプロジェクトに対して発行されます。 

### 4. BioSample の登録 {#bs}

データを得るために使われた試料情報を BioSample に登録します。メタボロミクス用サンプルには [Omics パッケージ](/biosample/submission.html#Sample-type)を使用します。  
非生物サンプルの場合、生物名には NCBI Taxonomy [metagenomes](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock) などから適切なものを選んでください。
- ブランク [blank sample](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=2582415&lvl=3&lin=f&keep=1&srchmode=1&unlock)
- 食品 [food metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=870726&lvl=3&lin=f&keep=1&srchmode=1&unlock)
- その他はこちら　FAQ: [非生物サンプルの生物名には何を選べばよいでしょうか？](/faq/ja/organism-for-material.html)    
プレフィックス SAMD のアクセッション番号がサンプルに対して発行されます。

### 5. メタデータの作成  {#metadata}

[実験の種類毎に用意されたエクセルファイル](/metabobank/metadata.html)をダウンロードし、メタデータを記入します。
エクセルは MAGE-TAB の IDF と SDRF に対応したタブから構成されています。  
- IDF (Investigation Description Format): 研究概要、実験デザイン、プロトコール、文献情報や登録者情報といった研究概要を記述
- SDRF (Sample and Data Relationship Format): サンプル属性およびサンプル、測定機器とデータファイルの関係性を記述
実験デザインが異なるデータは Study を分けて登録します。関連する Study は BioProject でまとめます。例 BioProject PRJDB100 - MTBKS1000 (LC-MS)、MTBKS1001 (GC-MS)。

### 6. データファイルの準備  {#data-files}

以下のファイルを準備します。同定・推定された化合物に関する情報は所定形式の [Metabolite assignment file (MAF)](/metabobank/datafile.html) として登録します。MAF 登録は強く推奨しますが必須ではありません。

- [生データファイル (raw data file)](/metabobank/datafile.html)
- [解析済みデータファイル (processed data file)](/metabobank/datafile.html)
- [Metabolite assignment file (MAF)](/metabobank/datafile.html)

データファイルの破損有無の確認のため、データファイル名と md5 チェックサム値のリストを提供します。
[md5sum コマンド](#supplement-md5)の結果を拡張子 md5 のファイル (例 my-study.md5) としてデータファイルと一緒にアップロードします。   
SDRF の Comment[Raw Data File md5]、Comment[Processed Data File md5]、Comment[Metabolite Assignment File md5] に md5 値を記入して提供することもできます。

### 7. ファイルのアップロード   {#upload}

メタデータエクセルとデータファイル (生・解析済みデータファイル・MAF) を [scp/sftp でファイルサーバにアップロード](/dra/submission.html#upload-sequence-data)します。
異なる Study のデータをアップロードする場合、Study 毎にファイルを tar もしくは zip でまとめます。
アップロード先はホーム直下の metabobank ディレクトリで、コマンドで転送する場合は以下のようになります。

```
$ scp -i private-key-for-auth <Your Files> <D-way Login ID>@ftp-private.ddbj.nig.ac.jp:~/metabobank
```

## アクセッション番号  {#accession}

Study に対して以下の形式のアクセッション番号が発行されます (n は自然数)。
論文で MetaboBank のメタボロミクスデータに言及するときはこの番号を引用してください。

MTBKSn (例 MTBKS1)

## データ公開  {#release}

関連する論文が公表されるまでデータを非公開にすることができます。三年後までの公開予定日を設定し、随時延長することができます。登録されたデータは[データ公開原則](/documents/data-release-policy.html)に従って公開されます。EBI [MetaboLights](https://www.ebi.ac.uk/metabolights/) とは現在データを交換していません。

FAQ: [データ公開の依頼方法は？](/faq/ja/request-release.html)

## Reviewer access  {#reviewer-access}

登録した非公開データをパスワードで保護されたサイト経由で査読者に提供したい場合は [MetaboBank チームに連絡](/contact-ddbj.html)してください。

## 更新  {#update}

登録されたデータを更新・削除する場合は [MetaboBank チームに連絡](/contact-ddbj.html)してください。

## 補足: MD5 値 {#supplement-md5} 

MD5 (Message Digest Algorithm 5) はハッシュ関数であり、与えられたファイルに対してハッシュ値 (MD5値、32桁の英数字) を出力します。
ファイルが破損していると MD5 値が変化します。MetaboBank では、到着したファイルの MD5 値の一致をチェックすることで、ファイルの破損がないかどうか確認しています。

### MD5 値の取得 (Linux)

ファイルの MD5 値を取得します。

```
# file1 と file2 の md5 値を取得
$ md5sum file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2

# sub ディレクトリ以下の全ファイルの md5 値を取得
$ md5sum sub/*
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
B636E0063E29709B6082F324C76D0911 file3

# 拡張子 txt ファイルの md5 値を取得
$ md5sum *.txt

# 取得結果をファイルに出力
$ md5sum *.txt > study.md
```

### MD5 値の取得 (Mac OS X)

ファイルの MD5 値を取得します。

```
# file1 と file2 の md5 値を取得
$ md5sum file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2

# sub ディレクトリ以下の全ファイルの md5 値を取得
$ md5sum sub/*
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
B636E0063E29709B6082F324C76D0911 file3

# 拡張子 txt ファイルの md5 値を取得
$ md5sum *.txt

# 取得結果をファイルに出力
$ md5sum *.txt > study.md
```

### MD5 値の取得 (Windows)

[Fsum Frontend](http://sourceforge.net/projects/fsumfe/) をインストールし、起動します。  
まず、 "md5" にチェックを入れてください。

{% include image.html url="books/Fsum1.jpg" caption="md5 を選択" class="w400" %}

\[+\] ボタンをクリックし、必要なデータファイルを開いてください。同時に複数のファイルを選択することが可能です。

{% include image.html url="books/Fsum2.jpg" caption="データファイルを選択" class="w400" %}

最後に、\[Calculate hashes\] ボタンをクリックしてください。各ファイルの MD5 値が表示されます。\[Export\] ボタンから、MD5 値の一覧表 (.html, .csv, .xml) を作成することができます。

{% include image.html url="books/Fsum3.jpg" caption="MD5 値の計算を開始" class="w400" %}

