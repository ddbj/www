---
layout: indexed_content
title: SARS-CoV-2
lang: jp
---

## SARS-CoV-2ゲノム配列登録情報 by Japan Covid-19 Open Data Consortium 

「Japan Covid-19 Open Data Consortium」は、**より自由な情報の流通を目指して、ゲノム情報を DDBJに登録することに賛同する研究者のコンソーシアム**です 。
SARS-CoV-2のゲノム情報は[ **GISAID** ](https://www.gisaid.org/)にもありますが、厳しい利用制約により解析や検証の大きな妨げとなっています。**DDBJに登録した情報は、GISAIDにも登録しています。**

- **【Japan Covid-19 Open Data Consortium によるGISAID登録状況】 [GISAID Search Full text > Virus name "Japan COVID-19 Open Data Consortium"](https://www.gisaid.org/)** 

<details>
	<summary><b><span class="red">SARS-CoV-2配列データのDDBJへの登録お願い (click here) </span></b></summary>
 
国立遺伝学研究所 生命情報・DDBJセンター長
<br><br>
有田正規
<br><br>
DDBJ (DNA Data Bank of Japan)は、国際塩基配列データベース連携（INSDC）の枠組みとして米国GenBank、欧州ENAとの三極連携で世界中の塩基配列を収集・無償公開し、オープンサイエンスの基盤として30年以上貢献してきました。
<br><br>
現在、新型コロナウイルス（SARS-CoV-2）配列データの多くがGISAIDに集約されており、INSDCへの登録が少ない状況にあります。GISAIDに登録されたデータは再配布やデータ利用に関する厳しい制限が設けられており、学術目的のデータ解析や第三者によるデータ検証の大きな妨げとなっています ( <i>Nature</i>  590:195-196, 2021 )。また、登録した配列を自らの学術論文にすら掲載することができないという弊害や、データベースの持続的な運営が保証されていないという懸念もあります。GISAIDが発足した背景として、2006年の鳥インフルエンザH5N1ワクチン開発が契機となった遺伝資源利用に関する開発途上国の権益保護があります。一方で、日本は先進国の一員として、国内で得られた遺伝情報を広く公開し、医学や生物学を含むサイエンスの発展に貢献する責務があると考えます。
<br><br>
国内の研究者におかれましては、学術研究を通じて得られたSARS-CoV-2配列データについて、まずDDBJへ御登録いただき、それからGISAIDに御登録していただきますようお願い申し上げます。DDBJは、国内のSARS-CoV-2情報を集約するCOVID-19データポータルJapanにも協力しています。SARS-CoV-2を含む生物遺伝情報のオープンサイエンスへの利用について，引き続きご理解とご協力をお願い致します。
<br><br>
以上
<br><br>
</details>



■ **DDBJ登録用 SARS-CoV-2ゲノムのアノテーション・登録支援ツール** 

[DFAST_VRL (Webツール)](https://dfast.ddbj.nig.ac.jp/dfv/) 

[DFAST_VRL (stand alone用 / 遺伝研スパコン Singularityコンテナ利用)](https://github.com/nigyta/dfast_vrl)

## 国立遺伝学研究所が取り組む新型コロナウイルス・全ゲノム解析の紹介

国立遺伝学研究所は新型コロナウイルス感染症（COVID-19）の拡大に際して、**新型コロナウイルス（SARS-CoV-2）の全ゲノム解析による分子疫学調査（SARS-CoV-2 RNA全ゲノム解析）を静岡県と連携・協働**して進めています。

- **遺伝研ホームページにおける[コロナ特設サイト](https://www.nig.ac.jp/nig/ja/research-infrastructure-collaboration/coronavirus_genome_analysis#kaiseki)**
	- 遺伝研がゲノム解析を実施した、**静岡県の地域ごと月ごとの検体数**
	- 静岡県全体で発生したSARS-CoV-2の各系統(Lineage)について、**検出頻度と時間推移**

- **【参考】 IIBMP2021での講演内容の動画「SARS-CoV-2ゲノムシーケンシングの実際」**
	- [SARS-CoV-2ゲノムの特徴](https://youtu.be/zwh1ZLUWaQI)
	- [SARS-CoV-2ゲノムの変異速度と多様性](https://youtu.be/vXlW3EYG5cM)
	- [SARS-CoV-2ゲノムのアンプリコンシーケンシング](https://youtu.be/9Lh8F9Ru3RI)
	- [SARS-CoV-2ゲノム解析の流れ](https://youtu.be/v58ufNEqsT4)

- **GitHubにおける遺伝研SARS-CoV-2ゲノム解析パイプライン** [META_VRL_LONG v. 1.0.0](https://github.com/ddbj/nig_vrl/tree/main/meta_vrl_long_map) 

	- Oxford Nanopore の fastq リードをリファレンスゲノムであるSARS-CoV-2ゲノム(Wuhan-Hu-1, GenBank_ID NC_045512.2)へマッピングする詳細
	- パイプラインがつかう各種解析ツール、実行に際するパラメータの詳細

- **[GitHubにおけるHaplotype network解析手法 (小規模100件以下用, 静岡株47配列の解析事例） (新潟大 阿部先生ご提供)](https://github.com/takaabe8050/CoV2network)**
	
- **IIBMP2021での講演内容の動画 「SARS-CoV-2ゲノムのネットワーク解析」**
	
	- [ハプロタイプネットワークの構築 (小規模解析用 検体数100件以下, 静岡株47配列の解析事例）](https://youtu.be/FMsS-nOqiE8)
		
	- [ハプロタイプネットワークの構築 （大規模解析用 検体数100件以上）](https://youtu.be/IsncZBFK6jU)

## 現在DDBJから公開中のSARS-CoV-2ゲノム配列データ一覧
- **静岡県によるSARS-CoV-2ゲノム配列（保健所の管轄により、浜松市・静岡市を除く）**

**【最新の登録状況】 (ゲノム配列に低深度領域（リード深度<10）があるもの、およびNがあるものは現在登録していません)**

■ **DDBJ ARSA**

[【Search Condition】Organism:(Severe acute respiratory syndrome coronavirus 2) AND (Japan COVID-19 Open Data Consortium) AND shizuoka)](http://ddbj.nig.ac.jp/arsa/search?lang=ja&cond=quick_search&query=Organism%3A%28Sev[…]an+COVID-19+Open+Data+Consortium%29+AND+shizuoka&operator=AND)

- **【静岡県検体最新GISAID登録状況】
[GISAID Search > Virus name “SZ-NIG”](https://www.gisaid.org/)**

■ **DDBJ News (2021/09/09) [新型コロナウイルス (Severe acute respiratory syndrome coronavirus 2) の配列データ公開](https://www.ddbj.nig.ac.jp/news/ja/2021-09-09_1.html)**

- 本コンソーシアム賛同機関によるSARS-CoV-2ゲノム配列
	- 慶応義塾大学 [BS000685-BS000694](http://getentry.ddbj.nig.ac.jp/getentry/na/BS000685-BS000694/)
	- 慶応義塾大学 [BS000695-BS001136](http://getentry.ddbj.nig.ac.jp/getentry/na/BS000695-BS001136/)


## 大学共同利用機関法人 情報・システム研究機構としての取り組み

機構に属する国立情報学研究所が機構内のオープンデータを取りまとめ **[COVID-19 データポータル JAPAN](https://covid19dataportal.jp/)** から発信しています。

遺伝研DDBJから公開されるSARS-CoV-2ゲノム配列はこちらのサイトにも登録する予定です。

