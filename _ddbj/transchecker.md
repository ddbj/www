---
layout: tabbed_indexed_content
title: transChecker ユーザーマニュアル
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
  - title: Parser ユーザーマニュアル
    url: /ddbj/parser.html
  - title: validator エラーメッセージ
    url: /ddbj/validator.html
  - title: MSS 利用申し込み
    url: /ddbj/mss-form.html
---

transChecker は Mass Submission System (MSS) を利用して DDBJ に登録する際に必要な[アノテーションファイル](/ddbj/file-format.html#annotation)と[塩基配列ファイル](/ddbj/file-format.html#sequence) の記載を元に、[CDS feature](/ddbj/cds.html) のアミノ酸翻訳エラーチェックを行うCUIツールです。

## インストール  {#install}

### 1. transChecker ファイルの取得   {#install-1}
[MSS データファイル用チェックツール](/ddbj/mss-tool.html) から transChecker_V#.##.tar.gz (# はバージョンを表します)をダウンロードしてください。

### 2. 解凍   {#install-2}
```
$ gunzip -c transChecker_V#.##.tar.gz | tar xvf -
```

解凍後に transChecker ディレクトリが作成されます。ディレクトリの中身を見ると、以下のようになっています。

```
$ ls -FC transChecker/
jar/  license.txt  transChecker.sh*
```

<table><tbody>
<tr>
	<th>jar/</th>
	<td>java のクラスライブラリ格納ディレクトリ(改変不可)</td>
</tr>
<tr>
	<th>license.txt</th>
	<td>使用許諾(改変不可)</td>
</tr>
<tr>
	<th>transChecker.sh</th>
	<td>実行シェルスクリプト</td>
</tr>
</tbody></table>

### 3. 実行シェルスクリプトを編集   {#install-3}
transChecker.sh の一部をインストール場所に合わせて変更します。nano や vi などのエディタで編集して下さい。

例) /home/mass ディレクトリ配下に解凍した場合
```
$ cd /home/mass/transChecker
$ nano transChecker.sh
```
TRANS_DIR= に、transChecker ディレクトリの場所をフルパスで指定します。
```
# Installed directory
TRANS_DIR=./
  ↓
# Installed directory
TRANS_DIR=/home/mass/transChecker
```

## 実行の前に   {#beforeuse}
[Parser によるチェック](/ddbj/parser.html)で、アノテーションファイルと塩基配列ファイルにエラーがないことを確認してから、transChecker を実行してください。

## 使い方  {#exec}
```
cd <transCheckerを設置したディレクトリ>
./transChecker.sh -x <filename> -s <filename> [-e <filename> -o <filename> -t <filename> -M <memory size>]
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
**-e \<エラー出力用ファイル名\>**    
任意。アミノ酸配列への翻訳で生じたエラーを出力する場合のファイル名を指定します。このオプションを指定しない場合、画面に結果が出力されます。翻訳エラーがない場合は何も出力されません。
```
-e result.txt
```
**-o \<アミノ酸配列出力用ファイル名\>**    
任意。翻訳アミノ酸配列を出力するファイル名を指定します。このオプションを指定しない場合、結果は出力されません。出力書式は [FASTA-like format] の通りです。
```
-o aaseq.txt
```
**-t \<翻訳配列をともなう塩基配列出力用ファイル名\>**    
任意。CDSの塩基配列上に対応アミノ酸配列を出力するためのファイル名を指定します。このオプションを指定しない場合、結果は出力されません。出力フォーマットは[塩基配列上に対応アミノ酸配列を出力]をご参照ください。
```
-t nucwithaa.txt
```
**-M \<最大メモリサイズ\>**    
任意。コマンド実行時に許可する最大メモリサイズをmegabyteで指定します。アノテーションファイルまたは塩基配列ファイルのサイズが大きい場合に使用します。このオプションを指定しない場合は、transChecker.sh スクリプト内 DEFAULT_MAX_HEAP= のメモリ量が使われます。
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
$ cd /home/mass/transChecker
$ ./transChecker.sh -x sample1.ann -s sample1.fasta
```
例2
```
$ cd /home/mass/transChecker
$ ./transChecker.sh -x sample2.ann -s sample2.fasta -e result.txt -o aaseq.txt -t nucwithaa.txt -M 16384m
```

## -o -t オプションの出力フォーマット  {#exec-1}
CDS feature にエラーがある場合でも、CDS で示される塩基配列に対応するアミノ酸配列をその状態で出力しますが、エラーの程度により出力されないことがあります。

### FASTA-like format (-o オプション)  {#exec-1-1}
FASTA に類似の形式で翻訳アミノ酸配列を出力します。

書式
```
>[entry name].[sequential serial number][space][CDS feature location]
[翻訳結果アミノ酸配列 (60 文字/行)]
//
```

例
```
>entry1.1 89..406
MLARISELTKIGTTIFIVAIDQVAEPNSWGSSQLVLLAKIAGALKAIPPNPVCTSRHRQA
ASVSPFRSAIVGTLLQLEAIKNLLTVSVDTIQQNGVLFIFVALLR
//
>entry1.2 684..1325
MSIGILGTKLGMTQIFDESGKAVPVTVIQAGPCPITQIKTVATDGYNAIQIGFLEVREKQ
LSKPELGHLSKAGAPPLRHLLEYRVPSTDGLELGQALTADRFEAGQKVDVQGHTIGRGFT
GYQKRHGFARGPMSHGSKNHRLPGSTGAGTTPGRVYPGKRMAGRSGNDKTTIRGLTVVRV
DADRNLLLVKGSVPGKPGALLNITPATVVGQQA
//
```

### 塩基配列上に対応アミノ酸配列を出力 (-t オプション)  {#exec-1-2}
CDS の塩基配列とともに対応するアミノ酸配列を出力します。

書式
```
>[entry name].[sequential serial Number][space][CDS feature location]
/codon_start=[codon_start の値; 指定なしの場合 1]
/transl_table=[transl_table の値; 指定なしの場合 1]
[塩基数][塩基配列 (60 文字/行)]
[アミノ酸残基数][翻訳結果アミノ酸配列 (20 文字/行)]
[空行]
  :
  :
//
```

例
```
>ENT01.1 <1..179
/codon_start=3
/transl_table=1
         1 tgtacccactcaattttgtaaccccgggtatcatgctcccaggtgcattgatgttggatt
         1   Y  P  L  N  F  V  T  P  G  I  M  L  P  G  A  L  M  L  D  F

        61 tcacgatgtatctgacgcgtaactggctggtgaccgcattggttggaggtggattctttg
        21   T  M  Y  L  T  R  N  W  L  V  T  A  L  V  G  G  G  F  F  G

       121 gtctgctgttttacccaggtaactggccaatctttggcccgacccatctgccaatctaa
        41   L  L  F  Y  P  G  N  W  P  I  F  G  P  T  H  L  P  I  
//
>ENT02.1 101..280
/codon_start=1
/transl_table=1
         1 atgtacccactcaattttgtaaccccgggtatcatgctcccaggtgcattgatgttggat
         1 M  Y  P  L  N  F  V  T  P  G  I  M  L  P  G  A  L  M  L  D

        61 ttcacgatgtatctgacgcgtaactggctggtgaccgcattggttggaggtggattcttt
        21 F  T  M  Y  L  T  R  N  W  L  V  T  A  L  V  G  G  G  F  F

       121 ggtctgctgttttacccaggtaactggccaatctttggcccgacccatctgccaatctaa
        41 G  L  L  F  Y  P  G  N  W  P  I  F  G  P  T  H  L  P  I  
//
```

## エラーメッセージ  {#error}
CDS feature に翻訳エラーがある場合は、エラーメッセージが出力されます。エラーメッセージの詳細については [Validator エラーメッセージ: transChecker](/ddbj/validator.html#transChecker) をご覧ください。

