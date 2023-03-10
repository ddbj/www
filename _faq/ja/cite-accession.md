---
layout: simple
title: 投稿論文ではどのアクセッション番号を引用するべきでしょうか？
category: faq
db:
  - bioproject
  - biosample
  - ddbj
  - dra
  - gea
  - metabobank
tags: 
  - アクセッション番号
date: 2021-05-24T11:59:04
lang: ja
---

投稿する論文の規定に従ってください。  
基本的には登録データに対するアクセッション番号、例えば DDBJ 塩基配列や DRA Run アクセッション番号、の引用を推奨します。  
データ全体を言及する場合は BioProject アクセッション番号を引用します。ただし、論文中のデータと登録データが対応付けられるようにメタデータが記載されていることが必要です。

## DDBJ {#ddbj}

塩基配列に対して発行されるアクセッション番号を引用してください。  
[Prefix Letter List](/prefix.html)

## DRA {#dra}

Run アクセッション番号 (プレフィックス DRR) の引用を推奨します。[メタデータ](/dra/metadata.html)   
データ全体を言及する場合は BioProject アクセッション番号を引用します。ただし、論文中のデータと登録データが対応付けられるようにメタデータが記載されていることが必要です。  
DRA ではデータを既存 Submission に追加することができず、別の Submission で追加する仕様になっているため ([更新](/dra/update.html))、データ追加が発生すると DRA Submission 番号が複数になります。
そのため DRA Submission 番号 (プレフィックス DRA) の引用は推奨しておりません。データ全体を言及する際は BioProject 番号の引用を推奨します。

## GEA {#gea}

Experiment アクセッション番号 E-GEAD-n を引用してください。  
[GEA アクセッション番号](/gea/overview.html#acc)

## MetaboBank {#metabobank}

Study アクセッション番号 "MTBKSn" を引用してください。  
[MetaboBank アクセッション番号](/metabobank/submission.html#accession)

## BioProject {#bioproject}

個別の BioProject を参照する必要がある場合、データに対するアクセッション番号と共に次のような記載を推奨しております。  
"The data have been deposited with links to BioProject accession number PRJDBxxxxxx in the DDBJ BioProject database."

## BioSample {#biosample}

個別の BioSample を参照する必要がある場合、次のような記載を推奨しております。  
"BioSample metadata are available in the DDBJ BioSample database under accession number SAMDxxxxxxxx."