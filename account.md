---
layout: indexed_content
title: 登録アカウント
lang: ja
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/N76NUH748Fw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DDBJ 登録アカウントの作成

## D-way アカウント  {#ddbj-submission-account}

[生命情報・DDBJ センター](/index.html) では [D-way アカウントシステム](https://ddbj.nig.ac.jp/D-way)を運用しています。D-way アカウントは DDBJ センターの BioProject/BioSample/DRA/GEA/JGA データベース、及び、[NBDC](https://humandbs.biosciencedbc.jp) の[提供・利用申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application)で使うことができます。

{::options parse_block_html="true" /}
<div class="attention">

  - 責任者の許可のもとアカウントを作成し，データを管理してください。
  - アカウントとパスワードはユーザが安全に管理してください。
  - アカウント名は変更できません。
  - アカウント作成後、NBDC 申請システムで利用できるようになるまで10分程度時間がかかります。

</div>

DDBJ センターではサイズの大きいファイルの転送に ssh 鍵認証を介した scp を利用しています。
そのため、ファイル転送を伴う DRA、GEA と JGA を利用するためにはアカウントに認証用の公開鍵（認証用公開鍵）を登録する必要があります。
また、DRA のメタデータでは登録者組織に割り当てられる center name が必須であるため、center name の登録も合わせて必要になります。

{::nomarkdown}
{% include image.html url="books/hac01.jpg" caption="アカウントのサービス利用権限" class="w300" %}
{:/}

## D-way アカウントをウェブサイトで作成 {#account-for-bioproject-biosample-submissions}

### ウェブサイトでアカウントを作成  {#create-an-account-on-website}

ウェブサイトで新規作成したアカウントはデフォルトで BioProject/BioSample/NBDC 申請サービスを利用することができます。

登録ポータル ["D-way" (https://ddbj.nig.ac.jp/D-way)](https://ddbj.nig.ac.jp/D-way)</a> にアクセスします。
[Register for a new account] ボタンをクリックします。

{::nomarkdown}
{% include image.html url="books/account_1_new.png" caption="新規アカウントを作成" class="w250" %}
{:/}

必要な情報を入力して [Continue\] をクリックします。

{::nomarkdown}
{% include image.html url="books/account_2.jpg" caption="アカウント情報の入力" class="w250" %}
{:/}

{::options parse_block_html="true" /}
<div class="attention">

Login ID: 
: 4 から 24 文字
: 小文字，数字と "_" を含めることができます
: "-" と大文字は使えません
: 数字と "_" を先頭に使うことはできません

</div>

入力した内容を確認し，[Create\] をクリックします。

{::nomarkdown}
{% include image.html url="books/account_3.jpg" caption="新規アカウントを予約" class="w250" %}
{:/}

入力されたアドレス宛に確認メールが送信されます。 メールに従い，予約したアカウントを有効にします。
続いて有効化したアカウントのパスワードを設定します。

<div class="attention">

アルファベットと数字を含む8 文字以上のパスワードを設定します。

</div>

{::nomarkdown}
{% include image.html url="books/account_4.jpg" caption="パスワードを設定" class="w250" %}
{:/}

{::nomarkdown}
{% include image.html url="books/initial.jpg" caption="BioProject/BioSample/NBDC 申請システムを利用可能" class="w450" %}
{:/}

## DRA/GEA/JGA の登録権限を追加  {#enable-dra-submission-in-account}

サイズの大きいデータファイル転送を伴う DRA/GEA/JGA サービスを利用するため、アカウントに center name と公開鍵（認証用公開鍵）を登録します。公開鍵はユーザの認証に用いられます。    

JGA サービスを利用するため NBDC に提供・利用申請をする方は[アカウント情報の追加](/account.html#nbdc)が必要です。

### 公開鍵/秘密鍵ペアの生成  {#generate-key-pair}

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Windows</a></h4>
<div class="accordion-content">

<iframe width="560" height="315" src="https://www.youtube.com/embed/mggRnbxr0gQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

"PuTTY Key Generator" をインストールし，起動します。 下のように設定し [Generate\] をクリックします。

[![]({{ site.baseurl }}/assets/images/books/win_key_1.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/win_key_1.jpg "PuTTY Key Generator パラメータ設定"){: .group1}

ウィンドウのなかでマウスポインターをランダムに動かして鍵を生成させます。生成される公開鍵と秘密鍵を保存します。鍵は WinSCP
でそのまま使用できる PuTTY 形式で保存されます。

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Mac OS X</a></h4>
<div class="accordion-content">

<iframe width="560" height="315" src="https://www.youtube.com/embed/h9LbhwROtOM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
"/Users/you/.ssh" フォルダに秘密鍵は "id_rsa" として，公開鍵は "id_rsa.pub" として保存されます。
```

公開鍵を含んでいる隠しフォルダ ".ssh" を表示します。 ファインダーの "移動" メニューから "フォルダへ移動" を選択します。

[![]({{ site.baseurl }}/assets/images/books/mac_key_2.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/mac_key_2.jpg "フォルダへ移動"){: .group1}

"フォルダへ移動" ウィンドウでホーム直下の ".ssh" フォルダのパスを入力します。

[![]({{ site.baseurl }}/assets/images/books/mac_key_3.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/mac_key_3.jpg ".ssh フォルダまでのパスを入力"){: .group1}

公開鍵ファイル "id\_rsa.pub" が表示されます。

[![]({{ site.baseurl }}/assets/images/books/mac_key_4.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/mac_key_4.jpg ".ssh フォルダ中の公開鍵ファイル"){: .group1}

その公開鍵ファイル "id\_rsa.pub" をデスクトップなどにコピーし，アカウントに登録します。

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Unix</a></h4>
<div class="accordion-content">

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

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

### Center name と認証用公開鍵の登録  {#register-center-name-and-public-key}

<iframe width="560" height="315" src="https://www.youtube.com/embed/N76NUH748Fw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[登録アカウント](https://ddbj.nig.ac.jp/D-way/)にログインします。 "アカウント" ページの "Center Full Name" に組織名を入力し，提示される候補から適切なものを選びます。 [Update\] をクリックしてアカウントを更新します。

{::nomarkdown}
{% include image.html url="books/center.jpg" caption="center name を登録" class="w400" %}
{:/}

適切な center が登録されていない場合，[Apply new center name\] をクリックし，組織のフルネームとともに center の新規登録を [DDBJ](/contact-ddbj.html) に申請します。

Center name が登録されると，下部の "Public Key"
エリアから公開鍵をアップロードできるようになります。認証用公開鍵ファイルを選択し，[Register
public key\] で鍵を登録します。

{::nomarkdown}
{% include image.html url="books/keyregister.jpg" caption="認証用公開鍵を登録" class="w400" %}
{:/}

登録後、左上の "DRA と GEA" メニューから DRA と GEA にそれぞれデータを登録することができます。

{::nomarkdown}
{% include image.html url="books/drasub.jpg" caption="DRA/GEA に登録することができるようになります" class="w450" %}
{:/}

機能が未実装であるため D-way ウェブポータルでは JGA 登録をみることができません。認証用公開鍵をアカウントに登録後、[「JGA への登録手順」](/jga/submission-step.html)、及び、[「JGA データの利用手順」](/jga/download.html)に従ってサービスを利用してください。    

### NBDC 申請のための情報追加  {#nbdc}

アカウントに所属情報や日本語氏名を登録します。    
[NBDC 申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)にログインし、右上のメニューから「ユーザ情報更新」を選択します。  

{% include image.html url="books/profile1.jpg" caption="ユーザ情報更新" class="w400" %}

アカウント情報を入力するため「Edit」をクリックします。

{% include image.html url="books/profile2.jpg" caption="Edit でアカウント情報の編集を開始" class="w300" %}

所属情報や日本語氏名を追加で入力します。

* Laboratory, Faculty, Department
* Country
* Postal code/Zip code
* State/Prefecture
* City
* Street
* First name in Japanese
* Last name in Japanese

{% include image.html url="books/profile3.jpg" caption="アカウント情報を入力" class="w400" %}

「Save」で登録します。

{% include image.html url="books/profile4.jpg" caption="Save で保存" class="w300" %}

### アカウントの更新  {#update-account}

アカウント情報を編集し [Update\] ボタンでアカウントを更新します。登録した認証用公開鍵は新しいファイルをアップロードすることで上書きすることができます。

## パスワードの変更 {#password-chang}

[D-way](https://ddbj.nig.ac.jp/D-way/) からログインします。上部の Password メニューからパスワード変更ページへ移動します。

{::nomarkdown}
{% include image.html url="books/pass1.jpg" caption="password 変更ページへ移動" class="w400" %}
{:/}

現在のパスワードと新しいパスワードを入力し、Change ボタンをクリックしてパスワードを変更します。

{::nomarkdown}
{% include image.html url="books/pass2.jpg" caption="現在のパスワードと新しいパスワードを入力" class="w400" %}
{:/}

パスワードが変更されると以下の画面が表示されます。

{::nomarkdown}
{% include image.html url="books/pass3.jpg" caption="パスワードが変更されたことを伝えるメッセージ画面" class="w300" %}
{:/}

## セッションの期限切れ {#session}

D-way でパスワード変更後、"Session Expired" と表示される場合があります。この場合、ウェブブラウザーのシークレットモード ([Google chrome](https://support.google.com/chrome/answer/95464?co=GENIE.Platform%3DDesktop&hl=ja)、[Firefox](https://support.mozilla.org/ja/kb/private-browsing-use-firefox-without-history)) や別のブラウザーを使ってキャッシュがクリアされた状態で再度アクセスすると解消する場合があります。

{::nomarkdown}
{% include image.html url="books/d-way-session.jpg" caption="セッションの期限切れ画面" class="w300" %}
{:/}

## 秘密鍵ファイルの変換  {#convert-private-key}

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Windows PuTTY から OpenSSH 形式</a></h4>
<div class="accordion-content">

"変換" メニューの "鍵のインポート" を選択し PuTTY で作成した秘密鍵を読み込みます。

[![]({{ site.baseurl }}/assets/images/books/con_1.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_1.jpg "鍵のインポート"){: .group1}

"変換" メニューの "OpenSSH 形式へエクスポート" を選択し，変換された秘密鍵を保存します。 OpenSSH 形式の秘密鍵は Unix と Mac OS X で使うことができます。

[![]({{ site.baseurl }}/assets/images/books/con_2.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_2.jpg "OpenSSH 形式へエクスポート"){: .group1}

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">OpenSSH から Windows PuTTY 形式</a></h4>
<div class="accordion-content">

"変換" メニューの "鍵のインポート" を選択し，PuTTY で作成した秘密鍵を読み込みます。

[![]({{ site.baseurl }}/assets/images/books/con_3.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_3.jpg "鍵のインポート"){: .group1}

[秘密鍵の保存\] ボタンで PuTTY 形式に変換された秘密鍵を保存します。 PuTTY 形式の秘密鍵は Windows WinSCP
で使うことができます。

[![]({{ site.baseurl }}/assets/images/books/con_4.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/con_4.jpg "変換された秘密鍵を保存"){: .group1}

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>
