---
layout: indexed_content
title: 利用手順
pathname: download
category: _jga
---

<div class="section chapter">

## JGA データの利用申請

利用したい JGA データの Study (例 JGAS00000000025) と Dataset (例 JGAD00000000025)
アクセッション番号を添え， [National Bioscience Database Center
(NBDC)](https://humandbs.biosciencedbc.jp/data-use) に利用を申請します。

[NBDCヒトデータ取扱いセキュリティガイドライン（利用者向け）](http://humandbs.biosciencedbc.jp/guidelines/security-guidelines-for-users)
を読み，内容を遵守して JGA データを取り扱ってください。

利用申請が承認されると，NBDC からユーザ ID とパスワードが郵送されます。利用アカウントの有効期間は二週間です。

このページでは JGA データの利用手順を説明しています。

</div>

<div class="section chapter">

## データの GUI tool によるダウンロード

<div class="section section">

### JGA GUI download tool

JGA GUI download tool (最終更新日: 2018-04-16，v3.5.0) をダウンロード、JGATool.bat
からツールを起動します。

<div class="attention no_top">

Java 8 で実行してください。Java 7 では動作しません。
[プロキシ環境での使用方法について](#%E3%83%97%E3%83%AD%E3%82%AD%E3%82%B7%E7%92%B0%E5%A2%83%E3%81%A7%E3%81%AE%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)

</div>

#### Windows

[Windows 用 JGA submission tool](/files/submission/3-5-0/JGA_tool.zip)

展開したフォルダに含まれる bat ファイルをダブルクリックして起動。

<span class="attention_text">動作環境: Java Runtime Environment Version 8
Update 45 以上</span>

#### Unix

[Unix 用 JGA submission tool](/files/submission/3-5-0/JGA_tool_unix.zip)

展開したフォルダに含まれる sh ファイルをシェルで実行して起動。

<span class="attention_text">動作環境: Java SE Development Kit 8u45
以上。OpenJDK では動作しません。</span>

</div>

<div class="section section">

### ログイン

JGA tool を起動し，[NBDC](http://humandbs.biosciencedbc.jp/) 担当者から通知されるユーザ ID
とパスワードでログインします。

JGA download tool は可能な限り良好なネットワーク環境にあるマシンで使ってください。通信速度が遅い無線 LAN で接続された
PC などでの使用は避けてください。

![JGA tool へのログイン](/images/submission/jgasub1.jpg "JGA tool へのログイン")

左ウィンドウがお手許のコンピュータ，右ウィンドウが JGA のセキュアなファイル提供サーバになります。

右ウィンドウには利用権限が付与されているDataset の一覧が表示されます。 ダウンロードするDataset
にチェックを入れます。チェックすると下部に総ファイル数と合計サイズが表示されます。

![対象 Dataset の選択](/images/books/jgadown01.jpg "対象 Dataset の選択")

\[Download\] をクリックすると，ダウンロードと復号化が開始されます。 "Parallel Download count"
で並列ダウンロード数を1～5の間で調整することができます。

処理が完了すると，お手許のコンピュータに Dataset がダウンロードされます。 Dataset 番号のフォルダ中にメタデータ XML
とデータファイルが存在しています。

![メタデータとデータファイル](/images/books/jgadown03.jpg "メタデータとデータファイル")

Dataset
ディレクトリの左にある矢印をクリックし，含まれているデータ番号ディレクトリを展開することができます。データ番号ディレクトリやファイルを選択し，個別にダウンロードすることもできます。

![ファイル毎のダウンロード](/images/books/jgadown02.jpg "ファイル毎のダウンロード")

</div>

<div class="section section">

### プロキシ環境での使用方法

プロキシ環境でツールを使用するためにはプロキシサーバに関する設定作業が必要になります。

ツールが格納されているフォルダ中の "proxy.properties" をテキストエディター等で開きプロキシサーバ名 (server=)
とポート番号 (port=) を設定します。

``` code
# Enter the server name and port number of the proxy server to connect the JGA server via the proxy.
# For example:
# server=proxy.example.ac.jp
# port=8080
server=
port=
```

ツールにログイン後，プロキシサーバが認証を要求している場合，認証情報を入力するウィンドウが表示されるので適宜情報を入力します。2016-11-17
にリリースした v3.2.0 では BASIC 認証には対応していますが Digest 認証には未対応です。

</div>

<div class="section section">

### メタデータのウェブサイトでの閲覧

メタデータはウェブサイトで閲覧することもできます。

[JGA の公開されている Study
一覧ページ](https://ddbj.nig.ac.jp/jga/viewer/view/studies)へ移動します。Datasets
からDataset 一覧へ移動します。

![JGA で公開されている Study 一覧](/images/books/jgadown04.jpg
"JGA で公開されている Study 一覧")

利用権限が付与されているDataset 番号を選択します。

![メタデータを閲覧する Dataset の選択](/images/books/jgadown05.jpg
"メタデータを閲覧する Dataset の選択")

JGA tool と同様，NBDC から通知される利用アカウントのユーザ ID とパスワードでログインします。

![利用アカウントでログイン](/images/books/jgadown06.jpg "利用アカウントでログイン")

ウェブサイト上でメタデータを閲覧することができます。

![ウェブサイト上でメタデータを閲覧](/images/books/jgadown07.jpg "ウェブサイト上でメタデータを閲覧")

メタデータ閲覧サイトからのログアウト

同一アカウントからメタデータ閲覧サイトへの同時ログイン数は１に制限されています。閲覧後はブラウザーを閉じる前に，必ず Logout
からログアウトしてください。  
"Maximum sessions of 1 for this principal exceeded" のエラーが表示されたときは，30
分程度間隔を空けてから再度ログインしてください。

閲覧終了後は，必ず左上の Logout からログアウトしてください。

![メタデータ閲覧サイトからのログアウト](/images/books/jgadown08.jpg "メタデータ閲覧サイトからのログアウト")

下記エラーは同時接続数が１を超えている場合に表示されます。30 分以上の間隔を空けて再度ログインしてください。

![同時ログイン数が１を超えている場合のエラー](/images/books/jgadown09.jpg
"同時ログイン数が１を超えている場合のエラー")

</div>

<div class="section section">

### データファイルのディスク郵送

データファイルのディスク郵送を希望する場合は必ず事前に [JGA にご連絡ください](/contact.html)。

利用承認された，郵送を希望するDataset を格納するために十分な容量の USB 接続ハードディスク (ファイルシステムは NTFS、ext3
もしくは ext4 にしてください) をご用意ください。ファイルシステムは事前に必ずウイルスチェックを実施し，空の状態でお送りください。

<span class="attention_text">宛先が記入された返送用の着払い伝票を同封して</span>下記宛にお送りください。<span class="attention_text">ハードディスクにラベルを貼って区別しやすくすることを推奨いたします。</span>

〒411-8540  
静岡県三島市谷田1111 国立遺伝学研究所 生命情報研究センター W201 JGA 担当 児玉 悠一  
電話:055-981-6853

</div>

</div>

<div class="section chapter">

## データの CUI tool によるダウンロード

<div class="section section">

### JGA CUI download tool

JGA CUI download tool (最終更新日: 2018-04-16，v3.5.0) をダウンロードします。現在は Unix
版のみの提供となります。

#### Unix

[Unix 用 JGA tool](/files/submission/3-5-0/JGA_tool_unix.zip)

</div>

<div class="section section">

### ログイン

ツールを配置したディレクトリで JGA tool を実行します。

``` code
$ ./JgaDownload.sh  
```

[NBDC](http://humandbs.biosciencedbc.jp/) 担当者から通知されるユーザ ID
とパスワードでログインします。

``` code
JGA login user name : 
JGA Login Password : 
```

ユーザとパスワードを設定し，毎回入力しないようにするためには以下を実行します。

``` code
$ . ./JgaSetUser.sh
または
$ source ./JgaSetUser.sh
```

ユーザとパスワードを設定します。

``` code
JGA login user name : 
JGA Login Password : 
```

設定後にツールを実行します。

JGA download tool は可能な限り良好なネットワーク環境にあるマシンで使ってください。通信速度が遅い無線 LAN で接続された
PC などでの使用は避けてください。

</div>

<div class="section section">

### プロキシ環境での実行

プロキシ環境では proxy.properties ファイルを編集しプロキシサーバとポートを設定します。 プロキシが Basic
認証を要求する場合は以下を実行します。

``` code
$ . ./JgaSetProxyUser.sh
または
$ source ./JgaSetProxyUser.sh
```

ユーザとパスワードを入力します。

``` code
Proxy server user name : 
Proxy server password : 
```

設定後にツールを実行します。ダイジェスト認証には対応していません。

</div>

<div class="section section">

### コマンドラインオプションと引数

``` code
-h,--help
-v,--version
-l,--list {datasets|}
-f,--files [/metadata]
-d,--download 
-i,--download-list 
-q,--quiet
-o,--output-dir 
```

</div>

<div class="section section">

### 利用権限のある Dataset，オブジェクトとファイル一覧の取得

利用権限のある Dataset 一覧の取得。

``` code
$ sh JgaDownload.sh --list datasets
accession size
JGAD00000000002 14.35KB
JGAD00000000003 15.37KB
JGAD00000000004 31.77KB
```

Dataset 中の Data/Analysis オブジェクト一覧の取得。

``` code
$ sh JgaDownload.sh --list JGAD00000000004
accession size
JGAR00000000004 19
JGAR00000000005 19576
JGAZ00000000004 25
JGAZ00000000005 5066
```

Dataset，オブジェクト中のデータファイル，メタデータファイル一覧の取得。

``` code
$ ./JgaDownload.sh --files JGAD00000000004
file size
JGAD00000000004/JGAR00000000004/Data-Test1-1.txt 19
JGAD00000000004/JGAR00000000005/Data-Test2-1.txt 4635
JGAD00000000004/JGAR00000000005/Data-Test2-2.txt 14941
JGAD00000000004/JGAZ00000000004/Analysis-Test1-1.txt 25
JGAD00000000004/JGAZ00000000005/Analysis-Test2-1.txt 1943
JGAD00000000004/JGAZ00000000005/Analysis-Test2-2.txt 3123
$ ./JgaDownload.sh --files JGAD00000000004/metadata
file size
JGAD00000000004/metadata/JGAD00000000004.analysis.xml 2145
JGAD00000000004/metadata/JGAD00000000004.dac.xml 274
JGAD00000000004/metadata/JGAD00000000004.data.xml 1121
JGAD00000000004/metadata/JGAD00000000004.dataset.xml 917
JGAD00000000004/metadata/JGAD00000000004.experiment.xml 1375
JGAD00000000004/metadata/JGAD00000000004.policy.xml 536
JGAD00000000004/metadata/JGAD00000000004.sample.xml 447
JGAD00000000004/metadata/JGAD00000000004.study.xml 1035
$ ./JgaDownload.sh --files JGAR00000000005
file size
JGAD00000000004/JGAR00000000005/Data-Test2-1.txt 4635
JGAD00000000004/JGAR00000000005/Data-Test2-2.txt 14941
```

オブジェクトを指定してダウンロード。

``` code
$ ./JgaDownload.sh --download JGAR00000000005
```

``` code
$ ./JgaDownload.sh --download JGAD00000000004
```

リストファイルに記載された全てのファイルをダウンロード

``` code
$ cat samplelist.txt 
JGAD00000000004/metadata/dac
JGAD00000000004/metadata/dataset
JGAD00000000004/metadata/policy
JGAR00000000004/Data-Test1-1.txt
JGAZ00000000005/Analysis-Test2-1.txt
$ ./JgaDownload.sh --download-list samplelist.txt 
```

保存ディレクトリを指定してダウンロード

``` code
$ ./JgaDownload.sh --download JGAD00000000004 --output-dir /tmp
```

</div>

</div>
