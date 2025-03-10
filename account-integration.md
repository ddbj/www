---
layout: indexed_content
title: 新アカウントシステムへの移行
lang: ja
---

## 現在のアカウントシステム  {#current-account}

生命情報・DDBJ センターでは BioProject/BioSample/DRA/GEA (D-way)、JGA 及び AGD への登録を管理する三系統のアカウントシステムをそれぞれ運用しています。ユーザの利便性向上のため、これらは[グループ概念](group.html)を導入した新しいアカウントシステムへ移行する予定であり、最終的には一つのアカウントで D-way/JGA/AGD の全サービスが利用できるようになる予定です。新しいシステムでは[グループ](group.html)を介した、研究責任者と登録実務担当者によるデータの共同管理、代理登録の適切な管理、及び、組織異動時のデータの後任者への引継ぎができるようになります。

{::nomarkdown}
{% include image.html url="books/account_integration.png" caption="新アカウントシステムへの移行" class="w450" %}
{:/}

## D-way へのアカウント統合 {#migration}

第一段階として2020年9月29日に JGA を DDBJ アカウントシステムに移行します。あわせて <a href="https://humandbs.biosciencedbc.jp/">NBDC</a> の提供・利用申請システムも D-way アカウントから利用できるようになります。これにより「NBDC への提供申請-JGA 登録」「NBDC への利用申請-JGA Dataset ダウンロード」が同じ D-way アカウントからできるようになります。

以下では JGA アカウントの移行方法について説明します。

### JGA アカウントのみ保有している場合  {#jga-only}

JGA アカウント (Account: A) のみ保有している場合。A をそのまま D-way に移行します。その結果、A で BioProject/BioSample/DRA/GEA と JGA/NBDC 申請システムが利用できるようになります。D-way ですでに A というアカウント ID が使われていた場合、異なる ID で移行されます。

<span class="red">DDBJ アカウント発行の連絡を受けた後に D-way を利用する場合、アカウントの重複を避けるため新しく D-way アカウントを作成しないでください。</span>

### DDBJ アカウントのみ保有している場合  {#dway-only}

DDBJ アカウント (Account: B) のみ保有している場合。B で従来の BioProject/BioSample/DRA/GEA に加えて JGA/NBDC 申請システムを利用できるようになります。

### JGA と DDBJ アカウント両方を保有している場合  {#jga-and-dway}

JGA (Account: C) と DDBJ アカウント (Account: D) の両方を保有している場合。
<span class="red">D-way に名寄せされます。</span> 

D で従来の BioProject/BioSample/DRA/GEA に加えて JGA/NBDC 申請システムを利用できるようになります。C に紐づいていた JGA データは D に引き継がれ、C アカウントは利用できなくなります。

## AGD アカウントについて  {#agd-account}

AGD アカウントも JGA と同様に DDBJ アカウントシステムに移行されます。移行は2020年内を予定しています。