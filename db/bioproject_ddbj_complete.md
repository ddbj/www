# DDBJ BioProject — 完全ガイド

> 出典: https://www.ddbj.nig.ac.jp/bioproject/  
> 取得日: 2026年5月

---

## 目次

1. [BioProject とは（Home）](#1-bioproject-とはhome)
2. [プロジェクトの登録（Submission）](#2-プロジェクトの登録submission)
3. [プロジェクト情報（Project Information）](#3-プロジェクト情報project-information)
4. [FAQ — BioProject 関連](#4-faq--bioproject-関連)
5. [検索・ダウンロード（Search / Downloads）](#5-検索ダウンロードsearch--downloads)

---

## 1. BioProject とは（Home）

BioProject は**研究プロジェクトとプロジェクトに由来するデータをまとめるためのデータベース**です。データが BioProject アクセッション番号を引用することで、データがプロジェクト単位でまとめられます。

DDBJ BioProject は登録されたプロジェクトに対してプレフィックス **`PRJDB`** のアクセッション番号を発行しています。公開されたプロジェクトデータは [EBI](https://www.ebi.ac.uk/) と [NCBI](https://www.ncbi.nlm.nih.gov/bioproject) と共有されます。

**主なリンク**

| 目的 | URL |
|------|-----|
| 登録方法 | https://www.ddbj.nig.ac.jp/bioproject/submission.html |
| ログインして登録（D-way） | https://ddbj.nig.ac.jp/D-way/ |
| 検索 | http://ddbj.nig.ac.jp/search/ |
| ダウンロード | https://ddbj.nig.ac.jp/public/ddbj_database/bioproject/ |
| FAQ（BioProject タグ） | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=bioproject |

---

## 2. プロジェクトの登録（Submission）

### 2-1. プライマリーとアンブレラ

プロジェクトには**プライマリー**と**アンブレラ**の二種類があります。

| 種類 | 説明 |
|------|------|
| **プライマリープロジェクト** | 既に登録したデータ、またはこれから登録しようとしているデータをまとめるために登録者が作成するプロジェクト。関連するデータが公開されるまで非公開にすることができる。 |
| **アンブレラプロジェクト** | 関連性のあるプロジェクトを上位でまとめるプロジェクト。**非公開にすることはできない**。 |

> 登録データはプライマリープロジェクトを直接参照できますが、アンブレラプロジェクトを直接参照することはできません。

### 2-2. 階層構造

大規模プロジェクトを１つ以上の階層で表すことができます。

- **最上位**: 共同研究プロジェクト全体を表すアンブレラプロジェクト
- **二階層目**: 各機関が分担しているプロジェクトに対応するアンブレラプロジェクト
- **最下層（三段目）**: 実験データから参照されるプライマリープロジェクト

プライマリーとアンブレラプロジェクトは複数のアンブレラプロジェクトを参照することができます。

構成例:
```
(A) 二階層  Umbrella → Primary × n
(B) 三階層  Umbrella（最上位）→ Umbrella（機関別）→ Primary × n
```

### 2-3. プロジェクトが必要な場合

プロジェクトが必要かどうかは[登録ナビゲーション](https://www.ddbj.nig.ac.jp/submission-navigation.html)で確認してください。

### 2-4. 新規登録手順

1. [DDBJ アカウント](https://www.ddbj.nig.ac.jp/ddbj-account.html)を取得する
2. [D-way](https://ddbj.nig.ac.jp/D-way/) にログインする
3. 上部メニューから BioProject 登録ページに移動する
4. [New submission] で新規登録を作成する
5. 左のタブから順番に内容を**英語**で入力する（入力項目の詳細は [3. プロジェクト情報](#3-プロジェクト情報project-information) を参照）
6. アノテーション付与のゲノム配列を [DDBJ](https://www.ddbj.nig.ac.jp/ddbj/genome.html) に登録する場合は、[locus tag prefix](https://www.ddbj.nig.ac.jp/ddbj/locus_tag.html) を [BioSample](https://www.ddbj.nig.ac.jp/biosample/submission.html) で登録する
7. "OVERVIEW" で内容を確認後、[Submit] で登録

### 2-5. アクセッション番号

- 登録されたプロジェクトに対してプレフィックス **`PRJDB`** のアクセッション番号が自動発行される
- 「即日公開 (Release immediately following curation)」が指定されている場合、登録された日の夜間に自動公開される

**注意事項**:
- `PSUB` で始まる仮 ID を論文中に引用しないこと
- EBI/NCBI に登録したプロジェクトを DDBJ に重複して登録しないこと

### 2-6. アンブレラプロジェクトの登録

- [D-way](https://ddbj.nig.ac.jp/D-way/) から通常のプライマリープロジェクトと同様に登録する
- 登録の際は必ず **Private comments to DDBJ staff** にアンブレラである旨を記入する
  - 例: `Please register this project as an umbrella project.`
- アンブレラプロジェクトは**非公開にすることができない**

**Haplotype をまとめるアンブレラプロジェクトを登録する場合**:  
配下にリンクするプライマリープロジェクトのアクセッション番号とその区別（例: PRJDB1 Principal, PRJDB2 Alternate, PRJDB3 DRA）を記入する。

### 2-7. アンブレラプロジェクトへのリンク

プライマリープロジェクト登録時に **Umbrella BioProject** 欄にリンクすべきアンブレラプロジェクトのアクセッション番号を記入する。BioProject スタッフが記入内容をみて、プロジェクトをアンブレラにリンクする作業を行う。

### 2-8. ヒトデータの登録

- DRA/GEA/DDBJ へのヒトデータ登録には、[DBCLS に登録予定データの提供申請](https://www.ddbj.nig.ac.jp/policies.html#unrestricted-access)を提出し、承認されている必要がある
- 詳細は[ヒトを対象とした研究データの登録について](https://www.ddbj.nig.ac.jp/policies.html#submission-of-human-data)を参照
- 承認されている場合、BioProject の「Private comments to DDBJ staff」に**提供申請 ID**（例: `J-DS000001-001`）を記入する

### 2-9. プロジェクトの公開

**公開タイミングの選択肢**（公開予定日は設定できない）:

| 選択肢 | 内容 |
|--------|------|
| 登録完了後すぐに公開 | 即日公開 |
| BioProject アクセッション番号を引用しているデータと同時に公開 | 連動公開（非公開） |

**公開の仕組み（詳細）**:

- BioProject に登録されたプライマリープロジェクトは「即日公開」もしくは「非公開」にすることができる
- 「非公開」の場合、登録されたプライマリープロジェクトは参照されている DDBJ/DRA/GEA/MetaboBank データが公開されるまで非公開に保たれる
- プロジェクトデータの**公開予定日を設定することはできない**
- プライマリープロジェクトは参照されている DDBJ/DRA/GEA/MetaboBank データが公開されると**自動的に連動公開**される
- プライマリープロジェクトの公開は、当該プロジェクトを参照している DDBJ/DRA/GEA/MetaboBank データの公開を**引き起こさない**
- プライマリープロジェクトを参照しているデータの公開は当該プロジェクトに属している他のデータの公開を**引き起こさない**
- アンブレラプロジェクトは**非公開にすることができない**
- アンブレラプロジェクトは公開されているプライマリープロジェクトと非公開のプロジェクトの両方を持つことができる
- 第三者は公開されているアンブレラプロジェクトと非公開のプライマリープロジェクト間の関係を見ることができない
- 公開されたプロジェクトデータは [NCBI](https://www.ncbi.nlm.nih.gov/bioproject) と [EBI](https://www.ebi.ac.uk/) の BioProject と交換される

関連FAQ: [BioProject/BioSample/塩基配列データの連動公開の仕組みは？](https://www.ddbj.nig.ac.jp/faq/ja/bp-bs-seq-release.html)

### 2-10. プロジェクトの更新

論文情報の追加など、登録が完了したプロジェクトを更新することができる。DDBJ BioProject で更新するため、[BioProject/BioSample/DRA 更新依頼フォーム](https://forms.gle/cfJ1nf8o612qvzXQ8)から更新を依頼する。

---

## 3. プロジェクト情報（Project Information）

> 必須項目: `*`  
> 条件によって必須: `*`（条件付き）

### 3-1. Submitter（登録者情報）

登録に関する連絡はここに記載された E-mail アドレス宛てに行われる。連絡先情報は DDBJ BioProject スタッフが使用し、一般に公開されることはない（代わりに組織情報が公開される）。

| 項目 | 必須 | 説明 |
|------|------|------|
| First name | — | 登録者の first name |
| Last name | * | 登録者の last name |
| E-mail | * | E-mail アドレス（所属組織ドメインのメールアドレスを指定） |

**Organization（組織）**

| 項目 | 必須 | 説明 |
|------|------|------|
| Submitting organization | * | 組織のフルネーム |
| Submitting organization URL | — | 登録者が所属する組織の URL |

**Data Release（公開設定）**

"Hold" か "Release" のどちらかを選ぶ。公開予定日は指定できない。データ公開の仕組みについては[プロジェクトの公開](https://www.ddbj.nig.ac.jp/bioproject/submission.html#project-release)を参照。

| 設定 | 説明 |
|------|------|
| **Hold** | BioProject アクセッション番号を引用している DDBJ/DRA/GEA/MetaboBank データが公開されたときに同時に公開される |
| **Release** | プロジェクトデータを即日公開する。この BioProject アクセッション番号を引用している非公開の DDBJ/DRA/GEA/MetaboBank データが公開されることはない |

### 3-2. General Info（一般情報）

**Project Description（プロジェクトの内容）**

| 項目 | 必須 | 説明 |
|------|------|------|
| Project title | * | プロジェクトの内容を表す短いタイトル。公開されたプロジェクトのタイトルとして使われる。例: `Chromosome Y sequencing`、`Global studies of microbial diversity on human skin` |
| Description | * | 研究対象やゴールに関する記載。第三者がデータを解釈できるよう**100文字以上**の情報を記入する |
| Private comments to DDBJ staff | — | データベーススタッフへの質問やプロジェクトに関する追加情報（非公開）。アンブレラプロジェクトを登録する場合はここに記載（例: `Please register this project as an umbrella project.`）。DBCLS で承認されたヒトデータ登録の場合は hum ID と提供申請 ID（例: `hum0001, J-DS000001-001`）を記入する |

**Umbrella BioProject（上位プロジェクトへのリンク）**

登録しようとしているプロジェクトが既に登録されているアンブレラプロジェクトに属している場合に記入する。

| 項目 | 必須 | 説明 |
|------|------|------|
| Initiative description | * | アンブレラプロジェクトについての記述 |
| Umbrella BioProject accession | * | 登録されているアンブレラプロジェクトのアクセッション番号 |

**External Links（外部リンク）**

プロジェクトに直接関連するリソースの URL と表示名。

| 項目 | 説明 |
|------|------|
| Link description | プロジェクトに関連するウェブサイトの表示名 |
| URL | プロジェクトに関連するウェブサイトの URL |

**Grants（研究費情報）**

| 項目 | 説明 |
|------|------|
| Agency | 研究費助成機関の名前。例: `Japan Society for the Promotion of Science` |
| Agency abbreviation | 研究助成機関の名前の略称。例: `JSPS` |
| Grant ID | 研究費の番号（研究費番号での検索をサポート）。例: `JSPS KAKENHI Grant Number 12345678` |
| Grant title | 研究費のタイトル（研究費のタイトルでの検索をサポート） |

### 3-3. Project Type

**Project data type（プロジェクトのデータ種別）** \*

複数選択可。NCBI ではプロジェクトを参照している実際の登録データから [Project data type](https://www.ncbi.nlm.nih.gov/books/NBK54364/def-item/project-data-type/) を割り振っている。EBI では Project data type を使用していない。

| Project Data type | Description |
|-------------------|-------------|
| Genome Sequencing | 全ゲノムや部分ゲノム塩基配列決定プロジェクト（ゲノムアセンブリの有無は問わない） |
| Clone Ends | クローンエンド塩基配列決定プロジェクト |
| Epigenomics | メチル化、ヒストン修飾、クロマチン構造に関するデータセット |
| Exome | エクソームリシークエンシングプロジェクト |
| Map | 塩基配列ではないマップデータをもたらすプロジェクト（genetic map、radiation hybrid map、cytogenetic map、optical map など） |
| Metagenome | 環境サンプルの配列解析 |
| Phenotype and Genotype | 表現型と遺伝子型の相関を解析するプロジェクト |
| Proteome | マススペクトロメトリー解析を含む大規模プロテオミクス実験 |
| Random Survey | ランダムに収集した（対象の包括的なサンプリングを目的としていない）サンプルから得られた配列 |
| Targeted Locus (Loci) | 特定の遺伝子座（16S rRNA など）の塩基配列決定プロジェクト |
| Transcriptome or Gene Expression | cDNA、EST、RNA-seq、マイクロアレイ実験を含む大規模 RNA 塩基配列決定や発現解析 |
| Variation | 集団間に存在する大小の変異を同定することを目的としたプロジェクト |
| Other | "Project data type description" に Project Data Type を記入する |

**Project data type description** \*: Other を選択したときに Project data type をここに記入する（例: `Metabolome`）

**Sample scope（サンプル対象）** \*

| Sample scope | Description |
|-------------|-------------|
| Monoisolate | 単一の動物、培養細胞のセルライン、育種された均一な集団 |
| Multiisolate | 複数の個人や集団（特定の種） |
| Multi-species | サンプルが複数の種を含んでいる |
| Environment | サンプルに含まれる種が不明 |
| Synthetic | 人工的に合成されたサンプル |
| Other | "Target description" に Sample scope を記入する |

**Material（実験材料）** \*

| Material | Description |
|----------|-------------|
| Genome | 全ゲノム。核ゲノムが対象のときに使う。DNA やメタゲノムサンプルに対して用いる |
| Partial Genome | 精製された１つ以上の染色体やレプリコン |
| Transcriptome | 転写産物解析データ |
| Reagent | 化学反応や沈降反応によって得られた実験材料 |
| Proteome | タンパク質やペプチドのデータ |
| Phenotype | 表現型解析 |
| Other | "Target description" に Material を記入する |

**Capture（情報のスケール・種類）** \*

| Capture | Description |
|---------|-------------|
| Whole | サンプル全体を使っている（通常のケース） |
| Clone Ends | クローンエンドデータを使用 |
| Exome | エクソンのデータを使用 |
| Targeted Locus/Loci | 特定の遺伝子座（遺伝子、ゲノム領域、バーコード領域）のデータ |
| Random Survey | サンプルをラフにサーベイしたデータ |
| Other | "Target description" に Capture を記入する |

**Target description** \*: Other を選択したときに Sample scope/Material/Capture を記入する

**Methodology（主要手法）** \*

| Methodology | Description |
|-------------|-------------|
| Sequencing | Sanger や Illumina などを使ったシークエンシング |
| Array | ハイブリダイゼーションアレイ |
| Mass Spectroscopy | マススペクトロメトリー |
| Other | "Methodology description" に Methodology を記入する |

**Methodology description** \*: Other を選択したときに Methodology type を記入する

### 3-4. Objective（登録するデータの種類）

| Objective | Description |
|-----------|-------------|
| Raw Sequence Reads | シークエンサから出力された生シークエンシングデータ |
| Sequence | 生データではない加工処理されたシークエンス（クリップされている、メイトペアが対になっている、向きが揃えられているなど） |
| Analysis | 生物学的な意味を解釈するために解析されたデータ |
| Assembly | アセンブリ（ゲノムやトランスクリプトーム）データ |
| Annotation | アノテーションを得るためのデータ |
| Variation | 変異情報データ |
| Epigenetic Markers | エピジェネティックなマーカーの探索 |
| Expression | 遺伝子発現データ |
| Maps | 細胞学的、物理的なマッピングや Rh マッピング |
| Phenotype | 表現型 |
| Other | "Objective description" に Objective を記載する |

### 3-5. Target（生物情報）

**Organism information（対象生物の分類や記述）**

| 項目 | 必須 | 説明 |
|------|------|------|
| Organism name | * | [Taxonomy データベース](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html)に登録されている生物名。メタゲノムや環境サンプルなどの生物名を特定できないサンプルについては[こちらのリスト](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908&lvl=3&lin=f&keep=1&srchmode=1&unlock)を参考にする |
| Taxonomy ID | — | [NCBI Taxonomy ID](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html) |
| Strain、breed、cultivar | — | 微生物の株名、もしくは真核生物の品種や栽培品種 |
| Isolate name or label | — | 単離されたサンプルの[識別子](https://www.ddbj.nig.ac.jp/ddbj/identifiers.html)、もしくは個々の動物の名前 |
| Description | — | Label に対する簡潔な補足情報 |

**Organism name 記載の注意事項**:
- プロジェクトが複数生物種を対象にしている場合、共通する系統分類を使用する（例: `Homo sapiens` と `Mus musculus` が対象であれば `Mammalia`（taxonomy id: [40674](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=40674)）と入力する）
- 生物名が NCBI Taxonomy に登録されていない場合、`sp.` を付けた生物種名を入力する（例: `Escherichia sp.`（tax id: [1884818](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=1884818)））
- 新規生物名は BioSample で申請する

### 3-6. Publication（文献情報）

| 項目 | 説明 |
|------|------|
| PubMed ID | 文献の PubMed ID(s) |
| DOI | PubMed ID がない場合は DOI を記入する |

XML 記載例:
```xml
<!-- PubMed ID -->
<Publication id="15557739">
  <DbType>ePubmed</DbType>
</Publication>

<!-- DOI -->
<Publication id="10.1093/nar/gku1120">
  <DbType>eDOI</DbType>
</Publication>
```

### 3-7. XML スキーマ

BioProject XML スキーマは以下で公開されている:  
https://github.com/ddbj/pub/tree/master/docs/bioproject

---

## 4. FAQ — BioProject 関連

### Q. BioProject を更新するには？

プロジェクトの更新や削除は [BioProject チームに連絡](https://forms.gle/mpGqxbSeYmy5oTud6)してください。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/project-update.html）

---

### Q. 論文情報を追加するには？

担当者が登録データに論文情報を記載します。所定のフォームから論文の **PubMed ID**（推奨）もしくは **DOI** をお知らせください。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/add-publication.html）

---

### Q. 投稿論文ではどのアクセッション番号を引用するべきでしょうか？

投稿する論文の規定に従ってください。基本的には登録データに対するアクセッション番号（例: DDBJ 塩基配列や DRA Run アクセッション番号）の引用を推奨します。データ全体を言及する場合は **BioProject アクセッション番号**を引用します。ただし、論文中のデータと登録データが対応付けられるようにメタデータが記載されていることが必要です。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/cite-accession.html）

---

### Q. データ公開の依頼方法は？

データ公開を希望する場合、DDBJ/DRA/GEA/MetaboBank データに対するアクセッション番号または Submission ID で公開対象を指定します。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/request-release.html）

---

### Q. BioProject/BioSample/実験データの連動公開の仕組みは？

相互にリンクされている BioProject、BioSample、DDBJ、DRA、GEA、MetaboBank に登録されたデータの連動公開の仕組みは以下のとおりです。

| トリガー（公開されたデータ） | 連動公開される対象 |
|----------------------------|--------------------|
| BioProject の公開 | リンクされているデータの連動公開を**引き起こさない** |
| BioSample の公開 | `derived_from` 属性で引用されている BioSample の連動公開を**引き起こす** |
| DDBJ、DRA、GEA、MetaboBank の公開 | リンクしている **BioProject と BioSample** の連動公開を引き起こす |
| DDBJ の公開 | DBLINK で参照している **DRA Run** の公開を引き起こす |
| GEA の公開 | 参照している **DRA Run** の公開を引き起こす |
| DRA の公開 | DDBJ の連動公開を**引き起こさない** |

DRA ではメタデータとシークエンスデータは DRA 登録（submission）単位で公開されます。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/bp-bs-seq-release.html）

---

## 5. 検索・ダウンロード（Search / Downloads）

### 検索

公開されている BioProject データは以下から検索できます:

- **DDBJ Search**: http://ddbj.nig.ac.jp/search/

### ダウンロード

公開されている BioProject データのバルクダウンロードは以下から取得できます:

- **FTP**: https://ddbj.nig.ac.jp/public/ddbj_database/bioproject/

---

## 6. リンク集

| ページ | URL |
|--------|-----|
| BioProject ホーム | https://www.ddbj.nig.ac.jp/bioproject/index.html |
| 登録方法（Submission） | https://www.ddbj.nig.ac.jp/bioproject/submission.html |
| プロジェクト情報（Project Information） | https://www.ddbj.nig.ac.jp/bioproject/project-info.html |
| FAQ（BioProject タグ） | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=bioproject |
| FAQ: 連動公開の仕組み | https://www.ddbj.nig.ac.jp/faq/ja/bp-bs-seq-release.html |
| FAQ: BioProject の更新 | https://www.ddbj.nig.ac.jp/faq/ja/project-update.html |
| FAQ: アクセッション番号の引用 | https://www.ddbj.nig.ac.jp/faq/ja/cite-accession.html |
| FAQ: データ公開の依頼 | https://www.ddbj.nig.ac.jp/faq/ja/request-release.html |
| FAQ: 論文情報の追加 | https://www.ddbj.nig.ac.jp/faq/ja/add-publication.html |
| 検索 | http://ddbj.nig.ac.jp/search/ |
| ダウンロード | https://ddbj.nig.ac.jp/public/ddbj_database/bioproject/ |
| D-way ログイン | https://ddbj.nig.ac.jp/D-way/ |
| 更新依頼フォーム | https://forms.gle/cfJ1nf8o612qvzXQ8 |
| BioProject/BioSample/DRA 更新依頼フォーム | https://forms.gle/mpGqxbSeYmy5oTud6 |
| 登録ナビゲーション | https://www.ddbj.nig.ac.jp/submission-navigation.html |
| XML スキーマ（GitHub） | https://github.com/ddbj/pub/tree/master/docs/bioproject |
| NCBI Taxonomy | https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html |
| NCBI BioProject | https://www.ncbi.nlm.nih.gov/bioproject |
| EBI BioProject | https://www.ebi.ac.uk/ |
