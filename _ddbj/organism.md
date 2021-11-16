---
layout: tabbed_indexed_content
title: Organism qualifier に記載する生物名
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
  - title: 識別子について
    url: /ddbj/identifiers.html
  - title: The Genetic Codes
    url: /ddbj/geneticcode.html
  - title: タンパク質コード配列; CDS feature について
    url: /ddbj/cds.html
  - title: 登録の見本
    url: /ddbj/example.html
---

配列の登録に際して配列の由来となる「生物名」として /organism qualifier には、taxonomy database において、種、もしくは、それ以下のランクで "scientific name" とされている名称を記載する必要があります。

## taxonomy database  {#taxonomy}

DDBJ/EMBL-Bank/GenBank では、生物名 (/organism qualifier の値) を共同で構築している
taxonomy database で管理しています。  
塩基配列データベース構築には由来生物名の管理は必須であり、生物名の表記を統一する必要があります。  
そのため、生物名の参照先として この taxonomy database を使用しております。

Taxonomy database は、生物名の表記を統一することに主眼をおいて構築されており、生物種の命名、および、分類学上の権威となるものではありません。  
採用されている生物名とその lineage は、登録者の分類学的な主張、および、分類学的に普及している内容とは異なる場合があります。  
詳細に関しましては、[taxonomy database の説明](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/index.cgi?chapter=howcite)をご一読ください。

DDBJでは、taxonomy database を検索するためのシステム
[TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=ja) を公開しております。塩基配列データベースにデータを登録する際、生物分類名を確認するためなどにご利用ください。  
ただし、既に登録されている「生物名」でも、配列データが公開されていない段階では taxonomy database においても検索できません。  
<span class="red">注)</span> 塩基配列登録システムからの登録の際は、[生物名入力におけるカテゴリー (Category) について](#deasy) をご参照ください。 "Not found in taxonomy database, but already registered in other sequence data" とすることにより、[このケースに該当すること](#private)を示してください。

塩基配列の登録、taxonomy database 検索の際は、「生物名」に<span class="red">スペルミスがないように、十分、ご確認ください。</span>

## 生物名記載の概要  {#rule}

「生物名」は、通常、種の学名ですが、種が同定されていない場合(人工的に構築した配列なども含む)、仮称を用いることもあります。

このため、<span class="red">無理に既存の生物名を選択しないでください。</span>既存の生物名を選択して良いケースは、あくまで、配列の由来となる「生物名」の同定に問題がない状態であり、かつ、その「生物名」が taxonomy database に登録済である場合です。

- 未同定種・未記載種は仮称で記載します。
- マーカー遺伝子の塩基配列の類似度は、分類の絶対的指標では ありません。
- 配列が同一であること と サンプルが同種に由来すること は別の事象です。

taxonomy database に登録されていない「生物名」の場合は、塩基配列の登録の際に、その由来生物名を DDBJ から taxonomy database に登録申請いたします。  
このとき taxonomy database に登録された「生物名」は塩基配列が公開された際に、公開されます。  

<a name="private"></a>
DDBJ から当該塩基配列データが公開されるまでは、taxonomy database においても、「生物名」は公開されません。  
必要に応じて、塩基配列データの公開、生物名の更新をご依頼ください。  
更新依頼は、[登録データの修正・更新](/ddbj/update.html)をご参照ください。

原則として、「生物名」には、taxonomy database における "scientific name" 以外は、記載できませんが、taxonomy database における synonym あるいは lineage などの扱いに疑問がある場合は、典拠となる論文などを示していただくことにより、taxonomy database の修正を管理者に依頼し検討することができます。  
ただし、lineage 解釈などの問題は諸説の１つを採用する方針であり、これに関しましては、ご希望に添えないこともあり得ます。  
Taxonomy database の間違いなどを発見された場合は、[ご連絡](/contact-ddbj.html#to-ddbj)ください。  
学名のスペルミスなどに関しましては修正します。

## 生物名入力におけるカテゴリー (Category) について {#deasy} 

DDBJ が運用している WWW 経由の[塩基配列登録システム](/ddbj/websub.html)では登録の際に、生物名入力において Category を選択します。  
下図に Category を判断するためのフローチャートを示します。

<img src="/assets/images/ddbj/organism-j.png" alt="" title="" class="w600">

a. 人工的に構築した配列  
: Category は "Artificially constructed or synthesized sequence" となりますので、メニューから選択してください。<br>[4. 人工的に構築した配列](#syn) を ご参照の上、生物名 (scientific name) を記載してください。

b. ウイルス  
: 画面上で生物名検索を行います。結果一覧から該当するウイルス名を選択します。選択した生物名が scientific name 入力ボックスに反映されます。<br>病原性ウイルスの場合には Category で "Pathogenic virus" を選択してください。<br>strain、serotype、collection_date (採取した年月日)、country (採取した地名)、host などを各 qualifier に記載してください。

c. 三名法などで記載する場合  
: Category は "Valid subspecies or variety not registered in taxonomy database" となりますので、メニューから選択してください。<br>下記、生物名記載の各論より、[三名法](#trinominal)について ご参照の上、scientific name 入力ボックスには subspecies、variety または、それに準ずる strain などを含めて生物名を記載してください。

d. taxonomy database に既存  
: 画面上で生物名検索を行います。結果一覧から該当する生物名を選択します。<br>Category を選択する必要はありません。

e. 環境サンプル  
: Category は "Obtained by direct molecular isolation from environmental sample" となりますので、メニューから選択してください。<br>下記、生物名記載の各論より、[3. 環境サンプル](#env) を ご参照の上、生物名を scientific name 入力ボックスに記載してください。

f. 種同定不能な場合の仮称、または、提唱準備中の新種  
: 種同定をしない場合、Category は "Species is not identified" となりますので、メニューから選択してください。<br>提唱準備中の新種の場合、Category は "Proposing the name for the novel species" となりますので、メニューから選択してください。<br>下記、生物名記載の各論より、[2. 種が同定されていない場合](#unidentified) を ご参照の上、生物名を scientific name 入力ボックスに記載してください。

g. 登録済で非公開 (検索不可) の場合  
: Category は "The name is valid but not registered in taxonomy database" となりますので、メニューから選択してください。<br>以前のご登録と同様に生物名 (scientific name) を記載してください。

h. taxonomy database に未登録で、学名が確立している場合  
: Category は "The name is valid but not registered in taxonomy database" となりますので、メニューから選択してください。<br>下記、生物名記載の各論より、[1. 種が同定されている場合](#species) をご参照の上、生物名を scientific name 入力ボックスに記載してください。

## 生物名記載の各論  {#organism_name}

一部、特殊な例外もありますが、DDBJ への登録の際における「生物名」記載についての考え方を以下に挙げています。  
塩基配列データの登録に際して taxonomy database への登録申請が必要な際は、[各参考情報](#items) もお知らせください。

### 1. 種が同定されている場合 {#species} 

「生物名」の登録は属・種の名称を用いた二名法による種の学名 (以下、種名)を原則としております。  
種名は、動物、植物、細菌の各国際命名規約に従って記載されるべきです。

例

<pre><code>Homo sapiens</code></pre> 

#### 三名法 {#trinominal}

三名法、または、それに準じた strain などの分類単位で organism を記載する必要がある場合、亜種 subspecies 、変種 variety 、serotype 、strain などを生物名に含めます。

例

<pre><code>Pan troglodytes troglodytes
Zea mays subsp. mays
Oryza sativa Japonica Group
Brassica oleracea var. alboglabra
Escherichia coli K-12</code></pre> 

また、このとき [/sub_species](/ddbj/qualifiers.html#sub_species), 
[/variety](/ddbj/qualifiers.html#variety), 
[/serotype](/ddbj/qualifiers.html#serotype), 
[/strain](/ddbj/qualifiers.html#strain) の該当 qualifier をあわせて source feature に記載します。

<pre><code>                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Pan troglodytes troglodytes"
                     /<a href="/ddbj/qualifiers.html#sub_species">sub_species</a>="troglodytes"
</code></pre>

#### 微生物ゲノム  {#genome}

以前は 微生物などで全ゲノム規模の配列を登録する場合、strain などを organism
に含めて記載していましたが、現在は学名のみの記載を原則としています。  
strain 名は [/strain](/ddbj/qualifiers.html#strain) qualifier に記載してください。

<pre><code>                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Candida albicans"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="WO-1"
</code></pre>  

#### ウイルス  {#virus}

ウイルスの場合は二名法ではありませんが、[the International Committee on Taxonomy of Viruses](https://talk.ictvonline.org/) に従った種名を基本としています。  
<span class="red">**2017年以前は、登録頻度の高い病原性ウイルスの場合、strain、serotype を生物名に含めて記載する運用を続けていましたが、この運用は新規登録分には適用されません。**</span>

例
<pre><code>Influenza A virus</code></pre>

下記の例のように [/collection_date](/ddbj/qualifiers.html#collection_date) (採取した年月日), 
[/country](/ddbj/qualifiers.html#country) (採取した地名), 
[/host](/ddbj/qualifiers.html#host), 
[/isolate](/ddbj/qualifiers.html#isolate) (or [/strain](/ddbj/qualifiers.html#strain)), 
[/serotype](/ddbj/qualifiers.html#serotype) などの該当 qualifier をあわせて source feature に記載します。

<pre><code>                   /<a href="/ddbj/qualifiers.html#country">country</a>="Japan:Tokyo"
                   /<a href="/ddbj/qualifiers.html#collection_date">collection_date</a>="2007-11-01"
                   /<a href="/ddbj/qualifiers.html#host">host</a>="Gallus gallus"
                   /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="viral cRNA"
                   /<a href="/ddbj/qualifiers.html#organism">organism</a>="Influenza A virus"
                   /<a href="/ddbj/qualifiers.html#serotype">serotype</a>="H7N7"
                   /<a href="/ddbj/qualifiers.html#strain">strain</a>="A/chicken/Tokyo/2007"
</code></pre>

#### 雑種  {#hybrid}

雑種の場合、適宜、以下のように記載します。

例
<pre><code>Rosa alba x Rosa corymbifera
Malus x domestica
Lilium hybrid division I</code></pre>

#### database で見つからない場合  {#novel}

taxonomy database ([TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=ja)) から検索不能な場合、登録時に以下の参考情報を可能な範囲でお知らせください。

taxonomy database 登録申請のための参考情報

- [推定可能な範囲の lineage](#lineage)
- [種を記載した論文](#ref)
- [以前に登録した配列のアクセッション番号](#acc)
- [サンプル、または、配列を得た方法の概略](#isolate)

### 2. 種が同定されていない場合 {#unidentified} 

#### 2-1. 種を同定しない場合  <a name="not-to-be-identified"></a>

種同定を伴わない研究の場合、判明している範囲の lineage、多くの場合、属名を用いて、"\<genus name\> sp." などとして記載します。    
属より上位ランクの場合、判明している範囲の lineage に細菌ならば "bacterium"、
古細菌ならば、 "archaeon" を付加した名前を記載します。
真核生物の場合、判明している範囲の lineage が属レベルでも、属より上位でも "sp." を付加した名前 を記載します。

書式

- \<genus name> sp. # 原核生物
- \<genus (or upper) name> sp. # 真核生物
- \<family (or upper) name> bacterium
- \<family (or upper) name> archaeon

例

<pre><code>Acetobacter sp.
Aspergillaceae sp.
Acetobacteraceae bacterium
Methanomicrobiales archaeon</code></pre>

登録の際には「生物名」とともに[識別子](/ddbj/identifiers.html)、多くの場合、
[/strain](/ddbj/qualifiers.html#strain), 
[/isolate](/ddbj/qualifiers.html#isolate) など該当する qualifier とあわせて source feature に記載します。

<pre><code>                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Acetobacter sp."
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="ITDI2.1"</code></pre>  

真核生物 (カビ、酵母相当の真菌以外) の場合は、あるいは、微生物でも全ゲノム規模の配列に該当する場合、判明している範囲の lineage (多くの場合 属名) を用いて、"\<genus name\> sp."などとした上で、[識別子](/ddbj/identifiers.html) (多くの場合、strain の名称) を「生物名」に含めて記載しています。  
「生物名」に含めている場合でも、[識別子](/ddbj/identifiers.html)を [/strain](/ddbj/qualifiers.html#strain) など該当する qualifier に記載してください。

<pre><code>                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Acetobacter sp. ITDI2.1"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="ITDI2.1"</code></pre>  

#### 2-2. 新種提唱の場合  {#new}

学名提唱中のため種名が未確定の場合、「生物名」の一意性を保つために、判明している範囲の lineage、
多くの場合、属名を用いて、"\<genus name\> sp."などとした上で、 [識別子](/ddbj/identifiers.html) 
(多くの場合、strain 名など) を並記します。  
この運用により、例えば、異なる生物が同じものと混同されるなどの混乱を避けることができます。  
DDBJ から当該塩基配列データが公開されるまでは、taxonomy database においても、「生物名」を公開しません。    
このような taxonomy database に登録された一時的な仮称は、正しい学名が確認できた段階で、その学名に更新変更します。  
種を報告する論文が公開された際に、論文情報更新、生物名修正、データ公開を依頼するご連絡をお願いいたします。  
更新依頼は、[登録データの修正・更新](/ddbj/update.html)をご参照ください。    
公開前に変更を依頼していただければ、通常、仮称が公表されることはありません。  

書式

- \<genus name> sp. \<strain name>
- \<family (or upper) name> bacterium \<strain name>
- \<genus name> sp. \<strain name> # 原核生物
- \<genus (or upper) name> sp. \<strain name> # 真核生物
- \<family (or upper) name> bacterium \<strain name>
- \<family (or upper) name> archaeon \<strain name>

例

<pre><code>Acetobacter sp. ITDI2.1
Acetobacteraceae bacterium ITDI2.1</code></pre>

登録の際には、「生物名」に含めた下位の rank、[strain](/ddbj/qualifiers.html#strain) など該当する
qualifier をあわせて source feature に記載します。

<pre><code>                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Acetobacter sp. ITDI2.1"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="ITDI2.1"</code></pre>  

taxonomy database ([TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=ja)) から検索不能な場合、登録時に以下の参考情報を可能な範囲でお知らせください。

taxonomy database 登録申請のための参考情報

- [推定可能な範囲の lineage](#lineage)
- [提唱中の新種学名](#propose)
- [以前に登録した配列のアクセッション番号](#acc)
- [サンプル、または、配列を得た方法の概略](#isolate)

### 3. 環境サンプル {#env}

環境サンプル (environmental sample) とは、PCR、DGGE、あるいは、その他の方法で直接、分子を単離した環境上のサンプルに由来する配列です。  
よく混同されますが、<span class="red">環境サンプルとは「野生型」という意味ではありません。</span>  
環境サンプルの定義については[環境サンプルの説明](/ddbj/env.html)もご参照ください。  
<span class="red">環境サンプル由来の混合培養系も、環境サンプルと扱います。</span>

環境サンプルの場合、原則、判明している範囲での lineage に "uncultured" を冠して「生物名」を記載します。  
環境プロファイルのような場合、一律に "uncultured bacterium" とするか、
配列ベースで判明している範囲の lineage を操作的に下記の書式で記載します。 

書式

- uncultured bacterium  # 原核生物 
- uncultured \<genus name> sp. # 原核生物 
- uncultured \<family (or upper) name> bacterium # 原核生物 
- uncultured \<genus (or upper) name> # 真核生物

例

<pre><code>uncultured bacterium
uncultured Acetobacter sp.
uncultured alpha proteobacterium
uncultured Bacillaceae bacterium
uncultured Aspergillus
uncultured Aspergillaceae</code></pre>


環境サンプルの場合、必須な
[/environmental_sample](/ddbj/qualifiers.html#environmental_sample) qualifier、および、
[/isolation_source](/ddbj/qualifiers.html#isolation_source) qualifier などでサンプリングの過程・状態などをあわせて source feature に記載します。
[識別子](/ddbj/identifiers.html) として、[/isolate](/ddbj/qualifiers.html#isolate) または [/clone](/ddbj/qualifiers.html#clone) qualifier を記載します。


<pre><code>                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="4-11"
                     /<a href="/ddbj/qualifiers.html#environmental_sample">environmental_sample</a>
                     /<a href="/ddbj/qualifiers.html#isolation_source">isolation_source</a>="PCR-derived sequence from sediment"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="uncultured Acetobacter sp."</code></pre>

taxonomy database ([TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=ja)) から検索不能な場合、登録時に以下の参考情報を可能な範囲でお知らせください。

taxonomy database 登録申請のための参考情報

- [推定可能な範囲の lineage](#lineage)
- [サンプル、または、配列を得た方法の概略](#isolate)

### 4. 人工的に構築した配列 {#syn} 

"synthetic construct"、または、"eukaryotic synthetic construct" とのみ一律に記載する場合と vector などの名称を以下のように そのまま記載する場合があります。

例

<pre><code>Cloning vector pAP3neo
Expression vector pAMP</code></pre>

taxonomy database ([TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=ja)) から検索不能な場合、登録時に以下の参考情報を可能な範囲でお知らせください。

taxonomy database 登録申請のための参考情報

- [想定される用法など](#usage)

## taxonomy database 登録申請のための参考情報 {#items} 

配列データ登録の際に、その由来となる「生物名」が taxonomy database の存在していない場合、DDBJ を通じて taxonomy database に登録します。

推定可能な範囲の lineage<a name="lineage"></a>
: 推定可能な範囲での taxonomic lineage をお知らせください。

種を記載した論文<a name="ref"></a>  
: すでに種名が発表されている場合、記載文献を英語でお知らせください。

提唱中の新種学名<a name="propose"></a>
: 提唱する新種の名称に関しては、別途、taxonomy database でも管理しますので、お知らせください。<br>提唱する新種の名称が文献に公表された際、あるいは、名称が変更になった場合、DDBJ アップデート<img src="/assets/images/ddbj/ad_updt1.gif" alt="" title="" class="life-size">までご連絡ください。

以前に登録した配列のアクセッション番号<a name="acc"></a>   
: 由来生物名が同一である塩基配列データを DDBJ/EMBL/GenBank に登録済みでしたら、アクセッション番号とともに、その旨をお知らせください。

サンプル、または、配列を得た方法の概略<a name="isolate"></a>  
: サンプリング、配列決定などの実験過程など、簡潔な英文にてお知らせください。

想定される用法など<a name="usage"></a>   
: 主として人工的に構築した配列の場合、利用方法などをお知らせください。
