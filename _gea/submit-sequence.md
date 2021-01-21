---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Submit sequencing experiment
category: gea
current_tab: submission overview
tab_menu:
  - id: home
    title: Home
    url: /gea/index.html
  - id: submission overview
    title: Submission Overview
    url: /gea/overview.html
    children:
      - title: Submit microarray experiment
        url: /gea/submit-array.html
      - title: Submit sequencing experiment
        url: /gea/submit-sequence.html
      - title: Metadata
        url: /gea/metadata.html
      - title: Data File
        url: /gea/datafile.html
      - title: Validation
        url: /gea/validation.html
      - title: Single-cell submission guide
        url: /gea/single-cell.html
      - title: Example
        url: /gea/example.html
      - title: Array Design
        url: /gea/adf.html
      - title: Data matrix
        url: /gea/matrix.html
      - title: Reviewer Access
        url: /gea/reviewer-access.html
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=gea
  - id: search
    title: Search (AOE)
    url: http://aoe.dbcls.jp/
    children:
      - title: Search (ArrayExpress)
        url: https://www.ebi.ac.uk/arrayexpress/browse.html
      - title: RefEx
        url: http://refex.dbcls.jp/
  - id: downloads
    title: Downloads
    url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/gea
  - id: about gea
    title: About GEA
    url: /gea/about-gea.html
lang: ja
---

## GEA submission flow  {#gea-submission-flow}

### 1\. 登録アカウントを取得 

  - [D-way 登録アカウント](https://ddbj.nig.ac.jp/D-way/)を作成
  - [公開鍵と center nameをアカウントに登録](/account.html#enable-dra-submission-in-account)しGEA登録を可能に

### 2\. BioProject、BioSample と Sequence Read Archive(DRA)に登録 

#### [BioProject](/bioproject/submission.html)  {#BioProject}

  - 研究プロジェクトの内容

#### [BioSample](/biosample/submission.html) {#_BioSample} ![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv}

  - 実験データを得るのに使われた生物学的、物理的にユニークなサンプル

#### [DRA](/dra/submission.html) {#_DRA} ![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv}

  - 生シークエンスリードとアライメント

![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv}メタデータをタブ区切りテキストファイルで登録できます

### 3\. 解析済みデータファイルをアップロード 

  - GEA 登録用ディレクトリに解析済みデータファイルをアップロード

### 4\. DRA submissionを選択 

  - GEA 登録の基となる生シークエンスリードを含んでいる DRA submission を一つ選択します
  - GEA 登録の基となる生シークエンスリードが複数の DRA submission に含まれている場合は複数 submission を選択します

### 5\. BioProjectを一つ選択 

  - GEA と DRA submission が同じプロジェクトである場合は DRA submission で使用した BioProject を一つ選択します
  - GEA と DRA submission が異なるプロジェクトである場合は DRA submission で使用した BioProject ではないBioProjectを一つ選択します

### 6\. IDF と SDRF を作成 

#### IDF  {#idf}

  - [IDF (Investigation Description Format)](/gea/metadata.html#idf)
    ファイルで実験デザイン、プロトコールや文献情報といった実験全体を記述します

#### SDRF  {#sdrf} ![]({{ site.baseurl }}/assets/images/parts/tsv.png){:.tsv}

  - [SDRF (Sample and Data RelationshipFormat)](/gea/metadata.html#sdrf)
    ファイルでサンプル属性とサンプル、アレイ、データファイル間の関係性を記述します
  - 選択した BioProject、BioSample と DRA submission の内容から生成された SDRF テンプレートファイルに必要な情報を追加します

### 7\. IDF と SDRF を投稿しデータファイルを検証する 

  - 登録ウェブシステムから IDF と SDRF を投稿するとアップロードしたデータファイルの [検証処理](/gea/validation.html)が自動的に始まります
  - 検証処理を通過した登録が査定されます

## 登録前のチェックリスト  {#checklist}

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Single-cell sequencing experiment</a></h4>
<div class="accordion-content">

[ArrayExpress Single-cell submission guide](https://www.ebi.ac.uk/arrayexpress/help/single-cell_submission_guide.html)を参照してください。spike-in やデータ解析に必要な追加ファイルを登録する場合は [GEA チームに連絡](/contact-ddbj.html)してください。

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">More than one technology per experiment</a></h4>
<div class="accordion-content">

GEA では一つの登録に異なる種類のテクノロジー（マイクロアレイとシークエンシング）を含めることはできないため登録を分ける必要があります。間違いを防ぐためそれぞれの登録には同じ研究に属していても明確に区別できるタイトルを付けてください。
一つの登録に異なるアレイデザインを含めることは可能なので、このような場合は [GEA チームに連絡](/contact-ddbj.html)してください。

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

## シークエンス実験の登録  {#seq-sub}

### 新規登録の作成  {#create-new-submission}

[D-way (https://trace.ddbj.nig.ac.jp/D-way)](https://ddbj.nig.ac.jp/D-way/) にログインするとトップページが表示されます。上部の GEA メニューから GEA 登録サイトに移動します。

"Sequencing" を選択した状態で \[New submission\] をクリックして sequencing experiment submission を作成します。作成と同時に DDBJ ファイルサーバ (ftp-private.ddbj.nig.ac.jp) に対応する GEA 登録用サブディレクトリが登録者のホーム下に作成されます。このサブディレクトリに [データファイルをアップロード](#upload-data)します。

<div class="attention">
DDBJ センターから登録者に問い合わせた後三か月以上回答が無い場合は Submission をキャンセルいたします。
</div>

{::nomarkdown}
{% include image.html url="books/array-sub1.jpg" caption="Sequencing experiment submissionの新規作成" class="w450" %}
{:/}

登録のステータスには以下のものがあります。"Data Validated" と "Validation Error" になった登録が査定されます。

登録のステータス一覧
{: .tablecaption}

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

### 解析済みファイルのアップロード {#upload-data} 

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">ターミナルによるシークエンスデータの転送 (Linux/Mac OS X)</a></h4>
<div class="accordion-content">

ファイルを SCP 転送します。

```
$ scp <Your Files> <D-way Login ID>@ftp-private.ddbj.nig.ac.jp:~/gea/<GEA Submission ID>
```

  - \<Your Files\> 転送するファイル。例: file1 file2 (file1とfile2)、file\*(fileではじまる全てのファイル)
  - \<D-way Login ID\> D-way の Login ID (例 test07)
  - \<GEA Submission ID\> GEA 登録の Submission ID (例: ESUB000350)
  - コマンドの例: scp strainA\_1.fastq test07@ftp-private.ddbj.nig.ac.jp:\~/gea/ESUB000350

鍵を作成したときに指定したパスフレーズを入力します。

```
Enter passphrase for key '/home/you/.ssh/id_rsa':
```

サーバにログインし、直接ファイルを操作することができます。サーバに SSH でログインします。

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

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">WinSCP によるシークエンスデータの転送 (Windows)</a></h4>
<div class="accordion-content">

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZxIfewrk8lI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DRA への登録 ～データの転送 (Windows)～

[WinSCP (http://winscp.net/eng/download.php)](http://winscp.net/eng/download.php) をインストールし、起動します。

以下のように設定した後、右中央にある \[Advanced...\] をクリックします。

<div class="attention">
転送モードはバイナリモードにします。テキストモードで転送しないでください。
</div>

  - <span class="bold">File protocol: </span> SFTP
  - <span class="bold">Host name: </span> ftp-private.ddbj.nig.ac.jp
  - <span class="bold">Port number: </span> 22
  - <span class="bold">User name: </span> (D-way の Login ID を入力)
  - <span class="bold">Password: </span> (空欄のまま)

[![]({{ site.baseurl }}/assets/images/books/winscp1_400.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/winscp1_400.jpg  "秘密鍵の登録１"){:.group1}

"Authentication" にある "Private key file" で、事前に作成した PuTTY 形式の秘密鍵を選択します。

[![]({{ site.baseurl }}/assets/images/books/winscp2_400.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/winscp2_400.jpg  "秘密鍵の登録2"){:.group1}

最後に、下中央にある \[Login\] をクリックします。

[![]({{ site.baseurl }}/assets/images/books/winscp3_400.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/winscp3_400.jpg  "winSCPへのログイン"){:.group1}

初回接続時には警告メッセージが表示されますが、 "はい" を選択してください (次回から表示されません)。次の画面では、鍵を作成した際に指定したパスフレーズを入力します。

ログインに成功すると、左側のウィンドウにユーザの PC のフォルダ、右側のウィンドウにデータ受付サーバの登録者専用ディレクトリが表示されます。
左側ウィンドウでファイルを選択し右側ウィンドウへドラッグ＆ドロップし、サーバへファイルを転送します。

[![]({{ site.baseurl }}/assets/images/books/winscp4_400.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/winscp4_400.jpg  "ファイルの転送"){:.group1}

転送したファイルは、ファイルを選択し \[削除\] ボタンをクリックすることで削除できます。

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h4 class="toggle-content-btn"><a href="javascript:void(0)">Cyberduck によるシークエンスデータの転送 (Mac OS X)</a></h4>
<div class="accordion-content">

<iframe width="560" height="315" src="https://www.youtube.com/embed/A2hPlGZEW_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DRA への登録 ～データの転送 (Mac)～

[Cyberduck (https://cyberduck.io/)](https://cyberduck.io/) をインストールし、起動します。

トップ画面で "Open Connection" を選択します。

[![]({{ site.baseurl }}/assets/images/books/Cyberduck_1.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/Cyberduck_1.jpg  "open_connection"){:.group1}

使用する転送方式で "SFTP (SSH File Transfer Protocol)" を選択します。

[![]({{ site.baseurl }}/assets/images/books/Cyberduck_2.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/Cyberduck_2.jpg  "SFTP"){:.group1}

Cyberduck の起動画面で、以下のように設定し More Options の "Use Public Key Authentication" をチェックします。

  - <span class="bold">Server:</span> ftp-private.ddbj.nig.ac.jp
  - <span class="bold">Port:</span> 22
  - <span class="bold">Username:</span> (D-way の Login ID を入力)
  - <span class="bold">Password:</span> (空欄のまま)
  - <span class="bold">Add to Keychain:</span> (チェックを入れる)

[![]({{ site.baseurl }}/assets/images/books/Cyberduck_3.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/Cyberduck_3.jpg  "key_authentication"){:.group1}

秘密鍵 (private key) はデフォルトで "ユーザのホームフォルダ .ssh フォルダ (Finderからは見えない隠しフォルダ) \>id\_rsa" に保存されています。

[![]({{ site.baseurl }}/assets/images/books/Cyberduck_4.jpg){:.w300}]({{ site.baseurl }}/assets/images/books/Cyberduck_4.jpg  "private_key"){:.group1}

初回接続時には警告メッセージが表示されますが "常に" を選択してください (次回から表示されません)。

ログインに成功すると、データ受付サーバの登録者専用ディレクトリが表示されます。登録者の PC にあるファイルを選択しウィンドウにドラッグ＆ドロップすることで、ファイルをサーバに転送します。

[![]({{ site.baseurl }}/assets/images/books/Cyberduck_5.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/Cyberduck_5.jpg  "transfer"){:.group1}

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

<div class="attention">
ftp-private.ddbj.nig.ac.jp サーバに秘密鍵を使って ssh でログインすることができます。
実行できるコマンドは下記のものに制限されています。不要なファイルの削除は登録者が実施することができます。  
ls cd cp mv rm more mkdir tar gzip gunzip bzip2 bunzip2 zip unzip
</div>

### Submission  {#Submission}

四年以内の公開予定日指定、もしくは、データ処理後即日公開を選択します。登録者の名前と所属組織は公開されますがメールアドレスは公開されません。

<div class="attention">
"Delete submission" で投稿前の登録を削除することができます。
</div>

{::nomarkdown}
{% include image.html url="books/array-sub2.jpg" caption="登録管理情報を入力します" class="w550" %}
{:/}

### DRA  {#DRA}

自身のアカウントで登録した DRA submission を一つ選択します。DRA が未登録の場合は [DRA登録サイト](/dra/submission.html#dra-submission)で DRA を登録します。

他のアカウントで登録された DRA を参照したい場合は [GEA チームに連絡](/contact-ddbj.html)します。

{::nomarkdown}
{% include image.html url="books/seq-dra.jpg" caption="GEA 登録で使う DRA submission を選択" class="w550" %}
{:/}

### BioProject  {#BioProject}

自身のアカウントで登録済みの BioProject を一つ選択します。BioProject が未登録の場合は [BioProject登録サイト](/bioproject/submission.html#bioproject-submission)でプロジェクトを登録します。

GEA と DRA submission が同じプロジェクトである場合は DRA submission で使用した BioProject を一つ選択します。 GEA と DRA submission が異なるプロジェクトである場合は DRA submission で使用した BioProject ではない BioProject を一つ選択します

他のアカウントで登録された BioProject を参照したい場合は [GEA チームに連絡](/contact-ddbj.html)します。

{::nomarkdown}
{% include image.html url="books/gea-bp.jpg" caption="GEA 登録で使う BioProject を一つ選択します" class="w550" %}
{:/}

### IDF  {#idf}

[IDF (Investigation Description Format)](/gea/metadata.html#idf) の内容を入力します。

[IDFの例](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=30173120)

  - Protocol: チェック済みのプロトコールは必須です　
  - Publication: 関連する文献を PubMed ID もしくは DOI で指定します。未公表の文献については ID が発行された後に [お知らせください](/contact-ddbj.html)。
  - Data File Type: シークエンシング実験の場合は解析済みデータが必須です。サンプル毎の解析済みデータファイルの登録を強く推奨します。[シークエンシング実験に登録可能なファイル形式](/gea/datafile.html#seq_data)。

{::nomarkdown}
{% include image.html url="books/seq-idf.jpg" caption="IDF の内容を入力" class="w600" %}
{:/}

### SDRF  {#sdrf}

{::nomarkdown}
{% include image.html url="books/seq-sdrf-down.jpg" caption="SDRF テンプレートファイルをダウンロード" class="w400" %}
{:/}

[SDRF (Sample and Data Relationship Format)](/gea/metadata.html#sdrf)
テンプレートファイルをダウンロードして必要な情報を追加します。

[SDRF の例](https://docs.google.com/spreadsheets/d/1y6pwWBUgz2XJ2l_78k56B-1Hnia116JtYrZJunsT38U/edit#gid=513795053)

Auto-filled fields.

  - Name columns and attribute columns for Source Name: Generated from BioSamples.
  - SDRF rows: 1 row for 1 Run.
  - Protocols: Protocols described in IDF are inserted to appropriate positions of SDRF with temporary protocol IDs (e.g., ESUB000352\_Protocol\_1)
  - Technology Type: "sequencing assay" for sequencing submission.
  - SRA Experiment and Run Comments to Extract and Assay Names: Generated from DRA Experiment and Run.

Enter required fields by overwriting \<Required: fill in the content\> tags.

自動生成される内容

  - 各 Name カラムと Source Name の Attribute カラム: 選択された BioSample の内容から自動生成されます
  - SDRF 行: 1 行 1 BioSample で行が自動生成されます
  - Protocol: IDF で作成されたプロトコールは SDRF の適切な個所にプロトコール ID (例 ESUB000350\_Protocol\_1) として挿入されます
  - Technology Type: マイクロアレイ登録の場合は "array assay" が固定入力されます
  - Array Design REF: IDF で指定されたアレイデザインアクセッション番号、もしくは、アレイデザインファイル名が自動入力されます

\<Required: fill in the content\> タグを上書きして必須項目を入力します。

追加入力が必要な項目

  - Material Type: [controlled term](/gea/metadata.html#Material_Type)
    から適切な語句を一つ記入します。
      - total RNA
      - polyA RNA
      - cytoplasmic RNA
      - nuclear RNA
      - genomic DNA
      - protein
      - other
  - Derived Array Data File と Comment \[Derived Array Data File md5\]:
    解析済みデータファイルのファイル名と [md5 チェックサム値](#supplement-md5) の組を記入します。
  - データファイルと md5 チェックサム値の組は [md5sum コマンド](#supplement-md5)の結果を \<GEA submission ID\>.md5 (例 ESUB000001.md5)
    ファイルとしてデータファイルと一緒に提供することもできます（SDRF と .md5 ファイルの両方がある場合は .md5 の値が優先されます）。
  - Factor Value\[enter experiment factor name here\]: 実験で研究している「要因」。growth condition、genotype、organism part 等の研究で解析している変数のことです。これらの変数の実際の値は "Factor Value \[\]" カラムに記載します。例:
      - Factor Value\[strain\]
      - AT76
      - KU-2003
      - KU-PI499262

{::nomarkdown}
{% include image.html url="books/seq-sdrf-template.jpg" caption="SDRF テンプレートの図解、登録者が情報を追加する必要がある部分は黄色で示されている" class="w600" %}
{:/}

内容を追加した SDRF を選択して Continue をクリックします。

{::nomarkdown}
{% include image.html url="books/seq-sdrf-up.jpg" caption="作成した SDRF ファイルを選択" class="w450" %}
{:/}

### Overview と投稿  {#submit}

最後の Overview タブで IDF と SDRF ファイルをダウンロードして内容をチェックします。修正が必要な場合はタブを戻ってメタデータを修正します。

"Submit" ボタンをクリックして IDF と SDRF を投稿します。

{::nomarkdown}
{% include image.html url="books/seq-submit.jpg" caption="IDF と SDRF の内容を確認してから投稿" class="w450" %}
{:/}

### 検証処理  {#validation}

メタデータ投稿時に IDF と SDRF に記載されているデータファイルが対象の登録用ディレクトリにアップロードされていない場合、"Data file is not uploaded" というエラーメッセージが表示され投稿が中断されます。

Validator は [validation rule](/gea/validation.html) に従ってメタデータをチェックしエラーとワーニングメッセージを表示します。メタデータを投稿するためにはエラーを解消しておく必要があります。

{::nomarkdown}
{% include image.html url="books/seq-validation.jpg" caption="エラーとワーニングメッセージ" class="w500" %}
{:/}


### アクセッション番号  {#accession}

完成した GEA experiment に対して [GEA アクセッション番号](/gea/overview.html#acc)が発行されます。

[査読者用トークンを発行](/gea/reviewer-access.html)することでの非公開データへのアクセスを提供することができます。

{::nomarkdown}
{% include image.html url="books/seq-accession.jpg" caption="GEA アクセッション番号" class="w500" %}
{:/}

## 更新  {#update-submission}

### 各データベースにおける更新方法  {#update-in-each-database}

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>データベース</th>
<th>更新方法</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="/ddbj/index.html">Annotated sequence database</a></td>
<td><a href="/ddbj/update-form.html">ウェブフォームから依頼</a></td>
</tr>
<tr class="even">
<td>Sequence Read Archive (DRA)</td>
<td><a href="https://ddbj.nig.ac.jp/D-way/">D-way にログインして登録者自身で更新</a><br />
<a href="/contact-ddbj.html">(配列データの追加や削除はウェブフォームから依頼)</a></td>
</tr>
<tr class="odd">
<td>Genomic Expression Archive (GEA)</td>
<td><a href="/contact-ddbj.html">ウェブフォームから依頼</a></td>
</tr>
<tr class="even">
<td>BioProject/BioSample</td>
<td><a href="/contact-ddbj.html">ウェブフォームから依頼</a></td>
</tr>
</tbody>
</table>

### アーカイブされた experiment の削除  {#withdraw-archived-objects}

アーカイブされた Experiment を削除する場合は [GEA チームに連絡](/contact-ddbj.html)します。

## 補足: MD5 値 {#supplement-md5} 

MD5 (Message Digest Algorithm 5) はハッシュ関数であり、与えられたファイルに対してハッシュ値 (MD5値、32桁の英数字) を出力します。ファイルが破損していると MD5 値が変化します。 DRA では、到着したファイルの MD5 値の一致をチェックすることで、ファイルの破損がないかどうか確認しています。

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)">MD5 値の取得 (Linux)</a></h3>
<div class="accordion-content">

ファイルの MD5 値を取得します。

```
$ md5sum file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
```

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)">MD5 値の取得 (Mac OS X)</a></h3>
<div class="accordion-content">

ファイルの MD5 値を取得します。

```
$ md5 file1 file2
9F6E6800CFAE7749EB6C486619254B9C file1
B636E0063E29709B6082F324C76D0911 file2
```

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)">MD5 値の取得 (Windows)</a></h3>
<div class="accordion-content">

[Fsum Frontend(http://sourceforge.net/projects/fsumfe/)](http://sourceforge.net/projects/fsumfe/) をインストールし、起動します。  
まず、 "md5" にチェックを入れてください。

[![]({{ site.baseurl }}/assets/images/books/Fsum1.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/Fsum1.jpg  "md5 を選択"){:.group1}

\[+\] ボタンをクリックし、必要なシークエンスデータファイルを開いてください。同時に複数のファイルを選択することが可能です。

[![]({{ site.baseurl }}/assets/images/books/Fsum2.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/Fsum2.jpg  "シークエンスデータファイルを選択"){:.group1}

最後に、\[Calculate hashes\] ボタンをクリックしてください。各ファイルの MD5 値が表示されます。\[Export\] ボタンから、MD5 値の一覧表 (.html, .csv, .xml) を作成することができます。

[![]({{ site.baseurl }}/assets/images/books/Fsum3.jpg){:.w400}]({{ site.baseurl }}/assets/images/books/Fsum3.jpg  "MD5 値の計算を開始"){:.group1}

[« 閉じる](javascript:void(0)){: .close-content-btn}
</div>
</div>
