---
layout: indexed_content
title: UME ユーザーマニュアル
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
    url: /faq/ja/index.html?tags%5B%5D=ddbj
  - id: other
    title: Other
    url: /ddbj/index-e.html
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
  - title: Parser ユーザーマニュアル
    url: /ddbj/parser.html
  - title: transChecker ユーザーマニュアル
    url: /ddbj/transchecker.html
  - title: validator エラーメッセージ
    url: /ddbj/validator.html
  - title: MSS 利用申し込み
    url: /ddbj/mss-form.html
---

UME (Utilities for MSS file Error check) は Mass Submission System (MSS) を利用して DDBJ に登録する際に必要な [配列ファイル](/ddbj/file-format.html#sequence) と[アノテーションファイル](/ddbj/file-format.html#annotation) のフォーマットチェックと、それらファイルの記載を元に [CDS feature](/ddbj/cds.html) のアミノ酸翻訳チェックを行うツールです。Parser と transChecker を内包しています。

## 基本機能 <a name="function"></a>

|  名称  |  機能  |
| ---- | ---- |
|  [Parser](#validation-2)  |  [配列ファイル](/ddbj/file-format.html#sequence) と[アノテーションファイル](/ddbj/file-format.html#annotation)<br>の構文とフォーマットを検証します。<br>登録ファイルを DDBJ 送付する際には、必ず Parser を用いてファイルの確認を行い、エラーのない状態にしてから送付してください。   |
|  [transChecker](#validation-3)  |  [CDS (タンパク質をコードする配列)](/ddbj/cds.html)feature でアミノ酸翻訳の可否とその配列を検証します。  |
|  [FFconv](#validation-4)  |  [配列ファイル](/ddbj/file-format.html#sequence) と [アノテーションファイル](/ddbj/file-format.html#annotation) から、擬似的な [フラットファイル](/ddbj/flat-file.html) を作成します。 |
|  [AGPParser](#agpparser)  |  contig([CON エントリ](/ddbj/con.html)) を登録する場合、[AGPファイル](/ddbj/file-format.html#agp) と [アノテーションファイル](/ddbj/file-format.html#annotation) の構文とフォーマットを検証します。  |

## インストール <a name="install"></a>

UME パッケージを [MSS データファイルチェック用ツール](/ddbj/mss-tool.html) からダウンロードし、以下の点に注意して、解凍してください。  
その後、UME フォルダ内にある UME アイコンをダブルクリックして起動します。

Windows: zip ファイルの展開表示  
: Windows では、zip ファイルが圧縮状態のままでも、フォルダのように閲覧可能な場合があります。<br>UME 実行時には、ファイルを解凍しておく必要がありますので、ご注意ください。

unix/macOS: ファイルの解凍方法  
: 解凍ソフトを使用するか、以下のコマンドを用いて解凍してください。

``` 
$ gunzip UME_unix.zip
```

macOS: ファイル名とフォルダ名について  
: [配列ファイル](/ddbj/file-format.html#sequence)、[アノテーションファイル](/ddbj/file-format.html#annotation)、[AGP ファイル](/ddbj/file-format.html#agp) のファイル名またはフォルダ名に、マルチバイト文字が含まれていますと一部のバージョンの macOS では正常に動作しない場合がありますので、ファイル名とフォルダ名にマルチバイト文字を混在させないようにご注意ください。

## 初期設定 <a name="initial"></a>

### UME の起動 <a name="initial-1"></a>

UME フォルダ内にある UME アイコン(ご使用の PC の環境設定に依存して何らかの拡張子が表示されることがあります)をダブルクリックして起動します。

macOS の場合、UME アイコンをクリックしても起動できないことがあります。  
その場合はターミナルから下記のようにコマンド実行してください。

``` 
$ cd UME  # UME を展開したディレクトリに移動してください。
$ ./UME.sh
```

![]({{ site.baseurl }}/assets/images/ddbj/UME1-j.png "UME の起動")

lib フォルダ  
: UME が使用するライブラリファイルがあります。正常に動作しなくなる恐れがありますので、絶対に内部は変更しないでください。移動もしないでください。

resource フォルダ  
: UME が使用するリソースファイルがあります。正常に動作しなくなる恐れがありますので、絶対に内部は変更しないでください。移動もしないでください。

sample フォルダ  
: DDBJ 登録用のサンプルファイルがあります。

UME ファイル  
: ダブルクリックすると UME が起動します。

license ファイル  
: 使用許諾に関するテキストファイルです。ご一読ください。 内容は [使用許諾](/ddbj/mss-tool.html#license)と同じです。

### メモリの初期設定 <a name="initial-2"></a>

UME を起動しましたら、メモリ割り当てサイズを調節します。 デフォルトは 512 Mbytes ですが、ご使用の PCのスペックに合わせて変更してください。

[![]({{ site.baseurl }}/assets/images/ddbj/UME2.png)]({{ site.baseurl }}/assets/images/ddbj/UME2.png)

1. 画面上部のメニューから Config をクリックします。
2. Max memory for runtime のプルダウンメニューから、クリックして選択します。

## 登録用ファイルの検証 <a name="validation"></a>

### Check パネルの構成 <a name="validation-1"></a>

下図で赤い四角で囲んだ部分にある Check タブをクリックしますと、この表示になります。  
UME を起動後、最初に開いているパネルです。

![]({{ site.baseurl }}/assets/images/ddbj/UME3.png "Check パネルの構成")

1. 処理対象とする [アノテーションファイル](/ddbj/file-format.html#annotation) と[配列ファイル](/ddbj/file-format.html#sequence) (Fasta File)をそれぞれ指定します。
2. Execute をクリックしますと、(1) で指定したファイルを Parser で検証します。
3. Execute をクリックしますと、(1) で指定したファイルから transChecker でアミノ酸翻訳を確認します。
4. Execute をクリックしますと、(1) で指定したファイルから FFconv で擬似フラットファイルを作成します。
5. Exit をクリックしますと、UME を終了します。

### Parser: 構文チェックツール<a name="validation-2"></a> 

以下の手順で Parser による登録ファイルの構文チェックを実行してください。

![]({{ site.baseurl }}/assets/images/ddbj/UME5.png "Parser 構文チェックツール"){:.w600}

Check タブをクリックし、Check パネルを表示させます。

1. 処理対象とする [アノテーションファイル](/ddbj/file-format.html#annotation) と[配列ファイル](/ddbj/file-format.html#sequence) をそれぞれ指定します。
2. Execute をクリックしますと、(1) で指定したファイルを Parser でチェックします。
3. Save log in file をチェックした場合は、Parser の実行結果をテキストファイルに保存します。
4. Parser の実行結果表示ウィンドウが開きます。
5. Parser チェックの進行状況を表示します。
6. Parser チェックの実行結果を表示します。
7. Save をクリックしますと、(6) の内容をテキストファイルに保存します。
8. Close をクリックしますと、この結果表示ウィンドウを閉じます。

{::options parse_block_html="true" /}
<div class="attention">

Parser は、エラーが発生している場合は、エラーメッセージを出力します。  
エラーメッセージの意味は [Parser エラーメッセージ](/ddbj/validator.html#parser) をご覧ください。

</div>

### transChecker: アミノ酸翻訳検証ツール<a name="validation-3"></a> 

登録データ中に [CDS feature](/ddbj/cds.html) を含む場合 transChecker によるアミノ酸翻訳チェックをお願いします。  
ただし、transChecker を実行する前に、[Parser](#validation-2) でエラーが出力されない状態にしておく必要があります。Parser でエラーが検出される場合は、transChecker を実行することが出来ませんのでご注意ください。  
以下の手順で transChecker によるアミノ酸翻訳チェックを実行します。

![]({{ site.baseurl }}/assets/images/ddbj/UME6.png "transChecker"){:.w600}

Check タブをクリックし、 Check パネル を表示させます。

<ol>
  <li>処理対象とする <a href="/ddbj/file-format.html#annotation">アノテーションファイル</a> と <a href="/ddbj/file-format.html#sequence">配列ファイル</a> をそれぞれ指定します。</li>
  <li>Execute をクリックしますと、(1) で指定したファイルを transChecker でチェックします。</li>
  <li>Save log in file をチェックした場合は、transChecker の実行結果をテキストファイルに保存します。</li>
  <li>Save translated sequences in file をチェックした場合は、transChecker 実行時に出力される翻訳アミノ酸配列を選択された書式でテキストファイルに保存します。<br>翻訳アミノ酸配列の出力書式は以下の２通りです。
    <table>
      <tbody>
        <tr>
          <td class="first"><a href="/ddbj/transchecker.html#output-1-1">FASTA-like format</a></td>
          <td class="second">Translate in FASTA format を選択した場合</td>
        </tr>
        <tr>
          <td class="first"><a href="/ddbj/transchecker.html#output-1-2">塩基配列とのアラインメント</a></td>
          <td class="second">Translate in alignment with nucleotide sequence</td>
        </tr>
      </tbody>
    </table>
  </li>
  <li>transChecker の実行結果表示ウィンドウが開きます。</li>
  <li>transChecker チェックの進行状況を表示します。</li>
  <li>transChecker チェックの実行結果、エラーメッセージなどを表示します。</li>
  <li>Save をクリックしますと、(7) の内容をテキストファイルに保存します。</li>
  <li>transChecker チェックの実行結果、翻訳アミノ酸配列を (4) で選択した書式で表示します。</li>
  <li>Save をクリックしますと、(9) の内容をテキストファイルに保存します。</li>
  <li>Close をクリックしますと、この結果表示ウィンドウを閉じます。</li>
</ol>      

{::options parse_block_html="true" /}
<div class="attention">

transChecker は、エラーが発生している場合は、エラーメッセージを出力します。  
エラーメッセージの意味は [transChecker エラーメッセージ](/ddbj/validator.html#transchecker) をご覧ください。

</div>

### FFconv: 擬似フラットファイル作成ツール<a name="validation-4"></a> 

FFconv を使用して [アノテーションファイル](/ddbj/file-format.html#annotation) と [配列ファイル](/ddbj/file-format.html#sequence) を [DDBJ フラットファイル](/ddbj/flat-file.html)に変換し確認することが可能です。

ただし、FFconv を実行する前に、[Parser](#validation-2) でエラーが出力されない状態にしておく必要があります。Parser でエラーが検出される場合、FFconv を実行することが出来ませんので、ご注意ください。

FFconv は以下の手順で実行します。

![]({{ site.baseurl }}/assets/images/ddbj/UME7.png "FFconv"){:.w600}

Check タブをクリックし、 Check パネル を表示させます。

1. 処理対象とする [アノテーションファイル](/ddbj/file-format.html#annotation) と [配列ファイル](/ddbj/file-format.html#sequence) をそれぞれ指定します。
2. Execute をクリックしますと、(1) で指定したファイルから FFconv で擬似 DDBJ フラットファイルを作成します。
3. Save flat file in file をチェックした場合は、FFconv の実行結果、擬似 DDBJ フラットファイルをテキストファイルに保存します。
4. FFconv の実行結果表示ウィンドウが開きます。
5. FFconv の進行状況を表示します。
6. FFconv の実行結果を表示します。
7. Save をクリックしますと、(6) の内容をテキストファイルに保存します。
8. FFconv の実行結果、擬似 DDBJ フラットファイルを表示します。
9. Save をクリックしますと、(8) の内容をテキストファイルに保存します。
10. Close をクリックしますと、この結果表示ウィンドウを閉じます。

## Contig 登録用ファイルの検証<a name="agpparser"></a> 

### Contig パネルの構成 <a name="panel-2"></a>

下図で赤い四角で囲んだ部分にある Contig タブをクリックしますと、この表示になります。

![]({{ site.baseurl }}/assets/images/ddbj/UME4.png "Contig 登録用ファイルの検証")

1. 処理対象とする [アノテーションファイル](/ddbj/file-format.html#annotation) を指定します。
2. 処理対象とする [AGPファイル](/ddbj/file-format.html#agp) を指定します。
3. (2) で引用の対象とする 塩基配列ファイル を指定します。
4. Execute をクリックしますと、指定したファイルを AGPParser でチェックします。
5. Exit をクリックしますと、UME を終了します。

### AGPParser 実行 <a name="agpparser-2"></a>

AGPParser は [AGPファイル](/ddbj/file-format.html#agp) のフォーマットをチェックします。  
[アノテーションファイル](/ddbj/file-format.html#annotation) または AGPファイルで引用する配列で構成される multi-fasta ファイルを指定した場合、相互の整合性をチェックします。

![]({{ site.baseurl }}/assets/images/ddbj/UME8.png "AGPParser 実行"){:.w600}

Contig タブをクリックし、 Contig パネル を表示させます。

1. 処理対象とする [アノテーションファイル](/ddbj/file-format.html#annotation) を指定します。必須ではありません。
2. 処理対象とする [AGPファイル](/ddbj/file-format.html#agp) を指定します。必須です。
3. 処理対象とする引用配列の [配列ファイル](/ddbj/file-format.html#sequence) を指定します。必須ではありません。
4. Execute をクリックしますと、(1)～(3) で指定したファイルを AGPParser でチェックします。
5. Construct sequence from AGP and multi-fasta files をチェックした場合は、2つのファイルの記載にしたがって塩基配列を作成し、テキストファイルに保存します。
6. Save log in file をチェックした場合は、AGPParser の実行結果をテキストファイルに保存します。
7. AGPParser の実行結果表示ウィンドウが開きます。
8. AGPParser の進行状況を表示します。
9. AGPParser の実行結果を表示します。
10. Save をクリックしますと、(9) の内容をテキストファイルに保存します。
11. Close をクリックしますと、この結果表示ウィンドウを閉じます。

<div class="attention">

AGPparser は、エラーが発生している場合は、エラーメッセージを出力します。  
エラーメッセージの意味は [AGPparser エラーメッセージ](/ddbj/validator.html#parser) をご覧ください。

</div>