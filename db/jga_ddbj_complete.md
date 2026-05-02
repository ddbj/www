# DDBJ Japanese Genotype-phenotype Archive (JGA) — 完全ガイド

> 出典: https://www.ddbj.nig.ac.jp/jga/  
> 取得日: 2026年5月

---

## 目次

1. [JGA とは（Home）](#1-jga-とはhome)
2. [JGA への登録（Submission）](#2-jga-への登録submission)
3. [登録手順（How to submit）](#3-登録手順how-to-submit)
4. [利用手順（How to access data）](#4-利用手順how-to-access-data)
5. [グループ（Groups）](#5-グループgroups)
6. [FAQ — JGA 関連](#6-faq--jga-関連)

---

## 1. JGA とは（Home）

**Japanese Genotype-phenotype Archive (JGA)** は**個人レベルの遺伝学的なデータと表現型情報を保管・提供**しています。JGA へのデータ登録、および、JGA データの利用は、[ライフサイエンス統合データベースセンター（DBCLS）](http://humandbs.dbcls.jp/)で審査承認のうえ実施しています。

**主なリンク**

| 目的 | URL |
|------|-----|
| NBDC 利用可能研究データ一覧 | https://humandbs.dbcls.jp/data-use/all-researches |
| DDBJ Search | https://ddbj.nig.ac.jp/search |
| JGA への登録 | https://www.ddbj.nig.ac.jp/jga/submission.html |
| 登録手順 | https://www.ddbj.nig.ac.jp/jga/submission-step.html |
| 利用手順 | https://www.ddbj.nig.ac.jp/jga/download.html |
| グループ | https://www.ddbj.nig.ac.jp/jga/group.html |
| 登録例（GitHub） | https://github.com/ddbj/submission-excel2xml/tree/main/example |
| XML スキーマ（GitHub） | https://github.com/ddbj/pub/tree/master/docs/jga/xsd/ |
| FAQ（JGA タグ） | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=jga |

### 利用

DBCLS に[データ利用を申請](https://humandbs.dbcls.jp/data-use)してください。利用申請承認後、JGA はデータへのアクセスを利用者に提供します。

### 登録

DBCLS に[データ提供を申請](https://humandbs.dbcls.jp/data-submission)してください。提供申請が承認されると、JGA 登録用ディレクトリが作成されるので、メタデータとデータファイルをアップロードします。

### 公開

JGA データに対応する NBDC ヒトデータベースの[専用サイト](https://humandbs.dbcls.jp/data-use/all-researches)が公開されると、JGA データも公開されます。研究概要である JGA **Study/Dataset**、および、利用制限事項である **Policy** は [DDBJ Search](https://ddbj.nig.ac.jp/search) で**制限なく**公開されます。

---

## 2. JGA への登録（Submission）

### 2-1. 登録概要

JGA は **DBCLS で承認された利用制限ポリシーを持つ、匿名化されたデータだけ**を受け付けています。登録者は DBCLS に JGA へのデータ提供を申請し、JGA は DBCLS から正式に提供が承認された連絡を受け、登録者に登録手順を案内します。

**重要な概念の整理**:
- 制限公開は論文公表までの間、データを非公開にすることとは**異なります**
- JGA を含む全ての DDBJ データベースでは、論文公表までの一定期間、データを非公開にすることができます
- JGA に登録されたデータの公開は制限されます。JGA データを利用するためには DBCLS に利用を申請し、承認される必要があります

### 2-2. アクセッション番号体系

| プレフィックス | メタデータオブジェクト | 数字の桁数 | 例 |
|-------------|-------------------|---------|---|
| **JGA** | Submission | 6 | JGA000001 |
| **JGAS** | Study | 6 | JGAS000001 |
| **JGAN** | Sample | 9 | JGAN000000001 |
| **JGAX** | Experiment | 9 | JGAX000000001 |
| **JGAR** | Data | 9 | JGAR000000001 |
| **JGAZ** | Analysis | 9 | JGAZ000000001 |
| **JGAD** | Dataset | 6 | JGAD000001 |
| **JGAP** | Policy | 6 | JGAP000001 |

**論文での引用**: 著者が引用すべきアクセッション番号が指定されていない場合は **JGAS（study）番号**を引用することを推奨します。Study 番号は読者に研究の概要を示し、その Study に含まれているすべてのデータへのリンクを提供します。

引用例文:
> 「Genotype data has been deposited at the Japanese Genotype-phenotype Archive (JGA, https://www.ddbj.nig.ac.jp/jga), which is hosted by the Bioinformation and DDBJ Center, under accession number JGASXXXXXX.」

**公開の単位**: データは **JGA Submission 単位で公開**されます。公開時期の異なるデータセットは別の Submission に分けてください。

### 2-3. 受け付けるデータ形式

#### 塩基配列データ（raw/unaligned と aligned）

**データファイルが複数サンプルに由来するデータを含んでいる場合、投稿前にファイルをサンプルごとに分割します。**

**BAM 形式（推奨）**:
- Binary Alignment/Map (BAM) ファイルは JGA への登録にとって好ましいファイル形式の一つ
- JGA はプライマリーデータとして **unaligned read を含む BAM** を Data に登録することを**強く推奨**
- BAM ファイルはほぼ最適化されているので**さらに圧縮する必要なし**
- BAM ファイルは圧縮しないこと

**Fastq 形式**:

以下の条件を満たした Fastq ファイルでの登録を推奨しています。

| 条件 | 詳細 |
|------|------|
| Quality score | **Phred スケール**であること。初期の Solexa パイプラインからの quality score は Phred スケールに変換すること。ASCII とスペース区切りの数字で表された quality score をサポート。Phred quality score のオフセットが 33 か 64 かは自動判定 |
| Technical リード | アダプター、リンカー、バーコード配列が**取り除かれている**こと |
| シングルリード | **一つの Fastq ファイル**で登録 |
| ペアードリード | **分割し、二つの Fastq ファイル**として登録。リード名はペアの最初か二つ目のリードかを区別する `/1` と `/2` のような suffix を持っている必要がある（正規表現: `^(.*)([\.|:|/|_])([12])$`） |
| リードの先頭 | `@` で始まること |
| 塩基配列と quality score の区切り | `+` で始まる行で区切られていること |
| 圧縮 | **gzip か bzip2** で圧縮すること |

シングルリードを含む Fastq ファイルの例:
```
@read_name
GATTTGGGGTTCAAAGCAGTATCGATCAAATAGTAAATCCATTTGTTCAACTCACAGTTT
+
!''*((((***+))%%%++)(%%%%).1***-+*''))**55CCF>>>>>>CCCCCCC65
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
```

**SFF 形式**:
- 454 プラットフォームからのデータは SFF での登録が推奨される
- SFF ファイルはほぼ最適化されているので**さらに圧縮する必要なし**

#### アレイデータ（遺伝子型タイピング、SNP、遺伝子発現）

- JGA は全ての種類のアレイプラットフォームからのデータを受け付ける（genotypes、遺伝子発現、メチル化解析データ等）
- [GEA](https://www.ddbj.nig.ac.jp/gea/overview.html) に準拠した登録形式を推奨
- Analysis にアレイ実験から得られたあらゆる種類のデータファイルを格納できる
- **生データ（例 CEL）と解析したデータの両方**を登録することを推奨（結果の再現のため）
- サンプルに関連した表現型（phenotype）情報も Analysis にアーカイブしている

#### 変異データ

- [VCF 形式](http://en.wikipedia.org/wiki/Variant_Call_Format)での登録を推奨
- JGA Analysis に vcf ファイルを登録することができる
- **それぞれの Analysis には一つの VCF ファイルしか登録できない**
- VCF で使われたサンプルは JGA Sample に対応している必要がある
- 使用したリファレンス配列を INSDC のアクセッション番号、もしくは広く使われているラベル名で記載する

#### メタボロミクスデータ

- Analysis で受け付ける
- [MetaboBank](https://www.ddbj.nig.ac.jp/metabobank/submission.html) に準拠した登録形式を推奨

#### プロテオミクスデータ

- Analysis で受け付ける
- [SDRF-Proteomics](https://github.com/bigbio/proteomics-sample-metadata/blob/master/sdrf-proteomics/README.adoc) に準拠した登録形式を推奨

#### その他のデータ（Analysis への登録例）

Analysis は複数の Data もしくは Sample を参照することができるので、これらのオブジェクトに登録されているデータを解析・集計したデータを Analysis に登録することができます:
- 複数 Data に登録された配列データから作成したリファレンス配列 GFF3 ファイル
- 複数 Analysis に登録されたアレイデータを正規化し表にまとめたファイル

### 2-4. メタデータ

JGA データモデルは [Sequence Read Archive](https://www.ddbj.nig.ac.jp/dra/metadata.html) のモデルを拡張してつくられています。JGA メタデータは XML オブジェクトで構成されています。

JGA XML schema: [JGA xsd（GitHub）](https://github.com/ddbj/pub/tree/master/docs/jga)

**公開されるメタデータオブジェクト**（データの提供開始後に公開）:

| オブジェクト | 公開内容 |
|------------|---------|
| Study | 全ての内容 |
| Dataset | 全ての内容と含まれる Sample 数とファイルサイズ |
| Policy | 全ての内容 |

#### Submission

登録プロセスを管理します。登録者の連絡先情報を含みます。  
XML schema: [JGA.submission.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

#### Study

研究を記述します。研究のタイトル、study type と論文に使われるようなアブストラクトを含みます。論文公表後、登録したデータを使った論文の PubMed ID を追加し、論文情報を更新します。  
XML schema: [JGA.study.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

#### Sample

研究で使った各サンプルを記載します。一般的に Sample は**個人に対応**します。必須項目は少ないですが、できるだけ詳細な情報を記入し、研究対象者の表現型を含むサンプルについての有用な情報を提供することを推奨します。  
XML schema: [JGA.sample.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

#### Experiment

実験のセットアップを記述します。サンプルの調整からデータの取得にいたるまでのプロトコールや使ったシークエンサを記載します。**次世代シークエンス実験にのみ**対応しています。  
XML schema: [JGA.experiment.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

#### Data

次世代シークエンスデータについての情報と、それらと Experiment との関係を記述します。ファイルをまとめる役割を果たします。  
XML schema: [JGA.data.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

#### Analysis

アレイデータ、データを解析・集計した結果を登録します。変異データは VCF ファイルとして登録することができます。それぞれの Analysis には**一つの VCF ファイルしか登録できません**。VCF で使われたサンプルは JGA Sample に対応している必要があります。使用したリファレンス配列を INSDC のアクセッション番号、もしくは広く使われているラベル名で記載します。  
XML schema: [JGA.analysis.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

#### Dataset

Data XML と Analysis XML に記載されているデータファイルを、データセットという単位にまとめます。Study 中に適用されるポリシー（利用制限事項）が異なるデータ（Control と Case 等）が含まれている場合、**データセットを分ける必要があります**。一般的にポリシーは個人（Sample）との間のインフォームドコンセントによって規定されます。  
XML schema: [JGA.dataset.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

#### Policy

データ利用制限ポリシーを記載します。[NBDC ポリシー](https://humandbs.dbcls.jp/nbdc-policy)以外に適用すべきポリシーがなければ作成する必要はありません。NBDC ポリシー以外に適用すべきポリシーがある場合は、DBCLS にポリシーを登録し、発行される JGAP 番号を Dataset から参照します。  
XML schema: [JGA.policy.xsd](https://github.com/ddbj/pub/tree/master/docs/jga)

### 2-5. Analysis のみの登録

集計されたデータ、もしくは、Experiment-Data に格納するのが適切ではないデータを登録する場合は Sample-Experiment-Data ではなく **Sample-Analysis セット**でデータを登録することができます。

2 通りの形式:
- Sample に 1 対 1 対応する Analysis データ登録
- Sample を集計した Analysis データ登録

Sample-Analysis セットでデータ登録をする場合は [JGA チームに連絡](https://www.ddbj.nig.ac.jp/contact-ddbj.html)します。

### 2-6. 登録の更新

- 登録を更新するためには [JGA チームに連絡](https://www.ddbj.nig.ac.jp/contact-ddbj.html)します
- **公開済み Study/Dataset にデータを追加する場合、追加データを非公開にすることはできません**。公開してもよくなった時点で追加・公開する、もしくは、追加分は Study を分けて非公開にしてください

### 2-7. データの公開

NBDC ヒトデータベースで JGA データに対応する [hum 番号の専用サイト](https://humandbs.dbcls.jp/data-use/all-researches)が公開されると、JGA データも公開されます。

---

## 3. 登録手順（How to submit）

### 3-1. 全体の流れ

1. DDBJ アカウント作成・情報追加とデータ転送用公開鍵の登録
2. 提供申請グループの作成
3. 提供申請（申請システムから）
4. 提供申請の承認（DBCLS）
5. メタデータ作成（エクセル記入）
6. エクセルのアップロード（sftp）
7. データファイルのアップロード（sftp または WinSCP）
8. JGA キュレータによる査定・XML 生成・登録
9. アクセッション番号の発行

### 3-2. DDBJ アカウント作成・情報追加とデータ転送用公開鍵の登録

- 提供申請および JGA データアップロードには DDBJ アカウントが必要
- アカウントが無い場合は申請前に [DDBJ アカウントを取得](https://www.ddbj.nig.ac.jp/ddbj-account.html)する
- DDBJ アカウント作成後、[データ申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)で利用できるようになるまで**10分程度**かかる
- JGA サーバへデータをアップロードするためには、データ転送用の公開鍵・秘密鍵ペアを作成し、[公開鍵を DDBJ アカウントに登録](https://www.ddbj.nig.ac.jp/ddbj-account.html#public-key)する
- 申請情報を自動入力させるため、アカウントに**所属情報や日本語氏名**を追加する（申請システムにログインし「ユーザ情報更新」から）

### 3-3. 提供申請グループ

- 申請前に提供申請グループを作成する
- グループには**申請及び登録を担当する研究員（担当者）**がオーナー、**研究代表者（PI）**がメンバーとなる形が標準的
- 登録者が PI と申請者以外にも居る場合は**必ず全員をメンバーに含める**
- グループ作成後、提供申請を開始し、作成した提供申請グループを選択する

### 3-4. 提供申請の承認

- 提供申請が DBCLS で承認されると、JGA の **Submission ID**（例 JSUB000353）が発行される
- JGA サーバ（`jga-gw.ddbj.nig.ac.jp`）に対応するアップロード用ディレクトリが作成される: `/controlled-access/submission/jga/JSUB000353/`

### 3-5. メタデータ作成

**エクセルファイルへの記入**:

1. [メタデータ記入用エクセルファイル](https://github.com/ddbj/submission-excel2xml/raw/main/JGA_metadata.xlsx)をダウンロード（最終更新: 2024-05-17）
2. 内容を**英語**で記入する
3. [メタデータエクセルの記入例](https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318)も参照

**注意事項**: JGA にアップロードするファイル名には**空白を含めないこと**。

### 3-6. エクセルを sftp でアップロード

JGA ファイルサーバ（`jga-gw.ddbj.nig.ac.jp`）上の `/controlled-access/submission/jga/` の下の JGA Submission ID と同名のディレクトリに対して、sftp の **P オプションでポート番号 443** を指定してアップロードします。sftp は公開鍵・秘密鍵認証を利用します。

```bash
# アカウント名: account_b
# JGA Submission ID: JSUB000353
# データ転送用秘密鍵のファイルパス: ~/.ssh/id_rsa

$ sftp -i ~/.ssh/id_rsa -P 443 account_b@jga-gw.ddbj.nig.ac.jp
$ cd controlled-access/submission/jga/JSUB000353
$ put JSUB000353_metadata.xlsx
```

### 3-7. データファイルのアップロード

**ファイル形式の注意事項**:

| 形式 | 扱い |
|------|------|
| ZIP アーカイブ（`.zip`） | **登録しないこと** |
| `.tar`, `.tar.gz`, `.tgz`, `.tar.bz2`, `.tbz2`, `.gz`, `.bz2` | 標準的な方法でアーカイブ・圧縮されているファイルと判定され展開・解凍処理される。拡張子とアーカイブ・圧縮形式が一致していないファイルはエラーになる |
| BAM ファイル | **圧縮しないこと** |
| gz や bzip 圧縮したファイル | さらに tar でアーカイブせず、`tar.gz` 等でアーカイブしたファイルを圧縮すること |

**登録するデータの分類**:

| オブジェクト | 登録するデータ |
|------------|-------------|
| **Data** | fastq や bam ファイルなどの個人レベルの次世代シークエンスデータ |
| **Analysis** | アレイデータ、変異解析、質問票などの次世代シークエンス以外のデータや各種ドキュメント |

データの再利用性・再現性のため、論文での主張の基になっている解析データが登録されることが重要です。**できるだけ VCF などの解析データを Analysis に登録**してください。

**sftp でのアップロード**:

```bash
# アカウント名: account_b
# JGA Submission ID: JSUB000353
# データ転送用秘密鍵のファイルパス: ~/.ssh/id_rsa

$ sftp -i ~/.ssh/id_rsa -P 443 account_b@jga-gw.ddbj.nig.ac.jp
$ cd controlled-access/submission/jga/JSUB000353
$ put wgs1.fastq

# 拡張子 fastq の全ファイルをアップロード
$ put *.fastq
```

**WinSCP でのアップロード**（Windows の場合）:

[WinSCP](https://winscp.net/eng/download.php) をダウンロードしてインストールし、以下の設定で接続します:

| 設定項目 | 値 |
|---------|---|
| 転送プロトコル | SFTP |
| ホスト名 | jga-gw.ddbj.nig.ac.jp |
| ポート番号 | **443** |
| ユーザ名 | DDBJ アカウント ID |
| パスワード | 空欄のまま |

秘密鍵を指定します。初回接続時には警告メッセージが表示されますが「はい」を選択します。ログイン成功後、左側のウィンドウ（PC のフォルダ）でファイルを選択し右側のウィンドウ（JGA サーバ）へドラッグ＆ドロップして転送します。

### 3-8. メタデータとデータの登録（JGA キュレータによる処理）

- JGA キュレータがメタデータとデータファイルを査定します
- 完成したエクセルからキュレータが XML を生成し、JGA に登録します
- メタデータとデータファイルが検証処理を通過すると**アクセッション番号が発行**されます

---

## 4. 利用手順（How to access data）

### 4-1. 全体の流れ

1. JGA データセットの検索
2. DDBJ アカウントの作成とデータ転送用公開鍵の登録
3. データセット復号用公開鍵・秘密鍵ペアの作成（利用申請毎）
4. 利用申請グループの作成
5. 利用申請（申請システムから）
6. データセット復号用公開鍵の登録（利用申請時）
7. 利用承認（DBCLS）
8. データのダウンロード（sftp または WinSCP）
9. データファイルの復号

### 4-2. JGA データセットの検索

利用を希望する Study（例 JGAS999992）と Dataset アクセッション番号（例 JGAD999993）を確認します:
- [DBCLS 利用可能な研究データ一覧](https://humandbs.dbcls.jp/data-use/all-researches)
- [DDBJ Search](https://ddbj.nig.ac.jp/search)

### 4-3. 必要な鍵ペアについて

利用申請から JGA データ利用までに、**合計２ペア４ファイル**の公開鍵・秘密鍵が必要になります。

| 鍵の種類 | 使途 | 備考 |
|---------|------|------|
| データ転送用公開鍵 | DDBJ アカウントに登録済み | sftp でのサーバアクセスに使用 |
| データ転送用秘密鍵 | ローカルに保存 | sftp でのサーバアクセスに使用 |
| データセット復号用公開鍵 | 利用申請毎に登録 | 申請時に登録、暗号化されたデータファイルを復号するため |
| データセット復号用秘密鍵 | ローカルに保存 | 暗号化されたデータファイルを復号するため |

**重要**: データセット復号用鍵は DDBJ アカウントのデータ転送用公開鍵とは**別**になります。復号用鍵は **RSA 形式**で作成する必要があります（**ed25519 形式には対応していない**）。

復号用公開鍵と秘密鍵は利用申請 ID をファイル名に含めて保存するとペアを識別しやすくなります（例: `J-DU999991.pub`、`J-DU999991`）。

### 4-4. 利用申請

[申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)から[利用申請](https://humandbs.dbcls.jp/data-use)します。

**利用申請グループの作成**: 申請前に利用申請グループを作成します。申請及びダウンロードを担当する研究員がオーナー、研究代表者（PI）がメンバーとなる形が標準的です。

**データセット復号用公開鍵の登録**: 利用申請において「データセット復号用公開鍵」を登録します。

### 4-5. 利用承認後の構成

利用申請が DBCLS で承認されると、JGA ファイルサーバにダウンロード用ディレクトリが作成され、メタデータ、暗号化されたデータファイルと復号ツールが配置されます。

ダウンロードディレクトリ: `/controlled-access/download/jga/J-DU999991/`

ディレクトリ構造の例:
```
J-DU999991/
├── JGAS999992                           # JGA Study
│   └── JGAD999993                       # JGA Dataset   
│       ├── JGAR999999994                # JGA Data
│       │   └── case1.fastq.gz.encrypt   # 暗号化ファイル
│       ├── JGAR999999995                # JGA Data
│       │   └── case2.fastq.gz.encrypt   # 暗号化ファイル
│       ├── JGAZ999999996                # JGA Analysis
│       │   └── case1.vcf.gz.encrypt     # 暗号化ファイル
│       ├── JGAZ999999997                # JGA Analysis
│       │   └── case2.vcf.gz.encrypt     # 暗号化ファイル
│       └── metadata
└── tools
    └── J-DU999991.tool.zip
```

### 4-6. ダウンロード

**sftp でのダウンロード**（ポート番号 **443**、データ転送用秘密鍵を指定）:

```bash
# アカウント名: account_b
# 利用申請番号: J-DU999991
# データ転送用秘密鍵のファイルパス: ~/.ssh/id_rsa

$ sftp -i ~/.ssh/id_rsa -P 443 account_b@jga-gw.ddbj.nig.ac.jp
$ cd controlled-access/download/jga/
$ get -r J-DU999991
```

**WinSCP によるダウンロード**: アップロード時と同じ設定で接続し、右側のウィンドウ（JGA サーバ）でファイルを選択して左側のウィンドウ（PC）へドラッグ＆ドロップします。

### 4-7. データファイルの復号

**復号ツールは Linux で実行してください（Windows はサポートしていません）。**

**手順**:

1. DU 番号ディレクトリ直下に移動し、tools ディレクトリにある復号ツール `J-DU999991.tool.zip` を J-DU999991 ディレクトリ直下に展開する
2. 展開後、以下のファイルが配置される:
   - `J-DU999991.decrypt.sh`（DU 単位の復号処理スクリプト）
   - 各ファイル用の復号スクリプト（例: `case1.fastq.gz.decrypt.sh`）
   - 暗号化済み共通鍵ファイル（`.dat` 拡張子）

```bash
$ cd J-DU999991
$ unzip tools/J-DU999991.tool.zip
```

3. 復号処理スクリプトに実行権限を付与する:

```bash
$ chmod 750 J-DU999991.decrypt.sh
$ chmod 750 */*/*/*decrypt.sh
```

4. データセット復号用**秘密鍵**を指定して `J-DU999991.decrypt.sh` を実行し、全データファイルを復号する:
   - `-k`: データセット復号用公開鍵とペアの秘密鍵を指定（例: `J-DU999991_private_key`）
   - `-p`: 秘密鍵のパスフレーズを指定（パスフレーズを指定していない場合は省略）

```bash
$ ./J-DU999991.decrypt.sh -k J-DU999991_private_key -p ******
```

**復号処理の並列化**: マルチコア CPU を使っている場合、ファイル毎の復号スクリプトをバックグラウンド実行（`&`）することで並列化できます。

**注意**: DU ディレクトリ下にある Study や Dataset ディレクトリを sftp した場合、DU ディレクトリ直下に DU 単位の復号スクリプトと暗号化されたデータファイルが含まれる Study/Dataset/Data もしくは Analysis ディレクトリを配置してから復号スクリプトを実行します。

### 4-8. ダウンロードされるメタデータ

`metadata` ディレクトリには以下のファイルが含まれています（メタデータファイルは**暗号化されていません**）:

**メタデータオブジェクトの内容が記述された tsv ファイル**:
- `JGAD999993.sample.txt` — Sample の内容（1行目: 項目名、2行目以降: 内容）
- `JGAD999993.analysis.SEQUENCE_VARIATION.txt` — Analysis の内容（Analysis type 毎に作成）

**メタデータオブジェクトの対応関係と内容を記述した tsv ファイル**:
- `JGAD999993.study_sample_experiment_data.mapping.txt` — Data → Experiment → Sample → Study の対応関係表（Experiment と Data の内容表示も兼ねる）
- `JGAD999993.study_analysis_sample.mapping.txt` — Analysis → Sample → Study の対応関係表（複数 Sample を参照している場合はアクセッション番号ではなく Sample の「数」が記載）
- `JGAD999993.analysis_sample.mapping.txt` — Analysis と Sample の対応表（複数 Sample を参照している場合、全アクセッション番号が列挙）
- `JGAD999993.dataset_policy_data_analysis.mapping.txt` — Dataset に含まれる Data、Analysis とリンクしている Policy の対応表

**各オブジェクトのメタデータ XML ファイル**:
- `JGAD999993.study.xml`
- `JGAD999993.dataset.xml`
- `JGAD999993.policy.xml`
- `JGAD999993.sample.xml`
- `JGAD999993.experiment.xml`
- `JGAD999993.data.xml`
- `JGAD999993.analysis.xml`
- `JGAD999993.dac.xml`

**ファイルリスト**:
- `JGAD999993.filelist.txt` — データファイルの名前、種類、サイズ、復号前後の MD5 ハッシュ値、含まれている Data と Analysis アクセッション番号をまとめた表（ダウンロードしたファイルの破損チェックに使用可能）

[メタデータ tsv ファイルの例（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/1NSYUV6KOuQp8zh1lge7450UxBjb5YrUTYOMkwtBxI7o/edit#gid=0)

### 4-9. データセット復号用公開鍵の更新

利用申請の「公開鍵更新」から鍵の更新ページに移動します。OpenSSH 形式の新しい公開鍵を選択し、「更新する」をクリックします。

**注意事項**:
- 鍵更新後、利用対象データセットの**再処理が開始**されるため、処理が完了するまで鍵の更新をしないこと
- データファイル数が**数千を超えるような場合、再処理に数日間**かかる
- 再処理完了の確認: 復号ツール（例 `J-DU999991.tool.zip`）の timestamp が前回から更新されているかどうかで判断する
- 再処理完了後は**復号用ツールのみ**を再度ダウンロードする（データファイルは再ダウンロード不要）
- 新しく更新した公開鍵とペアになっている秘密鍵を指定してデータファイルを復号する

---

## 5. グループ（Groups）

### 5-1. グループの概要

DBCLS への申請、および、JGA データの登録・利用は **DDBJ アカウントをメンバーとするグループ**によって管理されます。グループによりアカウントを共有することなく、研究代表者（PI）と実務担当者がデータを管理したり、グループのメンバーを追加・削除することで関係者の異動時にアクセス権限を適切に保つことができます。

詳細は[「グループについて」](https://www.ddbj.nig.ac.jp/group.html)を参照してください。

### 5-2. 提供申請グループ

DBCLS への提供申請と JGA へのデータ登録は**提供申請グループ**を介して管理されます。[申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)で提供申請を作成する前にグループを作成します。

グループには**責任者である研究代表者（PI）**、および、**登録実務を担当する担当者**を含めます。旧システムでは登録者は JGA Submission に記載する方式でしたが、新システムでは**提供申請グループのメンバーが登録者**となります。

**グループ作成手順**:

1. 申請システムの左メニューで「グループ作成」を選択する
2. グループ名、グループの説明を入力（日本語・英語共に可）する
3. グループ種別で「データ提供申請グループ」を選択してから保存する
4. グループを作成した申請者がグループオーナーになり、`subgrp ID`（例 `subgrp5352`）が割り振られる
5. オーナーがメンバーを招待する（メンバタブで「メンバを招待する」を押下し、アカウント ID またはメールアドレスを入力して招待メールを送信する）
6. 招待された人が招待メール中のリンクをクリックするとメンバとして追加される

**グループ管理権限の移譲**: 登録完了後、グループ編集画面のメンバタブで Owner と PI を担当者から PI に移譲すると PI にグループ管理権限を委譲することができます。

---

## 6. FAQ — JGA 関連

### Q. JGA データを利用するための申請方法は？

DBCLS に[データ利用を申請](https://humandbs.dbcls.jp/data-use)してください。利用申請承認後、JGA はデータへのアクセスを利用者に提供します。詳細は[利用手順](https://www.ddbj.nig.ac.jp/jga/download.html)を参照してください。

---

### Q. JGA にデータを登録するための申請方法は？

DBCLS に[データ提供を申請](https://humandbs.dbcls.jp/data-submission)してください。提供申請が承認されると、JGA 登録用ディレクトリが作成されます。詳細は[登録手順](https://www.ddbj.nig.ac.jp/jga/submission-step.html)を参照してください。

---

### Q. 論文でどのアクセッション番号を引用すべきか？

著者が引用すべきアクセッション番号が指定されていない場合は **JGAS（study）番号**を引用することを推奨します。Study 番号は読者に研究の概要を示し、その Study に含まれているすべてのデータへのリンクを提供します。

引用例文: 「Genotype data has been deposited at the Japanese Genotype-phenotype Archive (JGA, https://www.ddbj.nig.ac.jp/jga), which is hosted by the Bioinformation and DDBJ Center, under accession number JGASXXXXXX.」

---

### Q. JGA と DDBJ/DRA/GEA の違いは何ですか？

JGA は個人レベルの遺伝学的データと表現型情報に対するアクセス制限が**必要な**ヒトデータを扱います。DDBJ/DRA/GEA は基本的にオープンアクセスのデータを受け付けます。アクセス制限の必要ないヒトデータは DRA（次世代シークエンシング）や GEA（機能ゲノミクス）に登録してください。

---

### Q. Analysis のみでデータを登録できますか？

はい。集計されたデータ、もしくは Experiment-Data に格納するのが適切ではないデータの場合、Sample-Analysis セットでデータを登録することができます。この場合は [JGA チームに連絡](https://www.ddbj.nig.ac.jp/contact-ddbj.html)してください。

---

### Q. 公開済み Study/Dataset にデータを追加できますか？

はい。ただし**追加データを非公開にすることはできません**。公開してもよくなった時点で追加・公開するか、追加分は Study を分けて非公開にしてください。

---

## 7. リンク集

| ページ | URL |
|--------|-----|
| JGA ホーム | https://www.ddbj.nig.ac.jp/jga/index.html |
| JGA への登録（Submission） | https://www.ddbj.nig.ac.jp/jga/submission.html |
| 登録手順（How to submit） | https://www.ddbj.nig.ac.jp/jga/submission-step.html |
| 利用手順（How to access data） | https://www.ddbj.nig.ac.jp/jga/download.html |
| グループ（Groups） | https://www.ddbj.nig.ac.jp/jga/group.html |
| 登録例（GitHub） | https://github.com/ddbj/submission-excel2xml/tree/main/example |
| XML スキーマ（GitHub） | https://github.com/ddbj/pub/tree/master/docs/jga/xsd/ |
| JGA メタデータ記入用エクセル | https://github.com/ddbj/submission-excel2xml/raw/main/JGA_metadata.xlsx |
| メタデータエクセルの記入例 | https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/ |
| メタデータ tsv ファイルの例 | https://docs.google.com/spreadsheets/d/1NSYUV6KOuQp8zh1lge7450UxBjb5YrUTYOMkwtBxI7o/ |
| FAQ（JGA タグ） | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=jga |
| DBCLS データ利用申請 | https://humandbs.dbcls.jp/data-use |
| DBCLS データ提供申請 | https://humandbs.dbcls.jp/data-submission |
| DBCLS 利用可能な研究データ一覧 | https://humandbs.dbcls.jp/data-use/all-researches |
| DBCLS NBDC ポリシー | https://humandbs.dbcls.jp/nbdc-policy |
| 申請システム | https://humandbs.ddbj.nig.ac.jp/nbdc/application/ |
| DDBJ Search | https://ddbj.nig.ac.jp/search |
| DDBJ アカウント取得 | https://www.ddbj.nig.ac.jp/ddbj-account.html |
| DDBJ アカウントへの公開鍵登録 | https://www.ddbj.nig.ac.jp/ddbj-account.html#public-key |
| 公開鍵/秘密鍵ペアの生成 | https://www.ddbj.nig.ac.jp/account.html#generate-key-pair |
| グループについて | https://www.ddbj.nig.ac.jp/group.html |
| WinSCP ダウンロード | https://winscp.net/eng/download.php |
| JGA XML スキーマ（全ファイル） | https://github.com/ddbj/pub/tree/master/docs/jga |
| SAM 形式仕様書 | https://samtools.github.io/hts-specs/SAMv1.pdf |
| samtools | http://www.htslib.org/ |
| JGA チームへの連絡 | https://www.ddbj.nig.ac.jp/contact-ddbj.html |
