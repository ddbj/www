---
layout: indexed_content
title: 登録アカウント
pathname: account
category: _home
---

<div class="section book">

<div class="arve-wrapper arve-thumb-wrapper arve-youtube-wrapper" style="background-image: url(https://img.youtube.com/vi/N76NUH748Fw/maxresdefault.jpg);">

<div class="arve-embed-container">

[](//www.youtube-nocookie.com/embed/N76NUH748Fw?autohide=1&iv_load_policy=3&modestbranding=1&rel=0&wmode=transparent&autoplay=1 "DDBJ 登録アカウントの作成")

</div>

</div>

DDBJ 登録アカウントの作成

<div class="section chapter">

## DDBJ 登録アカウント

[日本 DNA データバンク (DDBJ)](/index.html) は [BioProject](/bioproject/index.html) ，[BioSample](/biosample/index.html) と [DRA](/dra/index.html) への登録をユーザアカウントで管理しています。

<div class="attention no_top">

  - 責任者の許可のもとアカウントを作成し，データを登録してください。
  - アカウントとパスワードはユーザが安全に管理してください。
  - 所有者が異なる組織に移った場合，アカウントの再取得を推奨します。
  - アカウント名は変更できません。

</div>

</div>

DDBJ には二種類の登録アカウントがあります。[DDBJ Sequence Read Archive(DRA)](/dra/index.html) にデータを登録するためには，アカウントに center name と公開鍵を登録する必要があります。

![二種類の登録アカウント](/images/books/hac01.jpg)

<div class="section chapter">

## ウェブから取得した登録用アカウント

<div class="section section">

### ウェブ上でアカウントを取得

この章で説明されている方法で取得したアカウントでは [BioProject](/bioproject/index.html) と[BioSample](/biosample/index.html) に登録できます。

<div class="attention no_top">

DRA へデータを登録するためには， center name と公開鍵をアカウントに登録する必要があります。

</div>

登録ポータル ["D-way"(https://ddbj.nig.ac.jp/D-way)](https://ddbj.nig.ac.jp/D-way/)にアクセスします。  
[Register for a new account\] ボタンをクリックします。

![新規アカウントを作成](/images/books/account_1_new.png "新規アカウントを作成")

必要な情報を入力して [Continue\] をクリックします。

![アカウント情報の入力](/images/books/account_2.jpg "アカウント情報の入力")

<div class="attention no_top">

  - Login ID:
  - 4 から 24 文字
  - 小文字，数字と "\_" を含めることができます
  - "-" と大文字は使えません
  - 数字と "\_" を先頭に使うことはできません

</div>

入力した内容を確認し，[Create\] をクリックします。

![新規アカウントを予約](/images/books/account_3.jpg "新規アカウントを予約")

入力されたアドレス宛に確認メールが送信されます。 メールに従い，予約したアカウントを有効にします。
続いて有効化したアカウントのパスワードを設定します。

<div class="attention no_top">

アルファベットと数字を含む8 文字以上のパスワードを設定します。

</div>

![パスワードを設定](/images/books/account_4.jpg "パスワードを設定")

![アカウントから BioProject と BioSample に登録できます](/images/books/initial.jpg
"アカウントから BioProject と BioSample に登録できます")

</div>

</div>

<div class="section chapter">

## DRA への登録権限を追加

[DDBJ Sequence Read Archive (DRA)](/dra/index.html) へデータを登録するため，アカウントにcenter name と公開鍵を登録します。 [Centername](/dra/submission.html#Submission_Center_Name) は DRAが組織に対して割り振っている略号です。 公開鍵はユーザの認証に用いられます。

<div class="section section">

### 公開鍵/秘密鍵ペアの生成

<div class="section sub_section">

#### [Windows](javascript:void\(0\))

<div class="toggle_text">

<div class="arve-wrapper arve-thumb-wrapper arve-youtube-wrapper" style="background-image: url(https://img.youtube.com/vi/mggRnbxr0gQ/maxresdefault.jpg);">

<div class="arve-embed-container">

[](//www.youtube-nocookie.com/embed/mggRnbxr0gQ?autohide=1&iv_load_policy=3&modestbranding=1&rel=0&wmode=transparent&autoplay=1 "鍵ペアの作成 (Windows)")

</div>

</div>

"PuTTY Key Generator" をインストールし，起動します。 下のように設定し [Generate\] をクリックします。

![](/images/books/win_key_1.jpg "PuTTY Key Generator パラメータ設定")

ウィンドウのなかでマウスポインターをランダムに動かして鍵を生成させます。生成される公開鍵と秘密鍵を保存します。鍵は WinSCP
でそのまま使用できる PuTTY 形式で保存されます。

</div>

</div>

<div class="section sub_section">

#### [Mac OS X](javascript:void\(0\))

<div class="toggle_text">

<div class="arve-wrapper arve-thumb-wrapper arve-youtube-wrapper" style="background-image: url(https://img.youtube.com/vi/h9LbhwROtOM/maxresdefault.jpg);">

<div class="arve-embed-container">

[](//www.youtube-nocookie.com/embed/h9LbhwROtOM?autohide=1&iv_load_policy=3&modestbranding=1&rel=0&wmode=transparent&autoplay=1 "鍵ペアの作成 (Mac)")

</div>

</div>

Macintosh HD \> アプリケーション \> ユーティリティ \> ターミナル.app. からターミナルを起動します。

![](/images/books/mac_key_1.jpg "Mac ターミナルを起動")

ターミナルで以下のコマンドを実行し，鍵を生成します。

``` code
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

![](/images/books/mac_key_2.jpg "フォルダへ移動")

"フォルダへ移動" ウィンドウでホーム直下の ".ssh" フォルダのパスを入力します。

![](/images/books/mac_key_3.jpg ".ssh フォルダまでのパスを入力")

公開鍵ファイル "id\_rsa.pub" が表示されます。

![](/images/books/mac_key_4.jpg ".ssh フォルダ中の公開鍵ファイル")

その公開鍵ファイル "id\_rsa.pub" をデスクトップなどにコピーし，アカウントに登録します。

</div>

</div>

<div class="section sub_section">

#### [Unix](javascript:void\(0\))

<div class="toggle_text">

``` code
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

</div>

</div>

</div>

<div class="section section">

### Center name と公開鍵の登録

<div class="arve-wrapper arve-thumb-wrapper arve-youtube-wrapper" style="background-image: url(https://img.youtube.com/vi/N76NUH748Fw/maxresdefault.jpg);">

<div class="arve-embed-container">

[](//www.youtube-nocookie.com/embed/N76NUH748Fw?autohide=1&iv_load_policy=3&modestbranding=1&rel=0&wmode=transparent&autoplay=1 "DDBJ 登録アカウントの作成")

</div>

</div>

[登録アカウント](https://ddbj.nig.ac.jp/D-way/)にログインします。 "アカウント" ページの "Center Full Name" に組織名を入力し，提示される候補から適切なものを選びます。 [Update\] をクリックしてアカウントを更新します。

![center name を登録](/images/books/center.jpg "center name を登録")

適切な center が登録されていない場合，[Apply new center name\] をクリックし，組織のフルネームとともに center の新規登録を [DDBJ](/contact.html) に申請します。

Center name が登録されると，下部の "Public Key"
エリアから公開鍵をアップロードできるようになります。公開鍵ファイルを選択し，[Register
public key\] で鍵を登録します。

![公開鍵を登録](/images/books/keyregister.jpg "公開鍵を登録")

登録後，左上の "DRA" メニューから DRA にデータを登録することができます。

![DRA に登録することができるようになります](/images/books/drasub.jpg
"DRA に登録することができるようになります")

</div>

<div class="section section">

### アカウントの更新

アカウント情報を編集し [Update\] ボタンでアカウントを更新します。登録した公開鍵は新しいファイルをアップロードすることで上書きすることができます。

</div>

</div>

<div class="section chapter">

## 秘密鍵ファイルの変換

<div class="section section">

#### [Windows PuTTY から OpenSSH 形式](javascript:void\(0\))

<div class="toggle_text">

"変換" メニューの "鍵のインポート" を選択し PuTTY で作成した秘密鍵を読み込みます。

![](/images/books/con_1.jpg "鍵のインポート")

"変換" メニューの "OpenSSH 形式へエクスポート" を選択し，変換された秘密鍵を保存します。 OpenSSH 形式の秘密鍵は Unix と Mac OS X で使うことができます。

![](/images/books/con_2.jpg "OpenSSH 形式へエクスポート")

</div>

</div>

<div class="section section">

#### [OpenSSH から Windows PuTTY 形式](javascript:void\(0\))

<div class="toggle_text">

"変換" メニューの "鍵のインポート" を選択し，PuTTY で作成した秘密鍵を読み込みます。

![](/images/books/con_3.jpg "鍵のインポート")

[秘密鍵の保存\] ボタンで PuTTY 形式に変換された秘密鍵を保存します。 PuTTY 形式の秘密鍵は Windows WinSCP
で使うことができます。

![](/images/books/con_4.jpg "変換された秘密鍵を保存")

</div>

</div>

</div>

</div>
