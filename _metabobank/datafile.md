---
layout: tabbed_indexed_content
service_name: MetaboBank
title: データファイル
category: metabobank
current_tab: submission
lang: ja
---

<div class="attention" markdown="1">
* ファイル名は英数字 [A-Z,a-z,0-9]、アンダースコア [_]、ハイフン [-] とドット [.] のみから構成され、空白文字、カッコ、句読点やシンボルを含まないようにしてください。
* Study 単位でユニークなファイル名にしてください。
* Study やサンプル単位で tar や zip でアーカイブしたファイルでの登録は受付けています。
* サブディレクトリを含めることができます。
* 測定機器から出力される生データファイルにはユーザのローカルファイルパスが記録されていることがあります。パスに個人情報が含まれないようにしてください。
</div>

## Mass spectrometry (MS) {#ms}

### 生データファイル  {#ms-raw}

測定機器から出力された生データファイル。  
mzML 等のオープンスタンダード形式のデータは生データとして扱います。    
SDRF の Raw Data File カラムに各サンプルに対応した生データファイル名を記載します。
サンプル (SDRF の一行) に対応する複数のファイルは tar や zip で一つのファイルにまとめます。  
測定機器から出力される生データファイルにはユーザのローカルファイルパスが記録されていることがあります。パスに個人情報が含まれないようにしてください。

### 解析済みデータファイル  {#ms-processed} 

関連論文における主張の直接的な根拠となる解析済みデータやサマリーデータ。  
SDRF の Processed Data File カラムに各サンプルに対応した解析済みデータファイル名を記載します。
サンプルに対応する複数のファイルは tar や zip で一つのファイルにまとめます。

### Metabolite assignment file {#ms-maf} 
  
同定・推定した化合物に関する情報は所定のファイル形式である Metabolite assignment file (MAF) として登録します。
MAF の各項目の説明はエクセルをご覧ください。  
* MS 用 MAF エクセル ([download](https://github.com/ddbj/pub/raw/master/docs/metabobank/maf_excel/MetaboBank_maf_MS.xlsx))

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
* NMR 用 MAF エクセル ([download](https://github.com/ddbj/pub/raw/master/docs/metabobank/maf_excel/MetaboBank_maf_NMR.xlsx))


## Metabolite assignment file {#maf}

Metabolite assignment file (MAF) には、研究で同定または推定された、全ての既知または未知の代謝物、およびfeatureを含めることを推奨しています。データの再利用性を高めるために、できるだけ多くの情報を記入してください。試料ごとの各代謝物の測定値を記載する場合には、表の右側に試料名の列を追加して記載してください。
MAFの記載項目の説明は以下のとおりです。

|Column|Description|Example|Technology type|
|---|
|database_identifier|代謝物データベースでのID。ChEBIのIDを推奨。|CHEBI:16919|MS、NMR|
|chemical_formula|代謝物の組成式|C4H9N3O2|MS、NMR|
|smiles|代謝物のSMILES|CN(CC(O)=O)C(N)=N|MS、NMR|
|inchi|代謝物のINCHI key|InChI=1S/C4H9N3O2/c1-7(4(5)6)2-3(8)9/h2H2,1H3,(H3,5,6)(H,8,9)|MS、NMR|
|metabolite_identification|同定または推定された代謝物名|creatine|MS、NMR|
|metabolite_class|代謝物分類名|flavonoids|MS、NMR|
|mass_to_charge|質量電荷比 (m/z)|132.0765|MS、NMR|
|fragmentation|フラグメントイオン|132,0870 l 90,0617 l 87,0618|MS|
|modifications|分子イオンまたは付加イオン|[M+H]+|MS|
|charge|電荷|1|MS|
|retention_time|溶出時間|0.85|MS|
|chemical_shift|ピークの化学シフト||NMR|
|multiplicity|ピークの多重度||NMR|
|taxid|代謝物が検出された生物のNCBI taxonomy ID. https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi|9606|MS、NMR|
|species|NCBI taxonomyでの生物名（学名）|Homo sapiens|MS、NMR|
|database|代謝物の同定に用いたデータベース名|CHEBI|MS、NMR|
|database_version|代謝物の同定に用いたデータベースのversion||MS、NMR|
|reliability|代謝物予測結果の信頼性を、MSIレベルを用いて記載する。https://github.com/MSI-Metabolomics-Standards-Initiative/CIMRを参照。|MSI:1|MS、NMR|
|search_engine|代謝物同定または推定に用いたプログラム名||MS、NMR|
|search_engine_score|代謝物同定または推定に用いたプログラムでのスコア||MS、NMR|
|peak_identifier|ピークのID||MS、NMR|

