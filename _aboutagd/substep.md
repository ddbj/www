---
layout: indexed_content
title: 登録手順
pathname: substep
category: aboutagd
lang: ja
---

## AGD 概要 <a name="overview"></a>

[日本 DNA データバンク (DDBJ) センター](/index.html)はヒトデータをグループ共有 (制限共有) するためのデータベースである AMED Genome group sharing Database (AGD) を DDBJ グループクラウドでサービス提供しています。 データ提供・利用申請審査は [National Bioscience Database Center (NBDC)](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines) で実施しています。

{::options parse_block_html="true" /}
<div class="attention red">
  - AGD はオープンなデータベースである INSDC やアクセス制限データベースである JGA とは別のデータベースです。
  - AGD の登録システムは DDBJ センターのオープンデータ登録システムである [D-way](https://ddbj.nig.ac.jp/D-way/)，アクセス制限データベースである JGA とは異なります。
  - AGD にデータを登録するためには [NBDC へのデータ提供申請とヒトデータ審査委員会での承認](https://gr-sharingdbs.biosciencedbc.jp/agd-data-submission)が必要です。
  - AGD 登録アカウントのアカウント名とパスワードは [NBDC](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines) から通知されます。
</div>    

このページでは AGD へのデータ登録手順を説明しています。

## エクセルでのメタデータ作成 <a name="create-metadata-using-excel"></a>

### エクセルファイルへの記入 <a name="enter-metadata-into-excel"></a>

メタデータ記入用エクセルファイルを下記よりダウンロードし、内容を英語で記入してください。メタデータの説明は[こちらのページ](/agd/submission.html)をご参考ください。

[![AGD メタデータ記入用エクセル]({{ site.baseurl }}/assets/images/parts/download.png "AGD メタデータ記入用エクセル"){:.w40}.]({{ site.baseurl }}/assets/files/submission/AGD_metadata.xlsx)

last updated: 2017-08-18

{::options parse_block_html="true" /}
<div class="attention red">
必ずエクセルのファイル名は \_metadata.xlsx で終わるようにしてください。\_metadata より前は Submission ID など識別のために自由に名前を付けることができます。
</div>

<div class="attention red">
AGD にアップロードするファイル名には空白を含めないでください。
</div>

<div class="attention red">
Data/Analysis オブジェクトに複数のファイルが含まれる場合は，可能な限りファイルを結合し１つにまとめてください。ファイルのアップロード・ダウンロードで不具合が発生する可能性があります。
</div>

### エクセルの記入例 <a name="example-submission"></a>

[メタデータエクセルの記入例](https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318)

### AGD submission tool <a name="agd-submission-tool"></a>

AGD submission tool (最終更新日: 2018-11-21，v3.5.0) をダウンロードします。

{::options parse_block_html="true" /}
<div class="attention red">
Java 8 で実行してください。Java 7 では動作しません。[プロキシ環境での使用方法について](#%E3%83%97%E3%83%AD%E3%82%AD%E3%82%B7%E7%92%B0%E5%A2%83%E3%81%A7%E3%81%AE%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)
</div>

#### Windows

[Windows 用 AGD submission tool]({{ site.baseurl }}/assets/files/submission/3-5-0/AGD_tool.zip)

展開したフォルダに含まれる bat ファイルをダブルクリックして起動。

<span class="red">動作環境: Java Runtime Environment Version 8 Update 45 以上</span>

#### Unix

[Unix 用 AGD submission tool]({{ site.baseurl }}/assets/files/submission/3-5-0/AGD_tool_unix.zip)

展開したフォルダに含まれる sh ファイルをシェルで実行して起動。

<span class="red">動作環境: Java SE Development Kit 8u45 以上。OpenJDK では動作しません。</span>

### エクセルをアップロード <a name="upload-excel"></a>

AGD tool を起動し，[NBDC](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines) 担当者から通知されるアカウントとパスワードでログインします。

{::nomarkdown}
{% include image.html url="submission/agdsub1.jpg" caption="AGD tool へのログイン" class="w200" %}
{:/}

左ウィンドウがお手許のコンピュータ，右ウィンドウが AGD のセキュアなファイルサーバになります。

右ウィンドウ上部の Submission ID で対象となる AGD 登録の ID (例 upload-0003) をプルダウンメニューから選択します。 左ウィンドウでメタデータを記入したエクセルファイル (例 AGD\_upload-0003\_metadata.xlsx) を選択し，Encrypt & Upload をクリックします。

{::nomarkdown}
{% include image.html url="submission/agdsub2.jpg" caption="対象 submission とエクセルファイルの選択" class="w500" %}
{:/}

エクセルファイルがサーバにセキュアにアップロードされます。下部ウィンドウにエラーメッセージが表示されますが無視してください。

エクセルファイルをアップロードした後，[メールで AGD 担当者にご連絡ください](/contact.html)。

{::nomarkdown}
{% include image.html url="submission/agdsub3.jpg" caption="アップロードされたエクセルファイル" class="w500" %}
{:/}

<div class="attention red">
メタデータが記入されたエクセルファイルはメールで送付しないでください。
</div>

### エクセル/XML をダウンロード <a name="download-excel-xml-files"></a>

AGD ファイルサーバ上にある「ファイル名が \_metadata.xlsx で終わるエクセル」と「XML ファイル」は tool でダウンロードすることができます。

ダウンロードしたいエクセルファイル (例 AGD\_upload-0003\_r1\_metadata.xlsx) を右クリックし，表示されるメニューの Download を選択します。対象のファイルが左ウィンドウで表示されているローカルマシンにダウンロードされます。

{::nomarkdown}
{% include image.html url="submission/agddown1.jpg" caption="エクセルのダウンロード" class="w500" %}
{:/}

ダウンロードしたい XML ファイル (例 upload-0003\_Data.xml) を右クリックし，表示されるメニューの Download を選択します。対象のファイルが左ウィンドウで表示されているローカルマシンにダウンロードされます。必要な XML ファイルを１つずつダウンロードします。

{::nomarkdown}
{% include image.html url="submission/agddown2.jpg" caption="XML のダウンロード" class="w500" %}
{:/}

## 登録ファイルのアップロード <a name="upload-data-files"></a>

### 登録するデータ <a name="file-formats-submission"></a>

Data オブジェクトに fastq や bam ファイルなどの個人レベルの生データを登録します。Analysis に変異解析，表現型情報，質問票など解析したデータや各種ドキュメントを登録します。

<div class="attention red">
データの再利用性，再現性のためには論文での主張の基になっている解析データが登録されることが重要です。できるだけ VCF などの解析データを Analysis に登録してください。
</div>

### メタデータ XML ファイル <a name="metadata-xml-file"></a>

ダウンロードした XML ファイルとデータファイルを AGD tool で選択し，対象 submission にまとめてアップロードします。

{::nomarkdown}
{% include image.html url="submission/agdsub4.jpg" caption="メタデータ XML ファイルとデータファイルのアップロード" class="w500" %}
{:/}

### 登録ファイルの検証処理 <a name="validation-submitted-files"></a>

メタデータとデータファイルに以下の検証処理が実施され，データファイルは暗号化されて AGD サーバにアップロードされます。

  - メタデータ XML の [JGA XML schema](https://github.com/ddbj/pub/tree/master/docs/jga) に対する検証
  - [メタデータオブジェクト](/agd/submission.html#metadata)相互の関係
  - Data と Analysis XML に記載されているデータファイルの存在チェック
  - データファイルアップロード前後での [md5 値](/dra/submission.html#supplement-md5)の一致チェック

全ての検証処理を通過すると，下部ウィンドウに \[INFO\] upload succeeded. を表示されます。登録が査定され，問題がなければ [AGD 管理用 ID](/agd/submission.html#id)が発行されます。

エラーメッセージが表示された場合は[メールで AGD 担当者にご連絡ください](/contact.html)。

{::nomarkdown}
{% include image.html url="submission/agdsub4.jpg" caption="検証処理を通過したメタデータ XML とデータファイル" class="w500" %}
{:/}

### 複数ファイルの選択方法 <a name="select-files"></a>

左ウィンドウに表示されているファイルを複数選択することができます。

#### 範囲選択

始点となるファイルのファイル名部分 (チェックボックスではありません) を選択します。続いて終点となるファイル名を Shift キーを押しながら選択すると，ファイルが範囲選択されます。選択した状態で右クリックメニューから "check (selected item)" を選び，範囲選択したファイルをチェックします。

{::nomarkdown}
{% include image.html url="submission/agd_range_select.jpg" caption="範囲選択したファイルのチェック" class="w500" %}
{:/}

#### 複数選択

Control キーを押しながらファイルを選択していくと，ファイルが複数選択されます。選択した状態で右クリックメニューから "check (selected item)" を選び，選択したファイルをチェックします。

{::nomarkdown}
{% include image.html url="submission/agd_multi_select.jpg" caption="複数選択したファイルのチェック" class="w500" %}
{:/}

#### サブディレクトリ選択

ファイルが含まれているサブディレクトリをチェックすると，配下の全てのファイルがチェックされます。

{::nomarkdown}
{% include image.html url="submission/agd_dir_select.jpg" caption="サブディレクトリごとチェック" class="w500" %}
{:/}

### プロキシ環境での使用方法 <a name="use-proxy-environment"></a>

プロキシ環境でツールを使用するためにはプロキシサーバの設定が必要になります。

ツールが格納されているフォルダ中の "proxy.properties" を開きプロキシサーバ名 (server=) とポート番号 (port=) を設定します。

```
# Enter the server name and port number of the proxy server
  to connect the AGD server via the proxy.
# For example:
# server=proxy.example.ac.jp
# port=8080
server=
port=
```

プロキシサーバが認証を要求している場合，ツールにログイン後に表示されるウィンドウに認証情報を入力します。

2017-01-26 にリリースした v3.2.1 で BASIC 認証に対応しましたが Digest 認証には未対応です。

## ハードディスクでのデータファイル送付 <a name="send-data-files-in-hard-disk"></a>

AGD ツールでの転送に多大な時間を要する，ファイル選択画面がフリーズするなど，大容量・多件数のファイル転送が困難な場合には，ハードディスクでデータを受け付けています。

<div class="attention red">
ディスクフォーマットは NTFS、ext3 もしくは ext4 にしてください。  
郵送前にディスクをアンチウイルスソフトでチェックしてください。
</div>

### データの暗号化 <a name="encrypt-data-files"></a>

AGD データ暗号化ツールを使ってデータファイルを暗号化し，ディスクにコピーし郵送します。XML メタデータファイルは AGD Submission Tool でアップロードし，ディスクに含めないでください。

[![AGD データ暗号化ツール]({{ site.baseurl }}/assets/images/parts/download.png "AGD データ暗号化ツール"){:.w40}.]({{ site.baseurl }}/assets/files/submission/agd-data-encrypt.tar.gz)

last updated: 2017-01-26

<div class="attention red">
個別のデータファイルごとに暗号化してください。ファイルをディレクトリや tar でまとめて暗号化しないでください。
</div>

ツールの動作環境

  - 暗号化対象データの総サイズ分の空きディスク領域が必要です。
  - CentOS 6.4 で動作確認を行っています。
  - Java Runtime Environment Version 8 Update 45 以上の Java 実行環境が必要です。

取得した "agd-data-encrypt.tar.gz" ファイルを tar コマンドで解凍します。 下記のような構成のディレクトリが生成されます。内部のディレクトリ構成は変更しないでください。

agd-data-encrypt.sh (実行シェルスクリプト) jar/ -\> 実行ファイル格納ディレクトリ (改変不可)

ツールを配置したディレクトリに移動し，下記の要領でコマンドを実行します。  
sh agd-data-encrypt.sh\[space\]-t\[対象ファイルパス\]\[space\]-o\[出力先ディレクトリパス\]  
例)

```
$ sh agd-data-encrypt.sh -t target.fastq -o output
```

コマンドラインオプション

\-t --target  
暗号化対象ファイルのファイルパスを指定します。  
指定可能なファイルは１ファイルです。複数ファイル（\*ワイルドカードでの指定）の指定やディレクトリを指定することはできません。  
複数のファイルを一括で暗号化する場合はシェルスクリプトを組んでください。

\-o --output  
暗号化したファイル，暗号化鍵，MD5 ファイルを出力するディレクトリのパスを指定します。  
指定されたパスにディレクトリが存在しない場合，実行時にディレクトリが作成されます。  

出力されるファイル

出力ディレクトリには，暗号化対象1ファイルに対して以下の3種類のファイルが出力されます。

1. 暗号化された対象ファイル (.encrypt)  
ファイル名は \[暗号化前のファイル名\].encrypt になります。 (例: 暗号化前のファイル名が file1.fastq の場合
file1.fastq.encrypt)

2. 鍵ファイル (.encrypt.dat)  
暗号化に使用された鍵ファイルです。暗号化対象ファイル1つにつき1鍵ファイルが生成され，公開鍵で暗号化された状態で出力されます。 ファイル名は
\[暗号化された対象ファイル名\].dat となります。 (例: 暗号化前のファイル名が file1.fastq
の場合、file1.fastq.encrypt.dat)

暗号化前後の MD5 ファイル (.md5)  
暗号化対象ファイルの暗号化前後の MD5 値を記録したファイルです。暗号化対象1ファイルに対して1つの MD5 ファイルが生成されます。 ファイル名は \[暗号化前のファイル名\].md5 となります。 (例: 暗号化前のファイル名が file1.fastq の場合、file1.fastq.md5 となります)

出力メッセージ

本ツールのメッセージはログファイル (ツールを設置したディレクトリ内の \[実行サーバ host 名\].agd-data-encrypt.log ファイル) および標準出力に出力されます。標準出力に表示される標準的なメッセージは以下の通りです。

```
$ sh agdcmd.sh -t /home/hoge/file.txt -o /tmp/output
START encrypt file ←処理開始
start encryption : /home/hoge/file.txt ←対象ファイル名
encryption complete : /tmp/output /file.txt.encrypt ←出力ファイル名
FINISH encrypt file ←処理完了
```

エラーメッセージ

| メッセージ                                                  | 内容                              |
| ------------------------------------------------------ | ------------------------------- |
| \[code 11\] encryption error : \<target\>              | ファイルの暗号化処理でエラーが発生しました           |
| \[code 12\] make md5 file error : \<target\>           | ファイルのMD5取得、MD5書き込み処理でエラーが発生しました |
| \[code 13\] output dir is not a directory : \<target\> | \-o に指定されたパスがディレクトリではありません      |
| \[code 14\] target is not a file : \<target\>          | \-t に指定されたパスが通常ファイルではありません      |

### データの送付 <a name="sending-files"></a>

AGD にデータを登録するためには「暗号化された対象ファイル」「鍵ファイル」「暗号化前後のMD5ファイル」の３点セットが必要です。各対象データファイルについて生成される３ファイルを全てディスクにコピーします。

メタデータ XML ファイルはディスクにはコピーせず，AGD Submission Tool でアップロードします。

USB 接続のハードディスクにデータをコピーし，<span class="red">宛先が記入された返送用の着払い伝票を同封して</span>下記宛にお送りください。<span class="red">ハードディスクにラベルを貼って区別しやすくすることを推奨いたします。</span>

{::options parse_block_html="true" /}
<address>

〒411-8540  
静岡県三島市谷田1111 国立遺伝学研究所 生命情報研究センター W201 AGD 担当  
電話:055-981-6853

</address>