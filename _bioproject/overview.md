---
layout: tabbed_indexed_content
service_name: BioProject
title: BioProject 概要
category: bioproject
current_tab: submission
lang: ja
---

## BioProject の目的  {#purpose}

生命科学分野における測定技術の長足の進歩により、日々大量かつ多種多様なデータが生み出され、様々なデータベースに登録されるようになっています。  
BioProject は研究プロジェクト、及び、プロジェクトから生み出されるデータを管理し、プロジェクトの種類や特徴といった項目でデータベースを横断して検索することを可能にします。

## プロジェクト  {#project}

BioProject は同じプロジェクトに由来するデータ、及び、まとめて提供したいデータに対して作成します。  
[Project Data Type](/bioproject/project-info.html#Project_data_type) を複数選択 (例: Genome Sequencing と Transcriptome or Gene Expression) することで、ゲノムシークエンシングと遺伝子発現解析といった異なる研究を一つのプロジェクトにまとめることができます。  
複数の生物種を対象としたプロジェクトの場合、[Organism name](/bioproject/project-info.html#BioProject_Organism_name) には共通する階層までの生物分類（例 鋼レベルの [Mammalia](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=40674&lvl=3&lin=f&keep=1&srchmode=1&unlock)）を記入します。

## プライマリーとアンブレラプロジェクト {#primary-and-umbrella}

プロジェクトにはプライマリープロジェクトとアンブレラプロジェクトの二種類があります。

プライマリープロジェクト  
: 既に登録したデータ、または、これから登録しようとしているデータをまとめるために登録者が作成するプロジェクト。関連するデータが公開されるまで非公開にすることができます。

アンブレラプロジェクト

: 関連性のあるプロジェクトを上位でまとめるプロジェクト。<span class="red">アンブレラプロジェクトは非公開にすることはできません。</span>

* 登録データはプライマリープロジェクトを直接参照することができますが、アンブレラプロジェクトを直接参照することはできません。登録データはプライマリープロジェクトを介してアンブレラプロジェクトにリンクします。
* プライマリープロジェクト同士が直接リンクされることはなく、それらはアンブレラプロジェクトを介して間接的にリンクされます。

### 階層構造  {#hierarchy}

大規模プロジェクトを１つ以上のアンブレラプロジェクトで表すことができます。最上位レベルで共同研究プロジェクト全体を表し、二段目で産出されるデータの種類に対してアンブレラプロジェクトを作成、最後の三段目で実際に登録されるデータから参照されるプライマリープロジェクトを作成する、といった構成です。

{% include image.html url="submission/bp_org.jpg" caption="階層構造の模式図。(A)二階層 (B)三階層" class="w500" %}

## データ公開 {#release}

{% include image.html url="submission/release_re.jpg" caption="プライマリープロジェクトと登録データの公開の仕組み" class="w500" %}

* BioProject に登録されたプライマリープロジェクトは「即日公開」もしくは「非公開」にすることができます。
* 「非公開」の場合、登録されたプライマリープロジェクトは参照されている DDBJ/DRA/GEA/MetaboBank データが公開されるまで非公開に保たれます。
* プロジェクトデータの公開予定日を設定することはできません。  
* プライマリープロジェクトは参照されている DDBJ/DRA/GEA/MetaboBank データが公開されると自動的に連動公開されます。
* プライマリープロジェクトの公開は当該プロジェクトを参照している DDBJ/DRA/GEA/MetaboBank データの公開を引き起こしません。  
* プライマリープロジェクトを参照しているデータの公開は当該プロジェクトに属している他のデータの公開を引き起こしません。

FAQ: [BioProject/BioSample/塩基配列データの連動公開の仕組みは？](/faq/ja/bp-bs-seq-release.html)

{% include image.html url="submission/um_pri_visibility.jpg" caption="アンブレラプロジェクトとプライマリープロジェクト間の関係の可視性" class="w500" %}

<span class="red">アンブレラプロジェクトは非公開にすることができません。</span>  

アンブレラプロジェクトは公開されているプライマリープロジェクトと非公開のプロジェクトの両方を持つことができます。第三者は公開されているアンブレラプロジェクトと非公開のプライマリープロジェクト間の関係を見ることはできません。

公開されたプロジェクトデータは [NCBI](https://www.ncbi.nlm.nih.gov/bioproject) と [EBI](https://www.ebi.ac.uk/) の BioProject と交換されます。

FAQ: [データ公開の依頼方法は？](/faq/ja/request-release.html)

## アンブレラプロジェクトの利用 {#use-umbrella}

アンブレラプロジェクトは通常のプライマリープロジェクトと同様に [D-way](https://ddbj.nig.ac.jp/D-way/) から登録します。
登録の際には必ず [Private comments to DDBJ staff](/bioproject/project-info.html#Private_comments) にこの登録がアンブレラであることを記入し BioProject チームに伝えてください。   
アンブレラプロジェクトを非公開にすることはできません。  

関連するプライマリープロジェクトを登録する際には [Umbrella BioProject](/bioproject/project-info.html#Area_linked-project) に親となるアンブレラの PRJDB 番号を記入してください。登録したプライマリープロジェクトが公開されると、自動的に指定したアンブレラに関連付けられます。

過去に登録したプライマリープロジェクトをアンブレラの傘下に追加したい場合は、アンブレラと追加したいプライマリープロジェクトの PRJDB 番号を [DDBJ BioProject にお知らせください](/contact-ddbj.html)。

