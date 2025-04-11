---
layout: indexed_content
title: DDBJ アカウント
lang: ja
---

## はじめに {#introduction}

生命情報・DDBJ センター（DDBJ センター）のデータ登録や解析サービスを利用するためにはアカウントが必要です。本ページでは、DDBJ アカウントの作成や更新方法について説明しています。

## アカウントの新規作成 {#create-account}

1. [DDBJ アカウント](https://accounts.ddbj.nig.ac.jp)にアクセスし、\[Create an account\] を押下します。アカウント情報を入力後、[DDBJ センターの利用規約](/policies.html)に同意し、\[Create Account\] を押下します。
2. 設定したユーザ名とパスワードでログインします。

### アカウント作成時の注意事項 {#caution}

- ユーザ名は3～24文字の小文字、数字、"\_"（アンダースコア）と "-"（ハイフン）を利用できます。先頭に記号（"\_"、"-"）を使うことはできません。作成後、ユーザ名は変更できません。
- NBDC ヒトデータベースに提供・利用申請をする場合は、必須項目以外の情報が追加で必要になります。
- パスワードはアルファベットと数字を含む8文字以上のものを設定します。
- アカウント作成時に[利用規約](/policies.html)への同意が必要です。
- 責任者の許可のもとでアカウントを作成し、安全に管理してください。

## アカウントの利用 {#use-account}

DDBJ アカウントを利用して、以下のサービスを利用することができます。  
- D-way 登録システムを利用した BioProject/BioSample/DRA/GEA へのメタデータ登録
- MSS システムを利用した塩基配列の登録
- NBDC ヒトデータベース申請システムを利用した提供・利用申請
- sftp による BioProject/BioSample/DRA/GEA/MetaboBank/MSS 登録データアップロード
- sftp による JGA/AGD データのアップロード・ダウンロード
- DFAST ウェブサービスにおけるジョブ実行

アカウント情報の作成・更新が、D-way 登録システム/NBDC ヒトデータベース申請システム/JGA/AGD に反映するまで15分程度の時間がかかります。

### NBDC ヒトデータベース申請システム利用における注意事項 {#humandbs}

NBDC ヒトデータベース申請システムでは、日本語による申請の場合、日本語の氏名や所属詳細情報などを含む以下の項目が追加で必要です。    
- First name in Japanese
- Last name in Japanese
- Job title
- Job title in Japanese
- Laboratory, Faculty, Department
- Postal code/Zip code
- State/Prefecture
- Street
- Phone

## SSH 公開鍵の登録 {#key}

[DDBJ アカウント](https://accounts.ddbj.nig.ac.jp) にログインし、SSH keys を選択します。  
[New SSH key] から、SSH 公開鍵をファイルアップロード、もしくは、内容をコピーして登録します。サポートされている形式は RSA, ECDSA, ED25519 になります。

## アカウント情報の更新 {#update-account}

1. [DDBJ アカウント](https://accounts.ddbj.nig.ac.jp)にアクセス後、\[Sign in\] を押下し、ユーザ名もしくはメールアドレス、及び、パスワードを入力してログインします。
2. 各メニューからアカウント情報の変更、パスワードの変更、SSH 公開鍵の登録・削除が可能です。

## トラブルシューティング {#trouble-shooting}

### パスワードを忘れた {#forgot-password}

パスワードリセットを実施してください。

### ユーザ名を忘れた {#forgot-username}

[DDBJ アカウント](https://accounts.ddbj.nig.ac.jp/) でユーザ名の代わりに登録メールアドレスを使って、ログインしてください。

### SSH 接続ができない {#cannot-ssh}

SSH 公開鍵が正しく登録されているかご確認ください。以下の FAQ もご参照ください。

- [SSH でファイルの転送ができません](/faq/ja/sftp.html)
- [ホスト鍵不一致の警告が表示され ftp-private にアクセスできません](/faq/ja/known-hosts.html)

公開鍵/秘密鍵ペアの生成方法は[公開鍵・秘密鍵の生成](/key.html)を、データのアップロード方法は[データのアップロード](/upload.html)をご参照ください。  

`~/.ssh/config` ファイルに以下の記載をすることで、`ssh ddbj` で接続可能になります。`ssh -vvv ddbj` で詳細なデバッグ情報を確認することができます。 

```
Host ddbj
Hostname ftp-private.ddbj.nig.ac.jp
User your-account-id
IdentityFile ~/.ssh/id_ed25519
```

### その他 {#other}

[お問い合わせフォーム](https://forms.gle/zV4cYCnRCefd4FSz9)で「問い合わせ先： DDBJ アカウント」を選択してお問い合わせください。
