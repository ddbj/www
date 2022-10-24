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
    * Liquid chromatography-mass spectrometry (LC-MS, [download](/assets/files/submission/metabobank/MetaboBank_LC-MS_metadata.xlsx))
    * Liquid chromatography, diode array detector-mass spectrometry (LC-DAD-MS, [download](/assets/files/submission/metabobank/MetaboBank_LC-DAD-MS_metadata.xlsx))
    * Gas chromatography-mass spectrometry (GC-MS, [download](/assets/files/submission/metabobank/MetaboBank_GC-MS_metadata.xlsx))
    * Two dimensional gas chromatography-mass spectrometry (GCGC-MS, [download](/assets/files/submission/metabobank/MetaboBank_GCGC-MS_metadata.xlsx))
    * Gas chromatography, flame ionization detector-mass spectrometry (GC-FID-MS, [download](/assets/files/submission/metabobank/MetaboBank_GC-FID-MS_metadata.xlsx))
    * Capillary electrophoresis-mass spectrometry (CE-MS, [download](/assets/files/submission/metabobank/MetaboBank_CE-MS_metadata.xlsx))
* Mass spectrometry, direct injection
    * Direct infusion-mass spectrometry (DI-MS, [download](/assets/files/submission/metabobank/MetaboBank_DI-MS_metadata.xlsx))
    * Flow injection analysis-mass spectrometry (FIA-MS, [download](/assets/files/submission/metabobank/MetaboBank_FIA-MS_metadata.xlsx))
    * Matrix-assisted laser desorption-ionisation mass spectrometry (MALDI-MS, [download](/assets/files/submission/metabobank/MetaboBank_MALDI-MS_metadata.xlsx))
* Mass spectrometry imaging (MSI, [download](/assets/files/submission/metabobank/MetaboBank_MSI_metadata.xlsx))
* Nuclear magnetic resonance spectroscopy (NMR, [download](/assets/files/submission/metabobank/MetaboBank_NMR_metadata.xlsx))

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
:登録日。MetaboBank で記入。

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
: プロトコールでサンプル捕捉に使用した機器。複数の機器を使った場合はセミコロン (;) で区切って列挙します。

[Protocol Software](#Protocol_Software)<a name="Protocol_Software"></a>
: プロトコールで使用したソフトウェア。

## SDRF  {#sdrf}

SDRF (Sample and Data Relationship Format) はサンプル属性およびサンプル、測定機器、データファイル間の関係性を記述するファイルです。
SDRF はオミックス実験の自然な流れを再現した表であり、
大元のサンプルから始まり、間にプロトコールを挟みながら最後はサンプルから得られたデータファイルで終わります。

{% include image.html url="magetab/mb-sdrf.jpg" caption="SDRF の構造" class="w550" %}

[SDRF の例](https://docs.google.com/spreadsheets/d/1PziXaK3Cic1xQXdcCgBZ1g-4LIKvZRZt71nYCH5e22k/edit#gid=513795053)  

## SDRF カラム {#sdrf_columns}

各項目の説明は [Metadata](/metabobank/metadata-e.html) をご覧ください。日本語の説明ページは作成中です。


