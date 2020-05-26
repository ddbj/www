[HTG](/ddbj/htg.html) または [WGS](/ddbj/wgs.html)
などを基本としたゲノムプロジェクトでは、個々に登録された一連の配列データを相互に結合し、ゲノム構造を再構築するための情報が必要になります。そのようなタイリング情報に対して、１つのアクセッション番号を割り当てて特殊なエントリとして登録を受け付けています。このようなエントリをCON
エントリと呼び、CON division に格納します。

CON エントリのフラットファイルには、[CONTIG](#ContigB)
行にそのエントリを構成する引用配列（ピースエントリ）のアクセッション番号が記載され、塩基配列は記載されません。

CON エントリ のみの登録は受け付けておりません。まず、CON エントリを構成する個々のピースエントリを登録していただきます。その上で CON
エントリを構築します。

CON エントリの登録には [AGP ファイル](/ddbj/file-format.html#agp)が必要です。

CON データの登録は [Mass Submission System (MSS)](/ddbj/mss.html) で受け付けております。

## DDBJ フォーマットの例

``` code flat-file
LOCUS       BA001000              5631 bp    DNA    linear   CON 06-DEC-2008
DEFINITION  Homo sapiens DNA, chromosome 7, scaffold_ASE1. 
ACCESSION   BA001000 BZZZ01000000
VERSION     BA001000.1
DBLINK      BioProject:PRJDA12345
KEYWORDS    WGS.
SOURCE      Homo sapiens (human)
  ORGANISM  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
REFERENCE   1  (bases 1 to 5631)
  AUTHORS   Mishima,H. and Shizuoka,T.
  TITLE     Direct Submission
  JOURNAL   Submitted (01-APR-2003) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
REFERENCE   2
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Human WGS scaffold CON
  JOURNAL   Unpublished (2003)
COMMENT     Whole genome shotgun sequencing project.
            Please visit our web site
            URL:http://www.ddbj.nig.ac.jp/
FEATURES             Location/Qualifiers
     source          1..5631
                     /db_xref="taxon:9606"
                     /mol_type="genomic DNA"
                     /organism="Homo sapiens"
                     /submitter_seqid="scaffold_ASE1"
     assembly_gap    1346..2845
                     /estimated_length=1500
                     /gap_type="within scaffold"
                     /linkage_evidence="paired-ends"
     assembly_gap    4302..4401
                     /estimated_length=unknown
                     /gap_type="within scaffold"
                     /linkage_evidence="align trnscpt"
CONTIG      join(BZZZ01123456.1:1..1345,gap(1500),BZZZ01123457.1:1..1456,
            gap(unk100),complement(BZZZ01123458.1:1..1230))
//
```

## FIELD COMMENTS

<div id="Locus">

</div>

<div id="LocusName">

</div>

<div id="SequenceLength">

</div>

<div id="MoleculeType">

</div>

<div id="MoleculeForm">

</div>

<div id="Division">

</div>

<div id="ModificationDate">

</div>

<div id="Definition">

</div>

<div id="Accession">

</div>

<div id="Version">

</div>

<div id="Dblink">

</div>

<div id="Keywords">

</div>

<div id="Source">

</div>

<div id="Organism">

</div>

<div id="Reference1">

</div>

<div id="Authors">

</div>

<div id="Title">

</div>

<div id="Journal">

</div>

<div id="Reference2">

</div>

<div id="Comment">

</div>

<div id="Features">

</div>

<div id="FeaturesSource">

</div>

<div id="Contig">

</div>

<div id="End">

</div>
