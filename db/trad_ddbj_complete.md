# DDBJ Annotated/Assembled Sequences (Trad) — 完全ガイド

> 出典: https://www.ddbj.nig.ac.jp/ddbj/  
> 取得日: 2026年5月

---

## 目次

1. [Trad とは（Home）](#1-trad-とはhome)
2. [塩基配列の登録（Submission）](#2-塩基配列の登録submission)
3. [Web 版塩基配列登録システム（NSSS）](#3-web-版塩基配列登録システムnsss)
4. [Mass Submission System（MSS）](#4-mass-submission-systemmss)
5. [登録データの修正・更新（Update）](#5-登録データの修正更新update)
6. [フラットファイル（Flat File）](#6-フラットファイルflat-file)
7. [データの種類（Data Categories）](#7-データの種類data-categories)
8. [FAQ — Trad 関連](#8-faq--trad-関連)
9. [リンク集](#9-リンク集)

---

## 1. Trad とは（Home）

**DDBJ Annotated/Assembled Sequences（通称 Trad）** は、DDBJ が [INSDC](https://www.ddbj.nig.ac.jp/insdc/index.html)（International Nucleotide Sequence Database Collaboration）の一員として収集・公開している**アノテーション付与/アセンブル済み塩基配列データのデータベース**です。ENA（EBI）および GenBank（NCBI）とデータを共有・交換しています。

データベースには、研究者が実験的に決定した塩基配列のほか、日本（JPO）・欧州（EPO）・米国（USPTO）・韓国（KIPO）の特許庁が収集・処理した塩基配列データも含まれています。

**主なリンク**

| 目的 | URL |
|------|-----|
| 塩基配列の登録 | https://www.ddbj.nig.ac.jp/ddbj/submission.html |
| Web 版塩基配列登録システム（NSSS） | https://ddbj.nig.ac.jp/submission |
| Mass Submission System（MSS） | https://mss.ddbj.nig.ac.jp/ |
| getentry（アクセッション番号検索） | https://getentry.ddbj.nig.ac.jp/top-j.html |
| ARSA（キーワード検索） | http://ddbj.nig.ac.jp/arsa/ |
| FTP ダウンロード | https://ddbj.nig.ac.jp/public/ |
| FAQ（DDBJ タグ） | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=ddbj |

---

## 2. 塩基配列の登録（Submission）

### 2-1. 塩基配列登録の目的と意義

多くの雑誌では学術論文の投稿に先立って、塩基配列を国際塩基配列データベース（[INSD](http://www.insdc.org/)）に登録し、**アクセッション番号**を取得した上で、その番号を当該論文に記載することを義務付けています。DDBJ はこの国際塩基配列データベースを構成するデータバンクの１つです。

[受け入れ基準](https://www.ddbj.nig.ac.jp/insdc/data-categories.html)を満たしている塩基配列であるならば、研究者はこれを広く一般に公開することを目的として、学術論文の投稿予定の有無に関わらず、必要に応じて DDBJ に登録することができます。

DDBJ を含む国際塩基配列データベースに登録された塩基配列は公開された後には、**誰でも全てを制限なしに利用可能**となります。

**重要**: DDBJ に塩基配列データを登録しても、データに関する優先権・特許権などは生じません。

### 2-2. 新規登録か更新か

新規登録とすべきか既登録配列の更新とすべきか迷う場合は、[お問い合わせフォーム](https://forms.gle/zV4cYCnRCefd4FSz9)の「DDBJ : 塩基配列登録システム（NSSS）」にご連絡ください。

**塩基配列登録システム（NSSS）は新規登録専用**です。更新内容を NSSS から送付しないでください。更新の場合は [DDBJ 更新依頼フォーム](https://forms.gle/mcQaJshvAKRdggz16)からご連絡ください。

### 2-3. 登録に必要な情報

| 情報 | 詳細・注意事項 |
|------|-------------|
| **登録者情報** | コンタクトパーソンの所属・住所・電話番号、全登録者の氏名が必要。**学生などが研究指導者の連名なしに独りで登録することは原則認められない**（最低2人以上の連名を強く推奨） |
| **公開予定日** | 即日公開、または公開予定日（Hold Date）の指定が必要。公開予定日を設定した場合、その日まで非公開が維持される |
| **登録件数** | 連続したアクセッション番号の発行を希望する場合は件数を確定させてから登録する。同一配列でも独立して決定された結果であれば個別登録可 |
| **論文（REFERENCE）** | 直接関係する論文情報（primary citation）の著者・タイトルの記載が**必須**。論文投稿予定がない場合も形式的に記載が必要 |
| **生物学的情報** | 由来生物名（生物名）の記載は種同定の可否に関わらず**必須**。Feature（CDS・rRNA・tRNA・ncRNA 等の位置・product・gene 等）をできる限り記載する |
| **塩基配列** | シークエンサー出力を精査せずそのまま登録することは科学的に正しくない。ベクターやアダプター等由来の配列は除去する（[VecScreen](http://ddbj.nig.ac.jp/vecscreen/) で確認可能） |

### 2-4. 塩基配列登録の流れ

```
論文投稿（多くの雑誌で塩基配列登録が義務）
    ↓
配列登録（NSSS または MSS 経由）
    ↓
アクセッション番号発行（7業務日以内に問題点を通知）
    ↓
非公開（公開予定日まで）または即日公開
    ↓
データ公開（getentry / FTP / ARSA / GenBank / ENA に展開）
    ↓
利用者からの問い合わせへの対応（登録者の義務）
```

**業務日について**: DDBJ センターは土曜・日曜・国民の祝日・年末年始（12月29日〜翌年1月3日）・夏季休業日（8月中の2日間）は業務を休止します。

### 2-5. 登録者とコンタクトパーソンの義務

**登録者（Submitter）**:
- 登録情報に責任を持ち、更新する権利を有する
- DDBJ および利用者からの問い合わせに応じる義務がある
- フラットファイルの REFERENCE 1 に記載される

**コンタクトパーソン（Contact person）**:
- 登録者の中の一人でなければならない
- DDBJ からの連絡の代表窓口
- フラットファイルの REFERENCE 1 に記載される

### 2-6. 論文とデータの公開

- Primary citation が投稿中などの場合、論文が公表されるまで DDBJ は登録情報を**非公開の状態で保持可能**
- 非公開の登録情報に関して、DDBJ は登録者以外に対して**守秘義務**がある
- 一度公開されたデータは原則として非公開に戻せない（ただし Suppressed ステータスに変更することで利用制限をかけることは可能）
- アクセッション番号が論文等で公表された場合は**例外なく公開**（公開請求は誰にでも可能）

### 2-7. 連絡先

| 用途 | 連絡先 |
|------|------|
| 問い合わせ一般・登録全般 | [お問い合わせフォーム](https://forms.gle/zV4cYCnRCefd4FSz9) |
| 登録済みデータの更新・公開依頼 | [DDBJ 更新依頼フォーム](https://forms.gle/mcQaJshvAKRdggz16) |
| 件数・変更箇所が非常に多い更新 | ddbjupdt(at)ddbj.nig.ac.jp |

---

## 3. Web 版塩基配列登録システム（NSSS）

**NSSS（DDBJ Nucleotide Sequence Submission System）** は、アノテーションをつけた塩基配列を Web 経由で登録できるシステムです。

登録 URL: https://ddbj.nig.ac.jp/submission

**推奨ブラウザ**: Google Chrome、Microsoft Edge、または Mozilla Firefox

### 3-1. NSSS で対応できないデータ（MSS を使うべきケース）

以下のいずれかに該当する場合は **MSS を使用**してください：

**a) 種別・量**:
- EST・TSA・HTC・GSS・HTG・WGS・TLS・TPA
- 1配列が 500 kb 以上
- 1配列あたり Feature が 30 以上
- 総計 100 件を超える登録

**b) レプリコン全長規模相当の配列**:
- 核ゲノム・染色体・オルガネラゲノム
- ウイルス・ファージのゲノム/segment
- プラスミド

**c) DBLINK に BioProject/BioSample の記載が必要なデータ**:
- メタゲノム的解析・環境プロファイル解析全般
- 標的遺伝子を限定した配列データを相互に関連付ける場合
- 全長規模ゲノム配列と同一菌株由来の配列データ

### 3-2. 注意事項

- NSSS は**新規登録専用**。修正用データを送付しないこと
- アクセッション番号取得済みデータの修正は [DDBJ 更新依頼フォーム](https://forms.gle/mcQaJshvAKRdggz16)から
- TPA データ（TPA-Exp および TPA-Inf）は2025年1月以降 NSSS での新規登録を休止（MSS を利用）
- 各ページで Next ボタンクリック後にブックマークすると途中から再開可能

---

## 4. Mass Submission System（MSS）

**MSS** は、比較的大規模な塩基配列データ（reads ではない）をファイル送付により登録するサービスです。

MSS 申し込みフォーム: https://mss.ddbj.nig.ac.jp/

### 4-1. MSS 登録の流れ

```
登録ファイル作成（配列ファイル + アノテーションファイル）
    ↓
チェックツール（UME / Parser / transChecker）でファイル検証
    ↓
MSS Form にログイン（DDBJ アカウント）・記入・ファイルアップロード
    ↓
Mass-ID 発行・自動応答メール受信
    ↓
査定・質問・回答をメールでやりとり
    ↓
アクセッション番号取得
    ↓
データ公開または公開日まで hold
```

### 4-2. 登録に必要なファイル

| ファイル | 内容 |
|---------|------|
| **配列ファイル**（必須） | 全登録データの配列を FASTA 形式で記述したテキストファイル。拡張子: `.fasta`、`.seq.fa`、`.fa`、`.fna`、`.seq` のいずれか |
| **アノテーションファイル**（必須） | 全登録データの登録者・REFERENCE・Feature/Qualifier 情報等を記述したタブ区切りテキストファイル。拡張子: `.ann`、`.annt.tsv`、`.ann.txt` のいずれか |
| AGP ファイル（CON エントリ時のみ） | **【重要】CON データの新規登録は受け付けを終了しました** |

- 配列ファイルとアノテーションファイルは拡張子を除いたファイル名が同一でペアとなる
- ファイル名はスペース・バッククォート・アングルブラケット・丸括弧以外の半角英数記号（マルチバイト文字不可）

### 4-3. BioProject/BioSample ID の要否（対応表）

**Genome**:

| 登録種別 | BioProject | BioSample | Biological feature のアノテーション | locus_tag | DRA | 選択 |
|---------|-----------|----------|--------------------------------------|----------|-----|------|
| Draft genome（アノテーションあり） | M | M | M | M | OPT | WGS |
| Draft genome（アノテーションなし） | M | M | NR | NR | OPT | WGS |
| Finished level genome sequence | M | M | M | M | OPT | GNM |
| MAG（アノテーションあり） | M | M | M | M | M | MAG |
| MAG（アノテーションなし） | M | M | NR | NR | M | MAG |
| SAG（アノテーションあり） | M | M | M | M | OPT | SAG |
| SAG（アノテーションなし） | M | M | NR | NR | OPT | SAG |
| HTG | M | M | OPT | NR | OPT | HTG |
| TSA | M | M | OPT | NR | M | TSA |
| HTC | M | M | OPT | NR | OPT | HTC |
| EST | M | M | NR | NR | OPT | EST |
| ウイルス/ファージゲノム | NR | NR | OPT | NR | OPT | MISC |
| プラスミドゲノムのみ | NR | NR | OPT | NR | OPT | MISC |
| オルガネラゲノムのみ | NR | NR | OPT | NR | OPT | MISC |
| Finished Level Genome + プラスミド | M | M | M | M | OPT | GNM, MISC（各 submission）|
| Finished Level Genome + オルガネラ | M | M | M | M | OPT | GNM, MISC（各 submission）|

**Transcriptome**:

| 登録種別 | BioProject | BioSample | Biological feature | locus_tag | DRA | 選択 |
|---------|-----------|----------|--------------------|----------|-----|------|
| TSA | M | M | OPT | NR | M | TSA |
| HTC | M | M | OPT | NR | OPT | HTC |
| EST | M | M | NR | NR | OPT | EST |

**Targeted Locus Study**:

| 登録種別 | BioProject | BioSample | Biological feature | locus_tag | DRA | 選択 |
|---------|-----------|----------|--------------------|----------|-----|------|
| TLS | M | M | M | NR | OPT | TLS |

M: 必須 / NR: 不要 / OPT: 任意

### 4-4. ファイルチェックツール

DDBJ に登録ファイルを送る前に**必ずチェックツールで検証**してください。

| ツール | OS | 機能 |
|--------|-----|------|
| **UME**（Utilities for MSS file Error check） | Windows・Linux/macOS | 配列ファイルとアノテーションファイルのフォーマットチェック + CDS のアミノ酸翻訳チェック（Parser と transChecker を内包） |
| **Parser** | Linux | 配列ファイルとアノテーションファイルのフォーマットチェック |
| **transChecker** | Linux | CDS feature のアミノ酸翻訳チェック |

ダウンロード: [MSS データファイル用チェックツール](https://www.ddbj.nig.ac.jp/ddbj/mss-tool.html)

**重要**: CDS feature を含むデータは UME または transChecker でアミノ酸翻訳チェックを**必ず**実行してください。

### 4-5. 同一 Submission で申し込める条件

以下の3条件が**すべて同一**であること：
1. コンタクトパーソンが同一
2. データ種別が同一
3. 公開予定日が同一

**複数回に分けて申し込みが必要な例**:
- バクテリア菌株の chromosome ドラフトゲノム + プラスミド全長配列 → 2回（WGS + MISC）
- 真核生物の chromosome ドラフトゲノム + オルガネラゲノム全長 → 2回（WGS + MISC）
- 真核生物の chromosome ドラフトゲノム + アセンブルした転写物配列 → 2回（WGS + TSA）

### 4-6. ファイル送付方法

以下のいずれかの方法で送信できます：
- **ブラウザ上でアップロード**
- **DFAST の job ID を指定**（DFAST で登録ファイル作成済みの場合）
- **SFTP サーバーに転送済みのファイルを送付**（合計 10 GB 超の場合推奨。対象ディレクトリ: `/mass`）

対応圧縮形式: gzip / bzip2 / xz / lzip / lzma / lzop / zstd / compress

### 4-7. DFAST（原核生物ゲノムの登録）

**DFAST（DDBJ Fast Annotation and Submission Tool）**: https://dfast.ddbj.nig.ac.jp/

原核生物ゲノムの高速自動アノテーションパイプライン。DDBJ に直接登録可能なアノテーションファイルを生成できます。**原核生物ゲノムの登録には DFAST の利用を強く推奨**しています。

**DFAST を使った登録手順**:
1. 事前に BioProject・BioSample・locus_tag prefix（Biological feature を記載する場合）を登録する
2. DDBJ アカウントで DFAST にログインする（ログイン不要でも解析可能。後から job ID で取り込み可）
3. DFAST で塩基配列ファイルをアップロードして解析（job ID が発行される）
4. "DDBJ submission" タブから BioProject ID・BioSample ID・locus_tag prefix 等を入力して MSS 登録ファイルを作成
5. Format Check をクリックして書式チェックを実施
6. [MSS 申し込みフォーム](https://mss.ddbj.nig.ac.jp/)から登録ファイルを送付

---

## 5. 登録データの修正・更新（Update）

**更新依頼者**: データの更新依頼は**登録者として登録されている方**からのみ受け付けます。依頼者が登録者に含まれていない場合、登録者から連絡し直す必要があります。

### 5-1. 更新可能な内容と手順

| 更新内容 | 受付窓口 |
|---------|---------|
| データの公開 | [登録データの更新申し込みフォーム](https://forms.gle/mcQaJshvAKRdggz16) |
| 論文情報の追加 | 同上 |
| 公開予定日の変更 | 同上 |
| 非公開データのキャンセル | 同上 |
| 公開データの非公開化（Suppressed） | 同上 |
| 非公開データの登録内容確認 | 同上 |
| コンタクトパーソン情報の更新 | 同上 |
| 登録内容の更新 | 同上 |
| 更新対象が非常に多い場合 | ddbjupdt(at)ddbj.nig.ac.jp |

### 5-2. 更新に関する注意事項

- **一度公開されたデータは原則として非公開に戻せない**
- 公開データを Suppressed にすることで利用に一定の制限をかけることは可能
- 既に公開されているデータに対しては「非公開」を指定することはできない
- 更新後に即時公開か非公開かは更新時に登録者が指定可能

---

## 6. フラットファイル（Flat File）

DDBJ のデータ公開形式（フラットファイル）の主要フィールドを説明します。

### 6-1. フラットファイルの例

```
LOCUS       AB000000              450 bp    mRNA    linear   HUM 01-JUN-2009
DEFINITION  Homo sapiens GAPD mRNA for glyceraldehyde-3-phosphate
            dehydrogenase, partial cds.
ACCESSION   AB000000
VERSION     AB000000.1
KEYWORDS    .
SOURCE      Homo sapiens (human)
  ORGANISM  Homo sapiens
            Eukaryota; Metazoa; Chordata; ...
REFERENCE   1  (bases 1 to 450)
  AUTHORS   Mishima,H. and Shizuoka,T.
  TITLE     Direct Submission
  JOURNAL   Submitted (30-NOV-2008)
            Contact:Hanako Mishima
            National Institute of Genetics, ...
REFERENCE   2
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver
  JOURNAL   Unpublished (2009)
FEATURES             Location/Qualifiers
     source          1..450
                     /organism="Homo sapiens"
                     /mol_type="mRNA"
                     /tissue_type="liver"
     CDS             86..>450
                     /gene="GAPD"
                     /product="glyceraldehyde-3-phosphate dehydrogenase"
                     /protein_id="BAA12345.1"
ORIGIN
        1 cccacgcgtc cggtcgcatc ...
//
```

### 6-2. 主要フィールドの説明

| フィールド | 内容 |
|-----------|------|
| **LOCUS** | Locus 名・配列長・分子タイプ（DNA/RNA/mRNA/rRNA/tRNA/cRNA）・分子形態（linear/circular）・Division・最終公開日 |
| **DEFINITION** | データの定義・遺伝子等に関する情報。一定の記述ルールに従いデータバンク側が作成（MSS 登録では登録者が作成することもある） |
| **ACCESSION** | INSD が発行する登録番号。プライマリアクセッション番号（先頭）とセカンダリアクセッション番号（2番目以降）を記載 |
| **VERSION** | アクセッション番号 + バージョン番号（例 AB000000.1）。配列が更新されるとバージョン番号が上がる |
| **DBLINK** | BioProject・BioSample・Sequence Read Archive の Run アクセッション番号等へのリンク |
| **KEYWORDS** | データの詳細種別（EST・TSA・WGS 等）・配列の特性・実験手法・ゲノム配列完成度等の情報 |
| **SOURCE / ORGANISM** | 配列が由来する生物の学名・一般名、NCBI Taxonomy に基づく系統関係（lineage） |
| **REFERENCE 1** | 登録者情報（受付日・コンタクトパーソン名・所属）。E-mail・電話番号・FAX 番号は原則非表示（希望する場合は表示可） |
| **REFERENCE 2 以降** | Primary citation（主論文）および参考文献情報。論文が未発表の場合は "Unpublished"、データベースのみでの公開の場合は "Published Only in Database" |
| **COMMENT** | Feature/Qualifier で記述できないその他の情報。Structured COMMENT（Genome-Assembly-Data 等）を利用した構造化記述も可能 |
| **FEATURES** | 配列の生物学的特徴を feature key・location・qualifier で記述。source feature は全エントリに必須 |
| **ORIGIN** | 塩基配列本体 |
| **//** | エントリの終了を示す |

### 6-3. アクセッション番号の形式

| データ種別 | 形式 | 例 |
|-----------|------|---|
| 通常の登録データ | アルファベット1文字 + 5桁の数字 | A12345 |
| 通常の登録データ（新形式） | アルファベット2文字 + 6桁の数字 | AB123456 |
| Bulk sequence data（WGS/TSA/TLS） | アルファベット4文字 + 2桁（バージョン）+ 6桁（エントリ番号） | ZZZZ01000001 |
| MGA データ | アルファベット5文字 + 7桁の数字 | ABCDE0000001 |

**プレフィックスのリスト**: https://www.ddbj.nig.ac.jp/insdc/prefix.html

### 6-4. Division（データの分類）

**由来生物種による分類**（通常登録データ）:

| Division | 説明 |
|---------|------|
| HUM | ヒト |
| PRI | 霊長類（ヒトを除く） |
| ROD | 齧歯類 |
| MAM | 哺乳類（ヒト・霊長類・齧歯類を除く） |
| VRT | 脊椎動物（ヒト・霊長類・齧歯類・哺乳類を除く） |
| INV | 無脊椎動物 |
| PLN | 植物・真菌類など |
| BCT | バクテリア |
| VRL | ウイルス |
| PHG | バクテリオファージ |

**生物分類によらない分類**:

| Division | 説明 |
|---------|------|
| PAT | 特許出願に含まれる塩基配列データ（JPO/EPO/USPTO/KIPO） |
| ENV | 環境サンプル由来の配列（source feature に `environmental_sample` qualifier が必須） |
| SYN | 人為的に構成された合成配列 |
| EST | expressed sequence tags（short single pass の cDNA 配列） |
| TSA | transcriptome shotgun assemblies（アセンブルされた mRNA 配列） |
| GSS | genome survey sequences（short single pass のゲノム配列） |
| HTC | high throughput cDNA sequences（EST 以外の大規模 cDNA 配列プロジェクト由来） |
| HTG | high throughput genomic sequences（ゲノムプロジェクト由来。phase0/1/2/3 に分類） |
| CON | **新規登録受付終了**。Contig/Constructed: 個々に登録された配列をデータバンク側が結合した長大なデータ |
| STS | **新規登録受付終了**。sequence tagged sites |
| UNA | **新規登録受付終了**。未注釈データ |

### 6-5. Structured COMMENT

Feature/Qualifier で定義されていないデータセットを一群の登録で共有するための記載法。ゲノムプロジェクト（WGS を含む）・転写産物プロジェクト（TSA を含む）など一部の配列データ登録では記載が義務付けられています。

```
COMMENT     ##Genome-Assembly-Data-START##
            Assembly Method          :: Newbler v. 2.3
            Genome Coverage          :: 30x
            Sequencing Technology    :: 454 GS Junior; Illumina GA II
            ##Genome-Assembly-Data-END##
```

---

## 7. データの種類（Data Categories）

### 7-1. Division（データ区分の概要）

#### 通常の登録（由来生物種による区分）

完成したゲノム配列を含む一般的な登録データ。source feature と、それ以外に最低1つの Biological feature の記載が必要。由来生物の系統分類に基づいて自動的に Division が割り当てられます（HUM / PRI / ROD / MAM / VRT / INV / PLN / BCT / VRL / PHG）。

#### ENV / SYN

環境サンプル・合成配列は ENV / SYN として区別して登録します。source feature と最低1つの Biological feature による特徴づけが必要です。

#### EST / GSS / HTC / HTG

大量解析・ゲノム配列決定途中の配列。生物学的特徴づけは source feature のみが基本（HTC・HTG は通常登録と同様に Biological feature の記載も可能）。

### 7-2. MSS 登録時に選択可能なデータ type

| Type | 説明 |
|------|------|
| **WGS**: Whole Genome Shotgun | WGS（ドラフトゲノム）に該当し MAG・SAG でない場合 |
| **GNM**: Finished Level Genome Sequence, non-WGS | WGS でない Finished Level Genomic Sequences で MAG・SAG でない場合 |
| **MAG**: Metagenome-Assembled Genome | MAG に該当する場合 |
| **SAG**: Single Amplified Genome | SAG に該当する場合 |
| **TLS**: Targeted Locus Study | TLS に該当する場合 |
| **HTG**: High Throughput Genomic Sequences | HTG に該当する場合 |
| **TSA**: Transcriptome Shotgun Assembly | TSA に該当する場合 |
| **HTC**: High Throughput cDNA Sequences | HTC に該当する場合 |
| **EST**: Expressed Sequence Tags | EST に該当する場合 |
| **MISC**: Sequences not included in above types | いずれにも該当しない場合 |
| **ASK**: Ask DDBJ curator | DDBJ Curator に判断を仰ぐ場合 |

### 7-3. データカテゴリー詳細

#### WGS（Whole Genome Shotgun）

ホールゲノムショットガン配列決定法を用いて全ゲノム配列を決定するゲノムプロジェクトに由来する大量の DNA 断片の bulk sequence data。アクセッション番号の形式が通常データと異なります（アルファベット4文字 + 2桁のバージョン番号 + 6桁のエントリ番号）。

#### TSA（Transcriptome Shotgun Assembly）

アセンブルされた RNA transcript の bulk sequence data（2008年から受け付け）。生物学的特徴づけは source feature のみが基本。

#### TLS（Targeted Locus Study）

16S rRNA または他の特定 locus を標的とした配列で構成される bulk sequence data（2016年から受け付け）。主として OTU（operational taxonomic unit）クラスター化に用いられます。

#### TPA（Third Party Data）

DDBJ/ENA/GenBank または Sequence Read Archive に既登録のエントリ（プライマリーエントリ）を元に、第三者がアセンブルまたは（再）アノテーションを行ったデータのコレクション。2025年1月以降、TPA-Exp および TPA-Inf の data type の新規登録は休止中（NSSS での登録は不可）。

#### Genome Project のデータ登録

詳細は [Genome project のデータ登録](https://www.ddbj.nig.ac.jp/ddbj/genome.html)・[WGS](https://www.ddbj.nig.ac.jp/ddbj/wgs.html)・[Finished level genomic sequences](https://www.ddbj.nig.ac.jp/ddbj/finished_level_genome.html)・[メタゲノムアセンブリ](https://www.ddbj.nig.ac.jp/ddbj/metagenome-assembly.html)・[Single amplified genome](https://www.ddbj.nig.ac.jp/ddbj/single-amplified-genome.html)・[Pseudohaplotype](https://www.ddbj.nig.ac.jp/ddbj/pseudohaplotype.html) を参照してください。

#### Transcriptome Project のデータ登録

詳細は [Transcriptome Project のデータ登録](https://www.ddbj.nig.ac.jp/ddbj/transcriptome.html)・[TSA](https://www.ddbj.nig.ac.jp/ddbj/tsa.html)・[EST](https://www.ddbj.nig.ac.jp/ddbj/est.html)・[HTC](https://www.ddbj.nig.ac.jp/ddbj/htc.html) を参照してください。

---

## 8. FAQ — Trad 関連

### Q. DDBJ に登録すればデータの優先権は確保されますか？特許申請するべきですか？

登録によって優先権・特許権などは生じません。詳細は [FAQ: DDBJ に登録すればデータの優先権は確保されますか](https://www.ddbj.nig.ac.jp/faq/ja/priorities-for-data.html) を参照してください。

---

### Q. 公開を取り消したデータが現在も参照できるのはなぜですか？

一度公開されたデータは原則として非公開に戻せません。詳細は [FAQ: 公開を取り消したデータが現在も参照できるのはなぜですか](https://www.ddbj.nig.ac.jp/faq/ja/why-retracted-data-available.html) を参照してください。

---

### Q. データ公開の依頼方法は？

[登録データの更新申し込みフォーム](https://forms.gle/mcQaJshvAKRdggz16) からご連絡ください。詳細は [FAQ: データ公開の依頼方法は？](https://www.ddbj.nig.ac.jp/faq/ja/request-release.html) を参照してください。

---

### Q. 公開されたデータを非公開に戻したい

原則として非公開に戻すことはできませんが、Suppressed ステータスへの変更により利用制限をかけることは可能です。詳細は [FAQ: 公開されたデータを非公開に戻したい](https://www.ddbj.nig.ac.jp/faq/ja/restore-released-data-private.html) を参照してください。

---

### Q. 公開されているはずのデータが検索できません

詳細は [FAQ: 公開されているはずのデータが検索できません](https://www.ddbj.nig.ac.jp/faq/ja/cannot-find-data-already-published.html) を参照してください。

---

### Q. 非公開データの登録内容を確認したい

詳細は [FAQ: 非公開データの登録内容確認](https://www.ddbj.nig.ac.jp/faq/ja/data-confirm-before-hold-date.html) を参照してください。

---

### Q. 登録内容を更新するには？

[登録データの更新申し込みフォーム](https://forms.gle/mcQaJshvAKRdggz16) からご連絡ください。件数・変更箇所が非常に多い場合は [FAQ: 更新対象の件数・変更箇所が非常に多い場合](https://www.ddbj.nig.ac.jp/faq/ja/how-to-update-many-entries.html) を参照してください。

---

### Q. 多型関連研究で同一配列が多数ある場合は？

出現頻度とサンプル総数を記載の上、代表データのみに集約して登録することも可能です。詳細は [多型関連研究における同一配列の代表データ登録](https://www.ddbj.nig.ac.jp/ddbj/representative-sequence.html) を参照してください。

---

### Q. INSDC minimal specifications とは？

2026年3月に策定されました。詳細は [塩基配列データ登録における INSDC minimal specifications を策定](https://www.ddbj.nig.ac.jp/news/ja/2026-03-19.html) を参照してください。

---

## 9. リンク集

| ページ | URL |
|--------|-----|
| Trad ホーム | https://www.ddbj.nig.ac.jp/ddbj/index.html |
| 塩基配列の登録（Submission） | https://www.ddbj.nig.ac.jp/ddbj/submission.html |
| Web 版塩基配列登録システム（NSSS） | https://www.ddbj.nig.ac.jp/ddbj/web-submission.html |
| NSSS 登録開始 | https://ddbj.nig.ac.jp/submission |
| NSSS ヘルプ | https://www.ddbj.nig.ac.jp/ddbj/web-submission-help.html |
| Mass Submission System（MSS） | https://www.ddbj.nig.ac.jp/ddbj/mss.html |
| MSS 申し込みフォーム | https://mss.ddbj.nig.ac.jp/ |
| 登録データの修正・更新 | https://www.ddbj.nig.ac.jp/ddbj/update.html |
| DDBJ 更新依頼フォーム | https://forms.gle/mcQaJshvAKRdggz16 |
| お問い合わせフォーム | https://forms.gle/zV4cYCnRCefd4FSz9 |
| Flat file | https://www.ddbj.nig.ac.jp/ddbj/flat-file.html |
| Feature Table | https://www.ddbj.nig.ac.jp/ddbj/feature-table.html |
| Feature key の定義 | https://www.ddbj.nig.ac.jp/ddbj/features.html |
| Qualifier key の定義 | https://www.ddbj.nig.ac.jp/ddbj/qualifiers.html |
| 塩基配列について | https://www.ddbj.nig.ac.jp/ddbj/sequence.html |
| Organism qualifier の生物名 | https://www.ddbj.nig.ac.jp/ddbj/organism.html |
| 識別子について | https://www.ddbj.nig.ac.jp/ddbj/identifiers.html |
| Location の記述法 | https://www.ddbj.nig.ac.jp/ddbj/location.html |
| タンパク質コード配列（CDS） | https://www.ddbj.nig.ac.jp/ddbj/cds.html |
| The Genetic Codes | https://www.ddbj.nig.ac.jp/ddbj/geneticcode.html |
| 配列の記載に用いる略号 | https://www.ddbj.nig.ac.jp/ddbj/code.html |
| 配列データ記載例 | https://www.ddbj.nig.ac.jp/ddbj/example.html |
| データの種類（Data categories） | https://www.ddbj.nig.ac.jp/ddbj/data-categories.html |
| Genome project のデータ登録 | https://www.ddbj.nig.ac.jp/ddbj/genome.html |
| Pseudohaplotype | https://www.ddbj.nig.ac.jp/ddbj/pseudohaplotype.html |
| WGS | https://www.ddbj.nig.ac.jp/ddbj/wgs.html |
| Finished level genomic sequences | https://www.ddbj.nig.ac.jp/ddbj/finished_level_genome.html |
| メタゲノムアセンブリ（MAG） | https://www.ddbj.nig.ac.jp/ddbj/metagenome-assembly.html |
| Single amplified genome（SAG） | https://www.ddbj.nig.ac.jp/ddbj/single-amplified-genome.html |
| HTG | https://www.ddbj.nig.ac.jp/ddbj/htg.html |
| Environmental sample | https://www.ddbj.nig.ac.jp/ddbj/environmental.html |
| ENV | https://www.ddbj.nig.ac.jp/ddbj/env.html |
| TLS | https://www.ddbj.nig.ac.jp/ddbj/tls.html |
| Transcriptome Project のデータ登録 | https://www.ddbj.nig.ac.jp/ddbj/transcriptome.html |
| TSA | https://www.ddbj.nig.ac.jp/ddbj/tsa.html |
| EST | https://www.ddbj.nig.ac.jp/ddbj/est.html |
| HTC | https://www.ddbj.nig.ac.jp/ddbj/htc.html |
| Third Party Data（TPA） | https://www.ddbj.nig.ac.jp/ddbj/tpa.html |
| TPA Submission Guidelines | https://www.ddbj.nig.ac.jp/ddbj/tpa-table.html |
| Patent | https://www.ddbj.nig.ac.jp/ddbj/patent-data.html |
| MGA | https://www.ddbj.nig.ac.jp/ddbj/mga.html |
| FAQ（DDBJ タグ） | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=ddbj |
| 登録ファイル形式 | https://www.ddbj.nig.ac.jp/ddbj/file-format.html |
| MSS チェックツール | https://www.ddbj.nig.ac.jp/ddbj/mss-tool.html |
| UME ユーザーマニュアル | https://www.ddbj.nig.ac.jp/ddbj/ume.html |
| Parser ユーザーマニュアル | https://www.ddbj.nig.ac.jp/ddbj/parser.html |
| transChecker ユーザーマニュアル | https://www.ddbj.nig.ac.jp/ddbj/transchecker.html |
| DFAST（原核生物ゲノムアノテーション） | https://dfast.ddbj.nig.ac.jp/ |
| VecScreen | http://ddbj.nig.ac.jp/vecscreen/ |
| getentry（検索） | https://getentry.ddbj.nig.ac.jp/top-j.html |
| ARSA（検索） | http://ddbj.nig.ac.jp/arsa/ |
| FTP ダウンロード | https://ddbj.nig.ac.jp/public/ |
| アクセッション番号プレフィックスリスト | https://www.ddbj.nig.ac.jp/insdc/prefix.html |
| 登録ナビゲーション | https://www.ddbj.nig.ac.jp/submission-navigation.html |
| データ公開原則 | https://www.ddbj.nig.ac.jp/insdc/data-release-policy.html |
| アノテーションファイルとフラットファイルの対応関係 | https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/ |
| INSDC minimal specifications（2026年3月） | https://www.ddbj.nig.ac.jp/news/ja/2026-03-19.html |
| DDBJ アカウント | https://www.ddbj.nig.ac.jp/ddbj-account.html |
| ENA（EBI） | https://www.ebi.ac.uk/ena/ |
| GenBank（NCBI） | https://www.ncbi.nlm.nih.gov/genbank/ |
