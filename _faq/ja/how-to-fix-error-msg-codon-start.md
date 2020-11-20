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



<p><a href="/ddbj/location.html">Location</a>、または、/<a href="/ddbj/qualifiers.html#codon_start">codon_start</a> の記述が正しくない可能性があります。<br>/codon_start の値が「2」 または「3」 の場合、<a href="/ddbj/cds.html">CDS feature</a> location は 5' 側が部分配列指定になっている必要があります。<br>
  <!-- Nucleotide Sequence Submission System --><a href="/ddbj/location.html">Location の記述法</a> に従い、5' 側が not complete であることを示す、例えば &lt;1..300 のような、書式に修正してください。<br>CDS feature が開始コドンで始まっている場合は、/codon_start を「1」 に修正してください。</p>
<p>参考: <a href="/ddbj/cds.html#frame">codon_start qualifier による翻訳開始の位置補正</a></p>
