---
layout: tabbed_indexed_content
title: Parser ユーザーマニュアル
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: home
lang: ja
related_pages:
  - title: 登録ファイル形式
    url: /ddbj/file-format.html
  - title: MSS データファイル用チェックツール
    url: /ddbj/mss-tool.html
  - title: UME ユーザーマニュアル
    url: /ddbj/ume.html
  - title: transChecker ユーザーマニュアル
    url: /ddbj/transchecker.html
  - title: validator エラーメッセージ
    url: /ddbj/validator.html
  - title: MSS 利用申し込み
    url: /ddbj/mss-form.html
---

Parser は、Mass Submission System (MSS) を利用して DDBJ に登録する際に必要な
[配列ファイル](/ddbj/file-format.html#sequence) と [アノテーションファイル](/ddbj/file-format.html#annotation) のフォーマットチェックを行うツールです。

## インストール  {#install}

#### 1. Parser.tar.gz を取得

<a href="/ddbj/mss-tool.html">MSS データファイル用チェックツール</a>からダウンロードしてください。    
    

#### 2. tar.gz ファイルを gunzip コマンドで解凍

<pre>$ gunzip Parser.tar.gz</pre>
    

#### 3. tar ファイルを tar コマンドで展開

<pre>$ tar xvf Parser.tar</pre>
    


#### 4. 生成されたディレクトリを確認
下記の要領でディレクトリの中身を見ると、以下のようになっています。    

<pre>$ cd jParser
$ ls -FC
jParser.sh*  jar/    license.txt resource/</pre>
<br>

<table><tbody>
<tr>
	<th>jParser.sh</th>
	<td>実行シェルスクリプト</td>
</tr>
<tr>
	<th>jar/</th>
	<td>java のクラスライブラリ格納ディレクトリ(改変不可)</td>
</tr>
<tr>
	<th>license.txt</th>
	<td>使用許諾(改変不可)</td>
</tr>
<tr>
	<th>resources/</th>
	<td>検査条件などのリソースファイル格納ディレクトリ(改変不可)</td>
</tr>
</tbody></table>
     
#### 5. ファイルの編集
jParser.sh を実行する前にファイルの中身を、インストールしたコンピュータの環境にあわせるために変更する必要があります。     
viなどのエディタで編集して下さい。    
    

<pre>#!/bin/sh

# Parser installed directory
PARSER_DIR=./

# Set maximum Java heap size
HEAP_SIZE=128m

# Parser's resource files(qual.list, ... *.list) path
# Don't change.
RESOURCE_FILE_PATH=$PARSER_DIR/resource

# Parser's main class
# Don't change.
PARSER=tsunami.util.excel.ExcelParser

# Execution Command
# Don't change.
java -Xmx$HEAP_SIZE -classpath $PARSER_DIR/jar/jParser.jar 
-DPARSER_RESOURCE_PATH=$RESOURCE_FILE_PATH $PARSER -Cclean $@

RETVAL=$?

exit $RETVAL
#EOF</pre>

<dl>
<dt>[PARSER_DIR 変数]</dt>
	<dd>jParser ディレクトリのある場所をフルパスで入力して下さい。</dd>
	<dd>例) PARSER_DIR=/home/mass/jParser</dd>
<dt>[HEAP_SIZE 変数]</dt>
	<dd>jParser が使用できる最大メモリ量を指定してください。</dd>
	<dd>例) HEAP_SIZE=128m</dd>
</dl>
    
#### 6. PATH を指定する
PATH に jParser.sh が設置してあるディレクトリを指定して下さい。

## 実行  {#exec}

任意のディレクトリで下記の通りに、コマンドを実行して下さい。
<pre>$ jParser.sh[space]-x[アノテーションファイル名][space]-s[塩基配列ファイル名]</pre>

例
<pre>$ jParser.sh -xsample.ann -ssample.fasta</pre>

ファイル名は絶対パス・相対パスのどちらでも指定可能です。    
    
**macOS: ファイル名とフォルダ名について**     
[配列ファイル](/ddbj/file-format.html#sequence)、[アノテーションファイル](/ddbj/file-format.html#annotation)のファイル名またはフォルダ名にマルチバイト文字が含まれていますと一部のバージョンの macOS では正常に動作しない場合がありますので、ファイル名とフォルダ名にマルチバイト文字を混在させないようにご注意ください。

\-x[<span class="font-br font-normal">アノテーションファイル名</span>\]    
: このオプションは必須です。指定されていない場合、本ツールは終了します。    アノテーションファイルは、登録データの登録者、REFERENCE、Feature/Qualifierの情報等を記述したタブ区切りテキストファイルです。 書式の詳細に関しては、[登録ファイル形式：アノテーションファイル](/ddbj/file-format.html#annotation) をご参照下さい。

\-s[<span class="font-br font-normal">塩基配列ファイル名</span>\]  
: このオプションは必須です。指定されていない場合、本ツールは終了します。    塩基配列ファイルは、全登録データの配列をFASTA形式で記述したテキストファイルです。 書式の詳細に関しては、[登録ファイル形式：配列ファイル](/ddbj/file-format.html#sequence)をご参照下さい。

<div class="attention" markdown="1">
Parser は、エラーが発生している場合は、エラーメッセージを出力します。    
エラーメッセージの意味は [Parser エラーメッセージ](/ddbj/validator.html#Parser) をご覧ください。
</div>
