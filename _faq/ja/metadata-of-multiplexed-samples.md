---
layout: simple
title: サンプルがバーコード配列によって区別されている場合のメタデータは?
category: faq
db:
  - dra
tags: 
  - メタデータの登録
date: 2013-10-08T10:26:41
lang: ja
---

バーコード配列で由来サンプルが区別されたデータファイルは登録前に分割し、由来サンプルごとに BioSample を作成します。
各 BioSample には１つかそれ以上のユニークなデータファイルがリンクされている状態にします。  
バーコード配列とサンプルの対応は、Experiment の [Library Construction Protocol](/dra/metadata.html#Library_Construction_Protocol) にフリーテキストで記載します。

サンプル数が多件数になることが一般的な 10x Genomics のデータファイルについては、GEA [Single-cell submission guide](/gea/single-cell.html) をご参照ください。

詳細については [Data Files](/dra/datafile.html) をご参照ください。
