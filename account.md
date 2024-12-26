---
layout: indexed_content
title: 登録アカウント
lang: ja
---

## D-way アカウント  {#ddbj-submission-account}

[生命情報・DDBJ センター](/index.html) では [D-way アカウントシステム](https://ddbj.nig.ac.jp/D-way)を運用しています。D-way アカウントは DDBJ センターの BioProject/BioSample/DRA/GEA/JGA データベース、及び、[DBCLS](https://humandbs.dbcls.jp) の[提供・利用申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application)で使うことができます。

{::options parse_block_html="true" /}
<div class="attention">
- 責任者の許可のもとアカウントを作成し，データを管理してください。
- アカウントとパスワードはユーザが安全に管理してください。
- アカウント名は変更できません。
- アカウント情報の更新が反映されるまで10分程度時間がかかります。
- アカウント作成後、DBCLS 申請システムで利用できるようになるまで10分程度時間がかかります。
</div>

DDBJ センターではサイズの大きいファイルの転送に ssh 鍵認証を介した scp を利用しています。
そのため、DRA/GEA/JGA にデータファイルをアップロードするためには認証用公開鍵をアカウントに登録する必要があります。

DBCLS に提供・利用申請を提出するユーザは[申請に必要なアカウント情報を追加](#dbcls)します。追加した情報は申請フォームに自動入力されるようになるため、申請作業が効率的になります。

## D-way アカウントをウェブサイトで作成 {#account-for-bioproject-biosample-submissions}

### ウェブサイトでアカウントを作成  {#create-an-account-on-website}

登録ポータル ["D-way" (https://ddbj.nig.ac.jp/D-way)](https://ddbj.nig.ac.jp/D-way) にアクセスします。  
[Register for a new account] を押下します。

{::nomarkdown}
{% include image.html url="books/account_1_new.png" caption="新規アカウントを作成" class="w500" %}
{:/}

必要な情報を入力して [Continue] をクリックします。

{::nomarkdown}
{% include image.html url="books/account_2.jpg" caption="アカウント情報の入力" class="w250" %}
{:/}

{::options parse_block_html="true" /}
<div class="attention">
Login ID:
* 4 から 24 文字
* 小文字，数字と "_" を含めることができます
* "-" と大文字は使えません
* 数字と "_" を先頭に使うことはできません
</div>

入力した内容を確認し、利用規約を読んで同意したうえで [Create] を押下します。

{::nomarkdown}
{% include image.html url="books/account_3.jpg" caption="新規アカウントを予約" class="w400" %}
{:/}

入力されたアドレス宛に確認メールが送信されます。  
メール中のリンクをクリックし、パスワードを設定します。

<div class="attention">
アルファベットと数字を含む8文字以上のパスワードを設定します。
</div>

{::nomarkdown}
{% include image.html url="books/account_4.jpg" caption="パスワード設定" class="w300" %}
{:/}

パスワード設定後10分以上待ってから [D-way](https://ddbj.nig.ac.jp/D-way)にログインします。  
必須項目を含むアカウント情報の入力画面が表示されます。情報を入力し [Update\] を押下します。  

{::nomarkdown}
{% include image.html url="books/account_5.jpg" caption="アカウント情報の入力" class="w400" %}
{:/}

DRA/GEA/JGA にデータをアップロードするためには[認証用公開鍵](#generate-key-pair)の登録が必要です。  
アカウント情報入力後10分以上待ってから、[D-way](https://ddbj.nig.ac.jp/D-way)に再度ログインし、[認証用公開鍵](#generate-key-pair)を登録します。

## 認証用公開鍵の登録 {#public-key}

DRA/GEA/JGA にデータファイルをアップロードするためにはアカウントに公開鍵（ssh 認証用公開鍵）を登録する必要があります。  
DBCLS に提供・利用申請をする方は[アカウント情報の追加](/account.html#dbcls)が必要です。

## 公開鍵/秘密鍵ペアの生成  {#generate-key-pair}

<span class="red"><a href="/jga/download.html#key-for-decryption">JGA データセットの復号用鍵</a>は RSA 形式で作成する必要があります。ed25519 形式には対応していないのでご注意ください。</span>

### Windows {#windows}

D-way アカウントに登録する公開鍵は openSSH/PuTTY 形式のどちらでも問題ありません。
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

### アカウントの更新  {#update-account}

アカウント情報を編集し [Update\] ボタンでアカウントを更新します。登録した認証用公開鍵は新しいファイルをアップロードすることで上書きすることができます。

{::options parse_block_html="true" /}
<div class="attention">
更新したアカウント情報が反映されるまで10分程度かかります。10分以上後で再度ログインしてください。
</div>

## DBCLS 申請のための情報追加  {#dbcls}

アカウントに所属情報や日本語氏名、職位を登録します。
[DBCLS 申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)にログインし、右上のメニューから「ユーザ情報更新」を選択します。もしくは直接[ユーザ情報管理サイト](https://profile.ddbj.nig.ac.jp/groupmanager/secure)にアクセスします。

{% include image.html url="books/profile1.jpg" caption="ユーザ情報更新" class="w400" %}

アカウント情報を入力するため「Edit」をクリックします。

{% include image.html url="books/profile2.jpg" caption="Edit でアカウント情報の編集を開始" class="w300" %}

所属情報や日本語氏名を追加で入力します。

* Laboratory, Faculty, Department
* Postal code/Zip code
* State/Prefecture
* Street
* Phone
* Job Title
* First name in Japanese
* Last name in Japanese
* Job Title in Japanese

{% include image.html url="books/profile3.jpg" caption="アカウント情報を入力" class="w300" %}

「Save」で登録します。

{% include image.html url="books/profile4.jpg" caption="Save で保存" class="w300" %}

認証用公開鍵を登録する場合は [Key] を押下します。D-way アカウントに[公開鍵を登録済み](#register-public-key)の場合、この操作は不要です。
{% include image.html url="books/profile5.jpg" caption="認証用公開鍵の登録" class="w300" %}

鍵ファイルを選択し [Send] を押下します。
{% include image.html url="books/profile6.jpg" caption="認証用公開鍵の選択" class="w300" %}

## パスワードの再設定 {#password-reset}

[D-way](https://ddbj.nig.ac.jp/D-way) ログインページ下部の [Forgot password?\] をクリックします。   
{% include image.html url="books/pass-reset-1.jpg" caption="Forgot password" class="w500" %}

再設定するアカウント ID を入力し、[Submit\] をクリックします。  
アカウントが実在する場合、登録されているアドレスに再設定メールが送信されます。
{% include image.html url="books/pass-reset-2.jpg" caption="アカウント ID を入力" class="w400" %}

パスワード再設定メール中のリンクをクリックし、新しいパスワードを設定します。  
{% include image.html url="books/pass-reset-3.jpg" caption="パスワードを再設定" class="w400" %}

<div class="attention">
パスワード変更が反映されるまで10分程度時間がかかります。  
10分以上後で [D-way](https://ddbj.nig.ac.jp/D-way) にログインしてください。
</div>

## パスワードの変更 {#password-change}

[D-way](https://ddbj.nig.ac.jp/D-way/) からログインします。上部の Password メニューからパスワード変更ページへ移動します。

{::nomarkdown}
{% include image.html url="books/pass1.jpg" caption="password 変更ページへ移動" class="w400" %}
{:/}

現在のパスワードと新しいパスワードを入力し、Change ボタンをクリックしてパスワードを変更します。

{::nomarkdown}
{% include image.html url="books/pass2.jpg" caption="現在のパスワードと新しいパスワードを入力" class="w400" %}
{:/}

<div class="attention">
パスワード変更が反映されるまで10分程度かかります。
</div>

パスワードが変更されると以下の画面が表示されます。

{::nomarkdown}
{% include image.html url="books/pass3.jpg" caption="パスワードが変更されたことを伝えるメッセージ画面" class="w300" %}
{:/}

## メールアドレスの変更 {#mail-address-change}

Account の E-mail に新しいアドレスを入力して Update をクリックします。
変更前のアドレスに変更リクエストメールが送信されるので、本文中の手順に従ってアドレスを変更します。

{::nomarkdown}
{% include image.html url="account/mail-change.jpg" caption="メールアドレスの変更" class="w400" %}
{:/}

<div class="attention">
データ登録に関するメールは各登録に記載されたメールアドレスに対して送信されます。
D-way アカウントに登録されているメールアドレスを変更した場合、登録に関するメールが送信されるよう、登録データ中のアドレスも変更する必要があります。  
メールアドレス変更が反映されるまで10分程度かかります。
</div>

## セッションの期限切れ {#session}

D-way でパスワード変更後、"Session Expired" と表示される場合があります。この場合、ウェブブラウザーのシークレットモード ([Google chrome](https://support.google.com/chrome/answer/95464?co=GENIE.Platform%3DDesktop&hl=ja)、[Firefox](https://support.mozilla.org/ja/kb/private-browsing-use-firefox-without-history)) や別のブラウザーを使ってキャッシュがクリアされた状態で再度アクセスすると解消する場合があります。

{::nomarkdown}
{% include image.html url="books/d-way-session.jpg" caption="セッションの期限切れ画面" class="w300" %}
{:/}

## 秘密鍵ファイルの変換  {#convert-private-key}

### Windows PuTTY から OpenSSH 形式 {#putty-openssh}

"変換" メニューの "鍵のインポート" を選択し PuTTY で作成した秘密鍵を読み込みます。

[![]({{ site.baseurl }}/assets/images/books/con_1.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_1.jpg "鍵のインポート"){: .group1}

"変換" メニューの "OpenSSH 形式へエクスポート" を選択し，変換された秘密鍵を保存します。 OpenSSH 形式の秘密鍵は Unix と Mac OS X で使うことができます。

[![]({{ site.baseurl }}/assets/images/books/con_2.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_2.jpg "OpenSSH 形式へエクスポート"){: .group1}

### OpenSSH から Windows PuTTY 形式 {#openssh-putty}

"変換" メニューの "鍵のインポート" を選択し，OpenSSH で作成した秘密鍵を読み込みます。

[![]({{ site.baseurl }}/assets/images/books/con_3.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_3.jpg "鍵のインポート"){: .group1}

[秘密鍵の保存\] ボタンで PuTTY 形式に変換された秘密鍵を保存します。 PuTTY 形式の秘密鍵は Windows WinSCP で使うことができます。

[![]({{ site.baseurl }}/assets/images/books/con_4.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_4.jpg "変換された秘密鍵を保存"){: .group1}

