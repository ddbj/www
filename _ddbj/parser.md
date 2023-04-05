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

Parser は、Mass Submission System (MSS) を利用して DDBJ に登録する際に必要な[アノテーションファイル](/ddbj/file-format.html#annotation)と[塩基配列ファイル](/ddbj/file-format.html#sequence)のフォーマットチェックを行うCUIツールです。

## インストール  {#install}

### 1. Parser ファイルの取得  {#install-1}
[MSS データファイル用チェックツール](/ddbj/mss-tool.html)から Parser_V#.##.tar.gz (# はバージョンを表します)をダウンロードしてください。

### 2. 解凍  {#install-2}
```
$ gunzip -c Parser_V#.##.tar.gz | tar xvf -
```

解凍後に jParser ディレクトリが作成されます。ディレクトリの中身を見ると、以下のようになっています。

```
$ ls -FC jParser/
jParser.sh*  jar/    license.txt resource/
```

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

### 3. 実行シェルスクリプトを編集  {#install-3}
jParser.sh の一部をインストール場所に合わせて変更します。nano や vi などのエディタで編集して下さい。

例) /home/mass ディレクトリ配下に解凍した場合
```
$ cd /home/mass/jParser
$ nano jParser.sh
```
PARSER_DIR= に、jParser ディレクトリの場所をフルパスで指定します。
```
# Parser installed directory
PARSER_DIR=./
  ↓
# Parser installed directory
PARSER_DIR=/home/mass/jParser
```

## 使い方  {#exec}
```
cd jParserを設置したディレクトリ
./jParser.sh -x <filename> -s <filename> [-e <filename> -M <memory size>]
```

オプション詳細。ファイル名は絶対パス、相対パスのどちらでも指定可能です。

**-x \<アノテーションファイル名\>**    
必須。アノテーションファイルを指定します。アノテーションファイル書式に関しては、[登録ファイル形式：アノテーションファイル](/ddbj/file-format.html#annotation) をご参照下さい。
```
-x sample.ann
```
**-s \<塩基配列ファイル名\>**    
必須。塩基配列ファイルを指定します。 塩基配列ファイル書式に関しては、[登録ファイル形式：配列ファイル](/ddbj/file-format.html#sequence)をご参照下さい。
```
-s sample.fasta
```
**-e \<結果出力用ファイル名\>**    
任意。実行結果をファイルに出力する場合のファイル名を指定します。このオプションを指定しない場合、画面に結果が出力されます。
```
-e result.txt
```
**-M \<最大メモリサイズ\>**    
任意。コマンド実行時に許可する最大メモリサイズをmegabyteで指定します。アノテーションファイルまたは塩基配列ファイルのサイズが大きい場合に使用します。このオプションを指定しない場合は、jParser.sh スクリプト内 DEFAULT_MAX_HEAP= のメモリ量が使われます。
```
-M 8192m
```

<div class="attention" markdown="1">
**macOS: ファイル名とフォルダ名について**

[アノテーションファイル](/ddbj/file-format.html#annotation)、[配列ファイル](/ddbj/file-format.html#sequence)のファイル名またはフォルダ名にマルチバイト文字が含まれていますと一部のバージョンの macOS では正常に動作しない場合がありますので、ファイル名とフォルダ名にマルチバイト文字を混在させないようにご注意ください。
</div>

### 実行例  {#exec-eg}
例1
```
$ cd /home/mass/jParser
$ ./jParser.sh -x sample1.ann -s sample1.fasta
```
例2
```
$ cd /home/mass/jParser
$ ./jParser.sh -x sample2.ann -s sample2.fasta -M 16384m -e result.txt
```

## エラーメッセージ  {#error}
アノテーションファイル、塩基配列ファイル書式にエラーがある場合は、エラーメッセージが出力されます。エラーメッセージの詳細については [Validator エラーメッセージ: Parser](/ddbj/validator.html#Parser) をご覧ください。
