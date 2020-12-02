---
layout: indexed_content
title: ENV
pathname: env-e
category: ddbj
current_tab: data_categories
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

The ENV division of DDBJ/ENA/GenBank contains sequence data and other
information on environmental samples. Though frequently confused,
<span class="red">**the term, 'environmental samples', does NOT mean
"wild type"**</span>.  
Environmental samples are identified sequences derived by direct
molecular isolation from a bulk environmental DNA sample (by PCR with or
without subsequent cloning of the product, DGGE, or other anonymous
methods) with no reliable identification of the source organism.

The ENV division contains (but is not limited to) the following types of
data:

  - sequences derived by direct molecular isolation from soil, sea
    water, etc.
  - clinical samples, gut contents, and other sequences from anonymous
    organisms that may be associated with a particular host
  - mixed culture derived from an environmental sample

Environmental samples do not include endosymbionts that can be reliably
recovered from a particular host, organisms from a readily identifiable
but uncultured field sample (e.g., many cyanobacteria), or phytoplasmas
that can be reliably recovered from diseased plants (even though these
cannot be grown in axenic culture).

Notes on environmental sample submission
: 
  - In many cases of environmental samples, we assign the lineage
    that as far as submitters could specify is used for the
    description of organism name with the header "uncultured". See
    also [Organism Qualifier 3. Environmental
    sample](/ddbj/organism-e.html#env) for further detail.
  - The
    [environmental\_sample](/ddbj/qualifiers-e.html#environmental_sample)
    qualifier is required in [source](/ddbj/features-e.html#source)
    feature.
  - The
    [isolation\_source](/ddbj/qualifiers-e.html#isolation_source)
    qualifier is required in [source](/ddbj/features-e.html#source)
    feature to describe origin of the sample.
  - Either [clone](/ddbj/qualifiers-e.html#clone) or
    [isolate](/ddbj/qualifiers-e.html#isolate) qualifier is required
    as an identifier.
  - Do not use [strain](/ddbj/qualifiers-e.html#strain) qualifier.

## Sample flat file <a name="flat-file"></a>

Aspects of environmental samples

  - [LOCUS](/ddbj/flat-file-e#LocusB) line provides the division name, "ENV".
  - [KEYWORDS](/ddbj/flat-file-e#KeywordsB) line provides the keyword name, "ENV".
  - In may cases, [ORGANISM](/ddbj/flat-file-e#OrganismB) line includes "environmental
    samples". Please note there are some exceptions.

<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file-e#LocusNameB">AB000000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file-e#SequenceLengthB">450 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">mRNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file-e#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file-e#DivisionB">ENV</a> <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">16-DEC-2012</a>
<a id="DefinitionA" href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  Uncultured Acetobacter sp. gene for 16S ribosomal RNA, partial
            sequence, clone: M12-34.
<a id="AccessionA" href="/ddbj/flat-file-e#AccessionB">ACCESSION</a>   AB000000
<a id="VersionA" href="/ddbj/flat-file-e#VersionB">VERSION</a>     AB000000.1
<a id="KeywordsA" href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    ENV.
<a id="SourceA" href="/ddbj/flat-file-e#SourceB">SOURCE</a>      uncultured Acetobacter sp.
  <a id="OrganismA" href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  uncultured Acetobacter sp.
            Bacteria; Proteobacteria; Alphaproteobacteria; Rhodospirillales;
            Acetobacteraceae; Acetobacter; environmental samples.
<a id="Reference1A" href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 450)
  <a id="AuthorsA" href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (15-DEC-2012) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Phylogenetic Profile of Sediment in Japan
  JOURNAL   Env Biol 12, 34-36 (2013)
<a id="CommentA" href="/ddbj/flat-file-e#CommentB">COMMENT</a>
<a id="FeaturesA" href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file-e#FeaturesSourceB">source</a>          <a href="/ddbj/location-e.html">1..450</a>
                     /<a href="/ddbj/qualifiers-e.html#clone">clone</a>="M12-34"
                     /<a href="/ddbj/qualifiers-e.html#country">country</a>="Japan:Osaka"
                     /db_xref="taxon:114714"
                     /<a href="/ddbj/qualifiers-e.html#environmental_sample">environmental_sample</a>
                     /<a href="/ddbj/qualifiers-e.html#isolation_source">isolation_source</a>="PCR-derived sequence from sediment"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="uncultured Acetobacter sp."
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location-e.html">&lt;1..&gt;450</a>
                     /<a href="/ddbj/qualifiers-e.html#product">product</a>="16S ribosomal RNA"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          199 a          223 c          198 g           230 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 agtcgcacga aggtttcggc cttagtggcg gacgggtgag taacgcgtag gaatctatcc
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file-e#EndB">//</a></code></pre>
