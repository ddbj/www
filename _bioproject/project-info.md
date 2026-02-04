---
layout: tabbed_indexed_content
service_name: BioProject
title: プロジェクト情報
category: bioproject
current_tab: submission
lang: ja
---

必須<span class="red">\*</span>  
条件によって必須<span class="conditionally_required">\*</span>

## Submitter  {#Submitter}

### Submitter  {#Area_bioproject-submitter}

登録者情報。登録に関する連絡はここに記載された E-mail アドレス宛てに行われます。必要な人数分作成します。連絡先情報は DDBJ BioProject スタッフが登録者に連絡するために使われ、一般に公開されることはありません。連絡先情報の代わりに研究者の所属する組織に関する情報が公開されます。

[First name](#BioProject_First_name)<a name="BioProject_First_name"></a>
: 登録者の first name。

[Last name](#BioProject_Last_name)<span class="red">\*</span><a name="BioProject_Last_name"></a>  
: 登録者の last name。

[E-mail](#BioProject_E-mail)<span class="red">\*</span><a name="BioProject_E-mail"></a>   
: E-mail アドレス。所属する組織ドメインのメールアドレスを指定してください。

### Organization  {#Area_organization}

コンタクトパーソンが所属する組織。

[Submitting organization](#BioProject_Submitting_organization)<span class="red">\*</span><a name="BioProject_Submitting_organization"></a>  
: 組織のフルネーム。

[Submitting organization URL](#BioProject_Submitting_organization_URL)<a name="BioProject_Submitting_organization_URL"></a>  
: 登録者が所属する組織の URL。

### Data Release {#Area_data-release}

"Hold" か "Release" のどちらかを選びます。公開予定日を指定することはできません。データ公開の仕組みについては[プロジェクトの公開](/bioproject/submission.html#project-release)をご覧ください。

[Hold](#BioProject_Hold)<a name="BioProject_Hold"></a>  
: この BioProject アクセッション番号を引用している DDBJ/DRA/GEA/MetaboBank データが公開されたときに同時に公開されます。

[Release](#BioProject_Release)<a name="BioProject_Release"></a>  
: プロジェクトデータを即日公開する。この BioProject アクセッション番号を引用している非公開の DDBJ/DRA/GEA/MetaboBank データが公開されることはありません。

## General info  {#General-info}

### Project Description  {#Area_project-description}

プロジェクトの内容を記述します。

[Project title](#Project_title)<span class="red">\*</span><a name="Project_title"></a>  
: プロジェクトの内容を表す短いタイトル。このタイトルは公開されたプロジェクトのタイトルとして使われます。  
例: Chromosome Y sequencing, Global studies of microbial diversity on human skin.

[Description](#Public_description)<span class="red">\*</span><a name="Public_description"></a>  
: 研究対象やゴールに関する記載。第三者がデータを解釈することができるように十分な量 (100 文字以上) の情報を記入します。

[Private comments to DDBJ staff](#Private_comments)<a name="Private_comments"></a>
: データベーススタッフへの質問やプロジェクトに関する追加情報を記入します。内容は公開されません。[アンブレラプロジェクト](/bioproject/submission.html#submit-umbrella-project)を登録する場合、ここにその旨を記載します。例 Please register this project as an umbrella project.  
DBCLS で承認された提供申請に基づく[ヒトデータ登録](/bioproject/submission.html#human-data)の場合、hum ID と提供申請 ID (例 hum0001, J-DS000001-001) を記入します。

### Umbrella BioProject {#Area_linked-project}

登録しようとしているプロジェクトが既に登録されているアンブレラプロジェクトに属している場合、そのアンブレラプロジェクトのアクセッション番号と概要を記入します。
この情報は[プロジェクトのリンク](/bioproject/submission.html#link-primary-project-umbrella)のために必要です。

[Initiative description](#Initiative_description)<span class="conditionally_required">\*</span><a name="Initiative_description"></a>  
: アンブレラプロジェクトについての記述。

[Umbrella BioProject accession](#BioProject_BioProject_ID)<span class="conditionally_required">\*</span><a name="BioProject_BioProject_ID"></a>  
: 登録されているアンブレラプロジェクトのアクセッション番号。

### External Links  {#Area_external-links}

プロジェクトに直接関連するリソースの URL と表示名。

[Link description](#URL_link_description)<a name="URL_link_description"></a>  
: プロジェクトに関連するウェブサイトの表示名。

[URL](#BioProject_URL)<a name="BioProject_URL"></a>  
: プロジェクトに関連するウェブサイトの URL。

### Grants  {#Area_grants}

プロジェクトの研究費に関する情報。

[Agency](#Agency)<a name="Agency"></a>  
: 研究費助成機関の名前。例: Japan Society for the Promotion of Science。

[Agency abbreviation](#Agency_abbreviation)<a name="Agency_abbreviation"></a>  
: 研究助成機関の名前の略称。例: JSPS。

[Grant ID](#Grant_ID)<a name="Grant_ID"></a>  
: 研究費の番号 (関連文献で引用される研究費番号)。研究費番号での検索をサポートします。例: JSPS KAKENHI Grant Number 12345678

[Grant title](#Grant_title)<a name="Grant_title"></a>  
: 研究費のタイトル。研究費のタイトルでの検索をサポートします。

## Project type  {#Project-type}

### Project data type {#Project_data_type}

[Project data type](#Project_data_type)<span class="red">\*</span><a name="Project data type"></a>
: Project の分類。以下の選択肢から該当する type を選びます。複数選択することができます。

NCBI ではプロジェクトを参照している実際の登録データから [Project data type](https://www.ncbi.nlm.nih.gov/books/NBK54364/def-item/project-data-type/) を割り振っています。また、[EBI](https://www.ebi.ac.uk/ena/submit/project-format) では Project data type を使用していません。

| Project Data type                | Description                                                                                    |
|---|
| Genome Sequencing                | 全ゲノムや部分ゲノム塩基配列決定プロジェクト (ゲノムアセンブリの有無は問わない)                                                      |
| Clone Ends                       | クローンエンド塩基配列決定プロジェクト                                                                            |
| Epigenomics                      | メチル化、ヒストン修飾、クロマチン構造に関するデータセット                                                                |
| Exome                            | エクソームリシークエンシングプロジェクト                                                                           |
| Map                              | 塩基配列ではないマップデータをもたらすプロジェクト (genetic map、radiation hybrid map、cytogenetic map、optical map など) |
| Metagenome                       | 環境サンプルの配列解析                                                                                    |
| Phenotype and Genotype           | 表現型と遺伝子型の相関を解析するプロジェクト                                                                         |
| Proteome                         | マススペクトロメトリー解析を含む大規模プロテオミクス実験                                                                   |
| Random Survey                    | ランダムに収集した (対象の包括的なサンプリングを目的としていない) サンプルから得られた配列                                                |
| Targeted Locus (Loci)            | 特定の遺伝子座 (16S rRNA など) の塩基配列決定プロジェクト                                                            |
| Transcriptome or Gene Expression | cDNA、EST、RNA-seq、マイクロアレイ実験を含む大規模 RNA 塩基配列決定や発現解析                                            |
| Variation                        | 集団間に存在する大小の変異を同定することを目的としたプロジェクト                                                               |
| Other                            | "Project data type description" に Project Data Type を記入します。                                    |

[Project data type description](#Project_data_type_description)<span class="conditionally_required">\*</span><a name="Project_data_type_description"></a>  
: Other を選択したときは Project data type をここに記入します。例 Metabolome

### Sample scope/Material/Capture/Methodology {#Area_sample-scopematerialcapturemethodology}

[Sample scope](#BioProject_Sample_scope)<span class="red">\*</span><a name="BioProject_Sample_scope"></a>  
: 研究で使われた生物学的サンプルの対象を選択肢から選びます。

| Sample scope  | Description                                 |
|---|
| Monoisolate   | 単一の動物、培養細胞のセルライン、育種された均一な集団                 |
| Multiisolate  | 複数の個人や集団 (特定の種)                             |
| Multi-species | サンプルが複数の種を含んでいる                             |
| Environment   | サンプルに含まれる種が不明                               |
| Synthetic     | 人工的に合成されたサンプル                               |
| Other         | "Target description" に Sample scope を記入します。 |

[Material](#Material)<span class="red">\*</span><a name="Material"></a>
: サンプルから単離された実験材料の種類。

| Material       | Description                                  |
|---|
| Genome         | 全ゲノム。核ゲノムが対象のときに使います。DNA やメタゲノムサンプルに対して用います。 |
| Partial Genome | 精製された１つ以上の染色体やレプリコン                          |
| Transcriptome  | 転写産物解析データ                                    |
| Reagent        | 化学反応や沈降反応によって得られた実験材料                        |
| Proteome       | タンパク質やペプチドのデータ                               |
| Phenotype      | 表現型解析                                        |
| Other          | "Target description" に Material を記入します。      |

[Capture](#Capture)<span class="red">\*</span><a name="Capture"></a>  
: サンプル材料から得ようとしている情報のスケールや種類。　

| Capture             | Description                            |
|---|
| Whole               | サンプル全体を使っている (通常のケース)                  |
| Clone Ends          | クローンエンドデータを使用                          |
| Exome               | エクソンのデータを使用                            |
| Targeted Locus/Loci | 特定の遺伝子座 (遺伝子、ゲノム領域、バーコード領域) のデータ       |
| Random Survey       | サンプルをラフにサーベイしたデータ                      |
| Other               | "Target description" に Capture を記入します。 |

[Target description](#Target_description)<span class="conditionally_required">\*</span><a name="Target_description"></a>  
: Other を選択したときに Sample scope/Material/Capture を記入します。

[Methodology](#Methodology)<span class="red">\*</span><a name="Methodology"></a>  
: データを得るために使われた主要な手法。

| Methodology       | Description                                   |
|---|
| Sequencing        | Sanger や Illumina などを使ったシークエンシング          |
| Array             | ハイブリダイゼーションアレイ                                |
| Mass Spectroscopy | マススペクトロメトリー                                   |
| Other             | "Methodogy description" に Methodology を記入します。 |

[Methodology description](#Methodology_description)<span class="conditionally_required">\*</span><a name="Methodology_description"></a>  
: Other を選択したときに Methodology type を記入します。

### Objective  {#Area_objective}

登録するデータの種類。

[Objective](#Objective)<span class="red">\*</span><a name="Objective"></a>  
: 登録するデータの種類。

| Objective          | Description                                                  |
|---|
| Raw Sequence Reads | シークエンサから出力された生シークエンシングデータ                                    |
| Sequence           | 生データではない加工処理されたシークエンス (クリップされている、メイトペアが対になっている、向きが揃えられているなど) |
| Analysis           | 生物学的な意味を解釈するために解析されたデータ                                      |
| Assembly           | アセンブリ (ゲノムやトランスクリプトーム) データ                                   |
| Annotation         | アノテーションを得るためのデータ                                             |
| Variation          | 変異情報データ                                                      |
| Epigenetic Markers | エピジェネティックなマーカーの探索                                            |
| Expression         | 遺伝子発現データ                                                     |
| Maps               | 細胞学的、物理的なマッピングや Rh マッピング                                     |
| Phenotype          | 表現型                                                          |
| Other              | "Objective description" に Objective を記載します。                  |

## Target  {#Target}

### Organism information  {#Area_organism-information}

対象生物の分類や記述。

[Organism name](#BioProject_Organism_name)<span class="red">\*</span><a name="BioProject_Organism_name"></a>

: [Taxonomy データベース](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html)に登録されている生物名。メタゲノムや環境サンプルなどの生物名を特定できないサンプルについては[こちらのリスト](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908&lvl=3&lin=f&keep=1&srchmode=1&unlock)を参考にしてください。

プロジェクトが複数生物種を対象にしている場合、共通する系統分類、例えば "Homo sapiens" と "Mus musculus" が対象であれば "Mammalia" (taxonomy id: [40674](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=40674&lvl=3&lin=f&keep=1&srchmode=1&unlock)) のように入力します。    
生物名が NCBI Taxonomy に登録されていない場合、sp. を付けた生物種名、例えば生物名が "Escherichia sp. ABCDEF" であれば "Escherichia sp." (tax id: [1884818](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=1884818)) を入力します。    
新規生物名は BioSample で申請します。

[Taxonomy ID](#BioProject_Taxonomy_ID)<a name="BioProject_Taxonomy_ID"></a>  
: [NCBI Taxonomy ID](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html)

[Strain、breed、cultivar](#Strain_breed_cultivar)<a name="Strain_breed_cultivar"></a>  
: 微生物の株名、もしくは真核生物の品種や栽培品種。

[Isolate name or label](#Isolate_name_label)<a name="Isolate_name_label"></a>  
: 単離されたサンプルの[識別子](/ddbj/identifiers.html)、もしくは個々の動物の名前。

[Description](#BioProject_Description)<a name="BioProject_Description"></a>  
: Label に対する簡潔な補足情報。

## Publication {#Publication} 

[PubMed ID](#BioProject_PubMed_ID)<a name="BioProject_PubMed_ID"></a>  
: 文献の PubMed ID(s)。

```
<Publication id="15557739">
  <DbType>ePubmed</DbType>
</Publication>
<ProjectReleaseDate>
```

[DOI](#BioProject_DOI)<a name="BioProject_DOI"></a>  
: PubMed ID がない場合は DOI を記入します。

```
<Publication id="10.1093/nar/gku1120">
  <DbType>eDOI</DbType>
</Publication>
<ProjectReleaseDate>
```

## XML スキーマ  {#xml-schema}

[BioProject XML schema](https://github.com/ddbj/pub/tree/master/docs/bioproject)
