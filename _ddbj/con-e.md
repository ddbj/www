---
layout: tabbed_indexed_content
title: CON
service_name: DDBJ Annotated/Assembled Sequences
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

Many genome projects submitting a lot of [HTG](/ddbj/htg-e.html) or
[WGS](/ddbj/wgs-e.html) entries can often provide the information to
assemble a series of their entries and reconstruct a genome structure.
An accession number would be assigned for such contig tiling path, and
call it "CON entry", which is classified into CON division.

CON entries have CONTIG lines that indicate accession
numbers of citation sequences (piece entries) and their tiling order to
construct the contig. The nucleotide sequence of CON entry is not shown
on DDBJ flat file.

We can NOT directly accept the submission of CON entry. At you
have to submit all piece entries to construct the contig, then a CON
entry will be constructed.

[AGP File](/ddbj/file-format-e.html#agp) is required to submit CON
entries.

You can submit CON data to DDBJ via [Mass Submission System (MSS)](/ddbj/mss-e.html).

## Sample flat file <a name="flat-file"></a>

<pre><code><a id="LocusA" href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file-e#LocusNameB">BA001000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file-e#SequenceLengthB">5631 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">DNA</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file-e#DivisionB">CON</a> <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">06-DEC-2008</a>
<a id="DefinitionA" href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  Homo sapiens DNA, chromosome 7, scaffold_ASE1. 
<a id="AccessionA" href="/ddbj/flat-file-e#AccessionB">ACCESSION</a>   BA001000 BZZZ01000000
<a id="VersionA" href="/ddbj/flat-file-e#VersionB">VERSION</a>     BA001000.1
<a id="DblinkA" href="/ddbj/flat-file-e#DblinkB">DBLINK</a>      BioProject:PRJDA12345
<a id="KeywordsA" href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    WGS.
<a id="SourceA" href="/ddbj/flat-file-e#SourceB">SOURCE</a>      Homo sapiens (human)
  <a id="OrganismA" href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a id="Reference1A" href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 5631)
  <a id="AuthorsA" href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (01-APR-2003) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Human WGS scaffold CON
  JOURNAL   Unpublished (2003)
<a id="CommentA" href="/ddbj/flat-file-e#CommentB">COMMENT</a>     Whole genome shotgun sequencing project.
            Please visit our web site
            URL:http://www.ddbj.nig.ac.jp/
<a id="FeaturesA" href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file-e#FeaturesSourceB">source</a>          <a href="/ddbj/location-e.html">1..5631</a>
                     /<a href="/ddbj/qualifiers-e.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Homo sapiens"
                     /<a href="/ddbj/qualifiers-e.html#submitter_seqid">submitter_seqid</a>="scaffold_ASE1"
     <a href="/ddbj/features.html#assembly_gap">assembly_gap</a>    <a href="/ddbj/location-e.html">1346..2845</a>
                     /<a href="/ddbj/qualifiers-e.html#estimated_length">estimated_length</a>=1500
                     /<a href="/ddbj/qualifiers-e.html#gap_type">gap_type</a>="within scaffold"
                     /<a href="/ddbj/qualifiers-e.html#linkage_evidence">linkage_evidence</a>="paired-ends"
     <a href="/ddbj/features.html#assembly_gap">assembly_gap</a>    <a href="/ddbj/location-e.html">4302..4401</a>
                     /<a href="/ddbj/qualifiers-e.html#estimated_length">estimated_length</a>=unknown
                     /<a href="/ddbj/qualifiers-e.html#gap_type">gap_type</a>="within scaffold"
                     /<a href="/ddbj/qualifiers-e.html#linkage_evidence">linkage_evidence</a>="align trnscpt"
<a id="ContigA" href="#ContigB">CONTIG</a>      join(BZZZ01123456.1:1..1345,gap(1500),BZZZ01123457.1:1..1456,
            gap(unk100),complement(BZZZ01123458.1:1..1230))
<a id="EndA" href="/ddbj/flat-file-e#EndB">//</a></code></pre>
