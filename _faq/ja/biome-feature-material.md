---
layout: simple
title: env_biome，env_feature，env_material の違いは？
category: faq
db:
  - biosample
tags: 
  - サンプル属性
date: 2014-07-24T10:47:06
lang: ja
---

これら三つのサンプル属性では生息している生物に影響する環境について記述します。

[env_broad_scale](/biosample/attribute.html?all=all#env_broad_scale)  
サンプル採取場所の主な環境を記載します。biome \[[ENVO:00000428](https://www.ebi.ac.uk/ols/ontologies/envo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00000428)\]サブクラスの用語を推奨。複数の用語はパイプ (|) で区切って記載します。例 mangrove biome [ENVO:01000181]|estuarine biome [ENVO:01000020]

[env_local_scale](/biosample/attribute.html?all=all#env_local_scale)  
採取時点のサンプルに実質的な影響を及ぼす環境要因を記載します。複数の用語はパイプ (|) で区切って記載します。例 shoreline [ENVO:00000486]|intertidal zone [ENVO:00000316]

[env_medium](/biosample/attribute.html?all=all#env_medium)  
採取時点のサンプルによって置換されていた物質を記載します。environmental material \[[ENVO:00010483]\](https://www.ebi.ac.uk/ols/ontologies/envo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00010483) サブクラスの用語を推奨。複数の用語はパイプ (|) で区切って記載します。例 estuarine water [ENVO:01000301]|estuarine mud [ENVO:00002160]


