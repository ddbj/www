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

[登録用アカウント](/account.html) を取得します。

[D-way](https://ddbj.nig.ac.jp/D-way/) にログインします。ウェブサイト上部にある "BioProject" メニューから BioProject 登録ページに移動します。BioProject ページ内の \[New submission\] をクリックし、新規プロジェクト登録を作成します。

<div class="attention">
DDBJ センターから登録者に問い合わせた後三か月以上回答が無い場合は Submission をキャンセルいたします。
</div>

{% include image.html url="books/hbp-01.jpg" caption="BioProject の新規登録作成" class="w450" %}

BioProject を新規登録する場合は左のタブから順番に内容を英語で入力していきます。[BioProject 入力項目の説明](/bioproject/project-info.html)

{% include image.html url="books/hbp-02.jpg" caption="プロジェクトの入力" class="w450" %}

ゲノムをアセンブルするプロジェクトでは、アセンブリに対してユニークな [Locus tag prefix](/ddbj/locus_tag.html) が必要です。

\[Project data type="Genome Sequencing" or "Metagenome"\] AND \[Capture="Whole"\] AND \[Objective="Sequence" or "Annotation" or "Assembly"\] で Locus tag prefix 入力ボックスが現れます。

プレフィックスには３-１２文字の英数字のみを含めることができます。先頭は英文字にします。数字は２文字目以降で使用できます (例: A1C)。シンボル (-\_\*) を含めることはできません。プレフィックスとタグの値はアンダースコア '\_' で区切ります (例: A1C\_00001)。

[WGS](/ddbj/wgs.html) の登録のみで prefix を使用しない場合は入力欄を空にしてください。

prefix は NCBI が一括管理しています。プロジェクトを投稿する段階で、NCBI に prefix を予約しにいきます。予約済みの場合はエラーになるので、再度希望する prefix を入力して投稿します。

<div class="attention" markdown="1">
複数 prefix を取得する場合は [BioSample で取得](/biosample/submission.html)します。
</div>

{% include image.html url="books/hbp-03.jpg" caption="Locus tag prefix の取得" class="w450" %}

最後の "OVERVIEW" で内容を確認したうえで \[Submit\] をクリックして投稿します。

{% include image.html url="books/hbp-04.jpg" caption="BioProject の投稿" class="w450" %}

"OVERVIEW" には初回投稿時の内容が表示され続けます。登録後の更新は反映されませんので、ご注意ください。

## アクセッション番号  {#accession-number}

ウェブから投稿されたデータに対して PSUB で始まる仮 ID が自動的に割り当てられます。正式なアクセッション番号が発行されるまでは、この仮 ID で登録を参照します。
DDBJ BioProject スタッフはデータを査定した後、完成したデータに対してプレフィックス "PRJD" のアクセッション番号を発行します。 [D-way](https://ddbj.nig.ac.jp/D-way/) にログイン後、ウェブ上で登録したプロジェクトの進行状況やアクセッション番号を確認することができます。

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

## プロジェクトの公開 {#project-release} 

以下の選択肢があります。公開予定日は設定することができません。

- 査定が終わった後すぐに公開
- BioProject アクセッション番号を引用しているデータと同時に公開

登録したプロジェクトは非公開にすることができます。DDBJ/DRA/GEA/MetaboBank　データが公開されると、引用されている BioProject データは自動的に公開されます。この BioProject アクセッション番号を引用している非公開の DDBJ/DRA/GEA/MetaboBank　データが公開されることはありません。  
[プロジェクトの連動公開について](/bioproject/overview.html#release)

公開された BioProject は [NCBI](https://www.ncbi.nlm.nih.gov/bioproject) と [EBI](https://www.ebi.ac.uk/) BioProject と交換されます。

## プロジェクトの更新  {#update}

登録が完了したデータを更新することができます。[メッセージフォーム](/contact-ddbj.html)よりご連絡ください。

## プロジェクトとデータのリンク  {#link-experimental-data-project}

DRA/GEA/MetaboBank にデータを登録する場合は、事前に登録した BioProject アクセッション番号を指定します。  
DDBJ にゲノム、TSA データ等を登録する場合は、アノテーションファイルの DBLINK 行に BioProject アクセッション番号を記入します。
