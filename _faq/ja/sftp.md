---
layout: simple
title: sftp でファイルの転送ができません
category: faq
db:
  - ddbj
  - dra
  - gea
  - metabobank
  - jga
tags:
  - シークエンスデータ
date: 2021-05-05T06:46:24
lang: ja
---

以下の点を確認してください。

- sftp 接続時にパスワードではなく鍵認証になっているかどうか
- DDBJ アカウントに登録した認証用公開鍵と指定している秘密鍵がペアになっているかどうか。[マニュアル](/ddbj-account.html#public-key)
- 認証用秘密鍵ではなくデータセット暗号化用の公開鍵とペアになった秘密鍵を指定していないかどうか。[マニュアル](/jga/download.html#data-use-approval-download)
- 認証用秘密鍵ファイルが読み込みを許可する権限設定になっているかどうか
- 認証用秘密鍵ファイルの権限が他人がアクセスできないように設定されているかどうか（例 rw-------）
- 認証用鍵ペア作成時に指定したパスフレーズを正しく入力しているかどうか
- DRA/GEA/DDBJ/MetaboBank はポート番号 22、JGA はポート番号 443、での ssh 接続が許可されているかどうか（所属組織のネットワーク管理者にお問い合わせください）

鍵を生成した時のコンピュータの OS と異なる環境でデータを転送しようとしている場合、秘密鍵の形式が合っているかどうかご確認ください。[秘密鍵ファイルの変換](/ddbj-account.html#convert-private-key)

- 転送環境 Unix/Mac OS X: Windows で作成した PuTTY 形式の秘密鍵は OpenSSH 形式に変換します。
- 転送環境 Windows WinSCP: Unix/Mac OS X で作成した OpenSSH 形式の秘密鍵は PuTTY 形式に変換します。

上記でも問題が解決しない場合、DDBJ センターではサードパーティ製ソフトウェアの細かい使い方に関するサポートは提供しておりませんので、ソフトウェアのウェブサイト等をご参照頂くか、所属組織のシステム管理者に ssh (DRA/GEA/DDBJ/MetaboBank はポート 22、JGA ではポート 443) の通信を許可しているかどうか、ご確認ください。

#### UNPROTECTED PRIVATE KEY FILE WARNING {#unprotected}

Windows PowerShell の sftp で秘密鍵のアクセス権限が広すぎると以下のエラーになる場合があります。
```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions for './private-key-for-auth' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "./private-key-for-auth": bad permissions
test07@ftp-private.ddbj.nig.ac.jp: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
lost connection
```

ファイルを右クリックしてプロパティを選択します。    
<a href="/assets/images/books/win-ps-1.jpg" title="ファイルのプロパティ" class="group1"><img src="/assets/images/books/win-ps-scp-1.jpg" alt="ファイルのプロパティ" title="ファイルのプロパティ" class="w300"></a>   

セキュリティタブの詳細設定を選択します。    
<a href="/assets/images/books/win-ps-scp-2.jpg" title="セキュリティの詳細設定" class="group1"><img src="/assets/images/books/win-ps-scp-2.jpg" alt="セキュリティの詳細設定" title="セキュリティの詳細設定" class="w300"></a>  

アクセス許可エントリの継承を無効化し、権限を削除できるようにします。   
<a href="/assets/images/books/win-ps-scp-3.jpg" title="アクセス許可エントリの継承の無効化" class="group1"><img src="/assets/images/books/win-ps-scp-3.jpg" alt="アクセス許可エントリの継承の無効化" title="アクセス許可エントリの継承の無効化" class="w300"></a>  

明示的なアクセス許可に変換します。    
<a href="/assets/images/books/win-ps-scp-4.jpg" title="明示的なアクセス許可に変換" class="group1"><img src="/assets/images/books/win-ps-scp-4.jpg" alt="明示的なアクセス許可に変換" title="明示的なアクセス許可に変換" class="w300"></a>  

一旦全てのアクセス権限を削除します。    
<a href="/assets/images/books/win-ps-scp-5.jpg" title="全てのアクセス権限を削除" class="group1"><img src="/assets/images/books/win-ps-scp-5.jpg" alt="全てのアクセス権限を削除" title="全てのアクセス権限を削除" class="w300"></a>   

アクセス権限を追加します。   
<a href="/assets/images/books/win-ps-scp-6.jpg" title="アクセス権限の追加" class="group1"><img src="/assets/images/books/win-ps-scp-6.jpg" alt="アクセス権限の追加" title="アクセス権限の追加" class="w300"></a>   

Windows ユーザ (例 test07) を追加します。  
<a href="/assets/images/books/win-ps-scp-7.jpg" title="ユーザの追加" class="group1"><img src="/assets/images/books/win-ps-scp-7.jpg" alt="ユーザの追加" title="ユーザの追加" class="w300"></a>  

Windows ユーザ (例 test07) にフルコントロールを許可します。   
<a href="/assets/images/books/win-ps-scp-8.jpg" title="フルコントロールの許可" class="group1"><img src="/assets/images/books/win-ps-scp-8.jpg" alt="フルコントロールの許可" title="フルコントロールの許可" class="w300"></a>  

権限の変更を反映します。   
<a href="/assets/images/books/win-ps-scp-9.jpg" title="権限の変更" class="group1"><img src="/assets/images/books/win-ps-scp-9.jpg" alt="権限の変更" title="権限の変更" class="w300"></a>  

再度 sftp コマンドを実行します。   

