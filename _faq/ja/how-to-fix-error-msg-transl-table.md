---
layout: simple
title: '"Invalid value [***] for [transl_table] qualifier." というエラーが表示されました'
category: faq
db:
  - ddbj
tags: 
  - 塩基配列登録システム
date: 2014-06-04T15:59:34
lang: ja
---

このエラーは [genetic code](/ddbj/geneticcode-e.html) が正しく指定されていない場合に起こります。    
[7.Annotation – 生物名 (Organism name)](/ddbj/web-submission-help.html#flow-7-4) をご参照ください。    
[genetic code](/ddbj/geneticcode-e.html) には数値を入力して指定してください。    
[CDS feature](/ddbj/cds.html) を入力する際の /[transl_table](/ddbj/qualifiers.html#transl_table) qualifier に反映されます。

なお、既報の生物の場合、Scientific name ([/organism qualifier](/ddbj/organism.html)) と [/organelle qualifier](/ddbj/qualifiers.html#organelle) が正しく記載されていれば、自動的に genetic code が補完されて設定されます。    
配列が核以外の organelle に由来する場合、organelle を正しく指定してください。

参考
: [7.Annotation](/ddbj/web-submission-help.html#flow-7)
: [7.Annotation – 生物名 (Organism name)](/ddbj/web-submission-help.html#flow-7-4)
: [The Genetic Codes](/ddbj/geneticcode-e.html)
: [/transl_table qualifier について](/ddbj/qualifiers.html#transl_table)


