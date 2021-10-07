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

<span class="red">ヒトを対象とした研究データの登録について</span>

ヒトを対象とした全ての研究において DDBJ に送付するデータの由来である個人 (研究対象者)
の尊厳及び人権は、適用されるべき法律、規定、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。  
原則として、研究対象者を直接特定し得る参照情報は、登録データから取り除いてください。  
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#submission-of-human-data)をご覧ください。

- **[MSS 登録申し込みフォーム"](/ddbj/mss-form.html)**
- **[登録用ファイルチェックツール"](/ddbj/mss-tool.html)**
- **登録用ファイル書式**
    - **[配列ファイル](/ddbj/file-format-e.html#sequence)**
    - **[アノテーションファイル](/ddbj/file-format-e.html#annotation)**
    - **[アノテーションファイルサンプル](/ddbj/file-format.html#sample)**


## MSS とは？  {#outline}

<div class="attention" markdown="1">

Mass Submission System (MSS) は、比較的大規模な塩基配列データ (reads ではない)
をファイル送付により登録するサービスです。登録予定データが、以下のような条件に該当する場合はMSS をご利用ください。

- Web 版塩基配列登録システムが対応していない登録 → [EST](/ddbj/est.html)、STS、[TSA](/ddbj/tsa.html)、[HTC](/ddbj/htc.html)、[GSS](/ddbj/gss.html)、[HTG](/ddbj/htg.html)、[WGS](/ddbj/wgs.html)、[CON](/ddbj/con.html)、[TLS](/ddbj/tls.html)
- 配列が長い場合 → 目安は 500 kb 以上
- １エントリあたりに多数の Feature がある場合 → 目安は 30 以上
- エントリ数 (登録する配列の数) が多い場合 → 1024 を超えると Web 版塩基配列登録システムでは分割が必要です

</div>

データの種別については[登録データ種別](/documents/data-categories.html)をご確認ください。

上記の条件を満たさない配列の登録は、[Web 版塩基配列登録システム (NSSS: DDBJ Nucleotide Sequence Submission System](/ddbj/web-submission.html)) のご利用をお勧めしております。

また、シークエンサからの出力配列 (reads) を登録する場合は [DRA; DDBJ Sequence Read
Archive](/dra/index.html) をご参照ください。

## MSS による登録の流れ  {#flow}

<img src="/assets/images/ddbj/MSS-flow_20200916-jp.png" alt="MSS による登録の流れ" title="" class=""> 

### 1. 申し込み  {#flow-1}

MSS の利用をご希望の場合は、[MSS 申し込みフォーム](/ddbj/mss-form.html)からご連絡ください。  
DDBJ で受付した後に、より詳細な手順および作業を支援するソフトウェアをご紹介いたします。

#### 事前準備  {#事前準備}

以下に該当する場合、事前に BioProject、BioSample の登録をお願いいたします。

- [全長規模のゲノム](/ddbj/genome.html):
  - complete genome、nearly complete genome、draft genome ([WGS](/ddbj/wgs.html)、[HTG](/ddbj/htg.html)) を含みます。
  - ただし organelle、virus/phage、plasmid のみで構成される登録は除きます。
- [トランスクリプトーム](/ddbj/transcriptome.html): [TSA](/ddbj/tsa.html) (Transcriptome Shotgun Assembly)、[EST](/ddbj/est.html)
  - [TSA](/ddbj/tsa.html) の場合、assemble 前のデータを事前に DRA へ登録することが必須です。
  - [EST](/ddbj/est.html) の場合、厳密には [BioProject](/bioproject/index.html)、[BioSample](/biosample/index.html) の登録は必須ではありませんが、推奨します。
- [TLS](/ddbj/tls.html) (Targeted Locus Study)

#### アノテーションの記載 {#アノテーションの記載}

- [全長規模のゲノム配列](/ddbj/genome.html)では　source と assembly_gap 以外の biological feature の記載は任意ですが、過去に登録例がない新規性の高い種が対象の場合、最低でも１つのゲノムに代表として feature annotation の記載が必要です。
- [全長規模のゲノム配列](/ddbj/genome.html)でアノテーションを記載する場合は、[BioSample](/biosample/index.html) の登録時に [locus_tag prefix](/ddbj/qualifiers.html#locus_tag) の取得が必要です。
- 原核生物のゲノムでは、[DFAST (DDBJ Fast Annotation and Submission Tool)](https://dfast.ddbj.nig.ac.jp/) の利用を推奨しています。
- [TSA](/ddbj/tsa.html) では source と assembly_gap 以外の biological feature の記載は任意であり、基本的には不要です。
- [EST](/ddbj/est.html) には、source 以外の biological feature は記載できません。

### 2. 登録ファイルの作成と送付  {#flow-2}

#### 登録に必要なファイルの作成  {#登録に必要なファイルの作成}

配列ファイル  
: 全登録データの配列を FASTA 形式で記述したテキストファイル。
: 詳細：[登録ファイル形式：配列ファイル](/ddbj/file-format.html#sequence)

アノテーションファイル  
: 全登録データの登録者、REFERENCE、Feature/Qualifier の情報等を記述したタブ区切りテキストファイル。
: 詳細：[登録ファイル形式：アノテーションファイル](/ddbj/file-format.html#annotation)

AGP ファイル（[CON](/ddbj/con.html) エントリの登録の場合
: CON エントリを構築する際のピースエントリの順序、種類、方向等が記載された、9列からなるタブ区切りテキストファイル。
: AGP ファイルのみで配列が構築可能である場合、配列ファイルは必要ありません。
: 詳細：[登録ファイル形式： AGP ファイル](/ddbj/file-format.html#agp)

<div class="attention" markdown="1">
[TSA](/ddbj/tsa.html), complete genome, draft genome ([WGS](/ddbj/wgs.html) or [HTG](/ddbj/htg.html)) を登録する場合は、あらかじめ[BioProject](/bioproject/index.html)/[BioSample](/biosample/index.html) への登録を行い、取得したアクセッション番号をアノテーションファイル内に記載してください。
</div>

#### ファイルのチェック  {#ファイルのチェック}

DDBJ に登録ファイルを送る前に、作成したファイルを DDBJ が提供するデータファイル用チェックツールを用いてチェックを実行してください。

UME (Utilities for MSS file Error check)  
: [配列ファイル](/ddbj/file-format.html#sequence) と [アノテーションファイル](/ddbj/file-format.html#annotation)のフォーマットチェックと、それらファイルの記載を元に [CDS feature](/ddbj/cds.html)のアミノ酸翻訳チェックを行います。 Parser と  transChecker を内包しています。
: OS : Windows, Unix/macOS
: 詳細：[UME ユーザーマニュアル](/ddbj/ume.html)

Parser  
: [配列ファイル](/ddbj/file-format.html#sequence) と [アノテーションファイル](/ddbj/file-format.html#annotation) のフォーマットチェックを行います。
: OS : Unix
: 詳細：[Parser ユーザーマニュアル](/ddbj/parser.html)

transChecker  
: [配列ファイル](/ddbj/file-format.html#sequence) と [アノテーションファイル](/ddbj/file-format.html#annotation) の記載を元に [CDS feature](/ddbj/cds.html) のアミノ酸翻訳チェックを行います。
: OS : Unix
: 詳細：[transChecker ユーザーマニュアル](/ddbj/transchecker.html)

<div class="attention" markdown="1">
データフィル用チェックツールは [MSS データファイル用チェックツール](/ddbj/mss-tool.html) からダウンロードできます
</div>

- データファイル用チェックツールには登録用ファイルを作成する機能はありません。お使いの PC で利用されているテキストエディタ,
  表計算ソフトなどでファイルの作成をお願いいたします。
- 未定義文字の使用やコントロールコードの混入等によるシンタックスエラーは、登録処理作業時に大きな障害となり、アクセッション番号の発行が大幅に遅れる原因となります。
- [Biological feature](/ddbj/file-format.html#biological_feature) として [CDS feature](/ddbj/cds.html) を含むデータは、UME または transChecker を用いて、アミノ酸翻訳チェックを実行してください。
- ご利用前に [使用許諾](/ddbj/mss-tool.html#license) をご確認ください。

### 3. 査定作業  {#flow-3}

チェックツールによる検証を行った後、配列ファイルとアノテーションファイルを DDBJ に送付してください。

- 全ファイルを送付する前に、登録予定データの一部（数 entry 分）をテストデータとして登録ファイルを送付し、DDBJ に確認を依頼することも可能です（このステップは省略可能です）。

送付された全データをDDBJ で査定し、修正依頼や疑問等があれば通知します。  
ファイルの内容に問題がなければ、データ登録作業を行い、Contact person のメールアドレス宛に、アクセッション番号の通知メールを送信します。

#### ファイルの送付方法  {#ファイルの送付方法}

電子メールに添付して送信する  
SCP によるファイル転送  
: ファイルサイズが合計で 10 M byte を超える場合は、公開鍵と秘密鍵を用いた SCP によるファイル転送をお勧めいたします。
: ファイル転送を利用するには、[DDBJ Submission Portal D-way](https://ddbj.nig.ac.jp/D-way/) にて[登録アカウント](/account.html)を取得する必要があります。  詳細手順につきましては、[ファイルのアップロード方法](/dra/submission.html#upload-sequence-data)またはチュートリアル動画をご参照ください。
: **チュートリアル動画**
: 鍵ペアの作成（[Windows](https://youtu.be/mggRnbxr0gQ)/[macOS](https://youtu.be/h9LbhwROtOM)）
: データの転送（[Windows](https://youtu.be/ZxIfewrk8lI)/[macOS](https://youtu.be/A2hPlGZEW_o)）

### 4. データ公開  {#flow-4}

登録時に即日公開を希望した場合は、可能な限り速やかに公開します。
[公開予定日](/ddbj/submission.html#hold-date) ([hold_date](/ddbj/file-format.html#date)) を指定した場合は、[公開原則](/data-release-policy.html)に基づいて公開します。

登録された塩基配列データは、配列ファイルとアノテーションファイルの内容に基づき、DDBJ の定めるフォーマットにしたがった[フラットファイル (flat file)](/ddbj/flat-file.html)の形式で公開されています。  
[アノテーションファイルとフラットファイルの対応関係](/ddbj/file-format.html#sample)もご参照ください。
