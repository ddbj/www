---
layout: tabbed_indexed_content
service_name: TogoVar
title: Metadata
category: togovar
current_tab: submission
lang: ja
---

## データモデル {#data-model}

TogoVar-repository SNP/SV で共通のデータモデルを使用しています。

{% include image.html url="togovar/data-model.jpg" caption="TogoVar-repository データモデル" class="w600" %}

* BioProject と BioSample は必須。
* バリアントは Dataset を介して Study/SampleSet にリンク。
* SampleSet/Experiment/Dataset は連番で内部的に参照。

アクセッション番号
* SNP: study (dstd), variant (dss). 公開された dss バリアントは次回の dbSNP build で rs にマージされます。
* SV: study (dstd), variant call (dssv), variant region (dsv)

## 登録用エクセル {#excel}

登録用エクセルをダウンロードして内容を記入します。
異なる種別のバリアント (SNP と SV) は別々の study として登録してください。

[TogoVar-repository submission excel](https://github.com/ddbj/togovar-repository/raw/main/submission_excel/TogoVar_v1.4.xlsx)

