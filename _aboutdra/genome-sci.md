---
layout: indexed_content
title: ゲノム支援
pathname: genome-sci
category: aboutdra
lang: ja
---

  - [メタデータ記入用エクセルファイル](#excel)
  - [研究費情報の記載](#grant)
  - [更新履歴](#history)

## メタデータ記入用エクセルファイル <a name="excel"></a>

シークエンス拠点の依頼者間でメタデータをやり取りするのにご利用ください。

### BioProject <a name="bioproject"></a>

[BioProject_template_20150408.xlsx]({{ site.baseurl }}/assets/files/submission/BioProject_template_20150408.xlsx)

### BioSample <a name="biosample"></a>

[BioSample_template_20150408.xlsx]({{ site.baseurl }}/assets/files/submission/BioSample_template_20150408.xlsx)

### DRA <a name="dra"></a>

[DRA_template_20180730.xlsx]({{ site.baseurl }}/assets/files/submission/DRA_template_20180730.xlsx)

## 研究費情報の記載 <a name="grant"></a>

### BioProject <a name="grant_bp"></a>

D-way BioProject 登録システムで [Grants]({{ site.baseurl }}/aboutbioproject/submission.html#Area_grants) の各項目に以下を記入します。

  - **Agency:** Japanese Ministry of Education, Culture, Sports, Science and Technology
  - **Agency abbreviation:** MEXT
  - **Grant ID:** 221S0002
  - **Grant title:** Genome Science

実際の登録例: [PRJDB3208 (DDBJ)](//ddbj.nig.ac.jp/BPSearch/bioproject?acc=PRJDB3208) [PRJDB3208 (NCBI)](https://www.ncbi.nlm.nih.gov/bioproject/?term=PRJDB3208)

### DDBJ 塩基配列データ <a name="grant_ddbj"></a>

アノテーションを付加した塩基配列データを [DDBJ]({{ site.baseurl }}/services/submission.html) に登録する場合，[structured COMMENT]({{ site.baseurl }}/flatfile/flat-file.html#Comment) に以下のように記載します。

| COMMENT | ##Grant-START##     |                                             |
|         | Agency abbreviation | :: MEXT                                     |
|         | Agency              | :: Japanese Ministry of Education, Culture, |
|         |                     | Sports, Science and Technology              |
|         | Title               | :: Genome Science                           |
|         | GrantId             | :: 221S0002                                 |
|         | ##Grant-END##       |                                             |

## 更新履歴 <a name="history"></a>

2015-04-08: メタデータ用のエクセルファイル (_20150408) を公開。[BioProject](/files/submission/BioProject_template_20150408.xlsx), [BioSample](/files/submission/BioSample_template_20150408.xlsx), [DRA](/files/submission/DRA_template_20150408.xlsx)

2014-11-14: メタデータ用のエクセルファイル (_20141113) を公開。[BioProject](/files/submission/BioProject_template_20141113.xlsx), [BioSample](/files/submission/BioSample_template_20141113.xlsx), [DRA](/files/submission/DRA_template_20141113.xlsx)
