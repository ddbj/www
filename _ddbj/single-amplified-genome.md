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

  - [Other
    samples](/biosample/attribute.html?Core=Generic&definition=definition)
    パッケージを選択します。
  - [metagenome](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&keep=1&srchmode=1&unlock)
    や uncultured を冠した生物名は記載できません。DDBJ の SAG エントリと同じ生物名を記載します。
  - [sample\_type](/biosample/attribute.html?all=all#sample_type)=”single
    amplified genome” を所定属性として記載します。
  - 以下のサンプル属性を記載します。
    - [isolate](/biosample/attribute.html?all=all#isolate)
    - [isolation_source](/biosample/attribute.html?all=all#isolation_source)
    - [collection_date](/biosample/attribute.html?all=all#collection_date)
    - [env_biome](/biosample/attribute.html?all=all#env_biome)
    - [env_feature](/biosample/attribute.html?all=all#env_feature)
    - [env_material](/biosample/attribute.html?all=all#env_material)
    - [geo_loc_name](/biosample/attribute.html?all=all#geo_loc_name)
    - [lat_lon](/biosample/attribute.html?all=all#lat_lon)    
    
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

  - [Other
    samples](/biosample/attribute.html?Core=Generic&definition=definition)
    パッケージを選択し、[「一細胞の場合」](#single-biosample)で作成したサンプルの結合サンプルを作成します。
  - derived\_from = “This sample group is the combination of the individual BioSamples: SAMD00192892-SAMD00192901.” のように結合元サンプルのアクセッション番号を記載します。
  - 以下のサンプル属性を記載します。
    - [isolate](/biosample/attribute.html?all=all#isolate)
    - [isolation\_source](/biosample/attribute.html?all=all#isolation_source)
