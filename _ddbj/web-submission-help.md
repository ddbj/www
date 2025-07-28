---
layout: tabbed_indexed_content
title: DDBJ 塩基配列登録システム HELP
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: home
lang: ja
---

<style>
  .md-content ol li:before{
    border: solid 0px;
    border-radius: 6px;
    background: #ff7f50;
    color: white;
  }
</style>

## Start  {#flow-start}
[https://ddbj.nig.ac.jp/submission/](https://ddbj.nig.ac.jp/submission/)にアクセスし、Create new submissionボタンをクリックしてsubmissionを開始します。

<img src="/assets/images/help/NSSShelp1-start.png" alt="" title="" class="w600">

## 1\. Contact person  {#flow-1}

[コンタクトパーソン情報](/ddbj/submission.html#contact)を入力します。  

1. コンタクトパーソンの氏名はFull nameで入力します。
1. 入力後"Next"ボタンをクリックします。入力したメールアドレス宛にメールが自動送信されます。

<img src="/assets/images/help/NSSShelp1-1.png" alt="" title="" class="w600">

メール本文内のリンクをクリックすればブラウザが開いて、続きを入力できるようになります。または、このURLをコピーしてブラウザのアドレス欄に貼り付け、リターンキーを押します。

<img src="/assets/images/help/NSSShelp1-2.png" alt="" title="" class="w600">

## 2\. Hold date  {#flow-2}

[公開日(Hold date)](/ddbj/submission.html#hold-date) をカレンダーから選択するか、即公開を希望する場合は "Release immediately" チェックを加えます。年末・年始はDDBJが公開作業を停止するため選択できません。選択できる日付は最大3年後までです。

1. カレンダーアイコンをクリックし、表示されるカレンダーから公開処理希望日を指定してください。
1. 即公開希望の場合は、ここにチェックを加えてください。
1. 入力がすんだら"Next"ボタンをクリックします。

<img src="/assets/images/help/NSSShelp2-1.png" alt="" title="" class="w600">

### 入力の中断・再開方法について  {#flow-2-1}

- このページ以降、"Next"をクリックしてからブラウザでブックマークすれば、ブラウザを閉じた後でもブックマークしたURLを用いて再開することが可能です。
- "7.Annotation"ページでのアノテーション入力時は、"Next"クリック前であっても入力途中のアノテーションは保持されますので、ブックマークからアノテーション入力を再開することが可能です。

## 3\. Submitter  {#flow-3}

[登録者(Submitter)](/ddbj/submission.html#submitter)名を入力します。  

1. コンタクトパーソンの氏名がsubmitter書式に合うよう自動変換され、表示されます。修正が必要な場合、適宜変更してください。
1. 登録者を追加できます。DDBJでは、複数の登録者の指定をお願いしております。公開される塩基配列ファイルには、ここで入力した順序通りに名前が表示されます。
1. 入力後"Next"をクリックします。

<img src="/assets/images/help/NSSShelp3-1.png" alt="" title="" class="w600">

<div class="attention" markdown="1">
Submitter には、例のように氏名の略記を記載してください。<br>
書式： Last name[comma]Initial of first name[period]Initial of middle name[period]<br>
例<br>
Miyashita,Y.<br>Robertson,G.R.<br>Mishima-Tokai,H.<br>Kim,C.S.<br>Wang,Y.Q.
</div>

  - 登録者は複数名を指定いただけるよう、お願いしております。  
    登録者が１名のみの場合、将来、修正が必要になった際に私どもから登録者本人への連絡がとれない場面に遭遇することもございます。1名の登録者のみでの登録も可能ですが、複数の登録者を記載いただけるよう推奨しております。たとえば、実作業者と研究指導者(責任者)、論文著者から登録者に加えるなど、２名以上の登録者記載に関しましてご協力をお願いいたします。

関連するページ  
[DDBJ のデータ公開形式 (flat file) の説明, REFERENCE 1](/ddbj/flat-file.html#Reference1B)

## 4\. Reference  {#flow-4}

[論文(Reference)情報](/ddbj/submission.html#reference)を入力します。配列に関する[主論文(Primary citation)](/ddbj/submission.html#pcite)を第一referenceに入力してください。

1. デフォルトでUnpublishedが選択されています。Unpublishedは、以下の場合に選択します。  
&#x2013; 論文準備中、または論文投稿中、または論文を作成する予定がない場合  
論文が受理されているときは In pressを、論文がすでに公開されているならPublishedを選択してください。Unpublished、In press、Publishedの選択に応じてフォームの入力欄が切り替わります。
1. Referenceを追加する場合にクリックします。

<img src="/assets/images/help/NSSShelp4.png" alt="" title="" class="w600">
<div class="attention">
論文の著者は例のように氏名の略記を記載してください。<br>
書式： Last name[comma]Initial of first name[period]Initial of middle name[period]<br>
例<br>
Miyashita,Y.<br>Robertson,G.R.<br>Mishima-Tokai,H.<br>Kim,C.S.<br>Wang,Y.Q.
</div>

関連するページ  
[REFERENCE 2](/ddbj/flat-file.html#Reference2B)

### 各Statusでの入力例  {#flow-4-1}

#### Status: Unpublished  {#flow-4-1-1}

1. 自動で今年の年が入力済みになります。
1. 論文タイトルを入力します。論文を準備しない場合でも、塩基配列に応じた適切なタイトルをつけて記載してください。
1. 論文の著者名を各欄に1名ずつ入力してください。Add authorsボタンで入力欄を追加できます。Xをクリックすると、入力欄を消去できます。
1. 入力後クリックします。

<img src="/assets/images/help/NSSShelp4-1-1.png" alt="" title="" class="w600">

#### Status: In press  {#flow-4-1-2}

1. Yearを入力します。
1. In press選択時、<a href="/ddbj/web-submission-help.html#flow-4-2" target="_blank">Journalの略称名で入力</a>してください。ここの入力欄では、Journal略称入力のための補完機能を利用できます。
1. 論文タイトルを入力します。
1. 論文の著者名を各欄に1名ずつ入力してください。Add authorsボタンで入力欄を追加できます。Xをクリックすると、入力欄を消去できます。
1. 入力後クリックします。

<img src="/assets/images/help/NSSShelp4-1-2.png" alt="" title="" class="w600">

#### Status: Published  {#flow-4-1-3}

1. Yearを入力します。
1. Published選択時、<a href="/ddbj/web-submission-help.html#flow-4-2" target="_blank">Journalの略称名で入力</a>してください。ここの入力欄では、Journal略称入力のための補完機能を利用できます。
1. 論文タイトルを入力します。
1. Volume、pageを入力します。DOIがわかる場合は入力してください。
1. 論文の著者名を各欄に1名ずつ入力してください。Add authorsボタンで入力欄を追加できます。Xをクリックすると、入力欄を消去できます。
1. 入力後クリックします。

<img src="/assets/images/help/NSSShelp4-1-3.png" alt="" title="" class="w600">

### Journal name  {#flow-4-2}

Journal nameをabbreviationで入力してください。Journalのfull nameを入力していくと候補が現れますので、マウスで選択することでJournalのabbreviationを入力できます。

<img src="/assets/images/help/NSSShelp4-2.png" alt="" title="" class="w600">

Journalのabbreviationは[NLM Catalog](//www.ncbi.nlm.nih.gov/nlmcatalog)で調べることができます。

1. 調べたいジャーナル名の直後に[Journal]を添えて、検索します。
1. Title Abbreviationの欄に表示される名称です。

<img src="/assets/images/help/NSSShelp4-2-1.png" alt="" title="" class="w600">

## 5\. Sequence  {#flow-5}

塩基配列を入力します。[TPA](/ddbj/tpa.html)のsubmissionを行うことはできません。TPAは[MSS](/ddbj/mss.html)で受け付けます。

1. デフォルトで"YES"が選択されています。[TPA](/ddbj/tpa.html)に該当しない場合、ここの回答はYESのままにします。
1. 塩基配列をペースト、または、塩基配列ファイルをアップロードしてください。
1. 入力後クリックします。

**&#x1F4CC;&#x203C; アノテーション入力後、このフォームにおいて塩基配列の内容を変更した場合、"7．Annotation"で入力した内容はすべで失われます。**

<img src="/assets/images/help/NSSShelp5.png" alt="" title="" class="w600">

### 塩基配列のフォーマットについて  {#flow-5-1}

  - Multi-FASTA 形式の塩基配列をペースト(またはアップロード)可能です。

  - Entry name (エントリー名) は、２４文字までの半角・英数記号(ただしスペース、"[double-quote\]、?[question\]、￥[yen sign\]、{::nomarkdown}\{:/}[back-slash]を含まない)を用いて設定してください。

  - Entry name には、それぞれ異なる名称を付けてください。  
    同じ Entry name が使用されている場合はエラーとなるため Entry name の修正が必要になります。

  - 各エントリーの区切りとして // [double slash\] を挿入する必要はありませんが、// をエントリーの区切りとして使用しても構いません(例１、例２)。

  - 本システムでは // 無しの塩基配列を入力した場合、各エントリーの区切りとして // が自動的に挿入されます。

  - 塩基配列は、a, c, g, t, m, r, w, s, y, k, v, h, d, b, n のいずれかで構成される必要があります。

  - 塩基配列中の スペース、数字は自動的に削除されます。

  - 塩基配列中の大文字は自動的に小文字に変換されます。

例１

```
>CLN01
ggacaggctgccgcaggagccaggccgggagcaggtggtggaagacagacctgtaggtgg
aagaggcttcgggggagccggagaactgggccagaccccacaggtgcaggctgccctgtc
tgcgcttcagtcgtgggcgaagcctgaggaaaaagagagagaggctcaaggaagagagga
tgaggcaggagaatcgcttgaaccccggaggcggaggttgcagtgagccgagattacgcc
accgcactccagcctgggcgacagagtgagactccatctcaaaaaaaaaaaaaaaaaa
>CLN02
ctcacacagatgctgcgcacaccagtggttgtaacaatgccgtttgcctccttcaggtct
gaagcctgaggtgcgctcgtggtcagtgaagagggcaaaaagagagagaggctcaaagga
tgcgcttcagtcgtgggcgaagcctgaggaaaaagagagagaggctcaaggaagagagga
tagtcattcatataaatttgaacacacctgctgtgcctagacaagtgtctttctgtaaga
gctgtaactctgagatgtgctaaataaaccctctttctcaaaaaaaaaaaaaaaa
```

例２

```
>CLN01
ggacaggctgccgcaggagccaggccgggagcaggtggtggaagacagacctgtaggtgg
aagaggcttcgggggagccggagaactgggccagaccccacaggtgcaggctgccctgtc
tgcgcttcagtcgtgggcgaagcctgaggaaaaagagagagaggctcaaggaagagagga
tgaggcaggagaatcgcttgaaccccggaggcggaggttgcagtgagccgagattacgcc
accgcactccagcctgggcgacagagtgagactccatctcaaaaaaaaaaaaaaaaaa
//
>CLN02
ctcacacagatgctgcgcacaccagtggttgtaacaatgccgtttgcctccttcaggtct
gaagcctgaggtgcgctcgtggtcagtgaagagggcaaaaagagagagaggctcaaagga
tgcgcttcagtcgtgggcgaagcctgaggaaaaagagagagaggctcaaggaagagagga
tagtcattcatataaatttgaacacacctgctgtgcctagacaagtgtctttctgtaaga
gctgtaactctgagatgtgctaaataaaccctctttctcaaaaaaaaaaaaaaaa
//
```

## 6\. Template  {#flow-6}

アノテーションに適合するtemplateを選択します。

1. まず、適切なtaxonomic divisionを選択します。
1. つづいてアノテーションテンプレートを選択します。
1. リストに該当する項目がない場合、または、アノテーションファイルをアップロードする場合には、otherを選択します。なお、other選択時にはテーブル形式のアノテーション入力を利用できません。
1. テンプレート選択後、Input annotation(画面でアノテーションを入力する場合)またはUpload annotation file(アノテーションファイルをアップロードする場合)をクリックします。

**&#x1F4CC;&#x203C; このページにおいてテンプレート変更を行った場合、"7．Annotation"で入力した内容は失われます。**

<img src="/assets/images/help/NSSShelp6.png" alt="" title="" class="w600">

## 7\. Annotation  {#flow-7}

### アノテーション画面 - Template で "other" 以外を選択したとき  {#flow-7-1}

1. qualifierを追加または削除します。
1. Editアイコンでは、エントリーごとにアノテーションを入力できます。
1. セルをダブルクリックして、セルごとに入力を行えます。
1. 縦列の編集が可能です。
1. アノテーション入力完了後、アノテーションチェックのためクリックしてください。
1. アノテーションチェックの結果エラーがある場合はNextをクリックできません。Confirmでエラーがなくなるまでアノテーションを修正後、Nextをクリックします。

<div class="highlight">
<img src="/assets/images/help/NSSShelp7-1.png" alt="" title="" class="" height="420">
</div>

関連するページ  
: [Feature key の定義](/ddbj/features.html) / [Qualifier key の定義](/ddbj/qualifiers.html) / [Organism qualifier に記載する生物名](/ddbj/organism.html) / [タンパク質コード配列; CDS feature について](/ddbj/cds.html)

### アノテーション画面 - Template で "other" を選択したとき  {#flow-7-2}

1. Qualifierを追加または削除します。
1. sourceフィーチャーに追加したqualifier keyを、この後のすべてのエントリーに追加しておきたい場合にクリックします。
1. Featureを追加します。
1. LocationやQualifierを直接クリックして入力できます。
1. Editアイコンでは、エントリーごとにアノテーションを入力できます。
1. アノテーション入力完了後、アノテーションチェックのためクリックしてください。
1. アノテーションチェックの結果エラーがある場合はNextをクリックできません。Confirmでエラーがなくなるまでアノテーションを修正後、Nextをクリックします。

<div class="highlight">
<img src="/assets/images/help/NSSShelp7-2.png" alt="" title="" class="" height="420">
</div>

関連するページ  
: [Feature key の定義](/ddbj/features.html) / [Qualifier key の定義](/ddbj/qualifiers.html) / [Organism qualifier に記載する生物名](/ddbj/organism.html) / [タンパク質コード配列; CDS feature について](/ddbj/cds.html)

### アノテーションの入力方法  {#flow-7-3}

#### "Edit"ボタン  {#flow-7-3-1}

1エントリーごとのアノテーションを入力できます。アノテーション入力後、Saveボタンを押してください。

<img src="/assets/images/help/NSSShelp7-3-1.png" alt="" title="" class="" height="360">

#### "Select qualifier"ボタン  {#flow-7-3-2}

追加したいqualifier横のチェックボックスにチェックを加えて、Saveをクリックすることでqualifierを追加できます。消す場合は、チェックを外してからSaveを押してください。選択可能なqualifierは、feature keyやtemplateの種類に応じて異なります。

<img src="/assets/images/help/NSSShelp7-3-2.png" alt="" title="" class="" height="360">

#### "Pen & Note"ボタン  {#flow-7-3-3}

テーブルの縦列ごとにqualifierの値を編集することができます。

1. クリックします。
1. ここで編集します。
1. 以降のエントリーに同じ値をコピーしたい場合は、Fill Downをクリックします。

<img src="/assets/images/help/NSSShelp7-3-3.png" alt="" title="" class="" height="360">

#### "Edit Colum"ボタン  {#flow-7-3-4}

テーブルの縦列ごとにqualifierの値を編集、複数列へのペーストが可能です。

1. クリックします。
1. テキストエリアに直接入力するか、エクセルやテキストエディタなどからコピーアンドペーストできます。エントリーごとに改行で区切ってください。

<img src="/assets/images/help/NSSShelp7-3-4.png" alt="" title="" class="" height="300">

#### セルのダブルクリック  {#flow-7-3-5}

セルをダブルクリック(template - other選択時はqualifierまたはlocationのクリック)で入力欄が現れますので、値を修正または入力してください

<img src="/assets/images/help/NSSShelp7-3-5.png" alt="" title="" class="w400">

### 生物名 (Organism name)  {#flow-7-4}

生物名(学名)を入力します。タイプしていくと入力補助機能により候補の学名がリストされますので、リストからマウスで学名を選択、"OK"をクリックして確定します。

<img src="/assets/images/help/NSSShelp7-4.png" alt="" title="" class="" height="180">

入力した名称が NCBI Taxonomy database に無い場合、Categoryリストから該当するカテゴリーを選択します。 詳細は、[生物名入力におけるカテゴリ(Category)について](https://www.ddbj.nig.ac.jp/ddbj/organism.html#deasy)をご覧ください。

<img src="/assets/images/help/NSSShelp7-4-1.png" alt="" title="" class="w600">

関連するページ  
: [Organism qualifier に記載する生物名](/ddbj/organism.html)

### アノテーション例  {#flow-7-5}

#### 16S rRNA  {#flow-7-5-1}

<div class="highlight">

<img src="/assets/images/help/NSSShelp7-5-1.png" alt="" height="400" title="" class="">

</div>

#### CDS  {#flow-7-5-2}

<div class="highlight">

<img src="/assets/images/help/NSSShelp7-5-2.png" alt="" height="400" title="" class="">

</div>

#### Mitochondrial cytb - tRNA-Pro  {#flow-7-5-3}

<div class="highlight">

<img src="/assets/images/help/NSSShelp7-5-3.png" alt="" height="480" title="" class="">

</div>

### アノテーションファイルのアップロード方法  {#flow-7-6}

1. テンプレート選択フォームにおいて、適切なtaxonomic divisionを選択し、アノテーションタイプには"other"を選択します。
1. Upload annotation fileボタンをクリックします。
1. クリックしてアノテーションファイルを指定します。
1. アノテーションファイルをチェックするため、Upload & Confirmをクリックしてください。
1. アノテーションファイルにエラーがある場合はクリックできません。アノテーションファイルを修正後、3と4を再度行います。エラーがなくなると"Next"が可能になるのでクリックしてください。

<div class="highlight">
<img src="/assets/images/help/NSSShelp7-6.png" alt="" title="" class="w600">
</div>

### アップロード可能なアノテーションファイル  {#flow-7-6-1}

  - サンプルファイルを[ここからダウンロードできます](/assets/files/example/mtDNA.txt)。アノテーションファイルには、[Biological Feature](/ddbj/file-format.html#biological_feature)を含めてください。

  - アノテーションファイル作成方法に関する手引きは、[登録ファイル形式、アノテーションファイル](/ddbj/file-format.html#annotation)をご覧ください。

  - WGS、TSA、TLS、EST、HTC、GSS、STS、HTG 各アノテーション、TPA用アノテーション、DBLINKやST_COMMENTが記載されたアノテーションには対応していません。これらの登録については、[Mass Submission System(MSS)](/ddbj/mss.html)をご利用ください。

  - アップロードされたアノテーションファイルの先頭には、"1. Contact person"、"2. Hold date"、"3. Submitter"、"4. Reference" に入力された内容が COMMON 情報として挿入されます。

  - "COMMON" を含むアノテーションファイルをアップロードした場合、COMMON は "1. Contact person"、"2. Hold date"、"3. Submitter"、"4. Reference" に入力された内容に置換されます。

1. COMMONの部分は、アノテーションファイルに含まれていなくてもかまいません。アノテーションファイルに含めていたとしても、"1.Contact person"～"4.Reference"に入力した内容が使用されます。
1. 各エントリーのBiological featureを記載します。

<div class="highlight">
<img src="/assets/images/help/NSSShelp7-6-1.png" alt="" title="" class="w600">
</div>

関連するページ  
: [Feature key の定義](/ddbj/features.html) / [Qualifier key の定義](/ddbj/qualifiers.html) / [Organism qualifier に記載する生物名](/ddbj/organism.html) / [タンパク質コード配列; CDS feature について](/ddbj/cds.html)

### アノテーションファイルがアップロードエラーになる主な原因  {#flow-7-6-2}

  - エクセルを使用して作成した場合は、テキストエディタにコピーしてからテキストファイルとして保存してください。アノテーションファイルは、タブ区切りテキストファイルである必要があります。

  - "5. Sequence" で入力した配列名 (Entry name) をアノテーションファイルに入力していないか、入力順序が一致していない場合にはアップロードできません。

  - アノテーションファイルのタブ区切りで構成されるカラムが崩れている場合はアップロードできません。

  - 余計なスペース、不正文字(全角文字、unicode文字、unprintable character)がファイル中に含まれている場合もアップロードできません。

  - source フィーチャーのみではアップロードできません。適切なフィーチャーを加えてください。

### Error/Warning  {#flow-7-7}

  - "Confirm" クリック後、エラーが生じなければ、"Next" ボタンがクリック可能になり次のステップ(Final page)に進めます。

  - Error や Warning がある場合、アノテーション入力領域の下にメッセージが表示されます。

  - Error が生じた場合は、画面をスクロールアップしアノテーション入力領域におけるエラー対象エントリーを修正してください。

  - Submitter、Reference、Sequence に Error/Warning が生じた場合、画面上部にあるプログレスバー内の各ページをクリックし、修正してください。修正後は各ページにおいて "Next" ボタンをクリックした後、プログレスバーの "7.Annotation" をクリックすると Annotation 入力画面に戻ることができます。

  - Warning があっても、"Next" がクリック可能になります。Warning が生じた場合は入力内容を見直した上で、問題がある場合のみ修正してください。入力内容に問題がなければ "Next" をクリックしてください。

Error/warning メッセージの詳細については、[Validator エラーメッセージ](/ddbj/validator.html)をご覧ください。例のようにコード番号から直接リンクすることも可能です。  
例：[https://www.ddbj.nig.ac.jp/ddbj/validator.html\#JP0015](/ddbj/validator.html#JP0015) ...クリックしてから少し待っていただくと、該当エラー位置にスクロールします。

### アミノ酸配列を得るには  {#flow-7-8}

[CDS feature の翻訳アミノ酸配列 (/translation qualifier) を確認する方法](/faq/ja/how-to-confirm-translated-amino-acid-seq.html)を参考にしてください。

または以下の Web サービスを利用することで、塩基配列から翻訳されるアミノ酸配列を知ることができます。

- [ORF finder, NCBI](//www.ncbi.nlm.nih.gov/orffinder/)
- [EMBOSS Transeq, EBI](//www.ebi.ac.uk/jdispatcher/st/emboss_transeq)

## Final page  {#flow-7a}

最終確認画面、および該当する場合には追加情報を入力します。

1. ここまで各フォームに入力してきた内容をDDBJのアノテーションファイル、塩基配列ファイルの形式でダウンロードできます。
1. ここに該当する項目がある場合、テキストエリアに記入をお願いします。
1. クリックするとSubmission完了となります。Submission完了後、前のページに戻ることはできません。

<img src="/assets/images/help/NSSShelp7a.png" alt="" title="" class="w500">

## 8\. Finish  {#flow-8}

この画面が現れた時点でsubmission完了です。入力された内容は自動的にDDBJの登録用サーバーに転送されます。同時にSubmission完了を知らせるEmailがcontact personのアドレス宛に通知されます。

1. 入力いただいた内容を、DDBJのアノテーションファイル、塩基配列ファイル形式でここからダウンロードできます。これらのファイルがDDBJ登録用サーバーに転送されます。

**&#x1F4CC;Note! このページをブックマークすることで、FinishページのみSubmission完了後から一定期間内は閲覧可能です。**

<img src="/assets/images/help/NSSShelp8-1.png" alt="" title="" class="w600">

登録完了メール

<img src="/assets/images/help/NSSShelp8-2.png" alt="" title="" class="w400">
