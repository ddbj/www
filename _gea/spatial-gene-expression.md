---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Spatial gene expression
category: gea
current_tab: submission overview
lang: ja
---

## 空間的遺伝子発現データ

空間的遺伝子発現データの登録では、測定された遺伝子発現量と空間上の位置が対応付けられるようになっていることが必要です。

### Visium

10xGenomics [Visium](https://www.10xgenomics.com/jp/products/spatial-gene-expression) 
から出力される組織切片上の空間的な遺伝子発現プロファイルデータの登録方法を説明します。

空間的な遺伝子発現量測定に使用したバーコード配列、バーコード配列を含むスポットの位置、組織切片画像、スポットと画像の対応倍率、を登録します。    

[Spatial Gene Expression - Image Outputs](https://support.10xgenomics.com/spatial-gene-expression/software/pipelines/latest/output/images)

上記の Visium ページで示されている出力ファイルの内、以下のファイルを生・解析データとは別の additional ファイルとして登録します。他の関連するファイルを含めることもできます。

* tissue_hires_image.png, tissue_lowres_image.png: 組織切片の画像
* scalefactors_json.json: 画像とスポットとの倍率を含む対応関係
* tissue_positions_list.csv: バーコード配列とスポット座標との対応関係

手順については [GEA チームにお問い合わせください](/contact-ddbj.html)。