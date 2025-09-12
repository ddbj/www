---
layout: tabbed_indexed_content
service_name: TogoVar-repository
title: Submission
category: togovar
current_tab: submission
lang: ja
---

<div class="attention" markdown="1">
ヒトを対象とした研究データの登録について  
: <span class="red">研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#submission-of-human-data)を熟読してください。 </span>
</div>

## 登録の流れ {#submission}

TogoVar-repository には二種類の登録種別、SNP と SV、があります。

* Short variants (SNP): &le;50 bp 以下のバリアント。NCBI [dbSNP](https://ncbi.nlm.nih.gov/snp/) との交換を計画していますが、実現していません。
* Large structural variants (SV): 50 bp よりも大きいバリアント。NCBI [dbVar](https://ncbi.nlm.nih.gov/dbvar/) との交換を計画していますが、実現していません。

BioProject と BioSample 登録は必須です。関連するデータが BioProject と BioSample によりデータベースを跨ってまとめられます。メタデータは登録用エクセルに記入して作成します。バリアントは VCF で登録します。SV variant call は登録用エクセル中のシートで登録することもできます。

### 1. 登録アカウントの作成 {#account}

- [DDBJ アカウント](/ddbj-account.html) を取得します。
- [公開鍵をアカウントに登録](/ddbj-account.html#public-key) し、データを sftp/scp でアップロードできるようにします。

### 2. 登録の申し込み {#form}

[TogoVar-repository 登録申し込みフォーム](https://docs.google.com/forms/d/e/1FAIpQLSdCsaeFRjDHd-6ae-dbE8BPiHQS6cjllsKqpGQhorcgT2YZqA/viewform?usp=sf_link)で登録を申し込みます。TogoVar-repository チームが登録方法を案内します。

### 3. BioProject の登録 {#bp}

プロジェクトを [BioProject](/bioproject/submission.html) に登録します。プレフィックス PRJDB のアクセッション番号が BioProject に発行されます。

### 4. BioSample の登録 {#bs}

サンプルを [BioSample](/biosample/submission.html) に登録します。プレフィックス SAMD のアクセッション番号が BioSample に発行されます。

### 5. メタデータの作成 {#metadata}

[TogoVar-repository excel](https://github.com/ddbj/togovar-repository/raw/main/submission_excel/TogoVar_v1.4.xlsx) をダウンロードします。   
エクセルは以下のシートから構成されます。

* TogoVar_Study: 研究概要
* TogoVar_SampleSet: サンプルセット（集団）
* TogoVar_Sample: 使用したサンプル
* TogoVar_Experiment: 実験手法の解析方法
* TogoVar_Dataset: データセット (1 dataset - 1 VCF)
* Variant Call (SV): variant call をシートで登録する場合
* Variant Region (SV): variant region をシートで登録する場合

### 6. データファイルの準備 {#data-files}

バリアント (必須)、アリル頻度 (推奨) と遺伝型頻度 (任意) は VCF で登録します。以下の VCF 登録ガイドラインをご覧ください。

* [dbSNP VCF Submission Format Guidelines](/assets/files/submission/dbSNP_VCF_Submission.pdf)
* [dbVar VCF Submission Format Guidelines](/assets/files/submission/dbVar_VCF_Submission.pdf)

### 7. ファイルのアップロード {#upload}

登録用エクセルと VCF ファイルを scp/sftp でアップロードします。アップロード方法は[データのアップロード](/upload.html)を参照してください。

## アクセッション番号 {#accession}

TogoVar-repository はオブジェクトにプレフィックスで区別したアクセッション番号を発行します。
dbVar の [Overview of Structural Variation](https://www.ncbi.nlm.nih.gov/dbvar/content/overview/) もご参照ください。

* SNP/SV
	* study: dstd
* SNP
	* variant: dss
* SV
	* variant call: dssv
	* variant region: dsv
	
## データ公開 {#release}

論文で出るまでデータを非公開にすることができます。  
登録者は登録日から三年以内の公開予定日を設定することができます。
非公開のデータは [data release policy](/insdc/data-release-policy.html) に従って公開されます。

## 更新 {#update}

データを更新する場合、[TogoVar-repository チーム](/contact-ddbj.html)に連絡してください。
