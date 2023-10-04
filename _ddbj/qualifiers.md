---
layout: tabbed_indexed_content
title: Qualifier key の定義
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: flat_file
lang: ja
---

DDBJ への新規登録で使用を推奨する qualifier key を以下に挙げています。
より詳しい INSDC qualifier key に関する情報は, Feature Table Definition の [7.3.1 Qualifier List](/ddbj/feature-table.html#7.3.1) をご参照ください。 

## Feature/Qualifier 対応  {#usage}

[Feature/Qualifier 対応一覧表](https://docs.google.com/spreadsheets/u/3/d/1qosakEKo-y9JjwUO_OFcmGCUfssxhbFAm5NXUAnT3eM/edit)には、DDBJ へ登録を推奨する feature と qualifier の組み合わせを示しています。

INSDC において記載可能な feature と qualifier の組み合わせに関しましては、[Feature Table Definition](/ddbj/feature-table.html) の [7.2 Appendix II: Feature keys reference](/ddbj/feature-table.html#7.2) をご参照ください。 

## Qualifier key の定義

### /allele<a name="allele"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#allele)</span> 

定義
: allele の名称

書式
: &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可)

例
: <pre>adh1-1</pre>


### /altitude<a name="altitude"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#altitude)</span> 

定義
: サンプルを採取した場所の地理的な高度 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>-256 m
330.12 m </pre>

備考
: 海表面を基準とした上下の高度をメートルを単位とした数値で示します。    



### /anticodon<a name="anticodon"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#anticodon)</span>


定義
: [tRNA](/ddbj/features.html#tRNA)のアンチコドンの位置とコードするアミノ酸 

入力書式
: (pos:&lt;location&gt;,aa:&lt;amino_acid&gt;)    
&lt;location&gt; は anticodon の位置に相当する塩基番号を入力します。    
&lt;amino_acid&gt; は [Amino Acid Codes](/ddbj/code.html#amino-1), [Modified and Unusual Amino Acids](/ddbj/code.html#amino-2)のリストにある省略形を使用します。

入力例
: <pre>(pos:34..36,aa:Phe)
(pos:join(5,495..496),aa:Leu)
(pos:complement(4156..4158),aa:Gln)</pre>

出力例
: <pre>(pos:34..36,aa:Phe,seq:aaa)
(pos:join(5,495..496),aa:Leu,seq:tag)
(pos:complement(4156..4158),aa:Gln,seq:ttg)</pre>



### /artificial_location<a name="artificial_location"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#artificial_location)</span>


定義
: [CDS](/ddbj/features.html#cds) または [mRNA](/ddbj/features.html#mRNA) の [location](/ddbj/location.html) が frameshift または途中に出現する終止コドンを調整するために生物学的なプロセシングではない理由で補正されていることを示すフラグ 

書式
: "heterogeneous population sequenced" または "low-quality sequence region" 

備考
: ゲノム, transcriptome など大規模な登録において, 雑多な集団の配列決定, または, 配列の決定精度が低い場合にのみ, 使用可能です。 

    

### /bio_material<a name="bio_material"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#bio_material)</span>


定義
: 配列が得られた生物材料(生きている個体・系統)の保管施設と識別子     
[識別子について](/ddbj/identifiers.html) 参照    

書式
: [&lt;institution_code&gt;:[&lt;collection_code&gt;:]]&lt;material_id&gt; 

例
: Caenorhabditis stock centre の例 

<pre>CGC:CB3912</pre> 

備考
: &lt;material_id&gt; は必須です。    
保管施設としては, 動物園, 水族館, stock centre, seed bank, germplasm repository, DNA bank などが含まれます。    
&lt;institution_code&gt; は下記を参照してください。    
[institution_code list](https://ftp.ncbi.nlm.nih.gov/pub/taxonomy/coll_dump.txt ) (NCBI FTP site)    
[BioCollections](https://www.ncbi.nlm.nih.gov/biocollections ) 


### /bound_moiety<a name="bound_moiety"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#bound_moiety)</span>


定義
: 当該 feature で示される領域に結合すると推定される分子、複合体の名称 

書式
: &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可) 

例
: <pre>GAL4 </pre>


### /cell_line<a name="cell_line"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#cell_line)</span>


定義
: 配列の得られた cell line の名称 

書式
: &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可) 

例
: <pre>MCF7</pre> 


### cell_type<a name="cell_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#cell_type)</span> 


定義
: 配列の得られた細胞のタイプ 

書式
: &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可) 

例
: <pre>leukocyte </pre>


### /chromosome<a name="chromosome"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#chromosome)</span>


定義
: 配列の得られた染色体番号, あるいは, 染色体名 

書式
: &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可) 

例
: <pre>1 </pre>


### /circular_RNA<a name="circular_RNA"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#circular_RNA)</span>


定義
: その feature が circular RNA 形成を経て backsplicing によって生じた RNA 転写産物であることを示します。 

書式
: 値なし 

備考
: backsplicing によって産物を生じた場合に [CDS](/ddbj/features.html#cds), [mRNA](/ddbj/features.html#mRNA), [tRNA](/ddbj/features.html#tRNA) で記載します。    
その [location](/ddbj/location.html) は join により、通常と異なる順番でつながっていることが示されていなければなりません。    


### /clone<a name="clone"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#clone)</span>

定義
: 配列の得られた clone の名称    
[識別子について](/ddbj/identifiers.html) 参照    

書式
: &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可) 

例
: <pre>lambda-hIL7.3 </pre>


### /clone_lib<a name="clone_lib"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#clone_lib)</span>


定義
: 配列の得られた clone library の名称 

書式
: &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可)  

例
: <pre>lambda gt11 rice root cDNA (Gene Tech, No. 20)</pre>


### /codon_start<a name="codon_start"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#codon_start)</span> 


定義
: タンパク質のコード領域がスタートコドンで始まらない場合に[読み枠の開始位置](/ddbj/cds.html#frame)を 1, 2, 3 の中から選択します。 

書式
: 1 or 2 or 3 (全角不可) 


### /collected_by<a name="collected_by"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#collected_by)</span> 


定義
: 標本個体を採集した人物、または、団体の名称。
フルネーム記載を推奨。

書式
: &lt;text&gt; (全角, ダブルクォーテーション( " ) 不可) 

例
: <pre>Dan Janzen</pre>


### /collection_date<a name="collection_date"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#collection_date)</span>


定義
: 標本を採取した日付    
日時の幅を示す場合は、２つの値を slash "/" で区切って記載してください。    
採取した時刻を記載する場合、日付の後に "T" を付加し、続けて、時間と分を記載してください。    
時刻は協定世界時 (UTC) ・グリニジ平均時 "Zulu Time" (Z) で記載してください。 

書式
:    

YYYY-MM-DDThh:mm:ssZ    
YYYY-MM-DDThh:mmZ    
YYYY-MM-DDThhZ    
YYYY-MM-DD    
YYYY-MM    
YYYY    
    
YYYY/YYYY   
YYYY-MM-DD/YYYY-MM-DD    
YYYY-MM/YYYY-MM    
YYYY-MM-DDThh:mmZ/YYYY-MM-DDThh:mmZ    
    
'YYYY': 年号を表す４桁の数字    
'MM': 月を表す２桁の数字 (01 ～ 12)    
'DD': 日を表す２桁の数字 (01 ～ 31)    
'hh': 時を表す２桁の数字 (00 ～ 23)    
'mm': 分を表す２桁の数字 (00 ～ 59)    
'ss': 秒を表す２桁の数字 (00 ～ 59)    

例
: <pre>2015-10-11T17:53:03Z
1952-10-21T11:43Z
1952-10-21T11Z
1952-10-21
1952-10
1952
1952/1953
1952-10-21/1953-02-15
1952-10/1953-02
1952-10-21T11:43Z/1952-10-21T17:43Z</pre>

備考
: 日付まで特定した記載 (YYYY-MM-DD) を強く推奨します。    
INSDC では 'Mmm' (月の略記) を含む "21-Oct-1952" のような旧書式のデータが維持されており、その登録受付も可能としていますが、DDBJ では、旧書式でのデータ登録を受け付けておりません。 


### /country<a name="country"></a><span class="right-alignment">[Feature　Table Definition](/ddbj/feature-table.html#country)</span>


定義
: 疫学的、あるいは、個体群研究において配列サンプルを得た地域を 政治上の国、大洋、または、海の名称で示し、続けて地方・地域を示します。     
１つの qualifier 内で複数の地点を記載することは禁止しています。    
同一配列が観測された場合でも、原則、[地点別に複数の登録](/ddbj/representative-sequence.html )に分けてください。

書式
: &lt;国名&gt;[:&lt;詳細な地名&gt;] (全角, ダブルクォーテーション ( " )  不可) 

例
: <pre>Japan:Kanagawa, Hakone, Lake Ashi</pre>

備考
: 国名は[国名リスト](/ddbj/country.html)から選択します。 

### /cultivar<a name="cultivar"></a><span class="right-alignment">[Feature Table　Definition](/ddbj/feature-table.html#cultivar)</span>


定義
: 配列の得られた植物の栽培品種名 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>Nipponbare </pre>

### /culture_collection<a name="culture_collection"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#culture_collection)</span>


定義
: 配列の得られた培養細胞の保管施設と ID    
[識別子について](/ddbj/identifiers.html) 参照    

書式
: &lt;institution-code&gt;:[&lt;collection-code&gt;:]&lt;culture_id&gt; 

例
: <pre>ATCC:26370 </pre>

備考
: &lt;institution-code&gt; と &lt;culture_id&gt; が必須です。    
生きている微生物やウイルスの培養系、および、細胞株を記載する際に用います。    
&lt;institution_code&gt; は下記などを参照してください。    
[institution_code list](https://ftp.ncbi.nlm.nih.gov/pub/taxonomy/coll_dump.txt ) (NCBI FTP site)    
[BioCollections](https://www.ncbi.nlm.nih.gov/biocollections )

### /db_xref<a name="db_xref"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#db_xref)</span>


定義
: 他のデータベース内の関連情報を示す 

書式
: &lt;データベース名&gt;:&lt;ID&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>UniProtKB/Swiss-Prot:P28763</pre>

備考
: 原則として、新規登録データには記載できません。    
アノテーションの根拠として参照した場合は db_xref ではなく、/[inference](#inference) を用いて記載してください。    
データベース名には[データベースリスト](/ddbj/db_xref.html)の何れかを記載します。


### /dev_stage<a name="dev_stage"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#dev_stage)</span> 

定義
: 配列が得られた生物の発生段階 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>fourth instar larva</pre>


### /direction<a name="direction"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#direction)</span>

定義
: DNA の複製開始方向 

書式
: left, right, both の中から選択します (全角不可) 


### /EC_number<a name="EC_number"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#EC_number)</span>

定義
: タンパク質産物としての酵素コミッション番号 

書式
: &lt;identifier&gt;.&lt;identifier&gt;.&lt;identifier&gt;.&lt;identifier&gt; 

例
: <pre>1.1.2.4
1.1.2.-
1.1.2.n</pre>

備考
: "-" は番号が不明な場合, "n" は番号が未割当の場合に用います。


### /ecotype<a name="ecotype"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#ecotype)</span> 

定義
: 遺伝学的に生育環境への適応を反映した表現型特性を示す種内集団 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>Columbia </pre>


### /environmental_sample<a name="environmental_sample"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#environmental_sample)</span><a name="environmental_sample"></a>

定義
: PCR, DGGE, あるいは、その他の方法で直接, 分子を単離したため、生物種が同定できない大量の環境DNAサンプルに由来した配列であることを示します。    
詳細は [Environmental sequence の登録](/ddbj/environmental.html)を ご参照ください。 

書式
: 値なし 

備考
: /environmental_sample 使用時には /[isolation_source](#isolation_source) qualifier も必要です。    
/[strain](#strain) qualifier と同時には使用できません。 


### /estimated_length<a name="estimated_length"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#estimated_length)</span>

定義
: 配列内のギャップの推定長 

入力書式
: unknown or known 

入力例
: <pre>unknown
known</pre>

出力書式
: unknown or &lt;整数&gt; 

出力例
: <pre>unknown
342</pre>

### /exception<a name="exception"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#exception)</span><a name="exception"></a>


定義
: アミノ酸翻訳の特殊な例外 

書式
: 以下から選択します

RNA editing    
reasons given in citation    
rearrangement required for product    
annotated by transcript or proteomic data    


備考
: /exception="annotated by transcript or proteomic data" を記載する場合、その証拠になる転写産物, あるいは, タンパク質の存在を示すために [/inference](#inference) qualifier を記述する必要があります。 


### /experiment<a name="experiment"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#experiment)</span>

定義
: feature 記載の根拠となる生物学的な実験の簡単な記述 

書式
: [CATEGORY:]&lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)    
CATEGORY は省略可能です。記載する場合は下記のリストから選択します。    

COORDINATES    
DESCRIPTION    
EXISTENCE    

例
: <pre>COORDINATES: 5' and 3' RACE    
Northern blot    
heterologous expression system of Xenopus laevis oocytes</pre>

備考
: 実験の詳細までは含めないでください。    
2005年の12月に /evidence=EXPERIMENTAL を experiment に置き換える際,    
<pre>/experiment="experimental evidence, no additional details recorded"</pre>
が使われました。 


### /focus<a name="focus"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#focus)</span>

定義
: 配列が複数の生物種に由来する場合に, 最も注目すべき source feature であることを示します。 

書式
: 値なし


### /frequency<a name="frequency"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#frequency)</span>


定義
: 当該 feature が存在する頻度 

書式
: &lt;観測した事例の数&gt; in &lt;調査した個体の総数&gt;,    
&lt;観測した事例の数&gt;/&lt;調査した個体の総数&gt;,    
or &lt;小数&gt; 

例
: <pre>1 in 12
23/108
.85</pre>


### /function<a name="function"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#function)</span>

定義
: そのfeatureで示される配列に起因する機能 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>essential for recognition of cofactor</pre>

### /gap_type<a name="gap_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#gap_type)</span><a name="gap_type"></a>


定義
: genome assembly の一部において、構成要素間の連結部に位置する gap の種別 

書式
: 以下から選択します。


between scaffolds    
within scaffold    
telomere    
centromere    
short arm    
heterochromatin    
repeat within scaffold    
repeat between scaffolds    
contamination    
unknown    

備考
: [AGP Specification](https://www.ncbi.nlm.nih.gov/assembly/agp/AGP_Specification/ )に従い、[assembly_gap](/ddbj/features.html#assembly_gap) feature でのみ、使用します

### /gene<a name="gene"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#gene)</span>


定義
: 配列に対応する遺伝子シンボル 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>ilvE</pre>

入力時の注意点
: [CDS](/ddbj/features.html#cds)に関してましては [遺伝子命名に関する考え方](/ddbj/cds.html#product)もご参照ください。


- 一般に通用する複数の略号がある場合でも複数の略号を記載しないで下さい
- また, そのために不必要に区切り記号を使用しないで下さい。
- 略号の複数記載を希望される場合は, 代表的な略号を /gene qualifier に記載し, その他の略号を /gene_synonym qualifier に記載してください。


### /gene_synonym<a name="gene_synonym"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#gene_synonym)</span>

定義
: 配列に対応する遺伝子シンボル, gene, または, locus_tag で使用した記載とは別な呼称 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>ilvE</pre>

### /germline<a name="germline"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#germline)</span><a name="germline"></a>


定義
: 配列が適応的免疫反応の要素である体細胞ゲノム再編成を受けていないことを示します。親の germline から受け継がれ,再編成を受けていない配列であることを示します。 

書式
: 値なし 

備考
: /[rearranged](#rearranged)と同時に記載することはできません。


### /haplogroup<a name="haplogroup"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#haplogroup)</span>

定義
: 配列多型を共有する類似な haplotype グループの名称。haplogroup は, しばしば, 個体群移動の追跡に利用されます。 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>H*</pre>


### /haplotype<a name="haplotype"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#haplotype)</span>

定義
: 同じ染色体上で連鎖する対立遺伝子の組み合わせの名称。    
組み換えがない場合それぞれのハプロタイプはひとつの単位として遺伝するので、集団の中での遺伝子流動を追うために使われます。    
[識別子について](/ddbj/identifiers.html) 参照    

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>M3 [.42]
Dw3 B5 Cw1 A1</pre>


### /host<a name="host"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#host)</span>

定義
: 配列決定した分子を得た生物の(実験室ではない)自然界における宿主の学名 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>Homo sapiens
Homo sapiens 12 years old girl</pre>


### /identified_by<a name="identified_by"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#identified_by)</span>

定義
: 標本個体の分類学的な同定を行った専門家の名前    
フルネーム記載を強く推奨

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>John Burns</pre>


### /inference<a name="inference"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#inference)</span><a name="inference"></a>

定義
: 根拠となる生物学的な実験ではない推定の構造化された記述 

書式
: [CATEGORY:]TYPE[ (same species)][:EVIDENCE_BASIS]    
CATEGORY は省略可能です。記載する場合は下記のリストから選択します。

COORDINATES    
DESCRIPTION    
EXISTENCE    
    
[TYPE] は下記のリストから選択します。    
    
similar to sequence    
similar to AA sequence    
similar to DNA sequence    
similar to RNA sequence    
similar to RNA sequence, mRNA    
similar to RNA sequence, EST    
similar to RNA sequence, other RNA    
profile    
nucleotide motif    
protein motif    
ab initio prediction    
alignment 

例
: <pre>similar to DNA sequence:INSD:AY411252.1
similar to RNA sequence, mRNA:RefSeq:NM_000041.2
similar to DNA sequence (same species):INSD:AACN010222672.1
profile:tRNAscan:2.1
protein motif:InterPro:IPR001900
ab initio prediction:Genscan:2.0
alignment:Splign:1.26p:RefSeq:NM_000041.2,INSD:BC003557.1</pre>

備考
: [inference の推奨例](https://www.insdc.org/submitting-standards/inference-qualifiers/ )    

- [:EVIDENCE_BASIS] は任意ですが, 参照したデータベースエントリ (Accession number と version を含む), あるいはアルゴリズム (version を含む) を記述します。    
- [(same species)] は任意 同種との相同性により得られた推定の場合記述します。    


### /isolate<a name="isolate"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#isolate)</span>

定義
: 配列の得られたindividual isolate    
[識別子について](/ddbj/identifiers.html) 参照    

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre> SI-152
DGGE: C12</pre>


### /isolation_source<a name="isolation_source"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#isolation_source)</span><a name="isolation_source">

定義
: 配列が得られた生物学的サンプルに関する, 物理的, 環境的, かつまたは, 地理的な由来 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>rumen isolates from standard pelleted ration-fed steer #6</pre>


### /lab_host<a name="lab_host"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#lab_host)</span>

定義
: 配列決定した分子を得た生物を増殖させるために実験室で使われた宿主の学名 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>Gallus gallus
Gallus gallus embryo
Escherichia coli strain DH5 alpha
Homo sapiens HeLa cells</pre>


### /lat_lon<a name="lat_lon"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#lat_lon)</span>

定義
: 配列決定したサンプルが採取された位置の地理的座標。緯度 (latitude) と経度 (longitude)。

書式
: d[d.dddddddd] &lt;N or S&gt; d[dd.dddddddd] &lt;W or E&gt; 

例
: <pre>47.94 N 28.12 W
45.0123 S 4.1234 E
45.01234567 S 4.12345678 E</pre>

備考
: N と S は北緯と南緯、E と W は東経と西経を示します。    
小数点以下の数字は分秒ではなく小数で記載してください。    
小数点以下第8位まで記載可能です。


### /linkage_evidence<a name="linkage_evidence"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#linkage_evidence)</span>

定義
: [assembly_gap](/ddbj/features.html#assembly_gap) で示される連鎖の証拠。[assembly_gap](/ddbj/features.html#assembly_gap) feature で [gap_type](#gap_type) の値が "within scaffold""repeat within scaffold" あるいは "contamination" の場合のみ使用可能です。[gap_type](#gap_type) の値が "contamination" の場合、/linkage_evidence の値は "unspecified" にする必要があります。 

書式
: 以下から選択します。


align genus    
align xgenus    
align trnscpt    
clone contig    
map    
paired-ends    
pcr    
proximity ligation    
strobe    
within clone    
unspecified    

備考
: [AGP Specification](https://www.ncbi.nlm.nih.gov/assembly/agp/AGP_Specification/ )に従い、[assembly_gap](/ddbj/features.html#assembly_gap) feature でのみ、使用します 


### /locus_tag<a name="locus_tag"></a><span class="right-alignment">[Feature Table　Definition](/ddbj/feature-table.html#locus_tag)</span>

定義
: (主としてゲノムプロジェクト用に)登録者が体系的に一定な識別子を 遺伝子とその関連 feature の検索を目的として割り当てたもの 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>ABC_0022
A1C_00001</pre>

備考
: 同一の値を取る /locus_tag はエントリ内に存在しても構いませんが, それは, 同一の遺伝子に関連することを示すものであり, それ以外の場合は /locus_tag の値は一意性を確保されていなければなりません。    
また, [/locus_tag の値に用いる prefix は事前登録制](/ddbj/locus_tag.html)とし, INSDC 全体においても, 広く一意性を確保するように努めています。 


### /macronuclear<a name="macronuclear"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#macronuclear)</span>

定義
: 繊毛虫などで配列が大核 (生殖核でない)に由来することを示します。 

書式
: 値なし 


### /map<a name="map"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#map)</span>

定義
: その feature のゲノム上の位置情報 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>8q12-q13</pre>


### /mating_type<a name="mating_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#mating_type)</span><a name="mating_type"></a>

定義
: 配列の得られた生物の mating type を示します。原核生物, あるいは, 減数分裂による性的に二形性の配偶子を伴わない真核生物で用います (cf. [sex](#sex))。 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>MAT-1
plus
-
odd
even</pre>


### /metagenome_source<a name="metagenome_source"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#metagenome_source)</span>

定義
: Metagenome Assembled Genome (MAG) として得られた配列、すなわち、metagenome から単一 taxon として assemble された場合に、その由来となった metagenome を記載します。 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>human gut metagenome
soil metagenome</pre>
[taxonomy database に存在する metagenome を含む値](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&amp;id=408169&amp;lvl=3&amp;keep=1&amp;srchmode=1&amp;unlock)でなければなりません。 

備考
: /metagenome_source を記載する場合は /[environmental_sample](#environmental_sample) の記載が必須です。 


### /mobile_element_type<a name="mobile_element_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#mobile_element_type)</span>

定義
: mobile_element の名称 

書式
: &lt;mobile_element_type&gt; [:&lt;mobile_element_name&gt;]&lt;mobile_element_type&gt;は以下の規定値から何れか１つを選びます。


transposon    
retrotransposon    
integron    
insertion sequence    
non-LTR retrotransposon    
SINE    
MITE    
LINE    
other 

例
: <pre>transposon:Tnp9</pre>

### /mod_base<a name="mod_base"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#mod_base)</span>


定義
: 修飾塩基 

書式
: [Modified Base Abbreviation](/ddbj/code.html#nucleotide-2) のリストにある省略形を使用します。 

例
: <pre>m2g</pre>


### /mol_type<a name="mol_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#mol_type)</span>

定義
: 生体内における分子種, 合成された分子種, あるいは予想される分子種 

書式
: 以下から適切なものを選択して記載します。


genomic DNA    
genomic RNA    
mRNA    
tRNA    
rRNA    
transcribed RNA    
other RNA    
other DNA    
viral cRNA    
unassigned DNA    
unassigned RNA 

備考
: primary entry では生体内における分子種、あるいは、合成された分子種を、TPA の場合は予想される分子種を示します。    


- genomic DNA は核の DNA だけではなく, organelle, plasmid の DNA にも用います。    
- rRNA gene (rDNA) は rRNA ではなく genomic DNA を選びます。    
- mRNA を鋳型とした cDNA 配列は EST も含めて mRNA を選びます。    
- premature RNA を鋳型とした cDNA 配列は transcribed RNA を選びます。    
- 人工的に改変・構築した配列の場合は, other DNA, あるいは, other RNA を選びます。
- 通常の RNA ウイルスでは genomic RNA を選びます。
- ただし、Negarnaviricota (ssRNA negative-strand virus) では、原則、viral cRNA を選びます。    
viral cRNA はマイナス鎖 RNA ウイルスが子孫のゲノムを産生する際に生じるプラス鎖の鋳型を指します。    
ssRNA negative-strand virus 由来のゲノム配列に関しては、原則、記載を以下に統一しています。    
    - アミノ酸翻訳方向と正: viral cRNA    
    - アミノ酸翻訳方向と逆: genomic RNA 


### /ncRNA_class<a name="ncRNA_class"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#ncRNA_class)</span>

定義
: タンパク質をコードしない RNA ([ncRNA](/ddbj/features.html#ncRNA)) の種別 

書式
: &lt;TYPE&gt; 

入力例
: <pre>miRNA
siRNA</pre>

備考
: &lt;TYPE&gt; は [Controlled vocabulary for ncRNA classes](https://www.insdc.org/submitting-standards/ncrna-vocabulary/ ) になければなりません。    
otherを選択した場合は /[product](#product) に名称、/[note](#note) に簡単な説明を記載してください。 


### /note<a name="note"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#note)</span><a name="note"></a>

定義
: 自由記述の補足説明 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可)


### /number<a name="number"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#number)</span>

定義
: [exon](/ddbj/features.html#exon), [intron](/ddbj/features.html#intron) の番号 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>5a</pre>


### /old_locus_tag<a name="old_locus_tag"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#old_locus_tag)</span>

定義
: ゲノムプロジェクトがfeature 検索を目的として割り当てたID 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>RSc0382</pre>


### /operon<a name="operon"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#operon)</span>

定義
: その featureが属している operon (1つの転写物に転写される遺伝子群) の名称 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>lac</pre>


### /organelle<a name="organelle"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#organelle)</span>

定義
: 配列の得られたオルガネラ 

書式
: 以下のオルガネラタイプから選択します。


mitochondrion    
mitochondrion:kinetoplast    
hydrogenosome    
plastid:chloroplast    
plastid:apicoplast    
plastid:chromoplast    
plastid:cyanelle    
plastid:leucoplast    
plastid:proplastid    
plastid    
chromatophore    
nucleomorph    


### /organism<a name="organism"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#organism)</span>

定義
: 配列決定された試料の元となる生物の学名、または、上位分類、あるいは、物質の名称。 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>Homo sapiens
Lactobacillaceae bacterium
West Nile virus
synthetic construct
uncultured bacterium</pre>

備考
: 詳しくは, [Organism Qualifier について](/ddbj/organism.html)を参照して下さい。 


### /PCR_conditions<a name="PCR_conditions"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#PCR_conditions)</span>

定義
: PCR の条件 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>Initial denaturation:94degC,1.5min</pre>


### /PCR_primers<a name="PCR_primers"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#PCR_primers)</span>

定義
: 配列を増幅するために使用されたPCR プライマー１回のPCR反応で使用したプライマーをすべて含む 

書式
: [fwd_name: XXX1, ]fwd_seq: xxxxx1,[fwd_name: XXX2, ]fwd_seq: xxxxx2, [rev_name: YYY1, ]rev_seq: yyyyy1, [rev_name: YYY2, ]rev_seq: yyyyy2    

例
:    
 1)
<pre>fwd_name: CO1P1, fwd_seq: ttgattttttggtcayccwgaagt, rev_name: CO1R4, rev_seq: ccwvytardcctarraartgttg</pre>
 2)
<pre>fwd_seq: tgtgtgtgtgactgaca, rev_seq: tagcgatacggtcaatgc</pre>
 3)
<pre>fwd_name: hoge1, fwd_seq: cgkgtgtatcttact, rev_name: hoge2, rev_seq: cggtgtatcttact</pre>
 4)
<pre>fwd_name: CO1P1, fwd_seq:ttgattttttggtcayccwgaagt, fwd_name: CO1P2, fwd_seq: gatacacaggtcayccwgaagt, rev_name: CO1R4, rev_seq: ccwvytardcctarraartgttg</pre>

備考
:    
- fwd_seq と rev_seq は両者ともに必須, fwd_name と rev_name は任意。  
- 配列は常に 5'から3' の方向。  
- [修飾塩基](/ddbj/code.html#nucleotide-2)は &lt;i&gt; のように&lt; &gt;で囲います。    
それ以外の塩基配列は <[IUPAC で決められたアルファベット](/ddbj/code.html#nucleotide-1)で記載されます。 


### /plasmid<a name="plasmid"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#plasmid)</span>

定義
: 配列の得られた天然のプラスミドの名称 (cloning vector を意味するものではありません) 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>C-589</pre>


### /product<a name="product"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#product)</span>

定義
: feature に対応した遺伝子産物の名称, 例えば [mRNA](/ddbj/features.html#mRNA) featureには mRNA の名称, [CDS](/ddbj/features.html#cds) にはタンパク質の名称, [mat_peptide](/ddbj/features.html#mat_peptide) には, 成熟タンパク質の名称 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
:    

- CDS feature の場合
<pre>trypsinogen</pre>
- mat_peptide feature の場合 
<pre>trypsin</pre> 
- mRNA feature の場合 
<pre>XYZ neural-specific transcript</pre>


入力時のご注意
: [CDS](/ddbj/features.html#cds) に関しましては, [遺伝子命名に関する考え方](/ddbj/cds.html#product)もご参照ください。
- 原則, 略号の類ではない一般名を記載して下さい。
- 生物名を含めないで下さい。
- 一般名が複数ある場合でも, 複数の名称を記載しないで下さい。    
また, そのために不必要な区切り記号を使用しないで下さい。    
一般名の複数記載を希望される場合は, 代表的な名称を /product qualifier に記載し, その他の名称を /note qualifier に記載して下さい。
- 機能, 名称等が不明な蛋白質の場合は, hypothetical protein と記載することを推奨します。


### /protein_id<a name="protein_id"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#protein_id)</span>

定義
: 翻訳される [CDS feature](/ddbj/features.html#cds) に対して国際塩基配列データベース INSDC が発行する識別子です。    
登録時には入力できません。

書式
: &lt;identifier&gt;.&lt;version&gt; 

例
: <pre>BAA12345.1
AAA1234567.1</pre>

備考
: IDは３文字のアルファベットと５つの数字で構成されています。   
ピリオドの後の数字はその /protein_id の version番号です。    
塩基配列更新、あるいは、他の理由で CDS feaure の翻訳アミノ酸配列が変化した場合、 /protein_id は変わりませんが、version 番号が上がります。 


### /proviral<a name="proviral"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#proviral)</span>

定義
: 配列が得られたウイルス、または、ファージが別の生物のゲノム内に一体化していることを示します。 

書式
: 値なし 


### /pseudo<a name="pseudo"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#pseudo)</span>

定義
: 記載されている feature が本来の機能を持たないことを示します。    
[CDS feature](/ddbj/features.html#cds) に pseudo を指定すると [translation](#translation) が出力されません。 

書式
: 値なし 

備考
: 新規登録では記載しないでください。必要な場合は /[pseudogene](#pseudogene) を記載してください。 


### /pseudogene<a name="pseudogene"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#pseudogene)</span><a name="pseudogene"></a>

定義
: 記載されている feature が pseudogene であると登録者が判断したことを示します。    
[CDS feature](/ddbj/features.html#cds) に pseudogene を指定すると [translation](#translation) が出力されません。 

書式
: 以下のタイプから選択します。


processed    
unprocessed    
unitary    
allelic    
unknown    

備考
: タイプの詳細 は [Controlled vocabulary for /pseudogene qualifier](https://www.insdc.org/submitting-standards/pseudogene-qualifier-vocabulary/ ) で解説されています。 


### /rearranged<a name="rearranged"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#rearranged)</span><a name="rearranged"></a>

定義
: 配列が適応的免疫反応の要素である体細胞ゲノム再編成を受けていることを示します。親の germline から受け継がれた後,再編成を受けた配列であることを示します。 

書式
: 値なし 

備考
: /[germline](#germline) qualifier と同時に記載することはできません。 


### /regulatory_class<a name="regulatory_class"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#regulatory_class)</span>

定義
: 転写、翻訳、複製、または染色体構造に関連する調節において機能する配列領域の分類区分 

書式
: 以下のタイプから選択します

attenuator    
CAAT_signal    
DNase_I_hypersensitive_site    
enhancer    
enhancer_blocking_element    
GC_signal    
imprinting_control_region    
insulator    
locus_control_region    
matrix_attachment_region    
minus_35_signal    
minus_10_signal    
polyA_signal_sequence    
promoter    
recoding_stimulatory_region    
recombination_enhancer    
replication_regulatory_region    
response_element    
ribosome_binding_site    
riboswitch    
silencer    
TATA_box    
terminator    
transcriptional_cis_regulatory_region    
uORF    
other    

備考
: タイプの詳細 は [Controlled vocabulary for /regulatory_class](https://www.insdc.org/submitting-standards/controlled-vocabulary-regulatoryclass/ ) で解説されています。 


### /replace<a name="replace"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#replace)</span>

定義
: 比較対象の配列上でその feature の位置において置換される塩基 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>a</pre>


### /ribosomal_slippage<a name="ribosomal_slippage"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#ribosomal_slippage)</span>

定義
: 翻訳の途中で読み枠が変わるなど ribosomal slippage が起きていることを示す 

書式
: 値なし 

備考
: [CDS](/ddbj/features.html#cds) の [location](/ddbj/location.html) で "join(486..1784,1784..4810)" などのように ribosomal slippage の位置が示される



### /rpt_family<a name="rpt_family"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#rpt_family)</span>


定義
: くり返し配列タイプの名称 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) ) 

例
: <pre>Alu
Kpn</pre>


### /rpt_type<a name="rpt_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#rpt_type)</span>

定義
: 配列のくり返し構造 

書式
: 以下から選択します。

tandem    
inverted    
flanking    
terminal    
direct    
dispersed    
nested    
long_terminal_repeat    
non_ltr_retrotransposon_polymeric_tract    
x_element_combinatorial_repeat    
y_prime_element    
telomeric_repeat    
centromeric_repeat    
other    

備考
: 規定値の詳細は [Controlled vocabulary for /rpt_type qualifier](https://www.insdc.org/submitting-standards/controlled-vocabulary-rpttype-qualifier/ ) に解説があります。 


### /rpt_unit_seq<a name="rpt_unit_seq"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#rpt_unit_seq)</span>

定義
: くり返し単位の配列 

書式
: &lt;text&gt;; acgtmrwsykvhdbn0123456798() のみ可 

例
: <pre>aagggc
ag(5)tg(8)
(aaaga)6(aaaa)1(aaaga)12</pre>


### /satellite<a name="satellite"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#satellite)</span>

定義
: satellite DNA マーカーの識別子; 同一, あるいは, 関連した短い配列単位が多数, 直列に繰り返している構造を指します。 

書式
: &lt;satellite_type&gt;[:&lt;class&gt;][&lt;identifier&gt;] 

例
: <pre>satellite: S1a
satellite: alpha
satellite: gamma III
microsatellite: DC130</pre>

備考
: &lt;satellite_type&gt;は必須であり, 下記の３つから何れかを記載します。

satellite    
microsatellite    
minisatellite    


### /segment<a name="segment"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#segment)</span>

定義
: 配列の得られた virus または phage のセグメント 

書式
: &lt;text&gt; (全角,ダブルクォーテーション ( " ) 不可) 

例
: <pre>6</pre>


### /serotype<a name="serotype"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#serotype)</span>

定義
: 配列の得られた生物、ウイルスなどの血清学的タイプ 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>B1</pre>


### /serovar<a name="serovar"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#serovar)</span>

定義
: (一般に原核生物で) 抗原特性により分類される血清学的変種 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>O157:H7</pre>


### /sex<a name="sex"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#sex)</span><a name="sex"></a>

定義
: 配列の得られた生物の性別を示します。減数分裂と性的に二形性の配偶子を伴う真核生物において用います(cf. [mating_type](#mating_type))。 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>female
male
hermaphrodite
monoecious
dioecious</pre>


### /specimen_voucher<a name="specimen_voucher"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#specimen_voucher)</span>

定義
: 配列の得られた標本(動植物個体の一部 または 全体)が維持管理されている管理団体とＩＤ    
[識別子について](/ddbj/identifiers.html) 参照    

書式
: [&lt;institution_code&gt;:[&lt;collection_code&gt;:]]&lt;specimen_id&gt; 

例
: <pre>UAM:Mamm:52179
AMCC:101706
USNM:field series 8798
personal:Dan Janzen:99-SRNP-2003</pre>

備考
:    
- &lt;collection_code&gt; が存在しない場合は記載不要です。    
- &lt;institution_code&gt; は下記などを参照してください。    
[institution_code list](https://ftp.ncbi.nlm.nih.gov/pub/taxonomy/coll_dump.txt ) (NCBI FTP site)    
[BioCollections](https://www.ncbi.nlm.nih.gov/biocollections ) 


### /strain<a name="strain"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#strain)</span><a name="strain"></a>

定義
: 配列の得られた strain の名称    
[識別子について](/ddbj/identifiers.html) 参照    

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) ) 

例
: <pre>BALB/c</pre>


### /sub_clone<a name="sub_clone"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#sub_clone)</span>

定義
: 配列の得られた sub-clone の名称 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>lambda-hIL7.20g</pre>


### /submitter_seqid<a name="submitter_seqid"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#submitter_seqid)</span>

定義
: [TSA](/ddbj/tsa.html), [TLS](/ddbj/tls.html), [WGS](/ddbj/wgs.html), [CON](/ddbj/con.html) におけるセット内で一意な識別子    
[識別子について](/ddbj/identifiers.html) 参照    

書式
: &lt;text&gt;    
全角, ダブルクォーテーション ( " ), パイプ ( \| ), イコール ( = ), 角括弧 ( [ ] ), 引用符 ( &gt; ) スペース 不可 

例
: <pre>contig53    
scaffold25</pre>


### /sub_species<a name="sub_species"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#sub_species)</span>

定義
: 配列の得られた生物の subspecies の名称 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>troglodytes</pre>


### /sub_strain<a name="sub_strain"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#sub_strain)</span>

定義
: 配列の得られた遺伝学的あるいは他の方法で改変された sub-strain の名称。    
その親に当たる strain は [strain](#strain) qualifier に記載されます。    
[識別子について](/ddbj/identifiers.html) 参照    

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>abis</pre>

備考
: strain が不明な場合は /sub_strain は使わず /strain に記載します。    

- 通常の例: /strain="K-12", /sub_strain="MG1655"
- strain が不明な例: /strain="MG1655"


### /tag_peptide<a name="tag_peptide"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#tag_peptide)</span>

定義
: タンパク質分解の標的となる [tmRNA](/ddbj/features.html#tmRNA) のコードするペプチドタグとその終止コドンの塩基位置 

書式
: &lt;base_range&gt; 

例
: <pre>90..122</pre>


### /tissue_type<a name="tissue_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#tissue_type)</span>

定義
: 配列の得られた組織の名称 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>brain
liver</pre>


### /trans_splicing<a name="trans_splicing"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#trans_splicing)</span>

定義
: 成熟 RNA の形成の過程で異なる RNA 分子の exon が結合することを示します。 

書式
: 値なし 

備考
: [CDS](/ddbj/features.html#cds),[mRNA](/ddbj/features.html#mRNA) などの　[location](/ddbj/location.html) で join(complement(69611..69724),139856..140087) などのように trans splicing が起きていることが示されます。 


### /transgenic<a name="transgenic"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#transgenic)</span>

定義
: 外来 DNA が組み込まれた形質転換生物由来の配列であることを示します。 

書式
: 値なし 


### /transl_except<a name="transl_except"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#transl_except)</span><a name="transl_except"></a>

定義
: 塩基配列上の特定の位置において [CDS](/ddbj/features.html#cds) の翻訳が [transl_table](#transl_table) で指定されたコドン暗号表に従わない場合, 翻訳例外がある場合などに入力します。 

書式
: (pos:&lt;location&gt;,aa:&lt;amino_acid&gt;) &lt;amino_acid&gt;は [Amino Acid Codes](/ddbj/code.html#amino-1), [Modified and Unusual Amino Acids](/ddbj/code.html#amino-2) のリストにある省略形を使用します。 

例
: - 特定の位置で翻訳例外がある場合 
<pre>/transl_except=(pos:213..215,aa:Sec)</pre>
213番目から215番目が例外的に selenocysteine (一文字表記ではU) に翻訳されます。    
- polyadenylation により stop codon になる場合 
<pre>/transl_except=(pos:1017,aa:TERM)
/transl_except=(pos:2000..2001,aa:TERM)</pre>
1017番目のt, あるいは2000, 2001番目の ta の3'側に a が付加されることにより taa stop codon となる    
- [Amino Acid Codes](/ddbj/code.html#amino-1), [Modified and Unusual Amino Acids](/ddbj/code.html#amino-2) で定義されないアミノ酸に翻訳される場合 
<pre>/transl_except=(pos:213..215,aa:OTHER)
/note="unusual amino acid" </pre>
213番目から215番目が /note qualifier に記載されたアミノ酸に例外的に翻訳される 


### /transl_table<a name="transl_table"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#transl_table)</span><a name="transl_table"></a>

定義
: genetic code, コドン暗号表の番号 

書式
: &lt;整数&gt; (1 - 6, 9 - 16, 21 - 31, 33) 

例
: <pre>11</pre>

備考
: [CDS](/ddbj/features.html#cds) の /[translation](#translation) は /transl_table で指定されたコドン暗号表に従って自動的にアミノ酸翻訳されます    
/[transl_except](#transl_except), /[exception](#exception) が指定されている場合は除きます。    
    
国際塩基配列データベースで使用するコドン暗号表は taxonomy database: [The Genetic Codes](/ddbj/geneticcode.html) で規定されています。    
/transl_table が入力されていない場合には, 自動的に Standard code (/transl_table=1) によって翻訳されます。 

入力方法
: - 塩基配列登録システムの場合    
通常は, 自動的にその生物名に対応した /transl_table をセットしますので選択する必要はありません。    
Taxonomy database に登録されていない生物名の場合は、/transl_table がおわかりでしたら genetic code の項目に入力してください。
各[CDS](/ddbj/features.html#cds) feature の transl_table に反映されます。    
- MSS の場合    
コドン暗号表の番号を適切に入力して下さい。 


### /translation<a name="translation"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#translation)</span><a name="translation"></a>

定義
: [CDS](/ddbj/features.html#cds) のアミノ酸翻訳配列    
[Amino Acid Codes](/ddbj/code.html#amino-1) のリストにある１文字表記を使用します。    
その他のアミノ酸の場合は全て X で表記されます。    
/[exception](#exception) qualifier が入力された場合を除き、入力された [CDS feature の情報を基に自動翻訳](/ddbj/cds.html#translation)しますので、登録の際は記載不要です。 

例
: <pre>MERRYCHRISTMASANDHAPPYNEWYEAR</pre>

備考
: /[pseudo](#pseudo) または /[pseudogene](#pseudogene) qualifier が存在する場合、その [CDS](/ddbj/features-e.html#cds) feature には /translation qualifier を出力しません。    



### /variety<a name="variety"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table.html#variety)</span>

定義
: 配列の得られた variety (変種 = varietas; 亜種の下位ランク) の名称 

書式
: &lt;text&gt; (全角, ダブルクォーテーション ( " ) 不可) 

例
: <pre>insularis</pre>
