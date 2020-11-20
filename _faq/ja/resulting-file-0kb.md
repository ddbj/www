---
layout: simple
title: Preprocessing処理は問題なく終了していますが、結果ファイルが０kbでした
category: faq
db:
  - pipeline
date: 2014-08-28T15:31:18
lang: ja
---

## Preprocessing処理は問題なく終了していますが、結果ファイルが０kbでした

原因はpreprocessing実行時における、Quality Scoreの形式指定の誤りと思われます。クエリーファイルの中身を確認し、phred33 または phred64 を指定してください。