---
layout: simple
title: 塩基配列登録にはいくつのサンプルが必要ですか?
category: faq
db:
  - biosample
  - dra
tags: 
  - メタデータの登録
date: 2014-06-04T12:09:53
lang: ja
---

## 塩基配列登録にはいくつのサンプルが必要ですか?

<p>BioSample はデータベースに登録する実験データを得るために使われた生物学的な試料やサンプルに対するレコードです。Biological/Technical replicate は BioSample で "replicate" というユーザ定義の属性を使い "replicate = biological replicate 1" のようにしてサンプルを区別します。</p>
<p>それぞれに採取された，物理的に異なる環境サンプルはユニークな BioSampleになりますが，サンプルに含まれる配列によって由来が区別されたリードは BioSample に該当しません。 DRA のデータファイルは一つのBioSample にしかリンクできないことに注意してください。</p>基本的な考え方:
<div class="sub_index">
  <ul class="disc">
    <li>それぞれのユニークな source に対して別々の BioSample を登録します。例えば，羽から調整した RNA と肢から調整した RNA は，両者が別々にシークエンスされている場合，別個の BioSample になります。</li>
    <li>ゲノムアセンブリは一つの BioSample のみ持つことができます。複数の BioSample に由来するリードをアセンブルして得られたゲノム配列の場合，アセンブルのために他の BioSample が使われたことを示す１つの BioSample を新しく登録します。<br>例えば，オスとメスに由来するリードをそれぞれ DRA に登録したが，両者のリードを用いてゲノムをアセンブルした場合，オスとメスに対する一つの BioSample を新しく登録し，オスとメスそれぞれに対する BioSample アクセッション番号を引用して，両 BioSample の混合サンプルであることを明示します。<a href="http://www.ncbi.nlm.nih.gov/nuccore/AOMJ00000000.1">そのようなゲノム登録の例</a>。</li>
    <li>内部共生体 (endosymbiont) の場合: ゲノム単位で BioSample を登録する必要があるため，例えば昆虫と内部共生体の両方のゲノムを登録する場合，それぞれの BioSample が必要になります。</li>
  </ul>
</div>サンプルの登録例:
<div class="sub_index">
  <ul class="disc">
    <li>海水中のある採取地点から得られた 23,000 本のユニークな 16S 増幅配列 - 1 BioSample(１サンプルが採取され，16S の多様性が解析された)</li>
    <li>同じ薬物で処理された三匹の「同一」なトランスジェニックマウス - 3 BioSamples(Biological/Technical replicate は BioSample で区別)</li>
    <li>遺伝子発現レベルの経時的な変化を解析するために，ウイルスに感染させた CHO 細胞を 0，2，4，8 時間後にサンプリング - 4 BioSamples (4 timepoints)</li>
    <li>発現している遺伝子の差異を組織毎に調べるため，オスのアリクイ一個体から採取した脳，心臓，肺，精巣，肝臓 - 5 BioSamples (５つの異なる組織)</li>
  </ul>
</div>