---
layout: simple
title: BLAST の解析結果で表示される E Value は，どのように計算されていますか？
category: faq
db:
  - blast
tags: 
  - 解析
date: 2015-02-05T10:42:15
lang: ja
---



<html>
  クエリ配列の長さを l 、データベースに保存されている配列の本数を n 、核酸あるいはアミノ酸同士の相似度を表すスコアを S としたとき、E value は次の式によって書き表さされます。（ただし、k 、m は正の定数です）<br>E=k*l*n*exp^(－mS)<br>この式から、BLASTの出力結果は、1E-Xと表示されている場合は、10<sup>-X</sup> という意味になります。
</html>