---
layout: simple
title: ペアエンドのファイル30個をde novo assemblyする手順を教えてください
category: faq
db:
  - pipeline
date: 2016-06-14T14:15:55
lang: ja
---

## ペアエンドのファイル30個をde novo assemblyする手順を教えてください

DDBJ Pipelineのde novo assemblyでは、複数のクエリファイルを一度に実行することが可能です。以下の手順をご参考にしていただければと思います。<br><br>1. 「Selecting Query Files」の画面で、アップロードした複数のファイルを選択。<br>2. 「Selecting Tools for Basic Analysis of DDBJ ANNOTATION PIPELINE」の画面で de novo assembly のツールを選択。<br>3. 「Generating Query Sets from Query Read Files 」の画面で使用したい複数のファイルを選択。右下の「Set as Pair-End」ボタンをクリック。これにより、複数のファイルが1つのクエリセットに結合されます。<br>4.   オプション設定、実行へ<br><br>得られた結果を見るために必要なソフトですが、結果ファイルの容量は非常に大きいと推測されます。そのため、通常のテキストエディタで開くことは困難になりますので、ターミナルでのコマンド操作（moreやlineなど）が必要になってくると思われます。