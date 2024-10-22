---
layout: tabbed_indexed_content
title: WGS
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
lang: ja
related_pages:
  - title: Data Submission from Genome Project
    url: /ddbj/genome.html
  - title: CON
    url: /ddbj/con.html
  - title: GSS
    url: /ddbj/gss.html
  - title: HTG
    url: /ddbj/htg.html
  - title: Submission of environmental sequences
    url: /ddbj/environmental.html
  - title: ENV
    url: /ddbj/env.html
  - title: TLS
    url: /ddbj/tls.html
  - title: Data Submission from Transcriptome Project
    url: /ddbj/transcriptome.html
  - title: TSA
    url: /ddbj/tsa.html
  - title: EST
    url: /ddbj/est-a.html
  - title: HTC
    url: /ddbj/htc.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa.html
---

様々な生物においてホールゲノムショットガン配列決定法（whole genome shotgun:
ゲノム全体を物理的に断片化し、シークエンサで各断片の塩基配列を決定した後、コンピューター・プログラムを用いて整理、アセンブルして完成させる手法）を用いて全ゲノム配列を決定するゲノムプロジェクトが進められています。

DDBJ/ENA/GenBank では、そのようなゲノムプロジェクトに由来する、整理が不十分な段階の大量の DNA 断片の配列を、WGS
データとして受け付けています。  
[INSDC standards for genome assembly
submission](/ddbj/assembly.html)もご参照ください。

[公開されているWGSデータ](https://ddbj.nig.ac.jp/public/ddbj_database/wgs/WGS_ORGANISM_LIST.html)

WGSデータの登録は [Mass Submission System (MSS)](/ddbj/mss.html) で受け付けております。

## WGS として登録可能なデータ
<dl>
  <dd>原則、冗長な raw read sequences ではなく、ある程度 計算機処理を経た contigs (overlapping reads) の配列を受付けます。
冗長な raw read sequences を公表することが必要な場合は、<a href="/dra/index.html">DDBJ Sequence Read Archive (DRA)</a> を御利用下さい。</dd>
  <dd>
    <ul>
      <li>contig (overlapping reads)、及び scaffold (assembled contigs separated by gaps) の配列を WGS entry として登録します。</li>
      <li>sequencing gap を連続した”n”として WGS 配列に含めて記載します。</li>
    </ul>
  </dd>
</dl>


## WGS として登録できないデータ
- メタゲノムではない複数種の生物由来のアセンブルゲノム配列
- chromosome assembly（contigs または scaffolds）を含まない以下のケース
    - オルガネラゲノム単独の登録。
    - プラスミド単独の登録。


## WGS entry の登録
<dl>
  <dd><a href="https://mss.ddbj.nig.ac.jp">MSS form </a>から申し込みを行います。</dd>
  <dd>
    <ul>
      <li>登録に先立ち、<a href="/bioproject/index.html">BioProject Database</a> と <a href="/biosample/index.html">BioSample Database</a>の登録が必要です。</li>
      <li>全てのタンパク質コード遺伝子とタンパク質をコードしない RNA 遺伝子の記載を希望する場合には、BioSampleの登録時に <a href="/ddbj/locus_tag.html">locus_tag prefix</a> を申請して下さい。</li>
      <li>サンプルアノテーション： (<a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit?pli=1&gid=1134992157#gid=1134992157">WGS sample annotation)</a></li>
    </ul>
  </dd>
</dl>


## DDBJ フォーマットの例  {#flat-file}

WGS エントリの特徴

  - [アクセッション番号](#AccessionA) は アルファベット 6 文字と数字 9 桁 (2024年1月から) 又はアルファベット 4 文字と数字 8 桁を基本とします。
  - [KEYWORDS](#KeywordsA) 行には "WGS" とゲノムとしての完成度を示す規定値 (STANDARD_DRAFT, HIGH_QUALITY_DRAFT, IMPROVED_HIGH_QUALITY_DRAFT, ANNOTATION_GRADE, NON_CONTIGUOUS_FINISHED) が表示されます。各KEYWORDの定義は <a href="https://www.insdc.org/submitting-standards/methodological-keywords/">INSDC agreed methodological keywords </a>を参照。
  - [COMMENT](#CommentA) にアセンブルの要約が表示されます。

<table>
  <tr>
   <td>
タグ名
   </td>
   <td>値（内容）
   </td>
  </tr>
  <tr>
   <td>Assembly Method
   </td>
   <td>アセンブルに使用したアルゴリズムの名称とバージョン
   </td>
  </tr>
  <tr>
   <td>Assembly Name
   </td>
   <td>生物名を含まないゲノムアセンブリの名称・バージョン。真核生物ゲノムの場合は必須
   </td>
  </tr>
  <tr>
   <td>Genome Coverage
   </td>
   <td>ゲノム配列決定の深度、被覆度。ゲノム全体推定塩基の被覆率として算出
   </td>
  </tr>
  <tr>
   <td>Sequencing Technology
   </td>
   <td>配列解析に使用された sequencing platform 名
   </td>
  </tr>
</table>

<br>
<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file#LocusNameB">ZZZZZZ010000001</a>              <a id="SequenceLengthA" href="/ddbj/flat-file#SequenceLengthB">123456 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file#MoleculeTypeB">DNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file#DivisionB">ROD</a> <a id="ModificationDateA" href="/ddbj/flat-file#ModificationDateB">07-AUG-2024</a>
<a id="DefinitionA" href="/ddbj/flat-file#DefinitionB">DEFINITION</a>  Mus musculus C57BL6 DNA, EN0001. 
<a id="AccessionA" href="/ddbj/flat-file#AccessionB">ACCESSION</a>   ZZZZZZ010000001 ZZZZZZ010000000
<a id="VersionA" href="/ddbj/flat-file#VersionB">VERSION</a>     ZZZZZZ010000001.1
<a id="DblinkA" href="/ddbj/flat-file#DblinkB">DBLINK</a>      BioProject:PRJDB99999
            Sequence Read Archive:DRR999998, DRR999999
            BioSample:SAMD99999999
<a id="KeywordsA" href="/ddbj/flat-file#KeywordsB">KEYWORDS</a>    WGS; STANDARD_DRAFT.
<a id="SourceA" href="/ddbj/flat-file#SourceB">SOURCE</a>      Mus musculus
  <a id="OrganismA" href="/ddbj/flat-file#OrganismB">ORGANISM</a>  Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi; 
            Mammalia; Eutheria; Euarchontoglires; Glires; Rodentia; Myomorpha; 
            Muroidea; Muridae;Murinae; Mus; Mus.
<a id="Reference1A" href="/ddbj/flat-file#Reference1B">REFERENCE   1</a>  (bases 1 to 123456)
  <a id="AuthorsA" href="/ddbj/flat-file#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file#JournalB">JOURNAL</a>   Submitted (01-MAY-2024) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Mouse whole genome shotgun sequence
  JOURNAL   Unpublished (2024)
<a id="CommentA" href="/ddbj/flat-file#CommentB">COMMENT</a>     Whole genome shotgun sequencing project.
            ##Genome-Assembly-Data-START##
            Assembly Method       :: HGAP v. 1.0; Celera Assembler v. 7.0; 
                                     Quiver v. 1.4.0; Sequencher v. 5.1
            Assembly Name         :: MusC56 v1
            Genome Coverage       :: 238x
            Sequencing Technology :: PacBio RS, Illumina GAIIx
            ##Genome-Assembly-Data-END##
<a id="FeaturesA" href="/ddbj/flat-file#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..123456</a>
                     /<a href="/ddbj/qualifiers.html#mol_type">collection_date</a>="missing: lab stock"
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:10090"
                     /<a href="/ddbj/qualifiers.html#geo_loc_name">geo_loc_name</a>="Japan"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Mus musculus"
                     /<a href="/ddbj/qualifiers.html#strain">strain</a>="C57BL6"
                     /<a href="/ddbj/qualifiers.html#submitter_seqid">submitter_seqid</a>="EN0001"
     <a id="FeaturesCDSA" href="/ddbj/flat-file#FeaturesCDSB">CDS</a>             <a href="/ddbj/location.html">complement(join(147..1241,1364..1816))</a>
                     /<a href="/ddbj/qualifiers.html#codn_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#locus_tag">locus_tag</a>="DDBJGEN_0001G0001"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="hypothetical protein"
                     /<a href="/ddbj/qualifiers.html#protein_id">protein_id</a>="xxxxxxxxxx.1"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="MTEHIFEKISLNLSNIINKCVYKQTTLNDAQNE
                     IKETMNVIINQYNHYITKDVMDEILILTSKLLYSQNIESLIIYLNKL
                     (snipped)
                     GFFRMYQIWNVS"
     <a id="Featuresassembly_gapA" href="/ddbj/flat-file#Featuresassembly_gapB">assembly_gap</a>    <a href="/ddbj/location.html">2982..3269</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=288
                     /<a href="/ddbj/qualifiers.html#gap_type">gap_type</a>="within scaffold"
                     /<a href="/ddbj/qualifiers.html#linkage_evidence">linkage_evidence</a>="paired_ends"
     <a id="FeaturestRNA" href="/ddbj/flat-file#FeaturestRNAB">tRNA</a>             <a href="/ddbj/location.html">3569..3643</a>
                     /<a href="/ddbj/qualifiers.html#locus_tag">locus_tag</a>="DDBJGEN_t0001G0001"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="tRNA-Ser"

-- The rest is snipped --
<a id="EndA" href="/ddbj/flat-file#EndB">//</a></code></pre>
