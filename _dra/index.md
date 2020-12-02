---
layout: top
title: Sequence Read Archive
description: DDBJ Sequence Read Archive (DRA) は科学研究の再現性担保、及び、データ解析による新たな発見を支えるために生シークエンスデータとアライメント情報をアーカイブしています。 DRA は International Nucleotide Sequence Database Collaboration (INSDC) のメンバーであり， NCBI Sequence Read Archive (SRA) と EBI Sequence Read Archive (ERA) との国際協力のもと，運営されています。
pathname: index
category: dra
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /dra/index.html
  - id: handbook
    title: Handbook
    url: /dra/submission.html
    children:
      - title: Metadata examples
        url: https://docs.google.com/spreadsheets/d/1DTdUQ-WWOMjOA2eYQWmFYUB24hJysuwhvHLJoDFX4rc/edit#gid=0
      - title: XML examples
        url: /dra/example.html
      - title: XML schema
        url: https://github.com/ddbj/pub/tree/master/docs/dra
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=dra
  - id: search
    title: Search
    url: https://ddbj.nig.ac.jp/DRASearch/
  - id: downloads
    title: Downloads
    url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq
    children:
      - title: FASTQ
        url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq
      - title: SRA
        url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/sralite/ByExp/litesra/
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/dra/xsd
  - id: about dra
    title: About DRA
    url: /dra/about-dra.html
panels:
- title: 検索
  url: https://ddbj.nig.ac.jp/DRASearch/
  icon: ../assets/images/icon-search_analysis.png
- title: ハンドブック
  url: /dra/submission.html
  icon: ../assets/images/icon-search_analysis.png
- title: ログイン / 登録
  url: https://ddbj.nig.ac.jp/D-way/
  icon: ../assets/images/icon-search_analysis.png
lang: ja
---