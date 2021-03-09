---
layout: top
title: MetaboBank
category: metabobank
lang: ja
---
## 生データダウンロードのしかた

どのプラットフォームでも wget と呼ばれるコマンドを用いると便利です。
UNIX (Linux) や Mac の人で wget が無い場合，それぞれ yum や Homebrew を使ってインストールしてください。
```
UNIX> yum install wget
Mac > brew install wget
```
Windowsの人は [https://eternallybored.org/misc/wget/](https://eternallybored.org/misc/wget/) から実行形式ファイルを取得してください。

wget の準備ができたら，必要なスタディ番号について以下のようにダウンロードしてください。ここではMTBKS100を例にしています。
```
> wget -r -nc --no-host-directories https://ddbj.nig.ac.jp/public/metabobank/project/MTBKS100/raw/
```
これで MTBKS100/raw フォルダの中身全部がローカルにコピーされます。
スタディ毎にフォルダ名は異なっています（上の例だと raw というフォルダ名）。ブラウザで確認してからダウンロードしてください。
