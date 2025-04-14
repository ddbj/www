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

### ユーザ環境で通信が許可されているか {#allow}

ご依頼により DDBJ センターで ftp-private.ddbj.nig.ac.jp へのアクセスログを調査いたします。アクセスログに履歴がない場合は、ユーザ環境において通信が許可されていない可能性があります。   
2025年4月10日に ftp-private.ddbj.nig.ac.jp の IP アドレスが 133.39.224.111 から 133.39.233.40 に変更になりました。この変更により以前はユーザ環境で許可されていた通信が許可されなくなっている可能性があります。ネットワーク管理者に 133.39.233.40 ポート番号22への通信が許可されているかどうか、ご確認ください。  
  
JGA/AGD データ転送用サーバは jga-gw.ddbj.nig.ac.jp 133.39.233.39 になります。

### ユーザホームが作成されているかどうか {#home}

以下のエラーメッセージが表示される場合は、2025年4月10日以降に新規作成した DDBJ アカウントで、ftp-private.ddbj.nig.ac.jp でユーザホームが作成されていない可能性があります。   
DDBJ センターでユーザホーム作成処理を実施いたしますので、アカウント名を添えて[ご連絡ください](/contact-ddbj.html)。

```
sftp -i id_rsa test07@ftp-private.ddbj.nig.ac.jp
Enter passphrase for key id_rsa':
client_loop: send disconnect:
Connection resetConnection closed
```

### 鍵ペアが一致しているかどうか {#pair}

#### コマンドでの確認 {#command}

秘密鍵 (例 id_rsa) に対して以下のコマンドを実行すると、対応する公開鍵が表示されます。

```
ssh-keygen -y -f id_rsa
```

[DDBJ アカウント](https://accounts.ddbj.nig.ac.jp)にログインし、SSH keys で登録されている公開鍵を表示します。

<a href="/assets/images/books/pkey_check2.jpg" title="DDBJ アカウントに登録されている公開鍵を表示"><img src="/assets/images/books/pkey_check2.jpg" alt="DDBJ アカウントに登録されている公開鍵を表示" title="DDBJ アカウントに登録されている公開鍵を表示" class="w400"></a>   

両者の内容を比較し、一致していることから鍵がペアになっていることを確認できます。一致していない場合は、ペアになっていないので、[新しく鍵ペアを生成](/key.html)、秘密鍵を sftp で指定し、対応する OpenSSH 形式の公開鍵を DDBJ アカウントに追加してください。DDBJ アカウントには公開鍵を複数登録することができます。

#### WinSCP での確認 {#winscp}

WinSCP では秘密鍵のペアとなる公開鍵を表示することができます。また、DDBJ アカウントでは登録された公開鍵を確認することができます。両者を比較することで秘密鍵と公開鍵がペアになっているかどうか、確認することができます。  

WinSCP の Advanced Site Settings > SSH > Authentication で Display Public Key を押下し、Private key file で指定されている秘密鍵とペアになる公開鍵を表示します。

<a href="/assets/images/books/pkey_check1.jpg" title="WinSCP で秘密鍵とペアになる公開鍵を表示"><img src="/assets/images/books/pkey_check1.jpg" alt="WinSCP で秘密鍵とペアになる公開鍵を表示" title="WinSCP で秘密鍵とペアになる公開鍵を表示" class="w400"></a>   

[DDBJ アカウント](https://accounts.ddbj.nig.ac.jp)にログインし、SSH keys で登録されている公開鍵を表示します。

<a href="/assets/images/books/pkey_check2.jpg" title="DDBJ アカウントに登録されている公開鍵を表示"><img src="/assets/images/books/pkey_check2.jpg" alt="DDBJ アカウントに登録されている公開鍵を表示" title="DDBJ アカウントに登録されている公開鍵を表示" class="w400"></a>   

両者の内容を比較し、一致していることから鍵がペアになっていることを確認できます。一致していない場合は、ペアになっていないので、[新しく鍵ペアを生成](/key.html)、秘密鍵を WinSCP で指定し、対応する OpenSSH 形式の公開鍵を DDBJ アカウントに追加してください。DDBJ アカウントには公開鍵を複数登録することができます。

### REMOTE HOST IDENTIFICATION HAS CHANGED {#identification}

2025年4月10日に BioProject/BioSample/DRA/GEA システムは新しいスパコンへ移行しました。    
これに伴い ftp-private.ddbj.nig.ac.jp サーバのホスト鍵が変更になったため、ssh でデータをアップロードしようとすると、ホスト鍵不一致の警告が表示され、アクセスすることができない場合があります。    

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:LAPCiua8RAlPIZwE4MKWX7YHMY//rtyjfnUYBj/cnfk.
Please contact your system administrator.
Add correct host key in /Users/test07/.ssh/known_hosts to get rid
of this message.
Offending ECDSA key in /Users/test07/.ssh/known_hosts:2
Host key for ftp-private.ddbj.nig.ac.jp has changed and you have
requested strict checking.
Host key verification failed.
Connection closed
```

メッセージに従いユーザのホーム領域（例 test07 ユーザ）にある    
/home/test07/.ssh/known_hosts   
ファイルの ftp-private.ddbj.nig.ac.jp もしくは IP アドレス 133.39.224.111 が記載されている一行を削除します。    

メッセージから削除すべき、該当する行（例では2行目）を知ることもできます。    

```
Offending ECDSA key in /Users/test07/.ssh/known_hosts:2
```

known_hosts のサーバの古いホスト鍵が記載されている行を削除した後、ssh でアクセスします。   
初めてアクセスした状態になるため、ホスト鍵の登録 yes/no を聞かれるので "yes" を選択し、アクセスします。

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

