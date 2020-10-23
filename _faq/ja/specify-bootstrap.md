---
layout: indexed_content
title: ClustalW での解析時に BOOTSTRAP を指定することはできますか
category: faq
db:
  - clustalw
tags: 
  - 解析
date: 2014-06-18T10:30:52
lang: ja
---

## ClustalW での解析時に BOOTSTRAP を指定することはできますか

ClustalW では，全ての解析時に BOOTSTRAP の計算を実行致します。<br>出力ファイルの最後にある [Download Tree File] を選択して頂くと， .phb ファイルをダウンロードすることができます。<br><br>ただし，入力フォームで [FORMAT] と [CLUSTERING] の選択が以下の様な組み合わせのときには .phb ファイルは作成されません。<br>
<table id="mktable_noline">
  <tr>
    <td id="mktable_left_noline" style="font-weight:bold; width:100px;"> [FORMAT] </td>
    <td id="mktable_left_noline" style="font-weight:bold;"> [CLUSTERING]</td>
  </tr>
  <tr>
    <td id="mktable_left_noline" style="width:100px;"> PHYLIP</td>
    <td id="mktable_left_noline"> NJ</td>
  </tr>
  <tr>
    <td id="mktable_left_noline" style="width:100px;"> NEXUS</td>
    <td id="mktable_left_noline"> NJ</td>
  </tr>
  <tr>
    <td id="mktable_left_noline" style="width:100px;"> PHYLIP</td>
    <td id="mktable_left_noline"> UPGMA</td>
  </tr>
  <tr>
    <td id="mktable_left_noline" style="width:100px;"> NEXUS</td>
    <td id="mktable_left_noline"> UPGMA</td>
  </tr>
</table>