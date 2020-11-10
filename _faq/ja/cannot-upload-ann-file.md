---
layout: indexed_content
title: アノテーションファイルを upload することができません
category: faq
db:
  - ddbj
tags: 
  - 塩基配列登録システム
date: 2014-06-04T16:18:18
lang: ja
---

## アノテーションファイルを upload することができません

<p>以下の点を確認の上、修正を行ってください</p>
<!-- Nucleotide Sequence Submission System -->
<ul>
  <li>塩基配列の entry name と <a href="/ddbj/file-format-j.html#annotation">annotation file</a> 中の entry name が一致していなければなりません</li>
  <li>アノテーションファイルの書式は ５カラムで構成されたタブ区切りテキスト でなければなりません</li>
  <li>使用できない改行コードを使用している場合、改行コードを LF (unix 形式)、もしくは、CR-LF (windows 形式) に統一してください</li>
  <li><a href="/ddbj/features.html">feature</a> と <a href="/ddbj/qualifiers.html">qualifier</a> に誤りがある場合、修正してください # 余計な space が含まれている場合も認識できません</li>
</ul>
<p>問題が解決しない場合、<a href="/contact-ddbj.html#to-ddbj">DDBJへのお問い合わせ ム</a> よりご連絡ください。 </p>
