---
layout: simple
title: IlluminaやRoche454のsingle end , paired end データを組み合わせての、アセンブリは可能ですか？
category: faq
db:
  - pipeline
date: 2014-08-27T11:49:31
lang: ja
---

## IlluminaやRoche454のsingle end , paired end データを組み合わせての、アセンブリは可能ですか？

ハイブリッドアセンブリに対応したツールは、Velvet, ABySS 等ありますが、今のところPipelineでは２種類のリードを指定する機能がありませんので、ハイブリッドアセンブルを行うことはできません。