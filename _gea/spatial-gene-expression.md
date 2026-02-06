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

### 10x Genomics Visium {#visium}

10x Genomics [Visium](https://www.10xgenomics.com/jp/products/spatial-gene-expression) 
から出力される組織切片上の空間的な遺伝子発現プロファイルデータの登録方法を説明します。

空間的な遺伝子発現量測定に使用したバーコード配列、バーコード配列を含むスポットの位置、組織切片画像、スポットと画像の対応倍率、を登録します。    

* [What format of 10x Genomics data should I submit to NCBI GEO/SRA?](https://kb.10xgenomics.com/s/article/360024716391-What-formats-of-10x-Genomics-data-should-I-submit-to-NCBI-GEO-or-SRA) 
* [Space Ranger Spatial Outputs](https://www.10xgenomics.com/support/jp/software/space-ranger/latest/analysis/outputs/spatial-outputs)
* [Understanding Space Ranger Outputs](https://www.10xgenomics.com/support/jp/software/space-ranger/latest/analysis/outputs/output-overview)

上記の Visium ページで示されている出力ファイルの内、以下のファイルを生・解析データと一緒に登録します。他の関連するファイルを含めることもできます。

#### DRA {#dra}

* fastq or bam

DRA Experiment の [Library Construction Protocol](/dra/submission.html#Library_Construction_Protocol) にシングルセルライブラリー構築手法（例
Smart-seq2、10x、Drop-seq）、使用したキットの名前とバージョンを記入します。 10x の場合は 10x chemistry のバージョン (例 v1、v2) も記入します。

#### GEA {#gea}

GEA processed data  
{: .no-bottom}
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

### 10x Genomics Xenium {#xenium}

* Submission Type: Microarray
* Array Design: [A-GEAD-246](https://ddbj.nig.ac.jp/public/ddbj_database/gea/array/A-GEAD-000/A-GEAD-246/) (Xenium)

Metadata    
{: .no-bottom}
* IDF sample collection protocol に組織切片を調整した方法を記載します。  

Raw と Processed data は以下のファイルを tar でまとめたものを登録します。　　　

Raw data files
{: .no-bottom}
* morphology.ome.tif: 高解像度の組織形態画像
* transcripts.parquet: デコード済み転写産物データ (parquet もしくは csv フォーマット)

Processed data files
{: .no-bottom}
* barcodes.tsv, features.tsv, matrix.mtx もしくは cell_feature_matrix.h5: 転写産物カウント (MEX もしくは HDF5 フォーマット)
* cells.parquet: Cell サマリー (parquet もしくは csv フォーマット)
* cell_boundaries.parquet: Cell セグメンテーション (parquet もしくは csv フォーマット)
* nucleus_boundaries.parquet: Nucleus セグメンテーション (parquet もしくは csv フォーマット)
* rds: Seurat object (任意)

関連ページ:   
* [Understanding Xenium Outputs](https://www.10xgenomics.com/jp/support/software/xenium-onboard-analysis/latest/analysis/xoa-output-understanding-outputs)
* [Archiving Xenium Data](https://www.10xgenomics.com/jp/support/software/xenium-onboard-analysis/latest/analysis/xoa-output-archive-data)

### MERFISH {#merfish}

MERFISH や MERSCOPE のデータを登録する場合、解析済みデータが必要です。   

* Submission Type: Microarray
* Array Design: [A-GEAD-247](https://ddbj.nig.ac.jp/public/ddbj_database/gea/array/A-GEAD-000/A-GEAD-247/) (MERFISH)

MERFISH の画像データは非常に巨大であるため、GEA でアーカイブすることができません。画像ファイルおよび「.vzgファイル」については、汎用データリポジトリ（Generalist archive）に登録することを推奨します。  

Raw data files
{: .no-bottom}
* [dummy data file](/assets/files/dummy/dummy-raw-data.txt) (md5: 5a3c1b7fe06fb47ffcf4b31ae87a8ee4) を raw data file として登録します。

Processed data files
{: .no-bottom}
* 同定された転写産物 (text もしくは parquet フォーマット)
* .vzg ファイルは GEA では受付けていません。

