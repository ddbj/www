---
layout: indexed_content
title: MAGE-TAB format for raw and processed data matrix
pathname: matrix
category: aboutgea
---

## Data matrix format

このファイルフォーマットは各データポイントが experiment 中の特定 assay、そして array design file 中の特定
probe/probe set にマッピングされるようにするためのものです。
支障なくマッピングされるためには各マトリックスファイルが一つのアレイデザインに由来するアッセイのみを含んでいる必要があり（experiment
で一つ以上のアレイデザインを使っている場合は複数のマトリックスファイルが必要です）、また、カラム/行のヘッダーとカラムの順番が厳密に制御されている必要があります。

Column/row ヘッダー:

マトリックスファイルの一行目のヘッダーは assay name で assay とデータを対応付ける Hybridization REF
である必要があります。二行目のヘッダーには各カラムの "quantitation type" (log2 ratio
といった測定値の種類) をリストします。そして一列目は Reporter REF とし、アレイデザインファイルの
probe ID とデータが対応付けられるようにします。

複数アッセイの測定値を計算した場合:

Log2 fold-change といった計算値は往々にして一つ以上のアッセイの測定値を含んでいます
(例えば全ての遺伝子について3つのノックアウトサンプルに対して3つの野生型コントロールサンプルの平均値を計算した場合)。このケースでは各カラムにセミコロンで区切った複数の
assay name を記載します。

<div class="sdrf_ex">

|                   |                                          |                                          |
| ----------------- | ---------------------------------------- | ---------------------------------------- |
| Hybridization REF | <span class="blue">Hyb1;Hyb2;Hyb3</span> | <span class="blue">Hyb4;Hyb5;Hyb6</span> |
| Reporter REF      | <span class="blue">log2 FC</span>        | <span class="blue">log2 FC</span>        |

</div>

データカラムの順番:

マトリックス形式ではカラムの順序と構成が定められています: 最初は assay 続いて quantitation type の順になります:

Correct

<div class="sdrf_ex">

|                   |                                   |                                  |                                   |                                  |
| ----------------- | --------------------------------- | -------------------------------- | --------------------------------- | -------------------------------- |
| Hybridization REF | <span class="blue">Hyb1</span>    | <span class="blue">Hyb1</span>   | <span class="red">Hyb2</span>     | <span class="red">Hyb2</span>    |
| Reporter REF      | <span class="blue">log2 FC</span> | <span class="red">p-value</span> | <span class="blue">log2 FC</span> | <span class="red">p-value</span> |

</div>

Wrong

<div class="sdrf_ex">

|                   |                                   |                                   |                                  |                                  |
| ----------------- | --------------------------------- | --------------------------------- | -------------------------------- | -------------------------------- |
| Hybridization REF | <span class="blue">Hyb1</span>    | <span class="red">Hyb2</span>     | <span class="blue">Hyb1</span>   | <span class="red">Hyb2</span>    |
| Reporter REF      | <span class="blue">log2 FC</span> | <span class="blue">log2 FC</span> | <span class="red">p-value</span> | <span class="red">p-value</span> |

</div>

<div class="section section">

### Affymetrix 以外の data matrix の例

下記の例では６つの内４つのアッセイが matrix file 中の log2 ratio にマッピングされています。 各データ行は [array
design file](/gea/adf.html)（このケースでは
[A-AGIL-6](https://www.ebi.ac.uk/arrayexpress/files/A-AGIL-6/A-AGIL-6.adf.txt)）で定義されている
Reporter Name にマップされています。

SDRF 中の Assay Name カラム:

<div class="sdrf_ex">

|              |
| ------------ |
| Assay Name   |
| Sample 1:Cy3 |
| Sample 2:Cy3 |
| Sample 3:Cy3 |
| Sample 4:Cy3 |

</div>

Non-Affymetrix data matrix:

<div class="sdrf_ex">

|                   |                                                     |                                                     |
| ----------------- | --------------------------------------------------- | --------------------------------------------------- |
| Hybridization REF | <span class="blue">Sample 1:Cy3;Sample 2:Cy3</span> | <span class="blue">Sample 3:Cy3;Sample 4:Cy3</span> |
| Reporter REF      | <span class="blue">log2 ratio</span>                | <span class="blue">log2 ratio</span>                |
| A\_42\_P834147    | <span>4.2</span>                                    | <span>2.6</span>                                    |
| A\_43\_P19480     | <span>1.9</span>                                    | <span>1.3</span>                                    |
| A\_42\_P495989    | <span>5.3</span>                                    | <span>9.8</span>                                    |

</div>

</div>

### Affymetrix data matrix の例

この例では６つの内２つのアッセイが二種類の quantitation type (CELIntensity、CELStdev)
にマップされています。各データ行は [array design
file](/gea/adf.html)（この場合は
[A-AFFY-44](https://www.ebi.ac.uk/arrayexpress/files/A-AFFY-44/A-AFFY-44.adf.txt)）で定義されている
CompositeElement Name (Affymetrix probe set は複数 probe で構成されているため)
にマップされています。

Assay Name nodes in SDRF:

<div class="sdrf_ex">

|                 |
| --------------- |
| Assay Name      |
| Sample 1:biotin |
| Sample 2:biotin |

</div>

Affymetrix data matrix:

<div class="sdrf_ex">

|                      |                                           |                                           |                                           |                                           |
| -------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| Hybridization REF    | <span class="blue">Sample 1:biotin</span> | <span class="blue">Sample 1:biotin</span> | <span class="blue">Sample 2:biotin</span> | <span class="blue">Sample 2:biotin</span> |
| CompositeElement REF | <span class="blue">CELIntensity</span>    | <span class="blue">CELStdev</span>        | <span class="blue">CELIntensity</span>    | <span class="blue">CELStdev</span>        |
| AFFX\_ThrX-M\_at     | <span>142.1</span>                        | <span>2.6</span>                          | <span>199.1</span>                        | <span>6.5</span>                          |
| 20050\_at            | <span>70.4</span>                         | <span>1.3</span>                          | <span>88.3</span>                         | <span>4.7</span>                          |
| 20051\_at            | <span>227.3</span>                        | <span>9.8</span>                          | <span>213.2</span>                        | <span>3.5</span>                          |

</div>
