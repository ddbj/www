---
layout: simple
title: 塩基配列とアミノ酸配列の対応関係が標準的な遺伝暗号表と異なる場合の CDS feature の記載方法を教えてください
category: faq
db:
  - ddbj
tags: 
  - 登録
date: 2014-06-03T15:19:05
lang: ja
---

初めに [The Genetic Codes](/ddbj/geneticcode.html) にて遺伝暗号表について、ご確認ください。    
通常は [/transl\_table](/ddbj/qualifiers.html#transl_table) qualifier 
に上記で示される番号が適切に記載されていれば、塩基配列からアミノ酸配列へ問題なく翻訳されます。    

例外的に、遺伝暗号表と異なった翻訳を受けるコドン (selenocysteine など) がある場合、
/[transl\_except](/ddbj/qualifiers.html#transl_except) qualifier を、適宜、記載してください。    

[RNA editing，](/ddbj/example.html#B09), 
[ribosomal frameshift](/ddbj/example.html#B10), 
[mitochondrial TAA stop codon](/ddbj/example.html#B11) の場合は、
[配列データ記載例](/ddbj/example.html)をご参照の上、それぞれ、
/[exception](/ddbj/qualifiers.html#exception) と /[translation](/ddbj/qualifiers.html#translation), 
/[ribosomal\_slippage](/ddbj/qualifiers.html#ribosomal_slippage), 
/[transl\_except](/ddbj/qualifiers.html#transl_except) の各 qualifier を適切に記載してください。    

非常に特殊な翻訳開始機構により、アミノ酸翻訳開始点がメチオニン以外のアミノ酸として翻訳される
タンパク質の場合は CDS [location](/ddbj/location.html) を入力する際、便宜的に 5'end not complete 
を示す "\<" を記載してください。    
あわせて、/[note](/ddbj/qualifiers.html#note) qualifier にアミノ酸翻訳の開始点がメチオニンではない
ことに関する説明を英語で入力してください。
