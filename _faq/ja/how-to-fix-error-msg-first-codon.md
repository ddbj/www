---
layout: simple
title:  '"First codon [***] is not a start codon." / "Final codon [***] is not a stop codon." というエラーが表示されました'
category: faq
db:
  - ddbj
tags: 
  - 塩基配列登録システム
date: 2014-06-04T15:51:12
lang: ja
--- 
これらの error message は [CDS (protein coding sequence) feature](/ddbj/cds.html) のアミノ酸翻訳の結果が、5'末端 または 3'末端において適切ではなかったことを示しています。
当該 CDS が全長ではなく部分配列の場合、その feature location には部分配列であることを示すフラグが必要です。    
部分配列の場合、[location の記述法](/ddbj/location.html)に示されている記載ルールに従い、5' end not complete を示す "<"、3' end not complete を示す ">" のフラグを適切に加えて入力してください。

|location|状況|
|---|
| \<1..295    | 開始コドンで始まらない、かつ、終止コドンで終わる     |
| 1.. \>295   | 開始コドンで始まり、かつ、終止コドンで終わらない     |
| \<1.. \>295 | 開始コドンで始まらない、かつ、終止コドンで終わらないとき |

例: CDS が 1..295 である場合の部分配列記述

参照  
: [“Stop codon ‘\*’ is found in the range.”
    というエラーが表示されました](/faq/ja/how-to-fix-error-msg-stop-codon.html)
: [codon\_start qualifier
    による翻訳開始の位置補正](/ddbj/cds.html#frame "/sub/cds.html#frame")
