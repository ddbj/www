---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Spatial gene expression
category: gea
current_tab: submission overview
lang: ja
---

## 空間的遺伝子発現データ  {#spatial}

空間的遺伝子発現データの登録では、測定された遺伝子発現量と空間上の位置が対応付けられるようになっていることが必要です。

### Visium {#visium}

10xGenomics [Visium](https://www.10xgenomics.com/jp/products/spatial-gene-expression) 
から出力される組織切片上の空間的な遺伝子発現プロファイルデータの登録方法を説明します。

空間的な遺伝子発現量測定に使用したバーコード配列、バーコード配列を含むスポットの位置、組織切片画像、スポットと画像の対応倍率、を登録します。    

* [What format of 10x Genomics data should I submit to NCBI GEO/SRA?](https://kb.10xgenomics.com/hc/en-us/articles/360024716391-What-format-of-10x-Genomics-data-should-I-submit-to-NCBI-GEO-SRA) 
* [Spatial Gene Expression - Image Outputs](https://support.10xgenomics.com/spatial-gene-expression/software/pipelines/latest/output/spatial)
* [Understanding Outputs](https://support.10xgenomics.com/spatial-gene-expression/software/pipelines/latest/output/overview)

上記の Visium ページで示されている出力ファイルの内、以下のファイルを生・解析データと一緒に登録します。他の関連するファイルを含めることもできます。

#### DRA {#dra}

* fastq or bam

DRA Experiment の [Library Construction Protocol](/dra/submission.html#Library_Construction_Protocol) にシングルセルライブラリー構築手法（例
Smart-seq2、10x、Drop-seq）、使用したキットの名前とバージョンを記入します。 10x の場合は 10x chemistry のバージョン (例 v1、v2) も記入します。

#### GEA {#gea}

GEA processed data  
* GEX Matrix: 遺伝子発現データ
* tissue_hires_image.png, tissue_lowres_image.png: 組織切片の画像
* scalefactors_json.json: 画像とスポットとの倍率を含む対応関係
* tissue_positions_list.csv: バーコード配列とスポット座標との対応関係
* web_summary.html: サマリーデータ (任意)
* cloupe.cloupe: データ可視化と解析のための Loupe Browser ファイル　(任意)

[CytAssist enabled Gene Expression (GEX)](https://support.10xgenomics.com/spatial-gene-expression/software/pipelines/latest/output/spatial) では spatial サブディレクトリに出力される以下のファイルも追加します。

* aligned_tissue_image.jpg (web_summary.html を登録する場合は省略できます)
* cytassist_image.tiff

上記のファイルを tar でまとめて GEA processed data として登録します。
