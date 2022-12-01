---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Single-cell submission guide
category: gea
current_tab: submission overview
lang: ja
---

## 一細胞解析データの登録方法  {#single-cell-data}

遺伝子発現等の次世代シークエンサを使った一細胞解析データは、生データを DRA、解析済みデータを GEA に登録します。
<span class="red">解析している細胞数（サンプル数）が数十の場合はサンプルとファイルを分割して登録してください。それよりも細胞数が多い場合や分割によって再現性が損なわれる場合は混合したサンプルとファイルを登録してください。</span>    

10x Genomics のデータファイルについては [What format of 10x Genomics data should I submit to NCBI GEO/SRA?](https://kb.10xgenomics.com/hc/en-us/articles/360024716391-What-format-of-10x-Genomics-data-should-I-submit-to-NCBI-GEO-SRA) を参考にしてください。

### ライブラリー情報  {#library}

分割・混合登録に関係なく、DRA Experiment の [Library Construction Protocol](/dra/submission.html#Library_Construction_Protocol) にシングルセルライブラリー構築手法（例
Smart-seq2、10x、Drop-seq）、使用したキットの名前とバージョンを記入します。 10x の場合は 10x chemistry のバージョン (例 v1、v2) も記入します。

#### データファイル形式  {#data-file-format}

DRA の生データとしては基本的に [fastq もしくは bam](/dra/submission.html#run-data-files) を登録します。混合登録の場合はバーコードやリンカー配列を含めてください。

10x で bam にタグやバーコード配列が含まれていない場合は fastq ファイルを登録します。参考: [Generating FASTQs with cellranger mkfastq](https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/using/mkfastq)

#### GEA Experiment Type  {#experiment-type}

'RNA-seq of coding RNA from single cells' もしくは 'RNA-seq of non coding RNA from single cells' を選択します。[GEA Experiment Type](https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=1327621011)

## 分割登録の場合  {#de-multiplexed}

### BioSample  {#biosample} 

細胞毎に BioSample を登録し、サンプル属性として細胞毎の情報を記載します。以下に例を示します。

| \*sample\_name | ... | single\_cell\_identifier | inferred\_cell\_type | single\_cell\_well\_quality |
|---|
| sample 1       | ... | cell 1                   | cell type A          | OK                          |
| sample 2       | ... | cell 2                   | cell type B          | OK                          |
| sample 3       | ... | cell 3                   | not applicable       | 2 cells                     |

### DRA  {#multiplexed-dra} 

サンプル（細胞）毎に分割された [fastq もしくは bam](/dra/submission.html#run-data-files) を登録します。

### GEA  {#de-multiplexed-gea}

サンプル（細胞）毎に分割された[解析済みデータファイル](/gea/datafile.html#seq_proc)を登録します。  
Loupe Browser でのデータ可視化と解析のための cloupe.cloupe ファイルを含めることもできます ([Understanding Outputs](https://support.10xgenomics.com/spatial-gene-expression/software/pipelines/latest/output/overview))。 

## 混合登録の場合  {#multiplexed}

### BioSample  {#biosample}

ライブラリー（一般的に数百～数千の細胞を含む）毎に BioSample を登録します。

| \*sample\_name | ... | tissue |
|---|
| library 1      | ... | liver  |
| library 2      | ... | heart  |
| library 3      | ... | brain  |

### DRA  {#multiplexed-dra}

バーコード配列を含んだライブラリー毎の [fastq もしくは bam](/dra/submission.html#run-data-files) を登録します。10x で bam にバーコード配列が含まれていない場合は fastq ファイルを登録します。参考: [Generating FASTQs with cellranger mkfastq](https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/using/mkfastq)

### GEA  {#multiplexed-gea}

細胞毎の情報はサンプル属性にもライブラリーにも記載されていない状態なので、[解析済みデータファイル](/gea/datafile.html#seq_proc)に<span class="red">細胞毎の属性情報、リードカウントやバーコード配列を含めます。</span>   
Loupe Browser でのデータ可視化と解析のための cloupe.cloupe ファイルを含めることもできます ([Understanding Outputs](https://support.10xgenomics.com/spatial-gene-expression/software/pipelines/latest/output/overview))。 
