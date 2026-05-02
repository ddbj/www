# DDBJ Genomic Expression Archive (GEA) — 完全ガイド

> 出典: https://www.ddbj.nig.ac.jp/gea/  
> 取得日: 2026年5月

---

## 目次

1. [GEA とは（Home）](#1-gea-とはhome)
2. [登録概要（Submission Overview）](#2-登録概要submission-overview)
3. [マイクロアレイデータの登録（Submit microarray experiment）](#3-マイクロアレイデータの登録)
4. [シークエンスデータの登録（Submit sequencing experiment）](#4-シークエンスデータの登録)
5. [メタデータ（Metadata: MAGE-TAB / IDF / SDRF）](#5-メタデータmetadata-mage-tab--idf--sdrf)
6. [データファイルの登録形式（Data File）](#6-データファイルの登録形式data-file)
7. [Validation](#7-validation)
8. [Reviewer Access](#8-reviewer-access)
9. [Array Design (ADF)](#9-array-design-adf)
10. [Data Matrix](#10-data-matrix)
11. [FAQ — GEA 関連](#11-faq--gea-関連)

---

## 1. GEA とは（Home）

**Genomic Expression Archive (GEA)** は遺伝子発現、エピジェネティクスやジェノタイピング SNP アレイ等の**機能ゲノミクスデータのための公的データベース**です。

マイクロアレイとシークエンスによるデータをそれぞれ [MIAME](http://fged.org/projects/miame/) と [MINSEQE](http://fged.org/projects/minseqe/) ガイドラインに従い [MAGE-TAB](https://www.ebi.ac.uk/arrayexpress/help/magetab_spec.html) 形式で受け付けています。

**主なリンク**

| 目的 | URL |
|------|-----|
| 登録概要 | https://www.ddbj.nig.ac.jp/gea/overview.html |
| ログインして登録（D-way） | https://ddbj.nig.ac.jp/D-way/ |
| ダウンロード | https://ddbj.nig.ac.jp/public/ddbj_database/gea/ |
| FAQ（GEA タグ） | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=gea |

---

## 2. 登録概要（Submission Overview）

### 2-1. ヒトを対象とした研究データの登録について

研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、**登録者の責任において**保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。

登録前に必ず[「ヒトを対象とした研究データの登録について」](https://www.ddbj.nig.ac.jp/policies.html#submission-of-human-data)を熟読してください。

### 2-2. GEA が受け付けるデータと受け付けないデータ

| GEA が受け付けているデータ | GEA が受け付けていないデータ |
|--------------------------|--------------------------|
| 定量的な遺伝子発現、遺伝子発現制御、エピジェネティクス解析や SNP genotyping 等の機能ゲノミクス研究から得られたデータ | アクセス制限が必要なヒトデータ → [JGA](https://www.ddbj.nig.ac.jp/jga/index.html) |
| mRNA プロファイリング、RNA-seq | アセンブルされた転写産物 → [DRA](https://www.ddbj.nig.ac.jp/dra/submission.html) と [DDBJ TSA](https://www.ddbj.nig.ac.jp/ddbj/tsa.html) |
| small RNA プロファイリング、miRNA-seq | 全ゲノムシークエンス → [DRA](https://www.ddbj.nig.ac.jp/dra/submission.html) と [DDBJ WGS](https://www.ddbj.nig.ac.jp/ddbj/wgs.html) |
| ChIP-Seq | メタゲノムシークエンス → [DRA](https://www.ddbj.nig.ac.jp/dra/submission.html) と [DDBJ ENV](https://www.ddbj.nig.ac.jp/ddbj/environmental.html) |
| HiC-seq | リシークエンス、塩基配列変異やコピー数変異 → [DRA](https://www.ddbj.nig.ac.jp/dra/submission.html)・ヒトデータは [TogoVar-repository](https://www.ddbj.nig.ac.jp/togovar/submission.html)・ヒト以外は [EBI Variation Archive](https://www.ebi.ac.uk/eva/) |
| methyl-seq、bisulfite-seq | Survey シークエンスやエキソームシークエンス → [DRA](https://www.ddbj.nig.ac.jp/dra/submission.html) |
| SNP マイクロアレイ genotyping | メタボロミクスデータ → [MetaboBank](https://www.ddbj.nig.ac.jp/metabobank/submission.html) |
| | プロテオミクスデータ → [jPOST](https://jpostdb.org/) |

データが GEA に登録可能かどうか不明な場合は[お問い合わせください](https://forms.gle/zV4cYCnRCefd4FSz9)。

### 2-3. 登録ファイルの概要

**マイクロアレイ実験**:
- IDF と SDRF メタデータ
- 生データ（必須）
- 解析済みデータ（必須）
- （必要に応じて）アレイデザインファイル

**シークエンシング実験**:
- IDF と SDRF メタデータ
- 生データ（先行して DRA に登録）
- 解析済みデータ（必須）

### 2-4. アクセッション番号

GEA の Experiment と Array design に対してアクセッション番号が発行されます（n は整数）:

| オブジェクト | プレフィックス | 例 |
|------------|-------------|---|
| Experiment | **E-GEAD-n** | E-GEAD-1 |
| Array design | **A-GEAD-n** | A-GEAD-1 |

### 2-5. データ公開

- 関連する論文が公表されるまでデータを非公開にすることができます
- **四年後まで**の公開予定日を設定し、随時延長することができます
- 登録されたデータは[データ公開原則](https://www.ddbj.nig.ac.jp/insdc/data-release-policy.html)に従って公開されます

関連FAQ: [データ公開の依頼方法は？](https://www.ddbj.nig.ac.jp/faq/ja/request-release.html)

### 2-6. Reviewer Access

データの登録後、査読者用のアクセストークンを発行することができます。詳しくは [Reviewer Access](#8-reviewer-access) を参照してください。

### 2-7. 更新

データの更新・削除は [GEA 更新依頼フォーム](https://forms.gle/PzTzxuYiMenc8CCR6)から GEA チームに依頼してください。

---

## 3. マイクロアレイデータの登録

### 3-1. 登録前のチェックリスト

**Two-color マイクロアレイ実験**:
- GEA は２つのサンプルが１つの生データファイルにリンクしている two-color のみをサポート
- IDF で dual-channel オプションが選択された場合、同時にハイブリダイズした２サンプルに由来する１つのデータファイルが提供されることを想定している
- いくつかの two-color マイクロアレイでは通常それぞれのチャンネルに対応した別々の生データファイルが生成される。このようなケースでそれぞれのサンプルに１つのファイルをリンクすると検証処理でエラーになる。各チャンネルに対応した別々のファイルを登録する場合は [GEA チームに連絡](https://www.ddbj.nig.ac.jp/contact-ddbj.html)すること

**複数技術の混在**:
- GEA ではマイクロアレイとシークエンシングを一つの Submission でまとめて登録できないため、Submission を分ける必要がある
- 一つの Submission で複数のアレイデザインを含めることは可能（その場合は [GEA チームに連絡](https://www.ddbj.nig.ac.jp/contact-ddbj.html)）

### 3-2. 登録ステータス

| ステータス | 説明 |
|-----------|------|
| New | メタデータの登録前 |
| Data Submitted | メタデータとデータファイルが登録された |
| Data Validating | データファイルの検証処理中 |
| Validation Error | データファイルの検証処理エラー |
| Data Validated | メタデータとデータファイルの検証処理が完了 |
| Curating | キュレータが登録を査定中 |
| Accession Issued | アクセッション番号が発行された |
| Private | 公開用ファイルの作成処理が完了し、非公開に保たれている状態 |
| Public | 公開されている状態 |

"Data Validated" と "Validation Error" になった登録が査定されます。

**1 submission で登録できる SDRF Assay 数の上限は 1,000**。超える場合は submission を分けてください。

### 3-3. 登録手順

1. [D-way](https://ddbj.nig.ac.jp/D-way/) にログインし、上部メニューから GEA 登録ページに移動する
2. "**Microarray**" を選択した状態で [New submission] を押下して microarray experiment submission を作成する（同時にファイルサーバ `ftp-private.ddbj.nig.ac.jp` に登録用ディレクトリが作成される）
3. **生データと解析済みファイルをアップロード**する（[データのアップロード](https://www.ddbj.nig.ac.jp/upload.html)を参照）

#### Submission タブ

- 四年以内の公開予定日を指定、もしくは、即日公開を選択する
- 登録者の名前と所属組織は公開されるが、**メールアドレスは公開されない**
- GEA 登録に関するメールは Submission に記載されたメールアドレスに送信される（DDBJ アカウントのメールアドレスを変更した場合は GEA Submission のアドレスも変更すること）

#### BioProject タブ

- 自身のアカウントで登録済みの BioProject を**一つ選択**する
- 未登録の場合は [BioProject 登録サイト](https://www.ddbj.nig.ac.jp/bioproject/submission.html)で登録する
- 他のアカウントで登録された BioProject を参照したい場合は[外部参照を申請](https://docs.google.com/forms/d/e/1FAIpQLSf1tMKEC_mhztGhtfKV0sLSGt1vY-I4Jb_RLQF64Li1d6_-Xg/viewform)する

#### BioSample タブ

- 自身のアカウントで登録済みの BioSample を選択する
- 未登録の場合は [BioSample 登録サイト](https://www.ddbj.nig.ac.jp/biosample/submission.html)で登録する
- 外部アカウントの BioSample を参照したい場合は[外部参照を申請](https://docs.google.com/forms/d/e/1FAIpQLSf1tMKEC_mhztGhtfKV0sLSGt1vY-I4Jb_RLQF64Li1d6_-Xg/viewform)する

#### IDF タブ

[IDF（Investigation Description Format）](https://www.ddbj.nig.ac.jp/gea/metadata.html#idf)の内容を入力します。[IDFの例](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=0)

- **Protocol**: チェック済みのプロトコールは必須
- **Publication**: 関連する文献を PubMed ID もしくは DOI で指定。未公表の文献については ID が発行された後に[お知らせください](https://www.ddbj.nig.ac.jp/contact-ddbj.html)
- **Array Design**: ArrayExpress/GEA にアレイデザインが登録されている場合は "A-XXXX-n" のアクセッション番号を記入。未登録の場合は GEA 登録用ディレクトリにアレイデザインファイルをアップロードして[新規アレイデザインを登録](https://www.ddbj.nig.ac.jp/gea/adf.html)する
- **Data File Type**: マイクロアレイ実験の場合は**生データと解析済みデータが必須**

#### SDRF タブ

[SDRF（Sample and Data Relationship Format）](https://www.ddbj.nig.ac.jp/gea/metadata.html#sdrf)テンプレートファイルをダウンロードして必要な情報を追加します。[SDRF の例](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=657626667)

**自動生成される内容**:
- 各 Name カラムと Source Name の Attribute カラム: 選択された BioSample の内容から自動生成
- SDRF 行: 1行1 BioSample で行が自動生成
- Protocol: IDF で作成されたプロトコールは SDRF の適切な個所にプロトコール ID（例 `ESUB000350_Protocol_1`）として挿入
- Technology Type: マイクロアレイ登録の場合は `"array assay"` が自動入力
- Array Design REF: IDF で指定されたアレイデザインアクセッション番号、もしくは、アレイデザインファイル名が自動入力

**追加入力が必要な項目**:

| 項目 | 説明 | 選択肢 |
|------|------|--------|
| Material Type | controlled term から一つ記入 | total RNA / polyA RNA / cytoplasmic RNA / nuclear RNA / genomic DNA / protein / other |
| Label | 抽出分子を標識したラベル化合物名 | biotin、Cy3、Cy5 など |
| Array Data File と Comment[Array Data File md5] | 生データファイルのファイル名と md5 チェックサム値の組 | — |
| Derived Array Data File と Comment[Derived Array Data File md5] | 解析済みデータファイルのファイル名と md5 チェックサム値の組 | — |
| Factor Value[enter experiment factor name here] | 実験で研究している「要因」（growth condition、genotype、organism part 等の変数） | — |

#### md5 チェックサム値

GEA では md5 チェックサム値をファイル破損検知に利用しています。データファイルが多い場合やコマンドライン操作に慣れている場合、SDRF に記入する代わりに `md5sum` コマンドの結果を `.md5` ファイル（例 `ESUB000001.md5`）としてデータファイルと一緒にアップロードする方法も便利です（SDRF と `.md5` ファイルの両方がある場合、`.md5` の値が優先）。

`.md5` ファイル形式例（チェックサム値とファイル名の間は半角スペース二個）:
```
ed3d9b2adb5b29aa476b9d4164e208d5  raw1.txt
3d77463ca6f43416a6c1925b7704d304  raw2.txt
0e5be28700daa6d61ea3351921d6e578  processed1.txt
351fb1324feebe954405ca610e46ae44  processed2.txt
3d5749b63617da9002c7376deee8e0a3  array-design.txt
```

#### Overview と登録

最後の Overview タブで IDF と SDRF ファイルをダウンロードして内容をチェックします。[Submit] を押下して IDF と SDRF を登録します。

#### 検証処理

- IDF と SDRF に記載されているデータファイルが登録用ディレクトリにアップロードされていない場合、"Data file is not uploaded" エラーで登録処理が中断される
- Validator は [validation rule](https://www.ddbj.nig.ac.jp/gea/validation.html) に従ってメタデータをチェックしエラーとワーニングメッセージを表示する
- **エラーを解消しないとメタデータを登録できない**

---

## 4. シークエンスデータの登録

### 4-1. 登録前のチェックリスト

**Single-cell シークエンシング実験**: [Single-cell submission guide](https://www.ddbj.nig.ac.jp/gea/single-cell.html) を参照。spike-in やデータ解析に必要な追加ファイルを登録する場合は [GEA チームに連絡](https://www.ddbj.nig.ac.jp/contact-ddbj.html)すること。

**複数技術の混在**: マイクロアレイと同様、Submission を分ける必要がある。

### 4-2. 登録ステータス

マイクロアレイと同一（[3-2 参照](#3-2-登録ステータス)）。

**1 submission で登録できる SDRF Assay 数の上限は 1,000**。超える場合は submission を分けてください。

### 4-3. 登録手順

1. [D-way](https://ddbj.nig.ac.jp/D-way/) にログインし、上部メニューから GEA 登録ページに移動する
2. "**Sequencing**" を選択した状態で [New submission] を押下して sequencing experiment submission を作成する
3. **解析済みファイルをアップロード**する（生データは先行して DRA に登録する）

#### Submission タブ

マイクロアレイと同一。

#### DRA タブ（シークエンシング登録固有）

- 自身のアカウントで登録した **DRA submission を一つ選択**する
- DRA が未登録の場合は [DRA 登録サイト](https://www.ddbj.nig.ac.jp/dra/submission.html)で登録する
- 他のアカウントの DRA を参照したい場合は[外部参照を申請](https://docs.google.com/forms/d/e/1FAIpQLSf1tMKEC_mhztGhtfKV0sLSGt1vY-I4Jb_RLQF64Li1d6_-Xg/viewform)する

#### BioProject タブ

- GEA と DRA submission が**同じプロジェクト**の場合: DRA submission で使用した BioProject を一つ選択する
- GEA と DRA submission が**異なるプロジェクト**の場合: DRA submission で使用した BioProject **以外**の BioProject を一つ選択する

#### IDF タブ

- **Protocol**: チェック済みのプロトコールは必須
- **Publication**: 同上
- **Data File Type**: シークエンシング実験の場合は**解析済みデータが必須**

#### SDRF タブ

**自動生成される内容**:
- 各 Name カラムと Source Name の Attribute カラム: BioSample の内容から自動生成
- SDRF 行: 1行1 BioSample
- Protocol: IDF で作成されたプロトコールが SDRF の適切な個所に挿入
- Technology Type: `"sequencing assay"` が自動入力
- Extract と Assay Name の SRA Experiment と Run Comment: DRA Experiment と Run の内容から自動生成

**追加入力が必要な項目**:

| 項目 | 説明 |
|------|------|
| Material Type | controlled term から一つ記入（total RNA / polyA RNA / cytoplasmic RNA / nuclear RNA / genomic DNA / protein / other） |
| Derived Array Data File と Comment[Derived Array Data File md5] | 解析済みデータファイルのファイル名と md5 チェックサム値の組 |
| Factor Value[enter experiment factor name here] | 実験で研究している変数 |

---

## 5. メタデータ（Metadata: MAGE-TAB / IDF / SDRF）

### 5-1. MAGE-TAB

**MicroArray Gene Expression Tabular (MAGE-TAB)** は機能ゲノミクスデータを構造化・標準化された方法で記載するためのコミュニティで開発された形式です。[MAGE-TAB 仕様書](https://www.ddbj.nig.ac.jp/assets/files/magetab/MAGE-TABv1.1.pdf)

MAGE-TAB は IDF（Investigation Description Format）、SDRF（Sample and Data Relationship Format）、ADF（Array Design Format）と生データ・解析済みデータから構成されています。

### 5-2. IDF の項目

IDF は項目と対応する値が組み合わされたタブ区切りテキストファイルです。一つ以上の値が許容されているフィールド（プロトコール、登録者、experimental factor）は複数定義できます（値はタブで区切ります）。

| IDF 項目 | 説明 | 備考 |
|---------|------|------|
| Investigation Title | 研究全体に付けるタイトル | 1値のみ |
| Experimental Design | 実験のデザイン（[controlled term](https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=1804523015) から選択） | — |
| Experimental Factor Name | 実験の変数（growth condition、genotype、organism part 等）。SDRF の "Factor Value[]" カラムに値を記入 | — |
| Experimental Factor Type | Experimental factor の type。GEA では Experimental Factor Name を使用 | — |
| Person Last Name | 登録者のラストネーム（**公開される**） | — |
| Person First Name | 登録者のファーストネーム（**公開される**） | — |
| Person Mid Initials | 登録者のミドルネーム（**公開される**） | — |
| Person Affiliation | 登録者の所属する組織（**公開される**） | — |
| Person Roles | Person の役割（GEA では "submitter" のみ使用可能） | — |
| Public Release Date | データの初回公開日（"YYYY-MM-DD" 形式。例: `2011-10-10`） | 1値のみ |
| PubMed ID | 登録データを引用している文献の PubMed ID | — |
| Publication DOI | 登録データを引用している文献の DOI（PubMed ID がある場合は PubMed ID を記載） | — |
| Experiment Description | 実験のフリーテキストでの記述。「実験で何をしたか」を明確に説明する（キュレータがデータをチェックする上で役立つ） | 1値のみ |
| Protocol Name | プロトコールの名前。SDRF の "Protocol REF" カラムで一時的な ID（例 `ESUB000350_Protocol_1`）で参照される | — |
| Protocol Type | プロトコールの種類。Microarray と Sequencing experiment で[必須プロトコールセット](https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=961166619)が異なる | 下表参照 |
| Protocol Description | プロトコールをフリーテキストで記述（タブで区切られた１フィールド内に収める） | — |
| SDRF File | IDF に随伴する SDRF ファイル名（GEA が自動的にファイル名を埋め込む） | — |
| Comment[<user-defined tag>] | ユーザもしくはアーカイブが独自に定義するフィールド | 下表参照 |

**Protocol Type の選択肢**:

- array scanning and feature extraction protocol
- conversion protocol
- dissection protocol
- growth protocol
- high throughput sequence alignment protocol
- normalization data transformation protocol
- nucleic acid extraction protocol
- nucleic acid hybridization to array protocol
- nucleic acid labeling protocol
- nucleic acid library construction protocol
- nucleic acid sequencing protocol
- sample collection protocol
- treatment protocol

**GEA が使用する Comment タグ**:

- `Comment[GEAAccession]`
- `Comment[AEExperimentType]`
- `Comment[Number of channel]`
- `Comment[Array Design REF]`
- `Comment[BioProject]`
- `Comment[Public Release Date]`
- `Comment[Last Update Date]`
- `Comment[AdditionalFile:TXT]`

### 5-3. SDRF の構造

SDRF (Sample and Data Relationship Format) ではサンプル属性、および、サンプル・アレイ・データファイル間の関係性を記述します。SDRF は実験の自然な流れ（大元の Source → データファイル）を再現するように構成されています。

| 実験種別 | SDRF 1行の意味 |
|---------|--------------|
| Single-channel マイクロアレイ | 1行 = 1ハイブリダイゼーション |
| Two-channel マイクロアレイ | 1行 = 1チャンネル |
| シークエンシング実験 | 1行 = 基本的に1生データファイル（Run、ペアードシークエンスを含む） |

**SDRF のセクション構成**:

| セクション | 説明 |
|-----------|------|
| Protocols | IDF で定義された Protocol Name への参照（Protocol REF カラム）。アクセッション番号発行前は一時的な ID で参照 |
| Sources | 実験の出発材料（Source Name カラムで始まり、Characteristics カラムが続く）。GEA では対応する BioSample の `sample_name` が Source Name 等に共通で使用される |
| Extracts | 実験で抽出された核酸（Extract Name と Material Type） |
| Labeled Extracts | アレイにハイブリダイズする前にラベルされた核酸（Label カラムが必要） |
| Assays | Labeled extract のアレイへのハイブリダイゼーション、もしくは、ライブラリーのシークエンシング（マイクロアレイ実験では Array Design REF カラムが必要） |
| Raw Data Files | 生データファイルのリスト（Array Data File カラム） |
| Processed Data Files | 解析済みデータファイルのリスト（Derived Array Data File カラム。複数アッセイからのデータを含む場合は Derived Array Data Matrix File カラム） |
| Factor Values | 実験で解析対象になっている変数（Factor Value[<name>] カラム。SDRF の最右に配置） |

### 5-4. SDRF の主要カラム

| カラム | 説明 |
|--------|------|
| Source Name | MAGE-TAB identifier。Source material に対してユーザが定義する値（デフォルトは BioSample の `sample_name`） |
| Sample Name | Sample material に対してユーザが定義する値 |
| Extract Name | Extract material に対してユーザが定義する値 |
| Labeled Extract Name | Labeled Extract material に対してユーザが定義する値 |
| Assay Name | Assay に対してユーザが定義する値。全 "Assay Name" カラムの次に "Technology Type" カラムが必要 |
| Scan Name | Scan イベントに対してユーザが定義する値 |
| Normalization Name | Normalization イベントに対してユーザが定義する値 |
| Array Data File | 生データファイルを SDRF 1行について1ファイルリストして個々のアッセイとデータファイルを結びつける |
| Derived Array Data File | 解析済みデータファイルを SDRF 1行について1ファイルリストして個々のアッセイと解析済みデータファイルを結びつける（マイクロアレイ・シークエンシング両方） |
| Array Data Matrix File | 複数アッセイからのデータを含む生データファイルを記載（Data Matrix 形式） |
| Derived Array Data Matrix File | 複数アッセイからのデータを含む解析済みデータファイルを記載（Data Matrix 形式） |
| Array Design REF | アッセイで使われたアレイデザインへの参照（ArrayExpress/GEA のアクセッション番号、例 "A-AFFY-2"、または番号がない場合はファイル名） |
| Protocol REF | IDF で定義された Protocol Names への参照 |
| Characteristics[<category>] | controlled vocabulary または測定値（Source Name / Sample Name / Extract Name / Labeled Extract Name を注釈） |
| Provider | Source Name を注釈するカラム。Source が由来する組織名や提供者名 |
| Material Type | controlled vocabulary term（total RNA / polyA RNA / cytoplasmic RNA / nuclear RNA / genomic DNA / protein / other） |
| Label | 核酸を標識したラベル化合物名（例: Cy3、Cy5、biotin、alexa_546） |
| Technology Type | controlled vocabulary term。GEA がマイクロアレイに "array assay"、シークエンシングに "sequencing assay" を自動で埋め込む |
| Factor Value[<experiment factor name>] | SDRF の各行の experimental factor values（変数）。SDRF の最右に配置 |
| Performer | Protocol REF を注釈。プロトコールが実施された組織名または研究者名 |
| Date | Protocol REF を注釈。プロトコールの実施日（"YYYY-MM-DD" 形式） |
| Parameter Value[<protocol parameter>] | Protocol REF を注釈。プロトコールのパラメータを記述 |
| Unit[<unit category>] | Characteristics[] / Factor Value[] / Parameter Value[] を注釈。先行するカラムの単位（[EFO](https://www.ddbj.nig.ac.jp/efo/) の Unit サブクラスから） |
| Description | Source / Sample / Extract / Labeled Extract を注釈。フリーテキストでの説明（できるだけ Characteristics[] カラムを使うこと） |
| Term Source REF | どのような controlled vocabulary カラムや外部エンティティを参照できるカラムにも使用可能。先行するカラムの値が由来するオントロジーやデータベースを参照 |
| Term Accession Number | Term Source REF を注釈。オントロジーやデータベース中の値に対するアクセッション番号 |
| Comment[<comment name>] | node と edge カラムを注釈するために使う拡張性のためのカラム |

---

## 6. データファイルの登録形式（Data File）

### 6-1. ファイル準備における注意点

- experiment 中の全ての sample/hybridization に対する生データファイルと生マトリックスファイルを登録すること
- ファイル名は英数字 `[A-Z,a-z,0-9]`、アンダースコア `[_]`、ハイフン `[-]` とドット `[.]` のみから構成され、空白文字、カッコ、句読点やシンボルを含まないこと
- 全ての spreadsheet/matrix ファイルはタブ区切りテキストファイル形式（`.txt`）で保存し、**エクセル形式（`.xls`、`.xlsx`）で保存しないこと**

### 6-2. マイクロアレイデータファイル形式

#### 生データファイルの形式

**アッセイ毎の生データファイル（推奨）**: マイクロアレイスキャナー付属ソフトによって生成される "native" ファイル。変更・編集せずそのまま 1 hybridization assay あたり 1 file として登録します。

**生データマトリックス（非推奨）**: 複数の hybridization assay に由来するデータを含んでいるタブ区切りテキストファイル（`.txt`、probe が行で assay がカラム）。マトリックスファイル形式の仕様は（Illumina GenomeStudio データファイル以外は）厳格に定められています。詳細は[マトリックスファイルガイドラインと例](https://www.ddbj.nig.ac.jp/gea/matrix.html)を参照してください。

#### プラットフォーム毎の受付フォーマット

生データファイルのプラットフォームはファイルヘッダー中のカラムヘッダーで判定されます。

| プラットフォーム | 判定カラムヘッダー / 備考 |
|----------------|----------------------|
| **Affymetrix** | 古い GDAC 形式と新しい GCOS/XDA 形式の両方で CEL と EXP ファイルを認識 |
| **Agilent** | Row / Col / PositionX / PositionY |
| **Illumina** | テキストかバイナリー（IDAT）形式。**IDAT の登録を推奨**（テキストファイルは情報欠損・フォーマット非統一のリスクあり）。GenomeStudio テキストファイルのカラム構成: `PROBE_ID | Assay_Name_1.QT1 | Assay_Name_1.QT2 | ...`（PROBE_ID は常に "ILMN_123456" 形式） |
| **GenePix** | Block / Column / Row / X / Y |
| **NimbleScan** | PROBE_ID / X / Y |
| **ScanAlyze** | GRID / COL / ROW / LEFT / TOP / RIGHT / BOT |
| **ScanArray/QuantArray** | Array Column / Array Row / Spot Column / Spot Row / X / Y（古い形式: Array Column / Array Row / Column / Row） |
| **ArrayVision** | Primary / Secondary（新しい "lg2" 形式: Spot labels） |
| **Spotfinder** | MC / MR / SC / SR |
| **BlueFuse** | COL / ROW / SUBGRIDCOL / SUBGRIDROW |
| **UCSF Spot** | Arr-colx / Arr-coly / Spot-colx / Spot-coly |
| **Applied Biosystems** | Probe_ID / Gene_ID |
| **CodeLink** | Logical_row / Logical_col / Center_X / Center_Y |
| **ImaGene** | Meta Column / Meta Row / Column / Row / Field / Gene ID（3.0 形式: Meta_col / Meta_row / Sub_col / Sub_row / Name / Selected） |
| **CSIRO Spot** | grid_c / grid_r / spot_c / spot_r / indexs |
| **Generic（spotted アレイ等）** | MetaColumn / MetaRow / Column / Row の後にデータのカラムが続く |

#### 解析データファイル（マイクロアレイ）

マイクロアレイスキャナーからの processed file（Affymetrix の `.chp` ファイル、Illumina BeadChip GenomeStudio からの出力ファイル）とタブ区切りテキストファイル形式での二次元 matrix ファイルの両方を受け付けています。

受け付け形式:
- 1 hybridization あたり 1 つの processed file（**推奨**）
- 全ての hybridization からの正規化されたデータを含んだ 1 つの表（"matrix"）（非推奨）
- 異なるデータ処理段階の正規化されたデータを含んだいくつかの表ファイル

**解析済みテキストファイルの形式**: 行が probe/gene、列が sample/data の二次元表。

- 行ヘッダー: 可能であれば array design file 中の probe とマッピングできるオフィシャルな probe name/identifier を含める（Reporter Identifier または CompositeSequence Identifier。Probe ID がない場合は gene symbol や他の ID を記載）
- 列ヘッダー: 可能であれば各データカラムヘッダーに SDRF 中のサンプルの対応がとれる sample name を記載

### 6-3. シークエンシングデータ

#### 生データファイル

次世代シークエンスの生データは **DRA に事前登録**する必要があります。[DRA に登録可能なファイルリスト](https://www.ddbj.nig.ac.jp/dra/submission.html#run-data-files)を参照してください。

#### 解析済みファイル（シークエンシング）

最終的な解析データファイルとは関連する論文の結論が導かれる基になったデータのことです。

**重要**: GEA はアライメントファイル（BAM、SAM、BED 等）が解析データファイルとして登録されることを想定していません（標準的なアライメントファイルのみが解析データである場合は [GEA に連絡](https://www.ddbj.nig.ac.jp/contact-ddbj.html)してください）。

| 実験種別 | 解析データの例 |
|---------|-------------|
| 発現解析 | リードのカウント数、正規化された測定量（Cufflinks、Cuffdiff、DESeq、edgeR 等からの出力） |
| ChIP-Seq | 定量的なタグ密度を記載したピークファイル等（標準ファイル形式: WIG、bigWig、bedGraph 等） |

**注意事項**:
- 発現量に差がある遺伝子だけを抽出するのではなく、全てのサンプルにおける全測定対象の測定値が記載された**完全なデータ**を登録すること
- 解析データファイルにおける測定対象（遺伝子や転写産物等）は公的なアクセッション番号やゲノム座標で実体をトレースできるようになっている必要がある
- 使用した[リファレンスゲノム](https://www.ncbi.nlm.nih.gov/assembly/)（例: hg19、mm9、GCF_000001405.13）の ID を normalization data transformation protocol や high throughput sequence alignment protocol に明記する

WIG、bedGraph、GFF、GTF ファイルの形式要件は [UCSC file format FAQ](http://www.genome.ucsc.edu/FAQ/FAQformat.html) を参照してください。

#### Additional file

一細胞解析における spike-in やデータ解析に必要な追加ファイルを additional file として登録することができます（例 [E-MTAB-3624](https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-3624/)）。登録を希望する場合は [GEA チームに連絡](https://www.ddbj.nig.ac.jp/contact-ddbj.html)してください。

---

## 7. Validation

Validator は [validation rule](https://www.ddbj.nig.ac.jp/gea/validation.html) に従ってメタデータをチェックし、エラーとワーニングメッセージを表示します。**エラーを解消しないとメタデータを登録できません**。

Validation rule の詳細: https://www.ddbj.nig.ac.jp/gea/validation.html

---

## 8. Reviewer Access

### 8-1. Reviewer access token

GEA 登録データにアクセッション番号が発行された後、'Generate new reviewer access key' で非公開データに read-only の匿名アクセスを提供する **reviewer トークン**を生成することができます。

- トークンは生成後**三か月で失効**します（必要であれば再発行可能）
- Reviewer access URL はアクセッション番号発行通知メールに含まれています
- Reviewer access では **DRA に登録した次世代シークエンス生データ以外**の全てのメタデータとデータファイルへのアクセスが提供されます（DRA は非公開データへの reviewer access を提供していない）
- **トークンを知っている誰でも GEA データにアクセスできる**ため、トークンは慎重に取り扱い、論文投稿サイトやエディターへのメール以外には含めないようにすること

### 8-2. Double-blind オプション（登録者の匿名化）

いくつかのジャーナルでは "double-blind" peer review オプションを提供しています。GEA では登録者が特定されないように以下の IDF フィールドを削除して reviewer access に供する "double-blind" オプションを提供しています:

- "Person" で始まるフィールド（名前とメールアドレス）
- "PubMed" で始まるフィールド（PubMed ID）
- "Publication" で始まるフィールド（DOI）

**注意事項**:
- GEA 登録者は削除されていないメタデータを登録アカウントで確認できる
- double-blind オプションを選択せずにトークンを再生成するとフルメタデータが提供されるようになる
- データ公開後は reviewer access での登録者関連フィールドの自動削除は実施されなくなる
- 解析済みデータファイルのエクセル所有者情報などこれら以外の箇所に登録者を特定する情報を含めないようにすることは**登録者の責任**において実施すること

---

## 9. Array Design (ADF)

アレイデザインファイル（ADF: Array Design Format）は GEA 登録でマイクロアレイ実験のプロトコールが参照するアレイの仕様を記述します。

- [ArrayExpress](https://www.ebi.ac.uk/biostudies/arrayexpress/studies?query=type%3Aarray) または [GEA](https://ddbj.nig.ac.jp/public/ddbj_database/gea/array/A-GEAD-000/) にアレイデザインが登録されている場合は "A-XXXX-n" のアクセッション番号を IDF の Array Design 欄に記入する
- 未登録の場合は GEA 登録用ディレクトリにアレイデザインファイルをアップロードして[新規アレイデザインを登録](https://www.ddbj.nig.ac.jp/gea/adf.html)する
- アレイデザインアクセッション番号は [ArrayExpress array design search page](https://www.ebi.ac.uk/biostudies/arrayexpress/studies?query=type%3Aarray) で検索できる

詳細: https://www.ddbj.nig.ac.jp/gea/adf.html

---

## 10. Data Matrix

複数アッセイからのデータを含む解析済みデータファイルを [Data Matrix 形式](https://www.ddbj.nig.ac.jp/gea/matrix.html)で登録することができます。

- SDRF 中の `Derived Array Data Matrix File` カラム（または `Array Data Matrix File` カラム）にファイル名を記載する
- 特定の行と列にあるデータが experiment 中の assay と array design file 中の probe/probe set と人が見て/機械的にマッピングされるファイル形式が求められる

詳細: https://www.ddbj.nig.ac.jp/gea/matrix.html

---

## 11. FAQ — GEA 関連

### Q. GEA のデータを更新・削除するには？

[GEA 更新依頼フォーム](https://forms.gle/PzTzxuYiMenc8CCR6)から GEA チームに依頼してください。

---

### Q. データ公開の依頼方法は？

[データ公開の依頼方法](https://www.ddbj.nig.ac.jp/faq/ja/request-release.html)を参照してください。

---

### Q. 論文情報を追加するには？

担当者が登録データに論文情報を記載します。所定のフォームから論文の **PubMed ID**（推奨）もしくは **DOI** をお知らせください。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/add-publication.html）

---

### Q. BioProject/BioSample/実験データの連動公開の仕組みは？

| トリガー（公開されたデータ） | 連動公開される対象 |
|----------------------------|--------------------|
| BioProject の公開 | 引き起こさない |
| BioSample の公開 | `derived_from` 属性で引用されている BioSample |
| DDBJ、**DRA、GEA**、MetaboBank の公開 | リンクしている BioProject と BioSample |
| DDBJ の公開 | DBLINK で参照している DRA Run |
| **GEA の公開** | 参照している **DRA Run** の公開を引き起こす |
| DRA の公開 | DDBJ の連動公開を引き起こさない |

（参照: https://www.ddbj.nig.ac.jp/faq/ja/bp-bs-seq-release.html）

---

### Q. Single-cell シークエンシングデータはどのように登録するか？

[Single-cell submission guide](https://www.ddbj.nig.ac.jp/gea/single-cell.html) を参照してください。spike-in やデータ解析に必要な追加ファイルを登録する場合は [GEA チームに連絡](https://www.ddbj.nig.ac.jp/contact-ddbj.html)してください。

---

### Q. Spatial gene expression データの登録方法は？

[Spatial gene expression](https://www.ddbj.nig.ac.jp/gea/spatial-gene-expression.html) を参照してください。

---

### Q. トランスクリプトームをリファレンスとして使用した発現解析データの登録は？

[Expression analysis using transcriptome as references](https://www.ddbj.nig.ac.jp/gea/transcriptome-reference.html) を参照してください。

---

## 12. リンク集

| ページ | URL |
|--------|-----|
| GEA ホーム | https://www.ddbj.nig.ac.jp/gea/index.html |
| 登録概要（Submission Overview） | https://www.ddbj.nig.ac.jp/gea/overview.html |
| マイクロアレイデータの登録 | https://www.ddbj.nig.ac.jp/gea/submit-array.html |
| シークエンスデータの登録 | https://www.ddbj.nig.ac.jp/gea/submit-sequence.html |
| メタデータ（Metadata） | https://www.ddbj.nig.ac.jp/gea/metadata.html |
| データファイルの登録形式 | https://www.ddbj.nig.ac.jp/gea/datafile.html |
| Validation | https://www.ddbj.nig.ac.jp/gea/validation.html |
| Single-cell submission guide | https://www.ddbj.nig.ac.jp/gea/single-cell.html |
| Spatial gene expression | https://www.ddbj.nig.ac.jp/gea/spatial-gene-expression.html |
| Expression analysis using transcriptome as references | https://www.ddbj.nig.ac.jp/gea/transcriptome-reference.html |
| Example | https://www.ddbj.nig.ac.jp/gea/example.html |
| Array Design (ADF) | https://www.ddbj.nig.ac.jp/gea/adf.html |
| Data Matrix | https://www.ddbj.nig.ac.jp/gea/matrix.html |
| Reviewer Access | https://www.ddbj.nig.ac.jp/gea/reviewer-access.html |
| FAQ（GEA タグ） | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=gea |
| FAQ: 連動公開の仕組み | https://www.ddbj.nig.ac.jp/faq/ja/bp-bs-seq-release.html |
| FAQ: データ公開の依頼 | https://www.ddbj.nig.ac.jp/faq/ja/request-release.html |
| FAQ: 論文情報の追加 | https://www.ddbj.nig.ac.jp/faq/ja/add-publication.html |
| ダウンロード | https://ddbj.nig.ac.jp/public/ddbj_database/gea/ |
| D-way ログイン | https://ddbj.nig.ac.jp/D-way/ |
| GEA 更新依頼フォーム | https://forms.gle/PzTzxuYiMenc8CCR6 |
| 外部参照申請フォーム | https://docs.google.com/forms/d/e/1FAIpQLSf1tMKEC_mhztGhtfKV0sLSGt1vY-I4Jb_RLQF64Li1d6_-Xg/viewform |
| IDF 記入例 | https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/ |
| Protocol Type 必須セット | https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=961166619 |
| Experimental Design controlled terms | https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=1804523015 |
| MAGE-TAB 仕様書 | https://www.ddbj.nig.ac.jp/assets/files/magetab/MAGE-TABv1.1.pdf |
| ArrayExpress array design search | https://www.ebi.ac.uk/biostudies/arrayexpress/studies?query=type%3Aarray |
| GEA array design | https://ddbj.nig.ac.jp/public/ddbj_database/gea/array/A-GEAD-000/ |
| UCSC file format FAQ | http://www.genome.ucsc.edu/FAQ/FAQformat.html |
| データのアップロード | https://www.ddbj.nig.ac.jp/upload.html |
| 登録ナビゲーション | https://www.ddbj.nig.ac.jp/submission-navigation.html |
| MIAME | http://fged.org/projects/miame/ |
| MINSEQE | http://fged.org/projects/minseqe/ |
| MAGE-TAB | https://www.ebi.ac.uk/arrayexpress/help/magetab_spec.html |
