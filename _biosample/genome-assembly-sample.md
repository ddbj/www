---
layout: tabbed_indexed_content
service_name: BioSample
title: ゲノムアセンブリ用サンプル
category: biosample
current_tab: sample attribute
lang: ja
---

## パッケージ  {#package}

[DDBJ のゲノム配列](/ddbj/mss.html)は一つの BioProject と一つの BioSample にリンクしなければならないという制約があります。この制約はゲノムアセンブリを管理するため、INSDC で設けられています。
ゲノムアセンブリに使用したサンプルは以下のパッケージで BioSample に登録します。
- 単離培養された原核生物の場合: [Cultured Bacterial/Archaeal Genomic Sequences (MIGS)](/biosample/attribute.html)
- 真核生物の場合: [Eukaryotic Genomic Sequences (MIGS)](/biosample/attribute.html)

アノテーションが付与されたゲノム配列を [DDBJ](/ddbj/mss.html) に登録する場合、locus_tag_prefix 属性に記載して [Locus tag prefix](/ddbj/locus_tag.html) を取得します。

## 複数サンプルがアセンブリに使用された場合 {#samples}

複数サンプルに由来するリードをアセンブルして得られたゲノム配列の場合、複数 BioSample をリンクすることはできないため、派生 BioSample (derived BioSample) を一つ登録します。    
例えば、オスとメスに由来するリードをそれぞれ DRA に登録し、両者のリードを使ってゲノムをアセンブルした場合、オスとメスそれぞれの BioSample アクセッション番号を引用した派生 BioSample を一つ登録し、ゲノム配列にリンクします。    
派生サンプルの元となるアクセッション番号は、派生サンプルの derived_from 属性に "This sample group is the combination of the [由来サンプル数] individual BioSamples: [BioSample アクセッション番号]" という書式で示します。
例: This sample group is the combination of the 2 individual BioSamples: SAMN12623203 and SAMN12623206    
登録例: ゲノム配列 [JAGDQO010000000](https://www.ncbi.nlm.nih.gov/nuccore/2035211276) と派生サンプル [SAMN17974349](https://www.ncbi.nlm.nih.gov/biosample/17974349)

## メタゲノムアセンブリ  {#mag}

[メタゲノムアセンブリ](/ddbj/metagenome-assembly.html) (Metagenome-Assembled Genome、MAG) はアセンブリ度合いに応じ、四段階の登録方法があります。

特定の生物に由来すると推測される MAG は DDBJ の [ENV division](/ddbj/env.html) にゲノムエントリとして登録します。

MAG 用にバーチャルなサンプルを登録します。パッケージは ["Other samples"](/biosample/submission.html#General_Sample) を選択し、生物名には uncultured が冠されていない、MAG が由来する生物種名を記載します (例 Methanosarcina thermophila)。
生物名以外に以下のサンプル属性が必須になります。[登録例](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=272411182)

規定値
- sample\_type: metagenomic assembly

サンプルの由来情報
- metagenome\_source: xyz metagenome
- isolate
- isolation\_source

サンプルの採取情報
- collection\_date
- env\_biome
- env\_feature
- env\_material
- geo\_loc\_name
- lat\_lon

派生元 BioSample
- derived\_from: This biosample is a metagenomic assembly obtained from the xyz metagenome BioSample: SAMD00000001,SAMD00000002,SAMD00000010-SAMD00000015.

MAG も一つの BioSample にリンクする必要があるため、複数サンプルに由来するリードをアセンブルした MAG の場合、派生サンプルを同様に登録します。例 メタゲノム [JAGEZF000000000.1](https://www.ncbi.nlm.nih.gov/nuccore/JAGEZF000000000.1) と派生サンプル [SAMN18318557](https://www.ncbi.nlm.nih.gov/biosample/SAMN18318557)
