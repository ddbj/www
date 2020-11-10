---
layout: indexed_content
title: MAGE-TAB format for raw and processed data matrix
pathname: matrix
category: gea
lang: ja
---

## Data matrix format <a name="data-matrix"></a>

このファイルフォーマットは各データポイントが experiment 中の特定 assay、そして array design file 中の特定
probe/probe set にマッピングされるようにするためのものです。
支障なくマッピングされるためには各マトリックスファイルが一つのアレイデザインに由来するアッセイのみを含んでいる必要があり（experiment
で一つ以上のアレイデザインを使っている場合は複数のマトリックスファイルが必要です）、また、カラム/行のヘッダーとカラムの順番が厳密に制御されている必要があります。

**Column/row ヘッダー:**

マトリックスファイルの一行目のヘッダーは assay name で assay とデータを対応付ける Hybridization REF
である必要があります。二行目のヘッダーには各カラムの "quantitation type" (log2 ratio
といった測定値の種類) をリストします。そして一列目は Reporter REF とし、アレイデザインファイルの
probe ID とデータが対応付けられるようにします。

**複数アッセイの測定値を計算した場合:**

Log2 fold-change といった計算値は往々にして一つ以上のアッセイの測定値を含んでいます
(例えば全ての遺伝子について3つのノックアウトサンプルに対して3つの野生型コントロールサンプルの平均値を計算した場合)。このケースでは各カラムにセミコロンで区切った複数の
assay name を記載します。

| **Hybridization REF** | Hyb1;Hyb2;Hyb3 | Hyb4;Hyb5;Hyb6 |
| **Reporter REF**      | log2 FC        | log2 FC        |

**データカラムの順番:**

マトリックス形式ではカラムの順序と構成が定められています: 最初は assay 続いて quantitation type の順になります:

Correct

| **Hybridization REF** | Hyb1    | Hyb1   | Hyb2     | Hyb2    |
| **Reporter REF**      | log2 FC | p-value | log2 FC | p-value |

Wrong

| **Hybridization REF** | Hyb1    | Hyb2     | Hyb1   | Hyb2    |
| **Reporter REF**      | log2 FC | log2 FC | p-value | p-value |

### Affymetrix 以外の data matrix の例 <a name="ex-matrix-non-affy"></a>

下記の例では６つの内４つのアッセイが matrix file 中の log2 ratio にマッピングされています。 各データ行は [array
design file](/gea/adf.html)（このケースでは
[A-AGIL-6](https://www.ebi.ac.uk/arrayexpress/files/A-AGIL-6/A-AGIL-6.adf.txt)）で定義されている
Reporter Name にマップされています。

SDRF 中の Assay Name カラム:

| Assay Name   |
| ------------ |
| Sample 1:Cy3 |
| Sample 2:Cy3 |
| Sample 3:Cy3 |
| Sample 4:Cy3 |

Non-Affymetrix data matrix:

| **Hybridization REF** | Sample 1:Cy3;Sample 2:Cy3 | Sample 3:Cy3;Sample 4:Cy3 |
| **Reporter REF**      | log2 ratio                | log2 ratio                |
| **A_42_P834147**      | 4.2                     | 2.6                       |
| **A_43_P19480**       | 1.9                     | 1.3                       |
| **A_42_P495989**      | 5.3                     | 9.8                       |

### Affymetrix data matrix の例 <a name="ex-matrix-affy"></a>

この例では６つの内２つのアッセイが二種類の quantitation type (CELIntensity、CELStdev)
にマップされています。各データ行は [array design
file](/gea/adf.html)（この場合は
[A-AFFY-44](https://www.ebi.ac.uk/arrayexpress/files/A-AFFY-44/A-AFFY-44.adf.txt)）で定義されている
CompositeElement Name (Affymetrix probe set は複数 probe で構成されているため)
にマップされています。

Assay Name nodes in SDRF:

| Assay Name      |
| --------------- |
| Sample 1:biotin |
| Sample 2:biotin |

Affymetrix data matrix:

| **Hybridization REF**    | Sample 1:biotin | Sample 1:biotin | Sample 2:biotin | Sample 2:biotin |
| **CompositeElement REF** | CELIntensity    | CELStdev        | CELIntensity    | CELStdev        |
| **AFFX_ThrX-M_at**      | 142.1                | 2.6                  | 199.1                | 6.5                  |
| **20050_at**            | 70.4                 | 1.3                  | 88.3                 | 4.7                  |
| **20051_at**            | 227.3                | 9.8                  | 213.2                | 3.5                  |