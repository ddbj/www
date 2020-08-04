---
layout: indexed_content
title: TLS
pathname: tls
category: datacategories
lang: ja
---

2016年から INSDC では 16S rRNA または、他の特定 locus を標的とした配列で構成され、主として operational
taxonomic unit クラスター化に用いられる bulk sequence data を Targeted Locus Study
(TLS) data type として受け付けています。

NGS を利用した marker 配列の網羅的解析に関しましては、reads が [DDBJ Read
Archive](/dra/index.html) に登録されているならば再現可能ですので、多くの場合、TLS
データ登録は必須ではありません。  
念のため、TLS データの登録が必要か否かご検討ください。

[公開されているTLSデータ](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/tls/TLS_ORGANISM_LIST.html)

TLS 登録には、[Mass Submission System (MSS)](/ddbj/mss.html) をご利用ください。

TLS 登録における注意事項
:     
  - 登録に先立ち、[BioProject Database](/bioproject/index.html) と
    [BioSample Database](/biosample/index.html) への登録が必要です。
  - 解析元となる配列データが [DDBJ Read Archive](/dra/index.html)
    に登録されていることが推奨されます。
  - 登録前に low quality reads, chimeric sequences の除去を行っておいてください。

## DDBJ フォーマットの例

TLS エントリの特徴

  - [アクセッション番号](#AccessionA) は[アルファベット 4 文字と数字 8
    桁](#bulk_sequence)を基本とします。
  - [DEFINITION](#DefinitionA) 行は "TLS:" で始まります。
  - [KEYWORDS](#KeywordsA) 行には "TLS" と "Targeted Locus Study" が表示されます。

<!-- end list -->

<pre><code><a id="LocusA" href="#LocusB">LOCUS</a>       <a id="LocusNameA" href="#LocusNameB">TZZZ01000001</a>             <a id="SequenceLengthA" href="#SequenceLengthB">800 bp</a>   <a id="MoleculeTypeA" href="#MoleculeTypeB">mRNA</a>     <a id="MoleculeFormA" href="#MoleculeFormB">linear</a>   <a id="DivisionA" href="#DivisionB">TLS</a> <a id="ModificationDateA" href="#ModificationDateB">15-NOV-2017</a>
<a id="DefinitionA" href="#DefinitionB">DEFINITION</a>  TLS: Uncultured bacterium OTU:MS213 gene for 16S ribosomal RNA, 
            partial sequence.
<a id="AccessionA" href="#AccessionB">ACCESSION</a>   TZZZ01000001
<a id="VersionA" href="#VersionB">VERSION</a>     TZZZ01000001.1
<a id="DblinkA" href="#DblinkB">DBLINK</a>      BioProject:PRJDA43211
            Sequence Read Archive: DRR800001
            BioSample: SAMD98765439
<a id="KeywordsA" href="#KeywordsB">KEYWORDS</a>    TLS; Targeted Locus Study; ENV.
<a id="SourceA" href="#SourceB">SOURCE</a>      uncultured bacterium
  <a id="OrganismA" href="#OrganismB">ORGANISM</a>  uncultured bacterium
            Bacteria; environmental samples.
<a id="Reference1A" href="#Reference1B">REFERENCE   1</a>  (bases 1 to 800)
  <a id="AuthorsA" href="#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="#JournalB">JOURNAL</a>   Submitted (30-SEP-2017) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="#Reference2B">REFERENCE   2</a>  
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Metagenomic Taxonomy Profile in Sea Water
  JOURNAL   TLS Biol 15, 161-170 (2017)
<a id="CommentA" href="#CommentB">COMMENT</a>     ##Assembly-Data-START##
            Assembly Method       :: FLASH v. 2015
            Sequencing Technology :: Illumina
            ##Assembly-Data-END##
<a id="FeaturesA" href="#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a href="/ddbj/features.html#source">source</a>          <a href="/ddbj/location.html">1..301</a>
                     /<a href="/ddbj/qualifiers.html#altitude">altitude</a>="-20 m"
                     /<a href="/ddbj/qualifiers.html#db_xref">country</a>="Pacific Ocean"
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:77133"
                     /<a href="/ddbj/qualifiers.html#environmental_sample">environmental_sample</a>
                     /<a href="/ddbj/qualifiers.html#isolation_source">isolation_source</a>="marine water"
                     /<a href="/ddbj/qualifiers.html#lat_lon">lat_lon</a>="29.3116 N 148.6778 E"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="uncultured bacterium"
                     /<a href="/ddbj/qualifiers.html#submitter_seqid">submitter_seqid</a>="OTU:MS213"
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location.html">&lt;1..&gt;301</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="16S ribosomal RNA"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>           75 a           59 c          102 g           65 t
<a id="OriginA" href="#OriginB">ORIGIN</a>      
        1 cagtcgccgc gggaatacgg agggggctag cgttgttcgg aattactggg cgtaaagcgc
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="#EndB">//</a></code></pre>