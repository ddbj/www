---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: ゲノム支援
category: dra
current_tab: home
lang: ja
---

  - [メタデータ記入用エクセルファイル](#excel)
  - [研究費情報の記載](#grant)
  - [更新履歴](#history)

## メタデータ記入用エクセルファイル  {#excel}

シークエンス拠点の依頼者間でメタデータをやり取りするのにご利用ください。

### BioProject  {#bioproject}

[BioProject_template_20150408.xlsx](/assets/files/submission/BioProject_template_20150408.xlsx)

### BioSample  {#biosample}

[BioSample_template_20150408.xlsx](/assets/files/submission/BioSample_template_20150408.xlsx)

### DRA  {#dra}

[DRA_template_20180730.xlsx](/assets/files/submission/DRA_template_20180730.xlsx)

## 研究費情報の記載  {#grant}

### BioProject  {#grant_bp}

D-way BioProject 登録システムで [Grants](/bioproject/submission.html#Area_grants) の各項目に以下を記入します。

  - **Agency:** Japanese Ministry of Education, Culture, Sports, Science and Technology
  - **Agency abbreviation:** MEXT
  - **Grant ID:** 221S0002
  - **Grant title:** Genome Science

実際の登録例: [PRJDB3208 (DDBJ)](https://ddbj.nig.ac.jp/resource/bioproject/PRJDB3208) [PRJDB3208 (NCBI)](https://www.ncbi.nlm.nih.gov/bioproject/?term=PRJDB3208)

### DDBJ 塩基配列データ  {#grant_ddbj}

アノテーションを付加した塩基配列データを [DDBJ](/ddbj/submission.html) に登録する場合，[structured COMMENT](/ddbj/flat-file.html#Comment) に以下のように記載します。

| COMMENT | ##Grant-START##     |                                             |
|         | Agency abbreviation | :: MEXT                                     |
|         | Agency              | :: Japanese Ministry of Education, Culture, |
|         |                     | Sports, Science and Technology              |
|         | Title               | :: Genome Science                           |
|         | GrantId             | :: 221S0002                                 |
|         | ##Grant-END##       |                                             |

## 更新履歴  {#history}

2015-04-08: メタデータ用のエクセルファイル (_20150408) を公開。[BioProject](/assets/files/submission/BioProject_template_20150408.xlsx), [BioSample](/assets/files/submission/BioSample_template_20150408.xlsx), [DRA](/assets/files/submission/DRA_template_20150408.xlsx)

2014-11-14: メタデータ用のエクセルファイル (_20141113) を公開。[BioProject](/assets/files/submission/BioProject_template_20141113.xlsx), [BioSample](/assets/files/submission/BioSample_template_20141113.xlsx), [DRA](/assets/files/submission/DRA_template_20141113.xlsx)
