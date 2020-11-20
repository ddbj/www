---
layout: simple
title: ClustalW で3種類の記号 "*", ".", ":" の意味は何ですか
category: faq
db:
  - clustalw
tags: 
  - 解析
date: 2014-06-18T10:50:08
lang: ja
---

## ClustalW で3種類の記号 "*", ".", ":" の意味は何ですか

そのマークのついているサイトにアラインメントされているアミノ酸が， <br>"*"では，完全に一致している  <br>":"では，強い類似性のあるグループに属している  <br>"."では，弱い類似性のあるグループに属している  <br>ということを示しています。 強い弱いの基準は，PAM250 MATRIX において，アミノ酸間のスコアが0.5より大きいか，0.5以下かで分けています。 README 抜粋中の  <br>　　　　　STA  <br>　　　　　NEQK  <br>　　　　　:  <br>は，横一行がその印がつくときのアミノ酸のグループを現しています（アミノ酸の一文字記号で書かれています）。  <br> <br>ClustalW のソースパッケージに含まれる README に，以下のような記述があります。 <br> --------------------------------------------------------------------------- <br>12. The conservation line output in the clustal format alignment file has been changed.  <br>Three characters are now used: <br>'*' indicates positions which have a single, fully conserved residue <br>':' indicates that one of the following 'strong' groups is fully conserved:- <br>　　　　　　　STA　　　　　　　NEQK <br>　　　　　　　NHQK <br>　　　　　　　NDEQ <br>　　　　　　　QHRK <br>　　　　　　　MILV <br>　　　　　　　MILF <br>　　　　　　　HY <br>　　　　　　　FYW <br>'.' indicates that one of the following 'weaker' groups is fully conserved:- <br>　　　　　　　CSA <br>　　　　　　　ATV <br>　　　　　　　SAG <br>　　　　　　　STNK <br>　　　　　　　STPA <br>　　　　　　　SGND <br>　　　　　　　SNDEQK <br>　　　　　　　NDEQHK <br>　　　　　　　NEQHRK <br>　　　　　　　FVLIM <br>　　　　　　　HFY <br>These are all the positively scoring groups that occur in the Gonnet Pam250 <br>matrix. The strong and weak groups are defined as strong score &gt;0.5 and weak <br>score =&lt;0.5 respectively. <br>--------------------------------------------------------------------------- 