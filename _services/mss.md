---
layout: indexed_content
title: MSS - Mass Submission System
category: services
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
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/service-policy.html#human)をご覧ください。

## MSS とは？ <a name="outline"></a>

{::options parse_block_html="true" /}
<div class="attention">

Mass Submission System (MSS) は、比較的大規模な塩基配列データ (reads ではない)
をファイル送付により登録するサービスです。登録予定データが、以下のような条件に該当する場合はMSS をご利用ください。

  - Web 版塩基配列登録システムが対応していない登録 → [EST](/ddbj/est.html), STS,[TSA](/ddbj/tsa.html), [HTC](/ddbj/htc.html), [GSS](/ddbj/gss.html),[HTG](/ddbj/htg.html), [WGS](/ddbj/wgs.html), [CON](/ddbj/con.html),[TLS](/ddbj/tls.html)
  - 配列が長い場合 → 目安は 500 kb 以上
  - １エントリあたりに多数の Feature がある場合 → 目安は 30 以上
  - エントリ数 (登録する配列の数) が多い場合 → 1024 を超えると Web 版塩基配列登録システムでは分割が必要です

</div>

データの種別については[登録データ種別](/documents/documents/data-categories.html)をご確認ください。

上記の条件を満たさない配列の登録は、[Web 版塩基配列登録システム (NSSS: DDBJ Nucleotide Sequence Submission System](/ddbj/web-submission.html)) のご利用をお勧めしております。

また、シークエンサからの出力配列 (reads) を登録する場合は [DRA; DDBJ Sequence Read
Archive](/dra/index.html) をご参照ください。

## MSS による登録の流れ <a name="flow"></a>

![]({{ site.baseurl }}/assets/images/ddbj/MSS-flow-jp.png "MSS による登録の流れ") 

### 1\. 申し込み <a name="flow-1"></a>

MSS の利用をご希望の場合は、[MSS 申し込みフォーム](/ddbj/mss-form.html)からご連絡ください。  
DDBJ で受付した後に、より詳細な手順および作業を支援するソフトウェアをご紹介いたします。

### 2\. 登録ファイルの準備 <a name="flow-2"></a>

#### 登録に必要なファイルの作成 <a name="登録に必要なファイルの作成"></a>

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

{::options parse_block_html="true" /}
<div class="attention red">

[TSA](/ddbj/tsa.html), complete genome, draft genome ([WGS](/ddbj/wgs.html) or [HTG](/ddbj/htg.html)) を登録する場合は、あらかじめ[BioProject](/bioproject/index.html)/[BioSample](/biosample/index.html) への登録を行い、取得したアクセッション番号をアノテーションファイル内に記載してください。

</div>

#### ファイルのチェック <a name="ファイルのチェック"></a>

DDBJ への登録の前に、作成したファイルを DDBJ が提供するデータファイル用チェックツールを用いてチェックを実行してください。

UME (Utilities for MSS file Error check)  
: [配列ファイル](/ddbj/file-format.html#sequence) と [アノテーションファイル](/ddbj/file-format.html#annotation)のフォーマットチェックと、それらファイルの記載を元に [CDS feature](/ddbj/cds.html)のアミノ酸翻訳チェックを行います。 Parser と  transChecker を内包しています。
: OS : Windows, unix/macOS
: 詳細：[UME ユーザーマニュアル](/ddbj/ume.html)

Parser  
: [配列ファイル](/ddbj/file-format.html#sequence) と [アノテーションファイル](/ddbj/file-format.html#annotation) のフォーマットチェックを行います。
: OS : Unix
: 詳細：[Parser ユーザーマニュアル](/ddbj/parser.html)

transChecker  
: [配列ファイル](/ddbj/file-format.html#sequence) と [アノテーションファイル](/ddbj/file-format.html#annotation) の記載を元に [CDS feature](/ddbj/cds.html) のアミノ酸翻訳チェックを行います。
: OS : Unix
: 詳細：[transChecker ユーザーマニュアル](/ddbj/transchecker.html)

{::options parse_block_html="true" /}
<div class="attention red">

データフィル用チェックツールは [MSS データファイル用チェックツール](/ddbj/mss-tool.html) からダウンロードできます

</div>

  - データファイル用チェックツールには登録用ファイルを作成する機能はありません。お使いの PC で利用されているテキストエディタ,
    表計算ソフトなどでファイルの作成をお願いいたします。
  - 未定義文字の使用やコントロールコードの混入等によるシンタックスエラーは、登録処理作業時に大きな障害となり、アクセッション番号の発行が大幅に遅れる原因となります。
  - [Biological feature](/ddbj/file-format.html#biological_feature) として [CDS feature](/ddbj/cds.html) を含むデータは、UME または transChecker
    を用いて、アミノ酸翻訳チェックを実行してください。
  - ご利用前に [使用許諾](/ddbj/mss-tool.html#license) をご確認ください。

### 3\. 仮登録 <a name="flow-3"></a>

仮登録では、全データを用いて登録に必要なファイルを作成する前に、サンプルファイルによってファイルの形式を確認することができます。  
登録予定データの一部（数 entry 分）をサンプルデータとして仮登録ファイルを作成し、DDBJ に送付してください。内容,形式を確認して、ご連絡を差し上げます。  
仮登録ファイルを送付する前には、データファイル用チェックツールでチェックを行い、エラーを修正してください。

MSS での登録に必要なファイル作成に慣れている方は、仮登録を省略することもできます。

### 4\. 本登録 <a name="flow-4"></a>

仮登録での修正に従って、全データについて配列ファイルとアノテーションファイルを作成し、 DDBJ に送付してください。  
ここでも、送付前にデータファイル用チェックツールによるチェックを行ってください。  
DDBJ で送付されたデータを査定し、不具合があれば修正箇所を電子メールで通知します。  
ファイルの内容に問題がなければ、アクセッション番号発行作業が行われ、Contact personの連絡先としてご記入いただいたアドレス宛に、アクセッション番号のお知らせが届きます。

#### ファイルの送付方法 <a name="ファイルの送付方法"></a>

電子メールに添付して送信する  
SCP によるファイル転送  
: ファイルサイズが合計で 10 M byte を超える場合は、公開鍵と秘密鍵を用いた SCP によるファイル転送をお勧めいたします。
: ファイル転送を利用するには、[DDBJ Submission Portal D-way](https://ddbj.nig.ac.jp/D-way/) にて[登録アカウント](/account.html)を取得する必要があります。<br>詳細手順につきましては、[ファイルのアップロード方法](/dra/services/index.html#upload-sequence-data)またはチュートリアル動画をご参照ください。
: **チュートリアル動画**
: 鍵ペアの作成（[Windows](https://youtu.be/mggRnbxr0gQ) / [macOS](https://youtu.be/h9LbhwROtOM)）
: データの転送（[Windows](https://youtu.be/ZxIfewrk8lI) / [macOS](https://youtu.be/A2hPlGZEW_o)）

### 5\. データ公開 <a name="flow-5"></a>

登録時に即日公開を希望した場合は、可能な限り速やかに公開します。  
[公開予定日](/ddbj/services/index.html#hold-date)([hold\_date](/ddbj/file-format.html#annotation))を指定した場合は、[公開原則](/documents/documents/data-release-policy.html)に基づいて公開します。

登録された塩基配列データは、配列ファイルとアノテーションファイルの内容に基づき、DDBJ の定めるフォーマットにしたがった[フラットファイル (flat file)](/ddbj/flat-file.html) の形式で公開されています。  
[アノテーションファイルとフラットファイルの対応関係](/ddbj/file-format.html#sample)もご参照ください。
