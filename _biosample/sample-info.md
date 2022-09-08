---
layout: tabbed_indexed_content
service_name: BioSample
title: サンプル情報
category: biosample
current_tab: submission
lang: ja
---

必須<span class="red">\*</span>  
条件によって必須<span class="conditionally_required">\*</span>

## Submitter  {#Submitter}

### Submitter  {#Area_biosample-submitter}

登録者情報。登録に関する連絡はここに記載された E-mail アドレス宛てに行われます。必要な人数分作成します。連絡先情報は DDBJ スタッフが登録者に連絡するために使われ、一般に公開されることはありません。連絡先情報のかわりに研究者の所属する組織に関する情報が公開されます。

[First name](#BioSample_First_name)<span class="red">\*</span><a name="BioSample_First_name"></a>  
: 登録者の first name。

[Last name](#BioSample_Last_name)<span class="red">\*</span><a name="BioSample_Last_name"></a>  
: 登録者の last name。

[E-mail](#BioSample_E-mail)<span class="red">\*</span><a name="BioSample_E-mail"></a>  
: E-mail アドレス。所属する組織ドメインのメールアドレスを指定してください。

### Organization  {#Area_biosample-organization}

[Organization](#Organization)<a name="Organization"></a>  
: コンタクトパーソンが所属する組織。

[Submitting organization](#BioSample_Submitting_organization)<span class="red">\*</span><a name="BioSample_Submitting_organization"></a>  
: 組織のフルネーム。

[Submitting organization URL](#BioSample_Submitting_organization_URL)<a name="BioSample_Submitting_organization_URL"></a>  
: 登録者が所属する組織の URL。

### Data Release  {#Area_biosample-data-release}

"Hold" か "Release" のどちらかを選びます。公開予定日を指定することはできません。データ公開の仕組みについては[データ公開](/biosample/overview.html#sample-release)をご覧ください。

[Release](#BioSample_Release)<a name="BioSample_Release"></a>  
: 登録したサンプルは査定された後、公開されます。

[Hold](#BioSample_Hold)<a name="BioSample_Hold"></a>  
: この BioSample アクセッション番号を引用している DDBJ/DRA/GEA/MetaboBank データが公開されると同時に公開されます。
この BioSample 番号を引用している非公開の DDBJ/DRA/GEA/MetaboBank データが公開されることはありません。

FAQ: [データ公開の依頼方法は？](/faq/ja/request-release.html)

## General info  {#General-info}

[External Links](#Link)<a name="Link"></a>  
: サンプルに直接関連するリソースの URL とそれに付けるラベル (表示名)。

[Link description](#Link_description)<a name="Link_description"></a>  
: サンプルに関連するウェブサイトの表示名。

[URL](#BioSample_URL)<a name="BioSample_URL"></a>  
: ウェブサイトの URL。

## Sample type  {#Sample-type}

BioSample ではサンプルや配列の種類毎にデザインされた必須・任意属性から構成されるパッケージを提供し、サンプル記載の充実化と属性名の標準化をサポートしています。  

### Standard {#standard}

[MIxS](#mixs) パッケージの使用が適切ではないサンプルの場合、生物種・サンプル・塩基配列種別に応じた Standard パッケージを使用します。  
GEA 機能ゲノミクスデータと MetaboBank メタボロミクスデータには Omics パッケージの使用を推奨します。

* SARS-CoV-2: clinical or host-associated - 公衆衛生に関わる SARS-CoV-2 サンプル用。
SARS-CoV-2 ケースの迅速な解析と追跡のための有用な必須属性を含みます。
* SARS-CoV-2: wastewater surveillance - 公衆衛生に関わる SARS-CoV-2 廃水モニターサンプル用。
SARS-CoV-2 ケースの迅速な解析と追跡のための有用な必須属性を含みます。
* Microbe - MIxS、Pathogen もしくは Virus パッケージの使用が適切ではない、バクテリアや単細胞微生物サンプル用。
* Model organism or animal - マウス、ショウジョウバエや線虫といったモデル生物と動物サンプル用。
* Metagenome or environmental - MIxS パッケージの使用が適切ではないメタゲノムや環境サンプル用。
* Invertebrate - 無脊椎動物サンプル用。
* Human - 注意: プライバシー侵害の恐れのないヒトサンプルにのみ使用してください。登録者の責任において、適用される法律や指針に従い、由来個人を直接特定できるような情報を取り除いてください。データを保護する必要がある場合、アクセス制限の仕組みを備えた [Japanese Genotype-phenotype Archive (JGA)](/jga/index-e.html) にヒトデータを登録してください。ヒトから単離されたサンプルには Pathogen、Microbe もしくは適切な MIxS パッケージを使用してください。
* Plant - 植物や植物由来の細胞株サンプル用。
* Viral - 病気に直接関係しないウイルスサンプル。病原ウイルスには Pathogen: clinical or host-associated パッケージを使います。
* Beta-lactamase - 抗生物質耐性データを持つ beta-lactamase 遺伝子の形質転換体サンプル用。
* Omics - Genomic Expression Archive (GEA) 機能ゲノミクスデータと MetaboBank メタボロミクスデータ登録用。

### Pathogen {#pathogen}

公衆衛生に関わる病原菌サンプルに使用します。   

* Pathogen: clinical or host-associated - 臨床検体もしくは宿主から採取された病原菌サンプル用
* Pathogen: environmental/food/other - 環境/食品/その他の病原菌サンプル用

### MIxS  {#mixs}

ゲノム・メタゲノム配列が得られたサンプルに使用します。  
[MIxS](#mixs) が適切ではないサンプルの場合は [Standard](#standard) パッケージを使用します。  

* Cultured Bacterial/Archaeal Genomic Sequences (MIGS.ba) - 培養されたバクテリアもしくは古細菌のゲノム配列用。生物種の系統は [Bacteria](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2) もしくは [Archaea](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2157) である必要があります。
* Eukaryotic Genomic Sequences (MIGS.eu) - 真核生物のゲノム配列用。生物種の系統は [Eukaryota](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=2759) である必要があります。
* Viral Genomic Sequences (MIGS.vi) - ウイルスのゲノム配列用。生物種の系統は [Viruses](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=10239) である必要があります。
* Environmental/Metagenome Genomic Sequences (MIMS.me) - 環境サンプル由来の配列もしくはメタゲノム配列用。生物名は [unclassified sequences](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908) 配下の 'metagenome' で終わる名前を使います。
* Metagenome-assembled Genome Sequences (MIMAG) - 解析ツールによりメタゲノムデータセットから再構成した個別の生物種のメタゲノムアセンブリ配列用。生物名には 'metagenome' を含んだ名前を使うことはできません。ウイルスゲノムには MIUVIG パッケージを使用してください。
* Single Amplified Genome Sequences (MISAG) - 単細胞を単離し、増幅した全ゲノムシークエンスを解析した配列用。生物名には 'metagenome' を含んだ名前を使うことはできません。
* Specimen Marker Sequences (MIMARKS.specimen) - 標本サンプルの 16S, 18S, 23S, 28S rRNA もしくは COI マーカー遺伝子配列用。生物名には 'metagenome' を含んだ名前を使うことはできません。
* Survey-related Marker Sequences (MIMARKS.survey) - 生物の培養や同定を経ることなく環境サンプルから直接解析された 16S, 18S, 23S, 28S rRNA もしくは COI マーカー遺伝子配列用。生物名は [unclassified sequences](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=12908) 配下の 'metagenome' で終わる名前を使います。
* Uncultivated Viral Genome Sequences (MIUVIG) - メタゲノムもしくは metatranscriptome データセット中で同定された未培養ウイルスゲノム配列用。生物種のｊ系統は [Viruses](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=10239) である必要があります。

### Environmental package  {#environmental-package}

MIxS メタゲノムや環境サンプルの場合、環境パッケージから適切なものを選びます。サンプル採取環境の記載に必要な属性 (例 air 環境パッケージに対する altitude) が追加されます。   
MIMS.me と MIMARKS.survey のときは No package を選択できません。  

* air
* built
* host-associated
* human-associated
* human-gut
* human-oral
* human-skin
* human-vaginal
* microbial
* miscellaneous
* plant-associated
* sediment
* soil
* wastewater
* water

## Attributes  {#Attributes}

[Sample attributes](#Sample_attributes)<a name="Sample_attributes"></a>  
: パッケージ毎の BioSample テンプレートファイルをダウンロードします。テンプレートファイルはタブ区切りテキストで表計算ソフトやテキストエディタで開くことができます。
属性を記載したテキストファイルをアップロードすると内容がチェックされます。  
[Warning や Error メッセージ](/biosample/validation.html) が表示された場合は必要に応じて内容を修正してから再度アップロードしてください。エラーが解消されるまで次のタブに進むことはできません。

[Attributes](#BioSample_Attributes)<a name="BioSample_Attributes"></a>  
: [サンプル属性のリスト](/biosample/attribute.html)  
必須項目に加えて、いくつかの推奨項目があります。BioSample データをより役立つものにするためにできるだけ情報を登録してください。
登録システムが一般的に使われている属性を標準化された名称とともに提供します。
登録を準備する際は[属性のリスト](/biosample/attribute.html)や[登録例](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482)を参照し、該当する項目を入力してください。
リストにない情報を持っている場合はユーザが定義した独自の属性をタブ区切りテキストファイルの末尾に追加します。

## Overview  {#Overview}

[Overview](#BioSample_Overview)<a name="BioSample_Overview"></a>  
: 登録内容を確認し問題がなければ一番下の Submit ボタンをクリックしてサンプルを投稿してください。"Submission_ID.txt" (例 SSUB000001.txt) ファイルでアップロードしたサンプル属性の内容をダウンロードすることができます。
