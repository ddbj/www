---
layout: simple
title: データファイルの検証処理エラーへの対処方法は？
category: faq
db:
  - dra
tags: 
  - シークエンスデータ
date: 2013-10-07T14:48:54
lang: ja
---

### Make Sra Error {#make_sra_error}

**constraint violated while executing function within virtual database
module**

リード名が Run 単位でユニークではない可能性があります。  
FAQ: [データファイルはどのように処理されますか？](/faq/ja/data-files-sra.html)を参照し、重複しているリード名があれば修正してください。

**path not found while accessing directory within file system module - no
message text available**

アップロードされたファイルが認識されていません。次の場合にエラーになります。
- ファイル名に空白が含まれている。
- ファイルがサブディレクトリ下にある。
- fastq ファイルが tar などでまとめられている。

### CheckSum Error {#check_sum_error}

Run に記載されている [MD5 値](/checksum.html)(Expected MD5)とサーバにアップロードされたファイルの MD5 値(Uploaded MD5)が異なっています。

まずは手元のファイルの MD5 値とメタデータに入力した MD5 値が一致しているかどうかを確認します。
- メタデータに入力した MD5 値が間違っている場合、メタデータを修正します。
- 一致している場合、転送中にファイルが破損した可能性があるので、ファイルを再アップロードします。

### File Name Error {#file_name_error}

**Undefined or File not found: @SQ SN:**

BAM ファイルの登録では BAM ファイルの他に「SN-リファレンス配列の対応表」が必要です。
詳細は「[データファイル](/dra/datafile.html#bam_submit)」をご参照ください。

### Metadata XML upload {#xml}

SPOT_DESCRIPTOR を追加・編集したメタデータ XML 登録時に起こるエラーとしては以下のものがあります。

#### Application read のないリード  {#no_application} 

Read composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCGG  |  CATCAGTTGAT…………………………………………………  |
|  Base Coordinate :  |  1  |  {::nomarkdown}<div class="float-left">7</div><div class="float-right">50</div>{:/} |
|  Read Type :  |  Primer  |  Linker <span class="red">(少なくとも一つの application を持っている必要がある)</span>  |

#### 矛盾する塩基座標を持つリード  {#inconsistent_base} 

Read 1 composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCGG……………  |  CATCAG……………  |
|  Base Coordinate :  |  1  |  <span class="red">1 (1 以上である必要がある)</span>  |
|  Read Type :  |  Forward  |  Reverse  |

Read 2 composition

| Read Index :      | 0       | 1            | 2                                                    |
| Read :            | TCAG    | ATAGAGTTG……… | TCGTATAACTTCGTATAATGTATGCTATACGAAGTT                 |
| Base Coordinate : | 1       | 5            | <span class="red">4 (5 以上である必要がある)</span> |
| Read Type :       | Adapter | Forward      | Reverse                                              |

Read 3 composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCGGGTGTGTCATCAG  |  CATCAG……………  |
|  Base Coordinate :  |  <span class="red">2 (1 から始まる必要がある)</span>  |  19  |
|  Read Type :  |  Adapter  |  Forward  |

#### 位置の特定できない Relative order を持ったリード  {#cannot_specified} 

Read composition

| Read Index :      | 0       | 1          | 2       | 3                                                                   |
| Read :            | TCAG    | ATAGA…………… | ………………… | CTCAT…………………………………………………………                                         |
| Base Coordinate : | 1       | 5          |         |                                                                     |
| Read Type :       | Adapter | Forward    | Linker  | Forward <span class="red">(この forward の位置が特定できない)</span> |

Spot (Read Spec) metadata

| Read Index | Read Class       | Read Type | Ordering Method |
|---|
| 0          | Technical Read   | Adapter   | BaseCoord = 1   |
| 1          | Application Read | Forward   | BaseCoord = 5   |
| 2          | Technical Read   | Linker    | RelativeOrder   |
| 3          | Application Read | Forward   | RelativeOrder   |

