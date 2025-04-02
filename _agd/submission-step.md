---
layout: tabbed_indexed_content
service_name: AMED Genome group sharing Database
title: 登録手順
category: agd
current_tab: submission
lang: ja
---

## データ提供申請  {#ds-application}

[データ申請システム](https://gr-sharingdbs.ddbj.nig.ac.jp/nbdc/application)から[提供申請](https://gr-sharingdbs.dbcls.jp/agd-data-submission)します。
申請時に提供申請グループを作成します。提供申請が DBCLS で承認された後、AGD サーバにデータアップロード用ディレクトリが作成されます。

申請には DDBJ アカウントが必要です。アカウントが無い場合は申請前に [DDBJ アカウント](/ddbj-account.html)を取得してください。

<div class="attention" markdown="1">
DDBJ アカウント作成後、[データ申請システム](https://gr-sharingdbs.ddbj.nig.ac.jp/nbdc/application)で利用できるようになるまで10分程度の時間がかかります。
</div>

申請システムで自動入力させるため、アカウントに所属情報や日本語氏名を登録します。[申請システム](https://gr-sharingdbs.ddbj.nig.ac.jp/nbdc/application)にログインし、右上のメニューから「ユーザ情報更新」を選択します。

{% include image.html url="books/profile1.jpg" caption="ユーザ情報更新" class="w400" %}

アカウント情報を入力するため「Edit」をクリックします。

{% include image.html url="books/profile2.jpg" caption="Edit でアカウント情報の編集を開始" class="w300" %}

所属情報や日本語氏名を入力します。

{% include image.html url="books/profile3.jpg" caption="アカウント情報を入力" class="w400" %}

「Save」で登録します。

{% include image.html url="books/profile4.jpg" caption="Save で保存" class="w300" %}

以下では AGD データの登録手順を説明します。

## 提供申請グループ {#data-submitter-group}

申請前に提供申請グループを作成します。例の提供申請グループ (subgrp1) では申請及び登録を担当する研究員 (account_b) がオーナー、研究代表者 (account_c) がメンバーとなっています。
実際には申請システムで申請したアカウントが自動的に申請者になります。登録者が PI と申請者以外にも居る場合は必ず全員をメンバーに含めてください。登録に関する連絡はメンバーアカウントに対して送られます。

{% include image.html url="books/DS-group.png" caption="データ提供申請グループ" class="w400" %}

提供申請を開始し、作成した提供申請グループを選択します。

{% include image.html url="books/DS-start.png" caption="提供申請の開始" class="w450" %}

{% include image.html url="books/DS-group-select.png" caption="データ提供申請グループの選択" class="w450" %}

## 提供申請の承認 {#du-approval}

提供申請が DBCLS で承認されると、AGD の Submission ID (例 ASUB000353) が発行され、AGD サーバに対応するアップロード用ディレクトリが作成されます。

{% include image.html url="books/DS-approved.png" caption="提供申請の承認" class="w450" %}

{% include image.html url="books/DS-JSUB.png" caption="提供申請と AGD submission ID" class="w250" %}

AGD ファイルサーバ (jga-gw.ddbj.nig.ac.jp) 上の /group-access/submission/agd/ の下に Submission ID と同名のディレクトリが作成されるので、ここにメタデータをデータファイルを sftp でアップロードします。この例であればディレクトリは /group-access/submission/agd/ASUB000353/ になります。

## エクセルでのメタデータ作成  {#create-metadata-using-excel}

### エクセルファイルへの記入 {#enter-metadata-into-excel}

メタデータ記入用エクセルファイルを下記よりダウンロードし、内容を英語で記入してください。メタデータの説明は[こちらのページ](/agd/submission.html)をご覧ください。

[![AGD メタデータ記入用エクセル](/assets/images/parts/download.png "AGD メタデータ記入用エクセル"){:.w40}](https://github.com/ddbj/submission-excel2xml/raw/main/JGA_metadata.xlsx)

JGA と AGD はデータモデルが同一であるため、メタデータ記入用エクセルは共通です。ファイル名は JGA_metadata.xlsx となっておりますが、AGD のメタデータを記入し、AGD 用 submission ディレクトリにアップロードしてください。

<div class="attention" markdown="1">
AGD にアップロードするファイル名には空白を含めないでください。
</div>

<div class="attention" markdown="1">
データは AGD Submission 単位で公開されます。公開時期の異なるデータセットは別の Submission に分けてください。
</div>

### エクセルをアップロード  {#upload-excel}

<div class="attention" markdown="1">
AGD にファイルを sftp でアップロードするためには [DDBJ アカウントに公開鍵を登録](/ddbj-account.html#public-key)する必要があります。AGD サーバに ssh ログインすることはできません。
</div>

AGD ファイルサーバ (jga-gw.ddbj.nig.ac.jp) 上の /group-access/submission/agd/ の下に AGD Submission ID と同名のディレクトリが作成されるので、
sftp の P オプションでポート番号 443 を指定してログインし、対象ディレクトリに移動しエクセルをアップロードします。
sftp では公開鍵・秘密鍵認証を利用しており、[DDBJ アカウントに登録した秘密鍵](/ddbj-account.html#generate-key-pair)を指定します。

例
- アカウント名: account_b
- AGD Submission ID: ASUB000353

```
$ sftp -i private-key-for-auth -P 443 account_b@jga-gw.ddbj.nig.ac.jp
$ cd /group-access/submission/agd/ASUB000353
$ put ASUB000353_metadata.xlsx
```
-i: 認証用秘密鍵を指定
-P: 接続先ポート番号 443 を指定

### WinSCP によるアップロード {#upload-excel-winsftp}

[WinSCP (http://winsftp.net/eng/download.php)](http://winsftp.net/eng/download.php) をダウンロードし、Windows PC にインストールします。

以下のように設定します。

転送プロトコル: SFTP
- ホスト名: jga-gw.ddbj.nig.ac.jp
- ポート番号: 443
- ユーザ名: DDBJ アカウント ID
- パスワード: 空欄のまま

{% include image.html url="books/jga-winscp1.jpg" caption="WinSCP 接続情報の入力" class="w400" %}

{% include image.html url="books/jga-winscp2.jpg" caption="WinSCP 認証用秘密鍵を指定" class="w400" %}

初回接続時には警告メッセージが表示されますが、「はい」を選択してください (次回から表示されません)。次の画面では、鍵を作成した際に指定したパスフレーズを入力します。

{% include image.html url="books/jga-winscp3.jpg" caption="WinSCP ファイルの転送" class="w400" %}

ログインに成功すると、左側のウィンドウにユーザの PC のフォルダ、右側のウィンドウに AGD サーバの登録者専用ディレクトリが表示されるので 左側ウィンドウでファイルを選択し右側ウィンドウへドラッグ＆ドロップし、サーバへファイルを転送します。

## データファイルのアップロード  {#upload-data-files}

### データファイル形式 {#data-file-format}

AGD 登録システムではファイルの拡張子でアーカイブ・圧縮形式を判定し、ファイルを処理しています。

- 拡張子 zip、tar、tar.gz、tgz、tar.bz2、tbz2、gz、bz2 のファイルは標準的な方法でアーカイブ・圧縮されているファイルと判定され、展開・解凍処理されます。拡張子とアーカイブ・圧縮形式が一致していないファイルや、これら以外の形式でアーカイブ・圧縮されたファイルはエラーになります。
- bam ファイルは圧縮しないでください。
- gz や bzip 圧縮したファイルをさらに tar でアーカイブせず、tar.gz 等でアーカイブしたファイルを圧縮してください。

### 登録するデータ {#file-formats-submission}

Data オブジェクトに fastq や bam ファイルなどの個人レベルの次世代シークエンスデータを登録します。Analysis にアレイデータ，変異解析，質問票などの次世代シークエンス以外のデータや各種ドキュメントを登録します。

<div class="attention" markdown="1">
データの再利用性，再現性のためには論文での主張の基になっている解析データが登録されることが重要です。できるだけ VCF などの解析データを Analysis に登録してください。
</div>

### データファイルのアップロード {#data-files-upload}

データファイルを sftp で登録用ディレクトリにアップロードします。

例
- アカウント名: account_b
- AGD Submission ID: ASUB000353

```
$ sftp -i private-key-for-auth -P 443 account_b@jga-gw.ddbj.nig.ac.jp
$ cd /group-access/submission/agd/ASUB000353
$ put wgs1.fastq
```
-i: 認証用秘密鍵を指定
-P: 接続先ポート番号 443 を指定

拡張子 fastq の全てのファイルをアップロード。
```
$ put *.fastq
```

## メタデータとデータの登録 {#metadata-data-submission}

AGD キュレータがメタデータとデータファイルを査定します。完成したエクセルからキュレータが XML を生成し、AGD に登録します。

メタデータとデータファイルが検証処理を通過するとアクセッション番号が発行されます。
