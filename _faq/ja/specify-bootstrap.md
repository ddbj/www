---
layout: simple
title: ClustalW での解析時に BOOTSTRAP を指定することはできますか
category: faq
db:
  - clustalw
tags: 
  - 解析
date: 2014-06-18T10:30:52
lang: ja
---

ClustalW では，全ての解析時に BOOTSTRAP の計算を実行致します。    
出力ファイルの最後にある [Download Tree File] を選択して頂くと， .phb ファイルをダウンロードすることができます。

ただし，入力フォームで [FORMAT] と [CLUSTERING] の選択が以下の様な組み合わせのときには .phb ファイルは作成されません。

| [FORMAT] | [CLUSTERING]|
|---|
| PHYLIP | NJ |
| NEXUS | NJ |
| PHYLIP | UPGMA |
| NEXUS | UPGMA |
