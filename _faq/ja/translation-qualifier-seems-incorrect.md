---
layout: indexed_content
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

## /translation qualifier で示されるアミノ酸配列の翻訳は間違いではないでしょうか

<p>アミノ酸翻訳の仕様は<a href="/insdc.html">国際塩基配列データベース</a>の規約で決まっています。<br>当該 CDS feature がアミノ酸翻訳される際の遺伝暗号表は /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a> qualifier に <a href="/ddbj/geneticcode-e.html">The Genetic Codes</a> の番号で示されます。<br>よく誤解される点を３つ挙げておきます。</p>
<ul>
  <li>オルガネラ; /<a href="/ddbj/qualifiers.html#organelle">organelle</a> qualifier を指定しなければ、ミトコンドリアなどの genetic code が正しく反映されません。</li>
  <li>開始コドンと扱う場合は M Met メチオニンと扱います。G あるいは V にはなりません。<br> 参照; <a href="http://en.wikipedia.org/wiki/Start_codon">Start codon</a>, <a href="http://en.wikipedia.org/wiki/Formylmethionine">N-Formylmethionine</a></li>
  <li>コドン縮重により、２塩基でも翻訳アミノ酸が一意に決定可能な場合は出力します。</li>
</ul>
<p>また、<a href="/ddbj/cds.html#stop_e">RNA editing</a> に代表される<a href="/faq/ja/how-to-describe-not-standard-genetic-code.html">特殊な例外</a>の記載もあります。</p>
