---
layout: indexed_content
title: '"Invalid value [***] for [transl_table] qualifier." というエラーが表示されました'
category: faq
db:
  - ddbj
tags: 
  - 塩基配列登録システム
date: 2014-06-04T15:59:34
lang: ja
---

## "Invalid value [***] for [transl_table] qualifier." というエラーが表示されました

<p>このエラーは <a href="/ddbj/geneticcode-e.html">genetic code</a> が正しく指定されていない場合に起こります。<br>
  <!-- Nucleotide Sequence Submission System --><a href="/ddbj/web-submission-help.html#flow-7-4">7.Annotation – 生物名 (Organism name)</a> をご参照ください。<br><a href="/ddbj/geneticcode-e.html">genetic code</a> には数値を入力して指定してください。<br><a href="/ddbj/cds.html">CDS feature</a> を入力する際の /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a> qualifier に反映されます。</p>
<p>なお、既報の生物の場合、Scientific name (<a href="/ddbj/organism.html">/organism qualifier</a>) と <a href="/ddbj/qualifiers.html#organelle">/organelle qualifier</a> が正しく記載されていれば、自動的に genetic code が補完されて設定されます。<br>配列が核以外の organelle に由来する場合、organelle を正しく指定してください。</p>
<dl><dt>参考</dt>
  <dd><a href="/ddbj/web-submission-help.html#flow-7">7.Annotation</a></dd>
  <dd><a href="/ddbj/web-submission-help.html#flow-7-4">7.Annotation – 生物名 (Organism name)</a></dd>
  <dd><a href="/ddbj/geneticcode-e.html">The Genetic Codes</a></dd>
  <dd><a href="/ddbj/qualifiers.html#transl_table">/transl_table qualifier について</a></dd>
</dl>
