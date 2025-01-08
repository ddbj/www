---
layout: indexed_content
title: Pipeline（サービス終了）
category: services
lang: ja
related_pages:
  - title: ARSA ヘルプ
    url: /services/arsa.html
  - title: BLAST ヘルプ
    url: /services/blast.html
  - title: getentry ヘルプ
    url: /services/getentry.html
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
---

## Basic Analysis(Preprocessing/Mapping/*de novo* Assembly)  {#basic}

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

### Preprocessing  {#preprocess}

fastq形式ファイルのQSを各種グラフで参照できます。fastq形式ファイルの編集ができます。

<span class="red">**＜注意事項＞**</span>  
ファイルをアップロードする場合、paired-endでは、ファイル名を拡張子の直前で、\_1, \_2 として区別して下さい。(
例：test\_data\_1.fastq , test\_data\_2.fastq )

| 順 | 画面                                                            | 項目                                                                                                                                                     |
 |---|
| 1 | [LOGIN](#login)                                               | User ID, Password                                                                                                                                      |
|   | [Registration form](#Registration_form)                       | User ID, Email address, First name, Last name, Institution with department, Country, Address, Postal/Zip code, Telephone number, Purpose of utilizaion |
| 2 | [Selecting Query Files](#SlctQuery)                           | query files(fasta/fastq)                                                                                                                               |
|   | ＊FTP Uploadの場合、[Registration of fasta/fastq files](#RgstFqFa) | read layout(single-end/paired-end)選択, Instrument model選択, Study title                                                                                  |
| 3 | [Set Perameters for Preprocessing](#SetPrmtPrePro)            | query用fastqファイル編集(QSによるトリム及び、各種条件でのリード除去）                                                                                                              |
| 4 | [Run Confirmation](#Run)                                      | Email address                                                                                                                                          |
| 5 | [Status - Preprocessing/Mapping/*de novo* Assembly](#Status)  | 実行ジョブstatus確認                                                                                                                                          |
| 6 | [Detail view](#View)                                          | fastqファイル, QS Average(PDF), QS Count(PDF), QS Error(PDF)                                                                                               |

\+ fastqファイル  
: read編集（指定QS未満をトリム他、各種条件による選別）、片側のみのpaired-endリード削除

\+ QS Average(PDF),　QS Count(PDF)  
: 編集前のQSの平均と標準偏差を計算、グラフ作成

\+ QS Error(PDF)  
: 編集後のリード位置毎の削除割合を計算、グラフ作成

Preprocessing処理後のファイルは、「Preprocessingタブ(下図黄色ハイライト)」でMapping/*de novo*
Assemblyのクエリとして選択できるようになります。クエリファイルの先頭は、JOB番号です（下では3845がJOB番号）。

[![](/assets/images/help/PreprocessingStart.png)](/assets/images/help/PreprocessingStart.png){:.group1}

### Mapping (Reference Alignment) {#mapping} 

| 順 | 画面                                                                         | 項目                                                                                                                                                     |
 |---|
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

\+ ErrorRate (mapping, graph)
: Percentage error of mapped sequence to reference sequence is
calculated by read position.

\+ Coverage (mapping, numeric data)
: Sum of the length of all contigs/G,  
where  
G = Size (bp) of Reference Genome <span class="red">excluding "N"
nucleotides
L = Sequence Length (bp),  
N = \# sequences.

\+ Depth (mapping, numeric data)
: The average of total sequence length (length of all sequence reads
in a contig including gaps)/contig  
Length <span class="red">excluding "N" nucleotides.</span>  
Reference: Lander ES, Waterman MS, Genomic mapping by fingerprinting
random  
clones: a mathematical analysis.  
Genomics 1988, 2(3):231-239.

\+ Map ratio (mapping, numeric data)
: Number of mapped reads\* / Number of reads  
\*: the number of reads, which were mapped in both ends.

### *de novo* Assembly  {#assembly} 

| 順 | 画面                                                                         | 項目                                                                                                                                                     |
 |---|
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

## LOGIN {#login} 

1. システム利用に際してのアナウンスは、"twitter"で行ってます。
2. PipelineのIDをお持ちでない場合、「新規アカウント作成」で、登録画面へ遷移します。
3. 試験的に使用したい方は「"guest"としてログイン」で、デモ画面を確認できます。
4. "動作中JOBの確認"では、"guest"としてStatus画面へ遷移し、JOBの実行状況が確認できます。
5. マニュアルおよびチュートリアルが用意されています。
- [English manual](//sites.google.com/a/g.nig.ac.jp/pipeline_help/)
- [DBCLS togotv Tutorial video 1 (JP) - Reference Genome Mapping](//togotv.dbcls.jp/20100617.html)
- [DBCLS togotv Tutorial video 2 (JP) - De novo Assembly](//togotv.dbcls.jp/20110226.html#p01)
6. DRAアカウント登録はこちらのページです。 [please see the page.](/dra/index.html)

[![](/assets/images/help/LOGIN_20120522_1.png)](/assets/images/help/LOGIN_20120522_1.png){:.group1}

## Registration form {#Registration_form} 

### アカウント登録  {#account}

<span class="red">**＜注意事項＞**</span>

  - スーパーコンピュータの新システム移行に伴い、既にアカウントをお持ちの方も登録内容に追加項目があります。
  - ②に該当する項目をAdditional input(追加項目ページ)から入力します。
  - 登録が完了すると、User ID, Initial passwordが、Email address宛に自動配信されます。
1. Email addressの記入には十分注意して下さい。
2. 新システム移行に伴い、新たに追加した項目です。
3. 全ての記入項目を確認後、登録します。

[![](/assets/images/help/RegistrationForm_4_2.png)](/assets/images/help/RegistrationForm_4_2.png){:.group1}

### パスワードの変更  {#password}

1. passwordの変更は、各画面の左側メニュー (Change password) からいつでも行えます。
2. パスワードは確認の為、再入力します。
3. 全ての記入項目を確認後、実行します。

[![](/assets/images/help/RegistrationForm_2_2.png)](/assets/images/help/RegistrationForm_2_2.png){:.group1}
[![](/assets/images/help/Change-password_21.png)](/assets/images/help/Change-password_21.png){:.group1}

## Selecting Query Files {#SlctQuery} 

  - [DRA(DDBJ Sequence Read Archive)に登録したデータ](#private)
  - [HTTPでのアップロード（新規、既存ファイル）](#local)
  - [FTPでのアップロード（新規、既存ファイル）](#FTP)
  - [DRA databaseからDRA/ERA/SRA のFASTQファイルをインポート](#import)
  - [Preprocessing処理での結果ファイル](#Preprocessing)
  - [BWA(mapping tool)でのUnmap結果ファイル](#Unmapped)

### DRA(DDBJ Sequence Read Archive)に登録したデータ {#private} 

1. Private DRA entryを選択します。
2. metadataを選択します。
3. Queryにするファイルを選択します。

[![](/assets/images/help/Selecting-Query-Files_Private-DRA-entry_2.png)](/assets/images/help/Selecting-Query-Files_Private-DRA-entry_2.png){:.group1}

### HTTPでのアップロード（新規、既存ファイル） {#local} 

#### 新規にHTTPアップロードする場合  {#新規にHTTPアップロードする場合}

1. HTTP Uploadを選択します。
2. ”ファイルを選択”をクリックしローカルからファイルを選択します。
3.  ”UPLOAD”をクリックします。
4.  ファイルアップロードが完了するとファイル名が表示されます。Aliasを入力できます。
5.  リロードすると表の中にファイルが表示されています。

[![](/assets/images/help/Selecting-Query-Files_HTTP-Upload_4.png)](/assets/images/help/Selecting-Query-Files_HTTP-Upload_4.png){:.group1}

#### 既にHTTPアップロードしたファイルから選択する場合  {#既にHTTPアップロードしたファイルから選択する場合}

1. HTTP Uploadを選択します。
2. 既にアップロード済みのファイルから選択します。

[![](/assets/images/help/Selecting-Query-Files_HTTP-Upload_R_2.png)](/assets/images/help/Selecting-Query-Files_HTTP-Upload_R_2.png){:.group1}

### FTPでのアップロード（新規、既存ファイル） {#FTP} 

1. FTP Uploadを選択します。
2. 新規にファイルをアップロードする場合は、[Add new files]をクリックします。<br>-----&gt;[Registration of fastq/fasta files画面へ遷移します。](#RgstFqFa)
3. 既にFTPアップロードしたファイルを使用する時は、リストから選びます。

[![](/assets/images/help/Selecting-Query-Files_FTP-Upload_51.png)](/assets/images/help/Selecting-Query-Files_FTP-Upload_51.png){:.group1}

### DRA databaseからDRA/ERA/SRA のFASTQファイルをインポート {#import} 

1. Import public DRAを選択します。
2. [Accession
    Numberを検索したい場合](https://ddbj.nig.ac.jp/search)はこちらからできます。
3. Accession Numberを入力します。
4. Add my DRA entry をクリックします。
5. インポートが終了すると、Statusが"queued"から"done"に変わります。（ページ再読み込み）
6. Private DRA entryを選択して下さい。インポートしたデータが使用可能となっております。

<!-- end list -->

  - インポートが終了するとメールが届きます。
  - Statusが"failed"の時は、再実行してください。
  - Statusが"preparing"の時は、まだDRAにファイルが準備されておりません。後日、再実行してください。

[![](/assets/images/help/Selecting-Query-Files_Import-public-DRA_41.png)](/assets/images/help/Selecting-Query-Files_Import-public-DRA_41.png){:.group1}

### Preprocessing処理での結果ファイル {#Preprocessing}

1. Preprocessingを選択します。
2. Preprocessing結果ファイルは、「JOB番号\_ファイル名\_e」で表示されています。<br>（BWA Unmap結果ファイルは、「JOB番号_ファイル名.unmapped」で表示されています。<a name="Unmapped"></a>
3. 使用するファイルをチェックします。

[![](/assets/images/help/Selecting-Query-Files_Preprocessing_21.png)](/assets/images/help/Selecting-Query-Files_Preprocessing_21.png){:.group1}

## Registration of fastq/fasta files {#RgstFqFa} 

### 新規にFTPでFASTA/FASTQファイルをアップロードする方法  {#ftpupload}

#### By FTP(Recommended)

- 1\. Upload FASTA/FASTQ files
1. [FTPクライアントによる転送方法については、こちらのページ](//www.evernote.com/shard/s205/sh/dadca23e-38bc-4b13-a8b1-1c592f5b31e2/439158c40652ddb7d47f2b60ce022291)をご参照ください。
2. FTP clientをローカルPCにインストールし、DDBJのサーバーへFTP転送します。
3. FTP setting内容です。（loginできない場合、パスワード変更を行って下さい。）
4. （FTPでの転送ができない場合、時間がかかりますがHTTPでの転送も可能です。）
5. アップロードが終了したら、画面をリロードしてください。下のリストにファイルが追加されます。
6. アップロードしたファイルをチェックし、次へ進みます。

[![](/assets/images/help/Registration_-filesUpload_31.png)](/assets/images/help/Registration_-filesUpload_31.png){:.group1}

- 2\. Select a FASTA/FASTQ file（Uploadしたファイルの注釈付け１）
1. Read layoutでSingle-end又は、Paired-endを選択します。
2. read fileを選択します。（paired\_endの場合はread1と対になるread2も選択）
3. 次へ進みます。

＜Single\_endの場合＞

[![](/assets/images/help/Registration-of-fastqfasta-files_Select-a-FASTAFASTQ-file_11.png)](/assets/images/help/Registration-of-fastqfasta-files_Select-a-FASTAFASTQ-file_11.png){:.group1}

＜Paired\_endの場合＞

[![](/assets/images/help/Registration-of-fastqfasta-files_Select-a-FASTAFASTQ-file_21.png)](/assets/images/help/Registration-of-fastqfasta-files_Select-a-FASTAFASTQ-file_21.png){:.group1}

- 3\. Input a specification（Uploadしたファイルの注釈付け２）
1. シークエンサの機種を選択します。
2. Study titleを入力します。
3. 登録(SUBMITをクリック)します。<br>
<img src="/assets/images/help/Registration-of-fastqfasta-files_Input-a-specification_11.png" alt="" title="" class="">
4. 処理終了、Assembly/Mapplingをクリックすると、[Selecting Query Files画面](#FTP)に遷移します。<br>＊Uploadしたファイルを使用して解析が可能になっています。
[![](/assets/images/help/Registration-complete_12.png)](/assets/images/help/Registration-complete_12.png){:.group1}

#### By HTTP(slower)  {#By_HTTPslower}

1. Browse and Uploadをクリックします。
2. ローカルPCからファイルを選択します。開始するとUpload経過が表示されます。
[![](/assets/images/help/Registration_-filesUpload_HTTP_11.png)](/assets/images/help/Registration_-filesUpload_HTTP_11.png){:.group1}
3. Uploadが完了したらページ再読み込みします。<br>
[![](/assets/images/help/Registration_-filesUpload_HTTP_21.png)](/assets/images/help/Registration_-filesUpload_HTTP_21.png){:.group1}
4. ファイルがリストに追加されています。<br>
[![](/assets/images/help/Registration_-filesUpload_HTTP_31.png)](/assets/images/help/Registration_-filesUpload_HTTP_31.png){:.group1}

## Set Parameters for Preprocessing {#SetPrmtPrePro} 

### Preprocessing処理によるFastq形式ファイルの編集  {#Fastqformat}

1. QVタイプを選択します。[（参照：2.2
Encoding）](//en.wikipedia.org/wiki/FASTQ_format#Encoding)
2. 5', 3'両端から、「指定QV」より大きい値の塩基が出現するまでトリムします。  
（トリム後のリード長が24bp以下の場合、そのリードを取り除きます。）
3. 「指定QV」未満の塩基が、トリム後のリード長の「指定％」より多い場合は、そのリードを取り除きます。
4. ペアードエンドリードの場合、片方が条件 ② 、③ により取り除かれた場合、もう一方も取り除かれます。

[![](/assets/images/help/SetParametersForPreprocessing_21.png)](/assets/images/help/SetParametersForPreprocessing_21.png){:.group1}

## Selecting Tools for Basic analysis of DDBJ ANNOTATION PIPELINE {#SlctTool} 

### 解析ツールの選択  {#selecttool}

1. まず最初に処理 ( Reference Genome Mapping または、*de novo* Assembly )
    を選択します。
2. ツールを選択します。
3. この後でオプションの指定等あります。  
    ツールのマニュアル（Help列：本マーク）をよくお読み下さい。
4. *de novo* Assembly の場合で、結果contigをqueryとして、続けて Mapping
    (BLAT使用)する場は、下の、Mapping Contigs by de novo Assemble to
    Reference Sequences.を選択します。

[![](/assets/images/help/Selecting-Tools-for-Basic-Analysis-of-DDBJ-ANNOTATION-PIPELINE_41.png)](/assets/images/help/Selecting-Tools-for-Basic-Analysis-of-DDBJ-ANNOTATION-PIPELINE_41.png){:.group1}

## Generating Query Sets from Query Read Files {#Generating} 

### クエリーファイルを一つのジョブで実行  {#Query1}

1. 編集したいファイルにチェックを入れます。
2. confirmをクリックします。<br>
[![](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_61.png)](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_61.png){:.group1}
3. 確認
4. 次へ

[![](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_71.png)](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_71.png){:.group1}

### クエリーファイルを複数のジョブで実行  {#Query2}

1. 一つのジョブとして編集したいファイルにチェックを入れます。
2. confirmをクリックします。<br>
[![](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_111.png)](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_111.png){:.group1}
3. 確認<br>
[![](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_121.png)](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_121.png){:.group1}
4. 残りのファイルの内、別のジョブとして編集したいファイルにチェックを入れます。
5. confirmをクリックします。<br>
[![](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_131.png)](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_131.png){:.group1}
6. クエリセット１、２ができます。（JOBが２つ投入）
7. 次へ

[![](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_141.png)](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_141.png){:.group1}

### Mate-pairedを使用してdenovoAssembly(SOAPdenovo,Velvetのみ)  {#MatePair}

1. 編集したいファイルにチェックを入れます。
2. 先にPair-Endをセットします。（その後Mate-Pairをセットします）
[![](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_91.png)](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_91.png){:.group1}
3. 確認
4. 次へ

[![](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_101.png)](/assets/images/help/Generating-Query-Sets-from-Query-Read-Files_101.png){:.group1}

## Specifying Database of Reference Genome {#Reference} 

### Major genomeとして登録されているreferenceを使用する場合  {#MajorGenome}

1. Major genome setsを選択します。
2. Organisms,Genome setsを選択します。
3. 染色体を選択します。
4. 次へ

[![](/assets/images/help/Specifying-Database-of-Reference-Genome_11.png)](/assets/images/help/Specifying-Database-of-Reference-Genome_11.png){:.group1}

### 自分で登録したreference (User original sets) を使用する場合  {#ReferenceOriginal}

1. User original setsを選択します。
2. Genome setsを選択します。
3. 次へ

[![](/assets/images/help/Specifying-Database-of-Reference-Genome_21.png)](/assets/images/help/Specifying-Database-of-Reference-Genome_21.png){:.group1}

### 自分でreferenceを(User original setsへ)登録する場合  {#ReferenceSet}

<ol>
<li> Download or upload referenceを選択します。</li>
[アクセッション番号(INSD)からのダウンロードの場合]
<li>アクセッション番号(INSD)を入れ"LOAD"をクリックします。</li>
[ローカルPCからのアップロードの場合]
<li class ="decrement">"ファイルを選択"をクリックし、ローカルPCからファイルを選択したら"UPLOAD"をクリックします。</li>
<li> ファイルが表示されます。</li>
<li> "CREATE DATASET"をクリックするとCreate Genome Dataset画面へ遷移します。
<figure><a href="/assets/images/help/SpecifyingDatabase_61.png"><img src="/assets/images/help/SpecifyingDatabase_61.png" alt=""></a></figure>
</li>
<li> genomeset の記述を変更できます。</li>
<li> "CREATE GENOMESET"をクリックするとSpecifying Database of Reference Genome画面に戻ります。
<figure><a href="/assets/images/help/SpecifyingDatabase_21.png"><img src="/assets/images/help/SpecifyingDatabase_21.png" alt=""></a></figure>
</li>
<li> ダウンロードしたファイルが"User original sets"に追加され、選択した状態となっています。
<figure><a href="/assets/images/help/SpecifyingDatabase_31.png"><img src="/assets/images/help/SpecifyingDatabase_31.png" alt=""></a></figure>
</li>
</ol>

## Set Options {#StOpt} 

### Setting for *De Novo* Assembly  {#SetOptionAssembly}

1. オプションを指定します。
2. [WGS配列データ](/ddbj/wgs.html)としてDDBJに登録する場合は該当にチェックします。
3. 次へ  
＊ツールにより、画面は若干異なります。

[![](/assets/images/help/Setting-for-De-Novo-Assembly_velvet_1.png)](/assets/images/help/Setting-for-De-Novo-Assembly_velvet_1.png){:.group1}

### Setting for Reference Genome Mapping  {#SetOptionMapping}

1. オプションを指定します。
2. 'Uniq'指定ができます。
3. DNA polymorphism抽出方法を選択します。
4. [WGS配列データ](/ddbj/wgs.html)としてDDBJに登録する場合は該当にチェックします。
5. 次へ  
＊ツールにより、画面は若干異なります。

[![](/assets/images/help/SetOption_Bwa_21.png)](/assets/images/help/SetOption_Bwa_21.png){:.group1}

## Run Confirmation {#Run} 

### Mapping/*de novo* Assembly  {#RunMappingAssembly}

1. ジョブが終了した際の連絡メールアドレスを記入します。
2. 内容を確認したら、"RUN"をクリックします。
3. PopUp表示で再確認します。"OK"で実行。The reservation was completed.画面へ遷移します。
4. "STATUS"をクリックすると、Mapping, *de novo* Assembly 各Status ページへ遷移します。

<span class="red">＊guestユーザーでは、RUNボタンが表示されません</span>

＜Mapping (tool:bwa)の例＞

[![](/assets/images/help/Run-Confirmation_31.png)](/assets/images/help/Run-Confirmation_31.png){:.group1}

[![](/assets/images/help/RunConfirmation_PreProcess_31.png)](/assets/images/help/RunConfirmation_PreProcess_31.png){:.group1}

*＜de novo* Assembly (tool:velvet)の例＞

[![](/assets/images/help/Run-Confirmation_21.png)](/assets/images/help/Run-Confirmation_21.png){:.group1}

[![](/assets/images/help/RunConfirmation_PreProcess_311.png)](/assets/images/help/RunConfirmation_PreProcess_311.png){:.group1}

### Preprocessing  {#RunPreprocessing}

1. ジョブが終了した際の連絡メールアドレスを記入します。
2. 内容を確認します。
3. "RUN"をクリックすると、The reservation was completed.画面へ遷移します。
4. "STATUS"をクリックすると、Status-PreProcess画面へ遷移します。

[![](/assets/images/help/RunConfirmation_PreProcess_21.png)](/assets/images/help/RunConfirmation_PreProcess_21.png){:.group1}

[![](/assets/images/help/RunConfirmation_PreProcess_312.png)](/assets/images/help/RunConfirmation_PreProcess_312.png){:.group1}

## Status-Mapping/*de novo* Assembly/PreProcess {#Status} 

### ジョブ実行状況の確認  {#jobstatus}

1. ”Show Only Your Own Job”をチェックします。
2. Reloadをクリックすると、ログインユーザーの結果のみ抽出されます。
3. 実行したジョブのStatusが確認できます。( generating/running/complete/error )
4. "View"クリックで、実行状況の詳細画面へ遷移します。
5. 他のStatus画面へも遷移できます。

[![](/assets/images/help/Status-Mapping_31.png)](/assets/images/help/Status-Mapping_31.png){:.group1}

## Detail view {#View} 

### Mapping  {#DetailMapping}

1. 統計結果が表示されます。
2. 実行ログの確認ができます。
3. 各種コマンド結果ファイルがダウンロードできます。

[![](/assets/images/help/DetailViewMapping5_1.png)](/assets/images/help/DetailViewMapping5_1.png){:.group1}

#### 統計結果のダウンロード  {#統計結果のダウンロード}

＜Position errors＞  
: [![Detail view_2](/assets/images/help/Detail-view_2.png){:.w450}](/assets/images/help/Detail-view_2.png){:.group1}
: \+ ErrorRate (mapping, graph).
  : Percentage error of mapped sequence to reference sequence is calculated by read position.

＜Map ratio＞
: \+ Map ratio (mapping, numeric data)
  : Number of mapped reads\* / Number of reads  
  \*: the number of reads, which were mapped in both ends.

＜Depth, Coverage＞
: \+ Depth (mapping, numeric data)  
  : he average of total sequence length (length of all sequence reads in a contig including gaps)/contig Length <span class="red">excluding "N" nucleotides. </span> 
  Reference: Lander ES, Waterman MS, Genomic mapping by fingerprinting random clones: a mathematical analysis.  
  Genomics 1988, 2(3):231-239.  
: \+ Coverage (mapping, numeric data) 
  : Sum of the length of all contigs/G,  
  where  
  G = Size (bp) of Reference Genome <span class="red">excluding "N" nucleotides.</span>  
  L = Sequence Length (bp),  
  N = \# sequences.

### *de novo* Assembly  {#DetailAssembly}

1. 統計結果が表示されます。
2. 実行ログの確認ができます。
3. 各種コマンド結果ファイルがダウンロードできます。

[![](/assets/images/help/DetailViewAssembly1_1.png)](/assets/images/help/DetailViewAssembly1_1.png){:.group1}

#### 統計量のダウンロード  {#統計量のダウンロード}

＜*de novo* Assembly statistics＞

[![Detail view_6_1](/assets/images/help/Detail-view_6_1.png)](/assets/images/help/Detail-view_6_1.png ){:.group1}

### Preprocessing  {#DetailPreprocessing}

1. 編集後Fastqファイル及び、各種グラフのダウンロードが行えます。
2. 実行ログの確認ができます。

[![](/assets/images/help/DetailViewPreprocess6_1.png)](/assets/images/help/DetailViewPreprocess6_1.png){:.group1}

#### 編集済みファイル、各種グラフのダウンロード  {#_編集済みファイル、各種グラフのダウンロード}

＜Fastq Download＞  
: 編集後のFastqファイルがダウンロードできます。

＜QS Average(PDF)＞  
: 編集前のQS標準偏差

[![](/assets/images/help/DetailViewPreprocess2_1.png)](/assets/images/help/DetailViewPreprocess2_1.png){:.group1}

＜QS Count(PDF)＞  
: 編集前のQS平均

[![](/assets/images/help/DetailViewPreprocess3_1.png)](/assets/images/help/DetailViewPreprocess3_1.png){:.group1}

＜QS Error(PDF)＞  
: 編集後のリード位置毎の削除割合

[![](/assets/images/help/DetailViewPreprocess4_1.png)](/assets/images/help/DetailViewPreprocess4_1.png){:.group1}

