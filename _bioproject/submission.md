---
layout: tabbed_indexed_content
service_name: BioProject
title: プロジェクトの登録
category: bioproject
current_tab: submission
lang: ja
---

## プライマリーとアンブレラ {#primary-and-umbrella}

プロジェクトにはプライマリーとアンブレラの二種類があります。

プライマリープロジェクト  
: 既に登録したデータ、または、これから登録しようとしているデータをまとめるために登録者が作成するプロジェクト。関連するデータが公開されるまで非公開にすることができます。

アンブレラプロジェクト

: 関連性のあるプロジェクトを上位でまとめるプロジェクト。<span class="red">アンブレラプロジェクトは非公開にすることはできません。</span>

* 登録データはプライマリープロジェクトを直接参照することができますが、アンブレラプロジェクトを直接参照することはできません。

## 階層構造 {#hierarchy}

大規模プロジェクトを１つ以上の階層で表すことができます。最上位で共同研究プロジェクト全体を表し、二階層目で各機関が分担しているプロジェクトに対応するアンブレラプロジェクトを作成し、最後の三段目で実験データから参照されるプライマリープロジェクトを作成する、といった構成です。プライマリーとアンブレラプロジェクトは複数のアンブレラプロジェクトを参照することができます。

{% include image.html url="submission/bp_org.jpg" caption="(A) 二階層 (B) 三階層" class="w600" %}

## プロジェクトが必要な場合  {#project-registration}

プロジェクトが必要かどうかは[登録ナビゲーション](/submission-navigation.html)で確認してください。

## 新規登録 {#new-bioproject-submission}

[D-way アカウント](/account.html)を取得します。  
[D-way](https://ddbj.nig.ac.jp/D-way/) にログインします。上部メニューから BioProject 登録ページに移動します。BioProject ページ内の [New submission] で新規登録を作成します。

{% include image.html url="books/hbp-01.jpg" caption="新規登録作成" class="w450" %}

左のタブから順番に内容を英語で入力していきます。[BioProject 入力項目の説明](/bioproject/project-info.html)

{% include image.html url="books/hbp-02.jpg" caption="プロジェクトの入力" class="w450" %}

アノテーションが付与されたゲノム配列を [DDBJ](/ddbj/genome.html) に登録する場合、
[locus tag prefix](/ddbj/locus_tag.html) を [BioSample](/biosample/submission.html)で登録します。  
最後の "OVERVIEW" で内容を確認したうえで [Submit] で登録します。

{% include image.html url="books/hbp-04.jpg" caption="BioProject の登録" class="w450" %}

## アクセッション番号 {#accession-number}

登録されたプロジェクトに対して、プレフィックス "PRJDB" のアクセッション番号が自動で発行されます。
即日公開 (Release immediately following curation) が指定されている場合、登録された日の夜間に自動公開されます。

<div class="attention" markdown="1">
- PSUB で始まる仮 ID を論文中に引用しないでください。   
- EBI/NCBI に登録したプロジェクトを DDBJ に重複して登録しないでください。
</div>

## アンブレラプロジェクトの登録 {#submit-umbrella-project}

アンブレラプロジェクトは通常のプライマリープロジェクトと同様 [D-way](https://ddbj.nig.ac.jp/D-way/) から登録します。 <span class="red">登録の際には必ず [Private comments to DDBJ staff](/bioproject/project-info.html#Private_comments) にこの登録がアンブレラであることを記入してください。
アンブレラプロジェクトを非公開にすることはできません。</span>

[Haplotype](/ddbj/haplotype.html#bioproject) をまとまるアンブレラプロジェクトを登録する場合、配下にリンクするプライマリープロジェクトのアクセッション番号とその区別 (例 PRJDB1 Principal, PRJDB2 Alternate, PRJDB3 DRA) を記入します。

{% include image.html url="books/hbp-05.jpg" caption="アンブレラプロジェクトの登録" class="w450" %}

## アンブレラプロジェクトへのリンク  {#link-primary-project-umbrella}

プライマリープロジェクトを登録する際、[Umbrella BioProject](/bioproject/project-info.html#Area_linked-project) にリンクすべきアンブレラプロジェクトのアクセッション番号を記入します。BioProject スタッフは記入内容をみて、プロジェクトをアンブレラにリンクする作業を行います。

{% include image.html url="books/hbp-06.jpg" caption="アンブレラへのリンク" class="w450" %}

## ヒトデータの登録 {#human-data}

ヒトデータを DRA/GEA/DDBJ へ登録するためには、[DBCLS に登録予定データの提供申請を提出](/policies.html#unrestricted-access)し、承認されている必要があります。詳しくは[ヒトを対象とした研究データの登録について](/policies.html#submission-of-human-data)をご覧ください。   
承認されている場合、BioProject の「Private comments to DDBJ staff」に提供申請 ID (例 J-DS000001-001) を記入します。

{% include image.html url="books/bp-nbdc-approval.jpg" caption="提供申請 ID の記入" class="w450" %}

## プロジェクトの公開 {#project-release}

以下のいずれかを選択します。公開予定日は設定できません。

- 登録完了後、すぐに公開
- BioProject アクセッション番号を引用しているデータと同時に公開

登録したプロジェクトは非公開にすることができます。公開の仕組みは以下になります。   

* BioProject に登録されたプライマリープロジェクトは「即日公開」もしくは「非公開」にすることができます。
* 「非公開」の場合、登録されたプライマリープロジェクトは参照されている DDBJ/DRA/GEA/MetaboBank データが公開されるまで非公開に保たれます。
* プロジェクトデータの公開予定日を設定することはできません。  
* プライマリープロジェクトは参照されている DDBJ/DRA/GEA/MetaboBank データが公開されると自動的に連動公開されます。
* プライマリープロジェクトの公開は当該プロジェクトを参照している DDBJ/DRA/GEA/MetaboBank データの公開を引き起こしません。  
* プライマリープロジェクトを参照しているデータの公開は当該プロジェクトに属している他のデータの公開を引き起こしません。

FAQ: [BioProject/BioSample/塩基配列データの連動公開の仕組みは？](/faq/ja/bp-bs-seq-release.html)

{% include image.html url="submission/release_re.jpg" caption="プライマリープロジェクトと登録データの公開の仕組み" class="w500" %}

<span class="red">アンブレラプロジェクトは非公開にすることができません。</span>  

アンブレラプロジェクトは公開されているプライマリープロジェクトと非公開のプロジェクトの両方を持つことができます。第三者は公開されているアンブレラプロジェクトと非公開のプライマリープロジェクト間の関係を見ることはできません。

{% include image.html url="submission/um_pri_visibility.jpg" caption="アンブレラプロジェクトとプライマリープロジェクト間の関係の可視性" class="w350" %}

公開されたプロジェクトデータは [NCBI](https://www.ncbi.nlm.nih.gov/bioproject) と [EBI](https://www.ebi.ac.uk/) の BioProject と交換されます。

## プロジェクトの更新  {#update}

論文情報の追加など、登録が完了したプロジェクトを更新することができます。DDBJ BioProject で更新しますので、[BioProject/BioSample/DRA 更新依頼フォーム](https://forms.gle/cfJ1nf8o612qvzXQ8)から更新を依頼してください。

