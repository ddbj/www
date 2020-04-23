---
layout: indexed_content
title: DRA 共同研究プロジェクトデータの取扱い
pathname: sra_project
category: _home
---

# DRA 共同研究プロジェクトデータの取扱い

<div class="section book">

<div class="section chapter">

## 共同研究プロジェクトデータの取り扱い

ここでは共同研究プロジェクトに由来するデータを [DDBJ Sequence Read Archive (DRA)](/dra/index.html) サーバを介して，

<div class="sub_index">

  - シークエンス拠点から共同研究者へデータを転送する
  - 共同研究者が DRA へデータを登録する

</div>

方法を解説しています。これによりプロジェクトで得られたデータを共同研究者間で共有することができます。

DRA へのデータ登録方法については [DRA Handbook](/dra/submission.html) をご覧ください。

</div>

<div class="section chapter">

## データ転送の準備

<div class="section section">

### D-way アカウントの取得・連絡

[アカウント Handbook](/account.html) に従い DDBJ データ登録システムである D-way のアカウントを取得します。

</div>

<div class="section section">

### 転送用ディレクトリ

[DRA に転送用ディレクトリの作成を依頼します](/contact.html)。DRA チームは依頼に基づき DRA データ受付サーバに転送用ディレクトリ "transfer" を作成し，依頼者に連絡します。

<div class="sub_index">

  - DRAデータ受付サーバ: ftp-private.ddbj.nig.ac.jp
  - 送り手側: transfer/プロジェクト名/受け手のアカウント名/
  - 受け手側: transfer/プロジェクト名/送り手のアカウント名/

</div>

受け手側ディレクトリは対応する送り手側ディレクトリにマウントされており，受け手側は送り手側がアップロードしたファイルを閲覧・コピーすることができます。削除と移動はできません。 作業完了後，送り手側でファイルを削除してください。

![](/images/books/sra_project1.png "DRA サーバを介した共同研究者へのデータ受渡し")

以下ではシークエンス拠点 S (アカウント: center\_s) がプロジェクト (project\_X) のデータを共同研究者 A (アカウント: lab\_a) に転送し，共同研究者 A がデータを DRA に登録する場合を例に手順を説明します。

適宜，center\_s を送り手側のアカウント，lab\_a を登録者のアカウント，project\_X
を関係するプロジェクト名に読み替えてください。 シークエンス拠点，共同研究者やプロジェクトが増えた場合は DRA に連絡し，転送用ディレクトリの追加を依頼します。

</div>

</div>

<div class="section chapter">

## 送り手側での操作

<div class="section section">

### データの作成・アップロード

送り手側であるシークエンス拠点 S が [DRA Handbook](/dra/submission.html) 中の FTP クライアント，もしくは，コマンドで操作します。

#### ランデータ

データ受付サーバにログインし transfer/project\_X/lab\_a にランデータをアップロードします。

#### メタデータ

D-way で DRA 新規登録を作成し，Save XML で XML ファイルとして保存します。新規登録は Submit しなければ使いまわすことができます。

[Save XML] ボタンをクリックし，メタデータを XML ファイルとしてローカルのコンピュータ (PC) に保存します。データ受付サーバにログインし，保存した XML ファイルをランデータと同様に transfer/project\_X/lab\_a にアップロードします。 もしくは，XML ファイルをメールで共同研究者に送付します。

必要に応じて lab\_a の下にサブディレクトリを作成し submission ごとにファイルを区分けします。 アップロードが完了したらファイル情報を共同研究者 A に連絡します。

<span class="attention_text">データは関係者同士で直接やり取りしてください。</span>

シークエンス拠点で多数のメタデータを DRA サーバ上で作成・管理したい場合は，メタデータ作成専用アカウントを DRA で発行します。

</div>

</div>

<div class="section chapter">

## 受け手側での操作

<div class="section section">

### D-wayでの新規登録作成

DRA ウェブサイトから共同研究者の [D-way](https://ddbj.nig.ac.jp/D-way/) アカウントにログインします。

[DRA Handbook](/dra/submission.html) に従い新規登録 (例: lab\_a-0001)
を作成します。対応する登録用ディレクトリ
(submission/lab\_a/lab\_a-0001) が受付サーバの登録者用ディレクトリに作成されます。

</div>

<div class="section section">

### データのコピー・取得

[DRA Handbook](/dra/submission.html) に従い，transfer 以下に作成された受渡し用ディレクトリに送り手はデータをアップロードします。受け手はデータをダウンロードします。

</div>

<div class="section section">

### メタデータの読み込み・作成

[D-way にログイン](https://ddbj.nig.ac.jp/D-way/)，対応する submission
(lab\_a-0001) を選択した後，メタデータ作成ツールを起動します。 PC に保存した XML ファイル (例 Run.xml) に対応するオブジェクトタブ (例 Run) 中の [Load XML] をクリックし，ファイルをロードします。

XML ファイルの内容が読み込まれます。ロードしたアカウント (lab\_a) が Alias と Submission ID
を自動的に上書きします。他の XML ファイルも同様に読み込み，情報を追加します。メタデータを完成させ
DRA に登録します。

</div>

</div>

<div class="section chapter">

## 共同研究プロジェクトのメタデータ

<div class="section section">

#### Center Name (Submission，Study，Sample，Experiment，Run，Analysis)

Submission，Study，Sample，Experiment，Run，Analysis それぞれについて責任を負う組織の Center Name を記入します。

Center Name が空の XML ファイルをメタデータ作成ツールで読み込むと D-way アカウントの Center Name が自動的に入力されます。シークエンス拠点側で Center Name を空にした XML ファイルを作成し登録者に渡すと，登録者側で Center Name を書き換える手間を省くことができます。

#### Contact (Submission)

Submission に関する連絡 (公開，更新，内容に関する第三者からの問い合わせ) に応じる人の名前とメールアドレスを列挙します。

#### Project ID (Study)

研究グループレベルでのプロジェクトに対して Project ID を D-way から申請，取得します。大型の研究プロジェクトに対しては DDBJ が独自に ID を付与します。

#### Center Project Name (Study)

各研究グループで独自のプロジェクト名を付けます。

#### URL Link (Study)

共同研究プロジェクトのウェブサイトを記入します。

例)  
Label = MEXT Genome Support Project  
URL = http://www.genome-sci.jp/

#### Study Attribute (Study)

共同研究プロジェクトで統一されたキーワードを付与します。キーワードによりプロジェクト単位でのレコード検索が可能になります。

例)  
Tag = grant  
Value = KAKENHI on Innovative Areas - Genome Support Project

#### Run Center (Run)

ランを実行したシークエンス拠点の Center Name を記入します。

#### Analysis Center (Analysis)

解析を実行した組織の Center Name を記入します。

</div>

</div>

</div>
