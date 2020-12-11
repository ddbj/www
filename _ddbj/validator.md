---
layout: tabbed_indexed_content
title: validator エラーメッセージ
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
  - title: UME ユーザーマニュアル
    url: /ddbj/ume.html
  - title: Parser ユーザーマニュアル
    url: /ddbj/parser.html
  - title: transChecker ユーザーマニュアル
    url: /ddbj/transchecker.html
  - title: MSS 利用申し込み
    url: /ddbj/mss-form.html
---

## validator エラーメッセージ

ここでは DDBJ に登録される配列データをチェックするためのツールから出力されるエラーメッセージについて概説しています。  
エラーメッセージごとに必要な対処方法が異なりますので、適宜、対処をお願いいたします。  
問題、不明点などがございましたら、エラーメッセージを添えて [ご連絡](/contact-ddbj.html) ください。

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
