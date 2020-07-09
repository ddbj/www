---
layout: indexed_content
title: 登録手順
pathname: substep
category: aboutjga
---

## JGA 概要

[日本 DNA データバンク (DDBJ) センター](/index.html)は利用制限が必要なヒト由来のデータのためのデータベースとして　Japanese Genotype-phenotype Archive (JGA) を [National Bioscience Database Center (NBDC)](http://humandbs.biosciencedbc.jp/) と共同で運営しています。

{::options parse_block_html="true" /}
<div class="attention red">
  - JGA はオープンなデータベースである INSDC とは別のデータベースです。
  - JGA の登録システムは DDBJ センターのオープンデータ登録システムである [D-way](https://ddbj.nig.ac.jp/D-way/) とは別になります。
  - JGA にデータを登録するためには [NBDC へのデータ提供申請とヒトデータ審査委員会での承認](http://humandbs.biosciencedbc.jp/data-submission)が必要です。
  - JGA 登録アカウントのアカウント名とパスワードは [NBDC](http://humandbs.biosciencedbc.jp/) から通知されます。
</div>

このページでは JGA へのデータ登録手順を説明しています。  
JGA 全体の説明については[こちらの資料](https://drive.google.com/file/d/12IaBZHub6s9fNK55S0r6x0U7MD2oQsk_)をご参照ください。

## エクセルでのメタデータ作成

### エクセルファイルへの記入

メタデータ記入用エクセルファイルを下記よりダウンロードし、内容を英語で記入してください。メタデータの説明は[こちらのページ](/jga/submission.html)をご参考ください。

[![JGA メタデータ記入用エクセル]({{ site.baseurl }}/assets/images/parts/download.png "JGA メタデータ記入用エクセル"){:.w40}.]({{ site.baseurl }}/assets/files/submission/JGA_metadata.xlsx)

last updated: 2019-06-07

<div class="attention red">
必ずエクセルのファイル名は \_metadata.xlsx で終わるようにしてください。\_metadata より前は Submission ID や NBDC hum 番号など識別のために自由に名前を付けることができます。
</div>

<div class="attention red">
JGA にアップロードするファイル名には空白を含めないでください。
</div>

<div class="attention red">
Data/Analysis
オブジェクトに複数のファイルが含まれる場合は，可能な限りファイルを結合し１つにまとめてください。ファイルのアップロード・ダウンロードで不具合が発生する可能性があります。
</div>

### エクセルの記入例

[メタデータエクセルの記入例](https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318)

### JGA submission tool

JGA submission tool (最終更新日: 2018-04-16，v3.5.0) をダウンロードし、JGATool.bat からツールを起動します。

{::options parse_block_html="true" /}
<div class="attention red">
Java 8 で実行してください。Java 7 では動作しません。[プロキシ環境での使用方法について](#%E3%83%97%E3%83%AD%E3%82%AD%E3%82%B7%E7%92%B0%E5%A2%83%E3%81%A7%E3%81%AE%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)
</div>

#### Windows

[Windows 用 JGA submission tool]({{ site.baseurl }}/assets/files/submission/3-5-0/JGA_tool.zip)

展開したフォルダに含まれる bat ファイルをダブルクリックして起動。

<span class="red">動作環境: Java Runtime Environment Version 8 Update 45 以上</span>

#### Unix

[Unix 用 JGA submission tool]({{ site.baseurl }}/assets/files/submission/3-5-0/JGA_tool_unix.zip)

展開したフォルダに含まれる sh ファイルをシェルで実行して起動。

<span class="red">動作環境: Java SE Development Kit 8u45 以上。OpenJDK では動作しません。</span>

### エクセルをアップロード

JGA tool を起動し，[NBDC](http://humandbs.biosciencedbc.jp/) 担当者から通知されるアカウントとパスワードでログインします。

{::nomarkdown}
{% include image.html url="submission/jgasub1.jpg" caption="JGA tool へのログイン" class="w200" %}
{:/}

左ウィンドウがお手許のコンピュータ，右ウィンドウが JGA のセキュアなファイルサーバになります。

右ウィンドウ上部の Submission ID で対象となる JGA 登録の ID (例 example-0003) をプルダウンメニューから選択します。 左ウィンドウでメタデータを記入したエクセルファイル (例 JGA\_example-0003\_metadata.xlsx) を選択し，Encrypt & Upload をクリックします。

{::nomarkdown}
{% include image.html url="submission/jgasub2.jpg" caption="対象 submission とエクセルファイルの選択" class="w500" %}
{:/}

エクセルファイルがサーバにセキュアにアップロードされます。下部ウィンドウにエラーメッセージが表示されますが無視してください。

エクセルファイルをアップロードした後，[メールで JGA 担当者にご連絡ください](/contact.html)。

{::nomarkdown}
{% include image.html url="submission/jgasub3.jpg" caption="アップロードされたエクセルファイル" class="w500" %}
{:/}

<div class="attention red">
メタデータが記入されたエクセルファイルはメールで送付しないでください。
</div>

### エクセル/XML をダウンロード

JGA ファイルサーバ上にある「ファイル名が \_metadata.xlsx で終わるエクセル」と「XML ファイル」は tool でダウンロードすることができます。

ダウンロードしたいエクセルファイル (例 JGA\_example-0003\_r1\_metadata.xlsx) を右クリックし，表示されるメニューの Download を選択します。対象のファイルが左ウィンドウで表示されているローカルマシンにダウンロードされます。

{::nomarkdown}
{% include image.html url="submission/jgadown1.jpg" caption="エクセルのダウンロード" class="w500" %}
{:/}

ダウンロードしたい XML ファイル (例 example-0003\_Data.xml) を右クリックし，表示されるメニューの Download を選択します。対象のファイルが左ウィンドウで表示されているローカルマシンにダウンロードされます。必要な XML ファイルを１つずつダウンロードします。

{::nomarkdown}
{% include image.html url="submission/jgadown2.jpg" caption="XML のダウンロード" class="w500" %}
{:/}

## 登録ファイルのアップロード

### データファイル形式

JGA 登録システムではファイルの拡張子でアーカイブ・圧縮形式を判定し、ファイルを処理しています。

  - 拡張子 zip、tar、tar.gz、tgz、tar.bz2、tbz2、gz、bz2 のファイルは標準的な方法でアーカイブ・圧縮されているファイルと判定され、展開・解凍処理されます。拡張子とアーカイブ・圧縮形式が一致していないファイルや、これら以外の形式でアーカイブ・圧縮されたファイルはエラーになります。
  - bam ファイルは圧縮しないでください。
  - gz や bzip 圧縮したファイルをさらに tar でアーカイブせず、tar.gz 等でアーカイブしたファイルを圧縮してください。

### 登録するデータ

Data オブジェクトに fastq や bam ファイルなどの個人レベルの次世代シークエンスデータを登録します。Analysis にアレイデータ，変異解析，質問票などの次世代シークエンス以外のデータや各種ドキュメントを登録します。

<div class="attention red">
データの再利用性，再現性のためには論文での主張の基になっている解析データが登録されることが重要です。できるだけ VCF などの解析データを Analysis に登録してください。
</div>

### メタデータ XML ファイル

ダウンロードした XML ファイルとデータファイルを JGA tool で選択し，対象 submission にまとめてアップロードします。

{::nomarkdown}
{% include image.html url="submission/jgasub4.jpg" caption="メタデータ XML ファイルとデータファイルのアップロード" class="w500" %}
{:/}

### 登録ファイルの検証処理

メタデータとデータファイルに以下の検証処理が実施され，データファイルは暗号化されて JGA サーバにアップロードされます。

  - メタデータ XML の [JGA XML schema](https://github.com/ddbj/pub/tree/master/docs/jga) に対する検証
  - [メタデータオブジェクト](/jga/submission.html#metadata)相互の関係
  - Data と Analysis XML に記載されているデータファイルの存在チェック
  - データファイルアップロード前後での [md5 値](/dra/submission.html#supplement-md5)の一致チェック

全ての検証処理を通過すると，下部ウィンドウに \[INFO\] upload succeeded. を表示されます。登録が査定され，問題がなければ [JGA アクセッション番号](/jga/submission.html#accession)が発行されます。

エラーメッセージが表示された場合は[メールで JGA 担当者にご連絡ください](/contact.html)。

{::nomarkdown}
{% include image.html url="submission/jgasub5.jpg" caption="検証処理を通過したメタデータ XML とデータファイル" class="w500" %}
{:/}

### 複数ファイルの選択方法

左ウィンドウに表示されているファイルを複数選択することができます。

#### 範囲選択

始点となるファイルのファイル名部分 (チェックボックスではありません) を選択します。続いて終点となるファイル名を Shift キーを押しながら選択すると，ファイルが範囲選択されます。選択した状態で右クリックメニューから "check (selected item)" を選び，範囲選択したファイルをチェックします。

{::nomarkdown}
{% include image.html url="submission/jga_range_select.jpg" caption="範囲選択したファイルのチェック" class="w500" %}
{:/}

#### 複数選択

Control キーを押しながらファイルを選択していくと，ファイルが複数選択されます。選択した状態で右クリックメニューから "check (selected item)" を選び，選択したファイルをチェックします。

{::nomarkdown}
{% include image.html url="submission/jga_multi_select.jpg" caption="複数選択したファイルのチェック" class="w500" %}
{:/}

#### サブディレクトリ選択

ファイルが含まれているサブディレクトリをチェックすると，配下の全てのファイルがチェックされます。

{::nomarkdown}
{% include image.html url="submission/jga_dir_select.jpg" caption="サブディレクトリごとチェック" class="w500" %}
{:/}

### プロキシ環境での使用方法

プロキシ環境でツールを使用するためにはプロキシサーバの設定が必要になります。

ツールが格納されているフォルダ中の "proxy.properties" を開きプロキシサーバ名 (server=) とポート番号 (port=) を設定します。

```
# Enter the server name and port number of the proxy server
  to connect the JGA server via the proxy.
# For example:
# server=proxy.example.ac.jp
# port=8080
server=
port=
```

プロキシサーバが認証を要求している場合，ツールにログイン後に表示されるウィンドウに認証情報を入力します。

2016-11-17 にリリースした v3.2.0 で BASIC 認証に対応しましたが Digest 認証には未対応です。

## ハードディスクでのデータファイル送付

JGA ツールでの転送に多大な時間を要する，ファイル選択画面がフリーズするなど，大容量・多件数のファイル転送が困難な場合には，ハードディスクでデータを受け付けています。

<div class="attention red">
JGA 担当者に事前連絡してからディスクを送付するようにしてください。  
ディスクフォーマットは NTFS、ext3 もしくは ext4 にしてください。  
郵送前にディスクをアンチウイルスソフトでチェックしてください。送料は全額登録者負担になります。
</div>

### データの暗号化

JGA データ暗号化ツールを使ってデータファイルを暗号化し，ディスクにコピーし郵送します。XML メタデータファイルは JGA Submission Tool でアップロードし，ディスクに含めないでください。

[![JGA データ暗号化ツール]({{ site.baseurl }}/assets/images/parts/download.png "JGA データ暗号化ツール"){:.w40}.]({{ site.baseurl }}/assets/files/submission/jga-data-encrypt.tar.gz)

last updated: 2015-12-09

<div class="attention red">
個別のデータファイルごとに暗号化してください。ファイルをディレクトリや tar でまとめて暗号化しないでください。
</div>

ツールの動作環境

  - 暗号化対象データの総サイズ分の空きディスク領域が必要です。
  - CentOS 6.4 で動作確認を行っています。
  - Java Runtime Environment Version 8 Update 45 以上の Java 実行環境が必要です。

取得した "jga-data-encrypt.tar.gz" ファイルを tar コマンドで解凍します。
下記のような構成のディレクトリが生成されます。内部のディレクトリ構成は変更しないでください。

jga-data-encrypt.sh (実行シェルスクリプト) jar/ -\> 実行ファイル格納ディレクトリ (改変不可)

ツールを配置したディレクトリに移動し，下記の要領でコマンドを実行します。  
sh jga-data-encrypt.sh\[space\]-t\[対象ファイルパス\]\[space\]-o\[出力先ディレクトリパス\]  
例)

```
$ sh jga-data-encrypt.sh -t target.fastq -o output
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
ファイル名は \[暗号化前のファイル名\].encrypt になります。 (例: 暗号化前のファイル名が file1.fastq の場合 file1.fastq.encrypt)

2. 鍵ファイル (.encrypt.dat)  
暗号化に使用された鍵ファイルです。暗号化対象ファイル1つにつき1鍵ファイルが生成され，公開鍵で暗号化された状態で出力されます。 ファイル名は \[暗号化された対象ファイル名\].dat となります。 (例: 暗号化前のファイル名が file1.fastq の場合、file1.fastq.encrypt.dat)

暗号化前後の MD5 ファイル (.md5)  
暗号化対象ファイルの暗号化前後の MD5 値を記録したファイルです。暗号化対象1ファイルに対して1つの MD5 ファイルが生成されます。
ファイル名は \[暗号化前のファイル名\].md5 となります。 (例: 暗号化前のファイル名が file1.fastq の場合、file1.fastq.md5 となります)

出力メッセージ

本ツールのメッセージはログファイル (ツールを設置したディレクトリ内の \[実行サーバ host 名\].jga-data-encrypt.log ファイル) および標準出力に出力されます。標準出力に表示される標準的なメッセージは以下の通りです。

```
$ sh jgacmd.sh -t /home/hoge/file.txt -o /tmp/output
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

### データの送付

JGA にデータを登録するためには「暗号化された対象ファイル」「鍵ファイル」「暗号化前後のMD5ファイル」の３点セットが必要です。各対象データファイルについて生成される３ファイルを全てディスクにコピーします。

メタデータ XML ファイルはディスクにはコピーせず，JGA Submission Tool でアップロードします。

<span class="red">送料は全額登録者負担になります。</span>

USB 接続のハードディスクにデータをコピーし，<span class="red">宛先が記入された返送用の着払い伝票を同封して</span>下記宛にお送りください。<span class="red">ハードディスクにラベルを貼って区別しやすくすることを推奨いたします。</span>

{::options parse_block_html="true" /}
<address>

〒411-8540  
静岡県三島市谷田1111 国立遺伝学研究所 生命情報研究センター W201 JGA 担当者  
電話:055-981-6853

</address>