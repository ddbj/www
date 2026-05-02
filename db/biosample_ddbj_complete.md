# DDBJ BioSample — 完全ガイド

> 出典: https://www.ddbj.nig.ac.jp/biosample/  
> 取得日: 2026年5月

---

## 目次

1. [BioSample とは（Home）](#1-biosample-とはhome)
2. [サンプルの登録（Submission）](#2-サンプルの登録submission)
3. [BioSample 概要（Overview）](#3-biosample-概要overview)
4. [サンプル情報（Sample Information）](#4-サンプル情報sample-information)
5. [Validation Rules](#5-validation-rules)
6. [サンプル属性（Sample Attribute）](#6-サンプル属性sample-attribute)
7. [FAQ — BioSample 関連](#7-faq--biosample-関連)
8. [検索・ダウンロード（Search / Downloads）](#8-検索ダウンロードsearch--downloads)

---

## 1. BioSample とは（Home）

BioSample は **DDBJ の一次データベースに登録されている実験データを得るのに使われた生物学的な試料（サンプル）についての情報を集中して管理するデータベース**です。BioSample の例としては、セルライン、組織の生検、生物個体や環境サンプルなどが挙げられます。

サンプルデータは DDBJ、[EBI](https://www.ebi.ac.uk/biosamples/) と [NCBI](https://www.ncbi.nlm.nih.gov/biosample) BioSample データベース間で共有されます。

**主なリンク**

| 目的 | URL |
|------|-----|
| 登録方法 | https://www.ddbj.nig.ac.jp/biosample/submission.html |
| ログインして登録（D-way） | https://ddbj.nig.ac.jp/D-way/ |
| 検索 | http://ddbj.nig.ac.jp/search/ |
| ダウンロード | https://ddbj.nig.ac.jp/public/ddbj_database/biosample/ |
| FAQ（BioSample タグ） | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=biosample |

---

## 2. サンプルの登録（Submission）

### 2-1. ヒトを対象とした研究データの登録について

研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、**登録者の責任において**保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。

登録前に必ず[「ヒトを対象とした研究データの登録について」](https://www.ddbj.nig.ac.jp/policies.html#submission-of-human-data)を熟読してください。

### 2-2. 新規サンプルの登録手順

1. [登録用アカウント（DDBJ アカウント）](https://www.ddbj.nig.ac.jp/ddbj-account.html)を取得する
2. [D-way](https://ddbj.nig.ac.jp/D-way/) の上部メニュー "BioSample" から BioSample 登録ページへ移動する
3. [New submission] をクリックし新規サンプル登録を作成する
4. 左のタブから順番に内容を**英語**で入力する
5. "SAMPLE TYPE" でサンプルや配列種別に応じた**パッケージ**を選択する
6. パッケージに応じた属性入力用テンプレートファイルをダウンロードする
7. 独自の属性を追加したい場合は右端に属性名と値を追加する
8. 属性ファイルをアップロードして validation を通過させる
9. "OVERVIEW" で内容を確認後、Submit ボタンで投稿する

**制約・注意事項**:
- 1 Submission で登録できるサンプル数の上限は **1,000**。超える場合は Submission を分ける
- 同じパッケージのサンプルのみを 1 Submission にまとめることができる（**パッケージが異なるサンプルを混ぜることはできない**）
- DDBJ センターから登録者に問い合わせた後**三か月以上**回答がない場合は Submission をキャンセルする
- **EBI/NCBI に登録したサンプルを DDBJ に重複して登録しないこと**

### 2-3. 属性値の記入

- 属性ファイルはタブ区切りテキストで、エクセルなどの表計算ソフトで編集可能
- 1 行目に属性名、`*` で示されている属性は必須、2 行目以降に 1 行 1 サンプルで入力する
- 参考: [属性ファイルの記入例（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482)

#### 値がない場合の記載方法（INSDC Missing Value Reporting Standards）

[INSDC ではサンプル属性値が存在しない場合の記載方法を標準化しています](https://www.insdc.org/submitting-standards/missing-value-reporting)。  
**必須属性**に対する値がない場合にのみ標準化された用語を使用します（推奨・任意属性は値を空にするか属性を使用しないでください）。

| INSDC term（トップレベル） | INSDC term（下位） | 定義 | Reporting level term | 定義 |
|----------------------------|--------------------|------|----------------------|------|
| not applicable | — | 情報の報告が不適切 | control sample | 陰性コントロールサンプルのため不適切 |
| not applicable | — | | sample group | 単一の起源を持たないサンプルグループのため不適切 |
| missing | not collected | 期待されるフォーマットの情報が収集されていない | synthetic construct | ab-initio 合成物のため情報が存在しない |
| missing | not collected | | lab stock | 長期管理されている培養細胞株やモデル生物のため未収集 |
| missing | not collected | | third party data | 2023 年の合意以前のレコードでメタデータが収集・報告されていなかった |
| missing | not provided | 期待されるフォーマットの情報が提供されていない | data agreement established pre-2023 | 2023 年 INSDC 標準以前に確立されたデータ合意により提供できない |
| restricted access | — | プライバシーの懸念から公開できない情報が存在する | endangered species | 絶滅危惧種（例 IUCN レッドリスト）のため報告不可 |
| restricted access | — | | human-identifiable | メタデータが個人を特定できるため報告不可 |

`collection_date` と `geo_loc_name` の二つでは適用除外理由の記載が必須です。

#### サンプル属性の Validation

属性ファイルをアップロードすると内容がチェックされます。Error や Warning メッセージが表示された場合は修正して再アップロードします。**Error が解消されない限り Submit（投稿）はできません**。

以下のパッケージと属性セットは「選択必須」（少なくとも一つが必須）になります:

| パッケージ | 選択必須セット 1 | 選択必須セット 2 |
|-----------|----------------|----------------|
| Microbe | strain, isolate | isolation_source, host |
| Model.organism.animal | strain, isolate, breed, cultivar, ecotype | age, dev_stage |
| Metagenome.environmental | isolation_source, host | — |
| Invertebrate | isolate, breed | isolation_source, host |
| Plant | isolate, cultivar, ecotype | age, dev_stage |
| Virus | host, lab_host | — |
| Beta-lactamase | strain, isolate | — |
| Pathogen.cl | strain, isolate | — |
| Pathogen.env | strain, isolate | — |

Validation ルールとメッセージの全一覧: [Validation rules ページ](https://www.ddbj.nig.ac.jp/biosample/validation.html)  
[BioSample validation ルール表（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/1kh9vRllab7t7PBftd0nEBi-YbIWvFVRAiYS6F6RRBNU/edit#gid=1261957088)

### 2-4. アクセッション番号

- 新規 Submission を作成すると **`SSUB` で始まる仮 ID** が自動的に割り当てられる
- D-way から validation を通過したサンプルが投稿されると、プレフィックス **`SAMD`** のアクセッション番号が自動発行される
- 未登録の生物名が `organism` に記載されていた場合、または `locus_tag_prefix` に値がある場合は**キュレータが査定を実施した後**にアクセッション番号が発行される
- D-way でサンプルの進行状況・最新属性 tsv ファイル・アクセッション番号を確認できる

**注意事項**:
- `SSUB` で始まる仮 ID を論文中に引用しないこと
- EBI/NCBI に登録したサンプルを DDBJ に重複して登録しないこと

### 2-5. サンプルの公開

**公開タイミングの選択肢**（公開予定日は設定できない）:

| 設定 | 内容 |
|------|------|
| 査定後すぐに公開 | 即日公開 |
| BioSample アクセッション番号を引用しているデータと同時に公開 | 連動公開（Hold） |

**公開の仕組み**:
- 登録した Sample データは一定期間非公開にすることができる
- DDBJ/DRA/GEA/MetaboBank データが公開されると、引用されている BioSample データは**自動的に公開**される
- BioSample が公開されても、引用している非公開の DDBJ/DRA/GEA/MetaboBank データの公開を**引き起こさない**
- `derived_from` 属性で引用されている BioSample は**連動公開**される

関連FAQ: [BioProject/BioSample/塩基配列データの連動公開の仕組みは？](https://www.ddbj.nig.ac.jp/faq/ja/bp-bs-seq-release.html)

### 2-6. サンプルの更新

- 登録が完了したデータを更新することができる
- [BioProject/BioSample/DRA 更新依頼フォーム](https://forms.gle/cfJ1nf8o612qvzXQ8)から連絡する
- 属性を更新する場合は更新後の属性 tsv ファイルをアクセッション番号通知メールへの**返信メールに添付**する
- 属性 tsv ファイルは D-way からダウンロード可能

---

## 3. BioSample 概要（Overview）

### 3-1. サンプルの粒度

一般的に、**生物学的な試料に対して BioSample を作成**し、そこから抽出された核酸、代謝物などの抽出物は DRA、GEA や MetaboBank のメタデータで表現します。

**Replicate の扱い**:

| 種別 | 扱い |
|------|------|
| biological replicate | サンプルを分けて `biological_replicate` 属性で区別する（例: "biological_replicate = 1"、"biological_replicate = 2"）|
| technical replicate | サンプルを分けず、DRA Experiment/GEA SDRF/MetaboBank SDRF で分ける |

**その他のケース**:
- 植物の葉から調整した RNA、代謝物サンプル → 葉に対応する BioSample を一つ作成し、抽出物は GEA や MetaboBank メタデータで表現する
- 同じサンプルから調整した paired-end library → forward と reverse で BioSample を分けず、一つの DRA Run に両ファイルを含める
- 同じサンプルを異なる機種でシークエンスした場合 → 一つの BioSample に異なる [Instrument model](https://www.ddbj.nig.ac.jp/dra/metadata.html#Instrument) を持つ複数の DRA Experiment をリンクする
- [ゲノムアセンブリ用サンプル](#3-5-ゲノムアセンブリ用サンプル) は locus tag prefix などがあるため、RNA や代謝物サンプルとは別にする
- **DRA のデータファイルは一つの BioSample にしかリンクできない**

**登録例**:

| データ | BioSample 数 |
|--------|-------------|
| 海水中のある採取地点から得られた 23,000 本のユニークな 16S 増幅配列 | 1（1 サンプルが採取され 16S の多様性が解析された） |
| 同じ薬物で処理された三匹の「同一」なトランスジェニックマウス | 3（biological replicate は BioSample で区別） |
| ウイルスに感染させた CHO 細胞を 0, 2, 4, 8 時間後にサンプリング | 4（4 タイムポイント） |
| オスのアリクイ一個体から採取した脳、心臓、肺、精巣、肝臓 | 5（5 つの異なる組織） |

### 3-2. サンプル属性

BioSample を構成する主要部分は「**サンプル属性**」です。属性には採取地や表現型などの情報を記載でき、対象となるサンプルを定義します。属性は構造化された「**属性名:値**（name:value）」の組として表現されます（例: `tissue:liver`）。

- [属性リスト](https://www.ddbj.nig.ac.jp/biosample/attribute.html)
- [定義表（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/1myigsvkiftZ2ReqBAll4n3zajwHfyJfccDZNwlcqNak/edit?gid=631330335#gid=631330335)

BioSample は属性名に統制された語句を使うことをサポートしており、サンプル種別に応じた属性セットを**パッケージ**として提供しています。

### 3-3. 生物名

BioSample の `organism` に記載する生物名については[「生物名について」](https://www.ddbj.nig.ac.jp/ddbj/organism.html)を参照してください。

### 3-4. 採取場所と日時（INSDC 必須）

[INSDC](https://www.insdc.org/) は塩基配列データの品質とトレーサビリティを向上させるため、サンプルの**採取場所**と**採取日時**の記載を必須化しています。([INSDC spatio-temporal annotation standards](https://www.insdc.org/news/spatio-temporal-annotation-policy-18-11-2021/))

| 項目 | 説明 | 該当属性 |
|------|------|---------|
| 採取場所 | データを解釈するうえで意味のある場所。少なくとも国や海洋を記載する | `geo_loc_name` |
| 採取日時 | データを解釈するうえで意味のある日時。少なくとも最も近い「年」を所定書式で記載する | `collection_date` |

これらの情報を提供できない場合や適切でない場合は、[INSDC missing value reporting standards](https://www.insdc.org/submitting-standards/missing-value-reporting/) に従い適用除外理由（exemption term）を記載します。  
→ [採取場所・日時に関する FAQ 集](https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=採取場所・日時)

### 3-5. パッケージ

生物やデータの種類に応じたパッケージを選択します。

#### Standard（生物やサンプルの種類に応じたパッケージ）

| パッケージ | 対象 |
|-----------|------|
| SARS-CoV-2: clinical or host-associated | 公衆衛生に関わる SARS-CoV-2 サンプル |
| SARS-CoV-2: wastewater surveillance | 公衆衛生に関わる SARS-CoV-2 廃水モニターサンプル |
| Microbe | 細菌や単細胞微生物 |
| Model organism or animal | 動物及びマウスやショウジョウバエ等のモデル生物 |
| Metagenome or environmental | メタゲノムや環境サンプル |
| Invertebrate | 無脊椎動物 |
| Human | ヒト由来サンプル（※直接特定できる情報は取り除くこと。保護が必要な場合は [JGA](https://www.ddbj.nig.ac.jp/jga/index.html) へ） |
| Plant | 植物や植物由来の細胞株 |
| Viral | 病気に直接関係しないウイルス（病原ウイルスには Pathogen: clinical or host-associated を使用） |
| Beta-lactamase | 抗生物質耐性を持つ beta-lactamase 遺伝子の形質転換体サンプル |
| Omics | 遺伝子発現、エピジェネティクス、メタボロミクスなどのオミックスデータサンプル |

#### Pathogen（公衆衛生に関わる病原菌サンプル）

| パッケージ | 対象 |
|-----------|------|
| Pathogen: clinical or host-associated | 臨床検体もしくは宿主から採取された病原菌サンプル |
| Pathogen: environmental/food/other | 環境/食品/その他の病原菌サンプル |

#### MIxS（ゲノム・メタゲノム配列用）

| パッケージ | 対象 |
|-----------|------|
| MIGS.ba | 培養された細菌や古細菌のゲノム配列（Bacteria または Archaea） |
| MIGS.eu | 真核生物のゲノム配列（Eukaryota） |
| MIGS.vi | ウイルスのゲノム配列（Viruses） |
| MIMS.me | 環境サンプル由来の配列もしくはメタゲノム配列（生物名は 'metagenome' で終わる名前） |
| MIMAG | メタゲノムアセンブリ配列（生物名に 'metagenome' を含まない。ウイルスには MIUVIG を使用） |
| MISAG | 一細胞ゲノム配列 |
| MIMARKS.specimen | 標本サンプルのマーカー遺伝子配列（例: 16S, 18S, 23S, 28S rRNA や COI） |
| MIMARKS.survey | 環境サンプルから直接解析されたマーカー遺伝子配列（生物名は 'metagenome' で終わる名前） |
| MIUVIG | メタゲノム/metatranscriptome 由来の未培養ウイルスゲノム配列（Viruses） |

#### MIxS Environmental package

MIxS パッケージを選択した場合は、サンプル採取環境に応じた環境パッケージも選択します（採取環境の記載に必要な属性が追加されます）。MIMS.me と MIMARKS.survey は No package を選択できません。

- agriculture / air / built / food-animal / food-farm_env / food-human_foods / food-prod_facility / host-associated / human-associated / human-gut / human-oral / human-skin / human-vaginal / hydrocarbon-cores / hydrocarbon-fluids_swabs / microbial / miscellaneous / plant-associated / sediment / soil / symbiont-associated / wastewater / water

### 3-6. パッケージの選び方

生物やデータの種類に応じたパッケージを選択します。Standard と MIxS の両方に当てはまる場合は[属性リスト](https://www.ddbj.nig.ac.jp/biosample/attribute.html)を見て、サンプルをより適切に記載できる方を選びます。

#### ゲノムアセンブリ用サンプル

DDBJ/ENA/GenBank の制約: **ゲノム配列は一つの BioProject と一つの BioSample を参照すること**。

| 生物種 | 推奨パッケージ |
|--------|-------------|
| 単離培養された原核生物 | Microbe または MIGS.ba |
| 真核生物 | Model organism or animal / Invertebrate / Plant または MIGS.eu |

アノテーション付与のゲノム配列を DDBJ に登録する場合、希望する [Locus tag prefix](https://www.ddbj.nig.ac.jp/ddbj/locus_tag.html) を `locus_tag_prefix` 属性に記載して tag を取得します。

#### メタゲノム用サンプル

| アセンブリ段階 | 推奨パッケージ |
|--------------|-------------|
| 生リード・プライマリーメタゲノム | MIGS.me または Metagenome or environmental |
| Binned メタゲノム・MAG | MIMAG（ウイルスメタゲノムは MIUVIG） |

### 3-7. 派生サンプル（Derived Sample）

混合サンプルなど、複数サンプルから構成される BioSample が必要な場合は、**派生サンプル（derived sample）**を登録し、元となるアクセッション番号を [`derived_from`](https://www.ddbj.nig.ac.jp/biosample/attribute.html#derived_from) 属性にカンマやハイフン区切りで記載します。  
例: `SAMD00000001,SAMD00000002,SAMD00000008-SAMD00000100`

**派生サンプルが必要なケース**:
- 複数サンプル（例: オスとメス）のリードを混合してアセンブルしたゲノム配列を DDBJ に登録する場合（INSDC の「ゲノム配列は一つの BioProject と一つの BioSample を参照すること」制約のため、BioSample を一つにまとめる必要がある）
- 多数の環境サンプルから計算機上で再構成されたメタゲノムアセンブリ（MAG）を登録する場合（MAG 用に派生サンプルを登録し、`derived_from` に由来となる環境サンプルのアクセッション番号を記載する）

### 3-8. ヒトサンプルの登録ガイドライン

ヒト（*Homo sapiens*）サンプルでは **Human パッケージ**で登録します。

| サンプル種別 | 登録ガイドライン |
|------------|---------------|
| 個人由来試料 | `isolate` に匿名化された subject ID を記載する |
| 細胞株 | `cell_type` の記載を推奨 |
| 初代培養細胞 | `sample_type: primary cell` と記載する |
| iPS 細胞（個人由来試料） | `cell_type` に分化に関する情報を記載（例: `cell_type: iPS cell derived megarocyte cell`） |
| iPS 細胞（細胞株） | `cell_type` に分化情報を記載し `biomaterial_provider` に入手元を記載（例: `biomaterial_provider: ATCC`） |

- 複数回の分化を経ている複雑な場合は `description` に説明を記載する
- データを保護する必要がある場合は [Japanese Genotype-phenotype Archive (JGA)](https://www.ddbj.nig.ac.jp/jga/index.html) に登録する

### 3-9. XML スキーマ

[BioSample XML schema（GitHub）](https://github.com/ddbj/pub/tree/master/docs/biosample)

---

## 4. サンプル情報（Sample Information）

> 必須項目: `*`  
> 条件によって必須: `*`（条件付き）

### 4-1. Submitter（登録者情報）

登録に関する連絡はここに記載された E-mail アドレス宛てに行われます。連絡先情報は DDBJ スタッフが使用し、一般に公開されることはありません（代わりに組織情報が公開されます）。

| 項目 | 必須 | 説明 |
|------|------|------|
| First name | * | 登録者の名 |
| Last name | * | 登録者の姓 |
| E-mail | * | 所属組織ドメインのメールアドレスを指定する |
| Submitting organization | * | 組織のフルネーム |
| Submitting organization URL | — | 登録者が所属する組織の URL |

### 4-2. General Info

**Data Release（公開設定）**

"Hold" か "Release" のどちらかを選ぶ。公開予定日は指定できない。

| 設定 | 説明 |
|------|------|
| **Release** | 登録したサンプルは査定された後、公開される |
| **Hold** | BioSample アクセッション番号を引用している DDBJ/DRA/GEA/MetaboBank データが公開されると同時に公開される。この BioSample 番号を引用している非公開の DDBJ/DRA/GEA/MetaboBank データが公開されることはない |

関連FAQ: [データ公開の依頼方法は？](https://www.ddbj.nig.ac.jp/faq/ja/request-release.html)

**External Links（外部リンク）**

| 項目 | 説明 |
|------|------|
| Link description | サンプルに直接関連するリソース URL に付けるラベル（表示名） |
| URL | サンプルに直接関連するリソースの URL |

**Comments**

| 項目 | 説明 |
|------|------|
| Private comments to DDBJ staff | データベーススタッフへの質問やプロジェクトに関する追加情報（非公開） |

### 4-3. Sample package

生物種やデータ種別毎にカスタマイズされた属性から成るパッケージを**一つ選択**します。詳しくは [3-5. パッケージ](#3-5-パッケージ) を参照。パッケージ一覧:

**Standard**: SARS-CoV-2: clinical or host-associated / SARS-CoV-2: wastewater surveillance / Microbe / Model organism or animal / Metagenome or environmental / Invertebrate / Human / Plant / Viral / Beta-lactamase / Omics

**Pathogen**: Pathogen: clinical or host-associated / Pathogen: environmental/food/other

**MIxS**: MIGS.ba / MIGS.eu / MIGS.vi / MIMS.me / MIMAG / MISAG / MIMARKS.specimen / MIMARKS.survey / MIUVIG

**Environmental package**: agriculture / air / built / food-animal / food-farm_env / food-human_foods / food-prod_facility / host-associated / human-associated / human-gut / human-oral / human-skin / human-vaginal / hydrocarbon-cores / hydrocarbon-fluids_swabs / microbial / miscellaneous / plant-associated / sediment / soil / symbiont-associated / wastewater / water

### 4-4. Attributes（属性の入力）

- パッケージ毎の BioSample テンプレートファイルをダウンロードし、属性を入力する
- 属性ファイルをアップロードすると内容がチェックされ、Error/Warning メッセージが表示される
- エラーが解消されるまで次のタブに進めない
- リストにない情報はユーザが定義した独自の属性をタブ区切りテキストファイルの末尾に追加できる

#### organism（生物名）

`organism` には NCBI Taxonomy において、**種もしくはそれ以下のランクで "scientific name"** とされている名称を記載します。

- NCBI Taxonomy に生物名が登録されていない場合、提唱する生物名を `organism` に記入し BioSample を submit する。DDBJ スタッフが NCBI Taxonomy に申請し、登録され次第 BioSample アクセッション番号が発行される

#### locus_tag_prefix

アノテーション付きゲノム配列を DDBJ に登録する場合、[Locus tag prefix](https://www.ddbj.nig.ac.jp/ddbj/locus_tag.html) が必要です。希望するタグ名を `locus_tag_prefix` に記入します。DDBJ スタッフが NCBI に locus tag prefix を予約後、BioSample アクセッション番号が発行されます。

### 4-5. Overview

登録内容を確認し問題がなければ一番下の Submit ボタンをクリックしてサンプルを投稿します。"Submission_ID.txt"（例: SSUB000001.txt）ファイルでアップロードしたサンプル属性の内容をダウンロードできます。

---

## 5. Validation Rules

BioSample 登録システムでチェックしているルール（エラーとワーニング）の全一覧:

- [BioSample validation ルール表（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/1kh9vRllab7t7PBftd0nEBi-YbIWvFVRAiYS6F6RRBNU/edit#gid=1261957088)

---

## 6. サンプル属性（Sample Attribute）

パッケージを選択し、"DEFINITION" でパッケージに含まれる属性一覧と説明を閲覧できます。

- [定義表（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/1myigsvkiftZ2ReqBAll4n3zajwHfyJfccDZNwlcqNak/edit?gid=631330335#gid=631330335)
- 記号凡例: `*` = 必須、`**数字` = 同一数字グループの中で少なくとも一つ必須（選択必須）

**代表的な属性（一部）**:

| 属性名 | 説明 |
|--------|------|
| `organism` | NCBI Taxonomy における生物名（scientific name） |
| `geo_loc_name` | サンプルの採取場所（少なくとも国や海洋を記載） |
| `collection_date` | サンプルの採取日時（少なくとも「年」を所定書式で） |
| `biological_replicate` | biological replicate の番号（例: "1", "2"） |
| `locus_tag_prefix` | アノテーション付きゲノム登録に必要な Locus tag prefix |
| `derived_from` | 派生サンプルの場合、元となる BioSample アクセッション番号（カンマ・ハイフン区切り） |
| `strain` | 微生物の株名 |
| `isolate` | 単離されたサンプルの識別子 |
| `isolation_source` | サンプルの採取環境 |
| `host` | 宿主生物名 |
| `tissue` | 組織名（例: liver） |
| `cell_type` | 細胞の種類 |
| `cell_line` | 細胞株名 |
| `sample_type` | サンプルの種類（例: primary cell） |
| `biomaterial_provider` | 生物試料の入手元 |
| `age` | サンプルの年齢・日齢など |
| `dev_stage` | 発生ステージ |
| `description` | サンプルに関する補足説明 |

属性の登録例: [Google スプレッドシート（記入例）](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482)

---

## 7. FAQ — BioSample 関連

### Q. BioSample を更新するには？

サンプルの更新や削除は [BioSample チームに連絡](https://forms.gle/mpGqxbSeYmy5oTud6)します。BioSample が更新されると、D-way サンプル登録画面 ATTRIBUTES の属性ファイル（例: SSUB000001.txt）に反映されるので、ダウンロードして更新内容を確認できます。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/sample-update.html）

---

### Q. BioSample、DRA Experiment、Run とデータファイルとの関係は？

- **BioSample**: 実験データを得るために使われた生物学的な試料やサンプルに対して作成する。DRA のデータファイルは**一つの BioSample にしかリンクできない**
- **Experiment**: 特定のサンプルに由来するシークエンス用ライブラリーとシークエンス方法を記載する。データについて一般に公開される情報の多くが Experiment に記載される
- **Run**: Experiment にリンクすべきデータファイルをまとめるオブジェクト。Run にリストされたすべてのデータファイルはアーカイブ用の SRA ファイル（配布用の fastq ファイル）にマージされる  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/biosample-bioproject-sra.html）

---

### Q. BioProject/BioSample/実験データの連動公開の仕組みは？

| トリガー（公開されたデータ） | 連動公開される対象 |
|----------------------------|--------------------|
| BioProject の公開 | リンクされているデータの連動公開を**引き起こさない** |
| BioSample の公開 | `derived_from` 属性で引用されている BioSample の連動公開を**引き起こす** |
| DDBJ、DRA、GEA、MetaboBank の公開 | リンクしている **BioProject と BioSample** の連動公開を引き起こす |
| DDBJ の公開 | DBLINK で参照している **DRA Run** の公開を引き起こす |
| GEA の公開 | 参照している **DRA Run** の公開を引き起こす |
| DRA の公開 | DDBJ の連動公開を**引き起こさない** |

（参照: https://www.ddbj.nig.ac.jp/faq/ja/bp-bs-seq-release.html）

---

### Q. 論文情報を追加するには？

担当者が登録データに論文情報を記載します。所定のフォームから論文の **PubMed ID**（推奨）もしくは **DOI** をお知らせください。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/add-publication.html）

---

### Q. 投稿論文ではどのアクセッション番号を引用するべきか？

投稿する論文の規定に従ってください。基本的には登録データに対するアクセッション番号（例: DDBJ 塩基配列や DRA Run アクセッション番号）の引用を推奨します。データ全体を言及する場合は **BioProject アクセッション番号**を引用します（ただし、論文中のデータと登録データが対応付けられるようにメタデータが記載されていることが必要）。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/cite-accession.html）

---

### Q. データ公開の依頼方法は？

データ公開を希望する場合、DDBJ/DRA/GEA/MetaboBank データに対するアクセッション番号または Submission ID で公開対象を指定します。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/request-release.html）

---

### Q. 必須のサンプル属性に対する値がない場合は？

[値がない場合の記載方法](https://www.ddbj.nig.ac.jp/biosample/submission.html#missing-value-reporting)（INSDC missing value reporting standards）をご覧ください。  
`collection_date` と `geo_loc_name` では理由の記載が必須です。

---

### Q. env_broad_scale, env_local_scale, env_medium の違いは？

これら三つのサンプル属性では、生息している生物に影響する環境について記述します。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/biome-feature-material.html）

---

### Q. BioSample で適切な属性を探す方法は？

[属性リスト](https://www.ddbj.nig.ac.jp/biosample/attribute.html)から検索するか、[定義表（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/1myigsvkiftZ2ReqBAll4n3zajwHfyJfccDZNwlcqNak/edit)を参照してください。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/biosample-attributes.html）

---

### Q. サンプルがバーコード配列によって区別されている場合のメタデータは？

バーコード配列で由来サンプルが区別されたデータファイルは登録前に分割し、由来サンプルごとに BioSample を作成します。各 BioSample には１つかそれ以上のユニークなデータファイルがリンクされている状態にします。バーコード配列とサンプルの対応は、Experiment の [Library Construction Protocol](https://www.ddbj.nig.ac.jp/dra/metadata.html#Library_Construction_Protocol) にフリーテキストで記載します。  
（参照: https://www.ddbj.nig.ac.jp/faq/ja/metadata-of-multiplexed-samples.html）

---

## 8. 検索・ダウンロード（Search / Downloads）

### 検索

公開されている BioSample データは以下から検索できます:
- **DDBJ Search**: http://ddbj.nig.ac.jp/search/

### ダウンロード

公開されている BioSample データのバルクダウンロードは以下から取得できます:
- **FTP**: https://ddbj.nig.ac.jp/public/ddbj_database/biosample/

---

## 9. リンク集

| ページ | URL |
|--------|-----|
| BioSample ホーム | https://www.ddbj.nig.ac.jp/biosample/index.html |
| サンプルの登録（Submission） | https://www.ddbj.nig.ac.jp/biosample/submission.html |
| BioSample 概要（Overview） | https://www.ddbj.nig.ac.jp/biosample/overview.html |
| サンプル情報（Sample Information） | https://www.ddbj.nig.ac.jp/biosample/sample-info.html |
| Validation Rules | https://www.ddbj.nig.ac.jp/biosample/validation.html |
| サンプル属性（Sample Attribute） | https://www.ddbj.nig.ac.jp/biosample/attribute.html |
| 属性記入例（Google スプレッドシート） | https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/ |
| 定義表（Google スプレッドシート） | https://docs.google.com/spreadsheets/d/1myigsvkiftZ2ReqBAll4n3zajwHfyJfccDZNwlcqNak/ |
| Validation ルール表（Google スプレッドシート） | https://docs.google.com/spreadsheets/d/1kh9vRllab7t7PBftd0nEBi-YbIWvFVRAiYS6F6RRBNU/ |
| FAQ（BioSample タグ） | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=biosample |
| FAQ: 連動公開の仕組み | https://www.ddbj.nig.ac.jp/faq/ja/bp-bs-seq-release.html |
| FAQ: BioSample の更新 | https://www.ddbj.nig.ac.jp/faq/ja/sample-update.html |
| FAQ: BioSample・DRA の関係 | https://www.ddbj.nig.ac.jp/faq/ja/biosample-bioproject-sra.html |
| FAQ: アクセッション番号の引用 | https://www.ddbj.nig.ac.jp/faq/ja/cite-accession.html |
| FAQ: データ公開の依頼 | https://www.ddbj.nig.ac.jp/faq/ja/request-release.html |
| FAQ: 論文情報の追加 | https://www.ddbj.nig.ac.jp/faq/ja/add-publication.html |
| FAQ: 属性値がない場合 | https://www.ddbj.nig.ac.jp/faq/ja/no-value-for-attributes.html |
| FAQ: 適切な属性の探し方 | https://www.ddbj.nig.ac.jp/faq/ja/biosample-attributes.html |
| FAQ: バーコード配列のメタデータ | https://www.ddbj.nig.ac.jp/faq/ja/metadata-of-multiplexed-samples.html |
| FAQ: 採取場所・日時 | https://www.ddbj.nig.ac.jp/faq/ja/index.html?tag=採取場所・日時 |
| 検索 | http://ddbj.nig.ac.jp/search/ |
| ダウンロード | https://ddbj.nig.ac.jp/public/ddbj_database/biosample/ |
| D-way ログイン | https://ddbj.nig.ac.jp/D-way/ |
| 更新依頼フォーム | https://forms.gle/cfJ1nf8o612qvzXQ8 |
| BioSample チーム連絡フォーム | https://forms.gle/mpGqxbSeYmy5oTud6 |
| INSDC Missing Value Reporting | https://www.insdc.org/submitting-standards/missing-value-reporting |
| INSDC spatio-temporal annotation standards | https://www.insdc.org/news/spatio-temporal-annotation-policy-18-11-2021/ |
| XML スキーマ（GitHub） | https://github.com/ddbj/pub/tree/master/docs/biosample |
| EBI BioSamples | https://www.ebi.ac.uk/biosamples/ |
| NCBI BioSample | https://www.ncbi.nlm.nih.gov/biosample |
| JGA（制限公開データ） | https://www.ddbj.nig.ac.jp/jga/index.html |
