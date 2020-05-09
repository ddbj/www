---
layout: indexed_content
title: WABI (Web API for Biology)
pathname: wabi
category: search_analysis
---

WABI は、 DDBJの検索サービス を Web画面 を介せずに利用できる Web API です。  
この Web API を利用することによって、 DDBJの検索サービス
に対する検索処理登録や検索結果取得などを行なうプログラムを作成することができます。  
具体例として BLAST の検索条件を確認する場合を示してみますと、次のような URI に対して `GETメソッド` で HTTPリクエスト
することによって、下のようなレスポンスを受け取ることができます。

``` 
http://ddbj.nig.ac.jp/wabi/blast/wabi_blast_1111-1111-1111-11-111-111111?info=request&format=json
```


```
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

  - [BLAST]({{site.baseurl}}/search_analysis/wabiBLAST.html)
  - [getentry]({{site.baseurl}}/search_analysis/getentry.html)
  - [ARSA]({{site.baseurl}}/search_analysis/ARSA.html)
  - [ClustalW]({{site.baseurl}}/search_analysis/wabiClustalw.html)
  - [VecScreen]({{site.baseurl}}/search_analysis/wabiVecScreen.html)
  - [MAFFT]({{site.baseurl}}/search_analysis/wabiMAFFT.html)
