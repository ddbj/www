---
layout: simple
title: 採取場所と日時のうち、片方しか記載できない場合は？
category: faq
db:
  - biosample
  - ddbj
tags:
  - 採取場所・日時
date: 2023-09-10T12:39:51
lang: ja
---

このようなケースのための exemption term が [missing value reporting standards](/biosample/submission.html#missing-value-reporting) で用意されています。例えば、ネガティブコントロールの塩基配列を決定するために、コントロールサンプルを得る場合があると思います。この場合、コントロールサンプルはラボ内で調製されているため、採取場所の報告義務は適用されません。しかし、コントロールサンプルを調整した日付は報告可能ですので、以下のようになります。

* geo_loc_name (or /country) = missing: control sample
* collection date = 2020-05-25