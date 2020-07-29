---
layout: indexed_content
title: 新アカウントシステムへの移行
pathname: account-integration
category: tentative
lang: ja
---

## 現在のアカウントシステム

生命情報・DDBJ センターでは BioProject/BioSample/DRA/GEA (D-way)、JGA 及び AGD への登録を管理する三系統のアカウントシステムをそれぞれ運用しています。ユーザの利便性向上のため、これらは[グループ概念](group.html)を導入した新しいアカウントシステムへ移行する予定であり、最終的には一つのアカウントで D-way/JGA/AGD の全サービスが利用できるようになる予定です。新しいシステムでは[グループ](group.html)を介した、研究責任者と登録実務担当者によるデータの共同管理、代理登録の適切な管理、及び、組織異動時のデータの後任者への引継ぎができるようになります。

{::nomarkdown}
{% include image.html url="books/account_integration.png" caption="新アカウントシステムへの移行" class="w450" %}
{:/}

## 新アカウントシステムへの移行

第一段階として2020年6～7月頃に JGA を新アカウントシステムに移行します。続いて AGD を移行します。 D-way の移行時期は未定です。

あわせて [NBDC](https://humandbs.biosciencedbc.jp/) における JGA への提供申請と利用申請も同じアカウントからできるようになります。これにより「NBDC への提供申請-JGA 登録」「NBDC への利用申請-JGA Dataset ダウンロード」が同じアカウントからシームレスにできるようになります。

以下では JGA アカウントの移行方法について説明します。

### JGA アカウントのみ保有している場合

JGA アカウント (Account: A) のみ保有している場合。A をそのまま新アカウントシステムに移行します。新アカウントシステムと BioProject/BioSample/DRA/GEA のアカウントシステムである D-way は同期されているので、A で JGA と D-way 両方が利用できるようになります。

<span class="red">新アカウント発行の連絡を受けた後に D-way を利用する場合、アカウントの重複を避けるため新しくアカウントを作成しないでください。</span>

{::nomarkdown}
{% include image.html url="books/account_jga_only.png" caption="JGA アカウントのみ保有している場合" class="w450" %}
{:/}

### D-way アカウントのみ保有している場合

D-way アカウント (Account: B) のみ保有している場合。JGA が新アカウントシステムに移行された後、 B で JGA を利用できるようになります。JGA の新システムへの移行前に JGA に登録することになった場合、B とは別の JGA 専用アカウントが発行されることになります。

{::nomarkdown}
{% include image.html url="books/account_dway_only.png" caption="JGA アカウントのみ保有している場合" class="w450" %}
{:/}

### JGA と D-way アカウント両方を保有している場合

JGA (Account: C) と D-way アカウント (Account: D) の両方を保有している場合。 <span class="red">D-way に名寄せされます。</span> JGA が新システムに移行後、D で JGA システムが利用できるようになります。C に紐づいていた JGA データは D に引き継がれます。JGA の新システムへの移行前は引き続き C で JGA に登録することになります。

{::nomarkdown}
{% include image.html url="books/account_jga_dway.png" caption="JGA と D-way アカウント両方を保有している場合" class="w450" %}
{:/}

## AGD アカウントについて

AGD アカウントも JGA と同様の方法で JGA の後に新アカウントシステムに移行されます。

- D-way アカウントがある場合は D-way に名寄せされます。
- D-way がなく JGA アカウントがある場合、JGA に名寄せされます。
- D-way も JGA アカウントも無い場合、AGD アカウントで D-way/JGA/AGD が利用できるようになります。