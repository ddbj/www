---
layout: indexed_content
title: WABI Web API for Biology
category: services
lang: en
related_pages:
  - title: WABI BLAST Help
    url: /services/wabi-blast-e.html
  - title: ARSA Help
    url: /services/arsa-e.html
  - title: BLAST Help
    url: /blast-help-e.html
  - title: getentry Help
    url: /services/getentry-e.html
  - title: TXSearch Help
    url: /services/txsearch-e.html
  - title: ClustalW Help
    url: /services/clustalw-e.html
  - title: VecScreen Help
    url: /services/vecscreen-e.html
  - title: References
    url: /services/services/references-e.html
  - title: Services in past
    url: /services/services/past-services-e.html
---

## WABI (Web API for Biology)

WABI is a web API for using the search services of the DNA Data Bank of
Japan (DDBJ) without needing to navigate the web front-end. Through the
web API, you can develop program code that can query the DDBJ search
service and obtain search results.

For example, the following shows the URI for searching BLAST based on
particular criteria, and the corresponding response received after
sending the URI as a GET HTTP request.

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

WABI currently provides the following web APIs:

  - [BLAST](/services/wabi-blast-e.html)
  - [getentry](/services/getentry-e.html#ge_program)
  - [ARSA](/services/arsa-e.html)
  - [ClustalW](/services/wabi-clustalw.html) (only available in Japanese)
  - [VecScreen](/services/wabi-vecscreen.html) (only available in Japanese)
  - [MAFFT](/services/wabi-mafft.html) (only available in Japanese)
