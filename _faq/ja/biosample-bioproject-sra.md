---
layout: simple
title: BioSample，DRA Experiment，DRA Run とデータファイルとの間の関係は?
category: faq
db:
  - biosample
  - dra
tags: 
  - メタデータの登録
date: 2014-06-04T17:12:53
lang: ja
---



<p>BioSample はデータベースに登録する実験データを得るために使われた生物学的な試料やサンプルに対して作成します。Biological/Technical replicate は異なる BioSample として登録し，サンプル属性 replicate に \"biological replicate 1\"，\"biological replicate 2\" のように記載して replicate であることを表現します。</p>
<p>DRA のデータファイルは一つの BioSample にしかリンクできないことに注意してください。</p>
<p>Experiment は特定のサンプルに由来するシークエンス用ライブラリーです。データについて一般に公開される情報の多くが Experiment に記載されます。 </p>
<p>Run は特定のシークエンス用ライブラリー (Experiment) にリンクすべきデータファイルを単にまとめるオブジェクトで，データについての内容説明はあまり含まれていません。Run にリストされたすべてのデータファイルはアーカイブ用の SRA ファイル (配布用の fastq ファイル) にマージされることに注意してください。ですので，異なるサンプルに由来するファイルは同じ Run に含めるべきではありません。一方，ペアードのデータファイルは同じ Run に含め，ペアードリードが正しくペアとして処理されるようにします。ペアライブラリー毎に，例えば Forward と Reverse で，サンプルを分割しないでください。</p>