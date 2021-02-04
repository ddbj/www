---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Metadata
category: gea
current_tab: submission overview
lang: ja
---

## MAGE-TAB  {#mage-tab}

MicroArray Gene Expression Tabular ([MAGE-TAB](http://fged.org/projects/mage-tab/)) は機能ゲノミクスデータを構造化・標準化された方法で表現するための研究者コミュニティで開発、採用された形式です。MAGE-TAB はデータの収集とアノテーションに加え、ArrayExpress や GEA といったデータベース間でデータを交換する用途にも使えるように設計されています。[MAGE-TAB の仕様書](http://fged.org/projects/mage-tab/)


{% include image.html url="magetab/magetab_over.jpg" caption="IDF，SDRF，ADFと生データファイル，解析処理されたデータファイル間の関係" class="w450" %}


## IDF  {#idf}

IDF (Investigation Description Format) ファイルは実験デザイン、プロトコール、文献情報や登録者情報といった実験全体を記述するファイルです。

### IDF 例  {#idf_ex}

[IDF の例](/gea/example-e.html#idf)

| [Comment[GEAAccession]](#Comment_idf)               | E-GEAD-369                                                                      |     |
| MAGE-TAB Version                                      | 1.1                                                                             |     |
| [Investigation Title](#Investigation_Title)           | Transcriptional profiling of Arabidopsis leaves exposed to elevated temperature |     |
| [Experiment Description](#Experiment_Description)     | We investigated genome-wide ... biological replicates were analyzed.            |     |
| [Experimental Design](#Experimental_Design)           | stimulus or stress design                                                       |     |
| [Experimental Factor Name](#Experimental_Factor_Name) | temperature                                                                     |     |
| [Experimental Factor Type](#Experimental_Factor_Type) | temperature                                                                     |     |
| [Person Last Name](#Person_Last_Name)                 | Test                                                                            |     |
| [Person First Name](#Person_First_Name)               | Tarou                                                                           |     |
| [Person Affiliation](#Person_Affiliation)             | DDBJ Center, National Institute of Genetics                                     |     |
| [Person Roles](#Person_Roles)                         | submitter                                                                       |     |
| [Public Release Date](#Public_Release_Date)           | 2018-06-22                                                                      |     |
| [PubMed ID](#PubMed_ID)                               | 29040613                                                                        |     |
| [Protocol Name](#Protocol_Name)                       | P-GEAD-535                                                                      | ... |
| [Protocol Type](#Protocol_Type)                       | sample collection protocol                                                      | ... |
| [Protocol Description](#Protocol_Description)         | Plants were sown on GM medium ... 22 degrees celsius.                           | ... |
| [SDRF File](#SDRF_File)                               | E-GEAD-369.sdrf.txt                                                             |     |
| [Comment[Number of channel]](#Comment_idf)          | single-channel                                                                  |     |
| [Comment[Array Design REF]](#Comment_idf)           | A-AFFY-2                                                                        |     |
| [Comment[AEExperimentType]](#Comment_idf)           | transcription profiling by array                                                |     |
| [Comment[BioProject]](#Comment_idf)                 | PRJDB3647                                                                       |     |
| [Comment[Public Release Date]](#Comment_idf)        | 2018-06-22                                                                      |     |
| [Comment[Last Update Date]](#Comment_idf)           | 2018-06-22                                                                      |     |

### IDF タグ  {#idf_tags}

IDF はタグと対応する値が組み合わされたタブ区切りテキストファイルです。例えば "Experiment Description" には Experiment のフリーテキストでの説明を記載します。一つ以上の値が許容されているフィールド、例えばプロトコール、登録者や experimental factor は一つの IDF ファイルで複数定義することができます（値はタブで区切ります）。一つの値しか持てないフィールドは以下に示してあります。

[Investigation Title](#Investigation_Title)<a name="Investigation_Title"></a>
: 研究全体に付けるタイトル。このタグは１つの値しか持てません。

<!-- end list -->

[Experimental Design](#Experimental_Design)<a name="Experimental_Design"></a>  
: 実験のデザイン。[controlled term](https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=1804523015) から該当するものを選びます。

<!-- end list -->

Experimental Factor Name<a name="Experimental_Factor_Name"></a>
: 実験の Experimental factor は実験の変数 (growth condition, genotype, organism part 等) です。Factor の値は SDRF の "Factor Value[\<factor name>]" カラムに記入します。GEA は SDRF の Factor value の名前を IDF にコピーします。

<!-- end list -->

Experimental Factor Type<a name="Experimental_Factor_Type"></a>
: Experimental factor の type。GEA では Experimental Factor Name を Experimental Factor Type として使っています。

<!-- end list -->

[Person Last Name](#Person_Last_Name)<a name="Person_Last_Name"></a>
: 登録者のラストネーム (公開されます)。

<!-- end list -->

[Person First Name](#Person_First_Name)<a name="Person_First_Name"></a>
: 登録者のファーストネーム (公開されます)。

<!-- end list -->

[登録者のミドルネーム (公開されます)。](#Person_Mid_Initials)<a name="Person_Mid_Initials"></a>
: <p></p>
<!-- end list -->

[Person Affiliation](#Person_Affiliation)<a name="Person_Affiliation"></a>
: 登録者の所属する組織 (公開されます)。

<!-- end list -->

[Person Roles](#Person_Roles)<a name="Person_Roles"></a>
: Person の役割。GEA では "submitter" のみ使用可能です。

<!-- end list -->

[Public Release Date](#Public_Release_Date)<a name="Public_Release_Date"></a>
: データの初回公開日。日付は "YYYY-MM-DD" 形式で記入します (例: 2011-10-10)。このフィールドは１つの値しか持てません。

<!-- end list -->

[PubMed ID](#PubMed_ID)<a name="PubMed_ID"></a>
: 登録データを引用している文献の PubMed ID。

<!-- end list -->

[Publication DOI](#Publication_DOI)<a name="Publication_DOI"></a>
: 登録データを引用している文献の Digital Object Identifier (DOI)。PubMed ID がある場合は PubMed ID を記載します。

<!-- end list -->

[Experiment Description](#Experiment_Description)<a name="Experiment_Description"></a>
: 実験をフリーテキストで記述します。このフィールドは１つの値しか持てません。説明文は「実験で何をしたか」を明確に説明します。この説明文はキュレータがデータをチェックする上で役に立ちます。

<!-- end list -->

Protocol Name<a name="Protocol_Name"></a>
: プロトコールの名前。プロトコールは SDRF の "Protocol REF" カラムでプロトコールの一時的な ID (例 ESUB000350_Protocol_1) もしくはアクセッション番号 (例 P-GEAD-100) で参照されます。GEA は Experiment を跨ったプロトコールの参照をサポートしていません。

<!-- end list -->

Protocol Type<a name="Protocol_Type"></a>
: プロトコールの種類。事前に定義されている type は以下になります。Microarray と Sequencing experiment で[必須 protocol セット](https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=961166619)が異なります。

  - array scanning and feature extraction protocol
  - conversion protocol
  - dissection protocol
  - growth protocol
  - high throughput sequence alignment protocol
  - normalization data transformation protocol
  - nucleic acid extraction protocol
  - nucleic acid hybridization to array protocol
  - nucleic acid labeling protocol
  - nucleic acid library construction protocol
  - nucleic acid sequencing protocol
  - sample collection protocol
  - treatment protocol

<!-- end list -->

[Protocol Description](#Protocol_Description)<a name="Protocol_Description"></a>
: プロトコールをフリーテキストで記述します。このテキストはタブで区切られた１フィールド内に収めます。

<!-- end list -->

[SDRF File](#SDRF_File)<a name="SDRF_File"></a>
: IDF に随伴する SDRF ファイル名。GEA は自動的にファイル名を埋め込みます。

<!-- end list -->

[Comment[\<user-defined tag>]](#Comment_idf)<a name="Comment_idf"></a>
: ユーザもしくはアーカイブが独自に定義するフィールド。GEA は以下の Comment タグを使っています。

  - Comment[GEAAccession]
  - Comment[AEExperimentType]
  - Comment[Number of channel]
  - Comment[Array Design REF]
  - Comment[BioProject]
  - Comment[Public Release Date]
  - Comment[Last Update Date]
  - Comment[AdditionalFile:TXT]

## SDRF  {#sdrf}

SDRF (Sample and Data Relationship Format) サンプル属性及びサンプル、アレイ、データファイル間の関係性を記述します。SDRF は機能ゲノミクス実験の自然な流れを再現できるように構成されています。SDRF は用いられた大元の Source サンプルから始まり、最後はサンプルから得られたデータファイルで終わります。Single-channel のマイクロアレイ実験ではSDRF１行が１ハイブリダイゼーションに対応します。Two-channel マイクロアレイでは１行は１チャンネルに対応します。シークエンシング実験では１行は基本的に１生データファイル（Run、ペアードシークエンスを含む）に対応します。


{% include image.html url="magetab/sdrf.jpg" caption="SDRF の全体構造" class="w450" %}


### SDRF セクション  {#sdrf_sections}

[Protocols](#Protocols_section)<a name="Protocols_section"></a>  
: 多くの場合実験における「処理（Treatment）」は IDF で定義された [Protocol Name](#Protocol_Name) を参照する [Protocol REF](#Protocol_REF) カラムで表されます。

アクセッション番号が発行される前の段階では IDF で定義されたプロトコールには一時的な ID (例 ESUB000001_Protocol_1) がアサインされ、SDRF からはこの ID で参照されます。アクセッション番号発行後、これらのプロトコールはアクセッション番号 (P-GEAD-n) で参照されます。

|---|
| [Protocol Name](#Protocol_Name) | ESUB000500_Protocol_1          | ESUB000500_Protocol_2 |
| [Protocol Type](#Protocol_Type) | nucleic acid extraction protocol | labelling protocol      |

SDRF は以下のようになります。

|---|
| [Protocol REF](#Protocol_REF) | [Protocol REF](#Protocol_REF) |
| OSUB000500_Protocol_2       | OSUB000500_Protocol_3       |

<!-- end list -->

[Sources](#Sources_section)<a name="Sources_section"></a>
: Source は実験の出発材料です。このセクションは [Source Name](#Source_Name) カラムで始まり、典型的にはいくつかの [Characteristics](#Characteristics) カラムが続きます。


<div class="attention" markdown="1">
GEA の登録システムでは対応する BioSample の sample_name が Source Name、Extract Name、Labeled Extract Name と Assay Name に共通で使用されます。
</div>

| [Source Name](#Source_Name)                | [Characteristics[organism]](#Characteristics) | [Characteristics[ecotype]](#Characteristics) |
| Arabidopsis control for heat stress_rep 1 | Arabidopsis thaliana                            | Col-0                                          |

追加で Source Name を注釈するカラム: [Provider](#Provider) と [Comment](#Comment_sdrf).

<!-- end list -->

[Extracts](#Extracts_section)<a name="Extracts_section"></a>
: Extract は実験で抽出された核酸のことです。

| [Source Name](#Source_Name)                | [Protocol REF](#Protocol_REF) | [Extract Name](#Extract_Name)              | [Material Type](#Material_Type) |
| Arabidopsis control for heat stress_rep 1 | OSUB000500_Protocol_2       | Arabidopsis control for heat stress_rep 1 | total RNA                       |

Extracts を注釈するカラム: [Characteristics[]](#Characteristics)、[Material Type](#Material_Type) と [Comment](#Comment_sdrf)。

<!-- end list -->

Labeled Extracts<a name="Labeled_Extracts_section"></a>  
: Labeled Extracts アレイにハイブリダイズする前にラベルされた核酸のことです。マイクロアレイ実験ではどのサンプルにどのラベル（スキャナーのチャンネル）が対応するか記述する [Label](#Label) カラムが [Labeled Extract Name](#Labeled_Extract_Name) カラムに付加されている必要があります。

| [Extract Name](#Extract_Name)              | [Material Type](#Material_Type) | [Protocol REF](#Protocol_REF) | [Labeled Extract Name](#Labeled_Extract_Name) | [Label](#Label) |
| Arabidopsis control for heat stress_rep 1 | total RNA                       | OSUB000500_Protocol_3       | Arabidopsis control for heat stress_rep 1    | biotin          |

Labeled Extract を注釈するカラム:
[Characteristics[]](#Characteristics)、[Material
Type](#Material_Type) と [Comment](#Comment_sdrf)。

<!-- end list -->

Assays<a name="Assays_section"></a>  
: Labeled extract のアレイへのハイブリダイゼーション、もしくは、ライブラリーのシークエンシングは SDRFにおいて「材料（material）」と「データ（data）」セクションをつなぐ要となるステップです。マイクロアレイ実験ではアレイデザインを示す[Array Design REF](#Array_Design_REF) カラムが [Assay Name](#Assay_Name) に付加されている必要があります。

| [Labeled Extract Name](#Labeled_Extract_Name) | [Label](#Label) | [Assay Name](#Assay_Name)                  | [Technology Type](#Technology_Type) | [Array Design REF](#Array_Design_REF) |
| Arabidopsis control for heat stress_rep 1    | biotin          | Arabidopsis control for heat stress_rep 1 | array assay                         | A-AFFY-2                              |

Assay Name カラムを注釈する [Comment](#Comment_sdrf) カラムを含めることができます。Assay Name カラムの値は [Data Matrix](/gea/matrix.html) ファイル中でデータカラムと個々のアッセイをリンクするのに使われることがあることに注意が必要です。

<!-- end list -->

[Raw Data Files](#Raw_Data_Files_section)<a name="Raw_Data_Files_section"></a>   
: 生データファイルは [Assay Name](#Assay_Name) カラムに続く [Array Data File](#Array_Data_File) カラムにリストする必要があります。

| [Assay Name](#Assay_Name)                  | [Technology Type](#Technology_Type) | [Array Design REF](#Array_Design_REF) | [Array Data File](#Array_Data_File) |
| Arabidopsis control for heat stress_rep 1 | array assay                         | A-AFFY-2                              | Arabidopsis_control_rep_1.CEL    |

生データファイルに関する情報を補足するのに [Comment](#Comment_sdrf) カラムを使うことができます。

<!-- end list -->

[Processed Data Files](#Processed_Data_Files_section)<a name="Processed_Data_Files_section"></a>    
: マイクロアレイとシークエンシング実験の両方において生データから派生した解析済みデータファイルは [Derived Array DataFile](#Derived_Array_Data_File)カラムにリストします。アッセイ毎に一つの解析済みデータファイルがある場合にこのカラムを使います。複数アッセイからのデータが含まれている場合は解析済みデータファイルを [Data Matrix format](/gea/matrix.html) に変換しこのカラムではなく [Derived Array Data Matrix File](#Derived_Array_Data_Matrix_File) カラムにファイル名を記載します。

| [Assay Name](#Assay_Name)                  | [Technology Type](#Technology_Type) | [Array Design REF](#Array_Design_REF) | [Array Data File](#Array_Data_File) | [Derived Array Data File](#Derived_Array_Data_File) |
| Arabidopsis control for heat stress_rep 1 | array assay                         | A-AFFY-2                              | Arabidopsis_control_rep_1.CEL    | Arabidopsis_control_rep_1.processed.txt          |

<!-- end list -->

[Factor Values](#Factor_Values_section)<a name="Factor_Values_section"></a>  
: Factor valueは実験で解析対象になっている変数のことです。例えば異なる温度（熱ストレス）が培養細胞に与える影響を調べている場合、単位を示す "Unit" カラムが付いた "temparature" が Factor value になります。

| [Source Name](#Source_Name)               | [Comment[description]](#Comment_sdrf)                     | [Assay Name](#Assay_Name)                 | [Factor Value[temparature]](#Factor_Value) | [Unit[temperature unit]](#Unit) |
| Arabidopsis control for heat stress rep 1 | Arabidopsis control for heat stress, biological replicate 1 | Arabidopsis control for heat stress rep 1 | 22                                           | degree_C                         |
| Arabidopsis heat stress rep 1             | Arabidopsis heat stress, biological replicate 1             | Arabidopsis heat stress rep 1             | 37                                           | degree_C                         |

Factor value は通常 SDRF の他のカラムと重複します。"Factor Value" カラムは [Characteristics[]](#Characteristics) カラムと重複することが多いです。

Factor Value カラムは SDRF の最後（最も右）に配置する必要があります。

GEA は IDF で変数を "Experimental Factor Name" と Type（通常 Name と同じ）として定義します。

|---|
| [Experimental Factor Name](#Experimental_Factor_Name) | temperature |
| [Experimental Factor Type](#Experimental_Factor_Type) | temperature |

### 有効な SDRF カラムヘッダー  {#SDRF_headings}

[Source Name](#Source_Name)<a name="Source_Name"></a>
: MAGE-TAB で identifier として使われます。このカラムには [Source](#Sources_section) material に対してユーザが定義する値 (デフォルトでは対応する BioSample の sample_name が使われます) を記入します。以下のカラムが "Source Name" を注釈するのに使えます。

  - [Characteristics[]](#Characteristics)
  - [Provider](#Provider)
  - [Comment[]](#Comment_sdrf)

<!-- end list -->

[Sample Name](#Sample_Name)<a name="Sample_Name"></a>  
: MAGE-TAB で identifier として使われます。このカラムには [Sample](#Sources_section) material に対してユーザが定義する値 (デフォルトでは対応する BioSample の sample_name が使われます) を記入します。以下のカラムが "Sample Name" を注釈するのに使えます。

  - [Characteristics[]](#Characteristics)
  - [Comment[]](#Comment_sdrf)

<!-- end list -->

[Extract Name](#Extract_Name)<a name="Extract_Name"></a>
: MAGE-TAB で identifier として使われます。このカラムには [Extract](#Extracts_section) material に対してユーザが定義する値 (デフォルトでは対応する BioSample の sample_name が使われます) を記入します。以下のカラムが "Extract Name" を注釈するのに使えます。

  - [Material Type](#Material_Type)
  - [Comment[]](#Comment_sdrf)

<!-- end list -->

[Labeled Extract Name](#Labeled_Extract_Name)<a name="Labeled_Extract_Name"></a>
: MAGE-TAB で identifier として使われます。このカラムには [Labeled Extract](#Labeled_Extracts_section) material に対してユーザが定義する値
(デフォルトでは対応する BioSample の sample_name が使われます) を記入します。以下のカラムが "Labeled Extract Name" を注釈するのに使えます。

  - [Label](#Label) (required for array submissions)
  - [Comment[]](#Comment_sdrf)

<!-- end list -->


[Assay Name](#Assay_Name)<a name="Assay_Name" markdown="1"></a>
: MAGE-TAB で identifier として使われます。このカラムには [Assay](#Assays_section) に対してユーザが定義する値 (デフォルトでは対応する BioSample の sample_name が使われます) を記入します。以下のカラムが "Assay Name" を注釈するのに使えます。

  - [Array Design REF](#Array_Design_REF) (required for array
    submissions)
  - [Technology Type](#Technology_Type) ("array assay" for
    microarray and "sequencing assay" for sequencing experiment)
  - [Comment[]](#Comment_sdrf)

All "Assay Name" columns must be followed by a "Technology Type" column.

<!-- end list -->

[Scan Name](#Scan_Name)<a name="Scan_Name"></a>  
: MAGE-TAB で identifier として使われます。このカラムには [Scan](#Assays_section) イベントに対してユーザが定義する値 (デフォルトでは対応する BioSample の sample_name が使われます) を記入します。以下のカラムが "Scan Name" を注釈するのに使えます。

  - [Comment[]](#Comment_sdrf)

<!-- end list -->

[Normalization Name](#Normalization_Name)<a name="Normalization_Name"></a>  
: MAGE-TAB で identifier として使われます。このカラムには [Normalization](#Processed_Data_Files_section) イベントに対してユーザが定義する値 (デフォルトでは対応する BioSample の sample_name が使われます) を記入します。以下のカラムが "Normalization Name" を注釈するのに使えます。

  - [Comment[]](#Comment_sdrf)

<!-- end list -->


[Array Data File](#Array_Data_File)<a name="Array_Data_File" markdown="1"></a>
: このカラムは[生データファイル](#Raw_Data_Files_section)を SDRF １行について１ファイルリストして個々のアッセイとデータファイルを結びつけるのに使います。以下のカラムが "Array Data File" カラムを注釈するのに使えます。

  - [Comment[]](#Comment_sdrf)

<!-- end list -->

[Derived Array Data File](#Derived_Array_Data_File)<a name="Derived_Array_Data_File"></a>  
: このカラムはマイクロアレイとシークエンシング実験において[解析済みデータファイル](#Processed_Data_Files_section)を SDRF １行について１ファイルリストして個々のアッセイと解析済みデータファイルを結びつけるのに使います。以下のカラムが "Derived Array Data File" カラムを注釈するのに使えます。

  - [Comment[]](#Comment_sdrf)

<!-- end list -->

[Array Data Matrix File](#Array_Data_Matrix_File)<a name="Array_Data_Matrix_File"></a>  
: このカラムではマイクロアレイとシークエンシング実験において複数アッセイからのデータを含む生データファイルを記載します。データとアッセイは [Data Matrix](/gea/matrix.html) 形式ファイル中で対応付けられます。以下のカラムが "Array Data Matrix File" カラムを注釈するのに使えます。

  - [Comment[]](#Comment_sdrf)

<!-- end list -->

[Derived Array Data Matrix File](#Derived_Array_Data_Matrix_File)<a name="Derived_Array_Data_Matrix_File"></a>    
: このカラムではマイクロアレイとシークエンシング実験において複数アッセイからのデータを含む解析済みデータファイルを記載します。データとアッセイ（もしくは Scan や Normalization） は [Data Matrix](/gea/matrix.html) 形式ファイル中で対応付けられます。以下のカラムが "Derived Array Data Matrix File" カラムを注釈するのに使えます。

  - [Comment[]](#Comment_sdrf)

<!-- end list -->


[Array Design REF](#Array_Design_REF)<a name="Array_Design_REF" markdown="1"></a>
: このカラムはアッセイで使われたアレイデザインを参照します。GEA 登録では ArrayExpress/GEA アレイデザインアクセッション番号（例"A-AFFY-2"）、もしくは、番号が無い場合はアレイデザインファイル名を記載します。アレイデザインアクセッション番号は [ArrayExpress array design search page](https://www.ebi.ac.uk/arrayexpress/arrays/browse.html) で検索できます。以下のカラムが "Array Design REF" カラムを注釈するのに使えます。

  - [Comment[]](#Comment_sdrf)

<!-- end list -->


[Protocol REF](#Protocol_REF)<a name="Protocol_REF" markdown="1"></a>
: このカラムは IDF で定義された [Protocol Names](#Protocol_Name) への参照を記載します。アクセッション番号発行前はプロトコールは "ESUB000500_Protocol_1" のような一時的な ID で参照されます。アクセッション番号発行後、この ID は "P-GEAD-100" のようなプロトコールアクセッション番号で置換されます。以下のカラムが "Protocol REF" カラムを注釈するのに使えます。

  - [Parameter Value[]](#Parameter_Value)
  - [Performer](#Performer)
  - [Date](#Date)
  - [Comment[]](#Comment_sdrf)

<!-- end list -->

[Characteristics[\<category term>]](#Characteristics)<a name="Characteristics"></a>  
: Controlled vocabulary term もしくは測定値を記載します。[Source Name](#Source_Name)、[Sample Name](#Sample_Name)、[Extract Name](#Extract_Name) もしくは [Labeled Extract Name](#Labeled_Extract_Name) の属性カラムとして使われます。ヘッダー中に示されるカテゴリーに従った属性値を記入して material を記述します。例えば "Characteristics[organism]" は　"Homo sapiens"　等の生物名を含みます。デフォルトでは登録者が値を定義しますが、外部オントロジーの値 (例えば organism name に対する [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/taxonomy))や計測値 (Unit[] カラムで単位を掲示) を記入することもあります。以下のカラムが "Characteristics[<category term>]" カラムを注釈するのに使えます。

  - [Term Source REF](#Term_Source_REF)
  - [Unit[]](#Unit)

<!-- end list -->

[Provider](#Provider)<a name="Provider"></a>  
: [Source Name](#Source_Name) を注釈するカラムとして使えます。Source が由来する組織名や提供者名を記載します。

<!-- end list -->


[Material Type](#Material_Type)<a name="Material_Type" markdown="1"></a>
: [Controlled vocabulary term](https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=986287710)。[Source Name](#Source_Name)、[Sample Name](#Sample_Name)、[Extract Name](#Extract_Name) もしくは [Labeled Extract Name](#Labeled_Extract_Name) を注釈するカラムとして使えます。このカラムには以下の選択肢から各 material を記述する語句を記入します。

  - total RNA
  - polyA RNA
  - cytoplasmic RNA
  - nuclear RNA
  - genomic DNA
  - protein
  - other

<!-- end list -->


[Label](#Label)<a name="Label" markdown="1"></a>
: Controlled vocabulary term. [Labeled Extract Name](#Labeled_Extract_Name) を注釈するカラムとして使えます。抽出核酸を標識して Labeled Extract を生成したラベル化合物名を記入します。例: Cy3、Cy5、biotin、alexa_546。 以下のカラムが "Label" カラムを注釈するのに使えます。

  - [Term Source REF](#Term_Source_REF)

<!-- end list -->


[Technology Type](#Technology_Type)<a name="Technology_Type" markdown="1"></a>
: [Controlled vocabulary term](https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=156878890)。 [Assay Name](#Assay_Name) カラムを注釈するカラムとして使います。GEA はマイクロアレイ実験に対して "array assay"、シークエンシング実験に対して "sequencing assay" を自動で埋め込みます。以下のカラムが "Technology Type" カラムを注釈するのに使えます。

  - [Term Source REF](#Term_Source_REF)

<!-- end list -->

[Factor Value[\<experiment factor name>]](#Factor_Value)<a name="Factor_Value"></a>  
: Controlled vocabulary term もしくは計測値。このカラムでは SDRF の各行の experimental factor values (変数) を記載します。Factor value の変数名をヘッダー中に Experimental Factor Name として定義します。

Example SDRF:

|---|
| [Factor Value[tissue]](#Factor_Value) |
| gall bladder                            |
| kidney                                  |
| liver                                   |
| intestine                               |
| pancreas                                |


上の例では tissue という変数の値が記載されています。さらに詳細に値を定義するために任意の形式として "Factor Value\[]()" を用いることができます。例 "Factor Value[growthconditionEF]\(Nutrients)"。

変数の組み合わせが解析された場合、一つ以上の Factor Value を記述します。SDRF の例:

|---|
| [Factor Value[compound]](#Factor_Value) | [Factor Value[dose]](#Factor_Value) | [Unit[molar mass unit]](#Unit) |
| none                                      |                                       |                                  |
| potassium cyanide                         | 25                                    | micromolar                       |
| potassium cyanide                         | 35                                    | micromolar                       |
| potassium cyanide                         | 50                                    | micromolar                       |

Factor name は組になる IDF で定義します（GEA は SDRF 中の Factor name を IDF にコピーします）:

|---|
| [Experimental Factor Name](#Experimental_Factor_Name) | tissue |
| [Experimental Factor Type](#Experimental_Factor_Type) | tissue |

[Performer](#Performer)<a name="Performer"></a>    
: [Protocol REF](#Protocol_REF) に続く注釈カラムとして使うことができます。プロトコールが実施された組織名もしくは研究者名を記載します。

<!-- end list -->

[Date](#Date)<a name="Date"></a>   
: [Protocol REF](#Protocol_REF) に続く注釈カラムとして使うことができます。プロトコールの実施日（とあれば時間）を "YYYY-MM-DD" 形式で記載します。

<!-- end list -->

[Parameter Value[\<protocol parameter>]](#Parameter_Value)<a name="Parameter_Value"></a>   
: [Protocol REF](#Protocol_REF) に続く注釈カラムとして使うことができます。このカラムはカラムヘッダー中に含まれるプロトコールのパラメータを記述するのに使うことができます。以下のカラムが "Parameter Value" カラムを注釈するのに使えます。

  - [Unit[]](#Unit)
  - [Term Source REF](#Term_Source_REF)
  - [Comment[]](#Comment_sdrf)

例えば "Array Hybridization" という名のプロトコールが Protocol Parameters "hyb temp" と共に IDF で定義されている場合、以下のような記載をすることができます。

|---|
| [Protocol REF](#Protocol_REF) | [Parameter Value[hyb temp]](#Parameter_Value) | [Unit[temperature unit]](#Unit) |
| Array Hybridization           | 55                                              | degree celsius                    |

<!-- end list -->

[Unit[\<unit category>]](#Unit)<a name="Unit"></a>  
: Controlled vocabulary term。[Characteristics[]](#Characteristics)、[Factor Value[]](#Factor_Value) もしくは [Parameter
Value[]](#Parameter_Value) に続く注釈カラムとして使うことができます。このカラムは先行するカラムの単位を示すために使います。単位の種類はカラムヘッダー中に "Unit[volume unit]" のように示します。種類は [EFO](/efo/) の [Unit](http://purl.obolibrary.org/obo/UO_0000000) サブクラスから適切なものを記載します。以下のカラムが "Unit[\<unit category>]" カラムを注釈するのに使えます。

  - [Term Source REF](#Term_Source_REF)

このケースにおいて Term Source REF は Unit の値が由来するオントロジーを示すのに使います。

<!-- end list -->

[Description](#Description)<a name="Description"></a>  
: [Source Name](#Source_Name)、[Sample Name](#Sample_Name)、[Extract Name](#Extract_Name) もしくは [Labeled Extract Name](#Labeled_Extract_Name) を注釈するカラムとして使うことができます。対応する material に対するフリーテキストでの説明を記載します。できるだけこのカラムは使わずに [Characteristics[]](#Characteristics) カラムを使って構造的に material を記述します。

<!-- end list -->

[Term Source REF](#Term_Source_REF)<a name="Term_Source_REF"></a>   
: どのような controlled vocabulary カラム (例 [Characteristics[]](#Characteristics))、もしくは、外部エンティティを参照できるカラム (例 [Protocol REF](#Protocol_REF)) に対しても使うことができます。このカラムは先行するカラム中の値が由来する IDF で定義されたオントロジーやデータベースを参照することができます。以下のカラムが "Term Source REF" カラムを注釈するのに使えます。<span class="red">GEA では ArrayExpress のように登録時点で構造化してオントロジーを適用することはしていません。</span>

  - [Term Accession Number](#Term_Accession_Number)

<!-- end list -->

[Term Accession Number](#Term_Accession_Number)<a name="Term_Accession_Number"></a>  
: [Term Source REF](#Term_Source_REF) カラムを注釈するカラムとして使うことができます。オントロジーやデータベース中の記入された値に対するアクセッション番号を記入します。例:

| [Source Name](#Source_Name) | [Characteristics[disease]](#Characteristics) | [Term Source REF](#Term_Source_REF) | [Term Accession Number](#Term_Accession_Number) |
| Sample 1                    | acute lymphoblastic leukemia                   | EFO                                 | EFO_0000220                                    |

(この例は [EFO](https://www.ebi.ac.uk/efo/) Term Source が SDRF とペアになっている [IDF](/gea/metadata.html#idf) で定義されていることを前提にしています)  
<span class="red">GEA では ArrayExpressのように登録時点で構造化してオントロジーを適用することはしていません。</span>

<!-- end list -->

[Comment[\<comment name>]](#Comment_sdrf)<a name="Comment_sdrf"></a>
: このカラムは node と edge カラムを注釈するために使うことができます。このカラムは拡張性を持たすためにあり、生物学的に意味のある事柄を記載するために用いられることを意図していません。カラムヘッダー中に値の種類に対する名前を記載する必要があります。
