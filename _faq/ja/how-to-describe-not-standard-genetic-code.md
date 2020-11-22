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



<p>まず、<a href="/ddbj/geneticcode-e.html">The Genetic Codes</a> にて遺伝暗号表が適切に選択されているか、ご確認ください。<br>通常は <a href="/ddbj/qualifiers.html#transl_table">/transl_table</a> qualifier に上記で示される番号が適切に記載されていれば、塩基配列からアミノ酸配列へ問題なく翻訳されます。</p><p>例外的に、遺伝暗号表と異なった翻訳を受けるコドン (selenocysteine など) がある場合、/<a href="/ddbj/qualifiers.html#transl_except">transl_except</a> を、適宜、記載してください。</p><p><a href="/ddbj/example.html#B09">RNA editing，</a><a href="/ddbj/example.html#B10">ribosomal frameshift</a>，<a href="/ddbj/example.html#B11">mitochondrial TAA stop codon</a> の場合は、<a href="/ddbj/example.html">登録の見本</a>をご参照の上、それぞれ、/<a href="/ddbj/qualifiers.html#exception">exception</a> と /<a href="/ddbj/qualifiers.html#translation">translation</a>, /<a href="/ddbj/qualifiers.html#ribosomal_slippage">ribosomal_slippage</a>, /<a href="/ddbj/qualifiers.html#transl_except">transl_except</a> を適切に記載してください。</p><p>非常に特殊な翻訳開始機構により、アミノ酸翻訳開始点がメチオニン以外のアミノ酸として翻訳されるタンパク質の場合は CDS の location を入力する際、便宜的に 5'end not complete を示す "&lt;" を <a href="/ddbj/location.html">location</a> に記載してください。あわせて、/<a href="/ddbj/qualifiers.html#note">note</a> に それがメチオニンと異なる開始アミノ酸であることの説明を英語で入力してください。</p>
