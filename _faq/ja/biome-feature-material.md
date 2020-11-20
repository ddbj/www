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



<p>これら三つのサンプル属性では生息している生物に影響する環境について記述します。</p>
<h3 id="biome"><a href="/biosample/attribute-e.html?all=all#env_biome">env_biome</a></h3>
<p>Environment Ontology (ENVO) で biome [<a href="http://bioportal.bioontology.org/ontologies/ENVO?p=classes&amp;conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00000428">ENVO_00000428</a>] クラスは environmental system のサブクラスです。env_biome はそこに生息する生物群が進化的に適応してきた環境のことです。そのため，そこに適応した生物群が存在するかどうかで env_biome の境界がある程度定義されます。生息する生物群が進化的に適応することができる程度に env_biome は安定している必要があります。ENVO では tundra biome [<a href="http://bioportal.bioontology.org/ontologies/ENVO/?p=classes&amp;conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_01000180">ENVO_01000180</a>] とconiferous forest biome [<a href="http://bioportal.bioontology.org/ontologies/ENVO/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_01000196">ENVO_01000196</a>]が biome に属しています。今のところ ENVO では biome クラスに対して空間的，時間的な尺度は設定されていません。</p>
<h3 id="feature"><a href="/biosample/attribute-e.html?all=all#env_feature">env_feature</a></h3>
<p>biome は生態学的な環境を記述する際には有用ですが，周辺の空間へ強い影響を及ぼしている実体を環境として言及したい場合があります。例えば、サンゴ礁という環境は coral reef [<a href="http://bioportal.bioontology.org/ontologies/ENVO/?p=classes&amp;conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00000150&amp;jump_to_nav=true">ENVO_00000150</a>] の存在とその周辺への影響によって決定づけられます。</p>
<p>同様に，ヒト腸内環境は腸によって決定されます。サンゴ礁やヒトの腸がなくなると，関連する環境は存続し得なくなります。このような environmental system は (biome のように) 適応した特定の生物群や集団ではなく，環境を決定する核となる 'feature' に結び付けられます。ある environmental system を構成する中心となるような実体は ENVO でトップレベルの environmental feature [<a href="http://bioportal.bioontology.org/ontologies/ENVO?p=classes&amp;conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00002297">ENVO_00002297</a>] で表現されます。例えば，environmental feature であるseamount [<a href="http://bioportal.bioontology.org/ontologies/ENVO/?p=classes&amp;conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00000264&amp;jump_to_nav=true">ENVO_00000264</a>]は海山の存在によって構成され，特徴が決定づけられる環境のことです。</p>
<h3 id="material"><a href="/biosample/attribute-e.html?all=all#env_material">env_material</a></h3>
<p>数を数えることができる実体を定義する上記二つのクラスとは異なり，environmental material [<a href="http://bioportal.bioontology.org/ontologies/ENVO?p=classes&amp;conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00010483">ENVO_00010483</a>] クラスは質量，体積，環境に含まれる媒体の他の部分を表します。environmental material は単なる物質の集まり (例: ケイ酸粒子の集まり) ではなく，より複雑で変化に富んだ組成を持つものとして理解されています。例えば，environmental material である soil [<a href="http://bioportal.bioontology.org/ontologies/ENVO?p=classes&amp;conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FENVO_00001998">ENVO_00001998</a>] は微細な岩石，砂粒子，粘土，沈泥，動植物，カビ，微生物の群れ，有機物，気泡を含んでいます。</p>
