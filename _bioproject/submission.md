---
layout: tabbed_indexed_content
service_name: BioProject
title: プロジェクトの登録
category: bioproject
current_tab: submission
lang: ja
---

<div class="attention" markdown="1">
ヒトを対象とした研究データの登録について
: <span class="red">研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#submission-of-human-data)を熟読してください。</span>
</div>

## プロジェクトの登録が必要な場合  {#project-registration}

データ登録において BioProject が必要かどうかは「[登録ナビゲーションサイト](/submission-navigation.html)」でご確認ください。
単一のプラスミド、ウイルスやオルガネラゲノムのシークエンスといった１つ (もしくは少数の) アクセッション番号しかリンクされない場合、BioProject 登録は必須ではありません。

## 新規プロジェクトの登録  {#new-bioproject-submission}

[登録用アカウント](/account.html)を取得します。

[D-way](https://ddbj.nig.ac.jp/D-way/) にログインします。ウェブサイト上部にある "BioProject" メニューから BioProject 登録ページに移動します。BioProject ページ内の \[New submission\] をクリックし、新規プロジェクト登録を作成します。

{% include image.html url="books/hbp-01.jpg" caption="BioProject の新規登録作成" class="w450" %}

BioProject を新規登録する場合は左のタブから順番に内容を英語で入力していきます。[BioProject 入力項目の説明](/bioproject/project-info.html)

{% include image.html url="books/hbp-02.jpg" caption="プロジェクトの入力" class="w450" %}

<div class="attention" markdown="1">
機能アノテーションが付されたゲノム配列を [DDBJ](/ddbj/genome.html) に登録する場合、
[Locus tag prefix](/ddbj/locus_tag.html) を [BioSample](/biosample/submission.html)で登録します。
2022年11月9日に BioProject の Locus tag prefix 登録口は閉鎖され、prefix 登録は BioSample に一本化されました。
</div>

最後の "OVERVIEW" で内容を確認したうえで \[Submit\] をクリックして登録します。

{% include image.html url="books/hbp-04.jpg" caption="BioProject の投稿" class="w450" %}

## アクセッション番号  {#accession-number}

登録されたプロジェクトに対して、プレフィックス "PRJDB" の BioProject アクセッション番号が自動で発行されます。
即日公開 (Release immediately following curation) が指定されている場合、登録された日の夜間に自動で公開されます。

<div class="attention">
- PSUB で始まる仮 ID を論文中に引用しないでください。<br>
- EBI/NCBI に登録したプロジェクトを DDBJ に重複して登録しないでください。
</div>

## アンブレラプロジェクトの登録  {#submit-umbrella-project}

アンブレラプロジェクトは通常のプライマリープロジェクトと同様 [D-way](https://ddbj.nig.ac.jp/D-way/) から登録します。 <span class="red">登録の際には必ず [Private comments to DDBJ staff](/bioproject/project-info.html#Private_comments) にこの登録がアンブレラであることを記入し DDBJ BioProject チームに伝えてください。</span>
アンブレラプロジェクトを非公開にすることはできません。

{% include image.html url="books/hbp-05.jpg" caption="アンブレラプロジェクトの登録" class="w450" %}

## アンブレラプロジェクトへのリンク  {#link-primary-project-umbrella}

プライマリープロジェクトを登録する際、[Umbrella BioProject](/bioproject/project-info.html#Area_linked-project) にリンクすべきアンブレラプロジェクトのアクセッション番号を記入します。BioProject スタッフは記入内容をみて、プロジェクトをアンブレラにリンクする作業を行います。

{% include image.html url="books/hbp-06.jpg" caption="アンブレラへのリンク" class="w450" %}

## ヒトデータの登録 {#human-data}

個人識別符号に該当するデータを DRA/GEA/DDBJ へ登録するためには、
[NBDC ヒトデータ審査委員会事務局に登録予定データの提供申請書を提出](/policies.html#unrestricted-access)し、承認されている必要があります。
承認されている場合、BioProject の「Private comments to DDBJ staff」に提供申請 ID (例 J-DS000001-001) を記入します。

{% include image.html url="books/bp-nbdc-approval.jpg" caption="NBDC 提供申請 ID の記入" class="w450" %}

## プロジェクトの公開 {#project-release}

以下の選択肢があります。公開予定日は設定することができません。

- 登録が完了次第すぐに公開
- BioProject アクセッション番号を引用しているデータと同時に公開

登録したプロジェクトは非公開にすることができます。DDBJ/DRA/GEA/MetaboBank データが公開されると、
引用されている BioProject データは自動的に公開されます。
BioProject の公開は参照している DDBJ/DRA/GEA/MetaboBank データの公開を引き起こしません。
[プロジェクトの連動公開について](/bioproject/overview.html#release)

公開された BioProject は [NCBI](https://www.ncbi.nlm.nih.gov/bioproject) と [EBI](https://www.ebi.ac.uk/) BioProject と交換されます。

## プロジェクトの更新  {#update}

登録が完了したデータを更新することができます。[メッセージフォーム](/contact-ddbj.html)よりご連絡ください。

## 論文情報の追加 {#publication}

[お問い合わせフォーム](https://docs.google.com/forms/d/e/1FAIpQLSeyWbdUll6ESiuraInJ2UzUuiCSoWYZ0v-zARc049_y5Z2-7A/viewform)の問い合わせ先で「BioProject/BioSample/Sequence Read Archive (DRA)」を選択し、[論文情報](/bioproject/project-info.html#Publication) (pubmed ID、pubmed ID がない場合は doi) の BioProject への追加を依頼してください。

## プロジェクトとデータのリンク  {#link-experimental-data-project}

DRA/GEA/MetaboBank にデータを登録する場合は、事前に登録した BioProject アクセッション番号を指定します。
DDBJ にゲノム、TSA データ等を登録する場合は、アノテーションファイルの DBLINK 行に BioProject アクセッション番号を記入します。

## 内容に関する問い合わせ {#inquiry}

新規生物名が記載されたプロジェクトやヒトデータを扱っているプロジェクトについては、アクセッション番号の自動発行後、キュレータから追加で内容について問い合わせる場合があります。
