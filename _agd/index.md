---
layout: indexed_content
title: AMED Genome group sharing Database
pathname: index
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

## 概要 <a name="introduction"></a>

AMED Genome group sharing Database (AGD) は個人レベルの遺伝学的なデータと匿名化された表現型情報を保存し，プロジェクト内やグループ内におけるデータの共有を可能にするデータベースです。
DDBJ センターと [科学技術振興機構](http://www.jst.go.jp/) [バイオサイエンスデータベースセンター (NBDC)](http://biosciencedbc.jp/)
は個人情報の保護に配慮しつつヒトに関するデータの共有や利用を推進するために公開 (非制限公開および制限公開) を前提としたデータの共有を推進してきましたが，データの公開に先駆けて，プロジェクト内やグループ内におけるデータの共有を可能にするため AGD の運用を 2017年2月1日から開始しました。

AGD は DDBJ センター，[国立研究開発法人 日本医療研究開発機構 (AMED)](http://www.amed.go.jp/) と [NBDC](http://biosciencedbc.jp/) との連携の下，DDBJ グループクラウドサービス上で提供されています。 AMED データシェアリングポリシーでは NBDC ヒトデータベースでの「制限公開」「非制限公開」に加え，「制限共有」という新たなデータシェアリングの方法を定めており，より早い段階でのデータシェアリングを可能としており，この制限共有データの登録先の一つとして AGD が指定されています。  
AGD へのデータ提供およびデータの利用についての審査は [NBDC ヒトデータ審査委員会](http://gr-sharingdbs.biosciencedbc.jp)が実施します。

## データの利用 <a name="access"></a>

利用者のデータ利用の可否については [NBDC](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines) が審査を担当します。利用者は [NBDC](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines) に制限共有中のデータ利用を申請し， AGD は NBDC からの利用承認連絡を受け，利用者にデータへの安全なアクセスを提供します。

## データの登録 <a name="submission"></a>

AGD は NBDC でデータ提供を承認された匿名化されたデータだけを受け付けています ([ヒトを対象とした研究データの登録について](/policies.html#human))。登録者は [NBDC](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines) に AGD へのデータ提供を申請し， NBDC からデータ提供の承認連絡を受けた登録者は [AGD に連絡](/contact-ddbj.html)します。
AGD チームはその連絡を受け，登録者に登録手順を別途案内します。

データの受領後，AGD はデータベースへの格納のためにデータを処理し，同時に投稿されたオリジナルなファイルを保存します。 AGD では多岐にわたるデータを受け付けており，アレイと新世代シークエンサーからの生データ，遺伝子型・構造変異，統計解析などの解析処理されたデータを保存しています。
また，AGD はサンプルの表現型についてのデータをも登録しています。