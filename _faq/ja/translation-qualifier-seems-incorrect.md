---
layout: simple
title: /translation qualifier で示されるアミノ酸配列の翻訳は間違いではないでしょうか
category: faq
db:
  - ddbj
tags: 
  - 書式
  - 検索
  - 登録
date: 2014-06-03T17:08:55
lang: ja
---

アミノ酸翻訳の仕様は[国際塩基配列データベース](/insdc/index.html)の規約で決まっています。    
当該 CDS feature がアミノ酸翻訳される際の遺伝暗号表は /[transl_table](/ddbj/qualifiers.html#transl_table) qualifier に [The Genetic Codes](/ddbj/geneticcode-e.html) の番号で示されます。    
よく誤解される点を３つ挙げておきます。

- オルガネラ; /[organelle](/ddbj/qualifiers.html#organelle) qualifier を指定しなければ、ミトコンドリアなどの genetic code が正しく反映されません。
- 開始コドンと扱う場合は M Met メチオニンと扱います。G あるいは V にはなりません。    
   参照; [Start codon](http://en.wikipedia.org/wiki/Start_codon), [N-Formylmethionine](http://en.wikipedia.org/wiki/Formylmethionine)
- コドン縮重により、２塩基でも翻訳アミノ酸が一意に決定可能な場合は出力します。

また、[RNA editing](/ddbj/cds.html#stop_e) に代表される[特殊な例外](/faq/ja/how-to-describe-not-standard-genetic-code.html)の記載もあります。
