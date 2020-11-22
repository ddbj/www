---
layout: indexed_content
title: MSS データファイル用チェックツール
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
  - title: UME ユーザーマニュアル
    url: /ddbj/ume.html
  - title: Parser ユーザーマニュアル
    url: /ddbj/parser.html
  - title: transChecker ユーザーマニュアル
    url: /ddbj/transchecker.html
  - title: validator エラーメッセージ
    url: /ddbj/validator.html
  - title: MSS 利用申し込み
    url: /ddbj/mss-form.html
---

## 実行環境 <a name="system"></a>

### ハードウェア <a name="system-1"></a>

  - インストールのための 20 MB 以上のハードディスク領域
  - 512 MB 以上 (推奨 1 GB 以上) の RAM

### ソフトウェア <a name="system-2"></a>

  - 実行には Java 8 以降が必要です。
  - DDBJ では、推奨 OS として以下の環境で動作確認を行っております。  
    Windows: Windows 10  
    unix/macOS: Ubuntu 16.04 LTS, macOS High Sierra

<span class="red">※</span>UME (Utilities for MSS file Error check) は[Apache Software Foundation](//www.apache.org/) により開発されたソフトウェアを含んでいます。

## ダウンロード <a name="download"></a>

下記から 必要なパッケージを選択してダウンロードしてください。  
インストール、使用方法は、各マニュアルを参照してください。

<table>
    <caption></caption> 
    <thead>
      <tr>
      <th>名称</th>
      <th>OS</th>
      <th>更新日</th>
      <th>ドキュメント</th>
      <th>ファイル形式 / 備考</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td><a href="ftp://ftp.ddbj.nig.ac.jp/ddbj-cib/MSS/UME_win_V1.49.zip">UME_win_V1.49.zip</a></td>
      <td>Windows</td>
      <td rowspan="2">2020/04/07</td>
      <td rowspan="2"><a href="/ddbj/ume.html">UME ユーザーマニュアル</a></td>
      <td rowspan="2">zip 形式<br>UMEにはParser / transCheckerが付属しています</td>
      </tr>
      <tr>
      <td><a href="ftp://ftp.ddbj.nig.ac.jp/ddbj-cib/MSS/UME_unix_V1.49.zip">UME_unix_V1.49.zip</a></td>
      <td>unix/macOS</td>
      </tr>
      <tr>
      <td><a href="ftp://ftp.ddbj.nig.ac.jp/ddbj-cib/MSS/Parser_V6.62.tar.gz">Parser_V6.62.tar.gz</a></td>
      <td>unix/macOS</td>
      <td>2020/04/07</td>
      <td><a href="/ddbj/parser.html">Parser ユーザーマニュアル</a></td>
      <td>tar (gzipped) 形式<br>UME を使用する場合は不要です。</td>
      </tr>
      <tr>
      <td><a href="ftp://ftp.ddbj.nig.ac.jp/ddbj-cib/MSS/transChecker_V2.21.tar.gz">transChecker_V2.21.tar.gz</a></td>
      <td>unix/macOS</td>
      <td>2017/05/17</td>
      <td><a href="/ddbj/transchecker.html">transChecker ユーザーマニュアル</a></td>
      <td>tar (gzipped) 形式<br>UME を使用する場合は不要です。</td>
      </tr>
    </tbody>
</table>

## 使用許諾 <a name="license"></a>

**Please read the following agreement carefully before you use the software for Mass Submission System.**

NOTICE TO USERS:  
Carefully read the following agreement. Use of the tools for Mass Submission System provided by DDBJ with this agreement (hereinafter collectively called "the Software") constitutes your acceptance of these terms. If you do not agree to the terms of this agreement, do not install and/or use the Software. User's use of the Software is conditioned upon compliance by user with the terms of this agreement.

1.  All copyright related to the Software except the following third-party software (included in only "UME") must belong to the DDBJ:  
    a) Axis 1.1  
    b) Xerces 1.4.4  
    The Software includes the source code thereof and documentation thereto.
2.  In the event you provide to any third party all or any portion of the Software, prior written consent of DDBJ is required.
3.  You agree that you will not attempt to reverse compile, modify, translate, or disassemble the Software in whole or in part.
4.  Except as required by law, DDBJ will not be liable to you for any damages arising out of the use or inability to use of the Software.
5.  Requirements specified in this agreement are subject to change without notice.
