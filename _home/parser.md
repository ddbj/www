---
layout: indexed_content
title: Parser ユーザーマニュアル
pathname: parser
category: _home
---

<div class="section book">

Parser は、Mass Submission System (MSS) を利用して DDBJ に登録する際に必要な
[配列ファイル](/ddbj/file-format.html#sequence) と [アノテーションファイル](/ddbj/file-format.html#annotation) のフォーマットチェックを行うツールです。

<div class="section chapter">

## インストール

  - 1\. [MSS データファイル用チェックツール](/ddbj/mss-tool.html) から Parser.tar.gz
    を取得  
    2\. tar.gz ファイルを gunzip コマンドで解凍
    
    ``` code
    $ gunzip Parser.tar.gz
    ```

  - 3\. tar ファイルを tar コマンドで展開
    
    ``` code
    $ tar xvf Parser.tar
    ```

  - 4\. ディレクトリが生成される  
    下記の要領でディレクトリの中身を見ると、以下のようになっています。
    
    ``` code
    $ cd jParser
    $ ls -FC
    jParser.sh*  jar/    license.txt resource/
    ```
    
    <div class="news_post_container glossary">
    
    |             |                               |
    | ----------- | ----------------------------- |
    | jParser.sh  | 実行シェルスクリプト                    |
    | jar/        | java のクラスライブラリ格納ディレクトリ(改変不可)  |
    | license.txt | 使用許諾(改変不可)                    |
    | resources/  | 検査条件などのリソースファイル格納ディレクトリ(改変不可) |
    

    </div>

  - 5\. ファイルの編集  
    jParser.sh を実行する前にファイルの中身を、インストールしたコンピュータの環境にあわせるために変更する必要があります。vi
    などのエディタで編集して下さい。
    
    ``` code
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
    ```
    
      - [PARSER\_DIR 変数\]  
        jParser ディレクトリのある場所をフルパスで入力して下さい。
        例) PARSER\_DIR=/home/mass/jParser
      - [HEAP\_SIZE 変数\]  
        jParser が使用できる最大メモリ量を指定してください。
        例) HEAP\_SIZE=128m

  - 6.PATH を指定する  
    PAHT に jParser.sh が設置してあるディレクトリを指定して下さい。

</div>

<div class="section chapter">

## 実行

任意のディレクトリで下記の通りに、コマンドを実行して下さい。

``` code
$ jParser.sh[space]-x[アノテーションファイル名][space]-s[塩基配列ファイル名]
```

例

``` code
$ jParser.sh -xsample.ann -ssample.fasta
```

ファイル名は絶対パス・相対パスのどちらでも指定できます。  
<span class="bold">macOS: ファイル名とフォルダ名について</span>  
[配列ファイル](/ddbj/file-format.html#sequence)、[アノテーションファイル](/ddbj/file-format.html#annotation)のファイル名またはフォルダ名にマルチバイト文字が含まれていますと一部のバージョンの macOS では正常に動作しない場合がありますので、ファイル名とフォルダ名にマルチバイト文字を混在させないようにご注意ください。

  - \-x[<span class="font-br font-normal">アノテーションファイル名</span>\]  
    このオプションは必須です。指定されていない場合、本ツールは終了します。
    アノテーションファイルは、登録データの登録者、REFERENCE、Feature/Qualifierの情報等を記述したタブ区切りテキストファイルです。
    書式の詳細に関しては、[登録ファイル形式：アノテーションファイル](/ddbj/file-format.html#annotation)
    をご参照下さい。
  - \-s[<span class="font-br font-normal">塩基配列ファイル名</span>\]  
    このオプションは必須です。指定されていない場合、本ツールは終了します。
    塩基配列ファイルは、全登録データの配列をFASTA形式で記述したテキストファイルです。
    書式の詳細に関しては、[登録ファイル形式：配列ファイル](/ddbj/file-format.html#sequence)をご参照下さい。

<div class="attention no_color">

Parser は、エラーが発生している場合は、エラーメッセージを出力します。  
エラーメッセージの意味は [Parser エラーメッセージ](/ddbj/validator.html#parser) をご覧ください。

</div>

</div>

</div>
