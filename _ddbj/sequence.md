---
layout: tabbed_indexed_content
title: 塩基配列について
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: flat_file
lang: ja
related_pages:
  - title: DDBJ 公開形式 (Flat file)
    url: /ddbj/flat-file.html
  - title: Location の記述法
    url: /ddbj/location.html
  - title: 配列の記載に用いる略号
    url: /ddbj/code.html
---


## 序  {#intro}

このサイトは狭義の DDBJ (Annotated/Assembled Sequences) のフラットファイル (いわゆる GenBank に相当する対象) として公開される塩基配列について説明しています。    
NGS raw output data などの登録に関しましては、DDBJ/ENA/GenBank とは別枠のデータベースである [DRA; DDBJ Sequence Read Archive](/dra/index.html) へのご登録をお願いいたします。    
    
DDBJ では, [primary entry](/ddbj/submission.html#primary_entry) のデータとして登録依頼のあったデータにつきましては, ２次的な引用やコンピューターで予測したものでなく、登録者が実験的に決定した、もしくは、 企業等からその配列の使用権を得たものであれば、原則、受け付けています。    
    
配列が全く同じでも、独立に配列が決定されたデータならば、「新規データ」として別々にDDBJ に登録可能です。    
参考: [多型関連研究における同一配列の代表データ登録](/ddbj/represent.html)    
    
INSDC では、既に報告されている primary data を２次的に引用し、 生物学的付加情報を付与し直す目的で [TPA (third party data)](ddbj/tpa.html) を受け付けています。    


## 登録を受け付けることができない配列  {#not_acceptable}

下記に該当する場合, DDBJ では登録を受け付けておりません。    

  - 塩基配列を伴わないアミノ酸配列のみの登録
  - ゲノム DNA と RNA 転写産物を混合した塩基配列
  - 特定の実体を伴わない塩基配列 (いわゆる consensus sequences)
  - 長さが 100 塩基未満の塩基配列 (2021年6月以降)
  - primer のみで構成される塩基配列 (2021年6月以降)


## 塩基配列コード  {#code}

塩基配列として使用可能な文字種、[核酸コード](/ddbj/code.html#nucleotide-1) は IUPAC 準拠です。    

処理を簡素化するため、RNA 配列中の U (uracil) は T で置き換えています。    

## 登録前に必要な処理  {#process}

一般的に、塩基配列の登録は自然界にあるがままの姿であると信ずるに足る状態を共有する目的で行います。    
シークエンサー出力を精査せず、そのまま登録することは、科学的に正しい行為ではありません。    

  - [ベクター由来領域の除去](#vector)
  - [primer 結合領域の除去](#primer)
  - [信頼できない領域などの除去](#noise)
  - [塩基配列の向きを揃える (相補鎖にしない)](#complement)
  - [gap 領域を示す](#gap)
  - assemble、contig は、科学的に配列の一次構造を再現する範囲であれば、問題はありません。
  - 発現解析などで virus contamination を避ける必要がある場合、計算機的な処理で除いてください。

### ベクター由来領域の除去  {#vector}

登録する塩基配列からは以下に該当する配列は取り除いてください。    
ただし、人工的に構築した配列 (expression vector など) 自体を登録する場合、除く必要はありません。    

  - vector に由来する配列
  - linker、adapter に由来する配列

ご登録の前に、ベクタースクリーニングをお願いします。[VecScreen](http://ddbj.nig.ac.jp/vecscreen/?lang=ja) をご利用ください。    


### primer 結合領域の除去  {#primer}

PCR 産物などに関しては、標的に設計した primer 結合領域に相当する未知の配列領域を事前に取り除いてください。    
通常、source feature の [/PCR_primers](/ddbj/qualifiers.html#PCR_primers) qualifier は基本的には登録配列の外側に存在することを前提に記載します。    

真核生物の mRNA 配列の場合、poly A tail は削除しない方が良いですが、primer にデザインしている場合などは残す範囲の判断が難しい場合があるかもしれません。    

### 信頼できない領域などの除去  {#noise}

配列データ登録の前に、信頼できない領域などがあるならば、あらかじめ塩基配列から除去しておいてください。    

  - 主にサンガー法の場合の 5'- 3'- 末端など、シークエンサー出力の信頼できない領域は trimming してください。
  - 妥当な範囲ならば、波形、スコアを元にシークエンサー出力を補正することを推奨します。

### 塩基配列の向きを揃える (相補鎖にしない)  {#complement}

転写産物は転写される方向の塩基配列を登録します。    

ゲノム配列はどちらの向きが正しい、という厳密な定義は出来ませんが、一般的に１つの遺伝子に着目する場合、その転写方向で記載する方が参照する側にとって利用しやすい、と考えます。    

特に rRNA、ITS などのように分子分類学でよく用いられる領域は、どちらの方向で配列決定したかとは無関係に転写方向に配列を揃えてください。    


### gap 領域を示す  {#gap}

決定した配列内に配列不明の領域が含まれる場合、配列内の不明領域に相当数の連続した "n" を挿入して表現します。    
長さが推測できない場合は 100 個の "n" で示すことを推奨します。    
    
その領域を [gap](/ddbj/features.html#gap)、または [assembly_gap](/ddbj/features.html#assembly_gap) feature で示してください。    
    
exome などの場合、intron を gap として示します。    
参照: [登録の見本 G: Sequencing gap](/ddbj/example.html#G)    
    
一方で、登録者個人が alignment を行う際の利便性は、配列データ登録とは無関係ですので、実際には存在しない領域に 'n' などを挿入することは禁止です。
