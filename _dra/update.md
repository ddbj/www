---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: DRA の更新
category: dra
current_tab: overview
lang: ja
---

## 公開予定日の変更  {#change-hold-date}

公開予定日は最長で4年後まで指定でき、繰り返し更新することができます。
Hold Date の [Change] をクリックし、公開予定日変更ページに移動し、予定日を変更します。

<a href="/assets/images/books/hdra-hold.jpg" title="公開予定日の変更" class="group1"><img src="/assets/images/books/hdra-hold.jpg" alt="公開予定日の変更" title="公開予定日の変更" class="w400"></a>

データを即日公開する場合は "Release Now" をクリックします。
作業した日の深夜に公開処理が実施され、[ftp にデータファイルが公開](https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/)され、数日以内に [DDBJ Search](https://ddbj.nig.ac.jp/search) にインデックスされます。

## 論文情報の追加 {#publication}

DRA データに関する論文情報は BioProject に追加します。
[DRA/BioProject/BioSample 更新依頼フォーム](https://forms.gle/nJUyV5BGpoZhvJKw9) (pubmed ID、pubmed ID がない場合は doi) から依頼してください。

## メタデータの更新  {#update-metadata}

[Enter/Update metadata] からメタデータを編集します。編集不可項目はブロックされています。
必要な編集が完了後、メタデータ作成ツールの [Submit/Update DRA metadata] をクリックし、更新内容を反映させます。


## データファイルの追加  {#add-data-files}

<div class="attention">
DRA では登録が完了した Submission にデータを追加することはできません。また、登録が完了した Run データの変更はできません。
</div>

DRA では別の Submission で新しく Experiment-Run のセットを追加し、既存の BioProject や BioSample を参照することでデータを追加します。

[D-way](https://ddbj.nig.ac.jp/D-way/) にログインし、[New submission] をクリックし、新規 DRA 登録を作成します。 作成した新規登録でデータを追加する対象の BioProject と BioSample を選択します。

- 新たにサンプルを追加する場合は BioProject を共有し、新規登録で BioSample-Experiment-Run を追加します。
- 既存のサンプルにデータを追加する場合は BioProject と BioSample を共有し、新規登録で Experiment-Run を追加します。

続いて DRA Experiment と Run タブで、Experiment、Run とデータファイルを追加します。

メタデータを登録し、ファイルの検証処理を実行します。追加された Experiment/Run オブジェクトに対してアクセッション番号が発行されます。

<div class="attention">
追加したデータに対応する BioProject 番号は同一ですが、Submission に対する DRA 番号は異なります。
論文中には BioProject 番号、もしくは、Run 番号を引用してください。
</div>

{% include image.html url="books/add_data_files.jpg" caption="既存プロジェクトへのサンプルとデータの追加" class="w500" %}


{% include image.html url="books/add_run.jpg" caption="既存プロジェクト・サンプルへのデータ追加" class="w500" %}

## オブジェクトの削除  {#delete}

Experiment、Run や Analysis などを削除する場合は [DRA/BioProject/BioSample 更新依頼フォーム](https://forms.gle/nJUyV5BGpoZhvJKw9)から連絡してください。
