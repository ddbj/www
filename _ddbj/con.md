---
layout: tabbed_indexed_content
title: CON
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
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

<span class="red">**\[重要\] CON データの新規登録は終了しました。**</span>

[HTG](/ddbj/htg.html) または [WGS](/ddbj/wgs.html)
などを基本としたゲノムプロジェクトでは、個々に登録された一連の配列データを相互に結合し、ゲノム構造を再構築するための情報が必要になります。そのようなタイリング情報に対して、１つのアクセッション番号を割り当てて特殊なエントリとして登録を受け付けています。このようなエントリをCON
エントリと呼び、CON division に格納します。

CON エントリのフラットファイルには、CONTIG 行にそのエントリを構成する引用配列（ピースエントリ）のアクセッション番号が記載され、塩基配列は記載されません。

CON エントリ のみの登録は受け付けておりません。まず、CON エントリを構成する個々のピースエントリを登録していただきます。その上で CON
エントリを構築します。

CON エントリの登録には [AGP ファイル](/ddbj/file-format.html#agp)が必要です。

CON データの登録は [Mass Submission System (MSS)](/ddbj/mss.html) で受け付けております。

## DDBJ フォーマットの例  {#flat-file}

<pre><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">BA001000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file#SequenceLengthB">5631 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">DNA</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">CON</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">06-DEC-2008</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  Homo sapiens DNA, chromosome 7, scaffold_ASE1. 
<a id="AccessionA" href="/ddbj/flat-file#AccessionB">ACCESSION</a>   BA001000 BZZZ01000000
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     BA001000.1
<a id="DblinkA" href="/ddbj/flat-file#DblinkB">DBLINK</a>      BioProject:PRJDA12345
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    WGS.
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      Homo sapiens (human)
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 5631)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (01-APR-2003) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Human WGS scaffold CON
  JOURNAL   Unpublished (2003)
<a id="CommentA" href="/ddbj/flat-file#CommentB">COMMENT</a>     Whole genome shotgun sequencing project.
            Please visit our web site
            URL:http://www.ddbj.nig.ac.jp/
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..5631</a>
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens"
                     /<a href="/ddbj/qualifiers.html#submitter_seqid">submitter_seqid</a>="scaffold_ASE1"
     <a href="/ddbj/features.html#assembly_gap">assembly_gap</a>    <a href="/ddbj/location.html">1346..2845</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=1500
                     /<a href="/ddbj/qualifiers.html#gap_type">gap_type</a>="within scaffold"
                     /<a href="/ddbj/qualifiers.html#linkage_evidence">linkage_evidence</a>="paired-ends"
     <a href="/ddbj/features.html#assembly_gap">assembly_gap</a>    <a href="/ddbj/location.html">4302..4401</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
                     /<a href="/ddbj/qualifiers.html#gap_type">gap_type</a>="within scaffold"
                     /<a href="/ddbj/qualifiers.html#linkage_evidence">linkage_evidence</a>="align trnscpt"
<a id="ContigA" href="#ContigB">CONTIG</a>      join(BZZZ01123456.1:1..1345,gap(1500),BZZZ01123457.1:1..1456,
            gap(unk100),complement(BZZZ01123458.1:1..1230))
<a id="EndA" href="/ddbj/flat-file#EndB">//</a></code></pre>
