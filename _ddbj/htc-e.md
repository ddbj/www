---
layout: indexed_content
title: HTC
pathname: htc-e
category: ddbj
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /ddbj/index-e.html
  - id: submission
    title: Submission
    url: /ddbj/submission-e.html
    children:
      - title: Before Submission
        url: /ddbj/submission-e.html
      - title: Web submission
        url: /ddbj/web-submission-e.html
      - title: Mass Submission
        url: /ddbj/mss-e.html
      - title: Data Update
        url: /ddbj/update-e.html
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/arsa/?lang=en
    children:
      - title: getentry
        url: http://getentry.ddbj.nig.ac.jp/top-e.html
      - title: ARSA
        url: http://ddbj.nig.ac.jp/arsa/?lang=en
  - id: flat_file
    title: Flat file
    url: /ddbj/flat-file-e.html
    children:
      - title: Feature key
        url: /ddbj/features-e.html
      - title: Qualifier key
        url: /ddbj/qualifiers-e.html
      - title: Organism qualifier
        url: /ddbj/organism-e.html
      - title: Description of Location
        url: /ddbj/location-e.html
      - title: Protein Coding Sequence
        url: /ddbj/cds-e.html
      - title: The Genetic Codes
        url: /ddbj/geneticcode-e.html
      - title: Codes Used in Sequence Description
        url: /ddbj/code-e.html
      - title: Example of Submission
        url: /ddbj/example-e.html
  - id: data_categories
    title: Data categories
    url: /ddbj/data-categories-e.html
    children:
      - title: Data Submission from Genome Project
        url: /ddbj/genome-e.html
      - title: Pseudohaplotype
        url: /ddbj/pseudohaplotype-e.html
      - title: WGS
        url: /ddbj/wgs-e.html
      - title: Metagenome Assembly
        url: /ddbj/metagenome-assembly-e.html
      - title: Single amplified genome
        url: /ddbj/single-amplified-genome-e.html
      - title: CON
        url: /ddbj/con-e.html
      - title: GSS
        url: /ddbj/gss-e.html
      - title: HTG
        url: /ddbj/htg-e.html
      - title: Submission of environmental sequences
        url: /ddbj/environmental-e.html
      - title: ENV
        url: /ddbj/env-e.html
      - title: TLS
        url: /ddbj/tls-e.html
      - title: Data Submission from Transcriptome Project
        url: /ddbj/transcriptome-e.html
      - title: TSA
        url: /ddbj/tsa-e.html
      - title: EST
        url: /ddbj/est-e.html
      - title: HTC
        url: /ddbj/htc-e.html
      - title: Third Party Data (TPA)
        url: /ddbj/tpa-e.html
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html
  - id: other
    title: Other
    url: /ddbj/index-e.html
    children:
      - title: Patent
        url: /ddbj/patent-data-e.html
      - title: MGA
        url: /ddbj/mga-e.html
lang: en
related_pages:
  - title: Data Submission from Genome Project
    url: /ddbj/genome-e.html
  - title: WGS
    url: /ddbj/wgs-e.html
  - title: CON
    url: /ddbj/con-e.html
  - title: GSS
    url: /ddbj/gss-e.html
  - title: HTG
    url: /ddbj/htg-e.html
  - title: Submission of environmental sequences
    url: /ddbj/environmental-e.html
  - title: ENV
    url: /ddbj/env-e.html
  - title: TLS
    url: /ddbj/tls-e.html
  - title: Data Submission from Transcriptome Project
    url: /ddbj/transcriptome-e.html
  - title: TSA
    url: /ddbj/tsa-e.html
  - title: EST
    url: /ddbj/est-e.html
  - title: HTC
    url: /ddbj/htc-e.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa-e.html
---

The HTC division of DDBJ/ENA/GenBank contains draft sequence data
derived from cDNA libraries created using full length insert cDNA (mRNA)
cloning methods.  
Like genome data ([HTG](/ddbj/htg-e.html)), when sequences are
considered to be finished level, the data will be moved from HTC to
corresponding taxonomic division.

You can submit HTC data to DDBJ through [Mass Submission System
(MSS)](/ddbj/mss-e.html).

 Notes on HTC/full length insert cDNA submission
: 
  - Prior to your submission, remove regions of cloning vectors from
    your sequences.
  - Clone ID is required for [clone](/ddbj/qualifiers-e.html#clone)
    qualifier.
  - It is strongly recommended to include qualifiers indicating
    expression conditions; tissue
    ([tissue_type](/ddbj/qualifiers-e.html#tissue_type)),
    developmental stage
    ([dev_stage](/ddbj/qualifiers-e.html#dev_stage)), mating type
    ([mating_type](/ddbj/qualifiers-e.html#mating_type) or
    [sex](/ddbj/qualifiers-e.html#sex)) and so on.
  - As mentioned above, HTC is different from EST assemble sequence.
    Do not confuse with [TSA: Transcriptome Shotgun
    Assembly](/ddbj/tsa-e.html).

### Sample flat file <a name="flat-file"></a>

Aspects of HTC/full length insert cDNA

  - If the sequence is considered to be finished, [LOCUS](#LocusA) line
    provides the division name according to taxonomic lineage; either of
    "HUM", "PRI", "ROD", "MAM", "VRT", "INV" or "PLN".  
    If the sequence is not finished level, the [DIVISION](#DivisionA)
    name is "HTC".
  - If the sequence is considered to be finished, [KEYWORDS](#KeywordsA)
    line provides the keyword, "FLI_CDNA".  
    If the sequence is not finished level, "HTC" is appeared as a
    keyword.  
    In HTC data, if the sequence is likely to be full length, it has a
    [KEYWORDS](#KeywordsA), "HTC_FLI".
  - Optionally, [KEYWORDS](#KeywordsA) line provides some methodological
    keyword, "oligo capping", "CAP trapper" or the like.

<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file-e#LocusNameB">AK000000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file-e#SequenceLengthB">1450 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">mRNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file-e#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file-e#DivisionB">HTC</a> <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">15-OCT-2008</a>
<a id="DefinitionA" href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  Mus musculus mRNA for hypothetical protein, complete cds, clone: 
            2310009A01, full insert sequence. 
<a id="AccessionA" href="/ddbj/flat-file-e#AccessionB">ACCESSION</a>   AK000000
<a id="VersionA" href="/ddbj/flat-file-e#VersionB">VERSION</a>     AK000000.1
<a id="KeywordsA" href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    HTC; HTC_FLI; CAP trapper.
<a id="SourceA" href="/ddbj/flat-file-e#SourceB">SOURCE</a>      Mus musculus (house mouse)
  <a id="OrganismA" href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  Mus musculus
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Glires; Rodentia;
            Sciurognathi; Muroidea; Muridae; Murinae; Mus; Mus.
<a id="Reference1A" href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 1450)
  <a id="AuthorsA" href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>   Mishima,H., Yamada,T. and Liu,G.Q.
  <a id="TitleA" href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (30-SEP-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Yamada,T., Park,C.S. and Liu,G.Q.
  TITLE     Mus musculus full-length enriched cDNA
  JOURNAL   Unpublished (2008)
<a id="FeaturesA" href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file-e#FeaturesSourceB">source</a>          <a href="/ddbj/location-e.html">1..1450</a>
                     /<a href="/ddbj/qualifiers-e.html#clone">clone</a>="2310009A01"
                     /<a href="/ddbj/qualifiers-e.html#clone_lib">clone_lib</a>="full-length enriched mouse cDNA library A01"
                     /<a href="/ddbj/qualifiers-e.html#db_xref">db_xref</a>="taxon:10090"
                     /<a href="/ddbj/qualifiers-e.html#dev_stage">dev_stage</a>="adult"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Mus musculus"
                     /<a href="/ddbj/qualifiers-e.html#sex">sex</a>="male"
                     /<a href="/ddbj/qualifiers-e.html#tissue_type">tissue_type</a>="tongue"
     <a href="/ddbj/features.html#cds">CDS</a>             <a href="/ddbj/location-e.html">124..1230</a>
                     /<a href="/ddbj/qualifiers-e.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers-e.html#product">product</a>="hypothetical protein"
                     /<a href="/ddbj/qualifiers-e.html#protein_id">protein_id</a>="BAA12348.1"
                     /<a href="/ddbj/qualifiers-e.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers-e.html#translation">translation</a>=""--- omitted ---"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          399 a          323 c          398 g          330 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 agtcgcacga aggtttcggc cttatgggcg gacgggtgag taacgcgtag gaatctatcc
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file-e#EndB">//</a></code></pre>

