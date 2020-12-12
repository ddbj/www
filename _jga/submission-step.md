---
layout: tabbed_indexed_content
service_name: Japanese Genotype-phenotype Archive
title: 登録手順
category: jga
current_tab: submission
tab_menu:
  - id: home
    title: Home
    url: /jga/index.html
  - id: browse researches at nbdc
    title: Browse researches at NBDC
    url: https://humandbs.biosciencedbc.jp/data-use/all-researches
    children:
      - title: DDBJ Search
        url: https://ddbj.nig.ac.jp/search
  - id: submission
    title: Submission
    url: /jga/submission.html
    children:
      - title: How to submit
        url: /jga/submission-step.html
      - title: How to access data
        url: /jga/download.html
      - title: Groups
        url: /jga/group.html
      - title: Updates in 2020
        url: /jga/update-202009.html
      - title: Example submission
        url: https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/jga/xsd/
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=jga
lang: ja
---

## NBDC へのデータ提供申請  {#ds-application}

[NBDC データ申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)から[提供申請](https://humandbs.biosciencedbc.jp/data-submission)します。  
申請時に提供申請グループを作成します。提供申請が NBDC で承認された後、JGA サーバにデータアップロード用ディレクトリが作成されます。

申請には D-way アカウントが必要です。アカウントが無い場合は申請前に [D-way](https://ddbj.nig.ac.jp/D-way/) アカウントを取得してください。

<div class="attention" markdown="1">
D-way アカウント作成後、[NBDC データ申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)で利用できるようになるまで10分程度の時間がかかります。
</div>

以下では JGA データの登録手順を説明します。

## 提供申請グループ {#data-submitter-group}

申請前に提供申請グループを作成します。例の提供申請グループ (subgrp1) では申請及び登録を担当する研究員 (account_b) がオーナー、研究代表者 (account_c) がメンバーとなっています。  
実際には NBDC 申請システムで申請したアカウントが自動的に申請者になります。登録者が PI と申請者以外にも居る場合は必ず全員をメンバーに含めてください。登録に関する連絡はメンバーアカウントに対して送られます。

{% include image.html url="books/DS-group.png" caption="データ提供申請グループ" class="w400" %}

提供申請を開始し、作成した提供申請グループを選択します。

{% include image.html url="books/DS-start.png" caption="提供申請の開始" class="w450" %}

{% include image.html url="books/DS-group-select.png" caption="データ提供申請グループの選択" class="w450" %}

## 提供申請の承認 {#du-approval}

提供申請が NBDC で承認されると、JGA の Submission ID (例 JSUB000353) が発行され、JGA サーバに対応するアップロード用ディレクトリが作成されます。

{% include image.html url="books/DS-approved.png" caption="提供申請の承認" class="w450" %}

{% include image.html url="books/DS-JSUB.png" caption="提供申請と JGA submission ID" class="w250" %}

JGA ファイルサーバ (jga-gw.ddbj.nig.ac.jp) 上の /controlled-access/submission/jga/ の下に Submission ID と同名のディレクトリが作成されるので、ここにメタデータをデータファイルを scp でアップロードします。この例であればディレクトリは /controlled-access/submission/jga/JSUB000353/ になります。

## エクセルでのメタデータ作成  {#create-metadata-using-excel}

### エクセルファイルへの記入 {#enter-metadata-into-excel}

メタデータ記入用エクセルファイルを下記よりダウンロードし、内容を英語で記入してください。メタデータの説明は[こちらのページ](/jga/submission.html)をご覧ください。

[![JGA メタデータ記入用エクセル](/assets/images/parts/download.png "JGA メタデータ記入用エクセル"){:.w40}](/assets/files/submission/JGA_metadata.xlsx)

last updated: 2020-09-26

<div class="attention" markdown="1">
JGA にアップロードするファイル名には空白を含めないでください。
</div>

<div class="attention" markdown="1">
データは JGA Submission 単位で公開されます。公開時期の異なるデータセットは別の Submission に分けてください。
</div>

### エクセルの記入例 {#example-submission}

[メタデータエクセルの記入例](https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318)

### エクセルをアップロード  {#upload-excel}

<div class="attention" markdown="1">
JGA にファイルを scp でアップロードするためには [D-way アカウントに center name と公開鍵を登録](/account.html#enable-dra-submission-in-account)する必要があります。また、JGA サーバへのアクセスは IP アドレスで制限されているので、NBDC に申請する際に接続元グローバル IP アドレスを伝えてください。
</div>

JGA ファイルサーバ (jga-gw.ddbj.nig.ac.jp) 上の /controlled-access/submission/jga/ の下に JGA Submission ID と同名のディレクトリが作成されるので、scp の P オプションでポート番号 443 を指定して、エクセルをアップロードします。scp では公開鍵・秘密鍵認証を利用しており、必要に応じて[D-way アカウントに登録した秘密鍵](/account.html#generate-key-pair)を指定します。

例
- アカウント名: account_b
- JGA Submission ID: JSUB000353

認証用秘密鍵を指定する場合。転送対象ファイルは -P と -i オプションの後に指定します。

```
$ scp -P443 -i private-key-for-auth JSUB000353_metadata.xlsx account_b@jga-gw.ddbj.nig.ac.jp:/controlled-access/submission/jga/JSUB000353
```
-P: 接続先ポート番号 443 を指定
-i: 認証用秘密鍵を指定

JGA ファイルサーバに ssh でログインすることができます。
```
$ ssh -p443 -i private-key-for-auth account_b@jga-gw.ddbj.nig.ac.jp
```
-p: 接続先ポート番号 443 を指定 (ssh の場合は小文字の p にします)
-i: 認証用秘密鍵を指定

### WinSCP によるアップロード {#upload-excel-winscp}

[WinSCP (http://winscp.net/eng/download.php)](http://winscp.net/eng/download.php) をダウンロードし、Windows PC にインストールします。

以下のように設定します。

転送プロトコル: SCP
- ホスト名: jga-gw.ddbj.nig.ac.jp
- ポート番号: 443
- ユーザ名: D-way アカウント ID
- パスワード: 空欄のまま

{% include image.html url="books/jga-winscp1.jpg" caption="WinSCP 接続情報の入力" class="w400" %}

{% include image.html url="books/jga-winscp2.jpg" caption="WinSCP 認証用秘密鍵を指定" class="w400" %}

初回接続時には警告メッセージが表示されますが、「はい」を選択してください (次回から表示されません)。次の画面では、鍵を作成した際に指定したパスフレーズを入力します。

{% include image.html url="books/jga-winscp3.jpg" caption="WinSCP ファイルの転送" class="w400" %}

ログインに成功すると、左側のウィンドウにユーザの PC のフォルダ、右側のウィンドウに JGA サーバの登録者専用ディレクトリが表示されるので 左側ウィンドウでファイルを選択し右側ウィンドウへドラッグ＆ドロップし、サーバへファイルを転送します。

## データファイルのアップロード  {#upload-data-files}

### データファイル形式 {#data-file-format}

JGA 登録システムではファイルの拡張子でアーカイブ・圧縮形式を判定し、ファイルを処理しています。

- 拡張子 zip、tar、tar.gz、tgz、tar.bz2、tbz2、gz、bz2 のファイルは標準的な方法でアーカイブ・圧縮されているファイルと判定され、展開・解凍処理されます。拡張子とアーカイブ・圧縮形式が一致していないファイルや、これら以外の形式でアーカイブ・圧縮されたファイルはエラーになります。
- bam ファイルは圧縮しないでください。
- gz や bzip 圧縮したファイルをさらに tar でアーカイブせず、tar.gz 等でアーカイブしたファイルを圧縮してください。

### 登録するデータ {#file-formats-submission}

Data オブジェクトに fastq や bam ファイルなどの個人レベルの次世代シークエンスデータを登録します。Analysis にアレイデータ，変異解析，質問票などの次世代シークエンス以外のデータや各種ドキュメントを登録します。

<div class="attention" markdown="1">
データの再利用性，再現性のためには論文での主張の基になっている解析データが登録されることが重要です。できるだけ VCF などの解析データを Analysis に登録してください。
</div>

### データファイルのアップロード {#data-files-upload}

データファイルを scp で登録用ディレクトリにアップロードします。

例
- アカウント名: account_b
- JGA Submission ID: JSUB000353

```
$ scp -P443 -i private-key-for-auth wgs1.fastq account_b@jga-gw.ddbj.nig.ac.jp:/controlled-access/submission/jga/JSUB000353
```
-P: 接続先ポート番号 443 を指定
-i: 認証用秘密鍵を指定

拡張子 fastq の全てのファイルをアップロード。
```
$ scp -P443 -i private-key-for-auth *.fastq account_b@jga-gw.ddbj.nig.ac.jp:/controlled-access/submission/jga/JSUB000353
```

## メタデータとデータの登録 {#metadata-data-submission}

JGA キュレータがメタデータとデータファイルを査定します。完成したエクセルからキュレータが XML を生成し、JGA に登録します。
      
メタデータとデータファイルが検証処理を通過するとアクセッション番号が発行されます。
