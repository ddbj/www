---
layout: tabbed_indexed_content
title: WGS
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

様々な生物においてホールゲノムショットガン配列決定法（whole genome shotgun:
ゲノム全体を物理的に断片化し、シークエンサで各断片の塩基配列を決定した後、コンピューター・プログラムを用いて整理、アセンブルして完成させる手法）を用いて全ゲノム配列を決定するゲノムプロジェクトが進められています。

DDBJ/ENA/GenBank では、そのようなゲノムプロジェクトに由来する、整理が不十分な段階の大量の DNA 断片の配列を、WGS データとして受け付けています。  
[INSDC standards for genome assembly submission](/ddbj/assembly.html )もご参照ください。

[公開されているWGSデータ](https://ddbj.nig.ac.jp/public/ddbj_database/wgs/WGS_ORGANISM_LIST.html)

WGSデータの登録は [Mass Submission System (MSS)](/ddbj/mss.html) で受け付けております。

## WGS データとして登録可能なデータ  {#acceptable}

原則、冗長な raw read sequences ではなく、ある程度 計算機処理を経た contigs (overlapping reads) の配列を受付けます。     
冗長な raw read sequences を公表することが必要な場合は、[DDBJ Sequence Read Archive (DRA)](/dra/index.html ) をご利用ください。     

* 登録に先立ち、[BioProject](/bioproject/index.html ) と [BioSample](/biosample/index.html ) の登録が必要です。
<!--  assembly 過程を表現する WGS の登録には２種類の方法があります。  -->
<!-- ### a) WGS + scaffold CON:      -->
<!-- * 各 contig (overlapping reads) の配列を WGS entry として登録します。      -->
<!-- * WGS 配列には sequencing gap を表現する連続した"n"を含むことはできません。       -->
<!-- * gap を含めた連結構造の記載が必要な場合、[AGP ファイル](/ddbj/file-format.html#agp ) による登録が可能です。      -->
<!-- * scaffold (assembled contigs separated by gaps) を [CON](/ddbj/con.html ) entry として WGS の連結を表現する形式で登録を受付けます。      -->
<!-- ### b) WGS with gaps:    -->
* 各 scaffold (assembled contigs separated by gaps) の配列を WGS entry として登録します。    
* sequencing gap を連続した"n"として WGS 配列に含めて記載します。    
<!-- [AGP ファイル](/ddbj/file-format.html#agp )は必要ありません。   -->


## DDBJ フォーマットの例  {#flat-file}

WGS エントリの特徴

  - [アクセッション番号](#AccessionA) は アルファベット 4 文字と数字 8 桁 を基本とします。
  - [KEYWORDS](#KeywordsA) 行には "WGS" とゲノムとしての完成度を示す規定値が表示されます。

<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">ZZZZ01000001</a>              <a id="SequenceLengthA" href="/ddbj/flat-file#SequenceLengthB">123456 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">DNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">HUM</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">01-MAY-2003</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  Homo sapiens DNA, chromosome 7, A01234B01. 
<a id="AccessionA" href="/ddbj/flat-file#AccessionB">ACCESSION</a>   ZZZZ01000001 ZZZZ01000000
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     ZZZZ01000001.1
<a id="DblinkA" href="/ddbj/flat-file#DblinkB">DBLINK</a>      BioProject:PRJDA12345
            BioSample:SAMD01234567
            Sequence Read Archive:DRR012345, DRR012346
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    WGS; STANDARD_DRAFT.
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      Homo sapiens
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 123456)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (01-APR-2003) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Human whole genome shotgun sequence
  JOURNAL   Unpublished (2003)
<a id="CommentA" href="/ddbj/flat-file#CommentB">COMMENT</a>     Whole genome shotgun sequencing project.
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..123456</a>
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers.html#chromosome">chromosome</a>="7"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens"
                     /<a href="/ddbj/qualifiers.html#submitter_seqid">submitter_seqid</a>="A01234B01"

-- The rest is snipped --
<a id="EndA" href="/ddbj/flat-file#EndB">//</a></code></pre>
