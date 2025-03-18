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

## General info  {#General-info}

### Data Release  {#Area_biosample-data-release}

"Hold" か "Release" のどちらかを選びます。公開予定日を指定することはできません。データ公開の仕組みについては[データ公開](/biosample/submission.html#sample-release)をご覧ください。

[Release](#BioSample_Release)<a name="BioSample_Release"></a>  
: 登録したサンプルは査定された後、公開されます。

[Hold](#BioSample_Hold)<a name="BioSample_Hold"></a>  
: この BioSample アクセッション番号を引用している DDBJ/DRA/GEA/MetaboBank データが公開されると同時に公開されます。
この BioSample 番号を引用している非公開の DDBJ/DRA/GEA/MetaboBank データが公開されることはありません。

FAQ: [データ公開の依頼方法は？](/faq/ja/request-release.html)

### External Links {#Area_biosample-external-links}

[Link description](#Link_description)<a name="Link_description"></a>  
: サンプルに直接関連するリソース URL に付けるラベル (表示名)。

[URL](#BioSample_URL)<a name="BioSample_URL"></a>  
: サンプルに直接関連するリソースの URL。

### Comments {#Area_comments}

[Private comments to DDBJ staff](#Private_comments)<a name="Private_comments"></a>
: データベーススタッフへの質問やプロジェクトに関する追加情報を記入します。内容は公開されません。

## Sample package {#Sample-package}

生物種やデータ種別毎にカスタマイズされた属性から成るパッケージを一つ選択します。パッケージの詳しい説明と選択方法は[サンプルパッケージ](/biosample/overview.html#package)をご覧ください。[属性リスト](/biosample/attribute.html)

* Standard
	* SARS-CoV-2: clinical or host-associated
	* SARS-CoV-2: wastewater surveillance
	* Microbe
	* Model organism or animal
	* Metagenome or environmental
	* Invertebrate
	* Human
	* Plant
	* Viral
	* Beta-lactamase
	* Omics
* Pathogen
	* Pathogen: clinical or host-associated
	* Pathogen: environmental/food/other
* MIxS
	* Cultured Bacterial/Archaeal Genomic Sequences (MIGS.ba)
	* Eukaryotic Genomic Sequences (MIGS.eu)
	* Viral Genomic Sequences (MIGS.vi)
	* Environmental/Metagenome Genomic Sequences (MIMS.me)
	* Metagenome-assembled Genome Sequences (MIMAG)
	* Single Amplified Genome Sequences (MISAG)
	* Specimen Marker Sequences (MIMARKS.specimen)
	* Survey-related Marker Sequences (MIMARKS.survey)
	* Uncultivated Viral Genome Sequences (MIUVIG)

* Environmental package
	* agriculture
	* air
	* built
	* food-animal
	* food-farm_env
	* food-human_foods
	* food-prod_facility
	* host-associated
	* human-associated
	* human-gut
	* human-oral
	* human-skin
	* human-vaginal
	* hydrocarbon-cores
	* hydrocarbon-fluids_swabs
	* microbial
	* miscellaneous
	* plant-associated
	* sediment
	* soil
	* symbiont-associated
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

### organism {#organism}

「生物名」として [organism](/biosample/attribute.html#organism) には、[NCBI Taxonomy](https://ncbi.nlm.nih.gov/taxonomy) において、種、もしくは、それ以下のランクで "scientific name" とされている名称を記載します。

[NCBI Taxonomy](https://ncbi.nlm.nih.gov/taxonomy)に生物名が登録されていない場合、[Organism qualifier に記載する生物名](/ddbj/organism.html)を参考に、提唱する生物名を organism に記入し、他の情報と共に BioSample を submit します。   
DDBJ スタッフが submit された情報を基に NCBI Taxonomy に生物名を申請します。Taxonomy に登録され次第、BioSample アクセッション番号が発行されます。

### locus tag prefix {#locus_tag_prefix}

アノテーション付きゲノム配列を [DDBJ](/ddbj/index.html) に登録する場合、遺伝子をユニークに管理する [Locus tag prefix](/ddbj/locus_tag.html) が必要になります。希望するタグ名を [locus_tag_prefix](/biosample/attribute.html#locus_tag_prefix)に記入します。   
DDBJ スタッフが NCBI に locus tag prefix を予約後、BioSample アクセッション番号が発行されます。 

## Overview  {#Overview}

[Overview](#BioSample_Overview)<a name="BioSample_Overview"></a>  
: 登録内容を確認し問題がなければ一番下の Submit ボタンをクリックしてサンプルを投稿してください。"Submission_ID.txt" (例 SSUB000001.txt) ファイルでアップロードしたサンプル属性の内容をダウンロードすることができます。
