# DDBJ MetaboBank — 完全ガイド

> 出典: https://www.ddbj.nig.ac.jp/metabobank/  
> 取得日: 2026年5月

---

## 目次

1. [MetaboBank とは（Home）](#1-metabobank-とはhome)
2. [MetaboBank への登録（Submission）](#2-metabobank-への登録submission)
3. [メタデータ（Metadata）](#3-メタデータmetadata)
4. [データファイル（Data File）](#4-データファイルdata-file)
5. [Validation Rules](#5-validation-rules)
6. [mzB フォーマット（Other > mzB format）](#6-mzb-フォーマットother--mzb-format)
7. [FAQ — MetaboBank 関連](#7-faq--metabobank-関連)
8. [リンク集](#8-リンク集)

---

## 1. MetaboBank とは（Home）

**MetaboBank** は**質量分析（MS）、NMR、あるいは質量分析イメージングによって得られたメタボロミクスデータの登録を受け付ける公共リポジトリ**です。

メタデータは **MAGE-TAB** 形式で記述します。この形式は機能ゲノミクス（[GEA](https://www.ddbj.nig.ac.jp/gea/index.html) や EBI の [ArrayExpress](https://www.ebi.ac.uk/arrayexpress/)）やプロテオミクス（[SDRF-Proteomics](https://www.nature.com/articles/s41467-021-26111-3)）で使われる形式と共通であり、EBI のメタボロミクスデータベース [MetaboLights](https://www.ebi.ac.uk/metabolights/) の ISA-TAB とも互換性があります。

MetaboBank は登録された生データを Reifycs 社の [mzB フォーマット](https://www.ddbj.nig.ac.jp/metabobank/mzB.html)でも提供しています。mzB ファイルの閲覧には [DataChaker](https://www.reifycs.com/products/hive/baseapp-dl) を利用できます。

**MetaboBank と MetaboLights はデータの標準化において協力しています。**

**ヒトを対象とした研究データの登録について**: 研究対象者の尊厳及び人権は登録者の責任において保護される必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。[「ヒトを対象とした研究データの登録について」](https://www.ddbj.nig.ac.jp/policies.html#submission-of-human-data)を熟読してください。

**主なリンク**

| 目的 | URL |
|------|-----|
| 登録 | https://www.ddbj.nig.ac.jp/metabobank/submission.html |
| 検索 | https://mb2.ddbj.nig.ac.jp/search/ |
| ダウンロード | https://ddbj.nig.ac.jp/public/metabobank/study/ |
| FAQ | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=metabobank |
| mzB フォーマット | https://www.ddbj.nig.ac.jp/metabobank/mzB.html |

---

## 2. MetaboBank への登録（Submission）

### 2-1. 登録の概要

MetaboBank は、塩基配列や遺伝子発現データと関連づけられるように **BioProject と BioSample と連携**しています。メタデータは実験種別毎に用意されたエクセルファイル（MAGE-TAB の IDF と SDRF）に記載します。解析済みのデータ（同定・推定された化合物に関する情報）は所定の形式である **Metabolite assignment file (MAF)** に記載します。

### 2-2. 登録の流れ（7ステップ）

#### ステップ 1: 登録アカウントの取得

- [DDBJ アカウント](https://www.ddbj.nig.ac.jp/ddbj-account.html)を取得する
- [公開鍵をアカウントに登録](https://www.ddbj.nig.ac.jp/account.html#public-key)し MetaboBank 登録を可能にする

#### ステップ 2: 登録申し込み

[MetaboBank 登録申し込みフォーム](https://docs.google.com/forms/d/1yrBo95x5leK9aEZImzT6Y5iVyzgwELCgFZtTU9paguU)から登録を申し込みます。申し込み内容に応じて担当者が個別に登録方法をご案内します。

フォームにアクセスできない場合は、[申し込みファイル](https://www.ddbj.nig.ac.jp/assets/files/text/mb-form.txt)をダウンロードし、必要事項を記入のうえメールで申し込んでください。

#### ステップ 3: BioProject の登録

研究プロジェクトの内容を [BioProject に登録](https://www.ddbj.nig.ac.jp/bioproject/submission.html)します。プレフィックス **PRJDB** のアクセッション番号がプロジェクトに対して発行されます。

#### ステップ 4: BioSample の登録

データを得るために使われた試料情報を [BioSample に登録](https://www.ddbj.nig.ac.jp/biosample/submission.html)します。プレフィックス **SAMD** のアクセッション番号がサンプル毎に発行されます。

**注意事項**:
- メタボロミクス用サンプルには **Omics パッケージ**を使用する
- 登録するサンプルの粒度については [BioSample 概要ページ](https://www.ddbj.nig.ac.jp/biosample/overview.html)を参考にする
- 非生物サンプルの場合、生物名には NCBI Taxonomy の metagenomes などから適切なものを選ぶ:
  - ブランク: [blank sample](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=2582415)
  - 食品: [food metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=870726)
  - その他: FAQ [非生物サンプルの生物名には何を選べばよいでしょうか？](https://www.ddbj.nig.ac.jp/faq/ja/organism-for-material.html) を参照

#### ステップ 5: メタデータの作成

[実験の種類毎に用意されたエクセルファイル](https://www.ddbj.nig.ac.jp/metabobank/metadata.html)をダウンロードし、メタデータを記入します。エクセルは MAGE-TAB の IDF と SDRF に対応したタブから構成されています。

| フォーマット | 内容 |
|------------|------|
| **IDF** (Investigation Description Format) | 研究概要、実験デザイン、プロトコール、文献情報や登録者情報といった研究概要を記述 |
| **SDRF** (Sample and Data Relationship Format) | サンプル属性およびサンプル、測定機器とデータファイルの関係性を記述 |

**注意**: 実験デザインが異なるデータは Study を分けて登録します。関連する Study は BioProject でまとめます。  
例: BioProject PRJDB100 - MTBKS1000（LC-MS）、MTBKS1001（GC-MS）

#### ステップ 6: データファイルの準備

以下のファイルを準備します。

| ファイル種別 | 必須 | 説明 |
|------------|------|------|
| 生データファイル（raw data file） | 必須 | 測定機器から出力された生データ |
| 解析済みデータファイル（processed data file） | 必須 | 関連論文における主張の直接的な根拠 |
| Metabolite assignment file (MAF) | **強く推奨**（必須ではない） | 同定・推定した化合物に関する情報を所定形式で記載 |

データファイルの破損有無の確認のため、md5 チェックサム値のリストを提供します。`md5sum` コマンドの結果を拡張子 `.md5` のファイル（例 `my-study.md5`）としてデータファイルと一緒にアップロードするか、SDRF の `Comment[Raw Data File md5]`、`Comment[Processed Data File md5]`、`Comment[Metabolite Assignment File md5]` に md5 値を記入します。

#### ステップ 7: ファイルのアップロード

メタデータエクセルとデータファイル（生・解析済みデータファイル・MAF）を **scp/sftp** でファイルサーバにアップロードします。

- 異なる Study のデータをアップロードする場合、**Study 毎にファイルを tar もしくは zip でまとめる**
- アップロード先はホーム直下の **metabobank ディレクトリ**
- データファイルのアップロード方法は[「データのアップロード」](https://www.ddbj.nig.ac.jp/upload.html)を参照

### 2-3. アクセッション番号

Study に対して以下の形式のアクセッション番号が発行されます（n は自然数）:

**MTBKSn**（例: MTBKS1）

論文で MetaboBank のメタボロミクスデータに言及するときはこの番号を引用してください。

### 2-4. データ公開

- 関連する論文が公表されるまでデータを非公開にすることができます
- **三年後まで**の公開予定日を設定し、随時延長することができます
- 登録されたデータは[データ公開原則](https://www.ddbj.nig.ac.jp/documents/data-release-policy.html)に従って公開されます
- **EBI MetaboLights とは現在データを交換していません**

関連 FAQ: [データ公開の依頼方法は？](https://www.ddbj.nig.ac.jp/faq/ja/request-release.html)

### 2-5. Reviewer access

登録した非公開データをパスワードで保護されたサイト経由で査読者に提供したい場合は [MetaboBank チームに連絡](https://www.ddbj.nig.ac.jp/contact-ddbj.html)してください。

### 2-6. 更新

登録されたデータを更新・削除する場合は [MetaboBank チームに連絡（フォーム）](https://forms.gle/Ko5NsS2TgnLu38vC6)してください。

### 2-7. Third-party reanalysis data

第三者が登録した MetaboBank のデータを再解析したデータは third-party reanalysis data として MetaboBank に登録することができます（元データを自身で再登録する必要はありません）。

**要件**:
- 参照している元データ（mzML 等の生データを含む）が MetaboBank 等の主要な公共データベースで公開されている必要がある
- 登録の目的は査読論文で再解析の内容、および、アクセッション番号を公表することである必要がある
- MetaboBank から公開するためには、再解析の内容についての**査読論文が公開されている**必要がある

Third-party reanalysis data の登録を希望する場合は[お問い合わせフォーム](https://forms.gle/zV4cYCnRCefd4FSz9)で「問い合わせ先：MetaboBank」を選択してお問い合わせください。

---

## 3. メタデータ（Metadata）

### 3-1. MAGE-TAB

**MicroArray Gene Expression Tabular (MAGE-TAB)** は機能ゲノミクスデータを構造化・標準化された方法で記述するために開発された形式で、ArrayExpress と GEA で使用されています。MAGE-TAB はプロテオミクス分野でも使われ始めており、**オミックス分野における国際標準**になりつつあります。

MAGE-TAB は研究全体を記述する **IDF**、および、サンプルとデータファイルの関係性を記述する **SDRF** から構成されています。IDF と SDRF はプロトコールで、メタデータとデータファイルは SDRF を介してリンクします。

### 3-2. メタデータエクセル（実験種別別）

実験種別に対応したメタデータエクセルをダウンロードし、内容を記入します。異なる種別のデータは Study を分けて登録します。

**Mass spectrometry, chromatography**:

| 種別 | ダウンロード |
|-----|------------|
| LC-MS（液体クロマトグラフィー-質量分析） | [MetaboBank_LC-MS_metadata.xlsx](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_LC-MS_metadata.xlsx) |
| LC-DAD-MS（液体クロマトグラフィー、ダイオードアレイ検出器-質量分析） | [MetaboBank_LC-DAD-MS_metadata.xlsx](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_LC-DAD-MS_metadata.xlsx) |
| GC-MS（ガスクロマトグラフィー-質量分析） | [MetaboBank_GC-MS_metadata.xlsx](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_GC-MS_metadata.xlsx) |
| GCGC-MS（二次元ガスクロマトグラフィー-質量分析） | [MetaboBank_GCGC-MS_metadata.xlsx](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_GCGC-MS_metadata.xlsx) |
| GC-FID-MS（ガスクロマトグラフィー、水素炎イオン化検出器-質量分析） | [MetaboBank_GC-FID-MS_metadata.xlsx](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_GC-FID-MS_metadata.xlsx) |
| CE-MS（キャピラリ電気泳動-質量分析） | [MetaboBank_CE-MS_metadata.xlsx](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_CE-MS_metadata.xlsx) |

**Mass spectrometry, direct injection**:

| 種別 | ダウンロード |
|-----|------------|
| DI-MS（直接注入-質量分析） | [MetaboBank_DI-MS_metadata.xlsx](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_DI-MS_metadata.xlsx) |
| FIA-MS（フローインジェクション分析-質量分析） | [MetaboBank_FIA-MS_metadata.xlsx](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_FIA-MS_metadata.xlsx) |
| MALDI-MS（マトリックス支援レーザー脱離イオン化質量分析） | [MetaboBank_MALDI-MS_metadata.xlsx](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_MALDI-MS_metadata.xlsx) |

**その他**:

| 種別 | ダウンロード |
|-----|------------|
| MSI（質量分析イメージング） | [MetaboBank_MSI_metadata.xlsx](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_MSI_metadata.xlsx) |
| NMR（核磁気共鳴分光法） | [MetaboBank_NMR_metadata.xlsx](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_NMR_metadata.xlsx) |

### 3-3. IDF の項目

IDF (Investigation Description Format) は研究概要、実験デザイン、プロトコール、文献情報や登録者情報といった研究全体を記述するファイルです。

[IDF の例（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/1PziXaK3Cic1xQXdcCgBZ1g-4LIKvZRZt71nYCH5e22k/edit#gid=30173120)

| IDF 項目 | 説明 | 備考 |
|---------|------|------|
| MAGE-TAB Version | MAGE-TAB バージョン（1.1 で固定） | MetaboBank で記入 |
| Comment[MetaboBank accession] | MetaboBank アクセッション番号（例 MTBKS1） | MetaboBank で記入 |
| Study Title | 研究全体のタイトル | — |
| Study Description | Study の概要説明（フリーテキスト）。ASCII、ギリシャ文字とシンボル [° μ ± ≠ ≒ < > ← ↑ ↓ → ↔ Å] 使用可 | — |
| Experimental Design | 実験デザイン（[controlled terms](https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY) から選択） | — |
| Experimental Factor Name | 研究で調べている変数（パラメータ）。実際の値は SDRF の "Factor Value[<factor name>]" に記載 | — |
| Experimental Factor Type | Experimental factor のタイプ | MetaboBank で記入 |
| Person Last Name | 登録者の last name（**公開される**）。貢献者は Comment[Contributor] に記載可 | — |
| Person First Name | 登録者の first name | — |
| Person Mid Initials | 登録者の middle name | — |
| Person Email | 登録者のメールアドレス（**公開されない**） | — |
| Person Affiliation | 登録者の所属組織 | — |
| Person Roles | 登録者の役割（MetaboBank では "submitter" のみ） | MetaboBank で記入 |
| PubMed ID | 関係する文献の PubMed ID（複数可） | — |
| Publication DOI | 関係する文献の DOI（複数可）。PubMed ID と DOI の両方がある場合は PubMed ID を記入 | — |
| Public Release Date | 初回公開日 | MetaboBank で記入 |
| Term Source Name | IDF と SDRF で使っている用語のソース（オントロジーやデータベース） | — |
| Term Source File | Term Source を示すファイル名や URL | — |
| Term Source Version | Term Source のバージョン | — |
| SDRF File | IDF ファイルに付随する SDRF ファイル名 | MetaboBank で記入 |
| Comment[Study type] | Study type（例 targeted metabolite profiling、lipid profiling）。[controlled terms](https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY) から選択 | — |
| Comment[Experiment type] | Experiment type（例 liquid chromatography-mass spectrometry）。[controlled terms](https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY) から選択（複数可）。Submission type に対応する規定値を MetaboBank で追加 | — |
| Comment[Submission type] | 登録種別（例 LC-MS、GC-MS）。[controlled terms](https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY) を使用 | MetaboBank で記入 |
| Comment[BioProject] | 関連する BioProject アクセッション番号（例 PRJDB1） | — |
| Comment[Related study] | 関連する MetaboBank（MB）もしくは他のデータベースのアクセッション番号。"DB:ID" 形式でタブ区切り。例 `MB:MTBKS202<tab>MB:MTBKS203<tab>Metabolonote:SE112` | — |
| Comment[Contributor] | 貢献者の名前（テクニカルスタッフ等。登録権限は持たない）。例 `Mishima Naoko, Fuji San, Shizuoka Ken` | — |
| Comment[Submission Date] | 登録日 | MetaboBank で記入 |
| Comment[Last Update Date] | 最終更新日 | MetaboBank で記入 |

### 3-4. IDF Protocols

プロトコールは再現性を確保するために重要であり、研究で実施した手順の詳細を提供する必要があります。

**Protocol Name**: プロトコールの名前。種別毎に一つのプロトコールしかない場合、type をそのまま name に使います。種別毎に複数のプロトコールがある場合は name に 1、2、… を付けて区別します（例 Data transformation 1、Data transformation 2）。

**Protocol Type（Submission type 毎の必要プロトコール）**:

| Protocol type | 説明 | 対応する Submission type |
|--------------|------|------------------------|
| Sample collection | サンプルの由来、加えた処理、日時、採取と保存方法を記載 | All types |
| Extraction | サンプルの抽出や調整方法。コントロール群サンプル、プールしたサンプル、standard、quality control や solvent blank も含める | MSI 以外 |
| Chromatography | 製造元、移動相、濃度勾配、設定や温度、フローレートや注入量などの機器とカラムの詳細 | LC-MS, LC-DAD-MS, GC-MS, GCGC-MS, GC-FID-MS |
| Mass spectrometry | 製造元、イオン源、イオンモード（positive/negative）、m/z レンジ、温度、電圧、フローレート、スキャンレートなどの機器の詳細 | NMR 以外 |
| Data processing | 生データの解析方法やソフトウェア | All types |
| Metabolite identification | 代謝物の同定やアノテーションに使用した手法、参照データベースやソフトウェアの詳細 | All types |
| Capillary Electrophoresis | 製造元、移動相、濃度勾配や設定などの機器とカラムの詳細 | CE-MS |
| Direct infusion | direct infusion の手法の詳細 | DI-MS |
| Flow injection analysis | flow injection analysis 手法の詳細 | FIA-MS |
| Preparation | サンプルマウント、保存、tissue modification、sectioning やマトリックスなどのサンプル調整の詳細 | MSI |
| Histology | 染色などの組織学的な詳細 | MSI |
| NMR sample | チューブタイプ、溶媒、サンプル pH や温度などの NMR サンプルの詳細 | NMR |
| NMR spectroscopy | プローブや磁場強度などの NMR 機器の詳細 | NMR |
| NMR assay | NMR 測定に関する詳細 | NMR |

**Protocol Description**: プロトコールのフリーテキストでの記載（タブで区切られた一つのフィールドに記載。ASCII、ギリシャ文字とシンボル [° μ ± ≠ ≒ < > ← ↑ ↓ → ↔ Å] 使用可）。

**Protocol Parameters**: セミコロンで区切ったプロトコールパラメータ名のリスト（詳細は [SDRF Protocol Parameters](#3-7-sdrf-protocol-parameters) を参照）。

**Protocol Hardware**: プロトコールでサンプル捕捉に使用した機器（複数の場合はセミコロン `;` で区切って列挙）。

**Protocol Software**: プロトコールで使用したソフトウェア。

### 3-5. SDRF の構造

SDRF (Sample and Data Relationship Format) はサンプル属性およびサンプル、測定機器、データファイル間の関係性を記述するファイルです。SDRF はオミックス実験の自然な流れを再現した表であり、大元のサンプルから始まり、間にプロトコールを挟みながら最後はサンプルから得られたデータファイルで終わります。

[SDRF の例（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/1PziXaK3Cic1xQXdcCgBZ1g-4LIKvZRZt71nYCH5e22k/edit#gid=513795053)

### 3-6. SDRF カラム

| カラム | 説明 |
|--------|------|
| **Source Name** | サンプルソースのユニークな ID。基本的に BioSample の sample name を使う |
| **Characteristics** | サンプル属性。BioSample 属性（例 organism や strain）を使う。sample_title、description と BioSample アクセッション番号は Source Name の Comment カラムに記載。bioproject_id や locus_tag_prefix といったデータ管理用の属性は SDRF から除外 |
| **Protocol REF** | IDF で定義したプロトコールを protocol name で参照するカラム。Protocol name は全ての行に記載されている必要がある |
| **Sample Name** | サンプルのユニークな ID（基本的に BioSample の sample name） |
| **Extract Name** | 抽出したマテリアルのユニークな ID |
| **Labeled Extract Name** | 同位体で標識した抽出物の ID。標識していないサンプルでは任意。値が無い場合は空欄 |
| **Label** | 測定機器で検出できるように安定同位体などで試料を標識した場合、標識化合物を記入。値が無い場合は空欄 |
| **Assay Name** | アッセイに対するユニークな ID。テクニカルレプリケートは同じ sample name、technical replicate Comment を持った異なる assay name の行として表現 |
| **Comment[technical_replicate]** | 1、2、3 などのテクニカルレプリケートを区別する値を記載 |
| **Raw Data File** | 生データファイルを記載するカラム。オープンソース形式のファイル（例 mzML や nmrML）に変換されている場合、それらのファイルもこのカラムに記載。ファイルの指定方法は複数あり（下記参照） |
| **Comment[Raw Data File md5]** | 生データファイルの MD5 ハッシュ値を記入 |
| **Processed Data File** | 解析済みデータファイルを記載。ファイルの指定方法は複数あり（下記参照） |
| **Comment[Processed Data File md5]** | 解析済みデータファイルの MD5 ハッシュ値を記入 |
| **Metabolite Assignment File** | 研究で解析した代謝物に関する情報を記載した TSV ファイル（データベースのアクセッション番号、代謝物のスペクトル、サンプル中の濃度など） |
| **Comment[Metabolite Assignment File md5]** | MAF の MD5 ハッシュ値を記入 |
| **Comment[maf_value_unit]** | MAF 中の値の単位（例 peak area や pico mole） |
| **Factor Value[]** | 研究で調べている変数（パラメータ）。単位を示す "Unit" カラムと共に記載（例 `Factor Value[temperature]`） |
| **Unit[<unit category>]** | 前にあるカラムに記載された値の単位を示すカラム（Characteristics、Factor Value や Parameter Value に続けて使用。例 `Unit[temperature]`） |
| **Image Data File** | イメージング実験で得られたデータファイル。オープンソース形式の imzML と ibd ファイルの登録を推奨。組織切片の画像ファイル（png、jpg）も登録 |
| **Comment[Image Data File md5]** | image data file の MD5 ハッシュ値を記入 |
| **Acquisition Parameter Data File** | acquisition parameter data を含むファイル（Bruker では 'acqus.txt'。例 acqus1.txt） |
| **Comment[Acquisition Parameter Data File md5]** | acquisition parameter data file の MD5 ハッシュ値を記入 |
| **Free Induction Decay Data File** | free induction decay data file を記載 |
| **Comment[Free Induction Decay Data File md5]** | free induction decay data file の MD5 ハッシュ値を記入 |

**ファイルの指定方法（Raw Data File / Processed Data File）**:

| 方法 | 例 |
|------|---|
| 各サンプルのファイル名を一つのカラムに記入 | `sample1.RAW.gz` |
| tar/zip アーカイブしたファイル名を記入 | `sample1.RAW.tar.gz` |
| サンプルのファイルを含むサブディレクトリ名を記入 | `sample1/` |
| 一サンプルに対応する複数のファイルを複数のカラムに記入 | `sample1.RAW.gz` + `sample1.mzML` |

### 3-7. SDRF Protocol Parameters

IDF で記載されたプロトコールを補完するプロトコールパラメータ。必須・推奨パラメータは Submission と Protocol type によって異なります。

**主要なプロトコールパラメータ（抜粋）**:

| Parameter | Submission type | Protocol type | 説明 |
|-----------|---------------|--------------|------|
| Post extraction | MSI・NMR 以外 | Extraction | サンプルが測定機器に注入される前の溶媒抽出方法（例 400 µL water） |
| Derivatization | MSI・NMR 以外 | Extraction | 注入前の化学修飾（例 sylilation） |
| Chromatography instrument | LC-MS, LC-DAD-MS, GC-MS, GCGC-MS, GC-FID-MS | Chromatography | クロマトグラフィー機器名・製造元・モデル番号（例 Shimadzu Nexera UHPLC system） |
| Autosampler model | LC-MS, LC-DAD-MS, GC-MS, GCGC-MS, GC-FID-MS, CE-MS | Chromatography/CE | オートサンプラーの製造元とモデル番号 |
| Column model | LC-MS, LC-DAD-MS, GC-MS, GC-FID-MS | Chromatography | カラムの製造元、モデル番号や寸法（例 HSS T3 C18 (1.8 μm, 1.0 x 100 mm; Waters)） |
| Column type | LC-MS, LC-DAD-MS, GC-MS, GC-FID-MS | Chromatography | カラムの種類やフェーズ（例 reverse phase） |
| Guard column | LC-MS, LC-DAD-MS, GC-MS, GCGC-MS, GC-FID-MS | Chromatography | ガードカラムの種類 |
| Column model 1/2 | GCGC-MS | Chromatography | GCGC の一・二次元目カラムのモデル |
| Column type 1/2 | GCGC-MS | Chromatography | GCGC の一・二次元目カラムの種類 |
| Detector | LC-DAD-MS, GC-FID-MS | Chromatography | 検出器の種類・名前・製造元 |
| Signal range | LC-DAD-MS | Chromatography | 検出器の検出波長の範囲（例 200 to 650 nm） |
| Resolution | LC-DAD-MS | Chromatography | 検出器の分解能（例 2 nm） |
| Temperature | LC-MS, LC-DAD-MS, GC-MS, GC-FID-MS | Chromatography | カラムの温度 |
| Scan polarity | All MS types | Mass spectrometry | acquisition mode（negative / positive / alternating） |
| Scan m/z range | All MS types | Mass spectrometry | 実験の m/z レンジ（例 100-1000） |
| Instrument | All MS types | Mass spectrometry | 分光器/検出器の製造元・モデル番号（例 Bruker micrOTOF-Q II） |
| Ion source | All MS types | Mass spectrometry | 機器のイオン源（例 ESI） |
| Mass analyzer | All MS types | Mass spectrometry | マスフラグメントの解析器/検出器（例 Triple quadrupole） |
| CE instrument | CE-MS | Capillary Electrophoresis | キャピラリ電気泳動機器の名前・製造元・モデル |
| DI instrument | DI-MS | Direct infusion | direct infusion 機器の名前 |
| FIA instrument | FIA-MS | Flow injection analysis | flow injection analysis 機器の名前 |
| Instrument manufacturer | MSI | Mass spectrometry | MSI 機器の製造元 |
| Spatial resolution | MSI | Mass spectrometry | 空間分解能（例 10 micrometer） |
| Pixel size x/y | MSI | Mass spectrometry | X/Y 軸のピクセルサイズ |
| Sample mounting | MSI | Preparation | サンプルの取り付け方法 |
| Sample preservation | MSI | Preparation | サンプルの保護方法（例 Freezing） |
| Sectioning instrument | MSI | Preparation | 切片作成装置の名前・製造元 |
| Section thickness | MSI | Preparation | 切片の厚さ |
| Matrix | MSI | Preparation | マトリクス化合物の種類・名前 |
| Matrix application | MSI | Preparation | マトリクス化合物の塗布方法 |
| Stain | MSI | Histology | 染色方法 |
| Data processing software | MSI | Data processing | データ解析ソフトウェアの名前 |
| Data processing software version | MSI | Data processing | データ解析ソフトウェアのバージョン |
| Extraction method | NMR | Extraction | 出発材料からサンプルを抽出した方法（例 Methanol） |
| NMR tube type | NMR | NMR sample | チューブのサイズと種類（例 standard 5 mm glass NMR tube） |
| Solvent | NMR | NMR sample | NMR サンプル調整に使用した溶媒（例 D2O） |
| Sample pH | NMR | NMR sample | サンプル pH 値（例 7） |
| Temperature | NMR | NMR sample | サンプルの温度（単位は Unit カラムに記載） |
| Instrument | NMR | NMR spectroscopy | NMR 機器の名前・モデル番号と共鳴周波数（例 Varian Unity Inova 500 MHz spectrometer） |
| NMR probe | NMR | NMR spectroscopy | NMR プローブの名前と種類（例 5 mm CPTCI 1H-13C/15N/D Z-GRD）。Bruker 生データファイルの 'acqus.txt' 中の `$PROBHD=` に記載 |
| Number of transients | NMR | NMR spectroscopy | 得られたスキャンの数（例 128）。Bruker の 'acqus.txt' 中の `$NS=` に記載 |
| Pulse sequence name | NMR | NMR spectroscopy | パルスシークエンスプログラムの名前と短い説明（例 1D 1H with presaturation (presat)）。Bruker の 'acqus.txt' 中の `$PULPROG=` に記載 |
| Magnetic field strength | NMR | NMR spectroscopy | テスラ (T) で記載した磁場強度（例 11.7） |

---

## 4. データファイル（Data File）

### 4-1. ファイル命名規則

- ファイル名は英数字 `[A-Z,a-z,0-9]`、アンダースコア `[_]`、ハイフン `[-]` とドット `[.]` のみから構成される（空白文字、カッコ、句読点やシンボルを含まないこと）
- **Study 単位でユニークなファイル名**にすること
- Study やサンプル単位で **tar や zip でアーカイブしたファイル**での登録を受け付ける
- **サブディレクトリを含めることができる**
- 測定機器から出力される生データファイルにはユーザのローカルファイルパスが記録されていることがある。**パスに個人情報が含まれないようにすること**

### 4-2. Mass spectrometry (MS)

#### 生データファイル

- 測定機器から出力された生データファイル
- **mzML 等のオープンスタンダード形式のデータは生データとして扱う**
- SDRF の `Raw Data File` カラムに各サンプルに対応した生データファイル名を記載する
- サンプル（SDRF の一行）に対応する複数のファイルは tar や zip で一つのファイルにまとめる
- 測定機器から出力される生データファイルにはユーザのローカルファイルパスが記録されていることがある。**パスに個人情報が含まれないようにすること**

#### 解析済みデータファイル

- 関連論文における主張の直接的な根拠となる解析済みデータやサマリーデータ
- SDRF の `Processed Data File` カラムに各サンプルに対応した解析済みデータファイル名を記載する
- サンプルに対応する複数のファイルは tar や zip で一つのファイルにまとめる

#### Metabolite assignment file (MS 用)

同定・推定した化合物に関する情報は所定のファイル形式 MAF として登録します。

- MS 用 MAF エクセル: [MetaboBank_maf_MS.xlsx](https://github.com/ddbj/pub/raw/master/docs/metabobank/maf_excel/MetaboBank_maf_MS.xlsx)

#### 画像ファイル（MS イメージング）

MS イメージング実験では画像ファイルも登録します。SDRF の `Image Data File` カラムに各サンプルに対応した画像データファイル名を記載します。できるだけイメージングの設定に関するファイルを含めてください。

### 4-3. NMR

#### 生データファイル

- 測定機器から出力された生データファイル
- **nmrML 等のオープンスタンダード形式のデータファイルは生データとして扱う**
- SDRF の `Raw Data File` カラムに各サンプルに対応した生データファイル名を記載する
- サンプルに対応する複数のファイルは tar や zip で一つのファイルにまとめる
- できるだけ **NMR の設定に関するファイル**を含めてください

#### 解析済みデータファイル / Metabolite assignment file（NMR 用）

同定・推定した化合物に関する情報は所定のファイル形式 MAF として登録します。

- NMR 用 MAF エクセル: [MetaboBank_maf_NMR.xlsx](https://github.com/ddbj/pub/raw/master/docs/metabobank/maf_excel/MetaboBank_maf_NMR.xlsx)

### 4-4. Metabolite Assignment File (MAF) の記載項目

研究で同定または推定された全ての既知または未知の代謝物および feature を含めることを推奨します。データの再利用性を高めるためにできるだけ多くの情報を記入してください。試料ごとの各代謝物の測定値を記載する場合は、表の右側に試料名の列を追加して記載してください。

| カラム | 説明 | 例 | Technology type |
|--------|------|---|----------------|
| database_identifier | 代謝物データベースでの ID（ChEBI の ID を推奨） | CHEBI:16919 | MS、NMR |
| chemical_formula | 代謝物の組成式 | C4H9N3O2 | MS、NMR |
| smiles | 代謝物の SMILES | CN(CC(O)=O)C(N)=N | MS、NMR |
| inchi | 代謝物の INCHI key | InChI=1S/C4H9N3O2/... | MS、NMR |
| metabolite_identification | 同定または推定された代謝物名 | creatine | MS、NMR |
| metabolite_class | 代謝物分類名 | flavonoids | MS、NMR |
| mass_to_charge | 質量電荷比（m/z） | 132.0765 | MS、NMR |
| fragmentation | フラグメントイオン | 132,0870 l 90,0617 l 87,0618 | MS |
| modifications | 分子イオンまたは付加イオン | [M+H]+ | MS |
| charge | 電荷 | 1 | MS |
| retention_time | 溶出時間 | 0.85 | MS |
| chemical_shift | ピークの化学シフト | — | NMR |
| multiplicity | ピークの多重度 | — | NMR |
| taxid | 代謝物が検出された生物の NCBI taxonomy ID | 9606 | MS、NMR |
| species | NCBI taxonomy での生物名（学名） | Homo sapiens | MS、NMR |
| database | 代謝物の同定に用いたデータベース名 | CHEBI | MS、NMR |
| database_version | データベースのバージョン | — | MS、NMR |
| reliability | 代謝物予測結果の信頼性（MSI レベルを使用。[MSI-CIMR](https://github.com/MSI-Metabolomics-Standards-Initiative/CIMR) を参照） | MSI:1 | MS、NMR |
| search_engine | 代謝物同定または推定に用いたプログラム名 | — | MS、NMR |
| search_engine_score | プログラムでのスコア | — | MS、NMR |
| peak_identifier | ピークの ID | — | MS、NMR |

---

## 5. Validation Rules

MetaboBank の validation rule と controlled vocabulary (CV):

- [MetaboBank validation rules 表（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY/edit#gid=1327621011)

Controlled terms の確認（Experimental Design、Study type、Experiment type、Submission type 等）: 上記スプレッドシートを参照してください。

---

## 6. mzB フォーマット（Other > mzB format）

### 概要

mzB フォーマットは Reifycs 社の提唱する Hive 形式に準拠した**質量分析データの共通フォーマット**の一つです。MetaboBank は、ファイルサイズを小さくし、専用の API により高速にデータ処理ができるようにするために、様々なベンダーの質量分析の生データファイルを mzB フォーマットでも提供しています。

**対応している入力フォーマット**:
Thermo RAW、Waters RAW、Shimadzu LCD、Shimadzu QGD、Agilent D、Bruker D、Sciex WIFF、Reifycs ABF、cdf、mzML、mzXML

**データサイズ削減効果**（2024年8月時点）:

| 対象 | 元サイズ | mzB サイズ | 削減率 |
|-----|---------|-----------|--------|
| 全生データ（135 study） | 1,240 GB | 217 GB | **17.5%** |
| イメージング MS 生データ（1 study） | 95 GB | 4 GB | **4.3%** |

### ツール

| ツール | 説明 | URL |
|--------|------|-----|
| Data Checker | mzB フォーマットファイルを閲覧するための無料プログラム。**現在 Microsoft Windows 版のみ** | https://www.reifycs.com/products/hive/baseapp-dl |
| Hive SDK | mzB フォーマットファイルに関するソフトウェアや API を開発するための無料開発環境 | https://ja.reifycs.com/products/hive/ |
| hivetoolkit | Hive SDK を利用した Jupyter Notebook プログラム。mzB ファイルのクロマトグラムやマススペクトルを描画してピークの比較を行うことができる | https://github.com/ddbj/hivetoolkit |

---

## 7. FAQ — MetaboBank 関連

### Q. MetaboBank への登録申し込みはどこから行いますか？

[MetaboBank 登録申し込みフォーム](https://docs.google.com/forms/d/1yrBo95x5leK9aEZImzT6Y5iVyzgwELCgFZtTU9paguU)から申し込みます。担当者が個別に登録方法をご案内します。

---

### Q. データ公開の依頼方法は？

[データ公開の依頼方法](https://www.ddbj.nig.ac.jp/faq/ja/request-release.html)を参照してください。

---

### Q. BioProject/BioSample/実験データの連動公開の仕組みは？

| トリガー（公開されたデータ） | 連動公開される対象 |
|----------------------------|--------------------|
| BioProject の公開 | 引き起こさない |
| BioSample の公開 | `derived_from` 属性で引用されている BioSample |
| DDBJ、DRA、GEA、**MetaboBank** の公開 | リンクしている BioProject と BioSample |
| MetaboBank の公開 | — |
| DRA の公開 | DDBJ の連動公開を引き起こさない |

（参照: https://www.ddbj.nig.ac.jp/faq/ja/bp-bs-seq-release.html）

---

### Q. 非生物サンプルの生物名には何を選べばよいですか？

[FAQ: 非生物サンプルの生物名には何を選べばよいでしょうか？](https://www.ddbj.nig.ac.jp/faq/ja/organism-for-material.html) を参照してください。主な選択肢:
- ブランク: [blank sample](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=2582415)
- 食品: [food metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=870726)

---

### Q. サンプルを安定同位体で標識した場合の記載方法は？

[FAQ: サンプルを安定同位体で標識した場合の記載方法は？](https://www.ddbj.nig.ac.jp/faq/ja/isotope-labeling.html)を参照してください。SDRF の `Labeled Extract Name` と `Label` カラムを使用します。

---

### Q. MetaboBank のデータを更新・削除するには？

[MetaboBank チームに連絡（フォーム）](https://forms.gle/Ko5NsS2TgnLu38vC6)してください。

---

### Q. MetaboLights とのデータ交換は行われていますか？

現在、公開 MetaboBank データは EBI MetaboLights とは**データを交換していません**（MetaboLights とはデータの標準化において協力はしています）。

---

## 8. リンク集

| ページ | URL |
|--------|-----|
| MetaboBank ホーム | https://www.ddbj.nig.ac.jp/metabobank/index.html |
| MetaboBank への登録（Submission） | https://www.ddbj.nig.ac.jp/metabobank/submission.html |
| メタデータ（Metadata） | https://www.ddbj.nig.ac.jp/metabobank/metadata.html |
| データファイル（Data File） | https://www.ddbj.nig.ac.jp/metabobank/datafile.html |
| Validation Rules | https://www.ddbj.nig.ac.jp/metabobank/validation.html |
| Validation rules 表（Google スプレッドシート） | https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY/ |
| Example（Google スプレッドシート） | https://docs.google.com/spreadsheets/d/1PziXaK3Cic1xQXdcCgBZ1g-4LIKvZRZt71nYCH5e22k |
| mzB format | https://www.ddbj.nig.ac.jp/metabobank/mzB.html |
| History | https://www.ddbj.nig.ac.jp/metabobank/history.html |
| Other（Resource） | https://www.ddbj.nig.ac.jp/metabobank/resource.html |
| Third-party reanalysis data | https://www.ddbj.nig.ac.jp/metabobank/third-party-reanalysis.html |
| 検索 | https://mb2.ddbj.nig.ac.jp/search/ |
| ダウンロード | https://ddbj.nig.ac.jp/public/metabobank/study/ |
| FAQ（MetaboBank タグ） | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=metabobank |
| FAQ: データ公開の依頼 | https://www.ddbj.nig.ac.jp/faq/ja/request-release.html |
| FAQ: 連動公開の仕組み | https://www.ddbj.nig.ac.jp/faq/ja/bp-bs-seq-release.html |
| FAQ: 非生物サンプルの生物名 | https://www.ddbj.nig.ac.jp/faq/ja/organism-for-material.html |
| FAQ: 安定同位体標識の記載方法 | https://www.ddbj.nig.ac.jp/faq/ja/isotope-labeling.html |
| 登録申し込みフォーム | https://docs.google.com/forms/d/1yrBo95x5leK9aEZImzT6Y5iVyzgwELCgFZtTU9paguU |
| 申し込みファイル（メール用） | https://www.ddbj.nig.ac.jp/assets/files/text/mb-form.txt |
| 更新依頼フォーム | https://forms.gle/Ko5NsS2TgnLu38vC6 |
| MetaboBank チームへの連絡 | https://www.ddbj.nig.ac.jp/contact-ddbj.html |
| お問い合わせフォーム（third-party reanalysis 用） | https://forms.gle/zV4cYCnRCefd4FSz9 |
| DDBJ アカウント取得 | https://www.ddbj.nig.ac.jp/ddbj-account.html |
| 公開鍵の登録 | https://www.ddbj.nig.ac.jp/account.html#public-key |
| データのアップロード | https://www.ddbj.nig.ac.jp/upload.html |
| MD5 チェックサム値の取得 | https://www.ddbj.nig.ac.jp/checksum.html |
| BioProject 登録 | https://www.ddbj.nig.ac.jp/bioproject/submission.html |
| BioSample 登録 | https://www.ddbj.nig.ac.jp/biosample/submission.html |
| BioSample Omics パッケージ | https://www.ddbj.nig.ac.jp/biosample/submission.html#Sample-type |
| BioSample サンプルの粒度 | https://www.ddbj.nig.ac.jp/biosample/overview.html |
| メタデータエクセル（LC-MS） | https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_LC-MS_metadata.xlsx |
| メタデータエクセル（GC-MS） | https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_GC-MS_metadata.xlsx |
| メタデータエクセル（CE-MS） | https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_CE-MS_metadata.xlsx |
| メタデータエクセル（NMR） | https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_NMR_metadata.xlsx |
| メタデータエクセル（MSI） | https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_MSI_metadata.xlsx |
| MS 用 MAF エクセル | https://github.com/ddbj/pub/raw/master/docs/metabobank/maf_excel/MetaboBank_maf_MS.xlsx |
| NMR 用 MAF エクセル | https://github.com/ddbj/pub/raw/master/docs/metabobank/maf_excel/MetaboBank_maf_NMR.xlsx |
| Data Checker（mzB ビューア） | https://www.reifycs.com/products/hive/baseapp-dl |
| Hive SDK | https://ja.reifycs.com/products/hive/ |
| hivetoolkit（GitHub） | https://github.com/ddbj/hivetoolkit |
| EBI MetaboLights | https://www.ebi.ac.uk/metabolights/ |
| MAGE-TAB 仕様書 | https://www.ddbj.nig.ac.jp/assets/files/magetab/MAGE-TABv1.1.pdf |
| MSI-CIMR（信頼性レベル） | https://github.com/MSI-Metabolomics-Standards-Initiative/CIMR |
| imzML | https://ms-imaging.org/imzml/ |
