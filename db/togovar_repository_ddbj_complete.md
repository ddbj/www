# DDBJ TogoVar-repository — 完全ガイド

> 出典: https://www.ddbj.nig.ac.jp/togovar/  
> 取得日: 2026年5月

---

## 目次

1. [TogoVar-repository とは（Home）](#1-togovar-repository-とはhome)
2. [登録（Submission）](#2-登録submission)
3. [メタデータ（Metadata）](#3-メタデータmetadata)
4. [データファイル（Data File）](#4-データファイルdata-file)
5. [Validation](#5-validation)
6. [FAQ — TogoVar-repository 関連](#6-faq--togovar-repository-関連)
7. [リンク集](#7-リンク集)

---

## 1. TogoVar-repository とは（Home）

**TogoVar-repository** は**ヒトのバリアントと頻度情報のための公的データベース**です。2024年9月に正式にサービスを開始しました。

TogoVar-repository はバリアントを以下の二種類に分けて受け付けています：

| 種別 | 定義 | NCBI との交換 |
|-----|------|-------------|
| **短いバリアント（SNP）** | 50 bp 以下のバリアント。一塩基バリアント（SNV）や短い挿入・欠失（Indel）。1 塩基の解像度（precise） | NCBI [dbSNP](https://ncbi.nlm.nih.gov/snp/) とのデータ交換を**予定**（現時点では未実現） |
| **構造バリアント（SV）** | 50 bp よりも大きい構造バリアント。挿入、欠失、重複、逆位、転座や複雑なバリアント。範囲（リピート数、塩基座標）を表現可能なデータモデル | NCBI [dbVar](https://ncbi.nlm.nih.gov/dbvar/) とのデータ交換を**予定**（現時点では未実現） |

**他のデータベースとの比較**:

| データベース | 対象生物 |
|------------|---------|
| TogoVar-repository | **ヒトのみ** |
| NCBI dbSNP/dbVar | **ヒトのみ** |
| EBI European Variation Archive (EVA) | ヒトとヒト以外の生物からのバリアントを受け付ける |

TogoVar-repository は DBCLS（ライフサイエンス統合データベースセンター）の TogoVar（日本人集団のバリアントと頻度・アノテーションを提供するサービス）を補完するデータベースです。

**主なリンク**

| 目的 | URL |
|------|-----|
| 登録 | https://www.ddbj.nig.ac.jp/togovar/submission.html |
| ダウンロード | https://ddbj.nig.ac.jp/public/togovar/ |
| バリアントの閲覧（GRCh38） | https://grch38.togovar.org/ |
| TogoVar（DBCLS） | https://togovar.org/ |

---

## 2. 登録（Submission）

### 2-1. ヒトを対象とした研究データの登録について

研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、**登録者の責任において**保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。

登録前に必ず[「ヒトを対象とした研究データの登録について」](https://www.ddbj.nig.ac.jp/policies.html#submission-of-human-data)を熟読してください。

### 2-2. 登録種別

| 種別 | 内容 |
|-----|------|
| **SNP** | ≤50 bp の短いバリアント。VCF で登録 |
| **SV** | >50 bp の構造バリアント。エクセルシートまたは VCF で登録 |

**重要**: BioProject と BioSample の登録は**必須**です。関連するデータが BioProject と BioSample によりデータベースを跨ってまとめられます。

### 2-3. 登録の流れ（7ステップ）

#### ステップ 1: 登録アカウントの作成

- [DDBJ アカウント](https://www.ddbj.nig.ac.jp/ddbj-account.html)を取得する
- [公開鍵をアカウントに登録](https://www.ddbj.nig.ac.jp/ddbj-account.html#public-key)し、データを sftp/scp でアップロードできるようにする

#### ステップ 2: 登録の申し込み

[TogoVar-repository 登録申し込みフォーム](https://docs.google.com/forms/d/e/1FAIpQLSdCsaeFRjDHd-6ae-dbE8BPiHQS6cjllsKqpGQhorcgT2YZqA/viewform?usp=sf_link)で登録を申し込みます。TogoVar-repository チームが登録方法を案内します。

#### ステップ 3: BioProject の登録

プロジェクトを [BioProject](https://www.ddbj.nig.ac.jp/bioproject/submission.html) に登録します。プレフィックス **PRJDB** のアクセッション番号が BioProject に発行されます。

#### ステップ 4: BioSample の登録

サンプルを [BioSample](https://www.ddbj.nig.ac.jp/biosample/submission.html) に登録します。プレフィックス **SAMD** のアクセッション番号が BioSample に発行されます。

#### ステップ 5: メタデータの作成

[TogoVar-repository 登録用エクセル](https://github.com/ddbj/togovar-repository/raw/main/submission_excel/TogoVar_v1.4.xlsx)をダウンロードして内容を記入します。

エクセルは以下のシートから構成されます：

| シート名 | 内容 |
|---------|------|
| **TogoVar_Study** | 研究概要（dbSNP の CONT と PUB、dbVar の Submission と Study に対応） |
| **TogoVar_SampleSet** | サンプルセット（集団）の情報 |
| **TogoVar_Sample** | 使用したサンプルの情報 |
| **TogoVar_Experiment** | 実験手法の解析方法 |
| **TogoVar_Dataset** | データセット（1 dataset = 1 VCF） |
| **Variant Call (SV)** | SV variant call をシートで登録する場合 |
| **Variant Region (SV)** | SV variant region をシートで登録する場合（任意） |

**注意**: 異なる種別のバリアント（SNP と SV）は別々の study として登録してください。

#### ステップ 6: データファイルの準備

バリアント（**必須**）、アリル頻度（**推奨**）と遺伝型頻度（任意）は **VCF** で登録します。

VCF 登録ガイドライン:
- [dbSNP VCF Submission Format Guidelines（PDF）](https://www.ddbj.nig.ac.jp/assets/files/submission/dbSNP_VCF_Submission.pdf)
- [dbVar VCF Submission Format Guidelines（PDF）](https://www.ddbj.nig.ac.jp/assets/files/submission/dbVar_VCF_Submission.pdf)
- [The Variant Call Format Specification v4.4（PDF）](https://samtools.github.io/hts-specs/VCFv4.4.pdf)

#### ステップ 7: ファイルのアップロード

登録用エクセルと VCF ファイルを **scp/sftp** でアップロードします。アップロード方法は[データのアップロード](https://www.ddbj.nig.ac.jp/upload.html)を参照してください。

### 2-4. アクセッション番号

TogoVar-repository はオブジェクトにプレフィックスで区別したアクセッション番号を発行します。dbVar の [Overview of Structural Variation](https://www.ncbi.nlm.nih.gov/dbvar/content/overview/) もご参照ください。

| オブジェクト | プレフィックス | 対象 | 備考 |
|------------|-------------|------|------|
| study | **dstd** | SNP・SV 共通 | — |
| variant | **dss** | SNP | 公開後 dbSNP に取り込まれると dbSNP により ss が発行され、次の build で rs にマージされる（新規であれば rs が発行される） |
| variant call | **dssv** | SV | — |
| variant region | **dsv** | SV | — |

**内部参照**: SampleSet、Experiment、Dataset は内部的に連番 ID で参照されます。dbSNP メタデータ中では、それぞれ `ss1`、`e1`、`a1` のように区別して参照されます。

**Bi-allelic / multi-allelic の扱い**:
- TogoVar-repository は variant を **bi-allelic** で受け付けます
- dbSNP/dbVar は pos + variation type が同じ multi-allelic での登録受け付けを許容しています
- dbSNP rs と Variant region は multi-allelic です

### 2-5. データ公開

- 論文で出るまでデータを非公開にすることができます
- 登録者は登録日から**三年以内**の公開予定日を設定することができます
- 非公開のデータは [data release policy](https://www.ddbj.nig.ac.jp/insdc/data-release-policy.html) に従って公開されます

### 2-6. 更新

データを更新する場合、[TogoVar-repository チームに連絡](https://www.ddbj.nig.ac.jp/contact-ddbj.html)してください。

---

## 3. メタデータ（Metadata）

### 3-1. データモデル

TogoVar-repository は SNP/SV で共通のデータモデルを使用しています。

**データモデルの概要**:
- dbVar のデータモデルに dbSNP の Assay を Dataset として取り込んで拡張し、SNP/SV 共通モデルを構築
- **BioProject と BioSample は必須**
- バリアントは Dataset を介して Study/SampleSet にリンク
- SampleSet/Experiment/Dataset は連番で内部的に参照

```
BioProject
    └── Study (dstd)
            ├── SampleSet → Sample (BioSample)
            ├── Experiment
            └── Dataset (1 dataset = 1 VCF)
                    └── Variant (dss / dssv / dsv)
```

### 3-2. 登録用エクセルのシート詳細

**[TogoVar-repository 登録用エクセル（v1.4）](https://github.com/ddbj/togovar-repository/raw/main/submission_excel/TogoVar_v1.4.xlsx)**

#### TogoVar_Study シート

研究概要を記述します。dbSNP では CONT（Submitter Contact）と PUB（Publication）、dbVar では Submission と Study に対応します。主な記載内容：
- Submission Type（SNP または SV）
- 研究タイトル・説明
- 登録者情報（連絡先）
- 文献情報（PubMed ID 等）
- BioProject アクセッション番号

#### TogoVar_SampleSet シート

サンプルセット（集団）の情報を記述します。主な記載内容：
- サンプルセット名・説明
- 集団情報（民族・地域等）
- BioSample アクセッション番号のリスト

#### TogoVar_Sample シート

使用したサンプルの情報を記述します。各サンプルの BioSample アクセッション番号と属性情報を記載します。

#### TogoVar_Experiment シート

実験手法と解析方法を記述します。主な記載内容：
- シークエンシング・ジェノタイピング手法
- 使用した機器・プラットフォーム
- バリアントコール手法・ソフトウェア
- リファレンスゲノム（GRCh37 または GRCh38）

#### TogoVar_Dataset シート

データセットを記述します（**1 dataset = 1 VCF**）。主な記載内容：
- VCF ファイル名・パス
- Dataset の種類（バリアント、アリル頻度、遺伝型頻度）
- 対応する SampleSet・Experiment への参照

#### Variant Call (SV) シート

SV の variant call を表形式で登録する場合に使用します（VCF での登録も可能）。

#### Variant Region (SV) シート

SV の variant region を表形式で登録する場合に使用します（**任意**）。Variant region がない場合は TogoVar-repository が Variant call から region を自動生成します。

---

## 4. データファイル（Data File）

### 4-1. VCF

バリアント（**必須**）、アリル頻度（**推奨**）と遺伝型頻度（**任意**）は **VCF** で登録します。

**VCF 必須ヘッダー**:

```
##fileformat=VCFv4.1
##reference=GRCh38
```

`##reference` の指定が**必須**です。指定できる値は GRCh37 または GRCh38 です。

**VCF 登録ガイドライン**:
- [dbSNP VCF Submission Format Guidelines（PDF）](https://www.ddbj.nig.ac.jp/assets/files/submission/dbSNP_VCF_Submission.pdf)
- [dbVar VCF Submission Format Guidelines（PDF）](https://www.ddbj.nig.ac.jp/assets/files/submission/dbVar_VCF_Submission.pdf)
- [The Variant Call Format Specification v4.4（PDF）](https://samtools.github.io/hts-specs/VCFv4.4.pdf)

### 4-2. Variant call（SV）

SV variant call は以下の二通りの方法で登録できます：

| 方法 | 説明 |
|-----|------|
| 登録用エクセルの "Variant Call (SV)" シート | 表形式で直接記入して登録 |
| VCF ファイル | VCF をパースした後、シート（TSV）経由と同じ処理で validation される |

**Variant region について**:
- Variant region は**任意**です
- Variant region がない場合は TogoVar-repository で Variant call から region を自動生成します
- Variant region が VCF で登録されることは想定していません

### 4-3. リファレンス配列

バリアントの REF 塩基配列チェックに使用するリファレンスゲノム：

- NCBI Dataset から **GRCh37 latest** と **GRCh38 latest** をダウンロード
- [Genome sequence report](https://www.ncbi.nlm.nih.gov/datasets/docs/v2/reference-docs/data-reports/genome-sequence/) の jsonl を結合して reference sequence と CHROM チェックに使用

---

## 5. Validation

TogoVar-repository の validation rule と controlled vocabulary (CV)。

**Validation rules 表（Google スプレッドシート）**:  
[TogoVar-repository validation rules in table](https://docs.google.com/spreadsheets/d/1_HV2QtKh9mSqT_eC4UHG6fgHf8pG4FY_QhG83Ajwbag/edit?gid=0#gid=0)

**Validation ルールの種別**:
- dbVar から提供されたルール
- dbSNP offline validator によるルール
- TogoVar-repository 独自のルール

**Validation のチェック項目（VCF）**:

| チェック項目 | 説明 |
|------------|------|
| REF 塩基一致チェック | VCF の REF 塩基がリファレンスゲノムと一致するかチェック（`ref-validator.rb` 使用） |
| INFO 形式チェック | VCF の INFO フィールドの形式チェック |
| FORMAT 形式チェック | VCF の FORMAT フィールドの形式チェック |
| SNP 密度チェック | SNP 密度の異常値チェック |
| dbVar xsd validation | SV の場合は dbVar XSD スキーマによる XML バリデーション（オプション） |
| CHROM チェック | VCF の CHROM がリファレンスゲノムと一致するかチェック |

**Validation ツール（GitHub）**:

- [togovar-convert.rb](https://github.com/ddbj/togovar-repository/blob/main/togovar-convert.rb): メタデータとバリアントの変換・バリデーション
- [ref-validator.rb](https://github.com/ddbj/togovar-repository/blob/main/ref-validator.rb): REF 塩基配列チェック専用ツール（サイズが大きい VCF 向け）
- [batch-validation.sh](https://github.com/ddbj/togovar-repository/blob/main/batch-validation.sh): サイズが大きい VCF 処理用シェル
- [dbSNP_offline_vcf_validator](https://github.com/ddbj/togovar-repository/tree/main/dbSNP_offline_vcf_validator): dbSNP のオフライン VCF バリデーター

**Singularity でのバリデーション実行例**:

```bash
# 通常実行
singularity exec togovar.simg togovar-convert.rb -v VSUB000001

# REF 塩基一致・INFO 形式・FORMAT 形式チェックをスキップ
singularity exec togovar.simg togovar-convert.rb -v VSUB000001 -sif

# dbVar xsd チェックも実施する場合
singularity exec togovar.simg togovar-convert.rb -v VSUB000001 -x
```

オプション一覧:

| オプション | 説明 |
|---------|------|
| `-v VSUB番号` | Submission ID を指定 |
| `-s` | REF 塩基一致チェックをスキップ |
| `-i` | INFO 形式チェックをスキップ |
| `-f` | FORMAT 形式チェックをスキップ |
| `-d` | SNP 密度チェックをスキップ |
| `-x` | dbVar xsd validation を実施 |
| `-g` | SV で genotype VCF を生成する場合（アクセッション番号発行時） |

**Validation 出力ファイル（SNP）**:

```
VSUB000001/
├── VSUB000001_a1.vcf          # dbSNP 用 VCF（assay 毎）
├── VSUB000001_a2.vcf          # dbSNP 用 VCF（assay 毎）
├── VSUB000001_dbsnp.tsv       # dbSNP メタデータ
├── VSUB000001_SNP.log.txt     # validation ログ（サマリー）
├── VSUB000001_SNP.xlsx        # TogoVar-repository メタデータエクセル
└── submitted/
    ├── snp-vcf-test1.vcf      # 登録された VCF
    └── snp-vcf-test1.vcf.log.txt  # 各 VCF の validation 結果
```

**Validation 出力ファイル（SV、VCF で登録した場合）**:

```
VSUB000003/
├── VSUB000003_dbvar.xml                      # dbVar XML
├── VSUB000003_SV.log.txt                     # validation ログ（サマリー）
├── VSUB000003_SV.xlsx                        # メタデータエクセル
├── VSUB000003.variant_call.tsv.log.txt       # variant call validation ログ
├── VSUB000003.variant_region.tsv.log.txt     # variant region validation ログ
└── submitted/
    ├── sv-test1.vcf                          # 登録された VCF
    └── sv-test1.vcf.log.txt
```

---

## 6. FAQ — TogoVar-repository 関連

### Q. TogoVar-repository と TogoVar（togovar.org）の違いは何ですか？

**TogoVar-repository** は DDBJ センターが運営するデータ**登録**データベースです。ヒトのバリアントデータを受け付け、アクセッション番号を発行し、データを公開します。

**TogoVar**（https://togovar.org/）は DBCLS が運営するデータ**閲覧**サービスです。日本人集団で観察されたバリアントのアリル頻度と解釈のためのアノテーションをまとめて提供します。TogoVar-repository はこのサービスを補完します。

---

### Q. TogoVar-repository のデータは dbSNP/dbVar と交換されますか？

データ交換は予定されていますが、現時点では実現していません。

- SNP（短いバリアント）: NCBI [dbSNP](https://ncbi.nlm.nih.gov/snp/) とのデータ交換を計画中
- SV（構造バリアント）: NCBI [dbVar](https://ncbi.nlm.nih.gov/dbvar/) とのデータ交換を計画中

SNP バリアントが公開後 dbSNP に取り込まれると、dbSNP により ss が発行され、次の build で rs にマージされます（新規の場合は rs が発行されます）。

---

### Q. ヒト以外の生物のバリアントデータは登録できますか？

TogoVar-repository と NCBI dbSNP/dbVar は**ヒトのみ**が対象です。ヒト以外の生物のバリアントデータは EBI の [European Variation Archive（EVA）](https://www.ebi.ac.uk/eva/)に登録してください。

---

### Q. データ公開の依頼方法は？

[データ公開の依頼方法](https://www.ddbj.nig.ac.jp/faq/ja/request-release.html)を参照してください。

---

### Q. データを更新するには？

[TogoVar-repository チームに連絡](https://www.ddbj.nig.ac.jp/contact-ddbj.html)してください。

---

### Q. VCF の reference はどのように指定すればよいですか？

VCF ヘッダーに `##reference=GRCh37` または `##reference=GRCh38` を記載してください。reference の指定は**必須**です。

---

## 7. リンク集

| ページ | URL |
|--------|-----|
| TogoVar-repository ホーム | https://www.ddbj.nig.ac.jp/togovar/index.html |
| 登録（Submission） | https://www.ddbj.nig.ac.jp/togovar/submission.html |
| メタデータ（Metadata） | https://www.ddbj.nig.ac.jp/togovar/metadata.html |
| データファイル（Data File） | https://www.ddbj.nig.ac.jp/togovar/datafile.html |
| Validation | https://www.ddbj.nig.ac.jp/togovar/validation.html |
| Validation rules 表（Google スプレッドシート） | https://docs.google.com/spreadsheets/d/1_HV2QtKh9mSqT_eC4UHG6fgHf8pG4FY_QhG83Ajwbag/ |
| ダウンロード | https://ddbj.nig.ac.jp/public/togovar/ |
| バリアントの閲覧（GRCh38） | https://grch38.togovar.org/ |
| 登録申し込みフォーム | https://docs.google.com/forms/d/e/1FAIpQLSdCsaeFRjDHd-6ae-dbE8BPiHQS6cjllsKqpGQhorcgT2YZqA/viewform |
| 登録用エクセル（v1.4） | https://github.com/ddbj/togovar-repository/raw/main/submission_excel/TogoVar_v1.4.xlsx |
| GitHub リポジトリ | https://github.com/ddbj/togovar-repository |
| dbSNP VCF Submission Format Guidelines（PDF） | https://www.ddbj.nig.ac.jp/assets/files/submission/dbSNP_VCF_Submission.pdf |
| dbVar VCF Submission Format Guidelines（PDF） | https://www.ddbj.nig.ac.jp/assets/files/submission/dbVar_VCF_Submission.pdf |
| VCF Specification v4.4（PDF） | https://samtools.github.io/hts-specs/VCFv4.4.pdf |
| TogoVar（DBCLS） | https://togovar.org/ |
| DDBJ アカウント取得 | https://www.ddbj.nig.ac.jp/ddbj-account.html |
| 公開鍵の登録 | https://www.ddbj.nig.ac.jp/ddbj-account.html#public-key |
| データのアップロード | https://www.ddbj.nig.ac.jp/upload.html |
| BioProject 登録 | https://www.ddbj.nig.ac.jp/bioproject/submission.html |
| BioSample 登録 | https://www.ddbj.nig.ac.jp/biosample/submission.html |
| data release policy | https://www.ddbj.nig.ac.jp/insdc/data-release-policy.html |
| TogoVar-repository チームへの連絡 | https://www.ddbj.nig.ac.jp/contact-ddbj.html |
| FAQ: データ公開の依頼 | https://www.ddbj.nig.ac.jp/faq/ja/request-release.html |
| NCBI dbSNP | https://ncbi.nlm.nih.gov/snp/ |
| NCBI dbVar | https://ncbi.nlm.nih.gov/dbvar/ |
| dbVar Overview of Structural Variation | https://www.ncbi.nlm.nih.gov/dbvar/content/overview/ |
| dbSNP How to submit | https://www.ncbi.nlm.nih.gov/snp/docs/submission/hts_launch_and_introductory_material/ |
| EBI European Variation Archive（EVA） | https://www.ebi.ac.uk/eva/ |
| ヒトデータ登録について | https://www.ddbj.nig.ac.jp/policies.html#submission-of-human-data |
| ref-validator.rb（GitHub） | https://github.com/ddbj/togovar-repository/blob/main/ref-validator.rb |
| batch-validation.sh（GitHub） | https://github.com/ddbj/togovar-repository/blob/main/batch-validation.sh |
| dbVar xsd（GitHub） | https://github.com/ddbj/togovar-repository/blob/main/xsd/dbVar.xsd |
| テストデータ（GitHub） | https://github.com/ddbj/togovar-repository/blob/main/test |
