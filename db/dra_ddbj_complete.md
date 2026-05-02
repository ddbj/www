# DDBJ Sequence Read Archive (DRA) — 完全ガイド

> 出典: https://www.ddbj.nig.ac.jp/dra/  
> 取得日: 2026年5月

---

## 目次

1. [DRA とは（Home）](#1-dra-とはhome)
2. [DRA 登録（Submission）](#2-dra-登録submission)
3. [メタデータ（Metadata）](#3-メタデータmetadata)
4. [データファイル（Data Files）](#4-データファイルdata-files)
5. [DRA の更新（Update）](#5-dra-の更新update)
6. [メタデータの例（Example）](#6-メタデータの例example)
7. [Analysis（任意）](#7-analysisanalysis)
8. [FAQ — DRA 関連](#8-faq--dra-関連)
9. [検索・ダウンロード（Search / Downloads）](#9-検索ダウンロードsearch--downloads)

---

## 1. DRA とは（Home）

**DDBJ Sequence Read Archive (DRA)** は生シークエンスデータとアライメント情報を保存し、研究の再現性担保、及び、データ解析による新しい発見を支えています。

DRA は [International Nucleotide Sequence Database Collaboration (INSDC)](https://www.ddbj.nig.ac.jp/insdc/index.html) を構成しており、[NCBI Sequence Read Archive](https://www.ncbi.nlm.nih.gov/sra/) と [EBI European Nucleotide Archive](https://www.ebi.ac.uk/ena/browser/about/content) と共同で運営されています。

**主なリンク**

| 目的 | URL |
|------|-----|
| 登録方法 | https://www.ddbj.nig.ac.jp/dra/submission.html |
| ログインして登録（D-way） | https://ddbj.nig.ac.jp/D-way/ |
| 検索 | https://ddbj.nig.ac.jp/search/ |
| ダウンロード（FASTQ） | https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/ |
| ダウンロード（SRA） | https://ddbj.nig.ac.jp/public/ddbj_database/dra/sralite/ByExp/litesra/ |
| FAQ（DRA タグ） | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=dra |

---

## 2. DRA 登録（Submission）

### 2-1. ヒトを対象とした研究データの登録について

研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、**登録者の責任において**保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。

登録前に必ず[「ヒトを対象とした研究データの登録について」](https://www.ddbj.nig.ac.jp/policies.html#submission-of-human-data)を熟読してください。

**特殊なデータ種別の専用ページ**:
- [メタゲノムアセンブリ](https://www.ddbj.nig.ac.jp/ddbj/metagenome-assembly.html)
- [Haplotype](https://www.ddbj.nig.ac.jp/ddbj/haplotype.html)
- [Single-cell submission guide](https://www.ddbj.nig.ac.jp/gea/single-cell.html)
- [Spatial gene expression](https://www.ddbj.nig.ac.jp/gea/spatial-gene-expression.html)

### 2-2. 登録の流れ（全体）

1. DDBJ アカウントの取得
2. 新規登録の作成
3. データファイルのアップロード
4. BioProject の登録/選択
5. BioSample の登録/選択
6. Submission 情報の入力
7. Experiment / Run の入力（ウェブツール または エクセル）
8. データファイルの検証処理（Validation）
9. アクセッション番号の発行

### 2-3. DDBJ アカウントの取得

[DDBJ アカウント](https://www.ddbj.nig.ac.jp/ddbj-account.html)を取得し、**公開鍵をアカウントに登録**します。公開鍵が未登録の状態で DRA 登録サイトにアクセスすると警告が表示されます。[認証用公開鍵の登録](https://www.ddbj.nig.ac.jp/key.html#register-public-key)に従って鍵を登録してください。

### 2-4. 新規登録の作成

1. [D-way](https://ddbj.nig.ac.jp/D-way/) にログインし、上部メニューから DRA 登録一覧ページへ進む
2. [New submission] で新規登録を作成する
3. 新規登録に対応するディレクトリ（例: `test07-0040/`）が受付サーバ（`ftp-private.ddbj.nig.ac.jp`）に作成される
4. このディレクトリにデータファイルを[アップロード](https://www.ddbj.nig.ac.jp/upload.html)する

**制約・注意事項**:
- 問い合わせ後、**三か月以上回答がない登録はキャンセル**する
- データは **Submission 単位で公開**される。データを異なる時期に公開したい場合は Submission を分けること
- Submission あたりの上限:
  - BioSample: **1,000**
  - DRA: **2,000**（Run 数）
  - GEA: **1,000**（Assay 数）
  - これらを超える件数を登録する場合、同じ BioProject を参照する複数の Submission に分割する

### 2-5. データファイルのアップロード

データファイルはファイル受付サーバの対応する Submission ディレクトリ（例: `test07-0040/`）にアップロードします。アップロード方法は[「データのアップロード」](https://www.ddbj.nig.ac.jp/upload.html)を参照。**データをアップロードしないとメタデータを作成することはできません。**

### 2-6. 登録ステータス

| ステータス | 説明 |
|-----------|------|
| New | メタデータの登録前 |
| Metadata Submitted | メタデータが登録された |
| Data Validating | データファイルの検証処理中 |
| Data Error | データファイルの検証処理エラー |
| Submission Validated | メタデータとデータファイルの検証処理を通過 |
| Completed | アクセッション番号が発行された |
| Private | 公開用ファイルの作成が完了し、非公開に保たれている |
| Public | 公開 |
| Canceled | キャンセル |

"Submission Validated" と "Data Error" になった登録が DRA チームで査定されます。

### 2-7. メタデータの登録方法

メタデータは「**ウェブツールで登録する方法**」と「**メタデータ登録用エクセル**」を使った二通りの方法があります。オブジェクト数が多い場合はエクセルを使った方法を推奨します。

#### ウェブツールでの登録

Submission ID リンクから登録詳細ページへ移動し、[Enter/Update metadata] でメタデータ作成ツールを起動します。各項目を英語で入力します（必須項目は赤色のアスタリスク `*` で示されます）。画面下部の [Save] や別タブへの移動ボタンをクリックすると都度チェックされます。

ウェブツールはタブ区切りテキストファイル（tsv）でのメタデータ入力もサポートしています。  
記入例: [メタデータ tsv の記入例（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/1DTdUQ-WWOMjOA2eYQWmFYUB24hJysuwhvHLJoDFX4rc)

#### ウェブツール — Submission タブ

管理情報を記入します。公開予定、登録者と連絡先メールアドレスを記入します。Submitting organization はアカウントの Organization の内容が引き写されます。DRA 登録に関するメールは Submission に記入されたメールアドレスに送信されます（DDBJ アカウントのメールアドレスを変更した場合は Submission のアドレスも変更すること）。

#### ウェブツール — BioProject タブ

アカウントで登録した BioProject から該当するものを**1つ選択**します。未登録の場合は [register a project] から新たに登録します。自身のアカウント以外で登録された BioProject を参照したい場合は[外部参照を申請](https://docs.google.com/forms/d/e/1FAIpQLSf1tMKEC_mhztGhtfKV0sLSGt1vY-I4Jb_RLQF64Li1d6_-Xg/viewform)します。登録者と公開予定は DRA Submission の内容が引き写されます。

> ブラウザーで BioProject が表示されない不具合が生じる場合は、プライベートモードや他のブラウザー（Microsoft Edge で解消したケースがある）を試してください。

#### ウェブツール — BioSample タブ

アカウントで登録した BioSample から該当するものを選択します（一般的に DRA ではサンプルは複数になります）。チェックボックスを Shift キー押しながらクリックすると範囲選択できます。カラム上部のボックスにテキストを入力しフィルターした全サンプルを [Select filtered BioSamples] で選択することもできます。未登録の場合は [register sample(s)] から登録します。外部アカウントのサンプルを参照したい場合は[外部参照を申請](https://docs.google.com/forms/d/e/1FAIpQLSf1tMKEC_mhztGhtfKV0sLSGt1vY-I4Jb_RLQF64Li1d6_-Xg/viewform)します。

> 上記と同様にブラウザーの不具合が生じることがあります。

#### ウェブツール — Experiment タブ

初期状態では選択された BioSample と同数の Experiment と Run が**自動生成**され、それぞれの BioSample-Experiment-Run がリンクされた状態になります（自動生成は Experiment タブの**初回表示時のみ**）。

```
BioProject - BioSample(1) - Experiment(1) - Run(1)
           - BioSample(2) - Experiment(2) - Run(2)
           - BioSample(3) - Experiment(3) - Run(3)
```

Experiment は [Add new Experiment(s)] で追加できます。Run から参照されている Experiment は削除できません。タブ区切りテキストファイルでまとめて入力する場合は [Save] で Alias を確定後、[Download TSV file] でダウンロードし編集してから [Upload TSV file] で読み込みます。

**Title** は空の場合、`"[Sequencing Instrument Model] [paired end] sequencing of [BioSample accession]"` が自動構築されます（例: `"Illumina HiSeq 2000 paired end sequencing of SAMD00025741"`）。内容を簡潔に表すタイトルの記載を推奨します。

**BioSample Used** の指定形式:
- BioSample アクセッション番号: `SAMD00000001`
- SSUB Submission ID 形式: `SSUB003746 : Genome bacteria strain A`（`:` の両側の空白は無視される）

#### ウェブツール — Run タブ

初期状態で選択された Experiment と同数の Run が作成されます。[Add another Run(s)] で追加、[Delete] で削除できます（ファイルが紐づいている Run は削除不可）。[Save] で Alias 確定後、[Select data files for Run] でデータファイルとのリンク画面へ移動します。

- アップロードされているファイル一覧が表示される
- ファイルが属すべき Run の Alias を "Run/Analysis contains files" で選択する
- [File type](https://www.ddbj.nig.ac.jp/dra/metadata.html#File_Type) と [MD5 Checksum](https://www.ddbj.nig.ac.jp/checksum.html) を入力する
- **ペアリードが含まれるファイルは同じ Run に含める**（リード名からペアは自動判定）
- Run に含まれているファイルは**1つの sra/fastq ファイルに変換**される

#### エクセルを使った登録方法

ウェブツールと比べて画面遷移が無く、一回の XML ファイルアップロードで登録を済ませることができます。事前に BioProject・BioSample・DRA 新規登録・データファイルのアップロードを済ませておきます。

1. [メタデータ登録用エクセル](https://github.com/ddbj/submission-excel2xml/raw/main/metadata_dra.xlsx)をダウンロードし記入する
2. [GitHub の手順](https://github.com/ddbj/submission-excel2xml)に従い、エクセルからコマンドラインツールで Submission/Experiment/Run XML を生成する
3. D-way の対象 Submission ページから XML をアップロードする

手順が分からない方は対象の DRA Submission ID を添え、メール添付でエクセルファイルを [DRA 担当者（trace@ddbj.nig.ac.jp）](mailto:trace@ddbj.nig.ac.jp)に送付してください（担当者が XML を生成して登録）。

ウェブツールやエクセルで入力できない technical read 等の XML 要素を追加する場合は[メタデータ XML の例](https://www.ddbj.nig.ac.jp/dra/example-xml.html)を参照してください。

### 2-8. 検証処理（Validation）

#### MD5 Check

メタデータに記載されている MD5 値と実際のそれとが一致するかチェックされます。一致しなかった場合はエラーが表示されます。

- 手元ファイルの MD5 値がメタデータ中のそれと一致している場合 → 転送過程でファイルが破損した可能性があるため、ファイルを再度アップロードする
- メタデータ中の MD5 値が間違っている場合 → [Enter/Update metadata] からメタデータ中の MD5 値を修正する

#### Data Check

ファイルの中身がチェックされます。問題が無ければステータスが "**Submission Validated**" になり、検証されたファイルが別ディレクトリに移されます。DRA スタッフが査定を始めるので、**指示があるまで D-way を操作せずに待つ**こと。

#### Data Error

検証処理でエラーになるとステータスが "**Data Error**" になります。[Stop validation] で検証処理を停止するとステータスが "Metadata Submitted" に戻るので、メタデータの修正やファイルの再アップロードを行い、再度 [Validate data files] をクリックします。エラーへの対処方法は [FAQ: データファイルの validation エラーへの対処方法は？](https://www.ddbj.nig.ac.jp/faq/ja/data-validation-error) を参照してください。

### 2-9. アクセッション番号

メタデータとデータファイルに問題がなければ、メタデータオブジェクトにアクセッション番号が発行され、登録者にメールで通知されます。

| オブジェクト | プレフィックス |
|------------|-------------|
| Experiment | **DRX** |
| Run | **DRR** |
| Analysis | **DRZ** |

アクセッション番号の引用については [FAQ: 投稿論文ではどのアクセッション番号を引用するべきか？](https://www.ddbj.nig.ac.jp/faq/ja/cite-accession.html)を参照してください。

### 2-10. データ公開

データは[公開原則](https://www.ddbj.nig.ac.jp/policies.html#data-release)に従って公開されます。公開されると:
- データが [ftp](https://ddbj.nig.ac.jp/public/ddbj_database/dra/) に公開される
- 数日以内に [DDBJ Search](https://ddbj.nig.ac.jp/search) でインデックスされる
- [NCBI SRA](https://www.ncbi.nlm.nih.gov/sra/) と [EBI SRA](https://ebi.ac.uk/ena) にミラーリングされる

オブジェクトは **Submission 単位で公開**されます。オブジェクトを異なる時期に公開したい場合は Submission を分けてください。

参照関係にあるデータとの連動公開については [FAQ: BioProject/BioSample/塩基配列データの連動公開の仕組みは？](https://www.ddbj.nig.ac.jp/faq/ja/bp-bs-seq-release.html)を参照してください。

### 2-11. 登録済みファイルの提供

登録が完了した Run の fastq/sra ファイルは受付サーバ（`ftp-private.ddbj.nig.ac.jp`）の登録者領域にコピーされます（**一か月後に削除**）:

```
/report/dra/(DRA submission accession)/fastq/
/report/dra/(DRA submission accession)/sra/
例: /report/dra/DRA000001/fastq/DRR000001.fastq.bz2
```

---

## 3. メタデータ（Metadata）

メタデータにはシークエンスデータがどのようにして得られたのかが記載されています。複数のオブジェクトから構成され、各オブジェクトは [XML スキーマ](https://github.com/ddbj/pub/tree/master/docs/dra)で定義され相互に関連付けられています。

### 3-1. オブジェクト構成

| オブジェクト | 説明 |
|------------|------|
| **Submission** | 公開予定や登録者といった管理情報を記載し、同時に登録する DRA オブジェクトをまとめる |
| **BioProject** | 研究プロジェクト（外部の BioProject データベース） |
| **BioSample** | シークエンスデータが得られた生物学的なサンプル（外部の BioSample データベース） |
| **Experiment** | サンプルから構築されたライブラリーとシークエンス機種に関する情報を記載。1つの BioProject と1つの BioSample を参照する。複数の Experiment が1つの BioSample を参照できるが、1つの Experiment が複数の BioSample を参照することはできない |
| **Run** | シークエンス用ライブラリー（Experiment）に由来するデータファイルをまとめる。Run に含まれる全ファイルは1つの sra/fastq ファイルに変換され、Run のアクセッション番号がファイル名になる。ペアードデータファイルは同じ Run に含める |
| **Analysis**（任意） | Run データに関連するデータで登録先がないデータを登録する（DDBJ/EBI/NCBI で交換しない） |

### 3-2. Submission の項目

**Submitting organization**: アカウントの Organization が自動的に引き写されます（2023年12月20日に center name は廃止）。

**Hold Until（公開方法）** \*:

| 設定 | 説明 |
|------|------|
| Hold Until | 公開予定日を設定する。最長で4年後まで設定でき、延長できる |
| Immediate Release | 即日公開。登録処理が完了次第、データが公開される |

**Submitter（登録者）** \*:

| 項目 | 説明 |
|------|------|
| Name | 登録者の名前（責任者 [principal investigator] を含めること） |
| E-mail | 登録者のメールアドレス（記入された全アドレスに連絡が行われる） |

登録者情報は公開されません。

### 3-3. Experiment の項目

| 項目 | 必須 | 説明 |
|------|------|------|
| Alias | — | 自動付与の仮の名称（例: `test07-0040_Experiment_0001`）。アクセッション番号のないオブジェクトはこれで参照される |
| BioSample Used | * | 参照する BioSample を選択（アクセッション番号または SSUB形式） |
| Title | * | 検索結果で表示される Experiment のタイトル。空の場合は自動構築（例: `"Illumina HiSeq 2000 paired end sequencing of SAMD00025741"`） |
| Library Name | — | ライブラリーの名前 |
| Library Source | * | ライブラリー構築に用いた試料（下表参照） |
| Library Selection | * | ライブラリーの選別・濃縮方法（下表参照） |
| Library Strategy | * | ライブラリーの構築手法（下表参照） |
| Library Construction Protocol | — | DNA の断片化、アダプター配列などのライゲーション・濃縮方法をフリーテキストで記載。キット使用の場合はキット名とバージョンを含める |
| Instrument | * | シークエンサの機種を選択（下表参照） |
| Library Layout | * | データファイル中のリード構成（single / paired）。リードの向きは Instrument から自動判定 |
| Insert Size | * | ペアエンドライブラリを構築した際のインサートの平均サイズ（ペアエンドの場合） |

**Library Source の選択肢**:

| 値 | 説明 |
|----|------|
| GENOMIC | Genomic DNA（ゲノム DNA からの PCR 産物を含む） |
| GENOMIC SINGLE CELL | 一細胞ゲノム DNA |
| TRANSCRIPTOMIC | 転写産物または非ゲノム DNA（EST、cDNA、RT-PCR、スクリーニングライブラリ） |
| TRANSCRIPTOMIC SINGLE CELL | 一細胞からの転写産物または非ゲノム DNA |
| METAGENOMIC | メタゲノムからの混合材料 |
| METATRANSCRIPTOMIC | コミュニティターゲットからの転写産物 |
| SYNTHETIC | 合成 DNA |
| VIRAL RNA | ウイルス RNA |
| OTHER | その他・不明 |

**Library Strategy の主な選択肢**:

| 値 | 説明 |
|----|------|
| WGS | Whole genome shotgun |
| WGA | Whole genome amplification |
| WXS | エクソーム領域のランダムシークエンシング |
| RNA-Seq | 全転写産物のランダムシークエンシング |
| miRNA-Seq | マイクロ RNA などの低分子非コード RNA シークエンシング |
| ncRNA-Seq | 非コード RNA の解析 |
| ssRNA-seq | 鎖特異的 RNA シークエンシング |
| AMPLICON | PCR または RT-PCR 産物のシークエンシング |
| ChIP-Seq | クロマチン免疫沈降産物の直接シークエンシング |
| Bisulfite-Seq | 亜硫酸処理後のシークエンシング（メチル化解析） |
| RAD-Seq | Restriction Site Associated DNA シークエンシング |
| ATAC-seq | ゲノムワイドクロマチンアクセシビリティ解析 |
| Hi-C | 染色体高次構造解析 |
| Other | リストにない場合 |

（完全なリストは [メタデータページ](https://www.ddbj.nig.ac.jp/dra/metadata.html)を参照）

**Library Selection の主な選択肢**:

| 値 | 説明 |
|----|------|
| RANDOM | ランダムシェアリングのみ |
| PCR | プライマーによる選択 |
| RT-PCR | 逆転写 PCR による選択 |
| PolyA | mRNA の PolyA 選択または濃縮 |
| Oligo-dT | Oligo-dT へのハイブリダイゼーションによる mRNA 濃縮 |
| ChIP | クロマチン免疫沈降 |
| cDNA | cDNA |
| Inverse rRNA | オリゴハイブリダイゼーションによるリボソーム RNA 除去 |
| size fractionation | サイズによる物理的選別 |
| other | その他 |
| unspecified | 不明 |

**Instrument Model の主な選択肢** （Illumina、PacBio、Oxford Nanopore、Ion Torrent、BGI、454 など多数）:

代表的なもの:

| メーカー | 機種例 |
|---------|--------|
| Illumina | Illumina HiSeq 2000 / HiSeq 4000 / NovaSeq 6000 / NovaSeq X / MiSeq / NextSeq 2000 など |
| PacBio | PacBio RS II / Sequel / Sequel II / Sequel IIe / Revio など |
| Oxford Nanopore | MinION / GridION / PromethION |
| Ion Torrent | Ion Torrent PGM / Proton / S5 / Genexus など |
| BGI | BGISEQ-500 / DNBSEQ-T7 / DNBSEQ-G400 など |
| AB（キャピラリ） | AB 3730xL / 3730 / 3500 など |

（完全なリストは [メタデータページ](https://www.ddbj.nig.ac.jp/dra/metadata.html#Instrument) を参照）

### 3-4. Run の項目

| 項目 | 必須 | 説明 |
|------|------|------|
| Alias | — | 自動付与の仮の名称 |
| Title | * | Run の短いタイトル（空の場合は自動構築） |
| Experiment Referenced | * | Run が属する Experiment を選択 |

**Data files for Run**:

| 項目 | 必須 | 説明 |
|------|------|------|
| File Name | * | シークエンスデータのファイル名（DRA サーバにアップロードされているファイル名が自動入力） |
| Run/Analysis contains files | * | データファイルが属する Run を選択 |
| File Type | * | シークエンスデータのファイル形式（下表参照） |
| MD5 Checksum | * | データファイルの MD5 チェックサム値（[取得方法](https://www.ddbj.nig.ac.jp/checksum.html)） |

**File Type の選択肢（Run）**:

| File Type | 説明 |
|-----------|------|
| fastq | fastq ファイル（リード長が一定かどうかに関わらず全て "fastq" を選択） |
| hdf5 | PacBio hdf5 形式ファイル |
| bam | Binary SAM 形式（アライメントとシークエンシングデータを組み合わせたもの） |
| tab | タブ区切り表（BAM ヘッダーの SN とリファレンス fasta の対応表） |
| reference_fasta | SRA アーカイブファイル構築に使うリファレンス配列（ファイル名は `.fa` 末尾であること） |

### 3-5. Analysis の項目

| 項目 | 必須 | 説明 |
|------|------|------|
| Alias | — | 自動付与の仮の名称 |
| Title | * | Analysis オブジェクトのタイトル |
| Description | * | Analysis の内容を記述 |
| Analysis Type | * | Analysis の種類（下表参照）。アライメントデータは Run に登録する |

**Analysis Type の選択肢**:

| Analysis Type | 説明 |
|--------------|------|
| De Novo Assembly | トレース、SRA、GI レコードを複数アライメントに配置しコンセンサスを計算する |
| Sequence Annotation | 命名された属性と値による配列ごとのアノテーション |
| Abundance Measurement | アバンダンス計測（カバレッジトラック）生成に使用されたツールと処理ステップの同定 |

**Data files for Analysis — File Type の選択肢**:

| File Type | 説明 |
|-----------|------|
| bam | Binary SAM 形式 |
| tab | タブ区切りテキスト |
| ace | phred アセンブラなどからの複数アライメントファイル |
| fasta | FASTA 形式シークエンスデータ |
| wig | Wiggle (WIG) 形式（連続値データ） |
| bed | BED 形式（アノテーショントラック） |
| vcf | Variant Call Format |
| maf | Mutation Annotation Format |
| gff | General Feature Format |
| csv | CSV |
| tsv | TSV |

---

## 4. データファイル（Data Files）

### 4-1. ファイル命名規則

- ファイル名は英数字 `[A-Z,a-z,0-9]`、アンダースコア `[_]`、ハイフン `[-]` とドット `[.]` のみから構成される
- **空白文字、カッコ、句読点やシンボルを含まないこと**

### 4-2. ファイル形式の一般規則

- ペアリードの fastq は forward と reverse を**別々のファイル**にして、**一つの Run に登録**する（BAM は分割不要）
- データファイルは**登録用ディレクトリの直下**にアップロードする（サブディレクトリは作成しないこと）
- tar などでアーカイブしないこと
- BAM ファイルは圧縮しないこと

### 4-3. fastq

Run の filetype には **fastq** を選択します。

- Quality value は **phred 形式**にする。オフセットはデフォルトで 33（`!`）。64（`@`）の場合は Run XML を編集して `ascii_offset="@"` にする
- DRA のメタデータ作成ウェブ画面は Technical read（アダプター、リンカー、バーコード配列）記載に対応していない。記載する場合は Experiment XML を編集・登録する（[XML の記載例](https://www.ddbj.nig.ac.jp/dra/example-xml.html)）
- ペアードリードは別々の fastq ファイルとして一つの Run に登録する。ペアは標準形式のリード名から判定される
- リードの先頭は `@` で始まっている必要がある
- 塩基配列と Quality value は `+` で始まる行で区切られている必要がある
- fastq ファイルは **gzip で圧縮**すること

### 4-4. BAM

BAM は SAM ファイル形式のバイナリー圧縮です。**プライマリーデータとして unaligned read（アライメントされなかったリード）を含む BAM を登録することを推奨します**。

**BAM ファイルの処理上の注意**:
- 各アライメントリードの RNAME はヘッダー中の SN タグ値と一致している必要がある
- アライメントリードの任意フィールド read group（`RG:Z:`）はヘッダー中の read group ID と一致している必要がある
- 2フィールド目の FLAG フィールドはデータに対して正しい値がセットされていることが重要（不正な FLAG 値が多すぎるとエラー）
- DRA はアライメントセクション中の任意かつ非標準のタグ/フィールド値は保持しないが、**ヘッダーセクション全体は保持**される
- ペアリードに対して SAM BAM flag に適切なビット値が設定されていない場合や、ペアリードが別々の bam ファイルに分かれている場合は、適正な SRA ファイルが生成されない

**BAM 登録に必要なもの**（Run にアライメントデータを登録する場合）:
1. BAM ファイル本体
2. SN-リファレンス配列の対応表（タブ区切り）

**リファレンスの指定方法**（いずれか）:

| 方法 | 説明 |
|------|------|
| INSDC/RefSeq アクセッション番号で指定 | `https://ftp.ncbi.nlm.nih.gov/sra/refseq/` にある場合、アクセッション番号.バージョン番号（例: `NC_000001.11`）で指定。バージョン番号は必須 |
| マルチ fasta で提供 | リファレンスが上記 ftp にない場合。Run の File Type に `reference_fasta` を選択 |
| アクセッション番号とマルチ fasta の混在 | 一部が ftp にある場合の混在指定 |
| 対応表のみ（unmapped bam） | PacBio や IonTorrent など、リファレンスがない bam（ヘッダーに SQ 行がない）の場合は対応表やリファレンス fasta の指定は不要 |

### 4-5. プラットフォーム毎のデータ形式

| プラットフォーム | 登録形式 |
|----------------|---------|
| 454 | fastq/bam（sff ファイルは変換が必要） |
| Illumina | fastq/bam |
| BGI-seq | fastq/bam |
| SOLiD | fastq/bam |
| Ion Torrent | fastq/bam（bam は samtools で fastq に変換可能） |
| Helicos Heliscope | quality value を全て "14" として作成した fastq/bam |
| Complete Genomics | fastq/bam |
| Pacific Biosciences（HDF5） | `*.bas.h5` と `*.bax.h5`（RS II: 1 Run に 1 `.bas.h5` と 3 `.bax.h5`。ファイル名変更不可） |
| Pacific Biosciences（bam） | `*.subreads.bam` / `*.ccs.bam` / `*.reads.bam`（1 Run に 1 bam） |
| Oxford Nanopore | fastq/bam |
| キャピラリシークエンサ | fastq/bam |
| 10x Genomics | GEA [Single-cell submission guide](https://www.ddbj.nig.ac.jp/gea/single-cell.html) を参照 |

### 4-6. Analysis 用データファイル

#### PacBio Base Modification Files

PacBio の解析ソフトウェア（RS_Modification_and_Motif_Analysis）が出力する以下のファイルを、特に原核生物については DRA Analysis として登録することを推奨します:

- `motif_summary.csv`（少なくともこれは登録推奨）
- `modifications.csv`
- `modifications.gff`
- `motifs.gff`

→ [NCBI guidelines of PacBio Base Modification Files](https://www.ncbi.nlm.nih.gov/genbank/basemodificationfiles)

#### BioNano Whole Genome Map Files

BioNano データをアセンブルに使用した場合、以下を DRA Analysis として共有することが有益です（analysis type: `De Novo Assembly`、filetype: `tsv`）:

| ファイル種別 | 説明 |
|------------|------|
| bnx | ラベル位置測定結果と Quality score の生データ |
| EXP_REFINEFINAL1.cmap | de novo アセンブリに使用した CMAP（ラベル位置の測定データ） |
| coord ファイル | コンティグ座標と AGP ファイルを関連付け |
| XMAP | 二つのマップの比較結果 |
| SMAP | 検出された構造バリアント（SV）情報 |

→ [Bionano Genomics - Software and Data Analysis Support Materials](https://bionano.com/software-and-data-analysis-support-materials/)

---

## 5. DRA の更新（Update）

### 5-1. 公開予定日の変更

公開予定日は**最長で4年後まで**指定でき、繰り返し変更できます。Hold Date の [Change] から予定日変更ページへ移動します。即日公開する場合は "Release Now" を押下します（その日の深夜に公開処理が実施され、ftp にデータファイルが公開され数日以内に DDBJ Search にインデックスされます）。

### 5-2. 論文情報の追加

DRA データに関する論文情報は **BioProject に追加**します。[DRA/BioProject/BioSample 更新依頼フォーム](https://forms.gle/nJUyV5BGpoZhvJKw9)から依頼してください。

### 5-3. メタデータの更新

[Enter/Update metadata] からメタデータを編集し、メタデータ作成ツールの [Submit/Update DRA metadata] で内容を反映させます。編集できない項目はブロックされており、その場合は [DRA/BioProject/BioSample 更新依頼フォーム](https://forms.gle/nJUyV5BGpoZhvJKw9)から修正を依頼します。

### 5-4. データファイルの追加

**登録が完了した Submission にデータを追加することはできません。また、登録が完了した Run データの変更はできません。**

DRA では別の Submission で新しく Experiment-Run のセットを追加し、既存の BioProject や BioSample を参照することでデータを追加します。

| ケース | 手順 |
|--------|------|
| 新たにサンプルを追加する場合 | BioProject を共有し、新規登録で BioSample-Experiment-Run を追加する |
| 既存サンプルにデータを追加する場合 | BioProject と BioSample を共有し、新規登録で Experiment-Run を追加する |

追加データの BioProject 番号は同一ですが、Submission の DRA 番号は異なります。論文中には **BioProject 番号、もしくは Run 番号を引用**してください。

### 5-5. オブジェクトの削除

Experiment、Run や Analysis の削除は [DRA/BioProject/BioSample 更新依頼フォーム](https://forms.gle/nJUyV5BGpoZhvJKw9)から依頼してください。公開後、DRA Submission の一部の Experiment/Run を Suppress した場合、**それらを再公開することはできません**。

---

## 6. メタデータの例（Example）

### オブジェクトの構成例

| ケース | 説明 |
|--------|------|
| 最もシンプルなケース | BioProject - BioSample - Experiment - Run（1:1:1:1） |
| 三つの菌株の比較ゲノム解析（ペアエンド） | ペアリードファイルは同じ Run に含める |
| Biological replicate がある場合（ペアエンド） | Biological replicate は別々の BioSample として登録し、Experiment-Run を個別に作成 |
| 別々の Submission を一つの BioProject でまとめる場合 | 共通の BioProject アクセッション番号を使用 |
| Umbrella project で関連するプロジェクトをまとめる場合 | BioProject のアンブレラプロジェクト機能を利用 |

### メタデータ記入例

- [メタデータ tsv の記入例シート（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/1DTdUQ-WWOMjOA2eYQWmFYUB24hJysuwhvHLJoDFX4rc)
- [メタデータ登録用エクセル（GitHub）](https://github.com/ddbj/submission-excel2xml)

---

## 7. Analysis（Analysis ページ）

DRA Run に関連するデータで登録先データベースがないデータを Analysis に登録することができます。**Analysis は NCBI と EBI で共有していません**。登録先データベースは[登録ナビゲーション](https://www.ddbj.nig.ac.jp/submission-navigation.html)と[データベースと登録窓口一覧](https://www.ddbj.nig.ac.jp/submission.html)で確認してください。

Analysis に登録されたデータファイルは **MD5 チェックサム値の一致チェックのみ**実施されます。件数が多い場合は [Analysis エクセルファイル](https://www.ddbj.nig.ac.jp/dra/analysis.html)を使った登録方法を利用してください。

---

## 8. FAQ — DRA 関連

### Q. データファイルの validation エラーへの対処方法は？

エラーの種類と対処法は [FAQ: データファイルの validation エラーへの対処方法は？](https://www.ddbj.nig.ac.jp/faq/ja/data-validation-error) を参照してください。

---

### Q. BioProject/BioSample/実験データの連動公開の仕組みは？

| トリガー（公開されたデータ） | 連動公開される対象 |
|----------------------------|--------------------|
| BioProject の公開 | 引き起こさない |
| BioSample の公開 | `derived_from` 属性で引用されている BioSample |
| DDBJ、DRA、GEA、MetaboBank の公開 | リンクしている BioProject と BioSample |
| DDBJ の公開 | DBLINK で参照している DRA Run |
| GEA の公開 | 参照している DRA Run |
| DRA の公開 | DDBJ の連動公開を**引き起こさない** |

DRA ではメタデータとシークエンスデータは DRA 登録（submission）単位で公開されます。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/bp-bs-seq-release.html）

---

### Q. 投稿論文ではどのアクセッション番号を引用するべきか？

投稿する論文の規定に従ってください。基本的には登録データに対するアクセッション番号（例: DRA の Run アクセッション番号 `DRR`）の引用を推奨します。データ全体を言及する場合は **BioProject アクセッション番号**を引用します（論文中のデータと登録データが対応付けられるようにメタデータが記載されていることが必要）。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/cite-accession.html）

---

### Q. 投稿論文に DRA アクセッション番号を記載するときのフォーマットは？

投稿を予定している雑誌などの執筆規定に従ってください。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/citation-format.html）

---

### Q. 公開されている DRA データにアクセスする方法を教えてください

https/ftp/スパコンでアクセスできます。アクセッション番号に対するファイルパスは [DDBJ Search](https://ddbj.nig.ac.jp/search) で検索します。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/how-to-download-data.html）

---

### Q. DRA で公開されている fastq のリード数が生データのそれよりも少ないのは何故か？

DRA では NCBI SRA Toolkit に含まれている `fastq-dump` を使って SRA ファイルから fastq ファイルを作成しているためです。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/read-number-fastq.html）

---

### Q. NCBI/ENA SRA データの fastq ファイルが見当たりません

ストレージ容量節約のため、2019年12月11日以降、DRA では NCBI/ENA SRA データの fastq ファイル生成を停止しています（DRA 自身のデータの fastq 生成は継続）。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/fastq-not-found.html）

---

### Q. MD5 チェックサムとは何か？

DRA は MD5 チェックサム（32桁の英数字。例: `bf4ac50dcd58bd2860dfac48c7fca348`）をアップロードされたファイルが破損されていないかどうかのチェックに使っています。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/what-is-md5-checksum.html）

---

### Q. 多件数のメタデータを作成する良い方法は？

Experiment や Run オブジェクトが多件数の場合、メタデータ用エクセルと XML 生成プログラムを使ってエクセルから XML を生成し、Submission/Experiment/Run XML を D-way からアップロードすることで多件数を登録できます。詳細は[メタデータエクセルを使った登録方法](https://www.ddbj.nig.ac.jp/dra/submission.html#excel)を参照してください。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/how-to-create-many-metadata.html）

---

### Q. サンプルがバーコード配列によって区別されている場合のメタデータは？

バーコード配列で由来サンプルが区別されたデータファイルは登録前に分割し、由来サンプルごとに BioSample を作成します。各 BioSample には１つかそれ以上のユニークなデータファイルをリンクします。バーコード配列とサンプルの対応は、Experiment の [Library Construction Protocol](https://www.ddbj.nig.ac.jp/dra/metadata.html#Library_Construction_Protocol) にフリーテキストで記載します。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/metadata-of-multiplexed-samples.html）

---

### Q. DRA データファイルはどのように処理されますか？

アップロードされたデータファイルは Run 単位で処理されます。Run にリンクしている全てのデータファイルから SRA toolkit によりバイナリーの SRA ファイルが作成されます（この過程でリード長やリード名の書式などが全ての配列に渡ってチェックされます）。元々のリード名は Run 単位でユニークである必要があります。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/data-files-sra.html）

---

### Q. 査読者に非公開データを提供する方法は？

DRA の場合: アクセッション番号発行通知メールに添付されているアクセッション番号リストをメタデータの概要として提供する方法があります。シークエンスデータについては、登録者がアーカイブ済み fastq ファイルをダウンロードし、アクセス制限が利用できるサービスやサーバを利用して査読者と共有してください。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/reviewer-access.html）

---

## 9. 検索・ダウンロード（Search / Downloads）

### 検索

- **DDBJ Search**: https://ddbj.nig.ac.jp/search/

### ダウンロード

| 形式 | URL |
|------|-----|
| FASTQ | https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/ |
| SRA | https://ddbj.nig.ac.jp/public/ddbj_database/dra/sralite/ByExp/litesra/ |

---

## 10. リンク集

| ページ | URL |
|--------|-----|
| DRA ホーム | https://www.ddbj.nig.ac.jp/dra/index.html |
| DRA 登録（Submission） | https://www.ddbj.nig.ac.jp/dra/submission.html |
| メタデータ（Metadata） | https://www.ddbj.nig.ac.jp/dra/metadata.html |
| データファイル（Data Files） | https://www.ddbj.nig.ac.jp/dra/datafile.html |
| DRA の更新（Update） | https://www.ddbj.nig.ac.jp/dra/update.html |
| メタデータの例（Example） | https://www.ddbj.nig.ac.jp/dra/example.html |
| Analysis | https://www.ddbj.nig.ac.jp/dra/analysis.html |
| FAQ（DRA タグ） | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=dra |
| FAQ: 連動公開の仕組み | https://www.ddbj.nig.ac.jp/faq/ja/bp-bs-seq-release.html |
| FAQ: validation エラー対処 | https://www.ddbj.nig.ac.jp/faq/ja/data-validation-error.html |
| FAQ: アクセッション番号の引用 | https://www.ddbj.nig.ac.jp/faq/ja/cite-accession.html |
| FAQ: DRA データのダウンロード | https://www.ddbj.nig.ac.jp/faq/ja/how-to-download-data.html |
| FAQ: fastq リード数の差異 | https://www.ddbj.nig.ac.jp/faq/ja/read-number-fastq.html |
| FAQ: NCBI/ENA fastq | https://www.ddbj.nig.ac.jp/faq/ja/fastq-not-found.html |
| FAQ: MD5 チェックサム | https://www.ddbj.nig.ac.jp/faq/ja/what-is-md5-checksum.html |
| FAQ: 多件数メタデータ | https://www.ddbj.nig.ac.jp/faq/ja/how-to-create-many-metadata.html |
| FAQ: バーコード配列のメタデータ | https://www.ddbj.nig.ac.jp/faq/ja/metadata-of-multiplexed-samples.html |
| FAQ: DRA データ処理 | https://www.ddbj.nig.ac.jp/faq/ja/data-files-sra.html |
| FAQ: 査読者へのデータ提供 | https://www.ddbj.nig.ac.jp/faq/ja/reviewer-access.html |
| メタデータ tsv 記入例 | https://docs.google.com/spreadsheets/d/1DTdUQ-WWOMjOA2eYQWmFYUB24hJysuwhvHLJoDFX4rc |
| メタデータ登録用エクセル（GitHub） | https://github.com/ddbj/submission-excel2xml |
| メタデータ XML の例 | https://www.ddbj.nig.ac.jp/dra/example-xml.html |
| SN-リファレンス配列の対応表例 | https://www.ddbj.nig.ac.jp/assets/files/submission/SN-reference.txt |
| XML スキーマ（GitHub） | https://github.com/ddbj/pub/tree/master/docs/dra |
| MD5 チェックサム値の取得方法 | https://www.ddbj.nig.ac.jp/checksum.html |
| データのアップロード | https://www.ddbj.nig.ac.jp/upload.html |
| 認証用公開鍵の登録 | https://www.ddbj.nig.ac.jp/key.html#register-public-key |
| 検索 | https://ddbj.nig.ac.jp/search/ |
| ダウンロード（FASTQ） | https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/ |
| ダウンロード（SRA） | https://ddbj.nig.ac.jp/public/ddbj_database/dra/sralite/ByExp/litesra/ |
| D-way ログイン | https://ddbj.nig.ac.jp/D-way/ |
| DRA/BioProject/BioSample 更新依頼フォーム | https://forms.gle/nJUyV5BGpoZhvJKw9 |
| 外部参照申請フォーム | https://docs.google.com/forms/d/e/1FAIpQLSf1tMKEC_mhztGhtfKV0sLSGt1vY-I4Jb_RLQF64Li1d6_-Xg/viewform |
| DRA 担当者（メール） | trace@ddbj.nig.ac.jp |
| INSDC | https://www.ddbj.nig.ac.jp/insdc/index.html |
| NCBI SRA | https://www.ncbi.nlm.nih.gov/sra/ |
| EBI ENA | https://www.ebi.ac.uk/ena/browser/about/content |
| PacBio Base Modification Files（NCBI） | https://www.ncbi.nlm.nih.gov/genbank/basemodificationfiles |
| BioNano support materials | https://bionano.com/software-and-data-analysis-support-materials/ |
| 登録ナビゲーション | https://www.ddbj.nig.ac.jp/submission-navigation.html |
