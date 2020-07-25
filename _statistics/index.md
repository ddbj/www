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

<div id="ddbj-release-prop-seq-table"></div>

[Source data
table](https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=1634110914)

#### データ量における各アーカイブの割合 (塩基数)

<div id="ddbj-release-prop-base-chart"></div>

<div id="ddbj-release-prop-base-table"></div>

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

<div id="ddbj-release-table_organism_ranking"></div>

[Source data
table](https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=20026687)

### 記載回数の多い Journal

<div id="ddbj-release-table_journal_ranking"></div>

[Source data
table](https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=811062981)



{: #dra-release}
## DRA データ公開

<div id="dra-release_stat_area"></div>



{: #gea-release}
## GEA データ公開

<div id="gea-release_stat_area"></div>



{: #jga-release}
## JGA データ公開

<div id="jga-release_stat_area"></div>



{: #ddbj-submission}
## DDBJ への登録数

- Web Submission: [Nucleotide Sequence Submission System](/ddbj/websub.html) からの登録
- MSS Submission: [Mass Submission System](/ddbj/mss.html) からの登録
- Submission: 登録数

<div id="ddbj-submission_stat_area"></div>



{: #dra-submission}
## DRA への登録

<div id="dra-submission_stat_area"></div>



{: #gea-submission}
## GEA への登録

<div id="gea-submission_stat_area"></div>



{: #jga-submission}
## JGA への登録

<div id="jga-submission_stat_area"></div>



{: #web-access}
## ウェブアクセス

<div id="web-access_stat_area"></div>

注釈: Unique users/month は awstats が出力する bot アクセスを除外した月間ユニーク IP 数になります。2018年2月22日から4月13日まで DDBJ ホームページ (www.ddbj.nig.ac.jp) のアクセスログが欠落したため Home pages 及び All の2018年年平均から2018年2～4月の数値は除いてあります。All は ARSA、BLAST、ClustalW、getentry、TXSearch、DRASearch、www.ddbj.nig.ac.jp home pages（グラフと表に含まれる）、及び、MiGAP、DDBJ Pipeline、D-way、BPSearch、BSSearch、SuperComputer (sc.ddbj.nig.ac.jp) home page（グラフと表では割愛）のログを合算して集計した月間ユニーク IP 数です。ホームページは2004年1月から2018年1月までは awstats 7.0、2018年2月からは awstats 7.2、それ以外のサイトは全て 7.2 で解析されています。2018年2月から trace.ddbj.nig.ac.jp アドレスで提供されていた BioProject/BioSample/DRA/GEA/JGA ページが www.ddbj.nig.ac.jp に統合されています。







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
