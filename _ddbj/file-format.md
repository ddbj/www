---
layout: tabbed_indexed_content
title: 登録ファイル形式
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: home
lang: ja
related_pages:
  - title: MSS データファイル用チェックツール
    url: /ddbj/mss-tool.html
  - title: UME ユーザーマニュアル
    url: /ddbj/ume.html
  - title: Parser ユーザーマニュアル
    url: /ddbj/parser.html
  - title: transChecker ユーザーマニュアル
    url: /ddbj/transchecker.html
  - title: validator エラーメッセージ
    url: /ddbj/validator.html
  - title: MSS 利用申し込み
    url: /ddbj/mss-form.html
---

## 配列ファイル {#sequence}

配列ファイルは、全登録データの配列を FASTA に類似した形式で記述したテキストファイルです。 配列ファイルは、1つの配列データは、"\>" で始まる1行のヘッダ行と、2行目以降の実際のシーケンス文字列で構成されます。DDBJ では、エントリ間は配列情報終了フラグ (//) で区切ります。

例: 配列ファイル

``` 
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

### 書式と構文  {#agp_format} 

必ず、[UME](/ddbj/ume.html) または [Parser](/ddbj/parser.html) を用いて、配列ファイルとアノテーションファイルの書式をご確認ください。

  - ベクター，リンカー，アダプターなどの配列（technical
    readと呼びます）は必ず除去してください。ただし、ベクターなどの配列自体を報告する場合は、除去する必要はありません。
  - 特殊なケースを除き，最初(5'端)と最後(3'端)の塩基は n にならないように，末端の n は除去してください。また、特に EST
    などの場合，シークエンサ出力をそのまま送付するのではなく、末端の信頼できない出力を削除するなど精査してください。
  - エントリ名は行頭の「\>」に続けて、 space, " double-quote, = equal, | pipe, \>
    greater-than, \[\] angled brackets, \\ back-slash を含まない半角英数字 32
    文字以内で記載してください。
  - エントリ名はエントリ毎にユニークな文字列を記載してください。clone 名，isolate
    名といった個々のエントリによって異なる名称の使用が一般的です。
  - 配列ファイルと[アノテーションファイル](#annotation)の各エントリは、同一のエントリ名により対応づけます。アノテーション情報と配列は、対応するエントリに同じエントリ名をつけ、同じ順番になるようにそれぞれ入力してください。入力されたエントリ順にアクセッション番号を発行いたします。
  - 塩基配列には a，t，g，c
    以外にも、必要に応じて、各種[核酸コード](/ddbj/code.html#nucleotide-1)が使用可能です。
  - 終端子として配列情報終了フラグ(//)を必ず入力してください。
  - 途中にスペース、空行が入らないようにしてください。
  - [CON](/documents/data-categories.html#con) に該当する場合は、配列ファイルは [AGP
    ファイル](#agp)で代替することができます。

## アノテーションファイル {#annotation} 

アノテーションファイルは、全登録データの登録者, REFERENCE、Feature/Qualifierの情報等を記述した、Entry, Feature, Location, Qualifier, Value の５列からなるタブ区切りテキストファイルです。  
スクリプト、(MS Excel などの) 表計算ソフト、テキストエディタ等で作成が可能です。

例:アノテーションファイル （<span class="red">入力必須項目</span>）

| Entry             | Feature                            | Location                                                         | Qualifier                          | Value                           |
|---|
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

### 書式と構文

必ず、[UME](/ddbj/ume.html) または [Parser](/ddbj/parser.html)
を用いて、配列ファイルとアノテーションファイルの書式をご確認ください。

Entry  
: [登録ファイル形式：配列ファイル](#sequence)で示した配列ファイルと対応するエントリ名を入力してください。
: エントリ名を入力後、次のエントリが始まる行までは、Entry カラムには何も入力しないでください。

Feature  
: [Biological feature](#biological_feature) と 独自に規定された DDBJ 登録用 feature の２つのタイプがあります。各 Feature の記載方法については以下で解説します。
: Feature 入力後、次の Feature が始まる行までは、Feature カラムには何も入力しないでください。

Location  
: [Biological feature](#biological_feature) と [PRIMARY\_CONTIG](#primary_contig) で Feature の記載に隣接するカラムにのみ、記載が必要です。

Qualifier  
: 各行に 1つ記載します。記載可能な Qualifier は Feature に依存します。詳細は以下で解説します。

Value  
: Qualifier に依存します。各 Qualifier の説明に従って記載してください。

その他  
: アノテーションファイルでは、空行が存在した時点でファイルの終わりと判断されます。従って、複数エントリを入力する場合は、登録する全てのエントリの入力が終わるまで、途中に空行を作らずに入力してください。

### Biological Feature 記載に関する参照先  {#describing}

| 名称                                                  | 更新日        | 備考                                                   |
|---|
| [Feature Table Definition](/ddbj/feature-table.html)   | 2016/11/17 | version 10.6                                         |
| [Feature/Qualifier 対応一覧表](/assets/files/pdf/ddbj/fq-j.pdf) | 2016/11/09 |                                                      |
| [登録の見本](/ddbj/example.html)                         | 2014/11/27 | [DDBJ フラットファイル](/ddbj/flat-file.html)中の feature の記載例 |

### 共通情報 COMMON {#common} 

#### COMMON の入力について  {#common_entry}

  - アノテーションファイルでは全てのエントリに共通な情報を入力するために COMMON というエントリ名を使用することができます。
  - COMMON エントリに記載された情報はデータベースに読み込まれる際に全てのエントリに反映されます。
  - 通常 COMMON は SUBMITTER/REFERENCE/COMMENT 等で使用しますが, Feature
    以下(Feature, Location, Qualifier,
    Value)の情報が全てのエントリに共通であれば、[Biological
    feature](#biological_feature) でも記載できます。

#### COMMON の活用  {#use_common}

location に使用可能なメタ塩基番号'E'  
: 例: COMMON に rRNA feature を記載

  | Entry  | Feature | Location                           | Qualifier | Value    |
  |---|
  | COMMON | rRNA    | \<1..\>**E** | product   | 16S rRNA |

: 配列長が異なるために Location が異なることを除けば、Feature 以下の Qualifier, Value の情報が全てのエントリで共通に記載可能なケース（例：rRNA 部分配列による系統解析など）があります。
: そのような場合には、COMMON エントリに Feature を記載し location には、最後の塩基番号の代わりにメタ塩基番号として、**E** を記載することにより、全てのエントリに共通となる Feature を COMMON エントリに記載することが可能です。

clone, submitter\_seqid, note, ff\_definition に使用可能なメタ表記 '@@\[entry\]@@'  
: 例: COMMON に source feature を記載

  | Entry  | Feature | Location                       | Qualifier        | Value                                                                                               |
  |---|
  | COMMON | source  | 1..**E** | organism         | Homo sapiens                                                                                        |
  |        |         |                                | mol\_type        | genomic DNA                                                                                         |
  |        |         |                                | submitter\_seqid | **@@\[entry\]@@**                                                             |
  |        |         |                                | ff\_definition   | **@@\[organism\]@@** DNA, **@@\[submitter\_seqid\]@@** |
        
: Location および clone 名や contig 名を除けば、Feature: source の Qualifier, Value の情報が全てのエントリで共通に記載可能なケース（例： EST, GSS, TSA, TLS, WGS, WGS scaffold (CON division)など）があります。
    
: そのような場合、エントリ名に clone 名 または contig 名を使用する場合に限り、Feature: source を COMMON エントリに記載することが可能です。

  - Location には、最後の塩基番号の代わりにメタ塩基番号として、**E**
    を記載します。
  - 例に示した **@@\[entry\]@@**
    の形式で記載すると、配列ファイルから引用したエントリ名に置換されます。
    **@@\[entry\]@@** を記載は clone,
    submitter\_seqid, note, ff\_definition の Value に限定しています。

### SUBMITTER  {#submitter}

例: アノテーションファイル内の SUBMITTER　（<span class="red">入力必須項目</span>）

| Entry  | Feature                            | Location | Qualifier                          | Value                          |
|---|
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

SUBMITTER で使用する Qualifier のリスト

|  Qualifier  |  Value 使用可能文字(注意事項)   |  Value 文字上限数  |
|---|
|  ab_name (登録者名)  |  英, .[period], ,[comma], -[hyphen], ' [apostrophe]  |  64  |
|  contact (コンタクトパーソン)  |  英, .[period], ,[comma], -[hyphen], ' [apostrophe],  [space] (first, middle, last name の順で間に space を入れて入力)  |  first(64),middle(128), last(64)  |
|  consrtm (コンソーシアム名)  |  英, 数,  [space], -[hyphen], ' [apostrophe], .[period], _[underscore], .[comma], ( ) # & @ / ; : + *  |  255  |
|  email   |  英, 数, @, .[period], -[hyphen], _[underscore]   |  64  |
|  <url></url>  |  [space] 以外  |  255  |
|  phone, fax, phext  |  数, -[hyphen] (国番号の頭に + はつけない)  |  16  |
|  institute, department  |  [back-slash], ` [back-quote] 以外  |  255  |
|  country, state   |  英, 数,  [space], -[hyphen], '[apostrophe], .[period], _[underscore], ,[comma], ( ) # & @ / ; : + *  |  32  |
|  city  |  英, 数,  [space], -[hyphen], '[apostrophe], .[period], _[underscore], ,[comma], ( ) # & @ / ; : + *  |  64  |
|  street  |  英, 数,  [space], -[hyphen], '[apostrophe], .[period], _[underscore], ,[comma], ( ) # & @ / ; : + *  |  255  |
|  zip  |  英, 数, -[hyphen]  |  16  |                             

#### SUBMITTER の書式  {#describing_submitter}

- SUBMITTER は各エントリに一件必ず入力していただく必要がありますが、全件共通の SUBMITTER を入力する場合には
  [COMMON](#common) エントリに入力してください。  
  エントリ毎に異なる SUBMITTER を入力したい場合には個々のエントリに記載してください。なお、COMMON エントリに
  SUBMITTER を記載した場合は、他の全てのエントリで SUBMITTER を使用することはできません。
- SUBMITTER の Qualifier: ab\_name
  には複数の[登録者](/ddbj/submission.html#submitter)を入力できます。DDBJ
  の[フラットファイル](/ddbj/flat-file.html)には、ここで入力された順番に登録者が記載されます。複数の登録者の記載を強く推奨しています。  
  登録者の中から一名、コンタクトパーソン を Qualifier: contact で再度指定してください。contact の Value
  には、full name を記載してください。
- Qualifier: ab\_name の Value には、論文等の著者名に準ずる形式で、氏名の略記を記載してください。

  形式:  
  : last name\[comma\]first name の頭文字\[period\]middle name
      の頭文字\[period\]

  例:  
  : Miyashita,Y.
  : Robertson,G.R.

  形式によって (氏名にハイフンを含む等)、Parser によるチェックで WAR
  レベルのメッセージが表示されることがありますが、記述内容に問題がない場合は、そのまま記載可能です。
- ab\_name 以外の Qualifier の Value
  には、コンタクトパーソンの情報をそれぞれ一件ずつしか入力できません。複数の研究機関の情報を入力したい場合には、別途、ご連絡ください。

### REFERENCE  {#reference}

例: アノテーションファイル内の REFERENCE （<span class="red">入力必須項目</span>）

| Entry | Feature                            | Location | Qualifier                         | Value                               |
|---|
|       | <span class="red">REFERENCE</span> |          | <span class="red">title</span>    | Sequence and analysis of mouse ch.8 |
|       |                                    |          | <span class="red">ab\_name</span> | Robertson,G.R.                      |
|       |                                    |          | ab\_name                          | Mishima,H.                          |
|       |                                    |          | <span class="red">status</span>   | Published                           |
|       |                                    |          | <span class="red">year</span>     | 2003                                |
|       |                                    |          | journal                           | Nature                              |
|       |                                    |          | volume                            | 8                                   |
|       |                                    |          | start\_page                       | 15                                  |
|       |                                    |          | end\_page                         | 20                                  |

REFERENCE で使用する Qualifier のリスト

|  Qualifier  |  Value 使用可能文字(注意事項)  |  Value 文字上限数  |
|---|
|  title (論文のタイトル)  |  [back-slash], ` [back-quote] 以外  |  255  |
|  ab_name (著者名)  |  英, .[period], ,[comma], -[hyphen], ' [apostrophe]  |  64  |
|  consrtm (コンソーシアム名)  |  英, 数, [space], -[hyphen], ' [apostrophe], .[period], _[underscore],<br/>,[comma], ( ) # &amp; @ / ; : + *  |  255  |
|  status  |  以下の何れか<br/>Unpublished, In press, Published  |  -  |
|  year  |  数(西暦4桁)  |  4  |
|  journal  |  [back-slash], ` [back-quote] 以外 (PubMed type abbreviation を入力)  |  128  |
|  volume, start_page, end_page  |  英, 数, -[hyphen]  |  8  |

#### REFERENCE の書式  {#describing_reference}

- REFERENCE は各エントリに最低１つ、必須となります。
- Qualifier: ab\_name の Value には、論文等の著者名に準ずる形式で、氏名の略記を記載してください。
  形式:  
  : last name\[comma\]first name の頭文字\[period\]middle name の頭文字\[period\]

  例:  
  : Miyashita,Y.
  : Robertson,G.R.

  形式によって (氏名にハイフンを含む等)、Parser によるチェックで WAR
  レベルのメッセージが表示されることがありますが、記述内容に問題がない場合は、そのまま記載可能です。
- status が "In Press" の場合は、Qualifier: journal も必須となります。
- status が "Published" の場合は、Qualifier: journal, volume, start\_page,
  end\_page も必須となります。
- 今後論文に投稿する予定のない場合にも、status を "Unpublished" として REFERENCE を入力してください。
- journal には雑誌の PubMed type abbreviation を入力して下さい。
- REFERENCE を複数入力する場合には、登録する塩基配列を掲載する予定の論文、あるいは、既に掲載されている論文情報を
  REFERENCE の筆頭に入力し、参考文献はそれ以降に入力してください。
- 登録する塩基配列に関する REFERENCE 情報が全件に共通する場合は、[COMMON](#common)
  エントリに入力してください。エントリ毎に異なる参考文献の情報を入力したい場合には個々のエントリに記載してください。
- COMMON エントリと個々のエントリの双方に REFERENCE を入力した場合には、COMMON
  の情報から順に、フラットファイル上に反映されます。

### DATE  {#date}

例: アノテーションファイル内の DATE と hold\_date

| Entry  | Feature | Location | Qualifier  | Value    |
|---|
| COMMON | DATE    |          | hold\_date | 20231125 |

#### DATE の書式  {#describing_date}

  - DATE、hold\_date は必ず [COMMON](#common)
    エントリに入力してください。公開予定日が異なる場合には、ファイルを公開予定日毎に分けて作成してください。
  - DATE にはデータの公開予定日(hold_date)を年月日の順で、半角数字 8 桁(例：20231125)で入力してください。
  - \- \[hyphen\] や / \[slash\] などの区切り文字を使用した場合はエラーとなります。
  - 登録作業後、データの即時公開をご希望の場合には、DATE を入力しないでください。
  - 公開予定日をご指定いただいた場合は、[データ公開原則](/documents/data-release-policy.html)に基づいて、公開作業を行ないます。

### COMMENT/ST\_COMMENT  {#comment}

例: アノテーションファイル内の COMMENT と ST\_COMMENT

| Entry | Feature     | Location | Qualifier             | Value                                      |
|---|
|       | COMMENT     |          | line                  | This clone was obtained at our laboratory. |
|       | COMMENT     |          | line                  | Please visit our web site.                 |
|       |             |          | line                  | URL:http://www.ddbj.nig.ac.jp              |
|       | ST\_COMMENT |          | tagset\_id            | Genome-Assembly-Data                       |
|       |             |          | Assembly Method       | GS De Novo Assembler v. 2.0                |
|       |             |          | Assembly Name         | Mmus\_1.0                                  |
|       |             |          | Genome Coverage       | 50x                                        |
|       |             |          | Sequencing Technology | 454 GS FLX; ABI 3730                       |

<span class="red">※</span> COMMENT には "一般 COMMENT" と "structured
COMMENT" があります。詳細は以下をご覧ください。

#### COMMENT (一般 COMMENT) の書式  {#describing_comment}

  - 一般 COMMENT は必要に応じて登録者が自由な記述形式で内容を入力することができます。
  - COMMENT は [DDBJ フラットファイル](/ddbj/flat-file.html)上では 60
    文字(スペースを含む)で自動的に改行されますが、任意の位置で改行したい場合には、Qualifier:
    line を指定して改行位置で Value を分けてください。
  - Qualifier: line の Value には、 \[back-slash\] 以外の文字を使用可能です。
  - 全件共通の COMMENT は [COMMON](#common) エントリに入力してください。エントリ毎に異なる COMMENT
    を入力する場合には個々のエントリに記載してください。
  - 内容の異なる COMMENT を入力する場合には、COMMENT と COMMENT の間に空行を入れるため、COMMENT
    Feature をそれぞれに作成してください。
  - COMMON エントリと個々のエントリの双方に COMMENT を入力した場合には、COMMON
    から順に、フラットファイル上に反映されます。また、複数の
    COMMENT を入力した場合は、アノテーションファイルに入力した順番でフラットファイル上に反映されます。
  - [EST の場合](#est)、特殊な COMMENT の記載が必要なことがあります。

#### ST\_COMMENT (structured COMMENT) の書式  {#describing_st_comment}

  - ST\_COMMENT は一定のルールに従って構造化された COMMENT ([structured
    COMMENT](/ddbj/flat-file.html#Comment)) を記載するための feature です。

  - ST\_COMMENT はユーザー定義も可能ですが、[Genome Project](/ddbj/genome.html)
    ([WGS](/ddbj/wgs.html) も含む)、[Transcriptome
    Project](/ddbj/transcriptome.html) ([TSA](/ddbj/tsa.html) も含む)
    などの登録には既定書式があり、記載する必要があります。

  - ST\_COMMENT はデータセット名 (tagset\_id) と項目名 (ユーザー定義 Qualifier) 、各項目の値
    (Value)で構成されます。

  - Structured COMMENT の開始行ではQualifier に tagset\_id 、Value に COMMENT
    のタイトルを入力します。
    
    Genome Project の場合は tagset\_id に Genome-Assembly-Data を入力します。  
    Transcriptome Project の場合は tagset\_id に Assembly-Data を入力します。

  - 項目名を Qualifier として入力します。各項目に対応する具体的な内容を Value に入力します。
    
    Genome-Assembly-Data で使用する Qualifier のリスト
    （<span class="red">入力必須項目</span>）

    | Qualifier                                      | 意味・内容                          | 備考                                                             |
    |---|
    | <span class="red">Assembly Method</span>       | アセンブルに使用したソフトの名前とそのバージョン。      |                                                                |
    | Assembly Name | ゲノムアセンブリの名称・バージョン。 真核生物の場合、必須。 | 推奨書式： \[organism の種名 (or 一般名)\] + \[version 数値\] （例；Btau\_4.0） |
    | <span class="red">Genome Coverage</span>       | ゲノム配列決定の深度、被覆度換算。              |                                                                |
    | <span class="red">Sequencing Technology</span> | 配列解析に使用されたシークエンサー。             |                                                                |
        
    Assembly-Data で使用する Qualifier のリスト （<span class="red">入力必須項目</span>）
        
    |  Qualifier  |  意味・内容  |
    |---|
    |  <span class="red">Assembly Method</span>	  |  アセンブルに使用したソフトの名前とそのバージョン。必須。  |
    |  Assembly Name	  |  アセンブリの名称・バージョン。  |
    |  Coverage	  |  配列決定の深度、被覆度換算。  |
    |  <span class="red">Sequencing Technology</span>	  |  配列解析に使用されたシークエンサー。必須。  |
    
  - 記載の可否や内容等については登録毎に個別に対応しますので、MSS の担当者にお問い合わせください。

### Biological Feature {#biological_feature}

例: アノテーションファイル内の source と CDS feature　（<span class="red">入力必須項目</span>）

| Entry | Feature                         | Location                                                    | Qualifier                          | Value                    |
|---|
|       | <span class="red">source</span> | <span class="red">1..12297</span>                           | <span class="red">organism</span>  | Mus musculus             |
|       |                                 |                                                             | <span class="red">mol\_type</span> | genomic\_DNA             |
|       |                                 |                                                             | chromosome                         | 8                        |
|       |                                 |                                                             | clone                              | PC0110                   |
|       | <span class="red">CDS</span>    | <span class="red">join(\<1..456,609..879,1070..1213)</span> | <span class="red">product</span>   | protein kinase           |
|       |                                 |                                                             | codon\_start                       | 2                        |
|       | rRNA                            | 1279..3000                                                  | product                            | 18S rRNA                 |
|       | CDS                             | complement(join(3213..4981,9901..11677))                    | gene                               | tbpA                     |
|       |                                 |                                                             | product                            | TATA-box binding protein |

<span class="red">※</span> Biological feature の定義、記述方法の詳細については、[Feature
Table Definition](/ddbj/feature-table.html)をご参照ください。

#### Feature/Location/Qualifier の書式  {#describing_feature}

  - [Feature Table Definition](/ddbj/feature-table.html) では、各 Qualifier の前に
    / \[slash\] が記述されておりますが、アノテーションファイルでは / を入力しないでください。
  - source と organism、mol\_type は各エントリに最低１つ、必須となります。
  - Location の記載ルールは、[Location の記述法](/ddbj/location.html)を ご参照ください。
  - 各 Feature で使用可能な Qualifier は [Feature/Qualifier
    対応表](/assets/files/pdf/ddbj/fq-j.pdf) にて確認できます。 一部の Feature には、入力必須
    Qualifier が指定されています。 対象の Feature で、Mandatory qualifier
    と指定されているものは必ず入力してください。 大文字と小文字の区別, \_
    \[underscore\] の使用も対応表の表記に従ってください。
  - あわせて、[アノテーションファイルのサンプル](#sample) と [登録の見本](/ddbj/example.html)も
    ご参照ください。
  - CDS の記載に際しましては、[タンパク質コード配列; CDS feature について](/ddbj/cds.html)を
    ご参照ください。
  - CDS feature を含むデータは、必ず、[UME](/ddbj/ume.html) または
    [transChecker](/ddbj/transchecker.html) を用いてアミノ酸翻訳をご確認ください。

#### Value の書式  {#describing_value}

  - 使用可能な文字種は Qualifier に依存します。詳細は [Feature Table
    Definition](/ddbj/feature-table.html)および、[Feature/Qualifier
    の対応一覧表](/assets/files/pdf/ddbj/fq-j.pdf)をご参照ください。
  - Value type に従い、各 Qualifier で指定されている文字種を使用して、正しく入力してください。

### DIVISION {#division} 

DIVISION は、登録データが [CON](/documents/data-categories.html#con) /
[ENV](/documents/data-categories.html#env) /
[EST](/documents/data-categories.html#est) /
[GSS](/documents/data-categories.html#est) /
[HTC](/documents/data-categories.html#est) /
[HTG](/documents/data-categories.html#est) /
[STS](/documents/data-categories.html#est) /
[SYN](/documents/data-categories.html#env) /
[TSA](/documents/data-categories.html#tsa) のいずれかに該当することを示します。

例: アノテーションファイル内の DIVISION

| Entry  | Feature  | Location | Qualifier | Value |
|---|
| COMMON | DIVISION |          | division  | EST   |

#### DIVISION の書式  {#DIVISION_の書式}

  - Qualifier : division の Value にdivision
    の名称を示すアルファベット３文字を大文字で入力してください。
  - DIVISION は、原則として [COMMON](#common) エントリに入力してください。

### DATATYPE {#datatype}

DATATYPE は、登録データが [WGS](/ddbj/wgs.html), [TLS](/ddbj/tls.html),
[TPA](/ddbj/tpa.html), TPA-WGS の何れかに該当することを示します。

例: アノテーションファイル内の DATATYPE

| Entry  | Feature  | Location | Qualifier | Value |
|---|
| COMMON | DATATYPE |          | type      | WGS   |

#### DATATYPE の書式  {#DATATYPE_の書式}

  - Qualifier: type の Value に WGS, TLS, TPA, TPA-WGS の何れかを入力してください。
  - DATATYPE は [COMMON](#common) エントリに入力してください。

### KEYWORD  {#keyword}

KEYWORD には、[DIVISION](#division) と [DATATYPE](#datatype)
で示されたデータ種別を基本に、細分化した情報,
実験手法に関する情報などを、原則として、規定値で記載します。  
INSDC が合意した KEYWORD 名と規定値、並びに各 KEYWORD 名の定義につきましては、[INSDC agreed
methodological keywords](/ddbj/keyword.html)をご参照ください。

例: アノテーションファイル内の KEYWORD

| Entry | Feature                                | Location | Qualifier                              | Value                              |
|---|
|       | <span class="font-bold">KEYWORD</span> |          | <span class="font-bold">keyword</span> | <span class="font-bold">ENV</span> |

データ種別ごとの keyword の Value<span class="red">入力必須項目</span>

<table>
  <thead>
    <tr>
      <th>データ種別</th>
      <th>keyword の Value</th>
      <th>注意事項</th>
    </tr>
  </thead>
  <tbody>           
    <tr>
      <td><a href="/ddbj/wgs.html">WGS</a></td>
      <td><span class="red">WGS</span></td>
      <td>
      <a href="#wgs_con">WGS, scaffold CON の場合</a> もご参照ください。</td>
    </tr>
    <tr>
      <td><a href="/ddbj/env.html">ENV</a></td>
      <td><span class="red">ENV</span></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2"><a href="/ddbj/est.html">EST</a></td>
      <td><span class="red">EST</span></td>
      <td></td>
    </tr>
    <tr>
      <td>その他</td>
      <td>
      <a href="#est">EST の場合</a> 参照</td>
    </tr>
    <tr>
      <td><a href="/ddbj/htc.html">HTC</a></td>
      <td>
      <span class="red">HTC</span>, その他</td>
      <td>その他については、登録毎にご連絡いたします。</td>
    </tr>
    <tr>
      <td><a href="/ddbj/htg.html">HTG</a></td>
      <td>
      <span class="red">HTG</span>, <a href="#htg">その他</a>
      </td>
      <td>
      <a href="/documents/data-categories.html#est">phase</a> に依存、登録毎にご連絡いたします。</td>
    </tr>
    <tr>
      <td><a href="/ddbj/gss.html">GSS</a></td>
      <td><span class="red">GSS</span></td>
      <td></td>
    </tr>
    <tr>
      <td>STS</td>
      <td><span class="red">STS</span></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2"><a href="/ddbj/tpa.html">TPA</a></td>
      <td><span class="red">TPA, Third Party Data</span></td>
      <td></td>
    </tr>
    <tr>
      <td>
      <span class="red">TPA:inferential</span> or <span class="red">TPA:experimental</span>
      </td>
      <td>どちらか一方が必須</td>
    </tr>
    <tr>
      <td><a href="/ddbj/tsa.html">TSA</a></td>
      <td><span class="red">TSA, Transcriptome Shotgun Assembly</span></td>
      <td></td>
    </tr>
    <tr>
      <td><a href="/ddbj/tls.html">TLS</a></td>
      <td><span class="red">TLS, Targeted Locus Study</span></td>
      <td></td>
    </tr>
    <tr>
      <td>その他</td>
      <td></td>
      <td>登録毎にご連絡いたします。</td>
    </tr>
  </tbody>
</table>

#### KEYWORD の書式  {#KEYWORD_の書式}

  - Qualifier: keyword の Value に該当する規定値を入力してください。
  - 詳細な記載方法に関しましては、登録毎にご連絡いたします。

###### WGS, scaffold CON の場合 {#wgs_con}

  - WGS や WGS エントリを primary エントリに引用した scaffold 配列（CON
    エントリ）では、登録される塩基配列の完成度を示すため、次のいずれかを
    KEYWORD に記載してください。
    
      - STANDARD\_DRAFT
      - HIGH\_QUALITY\_DRAFT
      - IMPROVED\_HIGH\_QUALITY\_DRAFT
      - NON\_CONTIGUOUS\_FINISHED
    
    例: WGS draft genome（<span class="red">入力必須項目</span>）
        
    | Entry | Feature                          | Location | Qualifier                        | Value                                    |
    |---|
    |       | <span class="red">KEYWORD</span> |          | <span class="red">keyword</span> | <span class="red">WGS</span>             |
    |       |                                  |          | <span class="red">keyword</span> | <span class="red">STANDARD\_DRAFT</span> |
    
    ###### EST の場合<a name="est"></a>

  - EST では、EST に加えて、以下のいずれかを keyword に必ず記載してください。
    
      - 5' EST の場合 --- 5'-end sequence (5'-EST)
      - 3' EST の場合 --- 3'-end sequence (3'-EST)
      - 上記を特定できない場合 --- unspecified EST
    
    例: 5' EST（<span class="red">入力必須項目</span>）
        
    | Entry | Feature                          | Location | Qualifier                        | Value                                             |
    |---|
    |       | <span class="red">KEYWORD</span> |          | <span class="red">keyword</span> | <span class="red">EST</span>                      |
    |       |                                  |          | <span class="red">keyword</span> | <span class="red">5'-end sequence (5'-EST)</span> |
    
  - 3' EST では、登録される塩基配列が anti-sense 鎖側、sense 鎖側のどちらであるかを示すため、次のいずれかを
    [COMMENT](#comment) に記載してください。
    
    例: anti-sense 鎖の登録（<span class="red">入力必須項目</span>）
        
    | Entry | Feature                          | Location | Qualifier                     | Value                                                                         |
    |---|
    |       | <span class="red">COMMENT</span> |          | <span class="red">line</span> | <span class="red">3'-EST sequences are presented as anti-sense strand.</span> |
        
    例: sense 鎖の登録（<span class="red">入力必須項目</span>）
        
    | Entry | Feature                          | Location | Qualifier                     | Value                                                                    |
    |---|
    |       | <span class="red">COMMENT</span> |          | <span class="red">line</span> | <span class="red">3'-EST sequences are presented as sense strand.</span> |
    
###### HTG の場合 {#htg}

  - HTG では、その配列決定の段階を示す keyword の記載を推奨しています。

    例I: 向きが不明な piece を含む場合（<span class="red">入力必須項目</span>）

    |  Entry  |  Feature  |  Location  |  Qualifier  |  Value  |
    |---|
    |    |  <span class="red">KEYWORD</span>  |    |  <span class="red">keyword</span>  |  <span class="red">HTG</span>  |
    |    |    |    |  <span class="red">keywrod</span>  |  <span class="red">HTGS_PHASE1</span>  |
    |    |    |    |  <span class="red">keyword</span>  |  <span class="red">HTGS_DRAFT</span>   |

    例 II: 向きが不明な piece が含まない場合（<span class="red">入力必須項目</span>）

    |  Entry  |  Feature  |  Location  |  Qualifier  |  Value  |
    |---|
    |    |  <span class="red">KEYWORD</span>  |    |  <span class="red">keyword</span>   |  <span class="red">HTG</span>  |
    |    |    |    |  <span class="red">keyword</span>  |  <span class="red">HTGS_DRAFT</span>  |

### DBLINK  {#dblink}

DBLINK は、 BioProject ID、BioSample ID、Sequence Read Archive (DRA/ERA/SRA) 他, 特定データベースへのリンクを記載します。

例: アノテーションファイル内の DBLINK（<span class="red">入力必須項目</span>）

| Entry | Feature                         | Location | Qualifier                                      | Value                                 |
|---|
|       | <span class="red">DBLINK</span> |          | <span class="red">project</span>               | <span class="red">PRJDB12345</span>   |
|       |                                 |          | <span class="red">biosample</span>             | <span class="red">SAMD90000000</span> |
|       |                                 |          | <span class="red">sequence read archive</span> | <span class="red">DRR999000</span>    |
|       |                                 |          | <span class="red">sequence read archive</span> | <span class="red">DRR999001</span>    |

#### DBLINK の書式 {#DBLINK_の書式}

  - 登録データが BioProject Database、BioSample Database に登録されている場合は、Qualifier:
    project の Value に BioProject ID、Qualifier: biosample の Value に
    BioSample ID を記載してください。
  - 登録データが次世代シーケンサ由来のアセンブルで、raw reads が Sequence Read Archive
    に登録されている場合、Qualifier: sequence read archive の
    Value に対応する [Run データのアクセッション番号](/documents/prefix.html#dra)を入力してください。
  - [BioProject Database](/bioproject/index.html), [BioSample
    Database](/biosample/index.html), [Sequence Read
    Archive](/dra/index.html) もご参照ください。

### locus\_tag  {#locus_tag}

アノテーションが付加された全ゲノム規模の登録に関しましては、タンパク質産物
([CDS](/ddbj/cds.html))、あるいは、転写産物(rRNA, tRNA など)を示す
[Biological feature](#biological_feature) に
[locus\_tag](/ddbj/locus_tag.html) を付加することを推奨しています。  
locus\_tag prefix は事前に [BioProject Database](/bioproject/index.html) で
BioProject ID を申請する際に取得して下さい。

### source: ff\_definition  {#source}

ff\_definition は、The DDBJ/EMBL/GenBank Feature Table: Definition
には定義されていない DDBJ 登録専用 Qualifier
です。必要な場合にのみ、１エントリに１つ記載します。

例: アノテーションファイル内の ff\_definition

| Entry | Feature | Location | Qualifier      | Value                                                                                           |
|---|
|       | source  | 1..516   | organism       | Mus musculus                                                                                    |
|       |         |          | mol\_type      | mRNA                                                                                            |
|       |         |          | ff\_definition | **@@\[organism\]@@** mRNA, clone: **@@\[clone\]@@** |
|       |         |          | clone          | PC0110                                                                                          |

ff\_definition 記述フォーマット

<table>
  <thead>
    <tr>
      <th>データ種別</th>
      <th>ff_definition記述フォーマット</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/ddbj/wgs.html">WGS</a></td>
      <td>@@[organism]@@ @@[strain]@@ DNA, @@[submitter_seqid]@@, [other information]</td>
    </tr>
    <tr>
      <td>BAC/YAC genomic clones in unfinished phase (<a href="/ddbj/htg.html">HTG</a>)</td>
      <td>@@[organism]@@ DNA, chromosome @@[map]@@, [BAC/YAC] clone: @@[clone]@@, *** SEQUENCING IN PROGRESS ***</td>
    </tr>
    <tr>
      <td>BAC/YAC genomic clones in finished phase</td>
      <td>@@[organism]@@ DNA, chromosome @@[map]@@, [BAC/YAC] clone: @@[clone]@@</td>
    </tr>
    <tr>
      <td><a href="/ddbj/est.html">EST</a></td>
      <td>@@[organism]@@ mRNA, clone: @@[clone]@@, [other information]</td>
    </tr>
    <tr>
      <td><a href="/ddbj/est.html">EST</a></td>
      <td>@@[organism]@@ cDNA, clone: @@[clone]@@, [other information]</td>
    </tr>
    <tr>
      <td><a href="/ddbj/gss.html">GSS</a></td>
      <td>@@[organism]@@ DNA, clone: @@[clone]@@, [other information]</td>
    </tr>
    <tr>
      <td>STS</td>
      <td>@@[organism]@@ DNA, @@[map]@@, [marker name], sequence tagged site</td>
    </tr>
    <tr>
      <td>その他</td>
      <td>登録毎にご連絡いたします。</td>
    </tr>
  </tbody>
</table>

#### source: ff\_definition の書式  {#source__ff_definition_の書式}

  - [Biological feature](#biological_feature) である source に Qualifier:
    ff\_definition を入力します。
  - ff\_definition の記載内容は、DDBJ [フラットファイル](/ddbj/flat-file.html) において
    DEFINITION 行に反映されます。詳細は[サンプルとフラットファイルとの対応](#sample) をご参照ください。
  - ff\_definition の Value には、通常、同じ source feature 内にある他の Qualifier から
    Value を引用することが多いため、引用のためのメタ表記を用意しております。例に示したように
    **@@\[organism\]@@**,
    **@@\[clone\]@@** の形式で、Value を引用する Qualifier
    の名称を **@@\[** と
    **\]@@** で括り記載しておきますと、DEFINITION 行に反映する際に対象
    Value に置換されます。
  - 上記表に示した記述フォーマットを基本としますが、ff\_definition の詳細な記載方法に関しましては、登録毎にご連絡いたします。

### assembly\_gap: Sequencing Gap Region  {#assembly_gap}

[HTG](/ddbj/htg.html) に代表される大規模ゲノム配列やESTアセンブルによるトランスクリプトーム
([TSA](/ddbj/tsa.html)) 配列の登録などにおいて、アセンブル途上、難読領域であるなどの理由により生じる
sequencing gap を示すために配列ファイルでは、配列中に 'n' を記載します。このとき、アノテーションファイルでは、その
sequencing gap 領域を下記の要領で、assembly\_gap feature を用いて示す必要があります。

例: アノテーションファイル内の assembly\_gap（<span class="red">入力必須項目</span>）

| Entry | Feature       | Location | Qualifier         | Value                                    |
|---|
|       | assembly\_gap | 101..200 | estimated\_length | <span class="red">unknown</span>         |
|       |               |          | gap\_type         | <span class="red">within scaffold</span> |
|       |               |          | linkage\_evidence | <span class="red">paired-ends</span>     |

#### assembly\_gap: Sequencing Gap Region の書式  {#assembly_gap__Sequencing_Gap_Region_の書式}

  - assembly\_gap feature は Biological feature の１つですが、特殊な書式になります。
  - assembly\_gap では、location に join, order, complement を使用することはできません。

###### 長さが不明の場合

長さが判明していないギャップ領域については、登録者によって指定された一律の長さ (1000 bp未満のreasonableな長さ) の 'n'
で記述する規則となっております。  
また、Qualifier: estimated\_length で Value に unknown と記載します。  
但し、CON divisionではない transcriptome エントリ (TSA division など) には、Value に
unknown を記載することができません。

###### 長さが予測されている場合

長さが判明しているギャップ領域については、配列の相当位置に推定される長さの 'n' で記述する規則となっております。 また、Qualifier:
estimated\_length で Value に known と記載します。

### TOPOLOGY  {#topology}

TOPOLOGY は登録塩基配列全体の形状が環状で、最初の塩基と最後の塩基が実際には連続している場合に記載する必要があります。  
例：環状ウイルスゲノムの全長など

例: アノテーションファイル内の TOPOLOGY

| Entry | Feature  | Location | Qualifier | Value |
|---|
|       | TOPOLOGY |          | circular  |       |

#### TOPOLOGY の書式  {#TOPOLOGY_の書式}

  - DDBJ [フラットファイル](/ddbj/flat-file.html)では、topology は [LOCUS 行](/ddbj/flat-file.html#Locus)に反映されます。詳細は[アノテーションファイルのサンプル](#sample)を参照してください。

### TPA/TSA: PRIMARY\_CONTIG プライマリーエントリ引用 {#primary_contig}

PRIMARY\_CONTIG, entry, および primary\_bases
は、プライマリーエントリからの配列引用情報を記載するために設けられた
TPA/TSA データ登録専用の Feature, Qualifier です。

例: アノテーションファイル内の PRIMARY\_CONTIG

| Entry | Feature         | Location  | Qualifier      | Value      |
|---|
|       | PRIMARY\_CONTIG | 1..438    | entry          | ZZ000010.1 |
|       |                 |           | primary\_bases | 1..438     |
|       | PRIMARY\_CONTIG | 377..696  | entry          | ZZ000011.1 |
|       |                 |           | primary\_bases | 1..320     |
|       |                 |           | complement     |            |
|       | PRIMARY\_CONTIG | 590..1191 | entry          | ZZ000022.0 |
|       |                 |           | primary\_bases | 1..601     |

PRIMARY\_CONTIG feature で使用可能な qualifier

<table>
  <thead>
    <tr>
      <th>Qualifier</th>
      <th>Value 記述時の注意事項</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>entry</td>
      <td>引用するエントリのアクセッション番号を(バージョン番号とともに)入力する</td>
    </tr>
  <tr>
    <td>primary_bases</td>
    <td>引用したプライマリーシークエンスの位置情報<br/>各配列の領域を入力する 例) 1..500</td>
  </tr>
    <tr>
      <td>complement</td>
      <td>引用するエントリが相補鎖である場合に入力が必要</td>
    </tr>
  </tbody>
</table>

#### TPA/TSA: PRIMARY\_CONTIG プライマリーエントリ引用 の書式  {#TPA_TSA__PRIMARY_CONTIG_プライマリーエントリ引用_の書式}

- [DATATYPE/type](#datatype) で TPA、もしくは [DIVISION/division](#division) で TSA を指定しておく必要があります。

- PRIMARY\_CONTIG には、引用後の結果として配列(TPA/TSA)上の位置情報、および、引用したプライマリーシークエンスの(バージョンの付いた)アクセッション番号とその位置情報を必ず入力していただきます。

- Location に join, order, complement を使用することはできません。同じ entry を引用する場合も location 単位で PRIMARY\_CONTIG を複数記述してください。

- プライマリーシークエンスが DDBJ/EMBL-Bank/GenBank に登録されている場合は、バージョンの付いたアクセッション番号を記載します。引用したアクセッション番号のデータが、TPA/TSA データ登録時点では、まだ公開されていない場合は、バージョン番号は、0 \[zero\]と入力してください。

- 詳細は[サンプルとフラットファイルとの対応](#sample)を参照してください。

  - TPA (Third Party Data)： [サンプル](#TPA)
  - TSA (Transcriptome Shotgun Assembly)： [サンプル](#TSA)
  - TSA; assembled from short reads： [サンプル](#TSA_SRA_assemble_Ann)

## サンプルアノテーション {#sample}

<table>
  <tbody>
    <tr>
      <td rowspan="6">一般データ</td>
      <td>タンパク質コード領域</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=505600445">CDS</a></td>
    </tr>
    <tr>
      <td>リボソーマル RNA</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=1380986730">16S_rRNA</a></td>
    </tr>
    <tr>
      <td>ITS 領域 (Internal Transcribed Spacer)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=162924670">ITS</a></td>
    </tr>
    <tr>
      <td>マイクロサテライトマーカー</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=282901241">Microsatellite marker</a></td>
    </tr>
    <tr>
      <td>ミトコンドリア</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=545461927">mtDNA</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/env.html">ENV</a> (環境サンプル)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=585575811">ENV</a></td>
    </tr>
    <tr>
      <td rowspan="8">ゲノムデータ関連</td>
      <td><a href="/ddbj/genome.html">complete genome sequence (Bacteria)</a></td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=862924679">complete_genome_BCT</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/wgs.html">WGS</a> (Whole Genome Shotgun) without annotation</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=382116224">WGS</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/wgs.html">WGS</a> (Whole Genome Shotgun) with annotation</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1134992157">WGS_annotation</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/wgs.html">WGS</a>; piece of scaffold CON</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=595699065">WGS_piece_CON</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/con.html">CON</a> entries for WGS scaffold</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1885054586">WGS_scaffold</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/metagenome-assembly.html">MAGs</a> (Metagenome-Assembled Genomes, MAGs) for Complete genome</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=11301438">MAGs_CompleteGenome</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/metagenome-assembly.html">MAGs</a> (Metagenome-Assembled Genomes, MAGs) for Draft genome</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1453206143">MAGs_WGS</a></td>
    </tr>
    <tr>
      <td>AGP file for <a href="/ddbj/con.html">CON</a> entries</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1672995780">AGP</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/gss.html">GSS</a> (Genome Survey Sequences)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=460036592">GSS</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/htg.html">HTG</a> (High Throughput Genomic Sequences)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=199977055">HTG</a></td>
    </tr>
    <tr id="TSA">
      <td rowspan="4">大量転写物配列関連</td>
      <td><a href="/ddbj/tsa.html">TSA</a> (Transcriptome Shotgun Assembly); assembled from EST</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=2130672006">TSA</a></td>
    </tr>
    <tr id="TSA_SRA_assemble_NoANN">
      <td><a href="/ddbj/tsa.html">TSA</a>; assembled from short reads without annotation</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=931177555">TSA_SRA_assemble_NoANN</a></td>
    </tr>
    <tr id="TSA_SRA_assemble_Ann">
      <td><a href="/ddbj/tsa.html">TSA</a>; assembled from short reads with annotation</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1607251813">TSA_SRA_assemble_Ann</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/est.html">EST</a> (Expressed Sequence Tags)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1753678626">EST</a></td>
    </tr>
    <tr>
      <td>TLS (Targeted Locus Study)</td>
      <td><a href="/ddbj/tls.html">TLS (Targeted Locus Study)</a></td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=580470761">TLS</a></td>
    </tr>
    <tr>
      <td rowspan="3"><a href="/ddbj/tpa.html">TPA</a> (Third Party Data)</td>
      <td><a href="/ddbj/tpa.html">TPA</a> (Third Party Data)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=123381270">TPA</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/tpa.html">TPA</a> assembly (Third Party Data)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=80322930">TPA-assembly_WGS</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/tpa.html">TPA</a> assembly (Third Party Data)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1394019205">TPA-assembly</a></td>
    </tr>
    <tr id="ann2-ff">
      <td>アノテーション:フラットファイル</td>
      <td>タンパク質コード領域</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=961825804">ann2-ff</a></td>
    </tr>
  </tbody>
</table>

## AGP ファイル {#agp}

AGP ファイルは [CON](/ddbj/con.html) エントリの登録に必要です。 AGP ファイルは CON エントリを構築する際のピースエントリの順序、種類、方向等が記載された、9列からなるタブ区切りテキストファイルです。
スクリプト、(MS Excel などの) 表計算ソフト、テキストエディタ等で作成が可能です。

AGP ファイルの書式は、UCSC, EBI および NCBI により開発されました。

例： AGP ファイル

| \#1       | 2    | 3    | 4 | 5 | 6              | 7        | 8    | 9            |
|---|
| scaffold1 | 1    | 1345 | 1 | W | BZZZ01123456.1 | 1        | 1345 | \+           |
| scaffold1 | 1346 | 2845 | 2 | N | 1500           | scaffold | yes  | align\_genus |
| scaffold1 | 2846 | 4301 | 3 | W | BZZZ01123457.1 | 1        | 1456 | \+           |
| scaffold1 | 4302 | 4401 | 4 | U | 100            | scaffold | yes  | align\_genus |
| scaffold1 | 4402 | 5631 | 5 | W | BZZZ01123458.1 | 1        | 1230 | \-           |
| scaffold2 | 1    | 650  | 1 | W | BZZZ01123486.1 | 1        | 1345 | \+           |
| scaffold2 | 651  | 750  | 2 | N | 100            | scaffold | yes  | align\_genus |
| scaffold2 | 751  | 2980 | 3 | W | BZZZ01123488.1 | 1        | 1230 | \-           |

### 書式と構文  {#agp_format}

AGPファイルは、[UME](/ddbj/ume.html) (Utilities for MSS Error
check)でチェックすることが可能です。

  - AGP ファイルは 9 カラムで構成されています。
  - タブ区切りテキスト形式で作成してください。
  - 途中にスペース、空行が入らないようにしてください。
  - \# で始まる行はコメント扱いとなります。データには反映されません。ファイルの先頭に記載してください。

各カラムにおける記述内容（カラム 1 - カラム 5）

<table>
  <thead>
    <tr>
      <th>カラム</th>
      <th>内容</th>
      <th colspan="2">入力項目・注意事項</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>object</td>
      <td colspan="2">CONエントリ名<br>(chromosome, scaffold, contig 等に対する固有の名称)<br>アノテーションファイルのエントリ名と対応するエントリ名を入力する</td>
    </tr>
    <tr>
      <td>2</td>
      <td>object_beg</td>
      <td colspan="2">CON エントリにおける component/gap の開始位置</td>
    </tr>
    <tr>
      <td>3</td>
      <td>object_end</td>
      <td colspan="2">CON エントリにおける component/gap の終了位置</td>
    </tr>
    <tr>
      <td>4</td>
      <td>part_number</td>
      <td colspan="2">CON エントリを構成する component/gap の順序</td>
    </tr>
    <tr>
      <td class="borderbtm" rowspan="10">5</td>
      <td class="borderbtm" rowspan="10">component_type</td>
      <td colspan="2">component の種類を示す規定値: A, D, F, G, O, P, W, N, U のいずれか</td>
    </tr>
    <tr>
      <td>A</td>
      <td>Active Finishing; finishing に向けて更新され得る段階</td>
    </tr>
    <tr>
      <td>D</td>
      <td>Draft HTG; HTG phase1, phase2, あるいは不明な draft 段階<br>つまり finished レベルに達していない HTG</td>
    </tr>
    <tr>
      <td>F</td>
      <td>Finished HTG; phase3, finished レベルの HTG</td>
    </tr>
    <tr>
      <td>G</td>
      <td>Whole Genome Finishing</td>
    </tr>
    <tr>
      <td>O</td>
      <td>Other sequence; WGS, HTG に該当しないもの</td>
    </tr>
    <tr>
      <td>P</td>
      <td>Pre Draft</td>
    </tr>
    <tr>
      <td>W</td>
      <td>WGS contig; ピースエントリが WGS エントリである場合</td>
    </tr>
    <tr>
      <td>N</td>
      <td>サイズが特定・予測されている gap</td>
    </tr>
    <tr>
      <td>U</td>
      <td>サイズ不明の gap、100 塩基とすること</td>
    </tr>
  </tbody>
</table>
\* component: より大きな配列を構築するために使用される配列 (ピースエントリ)
{: .tablecaption}

<span class="icon_d-triangle">6 以降のカラムは、カラム 5 の value に依存して記述内容が異なります。</span>

各カラムにおける記述内容（カラム 6 - カラム 9）：カラム 5 が "N"と"U"以外の場合

<table>
  <thead>
    <tr>
      <th>カラム</th>
      <th>内容</th>
      <th colspan="2">入力項目・注意事項</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6</td>
      <td>component_id</td>
      <td colspan="2">component のアクセッション番号とバージョン番号、<br>あるいは component のエントリ名</td>
    </tr>
    <tr>
      <td>7</td>
      <td>component_beg</td>
      <td colspan="2">component の開始位置</td>
    </tr>
    <tr>
      <td>8</td>
      <td>component_end</td>
      <td colspan="2">component の終了位置</td>
    </tr>
    <tr>
      <td class="borderbtm" rowspan="7">9</td>
      <td class="borderbtm" rowspan="7">orientation</td>
      <td colspan="2">component の相対的な配列の方向。規定値は下記：</td>
    </tr>
    <tr>
      <td>+</td>
      <td>プラス、順鎖</td>
    </tr>
    <tr>
      <td>-</td>
      <td>マイナス、相補鎖</td>
    </tr>
    <tr>
      <td>?</td>
      <td>不明</td>
    </tr>
    <tr>
      <td>0</td>
      <td>ゼロ、不明 (deprecated)</td>
    </tr>
    <tr>
      <td>na</td>
      <td>irrelevant</td>
    </tr>
    <tr>
      <td colspan="2">ただし、"?"、"0"、"na" も順鎖と扱う。</td>
    </tr>
  </tbody>
</table>
\* component: より大きな配列を構築するために使用される配列 (ピースエントリ)
{: .tablecaption}

  - 長さが判明していないギャップ領域については、一律 100 個の n で記述する規則となっています。 component\_type の
    value に"U"、gap\_length の value に "100" と記載します。

  - カラム 5 が "N"あるいは"U"の場合、連続性の情報は gap\_type および linkage の組み合わせで与えられます。
    以下の表を参考にしてください。
    
    例: アノテーションファイル内の COMMENT と ST\_COMMENT

<table>
  <thead>
    <tr>
      <th>gap_type</th>
      <th>linkage</th>
      <th>解説・注意事項</th>
    </tr>
  </thead>
  <tbody>
    <tr><td colspan="3">scaffold 内の gap: gap 前後の配列が１つの scaffold に収まる場合、連鎖している</td></tr>
    <tr>
      <td>scaffold</td>
      <td>yes</td>
      <td>scaffold を分けずに記載すること<br>gap 前後の配列が連鎖する証拠があることを示す</td>
    </tr>
    <tr>
      <td>repeat</td>
      <td>yes</td>
      <td>scaffold を分けずに記載すること<br>gap に未解消の繰り返し単位が存在し、前後の配列が連鎖する証拠がある場合は 'yes' とする</td>
    </tr>
    <tr><td colspan="3">scaffold を分ける gap: gap 前後の配列が分かれた scaffold に それぞれ位置し、連鎖するか否か不明</td></tr>
    <tr>
      <td>contig</td>
      <td>no</td>
      <td>scaffold を分けて記載すること<br>gap 前後の配列が連鎖する証拠がなく、連鎖するか否か不明</td>
    </tr>
    <tr>
      <td>repeat</td>
      <td>no</td>
      <td>scaffold を分けて記載すること<br>gap に未解消の繰り返し単位が存在し、前後の配列が連鎖する証拠がない場合は 'no' とする</td>
    </tr>
    <tr>
      <td>centromere<br>short_arm<br>heterochromatin<br>telomer</td>
      <td>no</td>
      <td>scaffold を分けて記載すること<br>これら生物学的 gap は chromosome に沿った scaffold の間に配置すること</td>
    </tr>
    <tr><td colspan="3">使用禁止となる gap type と linkage の組み合わせ</td></tr>
    <tr>
      <td>contig</td>
      <td>yes</td>
      <td>この組み合わせは使用禁止<br>もし、gap 前後の配列が連鎖する証拠があるならば、gap type は contig ではなく scaffold とすべきである</td>
    </tr>
    <tr>
      <td>scaffold</td>
      <td>no</td>
      <td>この組み合わせは使用禁止<br>もし、gap 前後の配列が連鎖する証拠がないならば、gap type は scaffold ではなく contig とすべきである</td>
    </tr>
    <tr>
      <td>centromere<br>short_arm<br>heterochromatin<br>telomere</td>
      <td>yes</td>
      <td>この組み合わせは使用禁止<br>これら生物学的 gap は scaffold 内では使用しないこと</td>
    </tr>
  </tbody>
</table>
