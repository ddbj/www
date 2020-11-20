---
layout: simple
title: JGA サーバに scp/ssh アクセスできません
category: faq
db:
  - jga
tags: 
  - システム
date: 2020-10-15T11:19:00
lang: ja
---

## JGA サーバに scp/ssh アクセスできません

<p>以下の基本的な点をご確認ください。</p>
<div class="sub_index">
  <ul class="disc">
    <li>接続元のグローバル IP アドレス（プライベート IP アドレスではない）は JGA によって接続許可されているか。プロキシサーバを経由している場合、ご自身のアドレスと JGA サーバへのアクセス元アドレスは異なります。詳しくは所属組織のシステム管理者にご確認ください。<a href="/jga/global-ip.html">マニュアル</a></li>
    <li>scp 接続時にパスワードではなく鍵認証になっているかどうか</li>
    <li>D-way アカウントに登録した認証用公開鍵と指定している秘密鍵がペアになっているかどうか。<a href="/account.html#enable-dra-submission-in-account">マニュアル</a></li>
    <li>認証用秘密鍵ではなくデータセット暗号化用の公開鍵とペアになった秘密鍵を指定していないかどうか。<a href="/jga/download.html#data-use-approval-download">マニュアル</a></li>
    <li>認証用秘密鍵ファイルが読み込みを許可する権限設定になっているかどうか</li>
    <li>認証用秘密鍵ファイルの権限が他人がアクセスできないように設定されているかどうか？（例 rw-------）</li>
    <li>認証用鍵ペア作成時に指定したパスフレーズを正しく入力しているかどうか</li>
  </ul>
</div>
<p>鍵を生成した時のコンピュータの OS と異なる環境でデータを転送しようとしている場合，秘密鍵の形式が合っているかどうかご確認ください。<a href="/account.html#convert-private-key">秘密鍵ファイルの変換</a></p>
<p><span class="bold">転送環境 Unix/Mac OS X</span>: Windows で作成した PuTTY 形式の秘密鍵は OpenSSH 形式に変換します。</p>
<p><span class="bold">転送環境 Windows WinSCP:</span> Unix/Mac OS X で作成した OpenSSH 形式の秘密鍵は PuTTY 形式に変換します。</p>
<p>上記でも問題が解決しない場合、DDBJ センターではサードパーティ製ソフトウェアの細かい使い方に関するサポートは提供しておりませんので、ソフトウェアのウェブサイト等をご参照頂くか、所属組織のシステム管理者に scp (JGA ではポート 443) の通信を許可しているかどうか、ご確認ください。</p>
