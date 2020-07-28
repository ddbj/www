---
layout: indexed_content
title: Parser ユーザーマニュアル
category: services
lang: ja
---

Parser は、Mass Submission System (MSS) を利用して DDBJ に登録する際に必要な
[配列ファイル](/ddbj/file-format.html#sequence) と [アノテーションファイル](/ddbj/file-format.html#annotation) のフォーマットチェックを行うツールです。

## インストール

<ol>
  <li>
    <a href="/ddbj/mss-tool.html">MSS データファイル用チェックツール</a>から Parser.tar.gz を取得
  </li>
  <li>
    tar.gz ファイルを gunzip コマンドで解凍<br>
<pre>
<code>
$ gunzip Parser.tar.gz
</code>
</pre>
  </li>
  <li>
    tar ファイルを tar コマンドで展開<br>
<pre>
<code>
$ tar xvf Parser.tar
</code>
</pre>
  </li>
  <li>
    ディレクトリが生成される<br>
    下記の要領でディレクトリの中身を見ると、以下のようになっています。<br>
    <pre>
      <code>
$ cd jParser
$ ls -FC
jParser.sh*  jar/    license.txt resource/
      </code>
    </pre><br>
    <table>
      <tbody>
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
      </tbody>
    </table>
  </li>
  <li>
    ファイルの編集<br>
    jParser.sh を実行する前にファイルの中身を、インストールしたコンピュータの環境にあわせるために変更する必要があります。viなどのエディタで編集して下さい。
    <pre>
      <code>
#!/bin/sh

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
#EOF
      </code>
    </pre>

    <dl>
      <dt>[PARSER_DIR 変数]</dt>
      <dd>jParser ディレクトリのある場所をフルパスで入力して下さい。</dd>
      <dd>例) PARSER_DIR=/home/mass/jParser</dd>
      <dt>[HEAP_SIZE 変数]</dt>
      <dd>jParser が使用できる最大メモリ量を指定してください。</dd>
      <dd>例) HEAP_SIZE=128m</dd>
    </dl>
  </li>
  <li>
  PATH を指定する<br>
  PAHT に jParser.sh が設置してあるディレクトリを指定して下さい。
  </li>
</ol>

## 実行

任意のディレクトリで下記の通りに、コマンドを実行して下さい。

``` 
$ jParser.sh[space]-x[アノテーションファイル名][space]-s[塩基配列ファイル名]
```

例

``` 
$ jParser.sh -xsample.ann -ssample.fasta
```

ファイル名は絶対パス・相対パスのどちらでも指定できます。  
**macOS: ファイル名とフォルダ名について**
[配列ファイル](/ddbj/file-format.html#sequence)、[アノテーションファイル](/ddbj/file-format.html#annotation)のファイル名またはフォルダ名にマルチバイト文字が含まれていますと一部のバージョンの macOS では正常に動作しない場合がありますので、ファイル名とフォルダ名にマルチバイト文字を混在させないようにご注意ください。

\-x[<span class="font-br font-normal">アノテーションファイル名</span>\]  
: このオプションは必須です。指定されていない場合、本ツールは終了します。 アノテーションファイルは、登録データの登録者、REFERENCE、Feature/Qualifierの情報等を記述したタブ区切りテキストファイルです。 書式の詳細に関しては、[登録ファイル形式：アノテーションファイル](/ddbj/file-format.html#annotation) をご参照下さい。

\-s[<span class="font-br font-normal">塩基配列ファイル名</span>\]  
: このオプションは必須です。指定されていない場合、本ツールは終了します。 塩基配列ファイルは、全登録データの配列をFASTA形式で記述したテキストファイルです。 書式の詳細に関しては、[登録ファイル形式：配列ファイル](/ddbj/file-format.html#sequence)をご参照下さい。

{::options parse_block_html="true" /}
<div class="attention">

Parser は、エラーが発生している場合は、エラーメッセージを出力します。  
エラーメッセージの意味は [Parser エラーメッセージ](/ddbj/validator.html#parser) をご覧ください。

</div>
