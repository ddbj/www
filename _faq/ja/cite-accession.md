---
layout: simple
title: 投稿論文では、どのアクセッション番号を引用するべきでしょうか？
category: faq
db:
  - bioproject
  - biosample
  - ddbj
  - dra
  - gea
tags: 
  - アクセッション番号
date: 2021-05-24T11:59:04
lang: ja
---

登録したデータに対するアクセッション番号、例えば DDBJ 塩基配列や DRA Run アクセッション番号、を引用します。

## DRA {#dra}

DRA 登録は以下のプレフィックスのオブジェクトから構成されます。

- **Submission**: DRA
- **BioProject (Study)**: PRJD
- **Experiment**: DRX
- **BioSample (Sample)**: SAMD
- **Run**: DRR
- **Analysis**: DRZ

{% include image.html url="books/sra_object.png" caption="メタデータオブジェクト" class="w450" %}

投稿論文で引用する粒度にあわせ、各オブジェクトを引用してください。    
DRR Run アクセッション番号の引用を推奨します。

## DDBJ {#ddbj}

塩基配列に対して発行されるアクセッション番号を引用してください。  
[Prefix Letter List](/prefix.html)

## GEA {#gea}

Experiment アクセッション番号 E-GEAD-n を引用してください。  
[GEA アクセッション番号](/gea/overview.html#acc)

## BioProject {#bioproject}

[BioProject 番号のみを引用することは避けてください](/faq/jga/project-accession.html)。

## BioSample {#biosample}

BioSample 番号のみを引用することは避けてください。