---
layout: indexed_content
title: 登録アカウント
lang: ja
---

# DDBJ アカウント

## はじめに
DDBJ（DNA Data Bank of Japan）では、データ登録や解析サービスを利用するためにアカウントが必要です。本ページでは、DDBJ アカウントの作成や更新方法について説明します。

## アカウントの新規作成 {#create-account}

1. [DDBJアカウント](https://accounts.ddbj.nig.ac.jp) にアクセス後、 **Create an account** をクリックし、必要な情報を入力後、 **Create Account** を実行します。
2. 入力したメールアドレスに送信されたメールに記載されたAccess codeを入力することでアカウントが有効化されます。

### アカウント作成時の注意事項
- アカウントIDは、4～24 文字の範囲で、小文字，数字と `_` を利用が可能です。先頭に数字や `_` を使うことはできません。また、アカウントIDは変更できませんのでご注意ください。
- NBDCヒトデータベースの提供申請および利用申請する場合は、日本語の属性情報の入力も必要です。
- 責任者の許可のもとでアカウントを作成し，安全に管理してください。また、アカウント作成時に[利用規約](https://www.ddbj.nig.ac.jp/policies.html) への同意が必要です。
- パスワードは、アルファベットと数字を含む8 文字以上の設定します。

## アカウントの利用 {#use-account}
DDBJアカウントを利用して、以下のサービス利用が可能です。
- NBDCヒトデータベース申請システムを利用した提供申請・利用申請とsftpによるJGA登録データのアップロード・ダウンロード
- D-wayシステムを利用したBioProject、BioSample、DRA、GEAへのメタデータの登録およびsftpによる登録データアップロード
- MSSシステムを利用した塩基配列の登録
- DFASTウェブサービスにおける実行ジョブ管理

### NBDCヒトデータベース申請システムにおける提供・利用申請の注意事項　{#use-account-humandbs}
NBDCヒトデータベース申請システムでは、日本語による申請の場合、日本語の氏名や所属詳細情報など以下の項目が必要です。
- First name in Japanese
- Last name in Japanese
- Laboratory, Faculty, Department
- Country
- Postal code/Zip code
- State/Prefecture
- City
- Street

## アカウント情報の更新 {#update-account}
1. [DDBJアカウント](https://accounts.ddbj.nig.ac.jp) にアクセス後、 **Sign in** をクリックし、アカウントIDもしくはメールアドレスとパスワードを入力しログインします。
2. 各メニューからアカウント属性情報の変更、パスワードの変更、SSH公開鍵の登録・更新が可能です。

## トラブルシューティング

### 確認メールが届かない
数時間待っても届かない場合は、**再送信** を試す  

### ログインできない
パスワードリセット実施してください。

### SSH公開鍵認証の仕組みがよくわからない
公開鍵/秘密鍵ペアの生成方法などこちらのページをご参照ください。

### SSH接続ができない
SSH公開鍵が正しく登録されているか確認してください。誤ってSSH秘密鍵を登録されてしまう事例があります。  
`~/.ssh/config`ファイルに以下の記載することで、`ssh ddbj`で接続可能になります。`ssh -vvv ddbj` で詳細なデバッグ情報を確認することが可能です。 
```
Host ddbj
Hostname ftp-private.ddbj.nig.ac.jp
User #{your-account-id} 
IdentityFile ~/.ssh/id_ed25519
```

### その他
[お問い合わせフォーム](https://www.ddbj.nig.ac.jp/contact-ddbj.html)から、問い合わせ先：**DDBJアカウント** を選択してお問い合わせください。


