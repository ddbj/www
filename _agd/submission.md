---
layout: indexed_content
title: AGD への登録
pathname: submission
category: agd
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /agd/index.html
  - id: submission
    title: Submission
    url: /agd/submission.html
    children:
      - title: How to submit
        url: /agd/submission-step.html
      - title: Example submission
        url: https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318
      - title: How to download
        url: /agd/download.html
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/jga/xsd/
  - id: ga4gh beacon
    title: GA4GH Beacon
    url: /agd/beacon.html
lang: ja
---

## 登録概要 <a name="submission"></a>

AGD は NBDC で承認された利用制限ポリシーを持つ，匿名化されたデータだけを受け付けています。 登録者は [NBDC](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines) に AGD へのデータ提供を申請し， AGD は NBDC から正式に提供が承認された連絡を受け，登録者に登録手順を案内します。

AGD データを利用するためには，[NBDC](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines) に利用を申請し，承認される必要があります。

メタデータオブジェクトに対して以下のプレフィックス付き管理用 ID が割り振られます。

<div class="attention red">
AGD で発行される管理用 ID は論文で引用することはできません。論文投稿に必要なアクセッション番号は JGA や DRA から取得する必要があります。AGD は研究者間でのデータ共有 (制限共有) を実現するために DDBJ グループクラウドで提供するデータベースです。
</div>

| プレフィックス | メタデータオブジェクト | 数字の桁数 | 例                 |
| ------- | ----------- | ----- | ----------------- |
| AGD\_   | Submission  | 11    | AGD\_00000000001  |
| AGDS\_  | Study       | 11    | AGDS\_00000000001 |
| AGDN\_  | Sample      | 11    | AGDN\_00000000001 |
| AGDX\_  | Experiment  | 11    | AGDX\_00000000001 |
| AGDR\_  | Data        | 11    | AGDR\_00000000001 |
| AGDZ\_  | Analysis    | 11    | AGDZ\_00000000001 |
| AGDD\_  | Data set    | 11    | AGDD\_00000000001 |
| AGDP\_  | Policy      | 11    | AGDP\_00000000001 |

## 塩基配列データ (raw/unaligned と aligned) <a name="sequence"></a>

AGD でサポートしているファイル形式を以下に示します。 異なるファイル形式をもっている場合や不明な点がある場合は [AGD に連絡](/contact-ddbj.html)してください。

データファイルが複数サンプルに由来するデータを含んでいる場合，投稿する前にファイルをサンプルごとに分割します。 そうすることによって Run は１つのサンプルに由来するデータファイルだけを持つようになります。

### BAM 形式 <a name="bam-format"></a>

Binary Alignment/Map (BAM) ファイルは AGD への登録にとって好ましいファイル形式の一つです。BAM は Sequence Alignment/Map (SAM) ファイル形式のバイナリー圧縮です (詳細は [SAMv1.pdf](https://samtools.github.io/hts-specs/SAMv1.pdf))。BAM ファイルは SAM/BAM 用ツール (例えば [samtools](http://www.htslib.org/)) で human-readable なテキスト形式である SAM に変換することができます。BAM はアライメントされなかった unaligned read を含めることができます。  
AGD はプライマリーデータとして Data に unaligned read を含む BAM を登録することを強く推奨しています。

圧縮という観点で BAM ファイルはほぼ最適化されているので，ファイルをさらに圧縮する必要はありません。

### Fastq 形式 <a name="fastq-format"></a>

シングルとペアードの塩基配列データは下記の条件を満たした [Fastq](http://en.wikipedia.org/wiki/FASTQ_format#Quality) ファイルでの登録を推奨しています。

  - Quality score が [Phred](http://en.wikipedia.org/wiki/Phred_quality_score) スケールである。 初期の Solexa パイプラインから出力された quality score は Phred
    スケールに変換されている必要があります。 ASCII とスペース区切りの数字で表された quality score をサポートしています。 Phred quality score のオフセットが 33 か 64 であるかは自動的に判定されます。
  - Technical リード (アダプター，リンカー，バーコード配列) が取り除かれている。
  - シングルリードは一つの Fastq ファイルで登録します。
  - ペアードリードは分割し，二つの Fastq ファイルとして登録します。 リード名はペアの最初か二つ目のリードかを区別する '/1' と '/2' のような suffix を持っている必要があります。 リードの正規表現は "^(.\*)(\[\\\\.\|:\|/\|\_\])(\[12\])$" になります。
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

### SFF 形式 <a name="sff-format"></a>

454 プラットフォームからのデータは，SFF での登録が推奨されます。

圧縮という観点で SFF ファイルはほぼ最適化されているので，ファイルをさらに圧縮する必要はありません。

## アレイデータ (遺伝子型タイピング，SNP，遺伝子発現) <a name="array"></a>

AGD は全ての種類のアレイプラットフォームからのデータを受け付けています。例えば，genotypes，遺伝子発現やメチル化解析データなどです。

AGD はこれらのデータの登録に柔軟に対応しており，Data にアレイ実験から得られたあらゆる種類のデータファイルを格納することができます。

AGD は生データ (例 CEL) と解析したデータの両方を登録することを推奨します。これらは利用者が結果をみるためだけではなく，論文で示されている結果を再現するためにも役立ちます。

AGD はサンプルに関連した表現型 (phenotype) 情報も Analysis にアーカイブしています。

## 変異データ <a name="variations"></a>

AGD は variation データの [VCF 形式](http://en.wikipedia.org/wiki/Variant_Call_Format)での登録を推奨しています。 AGD Analysis に vcf ファイルを登録することができます。

## その他のデータ <a name="other"></a>

Analysis は複数の Data もしくは Sample を参照することができるので，これらのオブジェクトに登録されているデータを解析，集計したデータを
Analysis に登録することができます。Analysis に登録できるファイルの例を以下にリストします。

  - 複数 Data に登録された配列データから作成したリファレンス配列 GFF3 ファイル
  - 複数 Data に登録されたアレイデータを正規化し表にまとめたファイル
  - 複数 Sample の表現型情報を一覧できる表形式ファイル

## メタデータ <a name="metadata"></a>

AGD データモデルは [Sequence Read Archive](/dra/submission.html) のモデルを拡張してつくられています。 AGD メタデータは XML オブジェクトで構成されています。

AGD XML schema: [AGD xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

{::nomarkdown}
{% include image.html url="submission/jga_metadata_1.jpg" caption="単一の Policy が適用されている例" class="w500" %}
{:/}

{::nomarkdown}
{% include image.html url="submission/jga_metadata_2.jpg" caption="Control と Case で Policy が異なる例" class="w500" %}
{:/}

### 公開される項目 <a name="public"></a>

AGD メタデータのうち以下のオブジェクトは登録の概要を示すため，データの制限共有開始後に公開されます。

{::options parse_block_html="true" /}
<div class="dl-list">

Submission: 
: 登録者の連絡先以外の全ての内容

Study: 
: 全ての内容

Data set: 
: 全ての内容と含まれる Sample 数とファイルサイズ。

Policy: 
: 全ての内容

</div>

### Submission <a name="Submission"></a>

登録プロセスを管理します。登録者の連絡先情報を含みます。

XML schema: [AGD.submission.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Study <a name="Study"></a>

研究を記述します。 研究のタイトル，study type と論文に使われるようなアブストラクトを含みます。 論文公表後，登録したデータを使った論文の PubMed ID を追加し，論文情報を更新します。

XML schema: [AGD.study.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Sample <a name="Sample"></a>

研究で使った各サンプルを記載します。一般的に Sample は個人に対応します。 必須項目は少ないですが，できるだけ詳細な情報を記入し，サンプルについての有用な情報を提供することを推奨します。

XML schema: [AGD.sample.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Experiment <a name="Experiment"></a>

実験のセットアップを記述します。サンプルの調整からデータの取得にいたるまでのプロトコールや使ったシークエンサやアレイを記載します。シークエンシングとアレイ実験の両方に対応しています。

XML schema: [AGD.experiment.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Data <a name="Data"></a>

データファイルについての情報と，それらと Experiment との関係を記述します。ファイルをまとめる役割を果たします。

XML schema: [AGD.data.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Analysis <a name="Analysis"></a>

データを解析，集計した結果を登録します。また，サンプルの表現型情報をまとめた表を登録することができます。 変異データは VCF ファイルとして登録することができます。 それぞれの Analysis には一つの VCF ファイルしか登録できません。また，VCF で使われたサンプルは AGD Sample に対応している必要があります。 使用したリファレンス配列を INSDC のアクセッション番号，もしくは広く使われているラベル名で記載します。

XML schema: [AGD.analysis.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Data set <a name="Dataset"></a>

Data XML と Analysis XML に記載されているデータファイルを,ポリシー (利用制限事項) が適用されるデータセットという単位にまとめます。 全てのデータに対して同じポリシーが適用される場合，Data set を作成する必要はありません。 ポリシーが複数ある場合 (Control と Case で適用されるポリシーが異なる場合など)，対応する Data set を作成する必要があります。

一般的にポリシーは個人 (Sample) との間のインフォームドコンセントによって規定されます。

XML schema: [AGD.dataset.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### Policy <a name="Policy"></a>

データ利用制限ポリシーを記載します。

XML schema: [AGD.policy.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

## Analysis のみの登録 <a name="analysis_only"></a>

集計されたデータ，もしくは，Experiment-Data に格納するのが適切ではないデータを登録する場合は Sample-Experiment-Data ではなく Sample-Analysis セットでデータを登録することができます。

{::nomarkdown}
{% include image.html url="submission/sample-analysis.jpg" caption="Sample に１対１対応する Analysis データ登録" class="w500" %}
{:/}

{::nomarkdown}
{% include image.html url="submission/samples-analysis.jpg" caption="Sample を集計した Analysis データ登録" class="w500" %}
{:/}

Sample-Analysis セットでデータ登録をする場合は [JGA チームに連絡](/contact-ddbj.html)します。

## 登録の更新 <a name="update"></a>

登録を更新するためには [AGD チームに連絡](/contact-ddbj.html)します。