---
layout: indexed_content
title: グループ
pathname: group
category: jga
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /jga/index.html
  - id: browse researches at nbdc
    title: Browse researches at NBDC
    url: https://humandbs.biosciencedbc.jp/data-use/all-researches
    children:
      - title: DDBJ Search
        url: https://ddbj.nig.ac.jp/search
  - id: submission
    title: Submission
    url: /jga/submission.html
    children:
      - title: How to submit
        url: /jga/submission-step.html
      - title: How to access data
        url: /jga/download.html
      - title: Groups
        url: /jga/group.html
      - title: Updates in 2020
        url: /jga/update-202009.html
      - title: Example submission
        url: https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/jga/xsd/
  - id: faq
    title: FAQ
    url: /faq/ja/index.html
lang: ja
---

## グループ<a name="group"></a>

NBDC への申請、及び、JGA データの登録・利用は D-way
アカウントをメンバーとするグループによって管理されます。
グループによりアカウントを共有することなく、研究代表者 (PI)
と実務担当者がデータを管理したり、グループのメンバーを追加・削除することで関係者の異動時にアクセス権限を適切に保つことができます。より詳細は「[グループについて](/group.html)」を参照してください。

## 提供申請グループ<a name="subgrp"></a>

NBDC への提供申請と JGA
へのデータ登録は提供申請グループを介して管理されます。[NBDC
申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)で提供申請を作成する前にグループを作成します。グループには責任者である研究代表者（PI）、及び、登録実務を担当する担当者を含めます。旧システムでは登録者は
JGA Submission
に記載する方式でしたが、新システムでは提供申請グループのメンバーが登録者となります。

NBDC
申請システムの左メニューで「グループ作成」を選択すると、グループ作成画面が表示されます。グループ名、グループの説明を入力（日本語、英語共に可）し、グループ種別で「データ提供申請グループ」を選択してから保存します。

{::nomarkdown}
{% include image.html url="books/create-group-1.jpg" caption="提供申請グループの作成" class="w450" %}
{:/}
<br>
提供申請グループが作成されると subgrp ID（例 subgrp5352）が割り振られます。

{::nomarkdown}
{% include image.html url="books/create-group-2.jpg" caption="提供申請グループ ID の発行" class="w450" %}
{:/}
<br>
グループを作成した申請者（account\_b）がグループオーナーになります。オーナーはメンバーを招待することができます。メンバタブで「メンバを招待する」を押下します。

{::nomarkdown}
{% include image.html url="books/create-group-3.jpg" caption="メンバ" class="w450" %}
{:/}
<br>
アカウントの招待画面で招待する人のアカウント ID（例
account\_c）、もしくは、メールアドレスを入力し、「メンバを招待する」を押下し、招待メールを送信します。

{::nomarkdown}
{% include image.html url="books/create-group-4.jpg" caption="メンバの招待" class="w450" %}
{:/}
<br>
招待された人が招待メール中のリンクをクリックするとメンバとして追加されます。

{::nomarkdown}
{% include image.html url="books/create-group-5.jpg" caption="メンバの追加" class="w450" %}
{:/}
<br>
PI である account\_c が追加されました。

この提供申請、及び、承認後に作成される JGA Submission では account\_c と
account\_b
が登録者になります。登録完了後、グループ編集画面のメンバタブで Owner と
PI を account\_b から account\_c に移譲すると PI
にグループ管理権限を委譲することができます。
