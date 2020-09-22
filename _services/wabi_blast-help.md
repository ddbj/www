---
layout: indexed_content
title: WABI BLAST
category: services
lang: ja
related_pages:
  - title: WABI ClustalW ヘルプ
    url: /wabi_clustalw-help.html
  - title: WABI VecScreen ヘルプ
    url: /wabi_vecscreen-help.html
  - title: WABI MAFFT ヘルプ
    url: /wabi_mafft-help.html
---

## 概要 <a name="overview"></a>

WABI は、 BLAST を利用するための Web API を提供しています。

  - [BLAST検索条件](#search-criteria) を受け付けて [検索ジョブ](#search-job)
    をキューに登録します。応答データとして [Request
    ID](#parameter-Request-ID) を返します。  
    検索ジョブは、キューに登録されると「待機」→「実行」→「完了」と状態が遷移して行きます。  
    状態が「完了」になると検索結果を閲覧できますが、閲覧期間は実行後 7日間 です。  
    ( [「Request ID，検索結果表示」]({{site.baseurl}}/services/blast-help.html#result) の「検索結果閲覧期間」より。)
  - 指定された [Request ID](#parameter-Request-ID) に対する
    [BLAST検索ジョブの状態](#search-job) を返します。
  - 指定された [Request ID](#parameter-Request-ID) に対する
    [BLAST検索条件](#search-criteria) を返します。
  - 指定された [Request ID](#parameter-Request-ID) に対する
    [BLAST検索結果](#search-result) を返します。

## WABI BLAST での検索 <a name="search"></a>

### BLAST検索ジョブ<a name="search-job"></a> 

BLAST の検索ジョブは、まず実行待ちのキューに登録されます。そしてリソースを確保でき次第、実行されます。

参照: [検索ジョブの状態](#search-status)

### 検索ジョブの状態<a name="search-status"></a> 

WABI の検索ジョブは、次のように状態が遷移して行きます。

| ジョブの状態を示す値  | 説明                                                         |
| ----------- | ---------------------------------------------------------- |
| `waiting`   | ジョブがキューに登録されていますが、まだ実行が開始されていない状態です。                       |
| `running`   | ジョブが実行中の状態です。                                              |
| `finished`  | ジョブの実行が既に完了している状態です。                                       |
| `not-found` | 指定された [Request ID](#parameter-Request-ID) に対するジョブが見つかりません。 |

[ジョブの状態を確認するアクション](#URI_GET_status) が返す値の例:

``` 
1 request-ID: wabi_blast_1111-1111-1111-11-111-111111
2 status: finished
3 current-time: 2013-01-01 12:34:56
4 system-info:
5 stdout

1 {
2         "request-ID": "wabi_blast_1111-1111-1111-11-111-111111",
3         "status": "finished",
4         "current-time": "2013-01-01 12:34:56",
5         "system-info": "\nstdout" 
6 }
1 <?xml version="1.0" ?>
2 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
3 <result>
4   <request-ID>wabi_blast_1111-1111-1111-11-111-111111</request-ID>
5   <status>finished</status>
6   <current-time>2013-01-01 12:34:56</current-time>
7   <system-info>stdout</system-info>
8 </result>
```

``` 
 1 {
 2         "error-message": "Unexpected error (status == null)",
 3         "requestId": "wabi_blast_1111-1111-1111-11-111-111111",
 4         "jobId": "123456",
 5         "month": "01",
 6         "day": "01",
 7         "hour": "12",
 8         "min": "34",
 9         "sec": "56",
10         "millisec": "789",
11         "randomId": "987654" 
12 }
```

### BLAST 検索条件 <a name="search-criteria"></a> 

WABI に [BLAST検索ジョブを登録](#URI_POST) したときに指定したパラメーター値の情報です。

例:

``` 
 1 {
 2         "address": "",
 3        "database": "hum",
 4         "datasets": "ddbjall",
 5         "format": "json",
 6         "parameters": " -v 100 -b 100 -e 10 -F F -W 11",
 7         "program": "blastn",
 8        "querySequence": ">my query sequence 1\nCACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA\nGCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG\nGTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC\n",
 9        "result": "www" 
10 }
```

### BLAST 検索結果 <a name="search-result"></a> 

BLAST検索処理 の結果です。 `blastall` コマンドの `"-o"` オプションでファイル出力された内容などと同じです。

例:

``` 
 1 BLASTN 2.2.25 [Feb-01-2011]
 2 
 3 Reference: Altschul, Stephen F., Thomas L. Madden, Alejandro A. Schaffer,
 4 Jinghui Zhang, Zheng Zhang, Webb Miller, and David J. Lipman (1997),
 5 "Gapped BLAST and PSI-BLAST: a new generation of protein database search
 6 programs",  Nucleic Acids Res. 25:3389-3402.
 7 
 8 Query= AB000095|AB000095.1 Homo sapiens mRNA for hepatocyte growth
 9 factor activator inhibitor, complete cds.
10          (1740 letters)
11 
12 Database: hum
13            572,091 sequences; 5,019,832,159 total letters
14 
15 Searching..................................................done
16 
17                                                                  Score    E
18 Sequences producing significant alignments:                      (bits) Value
19 
20 AB000095|AB000095.1 Homo sapiens mRNA for hepatocyte growth fact...  3449   0.0
21 BC018702|BC018702.1 Homo sapiens serine peptidase inhibitor, Kun...  3435   0.0
22 BC004140|BC004140.1 Homo sapiens serine peptidase inhibitor, Kun...  3190   0.0
23 BT007425|BT007425.1 Homo sapiens serine protease inhibitor, Kuni...  3053   0.0
24 AY358969|AY358969.1 Homo sapiens clone DNA35880 HAI-1 (UNQ223) m...  2145   0.0
25 AY296715|AY296715.1 Homo sapiens hepatocyte growth factor activa...  1984   0.0
(後略)
        
```

### BLAST 検索結果画像<a name="search-image"></a> 

WABI の BLAST検索ジョブ は、 BLAST検索結果を元にしてグラフィカル表示用画像を出力します。

画像例:

[![Detail view_6_1]({{ site.baseurl }}/assets/images/help/wabi_blast_imagedata.png){:.w500}]({{ site.baseurl }}/assets/images/help/wabi_blast_imagedata.png ){:.group1}

## WABI BLAST の使用例 <a name="usage_example"></a>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)">Javaの使用例</a></h3>
<div class="accordion-content">#### コード例

Example.java
: <script src="https://gist.github.com/ddbj-repo/d2ead08e9b9664418c34e292392f1ca8.js"></script>

blast_condition.fasta
: 
  ``` 
  >my query sequence 1
  CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
  GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
  GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC
  ```

blast_condition.txt  
: [コード](https://gist.github.com/ddbj-repo/22e92ce2e085be3f34fe072298241639)
: 
  ``` 
  datasets        ddbjall
  database        hum
  program blastn
  parameters      -v 100 -b 100 -e 10 -F F -W 11
  format  json
  result  www
  ```

pom.xml
: <script src="https://gist.github.com/ddbj-repo/4978b238ca7dbb94ebeebae0184cd6ce.js"></script>

#### 実行例 <a name="java_execution_example"></a>

前準備 (一度だけ実施する必要あり)
: 
  ``` 
  $ wget 'http://sourceforge.jp/frs/redir.php?m=iij&f=%2Fjsonic%2F56583%2Fjsonic-1.3.0.zip'
  $ unzip jsonic-1.3.0.zip
  $ mv jsonic-1.3.0/jsonic-1.3.0.jar src/main/resources/
  $ tree -F
  .
  ├── blast_condition.fasta
  ├── blast_condition.txt
  ├── pom.xml
  └── src/
      └── main/
          ├── java/
          │   └── Example.java
          └── resources/
              └── jsonic-1.3.0.jar
  ```

ビルド
: 
  ``` 
  $ mvn clean
  $ mvn compile
  $ mvn package
  $ mvn assembly:assembly -DdescriptorId=jar-with-dependencies
  ```

実行手順
: 
  ``` 
  $ java -classpath 'target/wabi-client-1.jar:target/wabi-client-1-jar-with-dependencies.jar:src/main/resources/jsonic-1.3.0.jar' Example
  ```

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h3 class="toggle-content-btn"><a href="javascript:void(0)">Perlの使用例</a></h3>
<div class="accordion-content">#### コード例

example.pl
: <script src="https://gist.github.com/ddbj-repo/b2f7e3ac56745a63b719908945518d4c.js"></script>

blast_condition.fasta
: 
  ``` 
  >my query sequence 1
  CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
  GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
  GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC
  ```

blast_condition.txt
: [コード](https://gist.github.com/ddbj-repo/22e92ce2e085be3f34fe072298241639)
: 
  ``` 
  datasets        ddbjall
  database        hum
  program blastn
  parameters      -v 100 -b 100 -e 10 -F F -W 11
  format  json
  result  www
  ```

#### 実行例 <a name="perl_execution_example"></a>

前準備 (一度だけ実施する必要あり)
: 
  ``` 
  $ cpan
  cpan[1] install JSON
  cpan[2]> install HTTP::Request::Common
  cpan[3]> install LWP::UserAgent
  cpan[4]> install HTTP::Status
  cpan[5]> quit
  $ tree -F
  .
  ├── blast_condition.fasta
  >├── blast_condition.txt
  └── example.pl
  ```

実行手順
: 
  ``` 
  $ perl example.pl
  ```

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h3 class="toggle-content-btn"><a href="javascript:void(0)">Ruby の使用例</a></h3>
<div class="accordion-content">#### コード例

example.rb
: <script src="https://gist.github.com/ddbj-repo/aa94320d3ab88ae27e53371868885cfd.js">

blast_condition.fasta
: 
  ``` 
  >my query sequence 1
  CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
  GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
  GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC
  ```

blast_condition.txt  
: [コード](https://gist.github.com/ddbj-repo/22e92ce2e085be3f34fe072298241639)
: 
  ``` 
  datasets        ddbjall
  database        hum
  program blastn
  parameters      -v 100 -b 100 -e 10 -F F -W 11
  format  json
  result  www
  ```

#### 実行例 <a name="ruby_execution_example"></a>

実行手順
:   
  ``` 
  $ ruby example.rb
  ```

実際の例
: <script src="https://gist.github.com/ddbj-repo/d9e1d2d44aaecdb890ec12196dc52dbd.js"></script>

#### 実行結果例 <a name="wabi_blast_2013-0606-1336-31-681-634313"></a>

wabi_blast_2013-0606-1336-31-681-634313.txt
: <script src="https://gist.github.com/ddbj-repo/aea641167c10b4c56ec08b1c4e230f2a.js"></script>

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

## WABI BLAST の詳細 <a name="details"></a>

### URI POST /blast (検索ジョブの登録)<a name="URI_POST"></a> 

[BLAST検索のジョブ](#search-job) をキューに投入して、 [Request
ID](#parameter-Request-ID) を返します。  
BLAST検索 の検索条件や結果通知方法などを HTTPパラメーター で指定します。

<table>
  <thead>
    <tr>
      <th colspan="2">項目</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">HTTP メソッド</td>
      <td><code class="language-plaintext highlighter-rouge">POST</code></td>
    </tr>
    <tr>
    <td colspan="2">URI</td>
    <td><code class="language-plaintext highlighter-rouge">/blast</code></td>
    </tr>
    <tr>
    <td rowspan="8">HTTP パラメーター</td>
    <td><code class="language-plaintext highlighter-rouge">querySequence</code></td>
    <td>
<a href="#parameter-querySequence">multi FASTA 形式の検索配列データ</a><br>
              <pre class="code"><code class="language-plaintext highlighter-rouge">例: &gt;my query sequence 1
CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC</code></pre><br>
              <span class="red">※配列数を増やしても並列度は上がりません。
              ジョブ管理エンジンによる負荷分散も考慮すると、
              Web API として利用するならば配列数は少なめにすることを推奨します。</span>
</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">datasets</code></td>
      <td>
<a href="#parameter-datasets">データセット</a> (例: <code class="language-plaintext highlighter-rouge">"ddbjall"</code>)</td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">database</code></td>
    <td>
<a href="#parameter-database">データベース</a> (例: <code class="language-plaintext highlighter-rouge">"hum"</code>, <code class="language-plaintext highlighter-rouge">"hum pri"</code>)</td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">program</code></td>
    <td>
<a href="#parameter-program">BLAST プログラム</a> (例: <code class="language-plaintext highlighter-rouge">"blastn"</code>)</td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">parameters</code></td>
    <td>
<a href="#parameter-parameters">その他のオプション指定</a> (例: <code class="language-plaintext highlighter-rouge">"-v 100 -b 100 -e 10 -F F -W 11"</code>)</td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">format</code></td>
      <td>
<a href="#parameter-format">応答データの形式</a> (例: <code class="language-plaintext highlighter-rouge">"text"</code>, <code class="language-plaintext highlighter-rouge">"json"</code>)</td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">result</code></td>
    <td>
<a href="#parameter-result">結果通知方法</a> (例: <code class="language-plaintext highlighter-rouge">"www"</code>, <code class="language-plaintext highlighter-rouge">"mail"</code>)</td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">address</code></td>
    <td><a href="#parameter-address">メールアドレス</a></td>
    </tr>
    <tr>
    <td colspan="2">処理内容</td>
    <td>BLAST検索 のジョブをキューに投入する。</td>
    </tr>
    <tr>
    <td rowspan="2" class="borderbtm">HTTP レスポンス</td>
    <td>成功した場合</td>
    <td>
<a href="#parameter-Request-ID">Request ID</a> を含むジョブ情報</td>
    </tr>
    <tr>
    <td>失敗した場合</td>
      <td>HTTP ステータス <em>4xx</em>
</td>
    </tr>
  </tbody>
</table>

#### 処理の流れ <a name="処理の流れ"></a>

  1. 入力値を検証します。  
      入力値エラーが見つかった場合は、処理を中断して `HTTP ステータス 400 Bad Request` を返します。
  2. BLAST検索 のジョブをキューに投入します。
  3. キューに投入されたジョブの情報を、 `format` で指定された形式にして、返します。  
      ただし、利用不可能な `format` 値だった場合は `HTTP ステータス 404 Not Found` を返します。

#### 入力値の検証内容 <a name="入力値の検証内容"></a>

<table>
  <tbody>
    <tr>
      <th class="first">
<a href="#parameter-datasets">datasets</a><br>(省略可能)</th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>未定義の値が指定された場合、入力値エラーです。<br>
          ※現在、未使用。 <code class="language-plaintext highlighter-rouge">database</code> との整合性チェックは行なっていません。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-database">database</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>必須チェック</li>
        <li>データベース名を空白区切りで並べた値以外は、入力値エラーです。データベース名は英字または <code class="language-plaintext highlighter-rouge">"_"</code> のみです。<br>
          例: <code class="language-plaintext highlighter-rouge">"hum"</code> や <code class="language-plaintext highlighter-rouge">"hum pri"</code> など。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-program">program</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>必須チェック</li>
        <li>未定義の値が指定された場合、入力値エラーです。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-format">format</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>必須チェック</li>
        <li>未定義の値が指定された場合、入力値エラーです。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first">
<a href="#parameter-parameters">parameters</a><br>(省略可能)</th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>オプション指定とその設定値を空白区切りで並べた値以外は、入力値エラーです。</li>
        <li>指定可能なオプション以外は、入力値エラーです。指定可能なオプションは、 <code class="language-plaintext highlighter-rouge">program</code> 値に応じて次の通りです。
          <ul class="decimal bottom_space">
            <li>
<code class="language-plaintext highlighter-rouge">program</code> 値が <code class="language-plaintext highlighter-rouge">"megablast"</code> の場合:<br>
                <code class="language-plaintext highlighter-rouge">ADEFGHIJLMNPRSTUVWXYZbefglmnpqrstvyz</code> 以外のオプション指定を含む場合は、入力値エラーです。<br>
                例: <code class="language-plaintext highlighter-rouge">"-A"</code> は正常値ですが、 <code class="language-plaintext highlighter-rouge">"-B"</code> は入力値エラー。</li>
          <li>
<code class="language-plaintext highlighter-rouge">program</code> 値がそれ以外の場合:<br>
                <code class="language-plaintext highlighter-rouge">ABCDEFGIJKLMPQSTUVWXYZbefglmnqrstvwyz</code> 以外のオプション指定を含む場合は、入力値エラーです。<br>
                例: <code class="language-plaintext highlighter-rouge">"-B"</code> は正常値ですが、 <code class="language-plaintext highlighter-rouge">"-H"</code> は入力値エラー。</li>
          </ul>
        </li>
        <li>オプションの設定値は整数値または、英数字およびカンマ区切り英数字です。<br>
          例: <code class="language-plaintext highlighter-rouge">"-1"</code> 、 <code class="language-plaintext highlighter-rouge">"foo,bar"</code> など。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-result">result</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>必須チェック</li>
        <li>未定義の値が指定された場合、入力値エラーです。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-address">address</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>
<code class="language-plaintext highlighter-rouge">result</code> 値が <code class="language-plaintext highlighter-rouge">"mail"</code> の場合は必須チェック</li>
        <li>メールアドレスの形式以外は、入力値エラーです。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### 応答データの内容 <a name="応答データの内容"></a>

正常終了した場合
: 
  - HTTP ステータスが `200` 等の「成功」を示す値です。
  - `requestId` に「リクエストID」が対応付けられた情報を返します。
  - その他、 `current-time` (現在時刻) やリクエスト情報を含むことがありますが、書式は随時更新いたします。<br>実行の成否判定のためには HTTP ステータスを利用してください。

異常終了した場合
: 
  - HTTP ステータスが `400` 等の「クライアントエラー」を示す値です。
  - 応答データの中からキー `error-messages` で取得できるエラーメッセージ情報には、入力値エラーとなったパラメーター名の情報等が含まれます。
  - その他、リクエスト情報やエラーの原因などの情報を含むことがありますが、書式は随時更新いたします。<br>実行の成否判定のためには HTTP ステータスを利用してください。

#### 入出力データの例<a name="uripost-example"></a>

入力値の例

<table>
  <thead>
    <tr>
      <th>HTTP パラメーター</th>
      <th>入力値</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">address</code></td>
      <td><code class="language-plaintext highlighter-rouge">""</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">database</code></td>
      <td><code class="language-plaintext highlighter-rouge">"hum"</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">datasets</code></td>
      <td><code class="language-plaintext highlighter-rouge">"ddbjall"</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">format</code></td>
      <td><code class="language-plaintext highlighter-rouge">"json"</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">parameters</code></td>
      <td><code class="language-plaintext highlighter-rouge">" -v 100 -b 100 -e 10 -F F -W 11"</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">program</code></td>
      <td><code class="language-plaintext highlighter-rouge">"blastn"</code></td>
    </tr>
    <tr>
  <td><code class="language-plaintext highlighter-rouge">querySequence</code></td>
  <td>
    <pre><code class="language-plaintext highlighter-rouge">&gt;my query sequence 1
    CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
    GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
    GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC</code></pre>
  </td>
  </tr>
  <tr>
  <td><code class="language-plaintext highlighter-rouge">result</code></td>
  <td><code class="language-plaintext highlighter-rouge">"www"</code></td>
    </tr>
  </tbody>
</table>

正常終了した場合の応答データ例

``` 
HTTP ステータス 200
 1 {
 2        "requestId": "wabi_blast_1111-1111-1111-11-111-111111",
 3        "program": "blastn",
 4        "datasets": "ddbjall",
 5        "database": "hum",
 6        "parameters": " -v 100 -b 100 -e 10 -F F -W 11 ",
 7        "current-time": "2013-01-01 12:34:56",
 8        "start-time": "",
 9        "current-state": "" 
10 }
```

``` 
HTTP ステータス 200
 1 <?xml version="1.0" ?>
 2 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 3 <result>
 4   <requestId>wabi_blast_1111-1111-1111-11-111-111111</requestId>
 5   <program>blastn</program>
 6   <datasets>ddbjall</datasets>
 7   <database>hum</database>
 8   <parameters> -v 100 -b 100 -e 10 -F F -W 11 </parameters>
 9   <current-time>2013-01-01 12:34:56</current-time>
10   <start-time></start-time>
11   <current-state></current-state>
12 </result>
```

入力値エラーの場合の応答データ例

``` 
HTTP ステータス 400
 1    {
 2    "status": "illegal-arguments",
 3    "message": "Illegal arguments.",
 4    "format": null,
 5    "program": "blastn",
 6    "datasets": "ddbjall",
 7    "database": "hum",
 8    "parameters": null,
 9    "querySequence": ">my query sequence 1\nCACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA\nGCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG\nGTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC\n",
10    "result": "",
11    "address": null,
12    "current-time": "2013-01-01 12:34:56",
13    "error-messages": [
14        "Required: (result)" 
15    ],
16    "error-message": "BAD_REQUEST (null)" 
17    }
```

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h4 class="toggle-content-btn"><a href="javascript:void(0)">利用例</a></h4>
<div class="accordion-content">Java で SpringFramework の RESTクライアント を使う場合:
    <script src="https://gist.github.com/ddbj-repo/ec96049ec11c1d22303d9fcdea9f70cd.js"></script>

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

### URI GET /blast/{Request-ID}?info=status (検索ジョブの状態確認)<a name="URI_GET_status"></a>

指定された [Request ID](#parameter-Request-ID) の [ジョブの現在の状態](#search-status)
を返します。

<table>
  <thead>
    <tr>
      <th colspan="2">項目</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
  <td colspan="2">HTTP メソッド</td>
  <td><code class="language-plaintext highlighter-rouge">GET</code></td>
    </tr>
    <tr>
  <td colspan="2">URI</td>
  <td>
<code class="language-plaintext highlighter-rouge">"/blast/"</code> + <a href="#parameter-Request-ID">Request ID</a> + HTTP パラメーター
            (例: <code class="language-plaintext highlighter-rouge">"/blast/wabi_blast_1111-1111-1111-11-111-111111?info=status"</code>)</td>
    </tr>
    <tr>
  <td rowspan="2" class="borderbtm">HTTP パラメーター</td>
  <td>
<code class="language-plaintext highlighter-rouge">info</code> (デフォルト値 = <code class="language-plaintext highlighter-rouge">"status"</code>)</td>
  <td>
<a href="#parameter-info">ジョブ情報の種類</a> (例: <code class="language-plaintext highlighter-rouge">"status"</code>, <code class="language-plaintext highlighter-rouge">"result"</code>)</td>
    </tr>
    <tr>
  <td>
<code class="language-plaintext highlighter-rouge">format</code> (デフォルト値 = <code class="language-plaintext highlighter-rouge">"text"</code>)</td>
  <td>
<a href="#parameter-format">応答データの形式</a> (例: <code class="language-plaintext highlighter-rouge">"text"</code>, <code class="language-plaintext highlighter-rouge">"json"</code>)</td>
    </tr>
  </tbody>
</table>

#### 処理の流れ <a name="処理の流れ"></a>

1. 入力値を検証します。  
    入力値エラーが見つかった場合は、処理を中断して `HTTP ステータス 400 Bad Request` を返します。
2. 指定された [Request ID](#parameter-Request-ID) に対するジョブ情報を取得して、
    [現在の状態](#search-status) 情報を取得します。  
    検索結果の保存期間を過ぎている場合など、ジョブ情報が見つからなかった場合には、 HTTP ステータス 404 を返します。
3. 取得した [現在の状態](#search-status) 情報を `format` で指定された形式に整形して返します。  
    ただし、利用不可能な `format` 値だった場合は `HTTP ステータス 404 Not Found` を返します。

#### 入力値の検証内容 <a name="入力値の検証内容"></a>

<table>
  <tbody>
    <tr>
      <th class="first"><a href="#parameter-Request-ID">requestId</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>必須チェック</li>
        <li>英数字、 <code class="language-plaintext highlighter-rouge">"-"</code> 、 <code class="language-plaintext highlighter-rouge">"_"</code> 以外を含む場合、入力値エラーです。</li>
          <li>実在する <a href="#parameter-Request-ID">Request ID</a> 以外の場合、入力値エラーです。<br>
            一定日数を超えた検索結果は破棄されていますが、その場合も入力値エラーとして扱われます。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-format">format</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>必須チェック</li>
        <li>未定義の値の場合、入力値エラーです。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-imageId">imageId</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>何も指定しないこと。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-info">info</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>
<code class="language-plaintext highlighter-rouge">"status"</code> を指定すること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### 応答データの内容 <a name="応答データの内容"></a>

正常終了した場合
: 
  - HTTP ステータスが `200` 等の「成功」を示す値です。
  - `status` に「[現在の状態](#search-status)」が対応付けられた情報を返します。
  - その他、 `current-time` (現在時刻) やリクエスト情報を含みますが、書式は随時更新いたします。<br>実行の成否判定のためには HTTP ステータスを利用してください。

異常終了した場合
: 
  - HTTP ステータスが `400` 等の「クライアントエラー」を示す値です。
  - 応答データの中からキー `error-messages` で取得できるエラーメッセージ情報には、入力値エラーとなったパラメーター名の情報等が含まれます。
  - その他、リクエスト情報やエラーの原因などの情報を含みますが、書式は随時更新いたします。<br>実行の成否判定のためには HTTP ステータスを利用してください。

#### 入出力データの例 <a name="入出力データの例"></a>

入力値の例

| HTTP パラメーター | 入力値        |
| ----------- | ---------- |
| `format`    | `"json"`   |
| `result`    | `"www"`    |
| `info`      | `"status"` |

正常終了した場合の応答データ例

``` 
HTTP ステータス 200
1 request-ID: wabi_blast_1111-1111-1111-11-111-111111
2 status: finished
3 current-time: 2013-01-01 12:34:56
4 system-info:
5 stdout
```

``` 
HTTP ステータス 200
1{
2        "request-ID": "wabi_blast_1111-1111-1111-11-111-111111",
3        "status": "finished",
4        "current-time": "2013-01-01 12:34:56",
5        "system-info": "\nstdout" 
6}
```

``` 
HTTP ステータス 200
1<?xml version="1.0" ?>
2<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
3<result>
4  <request-ID>wabi_blast_1111-1111-1111-11-111-111111</request-ID>
5  <status>finished</status>
6  <current-time>2013-01-01 12:34:56</current-time>
7  <system-info>stdout</system-info>
8</result>
```

入力値エラーの場合の応答データ例

``` 
HTTP ステータス 400
 1{
 2  "status": "illegal-arguments",
 3  "message": "Illegal arguments.",
 4  "requestId": "wabi_blast_1111-1111-1111-11-111-111111",
 5  "format": "json",
 6  "imageId": null,
 7  "info": "status",
 8  "current-time": "2013-01-01 12:34:56",
 9  "error-messages": [
10          "No such data: (requestId)" 
11  ],
12  "error-message": "BAD_REQUEST (null)" 
13}
```

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h4 class="toggle-content-btn"><a href="javascript:void(0)">利用例</a></h4>
<div class="accordion-content">Java で SpringFramework の RESTクライアント を使う場合:
   <script src="https://gist.github.com/ddbj-repo/4a1ea26e46bebac37cf595eae77e384a.js"></script>

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

### URI GET /blast/{Request-ID}?info=request (検索条件の確認)<a name="URI_GET_request"></a>

指定された [Request ID](#parameter-Request-ID) の検索条件を返します。

<table>
  <thead>
    <tr>
      <th colspan="2">項目</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">HTTP メソッド</td>
      <td><code class="language-plaintext highlighter-rouge">GET</code></td>
    </tr>
    <tr>
      <td colspan="2">URI</td>
      <td>
<code class="language-plaintext highlighter-rouge">"/blast/"</code> + <a href="#parameter-Request-ID">Request ID</a> + <code class="language-plaintext highlighter-rouge">"?info=request"</code> + HTTP パラメーター
                (例: <code class="language-plaintext highlighter-rouge">"/blast/wabi_blast_1111-1111-1111-11-111-111111?info=request"</code>)</td>
    </tr>
    <tr>
      <td>HTTP パラメーター</td>
      <td>
<code class="language-plaintext highlighter-rouge">format</code> (デフォルト値 = <code class="language-plaintext highlighter-rouge">"text"</code>)</td>
      <td>
<a href="#parameter-format">応答データの形式</a> (例: <code class="language-plaintext highlighter-rouge">"text"</code>, <code class="language-plaintext highlighter-rouge">"json"</code>)</td>
    </tr>
  </tbody>
</table>

#### 処理の流れ <a name="処理の流れ"></a>

1. 入力値を検証します。  
    入力値エラーが見つかった場合は、処理を中断して `HTTP ステータス 400 Bad Request` を返します。
2. 指定された [Request ID](#parameter-Request-ID) に対するジョブ情報を取得して、
    [検索条件](#search-criteria) 情報を取得します。  
    検索結果の保存期間を過ぎている場合など、ジョブ情報が見つからなかった場合には、 HTTP ステータス 404 を返します。
3. 取得した [検索条件](#search-criteria) 情報を `format` で指定された形式に整形して返します。  
    ただし、利用不可能な `format` 値だった場合は `HTTP ステータス 404 Not Found` を返します。

#### 入力値の検証内容 <a name="入力値の検証内容"></a>

<table>
    <tbody>
      <tr>
        <th><a href="#parameter-Request-ID">requestId</a></th>
        <td>
          <ul>
            <li>必須チェック</li>
            <li>英数字、 <code class="language-plaintext highlighter-rouge">"-"</code> 、 <code class="language-plaintext highlighter-rouge">"_"</code> 以外を含む場合、入力値エラーです。</li>
            <li>実在する <a href="#parameter-Request-ID">Request ID</a> 以外の場合、入力値エラーです。<br>
              一定日数を超えた検索結果は破棄されていますが、その場合も入力値エラーとして扱われます。</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th><a href="#parameter-format">format</a></th>
        <td>
          <ul>
            <li>必須チェック</li>
            <li>未定義の値の場合、入力値エラーです。</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th><a href="#parameter-imageId">imageId</a></th>
        <td>
          <ul>
            <li>何も指定しないこと。</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th><a href="#parameter-info">info</a></th>
        <td>
          <ul>
            <li>
<code class="language-plaintext highlighter-rouge">"request"</code> を指定すること。</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>

#### 応答データの内容 <a name="応答データの内容"></a>

正常終了した場合
: 
  - HTTP ステータスが `200` 等の「成功」を示す値です。
  - BLAST検索ジョブを投入した際の各パラメーター情報です。
  - 実行の成否判定のためには HTTP ステータスを利用してください。

異常終了した場合
: 
  - HTTP ステータスが `400` 等の「クライアントエラー」を示す値です。
  - 応答データの中からキー `error-messages` で取得できるエラーメッセージ情報には、入力値エラーとなったパラメーター名の情報等が含まれます。
  - 実行の成否判定のためには HTTP ステータスを利用してください。

#### 入出力データの例 <a name="入出力データの例"></a>

入力値の例

| HTTP パラメーター | 入力値             |
| ----------- | --------------- |
| `format`    | `"requestfile"` |
| `info`      | `"request"`     |

正常終了した場合の応答データ例

``` 
HTTP ステータス 200
 1{
 2        "address": "",
 3        "database": "hum",
 4        "datasets": "ddbjall",
 5        "format": "text",
 6        "parameters": " -v 100 -b 100 -e 10 -F F -W 11 ",
 7        "program": "blastn",
 8        "querySequence": ">my query sequence 1\nCACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA\nGCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG\nGTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC\n",
 9        "result": "www" 
10}
```

入力値エラーの場合の応答データ例

``` 
HTTP ステータス 404
 1{
 2        "Message": "Unexpected error ( Results of your request id have been NOT FOUND.)",
 3        "requestId": "wabi_blast_1111-1111-1111-11-111-111111",
 4        "format": "text",
 5        "imageId": null,
 6        "info": "result",
 7        "current-time": "2013-01-01 12:34:56",
 8        "error-messages": [
 9                "No such data: (requestId)" 
10        ],
11        "error-message": "NOT_FOUND (null)" 
12}
```

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h4 class="toggle-content-btn"><a href="javascript:void(0)">利用例</a></h4>
<div class="accordion-content">Java で SpringFramework の RESTクライアント を使う場合:
   <script src="https://gist.github.com/ddbj-repo/d3ff7fbc9a66733ab164f669e4bcb88d.js"></script>

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

### URI GET /blast/{Request-ID}?info=result (検索結果の閲覧)<a name="URI_GET_result"></a>

指定された [Request ID](#parameter-Request-ID) の検索結果を返します。

<table>
  <thead>
    <tr>
      <th colspan="2">項目</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">HTTP メソッド</td>
      <td><code class="language-plaintext highlighter-rouge">GET</code></td>
    </tr>
    <tr>
      <td colspan="2">URI</td>
      <td>
<code class="language-plaintext highlighter-rouge">"/blast/"</code> + <a href="#parameter-Request-ID">Request ID</a> + <code class="language-plaintext highlighter-rouge">"?info=result"</code> + HTTP パラメーター
                (例: <code class="language-plaintext highlighter-rouge">"/blast/wabi_blast_1111-1111-1111-11-111-111111?info=result"</code>)</td>
    </tr>
    <tr>
      <td>HTTP パラメーター</td>
      <td>
<code class="language-plaintext highlighter-rouge">format</code> (デフォルト値 = <code class="language-plaintext highlighter-rouge">"text"</code>)</td>
      <td>
<a href="#parameter-format">応答データの形式</a> (例: <code class="language-plaintext highlighter-rouge">"text"</code>, <code class="language-plaintext highlighter-rouge">"json"</code>)</td>
    </tr>
  </tbody>
</table>

#### 処理の流れ <a name="処理の流れ"></a>

1. 入力値を検証します。  
    入力値エラーが見つかった場合は、処理を中断して `HTTP ステータス 400 Bad Request` を返します。
2. 指定された [Request ID](#parameter-Request-ID) に対するジョブ情報を取得して、
    [検索結果](#search-result) 情報を取得します。  
    検索結果の保存期間を過ぎていてジョブ情報が見つからなかった場合や検索処理が完了していなくて検索結果情報を取得できなかった場合、には、
    HTTP ステータス 400, 404 等を返します。
3. 取得した [検索結果](#search-result) 情報を `format` で指定された形式に整形して返します。  
    ただし、利用不可能な `format` 値だった場合は `HTTP ステータス 404 Not Found` を返します。

#### 入力値の検証内容 <a name="入力値の検証内容"></a>

<table>
  <tbody>
    <tr>
      <th class="first"><a href="#parameter-Request-ID">requestId</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>必須チェック</li>
          <li>英数字、 <code class="language-plaintext highlighter-rouge">"-"</code> 、 <code class="language-plaintext highlighter-rouge">"_"</code> 以外を含む場合、入力値エラーです。</li>
          <li>実在する <a href="#parameter-Request-ID">Request ID</a> 以外の場合、入力値エラーです。<br>
            一定日数を超えた検索結果は破棄されていますが、その場合も入力値エラーとして扱われます。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-format"> format</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>必須チェック</li>
          <li>未定義の値の場合、入力値エラーです。</li>
        </ul>
      </td>
    </tr>
      <tr>
      <th class="first"><a href="#parameter-imageId">imageId</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>何も指定しないこと。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-info">info</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>
<code class="language-plaintext highlighter-rouge">"result"</code> を指定すること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### 応答データの内容 <a name="応答データの内容"></a>

正常終了した場合
: 
  - HTTP ステータスが `200` 等の「成功」を示す値です。
  - BLAST 検索が出力した結果ファイルの内容を返します。
  - 実行の成否判定のためには HTTP ステータスを利用してください。

異常終了した場合
: 
  - HTTP ステータスが `400` 等の「クライアントエラー」を示す値です。
  - 応答データの中からキー `error-messages` で取得できるエラーメッセージ情報には、入力値エラーとなったパラメーター名の情報等が含まれます。
  - 実行の成否判定のためには HTTP ステータスを利用してください。

#### 入出力データの例 <a name="入出力データの例"></a>

入力値の例

| HTTP パラメーター | 入力値         |
| ----------- | ----------- |
| `format`    | `"bigfile"` |
| `info`      | `"result"`  |

正常終了した場合の応答データ例

``` 
HTTP ステータス 200
HTTP ステータス 200
 1 BLASTN 2.2.25 [Feb-01-2011]
 2 
 3 Reference: Altschul, Stephen F., Thomas L. Madden, Alejandro A. Schaffer,
 4 Jinghui Zhang, Zheng Zhang, Webb Miller, and David J. Lipman (1997),
 5 "Gapped BLAST and PSI-BLAST: a new generation of protein database search
 6 programs",  Nucleic Acids Res. 25:3389-3402.
 7 
 8 Query= AB000095|AB000095.1 Homo sapiens mRNA for hepatocyte growth
 9 factor activator inhibitor, complete cds.
10          (1740 letters)
11 
12 Database: hum
13            572,091 sequences; 5,019,832,159 total letters
14 
15 Searching..................................................done
16 
17                                                                  Score    E
18 Sequences producing significant alignments:                      (bits) Value
19 
20 AB000095|AB000095.1 Homo sapiens mRNA for hepatocyte growth fact...  3449   0.0
21 BC018702|BC018702.1 Homo sapiens serine peptidase inhibitor, Kun...  3435   0.0
22 BC004140|BC004140.1 Homo sapiens serine peptidase inhibitor, Kun...  3190   0.0
23 BT007425|BT007425.1 Homo sapiens serine protease inhibitor, Kuni...  3053   0.0
24 AY358969|AY358969.1 Homo sapiens clone DNA35880 HAI-1 (UNQ223) m...  2145   0.0
25 AY296715|AY296715.1 Homo sapiens hepatocyte growth factor activa...  1984   0.0

(後略)      
```

入力値エラーの場合の応答データ例

``` 
HTTP ステータス 400
 1{
 2        "Message": "Error ( Results of your request id have been NOT FOUND, or still running.)",
 3        "requestId": "wabi_blast_1111-1111-1111-11-111-111111",
 4        "format": "text",
 5        "imageId": null,
 6        "info": "result",
 7        "current-time": "2013-01-01 12:34:56",
 8        "error-messages": [
 9                "No such data: (requestId)" 
10        ],
11        "error-message": "NOT_FOUND (null)" 
12}
```

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h4 class="toggle-content-btn"><a href="javascript:void(0)">利用例</a></h4>
<div class="accordion-content">Java で SpringFramework の RESTクライアント を使う場合:
   <script src="https://gist.github.com/ddbj-repo/af6f2a4165385224de18cc5968568848.js"></script>

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

### URI GET /blast/{Request-ID}?imageId={Image-ID} (検索処理によって出力された画像データの取得)<a name="URI_GET_imageid">

指定された [RequestID](#parameter-Request-ID) の検索処理が出力した画像データを返します。

<table>
  <thead>
    <tr>
      <th colspan="2">項目</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">HTTP メソッド</td>
      <td><code class="language-plaintext highlighter-rouge">GET</code></td>
    </tr>
    <tr>
      <td colspan="2">URI</td>
      <td>
<code class="language-plaintext highlighter-rouge">"/blast/"</code> + <a href="#parameter-Request-ID">RequestID</a> + <code class="language-plaintext highlighter-rouge">"?imageId="</code> + <em>画像ID</em> + HTTP パラメーター
                (例: <code class="language-plaintext highlighter-rouge">"/blast/wabi_blast_1111-1111-1111-11-111-111111?imageId=1"</code>)</td>
    </tr>
    <tr>
      <td>HTTP パラメーター</td>
      <td>
<code class="language-plaintext highlighter-rouge">format</code> (デフォルト値 = <code class="language-plaintext highlighter-rouge">"text"</code>)</td>
      <td>
<a href="#parameter-format">応答データの形式</a> (例: <code class="language-plaintext highlighter-rouge">"imagefile"</code>)</td>
    </tr>
  </tbody>
</table>

#### 処理の流れ <a name="処理の流れ"></a>

1. 入力値を検証します。  
    入力値エラーが見つかった場合は、処理を中断して `HTTP ステータス 400 Bad Request` を返します。
2. 指定された [RequestID](#parameter-Request-ID) に対するジョブ情報を取得して、 [BLAST
    検索処理が出力した画像データ](#search-image) を取得します。  
    検索結果の保存期間を過ぎていてジョブ情報が見つからなかった場合や検索処理が完了していなくて検索結果情報を取得できなかった場合、には、
    HTTP ステータス 400, 404 等を返します。
3. 取得した [BLAST 検索処理が出力した画像データ](#search-image) 情報を `format`
    で指定された形式で返します。  
    ただし、利用不可能な `format` 値だった場合は `HTTP ステータス 404 Not Found` を返します。

#### 入力値の検証内容 <a name="入力値の検証内容"></a>

<table>
  <tbody>
    <tr>
      <th class="first"><a href="#parameter-Request-ID">requestId</a></th>
      <td class="second">
        <ul class="disc bottom_space">               
          <li>必須チェック</li>
          <li>英数字、 <code class="language-plaintext highlighter-rouge">"-"</code> 、 <code class="language-plaintext highlighter-rouge">"_"</code> 以外を含む場合、入力値エラーです。</li>
          <li>実在する <a href="#parameter-Request-ID">requestId</a> 以外の場合、入力値エラーです。<br>
            一定日数を超えた検索結果は破棄されていますが、その場合も入力値エラーとして扱われます。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-format">format</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>
<code class="language-plaintext highlighter-rouge">"imagefile"</code> 以外の場合は、入力値エラーです。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-imageId">imageId</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>数字以外の場合は、入力値エラーです。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-info">info</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>未定義の値を指定した場合は、入力値エラーです。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### 応答データの内容 <a name="応答データの内容"></a>

正常終了した場合
: 
  - HTTP ステータスが `200` 等の「成功」を示す値です。
  - BLAST 検索処理が出力した画像データを返します。
  - 実行の成否判定のためには HTTP ステータスを利用してください。

異常終了した場合
: 
  - HTTP ステータスが `400` 等の「クライアントエラー」を示す値です。
  - 応答データの中からキー `error-messages` で取得できるエラーメッセージ情報には、入力値エラーとなったパラメーター名の情報等が含まれます。
  - 実行の成否判定のためには HTTP ステータスを利用してください。

#### 入出力データの例 <a name="入出力データの例"></a>

入力値の例

| HTTP パラメーター | 入力値     |
| ----------- | ------------- |
| `imageId`   | `"1"`         |
| `format`    | `"imagefile"` |
| `info`      | `""`          |

正常終了した場合の応答データ例

``` 
HTTP ステータス 200
(画像データ)
```

入力値エラーの場合の応答データ例

``` 
HTTP ステータス 404
 1 {
 2        "Message": "Error ( Blast image file of your request id have been NOT FOUND, or still running.)",
 3         "requestId": "wabi_blast_1111-1111-1111-11-111-111111",
 4         "format": "text",
 5         "imageId": null,
 6         "info": "result",
 7         "current-time": "2013-01-01 12:34:56",
 8         "error-messages": [
 9                 "No such data: (requestId)" 
10         ],
11         "error-message": "NOT_FOUND (null)" 
12 }
```

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h4 class="toggle-content-btn"><a href="javascript:void(0)">利用例</a></h4>
<div class="accordion-content">Java で HttpURLConnection を使う場合:
   <script src="https://gist.github.com/ddbj-repo/bd58a6ca09c2d380d5ceafd4905a0e2e.js"></script>
   ~~Java で SpringFramework の RESTクライアント を使う場合:~~

<span class="red">※既知の問題のため、 RESTクライアント によっては画像データの変換に失敗します。</span>
<script src="https://gist.github.com/ddbj-repo/1db03f437b50827f7e7474846ad5979a.js"></script>

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

### URI GET /blast/help/{Help-Command} (ヘルプ情報の閲覧)<a name="URI_GET_help"></a>

WABI BLAST のヘルプ情報を返します。

<table>
  <thead>
    <tr>
      <th colspan="2">項目</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">HTTP メソッド</td>
      <td><code class="language-plaintext highlighter-rouge">GET</code></td>
    </tr>
    <tr>
      <td colspan="2">URI</td>
      <td>
<code class="language-plaintext highlighter-rouge">"/blast/help/"</code> + Help-Command + HTTP パラメーター (例: <code class="language-plaintext highlighter-rouge">"/blast/help/list_program?format=json"</code>)</td>
    </tr>
    <tr>
      <td rowspan="2" class="borderbtm">HTTP パラメーター</td>
      <td>
<code class="language-plaintext highlighter-rouge">format</code> (デフォルト値 = <code class="language-plaintext highlighter-rouge">"text"</code>)</td>
      <td>
<a href="#parameter-format">応答データの形式</a> (例: <code class="language-plaintext highlighter-rouge">"text"</code>, <code class="language-plaintext highlighter-rouge">"json"</code>)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">program</code></td>
      <td>
<a href="#parameter-program">BLAST プログラム</a> (例: <code class="language-plaintext highlighter-rouge">"blastn"</code>)</td>
    </tr>
  </tbody>
</table>

#### Help-Command <a name="Help-Command"></a>

<table>
  <thead>
    <tr>
    <th>Help-Command 等</th>
    <th>その他の HTTPパラメーター</th>
    <th>参照できるヘルプ情報</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2"><code class="language-plaintext highlighter-rouge">list_datasets</code></td>
      <td>パラメーター <a href="#parameter-datasets">データセット</a> の定義値の一覧</td>
    </tr>
    <tr>
      <td colspan="2"><code class="language-plaintext highlighter-rouge">list_database</code></td>
      <td>パラメーター <a href="#parameter-database">データベース</a> の定義値の一覧</td>
    </tr>
    <tr>
      <td colspan="2"><code class="language-plaintext highlighter-rouge">list_program</code></td>
      <td>パラメーター <a href="#parameter-program">BLASTプログラム</a> の定義値の一覧</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">list_parameters</code></td>
      <td>
<code class="language-plaintext highlighter-rouge">program</code> = パラメーター <a href="#parameter-program">BLASTプログラム</a> を指定</td>
      <td>パラメーター <a href="#parameter-parameters">BLASTプログラムのオプション指定</a> の定義値の一覧</td>
    </tr>
    <tr>
      <td colspan="2"><code class="language-plaintext highlighter-rouge">list_format</code></td>
      <td>パラメーター <a href="#parameter-format">応答データの形式</a> の定義値の一覧</td>
    </tr>
    <tr>
      <td colspan="2"><code class="language-plaintext highlighter-rouge">list_result</code></td>
      <td>パラメーター <a href="#parameter-result">結果取得方法</a> の定義値の一覧</td>
    </tr>
    <tr>
      <td colspan="2"><code class="language-plaintext highlighter-rouge">list_info</code></td>
      <td>パラメーター <a href="#parameter-info">参照するジョブ情報の種類</a> の定義値の一覧</td>
    </tr>
  </tbody>
</table>

#### 応答データの内容 <a name="応答データの内容"></a>

正常終了した場合
: 
  - 指定されたヘルプ情報を返します。

異常終了した場合
: 
  - 指定可能な Help-Command 等の情報を返します。

#### 入出力データの例 <a name="入出力データの例"></a>

入力値の例

| Help-Command 等 | 入力値             |
| -------------- | --------------- |
| `Help-Command` | `"list_result"` |
| `format`       | `"json"`        |

正常終了した場合の応答データ例

``` 
1 {
2     "result": [
3         "www",
4         "mail" 
5     ]
6 }
```

異常終了の場合の応答データ例

``` 
 1 {
 2     "help_commands": [
 3         "list_datasets",
 4         "list_database",
 5         "list_program",
 6         "list_parameters",
 7         "list_format",
 8         "list_result",
 9         "list_info" 
10     ],
11     "format": [
12         "text",
13         "json",
14         "xml" 
15     ]
16 }
```

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h4 class="toggle-content-btn"><a href="javascript:void(0)">利用例</a></h4>
<div class="accordion-content">Java で SpringFramework の RESTクライアント を使う場合:
   <script src="https://gist.github.com/ddbj-repo/324515b540e438c23e5589dfa40f9aed.js"></script>

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

## WABI BLAST パラメータ <a name="parameter"></a>

### requestId：Request ID<a name="parameter-Request-ID"></a> 

WABI に登録されている全ての [BLAST検索ジョブ](#search-job)
の中から処理対象としているジョブを識別するための文字列です。  
ジョブをキューに登録した際に WABI からの [応答データとして返される](#uripost-example) ので、 WABI
を利用するプログラム側で必ず控えてください。

次のような場合に必要になります。

  - [検索ジョブの状態確認](#URI_GET_status)
  - [検索条件の確認](#URI_GET_request)
  - [検索結果の閲覧](#URI_GET_result)

Request ID の例:

``` 
wabi_blast_1111-1111-1111-11-111-111111
```

参考：[BLAST ヘルプ Request ID](/blast-help.html#request%20id)

### querySequence：検索配列データ<a name="parameter-querySequence"></a> 

  - FASTA 形式で検索配列を指定してください。
  - 配列名を付ける場合は、先頭に `">"` を付けた配列名の行を各配列の前においてください。
  - 検索する配列が複数の場合は、各配列を区別するために配列名が必要です (multi FASTA 形式) 。  
    <span class="red">※配列数を増やしても並列度は上がりません。ジョブ管理エンジンによる負荷分散も考慮すると、 Web
    API として利用するならば配列数は少なめにすることを推奨します。</span>
  - 検索する配列が一つの場合は、配列名は必要ありません。

FASTA 形式の例

``` 
>my query sequence 1
CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC
```

複数配列の例 (multi FASTA 形式)

``` 
>my query sequence 1
CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC
>my query sequence 2
GGCCAGGGCACCCAGTCTGAGAACAGCTGCACCCGCTTCCCAGGCAACCTGCCTCACATG
CTTCGAGACCTCCGAGATGCCTTCAGCAGAGTGAAGACTTTCTTTCAAATGAAGGATCAG
CTGGACAACATATTGTTAAAGGAGTCCTTGCTGGAGGACTTTAAG
>my query sequence 3
ATGGGTCTCACCTCCCAACTGCTTCCCCCTCTGTTCTTCCTGCTAGCATGTGCCGGCAAC
TTTGCCCACGGACACAACTGCCATATCGCCTTACGGGAGATCATCGAAACTCTGAACAGC
CTCACAGAGCAGAAGACTCTGTGCACCAAGTTGACCATAACGGAC
```
{::options parse_block_html="true" /}
<div class="attention red">
配列サイズが巨大な場合や配列数が多い場合など、次のような理由で結果を正常に取得できないことがあります。  
そのような場合は、配列数を少なくするか配列を短くする等して再度お試しください。

  - メモリー枯渇で異常終了となる。
  - 検索時間が長くなり過ぎてタイムアウトする。
</div>

参考：[BLAST ヘルプ Query:検索配列名，検索配列データ]({{site.baseurl}}/services/blast-help.html#query)

### datasets：データセット<a name="parameter-datasets"></a> 

データセットは、 Web画面のフォームで入力を補助するために用意されていますが、現在、 WABI では使われていません。

データセットに指定できる入力値と、各入力値の意味は次の通りです。  
※ 最新の値は、こちらの API [GET /blast/help/{Help-Command}
(ヘルプ情報の閲覧)](#URI_GET_help) を利用して参照できます。

| データセット値          | 説明                                                 |
| ---------------- | -------------------------------------------------- |
| `ddbjall`        | DDBJ ALL (DDBJ periodical release + daily updates) |
| `ddbjnew`        | DDBJ New (DDBJ daily updates)                      |
| `16S_rRNA`       | 16S rRNA (Prokaryotes)                             |
| `uniprot_all`    | UniProt (Swiss-Prot + TrEMBL)                      |
| `uniprot_sprot`  | UniProt (Swiss-Prot)                               |
| `uniprot_trembl` | UniProt (TrEMBL)                                   |
| `patent_protein` | Patent                                             |
| `dadall`         | DAD (periodical release + daily updates)           |
| `dadnew`         | DAD (daily updates)                                |
| `refseq_na`      | RefSeq NA                                          |
| `refseq_aa`      | RefSeq AA                                          |

参考：[BLAST ヘルプ 塩基配列（データベース，DIVISION）]({{site.baseurl}}/services/blast-help.html#nucleotide)

### database：データベース <a name="parameter-database"></a> 

#### 塩基配列データベース <a name="塩基配列データベース"></a>

塩基配列データベース値の例と意味は次の通りです。  
※ 最新の値は、こちらの API [GET /blast/help/{Help-Command}
(ヘルプ情報の閲覧)](#URI_GET_help) を利用して参照できます。

<table>
  <thead>
    <tr>
      <th colspan="2">説明</th>
      <th>データベース値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DDBJ ALL</td>
      <td>DDBJ 定期リリース + 新着データ</td>
      <td>(下表を参照)</td>
    </tr>
    <tr>
      <td>DDBJ New</td>
      <td>DDBJ 定期リリース後の新着データ</td>
      <td>(下表の値に接頭辞 <code class="language-plaintext highlighter-rouge">"new_"</code> を付加)</td>
    </tr>
    <tr>
      <td>16S rRNA</td>
      <td>DDBJ 定期リリースから 16S rRNA 配列を取り出したデータ</td>
      <td><code class="language-plaintext highlighter-rouge">16S_rRNA</code></td>
    </tr>
    <tr>
      <td>RefSeq NA</td>
      <td>RefSeq (Genomics + RNA)</td>
      <td>(下表を参照)</td>
    </tr>
  </tbody>
</table>

DDBJ ALL, DDBJ NEW データベース値

|  Standard divisions  |    |    |
| ---- | ---- | ---- |
|  `hum`, `new_hum`  | Human |  ヒト  |
|  `pri`, `new_pri`  |  Primates  |  霊長類 （ヒトを除く）  |
|  `rod`, `new_rod`  |  Rodents  |  齧歯類  |
|  `mam`, `new_mam`  |  Mammals  |  哺乳類 （ヒト、霊長類、齧歯類を除く）  |
|  `vrt`, `new_vrt`  |  Vertebrates  |  脊椎動物 （ヒト、霊長類、齧歯類、哺乳類を除く）  |
|  `inv`, `new_inv`  |  Invertebrates  |  無脊椎動物  |
|  `pln`, `new_pln`  |  Plants  |  植物・酵母・藻類  |
|  `bct`, `new_bct`  |  Bacteria  |  バクテリア（原核生物）  |
|  `vrl`, `new_vrl`  |  Viruses  |  ウイルス  |
|  `phg`, `new_phg`  |  Phages  |  バクテリオファージ  |
|  `syn`, `new_syn`  |  Synthetic DNAs  |  合成配列 （合成遺伝子） (SYN)  |
|  `env`, `new_env`  |  ENV  |  環境サンプル (environmental samples)  |

|  High throughput divisions  |    |    |
| ---- | ---- | ---- |
|  `htc`, `new_htc`  |  HTC  |  High Throughput cDNAs  |
|  `htg`, `new_htg`  |  HTG  |  High Throughput Genomic sequences  |
|  `tsa`, `new_tsa`  |  TSA  |  Transcriptome Shotgun Assembly  |

|  EST divisions  |    |    |
| ---- | ---- | ---- |
|  `est_atha`, `new_est_atha`  |  A.thaliana  |  *Arabidopsis thaliana* （シロイヌナズナ）  |
|  `est_btra`, `new_est_btra`  |  B.taurus  |  *Bos taurus* （ウシ）  |
|  `est_cele`, `new_est_cele`  |  C.elegans  |  *Caenorhabditis elegans* （線虫）  |
|  `est_crei`, `new_est_crei`  |  C.reinhardtii  |  *Chlamydomonas reinhardtii* （クラミドモナス）  |
|  `est_cint`, `new_est_cint`  |  C.intestinalis  |  *Ciona intestinalis* （カタユウレイボヤ）  |
|  `est_drer`, `new_est_drer`  |  D.rerio  |  *Danio rerio* （ゼブラフィッシュ）  |
|  `est_ddis`, `new_est_ddis`  |  D.discoideum  |  *Dictyostelium discoideum* （キイロタマホコリカビ）  |
|  `est_dmel`, `new_est_dmel`  |  D.melanogaster  |  *D.melanogaster* （ショウジョウバエ）  |
|  `est_ggal`, `new_est_ggal`  |  G.gallus  |  *Gallus gallus* （ニワトリ）  |
|  `est_gmax`, `new_est_gmax`  |  G.max  |  *Glycine max* （ダイズ）  |
|  `est_hum`, `new_est_hum`  |  H.sapiens  |  *Homo sapiens* （ヒト）  |
|  `est_hvul`, `new_est_hvul`  |  H.vulgare  |  *Hordeum vulgare* （亜種も統合）  |
|  `est_mtru`, `new_est_mtru`  |  M.truncatula  |  *Medicago truncatula* （特殊ライブラリも統合）  |
|  `est_mous`, `new_est_mous`  |  M.musculus  |  *Mus musculus* （ハツカネズミ）  |
|  `est_osat`, `new_est_osat`  |  O.sativa  |  *Oryza sativa* （亜種レベルも統合）  |
|  `est_rnor`, `new_est_rnor`  |  R.norvegicus  |  *Rattus norvegicus* （Rattus sp. も統合）  |
|  `est_slyc`, `new_est_slyc`  |  S.lycopersicum  |  *Solanum lycopersicum* （トマト）  |
|  `est_taes`, `new_est_taes`  |  T.aestivum  |  *Triticum aestivum* （コムギ）  |
|  `est_xlae`, `new_est_xlae`  |  X.laevis  |  *Xenopus laevis* （アフリカツメガエル）  |
|  `est_xtro`, `new_est_xtro`  |  X.tropicalis  |  *Xenopus tropicalis* （アフリカツメガエル）  |
|  `est_zmay`, `new_est_zmay`  |  Z.mays  |  *Zea mays* （トウモロコシ）  |
|  `est_rest`, `new_est_rest`  |  Others  |  上記以外 （Others）  |

|  その他  |    |    |
| ---- | ---- | ---- |
|  `pat`, `new_pat`  |  Patent  |  特許データ (PAT)  |
|  `una`, `new_una`  |  Unannotated Seq  |  未注釈データ (UNA)  |
|  `gss`, `new_gss`  |  GSS  |  ゲノム研究関連 (genome survey sequences)  |
|  `sts`, `new_sts`  |  STS  |  STS (sequence tagged sites)  |

Refseq NA データベース値

|  RefSeq NA  |    |    |
| ---- | ---- | ---- |
|  `refseq-genomic-fungi`, `refseq-rna-fungi`  |  Fungi  |  菌類  |
|  `refseq-genomic-invertebrate`, `refseq-rna-invertebrate`  |  Invertebrate  |  無脊椎動物  |
|  `refseq-genomic-microbial`, `refseq-rna-microbial`  |  Microbial  |  微生物  |
|  `refseq-genomic-mitochondrion`, `refseq-rna-mitochondrion`  |  Mitochondrion  |  ミトコンドリア  |
|  `refseq-genomic-plant`, `refseq-rna-plant`  |  Plant  |  植物  |
|  `refseq-genomic-plasmid`, `refseq-rna-plasmid`  |  Plasmid  |  プラスミド  |
|  `refseq-genomic-plastid`, `refseq-rna-plastid`  |  Plastid  |  色素体  |
|  `refseq-genomic-protozoa`, `refseq-rna-protozoa`  |  Protozoa  |  原生動物  |
|  `refseq-genomic-vertebrate_mammalian`, `refseq-rna-vertebrate_mammalian`  |  Vertebrate Mammalian  |  脊椎動物 (哺乳類)  |
|  `refseq-genomic-vertebrate_other`, `refseq-rna-vertebrate_other`  |  Vertebrate Other  |  脊椎動物 (その他)  |
|  `refseq-genomic-viral`, `refseq-rna-viral`  |  Viral  |  ウイルス  |
|  `refseq-genomic`  |  RefSeq Genomic (ALL)  |  RefSeq Genomic (ALL) Periodical Release  |
|  `refseq-rna`  |  RefSeq RNA (ALL)  |  RefSeq RNA (ALL) Periodical Release  |
|  `refseq-na-daily`  |  RefSeq Daily Updates  |  RefSeq Daily Updates  |
|  `refseq-na-all`  |  RefSeq ALL (Periodical Release + Daily Updates)  |  RefSeq ALL (Periodical Release + Daily Updates)  |
|  `refseq-model-rna-B_taurus`  |  B. taurus  |  ウシ  |
|  `refseq-model-rna-D_rerio`  |  D. rerio  |  ゼブラフィッシュ  |
|  `refseq-model-rna-H_sapiens`, `refseq-model-genomic-H_sapiens`  |  H. sapiens  |  ヒト  |
|  `refseq-model-rna-M_musculus`  |  M. musculus  |  マウス  |
|  `refseq-model-rna-R_norvegicus`  |  R. norvegicus  |  ラット  |
|  `refseq-model-rna-X_tropicalis`  |  X. tropicalis  |  アフリカツメガエル  |

#### アミノ酸配列データベース <a name="アミノ酸配列データベース"></a>

アミノ酸配列データベース値の例と意味は次の通りです。

|  説明  |    |  データベース値  |
| ---- | ---- | ---- |
|  UniProt (Swiss-Prot + TrEMBL)  |  Swiss-Prot + TrEMBL  |  `uniprot_all`  |
|  UniProt (Swiss-Prot)  |  Swiss-Prot  |  `uniprot_sprot`  |
|  UniProt (TrEMBL)  |  TrEMBL  |  `uniprot_trembl`  |
|  Patent  |  JPO，EPO，USPTO，KIPO の全データ  |  `jpop`, `epop`, `usptop`, `kipop`  |
|  DAD ALL  |  periodical release + daily updates  |  (下表を参照)  |
|  DAD NEW  |  daily updates  |  (下表を参照)  |
|  RefSeq AA  |  RefSeq (Protein)  |  (下表を参照)  |

DAD ALL, DAD NEW データベース値

|  Standard divisions  |    |    |
| ---- | ---- | ---- |
|  `dad_hum`, `dad_new_hum`  |  Human  |  ヒト  |
|  `dad_pri`, `dad_new_pri`  |  Primates  |  霊長類 （ヒトを除く）  |
|  `dad_rod`, `dad_new_rod`  |  Rodents  |  齧歯類  |
|  `dad_mam`, `dad_new_mam`  |  Mammals  |  哺乳類 （ヒト、霊長類、齧歯類を除く）  |
|  `dad_vrt`, `dad_new_vrt`  |  Vertebrates  |  脊椎動物 （ヒト、霊長類、齧歯類、哺乳類を除く）  |
|  `dad_inv`, `dad_new_inv`  |  Invertebrates  |  無脊椎動物  |
|  `dad_pln`, `dad_new_pln`  |  Plants  |  植物・酵母・藻類  |
|  `dad_bct`, `dad_new_bct`  |  Bacteria  |  バクテリア（原核生物）  |
|  `dad_vrl`, `dad_new_vrl`  |  Viruses  |  ウイルス  |
|  `dad_phg`, `dad_new_phg`  |  Phages  |  バクテリオファージ  |
|  `dad_syn`, `dad_new_syn`  |  Synthetic DNAs  |  合成配列 （合成遺伝子） (SYN)  |
|  `dad_env`, `dad_new_env`  |  General  |  環境サンプル (environmental samples)  |

|  High throughput divisions  |    |    |
| ---- | ---- | ---- |
|  `dad_htc`, `dad_new_htc`  |  HTC  |  High Throughput cDNAs  |
|  `dad_htg`, `dad_new_htg`  |  HTG  |  High Throughput Genomic sequences  |
|  `dad_tsa`, `dad_new_tsa`  |  TSA  |  Transcriptome Shotgun Assembly  |

|  EST divisions  |    |    |
| ---- | ---- | ---- |
|  `dad_est_atha`, `dad_new_est_atha`  |  A.thaliana  |  *Arabidopsis thaliana* （シロイヌナズナ）  |
|  `dad_est_btra`, `dad_new_est_btra`  |  B.taurus  |  *Bos taurus* （ウシ）  |
|  `dad_est_cele`, `dad_new_est_cele`  |  C.elegans  |  *Caenorhabditis elegans* （線虫）  |
|  `dad_est_crei`, `dad_new_est_crei`  |  C.reinhardtii  |  *Chlamydomonas reinhardtii* （クラミドモナス）  |
|  `dad_est_cint`, `dad_new_est_cint`  |  C.intestinalis  |  *Ciona intestinalis* （カタユウレイボヤ）  |
|  `dad_est_drer`, `dad_new_est_drer`  |  D.rerio  |  *Danio rerio* （ゼブラフィッシュ）  |
|  `dad_est_ddis`, `dad_new_est_ddis`  |  D.discoideum  |  *Dictyostelium discoideum* （キイロタマホコリカビ）  |
|  `dad_est_dmel`, `dad_new_est_dmel`  |  D.melanogaster  |  *D.melanogaster* （ショウジョウバエ）  |
|  `dad_est_ggal`, `dad_new_est_ggal`  |  G.gallus  |  *Gallus gallus* （ニワトリ）  |
|  `dad_est_gmax`, `dad_new_est_gmax`  |  G.max  |  *Glycine max* （ダイズ）  |
|  `dad_est_hum`, `dad_new_est_hum`  |  H.sapiens  |  *Homo sapiens* （ヒト）  |
|  `dad_est_hvul`, `dad_new_est_hvul`  |  H.vulgare  |  *Hordeum vulgare* （亜種も統合）  |
|  `dad_est_mtru`, `dad_new_est_mtru`  |  M.truncatula  |  *Medicago truncatula* （特殊ライブラリも統合）  |
|  `dad_est_mous`, `dad_new_est_mous`  |  M.musculus  |  *Mus musculus* （ハツカネズミ）  |
|  `dad_est_osat`, `dad_new_est_osat`  |  O.sativa  |  *Oryza sativa* （亜種レベルも統合）  |
|  `dad_est_rnor`, `dad_new_est_rnor`  |  R.norvegicus  |  *Rattus norvegicus* （Rattus sp. も統合）  |
|  `dad_est_slyc`, `dad_new_est_slyc`  |  S.lycopersicum  |  *Solanum lycopersicum* （トマト）  |
|  `dad_est_taes`, `dad_new_est_taes`  |  T.aestivum  |  *Triticum aestivum* （コムギ）  |
|  `dad_est_xlae`, `dad_new_est_xlae`  |  X.laevis  |  *Xenopus laevis* （アフリカツメガエル）  |
|  `dad_est_xtro`, `dad_new_est_xtro`  |  X.tropicalis  |  *Xenopus tropicalis* （アフリカツメガエル）  |
|  `dad_est_zmay`, `dad_new_est_zmay`  |  Z.mays  |  *Zea mays* （トウモロコシ）  |
|  `dad_est_rest`, `dad_new_est_rest`  |  Others  |  上記以外 （Others）  |

|  その他  |    |    |
| ---- | ---- | ---- |
|  `dad_pat`, `dad_new_pat`  |  Patent  |  特許データ (PAT)  |
|  `dad_una`, `dad_new_una`  |  Unannotated Seq  |  未注釈データ (UNA)  |
|  `dad_gss`, `dad_new_gss`  |  GSS  |  ゲノム研究関連 (genome survey sequences)  |
|  `dad_sts`, `dad_new_sts`  |  STS  |  STS (sequence tagged sites)  |

Refseq AA データベース値

|  RefSeq AA  |    |    |
| ---- | ---- | ---- |
|  `refseq-protein-fungi`  |  Fungi  |  菌類  |
|  `refseq-protein-invertebrate`  |  Invertebrate  |  無脊椎動物  |
|  `refseq-protein-microbial`  |  Microbial  |  微生物  |
|  `refseq-protein-mitochondrion`  |  Mitochondrion  |  ミトコンドリア  |
|  `refseq-protein-plant`  |  Plant  |  植物  |
|  `refseq-protein-plasmid`  |  Plasmid  |  プラスミド  |
|  `refseq-protein-plastid`  |  Plastid  |  色素体  |
|  `refseq-protein-protozoa`  |  Protozoa  |  原生動物  |
|  `refseq-protein-vertebrate_mammalian`  |  Vertebrate Mammalian  |  脊椎動物 (哺乳類)  |
|  `refseq-protein-vertebrate_other`  |  Vertebrate Other  |  脊椎動物 (その他)  |
|  `refseq-protein-viral`  |  Viral  |  ウイルス  |
|  `refseq-protein`  |  RefSeq Protein (ALL)  |  RefSeq Protein (ALL) Periodical Release  |
|  `refseq-aa-daily`  |  RefSeq Protein Daily Updates  |  RefSeq Protein Daily Updates  |
|  `refseq-aa-all`  |  RefSeq Protein ALL (Periodical Release + Daily Updates)  |  RefSeq Protein ALL (Periodical Release + Daily Updates)  |
|  `refseq-model-protein-B_taurus`  |  B. taurus  |  ウシ  |
|  `refseq-model-protein-D_rerio`  |  D. rerio  |  ゼブラフィッシュ  |
|  `refseq-model-protein-H_sapiens`  |  H. sapiens  |  ヒト  |
|  `refseq-model-protein-M_musculus`  |  M. musculus  |  マウス  |
|  `refseq-model-protein-R_norvegicus`  |  R. norvegicus  |  ラット  |
|  `refseq-model-protein-X_tropicalis`  |  X. tropicalis  |  アフリカツメガエル  |

参考：[BLAST ヘルプ 塩基配列（データベース，DIVISION）]({{site.baseurl}}/services/blast-help.html#nucleotide)

### program：BLASTプログラム<a name="parameter-program"></a>

解析の用途に合わせて、次の BLAST プログラムのいずれかを指定します。  
※ 最新の値は、こちらの API [GET /blast/help/{Help-Command}
(ヘルプ情報の閲覧)](#URI_GET_help) を利用して参照できます。

|  プログラム  |  クエリ  |  データベース  |  説明  |
| ---- | ---- | ---- | ---- |
|  megablast  |  塩基配列  |  塩基配列  |  あなたの塩基配列を塩基配列データベースと比較します。<br/>長大な塩基配列で相同性検索を行いたい場合，blastn より高速に検索結果が得られます。  |
|  blastn  |  塩基配列  |  塩基配列  |  あなたの塩基配列を塩基配列データベースと比較します。  |
|  tblastn  |  アミノ酸配列  |  塩基配列  |  あなたのアミノ酸配列に対して，塩基配列データベースを表裏合わせて６通りの読み枠で翻訳しながら比較します。  |
|  tblastx  |  塩基配列  |  塩基配列  |  あなたの塩基配列を表裏合わせて６通りの読み枠で翻訳しながら，同様に翻訳された塩基配列データベースと比較します。  |
|  blastp  |  アミノ酸配列  |  アミノ酸配列  |  あなたのアミノ酸配列をアミノ酸配列データベースと 比較します。  |
|  blastx  |  塩基配列  |  アミノ酸配列  |  あなたの塩基配列を表裏合わせて６通りの読み枠で翻訳しながら，アミノ酸配列データベースと 比較します。  |

参考：[BLAST ヘルプ Program：プログラム]({{site.baseurl}}/services/blast-help.html#program)

### parameters：BLASTプログラムのオプション指定<a name="parameter-parameters"></a>

BLAST プログラムに指定できるオプションは次の通りです。  
※ 最新の値は、こちらの API [GET /blast/help/{Help-Command}
(ヘルプ情報の閲覧)](#URI_GET_help) を利用して参照できます。

これらの各オプションを空白で並べた値を指定できます。

|  指定可能なオプション  |  BLAST プログラム  |  説明  |
| ---- | ---- | ---- |
|  `-A` *N*  |  全て  |  Multiple Hits window size; generally defaults to 0 (for single-hit extensions), but defaults to 40 when using discontiguous templates.  |
|  `-B` *N*  |  "`megablast`" 以外  |  Number of concatenated queries, in  blastn or tblastn mode  |
|  `-C` *X*  |  "`megablast`" 以外  |  Use composition-based statistics for blastp or tblastn: T, t, D, or d Default (equivalent to 1 for blast2 and blastall\_old and to 2 for blastall and blastcl3) 0, F, or f No composition-based statistics 1 Composition-based statistics as in NAR 29:2994-3005, 2001 2 Composition-based score adjustment as in Bioinformatics 21:902-911, 2005, conditioned on sequence properties 3 Composition-based score adjustment as in Bioinformatics 21:902-911, 2005, unconditionally When enabling statistics in blastall, blastall\_old, or blastcl3 (i.e., not blast2), appending u (case-insensitive) to the mode enables use of unified p-values combining alignment and compositional p-values in round 1 only.  |
|  `-D` *N*  |  "`megablast`" 以外  |  Translate sequences in the database according to genetic code N in/usr/share/ncbi/data/gc.prt (default is 1; only applies to tblast\*)  |
|    |  `"megablast"`  |  Type of output: 0 alignment endpoints and score 1 all ungapped segments endpoints 2 traditional BLAST output (default) 3 tab-delimited one line format 4 incremental text ASN.1 5 incremental binary ASN.1  |
|  `-E` *N*  |  `"megablast"`  |  Extending a gap costs N (-1 invokes default behavior)  |
|    |  "`megablast`" 以外  |  Extending a gap costs N (-1 invokes default behavior: non-affine if greedy, 2 otherwise)  |
|  `-F` *str*  |  全て  |  Filter options for DUST or SEG; defaults to T for bl2seq, blast2,blastall, blastall\_old, blastcl3, and megablast, and to F for blastpgp,impala, and rpsblast.  |
|  `-G` *N*  |  `"megablast"`  |  Opening a gap costs N (-1 invokes default behavior)  |
|    |  "`megablast`" 以外  |  Opening a gap costs N (-1 invokes default behavior: non-affine if greedy, 5 if using dynamic programming)  |
|  `-H` *N*  |  `"megablast"`  |  Maximal number of HSPs to save per database sequence (default is 0,unlimited)  |
|  `-I`  |  全て  |  Show GIs in deflines  |
|  `-J`  |  全て  |  Believe the query defline  |
|  `-K` *N*  |  "`megablast`" 以外  |  Number of best hits from a region to keep. Off by default. If used a value of 100 is recommended. Very high values of -v or -b are also suggested.  |
|  `-L` *start* `,` *stop*  |  全て  |  Location on query sequence (for rpsblast, only valid in blastp mode)  |
|  `-M` *str*  |  "`megablast`" 以外  |  Use matrix str (default = BLOSUM62)  |
|  `-M` *N*  |  `"megablast"`  |  Maximal total length of queries for a single search (default = 5000000)  |
|  `-N` *N*  |  `"megablast"`  |  Type of a discontiguous word template: 0 coding (default) 1 optimal 2 two simultaneous  |
|  `-P` *N*  |  "`megablast`" 以外  |  Set to 1 for single-hit mode or 0 for multiple-hit mode (default). Does not apply to blastn.  |
|    |  `"megablast"`  |  Maximal number of positions for a hash value (set to 0 [default\] to ignore)  |
|  `-Q` *N*  |  "`megablast`" 以外  |  Translate query according to genetic code N in /usr/share/ncbi/data/gc.prt (default is 1)  |
|  `-R`  |  `"megablast"`  |  Report the log information at the end of output  |
|  `-S` *N*  |  全て  |  Query strands to search against database for blastn, blastx, tblastx: 1 top 2 bottom 3 both (default)  |
|  `-T`  |  全て  |  Produce HTML output  |
|  `-U`  |  全て  |  Use lower case filtering for the query sequence  |
|  `-V`  |  全て  |  Force use of legacy engine  |
|  `-W` *N*  |  全て  |  Use words of size N (length of best perfect match; zero invokes default behavior, except with megablast, which defaults to 28, and blastpgp,which defaults to 3. The default values for the other commands vary with "program": 11 for blastn, 28 for megablast, and 3 for everything else.)  |
|  `-X` *N*  |  全て  |  X dropoff value for gapped alignment (in bits) (zero invokes default behavior, except with megablast, which defaults to 20, and rpsblast and seedtop, which default to 15. The default values for the other commands vary with "program": 30 for blastn, 20 for megablast, 0 for tblastx, and 15 for everything else.)  |
|  `-Y` *X*  |  全て  |  Effective length of the search space (use zero for the real size)  |
|  `-Z` *N*  |  全て  |  X dropoff value for final \[dynamic programming?\] gapped alignment in bits (default is 100 for blastn and megablast, 0 for tblastx, 25 for others)  |
|  `-b` *N*  |  全て  |  Number of database sequences to show alignments for (B) (default is 250)  |
|  `-e` *X*  |    |  Expectation value (E) (default = 10.0)  |
|  `-f` *X*  |  "`megablast`" 以外  |  Threshold for extending hits, default if zero: 0 for blastn and megablast, 11 for blastp, 12 for blastx, and 13 for tblasn and tblastx.  |
|  `-f`  |  `"megablast"`  |  Show full IDs in the output (default: only GIs or accessions)  |
|  `-g` *F*  |  "`megablast`" 以外  |  Do not perform gapped alignment (N/A for tblastx)  |
|    |  `"megablast"`  |  Make discontiguous megablast generate words for every base of the database (mandatory with the current BLAST engine)  |
|  `-l` *str*  |  全て  |  Restrict search of database to list of GI's \[String\]  |
|  `-m` *N*  |  全て  |  alignment view options: 0 pairwise (default) 1 query-anchored showing identities 2 query-anchored, no identities 3 flat query-anchored, show identities 4 flat query-anchored, no identities 5 query-anchored, no identities and blunt ends 6 flat query-anchored, no identities and blunt ends 7 XML Blast output (not available for impala) 8 tabular (not available for impala) 9 tabular with comment lines (not available for impala) 10 ASN.1 text (not available for impala or rpsblast) 11 ASN.1 binary (not available for impala or rpsblast)  |
|  `-n`  |  "`megablast`" 以外  |  MegaBlast search  |
|    |  `"megablast"`  |  Use non-greedy (dynamic programming) extension for affine gap scores  |
|  `-p` *X*  |  `"megablast"`  |  Identity percentage cut-off (default = 0)  |
|  `-q` *N*  |  全て  |  Penalty for a nucleotide mismatch (blastn only) (default = -10 for seedtop, -3 for everything else)  |
|  `-r` *N*  |  全て  |  Reward for a nucleotide match (blastn only) (default = 10 for seedtop, -10 for everything else)  |
|  `-s`  |  "`megablast`" 以外  |  Compute locally optimal Smith-Waterman alignments. For blastall, blastall\_old, and blastcl3, this is only available in gapped tblastn mode.  |
|  `-s` *N*  |  `"megablast"`  |  Minimal hit score to report (0 for default behavior)  |
|  `-t` *N*  |  "`megablast`" 以外  |  Length of a discontiguous word template (the largest intron allowed in a translated nucleotide sequence when linking multiple distinct assignments; default = 0; negative values disable linking for blastall,blastall\_old, and blastcl3.)  |
|    |  `"megablast"`  |  Length of a discontiguous word template (contiguous word if 0[default\])  |
|  `-v` *N*  |  全て  |  Number of one-line descriptions to show (V) (default = 500)  |
|  `-w` *N*  |  "`megablast`" 以外  |  Frame shift penalty (OOF algorithm for blastx)  |
|  `-y` *X*  |  "`megablast`" 以外  |  X dropoff for ungapped extensions in bits (0.0 invokes default behavior: 20 for blastn, 10 for megablast, and 7 for all others.)  |
|  `-y` *N*  |  `"megablast"`  |  X dropoff value for ungapped extension (default is 10)  |
|  `-z` *N*  |  全て  |  Effective length of the database (use zero for the real size)  |

BLAST プログラムのオプションの例:

``` 
-v 100 -b 100 -e 10 -F F -W 11
```

参考：[BLAST ヘルプ Optional Parameters]({{site.baseurl}}/services/blast-help.html#parameters)

### format：応答データの形式<a name="parameter-format"></a>

WABI からの応答データの形式を次の中から指定できます。  
※ 最新の値は、こちらの API [GET /blast/help/{Help-Command}
(ヘルプ情報の閲覧)](#URI_GET_help) を利用して参照できます。

| 応答データ形式の値     | 説明                                                  | メディアタイプ                           |
| ------------- | --------------------------------------------------- | --------------------------------- |
| `text`        | プレインテキスト形式                                          | `text/plain; charset=utf-8`       |
| `json`        | JSON 形式のテキスト                                        | `application/json; charset=utf-8` |
| `xml`         | XML テキスト                                            | `text/xml; charset=utf-8`         |
| `bigfile`     | 検索結果等のようにファイル出力されているデータをプレインテキスト形式で取得する場合に指定します。    | `text/plain; charset=utf-8`       |
| `imagefile`   | 画像データ                                               | `image/png`                       |
| `requestfile` | 検索条件等のようにファイル保存されているデータを JSON 形式のテキストで取得する場合に指定します。 | `application/json; charset=utf-8` |

※指定された形式の応答データを作成することが出来ない状態の場合は入力値エラーと扱って、 WABI は HTTP エラーを返します。

### result：結果取得方法<a name="parameter-result"></a>

処理結果を取得する方法を次の中から指定します。  
※ 最新の値は、こちらの API [GET /blast/help/{Help-Command}
(ヘルプ情報の閲覧)](#URI_GET_help) を利用して参照できます。

| 結果取得方法の値 | 説明                                         |
| -------- | ------------------------------------------ |
| `www`    | 結果取得用の URI にリクエストして、その応答データとして処理結果を受け取ります。 |
| `mail`   | 指定されているメールアドレス宛てに処理結果を送信します。               |

### address：メールアドレス<a name="parameter-address"></a>

処理結果をメール通知する場合の宛先アドレスです。

### info：参照するジョブ情報の種類<a name="parameter-info"></a>

検索ジョブから次の各種情報を参照できます。  
※ 最新の値は、こちらの API [GET /blast/help/{Help-Command}
(ヘルプ情報の閲覧)](#URI_GET_help) を利用して参照できます。


|  情報の種類  |  説明  |
| ---- | ---- |
|  `status`  |  ジョブの状態  |
|  `result`  |  検索処理の結果  |
|  `request`  |  ジョブを登録した際に指定した検索条件  |

### imageId：検索処理出力画像のID<a name="parameter-imageId"></a>

検索処理が出力した画像データを取得するための ID です。

次のような場合に必要になります。

  - [検索処理によって出力された画像データの取得](#URI_GET_imageid)

検索処理出力画像のID の例:

``` 
1
```

## その他 <a name="other"></a>

検索結果は 7日間 保存されます。  
( [「Request ID，検索結果表示」]({{site.baseurl}}/services/blast-help.html#result) の「検索結果閲覧期間」より。)  
その期間中であれば、 [Request ID](#parameter-Request-ID) を指定して `GET` リクエストすることで、
[処理結果を参照する](#URI_GET_result) ことが可能です。
