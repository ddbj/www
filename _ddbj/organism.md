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
  - title: 配列データ記載例
    url: /ddbj/example.html
---

配列データ登録に際し、配列の由来となる「生物名」として /organism qualifier には、[taxonomy database](https://www.ncbi.nlm.nih.gov/taxonomy ) において、
- "scientific name" とされている (svnonym, equivalent name ほかではない) 
- 種 (species)、もしくは、それ以下 (subspecies, variety, strain, etc.) のランクで

名称を記載する必要があります。

## taxonomy database  {#taxonomy}

DDBJ では、生物名 (/organism qualifier の値) を共同で構築している
[taxonomy database](https://www.ncbi.nlm.nih.gov/taxonomy ) で管理しています。    
塩基配列データベース構築には由来生物名の管理は必須であり、生物名の表記を統一する必要があります。    
そのため、生物名の参照先として この taxonomy database を使用しております。    

Taxonomy database は、生物名の表記を統一することに主眼をおいて構築されており、生物種の命名、および、分類学上の権威となるものではありません。    
採用されている生物名とその lineage は、登録者の分類学的な主張、および、分類学的に普及している内容とは異なる場合があります。    
詳細に関しましては、
[taxonomy database の説明](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/index.cgi?chapter=howcite )をご一読ください。    

DDBJ では、taxonomy database を検索するためのシステム
[TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=ja ) を公開しております。    
塩基配列データベースにデータを登録する際、生物分類名を確認するためなどにご利用ください。    


## 生物名記載のクイックガイド  {#quick}

### 生物名が taxonomy database に存在する場合  {#existing}
種 (species)、もしくは、それ以下 (subspecies, variety, strain, etc.) のランクであることを確認し、
"scientific name" とされている (svnonym, equivalent name ほかではない) 名称を記載してください。    

taxonomy database の記載状況に対して異論がある場合は、[こちら](#objection)をご参照ください。

### 生物名が taxonomy database に存在しないときの対応  {#not_existing}

検索の際は、「生物名」に<span class="red">スペルミスがないように、十分、ご確認ください。</span>

- [未同定・同定不能](#unidentified)
    - [同定する意向がない](#not-to-be-identified)
    - [新種 (sp. nov.)、新属 (gen. nov.) など](#novel)
    - [環境サンプル](#env)
- [taxonomy database に存在しない有効な学名](#unregistered)
    - [配列が登録されたことがないと推定される種](#unregistered)
    - [taxonomy database の記載状況に対して異論がある場合](#objection) # comb. nov. の場合を含む
- [人工的に構築した配列](#syn)



## 生物名記載の概要  {#policy}

「生物名」は、通常、種の学名ですが、種が同定されていない場合(人工的に構築した配列なども含む)、仮称を用いることもあります。

このため、<span class="red">無理に既存の生物名を選択しないでください。</span>    
既存の生物名を選択して良いケースは、あくまで、配列の由来となる「生物名」の同定に問題がない状態であり、かつ、その「生物名」が taxonomy database に登録済である場合です。
一般に生物学的な種の分類・同定は総合的な視点からなされるべきです。    
マーカー遺伝子の塩基配列が類似していることは、分類の一助ではありますが、種同定とは別であり、絶対的な分類・同定のための指標とはなりません。    
培養条件、採集地、生育のための条件、形態、生化学的性質なども含めた総合的な判断の結果で、生物名を判断されているのでしたら問題はありません。    
登録された配列データの記載内容については登録者の責任になります。

- 未同定種・未記載種 (新種候補) は仮称で記載します。
- ある遺伝子の配列が同一であること と サンプルが同種に由来すること は別の事象です。
- マーカー遺伝子の塩基配列の類似度は、分類の絶対的指標では ありません。
- 現在の原核生物分類のスタンダードは全ゲノム配列によるANI (Average Nucleotide Identity) or dDDH (digital DNA-DNA hybridization) です。

taxonomy database に登録されていない「生物名」の場合は、塩基配列の登録の際に、その由来生物名を DDBJ から taxonomy database に登録申請いたします。    
このとき taxonomy database に登録された「生物名」は塩基配列が公開された際に、公開されます。    

DDBJ から当該塩基配列データが公開されるまでは、taxonomy database においても、「生物名」は公開されません。    
必要に応じて、塩基配列データの公開、生物名の更新をご依頼ください。    
更新依頼は、[登録データの修正・更新](/ddbj/update.html)をご参照ください。    

原則として、「生物名」には taxonomy database における "scientific name" 以外は記載できませんが、
taxonomy database の記載状況に対して異論がある場合、[こちら](#objection)をご参照ください。    

## 生物名入力におけるカテゴリー (Category) について {#deasy} 
DDBJ が運用している WWW 経由の[塩基配列登録システム](/ddbj/websub.html)では登録の際に、生物名入力において Category を選択します。    
下図に Category を判断するためのフローチャートを示します。

<img src="/assets/images/ddbj/organism-j.png" alt="" title="" class="w600">

### a. 人工的に構築した配列  {#syn_D}
Category は "Artificially constructed or synthesized sequence" となりますので、メニューから選択してください。    
[4. 人工的に構築した配列](#syn) を ご参照の上、生物名 (scientific name) を記載してください。


### b. ウイルス  {#virus_D}
画面上で生物名検索を行います。結果一覧から該当するウイルス名を選択します。選択した生物名が scientific name 入力ボックスに反映されます。
[/isolate](/ddbj/qualifiers.html#isolate) (または [/strain](/ddbj/qualifiers.html#strain)、
[/serotype](/ddbj/qualifiers.html#serotype)、
[/collection_date](/ddbj/qualifiers.html#collection_date) (採取した年月日)、
[/geo_loc_name](/ddbj/qualifiers.html#geo_loc_name) (採取した地名)、
[/host](/ddbj/qualifiers.html#host) などを各 qualifier に記載してください。    
下記、生物名記載の各論より、[ウイルス](#virus)について ご参照ください。    
病原性ウイルスの場合には Category で "Pathogenic virus" を選択してください。    


### c. 三名法などで記載する場合  {#trinominal_D}
Category は "Valid subspecies or variety not registered in taxonomy database" となりますので、メニューから選択してください。    
下記、生物名記載の各論より、[三名法](#trinominal)について ご参照の上、scientific name 入力ボックスには subspecies、variety または、それに準ずる strain などを含めて生物名を記載してください。    


### d. taxonomy database に既存  {#existing_D}
画面上で生物名検索を行います。結果一覧から該当する生物名を選択します。    
Category を選択する必要はありません。


### e. 環境サンプル  {#env_D}
Category は "Obtained by direct molecular isolation from environmental sample" になります。メニューから選択してください。    
下記、生物名記載の各論より、[3. 環境サンプル](#env) を ご参照の上、生物名を scientific name 入力ボックスに記載してください。    
[/isolation_source](/ddbj/qualifiers.html#isolation_source)、
[/isolate](/ddbj/qualifiers.html#isolate) (または [/clonen](/ddbj/qualifiers.html#clone)、
[/collection_date](/ddbj/qualifiers.html#collection_date) (採取した年月日)、
[/geo_loc_name](/ddbj/qualifiers.html#geo_loc_name) (採取した地名)、
[/host](/ddbj/qualifiers.html#host) などを各 qualifier に記載してください。    


### f. 種同定不能な場合の仮称、または、提唱準備中の新種  {#unidentified_D}
種同定をしない場合、Category は "Species is not identified" となりますので、メニューから選択してください。    
提唱準備中の新種の場合、Category は "Proposing the name for the novel species" となりますので、メニューから選択してください。    
下記、生物名記載の各論より、[2. 種が同定されていない場合](#unidentified) を ご参照の上、生物名を scientific name 入力ボックスに記載してください。


### g. 登録済で非公開 (検索不可) の場合  {#private_D}
Category は "The name is valid but not registered in taxonomy database" となりますので、メニューから選択してください。    
<span class="red">**同じ生物からのサンプルに由来する別データを登録する際は、以前のご登録と共通の学名、もしくは、仮称を入力してください。**</span>    


### h. taxonomy database に未登録で、学名が確立している場合  {#unregistered_D}
Category は "The name is valid but not registered in taxonomy database" となりますので、メニューから選択してください。    
下記、生物名記載の各論より、[1. 種が同定されている場合](#species) をご参照の上、生物名を scientific name 入力ボックスに記載してください。    
[配列が登録されたことがないと推定される種](#unregistered) もご参照ください。    


## 生物名記載の各論  {#organism_name}
一部、特殊な例外もありますが、DDBJ への登録の際における「生物名」記載についての考え方を以下に挙げています。    
塩基配列データの登録に際して taxonomy database への登録申請が必要な際は、[各参考情報](#items) もお知らせください。


## 1. 種が同定されている場合 {#species} 
「生物名」の登録は属・種の名称を用いた二名法による種の学名 (以下、種名)を原則としております。  
種名は、動物、植物、細菌、ウイルスの各国際命名規約に従って記載されるべきです。

例
<pre><code>Homo sapiens</code></pre> 


### 三名法 {#trinominal}
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


### 微生物ゲノム  {#genome}
以前は 微生物などで全ゲノム規模の配列を登録する場合、strain などを organism 
に含めて記載していましたが、現在は学名のみの記載を原則としています。  
strain 名は [/strain](/ddbj/qualifiers.html#strain) qualifier に記載してください。

<pre><code>                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Candida albicans"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="WO-1"
</code></pre>  


### ウイルス  {#virus}
ウイルスは [the International Committee on Taxonomy of Viruses](https://ictv.global/ ) に従った種名を基本としています。    
[識別子について](/ddbj/identifiers.html#virus) のウイルスに関するセクションをご参照ください。    
<span class="red">2017年以前は、登録頻度の高い病原性ウイルスの場合、strain、serotype を生物名に含めて記載する運用を続けていましたが、この運用は新規登録分には適用されません。</span>    
例
<pre><code>Influenza A virus</code></pre>

下記の例のように [/collection_date](/ddbj/qualifiers.html#collection_date) (採取した年月日), 
[/geo_loc_name](/ddbj/qualifiers.html#geo_loc_name) (採取した地名), 
[/host](/ddbj/qualifiers.html#host), 
[/isolate](/ddbj/qualifiers.html#isolate) (or [/strain](/ddbj/qualifiers.html#strain)), 
[/serotype](/ddbj/qualifiers.html#serotype) などの該当 qualifier をあわせて source feature に記載します。

<pre><code>                   /<a href="/ddbj/qualifiers.html#collection_date">collection_date</a>="2007-11-01"
                   /<a href="/ddbj/qualifiers.html#geo_loc_name">geo_loc_name</a>="Japan:Tokyo"
                   /<a href="/ddbj/qualifiers.html#host">host</a>="Gallus gallus"
                   /<a href="/ddbj/qualifiers.html#isolate">isolate</a>="A/chicken/Tokyo/2007"
                   /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="viral cRNA"
                   /<a href="/ddbj/qualifiers.html#organism">organism</a>="Influenza A virus"
                   /<a href="/ddbj/qualifiers.html#serotype">serotype</a>="H7N7"
</code></pre>


### 雑種  {#hybrid}
雑種の場合、適宜、以下のように記載します。    

例
<pre><code>Rosa alba x Rosa corymbifera
Malus x domestica
Lilium hybrid division I</code></pre>


### taxonomy database で見つからない有効な学名  {#unregistered}
**配列が登録されたことがないと推定される種**    
スペルミスではないことを十分にご確認の上、そのまま登録してください。    
genus などの上位ランクも含めて taxonomy database に存在しない場合、lineage についてお知らせください。    
可能であれば、種を報告した文献の情報をお知らせください。    
    
ただし、既に登録されている「生物名」でも、配列データが公開されていない段階では taxonomy database においても検索できません。    
<span class="red">注)</span> 塩基配列登録システムからの登録の際は、[生物名入力におけるカテゴリー (Category) について](#deasy) の 
[g. 登録済で非公開 (検索不可) の場合](#private_D)をご参照ください。    
    
登録時に以下の参考情報を可能な範囲でお知らせください。    


---
**taxonomy database 登録申請のための参考情報**

- [推定可能な範囲の lineage](#lineage)
- [種を記載した論文](#ref)
- [以前に登録した配列のアクセッション番号](#acc)


---
**taxonomy database の記載状況に対して異論がある場合**<a name="objection"></a>    
taxonomy database の間違いなどを発見された場合は、[ご連絡](/contact-ddbj.html#to-ddbj)ください。    
学名のスペルミスなどに関しましては修正します。    
    
いわゆる combinatio nova を含め、再分類に関連して提唱する準備段階の場合、その主張が論文を公表して認められるまで、
taxonomy database 上で名称の修正を実施することはできません。    
そのため、現状の taxonomy database に準拠した学名を用います。    
論文公表後に必要な名称変更を依頼してください。その際に学名について taxonomy database 上での扱いを再検討することになります。    
    
taxonomy database における scientific name, synonym あるいは、lineage などの扱いに異論がある場合、taxonomy database の管理者に修正の検討を依頼することができます。    
可能な限り、異論の根拠となる文献をご提示ください。    
専門的な内容になると思われますので、単に URL あるいは、文献を示すのみではなく、どうあるべきかについて英文にてコメントを記載してください。    
ただし、lineage 解釈などの問題は、データの一意性を担保するため、諸説の１つを採用する方針であり、ご希望に添えないこともあり得ます。    
詳細に関しましては、[taxonomy database の説明](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/index.cgi?chapter=howcite )をご一読ください。    
    
登録時に以下の参考情報を可能な範囲でお知らせください。    

---
**taxonomy database 登録申請のための参考情報**

- [推定可能な範囲の lineage](#lineage)
- [種を記載した論文](#ref)


---

## 2. 種が同定されていない場合 {#unidentified} 

### 2-1. 種を同定しない場合   {#not-to-be-identified} 
種同定を伴わない研究の場合、判明している範囲の lineage、多くの場合、属名を用いて、
"\<genus name\> sp." などとして記載します。    
属より上位ランクの場合、判明している範囲の lineage に**細菌**ならば "bacterium"、
**古細菌**ならば、 "archaeon" を付加した名前を記載します。    

書式

- \<genus name> sp. # 原核生物
- \<family (or upper) name> bacterium
- \<family (or upper) name> archaeon

例

<pre><code>Acetobacter sp.
Acetobacteraceae bacterium
Methanomicrobiales archaeon</code></pre>

**真核生物**の場合、判明している範囲の lineage が属レベルでも、属より上位でも "sp." を付加した名前 を記載します。

書式

- \<genus (or upper) name> sp. # 真核生物

例

<pre><code>Aspergillaceae sp.
</code></pre>

登録の際には「生物名」とともに [識別子](/ddbj/identifiers.html)、多くの場合、
[/strain](/ddbj/qualifiers.html#strain), 
[/isolate](/ddbj/qualifiers.html#isolate) など該当する qualifier とあわせて source feature に記載します。

<pre><code>                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Acetobacter sp."
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="ITDI2.1"</code></pre>  

**真核生物 (カビ、酵母相当の単細胞真菌以外)** の場合、あるいは、単細胞の微生物でも**全ゲノム規模の配列に該当する場合**、
判明している範囲の lineage (多くの場合 属名) を用いて、"\<genus name\> sp."などとした上で、
[識別子](/ddbj/identifiers.html) (多くの場合、strain の名称) を「生物名」に含めて記載しています。    
「生物名」に含めている場合でも、[識別子](/ddbj/identifiers.html)を [/strain](/ddbj/qualifiers.html#strain) など該当する qualifier に記載してください。

<pre><code>                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Euglena sp. CR123"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="CR123"</code></pre>  

通常、**多細胞生物**は "\<genus name\> sp." とのみの記載では登録できません。     
[識別子](/ddbj/identifiers.html) (多くの場合、isolate の名称) を「生物名」に含めて記載しています。    
「生物名」に含めている場合でも、[識別子](/ddbj/identifiers.html)を [/isolate](/ddbj/qualifiers.html#isolate) など該当する qualifier に記載してください。

<pre><code>                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Oscinella sp. AB_575"
                     /<a href="/ddbj/qualifiers.html#isolate">isolate</a>="AB_575"</code></pre>  


<span class="red">**仮称を割り当てた生物に由来する別データを登録する際は、共通の仮称とともに登録してください。**</span>    


### 2-2. 新種提唱の場合  {#novel}
ウイルスの場合、[The International Code of Virus Classification and Nomenclature (ICVCN)](https://ictv.global/about/code ) に従った命名であれば、
そのまま記載して登録することが可能です。    

ウイルス以外は <span class="red">**valid publication 前の段階で「正式な学名と混同するような名称」を記載することはできません。**</span>    
新学名提唱のための準備段階の場合、不明と類似の扱いで学名が確定するまではデータとの対応関係を一意に保つため、
仮称を設定することを原則としています。    

学名提唱中のため種名が未確定の場合、「生物名」の一意性を保つために、判明している範囲の lineage、多くの場合、
属名を用いて、"\<genus name\> sp."などとした上で、
[識別子](/ddbj/identifiers.html) (多くの場合、strain 名など) を並記した仮称を割り当てて taxonomy database に登録します。    
     
**原核生物**の場合、 strain 毎を基本に仮称を割り当てます。    

書式

- \<genus name> sp. \<strain name> # 原核生物
- \<family (or upper) name> bacterium \<strain name>
- \<family (or upper) name> archaeon \<strain name>

例

<pre><code>Acetobacter sp. ITDI2.1
Acetobacteraceae bacterium ITDI2.1</code></pre>


**真核生物**の場合、種の候補単位 (OTU) 毎を基本に仮称を割り当てますが、状況に応じて、strain または isolate 毎としても構いません。    

書式

- \<genus (or upper) name> sp. \<OTU ID> # 真核生物

例

<pre><code>Oscinella sp. 1-AB-2020
</code></pre>


この運用により、例えば、異なる生物が同じものと混同されるなどの混乱を避けることができます。    
そのため、<span class="red">**学名が確定するまでの間、その仮称を割り当てた生物に由来する別データを登録する際は、共通の仮称とともに登録**</span>してください。    
あくまで当該生物由来サンプルと登録データに関する措置であり、登録者が執筆中の論文他において、どのような名称を用いるか、ということとは別の問題です。

このような taxonomy database に登録された一時的な仮称は、正しい学名が確認できた段階で、その学名に更新変更します。    
種を報告する論文が公開された際に、論文情報更新、生物名修正、データ公開を依頼するご連絡をお願いいたします。    
更新依頼は、[登録データの修正・更新](/ddbj/update.html)をご参照ください。    


登録の際には、「生物名」に含めた下位の rank、[strain](/ddbj/qualifiers.html#strain) など該当する
qualifier をあわせて source feature に記載します。

<pre><code>                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Acetobacter sp. ITDI2.1"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="ITDI2.1"</code></pre>  

登録時に以下の参考情報を可能な範囲でお知らせください。

---
**taxonomy database 登録申請のための参考情報**

- [推定可能な範囲の lineage](#lineage)
- [提唱中の新種学名](#propose)
- [以前に登録した配列のアクセッション番号](#acc)
- [サンプル、または、配列を得た方法の概略](#isolate)


---


## 3. 環境サンプル {#env}
環境サンプル (environmental sample) とは、PCR、あるいは、その他の方法で直接、分子を単離した環境上のサンプルに由来する配列です。    
よく混同されますが、<span class="red">環境サンプルとは「野生型」という意味ではありません。</span>  
環境サンプルの定義については[環境サンプルの説明](/ddbj/env.html)もご参照ください。  
<span class="red">環境サンプル由来の混合培養系も、環境サンプルと扱います。</span>


### 3-1 環境プロファイル {#profile}
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
[/collection_date](/ddbj/qualifiers.html#collection_date) (採取した年月日) と 
[/geo_loc_name](/ddbj/qualifiers.html#geo_loc_name) (採取した地名)、
[/host](/ddbj/qualifiers.html#host) (宿主) の記載も重要です。
[識別子](/ddbj/identifiers.html) として、[/isolate](/ddbj/qualifiers.html#isolate) または [/clone](/ddbj/qualifiers.html#clone) qualifier を記載します。


<pre><code>                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="4-11"
                     /<a href="/ddbj/qualifiers.html#collection_date">collection_date</a>="2007"
                     /<a href="/ddbj/qualifiers.html#environmental_sample">environmental_sample</a>
                     /<a href="/ddbj/qualifiers.html#geo_loc_name">geo_loc_name</a>="Japan: Shizuoka"
                     /<a href="/ddbj/qualifiers.html#isolation_source">isolation_source</a>="PCR-derived sequence from sediment"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="uncultured Acetobacter sp."</code></pre>

taxonomy database ([TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=ja )) から検索不能な場合、登録時に以下の参考情報を可能な範囲でお知らせください。

---
**taxonomy database 登録申請のための参考情報**

- [推定可能な範囲の lineage](#lineage)
- [サンプル、または、配列を得た方法の概略](#isolate)


---


### 3-2 メタゲノムアセンブリ  {#MAG}
[Metagenome-Assembled Genome (MAG)](/ddbj/metagenome-assembly.html) の場合、単一生物分類群がツールにより割り当てられ得るため、
種、もしくは、それ以下のランクの生物名（例 Agrobacterium tumefaciens）を記載します。    
種同定を伴わない MAG の場合、判明している範囲の lineage、多くの場合、属名を用いて、"\<genus name\> sp." などとして記載します。    
属より上位ランクの場合、判明している範囲の lineage に細菌ならば "bacterium"、
古細菌ならば、 "archaeon" を付加した名前を記載します。    
真核生物の場合、判明している範囲の lineage が属レベルでも、属より上位でも "sp." を付加した名前 を記載します。    

書式

- \<genus name> sp. # 原核生物
- \<family (or upper) name> bacterium # 細菌
- \<family (or upper) name> archaeon # 古細菌
- \<genus (or upper) name> sp. # 真核生物

例

<pre><code>Agrobacterium sp.
Rhizobiaceae bacterium
Methanomicrobiales archaeon
Aspergillaceae sp.</code></pre>

MAG 相当の場合、
[/environmental_sample](/ddbj/qualifiers.html#environmental_sample) qualifier、
[/isolation_source](/ddbj/qualifiers.html#isolation_source) qualifier、および、
[識別子](/ddbj/identifiers.html) としての [/isolate](/ddbj/qualifiers.html#isolate) qualifier に加えて、
[/metagenome_source](/ddbj/qualifiers.html#metagenome_source) qualifier に、
[metagenome taxonomy nodes](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&id=408169 ) にある操作的な名称から
適宜、選択して、例えば soil metagenome などのサンプル分離源を反映したメタゲノム名を記載してください。
[NCBI のサイト](https://www.ncbi.nlm.nih.gov/biosample/docs/organism/#metagenomes )にメタゲノム名の使い分けについて解説されています。


---
**taxonomy database 登録申請のための参考情報**

- [推定可能な範囲の lineage](#lineage)
- [サンプル、または、配列を得た方法の概略](#isolate)


---


## 4. 人工的に構築した配列 {#syn} 
一般的には、"synthetic construct"、または、"eukaryotic synthetic construct" とのみ一律に記載します。    
vector などの名称を、そのまま記載することも可能です。    
特定遺伝子の配列のみを登録する場合、"synthetic construct" などを一律に記載してください。    
vector 類の全長相当を登録する場合、何らかの命名をしてください。
その際は天然由来の場合と明確に区別するため、 plasmid という単語は用いないでください。    

例

<pre><code>Cloning vector pAP3neo
Expression vector pAMP</code></pre>

taxonomy database ([TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=ja )) から検索不能な場合、登録時に以下の参考情報を可能な範囲でお知らせください。

---
**taxonomy database 登録申請のための参考情報**

- [想定される用法など](#usage)


---


## taxonomy database 登録申請のための参考情報 {#items} 

配列データ登録の際に、その由来となる「生物名」が taxonomy database の存在していない場合、DDBJ を通じて taxonomy database に登録します。    


**推定可能な範囲の lineage**<a name="lineage"></a>    
推定可能な範囲での taxonomic lineage をお知らせください。     
    

**種を記載した論文**<a name="ref"></a>    
すでに種名が発表されている場合、記載文献を英語でお知らせください。     
    

**提唱中の新種学名**<a name="propose"></a>    
提唱する新種の名称に関しては、別途、taxonomy database でも管理しますので、お知らせください。    
提唱する新種の名称が文献に公表された際、あるいは、名称が変更になった場合、DDBJ アップデート<img src="/assets/images/ddbj/ad_updt1.gif" alt="" title="" class="life-size">までご連絡ください。    
    

**以前に登録した配列のアクセッション番号**<a name="acc"></a>    
由来生物名が同一である塩基配列データを INSDC (DDBJ/ENA/GenBank または BioSample) に登録済みでしたら、アクセッション番号とともに、その旨をお知らせください。     
    

**サンプル、または、配列を得た方法の概略**<a name="isolate"></a>    
サンプリング、配列決定などの実験過程など、簡潔な英文にてお知らせください。    
    

**想定される用法など**<a name="usage"></a>    
主として人工的に構築した配列の場合、利用方法などをお知らせください。    
    

