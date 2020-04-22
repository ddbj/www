---
layout: indexed_content
title: 登録ファイル形式
pathname: file-format
category: _home
---

# 登録ファイル形式

<div class="section book">

<div class="section chapter">

## 配列ファイル

配列ファイルは、全登録データの配列を FASTA に類似した形式で記述したテキストファイルです。 配列ファイルは、1つの配列データは、"\>" で始まる1行のヘッダ行と、2行目以降の実際のシーケンス文字列で構成されます。DDBJ では、エントリ間は配列情報終了フラグ (//) で区切ります。

例: 配列ファイル

``` code
>CLN01  <-- 1件目のエントリ名
ggacaggctgccgcaggagccaggccgggagcaggaagaggcttcgggggagccggagaa
ctgggccagatgcgcttcgtgggcgaagcctgaggaaaaagagagtgaggcaggagaatc
gcttgaaccccggaggcggaaccgcactccagcctgggcgacagagtgagactta
//      <-- 配列情報終了フラグ
>CLN02  <-- 2件目のエントリ名
ctcacacagatgcgcgcacaccagtggttgtaacagaagcctgaggtgcgctcgtggtca
gaagagggcatgcgcttcagtcgtgggcgaagcctgaggaaaaaatagtcattcatataa
atttgaacacacctgctgtggctgtaactctgagatgtgctaaataaaccctctt
//      <-- 配列情報終了フラグ
```

### 書式と構文

必ず、[UME](/ddbj/ume.html) または [Parser](/ddbj/parser.html) を用いて、配列ファイルとアノテーションファイルの書式をご確認ください。

  - ベクター，リンカー，アダプターなどの配列（technical readと呼びます）は必ず除去してください。ただし、ベクターなどの配列自体を報告する場合は、除去する必要はありません。
  - 特殊なケースを除き，最初(5'端)と最後(3'端)の塩基は n にならないように，末端の n は除去してください。また、特に EST などの場合，シークエンサ出力をそのまま送付するのではなく、末端の信頼できない出力を削除するなど精査してください。
  - エントリ名は行頭の「\>」に続けて、 space, " double-quote, = equal, | pipe, \> greater-than, \[\] angled brackets, \\ back-slash を含まない半角英数字 32文字以内で記載してください。
  - エントリ名はエントリ毎にユニークな文字列を記載してください。clone 名，isolate名といった個々のエントリによって異なる名称の使用が一般的です。
  - 配列ファイルと[アノテーションファイル](#annotation)の各エントリは、同一のエントリ名により対応づけます。アノテーション情報と配列は、対応するエントリに同じエントリ名をつけ、同じ順番になるようにそれぞれ入力してください。入力されたエントリ順にアクセッション番号を発行いたします。
  - 塩基配列には a，t，g，c 以外にも、必要に応じて、各種[核酸コード](/ddbj/code.html#nucleotide-1)が使用可能です。
  - 終端子として配列情報終了フラグ(//)を必ず入力してください。
  - 途中にスペース、空行が入らないようにしてください。
  - [CON](/ddbj/data-categories.html#con) に該当する場合は、配列ファイルは [AGP ファイル](#agp)で代替することができます。

</div>

<div class="section chapter">

## アノテーションファイル

アノテーションファイルは、全登録データの登録者, REFERENCE、Feature/Qualifierの情報等を記述した、Entry, Feature, Location, Qualifier, Value の５列からなるタブ区切りテキストファイルです。  
スクリプト、(MS Excel などの) 表計算ソフト、テキストエディタ等で作成が可能です。

例:アノテーションファイル （<span class="red">入力必須項目</span>）

<div class="main_table format">

| Entry             | Feature                            | Location                                                         | Qualifier                          | Value                           |
| ----------------- | ---------------------------------- | ---------------------------------------------------------------- | ---------------------------------- | ------------------------------- |
| [COMMON](#common) | <span class="red">SUBMITTER</span> |                                                                  | <span class="red">ab\_name</span>  | Robertson,G.R.                  |
|                   |                                    |                                                                  | ab\_name                           | Mishima,H.                      |
|                   |                                    |                                                                  | <span class="red">contact</span>   | Hanako Mishima                  |
|                   |                                    |                                                                  | <span class="red">email</span>     | mishima@ddbj.nig.ac.jp          |
|                   |                                    |                                                                  | <span class="red">phone</span>     | 81-55-981-6853                  |
|                   |                                    |                                                                  | fax                                | 81-55-981-6853                  |
|                   |                                    |                                                                  | phext                              | 3207                            |
|                   |                                    |                                                                  | <span class="red">institute</span> | National Institute of Genetics  |
|                   |                                    |                                                                  | department                         | DNA Data Bank of Japan          |
|                   |                                    |                                                                  | <span class="red">country</span>   | Japan                           |
|                   |                                    |                                                                  | state                              | Shizuoka                        |
|                   |                                    |                                                                  | <span class="red">city</span>      | Mishima                         |
|                   |                                    |                                                                  | <span class="red">street</span>    | Yata 1111                       |
|                   |                                    |                                                                  | <span class="red">zip</span>       | 411-8540                        |
|                   | <span class="red">REFERENCE</span> |                                                                  | <span class="red">title</span>     | Mouse Genome Sequencing         |
|                   |                                    |                                                                  | <span class="red">ab\_name</span>  | Robertson,G.R.                  |
|                   |                                    |                                                                  | ab\_name                           | Mishima,H                       |
|                   |                                    |                                                                  | <span class="red">year</span>      | 2017                            |
|                   |                                    |                                                                  | <span class="red">status</span>    | Unpublished                     |
|                   | COMMENT                            |                                                                  | line                               | Please visit our website        |
|                   |                                    |                                                                  | line                               | URL: http://www.ddbj.nig.ac.jp/ |
| CLN01             | <span class="red">source</span>    | <span class="red">1..12297</span>                                | <span class="red">organism</span>  | Mus musculus                    |
|                   |                                    |                                                                  | <span class="red">mol\_type</span> | genomic DNA                     |
|                   |                                    |                                                                  | clone                              | PC0110                          |
|                   |                                    |                                                                  | chromosome                         | 8                               |
|                   | CDS                                | <span class="small_80">join(\<1..456,609..879,1070..1213)</span> | product                            | protein kinase                  |
|                   |                                    |                                                                  | codon\_start                       | 2                               |
| CLN02             | <span class="red">source</span>    | <span class="red">1..12393</span>                                | <span class="red">organism</span>  | Mus musculus                    |
|                   |                                    |                                                                  | <span class="red">mol\_type</span> | genomic DNA                     |
|                   |                                    |                                                                  | clone                              | PC0210                          |
|                   |                                    |                                                                  | chromosome                         | 8                               |
|                   | CDS                                | 9365..9640                                                       | product                            | hypothetical protein            |

</div>

<div class="section section">

### 書式と構文

必ず、[UME](/ddbj/ume.html) または [Parser](/ddbj/parser.html) を用いて、配列ファイルとアノテーションファイルの書式をご確認ください。

  - Entry  
    [登録ファイル形式：配列ファイル](#sequence)で示した配列ファイルと対応するエントリ名を入力してください。
    エントリ名を入力後、次のエントリが始まる行までは、Entry カラムには何も入力しないでください。
  - Feature  
    [Biological feature](#biological_feature) と 独自に規定された DDBJ 登録用
    feature の２つのタイプがあります。各 Feature の記載方法については以下で解説します。
    Feature 入力後、次の Feature が始まる行までは、Feature カラムには何も入力しないでください。
  - Location  
    [Biological feature](#biological_feature) と [PRIMARY\_CONTIG](#primary_contig) で Feature の記載に隣接するカラムにのみ、記載が必要です。
  - Qualifier  
    各行に 1つ記載します。記載可能な Qualifier は Feature に依存します。詳細は以下で解説します。
  - Value  
    Qualifier に依存します。各 Qualifier の説明に従って記載してください。
  - その他  
    アノテーションファイルでは、空行が存在した時点でファイルの終わりと判断されます。従って、複数エントリを入力する場合は、登録する全てのエントリの入力が終わるまで、途中に空行を作らずに入力してください。

</div>

<div class="section section">

### Biological Feature 記載に関する参照先

<div class="main_table format">

| 名称                                                  | 更新日        | 備考                                                   |
| --------------------------------------------------- | ---------- | ---------------------------------------------------- |
| [Feature Table Definition](/ddbj/full_index.html)   | 2016/11/17 | version 10.6                                         |
| [Feature/Qualifier 対応一覧表](/files/pdf/ddbj/fq-j.pdf) | 2016/11/09 |                                                      |
| [登録の見本](/ddbj/example.html)                         | 2014/11/27 | [DDBJ フラットファイル](/ddbj/flat-file.html)中の feature の記載例 |

</div>

</div>

<div class="section section">

### サンプルとフラットファイルとの対応

<div class="main_table format">

| データの種類                                                                     | PDF形式 (解説付)                                                         | TSV形式                                                              | フラットファイルとの対応                                   |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------- |
| タンパク質コード領域                                                                 | [CDS](/files/pdf/ddbj/CDS.pdf)                                      | [CDS](/files/example/CDS.txt)                                      | [general](/files/pdf/ddbj/general_ann2ff.pdf)  |
| リボソーマル RNA                                                                 | [16S\_rRNA](/files/pdf/ddbj/16S_rRNA.pdf)                           | [16S\_rRNA](/files/example/16S_rRNA.txt)                           |                                                |
| ITS領域 (Internal Transcribed Spacer)                                        | [ITS](/files/pdf/ddbj/ITS.pdf)                                      | [ITS](/files/example/ITS.txt)                                      |                                                |
| マイクロサテライトマーカー                                                              | [Microsatellite\_marker](/files/pdf/ddbj/Microsatellite_marker.pdf) | [Microsatellite\_marker](/files/example/Microsatellite_marker.txt) |                                                |
| ミトコンドリア                                                                    | [mtDNA](/files/pdf/ddbj/mtDNA.pdf)                                  | [mtDNA](/files/example/mtDNA.txt)                                  |                                                |
| [ENV](/ddbj/env.html) (環境サンプル)                                             | [ENV](/files/pdf/ddbj/ENV.pdf)                                      | [ENV](/files/example/ENV.txt)                                      |                                                |
| [EST](/ddbj/est.html) (Expressed Sequence Tags)                            | [EST](/files/pdf/ddbj/EST.pdf)                                      | [EST](/files/example/EST.txt)                                      | [EST](/files/pdf/ddbj/EST_ann2ff.pdf)          |
| [GSS](/ddbj/gss.html) (Genome Survey Sequences)                            | [GSS](/files/pdf/ddbj/GSS.pdf)                                      | [GSS](/files/example/GSS.txt)                                      |                                                |
| [HTG](/ddbj/htg.html) (High Throughput Genomic Sequences)                  | [HTG](/files/pdf/ddbj/HTG.pdf)                                      | [HTG](/files/example/HTG.txt)                                      | [HTG](/files/pdf/ddbj/HTG.pdf)                 |
| [TSA](/ddbj/tsa.html) (Transcriptome Shotgun Assembly); assembled from EST | [TSA](/files/pdf/ddbj/TSA.pdf)                                      | [TSA](/files/example/TSA.txt)                                      | [TSA](/files/pdf/ddbj/TSA.pdf)                 |
| [TSA](/ddbj/tsa.html); assembled from short reads                          | [TSA\_SRA\_assemble](/files/pdf/ddbj/TSA_SRA_assemble.pdf)          | [TSA\_SRA\_assemble](/files/example/TSA_SRA_assemble.txt)          | [TSA\_SRA](/files/pdf/ddbj/TSA_SRA_ann2ff.pdf) |
| [WGS](/ddbj/wgs.html) (Whole Genome Shotgun)                               | [WGS](/files/pdf/ddbj/WGS.pdf)                                      | [WGS](/files/example/WGS.txt)                                      | [WGS](/files/pdf/ddbj/WGS_ann2ff.pdf)          |
| [WGS](/ddbj/wgs.html); piece of scaffold CON                               | [WGS\_piece\_CON](/files/pdf/ddbj/WGS_piece_CON.pdf)                | [WGS\_piece\_CON](/files/example/WGS_piece_CON.txt)                |                                                |
| [CON](/ddbj/con.html) entries for WGS scaffold                             | [WGS\_scaffold](/files/pdf/ddbj/WGS_scaffold.pdf)                   | [WGS\_scaffold](/files/example/WGS_scaffold.txt)                   | [CON](/files/pdf/ddbj/CON_ann2ff.pdf)          |
| AGP file for [CON](/ddbj/con.html) entries                                 | [AGP](/files/pdf/ddbj/AGP.pdf)                                      | [AGP](/files/example/AGP.txt)                                      |                                                |
| [TPA](/ddbj/tpa.html) (Third Party Annotation)                             | [TPA](/files/pdf/ddbj/TPA.pdf)                                      | [TPA](/files/example/TPA.txt)                                      | [TPA](/files/pdf/ddbj/TPA_ann2ff.pdf)          |

</div>

</div>

<div class="section section">

### 共通情報 COMMON

#### COMMON の入力について

  - アノテーションファイルでは全てのエントリに共通な情報を入力するために COMMON というエントリ名を使用することができます。
  - COMMON エントリに記載された情報はデータベースに読み込まれる際に全てのエントリに反映されます。
  - 通常 COMMON は SUBMITTER/REFERENCE/COMMENT 等で使用しますが, Feature 以下(Feature, Location, Qualifier, Value)の情報が全てのエントリに共通であれば、[Biological feature](#biological_feature) でも記載できます。

#### COMMON の活用

  - location に使用可能なメタ塩基番号'E'  
    例: COMMON に rRNA feature を記載
    
    <div class="main_table format">
    
    | Entry  | Feature | Location                           | Qualifier | Value    |
    | ------ | ------- | ---------------------------------- | --------- | -------- |
    | COMMON | rRNA    | \<1..\><span class="bold">E</span> | product   | 16S rRNA |
    

    </div>
    
    配列長が異なるために Location が異なることを除けば、Feature 以下の Qualifier, Value の情報が全てのエントリで共通に記載可能なケース（例：rRNA 部分配列による系統解析など）があります。
    
    そのような場合には、COMMON エントリに Feature を記載し location には、最後の塩基番号の代わりにメタ塩基番号として、<span class="bold">E</span> を記載することにより、全てのエントリに共通となる Feature を COMMON エントリに記載することが可能です。

  - clone, submitter\_seqid, note, ff\_definition に使用可能なメタ表記 '@@[entry\]@@'  
    例: COMMON に source feature を記載
    
    <div class="main_table format">
    
    | Entry  | Feature | Location                       | Qualifier        | Value                                                                                               |
    | ------ | ------- | ------------------------------ | ---------------- | --------------------------------------------------------------------------------------------------- |
    | COMMON | source  | 1..<span class="bold">E</span> | organism         | Homo sapiens                                                                                        |
    |        |         |                                | mol\_type        | genomic DNA                                                                                         |
    |        |         |                                | submitter\_seqid | <span class="bold">@@[entry\]@@</span>                                                             |
    |        |         |                                | ff\_definition   | <span class="bold">@@[organism\]@@</span> DNA, <span class="bold"> @@[submitter\_seqid\]@@</span> |
    

    </div>
    
    Location および clone 名や contig 名を除けば、Feature: source の Qualifier, Value の情報が全てのエントリで共通に記載可能なケース（例： EST, GSS, TSA, TLS, WGS, WGS scaffold (CON division)など）があります。
    
    そのような場合、エントリ名に clone 名 または contig 名を使用する場合に限り、Feature: source を
    COMMON エントリに記載することが可能です。
    
      - Location には、最後の塩基番号の代わりにメタ塩基番号として、<span class="bold">E</span> を記載します。
      - 例に示した <span class="bold">@@[entry\]@@</span>
        の形式で記載すると、配列ファイルから引用したエントリ名に置換されます。
        <span class="bold">@@[entry\]@@</span> を記載は clone, submitter\_seqid, note, ff\_definition の Value に限定しています。

</div>

<div class="section section">

### SUBMITTER

例: アノテーションファイル内の SUBMITTER　（<span class="red">入力必須項目</span>）

<div class="main_table format">

| Entry  | Feature                            | Location | Qualifier                          | Value                          |
| ------ | ---------------------------------- | -------- | ---------------------------------- | ------------------------------ |
| COMMON | <span class="red">SUBMITTER</span> |          | <span class="red">ab\_name</span>  | Robertson,G.R.                 |
|        |                                    |          | ab\_name                           | Mishima,H.                     |
|        |                                    |          | consrtm                            | Mouse Genome Consortium        |
|        |                                    |          | <span class="red">contact</span>   | Hanako Mishima                 |
|        |                                    |          | <span class="red">email</span>     | mishima@ddbj.nig.ac.jp         |
|        |                                    |          | url                                | http://www.ddbj.nig.ac.jp      |
|        |                                    |          | <span class="red">phone</span>     | 81-55-981-6853                 |
|        |                                    |          | fax                                | 81-55-981-6853                 |
|        |                                    |          | phext                              | 3207                           |
|        |                                    |          | <span class="red">institute</span> | National Institute of Genetics |
|        |                                    |          | department                         | DNA Data Bank of Japan         |
|        |                                    |          | <span class="red">country</span>   | Japan                          |
|        |                                    |          | state                              | Shizuoka                       |
|        |                                    |          | <span class="red">city</span>      | Mishima                        |
|        |                                    |          | <span class="red">street</span>    | Yata 1111                      |
|        |                                    |          | <span class="red">zip</span>       | 411-8540                       |

</div>

SUBMITTER で使用する Qualifier のリスト

|  Qualifier  |  Value 使用可能文字(注意事項)  |  Value 文字上限数  |
| ---- | ---- | ---- |
|  ab\_name (登録者名)  |  英, .[period\], ,[comma\], -[hyphen\], ' [apostrophe\]  |  64  |
|  contact (コンタクトパーソン)  |  英, .[period\], ,[comma\], -[hyphen\], ' [apostrophe\], [space\]  
(first, middle, last name の順で間に space を入れて入力)  |  first(64),  
middle(128), last(64)  |
|  consrtm (コンソーシアム名)  |  英, 数, [space\], -[hyphen\], ' [apostrophe\], .[period\],
\_[underscore\], .[comma\], ( ) \# & @ / ; : + \*  |  255  |
|  email  |  英, 数, @, .[period\], -[hyphen\], \_[underscore\]  |  64  |
|    |  [space\] 以外  |  255  |
|  phone, fax, phext  |  数, -[hyphen\] (国番号の頭に + はつけない)  |  16  |
|  institute, department  |  [back-slash\], \` [back-quote\] 以外  |  255  |
|  country, state  |  英, 数, [space\], -[hyphen\], '[apostrophe\], .[period\],
\_[underscore\], ,[comma\], ( ) \# & @ / ; : + \*  |  32  |
|  city  |  TD  |  TD  |
|  TD  |  英, 数, [space\], -[hyphen\], '[apostrophe\], .[period\],
\_[underscore\], ,[comma\], ( ) \# & @ / ; : + \*  |  64  |
|  street  |  英, 数, [space\], -[hyphen\], '[apostrophe\], .[period\],
\_[underscore\], ,[comma\], ( ) \# & @ / ; : + \*  |  255  |
|  zip  |  英, 数, -[hyphen\]  |  16  |

<div class="main_table format">

</div>

</div>

</div>

</div>

#### SUBMITTER の書式

  - SUBMITTER は各エントリに一件必ず入力していただく必要がありますが、全件共通の SUBMITTER を入力する場合には
    [COMMON](#common) エントリに入力してください。  
    エントリ毎に異なる SUBMITTER を入力したい場合には個々のエントリに記載してください。なお、COMMON エントリに SUBMITTER を記載した場合は、他の全てのエントリで SUBMITTER を使用することはできません。
  - SUBMITTER の Qualifier: ab\_name
    には複数の[登録者](/ddbj/submission.html#submitter)を入力できます。DDBJ の[フラットファイル](/ddbj/flat-file.html)には、ここで入力された順番に登録者が記載されます。複数の登録者の記載を強く推奨しています。  
    登録者の中から一名、コンタクトパーソン を Qualifier: contact で再度指定してください。contact の Value には、full name を記載してください。
  - Qualifier: ab\_name の Value には、論文等の著者名に準ずる形式で、氏名の略記を記載してください。
      - 形式:  
        last name[comma\]first name の頭文字[period\]middle name の頭文字[period\]
      - 例:  
        Miyashita,Y.
        Robertson,G.R.
    形式によって (氏名にハイフンを含む等)、Parser によるチェックで WAR レベルのメッセージが表示されることがありますが、記述内容に問題がない場合は、そのまま記載可能です。
  - ab\_name 以外の Qualifier の Value には、コンタクトパーソンの情報をそれぞれ一件ずつしか入力できません。複数の研究機関の情報を入力したい場合には、別途、ご連絡ください。

<div class="section section">

### REFERENCE

例: アノテーションファイル内の REFERENCE （<span class="red">入力必須項目</span>）

<div class="main_table format">

| Entry | Feature                            | Location | Qualifier                         | Value                               |
| ----- | ---------------------------------- | -------- | --------------------------------- | ----------------------------------- |
|       | <span class="red">REFERENCE</span> |          | <span class="red">title</span>    | Sequence and analysis of mouse ch.8 |
|       |                                    |          | <span class="red">ab\_name</span> | Robertson,G.R.                      |
|       |                                    |          | ab\_name                          | Mishima,H.                          |
|       |                                    |          | <span class="red">status</span>   | Published                           |
|       |                                    |          | <span class="red">year</span>     | 2003                                |
|       |                                    |          | journal                           | Nature                              |
|       |                                    |          | volume                            | 8                                   |
|       |                                    |          | start\_page                       | 15                                  |
|       |                                    |          | end\_page                         | 20                                  |

</div>

REFERENCE で使用する Qualifier のリスト

<div class="main_table format">

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th>Qualifier</th>
<th>Value 使用可能文字(注意事項)</th>
<th>Value 文字上限数</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>title (論文のタイトル)</td>
<td>[back-slash], ` [back-quote] 以外</td>
<td>255</td>
</tr>
<tr class="even">
<td>ab_name (著者名)</td>
<td>英, .[period], ,[comma], -[hyphen], ' [apostrophe]</td>
<td>64</td>
</tr>
<tr class="odd">
<td>consrtm (コンソーシアム名)</td>
<td>英, 数, [space], -[hyphen], ' [apostrophe], .[period], _[underscore],<br />
,[comma], ( ) # &amp; @ / ; : + *</td>
<td>255</td>
</tr>
<tr class="even">
<td>status</td>
<td>以下の何れか<br />
Unpublished, In press, Published</td>
<td>-</td>
</tr>
<tr class="odd">
<td>year</td>
<td>数(西暦4桁)</td>
<td>4</td>
</tr>
<tr class="even">
<td>journal</td>
<td>[back-slash], ` [back-quote] 以外 (PubMed type abbreviation を入力)</td>
<td>128</td>
</tr>
<tr class="odd">
<td>volume, start_page, end_page</td>
<td>英, 数, -[hyphen]</td>
<td>8</td>
</tr>
</tbody>
</table>

</div>

#### REFERENCE の書式

  - REFERENCE は各エントリに最低１つ、必須となります。
  - Qualifier: ab\_name の Value には、論文等の著者名に準ずる形式で、氏名の略記を記載してください。
      - 形式:  
        last name[comma\]first name の頭文字[period\]middle name
        の頭文字[period\]
      - 例:  
        Miyashita,Y.
        Robertson,G.R.
    形式によって (氏名にハイフンを含む等)、Parser によるチェックで WAR レベルのメッセージが表示されることがありますが、記述内容に問題がない場合は、そのまま記載可能です。
  - status が "In Press" の場合は、Qualifier: journal も必須となります。
  - status が "Published" の場合は、Qualifier: journal, volume, start\_page, end\_page も必須となります。
  - 今後論文に投稿する予定のない場合にも、status を "Unpublished" として REFERENCE を入力してください。
  - journal には雑誌の PubMed type abbreviation を入力して下さい。
  - REFERENCE を複数入力する場合には、登録する塩基配列を掲載する予定の論文、あるいは、既に掲載されている論文情報を
    REFERENCE の筆頭に入力し、参考文献はそれ以降に入力してください。
  - 登録する塩基配列に関する REFERENCE 情報が全件に共通する場合は、[COMMON](#common) エントリに入力してください。エントリ毎に異なる参考文献の情報を入力したい場合には個々のエントリに記載してください。
  - COMMON エントリと個々のエントリの双方に REFERENCE を入力した場合には、COMMON
    の情報から順に、フラットファイル上に反映されます。

</div>

<div class="section section">

### DATE

例: アノテーションファイル内の DATE と hold\_date

<div class="main_table format">

| Entry  | Feature | Location | Qualifier  | Value    |
| ------ | ------- | -------- | ---------- | -------- |
| COMMON | DATE    |          | hold\_date | 20181125 |

</div>

#### DATE の書式

  - DATE、hold\_date は必ず [COMMON](#common) エントリに入力してください。公開予定日が異なる場合には、ファイルを公開予定日毎に分けて作成してください。
  - DATE にはデータの公開予定日(hold\_date)を年月日の順で、半角数字 8 桁(例：20181125)で入力してください。
  - \- [hyphen\] や / [slash\] などの区切り文字を使用した場合はエラーとなります。
  - 登録作業後、データの即時公開をご希望の場合には、DATE を入力しないでください。
  - 公開予定日をご指定いただいた場合は、[データ公開原則](/data-release-policy.html)に基づいて、公開作業を行ないます。

</div>

<div class="section section">

### COMMENT/ST\_COMMENT

例: アノテーションファイル内の COMMENT と ST\_COMMENT

<div class="main_table format">

| Entry | Feature     | Location | Qualifier                | Value                                      |
| ----- | ----------- | -------- | ------------------------ | ------------------------------------------ |
|       | COMMENT     |          | line                     | This clone was obtained at our laboratory. |
|       | COMMENT     |          | line                     | Please visit our web site.                 |
|       |             |          | line                     | URL:http://www.ddbj.nig.ac.jp              |
|       | ST\_COMMENT |          | tagset\_id               | Genome-Assembly-Data                       |
|       |             |          | Finishing Goal           | High Quality Draft                         |
|       |             |          | Current Finishing Status | High Quality Draft                         |
|       |             |          | Assembly Method          | GS De Novo Assembler v. 2.0                |
|       |             |          | Assembly Name            | Mmus\_1.0                                  |
|       |             |          | Genome Coverage          | 50x                                        |
|       |             |          | Sequencing Technology    | 454 GS FLX; ABI 3730                       |

</div>

<span class="red">※</span> COMMENT には "一般 COMMENT" と "structured COMMENT" があります。詳細は以下をご覧ください。

#### COMMENT (一般 COMMENT) の書式

  - 一般 COMMENT は必要に応じて登録者が自由な記述形式で内容を入力することができます。
  - COMMENT は [DDBJ フラットファイル](/ddbj/flat-file.html)上では 60
    文字(スペースを含む)で自動的に改行されますが、任意の位置で改行したい場合には、Qualifier:
    line を指定して改行位置で Value を分けてください。
  - Qualifier: line の Value には、 [back-slash\] 以外の文字を使用可能です。
  - 全件共通の COMMENT は [COMMON](#common) エントリに入力してください。エントリ毎に異なる COMMENT を入力する場合には個々のエントリに記載してください。
  - 内容の異なる COMMENT を入力する場合には、COMMENT と COMMENT の間に空行を入れるため、COMMENT Feature をそれぞれに作成してください。
  - COMMON エントリと個々のエントリの双方に COMMENT を入力した場合には、COMMON
    から順に、フラットファイル上に反映されます。また、複数の COMMENT を入力した場合は、アノテーションファイルに入力した順番でフラットファイル上に反映されます。
  - [EST の場合](#est)、特殊な COMMENT の記載が必要なことがあります。

#### ST\_COMMENT (structured COMMENT) の書式

  - ST\_COMMENT は一定のルールに従って構造化された COMMENT ([structured COMMENT](/ddbj/flat-file.html#Comment)) を記載するための feature です。

  - ST\_COMMENT はユーザー定義も可能ですが、[Genome Project](/ddbj/genome.html)
    ([WGS](/ddbj/wgs.html) も含む)、[Transcriptome Project](/ddbj/transcriptome.html) ([TSA](/ddbj/tsa.html) も含む)
    などの登録には既定書式があり、記載する必要があります。

  - ST\_COMMENT はデータセット名 (tagset\_id) と項目名 (ユーザー定義 Qualifier) 、各項目の値
    (Value)で構成されます。

  - Structured COMMENT の開始行ではQualifier に tagset\_id 、Value に COMMENT のタイトルを入力します。
    
    Genome Project の場合は tagset\_id に Genome-Assembly-Data を入力します。  
    Transcriptome Project の場合は tagset\_id に Assembly-Data を入力します。

  - 項目名を Qualifier として入力します。各項目に対応する具体的な内容を Value に入力します。
    
    Genome-Assembly-Data で使用する Qualifier のリスト
    （<span class="red">入力必須項目</span>）
    
    <div class="main_table format">
    
    Qualifier
    
    </div>

  - 記載の可否や内容等については登録毎に個別に対応しますので、MSS の担当者にお問い合わせください。

</div>

<div class="section section">

### Biological Feature

例: アノテーションファイル内の source と CDS feature　（<span class="red">入力必須項目</span>）

<div class="main_table format">

| Entry | Feature                         | Location                                                    | Qualifier                          | Value                    |
| ----- | ------------------------------- | ----------------------------------------------------------- | ---------------------------------- | ------------------------ |
|       | <span class="red">source</span> | <span class="red">1..12297</span>                           | <span class="red">organism</span>  | Mus musculus             |
|       |                                 |                                                             | <span class="red">mol\_type</span> | genomic\_DNA             |
|       |                                 |                                                             | chromosome                         | 8                        |
|       |                                 |                                                             | clone                              | PC0110                   |
|       | <span class="red">CDS</span>    | <span class="red">join(\<1..456,609..879,1070..1213)</span> | <span class="red">product</span>   | protein kinase           |
|       |                                 |                                                             | codon\_start                       | 2                        |
|       | rRNA                            | 1279..3000                                                  | product                            | 18S rRNA                 |
|       | CDS                             | complement(join(3213..4981,9901..11677))                    | gene                               | tbpA                     |
|       |                                 |                                                             | product                            | TATA-box binding protein |

</div>

<span class="red">※</span> Biological feature の定義、記述方法の詳細については、[Feature Table Definition](/ddbj/full_index.html)をご参照ください。

#### Feature/Location/Qualifier の書式

  - [Feature Table Definition](/ddbj/full_index.html) では、各 Qualifier の前に / [slash\] が記述されておりますが、アノテーションファイルでは / を入力しないでください。
  - source と organism、mol\_type は各エントリに最低１つ、必須となります。
  - Location の記載ルールは、[Location の記述法](/ddbj/location.html)を ご参照ください。
  - 各 Feature で使用可能な Qualifier は [Feature/Qualifier 対応表](/files/pdf/ddbj/fq-j.pdf) にて確認できます。 一部の Feature には、入力必須 Qualifier が指定されています。 対象の Feature で、Mandatory qualifier と指定されているものは必ず入力してください。 大文字と小文字の区別, \_[underscore\] の使用も対応表の表記に従ってください。
  - あわせて、[アノテーションファイルのサンプル](#sample) と [登録の見本](/ddbj/example.html)もご参照ください。
  - CDS の記載に際しましては、[タンパク質コード配列; CDS feature について](/ddbj/cds.html)をご参照ください。
  - CDS feature を含むデータは、必ず、[UME](/ddbj/ume.html) または[transChecker](/ddbj/transchecker.html) を用いてアミノ酸翻訳をご確認ください。

#### Value の書式

  - 使用可能な文字種は Qualifier に依存します。詳細は [Feature Table Definition](/ddbj/full_index.html)および、[Feature/Qualifier の対応一覧表](/files/pdf/ddbj/fq-j.pdf)をご参照ください。
  - Value type に従い、各 Qualifier で指定されている文字種を使用して、正しく入力してください。

</div>

<div class="section section">

### DIVISION

DIVISION は、登録データが [CON](/ddbj/data-categories.html#con) / [ENV](/ddbj/data-categories.html#env) / [EST](/ddbj/data-categories.html#est) / [GSS](/ddbj/data-categories.html#est) / [HTC](/ddbj/data-categories.html#est) / [HTG](/ddbj/data-categories.html#est) / [STS](/ddbj/data-categories.html#est) / [SYN](/ddbj/data-categories.html#env) / [TSA](/ddbj/data-categories.html#tsa) のいずれかに該当することを示します。

例: アノテーションファイル内の DIVISION

<div class="main_table format">

| Entry  | Feature  | Location | Qualifier | Value |
| ------ | -------- | -------- | --------- | ----- |
| COMMON | DIVISION |          | division  | EST   |

</div>

#### DIVISION の書式

  - Qualifier : division の Value にdivision
    の名称を示すアルファベット３文字を大文字で入力してください。
  - DIVISION は、原則として [COMMON](#common) エントリに入力してください。

</div>

<div class="section section">

### DATATYPE

DATATYPE は、登録データが [WGS](/ddbj/wgs.html), [TLS](/ddbj/tls.html),[TPA](/ddbj/tpa.html), TPA-WGS の何れかに該当することを示します。

例: アノテーションファイル内の DATATYPE

<div class="main_table format">

| Entry  | Feature  | Location | Qualifier | Value |
| ------ | -------- | -------- | --------- | ----- |
| COMMON | DATATYPE |          | type      | WGS   |

</div>

#### DATATYPE の書式

  - Qualifier: type の Value に WGS, TLS, TPA, TPA-WGS の何れかを入力してください。
  - DATATYPE は [COMMON](#common) エントリに入力してください。

</div>

<div class="section section">

### KEYWORD

KEYWORD には、[DIVISION](#division) と [DATATYPE](#datatype) で示されたデータ種別を基本に、細分化した情報,実験手法に関する情報などを、原則として、規定値で記載します。  
INSDC が合意した KEYWORD 名と規定値、並びに各 KEYWORD 名の定義につきましては、[INSDC agreed methodological keywords](/ddbj/keyword.html)をご参照ください。

例: アノテーションファイル内の KEYWORD

<div class="main_table format">

| Entry | Feature                                | Location | Qualifier                              | Value                              |
| ----- | -------------------------------------- | -------- | -------------------------------------- | ---------------------------------- |
|       | <span class="font-bold">KEYWORD</span> |          | <span class="font-bold">keyword</span> | <span class="font-bold">ENV</span> |

</div>

データ種別ごとの keyword の Value<span class="red">入力必須項目</span>

|  データ種別  |  keyword の Value  |  注意事項  |
| ---- | ---- | ---- |
|  [WGS](/ddbj/wgs.html)  |  <span class="red">WGS</span>  |  [WGS, scaffold CON の場合](#wgs_con) もご参照ください。  |
|  [ENV](/ddbj/env.html)  |  <span class="red">ENV</span>  |    |
|  [EST](/ddbj/est.html)  |  <span class="red">EST</span>  |    |
|  ^  |  その他  |  [EST の場合](#est) 参照  |
|  [HTC](/ddbj/htc.html)  |  <span class="red">HTC</span>, その他  |  その他については、登録毎にご連絡いたします。  |
|  [HTG](/ddbj/htg.html)  |  <span class="red">HTG</span>, [その他](#htg)  |  [phase](/ddbj/data-categories.html#est) に依存、登録毎にご連絡いたします。  |
|  [GSS](/ddbj/gss.html)  |  <span class="red">GSS</span>  |    |
|  STS  |  <span class="red">STS</span>  |    |
|  [TPA](/ddbj/tpa.html)  |  <span class="red">TPA, Third Party Data</span>  |    |
|  ^  |  <span class="red">TPA:inferential</span> or <span class="red">TPA:experimental</span>  |  どちらか一方が必須  |
|  [TSA](/ddbj/tsa.html)  |  <span class="red">TSA, Transcriptome Shotgun Assembly</span>  |    |
|  [TLS](/ddbj/tls.html)  |  <span class="red">TLS, Targeted Locus Study</span>  |    |
|  その他  |    |  登録毎にご連絡いたします。  |

#### KEYWORD の書式

  - Qualifier: keyword の Value に該当する規定値を入力してください。
  - 詳細な記載方法に関しましては、登録毎にご連絡いたします。

###### WGS, scaffold CON の場合

  - WGS や WGS エントリを primary エントリに引用した scaffold 配列（CON
    エントリ）では、登録される塩基配列の完成度を示すため、次のいずれかを
    KEYWORD に記載してください。
    
      - STANDARD\_DRAFT
      - HIGH\_QUALITY\_DRAFT
      - IMPROVED\_HIGH\_QUALITY\_DRAFT
      - NON\_CONTIGUOUS\_FINISHED
    
    例: WGS draft genome（<span class="red">入力必須項目</span>）
    
    <div class="main_table format">
    
    | Entry | Feature                          | Location | Qualifier                        | Value                                    |
    | ----- | -------------------------------- | -------- | -------------------------------- | ---------------------------------------- |
    |       | <span class="red">KEYWORD</span> |          | <span class="red">keyword</span> | <span class="red">WGS</span>             |
    |       |                                  |          | <span class="red">keyword</span> | <span class="red">STANDARD\_DRAFT</span> |
    

    </div>

###### EST の場合

  - EST では、EST に加えて、以下のいずれかを keyword に必ず記載してください。
    
      - 5' EST の場合 --- 5'-end sequence (5'-EST)
      - 3' EST の場合 --- 3'-end sequence (3'-EST)
      - 上記を特定できない場合 --- unspecified EST
    
    例: 5' EST（<span class="red">入力必須項目</span>）
    
    <div class="main_table format">
    
    | Entry | Feature                          | Location | Qualifier                        | Value                                             |
    | ----- | -------------------------------- | -------- | -------------------------------- | ------------------------------------------------- |
    |       | <span class="red">KEYWORD</span> |          | <span class="red">keyword</span> | <span class="red">EST</span>                      |
    |       |                                  |          | <span class="red">keyword</span> | <span class="red">5'-end sequence (5'-EST)</span> |
    

    </div>

  - 3' EST では、登録される塩基配列が anti-sense 鎖側、sense 鎖側のどちらであるかを示すため、次のいずれかを
    [COMMENT](#comment) に記載してください。
    
    例: anti-sense 鎖の登録（<span class="red">入力必須項目</span>）
    
    <div class="main_table format">
    
    | Entry | Feature                          | Location | Qualifier                     | Value                                                                         |
    | ----- | -------------------------------- | -------- | ----------------------------- | ----------------------------------------------------------------------------- |
    |       | <span class="red">COMMENT</span> |          | <span class="red">line</span> | <span class="red">3'-EST sequences are presented as anti-sense strand.</span> |
    

    </div>
    
    例: sense 鎖の登録（<span class="red">入力必須項目</span>）
    
    <div class="main_table format">
    
    | Entry | Feature                          | Location | Qualifier                     | Value                                                                    |
    | ----- | -------------------------------- | -------- | ----------------------------- | ------------------------------------------------------------------------ |
    |       | <span class="red">COMMENT</span> |          | <span class="red">line</span> | <span class="red">3'-EST sequences are presented as sense strand.</span> |
    

    </div>

###### HTG の場合

  - HTG では、その配列決定の段階を示す keyword の記載を推奨しています。

<div class="section section">

### DBLINK

DBLINK は、 BioProject ID、BioSample ID、Sequence Read Archive (DRA/ERA/SRA)
他, 特定データベースへのリンクを記載します。

例: アノテーションファイル内の DBLINK（<span class="red">入力必須項目</span>）

<div class="main_table format">

| Entry | Feature                         | Location | Qualifier                                      | Value                                 |
| ----- | ------------------------------- | -------- | ---------------------------------------------- | ------------------------------------- |
|       | <span class="red">DBLINK</span> |          | <span class="red">project</span>               | <span class="red">PRJDB12345</span>   |
|       |                                 |          | <span class="red">biosample</span>             | <span class="red">SAMD90000000</span> |
|       |                                 |          | <span class="red">sequence read archive</span> | <span class="red">DRR999000</span>    |
|       |                                 |          | <span class="red">sequence read archive</span> | <span class="red">DRR999001</span>    |

</div>

#### DBLINK の書式

  - 登録データが BioProject Database、BioSample Database に登録されている場合は、Qualifier:
    project の Value に BioProject ID、Qualifier: biosample の Value に BioSample ID を記載してください。
  - 登録データが次世代シーケンサ由来のアセンブルで、raw reads が Sequence Read Archive に登録されている場合、Qualifier: sequence read archive の Value に対応する [Run データのアクセッション番号](/prefix.html#dra)を入力してください。
  - [BioProject Database](/bioproject/index.html), [BioSample Database](/biosample/index.html), [Sequence Read Archive](/dra/index.html) もご参照ください。

</div>

<div class="section section">

### locus\_tag

アノテーションが付加された全ゲノム規模の登録に関しましては、タンパク質産物 ([CDS](/ddbj/cds.html))、あるいは、転写産物(rRNA, tRNA など)を示す [Biological feature](#biological_feature) に [locus\_tag](/ddbj/locus_tag.html) を付加することを推奨しています。  
locus\_tag prefix は事前に [BioProject Database](/bioproject/index.html) で BioProject ID を申請する際に取得して下さい。

</div>

<div class="section section">

### source: ff\_definition

ff\_definition は、The DDBJ/EMBL/GenBank Feature Table: Definition には定義されていない DDBJ 登録専用 Qualifier です。必要な場合にのみ、１エントリに１つ記載します。

例: アノテーションファイル内の ff\_definition

<div class="main_table format">

| Entry | Feature | Location | Qualifier      | Value                                                                                           |
| ----- | ------- | -------- | -------------- | ----------------------------------------------------------------------------------------------- |
|       | source  | 1..516   | organism       | Mus musculus                                                                                    |
|       |         |          | mol\_type      | mRNA                                                                                            |
|       |         |          | ff\_definition | <span class="bold">@@[organism\]@@</span> mRNA, clone: <span class="bold">@@[clone\]@@</span> |
|       |         |          | clone          | PC0110                                                                                          |

</div>

ff\_definition 記述フォーマット

<div class="main_table format">

| データ種別                                                              | ff\_definition記述フォーマット                                                                                               |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| [WGS](/ddbj/wgs.html)                                              | @@[organism\]@@ @@[strain\]@@ DNA, @@[submitter\_seqid\]@@, [other information\]                                 |
| BAC/YAC genomic clones in unfinished phase ([HTG](/ddbj/htg.html)) | @@[organism\]@@ DNA, chromosome @@[map\]@@, [BAC/YAC\] clone: @@[clone\]@@, \*\*\* SEQUENCING IN PROGRESS \*\*\* |
| BAC/YAC genomic clones in finished phase                           | @@[organism\]@@ DNA, chromosome @@[map\]@@, [BAC/YAC\] clone: @@[clone\]@@                                       |
| [EST](/ddbj/est.html)                                              | @@[organism\]@@ mRNA, clone: @@[clone\]@@, [other information\]                                                   |
| [EST](/ddbj/est.html)                                              | @@[organism\]@@ cDNA, clone: @@[clone\]@@, [other information\]                                                   |
| [GSS](/ddbj/gss.html)                                              | @@[organism\]@@ DNA, clone: @@[clone\]@@, [other information\]                                                    |
| STS                                                                | @@[organism\]@@ DNA, @@[map\]@@, [marker name\], sequence tagged site                                             |
| その他                                                                | 登録毎にご連絡いたします。                                                                                                        |

</div>

#### source: ff\_definition の書式

  - [Biological feature](#biological_feature) である source に Qualifier: ff\_definition を入力します。
  - ff\_definition の記載内容は、DDBJ [フラットファイル](/ddbj/flat-file.html) において DEFINITION 行に反映されます。詳細は[サンプルとフラットファイルとの対応](#sample) をご参照ください。
  - ff\_definition の Value には、通常、同じ source feature 内にある他の Qualifier から Value を引用することが多いため、引用のためのメタ表記を用意しております。例に示したように <span class="bold">@@[organism\]@@</span>,<span class="bold">@@[clone\]@@</span> の形式で、Value を引用する Qualifier の名称を <span class="bold">@@[</span> と <span class="bold">\]@@</span> で括り記載しておきますと、DEFINITION 行に反映する際に対象 Value に置換されます。
  - 上記表に示した記述フォーマットを基本としますが、ff\_definition の詳細な記載方法に関しましては、登録毎にご連絡いたします。

</div>

<div class="section section">

### assembly\_gap: Sequencing Gap Region

[HTG](/ddbj/htg.html) に代表される大規模ゲノム配列やESTアセンブルによるトランスクリプトーム
([TSA](/ddbj/tsa.html)) 配列の登録などにおいて、アセンブル途上、難読領域であるなどの理由により生じる
sequencing gap を示すために配列ファイルでは、配列中に 'n' を記載します。このとき、アノテーションファイルでは、その sequencing gap 領域を下記の要領で、assembly\_gap feature を用いて示す必要があります。

例: アノテーションファイル内の assembly\_gap（<span class="red">入力必須項目</span>）

<div class="main_table format">

| Entry | Feature       | Location | Qualifier         | Value                                    |
| ----- | ------------- | -------- | ----------------- | ---------------------------------------- |
|       | assembly\_gap | 101..200 | estimated\_length | <span class="red">unknown</span>         |
|       |               |          | gap\_type         | <span class="red">within scaffold</span> |
|       |               |          | linkage\_evidence | <span class="red">paired-ends</span>     |

</div>

#### assembly\_gap: Sequencing Gap Region の書式

  - assembly\_gap feature は Biological feature の１つですが、特殊な書式になります。
  - assembly\_gap では、location に join, order, complement を使用することはできません。

###### 長さが不明の場合

長さが判明していないギャップ領域については、登録者によって指定された一律の長さ (1000 bp未満のreasonableな長さ) の 'n' で記述する規則となっております。  
また、Qualifier: estimated\_length で Value に unknown と記載します。  
但し、CON divisionではない transcriptome エントリ (TSA division など) には、Value に unknown を記載することができません。

###### 長さが予測されている場合

長さが判明しているギャップ領域については、配列の相当位置に推定される長さの 'n' で記述する規則となっております。 また、Qualifier: estimated\_length で Value に known と記載します。

</div>

<div class="section section">

### TOPOLOGY

TOPOLOGY は登録塩基配列全体の形状が環状で、最初の塩基と最後の塩基が実際には連続している場合に記載する必要があります。  
例：環状ウイルスゲノムの全長など

例: アノテーションファイル内の TOPOLOGY

<div class="main_table format">

| Entry | Feature  | Location | Qualifier | Value |
| ----- | -------- | -------- | --------- | ----- |
|       | TOPOLOGY |          | circular  |       |

</div>

#### TOPOLOGY の書式

  - DDBJ [フラットファイル](/ddbj/flat-file.html)では、topology は [LOCUS
    行](/ddbj/flat-file.html#Locus)に反映されます。詳細は[アノテーションファイルのサンプル](#sample)を参照してください。

</div>

<div class="section section">

### TPA/TSA: PRIMARY\_CONTIG プライマリーエントリ引用

PRIMARY\_CONTIG, entry, および primary\_bases
は、プライマリーエントリからの配列引用情報を記載するために設けられた TPA/TSA データ登録専用の Feature, Qualifier です。

例: アノテーションファイル内の PRIMARY\_CONTIG

<div class="main_table format">

| Entry | Feature         | Location  | Qualifier      | Value      |
| ----- | --------------- | --------- | -------------- | ---------- |
|       | PRIMARY\_CONTIG | 1..438    | entry          | ZZ000010.1 |
|       |                 |           | primary\_bases | 1..438     |
|       | PRIMARY\_CONTIG | 377..696  | entry          | ZZ000011.1 |
|       |                 |           | primary\_bases | 1..320     |
|       |                 |           | complement     |            |
|       | PRIMARY\_CONTIG | 590..1191 | entry          | ZZ000022.0 |
|       |                 |           | primary\_bases | 1..601     |

</div>

PRIMARY\_CONTIG feature で使用可能な qualifier

|  Qualifier  |  Value 記述時の注意事項  |
| ---- | ---- |
|  entry  |  引用するエントリのアクセッション番号を(バージョン番号とともに)入力する  |
|  primary_bases  |  引用したプライマリーシークエンスの位置情報<br/>各配列の領域を入力する 例) 1..500  |
|  complement  |  引用するエントリが相補鎖である場合に入力が必要  |

#### TPA/TSA: PRIMARY\_CONTIG プライマリーエントリ引用 の書式

[DATATYPE/type](#datatype) で TPA、もしくは [DIVISION/division](#division) で TSA を指定しておく必要があります。

PRIMARY\_CONTIG には、引用後の結果として配列(TPA/TSA)上の位置情報、および、引用したプライマリーシークエンスの(バージョンの付いた)アクセッション番号とその位置情報を必ず入力していただきます。

Location に join, order, complement を使用することはできません。同じ entry を引用する場合も
location 単位で PRIMARY\_CONTIG を複数記述してください。

プライマリーシークエンスが DDBJ/EMBL-Bank/GenBank に登録されている場合は、バージョンの付いたアクセッション番号を記載します。引用したアクセッション番号のデータが、TPA/TSA
データ登録時点では、まだ公開されていない場合は、バージョン番号は、0 [zero\]と入力してください。

詳細は[サンプルとフラットファイルとの対応](#sample)を参照してください。

  - TPA (Third Party Annotation)： [サンプル](/files/pdf/ddbj/TPA.pdf) / [対応表](/files/pdf/ddbj/TPA_ann2ff.pdf)
  - TSA (Transcriptome Shotgun Assembly)： [サンプル](/files/pdf/ddbj/TSA.pdf) / [対応表](/files/pdf/ddbj/TSA_ann2ff.pdf)
  - TSA; assembled from short reads： [サンプル](/files/pdf/ddbj/TSA_SRA_assemble.pdf) / [対応表](/files/pdf/ddbj/TSA_SRA_ann2ff.pdf)

</div>

<div class="section chapter">

## AGP ファイル

AGP ファイルは [CON](/ddbj/con.html) エントリの登録に必要です。 AGP ファイルは CON エントリを構築する際のピースエントリの順序、種類、方向等が記載された、9列からなるタブ区切りテキストファイルです。
スクリプト、(MS Excel などの) 表計算ソフト、テキストエディタ等で作成が可能です。

AGP ファイルの書式は、UCSC, EBI および NCBI により開発されました。

例： AGP ファイル

<div class="main_table format">

| \#1       | 2    | 3    | 4 | 5 | 6              | 7        | 8    | 9            |
| --------- | ---- | ---- | - | - | -------------- | -------- | ---- | ------------ |
| scaffold1 | 1    | 1345 | 1 | W | BZZZ01123456.1 | 1        | 1345 | \+           |
| scaffold1 | 1346 | 2845 | 2 | N | 1500           | scaffold | yes  | align\_genus |
| scaffold1 | 2846 | 4301 | 3 | W | BZZZ01123457.1 | 1        | 1456 | \+           |
| scaffold1 | 4302 | 4401 | 4 | U | 100            | scaffold | yes  | align\_genus |
| scaffold1 | 4402 | 5631 | 5 | W | BZZZ01123458.1 | 1        | 1230 | \-           |
| scaffold2 | 1    | 650  | 1 | W | BZZZ01123486.1 | 1        | 1345 | \+           |
| scaffold2 | 651  | 750  | 2 | N | 100            | scaffold | yes  | align\_genus |
| scaffold2 | 751  | 2980 | 3 | W | BZZZ01123488.1 | 1        | 1230 | \-           |

</div>

</div>

<div class="section section">

### 書式と構文

AGPファイルは、[UME](/ddbj/ume.html) (Utilities for MSS Error
check)でチェックすることが可能です。

  - AGP ファイルは 9 カラムで構成されています。
  - タブ区切りテキスト形式で作成してください。
  - 途中にスペース、空行が入らないようにしてください。
  - \# で始まる行はコメント扱いとなります。データには反映されません。ファイルの先頭に記載してください。

各カラムにおける記述内容（カラム 1 - カラム 5）

|  カラム  |  内容  |  入力項目・注意事項  |    |
| ---- | ---- | ---- | ---- |
|  1  |  object  |  CONエントリ名<br>(chromosome, scaffold, contig 等に対する固有の名称)<br>アノテーションファイルのエントリ名と対応するエントリ名を入力する  |    |
|  2  |  object\_beg  |  CON エントリにおける component/gap の開始位置  |    |
|  3  |  object\_end  |  CON エントリにおける component/gap の終了位置  |    |
|  4  |  part\_number  |  CON エントリを構成する component/gap の順序  |    |
|  5  |  component\_type  |  component の種類を示す規定値: A, D, F, G, O, P, W, N, U のいずれか  |    |
|  ^  |  ^  |  A  |  Active Finishing; finishing に向けて更新され得る段階  |
|  ^  |  ^  |  D  |  Draft HTG; HTG phase1, phase2, あるいは不明な draft 段階  つまり finished レベルに達していない HTG  |
|  ^  |  ^  |  F  |  Finished HTG; phase3, finished レベルの HTG  |
|  ^  |  ^  |  G  |  Whole Genome Finishing  |
|  ^  |  ^  |  O  |  Other sequence; WGS, HTG に該当しないもの  |
|  ^  |  ^  |  P  |  Pre Draft  |
|  ^  |  ^  |  W  |  WGS contig; ピースエントリが WGS エントリである場合  |
|  ^  |  ^  |  N  |  サイズが特定・予測されている gap  |
|  ^  |  ^  |  U  |  サイズ不明の gap、100 塩基とすること  |

\* component: より大きな配列を構築するために使用される配列 (ピースエントリ)

<span class="icon_d-triangle">6 以降のカラムは、カラム 5 の value に依存して記述内容が異なります。</span>

各カラムにおける記述内容（カラム 6 - カラム 9）：カラム 5 が "N"と"U"以外の場合

|  カラム  |  内容  |  入力項目・注意事項  |    |
| ---- | ---- | ---- | ---- |
|  6  |  component\_id  |  component のアクセッション番号とバージョン番号、<br>あるいは component のエントリ名  |    |
|  7  |  component\_beg  |  component の開始位置  |    |
|  8  |  component\_end  |  component の終了位置  |    |
|  9  |  orientation  |  component の相対的な配列の方向。規定値は下記：  |    |
|  ^  |  ^  |  \+  |  プラス、順鎖  |
|  ^  |  ^  |  \-  |  マイナス、相補鎖  |
|  ^  |  ^  |  ?  |  不明  |
|  ^  |  ^  |  0  |  ゼロ、不明 (deprecated)  |
|  ^  |  ^  |  na  |  irrelevant  |
|  ^  |  ^  |  ただし、"?"、"0"、"na" も順鎖と扱う。  |    |

\* component: より大きな配列を構築するために使用される配列 (ピースエントリ)

  - 長さが判明していないギャップ領域については、一律 100 個の n で記述する規則となっています。 component\_type の value に"U"、gap\_length の value に "100" と記載します。

  - カラム 5 が "N"あるいは"U"の場合、連続性の情報は gap\_type および linkage の組み合わせで与えられます。
    以下の表を参考にしてください。
    
    例: アノテーションファイル内の COMMENT と ST\_COMMENT
    
    <div class="main_table format">
    
    gap\_type
    
    </div>
