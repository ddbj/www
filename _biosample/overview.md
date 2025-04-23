---
layout: tabbed_indexed_content
service_name: BioSample
title: BioSample 概要
category: biosample
current_tab: submission
lang: ja
---

BioSample は実験データを得るために使われた生物学的な試料やサンプルに対するレコードです。BioSample は BioProject と共に関連するデータをデータベースを跨ってまとめる役割を果たしています。

## サンプルの粒度 {#granularity}

一般的に、生物学的な試料に対して BioSample を作成し、そこから抽出された核酸、代謝物などの抽出物は [DRA](/dra/metadata.html)、[GEA](/gea/metadata.html) や [MetaboBank](/metabobank/metadata.html) のメタデータで表現します。

- biological replicate はサンプルを分けて biological_replicate 属性で区別します。例 "biological_replicate = 1" と "biological_replicate = 2" 例 [DRA の構成](/dra/example.html#ex_replicates)
- technical replicate はサンプルを分けず、DRA Experiment/GEA SDRF/MetaboBank SDRF で分けます。
- 植物の葉から調整した RNA、代謝物サンプルは葉に対応する BioSample を一つ作成し、抽出物は [GEA](/gea/metadata.html) や [MetaboBank](/metabobank/metadata.html) メタデータで表現します。
- 同じサンプルから調整した paired-end library をシークエンスした場合、forward と reverse で BioSample を分けずに一つの DRA Run に両ファイルを含めます。[DRA の構成](/dra/example.html#ex_samples)
- 同じサンプルを異なる機種でシークエンスした場合、一つの BioSample に異なる [Instrument model](/dra/metadata.html#Instrument) を持つ複数の DRA Experiment をリンクします。
- [ゲノムアセンブリ用サンプル](#genome-assembly-sample-package)はゲノム配列にのみ必要な locus tag prefix などがあるため、RNA や代謝物サンプルとは別にします。

登録例
- 海水中のある採取地点から得られた23,000本のユニークな16S 増幅配列 - 1 BioSample（１サンプルが採取され、16S の多様性が解析された）
- 同じ薬物で処理された三匹の「同一」なトランスジェニックマウス - 3 BioSamples（biological replicate は BioSample で区別）
- 遺伝子発現レベルの経時的な変化を解析するため、ウイルスに感染させた CHO 細胞を 0,2,4,8 時間後にサンプリング - 4 BioSamples（4 タイムポイント）
- 発現している遺伝子の差異を組織毎に調べるため、オスのアリクイ一個体から採取した脳、心臓、肺、精巣、肝臓 - 5 BioSamples（５つの異なる組織）

## サンプル属性 {#sample-attributes}

BioSample を構成する主要部分は「サンプル属性」です。属性には採取地や表現型などの情報を記載することができ、対象となるサンプルを定義します。BioSample の属性は構造化された「属性名:値」 (name:value) の組として表現されます。[属性リスト](/biosample/attribute.html) 例) tissue:liver   
BioSample は属性名に統制された語句を使うことをサポートしており、サンプル種別に応じた属性セットを[パッケージ](#package)として提供しています。

## 生物名  {#organism}

BioSample の [organism](/biosample/attribute.html#organism) に記載する生物名については「[生物名について](/ddbj/organism.html)」をご覧ください。

## 採取場所と日時 {#spatio-temporal}

[INSDC](https://www.insdc.org/) は塩基配列データの品質とトレーサビリティを向上させるため、サンプルの「採取場所」と「採取日時」の記載を必須化しています。[INSDC spatio-temporal annotation standards](https://www.insdc.org/news/spatio-temporal-annotation-policy-18-11-2021/)

* 採取場所: サンプルの採取場所。データを解釈するうえで意味のある場所を記載します。少なくとも国や海洋を記載します。BioSample と DDBJ の [geo_loc_name](/biosample/attribute.html#geo_loc_name) が該当する属性になります。
* 採取日時: サンプルの採取日時。データを解釈するうえで意味のある日時を記載します。少なくとも最も近い「年」を所定書式で記載します。BioSample と DDBJ の [collection_date](/biosample/attribute.html#collection_date) が該当する属性になります。

これらの情報を提供できない場合（例 宿主個人の特定につながるような病原菌サンプルの採取情報）、および、提供することが適切ではない場合（例 研究室で飼育しているモデル動物）は、[INSDC missing value reporting standards](https://www.insdc.org/submitting-standards/missing-value-reporting/) に従って適用除外理由 (exemption term) を記載します。[採取場所・日時に関する FAQ 集](/faq/ja/index.html?tag=採取場所・日時)

## パッケージ {#package}

生物やデータの種類に応じたパッケージを提供し、サンプル記載の充実化と標準化を促しています。   
パッケージに含まれる属性リストは[サンプル属性](/biosample/attribute.html)をご覧ください。  
パッケージは記述を促すための仕組みであり、サンプル情報の解釈のためには実際に使用されている属性の方が重要です。そのため過去に登録したサンプルの種類とパッケージが合致していなくても、属性が適切であれば、パッケージを変更する必要はありません。   

パッケージ分類
* [Standard](#standard)
* [Pathogen](#pathogen)
* [MIxS](#mixs)
	* [MIxS Environmental package](#environmental-package)

### Standard {#standard}

生物やサンプルの種類に応じたパッケージ。

<div class="bspac">
<ul>
  <li id="SARS-CoV-2.cl"><a href="/biosample/attribute.html?core=Standard&type=SARS-CoV-2.cl">SARS-CoV-2: clinical or host-associated</a><p class="def">公衆衛生に関わる SARS-CoV-2 サンプル</p></li>
  <li id="SARS-CoV-2.wwsurv"><a href="/biosample/attribute.html?core=Standard&type=SARS-CoV-2.wwsurv">SARS-CoV-2: wastewater surveillance</a><p class="def">公衆衛生に関わる SARS-CoV-2 廃水モニターサンプル</p></li>
	<li id="Microbe"><a href="/biosample/attribute.html?core=Standard&type=Microbe">Microbe</a><p class="def">細菌や単細胞微生物</p></li>
	<li id="Model.organism.animal"><a href="/biosample/attribute.html?core=Standard&type=Model.organism.animal">Model organism or animal</a><p class="def">動物及びマウスやショウジョウバエ等のモデル生物</p></li>
	<li id="Metagenome.environmental"><a href="/biosample/attribute.html?core=Standard&type=Metagenome.environmental">Metagenome or environmental</a><p class="def">メタゲノムや環境サンプル</p></li>
	<li id="Invertebrate"><a href="/biosample/attribute.html?core=Standard&type=Invertebrate">Invertebrate</a><p class="def">無脊椎動物</p></li>
	<li id="Human"><a href="/biosample/attribute.html?core=Standard&type=Human">Human</a><p class="def">ヒト由来サンプル。注意: 由来個人を直接特定できるような情報を取り除いてください。データを保護する必要がある場合、アクセス制限の仕組みを備えた <a href="/jga/index-e.html">Japanese Genotype-phenotype Archive (JGA)</a> に登録してください</p></li>
	<li id="Plant"><a href="/biosample/attribute.html?core=Standard&type=Plant">Plant</a><p class="def">植物や植物由来の細胞株</p></li>
	<li id="Virus"><a href="/biosample/attribute.html?core=Standard&type=Virus">Viral</a><p class="def">病気に直接関係しないウイルス。病原ウイルスには <a href="Pathogen.cl">Pathogen: clinical or host-associated</a> を使います</p></li>
	<li id="Beta-lactamase"><a href="/biosample/attribute.html?core=Standard&type=Beta-lactamase">Beta-lactamase</a><p class="def">抗生物質耐性を持つ beta-lactamase 遺伝子の形質転換体サンプル</p></li>
	<li id="Omics"><a href="/biosample/attribute.html?core=Standard&type=Omics">Omics</a><p class="def">遺伝子発現、エピジェネティックスやメタボロミクスといったオミックスデータサンプル</p></li>
</ul>
</div>   
   
### Pathogen {#pathogen}

公衆衛生に関わる病原菌サンプル用パッケージ。

<div class="bspac">
<ul>
  <li id="Pathogen.cl"><a href="/biosample/attribute.html?core=Pathogen&type=Pathogen.cl">Pathogen: clinical or host-associated</a><p class="def">臨床検体もしくは宿主から採取された病原菌サンプル</p></li>
  <li id="Pathogen.env"><a href="/biosample/attribute.html?core=Pathogen&type=Pathogen.env">Pathogen: environmental/food/other</a><p class="def">環境/食品/その他の病原菌サンプル</p></li>
</ul>
</div>    
    
### MIxS {#mixs}

ゲノム・メタゲノム配列用パッケージ。

<div class="bspac">
<ul>
	<li id="MIGS.ba"><a href="/biosample/attribute.html?core=MIxS&type=MIGS.ba&env=No_package">Cultured Bacterial/Archaeal Genomic Sequences (MIGS.ba)</a><p class="def">培養された細菌や古細菌のゲノム配列。生物種は <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2">Bacteria</a> もしくは <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2157">Archaea</a></p></li>
	<li id="MIGS.eu"><a href="/biosample/attribute.html?core=MIxS&type=MIGS.eu&env=No_package">Eukaryotic Genomic Sequences (MIGS.eu)</a><p class="def">真核生物のゲノム配列。生物種の系統は <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2759">Eukaryota</a></p></li>
	<li id="MIGS.vi"><a href="/biosample/attribute.html?core=MIxS&type=MIGS.vi&env=No_package">Viral Genomic Sequences (MIGS.vi)</a><p class="def">ウイルスのゲノム配列。生物種の系統は <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=10239">Viruses</a></p></li>
	<li id="MIMS.me"><a href="/biosample/attribute.html?core=MIxS&type=MIMS.me&env=agriculture">Environmental/Metagenome Genomic Sequences (MIMS.me)</a><p class="def">環境サンプル由来の配列もしくはメタゲノム配列。生物名は <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908">unclassified sequences</a> 中の 'metagenome' で終わる名前にします</p></li>
	<li id="MIMAG"><a href="/biosample/attribute.html?core=MIxS&type=MIMAG&env=No_package">Metagenome-assembled Genome Sequences (MIMAG)</a><p class="def">メタゲノムアセンブリ配列。生物名には 'metagenome' を含んだ名前を使うことはできない。ウイルスゲノムには <a href="#MIUVIG">MIUVIG</a> を使用します</p></li>
	<li id="MISAG"><a href="/biosample/attribute.html?core=MIxS&type=MISAG&env=No_package">Single Amplified Genome Sequences (MISAG)</a><p class="def">一細胞ゲノム配列</p></li>
	<li id="MIMARKS.specimen"><a href="/biosample/attribute.html?core=MIxS&type=MIMARKS.specimen&env=No_package">Specimen Marker Sequences (MIMARKS.specimen)</a><p class="def">標本サンプルのマーカー遺伝子配列（例 16S, 18S, 23S, 28S rRNA や COI）</p></li>
	<li id="MIMARKS.survey"><a href="/biosample/attribute.html?core=MIxS&type=MIMARKS.survey&env=agriculture">Survey-related Marker Sequences (MIMARKS.survey)</a><p class="def">生物の培養や同定を経ることなく環境サンプルから直接解析されたマーカー遺伝子配列（例 16S, 18S, 23S, 28S rRNA や COI）。生物名は <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908">unclassified sequences</a> 中の 'metagenome' で終わる名前にします</p></li>
	<li id="MIUVIG"><a href="/biosample/attribute.html?core=MIxS&type=MIUVIG&env=No_package">Uncultivated Viral Genome Sequences (MIUVIG)</a><p class="def">メタゲノムもしくは metatranscriptome データにおいて同定された未培養ウイルスゲノム配列。生物種の系統は <a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=10239">Viruses</a></p></li>
</ul>
</div>   
     
### MIxS Environmental package {#environmental-package}

[MIxS](#mixs) パッケージを選択した場合は、サンプル採取環境に応じた環境パッケージも選択します。採取環境の記載に必要な属性 (例 air における altitude) が追加されます。[MIMS.me](#MIMS.me) と [MIMARKS.survey](#MIMARKS.survey) は No package を選択できません。  

<div class="bspac env">
<ul>
	<li id="agriculture">agriculture</li>
	<li id="air">air</li>
	<li id="built">built</li>
	<li id="food-animal">food-animal</li>
	<li id="food-farm_env">food-farm_env</li>
	<li id="food-human_foods">food-human_foods</li>
	<li id="food-prod_facility">food-prod_facility</li>
	<li id="host-associated">host-associated</li>
	<li id="human-associated">human-associated</li>
	<li id="human-gut">human-gut</li>
	<li id="human-oral">human-oral</li>
	<li id="human-skin">human-skin</li>
	<li id="human-vaginal">human-vaginal</li>
	<li id="hydrocarbon-cores">hydrocarbon-cores</li>
	<li id="hydrocarbon-fluids_swabs">hydrocarbon-fluids_swabs</li>
	<li id="microbial">microbial</li>
	<li id="miscellaneous">miscellaneous</li>
	<li id="plant-associated">plant-associated</li>
	<li id="sediment">sediment</li>
	<li id="soil">soil</li>
	<li id="symbiont-associated">symbiont-associated</li>
	<li id="wastewater">wastewater</li>
	<li id="water">water</li>
</ul>
</div>

## パッケージの選び方 {#select-package}   
   
生物やデータの種類に応じたパッケージを選択します。当てはまるパッケージが [Standard](#standard) と [MIxS](#mixs) の両方にある場合は、[属性リスト](/biosample/attribute.html)をみて、サンプルを記載するのにより適した方を選びます。

### ゲノムアセンブリ配列用サンプル {#genome-assembly-sample-package}  

DDBJ/ENA/GenBank ではゲノムアセンブリを管理するため、[ゲノム配列](/ddbj/genome.html)は一つの BioProject と一つの BioSample を参照すること、という制約を設けています。
ゲノムアセンブリサンプルでは生物種に応じたパッケージを選択します。

<div class="bspac">
<ul>
	<li id="genome-prokaryote">単離培養された原核生物<p class="def"><a href="#Microbe">Microbe</a> もしくは <a href="#MIGS.ba">MIGS.ba</a></p></li>
	<li id="genome-eukaryote">真核生物<p class="def"><a href="#Model.organism.animal">Model organism or animal</a>/<a href="#Invertebrate">Invertebrate</a>/<a href="#Plant">Plant</a> もしくは <a href="#MIGS.eu">MIGS.eu</a></p></li>
</ul>
</div>

アノテーションが付与されたゲノム配列を [DDBJ](/ddbj/mss.html) に登録する場合、希望する [Locus tag prefix](/ddbj/locus_tag.html) を [locus_tag_prefix](/biosample/attribute.html#locus_tag_prefix) 属性に記載して tag を取得します。

### メタゲノム用サンプル {#metagenome-sample-package}

メタゲノムはアセンブリ段階に依って使用するパッケージが異なります。詳しくは[メタゲノムアセンブリ](/ddbj/metagenome-assembly.html)をご覧ください。

<div class="bspac">
<ul>
	<li id="raw-primary">生リード・プライマリーメタゲノム<p class="def"><a href="#MIGS.me">MIGS.me</a> もしくは <a href="#Metagenome.environmental">Metagenome or environmental</a></p></li>
	<li id="binned-mag">Binned メタゲノム・MAG<p class="def"><a href="#MIMAG">MIMAG</a>。ウイルスメタゲノムの場合は <a href="#MIUVIG">MIUVIG</a></p></li>
</ul>
</div>

## 派生サンプル {#derived-sample}

混合サンプルなど、複数サンプルから構成される BioSample が必要な場合は、派生サンプル (derived sample) を登録し、元となるアクセッション番号を [derived_from](/biosample/attribute.html#derived_from) 属性にカンマやハイフン区切りで記載します。例: SAMD00000001,SAMD00000002,SAMD00000008-SAMD00000100。必要になるには以下のような場合です。   
INSDC ではゲノムアセンブリを管理するため「[ゲノム配列](/ddbj/genome.html)は一つの BioProject と一つの BioSample を参照すること」という制約を設けています。そのため、複数サンプルから得られた配列を混合してアセンブルしたゲノム配列を [DDBJ](/ddbj/mss.html) に登録する場合、BioSample を一つにまとめる必要があります。    
例えば、オスとメスに由来するリードを混合してアセンブルしたゲノム配列を登録する場合は、オスとメスそれぞれの BioSample アクセッション番号を引用した派生 BioSample を一つ登録します。   

多数の環境サンプルから計算機上で再構成されたメタゲノムアセンブリ (MAG) を登録する場合、MAG 用に派生サンプルを登録し、[derived_from](/biosample/attribute.html#derived_from) に由来となる環境サンプルのアクセッション番号を記載します。

## ヒトサンプル {#human-sample}

### ヒトを対象とした研究データの登録について  {#submission-of-human-data}

個人に由来するデータ（ヒトデータ）を登録する場合、[ヒトを対象とした研究データの登録について](/policies.html#submission-of-human-data)を遵守してください。

注意: 登録者の責任において、適用される法律や指針に従い、由来個人を直接特定できるような情報を取り除いてください。データを保護する必要がある場合、アクセス制限の仕組みを備えた [Japanese Genotype-phenotype Archive (JGA)](/jga/index.html) にヒトデータを登録してください。

### サンプル属性 {#attribute}

ヒト (*Homo sapiens*) サンプルでは [Human](#Human) パッケージで登録します。以下はサンプルの種類に応じた登録ガイドラインになります。属性の説明は[こちらのページ](/biosample/attribute.html?core=Standard&type=Human)を参照してください。

#### 個人由来試料 {#human-subject}

isolate には匿名化された subject id を記載します。

#### 細胞株 {#cell-line}

cell_type の記載を推奨

#### 初代培養細胞 {#primary}

sample_type に初代培養細胞 (primary cell) であることを記載します。
sample_type: primary cell

#### iPS 細胞 {#ips}

iPS 細胞は分化させてから使用されることが一般的であり、分化前後の情報が重要になります。
そのため上記に加え、以下の属性情報を追加します。分化させてから使用している ES 細胞等でも同様です。
複数回の分化を経ている複雑な場合、description に説明を記載します。

#### 個人由来試料 {#ips-human-subject}

cell_type に分化に関する情報を記載します。
例 cell_type： iPS cell derived megarocyte cell

#### 細胞株 {#ips-cell-line}

cell_type に分化に関する情報を記載します。
例 cell_type： iPS cell (cell_line:253G1) derived megarocyte cell
biomaterial_provider に iPS 細胞の入手元を記載します。
例 biomaterial_provider： ATCC

## XML スキーマ  {#xml-schema}

[BioSample XML schema](https://github.com/ddbj/pub/tree/master/docs/biosample)
