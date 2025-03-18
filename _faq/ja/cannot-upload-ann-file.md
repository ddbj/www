---
layout: simple
title: アノテーションファイルを upload することができません
category: faq
db:
  - ddbj
tags: 
  - 塩基配列登録システム
date: 2014-06-04T16:18:18
lang: ja
---

以下の点を確認の上、修正を行ってください

  - 塩基配列の entry name と [annotation
    file](/ddbj/file-format.html#annotation) 中の entry name
    が一致していなければなりません
  - アノテーションファイルの書式は ５カラムで構成されたタブ区切りテキスト でなければなりません
  - 使用できない改行コードを使用している場合、改行コードを LF (unix 形式)、もしくは、CR-LF (windows 形式)
    に統一してください
  - [feature](/ddbj/features.html) と [qualifier](/ddbj/qualifiers.html)
    に誤りがある場合、修正してください \# 余計な space が含まれている場合も認識できません

問題が解決しない場合、[お問い合わせ](https://forms.gle/zV4cYCnRCefd4FSz9) よりご連絡ください。
