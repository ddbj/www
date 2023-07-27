---
layout: tabbed_indexed_content
title: Environmental sequence の登録
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
lang: ja
related_pages:
  - title: Genome Project のデータ登録
    url: /ddbj/genome.html
  - title: Transcriptome Project のデータ登録
    url: /ddbj/transcriptome.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa.html
---

## Environmental sequence の登録

種、あるいは、個体を特定しない手法により得られた配列データの種別の対応を示します。

環境サンプル (environmental sample) 由来の配列と その付帯情報からなるデータです。  
よく混同されますが、<span class="red">**環境サンプルとは「野生型」という意味ではありません**</span>。  
環境サンプルとは、生物種が同定できない環境 DNA サンプルに由来した配列です。PCR、DGGE、あるいは、その他の方法で直接、分子を単離した場合などが該当します。  
環境サンプルには以下を含みますが、下記で全てを網羅している訳ではありません。

  - 土壌、海水などから、直接、分子を単離したサンプル
  - 臨床系サンプル、腸の内容物、表皮上、その他、特定宿主に関連すると推測される種を同定できない生物
  - 環境サンプル由来の混合培養系


### 環境サンプルに該当しないデータ {#not_env}

- 単離培養を経た (cultured) な微生物
    - よく混同されますが、<span class="red">**環境サンプルとは「野生型」という意味ではありません**</span>。  
- 培養が困難でも再現性の高い対象 (下記で全てを網羅しているという意味ではありません。)
    - 特定宿主から確実に回収できる内部共生生物
    - 多くの cyanobacteria のように容易に同定可能であるが培養ができない生物
    - 純粋培養は不可能でも罹患植物から確実に回収できる phytoplasma


### 登録における注意事項  {#notice}
- 例外もありますが、原則、判明している範囲での lineage に "uncultured" を冠して「生物名」を記載します。    
    詳しくは、[Organism Qualifier について 3. 環境サンプル](/ddbj/organism.html#env)を ご参照ください。
- [source](/ddbj/features.html#source) feature に /[environmental\_sample](/ddbj/qualifiers.html#environmental_sample) qualifier の記載が必須です。
- [source](/ddbj/features.html#source) feature に /[isolation\_source](/ddbj/qualifiers.html#isolation_source)
    qualifier の記載してサンプルの由来の概略を示す必要があります。    
- /[isolate](/ddbj/qualifiers.html#isolate), /[clone](/ddbj/qualifiers.html#clone) あるいは /[submitter\_seqid](/ddbj/qualifiers.html#submitter_seqid) qualifier に識別子の記載が必要です。
    詳しくは、[識別子について](/ddbj/identifiers.html)を ご参照ください。
- /[strain](/ddbj/qualifiers.html#strain) qualifier を記載することはできません。


### 小規模な配列データ  {#small}
[ENV](/ddbj/env.html) division と扱います。

### 大規模な配列データ  {#large}

特に NGS データを用いた研究などは [BioProject](/bioproject/index.html) と [BioSample](/biosample/index.html) にも ご登録ください。

特定の標的遺伝子を大規模解析した場合は [Targeted Locus Study](/ddbj/tls.html) と扱います。

種・個体の再構成を意図した解析の場合、対象がゲノムか RNA 転写産物か に依り、適宜、[Genome Project](/ddbj/genome.html) あるいは [Transcriptome Project](/ddbj/transcriptome.html) に則った登録が必要です。
