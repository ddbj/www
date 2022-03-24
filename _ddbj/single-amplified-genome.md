---
layout: tabbed_indexed_content
title: Single amplified genome
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
lang: ja
---

Single amplified genome (SAG) は一細胞を単離、溶解し、全ゲノムを増幅してシークエンスすることで得られます。SAG は1～数コピーのゲノムを出発材料としているため、極微量のDNAのコンタミネーションがデータ品質に大きな影響を与えます。そのため DDBJ センターでは SAG を区別できるように登録方法を定めています。

## 一細胞の場合  {#single-cell}

### DDBJ  {#multi-ddbj} 

source feature

- [metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock)
  や uncultured を冠した生物名は記載できません。
- /note="single amplified genome" を所定属性として記載します。
- /isolation_source にサンプルの単離源を記載します。例 "one of ten single-cell amplified genomes of the same hot spring water; single-cell genome amplified by MDA (multiple displacement amplification)"

### BioSample  {#multi-biosample}

パッケージと属性

- [MISAG](/biosample/attribute.html) パッケージを選択します。
- [metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock)
  や uncultured を冠した生物名は記載できません。DDBJ の SAG エントリと同じ生物名を記載します。
  
## 複数細胞の場合  {#multi-cells}

### DDBJ  {#multi-ddbj}

source feature

- [metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock)
  や uncultured を冠した生物名は記載できません。
- /note="single amplified genome" を所定属性として記載します。
- /note に複数サンプル・ゲノムに由来する SAG であることを記載します。例 "co-assembly of 10
  single-cell amplified genomes"
- /isolation\_source にサンプルの単離源を記載します。

### BioSample  {#single-biosample} 

パッケージと属性

- [MISAG](/biosample/attribute.html) パッケージを選択し、[「一細胞の場合」](#single-biosample)で作成したサンプルの結合サンプルを作成します。
- derived_from = "SAMD00192892-SAMD00192901" のように結合元サンプルのアクセッション番号を記載します。
