---
layout: simple
title: '[Set optional parameters 画面] BWAのuniq optionの質問です。Please choose uniq mode.の４択の違いは？'
category: faq
db:
  - pipeline
date: 2014-06-05T16:30:28
lang: ja
---



<p>1. Do not remove any read.<br> ユニーク化処理を行わない<br>2. Retain pairs when both reads mapped uniquely or one of reads mapped uniquely, and Discard other pairs.<br> ペアのうち一方でもユニークにマップされていれば、そのペアを残す（両方マルチヒットの場合は破棄）<br>3. Retain pairs when both reads mapped uniquely, and Discard other pairs.<br> ペアのリードのうち両方のリードがユニークにマップされている場合だけ、そのペアを残す（一方でもマルチヒットなら破棄）<br>4. Retain uniquely mapped reads and discard multiply mapped reads.<br> ペアに関係なく、ユニークにマップされたリードだけを残す<br><br>どれがベストかは場面によって異なると思いますが、３番目が一番厳しく、２番目が一番緩く、４番目はその中間という感じです。</p>