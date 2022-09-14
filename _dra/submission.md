---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: DRA の登録
category: dra
current_tab: submission
lang: ja
---

<div class="attention" markdown="1">
ヒトを対象とした研究データの登録について  
: <span class="red">研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#submission-of-human-data)を熟読してください。</span>
</div>

## 登録の流れ {#flow}

登録方法の動画 [TogoTV](https://togotv.dbcls.jp/20190523.html) (22分12秒、2019年作成)。

### 1. 登録アカウントを取得 {#step-account}

[D-way 登録アカウント](/account.html)を取得し、
[公開鍵と center name をアカウントに登録](/account.html#enable-dra-submission-in-account)して DRA 登録ができるようにします。

### 2. DRA 新規登録の作成  {#step-new-submission}

[D-way](https://ddbj.nig.ac.jp/D-way) にログインし、[新規 DRA 登録を作成](#new-submission)します。

### 3. データファイルをアップロード  {#step-upload}

[メタデータ](/dra/metadata.html)の登録の前に、シークエンスデータファイルを受付サーバの DRA 登録ディレクトリに[アップロード](/upload.html)します。

### 4. BioProject の登録 {#step-BioProject}

研究プロジェクトを [BioProject に登録](/bioproject/submission.html)します。登録済みの場合は該当する BioProject を選択します。

### 5. BioSample の登録 {#step-BioSample}

シークエンスデータを取得したサンプルを [BioSample に登録](/biosample/submission.html)します。登録済みの場合は該当する BioSample を選択します。

### 6. DRA Experiment の登録 {#step-Experiment}

サンプルから構築したライブラリー、及び、使用したシークエンス機種の情報を [DRA Experiment に登録](#experiment)します。

### 7. DRA Run の登録 {#step-Run}

シークエンスデータファイルを [Run に登録](#run)します。

### 8. データファイルの検証 {#step-validation}

シークエンスデータファイルの中身をチェックする[検証処理](#validation)を開始します。

### 9. アクセッション番号の発行  {#step-accession}

検証処理をパスすると査定を経て [DRA アクセッション番号](#accession)が発行されます。

## DRA へのデータ登録 {#submit}

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

登録ステータスで進捗状況を把握することができます。  
"submission_validated" と "data_error" になった登録が DRA チームで査定されます。

DRA 登録のステータス
{: .tablecaption}

| ステータス                 | 状態                            |
|---|
| New                   | メタデータの登録前                     |
| metadata_submitted   | メタデータが登録された                   |
| data_validating      | データファイルの検証処理中                 |
| data_error           | データファイルの検証処理エラー               |
| submission_validated | メタデータとデータファイルの検証処理を通過         |
| completed             | アクセッション番号が発行された               |
| confidential          | 公開用ファイルの作成処理が完了し、非公開に保たれている |
| Public                | 公開された                     |

## データファイルのアップロード  {#upload} 

データファイルはファイル受付サーバの対応する DRA submission ディレクトリにアップロードします。  
アップロード方法は「[データのアップロード](/upload.html)」をご覧ください。

## メタデータの登録 {#metadata}

メタデータは「[ウェブツールで登録する方法](#metadata-web)」と「[メタデータ登録用エクセル](#metadata-excel)」を使って登録する方法の二通りがあります。  
メタデータのオブジェクト数が100を超えるような多件数であり、ウェブツールの応答が遅く、登録作業が困難な場合はエクセルとそこから生成した XML を使った登録方法を推奨します。

## ウェブツールでのメタデータ作成  {#metadata-web} 

新規登録をクリックし、登録詳細ページへ移動します。

{% include image.html url="books/hdra02.jpg" caption="登録詳細ページへ移動" class="w500" %}

登録詳細ページ中の \[Enter/Update metadata\] からメタデータ作成ツールを起動します。

{% include image.html url="books/hdra03.jpg" caption="メタデータ作成ツールを起動" class="w500" %}

データファイルがアップロードされていない場合、下記のようなメッセージが表示されるので、[データファイルをアップロード](/upload.html)します。

{% include image.html url="books/hdra-not-uploaded.jpg" caption="データファイルがアップロードされていない場合に表示されるメッセージ" class="w300" %}

DRA の[メタデータ](/dra/metadata.html)は複数のオブジェクトから構成されています。  
BioProject と BioSample は別のデータベースに登録されたレコードを参照します。

* Submission (DRA)
* BioProject
* BioSample
* Experiment (DRA)
* Run (DRA)
* Analysis (DRA、登録は任意)

ウェブツールの各項目に内容を英語で入力していきます。  
必須項目は赤色のアスタリスク記号 (<span class="red">＊</span>) で示されています。  
画面下部にある [Save] や次のタブへの移動ボタンをクリックすると、都度、入力内容がチェックされます。エラーが表示された場合は内容を修正します。  

ウェブツールはタブ区切りテキストファイル (tsv) でのメタデータ作成をサポートしています。
記入例は[メタデータ tsv の記入例シート](https://docs.google.com/spreadsheets/d/1DTdUQ-WWOMjOA2eYQWmFYUB24hJysuwhvHLJoDFX4rc)を参照してください。

## Submission {#submission}

データの管理情報を記入します。  
公開予定と登録者を記入します。

{% include image.html url="books/hdra-submission01.jpg" caption="Submission に登録情報を入力" class="w500" %}

## Study {#study}

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

## Sample  {#sample}

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

## Experiment  {#experiment}

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

"Title" は空の場合、自動的に "[Sequencing Instrument Model] [paired end] sequencing of [BioSample ID]" というタイトル（例 "Illumina HiSeq 2000 paired end sequencing of SAMD00025741"）が構築されます。独自の Title を付ける場合は "Title" 欄にタイトルを入力します。　
"BioSample Used" は番号発行済みのサンプルは SAMD アクセッション番号 (例 SAMD00000001) で、未発番のサンプルは "SSUB BioSample Submission ID" : "Sample name" (例 SSUB003746 : Genome bacteria strain A) で指定します。":" の両側の空白は無視されます。

{% include image.html url="books/hdra-experiment03.jpg" caption="Experiment テンプレートファイル" class="w500" %}

入力内容をタブ区切りテキストファイルとして保存し、選択したうえで [Upload TSV file] で読み込ませます。

{% include image.html url="books/hdra-experiment04.jpg" caption="Experiment をタブ区切りテキストファイルとしてアップロード" class="w500" %}

<div class="attention">
エクセルなどの表計算ソフト独自の形式 (.xlsx) ではなくタブ区切りテキストファイルとしてアップロードします。
</div>

## Run  {#run}

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

## Analysis (任意)  {#analysis}

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

## メタデータエクセルを使った登録方法 {#metadata-excel}

Run の数が100を超えるような場合で、ウェブツールの応答が遅く、登録作業が困難な場合はエクセルとそこから生成された XML ファイルを使って登録します。   
ウェブツールと比べ時間のかかる画面遷移が無く、一回の XML ファイルアップロードで登録を済ませることができる利点があります。  
メタデータ登録用エクセルを記入する前に以下を済ませておきます。

* [BioProject の登録](#study)
* [BioSample の登録](#sample)
* [DRA 新規登録の作成](#new-submission)
* [データファイルのアップロード](#upload)

[メタデータ登録用エクセル](/assets/files/submission/dra_metadata.xlsx)をダウンロードし、内容を記入します。  
[エクセルの記入例](/assets/files/submission/example-0001_dra_metadata.xlsx) 

続いて、メタデータ登録用エクセルから生成した [XML を登録](#upload-xml)、もしくは、メタデータ登録用エクセルを[担当者に送付](#send-metadata-excel)します。   

### メタデータ登録用エクセルから 生成した XML を登録 {#upload-xml}

コマンドライン操作に慣れている方はこちらの方法で登録してください。大量件数の登録を効率化することができます。

[メタデータ登録用エクセル](/assets/files/submission/dra_metadata.xlsx)とプログラムを使ってエクセルから XML を生成し、XML を D-way からアップロードすることで多件数を一括で登録します。
[GitHub](https://github.com/ddbj/submission-excel2xml) に記載されている手順に従い、メタデータを記入したエクセルからコマンドラインツールで Submission、Experiment、Run XML を生成します。    

ウェブツールやエクセルで対応していない technical reads 等の XML 要素を追加する場合、[メタデータ XML の例](/dra/example.html)を参照してください。

[D-way](https://ddbj.nig.ac.jp/D-way) にログインし、対象 DRA Submission のページに移動します。   
以下は DRA Submission "test07-0040" に Submission/Experiment/Run XML をアップロードする例です。   

<a href="/assets/images/books/hdra-xmlupload.jpg" title="作成した XML のアップロード" class="group1"><img src="/assets/images/books/hdra-xmlupload.jpg" alt="作成した XML のアップロード" title="作成した XML のアップロード" class="w500"></a>

**処理に時間がかかる場合、ブラウザーがタイムアウトしますが、システムでは登録処理が続いているため、が metadata_submitted になるまで放置します。一日経ってもステータスが変わらない場合は問い合わせてください ([FAQ](/faq/ja/dra-xml-timeout.html))。**   
ステータスが metadata_submitted になったことを確認し、[データファイルの検証処理](#validation)に進みます。   
タイムアウトした後、何度も XML をアップロードしないでください。
状況が分からなくなった場合は [DRA チームに問い合わせてください](/contact-ddbj.html)。

### メタデータ登録用エクセルを担当者に送付 {#send-metadata-excel}

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

### MD5 Check  {#MD5_Check}

メタデータに記載されている MD5 値と、実際のファイルの MD5 値とが一致するかチェックされ、一致しない場合はエラーが表示されます。  
手許のファイルの MD5 値を確認し、メタデータ中の値と一致している場合、転送途中でファイルが破損した可能性があるため、ファイルを再度アップロードします。　　
メタデータ中の MD5 値が間違っている場合、[Enter/Update metadata] からメタデータ中の MD5 値を修正します。

### Data Check  {#Data_Check}

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

メタデータとシークエンスデータに問題がなければ、プレフィックス DR のアクセッション番号が各オブジェクトに発行され、登録者にメールで通知されます。
アクセッション番号は登録詳細画面の "Component" でも確認することができます。ステータスは "completed" になります。  

* Submission (prefix DRA)
* Experiment (prefixDRX)
* Run (prefixDRR)
* Analysis (prefix DRZ)

## データ公開  {#data-release}

データのロード処理が完了するとステータスが "confidential" になります。
即日公開が指定されている場合、深夜にデータが [ftp](https://ddbj.nig.ac.jp/public/ddbj_database/dra/) に公開され、数日以内に [DDBJ Search](https://ddbj.nig.ac.jp/search) でインデックスされます。  
[NCBI SRA](https://www.ncbi.nlm.nih.gov/Traces/sra/sra.cgi) と [EBI SRA](https://ebi.ac.uk/ena) に公開データはミラーリングされます。

DRA のデータは[公開原則](/policies.html#data-release)に従って公開されます。
こちらの FAQ: [BioProject/BioSample/塩基配列データの連動公開の仕組みは？](/faq/ja/bp-bs-seq-release.html) も参照してください。

<div class="attention">
オブジェクトは Submission 単位で公開されます。オブジェクトを異なる時期に公開したい場合は Submission を分けて登録してください。
</div>

### アーカイブ済み fastq/SRA ファイルの期間限定アクセス提供  {#fastq-sra-files}

登録者がアーカイブ済みデータファイルを確認できるようにするため、アクセッション番号が発行された Run の fastq/SRA ファイルは受付サーバ (ftp-private.ddbj.nig.ac.jp) 上の登録者がアクセスできる場所にコピーされます。
ディスク容量の圧迫を防ぐため、コピーされたファイルは作成から一ヶ月後に自動的に削除されます。

- (submitter's home)/report/dra/(DRA submission accession)/fastq/
- (submitter's home)/report/dra/(DRA submission accession)/sra/

例

- /report/dra/DRA000001/fastq/DRR000001.fastq.bz2
- /report/dra/DRA000001/fastq/DRR000002.fastq.bz2
- /report/dra/DRA000001/fastq/DRR000002_1.fastq.bz2
- /report/dra/DRA000001/fastq/DRR000002_2.fastq.bz2
- /report/dra/DRA000001/sra/DRR000001.sra
- /report/dra/DRA000001/sra/DRR000002.sra

## 登録の更新  {#update}

### 公開予定日の変更  {#change-hold-date} 

公開予定日は最長で4年後まで指定でき、繰り返し更新することができます。
Hold Date の [Change] をクリックし、公開予定日変更ページに移動し、予定日を変更します。

<a href="/assets/images/books/hdra-hold.jpg" title="公開予定日の変更" class="group1"><img src="/assets/images/books/hdra-hold.jpg" alt="公開予定日の変更" title="公開予定日の変更" class="w400"></a>

データを即日公開する場合は "Release Now" をクリックします。
作業した日の深夜に公開処理が実施され、[ftp にデータファイルが公開](https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/)され、数日以内に [DDBJ Search](https://ddbj.nig.ac.jp/search) にインデックスされます。

### メタデータの更新  {#update-metadata}

[Enter/Update metadata] からメタデータを編集します。編集不可項目はブロックされています。
必要な編集が完了後、メタデータ作成ツールの [Submit/Update DRA metadata] をクリックし、更新内容を反映させます。

関連する文献が公表された場合は、pubmed ID を含む文献情報を添えて [BioProject チーム](/bioproject/index.html) に追加を依頼します。

### データファイルの追加  {#add-data-files}

DRA では登録が完了した Run データファイルの追加・変更はできません。
別の Submission で新しく Experiment-Run のセットを追加し、既存の BioProject や BioSample を参照することでデータを追加します。

[D-way](https://ddbj.nig.ac.jp/D-way/) にログインし、[New submission] をクリックし、新規 DRA 登録を作成します。 作成した新規登録でデータを追加する対象の BioProject と BioSample を選択します。

- 新たにサンプルを追加する場合は BioProject を共有し、新規登録で BioSample-Experiment-Run を追加します。
- 既存のサンプルにデータを追加する場合は BioProject と BioSample を共有し、新規登録で Experiment-Run を追加します。

続いて DRA Experiment と Run タブで、Experiment、Run とデータファイルを追加します。

メタデータを登録し、ファイルの検証処理を実行します。追加された Experiment/Run オブジェクトに対してアクセッション番号が発行されます。

<div class="attention">
追加したデータに対応する BioProject 番号は同一ですが、Submission に対する DRA 番号は異なります。
</div>

{% include image.html url="books/add_data_files.jpg" caption="サンプルの追加" class="w500" %}

{% include image.html url="books/add_run.jpg" caption="サンプルへのデータ追加" class="w500" %}

DRA 番号を論文で引用しており、既存 DRA Submission にデータファイルを直接追加したい場合、[DRA チームに連絡](/contact-ddbj.html)してください。

### オブジェクトの削除  {#delete}

Experiment、Run や Analysis などを削除する場合は [DRA チームに連絡](/contact-ddbj.html)してください。

## MD5 チェックサム値 {#md5} 

MD5 チェックサム値の取得方法は「[MD5 チェックサム値の取得](/checksum.html)」をご覧ください。



