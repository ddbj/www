---
layout: indexed_content
title: HTC
pathname: htc
category: _data_categories
---

DDBJ/ENA/GenBank の HTC division は 主として 完全長の cDNA (mRNA) を cloning
する手法を用いて作製された cDNA library から得られたドラフト配列データです。  
ゲノム配列の場合 ([HTG](/ddbj/htg.html)) と同様、finished level であれば、HTC ではなく、
taxonomic lineage に基づく division に移行します。

HTC 登録には、[Mass Submission System (MSS)](/ddbj/mss.html) をご利用ください。

  - HTC/full length insert cDNA の登録における注意事項
    
      - 登録前に cloning vector に由来する領域は配列から取り除いておいてください。
      - [clone](/ddbj/qualifiers.html#clone) qualifier の記載が必須です。
      - 発現条件に相当する 組織
        ([tissue\_type](/ddbj/qualifiers.html#tissue_type))、発生段階
        ([dev\_stage](/ddbj/qualifiers.html#dev_stage))、性別
        ([mating\_type](/ddbj/qualifiers.html#mating_type) または
        [sex](/ddbj/qualifiers.html#sex))、などの qualifier の記載を推奨します。
      - 上述のように単なる EST assemble とは異なります。  
        [TSA: Transcriptome Shotgun Assembly](/ddbj/tsa.html)
        と混同しないように、ご注意ください。

## DDBJ フォーマットの例

HTC/full length insert cDNA の特徴

  - 配列が finished level と見做せる場合、[LOCUS](#LocusA) 行に表示される DIVISION は
    taxonomic lineage に基づいて、"HUM", "PRI", "ROD", "MAM", "VRT", "INV",
    "PLN" の何れかになります。  
    配列が finished level ではない場合、[DIVISION](#DivisionA) は "HTC" です。
  - 配列が finished level と見做せる場合は、[KEYWORDS](#KeywordsA) 行には "FLI\_CDNA"
    が表示されます。  
    配列が finished level ではない場合、[KEYWORDS](#KeywordsA) には "HTC"
    が表示されます。HTC で全長性が高い場合、 "HTC\_FLI" が表示されます。
  - 可能であれば、 [KEYWORDS](#KeywordsA) 行に "oligo capping", "CAP trapper"
    などの手法を示す語句が表示されます。

<!-- end list -->

``` code flat-file
LOCUS       AK000000              1450 bp    mRNA    linear   HTC 15-OCT-2008
DEFINITION  Mus musculus mRNA for hypothetical protein, complete cds, clone: 
            2310009A01, full insert sequence. 
ACCESSION   AK000000
VERSION     AK000000.1
KEYWORDS    HTC; HTC_FLI; CAP trapper.
SOURCE      Mus musculus (house mouse)
  ORGANISM  Mus musculus
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Glires; Rodentia;
            Sciurognathi; Muroidea; Muridae; Murinae; Mus; Mus.
REFERENCE   1  (bases 1 to 1450)
  AUTHORS   Mishima,H., Yamada,T. and Liu,G.Q.
  TITLE     Direct Submission
  JOURNAL   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
REFERENCE   2
  AUTHORS   Mishima,H., Yamada,T., Park,C.S. and Liu,G.Q.
  TITLE     Mus musculus full-length enriched cDNA
  JOURNAL   Unpublished (2008)
FEATURES             Location/Qualifiers
     source          1..1450
                     /clone="2310009A01"
                     /clone_lib="full-length enriched mouse cDNA library A01"
                     /db_xref="taxon:10090"
                     /dev_stage="adult"
                     /mol_type="mRNA"
                     /organism="Mus musculus"
                     /sex="male"
                     /tissue_type="tongue"
     CDS             124..1230
                     /codon_start=1
                     /product="hypothetical protein"
                     /protein_id="BAA12348.1"
                     /transl_table=1
                     /translation=""--- omitted ---"
BASE COUNT          399 a          323 c          398 g          330 t
ORIGIN
        1 agtcgcacga aggtttcggc cttatgggcg gacgggtgag taacgcgtag gaatctatcc
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

<div id="CDS">

</div>

<div id="BaseCount">

</div>

<div id="Origin">

</div>

<div id="End">

</div>
