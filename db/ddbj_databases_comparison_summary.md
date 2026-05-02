# DDBJ データベース 登録ガイド — ページ構成 共通要素・差異サマリー

> 対象: BioProject / BioSample / DRA / GEA / JGA / MetaboBank / TogoVar-repository  
> 作成日: 2026年5月

---

## 1. 全体構成マップ

| セクション | BioProject | BioSample | DRA | GEA | JGA | MetaboBank | TogoVar |
|-----------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Home（概要） | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Submission（登録方法） | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Metadata（メタデータ詳細） | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Data File（データファイル） | — | — | ✅ | ✅ | ✅ | ✅ | ✅ |
| Validation（検証ルール） | — | ✅ | ✅ | ✅ | — | ✅ | ✅ |
| Example（記入例） | — | — | ✅ | — | — | ✅ | — |
| Update（更新手順） | — | — | ✅ | — | — | — | — |
| Overview（概念説明） | — | ✅ | — | — | — | — | — |
| Reviewer Access | — | — | — | ✅ | — | ✅（簡易） | — |
| Array Design（ADF） | — | — | — | ✅ | — | — | — |
| Data Matrix | — | — | — | ✅ | — | — | — |
| mzB format | — | — | — | — | — | ✅ | — |
| How to access data（利用手順） | — | — | — | — | ✅ | — | — |
| Groups（グループ管理） | — | — | — | — | ✅ | — | — |
| FAQ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 検索・ダウンロード | ✅ | ✅ | ✅ | — | — | — | ✅ |
| リンク集 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 2. 全データベース共通要素

### 2-1. 共通するページセクション

すべてのデータベースで以下のセクションが存在します：

- **Home（概要）**: データベースの目的・特徴・主要リンクの説明
- **Submission（登録方法）**: 登録の流れ・アカウント取得・アクセッション番号・公開・更新
- **Metadata（メタデータ詳細）**: メタデータの定義・項目説明
- **FAQ**: よくある質問と回答
- **リンク集**: 関連 URL の一覧

### 2-2. 全データベースに共通する FAQ 項目

| FAQ | 全 DB 共通？ | 備考 |
|----|:-----------:|------|
| データ公開の依頼方法は？ | ✅ 全 DB | 同一 FAQ ページを参照 |
| 連動公開の仕組みは？ | ✅ 全 DB | 同一 FAQ ページを参照 |
| 登録の更新方法は？ | ✅ 全 DB | 問い合わせ先が DB ごとに異なる |
| 論文情報の追加方法は？ | ✅ 多数 | BioProject に集約するものが多い |
| アクセッション番号の引用方法は？ | ✅ 多数 | — |

### 2-3. 共通する登録フロー要素

| 要素 | 説明 |
|------|------|
| DDBJ アカウント取得 | 全 DB で前提条件 |
| 公開鍵の登録 | ファイルアップロードが必要な全 DB で必須 |
| BioProject の参照 | DRA / GEA / MetaboBank / TogoVar-repository で必須 |
| BioSample の参照 | DRA / GEA / MetaboBank / TogoVar-repository で必須 |
| 公開予定日の設定 | 全 DB で設定可能（期間は DB ごとに異なる） |

### 2-4. 共通するアクセッション番号の命名規則

| DB | プレフィックス |
|----|-------------|
| BioProject | PRJDB |
| BioSample | SAMD |
| DRA | DRX（Experiment）/ DRR（Run）/ DRZ（Analysis） |
| GEA | E-GEAD-n（Experiment）/ A-GEAD-n（Array design） |
| JGA | JGA / JGAS / JGAN / JGAX / JGAR / JGAZ / JGAD / JGAP |
| MetaboBank | MTBKSn |
| TogoVar | dstd（study）/ dss（SNP variant）/ dssv（SV variant call）/ dsv（SV variant region） |

---

## 3. 主要な差異

### 3-1. アクセス制御モデル

| DB | 公開モデル | 特記事項 |
|----|----------|---------|
| BioProject | **オープンアクセス** | NCBI / EBI と共有 |
| BioSample | **オープンアクセス** | NCBI / EBI と共有 |
| DRA | **オープンアクセス** | NCBI SRA / EBI ENA にミラー |
| GEA | **オープンアクセス** | 現時点では EBI ArrayExpress との交換なし |
| JGA | **制限公開（controlled access）** | DBCLS 審査が必須。個人を特定し得るヒトデータ専用 |
| MetaboBank | **オープンアクセス** | EBI MetaboLights とは現時点で交換なし |
| TogoVar-repository | **オープンアクセス** | dbSNP/dbVar との交換は計画中（未実現） |

### 3-2. 登録申請方法

| DB | 申請方法 | 特記事項 |
|----|---------|---------|
| BioProject | D-way から直接（セルフサービス） | — |
| BioSample | D-way から直接（セルフサービス） | — |
| DRA | D-way から直接（セルフサービス） | — |
| GEA | D-way から直接（セルフサービス） | マイクロアレイ or シークエンシングを選択 |
| JGA | **DBCLS への提供申請が必須** → 承認後に登録 | キュレータが XML を生成。sftp ポート 443 |
| MetaboBank | **申し込みフォームで申請** → 担当者が案内 | D-way 不使用 |
| TogoVar-repository | **申し込みフォームで申請** → 担当者が案内 | D-way 不使用 |

### 3-3. メタデータ形式

| DB | メタデータ形式 | 入力ツール |
|----|------------|---------|
| BioProject | 独自 XML（D-way ウェブフォーム） | D-way ウェブツール |
| BioSample | 独自 XML + 属性 TSV | D-way ウェブツール + TSV |
| DRA | INSDC XML（Submission / Experiment / Run） | D-way ウェブツール または エクセル |
| GEA | **MAGE-TAB**（IDF + SDRF） | D-way ウェブツール（IDF/SDRF） |
| JGA | SRA 拡張 XML | **エクセル** → キュレータが XML 生成 |
| MetaboBank | **MAGE-TAB**（IDF + SDRF）＋ MAF | **エクセル**（実験種別 11 種） |
| TogoVar-repository | dbVar/dbSNP 拡張モデル | **エクセル**（7 シート）+ VCF |

### 3-4. データファイル形式

| DB | 生データ形式 | 解析済みデータ | 独自形式 |
|----|-----------|------------|--------|
| BioProject | なし（メタデータのみ） | — | — |
| BioSample | なし（メタデータのみ） | — | — |
| DRA | fastq / BAM / HDF5（PacBio） | DRA Analysis | — |
| GEA | マイクロアレイ native files（CEL / IDAT 等）/ DRA 経由 | 解析済みテキスト / Data Matrix | — |
| JGA | BAM / fastq / SFF | VCF / アレイデータ / 各種 | — |
| MetaboBank | mzML / RAW / nmrML / imzML 等 11 形式 | 解析済みデータ + MAF | **mzB**（独自変換形式） |
| TogoVar-repository | **VCF**（必須）| — | — |

### 3-5. データ公開期間（非公開の最長設定）

| DB | 最長非公開期間 | 公開予定日の設定 |
|----|------------|--------------|
| BioProject | 制限なし（論文公開まで） | 設定**不可**（連動公開のみ） |
| BioSample | 制限なし（論文公開まで） | 設定**不可**（連動公開のみ） |
| DRA | **4年後まで** | 設定可 / 延長可 |
| GEA | **4年後まで** | 設定可 / 延長可 |
| JGA | 制限なし（論文公開まで） | 設定**不可**（hum 番号の公開に連動） |
| MetaboBank | **3年後まで** | 設定可 / 延長可 |
| TogoVar-repository | **3年後まで** | 設定可 / 延長可 |

### 3-6. 連動公開の方向性

```
DDBJ / DRA / GEA / MetaboBank が公開
    → BioProject と BioSample を連動公開 ✅

BioProject が公開
    → リンクされているデータの連動公開を引き起こさない ❌

BioSample が公開
    → derived_from で引用されている BioSample を連動公開 ✅

DDBJ が公開
    → DBLINK で参照している DRA Run を連動公開 ✅

GEA が公開
    → 参照している DRA Run を連動公開 ✅

DRA が公開
    → DDBJ の連動公開を引き起こさない ❌
```

### 3-7. 登録可能データの対象生物

| DB | 対象生物 |
|----|---------|
| BioProject | 制限なし |
| BioSample | 制限なし |
| DRA | 制限なし |
| GEA | 制限なし（ヒトデータは注意が必要） |
| JGA | **ヒトのみ**（制限公開が必要なデータ） |
| MetaboBank | 制限なし（ヒトデータは注意が必要） |
| TogoVar-repository | **ヒトのみ** |

### 3-8. ヒトデータの扱い

| DB | ヒトデータの扱い |
|----|---------------|
| BioProject | BioProject のみの場合は登録可（DBCLS の hum ID を Private comments に記載） |
| BioSample | Human パッケージで登録可。保護が必要な場合は JGA へ |
| DRA | アクセス制限不要なら登録可 |
| GEA | アクセス制限不要なら登録可。保護が必要な場合は JGA へ |
| JGA | **制限公開が必要なヒトデータ専用**。DBCLS の審査必須 |
| MetaboBank | アクセス制限不要なら登録可。保護が必要な場合は JGA へ |
| TogoVar-repository | ヒトのバリアント専用（オープンアクセス） |

### 3-9. Reviewer Access の提供方法

| DB | 査読者へのデータ提供方法 |
|----|----------------------|
| DRA | 登録者がアーカイブ済み fastq をダウンロードし、別途共有 |
| GEA | **Reviewer access token** を発行（3ヶ月有効）。Double-blind オプションあり |
| JGA | 制限公開のため、通常の reviewer access は提供していない |
| MetaboBank | パスワード保護サイト経由（チームに連絡して手配） |
| BioProject / BioSample / TogoVar | 非公開データへの reviewer access の仕組みなし |

### 3-10. 登録数・規模の制限

| DB | 制限 | 補足 |
|----|------|------|
| BioSample | 1 Submission あたり **1,000 サンプル**まで | 同一パッケージのみ混在可 |
| DRA | 1 Submission あたり **Run 2,000**（BioSample 1,000 / GEA 1,000） | — |
| GEA | 1 Submission あたり **Assay 1,000**まで | — |
| JGA | 制限の記載なし | — |
| MetaboBank | 制限の記載なし | — |
| BioProject / TogoVar | 制限の記載なし | — |

---

## 4. DB 固有の特徴的要素

### BioProject 固有

- **アンブレラプロジェクト**：複数プロジェクトを階層的にまとめる上位プロジェクト（非公開不可）
- **Project Type の多様な分類**: data type / sample scope / material / capture / methodology / objective の 6 軸分類
- 公開後 NCBI / EBI BioProject と**毎日交換**

### BioSample 固有

- **パッケージシステム**: Standard（11種）/ Pathogen（2種）/ MIxS（8種）/ Environmental package（23種）の計 44 パッケージ
- **INSDC Missing Value Reporting**: 必須属性に値がない場合の標準用語（not applicable / missing / restricted access の 3 階層）
- **locus_tag_prefix**: ゲノムアノテーション登録のために BioSample で取得
- **derived_from 属性**: 派生サンプル（MAG・混合アセンブリ等）のリンク

### DRA 固有

- **6 種のメタデータオブジェクト**: Submission / BioProject / BioSample / Experiment / Run / Analysis
- **Library Strategy / Selection / Source の詳細分類**: 各 10〜20 種以上
- **Instrument Model の詳細リスト**: Illumina / PacBio / ONT / Ion Torrent / BGI 等 40 機種以上
- **BAM リファレンス指定の 4 方式**: INSDC アクセッション / マルチ FASTA / 混在 / unmapped
- **PacBio Base Modification Files / BioNano Genome Map Files** の Analysis 登録推奨
- **公開後 NCBI SRA / EBI ENA にミラーリング**

### GEA 固有

- **2 系統の登録フロー**: マイクロアレイ実験 / シークエンシング実験（DRA 生データ先行登録）
- **MAGE-TAB 形式**: IDF + SDRF（GEA / MetaboBank / EBI ArrayExpress 共通）
- **Reviewer access token**（3ヶ月有効）と **Double-blind オプション**（登録者情報の自動削除）
- **Array Design（ADF）**: ArrayExpress/GEA への ADF 登録
- **Data Matrix**: 複数アッセイをまとめた Matrix ファイル形式
- **14 プラットフォームの生データ判定**: Affymetrix / Agilent / Illumina (IDAT 推奨) / GenePix 等

### JGA 固有

- **DBCLS との 2 機関体制**: データ登録・利用は DBCLS が審査、JGA が保管・配布
- **グループ管理システム**: 提供申請グループ / 利用申請グループ（PI・担当者の役割分担）
- **暗号化配布**: 利用者がデータセット復号用公開鍵を登録し、暗号化された状態でダウンロード後に復号
- **2 ペア 4 ファイルの鍵管理**: データ転送用（DDBJ アカウント登録）+ データセット復号用（利用申請時登録）
- **メタデータの tsv / XML / mapping 表**が復号済みディレクトリに同梱
- **sftp ポート 443**（他の DB はポート 22）
- **Policy / Dataset**: ポリシーが異なるデータ（Control/Case 等）は Dataset を分離

### MetaboBank 固有

- **11 種の実験種別エクセル**: LC-MS / LC-DAD-MS / GC-MS / GCGC-MS / GC-FID-MS / CE-MS / DI-MS / FIA-MS / MALDI-MS / MSI / NMR
- **Metabolite Assignment File（MAF）**: 代謝物同定情報の標準フォーマット（20 カラム）
- **mzB 変換提供**: 登録された生データをベンダー形式から mzB に自動変換（最大 95.7% 削減）
- **50 以上の Protocol Parameter**: 機器・実験種別ごとに詳細なパラメータ定義
- **Third-party reanalysis data** の登録受付（査読論文の公開が前提）
- **EBI MetaboLights と非交換**（協力関係はあり）

### TogoVar-repository 固有

- **SNP/SV の二種別**: 50 bp 以下（SNP）と 50 bp 超（SV）で分離した登録・データモデル
- **VCF が主要登録形式**: `##reference=GRCh38`（または GRCh37）の指定が必須
- **dbSNP/dbVar 連携予定**: 公開後 dbSNP rs へのマージを計画（現時点では未実現）
- **Singularity による Validation**: ローカル環境でのバリデーションツールを GitHub で提供
- **dbVar/dbSNP のデータモデル拡張**: dbVar モデルに dbSNP Assay を Dataset として取り込んだ SNP/SV 共通モデル
- **REF 塩基一致チェック**: GRCh37/38 リファレンスゲノムとの塩基比較を validation で実施

---

## 5. 共通する注意事項

すべてのデータベースで共通して記載されている注意事項：

| 注意事項 | 説明 |
|---------|------|
| 重複登録の禁止 | EBI / NCBI に登録済みのデータを DDBJ に再登録しないこと |
| 仮 ID の論文引用禁止 | SSUB / PSUB 等で始まる仮 ID を論文中に引用しないこと |
| 三ヶ月ルール | 問い合わせ後三ヶ月以上回答がない登録はキャンセル（DRA / BioSample / GEA） |
| ヒトデータの注意 | 研究対象者の尊厳・人権の保護は登録者の責任（全 DB） |
| メタデータの英語記載 | 全 DB で英語での入力が原則 |

---

## 6. データベース選択の判断フロー

```
登録しようとしているデータは？
│
├── 研究プロジェクト情報のみ → BioProject
│
├── サンプル情報のみ → BioSample
│
├── 次世代シークエンス生データ
│   ├── アクセス制限不要 → DRA
│   └── アクセス制限必要（ヒト） → JGA
│
├── 機能ゲノミクス（発現・ChIP-seq 等）
│   ├── アクセス制限不要 → GEA（生データは DRA）
│   └── アクセス制限必要（ヒト） → JGA
│
├── メタボロミクス（MS / NMR）
│   ├── アクセス制限不要 → MetaboBank
│   └── アクセス制限必要（ヒト） → JGA
│
├── ヒトの遺伝的バリアント・頻度情報（オープンアクセス）
│   └── → TogoVar-repository
│
└── ヒトの遺伝子型・表現型（制限公開）
    └── → JGA
```
