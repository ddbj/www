---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Single-cell data submission guide
category: gea
current_tab: submission overview
lang: ja
---

## シングルセルデータの登録方法 {#single-cell-data}

10x Genomics プラットフォームを用いたデータについては「[10x Genomics](#tenx)」を、それ以外のプラットフォームについては「[10x Genomics 以外](#other)」の項を参照してください。  

* [10x Genomics](#tenx)
	* [Sample: demultiplexed, Cell: multiplexed](#tenx-de-multi)
		* [Gene Expression (GEX)](#gex)
		* [ATAC-seq](#atac)
		* [CellPlex/Hashtag Multiplexing](#cellplex)
		* [Multiplex Flex and On Chip Multiplexing (OCM)](#ocm)
		* [TCR/BCR](#tcr-bcr)
	* [Sample: multiplexed, Cell: multiplexed](#tenx-multi-multi)
* [10x Genomics 以外](#other)
	* [Sample: demultiplexed, Cell: multiplexed](#de-multi)
	* [Sample: multiplexed, Cell: multiplexed](#multi-multi)
	* [Sample: demultiplexed, Cell: demultiplexed](#de-de)
 
原則として、生データ（fastq、bam）は [DRA](/dra/submission.html) に、解析済みデータは [GEA](/gea/overview.html) に登録します。シングルセル解析の手法は日々進化しているため、本ガイドラインに加えてベンダー提供の最新情報や投稿先ジャーナルの方針も必ず確認してください。研究の再現性を確保する観点から、どのデータを公開するのが適切かを研究内容に応じて検討してください。

## 10x Genomics {#tenx}

サンプルの混合状態（マルチプレックスの有無）およびアッセイの種類に応じたガイドラインを参照してください。あわせて 10x Genomics の [Q&A](https://kb.10xgenomics.com/s/) および[公式ウェブサイト](https://www.10xgenomics.com/)も確認してください。

ガイドラインで推奨されているデータに加え、再現性の確保に必要と判断されるデータがある場合は、適宜 DRA/GEA へ登録してください。

* [What format of 10x Genomics data should I submit to NCBI GEO/SRA?](https://kb.10xgenomics.com/s/article/360024716391-What-formats-of-10x-Genomics-data-should-I-submit-to-NCBI-GEO-or-SRA)
* [Which CellPlex data files should be uploaded/downloaded to/from public repositories such as GEO/SRA?](https://kb.10xgenomics.com/s/article/360056727852-Which-CellPlex-hashing-data-files-should-be-uploaded-downloaded-to-from-public-repositories-such-as-GEO-SRA)
* [Cell Ranger Outputs](https://www.10xgenomics.com/support/jp/software/cell-ranger/latest/analysis/outputs/cr-outputs-overview)

### Sample: demultiplexed, Cell: multiplexed {#tenx-de-multi}

サンプルレベルでは分割されており（Singleplex）、各ライブラリー内に多数の細胞が含まれている（Multiplex）場合。製品とアッセイの種類に応じて、解析の再現に必要なファイルを登録してください。

#### Gene Expression (GEX) {#gex}

**BioSample**
{: .no-bottom}
* 各サンプルを個別に登録

**DRA**  
{: .no-bottom}
データファイル
{: .no-bottom}
* R1 と R2 の fastq (paired) を Run に登録。各 Run は、由来サンプルを参照する Experiment にリンクさせる。

メタデータ
{: .no-bottom}
* Experiment
    * [Library Construction Protocol](/dra/submission.html#Library_Construction_Protocol): 使用した製品名とバージョンを記載 (例: Chromium Next GEM Single Cell 3ʹ Kit v3.1)
    * [Library Source](/dra/metadata.html#Library_Source): "TRANSCRIPTOMIC SINGLE CELL" を選択

**GEA**  
データファイル (Processed data)
{: .no-bottom}
* barcodes.tsv, features.tsv, matrix.mtx または h5 や RDS

メタデータ
{: .no-bottom}
* IDF の [nucleic acid library construction protocol](/gea/metadata.html#Protocol_Type) に製品名とバージョンを記載

※ Single Cell 3\' v1 chemistry を使用した場合は、fastq ではなく bam を登録してください。

#### ATAC-seq {#atac}

**BioSample**  
{: .no-bottom}
* 各サンプルを登録

**DRA**  
{: .no-bottom}
データファイル
{: .no-bottom}
* bam (推奨): 位置ソート済み bam ファイル (possorted_bam.bam) を登録
* fastq: R1、R2 (I2)、R3 の fastq (paired) を登録

メタデータ
{: .no-bottom}
* Experiment
    * [Library Construction Protocol](/dra/submission.html#Library_Construction_Protocol): 製品名、バージョン (例: Chromium Next GEM Single Cell ATAC v2) およびリファレンスゲノム (例: GRCh38) を記載
    * [Library Source](/dra/metadata.html#Library_Source): "GENOMIC SINGLE CELL" を選択

**GEA**  
{: .no-bottom}
データファイル (Processed data)
{: .no-bottom}
* fragments.tsv.gz, fragments.tsv.gz.tbi
* peaks.bed
* filtered_peak_bc_matrix (barcodes.tsv, matrix.mtx) または h5 や RDS
* singlecell.csv
* summary.json

メタデータ
{: .no-bottom}
* IDF
	* [nucleic acid library construction protocol](/gea/metadata.html#Protocol_Type): 製品名、バージョン (例 Chromium Next GEM Single Cell ATAC v2) を記載
	* [normalization data transformation protocol](/gea/metadata.html#Protocol_Type): リファレンスアセンブリ名 (例 GRCh38) を記載

[Multiome ATAC](https://www.10xgenomics.com/support/epi-multiome) の場合は、ATAC-seq と遺伝子発現データを個別の DRA Experiment-Run として分け、それぞれのガイドラインに従ってください。SDRF では以下のように行を分けて区別します。

|Source Name|...|Assay Name|
|---|---|---|
|sample1|...|sample1_GEX|
|sample2|...|sample2_GEX|
|sample1|...|sample1_ATAC|
|sample2|...|sample2_ATAC|

#### CellPlex/Hashtag Multiplexing {#cellplex}

**BioSample**  
{: .no-bottom}
* 各サンプルを登録

**DRA**  
{: .no-bottom}
データファイル
{: .no-bottom}
* bam (推奨): sample_alignments.bam を登録
* fastq: RNA 由来のペア（R1, R2）と Feature Barcode 由来のペア（R1, R2）を別々の Experiment-Run として登録

メタデータ
{: .no-bottom}
* Experiment の [Library Construction Protocol](/dra/submission.html#Library_Construction_Protocol): 製品名、バージョン (例: Chromium Next GEM Single Cell 3\ʹ Kit v3.1) を記載

**GEA**  
{: .no-bottom}
データファイル (Processed data)
{: .no-bottom}
* unassigned_alignments.bam
* feature_reference.csv
* assignment_confidence_table.csv
* barcodes.tsv, features.tsv, matrix.mtx または h5 や RDS

メタデータ
{: .no-bottom}
* IDF
    * [nucleic acid library construction protocol](/gea/metadata.html#Protocol_Type): 製品名、バージョン (例: Chromium Next GEM Single Cell 3ʹ Kit v3.1) を記載
* SDRF
    * Comment[cell_counts] カラムを追加し、サンプルごとの細胞数（Cell Ranger の web summary に表示される値）を記載

#### Multiplex Flex and On Chip Multiplexing (OCM) {#ocm}

**DRA:**  
{: .no-bottom}
データファイル
{: .no-bottom}
* サンプルごとの bam を fastq に変換して登録可能

その他は [CellPlex/Hashtag Multiplexing](#cellplex) の項目に準じます。

#### TCR/BCR {#tcr-bcr}

**BioSample**  
{: .no-bottom}
* 各サンプルを登録

**DRA**  
{: .no-bottom}
データファイル
{: .no-bottom}
* fastq: R1、R2 の fastq (paired) を登録

メタデータ
{: .no-bottom}
* Experiment
    * [Library Construction Protocol](/dra/submission.html#Library_Construction_Protocol): 製品名、バージョン (例: Chromium Single Cell V(D)J Enrichment Kit for mouse T cell v1.1) およびリファレンスアセンブリ名 (例: GRCm39) を記載
    * [Library Source](/dra/metadata.html#Library_Source): "GENOMIC SINGLE CELL" を選択

**GEA**  
{: .no-bottom}
データファイル (Processed data)
{: .no-bottom}
* airr_rearrangement.tsv
* filtered_contig_annotations.csv
* clonotypes.csv

メタデータ
{: .no-bottom}
* IDF の [nucleic acid library construction protocol](/gea/metadata.html#Protocol_Type): 製品名、バージョン (例: Chromium Single Cell V(D)J Enrichment Kit for mouse T cell v1.1) を記載
* IDF の [normalization data transformation protocol](/gea/metadata.html#Protocol_Type): リファレンスゲノム (例: GRCm39) を記載

同時に遺伝子発現解析を行った場合は、TCR/BCR 解析と遺伝子発現データを個別の DRA Experiment-Run として分け、それぞれのガイドラインに従ってください。SDRF では以下のように行を分けて区別します。

|Source Name|...|Assay Name|
|---|---|---|
|sample1|...|sample1_GEX|
|sample2|...|sample2_GEX|
|sample1|...|sample1_TCR|
|sample2|...|sample2_TCR|
|sample1|...|sample1_BCR|
|sample2|...|sample2_BCR|

### Sample: multiplexed, Cell: multiplexed {#tenx-multi-multi}

サンプル・細胞の双方が混合状態で解析されている場合。

**BioSample**  
{: .no-bottom}
* 混合状態のサンプル (Multiplexed sample) 自体を登録

**DRA**  
{: .no-bottom}
データファイル
{: .no-bottom}
* サンプルの分割（Demultiplex）の再現に必要な、サンプルバーコード等を含む fastq または bam を登録

**GEA**  
{: .no-bottom}
データファイル (Processed data)
{: .no-bottom}
* assignment_confidence_table.csv
* 混合された各サンプルの属性を示す表

## 10x Genomics 以外 {#other}

### Sample: demultiplexed, Cell: multiplexed {#de-multi}

**BioSample**  
{: .no-bottom}
* 各サンプルを個別に登録

**DRA**  
{: .no-bottom}
データファイル
{: .no-bottom}
* サンプル毎に分割された fastq もしくは bam を Run に登録、各 Run は、由来サンプルを参照する Experiment にリンクさせる。

メタデータ
{: .no-bottom}
* Experiment
    * [Library Construction Protocol](/dra/submission.html#Library_Construction_Protocol): 使用した製品名、バージョンとプロトコールを記載
    * [Library Source](/dra/metadata.html#Library_Source): "TRANSCRIPTOMIC SINGLE CELL" もしくは "GENOMIC SINGLE CELL" を選択

**GEA**  
{: .no-bottom}
データファイル (Processed data)
{: .no-bottom}
* サンプル毎のシングルセルデータ

メタデータ
{: .no-bottom}
* IDF の [nucleic acid library construction protocol](/gea/metadata.html#Protocol_Type): 使用した製品名、バージョンとプロトコールを記載

### Sample: multiplexed, Cell: multiplexed {#multi-multi}

サンプル・細胞の双方が混合状態で解析されている場合。

**BioSample**  
{: .no-bottom}
* 混合状態のサンプル (Multiplexed sample) 自体を登録

**DRA**  
{: .no-bottom}
データファイル
{: .no-bottom}
* サンプルの demultiplex に必要なバーコード情報を含む fastq または bam を登録

メタデータ
{: .no-bottom}
* Experiment に以下を記載
	* [Library Construction Protocol](/dra/submission.html#Library_Construction_Protocol): 使用した製品名、バージョンとプロトコールを記載
	* [Library Source](/dra/metadata.html#Library_Source): "TRANSCRIPTOMIC SINGLE CELL" もしくは "GENOMIC SINGLE CELL" を選択

**GEA**  
{: .no-bottom}
データファイル (Processed data)
{: .no-bottom}
* サンプルおよびシングルセルレベルのデータ
* サンプル割り当ての根拠となるデータファイル

### Sample: demultiplexed, Cell: demultiplexed {#de-de}

1細胞ごとに個別のライブラリーとして処理されている場合。

**BioSample**  
{: .no-bottom}
* 1細胞を1サンプルとして登録

**DRA**  
{: .no-bottom}
データファイル
{: .no-bottom}
* 1細胞ごとに分割された fastq または bam を登録、各 Run は、由来細胞 BioSample を参照する Experiment にリンクさせる。

**GEA**  
{: .no-bottom}
データファイル (Processed data)
{: .no-bottom}
* 1細胞ごとの解析データ

メタデータ
{: .no-bottom}
* SDRF: 下記のようにシングルセル解析特有の情報を追加することを推奨。

|Source Name|...|Characteristics[single_cell_identifier]|Characteristics[inferred_cell_type]|Characteristics[post-analysis_single_cell_quality]|
|---|---|---|---|---|
|Sample 1|...|cell 1|cell type A|pass|
|Sample 2|...|cell 2|cell type B|pass|
|Sample 3|...|cell 3|not applicable|fail|
