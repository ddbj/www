---
layout: indexed_content
title: HTG
pathname: htg
category: datacategories
lang: ja
---

DDBJ/ENA/GenBank の HTG division は finished
レベルに達していないゲノム配列を迅速に利用可能にするという科学界の需要に対応するために作られました。
HTG division には処理能力の高いゲノム解析センターから提供された finished
レベルに達していないゲノム配列データが含まれています。
配列が finished level に更新された後には、HTG ではなく、taxonomic lineage に基づく division
に移行します。

HTG 登録には、[Mass Submission System (MSS)](/ddbj/mss.html) をご利用ください。

HTG の登録における注意事項
:     
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

<pre><code><a id="LocusA" href="#LocusB">LOCUS</a>       <a id="LocusNameA" href="#LocusNameB">AP000000</a>              <a id="SequenceLengthA" href="#SequenceLengthB">121001 bp</a>    <a id="MoleculeTypeA" href="#MoleculeTypeB">DNA</a>    <a id="MoleculeFormA" href="#MoleculeFormB">linear</a>   <a id="DivisionA" href="#DivisionB">HTG</a> <a id="ModificationDateA" href="#ModificationDateB">15-OCT-2008</a>
<a id="DefinitionA" href="#DefinitionB">DEFINITION</a>  Arabidopsis thaliana DNA, chromosome 1, BAC clone: CIC5D1, ***
            SEQUENCING IN PROGRESS ***, 10 unordered pieces.
<a id="AccessionA" href="#AccessionB">ACCESSION</a>   AP000000
<a id="VersionA" href="#VersionB">VERSION</a>     AP000000.1
<a id="DblinkA" href="#DblinkB">DBLINK</a>      BioProject:PRJDB04321
<a id="KeywordsA" href="#KeywordsB">KEYWORDS</a>    HTG; HTGS_PHASE1.
<a id="SourceA" href="#SourceB">SOURCE</a>      Arabidopsis thaliana (thale cress)
  <a id="OrganismA" href="#OrganismB">ORGANISM</a>  Arabidopsis thaliana
            Eukaryota; Viridiplantae; Streptophyta; Embryophyta; Tracheophyta;
            Spermatophyta; Magnoliophyta; eudicotyledons; core eudicotyledons;
            rosids; malvids; Brassicales; Brassicaceae; Camelineae;
            Arabidopsis.
<a id="Reference1A" href="#Reference1B">REFERENCE   1</a>  (bases 1 to 423)
  <a id="AuthorsA" href="#AuthorsB">AUTHORS</a>    Mishima,H., Yamada,T. and Liu,G.Q.
  <a id="TitleA" href="#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="#JournalB">JOURNAL</a>   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Yamada,T., Park,C.S. and Liu,G.Q.
  TITLE     Arabidopsis thaliana DNA
  JOURNAL   Unpublished (2008)
<a id="FeaturesA" href="#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..121001</a>
                     /<a href="/ddbj/qualifiers.html#chromosome">chromosome</a>="1"
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="CIC5D1"
                     /<a href="/ddbj/qualifiers.html#clone_lib">clone_lib</a>="AT01 BAC"
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:3702"
                     /<a href="/ddbj/qualifiers.html#ecotype">ecotype</a>="columbia"
                     /<a href="/ddbj/qualifiers.html#map">map</a>="between mi303 and mi259"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Arabidopsis thaliana"
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">2079..2128</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">7295..7344</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">15694..15743</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">32780..32829</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">40371..40420</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">59441..59490</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">79080..79129</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">88074..88123</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location.html">107128..107177</a>
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>         105 a          98 c          112 g          108 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="#EndB">//</a></code></pre>