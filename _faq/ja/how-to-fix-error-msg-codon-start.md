---
layout: simple
title: '&quot;Value of [ codon_start ] is not 1, but [###..###] is 5&#39; complete type.&quot; というエラーが表示されました'
category: faq
db:
  - ddbj
tags: 
  - 塩基配列登録システム
date: 2014-06-04T16:01:39
lang: ja
---

[Location](/ddbj/location.html)、または、/[codon\_start](/ddbj/qualifiers.html#codon_start)
の記述が正しくない可能性があります。  
/codon\_start の値が「2」 または「3」 の場合、[CDS feature](/ddbj/cds.html) location は
5' 側が部分配列指定になっている必要があります。  

[Location の記述法](/ddbj/location.html) に従い、5' 側が not complete であることを示す、例えば
\<1..300 のような、書式に修正してください。  
CDS feature が開始コドンで始まっている場合は、/codon\_start を「1」 に修正してください。

参考
: [codon\_start qualifier による翻訳開始の位置補正](/ddbj/cds.html#frame)
