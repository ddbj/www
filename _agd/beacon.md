---
layout: indexed_content
title: GA4GH Beacon
pathname: beacon
category: agd
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /agd/index.html
  - id: submission
    title: Submission
    url: /agd/submission.html
    children:
      - title: How to submit
        url: /agd/submission-step.html
      - title: Example submission
        url: https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318
      - title: How to download
        url: /agd/download.html
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/jga/xsd/
  - id: ga4gh beacon
    title: GA4GH Beacon
    url: /agd/beacon.html
lang: ja
---

## GA4GH Beacon <a name="beacon"></a>

[AGD Beacon サービス](https://agdbeacon.ddbj.nig.ac.jp/webui)

Beacon はアクセス制限が課されているバリアントデータに対してリファレンスゲノム中の特定アリルをもつデータセットが存在するか否かを検索するサービスです。 ヒトゲノムやヘルスケアデータの標準化を推進する国際コンソーシアムである [Global Alliance for Genomics and Health (GA4GH)](https://www.ga4gh.org/) が [api 標準](https://github.com/ga4gh-beacon/specification)を定めています。 セキュリティと利便性を両立するため Public/Registered/Controlled の三段階のアクセルレベルを設けることが提唱されており、AGD Beacon では Registered 認証に対応しており、Registered ユーザとして登録されたユーザのみが検索ができるようになっています。 Beacon サービスにより「Registered ユーザは興味のあるアリルで AGD アクセス制限バリアントデータを検索し Yes が返ってくれば NBDC にデータ利用申請をする」というフローが実現します。

Beacon の詳しい説明については以下をご覧ください。

  - <span class="title">[Federated discovery and sharing of genomic data using Beacons.](https://www.ncbi.nlm.nih.gov/pubmed/30833764)</span>
    <br>
    <span class="authors">Fiume M, Cupak M, Keenan S, Rambla J, de la Torre S, Dyke SOM, Brookes AJ, Carey K, Lloyd D, Goodhand P et al</span>
    <br>
    <span class="pub-info"> <span class="journal">Nat Biotechnol</span> <span class="bib-info">2019 Mar;37(3):220-224.</span> <span class="pubmed-id">Pubmed: [30833764](https://www.ncbi.nlm.nih.gov/pubmed/30833764)</span>
    </span>

[Beacon: The Story So Far](https://drive.google.com/file/d/1TKkWdmpES52Ex4kWd8oaSoGV_z5tiz2N/view)

## インデックスデータ <a name="index"></a>

以下のデータセットが Beacon インデックスされています。

| AGD Study                                                                          | Study Title                     | AGD Dataset                                                                        | Access level |
| ---------------------------------------------------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------- | ------------ |
| [AGDS\_00000000001](https://ddbj.nig.ac.jp/agd/viewer/view/study/AGDS_00000000001) | Response to Hepatitis B vaccine | [AGDD\_00000000001](https://ddbj.nig.ac.jp/agd/viewer/view/study/AGDS_00000000001) | Registered   |