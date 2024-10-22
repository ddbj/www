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
    url: /ddbj/est-a.html
  - title: HTC
    url: /ddbj/htc-e.html
  - title: Third Party Data (TPA)
    url: /ddbj/tpa-e.html
---

The whole genome shotgun approach (the whole genome is once blasted into millions of fragment, which are sequenced and reassembled to produce a series of sequence 'scaffolds'.) has been used to sequence the genome of various organisms.

The large set of contigs from the proceeding genome project can be submitted to DDBJ/ENA/GenBank as WGS data.  
See also [INSDC standards for genome assembly submission](/ddbj/assembly-e.html)

See [the list of publicized WGS data.](https://ddbj.nig.ac.jp/public/ddbj_database/wgs/WGS_ORGANISM_LIST.html)

You can submit WGS data to DDBJ via [Mass Submission System (MSS)](/ddbj/mss-e.html).

## Acceptable WGS data
  <dd>In principle, DDBJ/ENA/GenBank can accept assemblies (i.e. overlapping reads) that are appropriately assembled sequences and can not accept redundant reads (i.e. raw read sequences). If you wish to publicize raw read sequences, we recommend you to contact <a href="/dra/index-e.html">DDBJ Sequence Read Archive (DRA)</a>.
  </dd>
  <dd>
    <ul>
      <li>The WGS entries are contigs (overlapping reads) and/or the scaffolds (assembled contigs separated by gaps).</li>
      <li>The WGS entries can contain consecutive "n" s to represent sequencing gaps.</li>
    </ul>
  </dd>


## Unacceptable WGS data
- Assembled genome sequences from multiple organisms that are not metagenomes.
- The following cases without chromosome assembly (contigs and scaffolds)
   - Organelle genome contigs alone.
   - Plasmids contigs alone.

## Submission of WGS entry
The Submitters visit the <a href="https://mss.ddbj.nig.ac.jp/home">MSS form</a> site and make an application.
  - Prior to assembly sequence data submission, it is required to submit to BioProject and BioSample databases.
  - If you wish to annotate all protein-coding genes and non-protein-coding RNA genes on the assembly sequences, please register a locus_tag prefix when submitting each BioSample.
  - Sample annotation: <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit?pli=1&gid=1134992157#gid=1134992157">(WGS sample annotation)</a>.

## Sample flat file  {#flat-file}

Aspects of WGS

  - Basically, each WGS sequence submitted to DDBJ is assigned an accession number that consists of 6 alphabet characters and 9 digits (since January 2024) or 4 alphabet characters and 8 digits.
  - "WGS" and either of controlled terms （STANDARD_DRAFT, HIGH_QUALITY_DRAFT, IMPROVED_HIGH_QUALITY_DRAFT, ANNOTATION_GRADE, NON_CONTIGUOUS_FINISHED) indicating the degree of completion as genome sequence are indicated in [KEYWORDS](#KeywordsA) line.  The definitions of each KEYWORD can be found on the following website<a href="https://www.insdc.org/submitting-standards/methodological-keywords/">(INSDC agreed methodological keywords)</a>.
  - A summary of the assembly is displayed in the COMMENT.
  
  
<table>
  <tr>
   <td>
Tag name
   </td>
   <td>Value （information）
   </td>
  </tr>
  <tr>
   <td>Assembly Method
   </td>
   <td>Name of the assembly algorithm(s) with version number it was run.
   </td>
  </tr>
  <tr>
   <td>Assembly Name
   </td>
   <td>A brief name suitable for display that does not include the organism name. This is mandatory for eukaryotes.
   </td>
  </tr>
  <tr>
   <td>Genome Coverage
   </td>
   <td>The estimated base coverage across the genome.
   </td>
  </tr>
  <tr>
   <td>Sequencing Technology
   </td>
   <td>Sequencing platform(s) used.
   </td>
  </tr>
</table>
<br>

<!-- end list -->

<pre><code><a id="LocusA" href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file-e#LocusNameB">ZZZZZZ010000001</a>              <a id="SequenceLengthA" href="/ddbj/flat-file-e#SequenceLengthB">123456 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">DNA</a>    <a id="MoleculeFormA" href="/ddbj/flat-file-e#MoleculeFormB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file-e#DivisionB">ROD</a> <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">07-AUG-2024</a>
<a id="DefinitionA" href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  Mus musculus C57BL6 DNA, EN0001. 
<a id="AccessionA" href="/ddbj/flat-file-e#AccessionB">ACCESSION</a>   ZZZZZZ010000001 ZZZZZZ010000000
<a id="VersionA" href="/ddbj/flat-file-e#VersionB">VERSION</a>     ZZZZZZ010000001.1
<a id="DblinkA" href="/ddbj/flat-file-e#DblinkB">DBLINK</a>      BioProject:PRJDB99999
            Sequence Read Archive:DRR999998, DRR999999
            BioSample:SAMD99999999
<a id="KeywordsA" href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    WGS; STANDARD_DRAFT.
<a id="SourceA" href="/ddbj/flat-file-e#SourceB">SOURCE</a>      Mus musculus
  <a id="OrganismA" href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi; 
            Mammalia; Eutheria; Euarchontoglires; Glires; Rodentia; Myomorpha; 
            Muroidea; Muridae;Murinae; Mus; Mus.
<a id="Reference1A" href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 123456)
  <a id="AuthorsA" href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (01-MAY-2024) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Mouse whole genome shotgun sequence
  JOURNAL   Unpublished (2024)
<a id="CommentA" href="/ddbj/flat-file-e#CommentB">COMMENT</a>     Whole genome shotgun sequencing project.
            #Genome-Assembly-Data-START##
            Assembly Method       :: HGAP v. 1.0; Celera Assembler v. 7.0; 
                                     Quiver v. 1.4.0; Sequencher v. 5.1
            Assembly Name         :: MusC56 v1
            Genome Coverage       :: 238x
            Sequencing Technology :: PacBio RS, Illumina GAIIx
            ##Genome-Assembly-Data-END##
<a id="FeaturesA" href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file-e#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..123456</a>
                     /<a href="/ddbj/qualifiers.html-e#mol_type">collection_date</a>="missing: lab stock"
                     /<a href="/ddbj/qualifiers.html-e#db_xref">db_xref</a>="taxon:10090"
                     /<a href="/ddbj/qualifiers.html-e#geo_loc_name">geo_loc_name</a>="Japan"
                     /<a href="/ddbj/qualifiers.html-e#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html-e#organism">organism</a>="Mus musculus"
                     /<a href="/ddbj/qualifiers.html-e#strain">strain</a>="C57BL6"
                     /<a href="/ddbj/qualifiers.html-e#submitter_seqid">submitter_seqid</a>="EN0001"
     <a id="FeaturesCDSA" href="/ddbj/flat-file-e#FeaturesCDSB">CDS</a>             <a href="/ddbj/location.html">complement(join(147..1241,1364..1816))</a>
                     /<a href="/ddbj/qualifiers.html-e#codn_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html-e#locus_tag">locus_tag</a>="DDBJGEN_0001G0001"
                     /<a href="/ddbj/qualifiers.html-e#product">product</a>="hypothetical protein"
                     /<a href="/ddbj/qualifiers.html-e#protein_id">protein_id</a>="xxxxxxxxxx.1"
                     /<a href="/ddbj/qualifiers.html-e#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html-e#translation">translation</a>="MTEHIFEKISLNLSNIINKCVYKQTTLNDAQNE
                     IKETMNVIINQYNHYITKDVMDEILILTSKLLYSQNIESLIIYLNKL
                     (snipped)
                     GFFRMYQIWNVS"
     <a id="Featuresassembly_gapA" href="/ddbj/flat-file-e#Featuresassembly_gapB">assembly_gap</a>    <a href="/ddbj/location.html">2982..3269</a>
                     /<a href="/ddbj/qualifiers.html-e#estimated_length">estimated_length</a>=288
                     /<a href="/ddbj/qualifiers.html-e#gap_type">gap_type</a>="within scaffold"
                     /<a href="/ddbj/qualifiers.html-e#linkage_evidence">linkage_evidence</a>="paired_ends"
     <a id="FeaturestRNA" href="/ddbj/flat-file-e#FeaturestRNAB">tRNA</a>             <a href="/ddbj/location.html">3569..3643</a>
                     /<a href="/ddbj/qualifiers.html-e#locus_tag">locus_tag</a>="DDBJGEN_t0001G0001"
                     /<a href="/ddbj/qualifiers.html-e#product">product</a>="tRNA-Ser"

-- The rest is snipped --
<a id="EndA" href="/ddbj/flat-file-e#EndB">//</a></code></pre>

