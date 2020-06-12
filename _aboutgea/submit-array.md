---
layout: indexed_content
title: Submit microarray experiment
pathname: submit-array
category: aboutgea
pdf: https://www.ddbj.nig.ac.jp/pdf/gea/submit-array.pdf
---

## GEA 登録の流れ

### 1\. 登録アカウントを取得

  - [D-way 登録アカウント](https://ddbj.nig.ac.jp/D-way/)を作成
  - [公開鍵と center nameをアカウントに登録](/account.html#enable-dra-submission-in-account)しGEA 登録を可能に

### 2\. BioProjectとBioSampleを登録

#### [BioProject](/bioproject/submission.html)

  - 研究プロジェクトの内容

#### [BioSample](/biosample/submission.html)

![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv}

  - 実験データを得るのに使われた生物学的、物理的にユニークなサンプル

![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv}
    メタデータをタブ区切りテキストファイルで登録できます

### 3\. 生データと解析済みデータファイルをアップロード

  - GEA 登録用ディレクトリに生データと解析済みデータファイルをアップロード
  - \[必要であれば\] アレイデザインが[ArrayExpress](https://www.ebi.ac.uk/arrayexpress/arrays/browse.html)/GEA に未登録の場合、GEA 登録用ディレクトリにデータファイルと一緒にアレイデザインファイルをアップロード

### 4\. BioProjectとBioSampleを選択

  - GEA 登録で参照するBioProjectを一つ選択
  - GEA 登録で参照する複数BioSampleを選択。通常のGEA 登録は一つ以上のサンプルで構成されます

### 5\. IDFとSDRFを作成

#### IDF

  - [IDF(Investigation Description Format)](/gea/metadata.html#idf)
    ファイルで実験デザイン、プロトコールや文献情報といった実験全体を記述します

#### SDRF

![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv}

  - [SDRF(Sample and Data RelationshipFormat)](/gea/metadata.html#sdrf)
    ファイルでサンプル属性とサンプル、アレイ、データファイル間の関係性を記述します
  - 選択したBioProjectとBioSampleの内容から生成されたSDRFテンプレートファイルに必要な情報を追加します

### 6\. IDFとSDRFを投稿しデータファイルを検証する

  - 登録ウェブシステムからIDFとSDRFを投稿するとアップロードしたデータファイルの[検証処理](/gea/validation.html)が自動的に始まります
  - 検証処理を通過した登録が査定されます

## 登録前のチェックリスト

#### [Two-color microarray experiment](javascript:void\(0\))

GEA 登録インターフェースは二つのサンプルが一つの生データファイルにリンクしているタイプのtwo-colorワークフローのみをサポートしています([例を参照](/gea/example.html#sdrf_example2))。IDFタブでdual-channelオプションが選択された場合、同時にハイブリダイズした二サンプルに由来する一つのデータファイルが提供されることを想定しています。いくつかのtwo-colorマイクロアレイプラットフォームでは通常それぞれのチャンネルに対応した別々の生データファイルが生成されます。このようなケースでそれぞれのサンプルに一つのファイルを結びつけると検証処理でエラーになります。

各チャンネルに対応した別々のファイルを登録する場合は[GEA チームに連絡](/contact.html)してください。

#### [Single-cell sequencing experiment](javascript:void\(0\))

[ArrayExpress Single-cell submissionguide](https://www.ebi.ac.uk/arrayexpress/help/single-cell_submission_guide.html)を参照してください。spike-inやデータ解析に必要な追加ファイルを登録する場合は[GEA チームに連絡](/contact.html)してください。

#### [More than one technology per experiment](javascript:void\(0\))

GEA では一つの登録に異なる種類のテクノロジー（マイクロアレイとシークエンシング）を含めることはできないため登録を分ける必要があります。間違いを防ぐためそれぞれの登録には同じ研究に属していても明確に区別できるタイトルを付けてください。
一つの登録に異なるアレイデザインを含めることは可能なので、このような場合は[GEA チームに連絡](/contact.html)してください。

## Microarray experiment の登録

### 新規登録の作成

[D-way(https://trace.ddbj.nig.ac.jp/D-way)](https://ddbj.nig.ac.jp/D-way/)にログインするとトップページが表示されます。上部の GEA メニューから GEA 登録サイトに移動します。

"Microarray"を選択した状態で\[New submission\]をクリックしてmicroarray experimentsubmissionを作成します。作成と同時にDDBJファイルサーバ(ftp-private.ddbj.nig.ac.jp)に対応するGEA 登録用サブディレクトリが登録者のホーム下に作成されます。このサブディレクトリに[データファイルをアップロード](#upload-data)します。

{::options parse_block_html="true"/}
<div class="attention red">
DDBJセンターから登録者に問い合わせた後三か月以上回答が無い場合はSubmissionをキャンセルいたします。
</div>

![Microarray experiment submission の新規作成]({{ site.baseurl }}/assets/images/books/array-sub1.jpg "Microarray experiment submission の新規作成")

登録のステータスには以下のものがあります。"Data Validated"と"Validation Error"になった登録が査定されます。

| ステータス            | 説明                            |
| ---------------- | ----------------------------- |
| New              | メタデータの投稿前                     |
| Data Submitted   | メタデータとデータファイルが投稿された           |
| Data Validating  | データファイルの検証処理中                 |
| Validation Error | データファイルの検証処理エラー               |
| Data Validated   | メタデータとデータファイルの検証処理が完了         |
| Curating         | キュレータが登録を査定中                  |
| Accession Issued | アクセッション番号が発行された               |
| Confidential     | 公開用ファイルの作成処理が完了し、非公開に保たれている状態 |
| Public           | 公開されている状態                     |

登録のステータス一覧

{::options parse_block_html="true"/}
### 生データと解析済みファイルのアップロード<a name="upload-data"></a>

#### [ターミナルによるシークエンスデータの転送(Linux/Mac OS X)](javascript:void\(0\))

ファイルをSCP転送します。

```
$ scp <Your Files> <D-way Login ID>@ftp-private.ddbj.nig.ac.jp:~/gea/<GEA Submission ID>
```

  - \<Your Files\> 転送するファイル。例:file1 file2(file1とfile2)、file\*
  (fileではじまる全てのファイル)
  - \<D-way Login ID\>D-wayのLogin ID(例 test07)
  - \<GEA Submission ID\> GEA 登録のSubmissionID(例:ESUB000350)
  - コマンドの例:scp strainA\_1.fastq test07@ftp-private.ddbj.nig.ac.jp:\~/gea/ESUB000350

鍵を作成したときに指定したパスフレーズを入力します。

```
Enter passphrase for key '/home/you/.ssh/id_rsa':
```

サーバにログインし、直接ファイルを操作することができます。サーバにSSHでログインします。

```
$ ssh <D-way Login ID>@ftp-private.ddbj.nig.ac.jp
```

鍵を作成したときに指定したパスフレーズを入力します。

```
Enter passphrase for key '/home/you/.ssh/id_rsa':
```

ログインに成功すると、次のコマンドプロンプトが表示されます。

```
[test07@ftp-private ~]$
```

サーバのログイン環境は、登録者専用のプライベート環境になっていて、登録者以外はアクセスすることができません。実行できるコマンドは下記のものに制限されています。不要なファイルの削除は登録者が実施することができます。

```
ls cd cp mv rm more mkdir tar gzip gunzip bzip2 bunzip2 zip unzip
```

#### [WinSCPによるシークエンスデータの転送(Windows)](javascript:void\(0\))

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZxIfewrk8lI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[](//www.youtube-nocookie.com/embed/ZxIfewrk8lI?autohide=1&iv_load_policy=3&modestbranding=1&rel=0&wmode=transparent&autoplay=1 "DRAへの登録 ～データの転送(Windows)～")

DRAへの登録～データの転送(Windows)～

[WinSCP(http://winscp.net/eng/download.php)](http://winscp.net/eng/download.php)をインストールし、起動します。

以下のように設定した後、右中央にある\[Advanced...\]をクリックします。

<div class="attention red">
転送モードはバイナリモードにします。テキストモードで転送しないでください。
</div>

  - <span class="bold">File protocol:</span> SFTP
  - <span class="bold">Host name:</span> ftp-private.ddbj.nig.ac.jp
  - <span class="bold">Port number:</span> 22
  - <span class="bold">User name:</span>(D-way の Login ID を入力)
  - <span class="bold">Password:</span>(空欄のまま)

![]({{ site.baseurl }}/assets/images/books/winscp1_400.jpg "秘密鍵の登録１")

"Authentication"にある"Private key file"で、事前に作成したPuTTY形式の秘密鍵を選択します。

![]({{ site.baseurl }}/assets/images/books/winscp2_400.jpg "秘密鍵の登録２")

最後に、下中央にある\[Login\]をクリックします。

![]({{ site.baseurl }}/assets/images/books/winscp3_400.jpg "winSCPへのログイン")

初回接続時には警告メッセージが表示されますが、"はい"を選択してください(次回から表示されません)。次の画面では、鍵を作成した際に指定したパスフレーズを入力します。

ログインに成功すると、左側のウィンドウにユーザのPC のフォルダ、右側のウィンドウにデータ受付サーバの登録者専用ディレクトリが表示されます。
左側ウィンドウでファイルを選択し右側ウィンドウへドラッグ＆ドロップし、サーバへファイルを転送します。

![]({{ site.baseurl }}/assets/images/books/winscp4_400.jpg "ファイルの転送")

転送したファイルは、ファイルを選択し\[削除\]ボタンをクリックすることで削除できます。

#### [Cyberduck によるシークエンスデータの転送(Mac OS X)](javascript:void\(0\))

<iframe width="560" height="315" src="https://www.youtube.com/embed/A2hPlGZEW_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[](//www.youtube-nocookie.com/embed/A2hPlGZEW_o?autohide=1&iv_load_policy=3&modestbranding=1&rel=0&wmode=transparent&autoplay=1 "DRAへの登録 ～データの転送(Mac)～")

DRAへの登録～データの転送(Mac)～

[Cyberduck(https://cyberduck.io/)](https://cyberduck.io/)をインストールし、起動します。

トップ画面で"Open Connection"を選択します。

![]({{ site.baseurl }}/assets/images/books/Cyberduck_1.jpg "open_connection")

使用する転送方式で"SFTP(SSH File Transfer Protocol)"を選択します。

![]({{ site.baseurl }}/assets/images/books/Cyberduck_2.jpg "SFTP")

Cyberduck の起動画面で、以下のように設定し More Options の "Use Public Key Authentication"をチェックします。

  - <span class="bold">Server:</span>ftp-private.ddbj.nig.ac.jp
  - <span class="bold">Port:</span>22
  - <span class="bold">Username:</span>(D-wayのLogin IDを入力)
  - <span class="bold">Password:</span>(空欄のまま)
  - <span class="bold">Add to Keychain:</span>(チェックを入れる)

![]({{ site.baseurl }}/assets/images/books/Cyberduck_3.jpg "key_authentication")

秘密鍵(private key)はデフォルトで"ユーザのホームフォルダ.sshフォルダ(Finderからは見えない隠しフォルダ)\>id\_rsa"に保存されています。

![]({{ site.baseurl }}/assets/images/books/Cyberduck_4.jpg "private_key")

初回接続時には警告メッセージが表示されますが"常に"を選択してください(次回から表示されません)。

ログインに成功すると、データ受付サーバの登録者専用ディレクトリが表示されます。登録者のPCにあるファイルを選択しウィンドウにドラッグ＆ドロップすることで、ファイルをサーバに転送します。

![]({{ site.baseurl }}/assets/images/books/Cyberduck_5.jpg "transfer")

<div class="attention red">
ftp-private.ddbj.nig.ac.jpサーバに秘密鍵を使ってsshでログインすることができます。
実行できるコマンドは下記のものに制限されています。不要なファイルの削除は登録者が実施することができます。  
ls cd cp mv rm more mkdir tar gzip gunzip bzip2 bunzip2 zip unzip
</div>

### Submission

四年以内の公開予定日指定、もしくは、データ処理後即日公開を選択します。登録者の名前と所属組織は公開されますがメールアドレスは公開されません。

<div class="attention red">
"Delete submission"で投稿前の登録を削除することができます。
</div>

![登録管理情報を入力します]({{ site.baseurl }}/assets/images/books/array-sub2.jpg "登録管理情報を入力します")

### BioProject

自身のアカウントで登録済みのBioProjectを一つ選択します。BioProjectが未登録の場合は[BioProject登録サイト](/bioproject/submission.html#bioproject-submission)でプロジェクトを登録します。

他のアカウントで登録されたBioProjectを参照したい場合は[GEA チームに連絡](/contact.html)します。

![GEA 登録で使う BioProjectを一つ選択します]({{ site.baseurl }}/assets/images/books/gea-bp.jpg "GEA 登録で使う BioProjectを一つ選択します")

### BioSample

自身のアカウントで登録済みのBioSampleを選択します。BioSample が未登録の場合は[BioSample登録サイト](/biosample/submission.html#biosample-submission)でサンプルを登録します。

他のアカウントで登録されたBioSampleを参照したい場合は[GEA チームに連絡](/contact.html)します。

![GEA 登録で使うBioSampleを選択します]({{ site.baseurl }}/assets/images/books/gea-bs.jpg "GEA 登録で使うBioSampleを選択します")

### IDF

[IDF(Investigation Description Format)](/gea/metadata.html#idf)の内容を入力します。

[IDFの例](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=0)

  - Protocol:チェック済みのプロトコールは必須です
  - Publication: 関連する文献を PubMed IDもしくはDOIで指定します。未公表の文献についてはIDが発行された後に[お知らせください](/contact.html)。
  - Array Design: [ArrayExpress](https://www.ebi.ac.uk/arrayexpress/arrays/browse.html)/GEA にアレイデザインが登録されている場合は"A-XXXX-n"のアクセッション番号を記入します。アレイデザインが未登録の場合はGEA 登録用ディレクトリにアレイデザインファイルをアップロードして[新規アレイデザインを登録](/gea/adf.html)します。
  - Data File Type: マイクロアレイ実験の場合は生データと解析済みデータが必須です。サンプル毎の生データ・解析済みデータファイルの登録を強く推奨します[マイクロアレイ実験に登録可能なファイル形式](/gea/datafile.html#array_data)。

![IDFの内容を入力]({{ site.baseurl }}/assets/images/books/array-idf.jpg "IDFの内容を入力")

### SDRF

![SDRF テンプレートファイルをダウンロード]({{ site.baseurl }}/assets/images/books/array-sdrf.jpg "SDRF テンプレートファイルをダウンロード")

[SDRF(Sample and Data Relationship Format)](/gea/metadata.html#sdrf)
テンプレートファイルをダウンロードして必要な情報を追加します。

[SDRFの例](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=657626667)

自動生成される内容

  - 各NameカラムとSource NameのAttributeカラム: 選択された BioSampleの内容から自動生成されます
  - SDRF行: 1行1BioSampleで行が自動生成されます
  - Protocol: IDFで作成されたプロトコールはSDRFの適切な個所にプロトコールID(例ESUB000350\_Protocol\_1)として挿入されます
  - Technology Type: マイクロアレイ登録の場合は"array assay"が固定入力されます
  - Array Design REF: IDFで指定されたアレイデザインアクセッション番号、もしくは、アレイデザインファイル名が自動入力されます

\<Required: fill in the content\>タグを上書きして必須項目を入力します。

追加入力が必要な項目

  - Material Type: [controlled term](/gea/metadata.html#Material_Type)から適切な語句を一つ記入します。
      - total RNA
      - polyA RNA
      - cytoplasmic RNA
      - nuclear RNA
      - genomic DNA
      - protein
      - other
  - Label: biotin、Cy3やCy5等の抽出分子を標識したラベル化合物名を記入します。
  - Array Data FileとComment\[Array Data File md5\]: 生データファイルのファイル名と[md5 チェックサム値](#supplement-md5)の組を記入します。
  - Derived Array Data File と Comment\[Derived Array Data File md5\]: 解析済みデータファイルのファイル名と[md5 チェックサム値](#supplement-md5)の組を記入します。
  - データファイルとmd5チェックサム値の組は[md5sum コマンド](#supplement-md5)の結果を\<GEA submission ID\>.md5(例 ESUB000001.md5)ファイルとしてデータファイルと一緒に提供することもできます（SDRFと .md5 ファイルの両方がある場合は.md5の値が優先されます）。
  - Factor Value\[enter experiment factor name here\]: 実験で研究している「要因」。growthcondition、genotype、organism part 等の研究で解析している変数のことです。これらの変数の実際の値は"Factor Value\[\]"カラムに記載します。例:
      - Factor Value\[strain\]
      - AT76
      - KU-2003
      - KU-PI499262

![SDRFテンプレートの図解、登録者が情報を追加する必要がある部分は黄色で示されている]({{ site.baseurl }}/assets/images/books/array-sdrf-template.jpg "SDRF テンプレートの図解、登録者が情報を追加する必要がある部分は黄色で示されている")

内容を追加したSDRFを選択してContinueをクリックします。

![作成したSDRFファイルを選択]({{ site.baseurl }}/assets/images/books/array-sdrf2.jpg "作成したSDRFファイルを選択")

### Overview と投稿

最後のOverviewタブでIDFとSDRFファイルをダウンロードして内容をチェックします。修正が必要な場合はタブを戻ってメタデータを修正します。

"Submit"ボタンをクリックしてIDFとSDRFを投稿します。

![IDFとSDRFの内容を確認してから投稿]({{ site.baseurl }}/assets/images/books/array-overview.jpg "IDFとSDRFの内容を確認してから投稿")

### 検証処理

メタデータ投稿時にIDFとSDRFに記載されているデータファイルが対象の登録用ディレクトリにアップロードされていない場合、"Datafile is not uploaded"というエラーメッセージが表示され投稿が中断されます。

Validatorは[validation rule](/gea/validation.html)に従ってメタデータをチェックしエラーとワーニングメッセージを表示します。メタデータを投稿するためにはエラーを解消しておく必要があります。

![エラーとワーニングメッセージ]({{ site.baseurl }}/assets/images/books/array-validation.jpg "エラーとワーニングメッセージ")

### アクセッション番号

完成したGEA experimentに対して[GEA アクセッション番号](/gea/overview.html#acc)が発行されます。

[査読者用トークンを発行](/gea/reviewer-access.html)することでの非公開データへのアクセスを提供することができます。

![GEA アクセッション番号]({{ site.baseurl }}/assets/images/books/array-accession.jpg "GEA アクセッション番号")

## 更新

### 各データベースにおける更新方法

<table>
<colgroup>
<col style="width: 50%"/>
<col style="width: 50%"/>
</colgroup>
<thead>
<th>データベース</th>
<th>更新方法</th>
</thead>
<tbody>
<td><a href="/ddbj/index.html">Annotated sequence database</a></td>
<td><a href="/ddbj/updt-form.html">ウェブフォームから依頼</a></td>
<tr class="even">
<td>Sequence Read Archive(DRA)</td>
<td><a href="https://ddbj.nig.ac.jp/D-way/">D-way にログインして登録者自身で更新</a><br />
<a href="/contact.html">(配列データの追加や削除はウェブフォームから依頼)</a></td>
</tr>
<td>Genomic Expression Archive(GEA )</td>
<td><a href="/contact.html">ウェブフォームから依頼</a></td>
<tr class="even">
<td>BioProject/BioSample</td>
<td><a href="/contact.html">ウェブフォームから依頼</a></td>
</tr>
</tbody>
</table>

### アーカイブされた experiment の削除

アーカイブされた Experiment を削除する場合は [GEA チームに連絡](/contact.html)します。

## 補足: MD5値

MD5(Message Digest Algorithm 5)はハッシュ関数であり、与えられたファイルに対してハッシュ値(MD5値、32桁の英数字)を出力します。ファイルが破損しているとMD5値が変化します。DRAでは、到着したファイルのMD5値の一致をチェックすることで、ファイルの破損がないかどうか確認しています。

### [MD5値の取得(Linux)](javascript:void\(0\))

ファイルのMD5値を取得します。

```
$ md5sum file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
```

### [MD5値の取得(Mac OS X)](javascript:void\(0\))

ファイルのMD5値を取得します。

```
$ md5 file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
```

### [MD5値の取得(Windows)](javascript:void\(0\))<a name="supplement-md5"></a>

[Fsum Frontend(http://sourceforge.net/projects/fsumfe/)](http://sourceforge.net/projects/fsumfe/)をインストールし、起動します。  
まず、"md5"にチェックを入れてください。

![]({{ site.baseurl }}/assets/images/books/Fsum1.jpg "md5 を選択")

\[+\]ボタンをクリックし、必要なシークエンスデータファイルを開いてください。同時に複数のファイルを選択することが可能です。

![]({{ site.baseurl }}/assets/images/books/Fsum2.jpg "シークエンスデータファイルを選択")

最後に、\[Calculate hashes\]ボタンをクリックしてください。各ファイルの MD5値が表示されます。\[Export\]ボタンから、MD5値の一覧表(.html,.csv,.xml)を作成することができます。

![]({{ site.baseurl }}/assets/images/books/Fsum3.jpg "MD5値の計算を開始")
