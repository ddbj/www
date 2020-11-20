---
layout: simple
title: シークエンスしたゲノム配列それぞれに BioProject/BioSample が必要ですか？
category: faq
db:
  - bioproject
  - biosample
  - dra
tags: 
  - メタデータの登録
date: 2015-02-12T17:14:43
lang: ja
---



<p>一つの研究計画で複数のゲノム配列を決定した場合，これらのゲノム配列は一つの BioProject に紐づけることができますが，配列が取得されたサンプルは別々の BioSample として登録します。</p>
<p>一つのメタゲノムサンプルから複数のゲノム配列を高い精度で構築したメタゲノムアセンブリの場合，一つの BioProject を登録し，再構成したゲノムアセンブリに対応するサンプルを BioSample として必要数登録します。ゲノムにアノテーションを付与する場合は，それぞれのゲノム/BioSample に対応する locus tag prefix の取得を <a href="/contact-ddbj.html">DDBJ BioSample</a> チームに依頼します。</p>
