---
layout: indexed_content
lang: ja
title: 登録・公開データ量
category: statistics
lang: ja
related_pages:
  - title: DDBJ 定期リリース統計
    url: ./ddbj-release
  - title: リリースノート (DDBJ, 16S rRNA, DAD)
    url: /ddbj-releases
  - title: 最新リリースの情報
    url: /latest-releases
addhead: <script type='text/javascript' src='https://www.gstatic.com/charts/loader.js'></script><script type='text/javascript' src='/assets/js/jquery.charts.js'></script>
---

{: #ddbj-release}
## DDBJ データ公開

<div id="ddbj-release-growth-chart"></div>

<div id="ddbj-release-growth-table" class="top_space20"></div>
<br>

CON と TPA は次の理由によりリリース統計には含めていません。CON: 登録済み塩基配列から構築されており重複カウントになるため。TPA:
登録者が取得したオリジナルデータではないため。

非常に大規模な配列データが GenBank と ENA から公開されていること、また、DDBJ
が新しいフォーマットのアクセッション番号に未対応であることから、
最新のリリースでは GenBank と ENA の大量の bulk sequence data が欠落しています。

[Source data
table](https://docs.google.com/spreadsheets/d/16ZF79i1X17Zfn3x6vnJ2elmWXb3ToHt9nZIDTtg-zGA/edit#gid=161698998)




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

- Web Submission: [Nucleotide Sequence Submission System](/ddbj/web-submission.html) からの登録
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

注釈: Unique users/month は awstats が出力する bot アクセスを除外した月間ユニーク IP 数になります。2018年2月22日から4月13日まで DDBJ ホームページ (www.ddbj.nig.ac.jp) のアクセスログが欠落したため Home pages 及び All の2018年年平均から2018年2～4月の数値は除いてあります。All は2021年10月までは ARSA、BLAST、ClustalW、getentry、TXSearch、DRASearch、www.ddbj.nig.ac.jp home pages（グラフと表に含まれる）、及び、MiGAP、DDBJ Pipeline、D-way、BPSearch、BSSearch、SuperComputer (sc.ddbj.nig.ac.jp) home page（グラフと表では割愛）のログを合算して集計した月間ユニーク IP 数です。2021年11月に BLAST、ClustalW と BP/BS/DRASearch が閉鎖され、DDBJ Search がリリースされたため、2021年11月以降は BLAST、ClustalW と BP/BS/DRASearch が All から除外され、DDBJ Search の数値が加算されています。ホームページは2004年1月から2018年1月までは awstats 7.0、2018年2月からは awstats 7.2、それ以外のサイトは全て 7.2 で解析されています。2018年2月から trace.ddbj.nig.ac.jp アドレスで提供されていた BioProject/BioSample/DRA/GEA/JGA ページが www.ddbj.nig.ac.jp に統合されています。


{: #page-access}
## ホームページアクセス

<div id="page-access_stat_area"></div>
