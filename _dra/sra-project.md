---
layout: indexed_content
title: DRA 共同研究プロジェクトデータの取扱い
pathname: sra-project
category: dra
lang: ja
---

## 共同研究プロジェクトデータの取り扱い <a name="project"></a>

ここでは共同研究プロジェクトに由来するデータを [DDBJ Sequence Read Archive (DRA)]({{ site.baseurl }}/dra/index.html) サーバを介して，

  - シークエンス拠点から共同研究者へデータを転送する
  - 共同研究者が DRA へデータを登録する

方法を解説しています。これによりプロジェクトで得られたデータを共同研究者間で共有することができます。

DRA へのデータ登録方法については [DRA Handbook]({{ site.baseurl }}/dra/submission.html) をご覧ください。

## データ転送の準備 <a name="transfer"></a>

### D-way アカウントの取得・連絡 <a name="create-dway-account"></a>

[アカウント Handbook]({{ site.baseurl }}/account.html) に従い DDBJ データ登録システムである D-way のアカウントを取得します。

### 転送用ディレクトリ <a name="directory-for-transfer"></a>

[DRA に転送用ディレクトリの作成を依頼します]({{ site.baseurl }}/contact-ddbj.html)。DRA チームは依頼に基づき DRA データ受付サーバに転送用ディレクトリ "transfer" を作成し，依頼者に連絡します。

  - DRAデータ受付サーバ: ftp-private.ddbj.nig.ac.jp
  - 送り手側: transfer/プロジェクト名/受け手のアカウント名/
  - 受け手側: transfer/プロジェクト名/送り手のアカウント名/

受け手側ディレクトリは対応する送り手側ディレクトリにマウントされており，受け手側は送り手側がアップロードしたファイルを閲覧・コピーすることができます。削除と移動はできません。 作業完了後，送り手側でファイルを削除してください。

[![]({{ site.baseurl }}/assets/images/books/sra_project1.png){: .w450}]({{ site.baseurl }}/assets/images/books/sra_project1.png "DRA サーバを介した共同研究者へのデータ受渡し"){: .group1}

以下ではシークエンス拠点 S (アカウント: center_s) がプロジェクト (project_X) のデータを共同研究者 A (アカウント: lab_a) に転送し，共同研究者 A がデータを DRA に登録する場合を例に手順を説明します。

適宜，center_s を送り手側のアカウント，lab_a を登録者のアカウント，project_X
を関係するプロジェクト名に読み替えてください。 シークエンス拠点，共同研究者やプロジェクトが増えた場合は DRA に連絡し，転送用ディレクトリの追加を依頼します。

## 送り手側での操作 <a name="sender"></a>

### データの作成・アップロード <a name="create-data-upload"></a>

送り手側であるシークエンス拠点 S が [DRA Handbook]({{ site.baseurl }}/dra/submission.html) 中の FTP クライアント，もしくは，コマンドで操作します。

#### ランデータ <a name="ランデータ"></a>

データ受付サーバにログインし transfer/project_X/lab_a にランデータをアップロードします。

#### メタデータ <a name="メタデータ"></a>

D-way で DRA 新規登録を作成し，Save XML で XML ファイルとして保存します。新規登録は Submit しなければ使いまわすことができます。

[Save XML] ボタンをクリックし，メタデータを XML ファイルとしてローカルのコンピュータ (PC) に保存します。データ受付サーバにログインし，保存した XML ファイルをランデータと同様に transfer/project_X/lab_a にアップロードします。 もしくは，XML ファイルをメールで共同研究者に送付します。

必要に応じて lab_a の下にサブディレクトリを作成し submission ごとにファイルを区分けします。 アップロードが完了したらファイル情報を共同研究者 A に連絡します。

<span class="red">データは関係者同士で直接やり取りしてください。</span>

シークエンス拠点で多数のメタデータを DRA サーバ上で作成・管理したい場合は，メタデータ作成専用アカウントを DRA で発行します。

## 受け手側での操作 <a name="receiver"></a>

### D-wayでの新規登録作成 <a name="create-new-submission"></a>

DRA ウェブサイトから共同研究者の [D-way](https://ddbj.nig.ac.jp/D-way/) アカウントにログインします。

[DRA Handbook]({{ site.baseurl }}/dra/submission.html) に従い新規登録 (例: lab_a-0001)
を作成します。対応する登録用ディレクトリ
(submission/lab_a/lab_a-0001) が受付サーバの登録者用ディレクトリに作成されます。

### データのコピー・取得 <a name="upload-download"></a>

[DRA Handbook]({{ site.baseurl }}/dra/submission.html) に従い，transfer 以下に作成された受渡し用ディレクトリに送り手はデータをアップロードします。受け手はデータをダウンロードします。

### メタデータの読み込み・作成 <a name="create-metadata"></a>

[D-way にログイン](https://ddbj.nig.ac.jp/D-way/)，対応する submission
(lab_a-0001) を選択した後，メタデータ作成ツールを起動します。 PC に保存した XML ファイル (例 Run.xml) に対応するオブジェクトタブ (例 Run) 中の [Load XML] をクリックし，ファイルをロードします。

XML ファイルの内容が読み込まれます。ロードしたアカウント (lab_a) が Alias と Submission ID
を自動的に上書きします。他の XML ファイルも同様に読み込み，情報を追加します。メタデータを完成させ
DRA に登録します。

## 共同研究プロジェクトのメタデータ <a name="metadata"></a>

#### Center Name (Submission，Study，Sample，Experiment，Run，Analysis) <a name="Center_Name_Submission，Study，Sample，Experiment，Run，Analysis"></a>

Submission，Study，Sample，Experiment，Run，Analysis それぞれについて責任を負う組織の Center Name を記入します。

Center Name が空の XML ファイルをメタデータ作成ツールで読み込むと D-way アカウントの Center Name が自動的に入力されます。シークエンス拠点側で Center Name を空にした XML ファイルを作成し登録者に渡すと，登録者側で Center Name を書き換える手間を省くことができます。

#### Contact (Submission) <a name="Contact_Submission"></a>

Submission に関する連絡 (公開，更新，内容に関する第三者からの問い合わせ) に応じる人の名前とメールアドレスを列挙します。

#### Project ID (Study) <a name="Project_ID_Study"></a>

研究グループレベルでのプロジェクトに対して Project ID を D-way から申請，取得します。大型の研究プロジェクトに対しては DDBJ が独自に ID を付与します。

#### Center Project Name (Study) <a name="Center_Project_Name_Study"></a>

各研究グループで独自のプロジェクト名を付けます。

#### URL Link (Study) <a name="URL_Link_Study"></a>

共同研究プロジェクトのウェブサイトを記入します。

例)  
Label = MEXT Genome Support Project  
URL = http://www.genome-sci.jp/

#### Study Attribute (Study) <a name="Study_Attribute_Study"></a>

共同研究プロジェクトで統一されたキーワードを付与します。キーワードによりプロジェクト単位でのレコード検索が可能になります。

例)  
Tag = grant  
Value = KAKENHI on Innovative Areas - Genome Support Project

#### Run Center (Run) <a name="Run_Center_Run"></a>

ランを実行したシークエンス拠点の Center Name を記入します。

#### Analysis Center (Analysis) <a name="Analysis_Center_Analysis"></a>

解析を実行した組織の Center Name を記入します。
