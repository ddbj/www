---
layout: indexed_content
title: 登録アカウント
pathname: account
category: tentative
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/N76NUH748Fw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


DDBJ 登録アカウントの作成

## DDBJ 登録アカウント

[日本 DNA データバンク (DDBJ)](/index.html) は [BioProject](/bioproject/index.html) ，[BioSample](/biosample/index.html) と [DRA](/dra/index.html) への登録をユーザアカウントで管理しています。

{::options parse_block_html="true" /}
<div class="attention red">

  - 責任者の許可のもとアカウントを作成し，データを登録してください。
  - アカウントとパスワードはユーザが安全に管理してください。
  - 所有者が異なる組織に移った場合，アカウントの再取得を推奨します。
  - アカウント名は変更できません。

</div>

DDBJ には二種類の登録アカウントがあります。[DDBJ Sequence Read Archive(DRA)](/dra/index.html) にデータを登録するためには，アカウントに center name と公開鍵を登録する必要があります。

{::nomarkdown}
{% include image.html url="books/hac01.jpg" caption="二種類の登録アカウント" class="w300" %}
{:/}

## ウェブから取得した登録用アカウント

### ウェブ上でアカウントを取得

この章で説明されている方法で取得したアカウントでは [BioProject](/bioproject/index.html) と[BioSample](/biosample/index.html) に登録できます。

<div class="attention red">

DRA へデータを登録するためには， center name と公開鍵をアカウントに登録する必要があります。

</div>

登録ポータル ["D-way"(https://ddbj.nig.ac.jp/D-way)](https://ddbj.nig.ac.jp/D-way/)にアクセスします。  
[Register for a new account\] ボタンをクリックします。

{::nomarkdown}
{% include image.html url="books/account_1_new.png" caption="新規アカウントを作成" class="w250" %}
{:/}

必要な情報を入力して [Continue\] をクリックします。

{::nomarkdown}
{% include image.html url="books/account_2.jpg" caption="アカウント情報の入力" class="w250" %}
{:/}

{::options parse_block_html="true" /}
<div class="attention red">

Login ID: 
: 4 から 24 文字
: 小文字，数字と "\_" を含めることができます
: "-" と大文字は使えません
: 数字と "\_" を先頭に使うことはできません

</div>

入力した内容を確認し，[Create\] をクリックします。

{::nomarkdown}
{% include image.html url="books/account_3.jpg" caption="新規アカウントを予約" class="w250" %}
{:/}

入力されたアドレス宛に確認メールが送信されます。 メールに従い，予約したアカウントを有効にします。
続いて有効化したアカウントのパスワードを設定します。

<div class="attention red">

アルファベットと数字を含む8 文字以上のパスワードを設定します。

</div>

{::nomarkdown}
{% include image.html url="books/account_4.jpg" caption="パスワードを設定" class="w250" %}
{:/}

{::nomarkdown}
{% include image.html url="books/initial.jpg" caption="アカウントから BioProject と BioSample に登録できます" class="w450" %}
{:/}

## DRA への登録権限を追加

[DDBJ Sequence Read Archive (DRA)](/dra/index.html) へデータを登録するため，アカウントにcenter name と公開鍵を登録します。 [Centername](/dra/submission.html#Submission_Center_Name) は DRAが組織に対して割り振っている略号です。 公開鍵はユーザの認証に用いられます。

### 公開鍵/秘密鍵ペアの生成

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

### Center name と公開鍵の登録

<iframe width="560" height="315" src="https://www.youtube.com/embed/N76NUH748Fw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[登録アカウント](https://ddbj.nig.ac.jp/D-way/)にログインします。 "アカウント" ページの "Center Full Name" に組織名を入力し，提示される候補から適切なものを選びます。 [Update\] をクリックしてアカウントを更新します。

{::nomarkdown}
{% include image.html url="books/center.jpg" caption="center name を登録" class="w400" %}
{:/}

適切な center が登録されていない場合，[Apply new center name\] をクリックし，組織のフルネームとともに center の新規登録を [DDBJ](/contact.html) に申請します。

Center name が登録されると，下部の "Public Key"
エリアから公開鍵をアップロードできるようになります。公開鍵ファイルを選択し，[Register
public key\] で鍵を登録します。

{::nomarkdown}
{% include image.html url="books/keyregister.jpg" caption="公開鍵を登録" class="w400" %}
{:/}

登録後，左上の "DRA" メニューから DRA にデータを登録することができます。

{::nomarkdown}
{% include image.html url="books/drasub.jpg" caption="DRA に登録することができるようになります" class="w450" %}
{:/}

### アカウントの更新

アカウント情報を編集し [Update\] ボタンでアカウントを更新します。登録した公開鍵は新しいファイルをアップロードすることで上書きすることができます。

## 秘密鍵ファイルの変換

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