---
layout: indexed_content
title: SARS-CoV-2
lang: jp
---

# Japan Covid-19 Open Data Consortium
# SARS-CoV-2ゲノム配列登録情報ページ

---

## 「Japan Covid-19 Open Data Consortium」 とは

　SARS-CoV-2のゲノム情報は多くが[ **GISAID** ](https://www.gisaid.org/)に集約されますが、厳しい利用制約により解析や検証の大きな妨げとなっています。 **より自由な情報の流通を目指して、ゲノム情報を DDBJに登録することに賛同する研究者のコンソーシアムです** 。DDBJに登録した情報は、GISAIDにも登録します。

---

## SARS-CoV-2配列データのDDBJへの登録お願い
 

> 国立遺伝学研究所 生命情報・DDBJセンター長
> 
> 有田正規
> 
> 
> DDBJ (DNA Data Bank of Japan)は、国際塩基配列データベース連携（INSDC）の枠組みとして米国GenBank、欧州ENAとの三極連携で世界中の塩基配列を収集・無償公開し、オープンサイエンスの基盤として30年以上貢献してきました。
> 
> 現在、新型コロナウイルス（SARS-CoV-2）配列データの多くがGISAIDに集約されており、INSDCへの登録が少ない状況にあります。GISAIDに登録されたデータは再配布やデータ利用に関する厳しい制限が設けられており、学術目的のデータ解析や第三者によるデータ検証の大きな妨げとなっています ( *Nature*  590:195-196, 2021 )。また、登録した配列を自らの学術論文にすら掲載することができないという弊害や、データベースの持続的な運営が保証されていないという懸念もあります。GISAIDが発足した背景として、2006年の鳥インフルエンザH5N1ワクチン開発が契機となった遺伝資源利用に関する開発途上国の権益保護があります。一方で、日本は先進国の一員として、国内で得られた遺伝情報を広く公開し、医学や生物学を含むサイエンスの発展に貢献する責務があると考えます。
> 
> 国内の研究者におかれましては、学術研究を通じて得られたSARS-CoV-2配列データについて、まずDDBJへ御登録いただき、それからGISAIDに御登録していただきますようお願い申し上げます。DDBJは、国内のSARS-CoV-2情報を集約するCOVID-19データポータルJapanにも協力しています。SARS-CoV-2を含む生物遺伝情報のオープンサイエンスへの利用について，引き続きご理解とご協力をお願い致します。
> 
> 以上

---

## [国立遺伝学研究所が取り組む新型コロナウイルス・全ゲノム解析の紹介](https://www.nig.ac.jp/nig/ja/research-infrastructure-collaboration/coronavirus_genome_analysis)

**国立遺伝学研究所** から発信する情報は、遺伝研ホームページのコロナ特設ページから静岡県の皆さんへ向けた情報提供が実施されています。

国立遺伝学研究所は新型コロナウイルス感染症（COVID-19）の拡大に際して、新型コロナウイルス（SARS-CoV-2）の全ゲノム解析による分子疫学調査（SARS-CoV-2 RNA全ゲノム解析）を静岡県と連携・協働して進めています。感染拡大にともないウイルスゲノムには様々な変異が入ります。その変異パターンを解析することで、感染ルートの解明など感染症対策に大きく貢献できると考えています。

### [ 「静岡県新型コロナウイルスのゲノム解析の結果」](https://www.nig.ac.jp/nig/ja/research-infrastructure-collaboration/coronavirus_genome_analysis#kaiseki)

* 遺伝研がゲノム解析を実施した、地域ごと月ごとの検体数
* 静岡県全体で発生したSARS-CoV-2の各系統(Lineage)について、検出頻度と時間推移

---
### 遺伝研SARS-CoV-2ゲノム解析パイプラインとDDBJにおける配列登録基準

[META_VRL_LONG v. 1.0.0](https://github.com/ddbj/nig_vrl/tree/main/meta_vrl_long_map)

メタゲノムあるいはメタトランスクリプトームの配列データからウイルスゲノムを再構築するパイプラインです。 **META_VRL_Long_Map**  は **NIGスーパーコンピュータ** （ https://sc.ddbj.nig.ac.jp/ja ）を使用し、Oxford Nanopore の fastq リードを武漢で検出されたSARS-CoV-2ゲノムへのマッピングしてSNVを検出します。ゲノム配列中の低深度領域（リード深度<10）はマスクしています。

当該パイプラインに搭載されている各種解析ツール、および実行に際するパラメータなどの詳細条件に関しては、上記のGitHubページをご参照ください。

---

## 現在DDBJから公開中のSARS-CoV-2ゲノム配列データ一覧

### 静岡県データ（浜松市・静岡市を除く）

変異検出後のゲノム配列データは、 **SARS-CoV-2ゲノム配列** としてデータベースから登録・公開しています。

[getentry](http://getentry.ddbj.nig.ac.jp/top-j.html)

[BS001145-BS001191](http://getentry.ddbj.nig.ac.jp/getentry/na/BS001145-BS001191/)

### 本コンソーシアム賛同機関による提供データ

本コンソーシアムに賛同いただけた機関より委託を受け、DDBJに登録されたSARS-CoV-2ゲノム配列です。

* 慶応大学から登録された新型コロナウイルス (Severe acute respiratory syndrome coronavirus 2) の配列データ
https://www.ddbj.nig.ac.jp/news/ja/2021-05-26_1.html


---

## 大学共同利用機関法人 情報・システム研究機構としての取り組み

機構に属する国立情報学研究所が機構内のオープンデータを取りまとめ **[COVID-19 データポータル JAPAN](https://covid19dataportal.jp/)** から発信しています。

遺伝研DDBJから公開されるSARS-CoV-2ゲノム配列はこちらのサイトにも登録する予定です。

