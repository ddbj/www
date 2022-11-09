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

"Hold" か "Release" のどちらかを選びます。公開予定日を指定することはできません。データ公開の仕組みについては[プロジェクトの公開](/bioproject/overview.html#release)をご覧ください。

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
個人識別符号に該当するヒトデータを登録する場合、[NBDC で承認されている提供申請 ID を記入](/bioproject/submission.html#human-data)します。

[Relevance](#Relevance)<a name="Relevance"></a>  
: 最も関連性が高い分野を選択します。

  | Relevance     | Description                                     |
  |---|
  | Agricultural  |                                                 |
  | Medical       |                                                 |
  | Industrial    | バイオレメディエーション、バイオ燃料といった大量生産を意図している研究分野           |
  | Environmental |                                                 |
  | Evolution     |                                                 |
  | ModelOrganism |                                                 |
  | Other         | 選択肢にない研究分野。"Relevance description" に研究分野を記入します。 |

[Relevance description](#Relevance_description)<span class="conditionally_required">\*</span><a name="Relevance_description"></a>  
: Other を選択したときはここに Relevance を記入します。

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

### Consortium  {#Area_consortium}

[Consortium name](#Consortium_name)<a name="Consortium_name"></a>  
: 研究がコンソーシアムの一環として行われた場合、そのコンソーシアム名を記入します。

[Consortium URL](#Consortium_URL)<a name="Consortium_URL"></a>  
: コンソーシアムのウェブサイトがある場合その URL を記入します。

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

複数の生物種を対象としたプロジェクトの場合、共通する階層までの生物分類 (例 属レベルまで) を記入してください。

[Taxonomy データベース](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html) に該当する生物が登録されていない場合は、Novel organism を選択し [Description of novel organism](#Novel_organism) に[新規生物に関する参考情報](/ddbj/organism.html)、Organism Name に希望する生物名を記入します。

[Taxonomy ID](#BioProject_Taxonomy_ID)<a name="BioProject_Taxonomy_ID"></a>  
: [NCBI Taxonomy ID](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html)

[Strain、breed、cultivar](#Strain_breed_cultivar)<a name="Strain_breed_cultivar"></a>  
: 微生物の株名、もしくは真核生物の品種や栽培品種。

[Isolate name or label](#Isolate_name_label)<a name="Isolate_name_label"></a>  
: 単離されたサンプルの[識別子](/ddbj/identifiers.html)、もしくは個々の動物の名前。

[Description](#BioProject_Description)<a name="BioProject_Description"></a>  
: Label に対する簡潔な補足情報。

[Description of novel organism](#Novel_organism)<a name="Novel_organism"></a>
: [Taxonomy データベース](https://www.ncbi.nlm.nih.gov/Taxonomy/) への生物登録を申請するための情報を記入します。

### General Properties  {#Area_general-properties}

対象生物の一般的な性質。

[Cellularity](#Cellularity)<a name="Cellularity"></a>  
: 選択肢から Cellularity を選びます。

| Cellularity   |
|---|
| Unicellular   |
| Multicellular |
| Colonial      |

[Reproduction](#Reproduction)<a name="Reproduction"></a>  
: 選択肢から Reproduction を選びます。

| Reproduction |
|---|
| Sexual       |
| Asexual      |

[Haploid genome size](#Haploid_genome_size)<a name="Haploid_genome_size"></a>  
: Kb、Mb や cM で表したハプロイドゲノムのサイズ。

[Ploidy](#Ploidy)<a name="Ploidy"></a>  
: 選択肢から Ploidy を選びます。

| Ploidy        |
|---|
| Haploid       |
| Diploid       |
| Polyploid     |
| Allopolyploid |

### Organism Replicons  {#Area_organism-replicons}

対象となる生物が持っているレプリコンの数、その名前 (例: 1、2、3 や I、II、III)、レプリコンの種類 (chromosome など) やレプリコンが存在する細胞内構造。

[Name](#Replicon_name)<a name="Replicon_name"></a>  
: 標準的なレプリコン名。

[Type](#Replicon_type)<a name="Replicon_type"></a>  
: Replicon type を選択します。

| Replicon type |
|---|
| Chromosome    |
| Plasmid       |
| Linkage Group |
| Segment       |
| Other         |

[Location](#Location)<a name="Location"></a>  
: レプリコンが存在する細胞内の場所。例: 核、分化した細胞内器官。真核生物、バクテリアや古細菌の染色体の場合 "Nuclear or Prokaryote" を使用します。

| Location              |
|---|
| Nuclear or Prokaryote |
| Macronuclear          |
| Nucleomorph           |
| Mitochondrion         |
| Kinetoplast           |
| Chloroplast           |
| Chromoplast           |
| Plastid               |
| Virion or Phage       |
| Proviral or Prophage  |
| Viroid                |
| Extrachrom            |
| Cyanelle              |
| Apicoplast            |
| Leucoplast            |
| Proplastid            |
| Hydrogenosome         |
| Chromatophore         |
| Other                 |

[Size](#Size)<a name="Size"></a>  
: 推定されるゲノムサイズとその単位。

[Description](#Replicon_description)<a name="Replicon_description"></a>  
: レプリコンの通常とは異なる特徴。

### Phenotype  {#Area_phenotype}

対象生物の表現型。

[Disease](#Disease)<a name="Disease"></a>  
: 病気の名前を記入します。

[Biotic Relationship](#BioticRelationship)<a name="BioticRelationship"></a>  
: 選択肢から BioticRelationship を選びます。

| BioticRelationship |
|---|
| FreeLiving         |
| Commensal          |
| Symbiont           |
| Episymbiont        |
| Intracellular      |
| Parasite           |
| Host               |
| Endosymbiont       |

[Trophic Level](#TrophicLevel)<a name="TrophicLevel"></a>  
: 選択肢から TrophicLevel を選びます。

| TrophicLevel |
|---|
| Autotroph    |
| Heterotroph  |
| Mixotroph    |

### Prokaryote Morphology  {#Area_prokaryote-morphology}

対象が原核生物の場合、形態について分かっている情報を記載してください。

[Shape](#Shape)<a name="Shape"></a>  
: 該当する全てのオプションを選びます。

| Shape        | Description                                          |
|---|
| Bacilli      | rod-shaped                                           |
| Cocci        | spherical-shaped                                     |
| Spirilla     | spiral-shaped                                        |
| Coccobacilli | elongated coccal form                                |
| Filamentous  | filament-shaped (bacilli thar occur in long threads) |
| Vibrios      | vibrio-shaped (short、slightly curved rods)          |
| Fusobacteria | fusiform or spindle-shaped (rods with tapered ends)  |
| SquareShaped |                                                      |
| CurvedShaped |                                                      |
| Tailed       |                                                      |

[Gram](#Gram)<a name="Gram"></a>  
: 選択肢からグラム陽性か陰性から選びます。

| Gram     |
|---|
| Positive |
| Negative |

[Motility](#Motility)<a name="Motility"></a>  
: 選択肢から Motility を選びます。

| Motility |
|---|
| Yes      |
| No       |

[Enveloped](#Enveloped)<a name="Enveloped"></a>  
: 対象生物の Envelope の有無を選択します。

| Enveloped |
|---|
| Yes       |
| No        |

[Endospores](#Endospores)<a name="Endospores"></a>  
: 対象生物が Endospores を形成するかどうかを選択します。

| Endospores |
|---|
| Yes        |
| No         |

### Ecological Environment  {#Area_ecological-environment}

生息環境。好極限性に関して分かっていることがあれば追加情報として記載します。

[Habitat](#Habitat)<a name="Habitat"></a>  
: 選択肢から Habitat を選択します。

| Habitat        |
|---|
| HostAssociated |
| Aquatic        |
| Terrestrial    |
| Specialized    |
| Multiple       |
| Unknown        |

[Salinity](#Salinity)<a name="Salinity"></a>  
: 選択肢から Salinity を選びます。

| Salinity           |
|---|
| NonHalophilic      |
| Mesophilic         |
| ModerateHalophilic |
| ExtremeHalophilic  |
| Unknown            |

[Oxygen requirement](#OxygenReq)<a name="OxygenReq"></a>  
: 酸素要求性を選択します。

| OxygenReq       |
|---|
| Aerobic         |
| Microaerophilic |
| Facultative     |
| Anaerobic       |
| Unknown         |

[Temperature range](#TemperatureRange)<a name="TemperatureRange"></a>  
: 生息温度での分類を選びます。

| TemperatureRange  |
|---|
| Cryophilic        |
| Psychrophilic     |
| Mesophilic        |
| Thermophilic      |
| Hyperthermophilic |
| Unknown           |

[Optimum Temperature](#OptimumTemperature)<a name="OptimumTemperature"></a>  
: 生息の最適温度を Celsius で記入します。

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
: PubMed ID がない場合は DOI を記入し、さらに文献に関する以下の情報を記入します。

```
<Publication id="10.1093/nar/gku1120">
  <DbType>eDOI</DbType>
</Publication>
<ProjectReleaseDate>
```

[Reference title](#BioProject_Reference_title)<span class="red">\*</span><a name="BioProject_Reference_title"></a>  
: 論文のタイトル。

[Journal title](#BioProject_Journal_title)<span class="red">\*</span><a name="BioProject_Journal_title"></a>  
: 雑誌のタイトル。

[Year](#BioProject_Year)<span class="red">\*</span><a name="BioProject_Year"></a>  
: 出版年。

[Volume](#BioProject_Volume)<span class="red">\*</span><a name="BioProject_Volume"></a>  
: 雑誌の巻。

[Issue](#BioProject_Issue)<span class="red">\*</span><a name="BioProject_Issue"></a>  
: 雑誌の号。

[Pages from](#BioProject_Pages_from)<span class="red">\*</span><a name="BioProject_Pages_from"></a>  
: 論文の開始ページ。

[Pages to](#BioProject_Pages_to)<span class="red">\*</span><a name="BioProject_Pages_to"></a>  
: 論文の終了ページ。

[First name](#BioProject_First_name_publication)<span class="red">\*</span><a name="BioProject_First_name_publication"></a>  
: 著者の first name。

[MI](#BioProject_MI)<a name="BioProject_MI"></a>  
: ミドルイニシャル。

[Last name](#BioProject_Last_name_publication)<span class="red">\*</span><a name="BioProject_Last_name_publication"></a>  
: 著者の last name。

[Suffix](#BioProject_Suffix)<a name="BioProject_Suffix"></a>  
: 著者の称号。

[This publication has multiple authors](#BioProject_This_publication_has_multiple_authors)<a name="BioProject_This_publication_has_multiple_authors"></a>  
: この項目をチェックすると記入された著者名の後に "et al" が付加されます。

## XML スキーマ  {#xml-schema}

[BioProject XML schema](https://github.com/ddbj/pub/tree/master/docs/bioproject)
