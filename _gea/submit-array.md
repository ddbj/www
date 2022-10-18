---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Submit microarray experiment
category: gea
current_tab: submission overview
lang: ja
---

## GEA 登録の流れ  {#gea-submission-flow}

### 1. 登録アカウントを取得  {#account}

- [D-way 登録アカウント](https://ddbj.nig.ac.jp/D-way/)を作成
- [公開鍵と center nameをアカウントに登録](/account.html#enable-dra-submission-in-account)しGEA 登録を可能に

### 2. BioProjectとBioSampleを登録 {#bioproject-biosample}

#### [BioProject](/bioproject/submission.html)  {#BioProject}

- 研究プロジェクトの内容

#### [BioSample](/biosample/submission.html) <img src="/assets/images/parts/tsv.png" alt="" title="" class="tsv"> {#BioSample}

- 実験データを得るのに使われた生物学的、物理的にユニークなサンプル

<img src="/assets/images/parts/tsv.png" alt="" title="" class="tsv">
メタデータをタブ区切りテキストファイルで登録できます

### 3. 生データと解析済みデータファイルをアップロード   {#upload}

- GEA 登録用ディレクトリに生データと解析済みデータファイルをアップロード
- \[必要であれば\] アレイデザインが [ArrayExpress](https://www.ebi.ac.uk/biostudies/arrayexpress/studies?query=type%3Aarray)/GEA に未登録の場合、GEA 登録用ディレクトリにデータファイルと一緒にアレイデザインファイルをアップロード

### 4. BioProjectとBioSampleを選択 {#select-bp-bs}

- GEA 登録で参照する BioProject を一つ選択
- GEA 登録で参照する複数 BioSample を選択。通常の GEA 登録は一つ以上のサンプルで構成されます

### 5. IDF と SDRF を作成 {#create-idf-sdrf}

#### IDF  {#idf}

- [IDF (Investigation Description Format)](/gea/metadata.html#idf) ファイルで実験デザイン、プロトコールや文献情報といった実験全体を記述します

#### SDRF <img src="/assets/images/parts/tsv.png" alt="" title="" class="tsv"> {#sdrf}

- [SDRF (Sample and Data RelationshipFormat)](/gea/metadata.html#sdrf) ファイルでサンプル属性とサンプル、アレイ、データファイル間の関係性を記述します
- 選択した BioProject と BioSample の内容から生成された SDRF テンプレートファイルに必要な情報を追加します

### 6. IDFとSDRFを投稿しデータファイルを検証する   {#validation}

- 登録ウェブシステムから IDF と SDRF を投稿するとアップロードしたデータファイルの[検証処理](/gea/validation.html)が自動的に始まります
- 検証処理を通過した登録が査定されます

## 登録前のチェックリスト  {#checklist}

### Two-color microarray experiment {#two-color}

GEA 登録インターフェースは二つのサンプルが一つの生データファイルにリンクしているタイプのtwo-colorワークフローのみをサポートしています([例を参照](/gea/example.html#sdrf_example2))。 IDF タブで dual-channel オプションが選択された場合、同時にハイブリダイズした二サンプルに由来する一つのデータファイルが提供されることを想定しています。いくつかの two-color マイクロアレイプラットフォームでは通常それぞれのチャンネルに対応した別々の生データファイルが生成されます。このようなケースでそれぞれのサンプルに一つのファイルを結びつけると検証処理でエラーになります。

各チャンネルに対応した別々のファイルを登録する場合は [GEA チームに連絡](/contact-ddbj.html)してください。

### Single-cell sequencing experiment {#single-cell}

[ArrayExpress Single-cell submissionguide](https://www.ebi.ac.uk/arrayexpress/help/single-cell_submission_guide.html) を参照してください。 spike-in やデータ解析に必要な追加ファイルを登録する場合は [GEA チームに連絡](/contact-ddbj.html)してください。

### More than one technology per experiment {#technologies}

GEA では一つの登録に異なる種類のテクノロジー（マイクロアレイとシークエンシング）を含めることはできないため登録を分ける必要があります。間違いを防ぐためそれぞれの登録には同じ研究に属していても明確に区別できるタイトルを付けてください。
一つの登録に異なるアレイデザインを含めることは可能なので、このような場合は [GEA チームに連絡](/contact-ddbj.html)してください。

## Microarray experiment の登録  {#array-sub}

### 新規登録の作成  {#create-new-submission}

[D-way](https://ddbj.nig.ac.jp/D-way/) にログインするとトップページが表示されます。上部の GEA メニューから GEA 登録サイトに移動します。

"Microarray"を選択した状態で\[New submission\]をクリックして microarray experimentsubmission を作成します。作成と同時に DDBJ ファイルサーバ (ftp-private.ddbj.nig.ac.jp) に対応する GEA 登録用サブディレクトリが登録者のホーム下に作成されます。このサブディレクトリに[データファイルをアップロード](#upload-data)します。

<div class="attention" markdown="1">
DDBJ センターから登録者に問い合わせた後三か月以上回答が無い場合は Submission をキャンセルいたします。
</div>

<div class="attention">
1 submission で登録できる SDRF Assay 数の上限は 1,000 です。これを超える場合は submission を分けてください。
</div>

{% include image.html url="books/array-sub1.jpg" caption="Microarray experiment submission の新規作成" class="w450" %}


登録のステータスには以下のものがあります。 "Data Validated" と "Validation Error" になった登録が査定されます。

登録のステータス一覧
{: .tablecaption}

| ステータス            | 説明                            |
|---|
| New              | メタデータの投稿前                     |
| Data Submitted   | メタデータとデータファイルが投稿された           |
| Data Validating  | データファイルの検証処理中                 |
| Validation Error | データファイルの検証処理エラー               |
| Data Validated   | メタデータとデータファイルの検証処理が完了         |
| Curating         | キュレータが登録を査定中                  |
| Accession Issued | アクセッション番号が発行された               |
| Confidential     | 公開用ファイルの作成処理が完了し、非公開に保たれている状態 |
| Public           | 公開されている状態                     |


### 生データと解析済みファイルのアップロード   {#upload-data} 

データファイルのアップロード方法は「[データのアップロード](/upload.html)」をご覧ください。

### Submission  {#Submission-tab}

四年以内の公開予定日指定、もしくは、データ処理後即日公開を選択します。登録者の名前と所属組織は公開されますがメールアドレスは公開されません。

<div class="attention">
"Delete submission" で投稿前の登録を削除することができます。
</div>


{% include image.html url="books/array-sub2.jpg" caption="登録管理情報を入力します" class="w550" %}


### BioProject  {#BioProject-tab}

自身のアカウントで登録済みのBioProjectを一つ選択します。 BioProject が未登録の場合は [BioProject登録サイト](/bioproject/submission.html#bioproject-submission)でプロジェクトを登録します。

他のアカウントで登録された BioProject を参照したい場合は [GEA チームに連絡](/contact-ddbj.html)します。


{% include image.html url="books/gea-bp.jpg" caption="GEA 登録で使う BioProject を一つ選択します" class="w550" %}


### BioSample  {#BioSample-tab}

自身のアカウントで登録済みの BioSample を選択します。 BioSample が未登録の場合は [BioSample登録サイト](/biosample/submission.html#biosample-submission)でサンプルを登録します。

他のアカウントで登録された BioSample を参照したい場合は [GEA チームに連絡](/contact-ddbj.html)します。


{% include image.html url="books/gea-bs.jpg" caption="GEA 登録で使うBioSampleを選択します" class="w550" %}


### IDF  {#idf-tab}

[IDF(Investigation Description Format)](/gea/metadata.html#idf) の内容を入力します。

[IDFの例](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=0)

- Protocol: チェック済みのプロトコールは必須です
- Publication: 関連する文献を PubMed ID もしくは DOI で指定します。未公表の文献についてはIDが発行された後に[お知らせください](/contact-ddbj.html)。
- Array Design: [ArrayExpress](https://www.ebi.ac.uk/biostudies/arrayexpress/studies?query=type%3Aarray)/GEA にアレイデザインが登録されている場合は "A-XXXX-n" のアクセッション番号を記入します。アレイデザインが未登録の場合は GEA 登録用ディレクトリにアレイデザインファイルをアップロードして [新規アレイデザインを登録](/gea/adf.html) します。
- Data File Type: マイクロアレイ実験の場合は生データと解析済みデータが必須です。サンプル毎の生データ・解析済みデータファイルの登録を強く推奨します[マイクロアレイ実験に登録可能なファイル形式](/gea/datafile.html#array_data)。


{% include image.html url="books/array-idf.jpg" caption="IDF の内容を入力" class="w600" %}


### SDRF  {#sdrf-tab}


{% include image.html url="books/array-sdrf.jpg" caption="SDRF テンプレートファイルをダウンロード" class="w600" %}


[SDRF(Sample and Data Relationship Format)](/gea/metadata.html#sdrf)
テンプレートファイルをダウンロードして必要な情報を追加します。

[SDRFの例](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=657626667)

自動生成される内容

- 各Nameカラムと Source Name の Attribute カラム: 選択された BioSample の内容から自動生成されます
- SDRF行: 1行 1 BioSample で行が自動生成されます
- Protocol: IDF で作成されたプロトコールはSDRFの適切な個所にプロトコール ID (例ESUB000350\_Protocol\_1) として挿入されます
- Technology Type: マイクロアレイ登録の場合は "array assay" が固定入力されます
- Array Design REF: IDF で指定されたアレイデザインアクセッション番号、もしくは、アレイデザインファイル名が自動入力されます

\<Required: fill in the content\> タグを上書きして必須項目を入力します。

追加入力が必要な項目

- Material Type: [controlled term](/gea/metadata.html#Material_Type) から適切な語句を一つ記入します。
    - total RNA
    - polyA RNA
    - cytoplasmic RNA
    - nuclear RNA
    - genomic DNA
    - protein
    - other
- Label: biotin、 Cy3 や Cy5 等の抽出分子を標識したラベル化合物名を記入します。
- Array Data FileとComment\[Array Data File md5\]: 生データファイルのファイル名と [md5 チェックサム値](#supplement-md5) の組を記入します。
- Derived Array Data File と Comment\[Derived Array Data File md5\]: 解析済みデータファイルのファイル名と [md5 チェックサム値](#supplement-md5) の組を記入します。
- データファイルと md5 チェックサム値の組は [md5sum コマンド](#supplement-md5)の結果を \<GEA submission ID\>.md5 (例 ESUB000001.md5) ファイルとしてデータファイルと一緒に提供することもできます（SDRFと .md5 ファイルの両方がある場合は .md5 の値が優先されます）。
- Factor Value\[enter experiment factor name here\]: 実験で研究している「要因」。 growthcondition、genotype、organism part 等の研究で解析している変数のことです。これらの変数の実際の値は "Factor Value\[\]" カラムに記載します。例:
    - Factor Value\[strain\]
    - AT76
    - KU-2003
    - KU-PI499262


{% include image.html url="books/array-sdrf-template.jpg" caption="SDRF テンプレートの図解、登録者が情報を追加する必要がある部分は黄色で示されている" class="w600" %}


内容を追加した SDRF を選択して Continue をクリックします。


{% include image.html url="books/array-sdrf2.jpg" caption="作成した SDRF ファイルを選択" class="w450" %}


### Overview と投稿  {#submit}

最後の Overview タブで IDF と SDRF ファイルをダウンロードして内容をチェックします。修正が必要な場合はタブを戻ってメタデータを修正します。

"Submit"ボタンをクリックして IDF と SDRF を投稿します。


{% include image.html url="books/array-overview.jpg" caption="IDF と SDRF の内容を確認してから投稿" class="w450" %}


### 検証処理  {#validation-step}

メタデータ投稿時に IDF と SDRF に記載されているデータファイルが対象の登録用ディレクトリにアップロードされていない場合、"Datafile is not uploaded" というエラーメッセージが表示され投稿が中断されます。

Validatorは[validation rule](/gea/validation.html)に従ってメタデータをチェックしエラーとワーニングメッセージを表示します。メタデータを投稿するためにはエラーを解消しておく必要があります。


{% include image.html url="books/array-validation.jpg" caption="エラーとワーニングメッセージ" class="w500" %}


### アクセッション番号  {#accession}

完成した GEA experiment に対して [GEA アクセッション番号](/gea/overview.html#acc)が発行されます。

[査読者用トークンを発行](/gea/reviewer-access.html)することでの非公開データへのアクセスを提供することができます。


{% include image.html url="books/array-accession.jpg" caption="GEA アクセッション番号" class="w500" %}


## 更新  {#update-submission}

### 各データベースにおける更新方法  {#update-in-each-database}

<table>
<colgroup>
<col style="width: 50%"/>
<col style="width: 50%"/>
</colgroup>
<thead>
<th>データベース</th>
<th>更新方法</th>
</thead>
<tbody>
<td><a href="/ddbj/index.html">Annotated sequence database</a></td>
<td><a href="/ddbj/update-form.html">ウェブフォームから依頼</a></td>
<tr class="even">
<td>Sequence Read Archive(DRA)</td>
<td><a href="https://ddbj.nig.ac.jp/D-way/">D-way にログインして登録者自身で更新</a><br />
<a href="/contact-ddbj.html">(配列データの追加や削除はウェブフォームから依頼)</a></td>
</tr>
<td>Genomic Expression Archive(GEA)</td>
<td><a href="/contact-ddbj.html">ウェブフォームから依頼</a></td>
<tr class="even">
<td>BioProject/BioSample</td>
<td><a href="/contact-ddbj.html">ウェブフォームから依頼</a></td>
</tr>
</tbody>
</table>

### アーカイブされた experiment の削除  {#withdraw-archived-objects}

アーカイブされた Experiment を削除する場合は [GEA チームに連絡](/contact-ddbj.html)します。

## MD5 チェックサム値 {#md5} 

MD5 チェックサム値の取得方法は「[MD5 チェックサム値の取得](/checksum.html)」をご覧ください。