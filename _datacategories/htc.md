---
layout: indexed_content
title: HTC
pathname: htc
category: datacategories
lang: ja
---

DDBJ/ENA/GenBank の HTC division は 主として 完全長の cDNA (mRNA) を cloning
する手法を用いて作製された cDNA library から得られたドラフト配列データです。  
ゲノム配列の場合 ([HTG](/ddbj/htg.html)) と同様、finished level であれば、HTC ではなく、
taxonomic lineage に基づく division に移行します。

HTC 登録には、[Mass Submission System (MSS)](/ddbj/mss.html) をご利用ください。

HTC/full length insert cDNA の登録における注意事項
:     
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

<pre><a id="LocusA" href="#LocusB">LOCUS</a>       <a id="LocusNameA" href="#LocusNameB">AK000000</a>              <a id="SequenceLengthA" href="#SequenceLengthB">1450 bp</a>    <a id="MoleculeTypeA" href="#MoleculeTypeB">mRNA</a>    <a id="MoleculeFormA" href="#MoleculeFormB">linear</a>   <a id="DivisionA" href="#DivisionB">HTC</a> <a id="ModificationDateA" href="#ModificationDateB">15-OCT-2008</a>
<a id="DefinitionA" href="#DefinitionB">DEFINITION</a>  Mus musculus mRNA for hypothetical protein, complete cds, clone: 
            2310009A01, full insert sequence. 
<a id="AccessionA" href="#AccessionB">ACCESSION</a>   AK000000
<a id="VersionA" href="#VersionB">VERSION</a>     AK000000.1
<a id="KeywordsA" href="#KeywordsB">KEYWORDS</a>    HTC; HTC_FLI; CAP trapper.
<a id="SourceA" href="#SourceB">SOURCE</a>      Mus musculus (house mouse)
  <a id="OrganismA" href="#OrganismB">ORGANISM</a>  Mus musculus
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Glires; Rodentia;
            Sciurognathi; Muroidea; Muridae; Murinae; Mus; Mus.
<a id="Reference1A" href="#Reference1B">REFERENCE   1</a>  (bases 1 to 1450)
  <a id="AuthorsA" href="#AuthorsB">AUTHORS</a>   Mishima,H., Yamada,T. and Liu,G.Q.
  <a id="TitleA" href="#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="#JournalB">JOURNAL</a>   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Yamada,T., Park,C.S. and Liu,G.Q.
  TITLE     Mus musculus full-length enriched cDNA
  JOURNAL   Unpublished (2008)
<a id="FeaturesA" href="#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..1450</a>
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="2310009A01"
                     /<a href="/ddbj/qualifiers.html#clone_lib">clone_lib</a>="full-length enriched mouse cDNA library A01"
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:10090"
                     /<a href="/ddbj/qualifiers.html#dev_stage">dev_stage</a>="adult"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Mus musculus"
                     /<a href="/ddbj/qualifiers.html#sex">sex</a>="male"
                     /<a href="/ddbj/qualifiers.html#tissue_type">tissue_type</a>="tongue"
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location.html">124..1230</a>
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#product">product</a>="hypothetical protein"
                     /<a href="/ddbj/qualifiers.html#protein_id">protein_id</a>="BAA12348.1"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>=""--- omitted ---"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          399 a          323 c          398 g          330 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 agtcgcacga aggtttcggc cttatgggcg gacgggtgag taacgcgtag gaatctatcc
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="#EndB">//</a></pre>