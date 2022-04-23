---
layout: tabbed_indexed_content
service_name: MetaboBank
title: メタデータ
category: metabobank
current_tab: submission
lang: ja
---

## MAGE-TAB  {#mage-tab}

MicroArray Gene Expression Tabular ([MAGE-TAB](/assets/files/magetab/MAGE-TABv1.1.pdf)) は機能ゲノミクスデータを構造化・標準化された方法で記述するために開発された形式で、ArrayExpress と [GEA](/gea/metadata.html) で使用されています。
MAGE-TAB は[プロテオミクス分野](https://github.com/bigbio/proteomics-metadata-standard)でも使われ始めており、オミックス分野における国際標準になりつつあります。  
MAGE-TAB は研究全体を記述する IDF、および、サンプルとデータファイルの関係性を記述する SDRF から構成されています。

{% include image.html url="magetab/mb-mage-tab.jpg" caption="IDF，SDRF, 生・解析済みデータファイル・MAF の関係" class="w500" %}

## メタデータエクセル  {#metadata-excel}

実験種別に対応したメタデータエクセルをダウンロードし、内容を記入します。

* Mass spectrometry, chromatography
    * Liquid chromatography-mass spectrometry (LC-MS, [download](/assets/files/submission/metabobank/MetaboBank_LC-MS_metadata.xlsx))
    * Liquid chromatography, diode array detector-mass spectrometry (LC-DAD-MS, [download](/assets/files/submission/metabobank/MetaboBank_LC-DAD-MS_metadata.xlsx))
    * Gas chromatography-mass spectrometry (GC-MS, [download](/assets/files/submission/metabobank/MetaboBank_GC-MS_metadata.xlsx))
    * Two dimensional gas chromatography-mass spectrometry (GCGC-MS, [download](/assets/files/submission/metabobank/MetaboBank_GCGC-MS_metadata.xlsx))
    * Gas chromatography, flame ionization detector-mass spectrometry (GC-FID-MS, [download](/assets/files/submission/metabobank/MetaboBank_GC-FID-MS_metadata.xlsx))
    * Capillary electrophoresis-mass spectrometry (CE-MS, [download](/assets/files/submission/metabobank/MetaboBank_CE-MS_metadata.xlsx))
* Mass spectrometry, direct injection
    * Direct infusion-mass spectrometry (DI-MS, [download](/assets/files/submission/metabobank/MetaboBank_DI-MS_metadata.xlsx))
    * Flow injection analysis-mass spectrometry (FIA-MS, [download](/assets/files/submission/metabobank/MetaboBank_FIA-MS_metadata.xlsx))
    * Matrix-assisted laser desorption-ionisation mass spectrometry (MALDI-MS, [download](/assets/files/submission/metabobank/MetaboBank_MALDI-MS_metadata.xlsx))
* Mass spectrometry imaging (MSI, [download](/assets/files/submission/metabobank/MetaboBank_MSI_metadata.xlsx))
* Nuclear magnetic resonance spectroscopy (NMR, [download](/assets/files/submission/metabobank/MetaboBank_NMR_metadata.xlsx))

## IDF  {#idf}

IDF (Investigation Description Format) は研究概要、実験デザイン、プロトコール、文献情報や登録者情報といった研究全体を記述するファイルです。  

[IDF の例](https://docs.google.com/spreadsheets/d/1PziXaK3Cic1xQXdcCgBZ1g-4LIKvZRZt71nYCH5e22k/edit#gid=30173120)  

各項目の説明はメタデータエクセルをご覧ください。

## SDRF  {#sdrf}

SDRF (Sample and Data Relationship Format) はサンプル属性およびサンプル、測定機器、データファイル間の関係性を記述するファイルです。
SDRF はオミックス実験の自然な流れを再現した表であり、
大元のサンプルから始まり、間にプロトコールを挟みながら最後はサンプルから得られたデータファイルで終わります。

[SDRF の例](https://docs.google.com/spreadsheets/d/1PziXaK3Cic1xQXdcCgBZ1g-4LIKvZRZt71nYCH5e22k/edit#gid=513795053)  

各項目の説明はメタデータエクセルをご覧ください。

{% include image.html url="magetab/mb-sdrf.jpg" caption="SDRF の構造" class="w550" %}
