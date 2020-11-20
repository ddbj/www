---
layout: simple
title: '"To use [translation] qualifier, [exception] qualifier is required in the [CDS] feature." というエラーが表示されました'
category: faq
db:
  - ddbj
tags: 
  - 塩基配列登録システム
date: 2014-06-04T15:55:42
lang: ja
---

## "To use [translation] qualifier, [exception] qualifier is required in the [CDS] feature." というエラーが表示されました

<p>この error message は <a href="/ddbj/cds.html#translation">CDS feature</a> において [Select Qualifier] で /<a href="/ddbj/qualifiers.html#translation">translation</a> を選択した場合に出力されます。<br>
  <!-- Nucleotide Sequence Submission System -->通常、/translation qualifier は CDS feature の情報を基に自動翻訳した結果を出力しますので、登録者側で記載する必要はありません。<br>/translation qualfier を削除することで、エラーは解消します。</p>
<p>参考までに /translation qualifier は、/<a href="/ddbj/qualifiers.html#exception">exception</a> qualifier を記載した際にのみ記載します。<br>典型的には RNA editing が原因でゲノム配列を元に自動翻訳したアミノ酸配列と 実際の mRNA 分子から翻訳されるアミノ酸配列 が異なる場合に記載します。</p>
<dl><dt>参考</dt>
  <dd><a href="/ddbj/example.html">登録の見本</a>: <a href="/ddbj/example.html#B09">B09) RNA editing</a></dd>
  <dd><a href="/faq/ja/how-to-input-amino-acid-seq.html">アミノ酸配列 (/translation qualifier) は どのようにして入力するのでしょうか</a></dd>
  <dd><a href="/faq/ja/how-to-confirm-translated-amino-acid-seq.html">[塩基配列登録システム] CDS feature の翻訳アミノ酸配列 (/translation qualifier) を確認する方法は？</a></dd>
  <dd><a href="/faq/ja/translation-qualifier-seems-incorrect.html">/translation qualifier で示されるアミノ酸配列の翻訳は間違いではないでしょうか</a></dd>
</dl>
