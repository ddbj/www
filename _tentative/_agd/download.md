---
layout: indexed_content
title: 利用手順
pathname: download
category: _agd
---

<div class="section chapter">

## AGD データの利用申請

利用したい AGD データの Study (例 AGDS\_00000000005) と Dataset (例
AGDD\_00000000005) ID を添え， [National Bioscience Database Center
(NBDC)](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines) に利用を申請します。

[NBDC
ヒトデータグループ共有データ取扱いセキュリティガイドライン](https://gr-sharingdbs.biosciencedbc.jp/group-security-guidelines-for-users)を読み，内容を遵守して
AGD データを取り扱ってください。

利用申請が承認されると，NBDC からユーザ ID とパスワードが郵送されます。利用アカウントの有効期間は三か月です。

このページでは AGD データの利用手順を説明しています。

</div>

<div class="section chapter">

## データのダウンロード

<div class="section section">

### AGD download tool

AGD download tool (最終更新日: 2018-11-21，v3.5.0) をダウンロードします。

<div class="attention no_top">

Java 8 で実行してください。Java 7 では動作しません。
[プロキシ環境での使用方法について](#%E3%83%97%E3%83%AD%E3%82%AD%E3%82%B7%E7%92%B0%E5%A2%83%E3%81%A7%E3%81%AE%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)

</div>

#### Windows

[Windows 用 AGD download tool](/files/submission/3-5-0/AGD_tool.zip)

展開したフォルダに含まれる bat ファイルをダブルクリックして起動。

<span class="attention_text">動作環境: Java Runtime Environment Version 8
Update 45 以上</span>

#### Unix

[Unix 用 AGD download tool](/files/submission/3-5-0/AGD_tool_unix.zip)

展開したフォルダに含まれる sh ファイルをシェルで実行して起動。

<span class="attention_text">動作環境: Java SE Development Kit 8u45
以上。OpenJDK では動作しません。</span>

</div>

<div class="section section">

### ログイン

AGD tool
を起動し，[NBDC](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines)
担当者から通知されるユーザ ID とパスワードでログインします。

AGD download tool は可能な限り良好なネットワーク環境にあるマシンで使ってください。通信速度が遅い無線 LAN で接続された
PC などでの使用は避けてください。

![AGD tool へのログイン](/images/submission/agdsub1.jpg "AGD tool へのログイン")

左ウィンドウがお手許のコンピュータ，右ウィンドウが AGD のセキュアなファイル提供サーバになります。

右ウィンドウには利用権限が付与されているデータセットの一覧が表示されます。
ダウンロードするデータセットにチェックを入れます。チェックすると下部に総ファイル数と合計サイズが表示されます。

![対象データセットの選択](/images/books/agddown01.jpg "対象データセットの選択")

\[Download\] をクリックすると，ダウンロードと復号化が開始されます。 "Parallel Download count"
で並列ダウンロード数を1～5の間で調整することができます。

処理が完了すると，お手許のコンピュータにデータセットがダウンロードされます。 データセット番号のフォルダ中にメタデータ XML
とデータファイルが存在しています。

![メタデータとデータファイル](/images/books/agddown03.jpg "メタデータとデータファイル")

データセットディレクトリの左にある矢印をクリックし，含まれているデータ番号ディレクトリを展開することができます。データ番号ディレクトリやファイルを選択し，個別にダウンロードすることもできます。

![ファイル毎のダウンロード](/images/books/agddown02.jpg "ファイル毎のダウンロード")

</div>

<div class="section section">

### プロキシ環境での使用方法

プロキシ環境でツールを使用するためにはプロキシサーバに関する設定作業が必要になります。

ツールが格納されているフォルダ中の "proxy.properties" をテキストエディター等で開きプロキシサーバ名 (server=)
とポート番号 (port=) を設定します。

``` code
# Enter the server name and port number of the proxy server to connect the AGD server via the proxy.
# For example:
# server=proxy.example.ac.jp
# port=8080
server=
port=
```

ツールにログイン後，プロキシサーバが認証を要求している場合，認証情報を入力するウィンドウが表示されるので適宜情報を入力します。2017-01-26
にリリースした v3.2.1 で BASIC 認証に対応しましたが Digest 認証には未対応です。

</div>

<div class="section section">

### メタデータのウェブサイトでの閲覧

メタデータはウェブサイトで閲覧することもできます。

[AGD の公開されている Study
一覧ページ](https://ddbj.nig.ac.jp/agd/viewer/view/studies)へ移動します。Datasets
からデータセット一覧へ移動します。

![AGD で公開されている Study 一覧](/images/books/agddown04.jpg
"AGD で公開されている Study 一覧")

利用権限が付与されているデータセット番号を選択します。

![メタデータを閲覧するデータセットの選択](/images/books/agddown05.jpg
"メタデータを閲覧するデータセットの選択")

AGD tool と同様，NBDC から通知される利用アカウントのユーザ ID とパスワードでログインします。

![利用アカウントでログイン](/images/books/agddown06.jpg "利用アカウントでログイン")

ウェブサイト上でメタデータを閲覧することができます。

![ウェブサイト上でメタデータを閲覧](/images/books/agddown07.jpg "ウェブサイト上でメタデータを閲覧")

メタデータ閲覧サイトからのログアウト

同一アカウントからメタデータ閲覧サイトへの同時ログイン数は１に制限されています。閲覧後はブラウザーを閉じる前に，必ず Logout
からログアウトしてください。  
"Maximum sessions of 1 for this principal exceeded" のエラーが表示されたときは，30
分程度間隔を空けてから再度ログインしてください。

閲覧終了後は，必ず左上の Logout からログアウトしてください。

![メタデータ閲覧サイトからのログアウト](/images/books/agddown08.jpg "メタデータ閲覧サイトからのログアウト")

下記エラーは同時接続数が１を超えている場合に表示されます。30 分以上の間隔を空けて再度ログインしてください。

![同時ログイン数が１を超えている場合のエラー](/images/books/jgadown09.jpg
"同時ログイン数が１を超えている場合のエラー")

</div>

<div class="section section">

### データファイルのディスク郵送

データファイルのディスク郵送を希望する場合は必ず事前に [AGD にご連絡ください](/contact.html)。

利用承認された，郵送を希望するデータセットを格納するために十分な容量の USB 接続ハードディスク (ファイルシステムは NTFS、ext3
もしくは ext4 にしてください) をご用意ください。ファイルシステムは事前に必ずウイルスチェックを実施し，空の状態でお送りください。

<span class="attention_text">宛先が記入された返送用の着払い伝票を同封して</span>下記宛にお送りください。<span class="attention_text">ハードディスクにラベルを貼って区別しやすくすることを推奨いたします。</span>

〒411-8540  
静岡県三島市谷田1111 国立遺伝学研究所 生命情報研究センター W201 AGD 担当 児玉 悠一  
電話:055-981-6853

</div>

</div>
