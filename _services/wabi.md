---
layout: indexed_content
title: WABI Web API for Biology
category: services
lang: ja
related_pages:
  - title: WABI BLAST ヘルプ
    url: /services/wabi-blast.html
  - title: WABI ClustalW ヘルプ
    url: /services/wabi-clustalw.html
  - title: WABI VecScreen ヘルプ
    url: /services/wabi-vecscreen.html
  - title: WABI MAFFT ヘルプ
    url: /services/wabi-mafft.html
  - title: ARSA ヘルプ
    url: /services/arsa.html
  - title: BLAST ヘルプ
    url: /services/blast.html
  - title: getentry ヘルプ
    url: /services/getentry.html
  - title: VecScreen ヘルプ
    url: /services/vecscreen.html
  - title: ClustalW ヘルプ
    url: /services/clustalw.html
  - title: TXSearch ヘルプ
    url: /services/txsearch.html
  - title: 過去のサービス
    url: /services/services/past-services.html
  - title: 関連論文
    url: /services/services/references.html
  - title: Pipeline ヘルプ
    url: /services/pipeline.html
---

## WABI (Web API for Biology)

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

  - [BLAST]({{site.baseurl}}/services/services/wabi-blast.html)
  - [getentry]({{site.baseurl}}/services/services/getentry.html)
  - [ARSA]({{site.baseurl}}/services/services/arsa.html)
  - [ClustalW]({{site.baseurl}}/services/services/wabi-clustalw.html)
  - [VecScreen]({{site.baseurl}}/services/services/wabi-vecscreen.html)
  - [MAFFT]({{site.baseurl}}/services/services/wabi-mafft.html)
