---
layout: indexed_content
title: FTP接続ができません
category: faq
db:
  - pipeline
date: 2014-05-30T17:08:46
lang: ja
---

## FTP接続ができません

ケース１．DRAユーザーの場合<br><br>DRA登録されているユーザーの方は、FTPに接続できない場合がございます。<br>その場合は一度パイプラインにログインしていただき、パスワードの変更を行っていただくことでFTP接続が可能になります。<br><br>ケース２．FTPクライアントが未対応<br><br>WindowsやMACに標準装備されているFTPクライアントではパイプラインのFTPへ接続することが出来ません。<br>パイプラインではFTP over SSLのサーバーを使用しており、FTPへのログインやデータの送受信が暗号化されるようになっており、これを利用するには対応したクライアントが必要になります。<br>Windowsの場合はWinSCP、MACの場合はCyberduckなどが上記の接続に対応しております。<br>
<br>WinSCPサイト<br>
<a href="http://winscp.net/" rel="nofollow"><font color="#444444" style="font-weight:normal">http://winscp.net/</font></a>
<br>Cyberduckサイト<br>
<a href="http://cyberduck.ch/" rel="nofollow"><font color="#444444" style="font-weight:normal">http://cyberduck.ch/</font></a>
<br>