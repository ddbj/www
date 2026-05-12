# DDBJ Mass Submission System (MSS) — 完全ガイド

> 出典: https://www.ddbj.nig.ac.jp/ddbj/mss.html  
>       https://www.ddbj.nig.ac.jp/ddbj/file-format.html  
>       https://www.ddbj.nig.ac.jp/ddbj/mss-tool.html  
>       https://www.ddbj.nig.ac.jp/ddbj/ume.html  
> 取得日: 2026年5月

---

## 目次

1. [MSS とは](#1-mss-とは)
2. [MSS を使うべきデータ](#2-mss-を使うべきデータ)
3. [登録の流れ](#3-登録の流れ)
4. [登録ファイルの作成](#4-登録ファイルの作成)
5. [アノテーションファイル詳細](#5-アノテーションファイル詳細)
6. [AGP ファイル（CON エントリ用）](#6-agp-ファイルcon-エントリ用)
7. [ファイルチェックツール（UME / Parser / transChecker）](#7-ファイルチェックツールume--parser--transChecker)
8. [アカウント作成とファイル転送](#8-アカウント作成とファイル転送)
9. [登録申し込み](#9-登録申し込み)
10. [DFAST（原核生物ゲノム登録）](#10-dfast原核生物ゲノム登録)
11. [データ公開](#11-データ公開)
12. [BioProject / BioSample ID の要否（対応表）](#12-bioproject--biosample-id-の要否対応表)
13. [リンク集](#13-リンク集)

---

## 1. MSS とは

**MSS（Mass Submission System）** は、比較的大規模な塩基配列データ（reads ではない）を**ファイル送付により登録するサービス**です。登録ファイル（配列ファイル＋アノテーションファイル）を作成し、MSS フォームからアップロードして登録します。

- MSS 申し込みフォーム: https://mss.ddbj.nig.ac.jp/
- シークエンサからの出力配列（reads）を登録する場合は [DRA](https://www.ddbj.nig.ac.jp/dra/index.html) を参照

ヒトを対象とした研究データを登録する場合は、[「ヒトを対象とした研究データの登録について」](https://www.ddbj.nig.ac.jp/policies.html#submission-of-human-data)を必ず事前に確認してください。

---

## 2. MSS を使うべきデータ

以下のいずれかに該当する場合、NSSS では対応できないため **MSS を使用**してください。

### a) 種別・量が以下に該当する配列データ

- データ種別: EST / TSA / HTC / GSS / HTG / WGS / TLS / TPA
- 1配列が **500 kb 以上**
- 1配列あたりの Feature が **30 以上**
- 登録する配列の総数が **100 を超える**

### b) レプリコン全長規模相当の配列データ

- 核ゲノム・染色体
- オルガネラゲノム
- ウイルス・ファージのゲノム / segment
- プラスミド

### c) DBLINK に BioProject / BioSample の記載が必要なデータ

- メタゲノム的解析・環境プロファイル解析全般
- 標的遺伝子を限定した配列データを相互に関連付ける場合
- 全長規模ゲノム配列と同一菌株由来の配列データ

---

## 3. 登録の流れ

```
登録ファイル作成（配列ファイル + アノテーションファイル）
    ↓
チェックツール（UME / Parser / transChecker）でファイル検証
    ↓
[DDBJ アカウントで https://mss.ddbj.nig.ac.jp/ にログイン]
MSS Form に記入・ファイルアップロード
    ↓
Mass-ID 発行・自動応答メール受信
    ↓
査定・質問・回答をメールでやりとり
    ↓
アクセッション番号取得
    ↓
データ公開 または 公開日まで hold
```

---

## 4. 登録ファイルの作成

### 4-1. 必要なファイル

| ファイル | 必須 | 説明 |
|---------|------|------|
| **配列ファイル** | 必須 | 全登録データの配列を FASTA 形式で記述したテキストファイル |
| **アノテーションファイル** | 必須 | 登録者・REFERENCE・Feature/Qualifier 等を記述したタブ区切りテキストファイル |
| AGP ファイル | CON エントリのみ | **【重要】CON データの新規登録は受け付けを終了しました** |

事前に BioProject ID・BioSample ID（locus_tag prefix 予約を含む）の取得が必要な場合は、[D-way](https://ddbj.nig.ac.jp/D-way/) で取得してください。

### 4-2. 配列ファイルの書式

配列ファイルは FASTA に類似した形式で記述したテキストファイルです。

```
>CLN01
ggacaggctgccgcaggagccaggccgggagcaggaagaggcttcgggggagccggagaa
ctgggccagatgcgcttcgtgggcgaagcctgaggaaaaagagagtgaggcaggagaatc
gcttgaaccccggaggcggaaccgcactccagcctgggcgacagagtgagactta
//
>CLN02
ctcacacagatgcgcgcacaccagtggttgtaacagaagcctgaggtgcgctcgtggtca
gaagagggcatgcgcttcagtcgtgggcgaagcctgaggaaaaaatagtcattcatataa
atttgaacacacctgctgtggctgtaactctgagatgtgctaaataaaccctctt
//
```

**配列ファイルの規則**:
- ベクター、リンカー、アダプターなどの技術的な配列（technical read）は必ず除去する
- 特殊なケースを除き、最初（5'端）と最後（3'端）の塩基が `n` にならないように末端の `n` は除去する
- エントリ名は行頭の `>` に続けて、**space・`"` (double-quote)・`=`・`|`・`>`・`[]`・`\` を含まない半角英数字 32 文字以内**で記載する
- エントリ名はエントリ毎にユニークな文字列を使用する
- 配列ファイルとアノテーションファイルの各エントリは、同一のエントリ名により対応づける（同じ順番で入力）
- 使用可能な塩基: `a, t, g, c` のほか、[各種核酸コード](https://www.ddbj.nig.ac.jp/ddbj/code.html#nucleotide-1) も使用可
- 終端子として配列情報終了フラグ `//` を必ず入力する
- 途中にスペース・空行を入れない

**ファイルの拡張子**: `.fasta`、`.seq.fa`、`.fa`、`.fna`、`.seq` のいずれか

### 4-3. サンプルアノテーションファイル（Google スプレッドシート）

| データ種別 | リンク |
|-----------|--------|
| 一般データ タンパク質コード領域 (CDS) | [CDS](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=505600445) |
| リボソーマル RNA (16S rRNA) | [16S_rRNA](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=1380986730) |
| ITS 領域 | [ITS](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=162924670) |
| マイクロサテライトマーカー | [Microsatellite marker](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=282901241) |
| ミトコンドリア | [mtDNA](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=545461927) |
| 環境サンプル (ENV) | [ENV](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=585575811) |
| complete genome sequence (Bacteria) | [complete_genome_BCT](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=862924679) |
| Finished genome sequence (Eukaryote) | [Finished_genome_eukaryote](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1575396051) |
| WGS without annotation | [WGS](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=382116224) |
| WGS with annotation | [WGS_annotation](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1134992157) |
| MAGs Complete genome | [MAGs_CompleteGenome](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=11301438) |
| MAGs Draft genome (WGS) | [MAGs_WGS](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1453206143) |
| GSS | [GSS](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=460036592) |
| HTG | [HTG](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=199977055) |
| TSA (assembled from EST) | [TSA](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=2130672006) |
| TSA (assembled from short reads, no annotation) | [TSA_SRA_assemble_NoANN](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=931177555) |
| TSA (assembled from short reads, with annotation) | [TSA_SRA_assemble_Ann](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1607251813) |
| EST | [EST](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1753678626) |
| TLS (Targeted Locus Study) | [TLS](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=580470761) |
| TPA (Third Party Data) | [TPA](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=123381270) |
| アノテーション:フラットファイル 対応表 | [ann2-ff](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=961825804) |

---

## 5. アノテーションファイル詳細

アノテーションファイルは全登録データの登録者・REFERENCE・Feature/Qualifier 情報等を記述した、**Entry・Feature・Location・Qualifier・Value の 5 列からなるタブ区切りテキストファイル**です。

**ファイルの拡張子**: `.ann`、`.annt.tsv`、`.ann.txt` のいずれか

配列ファイルとのペアは拡張子を除いたファイル名が同一であること。

```
例: mydata.fasta + mydata.ann （ペア）
```

### 5-1. アノテーションファイルの基本構造

| カラム | 説明 |
|--------|------|
| Entry | 配列ファイルのエントリ名（COMMON または個別エントリ名） |
| Feature | Biological feature（source, CDS 等）または DDBJ 登録用 feature（SUBMITTER, REFERENCE 等） |
| Location | Feature の配列上の位置情報（Biological feature と PRIMARY_CONTIG のみ記載） |
| Qualifier | 各行に 1 つ記載。Feature に依存 |
| Value | Qualifier に依存 |

- 空行が存在した時点でファイルの終わりと判断される（複数エントリを入力する場合は途中に空行を作らない）
- Entry 入力後、次の Entry が始まるまで Entry カラムには何も入力しない
- Feature 入力後、次の Feature が始まるまで Feature カラムには何も入力しない

### 5-2. COMMON エントリ

全エントリに共通な情報を入力するために `COMMON` というエントリ名を使用します。COMMON に記載された情報はすべてのエントリに反映されます。

**COMMON で使用するメタ表記**:

| 表記 | 用途 |
|------|------|
| `E`（メタ塩基番号） | Location の最後の塩基番号の代わりに使用（配列長が異なるエントリで共通の Feature を記載する場合） |
| `@@[entry]@@` | エントリ名に置換（clone, submitter_seqid, note, ff_definition の Value に使用可能） |
| `@@[organism]@@` | organism qualifier の Value に置換 |
| `@@[clone]@@` | clone qualifier の Value に置換 |

例: COMMON に rRNA feature を記載（全エントリに共通の 16S rRNA 部分配列）
```
COMMON  rRNA  <1..>E  product  16S rRNA
```

例: COMMON に source feature を記載（WGS / EST / TSA 等）
```
COMMON  source  1..E  organism          Homo sapiens
                      mol_type          genomic DNA
                      submitter_seqid   @@[entry]@@
                      ff_definition     @@[organism]@@ DNA, @@[submitter_seqid]@@
```

### 5-3. SUBMITTER（必須）

| Qualifier | 説明 | 使用可能文字 | 文字上限 |
|-----------|------|------------|---------|
| ab_name | 登録者名（複数可） | 英、`.`、`,`、`-`、`'` | 64 |
| contact | コンタクトパーソン（フルネーム） | 英、`.`、`,`、`-`、`'`、スペース | first(64)/middle(128)/last(64) |
| consrtm | コンソーシアム名 | 英数、スペース、`-`、`'`、`.`、`_`、`,`、`()#&@/;:+*` | 255 |
| email | メールアドレス | 英数、`@`、`.`、`-`、`_` | 64 |
| url | URL | スペース以外 | 255 |
| institute, department | 所属機関・部署 | バックスラッシュ・バッククォート以外 | 255 |
| country, state | 国・州 | 英数、スペース、`-`、`'`、`.`、`_`、`,`、`()#&@/;:+*` | 32 |
| city | 市区町村 | 英数、スペース、`-`、`'`、`.`、`_`、`,`、`()#&@/;:+*` | 64 |
| street | 番地 | 英数、スペース、`-`、`'`、`.`、`_`、`,`、`()#&@/;:+*` | 255 |
| zip | 郵便番号 | 英数、`-` | 16 |

**ab_name の書式**: `Last name[comma]First name 頭文字[period]Middle name 頭文字[period]`  
例: `Miyashita,Y.`、`Robertson,G.R.`

SUBMITTER は COMMON エントリに入力するのが一般的。COMMON に記載した場合、他のエントリでは使用不可。

### 5-4. REFERENCE（必須）

各エントリに最低１つ必須。

| Qualifier | 説明 | Value |
|-----------|------|-------|
| title | 論文のタイトル | バックスラッシュ・バッククォート以外（255文字） |
| ab_name | 著者名（複数可） | 英、`.`、`,`、`-`、`'`（64文字） |
| consrtm | コンソーシアム名 | （255文字） |
| status | 論文の状態 | `Unpublished`、`In press`、`Published` のいずれか |
| year | 発行年（西暦4桁） | 数字（Unpublished の場合は不要） |
| journal | 雑誌名（PubMed または ISO 準拠の略称） | （128文字） |
| volume | 巻 | 英数、`-`（8文字） |
| start_page | 開始ページ | 英数、`-`（8文字） |
| end_page | 終了ページ | 英数、`-`（8文字） |

**書式の注意事項**:
- status が "In Press" の場合: journal も必須
- status が "Published" の場合: journal、volume、start_page、end_page も必須
- statusがUnpublishedの場合: yearの記載は不要
- 投稿予定がない場合も "Unpublished" として REFERENCE を入力する
- 複数 REFERENCE の場合: 主論文を先頭に、参考文献はそれ以降に記載

### 5-5. DATE（公開予定日）

```
COMMON  DATE    hold_date  20231125
```

- **必ず COMMON エントリに入力**
- 公開予定日が異なる場合はファイルを公開予定日毎に分けて作成する
- 形式: 年月日の順、半角数字 8 桁（例: `20231125`）
- ハイフン（`-`）やスラッシュ（`/`）はエラーになる
- 即日公開を希望する場合は DATE を入力しない

### 5-6. COMMENT / ST_COMMENT

**一般 COMMENT**:
- フリーテキストで記載可能
- フラットファイルでは 60 文字（スペース含む）で自動改行
- Qualifier: `line` で改行位置を指定可能
- 内容の異なる複数 COMMENT は COMMENT Feature をそれぞれ作成する

**ST_COMMENT（Structured COMMENT）**:
- `tagset_id` に COMMENT のタイトルを指定する
- Genome Project の場合: `tagset_id = Genome-Assembly-Data`
- Transcriptome Project の場合: `tagset_id = Assembly-Data`
- ウイルスゲノムの登録でも ST_COMMENT の記載が必要

**Genome-Assembly-Data の必須 Qualifier**:

| Qualifier | 説明 | 備考 |
|-----------|------|------|
| Assembly Method | アセンブルに使用したソフトウェア名とバージョン | バージョン番号を `" v. "` 直後に記載（例: `Velvet v. 2.0`） |
| Assembly Name | ゲノムアセンブリの名称・バージョン | 真核生物の場合は必須。推奨書式: `[種名] + [version]`（例: `Btau_4.0`） |
| Genome Coverage | ゲノム配列決定の深度（例: `125x`） | 不明な場合は `Unknown` と記載 |
| Sequencing Technology | 使用したシークエンサー | 複数の場合は `; `（セミコロン+スペース）で区切る |

**Assembly-Data（TSA）の必須 Qualifier**:

| Qualifier | 説明 |
|-----------|------|
| Assembly Method | アセンブルソフトウェアとバージョン |
| Assembly Name | アセンブリの名称・バージョン（任意） |
| Coverage | 配列決定の深度（不明な場合は `Unknown`） |
| Sequencing Technology | 使用したシークエンサー |

### 5-7. DIVISION

登録データが CON / ENV / EST / GSS / HTC / HTG / STS / SYN / TSA のいずれかに該当することを示します。

```
COMMON  DIVISION    division  EST
```

- Qualifier: `division` の Value に 3 文字大文字で入力（例: `EST`、`WGS`）
- 原則として COMMON エントリに入力

### 5-8. DATATYPE

登録データが WGS / TLS / TPA / TPA-WGS / TPA-TSA / TPA-TLS のいずれかに該当することを示します。

```
COMMON  DATATYPE    type  WGS
```

- Qualifier: `type` の Value に対応する種別を入力
- COMMON エントリに入力

### 5-9. KEYWORD

データ種別に基づいた情報、実験手法などを規定値で記載します。

| データ種別 | keyword の Value（必須） |
|-----------|------------------------|
| WGS | `WGS` + 完成度キーワード（下記参照） |
| ENV | `ENV` |
| EST | `EST` + `5'-end sequence (5'-EST)` / `3'-end sequence (3'-EST)` / `unspecified EST` |
| HTC | `HTC`（その他は登録毎に連絡） |
| HTG | `HTG` + フェーズキーワード（下記参照） |
| GSS | `GSS` |
| STS | `STS` |
| TPA | `TPA`、`Third Party Data` |
| TSA | `TSA`、`Transcriptome Shotgun Assembly` |
| TLS | `TLS`、`Targeted Locus Study` |

**WGS の完成度キーワード**（KEYWORD に追加）:
- `STANDARD_DRAFT`
- `HIGH_QUALITY_DRAFT`
- `IMPROVED_HIGH_QUALITY_DRAFT`
- `NON_CONTIGUOUS_FINISHED`

**HTG のフェーズキーワード**:
- 向きが不明な piece を含む場合: `HTGS_PHASE1`、`HTGS_DRAFT`
- 向きが不明な piece を含まない場合: `HTGS_DRAFT`

**3' EST の追加 COMMENT**（COMMENT に記載必須）:
- anti-sense 鎖: `3'-EST sequences are presented as anti-sense strand.`
- sense 鎖: `3'-EST sequences are presented as sense strand.`

### 5-10. DBLINK

BioProject / BioSample / Sequence Read Archive へのリンクを記載します。

```
COMMON  DBLINK    project                PRJDB12345
                  biosample              SAMD90000000
                  sequence read archive  DRR999000
                  sequence read archive  DRR999001
```

| Qualifier | Value |
|-----------|-------|
| project | BioProject アクセッション番号（例: `PRJDB12345`） |
| biosample | BioSample アクセッション番号（例: `SAMD90000000`） |
| sequence read archive | DRA Run アクセッション番号（複数可） |

### 5-11. locus_tag

アノテーション付きゲノム登録では、CDS・rRNA・tRNA 等の Biological feature に [locus_tag](https://www.ddbj.nig.ac.jp/ddbj/locus_tag.html) を付加することを推奨。locus_tag prefix は事前に BioSample で取得してください。

### 5-12. source: ff_definition（DDBJ 登録専用 Qualifier）

DDBJ フラットファイルの DEFINITION 行に反映される内容を記述します。1 エントリに 1 つ記載。

**データ種別毎の記述フォーマット**:

| データ種別 | ff_definition 記述フォーマット |
|-----------|-------------------------------|
| WGS | `@@[organism]@@ @@[strain]@@ DNA, @@[submitter_seqid]@@, [other information]` |
| HTG (unfinished) | `@@[organism]@@ DNA, chromosome @@[map]@@, [BAC/YAC] clone: @@[clone]@@, *** SEQUENCING IN PROGRESS ***` |
| HTG (finished) | `@@[organism]@@ DNA, chromosome @@[map]@@, [BAC/YAC] clone: @@[clone]@@` |
| EST | `@@[organism]@@ mRNA, clone: @@[clone]@@, [other information]` |
| EST | `@@[organism]@@ cDNA, clone: @@[clone]@@, [other information]` |
| GSS | `@@[organism]@@ DNA, clone: @@[clone]@@, [other information]` |
| STS | `@@[organism]@@ DNA, @@[map]@@, [marker name], sequence tagged site` |

### 5-13. assembly_gap（Sequencing Gap Region）

アセンブル途上の sequencing gap を示すために使用します（配列ファイル中の `n` に対応）。

```
  assembly_gap  101..200  estimated_length  unknown
                          gap_type          within scaffold
                          linkage_evidence  paired-ends
```

**estimated_length の Value**:
- 長さが不明: `unknown`（CON 以外の transcriptome エントリでは使用不可）
- 長さが既知: `known`

**gap_type と linkage の組み合わせ（主なもの）**:

| gap_type | linkage | 解説 |
|---------|---------|------|
| scaffold | yes | scaffold 内の gap。前後の配列が連鎖する証拠あり |
| repeat | yes | repeat 領域の gap。連鎖の証拠あり |
| contig | no | scaffold 間の gap。連鎖の証拠なし |
| repeat | no | repeat 領域の gap。連鎖の証拠なし |
| centromere/short_arm/heterochromatin/telomere | no | 生物学的 gap |

**禁止の組み合わせ**: `contig + yes`、`scaffold + no`、`centromere 等 + yes`

assembly_gap では location に `join`、`order`、`complement` は使用不可。

### 5-14. TOPOLOGY

登録塩基配列全体が環状（最初と最後の塩基が実際に連続）の場合に記載します。

```
  TOPOLOGY    circular
```

フラットファイルの LOCUS 行に反映されます。

### 5-15. TPA/TSA: PRIMARY_CONTIG

TPA/TSA データでプライマリーエントリからの配列引用情報を記載します。

```
  PRIMARY_CONTIG  1..438  entry          ZZ000010.1
                          primary_bases  1..438
  PRIMARY_CONTIG  377..696  entry        ZZ000011.1
                            primary_bases  1..320
                            complement
```

| Qualifier | 説明 |
|-----------|------|
| entry | 引用するエントリのアクセッション番号（バージョン番号付き）。未公開の場合はバージョン番号を `0` とする |
| primary_bases | 引用したプライマリーシークエンスの位置情報（例: `1..500`） |
| complement | 引用するエントリが相補鎖の場合に記載 |

PRIMARY_CONTIG では location に `join`、`order`、`complement` は使用不可。同じ entry を引用する場合も location 単位で PRIMARY_CONTIG を複数記述してください。

### 5-16. Biological Feature の書式

| 規則 | 詳細 |
|------|------|
| `/` の省略 | Feature Table Definition では Qualifier の前に `/` が記述されるが、アノテーションファイルでは `/` を入力しない |
| source feature | 各エントリに最低１つ必須。`organism` と `mol_type` も必須 |
| CDS feature | 必ず UME または transChecker でアミノ酸翻訳チェックを実行する |
| Location | [Location の記述法](https://www.ddbj.nig.ac.jp/ddbj/location.html) を参照 |

参照資料:
- [Feature Table Definition](https://www.ddbj.nig.ac.jp/ddbj/feature-table.html)
- [Feature/Qualifier 対応一覧表](https://docs.google.com/spreadsheets/d/1qosakEKo-y9JjwUO_OFcmGCUfssxhbFAm5NXUAnT3eM/edit?gid=0#gid=0)

---

## 6. AGP ファイル（CON エントリ用）

> **【重要】CON データの新規登録は受け付けを終了しました。**

AGP ファイルは CON エントリを構築する際のピースエントリの順序・種類・方向等が記載された **9 列からなるタブ区切りテキストファイル**です。

```
#1         2     3     4  5  6               7    8     9
scaffold1  1     1345  1  W  BZZZ01123456.1  1    1345  +
scaffold1  1346  2845  2  N  1500            scaffold  yes  align_genus
scaffold1  2846  4301  3  W  BZZZ01123457.1  1    1456  +
```

### 各カラムの説明（カラム 1〜5）

| カラム | 内容 | 注意事項 |
|--------|------|---------|
| 1 (object) | CON エントリ名（chromosome, scaffold, contig 等の固有名称）。アノテーションファイルのエントリ名と対応 | |
| 2 (object_beg) | CON エントリ内の component/gap 開始位置 | |
| 3 (object_end) | CON エントリ内の component/gap 終了位置 | |
| 4 (part_number) | component/gap の順序 | |
| 5 (component_type) | component の種類: `A`, `D`, `F`, `G`, `O`, `P`, `W`, `N`, `U` のいずれか | |

**component_type の値**:

| 値 | 説明 |
|----|------|
| A | Active Finishing |
| D | Draft HTG（HTG phase1, phase2 または不明な draft） |
| F | Finished HTG（phase3） |
| G | Whole Genome Finishing |
| O | Other sequence（WGS/HTG に該当しないもの） |
| P | Pre Draft |
| W | WGS contig（ピースエントリが WGS エントリの場合） |
| N | サイズが特定・予測されている gap |
| U | サイズ不明の gap（100 塩基とする） |

### カラム 6〜9（カラム 5 が N/U 以外の場合）

| カラム | 内容 |
|--------|------|
| 6 (component_id) | ピースエントリのアクセッション番号+バージョン番号、またはエントリ名 |
| 7 (component_beg) | component の開始位置 |
| 8 (component_end) | component の終了位置 |
| 9 (orientation) | `+`（順鎖）、`-`（相補鎖）、`?`（不明）、`0`（不明/deprecated）、`na`（irrelevant）。`?`、`0`、`na` は順鎖として扱う |

### gap_type と linkage の組み合わせ（カラム 5 が N/U の場合）

| gap_type | linkage | 解説 |
|---------|---------|------|
| scaffold | yes | scaffold 内の gap（連鎖証拠あり） |
| repeat | yes または no | repeat 領域の gap |
| contig | no | scaffold 間の gap（連鎖証拠なし） |
| centromere/short_arm/heterochromatin/telomere | no | 生物学的 gap |

**禁止の組み合わせ**: `contig + yes`、`scaffold + no`、`centromere 等 + yes`

- サイズ不明の gap: `component_type = U`、`gap_length = 100`（一律 100 個の `n`）
- AGP ファイルのチェックは UME の AGPParser 機能を使用

---

## 7. ファイルチェックツール（UME / Parser / transChecker）

DDBJ に登録ファイルを送る前に**必ずチェックツールを使用して検証**してください。

### 7-1. 実行環境

| 要件 | 詳細 |
|------|------|
| ハードディスク | インストールのための 20 MB 以上 |
| RAM | 512 MB 以上（推奨 1 GB 以上） |
| Java | Java 8 以降 |
| 動作確認 OS | Windows 10 / Ubuntu 18.04 LTS / macOS Catalina |

### 7-2. ダウンロード

ダウンロード先: https://ddbj.nig.ac.jp/public/ddbj-cib/MSS

| ツール | OS | バージョン | 更新日 | 備考 |
|--------|-----|-----------|------|------|
| UME_win_V1.66.zip | Windows | V1.66 | 2026/01/07 | Parser, transChecker 付属 |
| UME_unix_V1.66.zip | Unix/macOS | V1.66 | 2026/01/07 | Parser, transChecker 付属 |
| Parser_V6.80.tar.gz | Unix/macOS | V6.80 | 2026/01/07 | UME を使用する場合は不要 |
| transChecker_V2.26.tar.gz | Unix/macOS | V2.26 | 2024/12/12 | UME を使用する場合は不要 |

### 7-3. UME（Utilities for MSS file Error check）

UME は配列ファイルとアノテーションファイルの**フォーマットチェック**と **CDS feature のアミノ酸翻訳チェック**を行う **GUI ツール**です。Parser と transChecker を内包しています。

**起動方法**:
- Windows/macOS: UME アイコンをダブルクリック
- macOS（ダブルクリックで起動できない場合）:
  ```bash
  $ cd UME  # UME を展開したディレクトリに移動
  $ ./UME.sh
  ```

**初期設定**: 起動後、メニューの Config からメモリ割り当てサイズを調整（デフォルト 512 MB）。

**フォルダ構成**:

| フォルダ / ファイル | 説明 |
|-------------------|------|
| lib フォルダ | ライブラリファイル。変更・移動不可 |
| resource フォルダ | リソースファイル。変更・移動不可 |
| sample フォルダ | DDBJ 登録用のサンプルファイル |
| license ファイル | 使用許諾テキスト |

**UME の機能**:

| 機能 | 説明 |
|------|------|
| **Parser**（Check タブ） | 配列ファイルとアノテーションファイルの構文・フォーマットチェック。エラーのない状態にしてから送付すること |
| **transChecker**（Check タブ） | CDS feature のアミノ酸翻訳チェック。Parser でエラーがない状態で実行する |
| **FFconv**（Check タブ） | 配列ファイルとアノテーションファイルから擬似フラットファイルを作成して確認できる |
| **AGPParser**（Contig タブ） | AGP ファイルのフォーマットチェック（CON エントリ登録用）。**CON の新規登録は受付終了** |

**transChecker の出力書式**（翻訳アミノ酸配列の保存形式）:
- FASTA-like format（`Translate in FASTA format`）
- 塩基配列とのアラインメント（`Translate in alignment with nucleotide sequence`）

**macOS の注意事項**: ファイル名やフォルダ名にマルチバイト文字（日本語等）が含まれると正常に動作しないことがある。ファイル名とフォルダ名はマルチバイト文字を使用しないこと。

### 7-4. Parser（コマンドライン版）

配列ファイルとアノテーションファイルの構文・フォーマットをコマンドラインでチェックします。UME を使用する場合は不要です。

エラーメッセージ: [Parser エラーメッセージ](https://www.ddbj.nig.ac.jp/ddbj/validator.html#Parser)

### 7-5. transChecker（コマンドライン版）

CDS feature のアミノ酸翻訳をコマンドラインでチェックします。UME を使用する場合は不要です。**Parser でエラーがない状態でのみ実行可能**。

エラーメッセージ: [transChecker エラーメッセージ](https://www.ddbj.nig.ac.jp/ddbj/validator.html#transChecker)

### 7-6. 使用許諾

DDBJ が提供するチェックツールを使用する前に[使用許諾](https://www.ddbj.nig.ac.jp/ddbj/mss-tool.html#license)を必ず確認してください。

---

## 8. アカウント作成とファイル転送

1. [DDBJ アカウント](https://www.ddbj.nig.ac.jp/ddbj-account.html)を取得する
2. SCP/SFTP 転送を使用する場合は[アカウントへの公開鍵の登録](https://www.ddbj.nig.ac.jp/key.html#register-public-key)が必要

### ファイル送付方法（MSS Form から選択）

| 方法 | 目安 |
|------|------|
| ブラウザ上でアップロード | 通常の場合 |
| DFAST の job ID を指定 | DFAST で登録ファイルを作成済みの場合 |
| SFTP サーバーに転送済みのファイルを送付 | **合計 10 GB を超える場合**に推奨 |

### SFTP でのファイル転送

- 対象ディレクトリ: `/mass`
- MSS Application Form は `mass` ディレクトリ配下のサブディレクトリからもファイルを読み込む
- ファイル名の制約: スペース・バッククォート・アングルブラケット `<>`・丸括弧 `()` 以外の半角英数記号（マルチバイト文字不可）
- 拡張子の制約: アノテーションファイルは `.ann`、`.annt.tsv`、`.ann.txt`、配列ファイルは `.fasta`、`.seq.fa`、`.fa`、`.fna`、`.seq`
- ペアのファイルは拡張子を除いたファイル名が同一であること

**対応圧縮形式**（圧縮ファイルからの読み込みに対応）:
`gzip`、`bzip2`、`xz`、`lzip`、`lzma`、`lzop`、`zstd`、`compress`

---

## 9. 登録申し込み

MSS 申し込みフォーム: https://mss.ddbj.nig.ac.jp/

### 同一 Submission で申し込める条件

以下の 3 条件が**すべて同一**であること:
1. コンタクトパーソンが同一
2. データ種別が同一
3. 公開予定日が同一

### 同一 Submission で申し込める例

| データ | 選択種別 |
|--------|---------|
| バクテリア 20 菌株のドラフトゲノム | WGS |
| Finished level genome 3 個体の真核生物ゲノム | GNM |
| 生物種ごとにアセンブルした転写物配列（複数生物種） | TSA |

### 複数回に分けて申し込みが必要な例

| ケース | 回数 |
|--------|------|
| バクテリア菌株の chromosome ドラフトゲノム + プラスミド全長 | 2回（WGS + MISC） |
| 真核生物の chromosome ドラフトゲノム + オルガネラゲノム全長 | 2回（WGS + MISC） |
| 真核生物の chromosome ドラフトゲノム + アセンブルした大規模転写物配列 | 2回（WGS + TSA） |

### Mass-ID

申し込み完了後、当該登録に対して **Mass-ID** が発行されます（例: `NSUB000001`）。DDBJ からのメールヘッダーには `[DDBJ:NSUB000001]` が表示されます。**返信の際は Mass-ID をメールヘッダーに維持してください**。

---

## 10. DFAST（原核生物ゲノム登録）

**DFAST（DDBJ Fast Annotation and Submission Tool）**: https://dfast.ddbj.nig.ac.jp/

原核生物ゲノムの高速自動アノテーションパイプライン。DDBJ に直接登録可能なアノテーションファイルを生成できます。**原核生物ゲノムを Annotated/Assembled Sequences database に登録する際には DFAST の利用を強く推奨**しています。

### DFAST を使った登録手順

1. 事前に BioProject・BioSample・locus_tag prefix（Biological feature を記載する場合）を登録する
2. DDBJ アカウントで DFAST にログイン（ログインなしでも解析は可能。後から job ID で取り込むことができる）
3. ジョブ投入画面で塩基配列ファイルをアップロード → 解析開始 → job ID が発行される
4. job 終了後、"DDBJ submission" タブをクリック
5. BioProject ID・BioSample ID・locus_tag prefix・その他のメタ情報を入力 → MSS 登録ファイルが作成される
6. "Format Check" で書式チェックを実行
7. 以下のいずれかの方法で MSS 申し込みを行う:
   - **DFAST の job ID で submit**: job ID（例: `########-####-####-####-############`）をコピーして MSS フォームに入力
   - **DFAST からダウンロードしたファイルで submit**: 履歴管理画面で job を選択 → ファイル形式 "MSS" を選択 → DOWNLOAD → MSS フォームからファイルをアップロード

### DFAST の job 履歴管理

DDBJ アカウントでログインすると[解析（job）の履歴管理](https://dfast.ddbj.nig.ac.jp/help_login)ができます。

---

## 11. データ公開

- 即日公開を希望した場合: 可能な限り速やかに公開
- 公開予定日（hold_date）を指定した場合: [公開原則](https://www.ddbj.nig.ac.jp/data-release-policy.html)に基づいて公開
- 登録された塩基配列データは、アノテーションファイルと配列ファイルの内容に基づいて変換され、**フラットファイル形式として公開**される
- [アノテーションファイルとフラットファイルの対応関係](https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=961825804) を参照

---

## 12. BioProject / BioSample ID の要否（対応表）

### Genome

| 登録種別 | BioProject | BioSample | Biological feature のアノテーション | locus_tag | DRA | 選択種別 |
|---------|:----------:|:--------:|:-----------------------------------:|:---------:|:---:|---------|
| Draft genome with annotation | M | M | M | M | OPT | WGS |
| Draft genome without annotation | M | M | NR | NR | OPT | WGS |
| Finished level genome sequence, non-WGS | M | M | M | M | OPT | GNM |
| MAG with annotation | M | M | M | M | M | MAG |
| MAG without annotation | M | M | NR | NR | M | MAG |
| SAG with annotation | M | M | M | M | OPT | SAG |
| SAG without annotation | M | M | NR | NR | OPT | SAG |
| HTG | M | M | OPT | NR | OPT | HTG |
| TSA | M | M | OPT | NR | M | TSA |
| HTC | M | M | OPT | NR | OPT | HTC |
| EST | M | M | NR | NR | OPT | EST |
| ウイルス / ファージゲノム | NR | NR | OPT | NR | OPT | MISC |
| プラスミドゲノムのみ | NR | NR | OPT | NR | OPT | MISC |
| オルガネラゲノムのみ | NR | NR | OPT | NR | OPT | MISC |
| Finished Level Genome + プラスミド | M | M | M | M | OPT | GNM, MISC（各 submission） |
| Finished Level Genome + オルガネラ | M | M | M | M | OPT | GNM, MISC（各 submission） |

### Transcriptome

| 登録種別 | BioProject | BioSample | Biological feature | locus_tag | DRA | 選択種別 |
|---------|:----------:|:--------:|:------------------:|:---------:|:---:|---------|
| TSA | M | M | OPT | NR | M | TSA |
| HTC | M | M | OPT | NR | OPT | HTC |
| EST | M | M | NR | NR | OPT | EST |

### Targeted Locus Study

| 登録種別 | BioProject | BioSample | Biological feature | locus_tag | DRA | 選択種別 |
|---------|:----------:|:--------:|:------------------:|:---------:|:---:|---------|
| TLS | M | M | M | NR | OPT | TLS |

**凡例**: M = Mandatory（必須）、NR = Not required（不要）、OPT = Optional（任意）

### MSS 登録時に選択可能な Data type

| Type | 説明 |
|------|------|
| WGS | WGS（ドラフトゲノム）で MAG・SAG 以外 |
| GNM | WGS でない Finished Level Genomic Sequences で MAG・SAG 以外 |
| MAG | Metagenome-Assembled Genome |
| SAG | Single Amplified Genome |
| TLS | Targeted Locus Study |
| HTG | High Throughput Genomic Sequences |
| TSA | Transcriptome Shotgun Assembly |
| HTC | High Throughput cDNA Sequences |
| EST | Expressed Sequence Tags |
| MISC | 上記のいずれにも該当しない配列 |
| ASK | DDBJ Curator に判断を仰ぐ場合 |

---

## 13. リンク集

| ページ | URL |
|--------|-----|
| MSS 申し込みフォーム | https://mss.ddbj.nig.ac.jp/ |
| MSS 概要ページ | https://www.ddbj.nig.ac.jp/ddbj/mss.html |
| 登録ファイル形式 | https://www.ddbj.nig.ac.jp/ddbj/file-format.html |
| MSS チェックツール（ダウンロード） | https://www.ddbj.nig.ac.jp/ddbj/mss-tool.html |
| ツールダウンロード（FTP） | https://ddbj.nig.ac.jp/public/ddbj-cib/MSS |
| UME ユーザーマニュアル | https://www.ddbj.nig.ac.jp/ddbj/ume.html |
| Parser ユーザーマニュアル | https://www.ddbj.nig.ac.jp/ddbj/parser.html |
| transChecker ユーザーマニュアル | https://www.ddbj.nig.ac.jp/ddbj/transchecker.html |
| Validator エラーメッセージ | https://www.ddbj.nig.ac.jp/ddbj/validator.html |
| Parser エラーメッセージ | https://www.ddbj.nig.ac.jp/ddbj/validator.html#Parser |
| transChecker エラーメッセージ | https://www.ddbj.nig.ac.jp/ddbj/validator.html#transChecker |
| AGPParser エラーメッセージ | https://www.ddbj.nig.ac.jp/ddbj/validator.html#AGP_Parser |
| サンプルアノテーションファイル（スプレッドシート） | https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/ |
| Feature/Qualifier 対応一覧表 | https://docs.google.com/spreadsheets/d/1qosakEKo-y9JjwUO_OFcmGCUfssxhbFAm5NXUAnT3eM/ |
| DFAST（原核生物ゲノムアノテーション） | https://dfast.ddbj.nig.ac.jp/ |
| DFAST job 履歴管理ヘルプ | https://dfast.ddbj.nig.ac.jp/help_login |
| Feature Table Definition | https://www.ddbj.nig.ac.jp/ddbj/feature-table.html |
| Feature key の定義 | https://www.ddbj.nig.ac.jp/ddbj/features.html |
| Qualifier key の定義 | https://www.ddbj.nig.ac.jp/ddbj/qualifiers.html |
| Location の記述法 | https://www.ddbj.nig.ac.jp/ddbj/location.html |
| タンパク質コード配列（CDS） | https://www.ddbj.nig.ac.jp/ddbj/cds.html |
| locus_tag | https://www.ddbj.nig.ac.jp/ddbj/locus_tag.html |
| 塩基配列について | https://www.ddbj.nig.ac.jp/ddbj/sequence.html |
| Organism qualifier の生物名 | https://www.ddbj.nig.ac.jp/ddbj/organism.html |
| 配列データ記載例 | https://www.ddbj.nig.ac.jp/ddbj/example.html |
| 塩基配列の登録（登録前の説明） | https://www.ddbj.nig.ac.jp/ddbj/submission.html |
| 登録データの修正・更新 | https://www.ddbj.nig.ac.jp/ddbj/update.html |
| BioProject 登録 | https://www.ddbj.nig.ac.jp/bioproject/submission.html |
| BioSample 登録 | https://www.ddbj.nig.ac.jp/biosample/submission.html |
| DRA | https://www.ddbj.nig.ac.jp/dra/index.html |
| D-way（BioProject/BioSample 登録） | https://ddbj.nig.ac.jp/D-way/ |
| データのアップロード | https://www.ddbj.nig.ac.jp/upload.html |
| DDBJ アカウント取得 | https://www.ddbj.nig.ac.jp/ddbj-account.html |
| 公開鍵の登録 | https://www.ddbj.nig.ac.jp/key.html#register-public-key |
| データ公開原則 | https://www.ddbj.nig.ac.jp/data-release-policy.html |
| INSDC methodological keywords | https://insdc.org/submitting-standards/methodological-keywords/ |
| お問い合わせフォーム | https://forms.gle/zV4cYCnRCefd4FSz9 |
| DDBJ 更新依頼フォーム | https://forms.gle/mcQaJshvAKRdggz16 |
