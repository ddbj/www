---
layout: tabbed_indexed_content
title: HTG
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: data_categories
lang: en
related_pages:
  - title: Data Submission from Genome Project
    url: /ddbj/genome-e.html
  - title: Submission of environmental sequences
    url: /ddbj/environmental-e.html
  - title: Data Submission from Transcriptome Project
    url: /ddbj/transcriptome-e.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa-e.html
---

The HTG division was created to accommodate a growing need to make unfinished genomic sequence data available to the scientific community.    

The HTG division of DDBJ contains unfinished genome sequences.    
When sequences are considered to be finished level, the data will be moved from HTG to corresponding taxonomic division.  

You can submit HTG data to DDBJ through [Mass Submission System (MSS)](/ddbj/mss-e.html).

Notes on HTG submission  
: 
  - Prior to sequence data submission, get a BioProject ID for your
    project on the [BioProject Database](/bioproject/index-e.html)
  - Clone ID should be described in
    [clone](/ddbj/qualifiers-e.html#clone) qualifier.  
    Basically, main targets of HTG division are unfinished sequences
    of BAC, YAC, fosmid clones.

## Sample flat file  {#flat-file}

Aspects of HTG

  - If the sequence is considered to be finished, [LOCUS](#LocusA) line
    provides the division name according to taxonomic lineage; either of
    "HUM", "PRI", "ROD", "MAM", "VRT", "INV", "PLN" or "BCT".  
    If the sequence is not finished level, the division name is "HTG".
  - If the sequence is considered to be finished, there is no keyword in
    [KEYWORDS](#KeywordsA).  
    If the sequence is not finished level, "HTG" and either of
    "HTGS_PHASE0", "HTGS_PHASE1" or "HTGS_PHASE2" are appeared as
    keywords.
      - <span class="red">HTGS_PHASE0</span>: one-to-few pass reads of
        a single clone
      - <span class="red">HTGS_PHASE1</span>: unfinished, may be
        unordered, unoriented contigs, with gaps.
      - <span class="red">HTGS_PHASE2</span>: unfinished, ordered,
        oriented contigs, with or without gaps.
  - Optionally, [KEYWORDS](#KeywordsA) line provides some other
    keywords, "HTGS_DRAFT", "HTGS_ENRICHED", "HTGS_POOLED_CLONE" or
    "HTGS_POOLED_MULTICLONE".

<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file-e#LocusNameB">AP000000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file-e#SequenceLengthB">121001 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">DNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file-e#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file-e#DivisionB">HTG</a> <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">15-OCT-2008</a>
<a id="DefinitionA" href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  Arabidopsis thaliana DNA, chromosome 1, BAC clone: CIC5D1, ***
            SEQUENCING IN PROGRESS ***, 10 unordered pieces.
<a id="AccessionA" href="/ddbj/flat-file-e#AccessionB">ACCESSION</a>   AP000000
<a id="VersionA" href="/ddbj/flat-file-e#VersionB">VERSION</a>     AP000000.1
<a id="DblinkA" href="/ddbj/flat-file-e#DblinkB">DBLINK</a>      BioProject:PRJDB04321
<a id="KeywordsA" href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    HTG; HTGS_PHASE1.
<a id="SourceA" href="/ddbj/flat-file-e#SourceB">SOURCE</a>      Arabidopsis thaliana (thale cress)
  <a id="OrganismA" href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  Arabidopsis thaliana
            Eukaryota; Viridiplantae; Streptophyta; Embryophyta; Tracheophyta;
            Spermatophyta; Magnoliophyta; eudicotyledons; core eudicotyledons;
            rosids; malvids; Brassicales; Brassicaceae; Camelineae;
            Arabidopsis.
<a id="Reference1A" href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 423)
  <a id="AuthorsA" href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>    Mishima,H., Yamada,T. and Liu,G.Q.
  <a id="TitleA" href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Yamada,T., Park,C.S. and Liu,G.Q.
  TITLE     Arabidopsis thaliana DNA
  JOURNAL   Unpublished (2008)
<a id="FeaturesA" href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file-e#FeaturesSourceB">source</a>          <a href="/ddbj/location-e.html">1..121001</a>
                     /<a href="/ddbj/qualifiers-e.html#chromosome">chromosome</a>="1"
                     /<a href="/ddbj/qualifiers-e.html#clone">clone</a>="CIC5D1"
                     /<a href="/ddbj/qualifiers-e.html#collection_date">collection_date</a>="2001"
                     /<a href="/ddbj/qualifiers-e.html#db_xref">db_xref</a>="taxon:3702"
                     /<a href="/ddbj/qualifiers-e.html#ecotype">ecotype</a>="Columbia"
                     /<a href="/ddbj/qualifiers-e.html#geo_loc_name">geo_loc_name</a>="USA"
                     /<a href="/ddbj/qualifiers-e.html#map">map</a>="between mi303 and mi259"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Arabidopsis thaliana"
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location-e.html">2079..2128</a>
                     /<a href="/ddbj/qualifiers-e.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location-e.html">7295..7344</a>
                     /<a href="/ddbj/qualifiers-e.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location-e.html">15694..15743</a>
                     /<a href="/ddbj/qualifiers-e.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location-e.html">32780..32829</a>
                     /<a href="/ddbj/qualifiers-e.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location-e.html">40371..40420</a>
                     /<a href="/ddbj/qualifiers-e.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location-e.html">59441..59490</a>
                     /<a href="/ddbj/qualifiers-e.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location-e.html">79080..79129</a>
                     /<a href="/ddbj/qualifiers-e.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location-e.html">88074..88123</a>
                     /<a href="/ddbj/qualifiers-e.html#estimated_length">estimated_length</a>=unknown
     <a href="/ddbj/features.html#gap">gap</a>             <a href="/ddbj/location-e.html">107128..107177</a>
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>         105 a          98 c          112 g          108 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file-e#EndB">//</a></code></pre>
