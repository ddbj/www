---
layout: simple
title: 検索結果の表示数が少ない（No Hit Found になってしまう）
category: faq
db:
  - blast
tags: 
  - 解析
date: 2014-06-18T10:19:36
lang: ja
---

「検索結果一覧の表示数」，「アラインメント表示数」で指定した数より少ない場合，表示数を増やすには，”より詳細な設定” 欄の「期待値」の値を大きくしてお試し下さい。    
このような場合は，期待数の値を10000 などと極端に大きくして下さい。    
なお，配列が短すぎる場合(配列長が10 前後)，BLAST では見つけられないことがよくあります。 