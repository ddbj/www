---
layout: tabbed_indexed_content
title: MSS - Mass Submission System
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: submission
lang: ja
related_pages:
  - title: 登録ファイル形式
    url: /ddbj/file-format.html
  - title: MSS データファイル用チェックツール
    url: /ddbj/mss-tool.html
  - title: UME ユーザーマニュアル
    url: /ddbj/ume.html
  - title: Parser ユーザーマニュアル
    url: /ddbj/parser.html
  - title: transChecker ユーザーマニュアル
    url: /ddbj/transchecker.html
  - title: validator エラーメッセージ
    url: /ddbj/validator.html
  - title: MSS 利用申し込み
    url: /ddbj/mss-form.html
---

<div class="attention" markdown="1">
<span class="red">ヒトを対象とした研究データの登録について</span>

ヒトを対象とした全ての研究において DDBJ に送付するデータの由来である個人 (研究対象者) の尊厳及び人権は、
適用されるべき法律、規定、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。    
原則として、研究対象者を直接特定し得る参照情報は、登録データから取り除いてください。  
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#submission-of-human-data)をご覧ください。
</div>

## 概要  {#outline}

Mass Submission System (MSS) は、比較的大規模な塩基配列データ (reads ではない) をファイル送付により登録するサービスです。    
<span class="red">以下の何れかに該当する場合</span>、[Web 版塩基配列登録システム](/ddbj/web-submission.html) (DDBJ Nucleotide Sequence Submission System, 略称 NSSS) では対応できません。    
MSS 経由で登録をお願いします。    
件数の多寡、長さ以外の点もご確認ください。


#### a) 種別、または、量が以下に該当する配列データ
<div class="attention" markdown="1">
- NSSS が対応していない登録 
   - [EST](/ddbj/est.html)、[TSA](/ddbj/tsa.html)、[HTC](/ddbj/htc.html)、[GSS](/ddbj/gss.html)、[HTG](/ddbj/htg.html)、[WGS](/ddbj/wgs.html)、[TLS](/ddbj/tls.html)
   - データ種別の詳細は、[登録データ種別](/documents/data-categories.html#division)をご確認ください。
- １配列が長い場合、目安は 500 kb 以上
- １配列あたりに多数の Feature がある場合、目安は 30 以上
- 登録する配列の数が多い場合、総計 100 を超えるとき
</div>

#### b) finished/draft の別を問わずレプリコン全長規模相当の配列データ

<div class="attention" markdown="1">
 - (核) ゲノム
 - 染色体
 - オルガネラゲノム
 - ウイルス・ファージのゲノム/segment
 - プラスミド
</div>

#### c) DBLINK に BioProject, BioSample の記載が必要な配列データ

BioProject/BioSample との連携のために [DBLINK](/ddbj/flat-file.html#DBLINK) への記載を必要とする場合、
以下を含みますが、下記で全てを網羅している訳ではありません。

<div class="attention" markdown="1">
- メタゲノム的解析、環境プロファイル解析全般
- 標的遺伝子を限定した配列データを相互に関連付ける場合
- 登録予定、または、登録済みの全長規模ゲノム配列と同一菌株 (strain) に由来する配列データ
    - 原核生物 16S rRNA 配列の報告義務がある場合
    - 他の標的遺伝子・クラスター領域を先行発表する場合
</div>

- 上記に該当しない場合、[Web 版塩基配列登録システム (NSSS: DDBJ Nucleotide Sequence Submission System](/ddbj/web-submission.html)) のご利用をお勧めしております。
- シークエンサからの出力配列 (reads) を登録する場合は [DRA: DDBJ Sequence Read Archive](/dra/index.html) をご参照ください。

## MSS 登録の流れ  {#flow}

<style type="text/css">
.mssflow, .mssflowend {position: relative; display: inline-block; margin: 5px 5px; padding: 0.2em 0.5em; border: solid 2px #FFC091; border-radius: 8px; box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);}
.mssflow::after {
  display: inline-block;
  margin: 0 0 0 -15px;
  border: 8px solid transparent;
  border-left-color: #FFC300;
  content: "";
  position: relative;
  top: 4px;
  left: 28px;
}
table tr:hover {
  background-color: #FEC091;
}
</style>

<!-- **推奨:** A. 登録ファイル作成済みで申し込みいただく場合 -->
<div class="mssflow">登録ファイル作成</div>
<div class="mssflow"><a href="https://mss.ddbj.nig.ac.jp/">D-wayアカウントで https://mss.ddbj.nig.ac.jp/ にログイン</a></div>
<div class="mssflow">MSS Form に記入、ファイルアップロード</div>
<div class="mssflow">Mass-ID 発行・自動応答メール送付</div>
<div class="mssflow">査定、質問・回答をメールでやりとり</div>
<div class="mssflow">アクセッション番号取得</div>
<div class="mssflowend">データ公開または公開日までhold</div>
<p></p>
<!-- B. 申し込んでから登録ファイルを作成する場合
<div class="mssflow"><a href="https://mss.ddbj.nig.ac.jp/">D-wayアカウントで https://mss.ddbj.nig.ac.jp/ にログイン</a></div>
<div class="mssflow">MSS Form に記入</div>
<div class="mssflow">Mass-ID 発行・自動応答メール送付</div>
<div class="mssflow">登録ファイル作成</div>
<div class="mssflow">後日ファイルアップロード</div>
<div class="mssflow">査定、質問・回答をメールでやりとり</div>
<div class="mssflow">アクセッション番号取得</div>
<div class="mssflowend">データ公開または公開日までhold</div> -->

<!-- <img src="/assets/images/ddbj/MSS-flow_20200916-jp.png" alt="MSS による登録の流れ" title="" class="">  -->

## 登録ファイルの作成  {#prep}
### 登録に必要なファイル  {#prep-1}
- 配列ファイル
  - 全登録データの配列を FASTA 形式で記述したテキストファイル。    
    参照 [登録ファイル形式：配列ファイル](/ddbj/file-format.html#sequence)
- アノテーションファイル    
  - 全登録データの登録者、REFERENCE、Feature/Qualifier の情報等を記述したタブ区切りテキストファイル。    
    参照 [登録ファイル形式：アノテーションファイル](/ddbj/file-format.html#annotation)
  - 原核生物ゲノムの登録では、[DFAST(DDBJ Fast Annotation and Submission Tool) を利用し、アノテーションファイルを作成](/ddbj/mss.html#mssdfast)することができます。
- AGP ファイル ([CON](/ddbj/con.html) エントリ登録時のみ必要)
  - CON エントリを構築する際のピースエントリの順序、種類、方向等が記載された、9列からなるタブ区切りテキストファイル。    
    AGP ファイルのみで配列が構築可能である場合は、配列ファイル送付は必要ありません。    
    参照 [登録ファイル形式： AGP ファイル](/ddbj/file-format.html#agp)

### BioProject & BioSample ID の取得  {#prep-2}
- 登録種別に応じ、登録ファイル作成時には事前に BioProject ID、BioSample ID (含 locus_tag prefix 予約)の取得が必要です。
- 原則として取得した locus_tag prefix は変更できませんので、取得の際にはご注意ください。
- [対応表](#mssprjtable)を参照してください。

### アノテーション記載について  {#prep-3}
- **[アノテーションファイルサンプル](/ddbj/file-format.html#sample)**
- 原核生物ゲノムのアノテーションファイル作成には、[**DFAST (DDBJ Fast Annotation and Submission Tool)**](https://dfast.ddbj.nig.ac.jp/) の利用を推奨しています。
  - [DFAST を利用した登録ファイルの作成](/ddbj/mss.html#mssdfast)をお読みいただき、登録ファイルを取得してください。
- [全長規模のゲノム配列](/ddbj/genome.html)では　source と assembly_gap 以外の biological feature の記載は任意ですが、過去に登録例がない新規性の高い種が対象の場合、最低でも１つのゲノムに代表としてアノテーションの記載が必要です。
- [全長規模のゲノム配列](/ddbj/genome.html)でアノテーションを記載する場合は、[BioSample](/biosample/index.html) の登録時に [locus_tag prefix](/ddbj/qualifiers.html#locus_tag) の取得が必要です。
- [TSA](/ddbj/tsa.html) では source と assembly_gap 以外の biological feature の記載は任意であり、基本的には不要です。
- [EST](/ddbj/est.html) には、source 以外の biological feature を記載できません。
- アノテーションが必要なデータ種別については、[対応表](#mssprjtable)を参照してください。

### ファイルチェックツール  {#prep-4}
DDBJ に登録ファイルを送る前に、**必ず作成したファイルを DDBJ が提供するデータファイル用チェックツールを用いてチェックを実行**してください。

- UME (Utilities for MSS file Error check)    
[配列ファイル](/ddbj/file-format.html#sequence)と[アノテーションファイル](/ddbj/file-format.html#annotation)のフォーマットチェックと、それらファイルの記載を元に [CDS feature](/ddbj/cds.html) のアミノ酸翻訳チェックを行います。Parser と transChecker を内包しています。    
OS: Windows, Linux/macOS    
説明：[UME ユーザーマニュアル](/ddbj/ume.html)
- Parser    
[配列ファイル]/ddbj/file-format.html#sequence)と[アノテーションファイル](/ddbj/file-format.html#annotation)のフォーマットチェックを行います。    
OS: Linux    
説明：[Parser ユーザーマニュアル](/ddbj/parser.html)
- transChecker    
[配列ファイル](/ddbj/file-format.html#sequence)と[アノテーションファイル](/ddbj/file-format.html#annotation)の記載を元に [CDS feature](/ddbj/cds.html) のアミノ酸翻訳チェックを行います。    
OS: Linux    
説明：[transChecker ユーザーマニュアル](/ddbj/transchecker.html)
<div class="attention" markdown="1">
ダウンロード: [MSS データファイル用チェックツール](/ddbj/mss-tool.html)
</div>
- データファイル用チェックツールには登録用ファイルを作成する機能はありません。ご使用の PC で利用されているテキストエディタ、表計算ソフトなどでファイルの作成をして下さい。
- 未定義文字の使用やコントロールコードの混入等によるシンタックスエラーは、登録処理作業時に大きな障害となり、アクセッション番号の発行が大幅に遅れる原因となります。
- [Biological feature](/ddbj/file-format.html#biological_feature) として [CDS feature](/ddbj/cds.html) を含むデータは、UME または transChecker を用いて、必ずアミノ酸翻訳チェックを実行してください。
- ツールのご利用前に[使用許諾](/ddbj/mss-tool.html#license)をご確認ください。

## アカウント作成  {#account}

- D-way 登録アカウントをお持ちでない場合、[D-way](https://ddbj.nig.ac.jp/D-way/) の "Register for a new account
" より作成して下さい([ヘルプ](/account.html))。
- SCP/SFTP 転送を利用いただくには、[アカウントへの公開鍵と Center name の設定](/account.html#register-center-name-and-public-key)が必要です。ファイル転送手順につきましては、「[データのアップロード](/upload.html)」をご参照ください。

## 登録申し込み  {#submission}
[MSS 申し込みフォーム](https://mss.ddbj.nig.ac.jp/)から行って下さい。単一の申し込みは、以下の条件を全て満たすエントリセットの場合のみとなっております。一つでも条件が異なるエントリを登録する場合には、複数回の申し込みが必要となります。    
事前に登録ファイルを用意されていますと、申し込みフォーム入力時にファイルをアップロードできます。入力時にファイルをアップロードできない場合には、返信メールにアップロードに関連する内容が提示致されますので、後日アップロードしてください。

申し込みが完了しますと、当該登録に対して Mass-ID が発行されます。DDBJ から送信されますメールのヘッダーには Mass-ID([DDBJ:NSUB000001]) が表示されますので、返信される際には、メールヘッダの Mass-ID を維持して下さい。

同一Submissionでの申し込み条件    
: ・[コンタクトパーソン](/ddbj/submission.html#contact)が同一    
: ・[データ種別](/ddbj/data-categories.html)が同一    
: ・[公開予定日](/ddbj/submission.html#holddate)が同一    

- 同じSubmissionでの申し込み可能な例
  - バクテリア20菌株のドラフトゲノム → WGS: Whole Genome Shotgun
  - Finished level genome sequence 3個体の真核生物ゲノム → GNM: Finished Level Genome sequence, non-WGS
  - 生物種ごとにアセンブルした転写物配列、複数生物種由来の複数セット → TSA: Transcriptome Shotgun Assembly

### 複数回に分けての申し込みが必要な例  {#submission-1}

a. 単一のバクテリア菌株のchromosomeのドラフトゲノムとプラスミド全長配列（1個または複数個）
: 2回に分けて申し込んでください
- ドラフトゲノム → WGS: Whole Genome Shotgun
- プラスミド全長配列 → MISC: Sequences that are not included in above types

b. 単一真核生物個体の chromosome ドラフトゲノムとオルガネラゲノムの全長
: 2回に分けて申し込んでください
- Chromosomeのドラフトゲノム → WGS: Whole Genome Shotgun
- オルガネラゲノムの全長 → MISC: Sequences that are not included in above types

c. 単一真核生物個体の chromosome ドラフトゲノムとアセンブルした大規模転写物配列
: 2回に分けて申し込んでください
- Chromosomeのドラフトゲノム → WGS: Whole Genome Shotgun
- アセンブルした大規模転写物配列 → TSA: Transcriptome Shotgun Assembly

## 登録ファイル送付方法  {#sendfiles}

登録ファイルは MSS form から以下のいずれかの方法で送信することができます。
- ブラウザ上でアップロード
- [DFAST](https://dfast.ddbj.nig.ac.jp/) の job ID を指定する
  - DFAST にて、登録ファイルを作成済みの場合
- SFTP サーバーに転送済みの登録ファイルを送付
  - 目安としてファイルサイズが合計で 10 Gbyte を超える場合は、[公開鍵と秘密鍵](/account.html#generate-key-pair)を用いた SCP/SFTP によるファイル転送を選択してください。アカウントに[Center name と認証用公開鍵を登録](/account.html#register-center-name-and-public-key)後、「[データのアップロード](/upload.html)」に従い転送してください。
  - 以下の説明をお読みください。

<div class="attention" markdown="1">
＜お願い＞ 特に理由のない限り、電子メール添付による登録ファイル送付はおやめください。
</div>

### SFTP サーバーに設置する登録ファイルの形式 {#sftpmss}

- 対象ディレクトリは /mass です。
- MSS Application Form を使用した場合の読み取り先になりますので、Submissionファイルのみを設置してください。
- MSS Application Form は、massディレクトリ配下のサブディレクトリからもファイルを読み込みます。
- Submissionファイル名には次の制約があります。圧縮した場合は、圧縮アーカイブに含まれる各ファイル名が制約を受けます。
  - アノテーションファイルの拡張子が <span style="background-color: #e8e8e8;">.ann</span>、<span style="background-color: #e8e8e8;">.annt</span>、<span style="background-color: #e8e8e8;">.tsv</span>、<span style="background-color: #e8e8e8;">.ann.txt</span> のいずれかであること。
  - 塩基配列ファイルの拡張子が <span style="background-color: #e8e8e8;">.fasta</span>、<span style="background-color: #e8e8e8;">.seq.fa</span>、<span style="background-color: #e8e8e8;">.fa</span>、<span style="background-color: #e8e8e8;">.fna</span>、<span style="background-color: #e8e8e8;">.seq</span> のいずれかであること。
  - 各submissionでアノテーションファイルと塩基配列ファイルがペアになっていること。拡張子を除いたファイル名称が同一なファイルがペアになります。
    - Submissionファイルの再提出をDDBJ curatorにより要請された場合を除きます。
  - ファイル名は、スペース、バッククォート、アングルブラッケッツ"<>"、丸括弧"()"以外の半角英数記号とし、日本語のようなマルチバイト文字を使用しないこと
- MSS Application Form は圧縮ファイルからの読み込みに対応しています。対応する圧縮形式は、次の通りです。
  - gzip, bzip2, xz, lzip, lzma, lzop, zstd, compress    
  e.g.    
  20230322-1.tar.gz    
  20230322-2.tar.bz2    
  20230322-3.tar.xz    
  20230322-4.zip    
  20230322-5.tar.lzma    
  20230322-6.tar.lzo    
  20230322-7.tar.zst    
  20230322-8.tar.Z

## 査定作業  {#review}
チェックツールによる検証を行った後、配列ファイルとアノテーションファイルを [DDBJ にアップロード](/ddbj/mss.html#sendfiles)してください。

送付された全データを DDBJ で査定し、修正依頼や疑問等があれば通知します。ファイルの内容に問題がなければ、データ登録作業を行い、Contact person のメールアドレス、または登録担当者宛に、アクセッション番号通知メールを送信します。

*全ファイルを送付する前に、登録予定データの一部（数 entry 分）をテストデータとして登録ファイルを送付し、DDBJ に確認を依頼することが可能です（このステップは省略可能です）。*

## データ公開  {#publication}
登録時に即日公開を希望した場合は、可能な限り速やかに公開します。 [公開予定日 (hold_date)](/ddbj/submission.html#hold-date)を指定した場合は、[公開原則](/data-release-policy.html)に基づいて公開します。
登録された塩基配列データは、DDBJ の定める方法で塩基配列ファイルとアノテーションファイルの内容に基づき変換を行い、[フラットファイル (flat file)](/ddbj/flat-file.html)形式として公開されます。
[アノテーションファイルとフラットファイルの対応関係](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=961825804)をご参照ください。

## BioProject/BioSample ID の要否 {#mssprjtable}
- Genome

| Your submission | BioProject | BioSample | Annotation with<br> biological feature | locus_tag | Need DRA | You should select |
|---|
| Draft genome w/ annotation | M | M | M | M | OPT | WGS |
| Draft genome w/o annotation | M | M | NR | NR | OPT | WGS |
| Finished level genome sequence, non-WGS | M | M | M | M | OPT | GNM |
| Metagenome-Assembled Genome w/ annotation | M | M | M | M | M | MAG |
| Metagenome-Assembled Genome w/o annotation | M | M | NR | NR | M | MAG |
| Single Amplified Genome w/ annotation | M | M | M | M | OPT | SAG |
| Single Amplified Genome w/o annotation | M | M | NR | NR | OPT | SAG |
| High Throughput Genomic Sequences | M | M | OPT | NR | OPT | HTG |
| Transcriptome Shotgun Assembly | M | M | OPT | NR | M | TSA |
| High Throughput cDNA Sequences | M | M | OPT | NR | OPT | HTC |
| Expressed Sequence Tags | M | M | NR | NR | OPT | EST |
| Virus/Phage genome | NR | NR | OPT | NR | OPT | MISC |
| Plasmid genome only | NR | NR | OPT | NR | OPT | MISC |
| Organelle genome only | NR | NR | OPT | NR | OPT | MISC |
| Finished Level Genome + Plasmid | M | M | M | M | OPT | GNM, MISC for each submission |
| Finished Level Genome + Organelle | M | M | M | M | OPT | GNM, MISC for each submission |

M, Mandatory; NR, Not required; OPT, Optional

- Transcriptome

| Your submission | BioProject | BioSample | Annotation with<br> biological feature | locus_tag | Need DRA | You should select |
|---|
| Transcriptome Shotgun Assembly | M | M | OPT | NR | M | TSA |
| High Throughput cDNA Sequences | M | M | OPT | NR | OPT | HTC |
| Expressed Sequence Tags | M | M | NR | NR | OPT | EST |

M, Mandatory; NR, Not required; OPT, Optional

- Targeted Locus Study

| Your submission | BioProject | BioSample | Annotation with<br> biological feature | locus_tag | Need DRA | You should select |
|---|
| Targeted Locus Study | M | M | M | NR | OPT | TLS |

M, Mandatory; NR, Not required; OPT, Optional

## DFAST: 原核生物ゲノムの登録  {#mssdfast}
### DFAST（DDBJ Fast Annotation and Submission Tool）  {#mssdfast-1}
[DFAST](https://dfast.ddbj.nig.ac.jp/) は、原核生物ゲノムの高速自動アノテーションパイプラインで、DDBJ に直接登録可能なアノテーションファイルを取得できます。Annotated/Assembled Sequences database へ原核生物ゲノムを登録する際には、[DFAST](https://dfast.ddbj.nig.ac.jp/) の利用を強く推奨しています。

### 原核生物ゲノムの登録の手順  {#mssdfast-2}
1. [DFAST](https://dfast.ddbj.nig.ac.jp/) で解析した原核生物ゲノムを Annotated/Assembled Sequences database に登録するには、事前に[BioProject](https://www.ddbj.nig.ac.jp/bioproject/index.html)、[BioSample](https://www.ddbj.nig.ac.jp/biosample/index.html)、[locus_tag preifx](https://www.ddbj.nig.ac.jp/ddbj/locus_tag.html)（Biogical featureを記載する場合）の登録が必要です。
1. [D-way アカウント](/account.html)で [DFAST](https://dfast.ddbj.nig.ac.jp/) にログインすると 、[解析（job）の履歴管理](https://dfast.ddbj.nig.ac.jp/help_login)ができます。アカウントを持っていない場合には[アカウントの作成方法](/account.html#account-for-bioproject-biosample-submissions)をご一読下さい。

### DFAST のデータを Submit するには  {#mssdfast-3}
1. [DFAST](https://dfast.ddbj.nig.ac.jp/) にアクセスし、[D-way アカウント](/account.html)でログインします。ジョブ投入画面において塩基配列ファイルをアップロードすると、解析が始まり job ID が発行されます。job 終了後、”DDBJ submission”  タブをクリックします。DDBJ への登録に必要な項目（BioProject ID、BioSample ID、locus_tag prefix、その他のメタ情報）を入力すると、MSS 登録ファイルが作成されます。（注１）    
最後に、Format Check をクリックして、書式チェックを行ってください。
1. DFAST の job ID で submit する場合
    1. job ID (<span style="font-family:Arial;">########-####-####-####-############</span> 書式のID)をコピーします。
1. DFAST からダウンロードしたファイルを submit する場合
    1. 実行したjobの[履歴管理画面](https://dfast.ddbj.nig.ac.jp/help_login)にて登録を希望する job ID をチェックして選択状態にします。
    1. ファイル形式に"MSS"を選択し"DOWNLOAD"ボタンをクリックしてファイルをダウンロードしてください。このとき入力されたメタ情報のチェックを行います。警告が出た場合には入力した情報を確認してください（注２）。ファイルダウンロード後にテキストエディタ等で開いて修正をすることも可能です。
1. [MSS 申し込み](https://mss.ddbj.nig.ac.jp/)を行ってください。[MSS による登録の流れ](/ddbj/mss.html#flow)の手順にしたがい、ダウンロードした登録ファイルを DDBJ に送付してください。

注１）ログインしていない状態でも DFAST を使ってゲノムアノテーションをすることは可能です。その場合には、履歴管理画面で job ID を指定して実行済みのjobを履歴に取り込むことができます。

注２）メタ情報のチェックは簡易的なものですのでキュレーターによる査定時に修正が必要になることもあります。
