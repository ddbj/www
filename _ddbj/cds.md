---
layout: tabbed_indexed_content
title: タンパク質コード配列 CDS feature について
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: flat_file
lang: ja
related_pages:
  - title: DDBJ 公開形式 (Flat file)
    url: /ddbj/flat-file.html
  - title: Feature key
    url: /ddbj/features.html
  - title: Qualifier key
    url: /ddbj/qualifiers.html
  - title: Organism qualifier に記載する生物名
    url: /ddbj/organism.html
  - title: Location の記述法
    url: /ddbj/location.html
  - title: The Genetic Codes
    url: /ddbj/geneticcode.html
  - title: 配列の記載に用いる略号
    url: /ddbj/code.html
  - title: 配列データ記載例
    url: /ddbj/example.html
---


## 概要  {#outline}

feature key の中でも、タンパク質のコーディング領域を記述する CDS はデータベース中に多数、記載されています。  
CDS feature の location はアミノ酸翻訳の対象となる塩基配列を開始コドンから終止コドンまでの位置を基本に示します。CDS には、その位置情報、/[codon\_start](/ddbj/qualifiers.html#codon_start)、由来生物のコドン表 (/[transl\_table](/ddbj/qualifiers.html#transl_table) に記載されます)、な びに /[transl\_except](/ddbj/qualifiers.html#transl_except) の記述に基づいて、アミノ酸翻訳を行ない、[translation](/ddbj/qualifiers.html#translation) を付加します (ただし、[pseudo](/ddbj/qualifiers.html#pseudo)、または、[pseudogene]( /ddbj/qualifiers.html#pseudogene) の指定がある場合にはアミノ酸翻訳は行いません)。

登録者からの報告に基づいて、対応するタンパク質の名称や機能が CDS 下位の適切な qualifier (/[product](/ddbj/qualifiers.html#product)、/[function](/ddbj/qualifiers.html#function)、etc.)に記入されます。また、これらの情報が実験的に確認されたもの あるときには [experiment](/ddbj/qualifiers.html#experiment)、配列の類似性検索等で類推さ たものであるときには [inference](/ddbj/qualifiers.html#inference) という qualifier を用いて注釈されることがあります。

なお、INSDCは、類似性や相同性の判定基準を定めておりませんので、類似タンパク質であるとの判断は、すべて登録者の判断に基づきます。  
また、タンパク質のモチーフ、２次構造以上の構造に関する情報は、原則としてフラットファイルには記載されないことになっています。


　


## DDBJの遺伝子命名に関する考え方  {#product}

DDBJ は遺伝子命名に関する権限などは持っていません。また、特定の遺伝子命名管理団体との公 な協調も行っておりません。特に問題がない限り、登録者の意向に基づいて記述しています。

CDS feature では、/[product](/ddbj/qualifiers.html#product) qualifier に産物に相当するタンパク質名と、/[gene](/ddbj/qualifiers.html#gene) qualifier に由来する locus を示す象徴的な略号を記載することを基本とします。  
特に相同性検索などによる結果の総括として product の内容が採用される可能性が高いため、 product には、理解が容易な記載を推奨しております。

拘束力はありませんが、DDBJ では記載指針を、下記のように心がけております。

  - 登録者に研究上の主張がある場合は、これに従う。
  - 上記に矛盾しないならば、参照データベースの既存記載に合わせるようにする。
  - /gene は locus 単位に割り当てるようにする。
  - /product は個々のタンパク質産物を指すようにする。

配列利用者の利便性を考える上での対応として、/gene、/product の表記方法、ガイドラインを下記のように提示しています。

/[gene](/ddbj/qualifiers.html#gene): 遺伝子を指す象徴的な略号  
: 例: ilvE
: 入力時のご注意：
  - 遺伝子シンボルとしての略号を記載して下さい。
  - 一般に通用する複数の略号がある場合でも複数の略号を記載しないで下さい。<br>また、そのために不必要に区切り記号を使用しないで下さい。略号の複数記載を希望される場合は、代表的な略号を gene に記載し、その他の略号を [gene\_synonym](/ddbj/qualifiers.html#gene_synonym) に記載して下さい。

/[product](/ddbj/qualifiers.html#product): タンパク質産物を指す一般名  
: 例: trypsinogen
: 入力時のご注意：
  - 生物名を含めないで下さい。
  - 原則、略号の類ではない一般名を記載して下さい。
  - 一般名が複数ある場合でも、複数の名称を記載しないで下さい。また、そのために不必要な区切り記号を使用しないで下さい。  
    一般名の複数記載を希望される場合は、代表的な名称を product に、その他の名称を
    [note](/ddbj/qualifiers.html#note) に記載して下さい。
  - 機能、名称等が不明なタンパク質の場合は、hypothetical protein と記載することを推奨します。
  - [the international protein nomenclature guidelines](https://www.ncbi.nlm.nih.gov/genome/doc/internatprot_nomenguide/) に準拠することを推奨します。
: 強制力はありませんし、これに合致しない命名法を採択する生物種も多く、酵素名などの記載原則とは一部、矛盾します。しかし、それは承知の上で、どのように命名すれば良いかわからない、という登録者の方々への指針、閲覧利用者がその特徴を理解する際の一助として提示しております。
: なお、登録完了後でも、記載の修正は随時受付けておりますので、[登録データの修正・更新](/ddbj/update.html)をご参照の上、お知らせ下さい。

## 途中に出現する終止コドンへの対応  {#stop}

CDS と考えていた領域の途中に終止コドンが存在していた場合は、まず、以下の情報が正しく指定されているか否かをご確認ください。

  - CDS feature の Location （参照：[Location の記述法](/ddbj/location.html)）
  - /[transl\_table](/ddbj/qualifiers.html#transl_table) で示される遺伝暗号表の番号（参照：[The Genetic
    Codes](/ddbj/geneticcode.html)）
  - /[codon\_start](/ddbj/qualifiers.html#codon_start) の記述（参照：[codon\_start による翻訳開始の位置補正](#frame)）

以上が正しく指定されていても、終止コドンが存在する場合は、その理由により対処法を選択します。下記の指針に従ってください。

  - [a) nonsense mutation、frameshift などと推定されるが理由不明、または、IgG などの獲得免疫関連で多様性が生じる過程の場合](#stop_a)
  - [b) pseudogene と見做される場合](#stop_b)
  - [c) 生体内に末端を欠失したタンパク質産物が存在すると推定される場合](#stop_c)
  - [d) ribosomal slippage](#stop_d)
  - [e) RNA editing](#stop_e)
  - [f) selenocystein、あるいは、pyrrolysine に翻訳される場合](#stop_f)
  - [g) transposon insertion により遺伝子が壊されている場合など](#stop_g)
  - [h) ゲノム、transcriptome プロジェクト由来 draft 配列で塩基配列が正確ではないことによる場合](#stop_h)

<!-- end list -->

a) nonsense mutation、frameshift などと推定されるが理由不明、または、IgG などの獲得免疫関連で多様性が生じる過程の場合<a name="stop_a"></a>
: <span class="red">塩基配列決定の精度が低いことによる場合も、原則、このカテゴリーになります。</span> 
: CDS ではなく [misc\_feature](/ddbj/features.html#misc_feature) を用いて記載します。<br>このとき、タンパク質が存在は明確ではありませんので、[translation](/ddbj/qualifiers.html#translation) qualifier とアミノ酸配列は示されません。<br> 原則、[inference](/ddbj/qualifiers.html#inference) qualifier にタンパク質の存在を推定した根拠の記載をお願いします。<br>[note](/ddbj/qualifiers.html#note) qualifier に "putative frameshift mutation"、"Ig rearrangement"、または、"TCR beta rearrangement" など簡潔な理由の記載もお願いします。

b) pseudogene と見做される場合<a name="stop_b"></a>  
: <span class="red">近縁他種の orthologue、paralogue などとの系統関係、転写されていないことなど、傍証確認が済んでいない段階では、pseudogene と記載することは推奨できません。</span>
: 想定される CDS location を示し、/[pseudogene](/ddbj/qualifiers.html#pseudogene) qualifier を付加します。<br>この場合、生体内に対応するタンパク質は存在しないことになりますので、[translation](/ddbj/qualifiers.html#translation) qualifier とアミノ酸配列は示されません。
  - 原則、/[inference](/ddbj/qualifiers.html#inference) qualifier に参照したデータの記載をお願いします。
  - /[note](/ddbj/qualifiers.html#note) qualifier に "pseudogene of [protein name]" などの記載もお願いします。
  - /[pseudogene](/ddbj/qualifiers.html#pseudogene) qualifier の規定値に関しましては、[Controlled vocabulary for /pseudogene qualifier](https://www.insdc.org/submitting-standards/pseudogene-qualifier-vocabulary/) で解説されています。
  - この CDS feature に相当するタンパク質産物は存在しないことになりますので、/[product](/ddbj/qualifiers.html#product) qualifier は、原則、記載しないでください。
: [配列データ記載例 B06](/ddbj/example.html#B06) もご参照ください。

c) 生体内に末端を欠失したタンパク質産物が存在すると推定される場合<a name="stop_c"></a>  
: 想定される truncated なタンパク質産物の location を CDS feature で指定します。<br>したがって、location は短いものとなります。

d) ribosomal slippage<a name="stop_d"></a>  
: ribosomal slippage の起こる箇所で、"join" を用いて CDS location の補正を行います。
: 例: + 1 frameshift が90番目の塩基で起こる
  ``` 
        CDS             join(21..90,90..449)
  ```
: 例: - 1 frameshift が91番目の塩基で起こる
  ``` 
        CDS             join(21..90,92..451)
  ```
: /[ribosomal\_slippage](/ddbj/qualifiers.html#ribosomal_slippage) qualifier を付加します。<br>このとき、/[translation](/ddbj/qualifiers.html#translation) qualifier で示す翻訳アミノ酸配列は conceptual translation になります。
: [配列データ記載例 B10](/ddbj/example.html#B10) もご参照ください。<br>塩基配列登録システム では、"Submission Information" boxに、詳細な説明をお願いします。

e) RNA editing<a name="stop_e"></a>  
: <span class="red">ゲノムに対して記載することが基本となります。</span>
: 想定される CDS location を示し、/[exception](/ddbj/qualifiers.html#exception) qualifier を付加します。<br>このとき、/[translation](/ddbj/qualifiers.html#translation) qualifier で示す翻訳アミノ酸配列は conceptual translation ではなく、transcript の配列、近縁種などの事例から確認、または、推定された記載を採用します。<br>原則、[inference](/ddbj/qualifiers.html#inference) qualifier に推定した根拠の記載をお願いします。
: [配列データ記載例 B09](/ddbj/example.html#B09) もご参照ください。
: 塩基配列登録システム では、"Submission Information" boxに、詳細な説明をお願いします。

f) selenocystein、あるいは、pyrrolysine に翻訳される場合<a name="stop_f"></a>
: 想定される CDS location を示し、/[transl\_except](/ddbj/qualifiers.html#transl_except) を付加します。<br>その記載に基づき、終止コドンと扱わずにアミノ酸翻訳します。
: 例;

  |  /transl_except=(pos:213..215,aa:Sec)  |  #  "U" (selenocystein の１文字表記) にアミノ酸翻訳されます。  |
  |  /transl_except=(pos:213..215,aa:Pyl)  |  # "O" (pyrrolysine の１文字表記) にアミノ酸翻訳されます。  |

g) transposon insertion により遺伝子が壊されている場合など<a name="stop_g"></a>  
: CDS ではなく [misc\_feature](/ddbj/features.html#misc_feature) を用いて記載します。

h) ゲノム、transcriptome プロジェクト由来 draft 配列で塩基配列が正確ではないことによる場合<a name="stop_h"></a>  
: frameshift の起こる箇所を避けるように、"join" を用いて CDS location の操作的な補正を行い、強引にアミノ酸翻訳を成立させます。<br>その上で、その操作のフラグとして、[artificial\_location](/ddbj/qualifiers.html#artificial_location) を付加します。
: <span class="red">塩基配列登録システム では記載を禁止しています。大規模配列解析専用の措置になります。</span>

## Location の join 記載  {#join}

location 記載に関しましては、他の feature と共通になります。詳しくは [Location
の記述法](/ddbj/location.html)をご参照ください。

原核生物のゲノム、または、成熟した mRNA においては、通常、CDS feature は１つのつながりで表記されますので "join" を用いた記載は行いません。

CDS feature の location に join を用いて記載する場合、mRNA が成熟する過程でゲノム配列上に示された exon が相互にどのように結合されたかを示すことが前提になります。 基本的には、splicing を示す目的以外では、join を用いた location 記載は受け付けません。

ただし、以下の３つの例外があります。

  - 環状ゲノムにおいて配列の始点と終点が結合することを示す
  - ウイルスなどの翻訳過程で [ribosomal slippage](/ddbj/qualifiers.html#ribosomal_slippage) が起こることを示す
  - ゲノム、transcriptome の draft 配列に対し、CDS location を操作的に補正したことを [artificial\_location qualifier](/ddbj/qualifiers.html#artificial_location) で示す

## translation qualifier に記載される翻訳アミノ酸配列の説明  {#translation}

[DDBJ のデータ公開形式 (flat file) の説明](/ddbj/flat-file.html)で示される DDBJ フォーマットの例においては、以下の情報の組み合わせにより、翻訳アミノ酸配列が塩基配列に基づいて生成され、 [translation qualifer](/ddbj/qualifiers.html#translation) に記載されています。

例

``` 
     CDS             86..>450
                     /codon_start=1
                     /transl_table=1
```

|   <code>CDS   86.. &gt;450</code>   |  配列の86番目から450番目までが、以下の qualifier で記述されたタンパク質をコードする領域であることを示します。<br/>"&gt;" は、この CDS feature の 3' 末端側が終端ではないことを示します。<br/>詳しい Location の記述ルールについては、[Location の記述法](/ddbj/location.html)を参照して下さい。  |
|  <code>/codon_start=1</code>  |  コドンの読み枠の開始位置が上記の location で指定される１番目の塩基（塩基配列の86番目）であることを示します。  |
|  <code>/transl_table=1</code>  |  塩基配列は [The Genetic Codes](/ddbj/geneticcode.html) の 1 の表に従ってアミノ酸翻訳されることを示します。  |

以上の情報から、塩基配列と CDS feature の組み合わせは、塩基配列の86番目の塩基から450番目の塩基までが以下のように[一文字表記](/ddbj/code.html#amino-1)でアミノ酸配列に翻訳されます。

``` 
      86 atg gcg aag att aag atc ggg atc aat ggg ttc ggg agg atc ggg 
     aa: M   A   K   I   K   I   G   I   N   G   F   G   R   I   G   

     131 agg ctc gtg gcc agg gtg gcc ctg cag agc gac gac gtc gag ctc 
     aa: R   L   V   A   R   V   A   L   Q   S   D   D   V   E   L   
         
     176 gtc gcc gtc aac gac ccc ttc atc acc acc gac tac atg aca tac 
     aa: V   A   V   N   D   P   F   I   T   T   D   Y   M   T   Y   

     221 atg ttc aag tat gac act gtg cac ggc cag tgg aag cat cat gag 
     aa: M   F   K   Y   D   T   V   H   G   Q   W   K   H   H   E   
         
     266 gtt aag gtg aag gac tcc aag acc ctt ctc ttc ggt gag aag gag 
     aa: V   K   V   K   D   S   K   T   L   L   F   G   E   K   E   

     311 gtc acc gtg ttc ggc tgc agg aac cct aag gag atc cca tgg ggt 
     aa: V   T   V   F   G   C   R   N   P   K   E   I   P   W   G   
         
     356 gag act agc gct gag ttt gtt gtg gag tac act ggt gtt ttc act 
     aa: E   T   S   A   E   F   V   V   E   Y   T   G   V   F   T   
         
     401 gac aag gac aag gcc gtt gct caa ctt aag ggt ggt gct aag aag 
     aa: D   K   D   K   A   V   A   Q   L   K   G   G   A   K   K   
         
     446 gtc tg 
     aa: V   ?
```

最後の2塩基 "tg" は、C (cysteine)、W (tryptphan) または \* (termination codon) のどれであるか、が特定できませんので表示されません。  
そこで、下記のように/translation のアミノ酸配列が示されます。

``` 
          /translation="MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
         YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
         VFTDKDKAVAQLKGGAKKV"
```

## codon\_start qualifier による翻訳開始の位置補正 {#frame}

[codon\_start](/ddbj/qualifiers.html#codon_start) qualifier は、その CDS feature の中で最初の完全なコドンが見つかる位置を、その feature 中での相対塩基番号で補正します。

CDSで示されるタンパク質のコード領域が開始コドンから始まる場合は、codon\_start は必ず 1 になります。

CDSで示されるタンパク質のコード領域が開始コドンから始まっていない場合、読み枠の開始位置を 1、2、3 の中から適切に選択し、codon\_start に記載する必要があります。codon\_start 記載に依存して、同じ塩基配列でも、下表のように、異なるアミノ酸配列に翻訳されます。

``` 
塩基番号10の位                11111111112222222 
塩基番号 1の位       12345678901234567890123456 
実際の塩基配列       ttcggctgcagaagataaataaataa 
翻訳アミノ酸配列※1  F  G  C  R  R  *  
翻訳アミノ酸配列※2   S  A  A  E  D  K  *   
翻訳アミノ酸配列※3    R  L  Q  K  I  N  K  *   
```

※1

``` 
    CDS     <1..18
            /codon_start=1
            /transl_table=1
            /translation="FGCRR" 
```

※2

``` 
    CDS     <1..22
            /codon_start=2
            /transl_table=1
            /translation="SAAEDK" 
```

※3

``` 
    CDS     <1..26
            /codon_start=3
            /transl_table=1
            /translation="RLQKINK"
```
