---
layout: simple
title: How to update our sequence?
category: faq
db:
  - ddbj
tags: 
  - Update
date: 2014-06-10T10:09:43
lang: en
---

Please send your request to DDBJ with the following contents in clear English.    
To : <img src="{{ site.baseurl }}/assets/images/news/ad_updt.gif" alt="ddbjupdt#64;ddbj.nig.ac.jp" title="ad_updt" width="180" height="19" class="alignnone size-full wp-image-1298">
- Accession numbers:
- The modified part:
- Total base count:
- Other modified feature:
- Updated sequence in full length: Please use the following format.
```
>AB******1
aaaaaaaaaattttttttttggggggggggccccccccccaaaaaaaaaatttttttttt
ggggggggggccccccccccaaaaaaaaaattttttttttggggggggggcccccccccc
//
>AB******2
aaaaaaaaaattttttttttggggggggggccccccccccaaaaaaaaaatttttttttt
ggggggggggccccccccccaaaaaaaaaattttttttttggggggggggcccccccccc
aaaaaaaaaat
//
```
    - Header line; starts with ">", followed by the accession number at the head of each sequence. 
    - Sequence; each line must be 60 letters or less. 
    - End line; end flag, "//", must be at the end of each sequence. 
