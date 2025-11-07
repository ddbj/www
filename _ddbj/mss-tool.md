---
layout: tabbed_indexed_content
title: MSS データファイル用チェックツール
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: home
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

## 実行環境  {#system}

### ハードウェア  {#system-1}

  - インストールのための 20 MB 以上のハードディスク領域
  - 512 MB 以上 (推奨 1 GB 以上) の RAM

### ソフトウェア  {#system-2}

  - 実行には Java 8 以降が必要です。
  - DDBJ では、推奨 OS として以下の環境で動作確認を行っております。  
    Windows: Windows 10  
    unix/macOS: Ubuntu 18.04 LTS, macOS Catalina

<span class="red">※</span>UME (Utilities for MSS file Error check) は[Apache Software Foundation](//www.apache.org/) により開発されたソフトウェアを含んでいます。

## ダウンロード  {#download}

下記から 必要なパッケージを選択してダウンロードしてください。  
インストール、使用方法は、各マニュアルを参照してください。

<table>
    <caption></caption> 
    <thead>
      <tr>
      <th>名称</th>
      <th>リンク</th>
      <th>OS</th>
      <th>更新日</th>
      <th>ドキュメント</th>
      <th>ファイル形式/備考</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>UME_win_V1.65.zip</td>
        <td><a href="https://ddbj.nig.ac.jp/public/ddbj-cib/MSS">FTP</a></td>
        <td>Windows</td>
        <td rowspan="2">2025/07/16</td>
        <td rowspan="2"><a href="/ddbj/ume.html">ユーザーマニュアル</a></td>
        <td rowspan="2">Parser, transChecker 付属</td>
      </tr>
      <tr>
        <td>UME_unix_V1.65.zip</td>
        <td><a href="https://ddbj.nig.ac.jp/public/ddbj-cib/MSS">FTP</a></td>
        <td>Unix/macOS</td>
      </tr>
      <tr>
        <td>Parser_V6.79.tar.gz</td>
        <td><a href="https://ddbj.nig.ac.jp/public/ddbj-cib/MSS">FTP</a></td>
        <td>Unix/macOS</td>
        <td>2025/07/16</td>
        <td><a href="/ddbj/parser.html">ユーザーマニュアル</a></td>
        <td>UME を使用する場合、不要</td>
      </tr>
      <tr>
        <td>transChecker_V2.26.tar.gz</td>
        <td><a href="https://ddbj.nig.ac.jp/public/ddbj-cib/MSS">FTP</a></td>
        <td>Unix/macOS</td>
        <td>2024/12/12</td>
        <td><a href="/ddbj/transchecker.html">ユーザーマニュアル</a></td>
        <td>UME を使用する場合、不要</td>
      </tr>
    </tbody>
</table>

## 使用許諾  {#license}

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
