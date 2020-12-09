---
layout: indexed_content
title: DDBJ BioSample Handbook
category: biosample
current_tab: handbook
tab_menu:
  - id: home
    title: Home
    url: /biosample/index.html
  - id: handbook
    title: Handbook
    url: /biosample/submission.html
  - id: sample attribute
    title: Sample Attribute
    url: /biosample/attribute.html
    children:
      - title: Example files
        url: https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482
  - id: validation rules
    title: Validation Rules
    url: /biosample/validation.html
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=biosample
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/BSSearch/
  - id: downloads
    title: Downloads
    url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/biosample
    children:
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/biosample/xsd
  - id: about bioProject
    title: About BioProject
    url: /biosample/about-biosample.html
lang: ja
---

## 概要 <a name="overview"></a>

### 目的 <a name="purpose"></a>

[BioSample](/biosample/index.html) はデータベースに登録されている実験データを得るのに使われたサンプルに関する情報を管理するデータベースです。

以下の図は BioSample がどのように他の DDBJ のデータベースとリンクしているかを示しています。 この例は、データと二つの BioSample、三つの BioProject、一つの Umbrella BioProject から構成されています。ユーザは BioProject または BioSample データベースを検索し、目的のレコードを取得、そこからのリンクをたどることによって [DDBJ](/ddbj/index.html)、[DRA](/dra/index.html) に登録されている関連する実験データを得ることができます。

{::nomarkdown}
{% include image.html url="submission/biosample_integration.jpg" caption="BioSample と他の DDBJ データベースとの連携" class="w450" %}
{:/}

### サンプル <a name="sample"></a>

DDBJ のデータベースに登録されているサンプルが多様であること、また、サンプルの適切な記載方法が研究内容により異なることから BioSample の定義は柔軟なものになっています。 BioSample の典型的な例としては細胞株、組織の生検、生物個体や環境サンプルなどが挙げられます。

Biological/Technical replicate は "replicate" というユーザ定義の属性を使い "biological replicate 1"、"biological replicate 2" のようにしてサンプルを区別します。[FAQ: 塩基配列登録にはいくつのサンプルが必要ですか?](/faq/ja/samples-for-sra)

BioSample はサンプルについての以下のような情報を含みます:

  - 生物種
  - 採取された生物試料、例: 器官、組織、セルタイプ
  - 表現型 - 疾患や個人の医学的な情報など

ヒトに関する情報とそれへのアクセスは適用される全ての倫理的な要請を満たしている必要があります。 DDBJ BioSample データベースはアクセスを制限する仕組みを持っていないため、プライバシーに抵触する可能性のあるヒト由来サンプルを登録することはできません。

### リファレンスバイオサンプル <a name="reference-biosamples"></a>

BioSample に登録されたサンプルの一部は、多くの実験で共通に使用されるかもしれません。 ここではこのようなサンプルセットのことを "<span class="italic">リファレンスバイオサンプル (reference biosample)</span>" と呼びます。
リファレンスバイオサンプルの例としては、広く使われているセルラインやマウスの系統が挙げられます。

BioSample では広く使われているサンプルが事前に BioSample にカタログ化されており、すぐに引用できるようになっています。これは、登録者が新しい実験データを DDBJ/EBI/NCBI に登録する度に、汎用的なサンプルを毎回 BioSample に登録しなくても済むようにするためです。 現在、リファレンスバイオサンプルには [ATCC](http://www.atcc.org/) と [Coriell](http://ccr.coriell.org/) が含まれています。


### サンプルの属性<a name="sample-attributes"></a>

BioSample レコードを構成する主要部分は「サンプル属性」です。属性にはセルタイプ、採取地や表現型などの情報を記載することができ、対象となるサンプルを定義します。 BioSample の属性は構造化された「属性名:値」 (name:value) の組として表現されます。例) tissue:liver

BioSample は属性名にコントロールされた語句 ("辞書") を使うことをサポートしています。

DDBJ BioSample に実装された最初の辞書は [Genomics Standards Consortium](http://wiki.gensc.org/index.php?title=Main_Page) によって作成されたゲノム、メタゲノム、ターゲットローカスの記載を標準化するために最低限必要な情報を定めた [MIxS](http://wiki.gensc.org/index.php?title=MIxS) チェックリストです。

MIxS チェックリストについては Nature Biotechnology 29, 415–420 (2011) \| doi: 10.1038/nbt.1823(PMID:[21552244](https://www.ncbi.nlm.nih.gov/pubmed/21552244) ) を参照してください。

{::nomarkdown}
{% include image.html url="books/mixs.jpg" caption="MIxS チェックリスト" class="w450" %}
{:/}

### 生物名 <a name="organism"></a>

BioSample の [organism](/biosample/attribute.html?all=all#organism) に記載する生物名については「[生物名について](/ddbj/organism.html)」をご覧ください。 以前は微生物などで完全長ゲノム配列を登録する場合、種の学名に加えて strain などの名称を organism に含めて記載していましたが、現在は学名のみの記載を原則としています。strain 名は BioSample の [strain](/biosample/attribute.html?all=all#strain) に記入します。

関連するお知らせ: [生物の株情報を管理する方法が変更になります](/news/ja/2013-12-13.html)

### 薬剤感受性表 <a name="antibiogram"></a>

BioSample レコードに薬剤感受性表（アンチバイオグラム、Antibiogram）を含めることができます（登録例: [SAMN07958491](https://www.ncbi.nlm.nih.gov/biosample/SAMN07958491)）。登録を希望する場合は [BioSample チーム](/contact-ddbj.html)に連絡してください。

薬剤感受性表の登録ガイドラインは NCBI BioSample の各ページを参照してください。

  - [Antibiograms - beta-lactamase
    MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/beta-lactamase/)
  - [Antibiograms - pathogen
    MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram/)
  - [Antibiograms - mycobacterial
    non-MIC](https://www.ncbi.nlm.nih.gov/biosample/docs/antibiogram-myco/)

### XML スキーマ <a name="xml-schema"></a>

[BioSample XML schema](https://github.com/ddbj/pub/tree/master/docs/biosample)

## メタデータ<a name="metadata"></a> 

必須<span class="red">\*</span>  
条件によって必須<span class="conditionally_required">\*</span>

### Submitter <a name="Submitter"></a>

#### Submitter <a name="Area_biosample-submitter"></a>

登録者情報。登録に関する連絡はここに記載された E-mail アドレス宛てに行われます。 必要な人数分作成します。 連絡先情報は DDBJ スタッフが登録者に連絡するために使われ、一般に公開されることはありません。連絡先情報のかわりに研究者の所属する組織に関する情報が公開されます。

[First name](#BioSample_First_name)<span class="red">\*</span><a name="BioSample_First_name"></a>  
: 登録者の first name。

<!-- end list -->

[Last name](#BioSample_Last_name)<span class="red">\*</span><a name="BioSample_Last_name"></a>  
: 登録者の last name。

<!-- end list -->

[E-mail](#BioSample_E-mail)<span class="red">\*</span><a name="BioSample_E-mail"></a>  
: E-mail アドレス。所属する組織ドメインのメールアドレスを指定してください。

#### Organization <a name="Area_biosample-organization"></a>

[Organization](#Organization)<a name="Organization"></a>  
: コンタクトパーソンが所属する組織。

<!-- end list -->

[Submitting organization](#BioSample_Submitting_organization)<span class="red">\*</span><a name="BioSample_Submitting_organization"></a>  
: 組織のフルネーム。

<!-- end list -->

[Submitting organization URL](#BioSample_Submitting_organization_URL)<a name="BioSample_Submitting_organization_URL"></a>  
: 登録者が所属する組織の URL。

#### Data Release <a name="Area_biosample-data-release"></a>

"Hold" か "Release" のどちらかを選びます。公開予定日を指定することはできません。データ公開の仕組みについては[データ公開](#sample-release)をご覧ください。

[Release](#BioSample_Release)<a name="BioSample_Release"></a>  
: 登録したサンプルは査定された後、公開されます。

<!-- end list -->

[Hold](#BioSample_Hold)<a name="BioSample_Hold"></a>  
: この BioSample ID を引用している DDBJ、DRA、DTA レコードが公開されると同時に公開されます。この BioSample ID を引用している非公開の DDBJ レコードが公開されることはありません。

### General info <a name="General-info"></a>

[External Links](#Link)<a name="Link"></a>  
: サンプルに直接関連するリソースの URL とそれに付けるラベル (表示名)。

<!-- end list -->

[Link description](#Link_description)<a name="Link_description"></a>  
: サンプルに関連するウェブサイトの表示名。

<!-- end list -->

[URL](#BioSample_URL)<a name="BioSample_URL"></a>  
: ウェブサイトの URL。

### Sample type <a name="Sample-type"></a>

#### Core Package <a name="Area_core-package"></a>

[Genome, metagenome or marker sequences (MIxS compliant)](#MIxS_Sample)<a name="MIxS_Sample"></a>  
: ゲノム、メタゲノムやマーカー配列の場合に使用します。ゲノム、メタゲノムやマーカー配列が由来するサンプルの記載方法を標準化するため Genome Standards Consortium (GSC) が策定した属性が使われます。[MIxS](http://wiki.gensc.org/index.php?title=MIxS) が定めた必須属性があるかどうかで [MIxS](http://wiki.gensc.org/index.php?title=MIxS) を満たしているかどうかが検証されます。MIxS についての詳細は [GSC ウェブサイト](http://wiki.gensc.org/index.php?title=MIxS) をご覧ください。

<!-- end list -->

[Functional genomics samples (e.g. transcriptome, epigenetics etc)](#functional_genomics_samples)<a name="functional_genomics_samples"></a>  
: 遺伝子発現、遺伝子発現制御、エピジェネティクスやゲノム変異解析等の機能ゲノミクスデータを受け付けている [Genomic Expression Archive (GEA)](/gea/index.html) への登録のためのパッケージです。機能ゲノミクス実験で頻出するサンプル属性から構成されています。

<!-- end list -->

[Other samples (e.g. transcriptome, epigenetics etc)](#General_Sample)<a name="General_Sample"></a>  
: transcriptome, epigenetics など、どのようなサンプルタイプにも使用することができます。一般的な属性と登録者が作成するカスタム属性で記述されます。

#### MIxS <a name="Area_mixs"></a>

[(Meta)Genomic Sequences Sample (MIMS)](#Meta_Genomic_Sequences_Sample)<a name="Meta_Genomic_Sequences_Sample"></a>

: | ------------------------------------------ |
  | Environmental/Metagenome Genomic Sequences |

    [環境サンプルの説明](/ddbj/env.html)もご参照ください。

<!-- end list -->

[Genomic Sequences Sample (MIGS)](#Genomic_Sequences_Sample)<a name="Genomic_Sequences_Sample"></a>

: | --------------------------------------------- |
  | Cultured Bacterial/Archaeal Genomic Sequences |
  | Eukaryotic Genomic Sequences                  |
  | Viral Genomic Sequences                       |

    特定宿主から確実に回収できる内部共生生物、多くの cyanobacteria のように容易に同定可能であるが培養ができない生物、純粋培養は不可能でも罹患植物から確実に回収できる phytoplasmas といった対象は環境サンプルとは扱いません。"Cultured Bacterial/Archaeal", "Eukaryotic", "Viral" のいずれかを選択します

<!-- end list -->

[Marker Sequences Sample (MIMARKS)](#Marker_Sequences_Sample)<a name="Marker_Sequences_Sample"></a>

: | ------------------------------- |
  | Specimen Marker Sequences       |
  | Survey related Marker Sequences |

    MIMARKS specimen: for marker gene (e.g., COI) sequences obtained from any material identifiable by means of specimens

    MIMARKS-specimen は培養した、あるいは同定可能な標本から得られた marker gene に対する contextual data に適用します。

    MIMARKS survey: for uncultured diversity marker gene (e.g., 16S rRNA, 18S rRNA, nif, amoA, rpo) surveys

    MIMARKS-survey は分離培養や生物種を同定せず、環境から直接得られた marker gene に対する contextual data に適用できます。

#### Environmental package <a name="Area_environmental-package"></a>

[Environmental package (MIxS Sample)](#Environmental_package)<a name="Environmental_package"></a>  
: 以下のパッケージから適切なものを選びます。パッケージ毎に必要とされる属性が追加されます。  
<span class="red">"Environmental/Metagenome Genomic Sequences" と "Survey related Marker Sequences" のときは No package を選択できません。</span>

    | --------------------------- |
    | No package                  |
    | air                         |
    | host-associated             |
    | human-associated            |
    | human-gut                   |
    | human-oral                  |
    | human-skin                  |
    | human-vaginal               |
    | microbial mat/biofilm       |
    | miscellaneous or artificial |
    | plant-associated            |
    | sediment                    |
    | soil                        |
    | wastewater/sludge           |
    | water                       |

### Attributes <a name="Attributes"></a>

[Sample attributes](#Sample_attributes)<a name="Sample_attributes"></a>  
: モデルごとにカスタマイズされた BioSample ワークシートをダウンロードします。 ワークシートはタブ区切りテキストファイルでスプレッドシートプログラムやテキストエディタで開くことができます。属性を記載したテキストファイルをアップロードすると validator により内容がチェックされます。 [Warning や Error メッセージ](/biosample/validation.html) が表示された場合は必要に応じて内容を修正してから再度アップロードしてください。エラーが解消されるまで次のタブに進むことはできません。

<!-- end list -->

[Attributes](#BioSample_Attributes)<a name="BioSample_Attributes"></a>  
: [サンプル属性のリスト](/biosample/attribute.html)  
必須項目に加えて、いくつかの推奨項目があります。BioSample データをより役立つものにするためにできるだけ情報を登録してください。 登録システムが一般的に使われている属性を標準化された名称とともに提供します。 登録を準備する際は[属性のリスト](/biosample/attribute.html)や[登録例](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482)を参照し、該当する項目を入力してください。 リストにない情報を持っている場合はユーザが定義した独自の属性をタブ区切りテキストファイルの末尾に追加することができます。

### Overview <a name="Overview"></a>

[Overview](#BioSample_Overview)<a name="BioSample_Overview"></a>  
: 登録内容を確認し問題がなければ一番下の Submit ボタンをクリックしてサンプルを投稿してください。 "Submission ID.txt" ファイルでアップロードしたサンプル属性の内容をダウンロードすることができます。

# BioSample への登録

  {::options parse_block_html="true" /}
  <div class="attention">
  ヒトを対象とした研究データの登録について
  : <span class="red">研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#human)を熟読してください。</span>
  </div>

## サンプルの登録 <a name="sample-submission"></a>

### 新規サンプルの登録 <a name="create-new-sample-submission"></a>

[アカウント Handbook](/account.html) に従いアカウントを取得します。

D-way ウェブサイトの上部にある "BioSample" メニューから BioSample 登録ページに移動します。 BioSample ページ内の \[New submission\] をクリックし、新規サンプル登録を作成します。

<div class="attention red">
1 submission で登録できるサンプル数の上限は約 2,000 になります。
</div>

<div class="attention red">
DDBJ センターから登録者に問い合わせた後三か月以上回答が無い場合は Submission をキャンセルいたします。
</div>

{::nomarkdown}
{% include image.html url="books/hbs-01.jpg" caption="BioSample の新規登録作成" class="w450" %}
{:/}

BioSample を新規登録する場合は左のタブから順番に内容を英語で入力していきます。

各項目の説明は[こちら](#metadata)を参照してください。

{::nomarkdown}
{% include image.html url="books/hbs-02.jpg" caption="BioSample の登録" class="w450" %}
{:/}

"SAMPLE TYPE" でサンプルの種類を選択します。ゲノム配列を取得したサンプルの場合、[MIxS 基準](#sample-attributes)を満たしたサンプル記述をする必要があります。

Sample type については[こちら](#Sample_type)を参照してください。

{::nomarkdown}
{% include image.html url="books/hbs-03.jpg" caption="Sample type の選択" class="w450" %}
{:/}

Sample type に応じた属性入力用テンプレートファイルをダウンロードします。

必須・任意・ユーザが定義した一連の属性でサンプルを記述することが、登録作業の中心になります。

{::nomarkdown}
{% include image.html url="books/hbs-04.jpg" caption="サンプル属性テンプレートファイルのダウンロード" class="w450" %}
{:/}

### 属性値の記入 <a name="enter-sample-attributes"></a>

[BioSample 属性の説明](/biosample/attribute.html)。独自の属性を追加したい場合は、右端に属性名と値を追加します。

[サンプル属性ファイルの記入例](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482)

ファイルはタブで区切られているので、エクセルなどの表計算ソフトで編集することができます。一行目には属性名が記載されています。\* が必須属性です。

二行目以降に１行１サンプルで入力していきます。BioProject アクセッション番号が発行されていないプロジェクトの場合、[bioproject\_id](/biosample/attribute.html?all=all#bioproject_id) には PSUB 番号を入力します。

<div class="attention red">
サンプル属性のタブ区切りテキストファイルでは1行に1サンプルの属性を入力します。行を複数作成することで，複数の sample
をまとめて登録することができます。
</div>

#### 値がない場合の記載方法 <a name="missing-value-reporting"></a>

[INSDC ではサンプル属性値が存在しない場合の記載方法を標準化しています](https://www.ebi.ac.uk/ena/about/missing-values-reporting)。 登録者は常に定められた形式で属性値を提供することが推奨されますが、値がない (missing/null value)
ことを報告する際には、状況をより細かく表す用語を使用することが求められます。適切な場合は "lower level" の用語を使用し、そうでない場合には "top level" の用語を使用します。

以下に "missing/null value" に対する用語と定義を記載しています。

必須属性に対する値がない場合にだけ標準化された用語を使用します。推奨・任意属性に対する値がない場合は、値を空にするか、属性そのものを使用しないでください。

INSDC missing value reporting terms

<table>
<tr>
<th>
INSDC term  
(top level)
</th>
<th>
INSDC term  
(lower level)
</th>
<th>Definition</th>
</tr>

<tbody>
<tr>
<td>
not applicable
</td>
<td></td>
<td>
information is inappropriate to report, can indicate that the standard itself fails to model or represent the information appropriately
</td>
</tr>

<tr>
<td rowspan="3" class="borderbtm">
missing
</td>
<td>
not collected
</td>
<td>
information of an expected format was not given because it has not been collected
</td>
</tr>

<tr>
<td>
not provided
</td>
<td>
information of an expected format was not given, a value may be given at the later stage
</td>
</tr>

<tr>
<td>
restricted access
</td>
<td>
information exists but can not be released openly because of privacy concerns
</td>
</tr>
</tbody>
</table>

#### サンプル属性の validation <a name="validation"></a>

サンプル属性ファイルを選択して Continue をクリックすると validator がルールに基づいてアップロードされたファイルをチェックします。Error や Warning メッセージが表示された場合は必要に応じて内容を修正して再度アップロードします。Error
が解消されない限り次のタブに進んで内容を submit することはできません。

Validation ルールとメッセージについては [Validation rules ページ](/biosample/validation.html)をご覧ください。

{::nomarkdown}
{% include image.html url="books/hbs-04-2.jpg" caption="BioSample の validation。この例では \"KOME-2\" の collection_date に将来の日付が記入されているエラーと geo_loc_name 中の国名と緯度経度が一致していない warning が表示されています。" class="w500" %}
{:/}

最後の "OVERVIEW" で内容を確認したうえで投稿します。"ATTRIBUTES" で属性ファイルをダウンロードすることができます。

<div class="attention red">
登録後は最新の属性ファイルをダウンロードすることができます。
</div>

{::nomarkdown}
{% include image.html url="books/hbs-05.jpg" caption="BioSample の投稿" class="w450" %}
{:/}

### アクセッション番号 <a name="accession-numbers"></a>

新規 Submission を作成すると SSUB で始まる仮 ID が自動的に割り当てられます。D-way から validation を通過したサンプルが投稿されると自動的にプレフィックス "SAMD" のアクセッション番号が発行されます。未登録の生物名が organism に記載されていた場合や locus\_teg\_prefix に値が記入されていた場合はキュレータが必要な査定を実施した後にアクセッション番号が発行されます。[D-way アカウント](https://ddbj.nig.ac.jp/D-way/)にログイン後、ウェブ上で登録したサンプルの進行状況やアクセッション番号を確認することができます。

{::options parse_block_html="true" /}
  <div class="attention red">
  - SSUB で始まる仮 ID を論文中に引用しないでください。
  - EBI/NCBI に登録したサンプルを DDBJ に重複して登録しないでください。
  </div>

### サンプルの公開<a name="sample-release"></a> <a name=""></a>

以下の選択肢があります:

  - 査定が終わった後すぐに公開
  - BioSample アクセッション番号を引用しているデータと同時に公開

<div class="attention red">
公開予定日は設定することができません。
</div>

登録した Sample データは一定期間非公開にすることができます。 DDBJ レコードが公開されると、引用されている BioSample データは自動的に公開されます。この BioSample アクセッション番号を引用している非公開の DDBJ レコードが公開されることはありませんが、引用されている BioProject は連動公開されます。

FAQ: [BioProject/BioSample/塩基配列データの連動公開の仕組みは？](/faq/ja/bp-bs-seq-release.html)

### サンプルの更新 <a name="update-biosample"></a>

登録が完了したデータを更新することができます。[メッセージフォーム](/contact-ddbj.html)よりご連絡ください。
