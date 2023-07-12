---
layout: tabbed_indexed_content
service_name: BioSample
title: サンプルの登録
category: biosample
current_tab: submission
lang: ja
---

<div class="attention" markdown="1">
ヒトを対象とした研究データの登録について
: <span class="red">研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#submission-of-human-data)を熟読してください。</span>
</div>

## 新規サンプルの登録  {#create-new-sample-submission}

[登録用アカウント](/account.html)を取得します。

D-way ウェブサイトの上部にある "BioSample" メニューから BioSample 登録ページに移動します。 BioSample ページ内の \[New submission\] をクリックし、新規サンプル登録を作成します。

<div class="attention">
1 submission で登録できるサンプル数の上限は 1,000 です。これを超える場合は submission を分けてください。
</div>

<div class="attention">
DDBJ センターから登録者に問い合わせた後三か月以上回答が無い場合は Submission をキャンセルします。
</div>

{% include image.html url="books/hbs-01.jpg" caption="BioSample の新規登録作成" class="w450" %}

BioSample を新規登録する場合は左のタブから順番に内容を英語で入力していきます。

各項目の説明は[サンプル情報](/biosample/sample-info.html)を参照してください。

{% include image.html url="books/hbs-02.jpg" caption="BioSample の登録" class="w450" %}

"SAMPLE TYPE" でサンプルや配列種別に応じたパッケージを選択し、提示される必須・任意のサンプル属性の値を入力します。

* パッケージの選び方は[サンプル情報](/biosample/sample-info.html#Sample-type)を参照してください。
* パッケージで提供される属性は[サンプル属性](/biosample/attribute.html)を参照してください。
* BioSample では１つの Submission で複数サンプルをまとめて登録することができますが、パッケージが異なるサンプルを混ぜることはできません。

{% include image.html url="books/hbs-03.jpg" caption="パッケージの選択" class="w450" %}

パッケージに応じた属性入力用テンプレートファイルをダウンロードします。  
独自の属性を追加したい場合は、右端に属性名と値を追加します。

{% include image.html url="books/hbs-04.jpg" caption="サンプル属性テンプレートファイルのダウンロード" class="w450" %}

## 属性値の記入  {#enter-sample-attributes}

* [属性一覧と説明](/biosample/attribute.html)
* [属性ファイルの記入例](https://docs.google.com/spreadsheets/d/1VCCuSwvIRfp5-DT8cnvvAwWH4C7wbDFSjHQ_q3f3BII/edit#gid=1811256482)

ファイルはタブで区切られているので、エクセルなどの表計算ソフトで編集することができます。一行目には属性名が記載されています。\* で示されている属性は必須です。二行目以降に１行１サンプルで入力していきます。   

{% include image.html url="books/bs-tsv.jpg" caption="エクセルでの記入方法" class="w500" %}

<div class="attention">
サンプル属性のタブ区切りテキストファイルでは１行に１サンプルの属性を入力します。
行を複数作成することで、複数の sample をまとめて登録することができます。
</div>

### 値がない場合の記載方法  {#missing-value-reporting}

[INSDC ではサンプル属性値が存在しない場合の記載方法を標準化しています](https://www.insdc.org/submitting-standards/missing-value-reporting)。  
登録者は常に定められた形式で属性値を提供することが推奨されます。サンプル情報を提供できない場合 (例 患者の同定に繋がりかねない病原菌サンプルの情報) や適切ではない場合 (ラボで保有しているモデル生物や細胞株)、
INSDC の "missing value reporting standard" に従い、missing に続けて適切な reporting level term (例 "missing: control sample") を記載することを推奨します。適切な reporting level term が無い場合、"missing"、"not collected" や "not provided" を記載します。

必須属性に対する値がない場合にだけ標準化された用語を使用します。推奨・任意属性に対する値がない場合は、値を空にするか、属性そのものを使用しないでください。

INSDC missing value reporting terms ([INSDC website](https://www.insdc.org/submitting-standards/missing-value-reporting))

<table>
  <tr>
    <th>INSDC term (top level)</th>
    <th>INSDC term (lower level)</th>
    <th>Definition</th>
    <th>INSDC term (reporting level)</th>
    <th>Definition</th>
  </tr>
  <tbody>
    <tr>
      <td rowspan="2" class="borderbtm-sep">not applicable</td>
      <td rowspan="2" class="borderbtm-sep"></td>
      <td rowspan="2" class="borderbtm-sep">information is inappropriate to report, can indicate that the standard itself fails to model or represent the information appropriately</td>
      <td>control sample</td>
      <td>Information is not applicable as the sample represents a negative control sample collected in a lab.</td>
    </tr>
    <tr>
      <td>sample group</td>
      <td>Information is not applicable as the sample represents a group of samples that do not have a single origin. E.g. for co-assembly or transcriptome assembly.</td>
    </tr>
    <tr>
      <td rowspan="6" class="borderbtm-sep">missing</td>
      <td rowspan="3" class="borderbtm-sep">not collected</td>
      <td rowspan="3" class="borderbtm-sep">information of an expected format was not given because it has not been collected</td>
      <td>synthetic construct</td>
      <td>Information does not exist as the sample represents an ab-initio synthetic construct.</td>
    </tr>
    <tr>
      <td>lab stock</td>
      <td>Information was not collected as the sample represents a cultured cell line or model organism under long-term lab control.</td>
    </tr>
    <tr>
      <td>third party data</td>
      <td>Information does not exist as the metadata was not collected or reported in records predating the 2023 agreement. For use in Third PArty data submissions.</td>
    </tr>
    <tr>
      <td>not provided</td>
      <td>information of an expected format was not given, a value may be given at the later stage</td>
      <td>data agreement established pre-2023</td>
      <td>Data agreements were established before the 2023 INSDC standard and metadata can not be provided. A value may be given at a later stage.</td>
    </tr>
    <tr>
      <td rowspan="2" class="borderbtm-sep">restricted access</td>
      <td rowspan="2" class="borderbtm-sep">information exists but can not be released openly because of privacy concerns</td>
      <td>endangered species</td>
      <td>Information can not be reported as the target organism is endangered e.g. on the IUCN red-list.</td>
    </tr>
    <tr>
      <td>human-identifiable</td>
      <td>Information can not be reported as the metadata would make the sample human-identifiable.</td>
    </tr>
  </tbody>
</table>

### サンプル属性の validation  {#validation}

サンプル属性ファイルを選択して Continue をクリックすると内容がチェックされます。Error や Warning メッセージが表示された場合は必要に応じて内容を修正して再度アップロードします。Error
が解消されない限り submit することはできません。

Validation ルールとメッセージについては [Validation rules ページ](/biosample/validation.html)をご覧ください。

以下のパッケージと属性セットは少なくとも一つは必須（選択必須）になります。例えば、Microbe パッケージでは strain もしくは isolate のどちらかが必須です。  
サンプル登録用 tsv ファイルにおいて必須属性は「*」マークが先頭に付されていますが、選択必須属性はマークが付いていません。  

| パッケージ | 選択必須属性セット | 選択必須属性セット |
|---|
| Microbe | strain, isolate | isolation_source, host |
| Model.organism.animal | strain, isolate, breed, cultivar, ecotype | age, dev_stage |
| Metagenome.environmental | isolation_source, host ||
| Invertebrate | isolate, breed | isolation_source, host |
| Plant | isolate, cultivar, ecotype | age, dev_stage |
| Virus | host, lab_host ||
| Beta-lactamase | strain, isolate ||
| Pathogen.cl | strain, isolate ||
| Pathogen.env | strain, isolate ||

{% include image.html url="books/hbs-04-2.jpg" caption="BioSample の validation。この例では KOME-2 の collection_date に将来の日付が記入されているエラーと geo_loc_name 中の国名と緯度経度が一致していない warning が表示されています。" class="w500" %}

最後の "OVERVIEW" で内容を確認したうえで投稿します。"ATTRIBUTES" で属性ファイルをダウンロードすることができます。

{% include image.html url="books/hbs-05.jpg" caption="BioSample の投稿" class="w450" %}

## アクセッション番号  {#accession-numbers}

新規 Submission を作成すると SSUB で始まる仮 ID が自動的に割り当てられます。
D-way から validation を通過したサンプルが投稿されると自動的にプレフィックス "SAMD" のアクセッション番号が発行されます。  
未登録の生物名が organism に記載されていた場合や locus_tag_prefix に値が記入されていた場合はキュレータが必要な査定を実施した後にアクセッション番号が発行されます。  
[D-way アカウント](https://ddbj.nig.ac.jp/D-way/)にログイン後、ウェブ上で登録したサンプルの進行状況、最新のサンプル属性 tsv ファイルやアクセッション番号を確認することができます。

<div class="attention" markdown="1">
- SSUB で始まる仮 ID を論文中に引用しないでください。
- EBI/NCBI に登録したサンプルを DDBJ に重複して登録しないでください。
</div>

## サンプルの公開 {#sample-release} 

以下の選択肢があります。公開予定日は設定することができません。

- 査定が終わった後すぐに公開
- BioSample アクセッション番号を引用しているデータと同時に公開

登録した Sample データは一定期間非公開にすることができます。DDBJ/DRA/GEA/MetaboBank データが公開されると、引用されている BioSample データは自動的に公開されます。
BioSample が公開されても、引用している非公開の DDBJ/DRA/GEA/MetaboBank データの公開を引き起こしません。derived_from 属性で引用されている BioSample は連動公開されます。

FAQ: [BioProject/BioSample/塩基配列データの連動公開の仕組みは？](/faq/ja/bp-bs-seq-release.html)

## サンプルの更新  {#update-biosample}

登録が完了したデータを更新することができます。[メッセージフォーム](/contact-ddbj.html)からご連絡ください。  
更新されると、サンプル登録画面 ATTRIBUTES の属性ファイル (例 SSUB000001.txt) に反映されるので、ダウンロードして更新内容を確認することができます。