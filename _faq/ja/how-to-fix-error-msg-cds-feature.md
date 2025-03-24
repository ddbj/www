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

この error message は [CDS feature](/ddbj/cds.html#translation) において
\[Select Qualifier\] で /[translation](/ddbj/qualifiers.html#translation)
を選択した場合に出力されます。  
通常、/translation qualifier は CDS feature
の情報を基に自動翻訳した結果を出力しますので、登録者側で記載する必要はありません。    
/translation qualfier を削除することで、エラーは解消します。

参考までに /translation qualifier
は、/[exception](/ddbj/qualifiers.html#exception) qualifier
を記載した際にのみ記載します。  
典型的には RNA editing が原因でゲノム配列を元に自動翻訳したアミノ酸配列と 実際の mRNA 分子から翻訳されるアミノ酸配列
が異なる場合に記載します。

参考  
: [配列データ記載例](/ddbj/example.html): [B09) RNA editing](/ddbj/example.html#B09)
: [アミノ酸配列 (/translation qualifier) は
    どのようにして入力するのでしょうか](/faq/ja/how-to-input-amino-acid-seq.html)
: [\[塩基配列登録システム\] CDS feature の翻訳アミノ酸配列 (/translation qualifier)
    を確認する方法は？](/faq/ja/how-to-confirm-translated-amino-acid-seq.html)
: [/translation qualifier
    で示されるアミノ酸配列の翻訳は間違いではないでしょうか](/faq/ja/translation-qualifier-seems-incorrect.html)
