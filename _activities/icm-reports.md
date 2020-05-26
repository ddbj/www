---
layout: 年表
title: 国際実務者会議報告一覧
pathname: icm-reports
category: _activities
---

## 2019

<div>

### 第32回 国際実務者会議 2019年5月15-17日 英国ヒンクストン

DDBJ センター, [EBI](//www.ebi.ac.uk/), [NCBI](//www.ncbi.nlm.nih.gov/) で構成される [International Nucleotide Sequence Database Collaboration (INSDC)](http://www.insdc.org/) は、その共同事業の運営・推進を図るために、国際実務者会議を年１回開催しています。  
2019年は 5月15日-17日に EBI で開催され、[DDBJ](/index.html)、[ENA](//www.ebi.ac.uk/ena/)、[GenBank](//www.ncbi.nlm.nih.gov/genbank/index.html)、Sequence Read Archive (SRA) を運営する上での実務的な問題を討論しました。  
会議の報告を以下に まとめました。

#### 検討事項と今後の課題

  - メタゲノムデータの区分と受け入れ  
    メタゲノムを扱うためのアセンブル・解析手法が発展し、そのデータ登録が増加しています。メタゲノムデータを 3 つのレベルに分類し、
      - 1.  primary metagenome assemblies with environmental samples
      - 2.  binned metagenome assemblies with binned samples
      - 3.  MAGs with MIMAG samples ([Nat. Biotechnol. 35:725-731 (2017)](//www.nature.com/articles/nbt.3893) 参照)
    1.  と 2) は SRA Analysis object へ、3) はフラットファイルとして受け入れる方針で進めます。
  - Negative control 用の「生物名」  
    対照実験用に BioSample などに無生物を記載するようなケースがあり、そのための dummy として無生物の「生物名」を追加することを検討しています。
  - 由来生物種の記載が疑わしい配列データについて  
    Average Nucleotide Identity 解析から配列と記載されている生物名の対応が疑わしいケースへの対応について話し合いました。

#### SRA に関連する検討事項

  - Single-cell sequencing 解析などにおいてサンプル数が大量である場合は、BioSample を個別に記載するのではなく、代表的な記載に代えて良いことを確認しました。個別の記載は必要に応じて GEO, ArrayExpress, GEA で受け付けます。
  - PacBio を用いたゲノムの登録に際し、methylation 解析の motif summary file の提供を求めていきます。
  - 現状、INSDC メンバー間で共有対象になっていない SRA Analysis object の共有について議論しました。

#### Feature と Qualifier の記載則改訂

一部、先行して [/gap\_type](/ddbj/qualifiers.html#gap_type), [/linkage\_evidence](/ddbj/qualifiers.html#linkage_evidence) qualifier
の定義には適用されてきましたが、[AGP フォーマットの定義](//www.ncbi.nlm.nih.gov/assembly/agp/AGP_Specification/)が [version 2.1 へ改訂](//www.ncbi.nlm.nih.gov/assembly/agp/AGP_Specification/proposed-version-2-1/)されます。これに伴い、[/linkage\_evidence](/ddbj/qualifiers.html#linkage_evidence) qualifier の規定値に 'proximity ligation' が追加され、今後の登録では 'strobe' が廃止されます。  
2019年10月以降 [Feature Table Definition](/ddbj/full_index.html) の改訂後に適用されます。

#### Data Access Policy

  - Preprint とデータ公開  
    近年、preprint server を介した成果公開が増加しており、preprint に INSDC accession number が記載されている場合にも、関連配列データを公開する方針で一致しました。これに関連して [status 定義](/insdc-status-e.html)を見直しました。
  - Access and Benefit-Sharing (ABS)  
    国連が「国家管轄権外区域における海洋生物多様性([BBNJ](//www.un.org/bbnj/))」に関する決議作成に取り組む準備委員会を設立し、「遺伝資源の取得の機会とその利用から生ずる利益の公正かつ衡平な配分 (ABS)」について検討しています。INSDC 構成員にも参考意見が求められています。[2018 年](#2018)の生物多様性条約第14回締約国会議 (COP14) と名古屋議定書に関する議論とも関連しますが、INSDC はアクセス制限することなく、すべての配列データを公開する[方針](/insdc.html#policy)の重要性について意見表明します。
  - NCBI における SRA data の cloud 移行  
    NCBI が SRA データを [cloudに移行していく方針](//www.nih.gov/news-events/news-releases/nih-makes-strides-accelerate-discoveries-cloud)についての対応課題について議論しました。

</div>
