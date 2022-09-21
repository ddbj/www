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

- biological replicate は biological_replicate 属性で区別します。例 "biological_replicate = 1" と "biological_replicate = 2" 例 [DRA の構成](/dra/submission.html#ex_replicates)
- technical replicate はサンプルを分けず、DRA Experiment/GEA SDRF/MetaboBank SDRF で分けます。
- 植物の葉から調整したゲノム、RNA、代謝物サンプルは葉に対応する BioSample を一つ作成し、抽出物は [DDBJ](/ddbj/submission.html)、[GEA](/gea/metadata.html)、[MetaboBank](/metabobank/metadata.html) メタデータで表現します。
- 同じサンプルから調整した paired-end library をシークエンスした場合、forward と reverse で BioSample を分けずに一つの DRA Run に両ペアードファイルを含めます。[DRA の構成](/dra/submission.html#ex_samples)
- 同じサンプルを異なる機種でシークエンスした場合、異なる [Instrument model](/dra/submission.html#Instrument) を持つ複数の DRA Experiment を一つの BioSample にリンクします。
- ユニークなサンプル源に対し、別々の BioSample を登録します。例えば、羽から調整した RNA と肢から調整した RNA は、両者が別々にシークエンスされている場合、別個の BioSample になります。

登録例
- 海水中のある採取地点から得られた 23,000 本のユニークな 16S 増幅配列 - 1 BioSample（１サンプルが採取され、16S の多様性が解析された）
- 同じ薬物で処理された三匹の「同一」なトランスジェニックマウス - 3 BioSamples（biological replicate は BioSample で区別）
- 遺伝子発現レベルの経時的な変化を解析するため、ウイルスに感染させた CHO 細胞を 0、2、4、8 時間後にサンプリング - 4 BioSamples（4 タイムポイント）
- 発現している遺伝子の差異を組織毎に調べるため、オスのアリクイ一個体から採取した脳、心臓、肺、精巣、肝臓 - 5 BioSamples（５つの異なる組織）

## ゲノムアセンブル用サンプル {#genome-assembly-sample}

ゲノムアセンブリに使用したサンプルについては、[ゲノムアセンブル用サンプル](/biosample/genome-assembly-sample.html)をご覧ください。

## ヒトサンプル {#human-sample}

ヒトに由来するサンプルについては、[Human Sample](/biosample/human-sample.html)をご覧ください。

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

## 薬剤感受性表  {#antibiogram}

BioSample レコードに薬剤感受性表（アンチバイオグラム、Antibiogram）を含めることができます（登録例: [SAMN07958491](https://www.ncbi.nlm.nih.gov/biosample/SAMN07958491)）。登録を希望する場合は [BioSample チーム](/contact-ddbj.html)に連絡してください。

薬剤感受性表の登録ガイドラインは NCBI BioSample の各ページを参照してください。

- [Antibiograms - beta-lactamase MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/beta-lactamase/)
- [Antibiograms - pathogen MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram/)
- [Antibiograms - mycobacterial non-MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram-myco/)

## XML スキーマ  {#xml-schema}

[BioSample XML schema](https://github.com/ddbj/pub/tree/master/docs/biosample)
