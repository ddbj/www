---
layout: tabbed_indexed_content
service_name: AMED Genome group sharing Database
title: AGD への登録
category: agd
current_tab: submission
lang: ja
---

## 登録概要 {#submission}

AGD は NBDC で承認された利用制限ポリシーを持つ，匿名化されたデータだけを受け付けています。 登録者は [NBDC](https://humandbs.dbcls.jp/) に AGD へのデータ提供を申請し， AGD は NBDC から正式に提供が承認された連絡を受け，登録者に登録手順を案内します。

登録しようとしているデータの公開を制限すべきかどうかは，データを収集した個人との間で合意された協定から明らかなはずです。 AGD に登録されたデータの公開は制限されます。 AGD データを利用するためには，[NBDC](https://humandbs.dbcls.jp/) に利用を申請し，承認される必要があります。

制限公開は論文公表までの間，データを非公開にすることとは異なります。 AGD を含む全ての DDBJ データベースでは，論文公表までの一定期間，データを非公開にすることができます。

メタデータオブジェクトに対して以下のプレフィックス付きアクセッション番号が割り振られます。

|プレフィックス|メタデータオブジェクト|数字の桁数|例|
|---|
|AGD|Submission|6|AGD_000001|
|AGDS|Study|6|AGDS_000001|
|AGDN|Sample|9|AGDN_000000001|
|AGDX|Experiment|9|AGDX_000000001|
|AGDR|Data|9|AGDR_000000001|
|AGDZ|Analysis|9|AGDZ_000000001|
|AGDD|Data set|6|AGDD_000001|
|AGDP|Policy|6|AGDP_000001|

<div class="attention">
データの再利用性，再現性のためには論文での主張の基になっている解析データが登録されることが重要です。できるだけ VCF などの解析データを Analysis に登録してください。
</div>

<div class="attention">
データは AGD Submission 単位で公開されます。公開時期の異なるデータセットは別の Submission に分けてください。
</div>

## 塩基配列データ (raw/unaligned と aligned) {#sequence}

AGD でサポートしているファイル形式を以下に示します。 異なるファイル形式をもっている場合や不明な点がある場合は [AGD に連絡](/contact-ddbj.html)してください。

データファイルが複数サンプルに由来するデータを含んでいる場合，投稿する前にファイルをサンプルごとに分割します。そうすることによって Data は１つのサンプルに由来するデータファイルだけを持つようになります。

### BAM 形式 {#bam-format}

Binary Alignment/Map (BAM) ファイルは AGD への登録にとって好ましいファイル形式の一つです。BAM は Sequence Alignment/Map (SAM) ファイル形式のバイナリー圧縮です (詳細は [SAMv1.pdf](https://samtools.github.io/hts-specs/SAMv1.pdf))。BAM ファイルは SAM/BAM 用ツール (例えば [samtools](http://www.htslib.org/)) で human-readable なテキスト形式である SAM に変換することができます。BAM はアライメントされなかった unaligned read を含めることができます。  
AGD はプライマリーデータとして Data に unaligned read を含む BAM を登録することを強く推奨しています。

圧縮という観点で BAM ファイルはほぼ最適化されているので，ファイルをさらに圧縮する必要はありません。

### Fastq 形式 {#fastq-format}

シングルとペアードの塩基配列データは下記の条件を満たした [Fastq](http://en.wikipedia.org/wiki/FASTQ_format#Quality) ファイルでの登録を推奨しています。

- Quality score が [Phred](http://en.wikipedia.org/wiki/Phred_quality_score) スケールである。初期の Solexa パイプラインから出力された quality score は Phred スケールに変換されている必要があります。 ASCII とスペース区切りの数字で表された quality score をサポートしています。 Phred quality score のオフセットが 33 か 64 であるかは自動的に判定されます。
- Technical リード (アダプター，リンカー，バーコード配列) が取り除かれている。
- シングルリードは一つの Fastq ファイルで登録します。
- ペアードリードは分割し，二つの Fastq ファイルとして登録します。 リード名はペアの最初か二つ目のリードかを区別する '/1' と '/2' のような suffix を持っている必要があります。
  リードの正規表現は "^(.\*)(\[\\\\.|:|/|\_\])(\[12\])$" になります。
- それぞれのリードが '@' で始まる。
- ベースコールと quality score が '+' で始める行で分けられている。
- Fastq ファイルは gzip か bzip2 で圧縮されている。

シングルリードを含む Fastq ファイルの例:

```
@read_name
GATTTGGGGTTCAAAGCAGTATCGATCAAATAGTAAATCCATTTGTTCAACTCACAGTTT
+
!''*((((***+))%%%++)(%%%%).1***-+*''))**55CCF>>>>>>CCCCCCC65
...
```

ペアードリードを含む Fastq ファイルの例:

```
@read_name/1
GATTTGGGGTTCAAAGCAGTATCGATCAAATAGTAAATCCATTTGTTCAACTCACAGTTT
+
!''*((((***+))%%%++)(%%%%).1***-+*''))**55CCF>>>>>>CCCCCCC65
@read_name/2
GATTTGGGGTTCAAAGCAGTATCGATCAAATAGTAAATCCATTTGTTCAACTCACAGTTT
+
!''*((((***+))%%%++)(%%%%).1***-+*''))**55CCF>>>>>>CCCCCCC65
...
```

### SFF 形式 {#sff-format}

454 プラットフォームからのデータは，SFF での登録が推奨されます。

圧縮という観点で SFF ファイルはほぼ最適化されているので，ファイルをさらに圧縮する必要はありません。

## アレイデータ (遺伝子型タイピング，SNP，遺伝子発現) {#array}

AGD は全ての種類のアレイプラットフォームからのデータを受け付けています。例えば，genotypes，遺伝子発現やメチル化解析データなどです。

AGD はこれらのデータの登録に柔軟に対応しており，Analysis にアレイ実験から得られたあらゆる種類のデータファイルを格納することができます。

AGD は生データ (例 CEL) と解析したデータの両方を登録することを推奨します。これらは利用者が結果をみるためだけではなく，論文で示されている結果を再現するためにも役立ちます。

AGD はサンプルに関連した表現型 (phenotype) 情報も Analysis にアーカイブしています。

## 変異データ {#variations}

AGD は variation データの [VCF 形式](http://en.wikipedia.org/wiki/Variant_Call_Format)での登録を推奨しています。AGD Analysis に vcf ファイルを登録することができます。

## その他のデータ {#other}

Analysis は複数の Data もしくは Sample を参照することができるので，これらのオブジェクトに登録されているデータを解析，集計したデータを Analysis に登録することができます。Analysis に登録できるファイルの例を以下にリストします。

- 複数 Data に登録された配列データから作成したリファレンス配列 GFF3 ファイル
- 複数 Analysis に登録されたアレイデータを正規化し表にまとめたファイル

## メタデータ {#metadata}

AGD データモデルは [Sequence Read Archive](/dra/submission.html) のモデルを拡張してつくられています。AGD メタデータは XML オブジェクトで構成されています。AGD と JGA の xsd は共通です。

AGD XML schema: [AGD xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

{% include image.html url="submission/jga_metadata_1.jpg" caption="単一の Policy が適用されている例" class="w500" %}

{% include image.html url="submission/jga_metadata_2.jpg" caption="Control と Case で Policy が異なる例" class="w500" %}

### Submission {#Submission}

登録プロセスを管理します。登録者の連絡先情報を含みます。

XML schema: [JGA.submission.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Study {#Study}

研究を記述します。 研究のタイトル，study type と論文に使われるようなアブストラクトを含みます。論文公表後，登録したデータを使った論文の PubMed ID を追加し，論文情報を更新します。

XML schema: [JGA.study.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Sample {#Sample}

研究で使った各サンプルを記載します。一般的に Sample は個人に対応します。 必須項目は少ないですが，できるだけ詳細な情報を記入し，研究対象者の表現型を含むサンプルについての有用な情報を提供することを推奨します。

XML schema: [JGA.sample.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Experiment {#Experiment}

実験のセットアップを記述します。サンプルの調整からデータの取得にいたるまでのプロトコールや使ったシークエンサを記載します。次世代シークエンス実験にのみ対応しています。

XML schema: [JGA.experiment.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Data {#Data}

次世代シークエンスデータについての情報と，それらと Experiment との関係を記述します。ファイルをまとめる役割を果たします。

XML schema: [JGA.data.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Analysis {#Analysis}

アレイデータ，データを解析，集計した結果を登録します。 変異データは VCF ファイルとして登録することができます。 それぞれの Analysis には一つの VCF ファイルしか登録できません。また，VCF で使われたサンプルは AGD Sample に対応している必要があります。 使用したリファレンス配列を INSDC のアクセッション番号，もしくは広く使われているラベル名で記載します。

XML schema: [JGA.analysis.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Data set {#Dataset}

Data XML と Analysis XML に記載されているデータファイルを,データセットという単位にまとめます。 Study 中に適用されるポリシー (利用制限事項) が異なるデータ (Control と Case 等) が含まれている場合，データセットを分ける必要があります。

一般的にポリシーは個人 (Sample) との間のインフォームドコンセントによって規定されます。

XML schema: [JGA.dataset.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Policy {#Policy}

データ利用制限ポリシーを記載します。[NBDC ポリシー](https://humandbs.dbcls.jp/nbdc-policy)以外に適用すべきポリシーがなければ作成する必要はありません。

[AGD ポリシー](https://gr-sharingdbs.biosciencedbc.jp/agd-guidelines)以外に適用すべきポリシーがある場合は，NBDC にポリシーを登録し，発行される AGDP 番号を Data set から参照します。

XML schema: [JGA.policy.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

## Analysis のみの登録 {#analysis_only}

集計されたデータ，もしくは，Experiment-Data に格納するのが適切ではないデータを登録する場合は Sample-Experiment-Data ではなく Sample-Analysis セットでデータを登録することができます。

{% include image.html url="submission/sample-analysis.jpg" caption="Sample に１対１対応する Analysis データ登録" class="w500" %}

{% include image.html url="submission/samples-analysis.jpg" caption="Sample を集計した Analysis データ登録" class="w500" %}

Sample-Analysis セットでデータ登録をする場合は [AGD チームに連絡](/contact-ddbj.html)します。

## 登録の更新 {#update}

登録を更新するためには [AGD チームに連絡](/contact-ddbj.html)します。
