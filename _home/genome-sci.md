---
layout: indexed_content
title: ゲノム支援
pathname: genome-sci
category: _home
---

# ゲノム支援

<div id="main_index">

  - [メタデータ記入用エクセルファイル](#excel)
  - [研究費情報の記載](#grant)
  - [更新履歴](#history)

</div>

<div class="section">

## メタデータ記入用エクセルファイル

シークエンス拠点の依頼者間でメタデータをやり取りするのにご利用ください。

### BioProject

[BioProject\_template\_20150408.xlsx](/files/submission/BioProject_template_20150408.xlsx)

### BioSample

[BioSample\_template\_20150408.xlsx](/files/submission/BioSample_template_20150408.xlsx)

### DRA

[DRA\_template\_20180730.xlsx](/files/submission/DRA_template_20180730.xlsx)

</div>

<div class="section">

## 研究費情報の記載

<div class="section">

### BioProject

D-way BioProject 登録システムで [Grants](/bioproject/submission.html#Area_grants) の各項目に以下を記入します。

<div class="sub_index">

  - <span class="bold">Agency:</span> Japanese Ministry of Education, Culture, Sports, Science and Technology
  - <span class="bold">Agency abbreviation:</span> MEXT
  - <span class="bold">Grant ID:</span> 221S0002
  - <span class="bold">Grant title:</span> Genome Science

</div>

実際の登録例: [PRJDB3208 (DDBJ)](//ddbj.nig.ac.jp/BPSearch/bioproject?acc=PRJDB3208) [PRJDB3208 (NCBI)](https://www.ncbi.nlm.nih.gov/bioproject/?term=PRJDB3208)

</div>

<div class="section">

### DDBJ 塩基配列データ

アノテーションを付加した塩基配列データを [DDBJ](/ddbj/submission.html) に登録する場合，[structured COMMENT](/ddbj/flat-file.html#Comment) に以下のように記載します。

|         |                     |                                             |
| ------- | ------------------- | ------------------------------------------- |
| COMMENT | \#\#Grant-START\#\# |                                             |
|         | Agency abbreviation | :: MEXT                                     |
|         | Agency              | :: Japanese Ministry of Education, Culture, |
|         |                     | Sports, Science and Technology              |
|         | Title               | :: Genome Science                           |
|         | GrantId             | :: 221S0002                                 |
|         | \#\#Grant-END\#\#   |                                             |

</div>

</div>

<div class="section">

## 更新履歴

2015-04-08: メタデータ用のエクセルファイル (\_20150408) を公開。[BioProject](/files/submission/BioProject_template_20150408.xlsx), [BioSample](/files/submission/BioSample_template_20150408.xlsx), [DRA](/files/submission/DRA_template_20150408.xlsx)

2014-11-14: メタデータ用のエクセルファイル (\_20141113) を公開。[BioProject](/files/submission/BioProject_template_20141113.xlsx), [BioSample](/files/submission/BioSample_template_20141113.xlsx), [DRA](/files/submission/DRA_template_20141113.xlsx)

</div>
