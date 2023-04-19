---
layout: simple
title: 査読者に非公開データを提供する方法は？
category: faq
db:
  - ddbj
  - dra
  - gea
  - jga
tags: 
  - システム
  - データの公開
date: 2020-12-10T18:14:34
lang: ja
---

[GEA では reviewer access](/gea/reviewer-access.html) で査読者にメタデータとマイクロアレイデータ、NGS の解析済みデータを提供することができます（サイズが大きいため DRA に登録した NGS の生データは含まれていません）。

GEA 以外の [DRA](/dra/index.html)、[DDBJ](/ddbj/index.html) と [JGA](/jga/index.html) では reviewer access は提供していません。

DDBJ については「[論文投稿の過程で査読者に登録した非公開塩基配列を見せたいのですが](/faq/ja/paper-show-referee.html)」を参照してください。

DRA ではアクセッション番号発行通知メールに添付されているアクセッション番号リストをメタデータの概要として提供する方法があります。
シークエンスデータについては、登録者が[アーカイブ済み fastq ファイル](/dra/overview.html#fastq-sra-files)をダウンロードし、アクセス制限が利用できる何らかのサービスやサーバを利用して査読者と共有してください。

JGA は[ポリシー](https://humandbs.biosciencedbc.jp/faq#faq-20)により reviewer access を提供することはできません。

GEA/DRA/DDBJ/MetaboBank ではデータを公開すれば、査読者を含む全てのユーザがアクセスできるようになります。