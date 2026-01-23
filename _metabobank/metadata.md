---
layout: tabbed_indexed_content
service_name: MetaboBank
title: メタデータ
category: metabobank
current_tab: submission
lang: ja
---

## MAGE-TAB  {#mage-tab}

MicroArray Gene Expression Tabular ([MAGE-TAB](/assets/files/magetab/MAGE-TABv1.1.pdf)) は機能ゲノミクスデータを構造化・標準化された方法で記述するために開発された形式で、ArrayExpress と [GEA](/gea/metadata.html) で使用されています。
MAGE-TAB は[プロテオミクス分野](https://github.com/bigbio/proteomics-metadata-standard)でも使われ始めており、オミックス分野における国際標準になりつつあります。  
MAGE-TAB は研究全体を記述する IDF、および、サンプルとデータファイルの関係性を記述する SDRF から構成されています。
IDF と SDRF はプロトコールで、メタデータとデータファイルは SDRF を介してリンクします。

{% include image.html url="magetab/mb-mage-tab.jpg" caption="IDF，SDRF, 生・解析済みデータファイル・MAF の関係" class="w500" %}

## メタデータエクセル  {#metadata-excel}

実験種別に対応したメタデータエクセルをダウンロードし、内容を記入します。異なる種別のデータは Study を分けて登録します。

* Mass spectrometry, chromatography
    * Liquid chromatography-mass spectrometry (LC-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_LC-MS_metadata.xlsx))
    * Liquid chromatography, diode array detector-mass spectrometry (LC-DAD-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_LC-DAD-MS_metadata.xlsx))
    * Gas chromatography-mass spectrometry (GC-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_GC-MS_metadata.xlsx))
    * Two dimensional gas chromatography-mass spectrometry (GCGC-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_GCGC-MS_metadata.xlsx))
    * Gas chromatography, flame ionization detector-mass spectrometry (GC-FID-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_GC-FID-MS_metadata.xlsx))
    * Capillary electrophoresis-mass spectrometry (CE-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_CE-MS_metadata.xlsx))
* Mass spectrometry, direct injection
    * Direct infusion-mass spectrometry (DI-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_DI-MS_metadata.xlsx))
    * Flow injection analysis-mass spectrometry (FIA-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_FIA-MS_metadata.xlsx))
    * Matrix-assisted laser desorption-ionisation mass spectrometry (MALDI-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_MALDI-MS_metadata.xlsx))
* Mass spectrometry imaging (MSI, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_MSI_metadata.xlsx))
* Nuclear magnetic resonance spectroscopy (NMR, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_NMR_metadata.xlsx))

## IDF  {#idf}

IDF (Investigation Description Format) は研究概要、実験デザイン、プロトコール、文献情報や登録者情報といった研究全体を記述するファイルです。  

[IDF の例](https://docs.google.com/spreadsheets/d/1PziXaK3Cic1xQXdcCgBZ1g-4LIKvZRZt71nYCH5e22k/edit#gid=30173120)  

## IDF 項目 {#idf_fields}

[MAGE-TAB Version](#MAGE-TAB_Version)<a name="MAGE-TAB_Version"></a>
: MAGE-TAB バージョン。1.1 で固定。MetaboBank で記入。

[Comment\[MetaboBank accession\]](#MetaboBank_accession)<a name="MetaboBank_accession"></a>
: Metabobank アクセッション番号 (例 MTBKS1)。MetaboBank で記入。

[Study Title](#Study_Title)<a name="Study_Title"></a>
: 研究全体のタイトル。

[Study Description](#Study_Description)<a name="Study_Description"></a>
: フリーテキストで記載した study の概要説明。この研究で実施した内容が分かるように記載します。この項目では ASCII、ギリシャ文字とシンボル \[° μ ± ≠ &#8786; &#060; &#062; ← ↑ ↓ → ↔ Å\] を使った表現が許容されています。

[Experimental Design](#Experimental_Design)<a name="Experimental_Design"></a>
: 該当する実験デザインを記入。デザインは [controlled terms](https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY) から選択します。

[Experimental Factor Name](#Experimental_Factor_Name)<a name="Experimental_Factor_Name"></a>
: 実験で解析した experimental factor。Experimental factor は研究で調べている「変数 (パラメータ)」のことです。
実際の変数の値は SDRF の "Factor value\[\<factor name\>\]" カラムに記載します。例えば、異なる温度 (熱ストレス) が培養細胞に与える影響を解析している研究では "temperature" が変数となり、その数値は SDRF の Factor Value\[temperature\] に単位を示す "Unit" カラムと共に記載します。

[Experimental Factor Type](#Experimental_Factor_Type)<a name="Experimental_Factor_Type"></a>
: experimental factor のタイプ。MetaboBank で記入。

[Person Last Name](#Person_Last_Name)<a name="Person_Last_Name"></a>
: 登録者の last name。登録者の last name を各カラムに記入します。
登録者は登録内容を編集する権利を持ちます。MetaboBank は登録内容に関する問い合わせを登録者に送ります。また、データ公開後のユーザからの問い合わせも登録者に送られます。
貢献者は [Comment\[Contributor\]](#Contributor) に記載することができます。

[Person First Name](#Person_First_Name)<a name="Person_First_Name"></a>
: 登録者の first name。登録者の first name を各カラムに記入します。

[Person Mid Initials](#Person_Mid_Initials)<a name="Person_Mid_Initials"></a>
: 登録者の middle name。登録者の middle name を各カラムに記入します。

[Person Email](#Person_Email)<a name="Person_Email"></a>
: 登録者のメールアドレス。登録者のメールアドレスを各カラムに記入します。メールアドレスは公開されません。

[Person Affiliation](#Person_Affiliation)<a name="Person_Affiliation"></a>
: 登録者の所属組織。登録者の所属組織を各カラムに記入します。

[Person Roles](#Person_Roles)<a name="Person_Roles"></a>
: 登録者の役割。MetaboBank では "submitter" role に限定しています。MetaboBank で記入。

[PubMed ID](#PubMed_ID)<a name="PubMed_ID"></a>
: この登録に関係する文献の PubMed ID がある場合、その ID (複数可) を記入します。

[Publication DOI](#Publication_DOI)<a name="Publication_DOI"></a>
: この登録に関係する文献の Digital Object Identifier (DOI) がある場合、その DOI (複数可) を記入します。
PubMed ID と DOI の両方がある場合、PubMed ID を記入します。

[Public Release Date](#Public_Release_Date)<a name="Public_Release_Date"></a>
: 初回公開日。MetaboBank で記入。

[Term Source Name](#Term_Source_Name)<a name="Term_Source_Name"></a>
: IDF と SDRF で使っている用語のソース (オントロジーやデータベース)。"Term Sources" は IDF で定義し、IDF と SDRF 全体で参照します。
ソースは対応する全ての "Term Source REF" 項目で参照されます。

[Term Source File](#Term_Source_File)<a name="Term_Source_File"></a>
: Term Source を示すファイル名や URL。

[Term Source Version](#Term_Source_Version)<a name="Term_Source_Version"></a>
: IDF と SDRF で使われている Term Source のバージョン。

[SDRF File](#SDRF_File)<a name="SDRF_File"></a>
: IDF ファイルに付随する SDRF ファイル名。MetaboBank で記入。

[Comment\[Study type\]](#Study_type)<a name="Study_type"></a>
: 該当する study type (例 targeted metabolite profiling、lipid profiling)。Study type は [controlled terms](https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY) から選びます。

[Comment\[Experiment type\]](#Experiment_type)<a name="Experiment_type"></a>
: 該当する experiment type (例 liquid chromatography-mass spectrometry、capillary electrophoresis-mass spectrometry)。
Experiment type は [controlled terms](https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY) から選びます。一つ以上の type を記入できます。Submission type に対応する規定値を MetaboBank で追加します。

[Comment\[Submission type\]](#Submission_type)<a name="Submission_type"></a>
: 登録種別 (例 LC-MS、GC-MS)。[controlled terms](https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY) を使います。MetaboBank で記入します。

[Comment\[BioProject\]](#BioProject)<a name="BioProject"></a>
: 関連する BioProject アクセッション番号 (例 PRJDB1)。

[Comment\[Related study\]](#Related_study)<a name="Related_study"></a>
: 関連する MetaboBank (MB) もしくは他のデータベースのアクセッション番号。"DB:ID" 形式でタブで区切られたフィールドに番号を記入します。
例 MB:MTBKS202\<tab\>MB:MTBKS203\<tab\>Metabolonote:SE112

[Comment\[Contributor\]](#Contributor)<a name="Contributor"></a>
: 貢献者の名前。テクニカルスタッフなどの貢献者は登録者であるかどうかに関わらず [Comment\[Contributor\]](#Contributor) に記載できます。
貢献者は登録者ではない場合、登録者としての権利を持ちません。
例 Mishima Naoko, Fuji San, Shizuoka Ken

[Comment\[Submission Date\]](#Submission_Date)<a name="Submission_Date"></a>
: 登録日。MetaboBank で記入。

[Comment\[Last Update Date\]](#Last_Update_Date)<a name="Last_Update_Date"></a>
: 最終更新日。MetaboBank で記入。

## IDF Protocols {#IDF_Protocols}

プロトコールは再現性を確保するために重要であり、研究で実施した手順の詳細を提供する必要があります。

[Protocol Name](#Protocol_Name)<a name="Protocol_Name"></a>
: 使用したプロトコールの名前。プロトコールの種別毎に一つのプロトコールしかない場合、type をそのまま name に使います。種別毎に複数のプロトコールがある場合は name に 1、2、... を付けて区別します (例 Data transformation 1、Data transformation 2)。

[Protocol Type](#Protocol_Type)<a name="Protocol_Type"></a>
: プロトコールの種別。Submission type 毎に必要なプロトコール種別は異なります。

|Protocol type|Description|Submission type|
|---|
|[Sample collection](#Sample_collection_protocol)|サンプルの由来、加えた処理、日時、採取と保存方法を記載。|All types|
|[Extraction](#Extraction_protocol)|サンプルの抽出や調整方法。測定のコントロール群サンプル、プールしたサンプル、standard、quality control  や solvent blank、も含めます。|MSI 以外|
|[Chromatography](#Chromatography_protocol)|製造元、移動相、濃度勾配、設定や温度、フローレートや注入量などの機器とカラムの詳細。|LC-MS,LC-DAD-MS,GC-MS,GCGC-MS,GC-FID-MS|
|[Mass spectrometry](#Mass_spectrometry_protocol)|製造元、イオン源、イオンモード (positive/negative)、m/z レンジ、温度、電圧、フローレート、スキャンレートなどの機器の詳細。|NMR 以外|
|[Data processing](#Data_processing_protocol)|生データの解析方法やソフトウェア。|All types|
|[Metabolite identification](#Metabolite_identification_protocol)|代謝物の同定やアノテーションに使用した手法、参照データベースやソフトウェアの詳細。|All types|
|[Capillary Electrophoresis](#Capillary_Electrophoresis_protocol)|製造元、移動相、濃度勾配や設定などの機器とカラムの詳細。|CE-MS|
|[Direct infusion](#Direct_infusion_protocol)|direct infusion の手法の詳細。|DI-MS|
|[Flow injection analysis](#Flow_injection_analysis_protocol)|flow injection analysis 手法の詳細。|FIA-MS|
|[Preparation](#Preparation_protocol)|サンプルマウント、保存、tissue modification、sectioning やマトリックスなどのサンプル調整の詳細。|MSI|
|[Histology](#Histology_protocol)|染色などの組織学的な詳細。|MSI|
|[NMR sample](#NMR_sample_protocol)|チューブタイプ、溶媒、サンプル pH や温度などの NMR サンプルの詳細。|NMR|
|[NMR spectroscopy](#NMR_spectroscopy_protocol)|プローブや磁場強度などの NMR 機器の詳細。|NMR|
|[NMR assay](#NMR_assay_protocol)|NMR 測定に関する詳細。|NMR|

[Protocol Description](#Protocol_Description)<a name="Protocol_Description"></a>
: プロトコールのフリーテキストでの記載。テキストはタブで区切られた一つのフィールドに記載します。この項目では ASCII、ギリシャ文字とシンボル \[° μ ± ≠ &#8786; &#060; &#062; ← ↑ ↓ → ↔ Å\] を使った表現が許容されています。

[Protocol Parameters](#Protocol_Parameters)<a name="Protocol_Parameters"></a>
: セミコロンで区切ったプロトコールパラメータ名のリスト。Submission type 毎に必要となるパラメータは異なります。
詳細は [SDRF Protocol Parameters](#SDRF_Protocol_Parameters) を参照。

[Protocol Hardware](#Protocol_Hardware)<a name="Protocol_Hardware"></a>
: プロトコールでサンプル捕捉に使用した機器。複数の機器を使った場合はセミコロン (;) で区切って列挙します。この項目では ASCII、ギリシャ文字とシンボル \[° μ ± ≠ &#8786; &#060; &#062; ← ↑ ↓ → ↔ Å\] を使った表現が許容されています。

[Protocol Software](#Protocol_Software)<a name="Protocol_Software"></a>
: プロトコールで使用したソフトウェア。

## SDRF  {#sdrf}

SDRF (Sample and Data Relationship Format) はサンプル属性およびサンプル、測定機器、データファイル間の関係性を記述するファイルです。
SDRF はオミックス実験の自然な流れを再現した表であり、
大元のサンプルから始まり、間にプロトコールを挟みながら最後はサンプルから得られたデータファイルで終わります。

{% include image.html url="magetab/mb-sdrf.jpg" caption="SDRF の構造" class="w550" %}

[SDRF の例](https://docs.google.com/spreadsheets/d/1PziXaK3Cic1xQXdcCgBZ1g-4LIKvZRZt71nYCH5e22k/edit#gid=513795053)  

## SDRF カラム {#SDRF_columns}

[Source Name](#Source_Name)<a name="Source_Name"></a>
: サンプルソースのユニークな ID。基本的に BioSample の sample name を使います。

[Characteristics](#Characteristics)<a name="Characteristics"></a>
: サンプル属性。サンプル記述に用いた BioSample 属性 (例 organism や strain) を使います。sample_title、description と BioSample アクセッション番号は Source Name の Comment カラムに記載します。サンプルの特徴に関する属性以外の bioproject_id や locus_tag_prefix といったデータ管理用の属性は SDRF から除外されます。

[Protocol REF](#Protocol_REF)<a name="Protocol_REF"></a>
: IDF で定義したプロトコールを protocol name で参照するカラム。このカラムが参照プロトコールに関する情報を記載するセクションの始まりになります。Protocol name はこのカラムの全ての行に記載されている必要があります。

[Sample Name](#Sample_Name)<a name="Sample_Name"></a>
: サンプルのユニークな ID。基本的に BioSample の sample name を使います。

[Extract Name](#Extract_Name)<a name="Extract_Name"></a>
: 抽出したマテリアルのユニークな ID。

[Labeled Extract Name](#Labeled_Extract_Name)<a name="Labeled_Extract_Name"></a>
: 同位体で標識した抽出物の ID。標識していないサンプルでは任意。値が無い場合は空欄にします。[FAQ: サンプルを安定同位体で標識した場合の記載方法は？](/faq/ja/isotope-labeling.html)を参照。

[Label](#Label)<a name="Label"></a>
: 測定機器で検出できるように安定同位体などで試料を標識した場合、標識化合物を記入します。値が無い場合は空欄にします。[FAQ: サンプルを安定同位体で標識した場合の記載方法は？](/faq/ja/isotope-labeling.html)を参照。

[Assay Name](#Assay_Name)<a name="Assay_Name"></a>
: アッセイに対するユニークな ID。テクニカルレプリケートは同じ sample name、technical replicate Comment を持った異なる assay name の行として表現されます。

[Comment\[technical_replicate\]](#technical_replicate)<a name="technical_replicate"></a>
: 1、2、3 などのテクニカルレプリケートを区別する値を記載。

[Raw Data File](#Raw_Data_File)<a name="Raw_Data_File"></a>
: 生データファイルを記載するカラム。データがオープンソース形式のファイル (例 mzML や nmrML) に変換されている場合、それらのファイルもこのカラムに記載します。  
ファイルの指定方法は何通りかあります。  

各サンプルの各々のファイル名を一つのカラムに記入。　　

|Raw Data File|Comment\[Raw Data File md5\]|
|---|
|sample1.RAW.gz|...|
|sample2.RAW.gz|...|

各サンプルの各々の tar/zip アーカイブしたファイル名を一つのカラムに記入。　　

|Raw Data File|Comment\[Raw Data File md5\]|
|---|
|sample1.RAW.tar.gz|...|
|sample1.RAW.tar.gz|...|

各サンプルのファイルを含むサブディレクトリ名を一つのカラムに記入。　　

|Raw Data File|Comment\[Raw Data File md5\]|
|---|
|sample1/|...|
|sample2/|...|

各サンプルに対応する二つのファイル名を二つのカラムにそれぞれ記入。

|Raw Data File|Comment\[Raw Data File md5\]|Raw Data File|Comment\[Raw Data File md5\]|
|---|
|sample1.RAW.gz|...|sample1.mzML|...|
|sample2.RAW.gz|...|sample2.mzML|...|

[Comment\[Raw Data File md5\]](#Raw_Data_File_md5)<a name="Raw_Data_File_md5"></a>
: 生データファイルの [MD5 ハッシュ値](/checksum.html) を記入。

[Processed Data File](#Processed_Data_File)<a name="Processed_Data_File"></a>
: 解析済みデータファイルを記載。解析済みデータファイルは生データを処理したファイルからサマリーテーブルまで広い意味を持っています。    
ファイルの指定方法は何通りかあります。 

各サンプルの各々のファイル名を一つのカラムに記入。　　

|Processed Data File|Comment\[Processed Data File md5\]|
|---|
|sample1.tsv|...|
|sample2.tsv|...|

各サンプルの各々の tar/zip アーカイブしたファイル名を一つのカラムに記入。　　

|Processed Data File|Comment\[Processed Data File md5\]|
|---|
|sample1.tsv.tar.gz|...|
|sample1.tsv.tar.gz|...|

各サンプルのファイルを含むサブディレクトリ名を一つのカラムに記入。　　

|Processed Data File|Comment\[Processed Data File md5\]|
|---|
|sample1/|...|
|sample2/|...|

各サンプルに対応する二つのファイル名を二つのカラムにそれぞれ記入。

|Processed Data File|Comment\[Processed Data File md5\]|Processed Data File|Comment\[Processed Data File md5\]|
|---|
|sample1.tsv|...|sample1.xlsx|...|
|sample2.tsv|...|sample2.xlsx|...|

[Comment\[Processed Data File md5\]](#Processed_Data_File_md5)<a name="Processed_Data_File_md5"></a>
: 解析済みデータファイルの [MD5 ハッシュ値](/checksum.html)を記入。

[Metabolite Assignment File](#Metabolite_Assignment_File)<a name="Metabolite_Assignment_File"></a>
: この研究で解析した代謝物に関する情報を記載した TSV ファイル。データベースのアクセッション番号、代謝物のスペクトル、サンプル中の濃度などはこのファイル形式で登録します。
詳細は [Metabolite assignment file](/metabobank/datafile.html#ms-maf) を参照。

[Comment\[Metabolite Assignment File md5\]](#Metabolite_Assignment_File_md5)<a name="Metabolite_Assignment_File_md5"></a>
: metabolite assignment file の [MD5 ハッシュ値](/checksum.html) を記入。

[Comment\[maf_value_unit\]](#maf_value_unit)<a name="maf_value_unit"></a>
: metabolite assignment file 中の値の単位 (例 peak area や pico mole)。

[Factor Value\[\]](#Factor_Value)<a name="Factor_Value"></a>
: 研究で調べている「変数 (パラメータ)」例えば、異なる温度 (熱ストレス) が培養細胞に与える影響を解析している研究では "temperature" が変数となり、その数値は単位を示す "Unit" カラムと共に記載します。

|Factor Value\[temperature\]|Unit\[temperature\]|
|---|
|37|degree_C|
|40|degree_C|

[Unit\[\<unit category\>\]](#Unit)<a name="Unit"></a>
: 前にあるカラムに記載された値の「単位」を示すカラムで、[Characteristics](#Characteristics)、[Factor Value](#Factor_Value) や [Parameter Value](#SDRF_Protocol_Parameters) に続けて使用します。カラム名に単位の種類を含めます。例 Unit[temperature]

[Image Data File](#Image_Data_File)<a name="Image_Data_File"></a>
: イメージング実験で得られたデータファイル。オープンソース形式の [imzML](https://ms-imaging.org/imzml/) と ibd ファイルの登録を推奨します。組織切片の画像ファイル (png、jpg) も登録します。

[Comment\[Image Data File md5\]](#Comment_Image_Data_File_md5)<a name="Comment_Image_Data_File_md5"></a>
: image data file の [MD5 ハッシュ値](/checksum.html) を記入。

[Acquisition Parameter Data File](#Acquisition_Parameter_Data_File)<a name="Acquisition_Parameter_Data_File"></a>
: acquisition parameter data を含むファイル。Bruker では生データファイルの中で 'acqus.txt' と呼ばれているファイルが該当します。例 acqus1.txt

[Comment\[Acquisition Parameter Data File md5\]](#Acquisition_Parameter_Data_File_md5)<a name="Acquisition_Parameter_Data_File_md5"></a>
: acquisition parameter data file の [MD5 ハッシュ値](/checksum.html) を記入。

[Free Induction Decay Data File](#Free_Induction_Decay_Data_File)<a name="Free_Induction_Decay_Data_File"></a>
: free induction decay data file を記載。

[Comment\[Free Induction Decay Data File md5\]](#Free_Induction_Decay_Data_File_md5)<a name="Free_Induction_Decay_Data_File_md5"></a>
: free induction decay data file の [MD5 ハッシュ値](/checksum.html) を記入。

## SDRF Protocol Parameters {#SDRF_Protocol_Parameters}

IDF で記載されたプロトコールを補完するプロトコールパラメータ。
必須・推奨パラメータは Submission と Protocol type によって異なります。

|Protocol parameter|Submission type|Protocol type|
|---|
|[Post extraction](#Post_extraction)|Other than MSI,NMR|Extraction|
|[Derivatization](#Derivatization)|Other than MSI,NMR|Extraction|
|[Chromatography instrument](#Chromatography_instrument)|LC-MS,LC-DAD-MS,GC-MS,GCGC-MS,GC-FID-MS|Chromatography|
|[Autosampler model](#Autosampler_model_Ch)|LC-MS,LC-DAD-MS,GC-MS,GCGC-MS,GC-FID-MS|Chromatography|
|[Column model](#Column_model_Ch)|LC-MS,LC-DAD-MS,GC-MS,GC-FID-MS|Chromatography|
|[Column type](#Column_type_Ch)|LC-MS,LC-DAD-MS,GC-MS,GC-FID-MS|Chromatography|
|[Guard column](#Guard_column_Ch)|LC-MS,LC-DAD-MS,GC-MS,GCGC-MS,GC-FID-MS|Chromatography|
|[Column model 1](#Column_model_1)|GCGC-MS|Chromatography|
|[Column type 1](#Column_type_1)|GCGC-MS|Chromatography|
|[Column model 2](#Column_model_2)|GCGC-MS|Chromatography|
|[Column type 2](#Column_type_2)|GCGC-MS|Chromatography|
|[Detector](#Detector_Ch)|LC-DAD-MS,GC-FID-MS|Chromatography|
|[Signal range](#Signal_range)|LC-DAD-MS|Chromatography|
|[Resolution](#Resolution)|LC-MS,LC-DAD-MS,GC-MS,GC-FID-MS|Chromatography|
|[Temperature](#Temperature_Ch)|LC-MS,LC-DAD-MS,GC-MS,GC-FID-MS|Chromatography|
|[Scan polarity](#Scan_polarity)|All MS types|Mass spectrometry|
|[Scan m/z range](#Scan_mz_range)|All MS types|Mass spectrometry|
|[Instrument](#Instrument_MS)|All MS types|Mass spectrometry|
|[Ion source](#Ion_source)|All MS types|Mass spectrometry|
|[Mass analyzer](#Mass_analyzer)|All MS types|Mass spectrometry|
|[CE instrument](#CE_instrument)|CE-MS|Capillary Electrophoresis|
|[Autosampler model](#Autosampler_model_CE)|CE-MS|Capillary Electrophoresis|
|[Column model](#Column_model_CE)|CE-MS|Capillary Electrophoresis|
|[Column type](#Column_type_CE)|CE-MS|Capillary Electrophoresis|
|[DI instrument](#DI_instrument)|DI-MS|Direct infusion|
|[FIA instrument](#FIA_instrument)|FIA-MS|Flow injection analysis|
|[Instrument manufacturer](#Instrument_manufacturer)|MSI|Mass spectrometry|
|[Solvent](#Solvent_MSI)|MSI|Mass spectrometry|
|[Target material](#Target_material)|MSI|Mass spectrometry|
|[Spatial resolution](#Spatial_resolution)|MSI|Mass spectrometry|
|[Pixel size x](#Pixel_size_x)|MSI|Mass spectrometry|
|[Pixel size y](#Pixel_size_y)|MSI|Mass spectrometry|
|[Max count of pixel x](#Max_count_of_pixel_x)|MSI|Mass spectrometry|
|[Max count of pixel y](#Max_count_of_pixel_y)|MSI|Mass spectrometry|
|[Max dimension x](#Max_dimension_x)|MSI|Mass spectrometry|
|[Max dimension y](#Max_dimension_y)|MSI|Mass spectrometry|
|[Inlet type](#Inlet_type)|MSI|Mass spectrometry|
|[Detector](#Detector_MSI)|MSI|Mass spectrometry|
|[Detector mode](#Detector_mode)|MSI|Mass spectrometry|
|[Resolving power](#Resolving_power)|MSI|Mass spectrometry|
|[Resolving power m/z](#Resolving_power_mz)|MSI|Mass spectrometry|
|[Native spectrum identifier format](#Native_spectrum_identifier_format)|MSI|Mass spectrometry|
|[Data file content](#Data_file_content)|MSI|Mass spectrometry|
|[Spectrum representation](#Spectrum_representation)|MSI|Mass spectrometry|
|[Raw data file format](#Raw_data_file_format)|MSI|Mass spectrometry|
|[Instrument software](#Instrument_software)|MSI|Mass spectrometry|
|[Instrument software version](#Instrument_software_version)|MSI|Mass spectrometry|
|[Line scan direction](#Line_scan_direction)|MSI|Mass spectrometry|
|[Line scan sequence](#Line_scan_sequence)|MSI|Mass spectrometry|
|[Scan pattern](#Scan_pattern)|MSI|Mass spectrometry|
|[Scan type](#Scan_type)|MSI|Mass spectrometry|
|[Number of scans](#Number_of_scans)|MSI|Mass spectrometry|
|[Sample mounting](#Sample_mounting)|MSI|Preparation|
|[Sample preservation](#Sample_preservation)|MSI|Preparation|
|[Tissue modification](#Tissue_modification)|MSI|Preparation|
|[Sectioning instrument](#Sectioning_instrument)|MSI|Preparation|
|[Section thickness](#Section_thickness)|MSI|Preparation|
|[Matrix](#Matrix)|MSI|Preparation|
|[Matrix application](#Matrix_application)|MSI|Preparation|
|[Stain](#Stain)|MSI|Histology|
|[Data processing software](#Data_processing_software)|MSI|Data processing|
|[Data processing software version](#Data_processing_software_version)|MSI|Data processing|
|[Extraction method](#Extraction_method)|NMR|Extraction|
|[NMR tube type](#NMR_tube_type)|NMR|NMR sample|
|[Solvent](#Solvent_NMR)|NMR|NMR sample|
|[Sample pH](#Sample_pH)|NMR|NMR sample|
|[Temperature](#Temperature_NMR)|NMR|NMR sample|
|[Instrument](#Instrument_NMR)|NMR|NMR spectroscopy|
|[NMR probe](#NMR_probe)|NMR|NMR spectroscopy|
|[Number of transients](#Number_of_transients)|NMR|NMR spectroscopy|
|[Pulse sequence name](#Pulse_sequence_name)|NMR|NMR spectroscopy|
|[Magnetic field strength](#Magnetic_field_strength)|NMR|NMR spectroscopy|

[Parameter Value\[Post extraction\]](#Post_extraction)<a name="Post_extraction"></a>
: サンプルが測定機器に注入される前にどのように溶媒に抽出されたかを記載します。例 400 µL water

[Parameter Value\[Derivatization\]](#Derivatization)<a name="Derivatization"></a>
: サンプルが注入前に化学修飾が施されている場合、その修飾について記載します。例 sylilation.

[Parameter Value\[Chromatography instrument\]](#Chromatography_instrument)<a name="Chromatography_instrument"></a>
: 実験のクロマトグラフィー部分で使用した機器の名前、製造元、説明書に記載されているモデル番号、ユーザマニュアルやウェブサイト。例 Shimadzu Nexera UHPLC system

[Parameter Value\[Autosampler model\]](#Autosampler_model_Ch)<a name="Autosampler_model_Ch"></a>
: オートサンプラーの製造元とモデル番号。

[Parameter Value\[Column model\]](#Column_model_Ch)<a name="Column_model_Ch"></a>
: 使用したカラムの製造元、モデル番号や寸法。例 HSS T3 C18 (1.8 μm, 1.0 x 100 mm; Waters)

[Parameter Value\[Column type\]](#Column_type_Ch)<a name="Column_type_Ch"></a>
: 使用したカラムの種類やフェーズ。例 reverse phase

[Parameter Value\[Guard column\]](#Guard_column_Ch)<a name="Guard_column_Ch"></a>
: 使用したガードカラムの種類。

[Parameter Value\[Column model 1\]](#Column_model_1)<a name="Column_model_1"></a>
: 一次元目の GCGC カラムのモデル。

[Parameter Value\[Column type 1\]](#Column_type_1)<a name="Column_type_1"></a>
: 一次元目の GCGC カラムの種類。

[Parameter Value\[Column model 2\]](#Column_model_2)<a name="Column_model_2"></a>
: 二次元目の GCGC カラムのモデル。

[Parameter Value\[Column type 2\]](#Column_type_2)<a name="Column_type_2"></a>
: 二次元目の GCGC カラムの種類。

[Parameter Value\[Detector\]](#Detector_Ch)<a name="Detector_Ch"></a>
: 検出器の種類、名前、製造元。

[Parameter Value\[Signal range\]](#Signal_range)<a name="Signal_range"></a>
: 検出器の検出波長の範囲。例 200 to 650 nm

[Parameter Value\[Resolution\]](#Resolution)<a name="Resolution"></a>
: 検出器の分解能。例 2 nm

[Parameter Value\[Temperature\]](#Temperature_Ch)<a name="Temperature_Ch"></a>
: カラムの温度。

[Parameter Value\[Scan polarity\]](#Scan_polarity)<a name="Scan_polarity"></a>
: acquisition mode を極性、negative、positive もしくは alternating で示す。

[Parameter Value\[Scan m/z range\]](#Scan_mz_range)<a name="Scan_mz_range"></a>
: 実験の m/z レンジ。例 100-1000

[Parameter Value\[Instrument\]](#Instrument_MS)<a name="Instrument_MS"></a>
: LC-MS 実験で使用した分光器/検出器の製造元、モデル番号、説明書やウェブサイト。例 Bruker micrOTOF-Q II

[Parameter Value\[Ion source\]](#Ion_source)<a name="Ion_source"></a>
: 機器のイオン源。例 ESI

[Parameter Value\[Mass analyzer\]](#Mass_analyzer)<a name="Mass_analyzer"></a>
: 実験で生成されたマスフラグメントの 解析器/検出器。例 Triple quadrupole

[Parameter Value\[CE instrument\]](#CE_instrument)<a name="CE_instrument"></a>
: キャピラリ電気泳動機器の名前、製造元やモデル。

[Parameter Value\[Autosampler model\]](#Autosampler_model_CE)<a name="Autosampler_model_CE"></a>
: キャピラリ電気泳動に使用したオートサンプラーの製造元とモデル。

[Parameter Value\[Column model\]](#Column_model_CE)<a name="Column_model"></a>
: 使用したキャピラリカラムの製造元とモデル番号。

[Parameter Value\[Column type\]](#Column_type_CE)<a name="Column_type"></a>
: 使用したキャピラリカラムの種類。

[Parameter Value\[DI instrument\]](#DI_instrument)<a name="DI_instrument"></a>
: direct infusion 機器の名前。

[Parameter Value\[FIA instrument\]](#FIA_instrument)<a name="FIA_instrument"></a>
: flow injection analysis 機器の名前。

[Parameter Value\[Instrument manufacturer\]](#Instrument_manufacturer_MSI)<a name="Instrument_manufacturer_MSI"></a>
: マススペクトロメトリーイメージング機器の製造元。

[Parameter Value\[Solvent\]](#Solvent_MSI)<a name="Solvent_MSI"></a>
: スプレー溶媒の名前。

[Parameter Value\[Target material\]](#Target_material)<a name="Target_material"></a>
: 標的材料。

[Parameter Value\[Spatial resolution\]](#Spatial_resolution)<a name="Spatial_resolution"></a>
: 空間分解能。例 10 micrometer

[Parameter Value\[Pixel size x\]](#Pixel_size_x)<a name="Pixel_size_x"></a>
: X軸のピクセルサイズ。

[Parameter Value\[Pixel size y\]](#Pixel_size_y)<a name="Pixel_size_y"></a>
: Y軸のピクセルサイズ。

[Parameter Value\[Max count of pixel x\]](#Max_count_of_pixel_x)<a name="Max_count_of_pixel_x"></a>
: X軸ピクセルの最大カウント。

[Parameter Value\[Max count of pixel y\]](#Max_count_of_pixel_y)<a name="Max_count_of_pixel_y"></a>
: Y軸ピクセルの最大カウント。

[Parameter Value\[Max dimension x\]](#Max_dimension_x)<a name="Max_dimension_x"></a>
: 取得イメージのX軸の最大長。

[Parameter Value\[Max dimension y\]](#Max_dimension_y)<a name="Max_dimension_y"></a>
: 取得イメージのY軸の最大長。

[Parameter Value\[Inlet type\]](#Inlet_type)<a name="Inlet_type"></a>
: MSインレットの種類。

[Parameter Value\[Detector\]](#Detector_MSI)<a name="Detector_MSI"></a>
: 検出器の種類、名前、製造元。

[Parameter Value\[Detector mode\]](#Detector_mode)<a name="Detector_mode"></a>
: 検出器のモード。

[Parameter Value\[Resolving power\]](#Resolving_power)<a name="Resolving_power"></a>
: 検出器の解像度。

[Parameter Value\[Resolving power m/z\]](#Resolving_power_mz)<a name="Resolving_power_m/z"></a>
: m/zの解像度。

[Parameter Value\[Native spectrum identifier format\]](#Native_spectrum_identifier_format)<a name="Native_spectrum_identifier_format"></a>
: ネイティブスペクトル識別子のフォーマット。

[Parameter Value\[Data file content\]](#Data_file_content)<a name="Data_file_content"></a>
: データファイルの内容。

[Parameter Value\[Spectrum representation\]](#Spectrum_representation)<a name="Spectrum_representation"></a>
: スペクトルの表現方法。

[Parameter Value\[Raw data file format\]](#Raw_data_file_format)<a name="Raw_data_file_format"></a>
: 生データのファイル形式。

[Parameter Value\[Instrument software\]](#Instrument_software)<a name="Instrument_software"></a>
: 分析機器のソフトウェア。

[Parameter Value\[Instrument software version\]](#Instrument_software_version)<a name="Instrument_software_version"></a>
: 分析機器のソフトウェアのバージョン。

[Parameter Value\[Line scan direction\]](#Line_scan_direction)<a name="Line_scan_direction"></a>
: 最初のラインスキャンの方向。

[Parameter Value\[Line scan sequence\]](#Line_scan_sequence)<a name="Line_scan_sequence"></a>
: ラインスキャンのシーケンス。

[Parameter Value\[Scan pattern\]](#Scan_pattern)<a name="Scan_pattern"></a>
: スキャンのパターン。

[Parameter Value\[Scan type\]](#Scan_type)<a name="Scan_type"></a>
: スキャンの種類。

[Parameter Value\[Number of scans\]](#Number_of_scans)<a name="Number_of_scans"></a>
: スキャン数。

[Parameter Value\[Sample mounting\]](#Sample_mounting)<a name="Sample_mounting"></a>
: サンプルの取り付方法。

[Parameter Value\[Sample preservation\]](#Sample_preservation)<a name="Sample_preservation"></a>
: サンプルの保護方法。例 Freezing

[Parameter Value\[Tissue modification\]](#Tissue_modification)<a name="Tissue_modification"></a>
: 組織の修飾方法。

[Parameter Value\[Sectioning instrument\]](#Sectioning_instrument)<a name="Sectioning_instrument"></a>
: 切片作成装置の名前、製造元。

[Parameter Value\[Section thickness\]](#Section_thickness)<a name="Section_thickness"></a>
: 切片の厚さ。

[Parameter Value\[Matrix\]](#Matrix)<a name="Matrix"></a>
: マトリクス化合物の種類、名前。

[Parameter Value\[Matrix application\]](#Matrix_application)<a name="Matrix_application"></a>
: マトリクス化合物の塗布方法。

[Parameter Value\[Stain\]](#Stain)<a name="Stain"></a>
: 染色方法。

[Parameter Value\[Data processing software\]](#Data_processing_software)<a name="Data_processing_software"></a>
: データ解析ソフトウェアの名前。

[Parameter Value\[Data processing software version\]](#Data_processing_software_version)<a name="Data_processing_software_version"></a>
: データ解析ソフトウェアのバージョン。

[Parameter Value\[Extraction method\]](#Extraction_method)<a name="Extraction_method"></a>
: 出発材料からサンプルを抽出した方法。例 Methanol

[Parameter Value\[NMR tube type\]](#NMR_tube_type)<a name="NMR_tube_type"></a>
: チューブのサイズと種類。例 standard 5 mm glass NMR tube (Wilmad, LabGlass, USA)

[Parameter Value\[Solvent\]](#Solvent)<a name="Solvent"></a>
: NMR サンプル調整に使用した溶媒。例 D2O

[Parameter Value\[Sample pH\]](#Sample_pH)<a name="Sample_pH"></a>
: サンプル pH 値。例 7

[Parameter Value\[Temperature\]](#Temperature_NMR)<a name="Temperature_NMR"></a>
: サンプルの温度。単位は [unit](#Unit) に記載。

[Parameter Value\[Instrument\]](#Instrument_NMR)<a name="Instrument_NMR"></a>
: NMR 測定で使用した機器の名前、モデル番号と共鳴周波数。例 Varian Unity Inova 500 MHz spectrometer

[Parameter Value\[NMR probe\]](#NMR_probe)<a name="NMR_probe"></a>
: NMR プローブの名前と種類。この情報は 'Acquisition Parameter Data File' に記載されています。Bruker 生データファイルでは 'acqus.txt' 中の '$PROBHD=' と書かれた項目に記載されています。例 5 mm CPTCI 1H-13C/15N/D Z-GRD

[Parameter Value\[Number of transients\]](#Number_of_transients)<a name="Number_of_transients"></a>
: 得られたスキャンの数。この情報は 'Acquisition Parameter Data File' に記載されています。Bruker 生データファイルでは 'acqus.txt' 中の '$NS=' と書かれた項目に記載されています。例 128

[Parameter Value\[Pulse sequence name\]](#Pulse_sequence_name)<a name="Pulse_sequence_name"></a>
: パルスシークエンスプログラムの名前と短い説明。この情報は 'Acquisition Parameter Data File' に記載されています。Bruker 生データファイルでは 'acqus.txt' 中の '$PULPROG=' と書かれた項目に記載されています。例 1D 1H with presaturation (presat)

[Parameter Value\[Magnetic field strength\]](#Magnetic_field_strength)<a name="Magnetic_field_strength"></a>
: テスラ (T) で記載した磁場強度。例 11.7
