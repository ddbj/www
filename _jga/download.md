---
layout: indexed_content
title: 利用手順

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

## NBDC への利用申請<a name="du-application"></a>
[NBDC ヒトデータベースの「利用可能な研究データ一覧」](https://humandbs.biosciencedbc.jp/data-use/all-researches)で使いたいデータを探すことができます。
[DDBJ Search](https://ddbj.nig.ac.jp/search) でも検索することができますが、新規公開データの反映機能実装が2020年11月になる見込みであり、それまでは新規公開データが反映されません。

利用したいデータの Dataset アクセッション番号を控えます。例 JGAD000001（旧番号体系だと JGAD00000000001）


[NBDC データ申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/) から [利用申請](https://humandbs.biosciencedbc.jp/data-use) します。
申請時に利用申請グループを作成、利用を希望する Study (例 JGAS999992) と Dataset (例 JGAD999993) アクセッション番号を入力し、データの暗号化に使用する「データセット暗号化用公開鍵」を登録します。
利用申請が NBDC で承認された後、データは JGA サーバ上で Dataset 単位で提供されます。

申請には D-way アカウントが必要です。アカウントが無い場合は申請前に [D-way アカウントを取得](https://ddbj.nig.ac.jp/D-way/) してください。JGA サーバから scp でデータをダウンロードするためには[認証用の公開鍵・秘密鍵ペアを作成し、公開鍵を D-way アカウントに登録](/account.html#generate-key-pair)する必要があります。

{::options parse_block_html="true" /}
<div class="attention red">
D-way アカウント作成後、[NBDC データ申請システム](https://humandbs.ddbj.nig.ac.jp/nbdc/application/)で利用できるようになるまで10分程度の時間がかかります。
</div>

以下では JGA データの利用手順を説明します。

## 利用申請グループ<a name="data-user-group"></a>

申請前に利用申請グループを作成します。例の利用申請グループ (usergrp1)では申請及びダウンロードを担当する研究員 (account_b) がオーナー、研究代表者 (account_c) がメンバーとなっています。

{::nomarkdown}
{% include image.html url="books/DS-group.png" caption="データ利用申請グループ" class="w450" %}
{:/}

[利用申請を開始](https://humandbs.biosciencedbc.jp/data-use) し、作成した利用申請グループを選択します。

{::nomarkdown}
{% include image.html url="books/DU-start.png" caption="利用申請の開始" class="w450" %}
{:/}

{::nomarkdown}
{% include image.html url="books/DU-group.png" caption="データ利用申請グループの選択" class="w450" %}
{:/}

## データセット暗号化用公開鍵<a name="public-key-for-dataset-encryption"></a>

セキュリティのため JGA データセットはユーザが登録したデータセット暗号化用公開鍵で暗号化された状態で提供されます。ユーザは利用承認されたデータセットを scp でダウンロードし、秘密鍵で復号してから利用します。

{::options parse_block_html="true" /}
<div class="attention red">
データセット暗号化用公開鍵は D-way アカウントの[認証用の公開鍵](/account.html#enable-dra-submission-in-account)とは別になります。JGA データの利用のためには暗号化用と認証用に合計2ペア4ファイルの公開鍵・秘密鍵が必要になります。
</div>

### データセット暗号化用公開鍵・秘密鍵ペアの作成<a name="generate-key-pair"></a>

利用申請毎に登録するデータセット暗号化用公開鍵・秘密鍵ペアを作成します。作成手順は[公開鍵/秘密鍵ペアの生成](/account.html#generate-key-pair)をご覧ください。

作成したデータセット暗号化用公開鍵を NBDC の利用申請システムで登録します。

### データセット暗号化用公開鍵の登録<a name="key-registration"></a>

NBDC への利用申請において公開鍵を「データセット暗号化用公開鍵」として登録します。

{::nomarkdown}
{% include image.html url="books/public-key-for-dataset-encryption.png" caption="データセット暗号化用公開鍵の登録" class="w400" %}
{:/}

## 利用申請の承認とダウンロード<a name="data-use-approval-download"></a>

### 利用申請の承認<a name="data-use-approval"></a>

利用申請が NBDC で承認されると、JGA ファイルサーバにダウンロード用ディレクトリが作成され、メタデータ、暗号化されたデータファイルと復号ツールが配置されます。

{::nomarkdown}
{% include image.html url="books/data-use-approved.png" caption="利用申請の承認" class="w400" %}
{:/}

### ダウンロード<a name="download"></a>

{::options parse_block_html="true" /}
<div class="attention red">
JGA からファイルを scp でダウンロードするためには [D-way アカウントに center name と公開鍵を登録](/account.html#enable-dra-submission-in-account)する必要があります。また、JGA サーバへのアクセスは IP アドレスで制限されているので、NBDC に申請する際に接続元グローバル IP アドレスを伝えてください。
</div>

JGA ファイルサーバ (jga-gw.ddbj.nig.ac.jp) 上の /controlled-access/download/jga/ の下にデータ利用申請 DU 番号と同名のディレクトリが作成されるので、scp の P オプションでポート番号 443 と認証用秘密鍵（データセット暗号化用公開鍵・秘密鍵とは別になります）を指定して、ディレクトリごとダウンロードします。


例
  - アカウント名: account_b
  - データ利用申請番号： J-DU999991

```
$ scp -P443 -i private-key-for-auth -r account_b@jga-gw.ddbj.nig.ac.jp:/controlled-access/download/jga/J-DU999991 .
```
-P: 接続先ポート番号 443 を指定
-i: D-way に登録した認証用公開鍵とペアの秘密鍵を指定

JGA ファイルサーバに ssh でログインすることができます。
```
$ ssh -p443 -i private-key-for-auth account_b@jga-gw.ddbj.nig.ac.jp
```
-P: 接続先ポート番号 443 を指定
-i: D-way に登録した認証用公開鍵とペアの秘密鍵を指定

DU 番号ディレクトリ直下には Study ディレクトリ、及び、データファイルの復号ツールが配置された tools ディレクトリがあります。Study ディレクトリの下に Dataset ディレクトリがあり、Dataset ディレクトリの下にタブ区切りテキスト（tsv）ファイルと XML 形式のメタデータを含む metadata ディレクトリ、及び、暗号化されたデータファイルを含む Data と Analysis ディレクトリがあります。

以下の番号とデータファイルを例としてデータの利用方法を説明します。

  - JGA Study: JGAS999992
  - JGA Dataset: JGAD999993
  - JGA Data: JGAR999999994-JGAR999999995
  - Data の暗号化データファイル: case1.fastq.gz.encrypt (JGAR999999994)、case2.fastq.gz.encrypt (JGAR999999995)
  - JGA Analysis: JGAZ999999996-JGAZ999999997
  - Analysis の暗号化データファイル： case1.vcf.gz.encrypt (JGAZ999999996)、case2.vcf.gz.encrypt (JGAZ999999997)

```
$ ls J-DU999991/
JGAS999992 　　
tools　
$ ls J-DU999991/tools
J-DU999991.tool.zip
$ ls J-DU999991/JGAS999992/JGAD999993
metadata
JGAR999999994
JGAR999999995
JGAZ999999996
JGAZ999999997
$ ls J-DU999991/JGAS999992/JGAD999993/**
J-DU999991/JGAS999992/JGAD999993/metadata:
JGAD999993.study.xml
JGAD999993.sample.xml
JGAD999993.experiment.xml
JGAD999993.data.xml
JGAD999993.analysis.xml
JGAD999993.dataset.xml
JGAD999993.policy.xml
JGAD999993.dac.xml
JGAD999993.filelist.txt
JGAD999993.sample.txt
JGAD999993.analysis.SEQUENCE_VARIATION.txt
JGAD999993.study_sample_experiment_data.mapping.txt
JGAD999993.study_analysis_sample.mapping.txt
JGAD999993.analysis_sample.mapping.txt
JGAD999993.dataset_policy_data_analysis.mapping.txt

J-DU999991/JGAS999992/JGAD999993/JGAR999999994:
case1.fastq.gz.encrypt

J-DU999991/JGAS999992/JGAD999993/JGAR999999995:
case2.fastq.gz.encrypt

J-DU999991/JGAS999992/JGAD999993/JGAZ999999996:
case1.vcf.gz.encrypt

J-DU999991/JGAS999992/JGAD999993/JGAZ999999997:
case2.vcf.gz.encrypt
```

## データファイルの復号<a name="decrypt"></a>

ダウンロードしたデータファイルは暗号化されているので、ツールで復号します。

利用者の解析環境で J-DU999991 ディレクトリに直下に移動し、tools ディレクトリにある復号ツール「J-DU999991.tool.zip」を J-DU999991 ディレクトリ直下に展開します。

```
$ cd J-DU999991
$ unzip tools/J-DU999991.tool.zip
```

復号処理スクリプトおよび暗号化済み共通鍵ファイルが展開されます。DU 全体を対象とする復号スクリプト J-DU999991.decrypt.sh が J-DU999991 ディレクトリ直下に、個々のデータファイルを対象とする case1.fastq.gz.decrypt.sh のような復号スクリプトが暗号化されたデータファイルが含まれる Data/Analysis ディレクトリに配置されます。

```
$ ls 
J-DU999991.decrypt.sh
JGAS999992 　　
tools　　　　　　
$ ls JGAS999992/JGAD999993/JGAR999999994/
case1.fastq.gz.decrypt.sh
case1.fastq.gz.encrypt
case1.fastq.gz.encrypt.dat
$ ls JGAS999992/JGAD999993/JGAZ999999996/
case1.vcf.gz.decrypt.sh
case1.vcf.gz.encrypt
case1.vcf.gz.encrypt.dat
```

  - .decrypt.sh: 復号処理スクリプト
  - .dat: 暗号化済み共通鍵ファイル

全ての復号処理スクリプトに対して実行権限を付与します。

```
$ chmod 754 J-DU999991.decrypt.sh 
$ chmod 754 JGAS999992/JGAD999993/JGAR999999994/case1.fastq.gz.decrypt.sh
$ chmod 754 JGAS999992/JGAD999993/JGAR999999995/case2.fastq.gz.decrypt.sh
$ chmod 754 JGAS999992/JGAD999993/JGAZ999999996/case1.vcf.gz.decrypt.sh 
$ chmod 754 JGAS999992/JGAD999993/JGAZ999999997/case2.vcf.gz.decrypt.sh 
```

データファイルが多数ある場合、以下のようにワイルドカード (*) を使ったコマンドを実行するとデータファイル毎の復号処理スクリプトに対して一括で実行権限を付与することができます。

```
$ chmod 754 J-DU999991.decrypt.sh 
$ chmod 754 JGAS999992/**/**/*.decrypt.sh
```

NBDC への利用申請時に登録したデータセット暗号化用公開鍵とペアになっている「秘密鍵」を指定して「J-DU999991.decrypt.sh」を実行し、全データファイルを復号します。

以下の番号とデータファイルを例としてデータの復号方法を説明します。

  - -k: データセット暗号化用公開鍵とペアの秘密鍵を指定 （例：J-DU999991_private_key）
  - -p: 秘密鍵のパスフレーズを指定（パスフレーズを指定していない場合は省略）

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

DU ディレクトリ下にある Study や Dataset ディレクトリを scp した場合、以下のようなディレクトリ配置にしてから復号スクリプトを実行します。DU ディレクトリ直下に DU 単位の復号スクリプトと暗号化されたデータファイルが含まれている Study/Dataset/Data or Analysis ディレクトリを配置します。

```
$ J-DU999991/
J-DU999991/J-DU999991.decrypt.sh
J-DU999991/JGAS999992/JGAD999993
```

### メタデータ<a name="metadata"></a>

metadata ディレクトリには以下のファイルが含まれています。メタデータファイルは暗号化されていません。

#### メタデータオブジェクトの内容が記述された tsv ファイル<a name="metadata-tsv"></a>

  - JGAD999993.sample.txt
  - JGAD999993.analysis.SEQUENCE_VARIATION.txt
  

メタデータを見やすくするため、Sample 及び Analysis については、1行目に項目名、2行目以降に内容が記述された tsv ファイルが提供されます。Analysis の tsv ファイル名には Analysis type（種類）が含まれており、type 毎に作成されます。なお Study、Dataset、Policy はオープンなメタデータとして [DDBJ Search](https://ddbj.nig.ac.jp/search) でも内容を見ることができます。

#### メタデータオブジェクトの対応関係と内容を記述した tsv ファイル<a name="metadata-relation-tsv"></a>

  - JGAD999993.study_sample_experiment_data.mapping.txt

Data → Experiment → Sample → Study の対応関係を示した表。Experiment と Data についてはこの対応表がオブジェクトの内容表示を兼ねています。

  - JGAD999993.study_analysis_sample.mapping.txt

Analysis → Sample → Study の対応関係を示した表。複数サンプルの結果をまとめた解析データなど、Analysis が複数 Sample を参照している場合はアクセッション番号ではなく参照している Sample の「数」が記載されます。

  - JGAD999993.analysis_sample.mapping.txt

Analysis と Sample の対応表。Analysis が複数 Sample を参照している場合、全ての Sample アクセッション番号が列挙されます。

  - JGAD999993.dataset_policy_data_analysis.mapping.txt

Dataset に含まれる Data、Analysis とリンクしている Policy の対応表。

#### 各オブジェクトのメタデータ XML ファイル<a name="metadata-xml"></a>

  - JGAD999993.study.xml
  - JGAD999993.dataset.xml
  - JGAD999993.policy.xml
  - JGAD999993.sample.xml
  - JGAD999993.experiment.xml
  - JGAD999993.data.xml
  - JGAD999993.analysis.xml
  - JGAD999993.dac.xml

プログラムで機械処理する場合などに利用できます。

#### ファイルリスト<a name="filelist"></a>

  - JGAD999993.filelist.txt

データファイルの名前、種類、サイズ、復号前後の MD5 ハッシュ値、及び、含まれている Data と Analysis アクセッション番号をまとめた表。
手許でダウンロードしたファイルの MD5 ハッシュ値を取得し、リスト中の値と比較することでファイルの破損チェックを行うことができます。

### WinSCP によるダウンロードa name="upload-excel-winscp"></a>

[WinSCP (http://winscp.net/eng/download.php)](http://winscp.net/eng/download.php) をダウンロードし、Windows PC にインストールします。

以下のように設定します。

  - 転送プロトコル: SCP
  - ホスト名: jga-gw.ddbj.nig.ac.jp
  - ポート番号: 443
  - ユーザ名: D-way アカウント ID
  - パスワード: 空欄のまま

{::nomarkdown}
{% include image.html url="books/jga-winscp1.jpg" caption="WinSCP 接続情報の入力" class="w400" %}
{:/}

{::nomarkdown}
{% include image.html url="books/jga-winscp2.jpg" caption="WinSCP 認証用秘密鍵を指定" class="w400" %}
{:/}

初回接続時には警告メッセージが表示されますが、「はい」を選択してください (次回から表示されません)。次の画面では、鍵を作成した際に指定したパスフレーズを入力します。

{::nomarkdown}
{% include image.html url="books/jga-winscp3.jpg" caption="WinSCP ファイルの転送" class="w400" %}
{:/}

ログインに成功すると、左側のウィンドウにユーザの PC のフォルダ、右側のウィンドウに JGA サーバの登録者専用ディレクトリが表示されるので 右側ウィンドウでファイルを選択し左側ウィンドウへドラッグ＆ドロップし、PC へファイルをダウンロードします。






