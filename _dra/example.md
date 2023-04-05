---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: メタデータの例
category: dra
current_tab: overview
lang: ja
---

## オブジェクトの構成例  {#organization-metadata-objects}

実際のデータにあわせて柔軟にオブジェクトを構成します。

- [最もシンプルなケース](#ex_simple)
- [三つの菌株の比較ゲノム解析 (ペアエンド)](#ex_samples)
- [Biological replicate がある場合 (ペアエンド)](#ex_replicates)
- [関連するデータが別々の論文に発表される場合](#ex_submissions)

### 最もシンプルなケース  {#ex_simple}

{% include image.html url="submission/obj_ex1.jpg" caption="最もシンプルなケース" class="w500" %}

### 三つの菌株の比較ゲノム解析 (ペアエンド)  {#ex_samples}

ペアリードファイルは同じ Run に含めます。

{% include image.html url="books/datamodel1.jpg" caption="三つの菌株の比較ゲノム解析 (ペアエンド)" class="w500" %}

### Biological replicate がある場合 (ペアエンド)  {#ex_replicates}

{% include image.html url="submission/obj_exreplicate.jpg" caption="Biological replicate がある場合　(ペアエンド)" class="w500" %}

### 関連するデータが別々の論文に発表される場合  {#ex_submissions}

{% include image.html url="submission/obj_ex3.jpg" caption="関連するデータが別々の論文に発表される場合" class="w600" %}

## メタデータの記入例 {#tsv}

ウェブツールで Experiment/Run をタブ区切りテキストファイル (tsv) で登録する場合の記入例。  
[メタデータ tsv の記入例シート](https://docs.google.com/spreadsheets/d/1DTdUQ-WWOMjOA2eYQWmFYUB24hJysuwhvHLJoDFX4rc)

## メタデータエクセル {#excel}

メタデータ登録用エクセルから XML を生成して Experiment/Run を登録する場合のエクセル記入例。  
[example-0001_dra_metadata.xlsx](https://github.com/ddbj/submission-excel2xml)



