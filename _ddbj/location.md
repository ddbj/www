---
layout: tabbed_indexed_content
title: Location の記述法
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: flat_file
lang: ja
---

## Location の記述法

国際塩基配列データベースでは、配列上の Feature の位置情報 (以下、Location) を以下のルールで記述しています。

| Location記述例                       | 意味                                                                                                   |
|---|
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
|---|
| join(AB000000.1:100..202,134..222) | 関連するエントリーAB000000 (version 1) の配列の100番目から202番目までの領域，ならびに当該エントリーの134番目から222番目までの不連続な領域 |

これらの Location 記述法を組み合わせることによって、これ以外の様々な位置情報を記述することができます。

より詳しい Location の記述ルールに関する情報は、[Feature Table Definition](/ddbj/feature-table.html): [3.4 Location](/ddbj/feature-table.html#3.4) を ご参照ください。
