---
layout: simple
title: de novo assembly　結果ファイルについて、out_WGS.fastaの結果を確認したところ、最後に小文字の配列を含むものがいくつか存在しました。なぜ途中から小文字になっているのでしょうか。また、out_WGS.fastaとcontigs.faはどう違うのでしょうか。
category: faq
db:
  - pipeline
date: 2017-12-25T11:19:00
lang: ja
---

## de novo assembly　結果ファイルについて、out_WGS.fastaの結果を確認したところ、最後に小文字の配列を含むものがいくつか存在しました。なぜ途中から小文字になっているのでしょうか。また、out_WGS.fastaとcontigs.faはどう違うのでしょうか。

<p>out_WGS.fastaは、DDBJ登録用に処理したファイルになります。<br>デフォルトで300bpを入力していた場合は、300bp以下のcontig配列をフィルタリングで落としています。<br>この為、研究結果としてフィルタリング前の結果contigs.faをお使い下さい。<br>velvetg の右のResult列にあるDownload(数GB)からダウンロードすればcontigs.faが入っています。</p>