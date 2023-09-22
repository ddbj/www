---
layout: simple
title: 系統保存機関から分譲された菌株を研究室で培養して得たサンプルの記載方法は？
category: faq
db:
  - biosample
  - ddbj
tags:
  - 採取場所・日時
date: 2023-09-10T12:39:51
lang: ja
---

[culture_collection](/biosample/attribute.html#culture_collection) に菌株 ID を所定書式で記載し、保存機関で記録されている元々の採取場所と日付を記載します。元々の採取場所や日付が分からない場合は、[missing value](/biosample/submission.html#missing-value-reporting) の "not collected" を使用します。
研究室で長期間に渡って菌株を継代培養しており、その性質が変化している場合、シークエンス目的でサンプルを調整した日付を記載します。また、このケースにおいて、研究室の場所を記載することが適切ではない場合、[exemption term](/biosample/submission.html#missing-value-reporting) の "missing: lab stock" を使用します。このようなケースでは description で「長期間に渡って分譲された菌株を継代培養しており、その性質が変化していること」を記載します。

例
国立研究開発法人 国立環境研究所 微生物系統保存施設 (NIES コレクション) の [Arthrospira platensis NIES-39 株](https://mcc.nies.go.jp/strainList.do?strainId=37)。チャド湖で採集されているが、採集年月は不明。



