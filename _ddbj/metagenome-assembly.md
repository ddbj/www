---
layout: tabbed_indexed_content
title: メタゲノムアセンブリ
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
lang: ja
---

微生物は生物多様性の多くの部分を占めていますが、生息環境が多様であることからそれらの多くは培養することができず、従来の培養を経たゲノム解析で得られる知見は限られています。メタゲノム解析とは培養に依存することなく網羅的に微生物のゲノムを解析する手法であり、培養することができない微生物種について多くの知見をもたらしています。

メタゲノムプロジェクトは解析段階に応じたいくつかのデータから構成されており、アセンブリ段階に応じて四つに区分されます。    
(1) アセンブル前の NGS 生リード    
(2) 分類群が未同定のアセンブルされたコンティグ配列（プライマリーメタゲノム）    
(3) Binning され既知の分類群に帰属されたアセンブリ配列（Binned メタゲノム）    
(4) 単一の分類群に帰属された Binned     アセンブリ配列の中で、分類群を代表する、配列の完成度・コンタミネーション割合といった指標が最も高品質なアセンブリ配列（Metagenome-Assembled Genome、MAG）

DDBJ センターにおいて (1)-(3) は DRA で、(4) は DDBJ で受付けています。MAG 配列の品質に関しては[こちらの文献](https://www.nature.com/articles/nbt.3893)を参照してください。        
配列が由来するサンプル情報に関して、(1)-(2) はメタゲノムサンプルを、(3) と (4) はメタゲノムサンプルから派生した Binned と MAG サンプルをそれぞれ BioSample に登録します。    
研究概要は BioProject に登録し、全てのデータから同じ BioProject を参照することで、一連のデータをメタゲノムプロジェクトとしてまとめます。

本ページでは各段階のデータを BioProject/BioSample/DRA/DDBJ へ登録する方法を説明しています。
DRA への生データの登録は原則として必須です。

## メタゲノムアセンブリデータの登録  {#submission}

{% include image.html url="submission/mag.jpg" caption="メタゲノムアセンブリデータの登録" class="w600" %}

### (1) 生リード {#raw-reads}

メタゲノムプロジェクトの生リードは [DRA Run](/dra/submission.html) に登録します。

#### BioProject  {#raw-reads-bioproject}

[メタゲノム/環境サンプルプロジェクト](/bioproject/submission.html#Project-type)として登録します。
生物名は [metagenome organism
names](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/)
から適切なものを選び、"xyz metagenome" (例 soil metagenome) を記載します。

#### BioSample  {#raw-reads-biosample}

[MIxS MIMS.me](/biosample/submission.html#mixs) パッケージを選択します。
メタゲノムサンプルの場合、生物名は [metagenome organism
names](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/)
から適切なものを選び、"xyz metagenome" (例 soil metagenome)
を記載します。サンプルに関する詳細情報を記載します。

#### DRA  {#raw-reads-dra}

生シークエンスデータを [DRA Run](/dra/submission.html) に登録します。

### (2) プライマリーメタゲノム  {#primary-metagenome}

生リードをアセンブルしたコンティグ配列を [DRA Analysis](/dra/submission.html) に登録します。

#### BioProject  {#primary-metagenome-bioproject}

(1) 生リードと同じです。

#### BioSample  {#primary-metagenome-biosample}

(1) 生リードと同じです。

#### DRA  {#primary-metagenome-dra}

DRA に登録する場合、プライマリーメタゲノム配列を fasta/bam ファイルで [DRA Analysis](/dra/submission.html#Analysis_Type)（Analysis type = "De Novo Assembly"）に登録します。(1) の生リードが登録された [DRA Run とセットで Analysis を登録](/dra/submission.html#analysis)します。    
Analysis は ENA/NCBI と共有されません。また、[DDBJ Search](https://ddbj.nig.ac.jp/search) でインデックスされず、ftp でメタデータ XML とデータファイルが公開されるのみとなります（例 [DRZ000001](https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA000/DRA000072/)）。

### (3) Binned メタゲノム {#binned-metagenome}

Binning され、既知の分類群に帰属されたアセンブリ配列を [DRA Analysis](/dra/submission.html) に登録します。

#### BioProject  {#binned-metagenome-bioproject}

(1) 生リードと同じです。

#### BioSample  {#binned-metagenome-biosample}

Binned サンプル用にバーチャルなサンプルを登録します。パッケージは ["MIMAG"](/biosample/submission.html#mixs) を選択し、生物名には
uncultured が冠されていない、Binned アセンブリが由来する生物名を記載します (例 "Agrobacterium tumefaciens"、Agrobacterium sp."、"Rhizobiaceae bacterium")。
(1) の DRA Run 登録に使用する "xyz metagenome" メタゲノムサンプルとは別にバーチャルな Binned 用サンプルが必要になります。　　　　

解析ツール [GTDB](https://gtdb.ecogenomic.org/) が割り当てた生物名で [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi) に登録されていない名前は、そのまま使うことができません。対応する [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi) に登録されている名前に変換した上で登録します。

由来サンプルを示すため以下の属性を記載します。   

メタゲノムの由来を [metagenome organism
names](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/) から適切なものを選び metagenome_source に "xyz metagenome" (例 soil metagenome) として記載します。   
例 　
metagenome_source: soil metagenome   

バーチャルな BioSample の派生元である (1) で登録したメタゲノムサンプルのアクセッション番号を derived_from に記載します。  
例  
derived_from: SAMD00000001  
derived_from: SAMD00000002,SAMD00000003,SAMD00000010-SAMD00000015　　　

#### DRA  {#binned-metagenome-dra}

DRA に登録する場合、Binned アセンブリ配列を fasta/bam ファイルで [DRA Analysis](/dra/submission.html#Analysis_Type)（Analysis type = "De Novo Assembly"）に登録し、description に使用した解析ソフトウェアや Binning に関する情報を記載します。    
(1) の生リードが登録された [DRA Run とセットで Analysis を登録](/dra/submission.html#analysis)します。    
Analysis は ENA/NCBI と共有されません。また、[DDBJ Search](https://ddbj.nig.ac.jp/search) でインデックスされず、ftp でメタデータ XML とデータファイルが公開されるのみとなります（例 [DRZ000001](https://ddbj.nig.ac.jp/public/ddbj_database/dra/fastq/DRA000/DRA000072/)）。

### (4) MAG {#mag}

単一の分類群に帰属された Binned アセンブリ配列の中で、分類群を代表する、配列の完成度・コンタミネーション割合といった指標が最も高品質なアセンブリ配列（Metagenome-Assembled Genome、MAG）は DDBJ の [ENV division](/ddbj/env.html) にゲノムエントリとして登録します。MAG 配列の品質に関しては[こちらの文献](https://www.nature.com/articles/nbt.3893)を参照してください。

#### BioProject {#mag-bioproject}

(1) 生リードと同じです。

#### BioSample  {#mag-biosample}

MAG サンプル用にバーチャルなサンプルを登録します。パッケージは ["MIMAG"](/biosample/submission.html#mixs) を選択し、生物名には
uncultured が冠されていない、MAG 配列が由来する生物名を記載します (例 "Agrobacterium tumefaciens")。
(1) の DRA Run 登録に使用する "xyz metagenome" メタゲノムサンプルとは別にバーチャルな MAG 用サンプルが必要になります。　　　　

解析ツール [GTDB](https://gtdb.ecogenomic.org/) が割り当てた生物名で [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi) に登録されていない名前は、そのまま使うことができません。対応する [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi) に登録されている名前に変換した上で登録します。

由来サンプルを示すため以下の属性を記載します。   

メタゲノムの由来を [metagenome organism
names](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/) から適切なものを選び metagenome_source に "xyz metagenome" (例 soil metagenome) として記載します。   
例 　
metagenome_source: soil metagenome   

バーチャルな BioSample の派生元である (1) で登録したメタゲノムサンプルのアクセッション番号を derived_from に記載します。  
例  
derived_from: SAMD00000001  
derived_from: SAMD00000002,SAMD00000003,SAMD00000010-SAMD00000015　　

[BioSample 登録例](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=272411182)  

#### DDBJ {#mag-ddbj}

MAG は [ENV division](/ddbj/env.html)
のゲノムエントリとして登録します。[MSS](/ddbj/mss.html)
が登録受付窓口になります。    
MAG 登録では [source feature](/ddbj/features.html#source) に以下の [Qualifier](/ddbj/qualifiers.html) が必須になります。

MAG 特有のルールとして必須
- /metagenome\_source = "xyz metagenome"（"xyz
  metagenome" は [metagenome organism
  names](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169&lvl=3&p=mapview&p=has_linkout&p=blast_url&p=genome_blast&keep=1&srchmode=3&unlock/)
  に含まれていること）を記載。

ENV Division エントリとして必須
- [/environmental\_sample](/ddbj/qualifiers.html#environmental_sample)
- [/isolation\_source](/ddbj/qualifiers.html#isolation_source)
- [/isolate](/ddbj/qualifiers.html#isolate)

また、ゲノムエントリとして [ST\_COMMENT](/ddbj/file-format.html#describing_st_comment) に以下のアセンブリ情報が必須になります。
- Assembly Method
- Genome Coverage
- Sequencing Technology
- Assembly Name (真核生物の場合に必須)

MAG エントリ（ENV division）では [/strain](/ddbj/qualifiers.html#strain)
を記載することはできません。また、宿主の情報がある場合は source feature に
[/host](/ddbj/qualifiers.html#host) で記載します。
