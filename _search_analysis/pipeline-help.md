---
layout: indexed_content
title: Pipeline ヘルプ
pathname: pipeline-help
category: search_analysis
---

## Basic Analysis(Preprocessing/Mapping/*de novo* Assembly)

<span class="red">**＜注意事項＞** </span>  

  - 問題がございましたらpipeline\_dev@ddbj.nig.ac.jpまでお問い合わせください。
  - Error終了したJOBは、順番にpipelineチームが原因を解析しております。  
    対処策をメールで連絡させて頂く事がございます。
  - JOB投入数の制限は、外しました。
  - [FAQはこちらです。](/faq/ja/index.html?db=pipeline)
  - [DDBJing
    講習会(2013.7.4)資料](https://www.slideshare.net/DDBJslide/ddbjing27-ddbj-pipeline)

**基礎解析部では以下の処理を行います。  
それぞれ画面遷移が異なりますので表の「順」と「画面」でご確認ください。**

1. [Preprocessing](#preprocess)
2. [Mapping(Reference Alignment)](#mapping)
3. [*de novo* Assembly](#assembly)

### Preprocessing<a name="preprocess"></a>

fastq形式ファイルのQSを各種グラフで参照できます。fastq形式ファイルの編集ができます。

<span class="red">**＜注意事項＞**</span>  
ファイルをアップロードする場合、paired-endでは、ファイル名を拡張子の直前で、\_1, \_2 として区別して下さい。(
例：test\_data\_1.fastq , test\_data\_2.fastq )

| 順 | 画面                                                            | 項目                                                                                                                                                     |
| - | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1 | [LOGIN](#login)                                               | User ID, Password                                                                                                                                      |
|   | [Registration form](#Registration_form)                       | User ID, Email address, First name, Last name, Institution with department, Country, Address, Postal/Zip code, Telephone number, Purpose of utilizaion |
| 2 | [Selecting Query Files](#SlctQuery)                           | query files(fasta/fastq)                                                                                                                               |
|   | ＊FTP Uploadの場合、[Registration of fasta/fastq files](#RgstFqFa) | read layout(single-end/paired-end)選択, Instrument model選択, Study title                                                                                  |
| 3 | [Set Perameters for Preprocessing](#SetPrmtPrePro)            | query用fastqファイル編集(QSによるトリム及び、各種条件でのリード除去）                                                                                                              |
| 4 | [Run Confirmation](#Run)                                      | Email address                                                                                                                                          |
| 5 | [Status - Preprocessing/Mapping/*de novo* Assembly](#Status)  | 実行ジョブstatus確認                                                                                                                                          |
| 6 | [Detail view](#View)                                          | fastqファイル, QS Average(PDF), QS Count(PDF), QS Error(PDF)                                                                                               |

  - \+ fastqファイル  
    read編集（指定QS未満をトリム他、各種条件による選別）、片側のみのpaired-endリード削除
  - \+ QS Average(PDF),　QS Count(PDF)  
    編集前のQSの平均と標準偏差を計算、グラフ作成
  - \+ QS Error(PDF)  
    編集後のリード位置毎の削除割合を計算、グラフ作成

Preprocessing処理後のファイルは、「Preprocessingタブ(下図黄色ハイライト)」でMapping/*de novo*
Assemblyのクエリとして選択できるようになります。クエリファイルの先頭は、JOB番号です（下では3845がJOB番号）。

![]({{ site.baseurl }}/assets/images/help/PreprocessingStart.png)

### Mapping(Reference Alignment)<a name="mapping"></a>

| 順 | 画面                                                                         | 項目                                                                                                                                                     |
| - | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1 | [LOGIN](#login)                                                            | User ID, Password                                                                                                                                      |
|   | [Registration form](#Registration_form)                                    | User ID, Email address, First name, Last name, Institution with department, Country, Address, Postal/Zip code, Telephone number, Purpose of utilizaion |
| 2 | [Selecting Query Files](#SlctQuery)                                        | query files(fasta/fastq)                                                                                                                               |
|   | ＊FTP Uploadの場合、[Registration of fasta/fastq files](#RgstFqFa)              | read layout(single-end/paired-end)選択, Instrument model選択, Study title                                                                                  |
| 3 | [Selecting Tools for Basic analysis of DDBJ ANNOTAION PIPELINE](#SlctTool) | tool選択                                                                                                                                                 |
| 4 | [Generating Query Sets from Query Read Files](#Generating)                 | query用fastqファイルのreadファイル選択                                                                                                                             |
| 5 | [Specifying Database of Reference Genome](#Reference)                      | reference genomeのセット                                                                                                                                   |
| 6 | [Set Options](#StOpt)                                                      | tool毎のoption, 'uniq'選択, DNA polymorphism抽出方法選択                                                                                                         |
| 7 | [Run Confirmation](#Run)                                                   | Email address                                                                                                                                          |
| 8 | [Status - Preprocessing/Mapping/*de novo* Assembly](#Status)               | 実行ジョブstatus確認                                                                                                                                          |
| 9 | [Detail view](#View)                                                       | Error Rate, Coverage, Depth, Map ratio, コマンド毎の結果ファイル（samフォーマット）                                                                                        |

  - \+ ErrorRate (mapping, graph)</span>  
    Percentage error of mapped sequence to reference sequence is
    calculated by read position.
  - \+ Coverage (mapping, numeric data)</span>  
    Sum of the length of all contigs/G,  
    where  
    G = Size (bp) of Reference Genome <span class="red">excluding "N"
    nucleotides</span>  
    L = Sequence Length (bp),  
    N = \# sequences.
  - \+ Depth (mapping, numeric data)</span>  
    The average of total sequence length (length of all sequence reads
    in a contig including gaps)/contig  
    Length <span class="red">excluding "N" nucleotides.</span>  
    Reference: Lander ES, Waterman MS, Genomic mapping by fingerprinting
    random  
    clones: a mathematical analysis.  
    Genomics 1988, 2(3):231-239.
  - \+ Map ratio (mapping, numeric data)</span>  
    Number of mapped reads\* / Number of reads  
    \*: the number of reads, which were mapped in both ends.

### *de novo* Assembly<a name="assembly"></a>

| 順 | 画面                                                                         | 項目                                                                                                                                                     |
| - | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1 | [LOGIN](#login)                                                            | User ID, Password                                                                                                                                      |
|   | [Registration form](#Registration_form)                                    | User ID, Email address, First name, Last name, Institution with department, Country, Address, Postal/Zip code, Telephone number, Purpose of utilizaion |
| 2 | [Selecting Query Files](#SlctQuery)                                        | query files(fasta/fastq)                                                                                                                               |
|   | ＊FTP Uploadの場合、[Registration of fasta/fastq files](#RgstFqFa)              | read layout(single-end/paired-end)選択, Instrument model選択, Study title                                                                                  |
| 3 | [Selecting Tools for Basic analysis of DDBJ ANNOTAION PIPELINE](#SlctTool) | tool選択                                                                                                                                                 |
| 4 | [Generating Query Sets from Query Read Files](#Generating)                 | query用fastqファイルのreadファイル選択                                                                                                                             |
| 5 | [Set Options](#StOpt)                                                      | tool毎のoption, 'uniq'選択, DNA polymorphism抽出方法選択                                                                                                         |
| 6 | [Run Confirmation](#Run)                                                   | Email address                                                                                                                                          |
| 7 | [Status - Preprocessing/Mapping/*de novo* Assembly](#Status)               | 実行ジョブstatus確認                                                                                                                                          |
| 8 | [Detail view](#View)                                                       | Contig数, Total contig size, Maximum contig size, Minimum contig size, N50 contig size, コマンド毎の結果ファイル (samフォーマット）                                        |

## LOGIN<a name="login"></a>

1. システム利用に際してのアナウンスは、"twitter"で行ってます。
2. PipelineのIDをお持ちでない場合、「新規アカウント作成」で、登録画面へ遷移します。
3. 試験的に使用したい方は「"guest"としてログイン」で、デモ画面を確認できます。
4. "動作中JOBの確認"では、"guest"としてStatus画面へ遷移し、JOBの実行状況が確認できます。
5. マニュアルおよびチュートリアルが用意されています。
- [English manual](//sites.google.com/a/g.nig.ac.jp/pipeline_help/)
- [DBCLS togotv Tutorial video 1 (JP) - Reference Genome Mapping](//togotv.dbcls.jp/20100617.html)
- [DBCLS togotv Tutorial video 2 (JP) - De novo Assembly](//togotv.dbcls.jp/20110226.html#p01)
6. DRAアカウント登録はこちらのページです。 [please see the page.](/dra/index-j.html)

![]({{ site.baseurl }}/assets/images/help/LOGIN_20120522_1.png)

## Registration form<a name="Registration_form"></a>

### アカウント登録

<span class="red">**＜注意事項＞**</span>

  - スーパーコンピュータの新システム移行に伴い、既にアカウントをお持ちの方も登録内容に追加項目があります。
  - ②に該当する項目をAdditional input(追加項目ページ)から入力します。
  - 登録が完了すると、User ID, Initial passwordが、Email address宛に自動配信されます。
1. Email addressの記入には十分注意して下さい。
2. 新システム移行に伴い、新たに追加した項目です。
3. 全ての記入項目を確認後、登録します。

![]({{ site.baseurl }}/assets/images/help/RegistrationForm_4_2.png)

### パスワードの変更

1. passwordの変更は、各画面の左側メニュー (Change password) からいつでも行えます。
2. パスワードは確認の為、再入力します。
3. 全ての記入項目を確認後、実行します。

![]({{ site.baseurl }}/assets/images/help/RegistrationForm_2_2.png)
![]({{ site.baseurl }}/assets/images/help/Change-password_21.png)

## Selecting Query Files<a name="SlctQuery"></a>

  - [DRA(DDBJ Sequence Read Archive)に登録したデータ](#private)
  - [HTTPでのアップロード（新規、既存ファイル）](#local)
  - [FTPでのアップロード（新規、既存ファイル）](#FTP)
  - [DRA databaseからDRA/ERA/SRA のFASTQファイルをインポート](#import)
  - [Preprocessing処理での結果ファイル](#Preprocessing)
  - [BWA(mapping tool)でのUnmap結果ファイル](#Unmapped)

### DRA(DDBJ Sequence Read Archive)に登録したデータ<a name="private"></a>

1. Private DRA entryを選択します。
2. metadataを選択します。
3. Queryにするファイルを選択します。

![]({{ site.baseurl }}/assets/images/help/Selecting-Query-Files_Private-DRA-entry_2.png)

### HTTPでのアップロード（新規、既存ファイル）<a name="local"></a>

#### 新規にHTTPアップロードする場合

1. HTTP Uploadを選択します。
2. ”ファイルを選択”をクリックしローカルからファイルを選択します。
3.  ”UPLOAD”をクリックします。
4.  ファイルアップロードが完了するとファイル名が表示されます。Aliasを入力できます。
5.  リロードすると表の中にファイルが表示されています。

![]({{ site.baseurl }}/assets/images/help/Selecting-Query-Files_HTTP-Upload_4.png)

#### 既にHTTPアップロードしたファイルから選択する場合

1. HTTP Uploadを選択します。
2. 既にアップロード済みのファイルから選択します。

![]({{ site.baseurl }}/assets/images/help/Selecting-Query-Files_HTTP-Upload_R_2.png)

### FTPでのアップロード（新規、既存ファイル）<a name="FTP"></a>

1. FTP Uploadを選択します。
2. 新規にファイルをアップロードする場合は、[Add new files]をクリックします。<br>-----&gt;[Registration of fastq/fasta files画面へ遷移します。](#RgstFqFa)
3. 既にFTPアップロードしたファイルを使用する時は、リストから選びます。

![]({{ site.baseurl }}/assets/images/help/Selecting-Query-Files_FTP-Upload_51.png)

### DRA databaseからDRA/ERA/SRA のFASTQファイルをインポート<a name="import"></a>

1. Import public DRAを選択します。
2. [Accession
    Numberを検索したい場合](http://ddbj.nig.ac.jp/DRASearch)はこちらからできます。
3. Accession Numberを入力します。
4. Add my DRA entry をクリックします。
5. インポートが終了すると、Statusが"queued"から"done"に変わります。（ページ再読み込み）
6. Private DRA entryを選択して下さい。インポートしたデータが使用可能となっております。

<!-- end list -->

  - インポートが終了するとメールが届きます。
  - Statusが"failed"の時は、再実行してください。
  - Statusが"preparing"の時は、まだDRAにファイルが準備されておりません。後日、再実行してください。

![]({{ site.baseurl }}/assets/images/help/Selecting-Query-Files_Import-public-DRA_41.png)

### Preprocessing処理での結果ファイル<a name="Preprocessing"></a>

1. Preprocessingを選択します。
2. Preprocessing結果ファイルは、「JOB番号\_ファイル名\_e」で表示されています。<br>（BWA Unmap結果ファイルは、「JOB番号_ファイル名.unmapped」で表示されています。
3. 使用するファイルをチェックします。

![]({{ site.baseurl }}/assets/images/help/Selecting-Query-Files_Preprocessing_21.png)

## Registration of fastq/fasta files<a name="RgstFqFa"></a>

### 新規にFTPでFASTA/FASTQファイルをアップロードする方法

#### By FTP(Recommended)

- 1\. Upload FASTA/FASTQ files
1. [FTPクライアントによる転送方法については、こちらのページ](//www.evernote.com/shard/s205/sh/dadca23e-38bc-4b13-a8b1-1c592f5b31e2/439158c40652ddb7d47f2b60ce022291)をご参照ください。
2. FTP clientをローカルPCにインストールし、DDBJのサーバーへFTP転送します。
3. FTP setting内容です。（loginできない場合、パスワード変更を行って下さい。）
4. （FTPでの転送ができない場合、時間がかかりますがHTTPでの転送も可能です。）
5. アップロードが終了したら、画面をリロードしてください。下のリストにファイルが追加されます。
6. アップロードしたファイルをチェックし、次へ進みます。

![]({{ site.baseurl }}/assets/images/help/Registration_-filesUpload_31.png)

- 2\. Select a FASTA/FASTQ file（Uploadしたファイルの注釈付け１）
1. Read layoutでSingle-end又は、Paired-endを選択します。
2. read fileを選択します。（paired\_endの場合はread1と対になるread2も選択）
3. 次へ進みます。

＜Single\_endの場合＞

![]({{ site.baseurl }}/assets/images/help/Registration-of-fastqfasta-files_Select-a-FASTAFASTQ-file_11.png)

＜Paired\_endの場合＞

![]({{ site.baseurl }}/assets/images/help/Registration-of-fastqfasta-files_Select-a-FASTAFASTQ-file_21.png)

- 3\. Input a specification（Uploadしたファイルの注釈付け２）
1. シークエンサの機種を選択します。
2. Study titleを入力します。
3. 登録(SUBMITをクリック)します。
![]({{ site.baseurl }}/assets/images/help/Registration-of-fastqfasta-files_Input-a-specification_11.png)
4. 処理終了、Assembly/Mapplingをクリックすると、[Selecting Query Files画面](#FTP)に遷移します。  
＊Uploadしたファイルを使用して解析が可能になっています。

![]({{ site.baseurl }}/assets/images/help/Registration-complete_12.png)

#### By HTTP(slower)

1. Browse and Uploadをクリックします。
2. ローカルPCからファイルを選択します。開始するとUpload経過が表示されます。
![]({{ site.baseurl }}/assets/images/help/Registration_-filesUpload_HTTP_11.png)
3. Uploadが完了したらページ再読み込みします。
![]({{ site.baseurl }}/assets/images/help/Registration_-filesUpload_HTTP_21.png)
4. ファイルがリストに追加されています。
![]({{ site.baseurl }}/assets/images/help/Registration_-filesUpload_HTTP_31.png)

## Set Parameters for Preprocessing<a name="SetPrmtPrePro"></a>

### Preprocessing処理によるFastq形式ファイルの編集

1. QVタイプを選択します。[（参照：2.2
Encoding）](//en.wikipedia.org/wiki/FASTQ_format#Encoding)
2. 5', 3'両端から、「指定QV」より大きい値の塩基が出現するまでトリムします。  
（トリム後のリード長が24bp以下の場合、そのリードを取り除きます。）
3. 「指定QV」未満の塩基が、トリム後のリード長の「指定％」より多い場合は、そのリードを取り除きます。
4. ペアードエンドリードの場合、片方が条件 ② 、③ により取り除かれた場合、もう一方も取り除かれます。

![]({{ site.baseurl }}/assets/images/help/SetParametersForPreprocessing_21.png)

## Selecting Tools for Basic analysis of DDBJ ANNOTATION PIPELINE<a name="SlctTool"></a>

### 解析ツールの選択

1. まず最初に処理 ( Reference Genome Mapping または、*de novo* Assembly )
    を選択します。
2. ツールを選択します。
3. この後でオプションの指定等あります。  
    ツールのマニュアル（Help列：本マーク）をよくお読み下さい。
4. *de novo* Assembly の場合で、結果contigをqueryとして、続けて Mapping
    (BLAT使用)する場は、下の、Mapping Contigs by de novo Assemble to
    Reference Sequences.を選択します。

![]({{ site.baseurl }}/assets/images/help/Selecting-Tools-for-Basic-Analysis-of-DDBJ-ANNOTATION-PIPELINE_41.png)

## Generating Query Sets from Query Read Files<a name="Generating"></a>

### クエリーファイルを一つのジョブで実行

1. 編集したいファイルにチェックを入れます。
2. confirmをクリックします。
![]({{ site.baseurl }}/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_61.png)
3. 確認
4. 次へ

![]({{ site.baseurl }}/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_71.png)

### クエリーファイルを複数のジョブで実行

1. 一つのジョブとして編集したいファイルにチェックを入れます。
2. confirmをクリックします。
![]({{ site.baseurl }}/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_111.png)
3. 確認
![]({{ site.baseurl }}/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_121.png)
4. 残りのファイルの内、別のジョブとして編集したいファイルにチェックを入れます。
5. confirmをクリックします。
![]({{ site.baseurl }}/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_131.png)
6. クエリセット１、２ができます。（JOBが２つ投入）
7. 次へ

![]({{ site.baseurl }}/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_141.png)

### Mate-pairedを使用してdenovoAssembly(SOAPdenovo,Velvetのみ)

1. 編集したいファイルにチェックを入れます。
2. 先にPair-Endをセットします。（その後Mate-Pairをセットします）
![]({{ site.baseurl }}/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_91.png)
3. 確認
4. 次へ

![]({{ site.baseurl }}/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_101.png)

## Specifying Database of Reference Genome<a name="Reference"></a>

### Major genomeとして登録されているreferenceを使用する場合

1. Major genome setsを選択します。
2. Organisms,Genome setsを選択します。
3. 染色体を選択します。
4. 次へ

![]({{ site.baseurl }}/assets/images/help/Specifying-Database-of-Reference-Genome_11.png)

### 自分で登録したreference (User original sets) を使用する場合

1. User original setsを選択します。
2. Genome setsを選択します。
3. 次へ

![]({{ site.baseurl }}/assets/images/help/Specifying-Database-of-Reference-Genome_21.png)

### 自分でreferenceを(User original setsへ)登録する場合

1. Download or upload referenceを選択します。

- [アクセッション番号(INSD)からのダウンロードの場合]  
2. アクセッション番号(INSD)を入れ"LOAD"をクリックします。

- [ローカルPCからのアップロードの場合]  
2. "ファイルを選択"をクリックし、ローカルPCからファイルを選択したら"UPLOAD"をクリックします。
3. ファイルが表示されます。
4. "CREATE DATASET"をクリックするとCreate Genome Dataset画面へ遷移します。
![]({{ site.baseurl }}/assets/images/help/SpecifyingDatabase_61.png)
5. genomeset の記述を変更できます。
6. "CREATE GENOMESET"をクリックするとSpecifying Database of Reference
Genome画面に戻ります。
![]({{ site.baseurl }}/assets/images/help/SpecifyingDatabase_21.png)
7. ダウンロードしたファイルが"User original sets"に追加され、選択した状態となっています。

![]({{ site.baseurl }}/assets/images/help/SpecifyingDatabase_31.png)

## Set Options<a name="StOpt"></a>

### Setting for *De Novo* Assembly

1. オプションを指定します。
2. [WGS配列データ](/ddbj/wgs.html)としてDDBJに登録する場合は該当にチェックします。
3. 次へ  
＊ツールにより、画面は若干異なります。

![]({{ site.baseurl }}/assets/images/help/Setting-for-De-Novo-Assembly_velvet_1.png)

### Setting for Reference Genome Mapping

1. オプションを指定します。
2. 'Uniq'指定ができます。
3. DNA polymorphism抽出方法を選択します。
4. [WGS配列データ](/ddbj/wgs.html)としてDDBJに登録する場合は該当にチェックします。
5. 次へ  
＊ツールにより、画面は若干異なります。

![]({{ site.baseurl }}/assets/images/help/SetOption_Bwa_21.png)

## Run Confirmation<a name="Run"></a>

### Mapping/*de novo* Assembly

1. ジョブが終了した際の連絡メールアドレスを記入します。
2. 内容を確認したら、"RUN"をクリックします。
3. PopUp表示で再確認します。"OK"で実行。The reservation was completed.画面へ遷移します。
4. "STATUS"をクリックすると、Mapping, *de novo* Assembly 各Status ページへ遷移します。

<span class="red">＊guestユーザーでは、RUNボタンが表示されません</span>

＜Mapping (tool:bwa)の例＞

![]({{ site.baseurl }}/assets/images/help/Run-Confirmation_31.png)

![]({{ site.baseurl }}/assets/images/help/RunConfirmation_PreProcess_31.png)

*＜de novo* Assembly (tool:velvet)の例＞

![]({{ site.baseurl }}/assets/images/help/Run-Confirmation_21.png)

![]({{ site.baseurl }}/assets/images/help/RunConfirmation_PreProcess_311.png)

### Preprocessing

1. ジョブが終了した際の連絡メールアドレスを記入します。
2. 内容を確認します。
3. "RUN"をクリックすると、The reservation was completed.画面へ遷移します。
4. "STATUS"をクリックすると、Status-PreProcess画面へ遷移します。

![]({{ site.baseurl }}/assets/images/help/RunConfirmation_PreProcess_21.png)

![]({{ site.baseurl }}/assets/images/help/RunConfirmation_PreProcess_312.png)

## Status-Mapping/*de novo* Assembly/PreProcess<a name="Status"></a>

### ジョブ実行状況の確認

1. ”Show Only Your Own Job”をチェックします。
2. Reloadをクリックすると、ログインユーザーの結果のみ抽出されます。
3. 実行したジョブのStatusが確認できます。( generating/running/complete/error )
4. "View"クリックで、実行状況の詳細画面へ遷移します。
5. 他のStatus画面へも遷移できます。

![]({{ site.baseurl }}/assets/images/help/Status-Mapping_31.png)

## Detail view<a name="View"></a>

### Mapping

1. 統計結果が表示されます。
2. 実行ログの確認ができます。
3. 各種コマンド結果ファイルがダウンロードできます。

![]({{ site.baseurl }}/assets/images/help/DetailViewMapping5_1.png)

#### 統計結果のダウンロード

- ＜Position errors＞  
![](/images/help/Detail-view_2-300x253.png "Detail view_2")
- \+ ErrorRate (mapping, graph).
Percentage error of mapped sequence to reference sequence is calculated by read position.
- ＜Map ratio＞
- \+ Map ratio (mapping, numeric data)
Number of mapped reads\* / Number of reads  
\*: the number of reads, which were mapped in both ends.
- ＜Depth, Coverage＞
- \+ Depth (mapping, numeric data)  
he average of total sequence length (length of all sequence reads in a contig including gaps)/contig Length <span class="red">excluding "N" nucleotides. </span> 
Reference: Lander ES, Waterman MS, Genomic mapping by fingerprinting random clones: a mathematical analysis.  
Genomics 1988, 2(3):231-239.
- \+ Coverage (mapping, numeric data) 
Sum of the length of all contigs/G,  
where  
G = Size (bp) of Reference Genome <span class="red">excluding "N" nucleotides.</span>  
L = Sequence Length (bp),  
N = \# sequences.

### *de novo* Assembly

1. 統計結果が表示されます。
2. 実行ログの確認ができます。
3. 各種コマンド結果ファイルがダウンロードできます。

![]({{ site.baseurl }}/assets/images/help/DetailViewAssembly1_1.png)

#### 統計量のダウンロード

＜*de novo* Assembly statistics＞
![](/images/help/Detail-view_6_1.tiff "Detail view_6_1")

### Preprocessing

1. 編集後Fastqファイル及び、各種グラフのダウンロードが行えます。
2. 実行ログの確認ができます。

![]({{ site.baseurl }}/assets/images/help/DetailViewPreprocess6_1.png)

#### 編集済みファイル、各種グラフのダウンロード

- ＜Fastq Download＞  
編集後のFastqファイルがダウンロードできます。
- ＜QS Average(PDF)＞  
編集前のQS標準偏差

![]({{ site.baseurl }}/assets/images/help/DetailViewPreprocess2_1.png)

- ＜QS Count(PDF)＞  
編集前のQS平均

![]({{ site.baseurl }}/assets/images/help/DetailViewPreprocess3_1.png)

- ＜QS Error(PDF)＞  
編集後のリード位置毎の削除割合

![]({{ site.baseurl }}/assets/images/help/DetailViewPreprocess4_1.png)

