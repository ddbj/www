---
layout: indexed_content
title: Accepted Data File Formats
category: gea
current_tab: submission overview
tab_menu:
  - id: home
    title: Home
    url: /gea/index.html
  - id: submission overview
    title: Submission Overview
    url: /gea/overview.html
    children:
      - title: Submit microarray experiment
        url: /gea/submit-array.html
      - title: Submit sequencing experiment
        url: /gea/submit-sequence.html
      - title: Metadata
        url: /gea/metadata.html
      - title: Data File
        url: /gea/datafile.html
      - title: Validation
        url: /gea/validation.html
      - title: Single-cell submission guide
        url: /gea/single-cell.html
      - title: Example
        url: /gea/example.html
      - title: Array Design
        url: /gea/adf.html
      - title: Data matrix
        url: /gea/matrix.html
      - title: Reviewer Access
        url: /gea/reviewer-access.html
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=gea
  - id: search
    title: Search (AOE)
    url: http://aoe.dbcls.jp/
    children:
      - title: Search (ArrayExpress)
        url: https://www.ebi.ac.uk/arrayexpress/browse.html
      - title: RefEx
        url: http://refex.dbcls.jp/
  - id: downloads
    title: Downloads
    url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/gea
  - id: about gea
    title: About GEA
    url: /gea/about-gea.html
lang: ja
---

## ファイル準備における注意点 <a name="notes"></a>

1.  experiment 中の全ての sample/hybridization
    に対する生データファイルと生マトリックスファイルを登録すること。
2.  ファイル名は英数字 [A-Z,a-z,0-9]、アンダースコア [_]、ハイフン [-] とドット [.]
    のみから構成され、空白文字、カッコ、句読点やシンボルを含まないこと。
3.  全ての spreadsheet/matrix ファイルはタブ区切りテキストファイル形式 (\*.txt) で保存しエクセル形式
    (\*.xls、\*.xlsx) で保存しないこと。

## マイクロアレイデータファイル形式 <a name="array_data"></a>

### 生データファイルの形式 <a name="ar-raw"></a>

**アッセイ毎の生データファイル (推奨):**

マイクロアレイスキャナー付属ソフトによって生成される "native" ファイル。Native ファイルは変更・編集せずにそのまま 1
hybridization assay 辺り 1 file として登録します。 一つの assay は Affymetrix
アレイのように１チャンネル、もしくは、赤と緑二種類の発色団といったように２チャンネルから構成されている場合があります。

マイクロアレイ製造業者は時と共に様々な生データファイル形式を開発してきました。持っている生データファイル形式が登録可能かどうか不明な場合は下記のリストを参照してください。

**生データマトリックス (非推奨):**

複数の hybridization assay に由来するデータを含んでいるタブ区切りテキストファイル形式 (.txt、probe が行で
assay がカラム) の生データファイル。マトリックスファイル形式の仕様は (Illumina GenomeStudio
データファイル以外は)
厳格に定められています。詳細は[マトリックスファイルガイドラインと例](/gea/matrix.html)を参照してください。

### プラットフォーム毎の受付フォーマット <a name="ar_raw"></a>

生データファイルのプラットフォームはファイルヘッダー中のカラムヘッダーで判定されます。

  - Common platforms:
      - [Affymetrix](#affymetrix)
      - [Agilent](#agilent)
      - [Illumina](#illumina)
      - [GenePix](#genepix)
      - [NimbleScan](#nimblescan)
  - 他:
      - [ScanAlyze](#scanalyze)
      - [ScanArray](#scanarray-quantarry)
      - [QuantArray](#scanarray-quantarry)
      - [Arrayvision](#arrayvision)
      - [Spotfinder](#spotfinder)
      - [BlueFuse](#bluefuse)
      - [UCSF Spot](#ucsfspot)
      - [Applied Biosystems](#appliedbiosystems)
      - [CodeLink](#codelink)
      - [Imagene](#imagene)
      - [CSIRO Spot](#csirospot)
      - [Generic (for spotted arrays、non-platform specific)](#generic)

Affymetrix <a name="affymetrix"></a>  
: 古い GDAC 形式と新しい GCOS/XDA 形式の両方を使って CEL と EXP ファイルを認識します。

Agilent <a name="agilent"></a>  
: 以下のカラムヘッダーを含むファイルは Agilent ファイルとして認識されます:

| Row | Col | PositionX | PositionY |

Illumina <a name="illumina"></a>  
: Illumina の生データファイルはテキストかバイナリー形式です。テキストファイルは [Illumina GenomeStudio
software](https://www.illumina.com/techniques/microarrays/array-data-analysis-experimental-design/genomestudio.html)
から生成されます。バイナリーの "IDAT" ファイル ("intensity data file") はスキャナーから生成され
[illuminaio](http://www.bioconductor.org/packages/release/bioc/html/illuminaio.html)
等の R/BioConductor パッケージで読み込めます)。バイナリーで解析に必要な全情報を含んでいる IDAT
の登録を推奨します。対照的にテキストファイルはどのプローブがコントロールであるか等の情報が別ファイルとなっていて欠けている場合があること、また、フォーマットが統一されておらず統合解析が難しいことがあります。他のデメリットとしてテキストファイルはユーザが何らかのソフトで開いて保存する間に意図せぬ変更が入りやすいという点が挙げられます。GenomeStudio
テキストファイルを登録する場合、以下が予期されるカラム構成になります:  

| PROBE_ID | Assay_Name_1.QT1 | Assay_Name_1.QT2 | Assay_Name_2.QT1 | Assay_Name_2.QT2 |

PROBE_ID は常に "ILMN_123456" のような形式になります。QT は quantitation type の略で
AVGSignal といったカラム中の測定値の種類のことです。必要数の quantitation type
を含めることができます。カラムは sample name でソートし、次に
quantitation type でソートします。

GenePix <a name="genepix"></a>  
: GenePix ファイル (通常拡張子は .gpr か .txt) は以下のカラムヘッダーで認識されます:

| Block | Column | Row | X | Y |

NimbleScan <a name="nimblescan"></a>  
: 全 NimbleScan ファイル (Feature、Probe と Pair) は以下のヘッダーを含みます:

| PROBE_ID | X | Y |

ScanAlyze <a name="scanalyze"></a>  
: 以下のカラムヘッダーで認識されます:

| GRID | COL | ROW | LEFT | TOP | RIGHT | BOT |

ScanArray/QuantArray <a name="scanarray-quantarry"></a>  
: 以下のカラムヘッダーで認識されます:

| Array Column | Array Row | Spot Column | Spot Row | X | Y |

古い QuantArray 形式は以下のカラムヘッダーで認識されます:

| Array Column | Array Row | Column | Row |

ArrayVision <a name="arrayvision"></a>  
: 以下のカラムヘッダーで認識されます:

| Primary | Secondary |

より新しい "lg2" ArrayVision ファイルは以下のカラムヘッダーで認識されます:

| Spot labels |

Spotfinder <a name="spotfinder"></a>  
: 以下のカラムヘッダーで認識されます:

| MC | MR | SC | SR |

BlueFuse <a name="bluefuse"></a>  
: 以下のカラムヘッダーで認識されます:

| COL | ROW | SUBGRIDCOL | SUBGRIDROW |

UCSF Spot <a name="ucsfspot"></a>  
: 以下のカラムヘッダーで認識されます:

| Arr-colx | Arr-coly | Spot-colx | Spot-coly |

Applied Biosystems <a name="appliedbiosystems"></a>  
: 以下のカラムヘッダーで認識されます:

| Probe_ID | Gene_ID |

CodeLink <a name="codelink"></a>  
: 以下のカラムヘッダーで認識されます:

| Logical_row | Logical_col | Center_X | Center_Y |

ImaGene <a name="imagene"></a>  
: 以下のカラムヘッダーで認識されます:

| Meta Column | Meta Row | Column | Row | Field | Gene ID |

ImaGene 3.0 フォーマットもサポートしています:

| Meta_col | Meta_row | Sub_col | Sub_row | Name | Selected |

CSIRO Spot <a name="csirospot"></a>  
: 以下のカラムヘッダーで認識されます:

| grid_c | grid_r | spot_c | spot_r | indexs |

Generic (spotted アレイと platform 特異的でないアレイ) <a name="generic"></a>  
: 生データファイルが [スポットアレイ中のプローブ位置](/gea/adf.html#feature) を示す
BlockColumn/BlockRow/Column/Row
フィールドを含んでいる場合、以下の４つのカラムの後にデータのカラムが続く一般的な形式を使うことができます:

| MetaColumn | MetaRow | Column | Row |

### 解析データファイル <a name="seq_proc"></a> 

解析データファイル（processed file）は生データファイルにバックグラウンド補正、正規化や統計的な解析（例 fold-change と
p-value の計算）を施すことで得られるファイルのことです。最終的な解析ファイル（final processed
data）は関連する論文の結論が導かれる基になったデータのことです。 マイクロアレイスキャナーからの
processed file（Affymetrix スキャナーからの .chp ファイル、Illumina BeadChip
GenomeStudio ソフトからの出力ファイル）とタブ区切りテキストファイル形式での二次元 matrix
ファイルの両方を受け付けています。後者については行が
probe/probeset/gene name で１または複数の hybridization からのデータが列になります。GEA は
processed data file を以下の場合に受付けています。

  - １ hybridization 辺り１つの processed file (推奨)。複数のまとまった processed file
    を登録することになります。
  - 全ての hybridization からの正規化されたデータを含んだ１つの表 ("matrix") (非推奨)。
  - 異なるデータ処理段階の正規化されたデータを含んだいくつかの表ファイル ("matrix")、１つは正規化されたプローブの
    intensity でもう一つは遺伝子単位で算出した fold-change である場合など。

### 解析済みテキストファイル <a name="array-proc-format"></a>

二次元の表において行が probe/gene 列が sample/data という形式になっている必要があります。

行が probe/gene: 可能であれば行のヘッダーに対応する array design file 中の probe
とマッピングできるオフィシャルな probe name/identifier を含めます。
一列目にのヘッダーに (プローブに対する) Reporter Identifier もしくは (Affymetrix
等の複数プローブセットから構成される要素に対する) CompositeSequence
Identifier を記載します。Probe ID が無い場合は gene symbol や他の ID (GenBank cDNA
アクセッション番号や UniProt protein アクセッション番号) を記載するようにしてください。

列に Sample/Data: 可能であれば各データカラムヘッダーに SDRF 中のサンプルの対応がとれる sample name
を記載します。このマッピングによりデータとサンプルの対応がとれるようになります。

１つの hybridization からのデータを含んでいる processed .txt file は以下のようになります。

| Reporter Identifier | sample 1 normalised intensity | sample 1 background |
| ------------------- | ----------------------------- | ------------------- |
| **probe_name_1**    | 233.5                         | 69.1                |
| **probe_name_2**    | 129.4                         | 27.6                |

以下は行ヘッダーに gene name が記載されている例です。

| Human HGNC gene name | sample 1 normalised intensity | sample 1 background |
| -------------------- | ----------------------------- | ------------------- |
| **CDKN2A**           | 233.5                         | 69.1                |
| **BRCA2**            | 129.4                         | 27.6                |

複数 hybridization からのデータを集計した processed "matrix" は以下のようになります。Probe ID
が無い場合は gene symbol や他の ID (GenBank cDNA アクセッション番号や UniProt
protein アクセッション番号) を記載するようにしてください。

サンプル毎の正規化された値:

| Reporter<br>Identifier | sample 1<br>normalised | sample 2<br>normalised | sample 3<br>normalised | sample 4<br>normalised |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| **probe_name_1**    | 26.9                | 44.3                | 62.3                | 58.5                |
| **probe_name_2**    | 22.9                | 43.7                | 58.2                | 67.4                |

<br>

| GenBank<br>accession | sample 1<br>normalised | sample 2<br>normalised | sample 3<br>normalised | sample 4<br>normalised |
| ----------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| **BC000578**      | 26.9                | 44.3                | 62.3                | 58.5                |
| **M31642**        | 22.9                | 43.7                | 58.2                | 67.4                |

集計された値の matrix (一つのデータカラムが複数サンプルに対応する場合):

| Reporter Identifier | drug A treated average | drug B treated average | untreated control average |
| ------------------- | ---------------------- | ---------------------- | ------------------------- |
| **probe_name_1**    | 44.6                   | 89.3                   | 290.15                    |
| **probe_name_2**    | 98.3                   | 36.7                   | 100.52                    |

### Additional file <a name="seq-additional"></a> <a name="seq-additional"></a>

一細胞解析における spike-in やデータ解析に必要な追加ファイルを additional file として登録することができます（例
[E-MTAB-3624](https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-3624/)）。登録を希望する場合は
[GEA チームに連絡](/contact-ddbj.html)してください。

## シークエンシングデータ <a name="seq_data"></a>

  - [生データファイル](#seq_raw)
  - [解析済みファイル](#seq_proc)

### 生データファイル <a name="seq_raw"></a> 

次世代シークエンスの生データは DDBJ Sequence Read Archive (DRA) に事前登録する必要があります。[DRA
に登録可能なファイルリスト](/dra/submission.html#run-data-files)をご覧ください。

### 解析データファイル <a name="seq_proc"></a>

最終的な解析データファイル（final processed data）とは関連する論文の結論が導かれる基になったデータのことです。
論文における結論は標準的なアライメントファイル（例
BAM、SAM、BED）からさらに解析を進めたデータに基づいていることが一般的であるため、
GEA はアライメントファイルが解析データファイルとして登録されることを想定していません。
標準的なアライメントファイルのみが解析データである場合は
[GEA に連絡](/contact-ddbj.html)してください。

解析データファイルの要件は実験の性質に依存するため完全には定められていません。

発現解析では対象となる生物学的特徴（フィーチャー）に関する定量的なデータが生成されます。生物学的特徴は遺伝子、転写産物、エキソン、miRNA
等で通常二種類のデータが生成されます。

  - 対象となる生物学的特徴を測定したリード（配列）のカウント数
  - 正規化された測定量。例 Cufflinks、Cuffdiff、DESeq、edgeR 等からの出力データ

どちらか、もしくは、両方を解析データとして登録することができます。ファイルはサンプルからのデータをまとめたマトリックスファイルか各サンプルに対応する個別ファイル（推奨）として登録することができます。
発現量に差がある遺伝子だけを抽出するのではなく、全てのサンプルにおける全測定対象の測定値が記載された完全なデータを登録してください。

ChIP-Seq データは定量的なタグ密度を記載したピークファイル等が解析データになることが一般的です。標準的なファイル形式は
WIG、bigWig、bedGraph 等です。

解析データファイルにおける測定対象（遺伝子や転写産物等）は公的なアクセッション番号やゲノム座標で実体をトレースできるようになっている必要があります。使用した[リファレンスゲノム](https://www.ncbi.nlm.nih.gov/assembly/)（例
hg19、mm9、GCF_000001405.13) の ID を normalization data transformation
protocol や high throughput sequence alignment protocol
に明記します。加えて、解析データファイルの中身と形式に関する情報もこれらのプロトコールに記載します。

WIG、bedGraph、GFF もしくは GTF ファイルを登録する場合、これらのファイル形式の要件については [UCSC file
format FAQ](http://www.genome.ucsc.edu/FAQ/FAQformat.html) を参照してください。

### 解析済み matrix ファイル (アドバンスドユーザ向け) <a name="matrix"></a>

特定の行と列にあるデータが experiment 中の assay と array design file 中の probe/probe set
と人が見て/機械的にマッピングされるファイル形式である厳格な MAGE-TAB 形式での matrix
ファイルも受け付けています。詳細は[こちらのガイドライン](/gea/matrix.html)を参照してください。

### Additional file <a name="seq-additional"></a>

一細胞解析における spike-in やデータ解析に必要な追加ファイルを additional file として登録することができます（例
[E-MTAB-3624](https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-3624/)）。登録を希望する場合は
[GEA チームに連絡](/contact-ddbj.html)してください。
