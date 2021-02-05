---
layout: tabbed_indexed_content
title: TLS
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
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

## DDBJ フォーマットの例  {#flat-file}

TLS エントリの特徴

  - [アクセッション番号](#AccessionA) は アルファベット 4 文字と数字 8
    桁 を基本とします。
  - [DEFINITION](#DefinitionA) 行は "TLS:" で始まります。
  - [KEYWORDS](#KeywordsA) 行には "TLS" と "Targeted Locus Study" が表示されます。

<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">TZZZ01000001</a>             <a id="SequenceLengthA" href="/ddbj/flat-file#SequenceLengthB">800 bp</a>   <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">mRNA</a>     <a id="MoleculeFormA" href="/ddbj/flat-file#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">TLS</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">15-NOV-2017</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  TLS: Uncultured bacterium OTU:MS213 gene for 16S ribosomal RNA, 
            partial sequence.
<a id="AccessionA" href="/ddbj/flat-file#AccessionB">ACCESSION</a>   TZZZ01000001
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     TZZZ01000001.1
<a id="DblinkA" href="/ddbj/flat-file#DblinkB">DBLINK</a>      BioProject:PRJDA43211
            Sequence Read Archive: DRR800001
            BioSample: SAMD98765439
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    TLS; Targeted Locus Study; ENV.
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      uncultured bacterium
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  uncultured bacterium
            Bacteria; environmental samples.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 800)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (30-SEP-2017) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>  
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Metagenomic Taxonomy Profile in Sea Water
  JOURNAL   TLS Biol 15, 161-170 (2017)
<a id="CommentA" href="/ddbj/flat-file#CommentB">COMMENT</a>     ##Assembly-Data-START##
            Assembly Method       :: FLASH v. 2015
            Sequencing Technology :: Illumina
            ##Assembly-Data-END##
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
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
<a id="EndA" href="/ddbj/flat-file#EndB">//</a></code></pre>
