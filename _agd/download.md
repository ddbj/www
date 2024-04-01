---
layout: tabbed_indexed_content
service_name: AMED Genome group sharing Database
title: 利用手順
category: agd
current_tab: submission
lang: ja
---

## 利用申請 {#du-application}

[NBDC ヒトデータベースの「利用可能な研究データ一覧」](https://gr-sharingdbs.dbcls.jp/agd)で使いたいデータを探すことができます。

利用したいデータの Dataset アクセッション番号を控えます。例 AGDD_000001（旧番号体系だと AGDD_00000000001）

[データ申請システム](https://gr-sharingdbs.ddbj.nig.ac.jp/nbdc/application) から [利用申請](https://gr-sharingdbs.dbcls.jp/agd-data-use) します。
申請時に利用申請グループを作成、利用を希望する Study (例 AGDS_999992) と Dataset (例 AGDD_999993) アクセッション番号を入力し、データの暗号化に使用する「データセット暗号化用公開鍵」を登録します。
利用申請が DBCLS で承認された後、データは AGD サーバ上で Dataset 単位で提供されます。

申請には D-way アカウントが必要です。アカウントが無い場合は申請前に [D-way アカウントを取得](https://ddbj.nig.ac.jp/D-way/) してください。AGD サーバから sftp でデータをダウンロードするためには[認証用の公開鍵・秘密鍵ペアを作成し、公開鍵を D-way アカウントに登録](/account.html#generate-key-pair)する必要があります。

<div class="attention" markdown="1">
D-way アカウント作成後、[データ申請システム](https://gr-sharingdbs.ddbj.nig.ac.jp/nbdc/application)で利用できるようになるまで10分程度の時間がかかります。
</div>

以下では AGD データの利用手順を説明します。

## 利用申請グループ {#data-user-group}

申請前に利用申請グループを作成します。例の利用申請グループ (usergrp1) では申請及びダウンロードを担当する研究員 (account_b) がオーナー、研究代表者 (account_c) がメンバーとなっています。

<div class="attention" markdown="1">
JGA と AGD のグループは別になります。
</div>

{% include image.html url="books/DS-group.png" caption="データ利用申請グループ" class="w450" %}

[利用申請を開始](https://humandbs.dbcls.jp/data-use) し、作成した利用申請グループを選択します。

{% include image.html url="books/DU-start.png" caption="利用申請の開始" class="w450" %}

{% include image.html url="books/DU-group.png" caption="データ利用申請グループの選択" class="w450" %}

## データセット暗号化用公開鍵 {#public-key-for-dataset-encryption}

セキュリティのため AGD データセットはユーザが登録したデータセット暗号化用公開鍵で暗号化された状態で提供されます。ユーザは利用承認されたデータセットを sftp でダウンロードし、秘密鍵で復号してから利用します。

<div class="attention" markdown="1">
データセット暗号化用公開鍵は D-way アカウントの[認証用の公開鍵](/account.html#public-key)とは別になります。
AGD データの利用のためには暗号化用と認証用に合計2ペア4ファイルの公開鍵・秘密鍵が必要になります。AGD サーバに ssh ログインすることはできません。
</div>

### データセット暗号化用公開鍵・秘密鍵ペアの作成 {#generate-key-pair}

利用申請毎に登録するデータセット暗号化用公開鍵・秘密鍵ペアを作成します。作成手順は[公開鍵/秘密鍵ペアの生成](/account.html#generate-key-pair)をご覧ください。

作成したデータセット暗号化用公開鍵を利用申請システムで登録します。

### データセット復号用公開鍵の登録 {#key-registration}

DBCLS への利用申請において公開鍵を「データセット復号用公開鍵」として登録します。

{% include image.html url="books/public-key-for-dataset-decryption.png" caption="データセット復号用公開鍵の登録" class="w400" %}

## 利用申請の承認とダウンロード {#data-use-approval-download}

### 利用申請の承認 {#data-use-approval}

利用申請が DBCLS で承認されると、AGD ファイルサーバにダウンロード用ディレクトリが作成され、メタデータ、暗号化されたデータファイルと復号ツールが配置されます。

{% include image.html url="books/data-use-approved.png" caption="利用申請の承認" class="w400" %}

### ダウンロード {#download}

<div class="attention" markdown="1">
AGD からファイルを sftp でダウンロードするためには [D-way アカウントに公開鍵を登録](/account.html#public-key)する必要があります。
</div>

AGD ファイルサーバ (jga-gw.ddbj.nig.ac.jp) 上の /controlled-access/download/agd/ の下にデータ利用申請 DU 番号と同名のディレクトリが作成されるので、
sftp の P オプションでポート番号 443 と認証用秘密鍵（データセット暗号化用公開鍵・秘密鍵とは別になります）を指定してログインし、ディレクトリごとダウンロードします。

例
- アカウント名: account_b
- データ利用申請番号： A-DU999991

```
$ sftp -i private-key-for-auth -P 443 account_b@jga-gw.ddbj.nig.ac.jp
$ cd controlled-access/download/agd/
$ get -r A-DU999991
```
-i: D-way に登録した認証用公開鍵とペアの秘密鍵を指定
-P: 接続先ポート番号 443 を指定

DU 番号ディレクトリ直下には Study ディレクトリ、及び、データファイルの復号ツールが配置された tools ディレクトリがあります。Study ディレクトリの下に Dataset ディレクトリがあり、Dataset ディレクトリの下にタブ区切りテキスト（tsv）ファイルと XML 形式のメタデータを含む metadata ディレクトリ、及び、暗号化されたデータファイルを含む Data と Analysis ディレクトリがあります。

以下の番号とデータファイルを例としてデータの利用方法を説明します。

- AGD Study: AGDS_999992
- AGD Dataset: AGDD_999993
- AGD Data: AGDR_999999994-AGDR_999999995
- Data の暗号化データファイル: case1.fastq.gz.encrypt (AGDR_999999994)、case2.fastq.gz.encrypt (AGDR_999999995)
- AGD Analysis: AGDZ_999999996-AGDZ_999999997
- Analysis の暗号化データファイル： case1.vcf.gz.encrypt (AGDZ_999999996)、case2.vcf.gz.encrypt (AGDZ_999999997)

```
$ ls A-DU999991/
AGDS_999992 　　
tools　
$ ls A-DU999991/tools
A-DU999991.tool.zip
$ ls A-DU999991/AGDS_999992/AGDD_999993
metadata
AGDR_999999994
AGDR_999999995
AGDZ_999999996
AGDZ_999999997
$ ls A-DU999991/AGDS_999992/AGDD_999993/**
A-DU999991/AGDS_999992/AGDD_999993/metadata:
AGDD_999993.study.xml
AGDD_999993.sample.xml
AGDD_999993.experiment.xml
AGDD_999993.data.xml
AGDD_999993.analysis.xml
AGDD_999993.dataset.xml
AGDD_999993.policy.xml
AGDD_999993.dac.xml
AGDD_999993.filelist.txt
AGDD_999993.sample.txt
AGDD_999993.analysis.SEQUENCE_VARIATION.txt
AGDD_999993.study_sample_experiment_data.mapping.txt
AGDD_999993.study_analysis_sample.mapping.txt
AGDD_999993.analysis_sample.mapping.txt
AGDD_999993.dataset_policy_data_analysis.mapping.txt

A-DU999991/AGDS_999992/AGDD_999993/AGDR_999999994:
case1.fastq.gz.encrypt

A-DU999991/AGDS_999992/AGDD_999993/AGDR_999999995:
case2.fastq.gz.encrypt

A-DU999991/AGDS_999992/AGDD_999993/AGDZ_999999996:
case1.vcf.gz.encrypt

A-DU999991/AGDS_999992/AGDD_999993/AGDZ_999999997:
case2.vcf.gz.encrypt
```

## データファイルの復号 {#decrypt}

ダウンロードしたデータファイルは暗号化されているので、ツールで復号します。

<div class="attention">
復号ツールは Linux で実行してください。Windows はサポートしていません。
</div>

利用者の解析環境で A-DU999991 ディレクトリに直下に移動し、tools ディレクトリにある復号ツール「A-DU999991.tool.zip」を A-DU999991 ディレクトリ直下に展開します。

```
$ cd A-DU999991
$ unzip tools/A-DU999991.tool.zip
```

復号処理スクリプトおよび暗号化済み共通鍵ファイルが展開されます。DU 全体を対象とする復号スクリプト A-DU999991.decrypt.sh が A-DU999991 ディレクトリ直下に、個々のデータファイルを対象とする case1.fastq.gz.decrypt.sh のような復号スクリプトが暗号化されたデータファイルが含まれる Data/Analysis ディレクトリに配置されます。

```
$ ls
A-DU999991.decrypt.sh
AGDS_999992 　　
tools　　　　　　
$ ls AGDS_999992/AGDD_999993/AGDR_999999994/
case1.fastq.gz.decrypt.sh
case1.fastq.gz.encrypt
case1.fastq.gz.encrypt.dat
$ ls AGDS_999992/AGDD_999993/AGDZ_999999996/
case1.vcf.gz.decrypt.sh
case1.vcf.gz.encrypt
case1.vcf.gz.encrypt.dat
```

- .decrypt.sh: 復号処理スクリプト
- .dat: 暗号化済み共通鍵ファイル

全ての復号処理スクリプトに対して実行権限を付与します。

```
$ chmod 754 A-DU999991.decrypt.sh
$ chmod 754 AGDS_999992/AGDD_999993/AGDR_999999994/case1.fastq.gz.decrypt.sh
$ chmod 754 AGDS_999992/AGDD_999993/AGDR_999999995/case2.fastq.gz.decrypt.sh
$ chmod 754 AGDS_999992/AGDD_999993/AGDZ_999999996/case1.vcf.gz.decrypt.sh
$ chmod 754 AGDS_999992/AGDD_999993/AGDZ_999999997/case2.vcf.gz.decrypt.sh
```

データファイルが多数ある場合、以下のようにワイルドカード (*) を使ったコマンドを実行するとデータファイル毎の復号処理スクリプトに対して一括で実行権限を付与することができます。

```
$ chmod 754 A-DU999991.decrypt.sh
$ chmod 754 AGDS_999992/**/**/*.decrypt.sh
```

利用申請時に登録したデータセット暗号化用公開鍵とペアになっている「秘密鍵」を指定して「A-DU999991.decrypt.sh」を実行し、全データファイルを復号します。

以下の番号とデータファイルを例としてデータの復号方法を説明します。

- -k: データセット暗号化用公開鍵とペアの秘密鍵を指定 （例：A-DU999991_private_key）
- -p: 秘密鍵のパスフレーズを指定（パスフレーズを指定していない場合は省略）

```
$ ./A-DU999991.decrypt.sh -k A-DU999991_private_key -p ******
$ ls AGDS_999992/AGDD_999993/AGDR_999999994/
case1.fastq.gz　　          # 復号されたデータファイル
case1.fastq.gz.decrypt.sh
case1.fastq.gz.encrypt
case1.fastq.gz.encrypt.dat
$ ls AGDS_999992/AGDD_999993/AGDZ_999999996/
case1.vcf.gz　　            # 復号されたデータファイル
case1.vcf.gz.decrypt.sh
case1.vcf.gz.encrypt
case1.vcf.gz.encrypt.dat
```

DU ディレクトリ下にある Study や Dataset ディレクトリを sftp した場合、以下のようなディレクトリ配置にしてから復号スクリプトを実行します。DU ディレクトリ直下に DU 単位の復号スクリプトと暗号化されたデータファイルが含まれている Study/Dataset/Data or Analysis ディレクトリを配置します。

```
$ A-DU999991/
A-DU999991/A-DU999991.decrypt.sh
A-DU999991/AGDS_999992/AGDD_999993
```

### メタデータ {#metadata}

metadata ディレクトリには以下のファイルが含まれています。メタデータファイルは暗号化されていません。

#### メタデータオブジェクトの内容が記述された tsv ファイル {#metadata-tsv}

- AGDD_999993.sample.txt
- AGDD_999993.analysis.SEQUENCE_VARIATION.txt

メタデータを見やすくするため、Sample 及び Analysis については、1行目に項目名、2行目以降に内容が記述された tsv ファイルが提供されます。Analysis の tsv ファイル名には Analysis type（種類）が含まれており、type 毎に作成されます。

#### メタデータオブジェクトの対応関係と内容を記述した tsv ファイル {#metadata-relation-tsv}

- AGDD_999993.study_sample_experiment_data.mapping.txt

Data → Experiment → Sample → Study の対応関係を示した表。Experiment と Data についてはこの対応表がオブジェクトの内容表示を兼ねています。

- AGDD_999993.study_analysis_sample.mapping.txt

Analysis → Sample → Study の対応関係を示した表。複数サンプルの結果をまとめた解析データなど、Analysis が複数 Sample を参照している場合はアクセッション番号ではなく参照している Sample の「数」が記載されます。

- AGDD_999993.analysis_sample.mapping.txt

Analysis と Sample の対応表。Analysis が複数 Sample を参照している場合、全ての Sample アクセッション番号が列挙されます。

- AGDD_999993.dataset_policy_data_analysis.mapping.txt

Dataset に含まれる Data、Analysis とリンクしている Policy の対応表。

#### 各オブジェクトのメタデータ XML ファイル {#metadata-xml}

- AGDD_999993.study.xml
- AGDD_999993.dataset.xml
- AGDD_999993.policy.xml
- AGDD_999993.sample.xml
- AGDD_999993.experiment.xml
- AGDD_999993.data.xml
- AGDD_999993.analysis.xml
- AGDD_999993.dac.xml

プログラムで機械処理する場合などに利用できます。

#### ファイルリスト {#filelist}

- AGDD_999993.filelist.txt

データファイルの名前、種類、サイズ、復号前後の MD5 ハッシュ値、及び、含まれている Data と Analysis アクセッション番号をまとめた表。
手許でダウンロードしたファイルの MD5 ハッシュ値を取得し、リスト中の値と比較することでファイルの破損チェックを行うことができます。

### WinSCP によるダウンロード {#upload-excel-winsftp}

[WinSCP (http://winsftp.net/eng/download.php)](http://winsftp.net/eng/download.php) をダウンロードし、Windows PC にインストールします。

以下のように設定します。

- 転送プロトコル: SFTP
- ホスト名: jga-gw.ddbj.nig.ac.jp
- ポート番号: 443
- ユーザ名: D-way アカウント ID
- パスワード: 空欄のまま

{% include image.html url="books/jga-winscp-sftp1.jpg" caption="WinSCP 接続情報の入力" class="w400" %}

{% include image.html url="books/jga-winscp2.jpg" caption="WinSCP 認証用秘密鍵を指定" class="w400" %}

初回接続時には警告メッセージが表示されますが、「はい」を選択してください (次回から表示されません)。次の画面では、鍵を作成した際に指定したパスフレーズを入力します。

{% include image.html url="books/jga-winscp3.jpg" caption="WinSCP ファイルの転送" class="w400" %}

ログインに成功すると、左側のウィンドウにユーザの PC のフォルダ、右側のウィンドウに AGD サーバの登録者専用ディレクトリが表示されるので 右側ウィンドウでファイルを選択し左側ウィンドウへドラッグ＆ドロップし、PC へファイルをダウンロードします。
