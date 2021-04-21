---
layout: tabbed_indexed_content
title: DDBJ 公開形式 Flat file
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: flat_file
lang: ja
related_pages:
  - title: Location の記述法
    url: /ddbj/location.html
  - title: タンパク質コード配列; CDS feature について
    url: /ddbj/cds.html
  - title: 登録の見本
    url: /ddbj/example.html
  - title: 配列の記載に用いる略号
    url: /ddbj/code.html
  - title: Organism qualifier に記載する生物名
    url: /ddbj/organism.html
  - title: Feature key
    url: /ddbj/features.html
  - title: Qualifier key
    url: /ddbj/qualifiers.html
  - title: The Genetic Codes
    url: /ddbj/codontable.html
  - title: The Genetic Codes
    url: /ddbj/geneticcode.html
---

「DDBJ/EMBL-Bank/GenBank 国際塩基配列データベース」は、全世界の研究者が実験によって決定したDNA (または RNA)
の塩基配列データ <span class="red">\*</span> を、DDBJ/EMBL-Bank/GenBank 国際 DNA
データバンクが、三者間で定めたデータ構築規範に沿って収集・編集することにより構築されています。（<span class="red">\*</span>旧運用では, 論文に記載されていた塩基配列を取り込む journal scan 方式の塩基配列データ収集も実施していました。）

また、データベースの中には、日本の[Japan Patent Office (JPO)](//www.jpo.go.jp/index.html)、韓国の [Korean Intellectual Property Office (KIPO)](//www.kipo.go.kr/) 、欧州の [European Patent Office (EPO)](//www.epo.org/)、米国の [United States Patent and Trademark Office (USPTO)](https://www.uspto.gov/) が収集・処理した塩基配列データも含まれています。

塩基配列データベースは、データの単位である「エントリ」の集合として構成されています。 DDBJ に登録されたそれぞれのエントリは、DDBJ
の定めるフォーマットにしたがった「フラットファイル」 (flat file) の形式で公開されています。
フラットファイルには、塩基配列のほか、配列の登録者、関連文献、由来生物種、Feature 情報などが表示されています。 Feature 情報とは、その塩基配列のもつ生物学的特徴や遺伝子の機能、特性等に関する情報を記述したもので、記述形式は、 [The DDBJ/ENA/GenBank Feature Table Definition](/ddbj/feature-table.html) (国際塩基配列データベースが定める記述形式) によって定められています。

## DDBJ フォーマットの例 {#DDBJ_フォーマットの例}

<pre class="code flat-file"><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">AB000000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file#SequenceLengthB">450 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">mRNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">HUM</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">01-JUN-2009</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  Homo sapiens GAPD mRNA for glyceraldehyde-3-phosphate
            dehydrogenase, partial cds.
<a id="AccessionA" href="/ddbj/flat-file#AccessionB">ACCESSION</a>   AB000000
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     AB000000.1
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    .
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      Homo sapiens (human)
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 450)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver
  JOURNAL   Unpublished (2009)
<a id="CommentA" href="/ddbj/flat-file#CommentB">COMMENT</a>     Human cDNA sequencing project.
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..450</a>
                     /<a href="/ddbj/qualifiers.html#chromosome">chromosome</a>="12"
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="GT200015"
                     /<a href="/ddbj/qualifiers.html#clone_lib">clone_lib</a>="lambda gt11 human liver cDNA (GeneTech.
                     No.20)"
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers.html#map">map</a>="12p13"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens"
                     /<a href="/ddbj/qualifiers.html#tissue_type">tissue_type</a>="liver"
     <a id="CDSA" href="#CDSB">CDS</a>             <a href="/ddbj/location.html">86..&gt;450</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="GAPD"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="glyceraldehyde-3-phosphate dehydrogenase"
                     /<a href="/ddbj/qualifiers.html#protein_id">protein_id</a>="BAA12345.1"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
                     YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
                     VFTDKDKAVAQLKGGAKKV"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          102 a          119 c          131 g           98 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 cccacgcgtc cggtcgcatc gcacttgtag ctctcgaccc ccgcatctca tccctcctct
       61 cgcttagttc agatcgaaat cgcaaatggc gaagattaag atcgggatca atgggttcgg
      121 gaggatcggg aggctcgtgg ccagggtggc cctgcagagc gacgacgtcg agctcgtcgc
      181 cgtcaacgac cccttcatca ccaccgacta catgacatac atgttcaagt atgacactgt
      241 gcacggccag tggaagcatc atgaggttaa ggtgaaggac tccaagaccc ttctcttcgg
      301 tgagaaggag gtcaccgtgt tcggctgcag gaaccctaag gagatcccat ggggtgagac
      361 tagcgctgag tttgttgtgg agtacactgg tgttttcact gacaaggaca aggccgttgc
      421 tcaacttaag ggtggtgcta agaaggtctg
<a id="EndA" href="/ddbj/flat-file#EndB">//</a></code></pre>

フラットファイルは登録者から提供される情報に基づいて、一定の形式に則って作成されています。
登録者の研究上の着眼点の違いなどにより、配列が類似している登録の場合でもフラットファイルに記載される内容は異なることがあります。
検索結果を参照される際にはご注意下さい。

## FIELD COMMENTS  {#FIELD_COMMENTS}


<div id="LocusB" markdown="1">
<h3><a href="#LocusA">LOCUS</a></h3>
</div>

Locus名、配列長、塩基配列の分子タイプ、塩基配列の分子形態、Division、データの最終公開日が記載されています。


<div id="LocusNameB" markdown="1">
<h4><a href="#LocusNameA">Locus 名</a></h4>
</div>

Locus 名は、 データベース中でそのエントリのみが持つユニークな名前が付けられています。  
DDBJ
では、1996年7月以降公開されたデータに、[アクセッション番号](#AccessionB)と同じ名前を付けています。（GenBank、EMBL
も独自の命名法を取っています。）


<div id="SequenceLengthB" markdown="1">
<h4><a href="#SequenceLengthA">配列長</a></h4>
</div>

このエントリの配列の長さです。（注意：MGA データの Master record 上では、配列長は記載されません。）


<div id="MoleculeTypeB" markdown="1">
<h4><a href="#MoleculeTypeA">塩基配列の分子タイプ</a></h4>
</div>

source feature の /[mol\_type](/ddbj/qualifiers.html#mol_type) qualifier
に示される分子種に基づいて DNA, RNA, mRNA, rRNA, tRNA，cRNA のいずれかの分子タイプが記載されます。


<div id="MoleculeFormB" markdown="1">
<h4><a href="#MoleculeFormA">塩基配列の分子形態</a></h4>
</div>

塩基配列の分子形態が、線状（linear）か、環状（circular）かを示します。エントリが完全長で，かつ circular
の形態をとる場合には，"circular" と記載されます。


<div id="DivisionB" markdown="1">
<h4><a href="#DivisionA">Division</a></h4>
</div>

DDBJ では以下の21の division にデータを分類しています。

a: 由来生物種に基づく分類

| HUM | ヒト                       |
| PRI | 霊長類 (ヒトを除く)              |
| ROD | 齧歯類                      |
| MAM | 哺乳類 (ヒト，霊長類，齧歯類を除く)      |
| VRT | 脊椎動物 (ヒト，霊長類，齧歯類，哺乳類を除く) |
| INV | 無脊椎動物                    |
| PLN | 植物・真菌類　など                |
| BCT | バクテリア                    |
| VRL | ウイルス                     |
| PHG | バクテリオファージ                |

b: 生物分類に基づかない分類

|  [PAT](/ddbj/patent-data.html)  |  特許出願に含まれる塩基配列データ<br>Japan Patent Office (JPO), European Patent Office (EPO), United States Patent and Trademark Office (USPTO), Korean Intellectual Property Office (KIPO) が収集・処理したデータ  |
|  [ENV](/ddbj/env.html)  |  PCR, DGGE、あるいは、その他の方法で直接、分子を単離した環境上のサンプルに由来した配列  |
|  SYN  |  synthetic constructs<br>人為的に構成された配列  |
|  [EST](/ddbj/est.html)  |  expressed sequence tags<br>short single pass の cDNA 配列  |
|  [TSA](/ddbj/tsa.html)  |  transcriptome shotgun assemblies<br>再構成された (assembled) mRNA 配列  |
|  [GSS](/ddbj/gss.html)  |  genome survey sequences<br>short single pass のゲノム配列  |
|  [HTC](/ddbj/htc.html)  |  high throughput cDNA sequences<br>EST 以外の大規模 cDNA 配列プロジェクトに由来し，更新が期待されるデータ。<br>配列が finish した後，生物種による division に移される場合があります。  |
|  [HTG](/ddbj/htg.html)  |  high throughput genomic sequences<br>ゲノムプロジェクトに由来し，頻繁に update されることが期待されるデータで，段階に応じて以下の 3 phase に分類されます。その配列がいずれの phase であるかは KEYWORD 行に記載されます。配列が更新されると phase が上がり，finish した後は生物種による division に移されます。<br>{::nomarkdown}<ul><li>phase0; piece contig が構築される以前の配列 </li><li>phase1; 構築された piece contig の向きや順序が未確定の配列 </li><li>phase2; piece contig の向きや順序が確定した unfinished の配列</li></ul>{:/}    |
|  STS  |  sequence tagged sites<br>Genome sequencing の tag となる配列。chromosome, map, PCR_condition 等の情報が必要です。  |
|  UNA  |  未注釈データ<br>最近は UNA division は使用していません。  |
|  [CON](con.html)  |  Contig / Constructed<br>ゲノムプロジェクトのように個々に登録された一連の配列データをデータバンク側が結合し，１つのアクセッション番号を付与した長大なデータ。CON division に格納されるエントリには長大な配列を構成する配列のアクセッション番号が記載され，塩基配列は記載されません。また，すでに登録されている個々のデータのエントリは、他の division に保存されています。<br>CON division への直接のデータ登録は受け付けていません。まず、CON エントリを構成する個々の配列データを登録して頂きます。その上で CON エントリの構築が適当と判断された場合に、データバンク側で CON エントリを構築します。CON エントリを構成する個々の配列データが更新された場合には、CON エントリもバンク側で更新します。  |


<div id="ModificationDateB" markdown="1">
<h4><a href="#ModificationDateA">データの最終公開日</a></h4>
</div>

そのデータの公開日が記載されます。データが更新され再公開されると日付は変わります。


<div id="DefinitionB" markdown="1">
<h3><a href="#DefinitionA">DEFINITION</a></h3>
</div>

データの定義や遺伝子などに関する情報が簡単に記載されています。一定の記述ルールに従ってデータバンク側で作成しています。  
ただし、[Mass Submission System](/ddbj/mss.html)
からの登録では、登録者に作成していただくことがあります。

\[記載例\]

トウモロコシ catalase gene の完全配列
: 
<pre class="code flat-file"><code>  DEFINITION  Zea mays Cat3 gene for catalase, complete cds.
</code></pre>


: 書式: \[organism name\] \[gene name\] gene for \[product name\], complete cds.
  - organism name は原則としてscientific name.
  - gene name は locus を示す象徴的な略号。
  - product name は産物、CDS の場合はタンパク質、の一般名。
  - タンパク質の全長配列を含むことを示す "complete cds" を記述。

ヒト glyceraldehyde-3-phosphate dehydrogenase の cDNA 部分配列
: 
<pre class="code flat-file"><code>  DEFINITION  Homo sapiens mRNA for glyceraldehyde-3-phosphate 
              dehydrogenase, partial cds.
</code></pre>


: 書式: \[organism name\] mRNA for \[product name\], partial cds.
  - gene name が記載されていない場合は省略。
  - タンパク質の部分配列を含むことを示す "partial cds" を記述。

Bacillus 属 16S rRNA の部分配列
: 
<pre class="code flat-file"><code>  DEFINITION  Bacillus sp. AZ25 gene for 16S rRNA, partial 
              sequence.
</code></pre>

: 書式: \[organism name\] \[strain name\] gene for \[product name\], partial sequence.
  - 種を特定できない場合、種内比較の場合などでは strain name などを識別子として記載。
  - 部分配列を含むことを示す "partial sequence" を記述。

複数の CDS がある ラット mitochondria DNA の配列
: 
<pre class="code flat-file"><code>  DEFINITION  Rattus norvegicus mitochondrial genes for cytochrome 
              c oxidase subunit II, ATPase subunit 6, cytochrome c 
              oxidase subunit III, partial and complete cds.
</code></pre>

: 書式: \[organism name\] \[gene name 1\], \[gene name 2\], .... genes for \[product name 1\], \[product name 2\], ..... , partial and complete cds.
  - 5'側から3'側へ順番に gene name, product name をならべる
  - partial, complete and partial cds は省略して partial and complete cds
    とする。
  - gene name, product name が１対１で対応しない時は、原則、gene name のみ あるいは
    product name のみを記述。
  - 長くなりすぎる場合は map position などで表記。
  - 妥当と判断される場合は gene cluster, operon などを用いて表記。

ヒト肝臓 EST の 3'末端の配列
: 
<pre class="code flat-file"><code>  DEFINITION  Homo sapiens cDNA, clone:ABC123, 3' end, expressed 
              in liver.
</code></pre>

: 書式: \[organism name\] cDNA, clone:\[clone name\], \[その他の情報\].
  - clone name の記載が必要。

マウス chromosome 1q の GSS
: 
<pre class="code flat-file"><code>  DEFINITION  Mus musculus DNA, clone:1H11A14, 1q region.
</code></pre>

: 書式: \[organism name\] DNA, clone:\[clone name\], \[その他の情報\].
  - clone name の記載が必要。

ヒト GAPD，TPA (Third Party Data) の配列
: 
<pre class="code flat-file"><code>  DEFINITION  TPA_exp: Homo sapiens GAPD mRNA forglyceraldehyde-3-phosphate 
              dehydrogenase, complete cds.
</code></pre>

: 書式: \[TPA header\]: \[organism name\] \[gene name\] mRNA for \[product name\], complete cds.
  - [TPA (Third Party data)](/ddbj/tpa.html) のデータの場合、TPA\_exp: (TPA:experimental の場合)、または、TPA\_inf: (TPA:inferential の場合) が行頭に記述される。


<div id="AccessionB" markdown="1">
<h3><a href="#AccessionA">ACCESSION</a></h3>
</div>

INSD が発行する登録番号をアクセッション番号と呼んでいます。

Conventional sequence data  
: アルファベット１文字＋５桁の数字（例 A12345）または、アルファベット２文字＋６桁の数字（例 AB123456）で構成されています。<br>アルファベットの部分をプレフィックスと呼びます。<br>[プレフィックスのリスト](/documents/prefix.html)も ご参照ください。

: 複数のエントリを統合した場合や、データ登録後に内容が大幅に変更された場合などには、新規にアクセッション番号を発行することがあります。この際、新規のアクセッション番号（プライマリアクセッション番号）に対して、既存のアクセッション番号はセカンダリアクセッション番号となります。フラットファイルには先頭にプライマリアクセッション番号、２つ目以降にセカンダリアクセッション番号を記載します。プライマリアクセッション番号、あるいはセカンダリアクセッション番号、どちらの番号で検索しても，同じ変更後のデータが検索されます。

: 
<pre class="code flat-file"><code>  ACCESSION   AB999999 AB888888 AB777777
</code></pre>

: 
  |  ```AB999999```  |  プライマリアクセッション番号  |
  |  ```AB888888 AB777777```  |  セカンダリアクセッション番号  |

Bulk sequence data; WGS, TSA, TLS  
: [WGS](/ddbj/wgs.html), [TSA](/ddbj/tsa.html), TLS に発行されるアクセッション番号はアルファベット 4 文字 ＋ 8 桁（9 または 10 桁になることがあります）の数字で構成されます。<br>アルファベットの部分を[プレフィックス](/documents/prefix.html)と呼びます。<br>[For Large Scale Data (four prefix)](/documents/prefix-e.html#large)も ご参照ください。<br>例：ZZZZ01000001
: 
  | ZZZZ（アルファベット 4文字） | プロジェクトを区別する prefix                           |
  | 01（2桁の数字）           | データセットのバージョン番号                               |
  | 000001（6桁の数字）      | エントリ（各配列の）番号（エントリ数に応じて 7 桁または 8 桁になる場合があります） |
: 
  データセットが更新されるとデータセットのバージョン番号が上がります。 例：ZZZZ02000001
: 
<pre class="code flat-file"><code>  ACCESSION   ZZZZ01000001 ZZZZ01000000
</code></pre>
: 
  | ```ZZZZ01000001``` | プライマリアクセッション番号   |
  | ```ZZZZ01000000``` | セットＩＤ   |

MGA データ  
: Master record に表示される番号はリソースセットに対する番号でデータバンク側が割り振ります。
: 番号はアルファベット 5 文字＋ 7 桁の数字（例 ABCDE0000001）で構成されており、当該リソース配下の配列エントリのアクセッション番号は "MGA行" に記載されています。
: 例：ABCDE0000001

: | AB（1-2番目の文字）  | プロジェクト毎に割り振られるID (プロジェクトID \*1) |
  | CDE（3-5番目の文字）   | 各プロジェクトにおけるリソース \*2に割り振られるID    |
  | 0000001（7桁の数字） | リソース配下の配列エントリに割り振られる番号          |

  \*1 各プロジェクトIDに関しては[プロジェクトインデックス](https://ddbj.nig.ac.jp/public/ddbj_database/mga/project_index.html) をご参照ください。<br>\*2 リソースとは得られた配列の由来が同一であるものの単位を指します。

: 
<pre class="code flat-file"><code>  ACCESSION   ZZZZZ0000000
</code></pre>
: 
  | ```ZZZZZ0000000``` | リソースセットに対するアクセッション番号   |


<div id="VersionB" markdown="1">
<h3><a href="#VersionA">VERSION</a></h3>
</div>

アクセッション番号とバージョン番号で構成されています。

はじめて公開されたデータは、バージョン番号は "1"
が記載されています。当該エントリの配列が訂正・更新された場合には、バージョン番号が更新されます。通常、配列が訂正・更新された場合にアクセッション番号が変更されることはありません。

<pre class="code flat-file"><code>VERSION      AB000000.1
</code></pre>

| ```AB000000``` | アクセッション番号   |
| ```1``` | バージョン番号   |

MGA データ  
: リソースに対して割り振られた登録番号とバージョン番号で構成されています。ここで表記される登録番号は[アクセッション行](#Accession_MGA)と同じ番号（例：ZZZZZ0000000）と表記されます。
MGA では配列の更新を認めておりませんので、バージョン番号は「１」のままとなります。

: 
<pre class="code flat-file"><code>  VERSION    ZZZZZ0000000.1
</code></pre>

: | ```ZZZZZ000000```  | 登録番号 |
  | ```1```   | バージョン番号    |  


<div id="DblinkB" markdown="1">
<h3><a href="#DblinkA">DBLINK</a></h3>
</div>

BioProject, BioSample の accession number, Sequence Read Archive の Run
accession number 他、特定データベースへのリンクを記載します。

DBLINK 行は 2009 年に記載情報を拡張したため PROJECT 行から変更されました。

<pre class="code flat-file"><code>DBLINK      BioProject:PRJDA12345
            BioSample:SAMD01234567
            Sequence Read Archive:DRR012345, DRR012346     
</code></pre>

| ```BioProject``` | リンクしているデータベースの名称: [BioProject Database](/bioproject/index.html) |
| ```PRJDA12345``` | データベースにおいてリンクしている ID: BioProject accession number   |
| ```BioSample``` | リンクしているデータベースの名称: [BioSample Database](/biosample/index.html)  |
| ```SAMD01234567``` | データベースにおいてリンクしている ID: BioSample accession number   |
| ```Sequence Read Archive``` | リンクしているデータベースの名称: [Sequence Read Archive](/dra/index.html) (SRA)  |
| ```DRR012345, DRR012346``` | データベースにおいてリンクしている ID: SRA Run accession number   |


<div id="KeywordsB" markdown="1">
<h3><a href="#KeywordsA">KEYWORDS</a></h3>
</div>

KEYWORDS は、過去の登録においては、遺伝子名 ([gene](/ddbj/qualifiers.html#gene))、産物名
([product](/ddbj/qualifiers.html#product)) の索引に用いられていました。

現在は、[データの詳細種別](/documents/data-categories.html#detail) ([EST](/ddbj/est.html),
[TSA](/ddbj/tsa.html), [HTC](/ddbj/htc.html), [HTG](/ddbj/htg.html),
[GSS](/ddbj/gss.html), [WGS](/ddbj/wgs.html), [TPA](/ddbj/tpa.html)
など)、配列の特性、実験手法、ゲノム配列の完成度などに関する情報などが、必要に応じて、記載されます。[INSDC agreed
methodological keywords](/ddbj/keyword-e.html) もご参照ください。


<div id="SourceB" markdown="1">
<h3><a href="#SourceA">SOURCE</a></h3>
</div>

配列データが由来する生物の学名 (と存在する場合は一般名) を Taxonomy Database
の登録に基づいて示します。また、核由来でない場合はオルガネラタイプも示します。

<pre class="code flat-file"><code>SOURCE      Homo sapiens (human)
</code></pre>

| ```Homo sapiens (human)``` | 配列データが由来する生物の学名と一般名 |


<div id="OrganismB" markdown="1">
<h4><a href="#OrganismA">ORGANISM</a></h4>
</div>

由来生物の生物名と系統関係（lineage）を示します。

１行目に配列データが由来する生物の学名、あるいは Unified Taxonomy Database に登録された生物名が記述されています。

２行目以降に Unified Taxonomy Database に基づく生物学的分類が記述されています。

<pre class="code flat-file"><code>  ORGANISM  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi
            Mammalia; Eutheria; Primates; Catarrhini; Hominidae; Homo.
</code></pre>

| ```Homo sapiens``` | 配列データが由来する生物の学名と一般名 |
| ```Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi; Mammalia; Eutheria; Primates; Catarrhini; Hominidae; Homo.``` | Homo sapiens 系統 (lineage) |


<div id="Reference1B" markdown="1">
<h3><a href="#Reference1A">REFERENCE 1</a></h3>
</div>

データベースに登録した登録者の情報が記載されています。ただし古いデータに関してはこの限りではありません。またデータバンクが独自に構築する
[CON エントリ](/ddbj/con.html)の場合、登録者情報にあたる REFERENCE 1 は表示されない場合があります。

[塩基配列登録システム](/ddbj/web-submission.html)をご利用いただいた場合には Contact person と Submitter
の入力内容に基づいて作成されます。MSS をご利用いただいた場合は登録時のファイルに基づいて作成されます。

<pre class="code flat-file"><code>REFERENCE   1   (bases 1 to 450)
</code></pre>

注意：MGA データの Master record 上では "(bases 1 to 450)" の部分が表示されません


<div id="AuthorsB" markdown="1">
<h4><a href="#AuthorsA">AUTHORS</a></h4>
</div>

原則としてそのエントリの登録者 (Submitter(s)) を記載します。登録者 (Submitter(s))
とは、原則として、登録内容に責任を持つことが出来る人で登録内容に変更を加える
(update する) 権利を有します。

<pre class="code flat-file"><code>  AUTHORS   Mishima,H. and Shizuoka,T.
</code></pre>

| ```Mishima,H. and Shizuoka,T``` | このエントリの登録者 |


<div id="TitleB" markdown="1">
<h4><a href="#TitleA">TITLE</a></h4>
</div>

"Direct Submission" が常に表示されます。

<pre class="code flat-file"><code>  TITLE     Direct Submission
</code></pre>


<div id="JournalB" markdown="1">
<h4><a href="#JournalA">JOURNAL</a></h4>
</div>

１行目にはそのエントリの受付日 (Accept Date) が表示されます。受付日 (Accept Date)
とは、原則として、アクセッション番号を発行可能な元データが DDBJ
に到着した日付けです。  
プライマリアクセッション番号であれば、そのエントリを更新しても受付日は変わりません。

２行目以降には、[コンタクトパーソン (Contact person)](/ddbj/submission.html#contact)
の氏名、所属等の情報が表示されます。

<pre class="code flat-file"><code>  JOURNAL   Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
</code></pre>

| ```Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases.``` | このエントリが2008年11月30日に登録されたことを示します。 |
| ```Contact:Hanako Mishima```<br>```National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,```<br> ```Mishima, Shizuoka 411-8540, Japan``` | このエントリのコンタクトパーソン（Hanako Mishima）の所属と住所が記載されます。 |

E-mail アドレスと電話番号, FAX番号について

  - DDBJ への登録に関しましては，E-mail アドレスと電話番号,
    FAX番号は原則，非表示としますが，表示しておく必要がある場合は，?[DDBJ
    へのお問い合わせ](/contact-ddbj.html#to-ddbj)?からご連絡いただければ，個別に対応いたします。表示・非表示は「E-mailアドレス」「電話番号」「FAX番号」それぞれ個別に指定可能です。
  - E-mailアドレスと電話番号，FAX番号を非表示の場合、研究上の問題に関して，各配列の登録者への連絡が必要な場合はメッセージを転送いたします。お手数ですが、[?DDBJエントリ登録者へのご質問・ご要望の転送フォーム](/contact-ddbj.html#to-submitters)からご連絡ください。その際は簡単な理由(「clone
    譲渡を希望」など)を書き添えてください。

E-mailアドレスと電話番号，FAX番号が非表示の場合

<pre class="code flat-file"><code>  JOURNAL   Submitted (30-NOV-2000) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
</code></pre>

登録者が，E-mailアドレスと電話番号，FAX番号の表示をご希望の場合

<pre class="code flat-file"><code>  JOURNAL   Submitted (30-NOV-2000) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
            E-mail :mishima@supernig.nig.ac.jp
            Phone  :81-55-981-6853
            Fax    :81-55-981-6849
</code></pre>


<div id="Reference2B" markdown="1">
<h3><a href="#Reference2A">REFERENCE 2</a></h3>
</div>

REFERENCE 2 以降 ([REFERENCE 1](#Reference1B) 以外) の
REFERENCEには[そのエントリに関連する論文情報](/ddbj/submission.html#pcite)が表示されます。
参考文献にあたるものは、原則として REFERENCE 3 以降に表示します。

アクセッション番号の掲載された論文が公開された場合、DDBJ は対応エントリの更新作業を行うことがあります。このとき、登録時に
REFERENCE 2 以降に記載された投稿予定の論文情報は、関連する情報 (登録者所属、著者名、タイトル、投稿予定雑誌など)
との間に十分な整合性がある場合、特に登録者に知らせることなく書き換えることがあります。

登録する塩基配列に関する論文を投稿、あるいは、その準備をしている, または既に論文が出版されている場合
: 
<pre class="code flat-file"><code>  REFERENCE   2
    AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
    TITLE     Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver
    JOURNAL   Unpublished (2009)
</code></pre>

: | ```AUTHORS``` | 論文の著者名、まだ出版されていない場合は予定される著者名が表示されます。 |
  | ```TITLE``` | 論文のタイトル、まだ出版されていない場合は予定されるタイトルが表示されます。 |
  | ```JOURNAL``` | 論文が出版された場合、あるいは In Press の場合には、論文の雑誌名等が表示されます。<br/>まだ出版されていない場合は "Unpublished" と表示されます。 |

データベース上でのみ公開し、今後、論文等を投稿しない場合
: 
<pre class="code flat-file"><code>  REFERENCE   2
    AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
    TITLE     Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver
    JOURNAL   Published Only in Database(2009)
</code></pre>

: | ```AUTHORS``` | そのエントリの登録時に入力した Authors (論文の著者にあたる方) が表示されます。 |
  | ```TITLE``` | 登録時に入力した TITLE (論文のタイトルにあたるもの) が表示されます。 |
  | ```JOURNAL``` | "Published Only in Database" と表示されます。<br/>カッコ内の数字は、そのエントリーが初めて公開された年が記載されます。 |
  

<div id="CommentB" markdown="1">
<h3><a href="#CommentA">COMMENT</a></h3>
</div>

FEATURES/Location/Qualifiers
で記述できないその他の情報やコメントなどが記載されています。例えば、登録者の所属が複数ある場合、[REFERENCE
1](#Reference1B) で記載されていない方を記載することがあります。

<pre class="code flat-file"><code>COMMENT     Human cDNA sequencing project.
</code></pre>

Structured COMMENT  
: Structured COMMENT は feature/qualifier で未定義なデータセットを一群の登録で共有することを目的とした記載法です。<br>Structured COMMENTを利用して、登録者とデータ利用者のコミュニティでフラットファイルを介してデータセットを公開・共有することが可能になります。<br>データセットを \[項目名\] と \[項目の値\] の組で構造化された COMMENT 行に記載します。<br>genome project ([WGS](/ddbj/wgs.html) を含む), transcriptome project ([TSA](/ddbj/tsa.html) を含む) など一部の配列データ登録に際し、記載を義務付けられている structured COMMENT が存在します。
: 
<pre class="code flat-file"><code>  COMMENT     ##Genome-Assembly-Data-START##
              Finishing Goal           :: Finished
              Current Finishing Status :: High Quality Draft
              Assembly Method          :: Newbler v. 2.3
              Genome Coverage          :: 30x
              Sequencing Technology    :: 454 GS Junior; Illumina GA II
              ##Genome-Assembly-Data-END##
</code></pre>
:   
  この例はゲノムプロジェクトで記載を義務付けている Genome-Assembly-Data という補足情報のデータセットです。<br>\#\#Genome-Assembly-Data-START\#\# と\#\#Genome-Assembly-Data-END\#\# の間にある記述内容は “ :: ” で区切られ、補足情報の項目とその値の組になっています。

: | ```##Genome-Assembly-Data-START##``` | Genome-Assembly-Data という名称で定義される structured COMMENT の記載開始行。 |
  | ```##Genome-Assembly-Data-END##``` | Genome-Assembly-Data という名称で定義される structured COMMENT の記載終了行。 |
  | ```Finishing Goal           :: Finished``` | Genome-Assembly-Data という名称で定義される structured COMMENT の記載終了行。 |
  | ```Current Finishing Status :: High Quality Draft``` | ゲノムプロジェクトの現在の到達レベルが、High Quality Draft であることを示します。 |
  | ```Assembly Method          :: Newbler v. 2.3``` | 配列をアセンブルする際に用いたソフトウェアが Newbler で、そのバージョンが 2.3 であったことを示します。 |
  | ```Genome Coverage          :: 30x``` | 実際に読んだ延べ配列長がそのゲノム配列の長さの約30倍に相当することを示しています。 |
  | ```Sequencing Technology    :: 454 GS Junior; Illumina GA II ``` | 配列決定に用いたシークエンサーが 454 GS Junior と Illumina GA II であることを示しています。 |

MGA データの生成手法  
: [MGA データ](/ddbj/mga.html)には、登録配列が生成されるまでの過程（シーケンス用サンプルの調製法、生の配列データから登録配列への処理方法など）が記載されています。
: 
<pre class="code flat-file"><code>  COMMENT     The CAGE (cap analysis gene expression) is based on preparation
              and sequencing of concatamers of DNA tags deriving from the
              initial 20/21 nucleotides from 5' end mRNAs.
              Full-length cDNAs were at first selected with the Cap-Trapper
              method. Then, a specific linker (Linker1, some linker contain 5 bp
              sequences that have 15 variations for each rna sample) containing
              the ClassIIs restriction enzyme site MmeI was then ligated to the
              single-strand cDNA and then the second strand of cDNA synthesized.
              The resulting double-stranded cDNA was cleaved by the restriction
              enzyme MmeI and a second linker (Linker2) was ligated to the 2 bp
              overhang at the MmeI cleaved site, to produce a 5' 20/21 tag
              having two linkers at both sides. The ligation products were
              separated from unmodified DNA with magnetic beads. The 5' end cDNA
              tags were released from the beads, and the DNA fragments were
              amplified in a PCR step by using the two linker-specific primers
              (Primer1 (uni-PCR), Primer2 (MmeI-PCR)). The desired 32-37 bp tags
              were purified and ligated to form concatamers, and then the
              concatamer were fractionated and ligated to the plasmid ZErO-2.
              The ligations were finally electroporated into DH10b cells
              (Invitrogen) and obtained plasmids were sequenced with forward
              primers.
              CAGE libraries were sequenced with forward primers essentially as
              described with minor modifications to use zeocin for selection of
              recombinants. We used in-house developed algorithms for the
              extraction of tags and for masking the vectors. CAGE tags were
              extracted with the following parameters: vector masking, minimum
              12 bp recognition allowed; linker (13 bp) masking: maximum
              mismatch, 2 bp allowed; XmaJI site maximum mismatch, 2 bp allowed;
              tag length, 17-24 bp.
              Linker1: "Upper oligonucleotide GN6":
              biotin-agagagagacctcgagtaactataacggtcctaaggtagcgacctagg (5 bp)
              tccgacGNNNNN and "Upper oligonucleotide N6":
</code></pre>


<div id="FeaturesB" markdown="1">
<h3><a href="#FeaturesA">FEATURES</a></h3>
</div>

登録配列の生物学的な特徴を、feature key （特徴を表す項目）、location （配列上の位置情報）および Qualifier
（特徴をさらに特定する項目）を用いて記述します。EST と GSS には原則として source 以外の feature key
は記述されません。

Feature
情報は、原則として登録者からの報告に基づいて記述され，それらの記述が適正になされるよう、データバンクが補足訂正を行ないます。記述項目と記述方法については、国際塩基配列データベースが定める
[The DDBJ/ENA/GenBank Feature Table Definition](/ddbj/feature-table-e.html)
に詳しく説明されています。

配列の特徴を記述するための feature key は、下記のように分類できます。

1. 由来生物の特徴を記述するための feature key (source)<br>すべてのエントリに必須で、/organism と /mol\_type も必須の qualifier になっています。
2. 配列の中の一定の領域がもつ生物学的機能を記述するための feature key<br>生物学的特徴を限定的に記述する key (e.g. TATA\_signal) から、より幅広く記述するための key<br>（e.g.misc\_feature） などに分類されていて、できるだけ具体的な記述がなされるように構成されています。<br>e.g. CDS, rRNA, etc.
3. 配列の差違や変更を記述するための feature key<br>e.g. variation, conflict, etc.

Feature key の中で、最も頻繁に使用されるのはタンパク質のコーディング領域を記述する CDS です。 [CDS feature](/ddbj/cds.html)の説明ページもご参照ください。

<pre class="code flat-file"><code>FEATURES             Location/Qualifiers
     source          1..450
                     /chromosome="12"
                     /clone="GT200015"
                     /clone_lib="lambda gt11 human liver cDNA (GeneTech.
                     No.20)"
                     /db_xref="taxon:9606"
                     /map="12p13"
                     /mol_type="mRNA"
                     /organism="Homo sapiens"
                     /tissue_type="liver"
     CDS             86..>450
                     /codon_start=1
                     /gene="GAPD"
                     /product="glyceraldehyde-3-phosphate dehydrogenase"
                     /protein_id="BAA12345.1"
                     /transl_table=1
                     /translation="MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
                     YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
                     VFTDKDKAVAQLKGGAKKV"
</code></pre>


<div id="FeaturesSourceB" markdown="1">
<h3><a href="#FeaturesSourceA">source</a></h3>
</div>

配列の生物学的な由来を示します

|  ```source    1..450```  |  配列の1番目から450番目までが，以下の qualifier で記述された source に由来するものであることを示します。  |
|  ```/chromosome="12"```  |  この配列が１２番染色体由来であることを示します。  |
|  ```/clone="GT200015"```  |  配列の得られたcloneの名称  |
|  ```/clone_lib="lambda gt11 human liver cDNA (GeneTech. No.20)"```  |  配列の得られた clone library の名称  |
|  ```/map="12p13"```  |  この配列が 12p13 に位置することを示します。  |
|  ```/db_xref="taxon:9606"```   |  この配列が taxonomy database において ID: 9606 に対応する生物 (ヒト) 由来であることを示します。  |
|  ```/mol_type="mRNA"```  |  mRNA に由来する配列であることを示します。  |
|  ```/organism="Homo sapiens"```  |  この配列がヒト由来であることを示します。  |
|  ```/tissue_type="liver"```   |  この配列が肝臓由来であることを示します。  |


<div id="CDSB" markdown="1">
<h3><a href="#CDSA">CDS</a></h3>
</div>

タンパク質 (ペプチド) のアミノ酸 (終止コドンを含む) をコードする配列

|  ```CDS      86..>450```  |  配列の86番目から450番目までが，以下の qualifier で記述されたタンパク質をコードする領域であることを示します。詳しい Location の記述ルールについては，[Location の記述法](/ddbj/location.html) を参照して下さい。 |
|  ```/codon_start=1```  |  [コドンの読み枠](/ddbj/cds.html#frame) の開始位置が指定した location の1番目（登録配列の86番目）であることを示します。  |
|  ```/gene="GAPD"```  |  gene symbol,[こちら](/ddbj/qualifiers.html#gene)もご参照ください。   |
|  ```/product="glyceraldehyde-3-phosphate dehydrogenase"```  |  product name,[こちら](/ddbj/qualifiers.html#product)もご参照ください。　|
|  ```/protein_id="BAA12345.1"```  |  ID は３文字のアルファベットと５つの数字で構成されています。<br/>ピリオドの後の数字はその protein ID の version 番号です。<br/> 配列の更新などによって CDS の翻訳配列が変更になった場合には protein ID は変わりませんが，version 番号が上がります。  |
|  ```/transl_table=1```   |  genetic code table 1 に従って翻訳されることを示します。  |
|  ```/translation=&quot;MAKIKIGINGFGRIG（中略）DKDKAVAQLKGGAKKV&quot;```  |  CDS のアミノ酸翻訳配列が[Amino Acid Codes](/ddbj/code.html#amino-1) のリストにある１文字表記で記述されます。<br/>その他のアミノ酸の場合は全て X で表記されます。<br/>[exception](/ddbj/qualifiers.html#exception) qualifier が入力された場合を除き，入力された CDS feature の情報をもとに自動翻訳します。<br/>ただし、[pseudogene](/ddbj/qualifiers.html#pseudogene) または [pseudo](/ddbj/qualifiers.html#pseudo) が指定されている場合は記載されません。  |


<div id="EndB" markdown="1">
<h3><a href="#EndA">//</a></h3>
</div>

全ての配列が記載された次の行に "//" のマークが記載され，エントリの終了を示します。


