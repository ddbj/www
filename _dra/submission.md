---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: DRA の登録
category: dra
current_tab: overview
lang: ja
---

## 登録アカウントを取得  {#account}

[D-way 登録アカウント](/account.html)を取得し、[公開鍵をアカウントに登録](/account.html#public-key)して DRA 登録ができるようにします。

## 新規登録の作成  {#new-submission}

[D-way](https://ddbj.nig.ac.jp/D-way/) にログインし、上部の DRA メニューから DRA 登録一覧ページへ進みます。

[New submission] をクリックし、新規登録を作成します。
新規登録に対応するディレクトリが受付サーバ (ftp-private.ddbj.nig.ac.jp) に作成されるので、データファイルを[このディレクトリにアップロードします](/upload.html)。

<div class="attention">
* DDBJ センターから登録者に問い合わせた後、三か月以上回答が無い登録はキャンセルします。  
* データは Submission 単位で公開されます。データを異なる時期に部分公開したい場合は Submission を分けてください。  
* Submission 辺りの上限件数は BioSample:1,000、DRA:2,000 (Run 数)、GEA:1,000 (Assay 数) になります。これらを超える件数を登録する場合、同じ BioProject を参照する複数の submission に分割してください。  
</div>

{% include image.html url="books/hdra01.jpg" caption="新規 DRA 登録の作成" class="w500" %}

## データファイルのアップロード  {#upload}

データファイルはファイル受付サーバの対応する DRA submission ディレクトリにアップロードします。
アップロード方法は「[データのアップロード](/upload.html)」をご覧ください。

## メタデータの登録 {#metadata}

DRA の[メタデータ](/dra/metadata.html)は複数のオブジェクトから構成されています ([構成例](/dra/example.html))。
BioProject と BioSample は別のデータベースに登録されたレコードを参照します。

* Submission (DRA)
* BioProject
* BioSample
* Experiment (DRA)
* Run (DRA)
* Analysis (DRA、登録は任意)

メタデータは「ウェブツールで登録する方法」と「[メタデータ登録用エクセル](#excel)」を使って登録する方法の二通りがあります。
オブジェクト数が多件数の場合はエクセルとそこから生成した XML を使った登録方法を推奨します。

以下ではウェブツールでの作成方法を説明します。

新規登録をクリックし、登録詳細ページへ移動します。

{% include image.html url="books/hdra02.jpg" caption="登録詳細ページへ移動" class="w500" %}

登録詳細ページ中の \[Enter/Update metadata\] からメタデータ作成ツールを起動します。

{% include image.html url="books/hdra03.jpg" caption="メタデータ作成ツールを起動" class="w500" %}

データファイルがアップロードされていない場合、下記のようなメッセージが表示されるので、[データファイルをアップロード](/upload.html)します。

{% include image.html url="books/hdra-not-uploaded.jpg" caption="データファイルがアップロードされていない場合に表示されるメッセージ" class="w300" %}

ウェブツールの各項目に内容を英語で入力していきます。
必須項目は赤色のアスタリスク記号 (<span class="red">＊</span>) で示されています。
画面下部にある [Save] や次のタブへの移動ボタンをクリックすると、都度、入力内容がチェックされます。エラーが表示された場合は内容を修正します。

ウェブツールはタブ区切りテキストファイル (tsv) でのメタデータ作成をサポートしています。
記入例は[メタデータ tsv の記入例シート](https://docs.google.com/spreadsheets/d/1DTdUQ-WWOMjOA2eYQWmFYUB24hJysuwhvHLJoDFX4rc)を参照してください。

### Submission {#submission}

データの管理情報を記入します。
公開予定、登録者と連絡先メールアドレスを記入します。
Submitting organization (旧 center name) にはアカウントの Organiztion の内容が引き写されます。

<div class="attention">
DRA 登録に関するメールは Submission に記載されたメールアドレスに対して送信されます。
D-way アカウントに登録されているメールアドレスを変更した場合、登録に関するメールが送信されるよう、DRA Submission のアドレスも変更する必要があります。
</div>

{% include image.html url="books/hdra-submission01.jpg" caption="Submission に登録情報を入力" class="w500" %}

### BioProject {#bioproject}

<div class="attention">
Study と Sample タブ画面が表示されない場合、Edge や Firefox で開くと表示されるようになる場合があります。
</div>

アカウントで登録した BioProject から該当するものを1つ選びます。
未登録の場合、[register a project] から新たにプロジェクトを登録します。
自身のアカウント以外で登録されたプロジェクトを参照したい場合は [DRA チームに連絡](/contact-ddbj.html)します。

{% include image.html url="books/hdra-bp01.jpg" caption="BioProject の選択、もしくは、新規登録" class="w500" %}

BioProject の登録方法は「[プロジェクトの登録](/bioproject/submission.html)」を参照してください。
登録者と公開予定は DRA Submission で入力した内容が引き写されます。

BioProject の登録後、登録したプロジェクトが選択されます。

{% include image.html url="books//hdra-bp04.jpg" caption="登録された BioProject が選択される" class="w500" %}

### BioSample {#biosample}

アカウントで登録した BioSample から該当するものを選びます (DRA では数サンプルが一般的です)。
チェックボックスを選択し、続いて Shift キーを押しながら次のボックスをクリックすると、サンプルが範囲選択されます。
また、カラム上部のボックスにテキストを入力しフィルターされた全てのサンプルを [Select filtered BioSamples] で選択することができます。
未登録の場合、[register sample(s)] から新たにサンプルを登録します。
自身のアカウント以外で登録されたサンプルを参照したい場合は [DRA チームに連絡](/contact-ddbj.html)します。

{% include image.html url="books/hdra-bs01.jpg" caption="BioSample の選択 or 新規登録" class="w500" %}

BioSample の登録方法は「[サンプルの登録](/biosample/submission.html)」を参照してください。
登録者と公開予定は DRA Submission で入力した内容が引き写されます。

BioSample の登録後、登録したサンプルが選択されます。

{% include image.html url="books/hdra-bs06.jpg" caption="登録されたサンプルが選択される" class="w500" %}

### Experiment {#experiment}

初期状態では選択された BioSample と同数の Experiment と Run が自動生成され、それぞれの BioSample-Experiment-Run がリンクされています。
Experiment と Run の自動生成は Experiment タブの初回表示時にのみ行われ、自動生成後に BioSample を選択し直した場合、追加の自動生成は行われません。

三つの BioSample を選択した場合の Experiment と Run の自動生成。
| BioProject | - BioSample (1) | - Experiment (1) | - Run (1) |
|            | - BioSample (2) | - Experiment (2) | - Run (2) |
|            | - BioSample (3) | - Experiment (3) | - Run (3) |

Experiment は [Add new Experiment(s)] で追加できます。
また、Experiment は [Delete] で削除することができますが、Run から参照されている Experiment は削除することができません。

{% include image.html url="books/hdra-experiment01.jpg" caption="各 BioSample を参照している Experiment の自動生成" class="w500" %}

タブ区切りテキストファイルでまとめて Experiment を作成することができます。
まず [Save] で内容を保存し、アクセッション番号が発行されるまでのオブジェクトの仮の名称である Alias (例 test07-0040_Experiment_0001～0003) を確定します。
続いて [Download TSV file] で内容をタブ区切りテキストファイルとしてダウンロードします。

{% include image.html url="books/hdra-experiment02.jpg" caption="Save して Alias を確定し、タブ区切りテキストファイルをダウンロード" class="w500" %}

エクセルなどの表計算ソフトでメタデータをまとめて作成します。

"Title" は空の場合、自動的に "[Sequencing Instrument Model] [paired end] sequencing of [BioSample ID]" というタイトル（例 "Illumina HiSeq 2000 paired end sequencing of SAMD00025741"）が構築されます。
内容を簡潔に表すタイトルを "Title" 欄に記載することを推奨します。
"BioSample Used" は番号発行済みのサンプルは SAMD アクセッション番号 (例 SAMD00000001) で、未発番のサンプルは "SSUB BioSample Submission ID" : "Sample name" (例 SSUB003746 : Genome bacteria strain A) で指定します。":" の両側の空白は無視されます。

{% include image.html url="books/hdra-experiment03.jpg" caption="Experiment テンプレートファイル" class="w500" %}

入力内容をタブ区切りテキストファイルとして保存し、選択したうえで [Upload TSV file] で読み込ませます。

{% include image.html url="books/hdra-experiment04.jpg" caption="Experiment をタブ区切りテキストファイルとしてアップロード" class="w500" %}

<div class="attention">
エクセルなどの表計算ソフト独自の形式 (.xlsx) ではなくタブ区切りテキストファイルとしてアップロードします。
</div>

### Run {#run}

初期状態で選択された BioSample と同数の Experiment と Run が作成されており、それぞれの Run はユニークな Experiment を参照しています。
下の例では３つの Run が作成され、それぞれが作成された Experiment を参照しています。

[Add another Run(s)] で Run の追加、右端の [Delete] で Run の削除をすることができます。ファイルが紐づいている Run は削除することができません。

Run は [Add another Run(s)] で追加できます。
また、Run は [Delete] で削除することができますが、ファイルがリンクしている Run は削除することができません。

{% include image.html url="books/hdra-run01.jpg" caption="Save して Alias を確定" class="w500" %}

[Save] で Run の Alias を確定すると、内容をタブ区切りテキストファイルで編集できるようになります。
[Select data files for Run] で Run とアップロードしたデータファイルをリンクする画面に移動します。

{% include image.html url="books/hdra-run02.jpg" caption="ファイルと Run をリンクする画面へ移動" class="w500" %}

ディレクトリにアップロードされているファイル一覧が表示されます。ファイルが属すべき Run の Alias を "Run/Analysis contains files" で選択します。

続いて [File type](/dra/metadata.html#File_Type) と [MD5 Checksum](/checksum.html) を入力します。
タブ区切りテキストファイルでまとめて内容を入力する場合、データファイルを区別するため Run に登録するファイルの左端の Run/Analysis に "Run" と入力します。

<div class="attention">
ペアリードが含まれるファイルは同じ Run に含めます。リード名からペアは自動で判定されます。Run に含まれているファイルは１つにまとめられます。
</div>

{% include image.html url="books/hdra-runfinish.jpg" caption="データファイルの属性を入力し Run に結び付ける" class="w500" %}

Analysis (任意) が不要な場合は [Submit/Update DRA metadata] をクリックし、メタデータを登録します。

{% include image.html url="books/hdra-submit01.jpg" caption="DRA メタデータの登録" class="w500" %}

メタデータの登録後、データファイルの検証処理を開始します。"Validate uploaded data files to finish this submission" をクリックします。

{% include image.html url="books/hdra-submit02.jpg" caption="メタデータの登録後、データファイルの検証処理に進む" class="w500" %}

### Analysis (任意) {#analysis}

DRA Run に関連するデータで登録先データベースが無いデータを Analysis に登録することができます。Analysis は NCBI と EBI で共有していません。
登録先データベースは[登録ナビゲーション](/submission-navigation.html)と[データベースと登録窓口一覧](/submission.html)で確認してください。

必要な数の Analysis を作成後、それぞれの Analysis について詳細を入力します。不要な Analysis は [Delete] ボタンで削除することができます。

[Select data files for Analysis] からファイルと Analysis を結び付ける画面に移動します。

{% include image.html url="books/hdra-analysis01.jpg" caption="Analysis の入力" class="w500" %}

データファイルの属性を入力し、Analysis とリンクさせます。
タブ区切りテキストファイルでまとめて内容を入力する場合、Analysis に登録するファイルを区別するために左端の Run/Analysis に "Analysis" と入力します。

{% include image.html url="books/hdra-analysisfile01.jpg" caption="データファイルと Analysis のリンク" class="w500" %}

[Enter/Update metadata] をクリックして内容を登録し、データファイルの検証処理に進みます。
Analysis に登録されたデータファイルは MD5 チェックサム値の破損チェックしか実施されません。

<div class="attention">
件数が多い場合は <a href="/dra/analysis.html">Analysis エクセルファイル</a>を使った登録方法を利用してください。
</div>

### エクセルを使った登録方法  {#excel}

Run の数が100を超えるような場合で、ウェブツールの応答が遅く、登録作業が困難な場合はエクセルとそこから生成された XML ファイルを使って登録します。
ウェブツールと比べ時間のかかる画面遷移が無く、一回の XML ファイルアップロードで登録を済ませることができる利点があります。
メタデータ登録用エクセルを記入する前に以下を済ませておきます。

* [BioProject の登録](#bioproject)
* [BioSample の登録](#biosample)
* [DRA 新規登録の作成](#new-submission)
* [データファイルのアップロード](#upload)

[メタデータ登録用エクセル](https://github.com/ddbj/submission-excel2xml/raw/main/metadata_dra.xlsx)をダウンロードし、内容を記入します。
[エクセルの記入例](https://github.com/ddbj/submission-excel2xml/raw/main/example-0001_dra_metadata.xlsx)

続いて、メタデータ登録用エクセルから生成した「XML を登録」、もしくは、「エクセルを担当者に送付」します。
コマンドライン操作に慣れている方は XML を直接登録してください。大量件数の登録を効率化することができます。

[メタデータ登録用エクセル](https://github.com/ddbj/submission-excel2xml/raw/main/metadata_dra.xlsx)とプログラムを使ってエクセルから XML を生成し、XML を D-way からアップロードすることで多件数を一括で登録します。
[GitHub](https://github.com/ddbj/submission-excel2xml) に記載されている手順に従い、メタデータを記入したエクセルからコマンドラインツールで Submission、Experiment、Run XML を生成します。

ウェブツールやエクセルで対応していない technical reads 等の XML 要素を追加する場合、[メタデータ XML の例](/dra/example-xml.html)を参照してください。

[D-way](https://ddbj.nig.ac.jp/D-way) にログインし、対象 DRA Submission のページに移動します。
以下は DRA Submission "test07-0040" に Submission/Experiment/Run XML をアップロードする例です。

<a href="/assets/images/books/hdra-xmlupload.jpg" title="作成した XML のアップロード" class="group1"><img src="/assets/images/books/hdra-xmlupload.jpg" alt="作成した XML のアップロード" title="作成した XML のアップロード" class="w500"></a>

コマンドライン操作に不慣れな方はエクセルを担当者にメール添付でお送りください。

対象の DRA Ssubmission ID を添え、メール添付でエクセルファイルを [DRA チームに送付](mailto:trace@ddbj.nig.ac.jp)します。
DRA 担当者がエクセルから XML を生成し、対象の DRA Submission に登録者を代行してアップロードします。
完了後、担当者が登録したメタデータの内容をファイルで返送します。内容を確認後、問題が無ければ[データファイルの検証処理](#validation-data-files)に進みます。

## 検証処理 {#validation}

データファイルの MD5 チェックサム値とファイルの中身がチェックされます。
"Data Files" に「Run と Analysis のメタデータに記載されているファイル名」と「データ受付サーバにアップロードされたファイル名とその MD5 値」が表示されます。　　
メタデータに記載されている全てのファイルがアップロードされている場合、[Validate data files] がクリックできる状態になります。　　
アップロードされているファイルのうちメタデータに記載されていないものは無視されます。

画面中の [Validate data files] でデータファイルの検証処理を開始します。

{% include image.html url="books/hdra-validate.jpg" caption="シークエンスデータの検証処理を開始" class="w500" %}

### MD5 Check  {#md5}

メタデータに記載されている MD5 値と、実際のファイルの MD5 値とが一致するかチェックされ、一致しない場合はエラーが表示されます。
手許のファイルの MD5 値を確認し、メタデータ中の値と一致している場合、転送途中でファイルが破損した可能性があるため、ファイルを再度アップロードします。　　
メタデータ中の MD5 値が間違っている場合、[Enter/Update metadata] からメタデータ中の MD5 値を修正します。

### Data Check  {#check}

ファイルの中身がチェックされます。
問題が無ければ登録のステータスが "submission_validated" になり、検証されたファイルが別ディレクトリに移されます。
登録のステータスが "submission_validated" になると DRA スタッフが査定を始めます。DRA スタッフから指示があるまで D-way を操作せずにお待ちください。

### data_error になった場合  {#data_error}

検証処理のいずれかのステップでエラーになると、ステータスが "data_error" になります。
エラーへの対処方法は [FAQ: データファイルの validation エラーへの対処方法は？](/faq/ja/data-validation-error) を参照してください。
[Stop validation] で検証処理を停止するとステータスが "metadata_submitted" に戻るので、メタデータの修正やファイルの再アップロードを行い、再度 [Validate data files] をクリックして検証処理を再度実施します。

{% include image.html url="books/hdra-error.jpg" caption="検証処理を停止" class="w500" %}

{% include image.html url="books/hdra-edit.jpg" caption="データを修正" class="w500" %}

## アクセッション番号の発行  {#accession}

メタデータとシークエンスデータに問題がなければ、[アクセッション番号](/dra/overview.html#accession-numbers)が各オブジェクトに発行され、登録者にメールで通知されます。
アクセッション番号は登録詳細画面の "Component" でも確認することができます。ステータスは "completed" になります。
