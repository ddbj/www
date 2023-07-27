---
layout: tabbed_indexed_content
title: WGS
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

The whole genome shotgun approach (the whole genome is once blasted into millions of fragment, which are sequenced and reassembled to produce a series of sequence 'scaffolds'.) has been used to sequence the genome of various organisms.

The large set of contigs from the proceeding genome project can be submitted to DDBJ/ENA/GenBank as WGS data.  
See also [INSDC standards for genome assembly submission](/ddbj/assembly-e.html)

See [the list of publicized WGS data.](https://ddbj.nig.ac.jp/public/ddbj_database/wgs/WGS_ORGANISM_LIST.html)

You can submit WGS data to DDBJ via [Mass Submission System (MSS)](/ddbj/mss-e.html).

<dl>
  <dt>Acceptable WGS data</dt>
  <dd>In principle, DDBJ/ENA/GenBank can accept assemblies (i.e. overlapping reads) that are appropriately assembled sequences and can not accept redundant reads (i.e. raw read sequences). If you wish to publicize raw read sequences, we recommend you to contact <a href="/dra/index-e.html">DDBJ Sequence Read Archive (DRA)</a> instead of DDBJ/ENA/GenBank.
  </dd>
  <dd>
    <ul>
      <li>Prior to sequence data submission, it is required to submit to <a href="/bioproject/index-e.html">BioProject Database</a> and <a href="/biosample/index-e.html">BioSample Database</a>.</li>
<!--  <li>DDBJ accepts following two formats for WGS submissions; -->
        <dl>
<!--      <dt>a) WGS + scaffold CON:</dt> 
          <dd>The WGS entries are the contigs (overlapping reads with no gaps)</dd>
          <dd>The WGS entries can NOT have consequence "n"'s to represent sequencing gaps.</dd>
          <dd>If you need to submit how the WGS entries are assembled together into scaffolds or chromosomes, you can submit <a href="/ddbj/file-format-e.html#agp">AGP file</a>.</dd>
          <dd>DDBJ can accept scaffold (assembled contigs separated by gaps) as <a href="/ddbj/con-e.html">CON</a> entry", in AGP format.</dd>
          <dt>b) WGS with gaps:</dt> --> 
          <dd>The WGS entries are the scaffolds (assembled contigs separated by gaps).</dd>
          <dd>The WGS entries can contain consequence "n"'s to represent sequencing gaps.</dd>
<!--      <dd>No AGP file is required.</dd> -->
        </dl>
      </li>
    </ul>
  </dd>
</dl>

## Sample flat file  {#flat-file}

Aspects of WGS

  - Basically, each WGS sequence submitted to DDBJ is assigned an accession number that consists of 4 alphabet characters and 8 digits .
  - "WGS" and either of controlled terms indicating the degree of completion as genome sequence are indicated in [KEYWORDS](#KeywordsA) line.

<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file-e#LocusNameB">ZZZZ01000001</a>              <a id="SequenceLengthA" href="/ddbj/flat-file-e#SequenceLengthB">123456 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">DNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file-e#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file-e#DivisionB">HUM</a> <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">01-MAY-2003</a>
<a id="DefinitionA" href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  Homo sapiens DNA, chromosome 7, A01234B01. 
<a id="AccessionA" href="/ddbj/flat-file-e#AccessionB">ACCESSION</a>   ZZZZ01000001 ZZZZ01000000
<a id="VersionA" href="/ddbj/flat-file-e#VersionB">VERSION</a>     ZZZZ01000001.1
<a id="DblinkA" href="/ddbj/flat-file-e#DblinkB">DBLINK</a>      BioProject:PRJDA12345
            BioSample:SAMD01234567
            Sequence Read Archive:DRR012345, DRR012346
<a id="KeywordsA" href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    WGS; STANDARD_DRAFT.
<a id="SourceA" href="/ddbj/flat-file-e#SourceB">SOURCE</a>      Homo sapiens
  <a id="OrganismA" href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a id="Reference1A" href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 123456)
  <a id="AuthorsA" href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (01-APR-2003) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Human whole genome shotgun sequence
  JOURNAL   Unpublished (2003)
<a id="CommentA" href="/ddbj/flat-file-e#CommentB">COMMENT</a>     Whole genome shotgun sequencing project.
<a id="FeaturesA" href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file-e#FeaturesSourceB">source</a>          <a href="/ddbj/location-e.html">1..123456</a>
                     /<a href="/ddbj/qualifiers-e.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers-e.html#chromosome">chromosome</a>="7"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Homo sapiens"
                     /<a href="/ddbj/qualifiers-e.html#submitter_seqid">submitter_seqid</a>="A01234B01"

-- The rest is snipped --
<a id="EndA" href="/ddbj/flat-file-e#EndB">//</a></code></pre>
