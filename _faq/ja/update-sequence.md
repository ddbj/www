---
layout: simple
title: 配列を更新したい
category: faq
db:
  - ddbj
tags: 
  - 更新
date: 2014-05-30T18:09:07
lang: ja
---

依頼者のお名前、ご所属を明記の上、以下の項目について DDBJにメールでお知らせください。    
宛先: <img src="{{ site.baseurl }}/assets/images/news/ad_updt.gif" alt="ddbjupdt#64;ddbj.nig.ac.jp" title="ad_updt" width="180" height="19" class="alignnone size-full wp-image-1298">
- アクセッション番号:
- 変更箇所:
- 更新後の総塩基数:
- 配列の更新に伴う Feature の塩基番号など、変更項目の詳細:
- 更新後の全長配列: 以下のフォーマットでお願いします。
```
>AB******   <--- 当該データのアクセッション番号
aaaaaaaaaattttttttttggggggggggccccccccccaaaaaaaaaatttttttttt
ggggggggggccccccccccaaaaaaaaaattttttttttggggggggggcccccccccc
//
>AB******
aaaaaaaaaattttttttttggggggggggccccccccccaaaaaaaaaatttttttttt
ggggggggggccccccccccaaaaaaaaaattttttttttggggggggggcccccccccc
aaaaaaaaaat
//
```
    - ヘッダ行; リダイレクション ">" のあとにスペースなしでアクセッション番号。
    - 塩基配列; 半角６０文字/行の fasta 類似フォーマットです。
    - 終了フラグ; "//" を入力してください。
