---
layout: tabbed_indexed_content
title: 識別子について
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
  - title: 配列データ記載例
    url: /ddbj/example.html
  - title: 多型関連研究における同一配列の代表データ登録
    url: /ddbj/representative-sequence.html
---

塩基配列の登録には[生物名 (/organism qualifier)](/ddbj/organism.html) が必須です。種を同定していない場合、
同種から多数の配列を登録するなどの場合、生物名に加えて、識別子の記載が必要になることがあります。

細菌、酵母、など微生物の多くには strain/culture colletion の記載を必要とするケースが多く、
特に<span class="red">**微生物の全ゲノム配列**</span>には、strain 記載を強く求められています。    
細菌では新種報告に、複数の culture collection への寄託が義務とされています。

## 識別子の種別  {#type}

記載可能な識別子は大まかに2種類あります。

### サンプル生物を対象に割り当て  {#sample}

一般的にはこちらの記載を期待しています。
[/strain](/ddbj/qualifiers.html#strain) qualifier が代表的です。他にも 
[/isolate](/ddbj/qualifiers.html#isolate), 
[/culture_collection](/ddbj/qualifiers.html#culture_collection), 
[/ecotype](/ddbj/qualifiers.html#ecotype), 
[/specimen_voucher](/ddbj/qualifiers.html#specimen_voucher), 
[/cultivar](/ddbj/qualifiers.html#cultivar), 
[/bio_material](/ddbj/qualifiers.html#bio_material), 
[/cell_line](/ddbj/qualifiers.html#cell_line), 
 などの qualifer があります。

### 配列を対象に割り当て  {#seq}

こちらは操作的な記載になります。研究目的により、こちらで記載するほか選択肢がない場面があります。

[/clone](/ddbj/qualifiers.html#clone) qualifier, [/submitter_seqid](/ddbj/qualifiers.html#submitter_seqid) qualifier が代表的です。環境サンプルにおける OTU を指す [/isolate](/ddbj/qualifiers.html#isolate) qualifier, サンプルの状態によっては [/bio_material](/ddbj/qualifiers.html#bio_material) qualifier もこちらの意味になることがあります。つまり、[/isolate](/ddbj/qualifiers.html#isolate) qualifier は状況により、どちらの意味になることもあり得ます。

[/haplotype](/ddbj/qualifiers.html#haplotype) qualifier は同一配列毎に記載するという意味で該当します。集団遺伝学的なデータの場合、[多型関連研究における同一配列の代表データ登録](/ddbj/representative-sequence.html) をご参照ください。


## 識別子の書式  {#format}

商用サンプル、モデル系統など、公式に割り当てられている場合、そのまま記載願います。

ただし、[/bio_material](/ddbj/qualifiers.html#bio_material), [/culture_collection](/ddbj/qualifiers.html#culture_collection), [/specimen_voucher](/ddbj/qualifiers.html#specimen_voucher) qualifier には traceability を高めるための規定書式がありますので、ご確認ください。

登録者自身が単離・採取したサンプルの場合、ご自身で命名してください。命名の際、"1", "2", "A", "B" など、単純な記載では、論文内で完結する場合は十分かもしれませんが、塩基配列データベースでは、一意性を維持できない可能性が高いため、避けてください。

例えば、採取地名 (または、採取者) の頭文字、採取年号に通し番号を加えるなどという方法でも一意性が維持されやすくなります ([連番]-[採取地名の頭文字]-[採取年号]、1-MS-2021 など) 。

ただし、こちらでは体系的に管理している訳ではありません。そのため、自身が登録する研究データの範囲内で一意性を保つように命名することが最低条件になります。

## 識別子各論  {#detail}

### 識別子が不要な状況  {#not_required}

以下の条件を全て満たすようなケースでは識別子を記載する必要はありません。    
ただし、記載を禁止する意図はありませんので、必要とお考えでしたら、記載してください。

- 多細胞生物由来。
- 登録目的が、種同定、生命地理学、疫学、集団遺伝学に類することではない。
- 登録目的が、遺伝子・タンパク質の同定、機能解析など対象生物における一般的性質の記載。

### 細菌、古細菌  {#bact}

生物種の同定レベル、あるいは、配列の数に関わらず、識別子の記載が求められます。

- 単離培養を経た純系ならば [/strain](/ddbj/qualifiers.html#strain) qualifier
- 管理団体に寄託、あるいは、分譲を受けているならば [/culture_collection](/ddbj/qualifiers.html#culture_collection) qualifier
- 何らかの理由で純系としての記載が困難な場合に [/isolate](/ddbj/qualifiers.html#isolate) qualifier

### 真菌  {#fungi}

酵母など単細胞生物では、種同定のレベル、あるいは、配列の数に関わらず、識別子の記載が求められます。

- 単離培養を経た純系ならば [/strain](/ddbj/qualifiers.html#strain) qualifier
- 管理団体に寄託、あるいは、分譲を受けているならば [/culture_collection](/ddbj/qualifiers.html#culture_collection) qualifier
- 何らかの理由で純系としての記載が困難な場合に [/isolate](/ddbj/qualifiers.html#isolate) qualifier

キノコなど多細胞生物では、種が同定されていない場合と同種由来の多数の配列を登録する場合に識別子の記載が求められます。

- 個体識別子としての [/isolate](/ddbj/qualifiers.html#isolate) qualifier
- 標本管理団体に寄託、あるいは、分譲を受けているならば [/specimen_voucher](/ddbj/qualifiers.html#specimen_voucher) qualifier
- 純系ならば [/strain](/ddbj/qualifiers.html#strain) qualifier

### 植物  {#plant}

単細胞の藻類などでは、種同定のレベル、あるいは、配列の数に関わらず、識別子の記載が求められます。

- 単離培養を経た純系ならば [/strain](/ddbj/qualifiers.html#strain) qualifier
- 管理団体に寄託、あるいは、分譲を受けているならば [/culture_collection](/ddbj/qualifiers.html#culture_collection) qualifier
- 何らかの理由で純系としての記載が困難な場合に [/isolate](/ddbj/qualifiers.html#isolate) qualifier

多細胞生物では、種が同定されていない場合と同種由来の多数の配列を登録する場合に識別子の記載が求められます。

- 個体識別子としての [/isolate](/ddbj/qualifiers.html#isolate) qualifier
- 標本管理団体に寄託、あるいは、分譲を受けているならば [/specimen_voucher](/ddbj/qualifiers.html#specimen_voucher) qualifier
- エコタイプは [/ecotype](/ddbj/qualifiers.html#ecotype) qualifier 
- 栽培品種ならば [/cultivar](/ddbj/qualifiers.html#cultivar) qualifier
- 純系ならば [/strain](/ddbj/qualifiers.html#strain) qualifier

### 動物  {#animal}

原生動物など単細胞生物などでは、種同定のレベル、あるいは、配列の数に関わらず、識別子の記載が求められます。

- 単離培養を経た純系ならば [/strain](/ddbj/qualifiers.html#strain) qualifier
- 管理団体に寄託、あるいは、分譲を受けているならば [/culture_collection](/ddbj/qualifiers.html#culture_collection) qualifier
- 何らかの理由で純系としての記載が困難な場合に [/isolate](/ddbj/qualifiers.html#isolate) qualifier

多細胞生物では、種が同定されていない場合と同種由来の多数の配列を登録する場合に識別子の記載が求められます。

- 個体識別子としての [/isolate](/ddbj/qualifiers.html#isolate) qualifier
- 標本管理団体に寄託、あるいは、分譲を受けているならば [/specimen_voucher](/ddbj/qualifiers.html#specimen_voucher) qualifier
- 育種的品種ならば [/note](/ddbj/qualifiers.html#note) qualifier に "breed: ****" の要領で記載
- モデル生物などの純系、近交系ならば [/strain](/ddbj/qualifiers.html#strain) qualifier
- モデル生物の変異系統の樹立、あるいは、その分譲ならば [/bio_material](/ddbj/qualifiers.html#bio_material) qualifier
- 単離培養して細胞株を樹立、あるいは、その分譲ならば [/cell_line](/ddbj/qualifiers.html#cell_line) qualifier

### ヒト  {#human}

ヒト由来配列の場合、多型記述などの目的で個体識別子の記載が必要なケースがあると思います。    
その場合でも、個体識別子は匿名化されている必要があります。個人名、あるいは、個人名を類推させるような識別子は記載を禁じます。

- 個体識別子としての [/isolate](/ddbj/qualifiers.html#isolate) qualifier
- 単離培養して細胞株を樹立、あるいは、その分譲ならば [/cell_line](/ddbj/qualifiers.html#cell_line) qualifier

### ウイルス  {#virus}

通常は [/isolate](/ddbj/qualifiers.html#isolate) qualifier の記載を強く推奨します。    
SARS-CoV-2 などのような高頻度に登録される病原ウイルスでは [/isolate](/ddbj/qualifiers.html#isolate) qualifier に 
[ICTV](https://ictv.global/ ) が推奨する以下の書式で ID を記載することを強く勧めています。     
- 書式: ```[virus_type]/[host_common_name]/[locality_name]/[sample_identifier]/[year]```    
- 記載例: ```SARS-CoV-2/human/Japan/A12/2021```

| ```virus_type``` | ウイルスの略称、もしくは、genotype 他、タイプ区分  |
| ```host_common_name``` | [/host](/ddbj/qualifiers.html#host) qualifier に示す宿主の通用名  |
| ```locality_name``` | [/country](/ddbj/qualifiers.html#country) qualifier に示す採取地名より国名あるいは地域名  |
| ```sample_identifier``` | 登録者・採取者が割り当てた任意の識別子・番号  |
| ```year``` | [/collection_date](/ddbj/qualifiers.html#collection_date) qualifier に示す採取日の年号  |

厳密には、感染細胞の培養を経るなどしなければ、純系と確認することは難しいですが、慣習的に [/strain](/ddbj/qualifiers.html#strain) qualifier を記載されているケースも多いため、受け付けます。    
ただし、/isolate qualifier の記載を推奨します。    
genotype, genogroup などは、種・系統に準ずるようなもので、サンプル識別子とは なり得ないことにご注意ください。    

### 環境サンプル  {#env}

通常は [/isolate](/ddbj/qualifiers.html#isolate) qualifier を個体、または、OTU の識別子と見做して記載してください。    
環境サンプルには [/strain](/ddbj/qualifiers.html#strain) qualifier は記載できません。    
DNA を cloning しており、その clone と対応付けが可能であれば [/clone](/ddbj/qualifiers.html#clone) qualifier に clone 名を記載してください。


## 生物名 (/organism qualifier) と識別子 {#organism} 

種、亜種、変種以下のレベルで学名を記載する場合、通常、生物名に識別子を含める必要はありません。    
ただし、下記のようなケースにご注意ください。    

### 細菌、古細菌、単細胞の真菌  {#org_uni}

種を未同定の場合でも、通常は生物名に識別子を含める必要はありません。

- 新種提唱の準備段階であれば、strain の類を含めて 生物名に記載することを推奨しています。 
- シアノバクテリアは分類体系が特殊なため、生物名に strain を含めて記載する必要があります。
- 微生物などで全ゲノム規模の配列を登録する場合、現在は種を未同定の場合、strain などを生物名に含めることを原則としています。<br>以前は種同定されているか否かに関わらず、全ゲノム規模の配列登録では、生物名に strain などを含めることを必須にしていました。


### 動物、植物、多細胞の真菌   {#org_multi}

新種提唱も含めて種が未同定の場合、生物名に識別子を含めて記載する必要があります。    
生物名に含める識別子は、必ずしも個体単位である必要はありませんので、同種と見做している単位 (OTU) 毎に割り当ててください。

### ウイルス  {#org_virus}

- 他の分類群とは異なり、新種提唱の準備段階でも学名に準じた記載が可能です。新種提唱の場合、生物名に識別子を含めて記載することを推奨します。
- 2017年以前は、登録頻度の高い病原性ウイルスの場合、strain を生物名に含めて記載する運用を続けていましたが、新規登録分には適用されません。 

### 環境サンプル  {#org_env}

ほとんどの場合、種は未同定となりますが、生物名に識別子を含める必要はありません。
