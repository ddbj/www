---
layout: indexed_content
title: DB の out/in 統計量
title-ja: 統計
addhead: <script type='text/javascript' src='https://www.gstatic.com/charts/loader.js'></script><script type='text/javascript' src='/www/assets/js/jquery.charts.js'></script>
---

{: #ddbj-release}
## DDBJ リリース統計

### 総データ量

#### 総データ量 (塩基数/配列数)

<div id="ddbj-release-growth-chart"></div>

<div id="ddbj-release-growth-table" class="top_space20"></div>

CON と TPA は次の理由によりリリース統計には含めていません。CON: 登録済み塩基配列から構築されており重複カウントになるため。TPA:
登録者が取得したオリジナルデータではないため。

非常に大規模な配列データが GenBank と ENA から公開されていること、また、DDBJ
が新しいフォーマットのアクセッション番号に未対応であることから、
最新のリリースでは GenBank と ENA の大量の bulk sequence data が欠落しています。

[Source data
table](https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=161698998)

### データ量における各アーカイブの割合

#### データ量における各アーカイブの割合 (配列数)

<div id="ddbj-release-prop-seq-chart"></div>

<div id="ddbj-release-prop-seq-table" class=""></div>

[Source data
table](https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=1634110914)

#### データ量における各アーカイブの割合 (塩基数)

<div id="ddbj-release-prop-base-chart"></div>

<div id="ddbj-release-prop-base-table" class=""></div>

CON と TPA はリリースの統計には含まれていません。

[Source data
table](https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=1634110914)

### 各アーカイブにおけるデータ種別の構成

#### 各アーカイブにおけるデータ種別の構成（配列数）

<div id="ddbj-release-chart-div-all-seq"></div>

<div id="ddbj-release-table-div-all-seq"></div>

#### 各アーカイブにおけるデータ種別の構成（塩基数）

<div id="ddbj-release-chart-div-all-base"></div>

<div id="ddbj-release-table-div-all-base"></div>

[Source data
table](https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=1205720210)

### データ種別毎の各アーカイブの割合

#### データ種別毎の各アーカイブの割合（配列数）

<div id="ddbj-release-chart-prop-category-seq"></div>

<div id="ddbj-release-table-prop-category-seq"></div>

#### データ種別毎の各アーカイブの割合（塩基数）

<div id="ddbj-release-chart-prop-category-base"></div>

<div id="ddbj-release-table-prop-category-base"></div>

[Source data
table](https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=1410841210)

### 各アーカイブにおける Taxonomic & ENV division の生物分類内訳

#### 各アーカイブにおける Taxonomic & ENV division の生物分類内訳（配列数）

<div id="ddbj-release-chart-tax-prop-seq"></div>

<div id="ddbj-release-table-tax-prop-seq"></div>

#### 各アーカイブにおける Taxonomic & ENV division の生物分類内訳（塩基数）

<div id="ddbj-release-chart-tax-prop-base"></div>

<div id="ddbj-release-table-tax-prop-base"></div>

[Source data
table](https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=487423773)

### 登録塩基数の多い生物種

<div id="ddbj-release-table_organism_ranking">

</div>

[Source data
table](https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=20026687)

### 記載回数の多い Journal

<div id="ddbj-release-table_journal_ranking">

</div>

[Source data
table](https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=811062981)



<h2 id="ddbj-submission">DDBJ への登録数</h2>
<ul class="no_disc no_left bottom_space">
  <li><span class="bold">Web Submission</span>: <a href="/ddbj/websub.html">Nucleotide Sequence Submission System</a> からの登録</li>
  <li><span class="bold">MSS Submission</span>: <a href="/ddbj/mss.html">Mass Submission System</a> からの登録</li>
  <li><span class="bold">Submission</span>: 登録数</li>
</ul>
<div id="submission_stat_area"></div>

<ul>
{% for service in site.statistics%}
  {% unless service.title == "statistics" %}
    {% if service.service_link != null %}
      <li>
        <a href="{{ service.service_link }}">{{ service.title }}</a>
        <a href="{{ service.pathname }}">help</a>
        <br>
      </li>
    {% else %}
      <li>
        <a href="{{ service.pathname }}">{{ service.title }}</a>
        <br>
      </li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>
