---
layout: tabbed_indexed_content
service_name: MetaboBank
title: データファイル
category: metabobank
current_tab: submission
lang: ja
---

<div class="attention" markdown="1">
ファイル名は英数字 [A-Z,a-z,0-9]、アンダースコア [_]、ハイフン [-] とドット [.] のみから構成され、空白文字、カッコ、句読点やシンボルを含まないようにしてください。
</div>

## Mass spectrometry (MS) {#ms}

### 生データファイル  {#ms-raw}

測定機器から出力された生データファイル。  
mzML 等のオープンスタンダード形式のデータは生データとして扱います。    
SDRF の Raw Data File カラムに各サンプルに対応した生データファイル名を記載します。
サンプル (SDRF の一行) に対応する複数のファイルは tar や zip で一つのファイルにまとめます。

### 解析済みデータファイル  {#ms-processed} 

関連論文における主張の直接的な根拠となる解析済みデータやサマリーデータ。  
SDRF の Processed Data File カラムに各サンプルに対応した解析済みデータファイル名を記載します。
サンプルに対応する複数のファイルは tar や zip で一つのファイルにまとめます。

### Metabolite assignment file {#ms-maf} 
  
同定・推定した化合物に関する情報は所定のファイル形式である Metabolite assignment file (MAF) として登録します。
MAF の各項目の説明はエクセルをご覧ください。  
* MS 用 MAF エクセル ([download](/assets/files/submission/metabobank/MetaboBank_maf_MS.xlsx))

### 画像ファイル {#ms-image} 

MS イメージング実験では画像ファイルも登録します。  
SDRF の Image Data File カラムに各サンプルに対応した画像データファイル名を記載します。
サンプルに対応する複数のファイルは tar や zip で一つのファイルにまとめます。   
できるだけイメージングの設定に関するファイルを含めてください。

## NMR {#nmr}

### 生データファイル  {#nmr-raw}

測定機器から出力された生データファイル。  
nmrML 等のオープンスタンダード形式のデータファイルは生データとして扱います。  
SDRF の Raw Data File カラムに各サンプルに対応した生データファイル名を記載します。
サンプルに対応する複数のファイルは tar や zip で一つのファイルにまとめます。
できるだけ NMR の設定に関するファイルを含めてください。

### 解析済みデータファイル  {#nmr-processed} 

関連論文における主張の直接的な根拠となる解析済みデータやサマリーデータ。  
SDRF の Processed Data File カラムに各サンプルに対応した解析済みデータファイル名を記載します。
サンプルに対応する複数のファイルは tar や zip で一つのファイルにまとめます。

### Metabolite assignment file {#nmr-maf} 
  
同定・推定した化合物に関する情報は所定のファイル形式である Metabolite assignment file (MAF) として登録します。
MAF の各項目の説明はエクセルをご覧ください。  
* NMR 用 MAF エクセル ([download](/assets/files/submission/metabobank/MetaboBank_maf_NMR.xlsx))
