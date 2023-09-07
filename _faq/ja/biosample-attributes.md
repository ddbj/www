---
layout: simple
title: BioSample で適切な属性を探す方法は？
category: faq
db:
  - biosample
tags:
  - サンプル属性
date: 2023-09-06T09:52:37
lang: ja
---

「移植先の組織」を記載するために適切な属性を探す場合を例に説明します。

### NCBI BioSample

属性名の見当がつく場合は NCBI BioSample の [Advanced Search Builder](https://www.ncbi.nlm.nih.gov/biosample/advanced) で属性名と件数をみることができます。

Builder のフィールド名で「Attribute Name」を選択し、検索内容に「transplant」と入力します。
「transplant」で始まる属性名と件数が列挙されるので、よく使用されている属性名の当たりをつけることができます。属性が使われているサンプルをみたい場合は、属性名を選んで Search します。
{% include image.html url="faq/ncbi-bs-advanced.jpg" caption="Advanced Search Builder" class="w600" %}

### BioSample dump file

公開されている BioSample 全件を含む XML ファイルをダウンロードします。

```
wget https://ddbj.nig.ac.jp/public/ddbj_database/biosample/biosample_set.xml.gz
```

grep することで属性名と値を検索することができます。
```
grep "attribute_name=\"transplant" biosample_set.xml

<Attribute attribute_name="transplant">intertidal</Attribute>
<Attribute attribute_name="transplant">subtidal</Attribute>
<Attribute attribute_name="transplant">subtidal</Attribute>
<Attribute attribute_name="transplant">intertidal</Attribute>
<Attribute attribute_name="transplanted with">non-targeting scramble shRNA control MLL-AF9 primary AML</Attribute>
<Attribute attribute_name="transplanted with">non-targeting scramble shRNA control MLL-AF9 primary AML</Attribute>
<Attribute attribute_name="transplanted with">Cdkn1b specific shRNA expressing MLL-AF9 primary AML</Attribute>
...
```