---
layout: simple
title: '"MGA:No entry name is found other than [ COMMON ], without feature [ DATATYPE/type=MGA ]." というエラーが表示されました'
category: faq
db:
  - ddbj
tags: 
  - 塩基配列登録システム
date: 2014-06-04T16:29:19
lang: ja
---

annotation table に /[organism](/ddbj/qualifiers.html#organism),
/[mol\_type](/ddbj/qualifiers.html#mol_type) を未入力の状態で \[Confirm\]
をクリックした場合に表示されます。  
必要な annotation (feature, location, qualifier) を入力後、\[Confirm\]
をクリックしてください。

[7.Annotation](/ddbj/web-submission-help.html#flow-7) で、source 横の
\[Select Qualifier\] をクリックして必要な qualifier を選択したのち、Entry name の横にある
\[Edit\] をクリックし、/organism 等の情報を入力してください。source
以外のアノテーションの入力についても必ず行っていただくようお願いいたします。  
参考: [生物名 (Organism name)](/ddbj/web-submission-help.html#flow-7-4)
