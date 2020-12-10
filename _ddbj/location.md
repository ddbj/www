---
layout: tabbed_indexed_content
title: Location の記述法
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: flat_file
tab_menu:
  - id: home
    title: Home
    url: /ddbj/index.html
  - id: submission
    title: Submission
    url: /ddbj/submission.html
    children:
      - title: 塩基配列の登録
        url: /ddbj/submission.html
      - title: Web 版塩基配列登録システム
        url: /ddbj/web-submission.html
      - title: Mass Submission System
        url: /ddbj/mss.html
      - title: 登録データの修正・更新
        url: /ddbj/update.html
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/arsa/?lang=ja
    children:
      - title: getentry
        url: http://getentry.ddbj.nig.ac.jp/top-j.html
      - title: ARSA
        url: http://ddbj.nig.ac.jp/arsa/?lang=ja
  - id: flat_file
    title: Flat file
    url: /ddbj/flat-file.html
    children:
      - title: Feature key の定義
        url: /ddbj/features.html
      - title: Qualifier key の定義
        url: /ddbj/qualifiers.html
      - title: Organism qualifier に記載する生物名
        url: /ddbj/organism.html
      - title: Location の記述法
        url: /ddbj/location.html
      - title: タンパク質コード配列
        url: /ddbj/cds.html
      - title: The Genetic Codes
        url: /ddbj/geneticcode.html
      - title: 配列の記載に用いる略号
        url: /ddbj/code.html
      - title: 登録の見本
        url: /ddbj/example.html
  - id: data_categories
    title: Data categories
    url: /ddbj/data-categories.html
    children:
      - title: Genome project のデータ登録
        url: /ddbj/genome.html
      - title: Pseudohaplotype
        url: /ddbj/pseudohaplotype.html
      - title: WGS
        url: /ddbj/wgs.html
      - title: メタゲノムアセンブリ
        url: /ddbj/metagenome-assembly.html
      - title: Single amplified genome
        url: /ddbj/single-amplified-genome.html
      - title: CON
        url: /ddbj/con.html
      - title: GSS
        url: /ddbj/gss.html
      - title: HTG
        url: /ddbj/htg.html
      - title: Environmental sequence の登録
        url: /ddbj/environmental.html
      - title: ENV
        url: /ddbj/env.html
      - title: TLS
        url: /ddbj/tls.html
      - title: Transcriptome Project のデータ登録
        url: /ddbj/transcriptome.html
      - title: TSA
        url: /ddbj/tsa.html
      - title: EST
        url: /ddbj/est.html
      - title: HTC
        url: /ddbj/htc.html
      - title: Third Party Data (TPA)
        url: /ddbj/tpa.html
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=ddbj
  - id: other
    title: Other
    url: /ddbj/index-e.html
    children:
      - title: Patent
        url: /ddbj/patent-data.html
      - title: MGA
        url: /ddbj/mga.html
lang: ja
---

## Location の記述法

国際塩基配列データベースでは、配列上の Feature の位置情報 (以下、Location) を以下のルールで記述しています。

| Location記述例                       | 意味                                                                                                   |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 340..565                          | 登録配列の340番目から565番目までの連続した領域                                                                           |
| complement(261..457)              | 登録配列の261番目から457番目までの連続した相補鎖の領域                                                                       |
| \<345..500                        | 登録配列には、そのFeatureの開始点が含まれない。 あるいは、345番目の塩基より5'側に関して、そのFeatureの正確な開始点が不明である。                           |
| 345..\>500                        | 登録配列には、そのFeatureの終了点が含まれない。 あるいは、500番目の塩基より3'側に関して、そのFeatureの正確な終了点が不明である。                           |
| \<345..\>500                      | 登録配列には、そのFeatureの開始点、終了点が共に含まれない。 あるいは、345番目の塩基より5'側と500番目の塩基より3'側に関して、そのFeatureの正確な開始点、終了点が共に不明である。 |
| join(12..78,134..202)             | 登録配列の12番目から78番目、ならびに134番目から202番目までの不連続な領域                                                            |
| complement(join(12..78,134..202)) | 登録配列の12番目から78番目、ならびに134番目から202番目までの不連続な相補鎖の領域                                                        |
| 467                               | 登録配列の467番目の塩基                                                                                        |
| 123^124                           | 登録配列の123番目と124番目の間                                                                                   |

以下の Location の記述法は、[塩基配列登録システム](/ddbj/web-submission.html)では入力することができません。  
塩基配列登録システムの"Submission Information"の入力欄にその旨を説明していただくか、[Mass Submission System](mss.html)をご利用下さい。

| Location記述例                        | 意味                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------- |
| join(AB000000.1:100..202,134..222) | 関連するエントリーAB000000 (version 1) の配列の100番目から202番目までの領域，ならびに当該エントリーの134番目から222番目までの不連続な領域 |

これらの Location 記述法を組み合わせることによって、これ以外の様々な位置情報を記述することができます。

より詳しい Location の記述ルールに関する情報は、[Feature Table Definition](/ddbj/feature-table.html): [3.4 Location](/ddbj/feature-table.html#3.4) を ご参照ください。
