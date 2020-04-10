---
layout: indexed_content
title: WABI (Web API for Biology)
service_link: https://www.ddbj.nig.ac.jp/wabi.html
category: _search_analysis
---

# WABI (Web API for Biology)

WABI は、 DDBJの検索サービス を Web画面 を介せずに利用できる Web API です。  
この Web API を利用することによって、 DDBJの検索サービス
に対する検索処理登録や検索結果取得などを行なうプログラムを作成することができます。  
具体例として BLAST の検索条件を確認する場合を示してみますと、次のような URI に対して `GETメソッド` で HTTPリクエスト
することによって、下のようなレスポンスを受け取ることができます。

``` code
http://ddbj.nig.ac.jp/wabi/blast/wabi_blast_1111-1111-1111-11-111-111111?info=request&format=json
```

``` code scroll
 1{
 2        "address": "",
 3        "database": "hum",
 4        "datasets": "ddbjall",
 5        "format": "text",
 6        "parameters": " -v 100 -b 100 -e 10 -F F -W 11 ",
 7        "program": "blastn",
 8        "querySequence": ">my query sequence\nCACCCTCTCT\nTCACTGGAAA\nGGACACCATG\nAGCACGGAAA\nGCATGATCCA\nGGACGTGGAA\n",
 9        "result": "www" 
10}
```

現在 WABI は、次のサービスの Web API を提供しています。

  - [BLAST](/wabi_blast-help.html)
  - [getentry](/getentry-help.html#ge_program)
  - [ARSA](/arsa-help.html)
  - [ClustalW](/wabi_clustalw-help.html)
  - [VecScreen](/wabi_vecscreen-help.html)
  - [MAFFT](/wabi_mafft-help.html)
