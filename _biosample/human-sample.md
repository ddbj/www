---
layout: tabbed_indexed_content
service_name: BioSample
title: Human Sample
category: biosample
current_tab: sample attribute
lang: ja
---

## ヒトを対象とした研究データの登録について  {#submission-of-human-data}

個人に由来するデータ（ヒトデータ）を DDBJ センターが運営するデータベースに登録する場合、[ヒトを対象とした研究データの登録について](/policies.html#submission-of-human-data)を遵守してください。  

注意: プライバシー侵害の恐れのないヒトサンプルにのみ使用してください。登録者の責任において、適用される法律や指針に従い、由来個人を直接特定できるような情報を取り除いてください。データを保護する必要がある場合、アクセス制限の仕組みを備えた [Japanese Genotype-phenotype Archive (JGA)](/jga/index.html) にヒトデータを登録してください。

## サンプル属性  {#attribute}

ヒト (*Homo sapiens*) サンプルでは [Human](/biosample/sample-info.html#Sample-type) パッケージで登録します。以下はヒトサンプルの種類に応じた登録ガイドラインになります。属性の説明は[こちらのページ](/biosample/attribute.html?all=all)を参照してください。    

### 個人由来試料 {#human-subject}

isolate には匿名化された subject id を記載します。

### 細胞株 {#cell-line}

推奨
- cell_type

## 初代培養細胞 {#primary}

sample_type に初代培養細胞 (primary cell) であることを記載します。    
sample_type: primary cell

## iPS 細胞 {#ips}

iPS 細胞は分化させてから使用されることが一般的であり、分化前後の情報が重要になります。
そのため上記に加え、以下の属性情報を追加します。分化させてから使用している ES 細胞等でも同様です。    
複数回の分化を経ている複雑な場合、description にフリーテキストで説明を記載します。

### 個人由来試料 {#ips-human-subject}

cell_type に分化に関する情報を記載します。    
例 cell_type： iPS cell derived megarocyte cell

### 細胞株 {#ips-cell-line}

cell_type に分化に関する情報を記載します。    
例 cell_type： iPS cell (cell_line:253G1) derived megarocyte cell    
biomaterial_provider に iPS 細胞の入手元を記載します。    
例 biomaterial_provider： ATCC






