---
layout: indexed_content
title: データのアップロード
lang: ja
---

## データのアップロード  {#upload} 

DRA/GEA/DDBJ/MetaboBank のデータを DDBJ センターのファイル受付サーバに sftp でアップロードする方法を説明します。  

### ホスト名とポート番号  {#hostandport}

- ホスト名: ftp-private.ddbj.nig.ac.jp
- ポート番号: 22

### アップロード先ディレクトリ  {#uploaddestination}

データベース毎に異なる点に注意してください。
DRA と GEA ではアップロード先ディレクトリの下にサブディレクトリを作成しないでください。  

- DRA: ~/\<DRA submission ID\> (例 test07-0018)
- GEA: ~/gea/\<GEA submission ID\> (例 ESUB000350)
- MSS: ~/mass [詳細は説明サイトをお読みください](/ddbj/mss.html#sftpmss)
- MetaboBank: ~/metabobank

[JGA](/jga/submission-step.html) データは専用サーバにアップロードします。  

### ターミナル {#terminal}

#### Linux/Mac OS X {#terminal-linux}

sftp ログイン。パスフレーズの入力を求められた場合は、パスフレーズを入力します。   
```
sftp -i <Your private key> <DDBJ account username>@ftp-private.ddbj.nig.ac.jp
```

- \<Your private key\>: DDBJ アカウントに登録した認証用公開鍵とペアになる秘密鍵。例 ~/.ssh/id_rsa
- \<DDBJ account username\>: DDBJ アカウントのユーザ名 例 test07

ログインすると対話モードになります。  
```
sftp>
```

アップロード先ディレクトリに移動して、ファイルをアップロードします。

コマンドの例 (DRA)   
```
sftp> cd test07-0018
sftp> put strainA_1.fastq
```

sftp の対話モードで利用できるコマンドは[マニュアルページ](https://manpages.ubuntu.com/manpages/xenial/man1/sftp.1.html)をご覧ください。

#### PowerShell (Windows) {#ps}

Windows PowerShell を使ってコマンドラインでデータを転送する方法を説明します。  

スタートメニューで "powershell" と入力し、検索されたアプリ "PowerShell" を起動します。   
<a href="/assets/images/books/ps-run.jpg" title="PowerShell を検索して起動" class="group1"><img src="/assets/images/books/ps-run.jpg" alt="PowerShell を検索して起動" title="PowerShell を検索して起動" class="w500"></a>   

sftp ログイン。パスフレーズの入力を求められた場合は、パスフレーズを入力します。   
```
sftp -i <Your private key> <DDBJ account username>@ftp-private.ddbj.nig.ac.jp
```

- \<Your private key\>: DDBJ アカウントに登録した認証用公開鍵とペアになる秘密鍵。例 ~/.ssh/id_rsa
- \<DDBJ account username\>: DDBJ アカウントのユーザ名 例 test07

ログインすると対話モードになります。  
```
sftp>
```

アップロード先ディレクトリに移動して、ファイルをアップロードします。

コマンドの例 (DRA)   
```
sftp> cd test07-0018
sftp> put strainA_1.fastq
```

sftp の対話モードで利用できるコマンドは[マニュアルページ](https://manpages.ubuntu.com/manpages/xenial/man1/sftp.1.html)をご覧ください。

#### WinSCP (Windows) {#winscp}

画面操作でデータを転送できる WinSCP を使った方法を説明します。  

[WinSCP](http://winscp.net/eng/download.php) をインストールし、起動します。

以下のように設定した後、 右中央にある [Advanced...] をクリックします。  
転送モードはバイナリモードにします。テキストモードで転送しないでください。  

- File protocol: SFTP
- Host name: ftp-private.ddbj.nig.ac.jp
- Port number: 22
- User name: (DDBJ Account ユーザ名を入力)
- Password: (空欄のまま)

<a href="/assets/images/books/winscp1_400.jpg" title="秘密鍵の選択１" class="group1"><img src="/assets/images/books/winscp1_400.jpg" alt="秘密鍵の選択１" title="秘密鍵の選択１" class="w400"></a>

"Authentication" にある "Private key file" で、事前に作成した PuTTY 形式の秘密鍵を選択します。

<a href="/assets/images/books/winscp2_400.jpg" title="秘密鍵の選択2" class="group1"><img src="/assets/images/books/winscp2_400.jpg" alt="秘密鍵の登録2" title="秘密鍵の登録2" class="w400"></a>

最後に、下中央にある [Login] をクリックします。

<a href="/assets/images/books/winscp3_400.jpg" title="winSCPへのログイン" class="group1"><img src="/assets/images/books/winscp3_400.jpg" alt="winSCPへのログイン" title="winSCPへのログイン" class="w400"></a>

初回接続時には警告メッセージが表示されますが、"はい" を選択してください
(次回から表示されません)。次の画面では、鍵を作成した際に指定したパスフレーズを入力します。

ログインに成功すると、左側のウィンドウにユーザの PC のフォルダ、右側のウィンドウに受付サーバの登録者専用ディレクトリが表示されます。
左側ウィンドウでファイルを選択し右側ウィンドウへドラッグ＆ドロップし、サーバへファイルを転送します。

<a href="/assets/images/books/winscp4_400.jpg" title="ファイルの転送" class="group1"><img src="/assets/images/books/winscp4_400.jpg" alt="ファイルの転送" title="ファイルの転送" class="w400"></a>

転送したファイルは、ファイルを選択し [削除] ボタンをクリックすることで削除できます。
  
#### Cyberduck (Mac OS X) {#cyberduck}

画面操作でデータを転送できる Cyberduck を使った方法を説明します。  

[Cyberduck (https://cyberduck.io)](https://cyberduck.io) をインストールし、起動します。

トップ画面で "Open Connection" を選択します。

Cyberduck の設定画面で、以下のように設定します。  

* 転送方式: SFTP (SSH File Transfer Protocol)
* Server: ftp-private.ddbj.nig.ac.jp
* Port: 22
* Username: (DDBJ Account ユーザ名を入力)
* Password: (空欄のまま)
* SSH Private Key: DDBJ アカウントに登録した公開鍵のペアになる秘密鍵を選択
* Add to Keychain: (チェックを入れる)

秘密鍵 (private key) はデフォルトで "ユーザのホームフォルダ .ssh フォルダ (Finder からは見えない隠しフォルダ) > id_rsa" に保存されています。

<a href="/assets/images/books/Cyberduck_3.jpg" title="Configuration" class="group1"><img src="/assets/images/books/Cyberduck_3.jpg" alt="Configuration" title="Configuration" class="w400"></a>

初回接続時には警告メッセージが表示されますが "常に" を選択してください (次回から表示されません)。

ログインに成功すると、データ受付サーバの登録者専用ディレクトリが表示されます。登録者の PC にあるファイルを選択しウィンドウにドラッグ＆ドロップすることで、ファイルをサーバに転送します。

### 転送がうまくいかない場合  {#trouble}

以下の FAQ を参照してください。

* [scp でファイルの転送ができません](/faq/ja/sftp.html)
* [ホスト鍵不一致の警告が表示され ftp-private にアクセスできません](/faq/ja/known-hosts.html)
