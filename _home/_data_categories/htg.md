DDBJ/ENA/GenBank の HTG division は finished
レベルに達していないゲノム配列を迅速に利用可能にするという科学界の需要に対応するために作られました。
HTG division には処理能力の高いゲノム解析センターから提供された finished
レベルに達していないゲノム配列データが含まれています。
配列が finished level に更新された後には、HTG ではなく、taxonomic lineage に基づく division
に移行します。

HTG 登録には、[Mass Submission System (MSS)](/ddbj/mss.html) をご利用ください。

  - HTG の登録における注意事項
    
      - 登録に先立ち、[BioProject Database](/bioproject/index.html) へ登録し
        BioProject ID を取得してください。
      - [clone](/ddbj/qualifiers.html#clone) qualifier を記載してください。  
        基本的に HTG division への主な対象はfinished レベルに達していない BAC, YAC, fosmid
        cloneです。

## DDBJ フォーマットの例

HTG の特徴

  - 配列が finished level と見做せる場合、[LOCUS](#LocusA) 行に表示される DIVISION は
    taxonomic lineage に基づいて、"HUM", "PRI", "ROD", "MAM", "VRT", "INV",
    "PLN", "BCT" の何れかになります。  
    配列が finished level ではない場合、DIVISION は、"HTG" です。
  - 配列が finished level と見做せる場合は、[KEYWORDS](#KeywordsA) 行には
    特に何も表示されません。  
    配列が finished level ではない場合、KEYWORDS には"HTG" および "HTGS\_PHASE0",
    "HTGS\_PHASE1", "HTGS\_PHASE2" の何れかが表示されます。
      - <span class="red">HTGS\_PHASE0</span>:
        １つの配列決定用サブクローン当たり、１回から数回読んだのみ
      - <span class="red">HTGS\_PHASE1</span>: unfinished で gap
        が残っており、contig の順序と向きが不明な箇所がある
      - <span class="red">HTGS\_PHASE2</span>: unfinished で gap
        が残っている場合も残っていない場合もあり、contig の順序と向きは判明している
  - さらに [KEYWORDS](#KeywordsA) 行に "HTGS\_DRAFT", "HTGS\_ENRICHED",
    "HTGS\_POOLED\_CLONE", "HTGS\_POOLED\_MULTICLONE" などが表示される場合もあります。
  - HTG では [DEFINITION](#DefinitionA) に "\*\*\* SEQUENCING IN PROGRESS
    \*\*\*" などの進捗を示す語句が示されることがあります。

<!-- end list -->

``` code flat-file
LOCUS       AP000000              121001 bp    DNA    linear   HTG 15-OCT-2008
DEFINITION  Arabidopsis thaliana DNA, chromosome 1, BAC clone: CIC5D1, ***
            SEQUENCING IN PROGRESS ***, 10 unordered pieces.
ACCESSION   AP000000
VERSION     AP000000.1
DBLINK      BioProject:PRJDB04321
KEYWORDS    HTG; HTGS_PHASE1.
SOURCE      Arabidopsis thaliana (thale cress)
  ORGANISM  Arabidopsis thaliana
            Eukaryota; Viridiplantae; Streptophyta; Embryophyta; Tracheophyta;
            Spermatophyta; Magnoliophyta; eudicotyledons; core eudicotyledons;
            rosids; malvids; Brassicales; Brassicaceae; Camelineae;
            Arabidopsis.
REFERENCE   1  (bases 1 to 423)
  AUTHORS    Mishima,H., Yamada,T. and Liu,G.Q.
  TITLE     Direct Submission
  JOURNAL   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
REFERENCE   2
  AUTHORS   Mishima,H., Yamada,T., Park,C.S. and Liu,G.Q.
  TITLE     Arabidopsis thaliana DNA
  JOURNAL   Unpublished (2008)
FEATURES             Location/Qualifiers
     source          1..121001
                     /chromosome="1"
                     /clone="CIC5D1"
                     /clone_lib="AT01 BAC"
                     /db_xref="taxon:3702"
                     /ecotype="columbia"
                     /map="between mi303 and mi259"
                     /mol_type="genomic DNA"
                     /organism="Arabidopsis thaliana"
     gap             2079..2128
                     /estimated_length=unknown
     gap             7295..7344
                     /estimated_length=unknown
     gap             15694..15743
                     /estimated_length=unknown
     gap             32780..32829
                     /estimated_length=unknown
     gap             40371..40420
                     /estimated_length=unknown
     gap             59441..59490
                     /estimated_length=unknown
     gap             79080..79129
                     /estimated_length=unknown
     gap             88074..88123
                     /estimated_length=unknown
     gap             107128..107177
BASE COUNT         105 a          98 c          112 g          108 t
ORIGIN
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
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

<div id="Features">

</div>

<div id="FeaturesSource">

</div>

<div id="BaseCount">

</div>

<div id="Origin">

</div>

<div id="End">

</div>
