---
layout: tabbed_indexed_content
title: MGA
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: other
lang: ja
related_pages:
  - title: Genome Project のデータ登録
    url: /ddbj/genome.html
  - title: Environmental sequence の登録
    url: /ddbj/environmental.html
  - title: Transcriptome Project のデータ登録
    url: /ddbj/transcriptome.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa.html
---

<span class="red">**\[重要\] MGA データの新規登録は終了しました。**</span>

INSDC では，ゲノム配列・アセンブルのアノテーションに有用な情報を提供する大規模な配列群を受け入れるために新たなデータカテゴリーを創設しました。この新規データカテゴリーの名称は
MGA (Mass sequence for Genome Annotation) です。MGA データの定義は以下となっております。

MGA データの定義  
: MGA is defined as those sequences which are produced in large quantity in view of genome annotation.

MGA データとして登録可能なデータ  
: ゲノムアノテーションに役立つ生物学的特徴を有する配列データ (転写物の末端部分など) 。
: 大量なデータセット (原則的に，1リソース\* 当たり1万以上のユニークな配列セット) 。

## DDBJ フォーマットの例  {#flat-file}

MGA データの公開形式は1エントリごとではなく，リソースを単位に行われます。公開ファイルは以下に示す Master record および
Variable record から構成されています。MGA の公開データには，KEYWORDS 行に必ず "MGA" が記載されています。

#### Master record

リソース毎に作成されるファイルで，各リソースの共通情報が記載されています。

<strong>Master record の例</strong>

<pre><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">ZZZZZ0000000</a>                       <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">mRNA</a>    <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">ROD</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">24-JAN-2005</a>
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
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (30-NOV-2009)
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

<strong>Variable record の例</strong>

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

| <strong>書式</strong>: | &gt;[ACC#]\|[submitter's identifier]\|[number of sequence count]\|[map]\|[free text]\|[db_xref1(,db_xref2,...)]\| |

- １エントリは Header 行と塩基配列行から構成されています。Header 行は "\>"
  で始まり，各エントリに関連する６つの項目が続きます。各項目は
  "|"(pipe) によって区切られています。
- 各エントリの関連情報は変更･更新は可能ですが，配列の更新は認められておりません。

<!-- end list -->

``` 
>ZZZZZ0000001|ABC1004AA60F1902|100|9B|lipidosis-related protein Lipidosin| MGI:2385656|
gactgtcttcggtgaatgca
```

| ```ZZZZZ0000001``` \[ACC\#\]                            | エントリのアクセッション番号     |
| ```ABC1004AA60F1902``` \[submitter's identifier\]       | 登録者が割り当てたＩＤ        |
| ```100``` \[number of sequence count\]                  | リソースにおいて当該配列が得られた数 |
| ```9B``` \[map\]                                        | 配列の map 情報         |
| ```lipidosis-related protein Lipidosin``` \[free text\] | 配列に関する情報（自由形式での記述） |
| ```MGI:2385656``` \[db\_xref1(,db\_xref2,...)\]         | 配列に関する外部データベース情報   |
| ```gactgtcttcggtgaatgca```                              | エントリの塩基配列          |

