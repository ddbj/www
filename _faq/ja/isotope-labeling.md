---
layout: simple
title: サンプルを安定同位体で標識した場合の記載方法は？
category: faq
db:
  - metabobank
tags: 
  - メタデータの登録
date: 2022-08-05T09:52:37
lang: ja
---

### 同位体を代謝によってサンプルに取り込ませた場合

同位体を代謝によって生物に取り込ませた場合 (metabolic isotope labeling)、
BioSample のサンプル属性 isotope_labeled_compound で同位体標識化合物を記載します。
また、使用した安定同位体は isotope で記載します。
両属性は [Omics パッケージ](/biosample/attribute.html)には含まれていないためユーザ定義属性として追加します。

例
* isotope_labeled_compound=[U-13C]-glucose
* isotope=13C

BioSample の対応する SDRF 行において、
Characteristics カラムで同位体標識化合物や同位体を同様に記載します。

|Characteristics[isotope_labeled_compound]|Characteristics[isotope]|
|[U-13C]-glucose|13C|

この場合、同位体はサンプルレベルで記載されるため、
SDRF 後半の Labeled Extract Name と Label は空欄にします。

### 代謝物を化学反応により同位体標識した場合

抽出した代謝物を化学反応により同位体標識した場合 (chemical isotope labeling)、
SDRF Label カラムに同位体、Comment[isotope_labeled_compound] に同位体標識化合物を記載します。

|Labeled Extract Name|Label|Comment[isotope_labeled_compound]|
|human urine sample 1 12C|12C|12C-dansyl chloride|
|human urine pooled sample 13C|13C|13C-dansyl chloride|

この場合、同位体は Extract レベルで記載されるため、BioSample には同位体に関する属性を含める必要はありません。