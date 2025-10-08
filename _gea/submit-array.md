---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: マイクロアレイデータの登録
category: gea
current_tab: submission overview
lang: ja
---

## 登録前のチェックリスト {#checklist}

### Two-color microarray experiment {#two-color}

GEA は２つのサンプルが１つの生データファイルにリンクしている two-color のみをサポートしています。[Two-color マイクロアレイの例](/gea/example.html#sdrf_example2)。IDF で dual-channel オプションが選択された場合、同時にハイブリダイズした２サンプルに由来する１つのデータファイルが提供されることを想定しています。いくつかの two-color マイクロアレイでは通常それぞれのチャンネルに対応した別々の生データファイルが生成されます。このようなケースでそれぞれのサンプルに１つのファイルをリンクすると検証処理でエラーになります。各チャンネルに対応した別々のファイルを登録する場合は [GEA チームに連絡](/contact-ddbj.html)してください。

### More than one technology per experiment {#technologies}

GEA ではマイクロアレイとシークエンシングを一つの Submission でまとめて登録することはできないため、Submission を分ける必要があります。一つの Submission で複数のアレイデザインを含めることは可能です。このような場合は [GEA チームに連絡](/contact-ddbj.html)してください。

## マイクロアレイデータの登録 {#array-sub}

### 新規登録の作成 {#create-new-submission}

[D-way](https://ddbj.nig.ac.jp/D-way/) にログインし、上部のメニューから GEA 登録ページに移動します。  
"Microarray" を選択した状態で [New submission] を押下して microarray experiment submission を作成します。作成と同時にファイルサーバ (ftp-private.ddbj.nig.ac.jp) に対応する登録用ディレクトリが登録者のホーム下に作成されます。このディレクトリに[データファイルをアップロード](#upload-data)します。

<div class="attention">
1 submission で登録できる SDRF Assay 数の上限は 1,000 です。これを超える場合は submission を分けてください。
</div>

{% include image.html url="books/array-sub1.jpg" caption="Microarray experiment submission の新規作成" class="w450" %}

登録のステータスには以下のものがあります。"Data Validated" と "Validation Error" になった登録が査定されます。

登録のステータス一覧
{: .tablecaption}

| ステータス            | 説明                            |
|---|
| New              | メタデータの登録前                     |
| Data Submitted   | メタデータとデータファイルが登録された           |
| Data Validating  | データファイルの検証処理中                 |
| Validation Error | データファイルの検証処理エラー               |
| Data Validated   | メタデータとデータファイルの検証処理が完了         |
| Curating         | キュレータが登録を査定中                  |
| Accession Issued | アクセッション番号が発行された               |
| Private     | 公開用ファイルの作成処理が完了し、非公開に保たれている状態 |
| Public           | 公開されている状態                     |

### 生データと解析済みファイルのアップロード {#upload-data}

データファイルのアップロード方法は「[データのアップロード](/upload.html)」をご覧ください。

### Submission {#Submission-tab}

四年以内の公開予定日を指定、もしくは、即日公開を選択します。登録者の名前と所属組織は公開されますが、メールアドレスは公開されません。

<div class="attention">
GEA 登録に関するメールは Submission に記載されたメールアドレスに対して送信されます。
DDBJ アカウントに登録されているメールアドレスを変更した場合、登録に関するメールが送信されるよう、GEA Submission のアドレスも変更する必要があります。
</div>

{% include image.html url="books/array-sub2.jpg" caption="登録管理情報を入力" class="w550" %}

### BioProject {#BioProject-tab}

自身のアカウントで登録済みの BioProject を一つ選択します。BioProject が未登録の場合は [BioProject登録サイト](/bioproject/submission.html#bioproject-submission)でプロジェクトを登録します。他のアカウントで登録された BioProject を参照したい場合は、[外部参照を申請](https://docs.google.com/forms/d/e/1FAIpQLSf1tMKEC_mhztGhtfKV0sLSGt1vY-I4Jb_RLQF64Li1d6_-Xg/viewform)します。

{% include image.html url="books/gea-bp.jpg" caption="GEA 登録で使う BioProject を一つ選択" class="w550" %}

### BioSample {#BioSample-tab}

自身のアカウントで登録済みの BioSample を選択します。BioSample が未登録の場合は [BioSample 登録サイト](/biosample/submission.html#biosample-submission)でサンプルを登録します。他のアカウントで登録された BioSample を参照したい場合は、[外部参照を申請](https://docs.google.com/forms/d/e/1FAIpQLSf1tMKEC_mhztGhtfKV0sLSGt1vY-I4Jb_RLQF64Li1d6_-Xg/viewform)します。

{% include image.html url="books/gea-bs.jpg" caption="GEA 登録で使うBioSampleを選択" class="w550" %}

### IDF {#idf-tab}

[IDF (Investigation Description Format)](/gea/metadata.html#idf) の内容を入力します。[IDF の例](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=0)

- Protocol: チェック済みのプロトコールは必須です。
- Publication: 関連する文献を PubMed ID もしくは DOI で指定します。未公表の文献については ID が発行された後に[お知らせください](/contact-ddbj.html)。
- Array Design: [ArrayExpress](https://www.ebi.ac.uk/biostudies/arrayexpress/studies?query=type%3Aarray)/[GEA](https://ddbj.nig.ac.jp/public/ddbj_database/gea/array/A-GEAD-000/) にアレイデザインが登録されている場合は "A-XXXX-n" のアクセッション番号を記入します。アレイデザインが未登録の場合は GEA 登録用ディレクトリにアレイデザインファイルをアップロードして[新規アレイデザインを登録](/gea/adf.html) します。
- Data File Type: マイクロアレイ実験の場合は生データと解析済みデータが必須です。サンプル毎の生データ・解析済みデータファイルの登録を強く推奨します。[マイクロアレイ実験に登録可能なファイル形式](/gea/datafile.html#array_data)。

{% include image.html url="books/array-idf.jpg" caption="IDF の内容を入力" class="w600" %}

### SDRF {#sdrf-tab}

{% include image.html url="books/array-sdrf.jpg" caption="SDRF テンプレートファイルをダウンロード" class="w600" %}

[SDRF (Sample and Data Relationship Format)](/gea/metadata.html#sdrf) テンプレートファイルをダウンロードして必要な情報を追加します。[SDRFの例](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=657626667)

自動生成される内容   
- 各 Name カラムと Source Name の Attribute カラム: 選択された BioSample の内容から自動生成されます。
- SDRF 行: 1行1 BioSample で行が自動生成されます。
- Protocol: IDF で作成されたプロトコールは SDRF の適切な個所にプロトコール ID (例 ESUB000350_Protocol_1) として挿入されます。
- Technology Type: マイクロアレイ登録の場合は "array assay" が自動入力されます。
- Array Design REF: IDF で指定されたアレイデザインアクセッション番号、もしくは、アレイデザインファイル名が自動入力されます。

<Required: fill in the content> タグを上書きして必須項目を入力します。

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
- Array Data File と Comment[Array Data File md5]: 生データファイルのファイル名と [md5 チェックサム値](#supplement-md5) の組を記入します。
- Derived Array Data File と Comment[Derived Array Data File md5]: 解析済みデータファイルのファイル名と [md5 チェックサム値](#supplement-md5) の組を記入します。
- データファイルと md5 チェックサム値の組は [md5sum コマンド](#supplement-md5)の結果を <GEA submission ID>.md5 (例 ESUB000001.md5) ファイルとしてデータファイルと一緒に提供することもできます（SDRF と .md5 ファイルの両方がある場合、.md5 の値が優先されます）。
- Factor Value[enter experiment factor name here]: 実験で研究している「要因」。growth condition、genotype、organism part 等の研究で解析している変数のことです。これらの変数の実際の値は "Factor Value[]" カラムに記載します。  
例:   
- Factor Value[strain]
- AT76
- KU-2003
- KU-PI499262

{% include image.html url="books/array-sdrf-template.jpg" caption="SDRF テンプレートの図解、登録者が情報を追加する必要がある部分は黄色" class="w600" %}

内容を追加した SDRF を選択して [Continue] を押下します。

{% include image.html url="books/array-sdrf2.jpg" caption="作成した SDRF ファイルを選択" class="w450" %}

### md5 チェックサム値 {#checksum}

GEA では [md5 チェックサム値](#supplement-md5)をファイル破損検知に利用しています。  
データファイルが多い場合やコマンドライン操作に慣れている場合、SDRF に値を記入するのではなく、[md5sum コマンド](#supplement-md5)の結果を <GEA submission ID>.md5 (例 ESUB000001.md5) ファイルとしてデータファイルと一緒にアップロードして提供する方法が便利です。SDRF と .md5 ファイルの両方がある場合、.md5 の値が優先されます。  

例 ESUB000001.md5 (チェックサム値とファイル名の間は半角スペース二個)   
```
ed3d9b2adb5b29aa476b9d4164e208d5  raw1.txt
3d77463ca6f43416a6c1925b7704d304  raw2.txt
0e5be28700daa6d61ea3351921d6e578  processed1.txt
351fb1324feebe954405ca610e46ae44  processed2.txt
3d5749b63617da9002c7376deee8e0a3  array-design.txt
```

### Overview と登録 {#submit}

最後の Overview タブで IDF と SDRF ファイルをダウンロードして内容をチェックします。修正が必要な場合はタブを戻ってメタデータを修正します。

[Submit] を押下して IDF と SDRF を登録します。

{% include image.html url="books/array-overview.jpg" caption="IDF と SDRF の内容を確認してから登録" class="w450" %}

### 検証処理 {#validation-step}

メタデータ登録時に IDF と SDRF に記載されているデータファイルが対象の登録用ディレクトリにアップロードされていない場合、"Data file is not uploaded" というエラーメッセージが表示され登録処理が中断されます。

Validator は [validation rule](/gea/validation.html) に従ってメタデータをチェックしエラーとワーニングメッセージを表示します。メタデータを登録するためにはエラーを解消する必要があります。

{% include image.html url="books/array-validation.jpg" caption="エラーとワーニングメッセージ" class="w500" %}

## アクセッション番号 {#accession}

完成した GEA Experiment に対して[アクセッション番号](/gea/overview.html#accession)が発行されます。  
[査読者用トークンを発行](/gea/reviewer-access.html)することでの非公開データへのアクセスを提供することができます。

{% include image.html url="books/array-accession.jpg" caption="GEA アクセッション番号" class="w500" %}

## 更新 {#update-submission}

更新や削除は[フォーム](/contact-ddbj.html)から GEA チームに依頼してください。
