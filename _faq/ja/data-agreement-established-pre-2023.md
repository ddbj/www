---
layout: simple
title: 配列データは INSDC に登録するが、全てのメタデータは2年後まで提供しない、と INSDC の新しいガイドライン策定前にコンソーシアムで合意しています。どうすればよいでしょうか？
category: faq
db:
  - biosample
  - ddbj
tags:
  - 採取場所・日時
date: 2023-09-10T12:39:51
lang: ja
---

INSDC ではガイドライン策定以前の合意に基づいてメタデータを提供できない場合のための [exemption term](/biosample/submission.html#missing-value-reporting) を用意しています。このケースでは、初回のサンプル登録において、以下のように記載してください。
* geo_loc_name (or /country) = missing: data agreement-established pre-2023
* collection date = missing: data agreement-established pre-2023

登録した情報を後で更新して、詳細な情報を追加することができます。