---
layout: indexed_content
title: MGA
pathname: mga
category: ddbj
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /ddbj/index.html
  - id: submission
    title: Submission
    url: /ddbj/submission.html
    children:
      - title: 塩基配列の登録
        url: /ddbj/submission.html
      - title: Web 版塩基配列登録システム
        url: /ddbj/web-submission.html
      - title: Mass Submission System
        url: /ddbj/mss.html
      - title: 登録データの修正・更新
        url: /ddbj/update.html
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/arsa/?lang=ja
    children:
      - title: getentry
        url: http://getentry.ddbj.nig.ac.jp/top-j.html
      - title: ARSA
        url: http://ddbj.nig.ac.jp/arsa/?lang=ja
  - id: flat_file
    title: Flat file
    url: /ddbj/flat-file.html
    children:
      - title: Feature key の定義
        url: /ddbj/features.html
      - title: Qualifier key の定義
        url: /ddbj/qualifiers.html
      - title: Organism qualifier に記載する生物名
        url: /ddbj/organism.html
      - title: Location の記述法
        url: /ddbj/location.html
      - title: タンパク質コード配列
        url: /ddbj/cds.html
      - title: The Genetic Codes
        url: /ddbj/geneticcode.html
      - title: 配列の記載に用いる略号
        url: /ddbj/code.html
      - title: 登録の見本
        url: /ddbj/example.html
  - id: data_categories
    title: Data categories
    url: /ddbj/data-categories.html
    children:
      - title: Genome project のデータ登録
        url: /ddbj/genome.html
      - title: Pseudohaplotype
        url: /ddbj/pseudohaplotype.html
      - title: WGS
        url: /ddbj/wgs.html
      - title: メタゲノムアセンブリ
        url: /ddbj/metagenome-assembly.html
      - title: Single amplified genome
        url: /ddbj/single-amplified-genome.html
      - title: CON
        url: /ddbj/con.html
      - title: GSS
        url: /ddbj/gss.html
      - title: HTG
        url: /ddbj/htg.html
      - title: Environmental sequence の登録
        url: /ddbj/environmental.html
      - title: ENV
        url: /ddbj/env.html
      - title: TLS
        url: /ddbj/tls.html
      - title: Transcriptome Project のデータ登録
        url: /ddbj/transcriptome.html
      - title: TSA
        url: /ddbj/tsa.html
      - title: EST
        url: /ddbj/est.html
      - title: HTC
        url: /ddbj/htc.html
      - title: Third Party Data (TPA)
        url: /ddbj/tpa.html
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=ddbj
  - id: other
    title: Other
    url: /ddbj/index-e.html
    children:
      - title: Patent
        url: /ddbj/patent-data.html
      - title: MGA
        url: /ddbj/mga.html
lang: ja
related_pages:
  - title: Genome Project のデータ登録
    url: /ddbj/genome.html
  - title: WGS
    url: /ddbj/wgs.html
  - title: CON
    url: /ddbj/con.html
  - title: GSS
    url: /ddbj/gss.html
  - title: HTG
    url: /ddbj/htg.html
  - title: Environmental sequence の登録
    url: /ddbj/environmental.html
  - title: ENV
    url: /ddbj/env.html
  - title: TLS
    url: /ddbj/tls.html
  - title: Transcriptome Project のデータ登録
    url: /ddbj/transcriptome.html
  - title: TSA
    url: /ddbj/tsa.html
  - title: EST
    url: /ddbj/est.html
  - title: HTC
    url: /ddbj/htc.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa.html
---

<span class="red">**\[重要\] MGA データの新規登録は終了しました。**</span>

国際塩基配列データベース (DDBJ/EMBL-Bank/GenBank)
では，ゲノム配列・アセンブルのアノテーションに有用な情報を提供する大規模な配列群を受け入れるために新たなデータカテゴリーを創設しました。この新規データカテゴリーの名称は
MGA (Mass sequence for Genome Annotation) です。MGA データの定義は以下となっております。

MGA データの定義  
: MGA is defined as those sequences which are produced in large quantity in view of genome annotation.

MGA データとして登録可能なデータ  
: ゲノムアノテーションに役立つ生物学的特徴を有する配列データ (転写物の末端部分など) 。
: 大量なデータセット (原則的に，1リソース\* 当たり1万以上のユニークな配列セット) 。

## DDBJ フォーマットの例 <a name="flat-file"></a>

MGA データの公開形式は1エントリごとではなく，リソースを単位に行われます。公開ファイルは以下に示す Master record および
Variable record から構成されています。MGA の公開データには，KEYWORDS 行に必ず "MGA" が記載されています。

#### Master record

リソース毎に作成されるファイルで，各リソースの共通情報が記載されています。

Master record の例

<pre><code>
<a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">ZZZZZ0000000</a>                       <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">mRNA</a>    <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">ROD</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">24-JAN-2005</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  Mus musculus 1 month adult cerebellum short transcripts tag.
<a id="AccessionA" href="#Accession_MGA">ACCESSION</a>   ZZZZZ0000000
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     ZZZZZ0000000.1
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    MGA; CAGE (Cap Analysis Gene Expression).
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      Mus musculus (house mouse)
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  Mus musculus
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Glires; Rodentia;
            Sciurognathi; Muroidea; Muridae; Murinae; Mus; Mus.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 1450)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H., Yamada,T. and Liu,G.Q.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (30-NOV-2009) to the DDBJ/EMBL/GenBank databases. 
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I
  TITLE     The gene expression analysis of short transcripts tags
  JOURNAL   Unpublished (2010)
<a id="CommentA" href="/ddbj/flat-file#CommentB">COMMENT</a>     The CAGE (cap analysis gene expression) is based on preparation
            and sequencing of concatamers of DNA tags deriving from the
            initial 20/21 nucleotides from 5' end mRNAs.
            Full-length cDNAs were at first selected with the Cap-Trapper
            method. Then, a specific linker (Linker1, some linker contain 5 bp
            sequences that have 15 variations for each rna sample) containing
            the ClassIIs restriction enzyme site MmeI was then ligated to the
            single-strand cDNA and then the second strand of cDNA synthesized.
            (中略)
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     source          
                     /db_xref="taxon:10090"
                     /dev_stage="1 month adult"
                     /mol_type="mRNA"
                     /organism="Mus musculus"
                     /strain="C57BL/6J"
                     /tissue_type="cerebellum"
<a id="MgaA" href="#MgaB">MGA</a>         ZZZZZ0000001-ZZZZ0340780
            total number of count : 856609
            Header Format
            &gt;[ACC#]|[submitter's identifier]|[number of sequence
            count]|[map]|[free text]|[db_xref1(,db_xref2,...)]|
<a id="EndA" href="/ddbj/flat-file#EndB">//</a>
</code></pre>

#### Variable record

リソース毎に各エントリの塩基配列およびアクセッション番号，マップ情報，配列のカウント数など関連情報が記載されています。

Variable record の例

``` 
  >ZZZZZ0000001|ABC1004AA60F1902|10|9B|lipidosis-related protein Lipidosin| 
GI:2385656|
gactgtcttcggtgaatgca
>ZZZZZ0000002|ABC1003AE78G1607|5||||
gcggaagtcggaccggtcgca
>ZZZZZ0000003|ABC1003AE72P1806|6||||
gggagaccgatccgggatct
>ZZZZZ0000004|ABC1003AE30G1801|91||||
gagtcgggtcggtggggctgt
>ZZZZZ0000005|ABC1003AA45J1501|55||||
ggggaatctgcagcctgggc
>ZZZZZ0000006|ABC1003AE67B0902|152||||
gagccgtccccgacgccgcca
 (以下略) 
```

{::nomarkdown}
書式: &gt;[ACC#]|[submitter's identifier]|[number of sequence count]|[map]|[free text]|[db_xref1(,db_xref2,...)]|
{:/}

- １エントリは Header 行と塩基配列行から構成されています。Header 行は "\>"
  で始まり，各エントリに関連する６つの項目が続きます。各項目は
  "|"(pipe) によって区切られています。
- 各エントリの関連情報は変更･更新は可能ですが，配列の更新は認められておりません。

<!-- end list -->

``` 
>ZZZZZ0000001|ABC1004AA60F1902|100|9B|lipidosis-related protein Lipidosin| MGI:2385656|
gactgtcttcggtgaatgca
```

| ZZZZZ0000001 \[ACC\#\]                            | エントリのアクセッション番号     |
| ABC1004AA60F1902 \[submitter's identifier\]       | 登録者が割り当てたＩＤ        |
| 100 \[number of sequence count\]                  | リソースにおいて当該配列が得られた数 |
| 9B \[map\]                                        | 配列の map 情報         |
| lipidosis-related protein Lipidosin \[free text\] | 配列に関する情報（自由形式での記述） |
| MGI:2385656 \[db\_xref1(,db\_xref2,...)\]         | 配列に関する外部データベース情報   |
| gactgtcttcggtgaatgca                              | エントリの塩基配列          |

