---
layout: tabbed_indexed_content
service_name: Japanese Genotype-phenotype Archive
title: 利用手順
category: jga
current_tab: submission
lang: ja
---

## NBDC 利用申請から JGA データ利用までの手順 {#du}

利用申請は [NBDC 申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/) に D-way アカウントでログインしてから申請します。   
利用申請では、利用申請グループの作成、利用希望の JGA Study と Dataset アクセッション番号の指定、及び、「データセット復号用公開鍵」の登録が必要です。    
利用申請の承認後、D-way アカウントで sftp で JGA サーバにアクセスし、機関内・外サーバへ JGA データをダウンロードすることができます。暗号化されたファイルと復号ツールが提供されるので、申請時に登録した「データセット復号用公開鍵」とペアになる秘密鍵を使って暗号化ファイルを復号してから利用します。

* [JGA データセットの検索](#search)
* [D-way アカウントの作成とデータ転送用公開鍵の登録](#account-key)
* [利用申請毎に必要なデータセット復号用公開鍵・秘密鍵ペアの作成](#key-for-decryption)
* [利用申請](#du-application)
* [データセット復号用公開鍵の登録](#key-registration)
* [ダウンロード](#download)
	* [WinSCP によるダウンロード](#winscp)
	* [sftp ダウンロード](#sftp)
* [データファイルの復号](#decrypt)

### JGA データセットの検索 {#search}

利用を希望する Study (例 JGAS999992) と Dataset [アクセッション番号](/jga/submission.html) (例 JGAD999993) を確認します。   
NBDC ヒトデータベースの[利用可能な研究データ一覧](https://humandbs.biosciencedbc.jp/data-use/all-researches)もしくは[DDBJ Search](https://ddbj.nig.ac.jp/search) で検索することができます。

### D-way アカウントの作成とデータ転送用公開鍵の登録  {#account-key}

利用申請およびJGA データ取得のためには D-way アカウントが必要です。アカウントが無い場合は申請前に [D-way アカウントを取得](https://ddbj.nig.ac.jp/D-way/)してください。  

<div class="attention" markdown="1">
D-way アカウント作成後、[NBDC データ申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)で利用できるようになるまで10分程度の時間がかかります。
</div>

sftp を利用して JGA サーバからデータをダウンロードするためには、データ転送用の公開鍵・秘密鍵ペアを作成し、[公開鍵を D-way アカウントに登録](/account.html#enable-dra-submission-in-account)します。   

### 利用申請毎に必要なデータセット復号用公開鍵・秘密鍵ペアの作成 {#key-for-decryption}

JGA データは暗号化された状態で提供されます。ユーザは利用承認されたデータを sftp でダウンロードし、利用申請時に登録したデータセット復号用公開鍵とペアとなる秘密鍵を使ってデータを復号します。   
データセット復号用公開鍵は D-way アカウントの[データ転送用公開鍵](/account.html#enable-dra-submission-in-account)とは別になります。作成手順は[公開鍵/秘密鍵ペアの生成](/account.html#generate-key-pair)をご覧ください。

利用申請から JGA データ利用までに、データ転送用と復号用に合計２ペア４ファイルの公開鍵・秘密鍵が必要になります。

データセット復号用鍵ペア
* データセット復号用公開鍵 (NBDC 利用申請毎に登録)
* データセット復号用秘密鍵

データ転送用鍵ペア
* データ転送用公開鍵 (D-way アカウントに登録)
* データ転送用秘密鍵

{% include image.html url="books/two-key-pairs-ja.jpg" caption="データ転送用と JGA データセット復号用鍵ペア" class="w450" %}

復号用公開鍵と秘密鍵は利用申請 ID をファイル名に含めて保存するとペアを識別しやすくなります。
例  
* 復号用公開鍵 J-DU999991.pub
* 復号用秘密鍵 J-DU999991

## 利用申請 {#du-application}

[NBDC 申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)から[利用申請](https://humandbs.biosciencedbc.jp/data-use)します。    
詳細な手順は [NBDC のデータ利用](https://humandbs.biosciencedbc.jp/data-use)ページをご覧ください。

### 利用申請グループ {#data-user-group}

申請前に利用申請グループを作成します。例の利用申請グループ (usergrp1)では申請及びダウンロードを担当する研究員 (account_b) がオーナー、研究代表者 (account_c) がメンバーとなっています。

{% include image.html url="books/DS-group.png" caption="データ利用申請グループ" class="w450" %}

[利用申請を開始](https://humandbs.biosciencedbc.jp/data-use)し、作成した利用申請グループを選択します。

{% include image.html url="books/DU-start.png" caption="利用申請の開始" class="w450" %}

{% include image.html url="books/DU-group.png" caption="データ利用申請グループの選択" class="w450" %}

### データセット復号用公開鍵の登録 {#key-registration}

利用申請において「データセット復号用公開鍵」を登録します。

{% include image.html url="books/public-key-for-dataset-decryption.png" caption="データセット復号用公開鍵の登録" class="w400" %}

### 利用承認 {#approval}

利用申請が NBDC で承認されると、JGA ファイルサーバにダウンロード用ディレクトリが作成され、メタデータ、暗号化されたデータファイルと復号ツールが配置されます。

{% include image.html url="books/data-use-approved.png" caption="利用申請の承認" class="w400" %}

## ダウンロード {#download}

sftp を利用して JGA サーバ (jga-gw.ddbj.nig.ac.jp) からデータをダウンロードするためには、データ転送用の公開鍵・秘密鍵ペアを作成し、[公開鍵を D-way アカウントに登録](/account.html#enable-dra-submission-in-account)します。   

JGA ファイルサーバ上の /controlled-access/download/jga/ の下にデータ利用申請 DU 番号と同名のディレクトリが作成されます。   
[WinSCP](#winscp)、もしくは、[sftp](#sftp) コマンドを使ってダウンロードします。  

### WinSCP によるダウンロード {#winscp}

[WinSCP (https://winscp.net/eng/download.php)](https://winscp.net/eng/download.php) をダウンロードし、Windows PC にインストールします。

以下のように設定します。

- 転送プロトコル: SFTP
- ホスト名: jga-gw.ddbj.nig.ac.jp
- ポート番号: 443
- ユーザ名: D-way アカウント ID
- パスワード: 空欄のまま

{% include image.html url="books/winscp-setting-sftp.jpg" caption="WinSCP 接続情報の入力" class="w400" %}

{% include image.html url="books/jga-winscp2.jpg" caption="WinSCP データ転送用秘密鍵を指定" class="w400" %}

初回接続時には警告メッセージが表示されますが、「はい」を選択してください (次回から表示されません)。次の画面では、鍵を作成した際に指定したパスフレーズを入力します。

{% include image.html url="books/jga-winscp3.jpg" caption="WinSCP ファイルの転送" class="w400" %}

ログインに成功すると、左側のウィンドウにユーザの PC のフォルダ、右側のウィンドウに JGA サーバの登録者専用ディレクトリが表示されるので 右側ウィンドウでファイルを選択し左側ウィンドウへドラッグ＆ドロップし、PC へファイルをダウンロードします。

### sftp ダウンロード {#sftp}

sftp の P オプションでポート番号 443 とデータ転送用秘密鍵（データセット復号用公開鍵・秘密鍵とは別になります）を指定してログインし、ディレクトリごとダウンロードします。

```
# アカウント名: account_b
# 利用申請番号： J-DU999991
# データ転送用秘密鍵のファイルパス: ~/.ssh/id_rsa

$ sftp -i ~/.ssh/id_rsa -P 443 account_b@jga-gw.ddbj.nig.ac.jp
$ cd controlled-access/download/jga/
$ get -r J-DU999991
```

ダウンロードした DU 番号ディレクトリ直下には Study ディレクトリ、及び、データファイルの復号ツールが配置された tools ディレクトリがあります。Study ディレクトリの下に Dataset ディレクトリがあり、Dataset ディレクトリの下にタブ区切りテキスト（tsv）ファイルと XML 形式のメタデータを含む metadata ディレクトリ、及び、暗号化されたデータファイルを含む Data と Analysis ディレクトリがあります。

以下の番号とデータファイルを例としてデータの利用方法を説明します。

```
# JGA Study: JGAS999992
# JGA Dataset: JGAD999993
# JGA Data: JGAR999999994-JGAR999999995
# JGA Analysis: JGAZ999999996-JGAZ999999997

$ tree J-DU999991/
J-DU999991/
├── JGAS999992                           # JGA Study
│   └── JGAD999993                       # JGA Dataset   
│       ├── JGAR999999994                # JGA Data
│       │   └── case1.fastq.gz.encrypt     # 暗号化ファイル
│       ├── JGAR999999995                # JGA Data
│       │   └── case2.fastq.gz.encrypt     # 暗号化ファイル
│       ├── JGAZ999999996                # JGA Analysis
│       │   └── case1.vcf.gz.encrypt       # 暗号化ファイル
│       ├── JGAZ999999997                # JGA Analysis
│       │   └── case2.vcf.gz.encrypt       # 暗号化ファイル
│       └── metadata
└── tools
    └── J-DU999991.tool.zip

```

### データファイルの復号 {#decrypt}

<div class="attention" markdown="1">
復号ツールは Linux で実行してください。Windows はサポートしていません。
</div>

ダウンロードした暗号化ファイルは、復号ツールを使って復号します。利用者の解析環境で J-DU999991 ディレクトリ直下に移動し、tools ディレクトリにある復号ツール「J-DU999991.tool.zip」を J-DU999991 ディレクトリ直下に展開します。復号処理スクリプトおよび暗号化済み共通鍵ファイルが展開されます。DU 全体を対象とする復号スクリプト J-DU999991.decrypt.sh が J-DU999991 ディレクトリ直下に、個々のデータファイルを対象とする case1.fastq.gz.decrypt.sh のような復号スクリプトが暗号化されたデータファイルが含まれる Data/Analysis ディレクトリに配置されます。

```
$ cd J-DU999991
$ unzip tools/J-DU999991.tool.zip

$ tree ../J-DU999991/
J-DU999991/
├── J-DU999991.decrypt.sh                     # DU 単位の復号処理スクリプト
├── JGAS999992
│   └── JGAD999993
│       ├── JGAR999999994
│       │   ├── case1.fastq.gz.decrypt.sh     # ファイル毎の復号処理スクリプト
│       │   ├── case1.fastq.gz.encrypt
│       │   └── case1.fastq.gz.encrypt.dat    # 共通鍵ファイル
│       ├── JGAR999999995
│       │   ├── case2.fastq.gz.encrypt
│       │   ├── case2.fastq.gz.encrypt.dat    # 共通鍵ファイル
│       │   └── case2.fastq.gz.encrypt.sh     # ファイル毎の復号処理スクリプト
│       ├── JGAZ999999996
│       │   ├── case1.vcf.gz.encrypt
│       │   ├── case1.vcf.gz.encrypt.dat      # 共通鍵ファイル
│       │   └── case1.vcf.gz.encrypt.sh       # ファイル毎の復号処理スクリプト
│       ├── JGAZ999999997
│       │   ├── case2.vcf.gz.encrypt
│       │   ├── case2.vcf.gz.encrypt.dat      # 共通鍵ファイル
│       │   └── case2.vcf.gz.encrypt.sh       # ファイル毎の復号処理スクリプト
│       └── metadata
└── tools
    └── J-DU999991.tool.zip

# .decrypt.sh: 復号処理スクリプト
# .dat: 暗号化済み共通鍵ファイル    
```

全ての復号処理スクリプトに対して実行権限を付与します。   
以下のようにワイルドカード (*) を使ったコマンドを実行するとデータファイル毎の復号処理スクリプトに対して一括で実行権限を付与することができます。

```
$ chmod 750 J-DU999991.decrypt.sh
$ chmod 750 */*/*/*decrypt.sh
```

利用申請時に登録したデータセット復号用公開鍵とペアになっている「秘密鍵」を指定して「J-DU999991.decrypt.sh」を実行し、全データファイルを復号します。

- -k: データセット復号用公開鍵とペアの秘密鍵を指定 （例：J-DU999991_private_key）
- -p: 秘密鍵のパスフレーズ (以下で \*\*\*\*\*\* となっている部分) を指定（パスフレーズを指定していない場合は省略）

```
$ ./J-DU999991.decrypt.sh -k J-DU999991_private_key -p ******
$ ls JGAS999992/JGAD999993/JGAR999999994/
case1.fastq.gz　　          # 復号されたデータファイル
case1.fastq.gz.decrypt.sh
case1.fastq.gz.encrypt
case1.fastq.gz.encrypt.dat
$ ls JGAS999992/JGAD999993/JGAZ999999996/
case1.vcf.gz　　            # 復号されたデータファイル
case1.vcf.gz.decrypt.sh
case1.vcf.gz.encrypt
case1.vcf.gz.encrypt.dat
```

DU ディレクトリ下にある Study や Dataset ディレクトリを sftp した場合、以下のようなディレクトリ配置にしてから復号スクリプトを実行します。  
DU ディレクトリ直下に DU 単位の復号スクリプトと暗号化されたデータファイルが含まれている Study/Dataset/Data もしくは Analysis ディレクトリを配置します。

```
$ J-DU999991/
J-DU999991/J-DU999991.decrypt.sh
J-DU999991/JGAS999992/JGAD999993
```

## メタデータ {#metadata}

metadata ディレクトリには以下のファイルが含まれています。メタデータファイルは暗号化されていません。

### メタデータオブジェクトの内容が記述された tsv ファイル {#metadata-tsv}

- JGAD999993.sample.txt
- JGAD999993.analysis.SEQUENCE_VARIATION.txt  

メタデータを見やすくするため、Sample 及び Analysis については、1行目に項目名、2行目以降に内容が記述された tsv ファイルが提供されます。Analysis の tsv ファイル名には Analysis type（種類）が含まれており、type 毎に作成されます。なお Study、Dataset、Policy はオープンなメタデータとして [DDBJ Search](https://ddbj.nig.ac.jp/search) でも内容を見ることができます。

### メタデータオブジェクトの対応関係と内容を記述した tsv ファイル {#metadata-relation-tsv}

- JGAD999993.study_sample_experiment_data.mapping.txt

Data → Experiment → Sample → Study の対応関係を示した表。Experiment と Data についてはこの対応表がオブジェクトの内容表示を兼ねています。

- JGAD999993.study_analysis_sample.mapping.txt

Analysis → Sample → Study の対応関係を示した表。複数サンプルの結果をまとめた解析データなど、Analysis が複数 Sample を参照している場合はアクセッション番号ではなく参照している Sample の「数」が記載されます。

- JGAD999993.analysis_sample.mapping.txt

Analysis と Sample の対応表。Analysis が複数 Sample を参照している場合、全ての Sample アクセッション番号が列挙されます。

- JGAD999993.dataset_policy_data_analysis.mapping.txt

Dataset に含まれる Data、Analysis とリンクしている Policy の対応表。

### 各オブジェクトのメタデータ XML ファイル {#metadata-xml}

- JGAD999993.study.xml
- JGAD999993.dataset.xml
- JGAD999993.policy.xml
- JGAD999993.sample.xml
- JGAD999993.experiment.xml
- JGAD999993.data.xml
- JGAD999993.analysis.xml
- JGAD999993.dac.xml

プログラムで機械処理する場合などに利用できます。

### ファイルリスト {#filelist}

- JGAD999993.filelist.txt

データファイルの名前、種類、サイズ、復号前後の MD5 ハッシュ値、及び、含まれている Data と Analysis アクセッション番号をまとめた表。
手許でダウンロードしたファイルの MD5 ハッシュ値を取得し、リスト中の値と比較することでファイルの破損チェックを行うことができます。







