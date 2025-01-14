---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: DRA 登録
category: dra
current_tab: submission
lang: ja
---

<div class="attention" markdown="1">
ヒトを対象とした研究データの登録について  
: <span class="red">研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#submission-of-human-data)を熟読してください。 </span>
</div>

## 登録の流れ {#flow}

* [登録アカウントの取得](/account.html)
* [新規登録の作成](#new-submission)
* [データファイルのアップロード](#upload)
* [BioProject の登録](#bioproject)
* [BioSample の登録](#biosample)
* [Submission の入力](#submission)
* [Experiment/Run の入力](#experiment)
	* [ウェブツールで登録](#metadata)
	* [エクセルで登録](#excel)
* [データファイルの検証処理](#validation)
* [アクセッション番号](#accession)

## 登録ステータス {#status}

ステータスで進捗状況を把握することができます。"submission_validated" と "data_error" になった登録が DRA チームで査定されます。

| ステータス                 | 説明                            |
|---|
| new                   | メタデータの登録前                     |
| metadata_submitted   | メタデータが登録された                   |
| data_validating      | データファイルの検証処理中                 |
| data_error           | データファイルの検証処理エラー               |
| submission_validated | メタデータとデータファイルの検証処理を通過         |
| completed             | アクセッション番号が発行された               |
| confidential          | 公開用ファイルの作成が完了し、非公開に保たれている |
| public                | 公開                     |
| wait_for_release         | 公開まで30日以内  |
| canceled                | キャンセル           |

## 登録アカウントの取得  {#account}

[D-way 登録アカウント](/account.html)を取得し、[公開鍵をアカウントに登録](/account.html#public-key)します。

## 新規登録の作成  {#new-submission}

[D-way](https://ddbj.nig.ac.jp/D-way/) にログインし、上部のメニューから DRA 登録一覧ページへ進みます。

[New submission] で新規登録を作成します。
新規登録に対応するディレクトリ（例 test07-0040/）が受付サーバ (ftp-private.ddbj.nig.ac.jp) に作成されるので、このディレクトリにデータファイルを[アップロード](/upload.html)します。

<div class="attention" markdown="1">
* 問い合わせ後、三か月以上回答がない登録はキャンセルします。  
* データは Submission 単位で公開されます。データを異なる時期に公開したい場合は Submission を分けてください。  
* Submission 辺りの上限は BioSample:1,000、DRA:2,000 (Run 数)、GEA:1,000 (Assay 数) になります。これらを超える件数を登録する場合、同じ BioProject を参照する複数の Submission に分割してください。  
</div>

{% include image.html url="books/hdra01.jpg" caption="新規 DRA 登録の作成" class="w500" %}

## データファイルのアップロード {#upload}

データファイルはファイル受付サーバの対応する Submission ディレクトリ（例 test07-0040/）にアップロードします。
アップロード方法は「[データのアップロード](/upload.html)」をご覧ください。データをアップロードしないとメタデータを作成することはできません。

## メタデータの登録 {#metadata}

[メタデータ](/dra/metadata.html)は複数のオブジェクトから構成されています ([構成例](/dra/example.html))。
BioProject と BioSample は別のデータベースに登録されたレコードを参照します。

* Submission (DRA)
* BioProject
* BioSample
* Experiment (DRA)
* Run (DRA)
* Analysis (DRA、登録は任意)

メタデータは「ウェブツールで登録する方法」と「[メタデータ登録用エクセル](#excel)」を使った二通りの方法があります。
オブジェクト数が多い場合はエクセルを使った方法を推奨します。

以下ではウェブツールでの作成方法を説明します。

Submission ID リンク（例 test07-0040）から登録詳細ページへ移動します。

{% include image.html url="books/hdra02.jpg" caption="登録詳細ページへ移動" class="w500" %}

登録詳細ページ中の [Enter/Update metadata] でメタデータ作成ツールを起動します。

{% include image.html url="books/hdra03.jpg" caption="メタデータ作成ツールを起動" class="w500" %}

データファイルがアップロードされていない場合、下記のようなメッセージが表示されるので、メタデータを作成する前に[データファイルをアップロード](/upload.html)します。

{% include image.html url="books/hdra-not-uploaded.jpg" caption="データファイルがアップロードされていない場合に表示されるメッセージ" class="w300" %}

各項目を英語で入力していきます。
必須項目は赤色のアスタリスク記号 (<span class="red">＊</span>) で示されています。
画面下部にある [Save] や別のタブへの移動ボタンをクリックすると、都度、入力内容がチェックされます。エラーが表示された場合は内容を修正します。

ウェブツールはタブ区切りテキストファイル (tsv) でのメタデータ入力をサポートしています。
記入例は[メタデータ tsv の記入例](https://docs.google.com/spreadsheets/d/1DTdUQ-WWOMjOA2eYQWmFYUB24hJysuwhvHLJoDFX4rc)を参照してください。

### Submission {#submission}

管理情報を記入します。
公開予定、登録者と連絡先メールアドレスを記入します。
Submitting organization (旧 center name) はアカウントの Organiztion の内容が引き写されます。

<div class="attention">
DRA 登録に関するメールは Submission に記入されたメールアドレスに対して送信されます。
D-way アカウントに登録されているメールアドレスを変更した場合、登録に関するメールが送信されるよう、DRA Submission のアドレスも変更してください。
</div>

{% include image.html url="books/hdra-submission01.jpg" caption="Submission に登録情報を入力" class="w500" %}

### BioProject {#bioproject}

アカウントで登録した BioProject から該当するものを1つ選びます。
未登録の場合、[register a project] から新たにプロジェクトを登録します。
自身のアカウント以外で登録された BioProject を参照したい場合は[外部参照を申請](https://docs.google.com/forms/d/e/1FAIpQLSf1tMKEC_mhztGhtfKV0sLSGt1vY-I4Jb_RLQF64Li1d6_-Xg/viewform)します。

{% include image.html url="books/hdra-bp01.jpg" caption="BioProject の選択、もしくは、新規登録" class="w500" %}

BioProject の登録方法は「[プロジェクトの登録](/bioproject/submission.html)」を参照してください。
登録者と公開予定は DRA Submission で入力した内容が引き写されます。BioProject の登録後、登録したプロジェクトが選択された状態になります。

{% include image.html url="books//hdra-bp04.jpg" caption="登録された BioProject が選択された状態" class="w500" %}

### BioSample {#biosample}

アカウントで登録した BioSample から該当するものを選びます (一般的に DRA ではサンプルは複数になります)。
チェックボックスを選択し、続いて Shift キーを押しながら次のボックスをクリックすると、サンプルが範囲選択されます。
また、カラム上部のボックスにテキストを入力しフィルターされた全てのサンプルを [Select filtered BioSamples] で選択することができます。
未登録の場合、[register sample(s)] から新たにサンプルを登録します。
自身のアカウント以外で登録された BioSample を参照したい場合は[外部参照を申請](https://docs.google.com/forms/d/e/1FAIpQLSf1tMKEC_mhztGhtfKV0sLSGt1vY-I4Jb_RLQF64Li1d6_-Xg/viewform)します。

{% include image.html url="books/hdra-bs01.jpg" caption="BioSample の選択、もしくは、新規登録" class="w500" %}

BioSample の登録方法は「[サンプルの登録](/biosample/submission.html)」を参照してください。
登録者と公開予定は DRA Submission で入力した内容が引き写されます。BioSample の登録後、登録したサンプルが選択された状態になります。

{% include image.html url="books/hdra-bs06.jpg" caption="登録されたサンプルが選択された状態" class="w500" %}

### Experiment {#experiment}

初期状態では選択された BioSample と同数の Experiment と Run が自動生成され、それぞれの BioSample-Experiment-Run がリンクされた状態になります。
Experiment と Run の自動生成は Experiment タブの初回表示時にのみ実施され、その後は実施されません。

三つの BioSample を選択した場合の Experiment と Run の自動生成。

| BioProject | - BioSample (1) | - Experiment (1) | - Run (1) |
|            | - BioSample (2) | - Experiment (2) | - Run (2) |
|            | - BioSample (3) | - Experiment (3) | - Run (3) |

Experiment は [Add new Experiment(s)] で追加できます。
また、Experiment は [Delete] で削除することができますが、Run から参照されている Experiment は削除できません。

{% include image.html url="books/hdra-experiment01.jpg" caption="BioSample を参照している Experiment の自動生成" class="w500" %}

タブ区切りテキストファイルでまとめて Experiment を入力することができます。
まず [Save] で内容を保存し、Alias（アクセッション番号が発行されるまでのオブジェクトの仮の名称。例 test07-0040_Experiment_0001～0003）を確定します。
続いて [Download TSV file] で内容をタブ区切りテキストファイルとしてダウンロードします。

{% include image.html url="books/hdra-experiment02.jpg" caption="Save して Alias を確定し、タブ区切りテキストファイルをダウンロード" class="w500" %}

エクセルなどの表計算ソフトでメタデータをまとめて作成します。

"Title" は空の場合、自動的に "[Sequencing Instrument Model] [paired end] sequencing of [BioSample accession]" というタイトル（例 "Illumina HiSeq 2000 paired end sequencing of SAMD00025741"）が構築されます。
内容を簡潔に表すタイトルを "Title" 欄に記載することを推奨します。
"BioSample Used" では BioSample アクセッション番号 (例 SAMD00000001)、もしくは、"SSUB Submission ID" : "Sample name" (例 SSUB003746 : Genome bacteria strain A) の形式で参照する BioSample を指定します。":" の両側の空白は無視されます。

{% include image.html url="books/hdra-experiment03.jpg" caption="Experiment タブ区切りテキストファイル" class="w500" %}

入力内容をタブ区切りテキストファイルとして保存し、選択したうえで [Upload TSV file] で読み込ませます。

{% include image.html url="books/hdra-experiment04.jpg" caption="Experiment をタブ区切りテキストファイルとしてアップロード" class="w500" %}

### Run {#run}

初期状態では、選択された Experiment と同数の Run が作成され、それぞれの Experiment を参照しています。下の例では３つの Run が作成され、それぞれが作成された Experiment を参照しています。

[Add another Run(s)] で Run の追加、右端の [Delete] で Run を削除します。ファイルが紐づいている Run は削除することができません。

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
ペアリードが含まれるファイルは同じ Run に含めます。リード名からペアは自動で判定されます。Run に含まれているファイルは１つの sra/fastq ファイルに変換されます。
</div>

{% include image.html url="books/hdra-runfinish.jpg" caption="データファイルの属性を入力し、ファイルと Run を結び付ける" class="w500" %}

Analysis (任意) が不要な場合は [Submit/Update DRA metadata] でメタデータを登録します。

{% include image.html url="books/hdra-submit01.jpg" caption="DRA メタデータの登録" class="w500" %}

メタデータの登録後、データファイルの検証処理を開始します。"Validate uploaded data files to finish this submission" をクリックします。

{% include image.html url="books/hdra-submit02.jpg" caption="メタデータの登録後、データファイルの検証処理に進む" class="w500" %}

### Analysis (任意) {#analysis}

DRA Run に関連するデータで登録先データベースがないデータを Analysis に登録することができます。Analysis は NCBI と EBI で共有していません。
登録先データベースは[登録ナビゲーション](/submission-navigation.html)と[データベースと登録窓口一覧](/submission.html)で確認してください。

Analysis を作成後、それぞれの Analysis について内容を記入します。不要な Analysis は [Delete] ボタンで削除します。

[Select data files for Analysis] からファイルと Analysis を結び付ける画面に移動します。

{% include image.html url="books/hdra-analysis01.jpg" caption="Analysis の入力" class="w500" %}

データファイルの属性を入力し、Analysis とリンクさせます。
タブ区切りテキストファイルでまとめて入力する場合、Analysis に登録するファイルを区別するため、左端の Run/Analysis に "Analysis" と入力します。

{% include image.html url="books/hdra-analysisfile01.jpg" caption="データファイルと Analysis のリンク" class="w500" %}

[Enter/Update metadata] で内容を登録し、データファイルの検証処理に進みます。
Analysis に登録されたデータファイルは MD5 チェックサム値の一致チェックのみ実施されます。

<div class="attention">
件数が多い場合は <a href="/dra/analysis.html">Analysis エクセルファイル</a>を使った登録方法をご利用ください。
</div>

### エクセルを使った登録方法 {#excel}

ウェブツールと比べて画面遷移が無く、一回の XML ファイルアップロードで登録を済ませることができます。
メタデータ登録用エクセルを記入する前に以下を済ませておきます。

* [BioProject の登録](#bioproject)
* [BioSample の登録](#biosample)
* [DRA 新規登録の作成](#new-submission)
* [データファイルのアップロード](#upload)

[メタデータ登録用エクセル](https://github.com/ddbj/submission-excel2xml/raw/main/metadata_dra.xlsx)をダウンロードし、内容を記入します。   
続いて、以下の手順でエクセルからコマンドラインで XML を生成し、XML を登録します。  

手順が分からない方は対象の DRA Submission ID を添え、メール添付でエクセルファイルを [DRA 担当者に送付](mailto:trace@ddbj.nig.ac.jp)してください。担当者が XML を生成し、登録します。内容を確認後、問題がなければ[データファイルの検証処理](#validation-data-files)に進んでください。

[GitHub](https://github.com/ddbj/submission-excel2xml) に記載されている手順に従い、エクセルからコマンドラインツールで Submission、Experiment、Run XML を生成します。

ウェブツールやエクセルで入力できない technical read 等の XML 要素を追加する場合、[メタデータ XML の例](/dra/example-xml.html)を参照してください。

[D-way](https://ddbj.nig.ac.jp/D-way) にログインし、対象 Submission のページに移動します。
以下は DRA Submission "test07-0040" に Submission/Experiment/Run XML をアップロードする例です。

{% include image.html url="books/hdra-xmlupload.jpg" caption="XML のアップロード" class="w500" %}

## 検証処理 {#validation}

データファイルのチェックサム値とファイルの中身がチェックされます。
"Data Files" に「メタデータに記載されているファイル名と md5 値」及び「受付サーバにアップロードされたファイル名と md5 値」が表示されます。　　
メタデータに記載されている全てのファイルがアップロードされている場合、[Validate data files] が押下できる状態になります。アップロードされているファイルのうちメタデータに記載されていないものは無視されます。  

画面中の [Validate data files] でデータファイルの検証処理を開始します。

{% include image.html url="books/hdra-validate.jpg" caption="データファイルの検証処理を開始" class="w500" %}

### MD5 Check  {#md5}

メタデータに記載されている MD5 値と、実際のそれとが一致するかチェックされます。一致しなかった場合はエラーが表示されます。
手許のファイルの MD5 値がメタデータ中のそれと一致している場合、転送過程でファイルが破損した可能性があるため、ファイルを再度アップロードします。メタデータ中の MD5 値が間違っている場合、[Enter/Update metadata] からメタデータ中の MD5 値を修正します。

### Data Check  {#check}

ファイルの中身がチェックされます。
問題が無ければ登録のステータスが "submission_validated" になり、検証されたファイルが別ディレクトリに移されます。
登録のステータスが "submission_validated" になると DRA スタッフが査定を始めます。DRA スタッフから指示があるまで D-way を操作せずにお待ちください。

### Data Error {#data_error}

検証処理のいずれかのステップでエラーになると、ステータスが "data_error" になります。
エラーへの対処方法は「[FAQ: データファイルの validation エラーへの対処方法は？](/faq/ja/data-validation-error)」を参照してください。
[Stop validation] で検証処理を停止するとステータスが "metadata_submitted" に戻るので、メタデータの修正やファイルの再アップロードを行い、再度 [Validate data files] をクリックして検証処理を実施します。

{% include image.html url="books/hdra-error.jpg" caption="検証処理を停止" class="w500" %}

{% include image.html url="books/hdra-edit.jpg" caption="データを修正" class="w500" %}

## アクセッション番号 {#accession}

メタデータとデータファイルに問題がなければ、メタデータオブジェクトにアクセッション番号が発行され、登録者にメールで通知されます。番号は登録詳細ページでも確認することができます。

* Experiment (プレフィックス DRX)
* Run (プレフィックス DRR)
* Analysis (プレフィックス DRZ)

アクセッション番号の引用については「[FAQ: 投稿論文ではどのアクセッション番号を引用するべきでしょうか？](/faq/ja/cite-accession.html)」をご覧ください。

## データ公開 {#data-release}

データは[公開原則](/policies.html#data-release)に従って公開されます。
参照関係にあるデータとの連動公開については、「FAQ: [BioProject/BioSample/塩基配列データの連動公開の仕組みは？](/faq/ja/bp-bs-seq-release.html)」を参照してください。  
公開されるとデータが [ftp](https://ddbj.nig.ac.jp/public/ddbj_database/dra/) に公開され、数日以内に [DDBJ Search](https://ddbj.nig.ac.jp/search) でインデックスされ、[NCBI SRA](https://www.ncbi.nlm.nih.gov/sra/) と [EBI SRA](https://ebi.ac.uk/ena) にミラーリングされます。

<div class="attention">
オブジェクトは Submission 単位で公開されます。オブジェクトを異なる時期に公開したい場合は Submission を分けてください。
</div>

## 登録済みファイルの提供 {#fastq-sra-files}

登録済みデータを確認できるようにするため、登録が完了した Run の fastq/sra ファイルは受付サーバ (ftp-private.ddbj.nig.ac.jp) の登録者領域にコピーされます。ディスク容量圧迫を防ぐため、コピーされたファイルは一ヶ月後に削除されます。

- /report/dra/(DRA submission accession)/fastq/
- /report/dra/(DRA submission accession)/sra/

例 /report/dra/DRA000001/fastq/DRR000001.fastq.bz2

## 更新 {#update}

公開予定日延長、メタデータの更新やデータの追加・削除については [DRA の更新](/dra/update.html)をご覧ください。

