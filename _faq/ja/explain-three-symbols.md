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

そのマークのついているサイトにアラインメントされているアミノ酸が，    
"*"では，完全に一致している    
":"では，強い類似性のあるグループに属している    
"."では，弱い類似性のあるグループに属している    
ということを示しています。    
強い弱いの基準は，PAM250 MATRIX において，アミノ酸間のスコアが0.5より大きいか，0.5以下かで分けています。 README 抜粋中の    
　　　　　STA    
　　　　　NEQK    
　　　　　:    
は，横一行がその印がつくときのアミノ酸のグループを現しています（アミノ酸の一文字記号で書かれています）。

ClustalW のソースパッケージに含まれる README に，以下のような記述があります。

---

12.The conservation line output in the clustal format alignment file has been changed.    
Three characters are now used:    
'*' indicates positions which have a single, fully conserved residue    
':' indicates that one of the following 'strong' groups is fully conserved:-    
　　　　　　　STA    
　　　　　　　NEQK    
　　　　　　　NHQK    
　　　　　　　NDEQ    
　　　　　　　QHRK    
　　　　　　　MILV    
　　　　　　　MILF    
　　　　　　　HY    
　　　　　　　FYW    
'.' indicates that one of the following 'weaker' groups is fully conserved:-    
　　　　　　　CSA    
　　　　　　　ATV    
　　　　　　　SAG    
　　　　　　　STNK    
　　　　　　　STPA    
　　　　　　　SGND    
　　　　　　　SNDEQK    
　　　　　　　NDEQHK    
　　　　　　　NEQHRK    
　　　　　　　FVLIM    
　　　　　　　HFY    
These are all the positively scoring groups that occur in the Gonnet    
Pam250 matrix. The strong and weak groups are defined as strong score &gt;0.5 and weak    
score =&lt;0.5 respectively.    

----
