---
layout: indexed_content
title: DDBJ 塩基配列登録システム HELP
category: services
lang: ja
---

## 1\. Contact person <a name="flow-1"></a>

[コンタクトパーソン](/ddbj/submission.html#contact)情報を入力します。

![]({{ site.baseurl }}/assets/images/help/NSSShelp1-1_j.png "コンタクトパーソン情報入力画面"){:.w600}

コンタクトパーソンメールアドレス宛に登録開始用のリンクを含むメールが自動的に送信されます。

![]({{ site.baseurl }}/assets/images/help/NSSShelp1-2_j.png){:.w600}

## 2\. Hold date <a name="flow-2"></a>

公開日 (Hold date) をカレンダーから選択するか、即公開を希望する場合は "Release immediately" チェックを加えます。

![]({{ site.baseurl }}/assets/images/help/NSSShelp2-1_j.png){:.w600}

  - 年末・年始はDDBJが公開作業を停止するため選択できません

  - 選択できる日付は最大3年後までです

### 入力の中断・再開方法 <a name="flow-2-1"></a>

  - "Next"
    をクリックしてからブラウザでブックマークしてください。ブラウザを閉じた後でもブックマークしたURLを用いて再開することが可能です。

  - 7.Annotation のページでは "Next" クリック以前であっても入力内容は保存されます。ブックマークから再開できます。

## 3\. Submitter <a name="flow-3"></a>

登録者 (Submitter) 名を入力します。

![]({{ site.baseurl }}/assets/images/help/NSSShelp3-1_j.png){:.w600}

{::options parse_block_html="true" /}
<div class="attention">

**Submitter には、例のように氏名の略記を記載してください。**

**format：**<br>Last name[comma\]Initial of first name[period\]Initial of middle name[period\]

**例：**<br>Miyashita,Y.<br>Robertson,G.R.<br>Mishima-Tokai,H.<br>Kim,C.S.<br>Wang,Y.Q.

</div>

関連するページ  
: [REFERENCE 1](/ddbj/flat-file.html#Reference1) / [DDBJ のデータ公開形式 (flat file) の説明](/ddbj/flat-file.html)

<!-- end list -->

  - 登録者は複数名を指定いただけるよう、お願いしております。  
    登録者が１名のみの場合、将来、修正が必要になった際に私どもから登録者本人への連絡がとれない場面に遭遇することもございます。1名の登録者のみでの登録も可能ですが、複数の登録者を記載いただけるよう推奨しております。たとえば、実作業者と研究指導者(責任者)、論文著者から登録者に加えるなど、２名以上の登録者記載に関しましてご協力をお願いいたします。

## 4\. Reference <a name="flow-4"></a>

[論文 (Reference) 情報](/ddbj/flat-file.html#Reference2) を入力します。  
配列に関する[主論文 (Primary citation)](/ddbj/submission.html#pcite) を第一 reference に入力してください。

![]({{ site.baseurl }}/assets/images/help/NSSShelp4_j.png){:.w600}

<div class="attention">

**論文の著者は例のように氏名の略記を記載してください。**

**format：**<br>Last name[comma\]Initial of first name[period\]Initial of middle name[period\]

**例：**<br>Miyashita,Y.<br>Robertson,G.R.<br>Mishima-Tokai,H.<br>Kim,C.S.<br>Wang,Y.Q.

</div>

関連するページ  
: [REFERENCE 2](/ddbj/flat-file.html#Reference2) / [DDBJ のデータ公開形式 (flat file) の説明](/ddbj/flat-file.html)

### Reference の例 <a name="flow-4-1"></a>

#### Status: Unpublished <a name="flow-4-1-1"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp4-1-1_j.png){:.w600}

#### Status: In press <a name="flow-4-1-2"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp4-1-2_j.png){:.w600}

#### Status: Published <a name="flow-4-1-3"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp4-1-3_j.png){:.w600}

### Journal name <a name="flow-4-2"></a>

Journal name を ISO abbreviation で入力してください。Journal の full name を入力していくと候補が現れますので、マウスで選択することで Journal の ISO abbreviation を入力できます。

![]({{ site.baseurl }}/assets/images/help/NSSShelp4-2_j.png){:.w600}

Journal の ISO abbreviation は [NLM Catalog](//www.ncbi.nlm.nih.gov/nlmcatalog) で調べることができます。

![]({{ site.baseurl }}/assets/images/help/NSSShelp4-2-1_j.png){:.w600}

## 5\. Sequence <a name="flow-5"></a>

塩基配列を入力します。  
[TPA](/ddbj/tpa.html) の submission を行う場合には、assembly information も同時に入力します。

![]({{ site.baseurl }}/assets/images/help/NSSShelp5_j.png){:.w600}


### 塩基配列のフォーマットについて <a name="flow-5-1"></a>

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

``` code
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

``` code
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

### TPA 塩基配列の入力 <a name="flow-5-2"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp5-2_j.png){:.w600}

### TPA における Assembly Information の書式 <a name="flow-5-3"></a>

#### 入力例 <a name="flow-5-3-1"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp5-3-1_j.png){:.w600}

Assembly information のサンプルは**[ここから]({{ site.baseurl }}/assets/files/example/NSSShelp-tpa-sample.txt)**ダウンロードできます。(タブ区切りテキスト形式)

#### 上記入力例の意味 <a name="上記入力例の意味"></a>

**Entry name FA01**<br>TPA 塩基配列 1-552 の領域は ZZ000001.1 の 54872-55422 に対応<br>TPA 塩基配列 553-705 の領域は ZZ000002.5 の 1-153 に対応

**Entry name BM123**<br>TPA 塩基配列 1-438 の領域は ZZ000010.1 の 1-438 に対応<br>TPA 塩基配列 377-695 の領域は ZZ000011.1 の complement(1-320) に対応<br>TPA 塩基配列 411-790 の領域は ZZ000021.12 の 1-398 に対応<br>TPA 塩基配列 790-1191 の領域は ZZ000022.0 の 1-401 に対応

いずれも [TPA とプライマリーエントリの配列アラインメントに関する規則](/ddbj/tpa.html#alignment-rule)
に従います。

### Assembly Information 入力規則 <a name="flow-5-4"></a>

  - 第1行目は
    
      - <span style="font-size: 11px;">[tab or space\]TPA\_SPAN[tab or space\]PRIMARY\_IDENTIFIER[tab or space\]PRIMARY\_SPAN[tab or space\]COMPLEMENT</span>  
である必要があります。

  - 空行を含めないでください。

  - Entry name は第１列に記載します、Entry name のある行でエントリーごとの Assembly 情報が区切られることになります。

  - TPA\_SPAN
    
      - X..Y or X-Y
      - X と Y は数字です。TPA 配列上の領域を記載します。
      - 例: 100..2000   100-2000

  - PRIMARY\_IDENTIFIER
    
      - accession number.version
      - 引用するプライマリエントリのアクセッション番号をバージョン番号とともに入力します。  
        未公開のアクセッション番号の場合はバージョン番号を 0 にしてください。
      - 例: AB123456.1   AB987654.0

  - PRIMARY\_SPAN
    
      - X..Y or X-Y
      - X と Y は数字です。プライマリエントリからの引用領域を入力します。抜き出した領域がTPA\_SPANの領域と対応している必要があります。[TPA とプライマリーエントリの配列アラインメントに関する規則](/ddbj/tpa.html#alignment-rule)もご覧ください。

  - COMPLEMENT
    
      - 空欄 または c
      - プライマリエントリから相補鎖領域を引用する場合にのみ c を指定します。

## 6\. Template <a name="flow-6"></a>

アノテーションに適合する template を選択します。

![]({{ site.baseurl }}/assets/images/help/NSSShelp6_j.png){:.w600}

## 7\. Annotation <a name="flow-7"></a>

### アノテーション画面 - Template で "other" 以外を選択したとき <a name="flow-7-1"></a>

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-1_j.png)

</div>

関連するページ  
: [Feature key の定義](/ddbj/features.html) / [Qualifier key の定義](/ddbj/qualifiers.html) / [Organism qualifier に記載する生物名](/ddbj/organism.html) / [タンパク質コード配列; CDS feature について](/ddbj/cds.html)

### アノテーション画面 - Template で "other" を選択したとき <a name="flow-7-2"></a>

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-2_j.png)

</div>

関連するページ  
: [Feature key の定義](/ddbj/features.html) / [Qualifier key の定義](/ddbj/qualifiers.html) / [Organism qualifier に記載する生物名](/ddbj/organism.html) / [タンパク質コード配列; CDS feature について](/ddbj/cds.html)

### アノテーションの入力方法 <a name="flow-7-3"></a>

#### "Edit" ボタン <a name="flow-7-3-1"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-3-1_j.png){:.w600}

#### "Select Qualifier" ボタン <a name="flow-7-3-2"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-3-2_j.png){:.w600}

#### "Pen & Note" ボタン <a name="flow-7-3-3"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-3-3_j.png){:.w600}

#### "Edit Colum" ボタン <a name="flow-7-3-4"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-3-4_j.png){:.w600}

#### セルのダブルクリック (Template で "other" 選択時の場合は Qualifier のクリック)  <a name="flow-7-3-5"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-3-5_j.png){:.w600}

### 生物名 (Organism name) <a name="flow-7-4"></a>

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-4_j.png){:.w600}

学名を入力後、"OK" をクリックします。  
入力した名称が NCBI Taxonomy database に無い場合、リストから該当するカテゴリーを選択します。
詳細は、[生物名入力におけるカテゴリ (Category) について](/ddbj/organism.html#deasy) をご覧ください。

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-4-1_j.png){:.w600}

関連するページ  
: [Organism qualifier に記載する生物名](/ddbj/organism.html)

### アノテーション例 <a name="flow-7-5"></a>

#### 16S rRNA <a name="flow-7-5-1"></a>

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-5-1_j.png)

</div>

#### CDS <a name="flow-7-5-2"></a>

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-5-2_j.png)

</div>

#### Mitochondrial genome <a name="flow-7-5-3"></a>

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-5-3_j.png)

</div>

### アノテーションファイルのアップロード方法 <a name="flow-7-6"></a>

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-6_j.png)

</div>

#### アップロード可能なアノテーションファイル <a name="flow-7-6-1"></a>

  - サンプルファイルを[ここから]({{ site.baseurl }}/assets/files/example/mtDNA.txt)ダウンロードできます。

  - アノテーションファイル作成方法に関する手引きは、[登録ファイル形式、アノテーションファイル](/ddbj/file-format.html#annotation)をご覧ください。

  - annotation file には、[Biological Feature 部分](/ddbj/file-format.html#biological_feature)のみを含めてください。

  - WGS, CON, AGP, EST, GSS, STS, HTG, HTC, TSA ファイルの upload
    には対応していません。これらの登録については、[Mass Submission System(MSS)](/ddbj/mss.html)をご利用ください。

  - アップロードされたアノテーションファイルの先頭には、"1. Contact person"、"2. Hold date"、"3. Submitter"、"4. Reference" に入力された内容が COMMON 情報として挿入されます。

  - "COMMON" を含むアノテーションファイルをアップロードした場合、COMMON は "1. Contact person"、"2. Hold date"、"3. Submitter"、"4. Reference" に入力された内容に置換されます。

  - TPA 登録においては、PRIMARY\_CONTIG をアノテーションファイルに含めないでください。"5. Sequence" 内 Assembly Information に入力された内容が自動的に変換され、アノテーションファイルの各エントリーに挿入されます。

<!-- end list -->

関連するページ  
: [Feature key の定義](/ddbj/features.html) / [Qualifier key の定義](/ddbj/qualifiers.html) / [Organism qualifier に記載する生物名](/ddbj/organism.html) / [タンパク質コード配列; CDS feature について](/ddbj/cds.html)

<div class="highlight">

![]({{ site.baseurl }}/assets/images/help/NSSShelp7-6-1_j.png)

</div>

#### アノテーションファイルのアップロードエラーとなる主な原因 <a name="flow-7-6-2"></a>

  - エクセルを使用して作成した場合は、テキストエディタにコピーしてからテキストファイルとして保存してください。アノテーションファイルは、タブ区切りテキストファイルである必要があります。

  - "5. Sequence" で入力した配列名 (Entry name) をアノテーションファイルに入力していないか、入力順序が一致していない場合にはアップロードできません。

  - アノテーションファイルのタブ区切りで構成されるカラムが崩れている場合はアップロードできません。

  - 余計なスペース、不正文字(全角文字、unicode文字、unprintable character)がファイル中に含まれている場合もアップロードできません。

### Error/Warning <a name="flow-7-7"></a>

  - "Confirm" クリック後、エラーが生じなければ、"Next" ボタンがクリック可能になり次のステップ(Final page)に進めます。

  - Error や Warning がある場合、アノテーション入力領域の下にメッセージが表示されます。

  - Error が生じた場合は、画面をスクロールアップしアノテーション入力領域におけるエラー対象エントリーを修正してください。

  - Submitter、Reference、Sequence に Error/Warning が生じた場合、画面上部にあるプログレスバー内の各ページをクリックし、修正してください。修正後は各ページにおいて "Next" ボタンをクリックした後、プログレスバーの "7.Annotation" をクリックすると Annotation 入力画面に戻ることができます。

  - Warning があっても、"Next" がクリック可能になります。Warning が生じた場合は入力内容を見直した上で、問題がある場合のみ修正してください。入力内容に問題がなければ "Next" をクリックしてください。

Error/warning メッセージの詳細については、[Validator エラーメッセージ](/ddbj/validator.html)をご覧ください。  
例のようにコード番号から直接リンクすることも可能です。  
例：[https://www.ddbj.nig.ac.jp/ddbj/validator.html\#JP0015](/ddbj/validator.html#JP0015)

関連するページ  
: [Feature key の定義](/ddbj/features.html) / [Qualifier key の定義](/ddbj/qualifiers.html) / [Organism qualifier に記載する生物名](/ddbj/organism.html) / [タンパク質コード配列; CDS feature について](/ddbj/cds.html)

### アミノ酸配列を得るには <a name="flow-7-8"></a>

[CDS feature の翻訳アミノ酸配列 (/translation qualifier) を確認する方法](/faq/ja/how-to-confirm-translated-amino-acid-seq.html)を参考にしてください。

または以下の Web サービスを利用することで、塩基配列から翻訳されるアミノ酸配列を知ることができます。  
ORFfinder (NCBI)  
[https://www.ncbi.nlm.nih.gov/orffinder/](//www.ncbi.nlm.nih.gov/orffinder/)  
EMBOSS Transeq (EBI)  
[https://www.ebi.ac.uk/Tools/st/emboss\_transeq/](//www.ebi.ac.uk/Tools/st/emboss_transeq/)

## Final page <a name="flow-7a"></a>

"Confirm" 後 "Next" クリックで最終確認画面が表示されます。

![]({{ site.baseurl }}/assets/images/help/NSSShelp7a_j.png){:.w600}

## 8\. Finish <a name="flow-8"></a>

Finish 画面が現れた時点で submission 完了となります。  
入力された内容は自動的に DDBJ の登録用サーバーに転送されます。同時にSubmission 完了を知らせる Email が contact person の Email アドレス宛に送信されます。

![]({{ site.baseurl }}/assets/images/help/NSSShelp8-1_j.png){:.w600}

完了を通知するメール。

![]({{ site.baseurl }}/assets/images/help/NSSShelp8-2_j.png){:.w600}
