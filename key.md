---
layout: indexed_content
title: 公開鍵・秘密鍵の生成
lang: ja
---

## 公開鍵・秘密鍵の生成  {#generate-key-pair}

<span class="red"><a href="/jga/download.html#key-for-decryption">JGA データセットの復号用鍵</a>は RSA 形式で作成する必要があります。ed25519 形式には対応していないのでご注意ください。</span>

### Windows {#windows}

DDBJ アカウントに登録する公開鍵は openSSH/PuTTY 形式のどちらでも問題ありません。
JGA データ復号は openSSH 形式の秘密鍵、WinSCP で指定する秘密鍵は PuTTY 形式のものを使用する必要があります。

#### OpenSSH 形式 {#openssh}

JGA データ復号には openSSH 形式の秘密鍵を使用します。

Windows PowerShell を起動します。

[![]({{ site.baseurl }}/assets/images/books/win-ps-1.jpg){:.w200}]({{ site.baseurl }}/assets/images/books/win-ps-1.jpg "Windows PowerShell を起動"){: .group1}

PowerShell のターミナルで以下のコマンドを実行し、openSSH 形式の鍵ペアを生成します。

```
鍵ペアの生成。
デフォルトでは mtaro というユーザであれば C:\Users\mtaro に作成されます。
PS C:\Users\mtaro> ssh-keygen -t rsa

メッセージが表示されます。
Generating public/private rsa key pair.

パスフレーズを設定しない場合は [Enter] を押します。
Enter passphrase (empty for no passphrase):
Enter same passphrase again:

Your identification has been saved in id_rsa.
Your public key has been saved in id_rsa.pub.

"C:\Users\mtaro" に秘密鍵は "id_rsa" として、公開鍵は "id_rsa.pub" として保存されます。
```

実際の画面では以下のようになります。

[![]({{ site.baseurl }}/assets/images/books/win-ps-2.jpg){:.w600}]({{ site.baseurl }}/assets/images/books/win-ps-2.jpg "鍵生成コマンドを実行"){: .group1}

OpenSSH 形式の秘密鍵 (id_isa) と公開鍵 (id_rsa.pub) がユーザフォルダ（例では C:ユーザ:mtaro の直下）に作成されます。
[![]({{ site.baseurl }}/assets/images/books/win-ps-3.jpg){:.w500}]({{ site.baseurl }}/assets/images/books/win-ps-3.jpg "ユーザフォルダの下に鍵ペアが生成されます"){: .group1}

JGA の[データセット復号用公開鍵・秘密鍵ペア](/jga/download.html#key-for-decryption)は -f オプションで利用申請 ID をファイル名に含めて保存するとペアを識別しやすくなります。
```
PS C:\Users\mtaro> ssh-keygen -t rsa -f J-DU999991
"C:\Users\mtaro" に秘密鍵は "J-DU999991" として、公開鍵は "J-DU999991.pub" として保存されます。
```

#### PuTTY 形式 {#putty}

データ転送ソフト WinSCP は PuTTY 形式の秘密鍵を使用します。

"PuTTY Key Generator" をインストールし，起動します。 下のように設定し [Generate\] をクリックします。

[![]({{ site.baseurl }}/assets/images/books/win_key_1.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/win_key_1.jpg "PuTTY Key Generator パラメータ設定"){: .group1}

ウィンドウのなかでマウスポインターをランダムに動かして鍵を生成させます。生成される公開鍵と秘密鍵を保存します。鍵は WinSCP
でそのまま使用できる PuTTY 形式で保存されます。

JGA の[データセット復号用公開鍵・秘密鍵ペア](/jga/download.html#key-for-decryption)は利用申請 ID をファイル名に含めて保存するとペアを識別しやすくなります。
例 公開鍵 J-DU999991.pub、秘密鍵 J-DU999991

### Mac OS X {#mac}

Macintosh HD \> アプリケーション \> ユーティリティ \> ターミナル.app. からターミナルを起動します。

[![]({{ site.baseurl }}/assets/images/books/mac_key_1.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/mac_key_1.jpg "Mac ターミナルを起動"){: .group1}

ターミナルで以下のコマンドを実行し，鍵を生成します。

```
鍵ペアの生成。
$ ssh-keygen -t rsa

メッセージが表示されます。
Generating public/private rsa key pair.

鍵の保存場所を指定します。[Enter] キーを押します。
Enter file in which to save the key (/Users/you/.ssh/id_rsa):

パスフレーズを設定しない場合は [Enter] を押します。
Enter passphrase (empty for no passphrase):
Enter same passphrase again:

Your identification has been saved in /Users/you/.ssh/id_rsa.
Your public key has been saved in /Users/you/.ssh/id_rsa.pub.
"/Users/you/.ssh" フォルダに秘密鍵は "id_rsa" として、公開鍵は "id_rsa.pub" として保存されます。
```

公開鍵を含んでいる隠しフォルダ ".ssh" を表示します。 ファインダーの "移動" メニューから "フォルダへ移動" を選択します。

[![]({{ site.baseurl }}/assets/images/books/mac_key_2.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/mac_key_2.jpg "フォルダへ移動"){: .group1}

"フォルダへ移動" ウィンドウでホーム直下の ".ssh" フォルダのパスを入力します。

[![]({{ site.baseurl }}/assets/images/books/mac_key_3.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/mac_key_3.jpg ".ssh フォルダまでのパスを入力"){: .group1}

公開鍵ファイル "id\_rsa.pub" が表示されます。

[![]({{ site.baseurl }}/assets/images/books/mac_key_4.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/mac_key_4.jpg ".ssh フォルダ中の公開鍵ファイル"){: .group1}

その公開鍵ファイル "id\_rsa.pub" をデスクトップなどにコピーし，アカウントに登録します。

JGA の[データセット復号用公開鍵・秘密鍵ペア](/jga/download.html#key-for-decryption)は -f オプションで利用申請 ID をファイル名に含めて保存するとペアを識別しやすくなります。
```
$ ssh-keygen -t rsa -f J-DU999991
"/Users/you/.ssh" フォルダに秘密鍵は "J-DU999991" として、公開鍵は "J-DU999991.pub" として保存されます。
```

### Unix {#unix}

```
鍵ペアの生成。
$ ssh-keygen -t rsa

メッセージが表示されます。
Generating public/private rsa key pair.

鍵の保存場所を指定します。[Enter] キーを押します。
Enter file in which to save the key (/Users/you/.ssh/id_rsa):

パスフレーズを設定しない場合は [Enter] を押します。
Enter passphrase (empty for no passphrase):
Enter same passphrase again:

Your identification has been saved in /Users/you/.ssh/id_rsa.
Your public key has been saved in /Users/you/.ssh/id_rsa.pub.
"/Users/you/.ssh" フォルダに秘密鍵は "id_rsa" として，公開鍵は "id_rsa.pub" として保存されます。
```

JGA の[データセット復号用公開鍵・秘密鍵ペア](/jga/download.html#key-for-decryption)は -f オプションで利用申請 ID をファイル名に含めて保存するとペアを識別しやすくなります。
```
$ ssh-keygen -t rsa -f J-DU999991
"/Users/you/.ssh" フォルダに秘密鍵は "J-DU999991" として、公開鍵は "J-DU999991.pub" として保存されます。
```

### 認証用公開鍵の登録 {#register-public-key}

[登録アカウント](https://ddbj.nig.ac.jp/D-way/)にログインします。"アカウント" ページ下部の "Public Key"
エリアから公開鍵をアップロードします。認証用公開鍵ファイルを選択し，[Register public key\] で鍵を登録します。

{::nomarkdown}
{% include image.html url="books/keyregister.jpg" caption="認証用公開鍵を登録" class="w500" %}
{:/}

D-way ウェブサービスでは JGA を利用することができません。認証用公開鍵をアカウントに登録後、[「JGA への登録手順」](/jga/submission-step.html)、及び、[「JGA データの利用手順」](/jga/download.html)に従ってサービスを利用してください。

### 秘密鍵ファイルの変換  {#convert-private-key}

#### Windows PuTTY から OpenSSH 形式 {#putty-openssh}

"変換" メニューの "鍵のインポート" を選択し PuTTY で作成した秘密鍵を読み込みます。

[![]({{ site.baseurl }}/assets/images/books/con_1.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_1.jpg "鍵のインポート"){: .group1}

"変換" メニューの "OpenSSH 形式へエクスポート" を選択し，変換された秘密鍵を保存します。 OpenSSH 形式の秘密鍵は Unix と Mac OS X で使うことができます。

[![]({{ site.baseurl }}/assets/images/books/con_2.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_2.jpg "OpenSSH 形式へエクスポート"){: .group1}

#### OpenSSH から Windows PuTTY 形式 {#openssh-putty}

"変換" メニューの "鍵のインポート" を選択し，OpenSSH で作成した秘密鍵を読み込みます。

[![]({{ site.baseurl }}/assets/images/books/con_3.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_3.jpg "鍵のインポート"){: .group1}

[秘密鍵の保存\] ボタンで PuTTY 形式に変換された秘密鍵を保存します。 PuTTY 形式の秘密鍵は Windows WinSCP で使うことができます。

[![]({{ site.baseurl }}/assets/images/books/con_4.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_4.jpg "変換された秘密鍵を保存"){: .group1}