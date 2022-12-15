---
layout: tabbed_indexed_content
service_name: Japanese Genotype-phenotype Archive
title: 登録手順
category: jga
current_tab: submission
lang: ja
---

## NBDC 提供申請から JGA データアップロードまでの手順  {#ds}

提供申請は [NBDC 申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)に D-way アカウントでログインしてから申請します。   
提供申請では提供申請グループの作成が必要です。    
提供申請の承認後、D-way アカウントで JGA サーバにアクセスし、メタデータとデータファイルを JGA サーバに [sftp](#sftp) もしくは [WinSCP](#winscp) でアップロードします。

* [D-way アカウント作成・情報追加とデータ転送用公開鍵の登録](#account-key)
* [提供申請の承認](#approval)
* [メタデータ作成 ](#create-metadata-using-excel)
* [データファイルのアップロード ](#upload-data-files)
	* [sftp でのアップロード](#sftp)
	* [WinSCP でのアップロード](#winscp)

## D-way アカウント作成・情報追加とデータ転送用公開鍵の登録 {#account-key}

提供申請および JGA データアップロードのためには D-way アカウントが必要です。アカウントが無い場合は申請前に [D-way アカウントを取得](https://ddbj.nig.ac.jp/D-way/)してください。  

<div class="attention" markdown="1">
D-way アカウント作成後、[NBDC データ申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)で利用できるようになるまで10分程度の時間がかかります。
</div>

JGA サーバへデータをアップロードするためには、データ転送用の公開鍵・秘密鍵ペアを作成し、[公開鍵を D-way アカウントに登録](/account.html#enable-dra-submission-in-account)します。   

申請情報を自動入力させるため、アカウントに所属情報や日本語氏名を追加します。    
[NBDC 申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)にログインし、右上のメニューから「ユーザ情報更新」を選択します。  

{% include image.html url="books/profile1.jpg" caption="ユーザ情報更新" class="w400" %}
    
アカウント情報を入力するため「Edit」をクリックします。
{% include image.html url="books/profile2.jpg" caption="Edit でアカウント情報の編集を開始" class="w300" %}
    
所属情報や日本語氏名を入力します。
{% include image.html url="books/profile3.jpg" caption="アカウント情報を入力" class="w400" %}
    
「Save」で登録します。
{% include image.html url="books/profile4.jpg" caption="Save で保存" class="w300" %}

## 提供申請グループ {#data-submitter-group}

申請前に提供申請グループを作成します。例の提供申請グループ (subgrp1) では申請及び登録を担当する研究員 (account_b) がオーナー、研究代表者 (account_c) がメンバーとなっています。  
実際には NBDC 申請システムで申請したアカウントが自動的に申請者になります。登録者が PI と申請者以外にも居る場合は必ず全員をメンバーに含めてください。

{% include image.html url="books/DS-group.png" caption="データ提供申請グループ" class="w400" %}
     
提供申請を開始し、作成した提供申請グループを選択します。

{% include image.html url="books/DS-start.png" caption="提供申請の開始" class="w450" %}

{% include image.html url="books/DS-group-select.png" caption="データ提供申請グループの選択" class="w450" %}

詳細な手順は [NBDC のデータ提供](https://humandbs.biosciencedbc.jp/data-submission)ページもご覧ください。

## 提供申請の承認 {#approval}

提供申請が NBDC で承認されると、JGA の Submission ID (例 JSUB000353) が発行され、JGA サーバに対応するアップロード用ディレクトリが作成されます。

{% include image.html url="books/DS-approved.png" caption="提供申請の承認" class="w450" %}

{% include image.html url="books/DS-JSUB.png" caption="提供申請と JGA submission ID" class="w250" %}
    
JGA サーバ (jga-gw.ddbj.nig.ac.jp) へデータをアップロードするためには、データ転送用の公開鍵・秘密鍵ペアを作成し、[公開鍵を D-way アカウントに登録](/account.html#enable-dra-submission-in-account)します。   
JGA サーバ上の /controlled-access/submission/jga/ の下に Submission ID と同名のディレクトリが作成されるので、ここにメタデータとデータファイルを [sftp](#sftp) もしくは [WinSCP](#winscp) でアップロードします。
この例であればディレクトリは /controlled-access/submission/jga/JSUB000353/ になります。

## メタデータ作成  {#create-metadata-using-excel}

### エクセルファイルへの記入 {#enter-metadata-into-excel}

メタデータ記入用エクセルファイルをダウンロードし、内容を英語で記入します。メタデータの説明は[こちらのページ](/jga/submission.html)をご覧ください。

[![JGA メタデータ記入用エクセル](/assets/images/parts/download.png "JGA メタデータ記入用エクセル"){:.w40}](https://github.com/ddbj/submission-excel2xml/raw/master/JGA_metadata.xlsx)

last updated: 2022-04-27  

<div class="attention" markdown="1">
JGA にアップロードするファイル名には空白を含めないでください。         
</div>

<div class="attention" markdown="1">
データは JGA Submission 単位で公開されます。公開時期の異なるデータセットは別の Submission に分けてください。
</div>

### エクセルの記入例 {#example-submission}

[メタデータエクセルの記入例](https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318)

### エクセルを sftp でアップロード  {#sftp}

JGA ファイルサーバ (jga-gw.ddbj.nig.ac.jp) 上の /controlled-access/submission/jga/ の下に JGA Submission ID と同名のディレクトリが作成されるので、
sftp の P オプションでポート番号 443 を指定してログインし、対象ディレクトリに移動しエクセルをアップロードします。
sftp では公開鍵・秘密鍵認証を利用しており、D-way アカウントに登録したデータ転送用公開鍵とペアの秘密鍵を指定します。

```
# アカウント名: account_b
# JGA Submission ID： JSUB000353
# データ転送用秘密鍵のファイルパス: ~/.ssh/id_rsa

$ sftp -i ~/.ssh/id_rsa -P 443 account_b@jga-gw.ddbj.nig.ac.jp
$ cd controlled-access/submission/jga/JSUB000353
$ put JSUB000353_metadata.xlsx 
```

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

### データファイルの sftp アップロード {#data-files-sftp-upload}

データファイルを sftp で登録用ディレクトリにアップロードします。

```
# アカウント名: account_b
# JGA Submission ID: JSUB000353
# データ転送用秘密鍵のファイルパス: ~/.ssh/id_rsa

$ sftp -i ~/.ssh/id_rsa -P 443 account_b@jga-gw.ddbj.nig.ac.jp
$ cd controlled-access/submission/jga/JSUB000353
$ put wgs1.fastq
```

拡張子 fastq の全てのファイルをアップロード。
```
$ mput *.fastq
```

### WinSCP でのアップロード {#winscp}

[WinSCP (https://winscp.net/eng/download.php)](https://winscp.net/eng/download.php) をダウンロードし、Windows PC にインストールします。

以下のように設定します。

- 転送プロトコル: SFTP
- ホスト名: jga-gw.ddbj.nig.ac.jp
- ポート番号: 443
- ユーザ名: D-way アカウント ID
- パスワード: 空欄のまま

{% include image.html url="books/jga-winscp1.jpg" caption="WinSCP 接続情報の入力" class="w400" %}

{% include image.html url="books/jga-winscp2.jpg" caption="WinSCP データ転送用秘密鍵を指定" class="w400" %}
    
初回接続時には警告メッセージが表示されますが、「はい」を選択してください (次回から表示されません)。次の画面では、鍵を作成した際に指定したパスフレーズを入力します。

{% include image.html url="books/jga-winscp3.jpg" caption="WinSCP ファイルの転送" class="w400" %}
    
ログインに成功すると、左側のウィンドウにユーザの PC のフォルダ、右側のウィンドウに JGA サーバの登録者専用ディレクトリが表示されるので
左側ウィンドウでファイルを選択し右側ウィンドウへドラッグ＆ドロップし、サーバへファイルを転送します。

## メタデータとデータの登録 {#metadata-data-submission}

JGA キュレータがメタデータとデータファイルを査定します。完成したエクセルからキュレータが XML を生成し、JGA に登録します。
      
メタデータとデータファイルが検証処理を通過するとアクセッション番号が発行されます。

