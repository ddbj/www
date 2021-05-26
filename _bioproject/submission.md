---
layout: tabbed_indexed_content
service_name: BioProject
title: DDBJ BioProject Handbook
category: bioproject
current_tab: handbook
lang: ja
---

## 概要  {#overview}

### 目的  {#purpose}

新しいシークエンシング技術が登場し、大量のデータが日々生み出されるようになっています。
これに伴い、大型の共同研究プロジェクトが増え、多くのグループが様々なデータを複数のデータベースに登録するようになっています。
BioProject は研究プロジェクトと [INSDC](http://www.insdc.org/)が運営するデータベースに存在するデータを管理します。
BioProject によりプロジェクトの種類や特徴といった項目でデータベースを横断してデータを検索することができるようになります。


{% include image.html url="submission/biosample_integration.jpg" caption="BioProject/BioSample と他の DDBJ データベースとの連携" class="w450" %}


### プロジェクト  {#project}

"Project" は複雑なプロジェクトや異なる特徴を持ったサブプロジェクトを表現できるよう、柔軟に定義されています。

例えば、以下のような研究に対して BioProject を作成することができます:

  - ゲノムシークエンシングとアセンブリ
  - メタゲノム
  - 転写産物シークエンシングと遺伝子発現
  - ターゲットローカスのシークエンシング
  - 遺伝学的もしくは RH マッピング
  - エピジェネティックス
  - 表現型と遺伝型
  - 変異の検出

BioProject は同じプロジェクトに由来するデータ、それからまとめて提供したいデータに対して作成します。
大型プロジェクトから産出されるデータの種類ごとにサブプロジェクトをつくることもできます。

### 複合プロジェクト  {#complex-project}

[Project Data Type](#Project_data_type) を複数選択 (例: Genome Sequencing と Transcriptome or Gene Expression) することで、ゲノムシークエンシングと遺伝子発現解析といった異なる研究を一つのプロジェクトにまとめることができます。

複数の生物種を対象としたプロジェクトの場合、[Organism name](#BioProject_Organism_name) には共通する階層までの生物分類 (例、属レベルまで) を記入します。

[Sample scope](#BioProject_Sample_scope)、[Material](#Material)、[Capture](#Capture) で該当するものがない場合は "Other" を選択します。

[Publication](#Publication) には複数の文献情報を記載することができます。

### プライマリープロジェクトとアンブレラプロジェクト {#primary-and-umbrella}

プロジェクトにはプライマリープロジェクトとアンブレラプロジェクトの二種類があります。

プライマリープロジェクト  
: 既に登録したデータ、または、これから登録しようとしているデータをまとめるために登録者が作成するプロジェクト。<span class="red">関連するデータが公開されるまで非公開にすることができます。</span>

アンブレラプロジェクト

: 関連性のあるプロジェクトを上位レベルでまとめるためのプロジェクト。アンブレラプロジェクトは特定のルールに従って自動的に作成されたり、データベーススタッフがユーザからのリクエストに基づいて作成したり、グループ化が必要なプロジェクトが同定された場合に作成されます。<span class="red">非公開にすることはできません。</span>

  アンブレラプロジェクトは大規模なプロジェクトや研究費の提供元が同一のプロジェクトといった関連するプロジェクトを上位レベルでまとめるために存在しています。プライマリープロジェクトは登録されているデータにリンクされ、さらに１つ以上のアンブレラプロジェクトにリンクすることができます。プライマリープロジェクト同士が直接リンクされることはなく、それらはアンブレラプロジェクトを介して間接的にリンクされます。

  <div class="attention">
  配列データはアンブレラプロジェクトを直接参照することはできません。プライマリープロジェクトを介してアンブレラにリンクされます。
  </div>

### 階層構造  {#bioproject-hierarchy}

アンブレラプロジェクトは研究費の提供元と協力してつくることができます。 例えば、最上位にコンソーシアム全体をまとめるアンブレラプロジェクト (例: "Genome Science Project") を作成し、その下にコンソーシアムを構成するサブプロジェクトに対するプライマリープロジェクト (例: reference genomes、rRNA sequencing、metagenomes など) を作成することができます。

いくつかの大規模プロジェクトを１つ以上のアンブレラプロジェクトで表すことができます。最上位レベルで共同研究プロジェクト全体を表し、二段目で産出されるデータの種類に対してアンブレラプロジェクトを作成、最後の三段目で実際に登録されるデータにリンクされるプライマリープロジェクトを作成する、といった構成です。


{% include image.html url="submission/bp_org.jpg" caption="階層構造の模式図。(A)二階層 (B)三階層" class="w500" %}


二階層 (A)  
: コンソーシアムは１つのアンブレラプロジェクトとデータにリンクされた１つ以上のプライマリープロジェクトから構成されます。例: [Neanderthal Metagenome](https://www.ncbi.nlm.nih.gov/bioproject/18309)

三階層 (B)  
: いくつかのサブプロジェクトを持つ巨大プロジェクトは二階層のアンブレラプロジェクトで構成することができます。最上位のアンブレラプロジェクトでコンソーシアム全体を表し、中位レベルのアンブレラプロジェクトでプロジェクトのコンポーネントを表し、最下段の複数のプライマリープロジェクトで異なるプロジェクトのデータタイプを表す場合などです。例: [NIH Human Microbiome Project (HMP) Roadmap Project](https://www.ncbi.nlm.nih.gov/bioproject/43021)

### データ公開 {#data-release}


{% include image.html url="submission/release_re.jpg" caption="プライマリープロジェクトとデータレコードの公開の仕組み" class="w500" %}

DDBJ BioProject に登録されたプライマリープロジェクトは「即日公開」もしくは「非公開」にすることができます。

「非公開」の場合、登録されたプライマリープロジェクトはリンクされている DDBJ、DRA、GEA レコードが公開されるまで非公開に保たれます。プロジェクトデータの公開予定日を設定することはできません。 プライマリープロジェクトはリンクされている DDBJ レコードが公開されると自動的に公開されます。 一方、プライマリープロジェクトの公開はリンクされている DDBJ レコードの公開を引き起こしません。あるプライマリープロジェクトにおいて、リンクされているレコードの公開は同一プロジェクトに属している他のレコードの公開を引き起こしません。DDBJ レコードの公開はリンクしているプロジェクトの公開とは独立しています。

FAQ: [BioProject/BioSample/塩基配列データの連動公開の仕組みは？](/faq/ja/bp-bs-seq-release.html)

{% include image.html url="submission/um_pri_visibility.jpg" caption="アンブレラプロジェクトとプライマリープロジェクト間の関係の可視性" class="w500" %}

<span class="red">アンブレラプロジェクトは非公開にすることができません。</span>  
アンブレラプロジェクトは公開されているプライマリープロジェクトと非公開のプロジェクトの両者を持つことができます。第三者は公開されているアンブレラプロジェクトと非公開のプライマリープロジェクト間の関係を見ることはできません。

公開されたプロジェクトデータは [NCBI](https://www.ncbi.nlm.nih.gov/bioproject) と [EBI](https://www.ebi.ac.uk/) の BioProject データベースと交換されます。

データの公開を希望する場合、DDBJ/DRA/GEA データに対するアクセッション番号で公開対象を指定します。BioProject アクセッション番号のみが指定された場合、当該 BioProject のみが公開され、関連データは公開されません。同様に BioSample アクセッション番号のみが指定された場合、当該 BioSample のみが公開され、関連データは公開されません。

### アンブレラプロジェクトの活用  {#use-umbrella-project}

アンブレラプロジェクトを使って関連するプライマリープロジェクトをまとめてください。アンブレラを活用することでプロジェクトからの研究成果をまとめて表示することができます。

アンブレラプロジェクトの例  
[Neanderthal Metagenome](https://www.ncbi.nlm.nih.gov/bioproject/18309)  
[Escherichia coli O104:H4](https://www.ncbi.nlm.nih.gov/bioproject/68275)

アンブレラプロジェクトは通常のプライマリープロジェクトと同様[登録アカウントシステム](https://ddbj.nig.ac.jp/D-way/)から登録します。<span class="red">登録の際には必ず [Private comments to DDBJ staff](/bioproject/submission.html#Private_comments) にこの登録がアンブレラであることを記入し DDBJ BioProject チームに伝えてください。 </span> アンブレラプロジェクトを非公開にすることはできません。

アンブレラ単位でプライマリープロジェクトをまとめる場合、次の手順で行ってください。  
まずはアンブレラを登録し、公開します。必要に応じて、登録者以外の関係者にもアンブレラに付与された PRJDB 番号を周知してください。

以降、関連するプライマリープロジェクトを登録する際には [Umbrella BioProject](/bioproject/submission.html#Area_linked-project) に親となるアンブレラの PRJDB 番号を記入してください。 登録したプライマリープロジェクトが公開されると、自動的に指定したアンブレラに関連付けられます。

過去に登録したプライマリープロジェクトをアンブレラの傘下に追加したい場合は、アンブレラと追加したいプライマリープロジェクトの PRJDB 番号を [DDBJ BioProject にお知らせください](/contact-ddbj.html)。

<span class="red">公開されているアンブレラに関連付けたことによって非公開のプライマリープロジェクトが公開されることはありません。</span>

## メタデータ {#metadata} 

必須<span class="red">\*</span>  
条件によって必須<span class="conditionally_required">\*</span>

### Submitter  {#Submitter}

#### Submitter  {#Area_bioproject-submitter}

登録者情報。登録に関する連絡はここに記載された E-mail アドレス宛てに行われます。 必要な人数分作成します。 連絡先情報は DDBJ BioProject スタッフが登録者に連絡するために使われ、一般に公開されることはありません。連絡先情報の代わりに研究者の所属する組織に関する情報が公開されます。

[First name](#BioProject_First_name)<a name="BioProject_First_name"></a>
: 登録者の first name。

<!-- end list -->

[Last name](#BioProject_Last_name)<span class="red">\*</span><a name="BioProject_Last_name"></a>  
: 登録者の last name。

<!-- end list -->

[E-mail](#BioProject_E-mail)<span class="red">\*</span><a name="BioProject_E-mail"></a>   
: E-mail アドレス。所属する組織ドメインのメールアドレスを指定してください。

#### Organization  {#Area_organization}

コンタクトパーソンが所属する組織。

[Submitting organization](#BioProject_Submitting_organization)<span class="red">\*</span><a name="BioProject_Submitting_organization"></a>  
: 組織のフルネーム。

<!-- end list -->

[Submitting organization URL](#BioProject_Submitting_organization_URL)<a name="BioProject_Submitting_organization_URL"></a>  
: 登録者が所属する組織の URL。

#### Data Release  {#Area_data-release}

"Hold" か "Release" のどちらかを選びます。公開予定日を指定することはできません。データ公開の仕組みについては[プロジェクトの公開](#project-release)をご覧ください。

[Hold](#BioProject_Hold)<a name="BioProject_Hold"></a>  
: この BioProject ID を引用している DDBJ、DRA、GEA　レコードが公開されたときに同時に公開されます。

<!-- end list -->

[Release](#BioProject_Release)<a name="BioProject_Release"></a>  
: プロジェクトデータを即日公開する。この BioProject ID を引用している非公開の DDBJ レコードが公開されることはありません。

### General info  {#General-info}

#### Project Description  {#Area_project-description}

プロジェクト内容を記述します。

[Project title](#Project_title)<span class="red">\*</span><a name="Project_title"></a>  
: プロジェクトの内容を表す短いタイトル。このタイトルは公開されたプロジェクトのタイトルとして使われます。例: Chromosome Y sequencing、Global studies of microbial diversity on human skin.

<!-- end list -->

[Description](#Public_description)<span class="red">\*</span><a name="Public_description"></a>  
: 研究対象やゴールに関する記載。第三者がデータを解釈することができるように十分な量 (100 文字以上) の情報を記入します。

<!-- end list -->

[Private comments to DDBJ staff](#Private_comments)<a name="Private_comments"></a>
: データベーススタッフへの質問、プロジェクトに関する追加情報を記入します。内容は公開されません。アンブレラプロジェクトを登録する場合、ここにその旨を記載します。

<!-- end list -->

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

<!-- end list -->

[Relevance description](#Relevance_description)<span class="conditionally_required">\*</span><a name="Relevance_description"></a>  
: Other を選択したときはここに Relevance を記入します。

#### Umbrella BioProject {#Area_linked-project}

登録しようとしているプロジェクトが既に登録されているアンブレラプロジェクトに属する場合、そのアンブレラプロジェクトのアクセッション番号と概要を記入します。この情報は[プロジェクトのリンク](#primary-and-umbrella)のために必要です。

[Initiative description](#Initiative_description)<span class="conditionally_required">\*</span><a name="Initiative_description"></a>  
: アンブレラプロジェクトについての記述。

<!-- end list -->

[Umbrella BioProject accession](#BioProject_BioProject_ID)<span class="conditionally_required">\*</span><a name="BioProject_BioProject_ID"></a>  
: 登録されているアンブレラプロジェクトのアクセッション番号。

#### External Links  {#Area_external-links}

プロジェクトに直接関連するリソースの URL とそれに付ける表示名。

[Link description](#URL_link_description)<a name="URL_link_description"></a>  
: プロジェクトに関連するウェブサイトの表示名。

<!-- end list -->

[URL](#BioProject_URL)<a name="BioProject_URL"></a>  
: プロジェクトに関連するウェブサイトの URL。

#### Grants  {#Area_grants}

プロジェクトの研究費に関する情報。

[Agency](#Agency)<a name="Agency"></a>  
: 研究費助成機関の名前。例: Japan Society for the Promotion of Science。

<!-- end list -->

[Agency abbreviation](#Agency_abbreviation)<a name="Agency_abbreviation"></a>  
: 研究助成機関の名前の略称。例: JSPS。

<!-- end list -->

[Grant ID](#Grant_ID)<a name="Grant_ID"></a>  
: 研究費の番号 (関連文献で引用される研究費番号)。研究費番号での検索をサポートします。例: JSPS KAKENHI Grant Number 12345678

<!-- end list -->

[Grant title](#Grant_title)<a name="Grant_title"></a>  
: 研究費のタイトル。研究費のタイトルでの検索をサポートします。

#### Consortium  {#Area_consortium}

[Consortium name](#Consortium_name)<a name="Consortium_name"></a>  
: 研究がコンソーシアムの一環として行われた場合、そのコンソーシアム名を記入します。

<!-- end list -->

[Consortium URL](#Consortium_URL)<a name="Consortium_URL"></a>  
: コンソーシアムのウェブサイトがある場合そのサイトの URL を記入します。

### Project type  {#Project-type}

#### Project data type {#Project_data_type}

[Project data type](#Project_data_type)<span class="red">\*</span><a name="Project data type"></a>

: Project の分類。以下の選択肢から該当する type を選びます。複数選択することができます。[News: Project data type を複数選択できるようになりました](/news/ja/2014-11-12.html)

  NCBI ではプロジェクトにリンクしている実験データから独自に [Project data type](https://www.ncbi.nlm.nih.gov/books/NBK54364/def-item/project-data-type/) を割り振っています。また、[EBI](https://www.ebi.ac.uk/ena/submit/project-format) では Project data type を使用していません。

  | Project Data type                | Description                                                                                    |
  |---|
  | Genome Sequencing                | 全ゲノムや部分ゲノム塩基配列決定プロジェクト (ゲノムアセンブリの有無は問わない)                                                      |
  | Clone Ends                       | クローンエンド塩基配列決定プロジェクト                                                                            |
  | Epigenomics                      | メチル化, ヒストン修飾, クロマチン構造に関するデータセット                                                                |
  | Exome                            | エクソームリシークエンシングプロジェクト                                                                           |
  | Map                              | 塩基配列ではないマップデータをもたらすプロジェクト (genetic map, radiation hybrid map, cytogenetic map, optical map など) |
  | Metagenome                       | 環境サンプルの配列解析                                                                                    |
  | Phenotype and Genotype           | 表現型と遺伝子型の相関を解析するプロジェクト                                                                         |
  | Proteome                         | マススペクトロメトリー解析を含む大規模プロテオミクス実験                                                                   |
  | Random Survey                    | ランダムに収集した (対象の包括的なサンプリングを目的としていない) サンプルから得られた配列                                                |
  | Targeted Locus (Loci)            | 特定の遺伝子座 (16S rRNA など) の塩基配列決定プロジェクト                                                            |
  | Transcriptome or Gene Expression | cDNA, EST, RNA-seq, マイクロアレイ実験を含む大規模 RNA 塩基配列決定や発現解析                                            |
  | Variation                        | 集団間に存在する大小の変異を同定することを目的としたプロジェクト                                                               |
  | Other                            | ”Project data type description” に Project Data Type を記入します。                                    |

<!-- end list -->

[Project data type description](#Project_data_type_description)<span class="conditionally_required">\*</span><a name="Project_data_type_description"></a>  
: Other を選択したときは Project data type をここに記入します。

#### Sample scope&#047;Material&#047;Capture&#047;Methodology

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

<!-- end list -->

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

<!-- end list -->

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

<!-- end list -->

[Target description](#Target_description)<span class="conditionally_required">\*</span><a name="Target_description"></a>  
: Other を選択したときに Sample scope/Material/Capture を記入します。

<!-- end list -->

[Methodology](#Methodology)<span class="red">\*</span><a name="Methodology"></a>  
: データを得るために使われた主要な手法。

  | Methodology       | Description                                   |
  |---|
  | Sequencing        | Sanger、454 や Illumina などを使ったシークエンシング          |
  | Array             | ハイブリダイゼーションアレイ                                |
  | Mass Spectroscopy | マススペクトロメトリー                                   |
  | Other             | "Methodogy description" に Methodology を記入します。 |

<!-- end list -->

[Methodology description](#Methodology_description)<span class="conditionally_required">\*</span><a name="Methodology_description"></a>  
: Other を選択したときに Methodology type を記入します。

#### Objective  {#Area_objective}

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

#### Locus tag prefix  {#Area_locus-tag-prefix}

[Locus tag prefix](#Locus_tag_prefix)<span class="conditionally_required">\*</span><a name="Locus_tag_prefix"></a>

: \[Project data type="Genome Sequencing" or "Metagenome"\] AND \[Capture="Whole"\] AND \[Objective="Sequence" or "Annotation" or "Assembly"\] で Locus tag prefix 入力ボックスが現れます。 ゲノムをアセンブルするプロジェクトでは、アセンブリに対してユニークな locus tag prefix が必要です。[WGS](/ddbj/wgs.html) の登録のみで prefix を使用しない場合は入力欄を空にしてください。

  [Locus tag prefix について](/ddbj/locus_tag.html)

  Locus tag prefix のフォーマット  
  Locus tag prefix には３文字以上の英数字のみを含めることができます。先頭は英文字にします。数字は２文字目以降で使用できます(例: A1C)。 シンボル (-\_\*) を含めることはできません。 Locus tag prefix とタグの値はアンダースコア '\_' で区切ります (例: A1C\_00001)。

  DDBJ BioProject 独自に最大タグ長を12文字に制限しています。小文字は大文字に変換されて表示されますが、実際には locus tag は大文字・小文字の区別なく予約されます。

### Target  {#Target}

#### Organism information  {#Area_organism-information}

対象生物の分類や記述。

[Organism name](#BioProject_Organism_name)<span class="red">\*</span><a name="BioProject_Organism_name"></a>

: [Taxonomy データベース](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html)に登録されている生物名。メタゲノムや環境サンプルなどの生物名を特定できないサンプルについては[こちらのリスト](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908&lvl=3&lin=f&keep=1&srchmode=1&unlock)を参考にしてください。

  複数の生物種を対象としたプロジェクトの場合、共通する階層までの生物分類 (例 属レベルまで) を記入してください。

  [Taxonomy データベース](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html) に該当する生物が登録されていない場合は、Novel organism を選択し [Description of novel organism](#Novel_organism) に[新規生物に関する参考情報](/ddbj/organism.html)、Organism Name に希望する生物名を記入します。

<!-- end list -->

[Taxonomy ID](#BioProject_Taxonomy_ID)<a name="BioProject_Taxonomy_ID"></a>  
: [NCBI Taxonomy ID](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html)

<!-- end list -->

[Strain, breed, cultivar](#Strain_breed_cultivar)<a name="Strain_breed_cultivar"></a>  
: 微生物の株名、もしくは真核生物の品種や栽培品種。この情報、もしくは "Isolate name or label" を提供してください。

<!-- end list -->

[Isolate name or label](#Isolate_name_label)<a name="Isolate_name_label"></a>  
: 単離されたサンプルのラベル名、もしくは個々の動物の名前 (例: Clint)。この情報、もしくは "Strain, breed, cultivar" を提供してください。

<!-- end list -->

[Description](#BioProject_Description)<a name="BioProject_Description"></a>  
: Label に対する簡潔な補足情報。

<!-- end list -->

[Description of novel organism](#Novel_organism)<a name="Novel_organism"></a>
: [Taxonomy データベース](https://www.ncbi.nlm.nih.gov/Taxonomy/) への生物登録を申請するための情報を記入します。

#### Environmental sample information  {#Area_environmental-sample-information}

Target の Sample scope="Environment" のときに [Organism information](#BioProject_Organism_name) に替わって表示されます。

[Environmental sample name](#Environmental_sample_name)<span class="red">\*</span><a name="Environmental_sample_name"></a>  
: メタゲノムや環境サンプルなどの生物名を特定できないサンプルについては[こちらのリスト](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908&lvl=3&lin=f&keep=1&srchmode=1&unlock)から該当するものを選択します。該当するものがない場合は,登録を希望する名前を記載し、サンプルの詳細を[Environmental sample description](#Environmental_sample_description) に記載します。

<!-- end list -->

[Environmental sample description](#Environmental_sample_description)<a name="Environmental_sample_description"></a>  
: サンプルの詳細を記載します。

#### General Properties  {#Area_general-properties}

対象生物の一般的な性質。

[Cellularity](#Cellularity)<a name="Cellularity"></a>  
: 選択肢から Cellularity を選びます。

  | Cellularity   |
  |---|
  | Unicellular   |
  | Multicellular |
  | Colonial      |

<!-- end list -->

[Reproduction](#Reproduction)<a name="Reproduction"></a>  
: 選択肢から Reproduction を選びます。

  | Reproduction |
  |---|
  | Sexual       |
  | Asexual      |

<!-- end list -->

[Haploid genome size](#Haploid_genome_size)<a name="Haploid_genome_size"></a>  
: Kb、Mb や cM で表したハプロイドゲノムのサイズ。

<!-- end list -->

[Ploidy](#Ploidy)<a name="Ploidy"></a>  
: 選択肢から Ploidy を選びます。

  | Ploidy        |
  |---|
  | Haploid       |
  | Diploid       |
  | Polyploid     |
  | Allopolyploid |

#### Organism Replicons  {#Area_organism-replicons}

対象となる生物が持っているレプリコンの数、その名前 (例: 1、2、3 や I、II、III)、レプリコンの種類 (chromosome など) やレプリコンが存在する細胞内構造。

[Name](#Replicon_name)<a name="Replicon_name"></a>  
: 標準的なレプリコン名。

<!-- end list -->

[Type](#Replicon_type)<a name="Replicon_type"></a>  
: Replicon type を選択します。

  | Replicon type |
  |---|
  | Chromosome    |
  | Plasmid       |
  | Linkage Group |
  | Segment       |
  | Other         |

<!-- end list -->

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

<!-- end list -->

[Size](#Size)<a name="Size"></a>  
: 推定されるゲノムサイズとその単位。

<!-- end list -->

[Description](#Replicon_description)<a name="Replicon_description"></a>  
: レプリコンの通常とは異なる特徴。

#### Phenotype  {#Area_phenotype}

対象生物の表現型。

[Disease](#Disease)<a name="Disease"></a>  
: 病気の名前を記入します。

<!-- end list -->

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

<!-- end list -->

[Trophic Level](#TrophicLevel)<a name="TrophicLevel"></a>  
: 選択肢から TrophicLevel を選びます。

  | TrophicLevel |
  |---|
  | Autotroph    |
  | Heterotroph  |
  | Mixotroph    |

#### Prokaryote Morphology  {#Area_prokaryote-morphology}

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
  | Vibrios      | vibrio-shaped (short, slightly curved rods)          |
  | Fusobacteria | fusiform or spindle-shaped (rods with tapered ends)  |
  | SquareShaped |                                                      |
  | CurvedShaped |                                                      |
  | Tailed       |                                                      |

<!-- end list -->

[Gram](#Gram)<a name="Gram"></a>  
: 選択肢からグラム陽性か陰性から選びます。

  | Gram     |
  |---|
  | Positive |
  | Negative |

<!-- end list -->

[Motility](#Motility)<a name="Motility"></a>  
: 選択肢から Motility を選びます。

  | Motility |
  |---|
  | Yes      |
  | No       |

<!-- end list -->

[Enveloped](#Enveloped)<a name="Enveloped"></a>  
: 対象生物の Envelope の有無を選択します。

  | Enveloped |
  |---|
  | Yes       |
  | No        |

<!-- end list -->

[Endospores](#Endospores)<a name="Endospores"></a>  
: 対象生物が Endospores を形成するかどうかを選択します。

  | Endospores |
  |---|
  | Yes        |
  | No         |

#### Ecological Environment  {#Area_ecological-environment}

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

<!-- end list -->

[Salinity](#Salinity)<a name="Salinity"></a>  
: 選択肢から Salinity を選びます。

  | Salinity           |
  |---|
  | NonHalophilic      |
  | Mesophilic         |
  | ModerateHalophilic |
  | ExtremeHalophilic  |
  | Unknown            |

<!-- end list -->

[Oxygen requirement](#OxygenReq)<a name="OxygenReq"></a>  
: 酸素要求性を選択します。

  | OxygenReq       |
  |---|
  | Aerobic         |
  | Microaerophilic |
  | Facultative     |
  | Anaerobic       |
  | Unknown         |

<!-- end list -->

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

<!-- end list -->

[Optimum Temperature](#OptimumTemperature)<a name="OptimumTemperature"></a>  
: 生息の最適温度を Celsius で記入します。

### Publication {#Publication} 

[PubMed ID](#BioProject_PubMed_ID)<a name="BioProject_PubMed_ID"></a>  
: 文献の PubMed ID(s)。

  ```
  <Publication id="15557739">
    <DbType>ePubmed</DbType>
  </Publication>
  <ProjectReleaseDate> ...
  ```

<!-- end list -->

[DOI](#BioProject_DOI)<a name="BioProject_DOI"></a>  
: PubMed ID がない場合は DOI を記入し、さらに文献に関する以下の情報を記入します。

  ```
  <Publication id="10.1093/nar/gku1120">
    <DbType>eDOI</DbType>
  </Publication>
  <ProjectReleaseDate> ...
  ```

<!-- end list -->

[Reference title](#BioProject_Reference_title)<span class="red">\*</span><a name="BioProject_Reference_title"></a>  
: 論文のタイトル。

<!-- end list -->

[Journal title](#BioProject_Journal_title)<span class="red">\*</span><a name="BioProject_Journal_title"></a>  
: 雑誌のタイトル。

<!-- end list -->

[Year](#BioProject_Year)<span class="red">\*</span><a name="BioProject_Year"></a>  
: 出版年。

<!-- end list -->

[Volume](#BioProject_Volume)<span class="red">\*</span><a name="BioProject_Volume"></a>  
: 雑誌の巻。

<!-- end list -->

[Issue](#BioProject_Issue)<span class="red">\*</span><a name="BioProject_Issue"></a>  
: 雑誌の号。

<!-- end list -->

[Pages from](#BioProject_Pages_from)<span class="red">\*</span><a name="BioProject_Pages_from"></a>  
: 論文の開始ページ。

<!-- end list -->

[Pages to](#BioProject_Pages_to)<span class="red">\*</span><a name="BioProject_Pages_to"></a>  
: 論文の終了ページ。

<!-- end list -->

[First name](#BioProject_First_name_publication)<span class="red">\*</span><a name="BioProject_First_name_publication"></a>  
: 著者の first name。

<!-- end list -->

[MI](#BioProject_MI)<a name="BioProject_MI"></a>  
: ミドルイニシャル。

<!-- end list -->

[Last name](#BioProject_Last_name_publication)<span class="red">\*</span><a name="BioProject_Last_name_publication"></a>  
: 著者の last name。

<!-- end list -->

[Suffix](#BioProject_Suffix)<a name="BioProject_Suffix"></a>  
: 著者の称号。

<!-- end list -->

[This publication has multiple authors](#BioProject_This_publication_has_multiple_authors)<a name="BioProject_This_publication_has_multiple_authors"></a>  
: この項目をチェックすると記入された著者名の後に "et al" が付加されます。

### XML スキーマ  {#xml-schema}

[BioProject XML schema](https://github.com/ddbj/pub/tree/master/docs/bioproject)

# BioProject への登録

  
  <div class="attention" markdown="1">
  ヒトを対象とした研究データの登録について
  : <span class="red">研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#submission-of-human-data)を熟読してください。</span>
  </div>

## プロジェクトの登録  {#project-submission}

### プロジェクトの登録が必要な場合  {#project-registration}

BioProject への登録は次のような場合は必須です。

  - [Sequence Read Archive](/dra/index.html) に登録する場合
  - DDBJ に微生物や真核生物のゲノムを登録する場合

BioProject への登録は次のような場合に推奨しています。

  - 登録するデータの量が非常に大きい場合
  - 共同研究プロジェクトに参画している複数のメンバーがそれぞれのデータを登録する場合
  - データが複数のデータベースにまたがって登録される場合

BioProject への登録は次のような場合は必須ではありません。必要に応じて登録します。

  - 単一のプラスミド、ウイルスやオルガネラゲノムのシークエンスといった１つ (もしくは少数の) アクセッション番号しかリンクされない場合


<div class="attention" markdown="1">
[INSDC はゲノムが登録される微生物に対して strain-level taxonomy ID を新規発行していません。](/news/ja/2014-02-12.html)[BioSample ID](/biosample/index.html) で区別されることになります。
</div>

### 新規プロジェクトの登録  {#new-bioproject-submission}

[アカウント Handbook](/account.html) に従いアカウントを取得します。

[D-way (https://ddbj.nig.ac.jp/D-way)](https://ddbj.nig.ac.jp/D-way/)
にログインします。ウェブサイトの上部にある "BioProject" メニューから BioProject 登録ページに移動します。BioProject ページ内の \[New submission\] をクリックし、新規プロジェクト登録を作成します。

<div class="attention">
DDBJ センターから登録者に問い合わせた後三か月以上回答が無い場合は Submission をキャンセルいたします。
</div>


{% include image.html url="books/hbp-01.jpg" caption="BioProject の新規登録作成" class="w450" %}


BioProject を新規登録する場合は左のタブから順番に内容を英語で入力していきます。 [各項目の説明](#metadata)


{% include image.html url="books/hbp-02.jpg" caption="プロジェクトの入力" class="w450" %}


ゲノムをアセンブルするプロジェクトでは、アセンブリに対してユニークな [Locus tag prefix](/ddbj/locus_tag.html) が必要です。

\[Project data type="Genome Sequencing" or "Metagenome"\] AND \[Capture="Whole"\] AND \[Objective="Sequence" or "Annotation" or "Assembly"\] で Locus tag prefix 入力ボックスが現れます。

プレフィックスには３-12文字の英数字のみを含めることができます。先頭は英文字にします。数字は２文字目以降で使用できます (例: A1C)。シンボル (-\_\*) を含めることはできません。プレフィックスとタグの値はアンダースコア '\_' で区切ります (例: A1C\_00001)。

[WGS](/ddbj/wgs.html) の登録のみで prefix を使用しない場合は入力欄を空にしてください。

prefix は NCBI が一括管理しています。プロジェクトを投稿する段階で、NCBI に prefix を予約しにいきます。予約済みの場合はエラーになるので、再度希望する prefix を入力して投稿します。

<div class="attention" markdown="1">
複数の prefix の取得を希望する場合は [BioProject チームに連絡します](/contact-ddbj.html)。
</div>


{% include image.html url="books/hbp-03.jpg" caption="Locus tag prefix の取得" class="w450" %}


最後の "OVERVIEW" で内容を確認したうえで \[Submit\] をクリックして投稿します。


{% include image.html url="books/hbp-04.jpg" caption="BioProject の投稿" class="w450" %}


"OVERVIEW" には初回投稿時の内容が表示され続けます。登録後の更新は反映されませんので、ご注意ください。

### アクセッション番号  {#accession-number}

ウェブから投稿されたデータに対して PSUB で始まる仮 ID が自動的に割り当てられます。正式なアクセッション番号が発行されるまでは、この仮 ID で登録を参照します。 DDBJ BioProject スタッフはデータを査定した後、完成したデータに対してプレフィックス "PRJD" のアクセッション番号を発行します。 [D-way](https://ddbj.nig.ac.jp/D-way/) にログイン後、ウェブ上で登録したプロジェクトの進行状況やアクセッション番号を確認することができます。

  <div class="attention">
  - PSUB で始まる仮 ID を論文中に引用しないでください。<br>
  - EBI/NCBI に登録したプロジェクトを DDBJ に重複して登録しないでください。
  </div>

### アンブレラプロジェクトの登録  {#submit-umbrella-project}

アンブレラプロジェクトは通常のプライマリープロジェクトと同様 [D-way](https://ddbj.nig.ac.jp/D-way/) から登録します。 <span class="red">登録の際には必ず [Private comments to DDBJ staff](#Private_comments) にこの登録がアンブレラであることを記入し DDBJ BioProject チームに伝えてください。 </span>アンブレラプロジェクトを非公開にすることはできません。


{% include image.html url="books/hbp-05.jpg" caption="アンブレラプロジェクトの登録" class="w450" %}


### アンブレラプロジェクトへのリンク  {#link-primary-project-umbrella}

プライマリープロジェクトを登録する際、[Umbrella BioProject](#Area_linked-project) にリンクすべきアンブレラプロジェクトの概要とアクセッション番号を記入します。 BioProject スタッフは記入内容をみて、プロジェクトをアンブレラにリンクする作業を行います。


{% include image.html url="books/hbp-06.jpg" caption="アンブレラへのリンク" class="w450" %}


### プロジェクトの公開 {#project-release} 

以下の選択肢があります:

  - 査定が終わった後すぐに公開
  - BioProject アクセッション番号を引用しているデータと同時に公開

<div class="attention">
公開予定日は設定することができません。
</div>

登録したプロジェクトは非公開にすることができます。 DDBJ レコードが公開されると、引用されている BioProject データは自動的に公開されます。この BioProject アクセッション番号を引用している非公開の DDBJ レコードが公開されることはありません。[プロジェクトの連動公開について](#data-release)

公開された BioProject レコードは [NCBI](https://www.ncbi.nlm.nih.gov/bioproject) と [EBI](https://www.ebi.ac.uk/) BioProject データベースと交換されます。

### プロジェクトの更新  {#update}

登録が完了したデータを更新することができます。[メッセージフォーム](/contact-ddbj.html)よりご連絡ください。

### プロジェクトと配列データのリンク  {#link-experimental-data-project}

DRA にデータを登録する場合は、事前に登録した BioProject アクセッション番号を Study でリストから選択します。

DDBJ にゲノム、TSA データ等を登録する場合は、アノテーションファイルの DBLINK 行に BioProject アクセッション番号を記入します。
