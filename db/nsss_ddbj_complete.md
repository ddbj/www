# DDBJ 塩基配列登録システム NSSS (Nucleotide Sequence Submission System) — 完全ガイド

> 出典: https://www.ddbj.nig.ac.jp/ddbj/web-submission.html  
>       https://www.ddbj.nig.ac.jp/ddbj/web-submission-help.html  
> 取得日: 2026年5月

---

## 目次

1. [NSSS とは](#1-nsss-とは)
2. [NSSS で登録すべきデータ / MSS を使うべきデータ](#2-nsss-で登録すべきデータ--mss-を使うべきデータ)
3. [登録を始める前に](#3-登録を始める前に)
4. [登録ステップ詳細](#4-登録ステップ詳細)
5. [アノテーション入力の詳細](#5-アノテーション入力の詳細)
6. [Error / Warning](#6-error--warning)
7. [登録データの更新・お問い合わせ](#7-登録データの更新お問い合わせ)
8. [リンク集](#8-リンク集)

---

## 1. NSSS とは

**NSSS（DDBJ Nucleotide Sequence Submission System）** は、**アノテーションをつけた塩基配列を Web 経由で登録できるシステム**です。

- 登録 URL: https://ddbj.nig.ac.jp/submission/
- **新規登録専用**（修正・更新には使用しない）
- 推奨ブラウザ: Google Chrome、Microsoft Edge、Mozilla Firefox

ヒトを対象とした研究データを登録する場合は、[「ヒトを対象とした研究データの登録について」](https://www.ddbj.nig.ac.jp/policies.html#submission-of-human-data)を事前に必ず確認してください。

---

## 2. NSSS で登録すべきデータ / MSS を使うべきデータ

NSSS は以下に**該当しない**データを対象とします。該当する場合は **MSS** を使用してください。

### a) 種別・量が以下に該当する場合 → MSS

- データ種別: EST / TSA / HTC / GSS / HTG / WGS / TLS / TPA
- 1配列が **500 kb 以上**
- 1配列あたりの Feature が **30 以上**
- 登録する配列の総数が **100 を超える**

### b) レプリコン全長規模相当の配列データ → MSS

- 核ゲノム・染色体
- オルガネラゲノム
- ウイルス・ファージのゲノム / segment
- プラスミド

### c) DBLINK に BioProject / BioSample の記載が必要なデータ → MSS

- メタゲノム的解析・環境プロファイル解析全般
- 標的遺伝子を限定した配列データを相互に関連付ける場合
- 全長規模ゲノム配列と同一菌株由来の配列データ（16S rRNA 報告義務がある場合や他の標的遺伝子を先行発表する場合など）

### d) TPA データ → MSS

本ツールは以前は少件数の TPA データの登録に対応していましたが、**現在は登録できません**。  
参照: [2025年1月以降、TPA-Exp および TPA-Inf の data type の新規登録を休止](https://www.ddbj.nig.ac.jp/news/ja/2024-09-05.html)

---

## 3. 登録を始める前に

1. [「塩基配列の登録の前に」](https://www.ddbj.nig.ac.jp/ddbj/submission.html) を読む
2. [「登録前に必要な処理」](https://www.ddbj.nig.ac.jp/ddbj/sequence.html#process) を確認する
3. 登録する配列からベクター・アダプター等由来の配列を除く（[VecScreen](http://ddbj.nig.ac.jp/vecscreen/) で確認可能）
4. https://ddbj.nig.ac.jp/submission/ にアクセスし [Create new submission] をクリックして開始

**入力の中断・再開方法**:
- "Hold date" 以降の各ページで "Next" をクリック後にブックマークすれば、ブラウザを閉じても再開できる
- "7.Annotation" ページでは "Next" 前でも入力内容は保持される

---

## 4. 登録ステップ詳細

### Step 1. Contact person（コンタクトパーソン）

コンタクトパーソンの情報を入力します。

| 項目 | 内容 |
|------|------|
| Full name | コンタクトパーソンの氏名（フルネーム） |
| E-mail | 連絡先メールアドレス |

入力後 "Next" をクリックすると、入力したメールアドレス宛に自動メールが送信されます。メール本文内のリンクをクリックすると続きから入力再開できます。

### Step 2. Hold date（公開予定日）

カレンダーから公開日を選択、または即日公開を希望する場合は "Release immediately" にチェックを入れます。

- 年末・年始は DDBJ が公開作業を停止するため選択できない
- 選択できる日付は**最大3年後まで**

### Step 3. Submitter（登録者）

登録者名を入力します。

**書式**: `Last name[comma]Initial of first name[period]Initial of middle name[period]`

例:
```
Miyashita,Y.
Robertson,G.R.
Mishima-Tokai,H.
```

- コンタクトパーソンの氏名が自動変換されて表示される
- 登録者を追加できる（**DDBJ では複数の登録者の指定を推奨**。将来、修正が必要な際に連絡が取れなくなるケースを防ぐため。学生などが研究指導者の連名なしに独りで登録することは原則認められない）
- 公開された塩基配列ファイルには入力した順に名前が表示される

### Step 4. Reference（論文情報）

登録する配列に直接関係する論文情報（Primary citation）を入力します。

#### Status の選択肢と入力内容

| Status | 選択条件 | 必須入力項目 |
|--------|---------|------------|
| **Unpublished** | 論文準備中・投稿中・作成予定がない場合 | Year（自動入力）、Title、Authors |
| **In press** | 論文が受理されている場合 | Year、Journal（略称）、Title、Authors |
| **Published** | 論文が公開されている場合 | Year、Journal（略称）、Title、Volume、Page、Authors（、DOI）|

**論文の著者名書式**: `Last name[comma]First name 頭文字[period]Middle name 頭文字[period]`

**Journal name**: PubMed type abbreviation（略称）で入力する。補完機能あり。NLM Catalog で調べることができます: https://www.ncbi.nlm.nih.gov/nlmcatalog

REFERENCE を追加する場合は [Add another reference] で入力欄を追加できます。

### Step 5. Sequence（塩基配列）

塩基配列をペーストまたはファイルをアップロードします。

**対応形式**: Multi-FASTA 形式

#### Entry name（エントリー名）の規則

- 24文字以内の半角英数記号
- 使用不可文字: スペース、`"` (double-quote)、`?`、`¥`（yen sign）、`\`（back-slash）
- 各エントリに異なる名称をつけること（同じ Entry name はエラー）

#### 塩基配列の書式

```fasta
>CLN01
ggacaggctgccgcaggagccaggccgggagcaggtggtggaagacagacctgtaggtgg
aagaggcttcgggggagccggagaactgggccagacc...
>CLN02
ctcacacagatgctgcgcacaccagtggttgtaacaatgccgtttgcctccttcaggtct
...
```

- エントリ間の区切り `//` は自動挿入されるため不要（入れても可）
- 使用可能塩基: `a, c, g, t, m, r, w, s, y, k, v, h, d, b, n`
- スペース・数字は自動削除される
- 大文字は自動的に小文字に変換される
- TPA の submission は不可（MSS を利用）

**注意**: アノテーション入力後にこのフォームで塩基配列の内容を変更すると、"7. Annotation" で入力した内容はすべて失われます。

### Step 6. Template（テンプレート選択）

アノテーションに適合するテンプレートを選択します。

1. 適切な **taxonomic division** を選択する
2. **アノテーションテンプレート** を選択する
3. リストに該当がない場合、またはアノテーションファイルをアップロードする場合は **"other"** を選択
   - "other" 選択時はテーブル形式のアノテーション入力は利用できない

4. テンプレート選択後、以下のいずれかをクリック:
   - **Input annotation**: 画面でアノテーションを入力する
   - **Upload annotation file**: アノテーションファイルをアップロードする

**注意**: このページでテンプレート変更を行うと、"7. Annotation" で入力した内容は失われます。

### Step 7. Annotation（アノテーション入力）

#### Template で "other" 以外を選択した場合

テーブル形式でアノテーションを入力します。

| 操作 | 説明 |
|------|------|
| Qualifier 追加・削除 | qualifierを追加または削除 |
| Edit アイコン | エントリーごとにアノテーションを入力 |
| セルのダブルクリック | セルごとに直接入力 |
| "Pen & Note" ボタン | 縦列（全エントリ）を一括編集。Fill Down で後続エントリにコピー可 |
| "Edit Column" ボタン | 縦列ごとに入力・複数列へのペースト。エクセルやテキストエディタからコピペ可（エントリ間は改行で区切る） |
| "Select qualifier" ボタン | 追加したい qualifier にチェックを入れて Save |
| Confirm | アノテーションチェック実行。エラーがなくなるまで修正が必要 |

#### Template で "other" を選択した場合

Location や Qualifier を直接クリックして入力します。Edit アイコンでエントリーごとに入力できます。

#### 生物名（Organism name）

学名を入力すると補完機能が働き候補がリストされます。候補から選択して "OK" で確定します。

NCBI Taxonomy database に未登録の場合: Category リストから該当するカテゴリを選択します。  
詳細: [生物名入力におけるカテゴリ（Category）について](https://www.ddbj.nig.ac.jp/ddbj/organism.html#deasy)

#### アノテーション例

| 種別 | 主な Feature / Qualifier |
|------|------------------------|
| 16S rRNA | source (organism, mol_type) + rRNA (product: 16S rRNA) |
| CDS | source + CDS (product, codon_start, transl_table 等) |
| Mitochondrial cytb - tRNA-Pro | source + CDS (gene: cytb 等) + tRNA (product: tRNA-Pro) |

#### アノテーションファイルのアップロード方法

1. Template で taxonomic division を選択し、アノテーションタイプは "other" を選択する
2. [Upload annotation file] をクリック
3. アノテーションファイルを指定する
4. [Upload & Confirm] をクリック（エラーがある場合はファイルを修正して再実行）

**アップロード可能なアノテーションファイルの条件**:
- [サンプルファイル](https://www.ddbj.nig.ac.jp/assets/files/example/mtDNA.txt) をダウンロードして参考にできる
- [Biological Feature](https://www.ddbj.nig.ac.jp/ddbj/file-format.html#biological_feature) を含めること
- タブ区切りテキストファイルであること
- WGS / TSA / TLS / EST / HTC / GSS / STS / HTG のアノテーション、TPA 用アノテーション、DBLINK や ST_COMMENT が記載されたアノテーションは**対応しない**（MSS を使用）
- アップロードされたファイルの先頭には Contact person / Hold date / Submitter / Reference に入力された内容が COMMON 情報として挿入される
- "COMMON" を含むアノテーションファイルをアップロードした場合、COMMON は上記の入力内容に置換される

**アノテーションファイルがアップロードエラーになる主な原因**:

| 原因 | 対処 |
|------|------|
| エクセルで作成したファイルをそのまま保存 | テキストエディタにコピーしてからタブ区切りテキストファイルとして保存する |
| Entry name が "5. Sequence" で入力した配列名と一致しない、または入力順序が違う | 配列名と順序を一致させる |
| タブ区切りカラムが崩れている | カラム構成を確認する |
| 余計なスペース・不正文字（全角、unicode、unprintable character） | 除去する |
| source フィーチャーのみ | 適切な Biological Feature を追加する |

#### アミノ酸配列を得るには

CDS feature の翻訳アミノ酸配列を確認する方法: [FAQ: /translation qualifier を確認する方法](https://www.ddbj.nig.ac.jp/faq/ja/how-to-confirm-translated-amino-acid-seq.html)

外部サービス:
- [ORF finder（NCBI）](https://www.ncbi.nlm.nih.gov/orffinder/)
- [EMBOSS Transeq（EBI）](https://www.ebi.ac.uk/jdispatcher/st/emboss_transeq)

### Final page（最終確認）

1. アノテーションファイルと塩基配列ファイルをダウンロードして確認できる
2. 該当する場合、追加情報を入力する
3. [Submit] をクリックで登録完了（完了後に前のページには戻れない）

### Step 8. Finish

この画面が表示された時点で submission 完了です。入力内容は自動的に DDBJ の登録用サーバーに転送されます。Contact person のアドレス宛に completion メールが自動送信されます。

- アノテーションファイルと塩基配列ファイルの形式でダウンロード可能（これらのファイルが DDBJ 登録用サーバーに転送される）
- Finish ページをブックマークすると、submission 完了後から一定期間内は閲覧可能

---

## 5. アノテーション入力の詳細

### NSSS での入力と MSS アノテーションファイルの対応

NSSS で入力した内容は、DDBJ のアノテーションファイル形式（タブ区切りテキスト）に変換されます。以下は主な項目の対応関係です。

| NSSS 入力項目 | アノテーションファイルの Feature / Qualifier |
|-------------|-------------------------------------------|
| Contact person | COMMON > SUBMITTER > contact, email, institute 等 |
| Submitter | COMMON > SUBMITTER > ab_name |
| Hold date | COMMON > DATE > hold_date |
| Reference | COMMON > REFERENCE > title, ab_name, status, journal 等 |
| Organism name | source > organism |
| mol_type | source > mol_type |
| CDS | CDS feature > product, codon_start, transl_table 等 |
| rRNA | rRNA feature > product |

---

## 6. Error / Warning

アノテーションの Confirm 実行後にエラー・ワーニングが表示されます。

| 種別 | 動作 |
|------|------|
| **Error** | Next をクリックできない。エラーが解消されるまで修正が必要 |
| **Warning** | Next をクリック可能。内容を見直して問題なければそのまま進める |

- エラー対象エントリは画面をスクロールアップしてアノテーション入力領域で確認・修正する
- Submitter / Reference / Sequence に Error/Warning が生じた場合: プログレスバーの各ページをクリックして修正後、"Next" を押してから "7.Annotation" をクリックして戻る
- Validator エラーメッセージの詳細: https://www.ddbj.nig.ac.jp/ddbj/validator.html
  - コード番号から直接リンク可能: 例 https://www.ddbj.nig.ac.jp/ddbj/validator.html#JP0015

---

## 7. 登録データの更新・お問い合わせ

| 用途 | 連絡先 |
|------|------|
| アクセッション番号取得済みデータの修正 | [DDBJ 更新依頼フォーム](https://forms.gle/mcQaJshvAKRdggz16) |
| 入力途中でのトラブル | Submission ID とともに [お問い合わせフォーム](https://forms.gle/zV4cYCnRCefd4FSz9) |
| 一般的なお問い合わせ | [お問い合わせフォーム](https://forms.gle/zV4cYCnRCefd4FSz9) |

---

## 8. リンク集

| ページ | URL |
|--------|-----|
| NSSS 登録開始 | https://ddbj.nig.ac.jp/submission/ |
| Web 版塩基配列登録システム (NSSS) 概要 | https://www.ddbj.nig.ac.jp/ddbj/web-submission.html |
| NSSS ヘルプページ | https://www.ddbj.nig.ac.jp/ddbj/web-submission-help.html |
| 塩基配列の登録（登録前の説明） | https://www.ddbj.nig.ac.jp/ddbj/submission.html |
| 登録データの修正・更新 | https://www.ddbj.nig.ac.jp/ddbj/update.html |
| DDBJ 更新依頼フォーム | https://forms.gle/mcQaJshvAKRdggz16 |
| お問い合わせフォーム | https://forms.gle/zV4cYCnRCefd4FSz9 |
| Validator エラーメッセージ | https://www.ddbj.nig.ac.jp/ddbj/validator.html |
| Feature key の定義 | https://www.ddbj.nig.ac.jp/ddbj/features.html |
| Qualifier key の定義 | https://www.ddbj.nig.ac.jp/ddbj/qualifiers.html |
| Organism qualifier に記載する生物名 | https://www.ddbj.nig.ac.jp/ddbj/organism.html |
| 生物名入力のカテゴリ | https://www.ddbj.nig.ac.jp/ddbj/organism.html#deasy |
| タンパク質コード配列（CDS） | https://www.ddbj.nig.ac.jp/ddbj/cds.html |
| Location の記述法 | https://www.ddbj.nig.ac.jp/ddbj/location.html |
| 配列データ記載例 | https://www.ddbj.nig.ac.jp/ddbj/example.html |
| 登録ファイル形式 | https://www.ddbj.nig.ac.jp/ddbj/file-format.html |
| アノテーションファイルのサンプル | https://www.ddbj.nig.ac.jp/assets/files/example/mtDNA.txt |
| MSS（大規模登録） | https://www.ddbj.nig.ac.jp/ddbj/mss.html |
| VecScreen（ベクター配列チェック） | http://ddbj.nig.ac.jp/vecscreen/ |
| ORF finder（NCBI） | https://www.ncbi.nlm.nih.gov/orffinder/ |
| EMBOSS Transeq（EBI） | https://www.ebi.ac.uk/jdispatcher/st/emboss_transeq |
| NLM Catalog（Journal 略称検索） | https://www.ncbi.nlm.nih.gov/nlmcatalog |
| 塩基配列について | https://www.ddbj.nig.ac.jp/ddbj/sequence.html |
| データ公開原則 | https://www.ddbj.nig.ac.jp/insdc/data-release-policy.html |
| TPA 登録休止のお知らせ（2025年1月以降） | https://www.ddbj.nig.ac.jp/news/ja/2024-09-05.html |
| FAQ: /translation qualifier の確認方法 | https://www.ddbj.nig.ac.jp/faq/ja/how-to-confirm-translated-amino-acid-seq.html |
