---
layout: indexed_content
title: validator エラーメッセージ
category: ddbj
lang: ja
related_pages:
  - title: 登録ファイル形式
    url: services/file-format.html
  - title: MSS データファイル用チェックツール
    url: services/mss-tool.html
  - title: UME ユーザーマニュアル
    url: services/ume.html
  - title: Parser ユーザーマニュアル
    url: services/parser.html
  - title: transChecker ユーザーマニュアル
    url: services/transchecker.html
  - title: MSS 利用申し込み
    url: services/mass-form.html
---

## validator エラーメッセージ

ここでは DDBJ に登録される配列データをチェックするためのツールから出力されるエラーメッセージについて概説しています。  
エラーメッセージごとに必要な対処方法が異なりますので、適宜、対処をお願いいたします。  
問題、不明点などがございましたら、エラーメッセージを添えて [ご連絡](/contact.html) ください。

### Parser <a name="Parser"></a>

#### 出力フォーマット <a name="parser-1"></a>

{::nomarkdown}[コード番号]:[Level]:[Type]:[File]:[エラー位置]:[メッセージ本文]{:/}

<table>
  <tbody>
  <tr><th>コード番号</th><td colspan="2">コード番号を示します。</td></tr>
  <tr><th rowspan="6">Level</th><td colspan="2">エラーのレベルを示します。</td></tr>
  <tr><td>ER1</td><td>通常のファイル構文に関するエラーです。修正が必要です。</td></tr>
  <tr><td>ER2</td><td>通常のファイル構文に関するエラーです。修正が必要です。</td></tr>
  <tr><td>FAT</td><td>実行環境に関するエラーです。</td></tr>
  <tr><td>WAR</td><td>警告です。修正が必要な場合があります。</td></tr>
  <tr><td>MES</td><td>他のエラーに関連する参考メッセージです。</td></tr>
  <tr><th rowspan="4">Type</th><td colspan="2">エラーの種別を示します。</td></tr>
  <tr><td>STX</td><td>構文</td></tr>
  <tr><td>SYS</td><td>実行関連</td></tr>
  <tr><td>LOC</td><td>配列とlocation の比較関連</td></tr>
  <tr><th rowspan="4">File</th><td colspan="2">エラーが検出されたファイルを示します。</td></tr>
  <tr><td>ANN</td><td>アノテーション</td></tr>
  <tr><td>SEQ</td><td>配列</td></tr>
  <tr><td>AxS</td><td>アノテーションと配列の比較</td></tr>
  <tr><th>エラー位置</th><td colspan="2">エラーが検出された位置を行番号、または、エントリ名で示します。</td></tr>
  <tr><th>メッセージ本文</th><td colspan="2">エラーの個別内容を示します。</td></tr>
  </tbody>
</table>

#### エラーメッセージ <a name="agpparser-2"></a>

メッセージ中で括弧( [ と \] )で括られている \# で始まる語・数値は、実際のエラーメッセージでは、登録において使用されている値などに置換されます。

メッセージ中で、括弧( [ と \] )で括られている \# で始まっていない語は予約語です。

[Parser　エラーメッセージ一覧](https://docs.google.com/spreadsheets/d/1djQ52hOYXFRQru3-CJZyvzANaZOZ_TuuQW8i0IKg5Ls/edit#gid=1311635655)

-----

<div id="Parser-rule">

</div>

-----

### transChecker <a name="transChecker"></a>

#### フォーマット <a name="agpparser-1"></a>

{::nomarkdown}[コード番号]:[Level]:[メッセージ本文]{:/}

<table>
  <tbody>
    <tr><th>コード番号</th><td colspan="2">コード番号を示します。</td></tr>
    <tr><th rowspan="4">Level</th><td colspan="2">エラーのレベルを示します。</td></tr>
    <tr><td>ER2</td><td>通常のファイル構文に関するエラーです。修正が必要です。</td></tr>
    <tr><td>FAT</td><td>実行環境に関するエラーです。</td></tr>
    <tr><td>WAR</td><td>警告です。修正が必要な場合があります。</td></tr>
    <tr><th>メッセージ本文</th><td colspan="2">エラーの個別内容を示します。</td></tr>
  </tbody>
</table>

**例**

```
>entry1.1 <1..>366
TC0020:WAR: [codon_start] qualifier should be selected. The value is automatically set 1. 
TC0020:WAR: [transl_table] qualifier should be selected. The value is automatically set 1. 
//
>entry2.3 4315..4997
TC0017:ER2: First codon [cct] is not a start codon.
TC0018:ER2: Final codon [cat] is not a stop codon.
TC0019:ER2: Stop codon is found in mid of CDS location.
//
```

#### エラーメッセージ <a name="agpparser-2"></a>

メッセージ中で括弧( **[** と **\]** )で括られている **\#** で始まる語・数値は、実際のエラーメッセージでは、登録において使用されている値などに置換されます。

メッセージ中で、括弧( **[** と **\]** )で括られている \# で始まっていない語は予約語です。

[transChecker エラーメッセージ一覧](https://docs.google.com/spreadsheets/d/1djQ52hOYXFRQru3-CJZyvzANaZOZ_TuuQW8i0IKg5Ls/edit#gid=215659657)

-----

<div id="transChecker-rule">

</div>

-----

### AGP Parser <a name="AGP Parser"></a>

#### フォーマット <a name="agpparser-1"></a>

{::nomarkdown}[コード番号]:[Level]:[エラー位置]:[メッセージ本文] or [コード番号]:[Level]:[メッセージ本文]{:/}

<table>
  <tbody>
    <tr><th>コード番号</th><td colspan="2">コード番号を示します。</td></tr>
    <tr><th rowspan="5">Level</th><td colspan="2">エラーのレベルを示します。</td></tr>
    <tr><td>FAT</td><td>実行環境に関するエラーです。</td></tr>
    <tr><td>ER1</td><td>通常のファイル構文に関するエラーです。修正が必要です。</td></tr>
    <tr><td>ER2</td><td>通常のファイル構文に関するエラーです。修正が必要です。</td></tr>
    <tr><td>WAR</td><td>警告です。修正が必要な場合があります。</td></tr>
    <tr><th>エラー位置</th><td colspan="2">エラーが検出された位置を行番号、または、object 名で示します。</td></tr>
    <tr><th>メッセージ本文</th><td colspan="2">エラーの個別内容を示します。</td></tr>
  </tbody>
</table>

#### エラーメッセージ <a name="agpparser-2"></a>

メッセージ中で括弧( **[** と **\]** )で括られている **\#** で始まる語・数値は、実際のエラーメッセージでは、登録において使用されている値などに置換されます。

[AGP Parser
エラーメッセージ一覧](https://docs.google.com/spreadsheets/d/1djQ52hOYXFRQru3-CJZyvzANaZOZ_TuuQW8i0IKg5Ls/edit#gid=2134091722)

-----

<div id="AgpParser-rule">

</div>

-----