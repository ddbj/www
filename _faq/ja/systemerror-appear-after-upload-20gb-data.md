---
layout: simple
title: 20GBのデータをHTTPでのアップロード終了後、SYSTEMERRORというメッセージが出てアップロードが完了しません
category: faq
db:
  - pipeline
date: 2016-06-14T11:58:29
lang: ja
---

## 20GBのデータをHTTPでのアップロード終了後、SYSTEMERRORというメッセージが出てアップロードが完了しません

HTTPによるアップロードではサイズの大きいファイルの転送に失敗する場合があり、<br>その場合にはFTPでのアップロードを推奨しております。<br>（はっきりとした値は不明ですが、webサーバーの設定で上限サイズが決まっているようです。<br>1GB程度まででしたらHTTPでの転送も可能だと思います。）<br>FTPでの転送の詳細な手順につきましては、下記のヘルプをご参照ください。<br><a href="https://www.evernote.com/shard/s205/sh/dadca23e-38bc-4b13-a8b1-1c592f5b31e2/439158c40652ddb7d47f2b60ce022291">DDBJ Pipeline FTPによるファイル転送方法</a><br>FTPでのファイル転送を行う場合、<br>１　FTPソフトを利用して所定のサーバーに接続し、ファイルをアップロード<br>２　DDBJ Pipelineのweb画面上でアップロードされたファイルの登録を行う<br>の２段階の操作が必要なため、やや煩雑な手順となっています。