---
layout: tabbed_indexed_content
title: transChecker ユーザーマニュアル
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /ddbj/index.html
  - id: submission
    title: Submission
    url: /ddbj/submission.html
    children:
      - title: 塩基配列の登録
        url: /ddbj/submission.html
      - title: Web 版塩基配列登録システム
        url: /ddbj/web-submission.html
      - title: Mass Submission System
        url: /ddbj/mss.html
      - title: 登録データの修正・更新
        url: /ddbj/update.html
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/arsa/?lang=ja
    children:
      - title: getentry
        url: http://getentry.ddbj.nig.ac.jp/top-j.html
      - title: ARSA
        url: http://ddbj.nig.ac.jp/arsa/?lang=ja
  - id: flat_file
    title: Flat file
    url: /ddbj/flat-file.html
    children:
      - title: Feature key の定義
        url: /ddbj/features.html
      - title: Qualifier key の定義
        url: /ddbj/qualifiers.html
      - title: Organism qualifier に記載する生物名
        url: /ddbj/organism.html
      - title: Location の記述法
        url: /ddbj/location.html
      - title: タンパク質コード配列
        url: /ddbj/cds.html
      - title: The Genetic Codes
        url: /ddbj/geneticcode.html
      - title: 配列の記載に用いる略号
        url: /ddbj/code.html
      - title: 登録の見本
        url: /ddbj/example.html
  - id: data_categories
    title: Data categories
    url: /ddbj/data-categories.html
    children:
      - title: Genome project のデータ登録
        url: /ddbj/genome.html
      - title: Pseudohaplotype
        url: /ddbj/pseudohaplotype.html
      - title: WGS
        url: /ddbj/wgs.html
      - title: メタゲノムアセンブリ
        url: /ddbj/metagenome-assembly.html
      - title: Single amplified genome
        url: /ddbj/single-amplified-genome.html
      - title: CON
        url: /ddbj/con.html
      - title: GSS
        url: /ddbj/gss.html
      - title: HTG
        url: /ddbj/htg.html
      - title: Environmental sequence の登録
        url: /ddbj/environmental.html
      - title: ENV
        url: /ddbj/env.html
      - title: TLS
        url: /ddbj/tls.html
      - title: Transcriptome Project のデータ登録
        url: /ddbj/transcriptome.html
      - title: TSA
        url: /ddbj/tsa.html
      - title: EST
        url: /ddbj/est.html
      - title: HTC
        url: /ddbj/htc.html
      - title: Third Party Data (TPA)
        url: /ddbj/tpa.html
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=ddbj
  - id: other
    title: Other
    url: /ddbj/index.html
    children:
      - title: Patent
        url: /ddbj/patent-data.html
      - title: MGA
        url: /ddbj/mga.html
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

transChecker は Mass Submission System (MSS) を利用して DDBJ に登録する際に必要な
[配列ファイル](/ddbj/file-format.html#sequence) と [アノテーションファイル](/ddbj/file-format.html#annotation) の記載を元に、[CDS feature](/ddbj/cds.html) のアミノ酸翻訳チェックを行うツールです。

## インストール  {#install}

<ol>
  <li>
    <a href="/ddbj/mss-tool.html">MSS データフイル用チェックツール</a>から transChecker.tar.gz を取得 
  </li>     
  <li>  
    tar.gz ファイルを gunzip コマンドで解凍<br>
<pre>
<code>
$ gunzip transChecker.tar.gz
</code>   
</pre>
  </li>   
  <li>
    tar ファイルを tar コマンドで展開<br>
<pre>
<code>
$ tar xvf transChecker.tar
</code>
</pre>
  </li>  
  <li>
    ディレクトリが生成される<br>
    下記の要領で、ディレクトリの中身を見ると以下のようになっています。<br>
    <pre>
      <code> 
$ cd transChecker
$ ls -FC
jar/license.txt   transChecker.sh*
      </code>
    </pre>
    <br>
    <table>
      <tbody>
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
      </tbody>
    </table>
</li>
<li>ファイルの編集<br>
    transChecker.sh を実行する前にファイルの中身を、インストールしたコンピュータの環境にあわせるために変更する必要があります。vi などのエディタで編集して下さい。<br>

<pre><code>
#!/bin/sh

# Installed directory
TRANS_DIR=./

# Set maximum Java heap size
HEAP_SIZE=128m

# Execution Command
# Don't change.
java -Xmx$HEAP_SIZE -jar $TRANS_DIR/jar/transChecker.jar -Cclean $@

RETVAL=$?

exit $RETVAL
#EOF
</code></pre>

  <dl>
    <dt>[TRANS_DIR 変数]</dt>
    <dd>transChecker ディレクトリのある場所をフルパスで入力して下さい。</dd>
    <dd>例) TRANS_DIR=/home/mass/transChecker</dd>
    <dt>[HEAP_SIZE 変数]</dt>
    <dd>transChecker が使用できる最大メモリ量を指定してください。</dd>
    <dd>例) HEAP_SIZE=128m</dd>
  </dl>
  </li>  
  <li>
    PATH を指定する<br>
    PATH に transChecker.sh が設置してあるディレクトリを指定して下さい。
  </li>
</ol>

## 実行  {#exec}

任意のディレクトリで下記の通りに、コマンドを実行して下さい。

``` 
$ transChecker.sh[space]-x[アノテーションファイル名][space]-s[塩基配列ファイル名][space]
-e[実行結果保存用ファイル名][space]-o[アミノ酸配列ファイル名][space]-t[塩基配列とアミノ酸配列のアラインメントのファイル名]
```

例

``` 
$ transChecker.sh -xsample.ann -ssample.fasta -eerrmsg.txt -orsl.fasta -taln.txt
```

ファイル名は絶対パス・相対パスのどちらでも指定できます。  
**macOS: ファイル名とフォルダ名について**
[配列ファイル](/ddbj/file-format.html#sequence)、[アノテーションファイル](/ddbj/file-format.html#annotation)のファイル名またはフォルダ名にマルチバイト文字が含まれていますと一部のバージョンの macOS では正常に動作しない場合がありますので、ファイル名とフォルダ名にマルチバイト文字を混在させないようにご注意ください。

\-x[<span class="font-br font-normal">アノテーションファイル名</span>\]  
: このオプションは必須です。指定されていない場合、本ツールは終了します。 アノテーションファイル はタブ区切りのテキストファイルです。書式の詳細に関しては、[登録ファイル形式：アノテーションファイル](/ddbj/file-format.html#annotation) をご参照下さい。 また、transChecker 実行前に Parser によるチェックでエラーがないことをご確認ください。

\-s[<span class="font-br font-normal">塩基配列ファイル名</span>\]  
: このオプションは必須です。指定されていない場合、本ツールは終了します。 塩基配列ファイル は fasta 形式のテキストファイルです。書式の詳細に関しては、[登録ファイル形式：配列ファイル](/ddbj/file-format.html#sequence) をご参照下さい。 また、transChecker 実行前に Parser によるチェックでエラーがないことをご確認ください。

\-e[<span class="font-br font-normal">実行結果保存用ファイル名</span>\]  
: アミノ酸配列への翻訳過程で生じたエラーメッセージを出力するファイルの名称を指定します。このオプションが指定されていない場合は、エラーメッセージは、stdout で出力されます。 エラーメッセージが出力された場合は、適宜、対処をお願いいたします。 出力フォーマットとエラーメッセージの意味は [transChecker エラーメッセージ一覧](/ddbj/validator.html#transChecker) をご参照ください。

\-o[<span class="font-br font-normal">アミノ酸配列ファイル名</span>\]  
: 翻訳結果のアミノ酸配列を出力するファイルの名称を指定します。 このオプションが指定されていない場合、アミノ酸配列は出力されません。出力フォーマットは [FASTA-like format](#output-1-1) をご参照ください。

\-t[<span class="font-br font-normal">塩基配列とアミノ酸配列のアラインメントのファイル名</span>\]  
: 翻訳結果を塩基配列とアミノ酸配列のアラインメントとして出力するファイルの名称を指定します。このオプションが指定されていない場合、アラインメントは出力されません。出力フォーマットは [塩基配列とのアラインメント](#output-1-2) をご参照ください。

### アミノ酸配列のフォーマット  {#exec-1}

transChecker では２種類の形式を用意しています。  
エラーがある場合でも、CDS feature で示される塩基配列に対応するアミノ酸配列をその状態で出力しますが、エラーの程度により出力されないこともあります。

#### FASTA-like format  {#output-1-1}

以下に示す FASTA に類似の形式で出力します。

書式

``` 
>[Entry name].[Serial Number][space][CDS feature location]
[翻訳結果アミノ酸配列 (60 文字/行)]
//
```

出力例

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

#### 塩基配列とのアラインメント {#output-1-2}

塩基配列と翻訳アミノ酸配列のアラインメントを以下に示す書式で出力します。

書式

``` 
>[Entry name].[Serial Number][space][CDS feature location]
/codon_start=[codon_start の値; 指定なしの場合 1]
/transl_table=[transl_table の値; 指定なしの場合 1]
[塩基番号][塩基配列 (60 文字/行)]
[アミノ酸番号][翻訳結果アミノ酸配列 (20 文字/行)]
[空行]
:
//
```

出力例

``` 
ENT01.1 <1..179
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


<div class="attention" markdown="1">

transChecker は、エラーが発生している場合は、エラーメッセージを出力します。  
エラーメッセージの意味は [transChecker エラーメッセージ](/ddbj/validator.html#transchecker) をご覧ください。

</div>
