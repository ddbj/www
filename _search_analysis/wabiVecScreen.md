---
layout: indexed_content
title: WABI VecScreen ヘルプ
pathname: wabiVecScreen
category: search_analysis
---
# WABI VecScreen ヘルプ

## VECSCREEN の job の投入

以下のパラメーターを POST します。  
format, result は必須です。  
result に mail を指定した場合は address も必須となります。

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>パラメーター</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>format</td>
<td>request ID を返す際の応答データの形式。<br />
text, json, xml, bigfile, imagefile, requestfile が受け付けられますが、job投入時に意味があるのは text, json, xml の3つです。</td>
</tr>
<tr class="even">
<td>querySequence</td>
<td>vecscreen 実行時に vecscreen に渡す配列ファイル。<br />
FASTAフォーマットを使用します。</td>
</tr>
<tr class="odd">
<td>database</td>
<td>vecscreen実行時に使用するデータベース。<br />
UniVec（多数のベクターだけでなくリンカー・アダプター・プライマー配列から、効率的な検索のために冗長な部分を除いて作成された塩基配列データベース。データベースに含まれる配列は、少数の疑陽性ヒットを許容することで contamination の検出を最大にするように選ばれています。）<br />
または UniVec_Core（疑陽性のヒット数を最小にするように選ばれた UniVec のサブセット。）を指定します。</td>
</tr>
<tr class="even">
<td>parameters</td>
<td>出力ファイルのフォーマットの指定として、"-f 0"（HTML format, with alignments (default)）, "-f 1"（HTML format, no alignments）, "-f 2"（Text list, with alignments）, "-f 3"（Text list, no alignments）のいずれかを記述します。</td>
</tr>
<tr class="odd">
<td>result</td>
<td>結果通知方法。<br />
www, mail のいずれか。<br />
mail の場合、job 完了時に address に記述したメールアドレスに対して検索終了の通知が送信されます。<br />
www の場合は何もしないので、POST 時に返された request ID を使って GET で job の状態を調べる。</td>
</tr>
<tr class="even">
<td>address</td>
<td>result で mail を指定した場合に検索終了の通知を受け取るメールアドレス。</td>
</tr>
</tbody>
</table>

## VECSCREEN の結果の取得

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>パラメーター</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>GET vecscreen/{id}?info=status</td>
<td>job が走っている、キューにたまっている、終わっている、存在しない、ということを返します。</td>
</tr>
<tr class="even">
<td>GET vecscreen/{id}?info=request</td>
<td>プログラム実行条件を返します。<br />
存在しない場合は、エラーを返します。</td>
</tr>
<tr class="odd">
<td>GET vecscreen/{id}?info=result</td>
<td>job が終わっていたら結果（multiple alignment, profile alignment を実行した場合は alignment の結果、-TREE を実行した場合は .ph ファイル、-BOOTSTRAP を実行した場合は .phb ファイル、-CONVERT を実行した場合はフォーマット変換後のファイル）を返します。<br />
終わってない・存在しない場合は、エラーを返します。</td>
</tr>
</tbody>
</table>

## サンプルスクリプト

vecscreen-client.pl

### 複数配列のベクター配列のチェック

conf.json

``` code
{
  "urlStr": "http://ddbj-staging.nig.ac.jp/wabi/vecscreen/",
  "fasta": "/home/hoge/script/vec.fasta",
  "database": "UniVec",
  "parameters": "-f 0",
  "result": "www",
  "address": ""
}
      
```

vec.fasta

``` code
>1
tgaattcgagctcggtacccggggatcctctagagtcgacctgcaggcatgcaagcttggc
>2
ggaattcgagctcggtacccggggatcctctagagtcgacctgcaggcatgcaagcttggc
>3
agaattcgagctcggtacccggggatcctctagagtcgacctgcaggcatgcaagcttggc
>4
cgaattcgagctcggtacccggggatcctctagagtcgacctgcaggcatgcaagcttggc
```

multi fastaデータをvecscreenにかけてベクター配列の有無をチェックする

``` code
hoge@huga ~/script $ perl vecscreen-client.pl vecscreen_conf.json
request-ID: wabi_vecscreen_2013-1009-1446-20-728-899018
waiting
finished
Search result is outputed to wabi_vecscreen_2013-1009-1446-20-728-899018.txt
      
```

出力された wabi\_vecscreen\_2013-1009-1446-20-728-899018.txt は、ジョブ実行時に
parameters を "-f 0" としているので実際は html ファイルである。
