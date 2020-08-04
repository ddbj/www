---
layout: indexed_content
title: ENV
pathname: env-e
category: datacategories
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

## Sample flat file

Aspects of environmental samples

  - [LOCUS](#LocusA) line provides the division name, "ENV".
  - [KEYWORDS](#KeywordsA) line provides the keyword name, "ENV".
  - In may cases, [ORGANISM](#OrganismA) line includes "environmental
    samples". Please note there are some exceptions.

<!-- end list -->

<pre><code><a id="LocusA" href="#LocusB">LOCUS</a>       <a id="LocusNameA" href="#LocusNameB">AB000000</a>              <a id="SequenceLengthA" href="#SequenceLengthB">450 bp</a>    <a id="MoleculeTypeA" href="#MoleculeTypeB">mRNA</a>    <a id="MoleculeFormA" href="#MoleculeFormB">linear</a>   <a id="DivisionA" href="#DivisionB">ENV</a> <a id="ModificationDateA" href="#ModificationDateB">16-DEC-2012</a>
<a id="DefinitionA" href="#DefinitionB">DEFINITION</a>  Uncultured Acetobacter sp. gene for 16S ribosomal RNA, partial
            sequence, clone: M12-34.
<a id="AccessionA" href="#AccessionB">ACCESSION</a>   AB000000
<a id="VersionA" href="#VersionB">VERSION</a>     AB000000.1
<a id="KeywordsA" href="#KeywordsB">KEYWORDS</a>    ENV.
<a id="SourceA" href="#SourceB">SOURCE</a>      uncultured Acetobacter sp.
  <a id="OrganismA" href="#OrganismB">ORGANISM</a>  uncultured Acetobacter sp.
            Bacteria; Proteobacteria; Alphaproteobacteria; Rhodospirillales;
            Acetobacteraceae; Acetobacter; environmental samples.
<a id="Reference1A" href="#Reference1B">REFERENCE   1</a>  (bases 1 to 450)
  <a id="AuthorsA" href="#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="#JournalB">JOURNAL</a>   Submitted (15-DEC-2012) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Phylogenetic Profile of Sediment in Japan
  JOURNAL   Env Biol 12, 34-36 (2013)
<a id="CommentA" href="#CommentB">COMMENT</a>
<a id="FeaturesA" href="#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..450</a>
                     /<a href="/ddbj/qualifiers.html#clone">clone</a>="M12-34"
                     /<a href="/ddbj/qualifiers.html#country">country</a>="Japan:Osaka"
                     /db_xref="taxon:114714"
                     /<a href="/ddbj/qualifiers.html#environmental_sample">environmental_sample</a>
                     /<a href="/ddbj/qualifiers.html#isolation_source">isolation_source</a>="PCR-derived sequence from sediment"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="uncultured Acetobacter sp."
     <a href="/ddbj/features.html#rRNA">rRNA</a>            <a href="/ddbj/location.html">&lt;1..&gt;450</a>
                     /<a href="/ddbj/qualifiers.html#product">product</a>="16S ribosomal RNA"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          199 a          223 c          198 g           230 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 agtcgcacga aggtttcggc cttagtggcg gacgggtgag taacgcgtag gaatctatcc
        :
        -- The rest of nucleotide sequence is omitted --
        :
<a id="EndA" href="#EndB">//</a></code></pre>
