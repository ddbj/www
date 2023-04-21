---
layout: tabbed_indexed_content
service_name: BioSample
title: BioSample 概要
category: biosample
current_tab: submission
lang: ja
---

## BioSample の目的  {#purpose}

BioSample はデータベースに登録する実験データを得るために使われた生物学的な試料やサンプルに対するレコードです。

以下の図は BioSample がどのように他の DDBJ のデータベースとリンクしているかを示しています。 この例は、データと二つの BioSample、三つの BioProject、一つの Umbrella BioProject から構成されています。ユーザは BioProject または BioSample データベースを検索し、目的のレコードを取得、そこからのリンクをたどることによって [DDBJ](/ddbj/index.html)/[DRA](/dra/index.html)/[GEA](/gea/index.html)/[MetaboBank](/metabobank/index.html) に登録されている関連する実験データを得ることができます。

{% include image.html url="submission/biosample_integration.jpg" caption="BioSample と他の DDBJ データベースとの連携" class="w450" %}

## サンプル  {#sample}

データベースに登録されるサンプルが多様であること、また、サンプルの適切な記載方法が研究内容により異なることから BioSample の定義は柔軟なものになっています。
BioSample の典型的な例としては細胞株、組織の生検、生物個体や環境サンプルなどが挙げられます。

BioSample はサンプルに関する以下のような情報を含みます。

- 生物種
- 採取された生物試料、例: 器官、組織、セルタイプ
- 表現型 - 疾患や個人の医学的な情報など

ヒトに関する情報とそれへのアクセスは適用される全ての倫理的な要請を満たしている必要があります。  
DDBJ BioSample データベースはアクセスを制限する仕組みを持っていないため、プライバシーに抵触する可能性のあるヒト由来サンプルを登録することはできません。そのようなサンプルはアクセス制限の仕組みを備えた [JGA](/jga/index.html) に登録してください。

## サンプルの粒度 {#granularity}

一般的に、生物学的な試料に対して BioSample を作成し、そこから抽出された核酸、代謝物などの抽出物は [DRA](/dra/metadata.html)、[GEA](/gea/metadata.html) や [MetaboBank](/metabobank/metadata.html) のメタデータで表します。

- biological replicate はサンプルを分けて biological_replicate 属性で区別します。例 "biological_replicate = 1" と "biological_replicate = 2" 例 [DRA の構成](/dra/metadata.html#ex_replicates)
- technical replicate はサンプルを分けず、DRA Experiment/GEA SDRF/MetaboBank SDRF で分けます。
- 植物の葉から調整した RNA、代謝物サンプルは葉に対応する BioSample を一つ作成し、抽出物は [GEA](/gea/metadata.html) や [MetaboBank](/metabobank/metadata.html) メタデータで表現します。
- 同じサンプルから調整した paired-end library をシークエンスした場合、forward と reverse で BioSample を分けずに一つの DRA Run に両ペアードファイルを含めます。[DRA の構成](/dra/submission.html#ex_samples)
- 同じサンプルを異なる機種でシークエンスした場合、異なる [Instrument model](/dra/submission.html#Instrument) を持つ複数の DRA Experiment を一つの BioSample にリンクします。
- ユニークなサンプル源に対し、別々の BioSample を登録します。例えば、羽から調整した RNA と肢から調整した RNA は、両者が別々にシークエンスされている場合、別個の BioSample になります。
- [ゲノムアセンブリ用サンプル](/biosample/genome-assembly-sample.html)はゲノム配列にのみ必要な locus tag prefix などがあるため、RNA や代謝物サンプルとは別にします。

登録例
- 海水中のある採取地点から得られた 23,000 本のユニークな 16S 増幅配列 - 1 BioSample（１サンプルが採取され、16S の多様性が解析された）
- 同じ薬物で処理された三匹の「同一」なトランスジェニックマウス - 3 BioSamples（biological replicate は BioSample で区別）
- 遺伝子発現レベルの経時的な変化を解析するため、ウイルスに感染させた CHO 細胞を 0、2、4、8 時間後にサンプリング - 4 BioSamples（4 タイムポイント）
- 発現している遺伝子の差異を組織毎に調べるため、オスのアリクイ一個体から採取した脳、心臓、肺、精巣、肝臓 - 5 BioSamples（５つの異なる組織）

## サンプルの属性 {#sample-attributes}

BioSample レコードを構成する主要部分は「サンプル属性」です。属性にはセルタイプ、採取地や表現型などの情報を記載することができ、対象となるサンプルを定義します。BioSample の属性は構造化された「属性名:値」 (name:value) の組として表現されます。例) tissue:liver  
BioSample は属性名にコントロールされた語句 ("辞書") を使うことをサポートしており、サンプル種別に応じた属性セットをパッケージとして提供しています。  

## サンプルパッケージ {#package}

BioSample ではサンプルや配列種別に応じた必須・任意属性から構成されるパッケージを提供し、サンプル記載の充実化と属性名の標準化を促しています。  

* パッケージの選び方は[サンプル情報](/biosample/sample-info.html#Sample-type)を参照してください。
* パッケージで提供されるサンプル属性は[サンプル属性](/biosample/attribute.html)を参照してください。

パッケージはサンプルの適切な記述を促すための仕組みであり、サンプル情報の解釈のためには実際に使用される属性の方が重要です。そのため過去に登録したサンプルとパッケージが合っていなくても、使用されている属性が適切であれば、パッケージを無理に変更する必要はありません。

## 生物名  {#organism}

BioSample の [organism](/biosample/attribute.html?all=all#organism) に記載する生物名については「[生物名について](/ddbj/organism.html)」をご覧ください。  
関連するお知らせ: [生物の株情報を管理する方法が変更になります](/news/ja/2013-12-13.html)

## ゲノムアセンブル用サンプル {#genome-assembly-sample}

### パッケージ  {#package}

[DDBJ のゲノム配列](/ddbj/mss.html)は一つの BioProject と一つの BioSample にリンクしなければならないという制約があります。この制約はゲノムアセンブリを管理するため、INSDC で設けられています。
ゲノムアセンブリに使用したサンプルは以下のパッケージで BioSample に登録します。  
[MIxS](/biosample/sample-info.html#mixs) パッケージの使用が適切ではないサンプルの場合、生物種に応じた Standard パッケージを使用します。  

- 単離培養された原核生物の場合: [Cultured Bacterial/Archaeal Genomic Sequences (MIGS.ba)](/biosample/sample-info.html#Sample-type)、もしくは、[Microbe](/biosample/sample-info.html#Sample-type)
- 真核生物の場合: [Eukaryotic Genomic Sequences (MIGS.eu)](/biosample/sample-info.html#Sample-type)、もしくは、生物種に応じた Standard パッケージの [Model organism or animal](/biosample/sample-info.html#Sample-type)、[Invertebrate](/biosample/sample-info.html#Sample-type)、[Plant](/biosample/sample-info.html#Sample-type)

アノテーションが付与されたゲノム配列を [DDBJ](/ddbj/mss.html) に登録する場合、locus_tag_prefix 属性に記載して [Locus tag prefix](/ddbj/locus_tag.html) を取得します。

### 複数サンプルがアセンブリに使用された場合 {#samples}

複数のサンプルからゲノム DNA を抽出、得られたリードを混合してアセンブルし、一つのゲノム配列として [DDBJ](/ddbj/index.html) に登録する場合、「ゲノム配列にリンクできる BioSample は一つ」という制約があるため、サンプルに差異があっても、以下に該当する場合は BioSample を分けずに登録することを推奨します。

* サンプル間でゲノム配列が同じものとして扱っている場合
* ゲノム配列以外に遺伝子発現などの定量的なデータが結び付かない場合

登録例  

* 同じ試料から異なる日に抽出した各ゲノム DNA の登録。抽出日の情報は BioSample 属性として記載する必要はありません。記載する場合、DRA Experiment や BioSample の description に記載します。
* 同じ試料から調製した Illumina と PacBio 用の各ゲノム DNA の登録。BioSample は分けずに、DRA Experiment で分けます。

異なるサンプルを別々に登録する場合、異なる BioSample をまとめる派生 BioSample (derived BioSample) をゲノム配列用に一つ登録します。  
例えば、オスとメスに由来するリードをそれぞれ DRA に登録し、両者のリードを使ってゲノムをアセンブルした場合、オスとメスそれぞれの BioSample アクセッション番号を引用した派生 BioSample を一つ登録し、ゲノム配列にリンクします。    
派生サンプルの元となるアクセッション番号は、派生サンプルの derived_from 属性に "This sample group is the combination of the [由来サンプル数] individual BioSamples: [BioSample アクセッション番号]" という書式で示します。   
例: This sample group is the combination of the 2 individual BioSamples: SAMN12623203 and SAMN12623206    

登録例

* ゲノム配列 [JAGDQO010000000](https://www.ncbi.nlm.nih.gov/nuccore/2035211276) と派生サンプル [SAMN17974349](https://www.ncbi.nlm.nih.gov/biosample/17974349)

### メタゲノムアセンブリ  {#mag}

[メタゲノムアセンブリ](/ddbj/metagenome-assembly.html) (Metagenome-Assembled Genome、MAG) はアセンブリ度合いに応じ、四段階の登録方法があります。

特定の生物に由来すると推測される MAG は DDBJ の [ENV division](/ddbj/env.html) にゲノムエントリとして登録します。

MAG 用にバーチャルなサンプルを登録します。パッケージは [MIMAG](/biosample/sample-info.html#Sample-type) を選択し、生物名には uncultured が冠されていない、MAG が由来する生物種名を記載します (例 Methanosarcina thermophila)。
派生元 BioSample を derived_from: SAMD00000001 のように記載します。[登録例](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=272411182)　　
MAG も一つの BioSample にリンクする必要があるため、複数サンプルに由来するリードをアセンブルした MAG の場合、複数の派生元サンプルを記載します。derived_from: SAMD00000001,SAMD00000002,SAMD00000004-SAMD00000008

## ヒトサンプル {#human-sample}

### ヒトを対象とした研究データの登録について  {#submission-of-human-data}

個人に由来するデータ（ヒトデータ）を DDBJ センターが運営するデータベースに登録する場合、[ヒトを対象とした研究データの登録について](/policies.html#submission-of-human-data)を遵守してください。  

注意: プライバシー侵害の恐れのないヒトサンプルにのみ使用してください。登録者の責任において、適用される法律や指針に従い、由来個人を直接特定できるような情報を取り除いてください。データを保護する必要がある場合、アクセス制限の仕組みを備えた [Japanese Genotype-phenotype Archive (JGA)](/jga/index.html) にヒトデータを登録してください。

### サンプル属性  {#attribute}

ヒト (*Homo sapiens*) サンプルでは [Human](/biosample/sample-info.html#Sample-type) パッケージで登録します。以下はヒトサンプルの種類に応じた登録ガイドラインになります。属性の説明は[こちらのページ](/biosample/attribute.html?all=all)を参照してください。    

#### 個人由来試料 {#human-subject}

isolate には匿名化された subject id を記載します。

#### 細胞株 {#cell-line}

推奨
- cell_type

### 初代培養細胞 {#primary}

sample_type に初代培養細胞 (primary cell) であることを記載します。    
sample_type: primary cell

### iPS 細胞 {#ips}

iPS 細胞は分化させてから使用されることが一般的であり、分化前後の情報が重要になります。
そのため上記に加え、以下の属性情報を追加します。分化させてから使用している ES 細胞等でも同様です。    
複数回の分化を経ている複雑な場合、description にフリーテキストで説明を記載します。

#### 個人由来試料 {#ips-human-subject}

cell_type に分化に関する情報を記載します。    
例 cell_type： iPS cell derived megarocyte cell

#### 細胞株 {#ips-cell-line}

cell_type に分化に関する情報を記載します。    
例 cell_type： iPS cell (cell_line:253G1) derived megarocyte cell    
biomaterial_provider に iPS 細胞の入手元を記載します。    
例 biomaterial_provider： ATCC

## 薬剤感受性表  {#antibiogram}

BioSample レコードに薬剤感受性表（アンチバイオグラム、Antibiogram）を含めることができます（登録例: [SAMN07958491](https://www.ncbi.nlm.nih.gov/biosample/SAMN07958491)）。登録を希望する場合は [BioSample チーム](/contact-ddbj.html)に連絡してください。

薬剤感受性表の登録ガイドラインは NCBI BioSample の各ページを参照してください。

- [Antibiograms - beta-lactamase MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/beta-lactamase/)
- [Antibiograms - pathogen MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram/)
- [Antibiograms - mycobacterial non-MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram-myco/)

## XML スキーマ  {#xml-schema}

[BioSample XML schema](https://github.com/ddbj/pub/tree/master/docs/biosample)
