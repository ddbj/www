---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: 登録概要
category: dra
current_tab: submission
lang: ja
---

<div class="attention" markdown="1">
ヒトを対象とした研究データの登録について  
: <span class="red">研究対象者に由来するデータを DDBJ センターが運営するデータベースに登録する場合、研究対象者の尊厳及び人権は、適用されるべき法令、指針、ガイドライン、登録者が所属している機関の方針に従い、登録者の責任において保護されている必要があります。原則として、研究対象者を直接特定し得る情報はメタデータから取り除いてください。
ヒトを対象とした研究データを登録する場合は[「ヒトを対象とした研究データの登録について」](/policies.html#submission-of-human-data)を熟読してください。</span>
</div>

## 登録の流れ {#flow}

* [登録アカウントの取得](/account.html)
* [新規登録の作成](/dra/submission.html#new-submission)
* [データファイルのアップロード](/upload.html)
* [BioProject の登録](/dra/submission.html#bioproject)
* [BioSample の登録](/dra/submission.html#biosample)
* [Experiment/Run メタデータの登録](/dra/submission.html#experiment)
	* [ウェブツールで登録](/dra/submission.html#metadata)
	* [エクセルで登録](/dra/submission.html#excel)
* [データファイルのチェック](/dra/submission.html#validation)

## 登録ステータス {#status}

ステータスで進捗状況を把握することができます。"submission_validated" と "data_error" になった登録が DRA チームで査定されます。

| ステータス                 | 説明                            |
|---|
| new                   | メタデータの登録前                     |
| metadata_submitted   | メタデータが登録された                   |
| data_validating      | データファイルの検証処理中                 |
| data_error           | データファイルの検証処理エラー               |
| submission_validated | メタデータとデータファイルの検証処理を通過         |
| completed             | アクセッション番号が発行された               |
| confidential          | 公開用ファイルの作成が完了し、非公開に保たれている |
| public                | 公開                     |
| wait_for_release         | 公開まで30日以内  |
| canceled                | キャンセル           |

## アクセッション番号 {#accession}

登録完了後、メタデータオブジェクトにアクセッション番号が発行されます。

* Experiment (プレフィックス DRX)
* Run (プレフィックス DRR)
* Analysis (プレフィックス DRZ)

アクセッション番号の引用については「[FAQ: 投稿論文ではどのアクセッション番号を引用するべきでしょうか？](/faq/ja/cite-accession.html)」をご覧ください。

## データ公開  {#data-release}

データは[公開原則](/policies.html#data-release)に従って公開されます。
参照関係にあるデータとの連動公開については、「FAQ: [BioProject/BioSample/塩基配列データの連動公開の仕組みは？](/faq/ja/bp-bs-seq-release.html)」を参照してください。  
公開されるとデータが [ftp](https://ddbj.nig.ac.jp/public/ddbj_database/dra/) に公開され、数日以内に [DDBJ Search](https://ddbj.nig.ac.jp/search) でインデックスされ、[NCBI SRA](https://www.ncbi.nlm.nih.gov/sra/) と [EBI SRA](https://ebi.ac.uk/ena) にミラーリングされます。

<div class="attention">
オブジェクトは Submission 単位で公開されます。オブジェクトを異なる時期に公開したい場合は Submission を分けてください。
</div>

## 登録済みファイルの期間限定提供  {#fastq-sra-files}

登録者が登録済みデータを確認できるようにするため、登録が完了した Run の fastq/SRA ファイルは受付サーバ (ftp-private.ddbj.nig.ac.jp) の登録者領域にコピーされます。
ディスク容量圧迫を防ぐため、コピーされたファイルは一ヶ月後に削除されます。

- (submitter's home)/report/dra/(DRA submission accession)/fastq/
- (submitter's home)/report/dra/(DRA submission accession)/sra/

例 /report/dra/DRA000001/fastq/DRR000001.fastq.bz2

## 登録の更新  {#update}

公開予定日延長、メタデータの更新やデータの追加・削除については [DRA の更新](/dra/update.html)をご覧ください。

