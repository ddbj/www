---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Third-party reanalysis data
category: gea
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /gea/index.html
  - id: submission overview
    title: Submission Overview
    url: /gea/overview.html
    children:
      - title: Submit microarray experiment
        url: /gea/submit-array.html
      - title: Submit sequencing experiment
        url: /gea/submit-sequence.html
      - title: Metadata
        url: /gea/metadata.html
      - title: Data File
        url: /gea/datafile.html
      - title: Validation
        url: /gea/validation.html
      - title: Single-cell submission guide
        url: /gea/single-cell.html
      - title: Example
        url: /gea/example.html
      - title: Array Design
        url: /gea/adf.html
      - title: Data matrix
        url: /gea/matrix.html
      - title: Reviewer Access
        url: /gea/reviewer-access.html
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=gea
  - id: search
    title: Search (AOE)
    url: http://aoe.dbcls.jp/
    children:
      - title: Search (ArrayExpress)
        url: https://www.ebi.ac.uk/arrayexpress/browse.html
      - title: RefEx
        url: http://refex.dbcls.jp/
  - id: downloads
    title: Downloads
    url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/gea
  - id: about gea
    title: About GEA
    url: /gea/about-gea.html
lang: ja
---

## Third-party reanalysis data 登録  {#third-party}

第三者が登録した GEA や INSDC のデータを再解析したデータは third-party reanalysis data として GEA に登録することができます（元データを自身で再登録する必要はありません）。このような third-party reanalysis data は参照している元データ（fastq 等の生データを含む）が GEA や INSDC 等のデータベースで公開されている必要があります。また、登録の目的は査読論文で再解析の内容、及び、アクセッション番号を公表することである必要があります。Third-party reanalysis data を GEA に登録する場合は [GEA チーム](/contact-ddbj.html)にお問い合わせください。

### GEA third-party reanalysis data 登録についての注意点  {#req-third-party}

- Third-party reanalysis data を GEA から公開するためには、再解析の内容についての査読論文が公開されている必要があります。
- Third-party reanalysis data で参照している元データ（fastq 等の生データを含む）は GEA や INSDC 等の主要な公共データベースで公開されている必要があります。

関連サイト: ['Third-party reanalysis' type を持つ NCBI GEO データ](https://www.ncbi.nlm.nih.gov/geo/browse/?view=series&search=Third-party%20reanalysis&type=27&zsort=date&display=20)。[DDBJ Third Party Data (TPA)](/ddbj/tpa.html)
