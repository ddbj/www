---
layout: tabbed_indexed_content
title: TPA
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
---

<div class="attention" markdown="1">
[From January 2025 TPA-Exp and TPA-Inf submission types will no longer be accepted as new submissions](/news/en/2024-09-05-e.html )    
: TPA (Third Party Data) is a collection of nucleotide sequence data that has been assembled or (re) annotated by a third party (TPA submitters) 
based on entries already registered in INSDC (called primary entries). 
Those assemblies include two cases; one or more primary entries are used and newly determined sequence is contained. 
TPA sequence data should be submitted to INSDC databases (DDBJ/ENA/GenBank) as a part of the process to publish biological research for primary nucleotide sequences.

Reference Literature: [Cochrane,G. et al. (2006) OMICS,10(2): 105-113](https://www.liebertpub.com/doi/abs/10.1089/omi.2006.10.105)
</div>

## Definition of primary entry for TPA <a name="definition_of_primary"></a>
Primary entries used to build a TPA sequence are those that have been experimentally determined and are publicly available in the INSD databases.    
Each primary entry must be identified in the TPA entry.    

Primary entries are sometimes not yet publicized at the submission of TPA sequence.However, the primary entries must be publicized when TPA sequence is opened to the public.

## Acceptable TPA sequence data   
In order to draw a distinction between annotation supported by wet-lab. experimental evidence and inferred annotation, the TPA dataset is divided into TPA:experimental and TPA:inferential.    

Please refer to [the detailed list of TPA rule](/ddbj/tpa-table-e.html).

| [TPA:experimental](/ddbj/tpa-table-e.html#exp) | describes records that include functional annotation derived at least in part from peer-reviewed wet-lab experimental investigation.    |
| [TPA:inferential](/ddbj/tpa-table-e.html#inf)  | describes records that include functional annotation derived from peer-reviewed bioinformatic investigation. |
| [TPA:assembly](/ddbj/tpa-table-e.html#ass)  | describes records reporting assembly or reassembly, for which the generation, whether it is purely informatic or informed by experimentation, has been subject to peer review. Annotation may or may not be available and does not require to be part of the peer review for this TPA class. |
| [TPA:specialist_db](/ddbj/tpa-table-e.html#spe)  | describes records whose sequences are submitted from an existing authoritative public database that is built using INSDC sequence data and is described in an accepted peer-reviewed publication. The existing database is therefore recognized to be comprehensive, to have added value, and to be maintained long term. |
    
[Note]Until 2005, the only entries which were supported by biological (wet-lab.) experiment were accepted in TPA. 
Since 2006, entries which are not supported by wet-lab. experiment have been included into TPA when the entry meets the requirements of [TPA Submission Guidelines](/ddbj/tpa-table-e.html).    

Refer also [Unacceptable records for TP](/ddbj/tpa-table-e.html#nottpa)

## The following cases are NOT acceptable in TPA
  - Consensus sequences obtained from multiple species are not acceptable.
  - Annotation of repeat (and no other) features.
  - Annotation that has arisen from an automated tool, such as GeneMark,tRNA scan or ORF finder, where no further evidence, experimental or otherwise, is presented for the annotation.    
  The annotation in these cases has not been the subject of the peer review of the publication.
  - A record representing a completely sequenced genome including only features that have not been assigned gene symbols or product identifiers, for which none has wet laboratory experimental evidence.
    

## Notes on the TPA submission
  - TPA data can be submitted through <a href="https://www.ddbj.nig.ac.jp/ddbj/mss-e.html"> Mass Submission System (MSS) </a>. Please visit the <a href="https://mss.ddbj.nig.ac.jp">MSS form </a> site to complete the TPA submission.
  - The accession numbers of primary entries used to assemble a TPA sequence must be cited for TPA submission.
  - The sequences of [primary entries](#definition_of_primary) used
    to assemble a TPA sequence are required to be submitted to INSDC
    as 'primary data (i.e. not TPA)' or Trace Archive. If your
    TPA sequence contains a region that can not be obtained from
    INSDC or Trace Archive, but has been experimentally determined
    by yourself, at first, you have to submit it to DDBJ or Trace
    Archive.
  - For publicizing of TPA sequence, the evidence which support the
    sequence or annotation must be shown in a paper of a
    peer-reviewed journal.
  - To describe the correspondence of sequence regions between TPA
    and primary entries, both locations should be prepared.
  - In the case of whole scale genome assembly (e.g. TPA-WGS; Third Party Data-Whole Genome Shotgun) submission, it is mandatory to register both registration of  a project to the <a href="/bioproject/index-e.html">BioProject </a> and a bioresource to the <a href="/biosample/index.html">BioSample databases </a> respectively, prior to the TPA data submission. If you wish to annotate all protein-coding genes and non-protein-coding RNA genes on the assembly sequences, please register a <a href="/ddbj/locus_tag-e.html">locus_tag prefix</a> when submitting each BioSample.
  - Sample annotation: <a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit?pli=1&gid=123381270#gid=123381270">TPA-WGS annotation</a>

## The sequence alignment rule between TPA and primary entries
  - The accession number of the primary entries should describe on the COMMENT line or in a PRIMARY block. For COMMENT lines, list the accession numbers (with/without addiotional information) can be described. For PRIMARY block, you can describe the details of the correspondence of sequence regions between TPA and primary entries such as location of the sequences.
  - There cannot be stretches of more than 50bp which are
    unaccounted for by any contributing entry.
  - A TPA sequence may not differ from the primary sequence(s) used
    to build/assemble it and any unmatched sections by greater than
    5%. (This includes the overall length and individual primary
    accession)
  - This 5% (or less) difference will include sections of TPA
    sequence not covered by any primary, and it will include any
    differences between the TPA sequence and the primaries used,
    such as insertions, deletions, and substitutions.
  - These rules are based on length and similarity.

## Aspects of TPA on DDBJ flat file
  - [LOCUS](#LocusA) line represents the taxonomic division except CON and TSA cases.
  - Either of "TPA_exp:" (for TPA:experimental) or "TPA_inf:" (for TPA:inferential) is shown at the beginning of [DEFINITION](#DefinitionA) line.
  - Either set of the following values is indicated in [KEYWORDS](#KeywordsA) line. 
  {::nomarkdown}<table><tbody><tr><td>for<a href="/ddbj/tpa-table-e.html#exp">TPA:experimental</a></td><td>Third Party Data; TPA; TPA:experimental.</td></tr><tr><td>for <a href="/ddbj/tpa-table-e.html#inf">TPA:inferential</a></td><td>Third Party Data; TPA; TPA:inferential.</td></tr><tr><td>for <a href="/ddbj/tpa-table-e.html#ass">TPA:assembly</a></td><td class="second">Third Party Data; TPA; TPA:assembly.</td></tr><tr><td>for <a href="/ddbj/tpa-table-e.html#spe">TPA:specialist_db</a></td><td>Third Party Data; TPA; TPA:specialist_db.</td></tr></tbody></table>{:/}
  - [PRIMARY](#PrimaryA) block provides base spans cited from
    sequeces of primary entries that contribute to regions of the
    TPA sequence.


## Sample of TPA flat file  {#Sample_of_TPA_flat_file}

Example of non-TPA-assembly
: Basically, a TPA entry submitted to DDBJ is assigned an accession number that consists of 2 alphabet characters and 6 digits or 4 alphabet characters and 8 digits.
<pre><code><a id="LocusA" href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file-e#LocusNameB">BR000000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file-e#SequenceLengthB">1203 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">DNA</a>    <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file-e#DivisionB">INV</a> <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">24-OCT-2023</a>
<a id="DefinitionA" href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  TPA_inf: Ladona fulva ELOVL9 mRNA for elongation of very 
            long chain fatty acids protein 9, complete cds
<a id="AccessionA" href="/ddbj/flat-file-e#AccessionB">ACCESSION</a>   BR000000
<a id="VersionA" href="/ddbj/flat-file-e#VersionB">VERSION</a>     BR000000.1
<a id="KeywordsA" href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    Third Party Data; TPA; TPA:inferential.
<a id="SourceA" href="/ddbj/flat-file-e#SourceB">SOURCE</a>      Ladona fulva (scarce chaser)
  <a id="OrganismA" href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  Ladona fulva
            Eukaryota; Metazoa; Ecdysozoa; Arthropoda; Hexapoda; 
            Insecta; Pterygota; Palaeoptera; Odonata; Epiprocta;
            Anisoptera; Libellulidae; Ladona.
<a id="Reference1A" href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 1203)
  <a id="AuthorsA" href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (08-SEP-2022)
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Molecular basis of wax-based color change and UV
            reflection in dragonflies
  JOURNAL   Elife 8, e43045 (2019)
<a id="CommentA" href="/ddbj/flat-file-e#CommentB">COMMENT</a>    THIRD PARTY DATABASE: This TPA record uses data from INSD 
             entry ********.*
<a id="PrimaryA" href="#PrimaryB">PRIMARY</a>     TPA_SPAN            PRIMARY_IDENTIFIER PRIMARY_SPAN        COMP
            1-211               ZZ000001.1         558648-558708 
            195-352             ZZ000012.1         465516-465706       c
            339-533             ZZ000101.1         465272-465352 
            526-789             ZZ123456.1         464731-464787       c
            754-1022            ZZ234567.1         462998-463103
            1005-1198           ZZ234568.1         462269-462405       c
            1002-1203           ZZ345679.1         460365-460532       c
<a id="FeaturesA" href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file-e#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..1203</a>
                     /<a href="/ddbj/qualifiers-e.html#db_xref">db_xref</a>="taxon:123851"
                     /<a href="/ddbj/qualifiers-e.html#geo_loc_name">geo_loc_name</a>="missing: thrid party data"
                     /<a href="/ddbj/qualifiers-e.html#collection_date">collection_date</a>="missing: thrid party data"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Ladona fulva"
     <a href="/ddbj/features.html#CDS">CDS</a>             <a href="/ddbj/location.html">join(25..259,361..786,821..960)</a> 
                     /<a href="/ddbj/qualifiers-e.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers-e.html#gene">gene</a>="ELOVL9"
                     /<a href="/ddbj/qualifiers-e.html#product">product</a>="elongation of very long chain fatty
                     acids protein 9"
                     /<a href="/ddbj/qualifiers-e.html#protein_id">protein_id</a>="xxxxxxxxxx.1"
                     /<a href="/ddbj/qualifiers-e.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers-e.html#translation">translation</a>="MAAIASQVVDKYFEFMETKSDPRTSEWFLMSGP
                     GPLVFVLVTYLYFCNKVGPQWMEKRKPYDLKPLLIAYNLIQVLFSVW
                     LVWEGLQGGWLHHYNLKCQPVDYSNDPVAIRMANACWWYFFCKLIEL
                     LDTVFFVLRKKNNQISFLHLYHHTLMPVCAWIGTKFLPGGHGTFLGV
                     INSFVHIIMYFYYMMSAMGPQYQKYIWWKKYLTTLQMVQFCMIFIHS
                     SQLLIYECNYPKTIIVLLGINALFFLGLFGNFYRKSYKARNMKVE
"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          214 a          156 c          174 g          257 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 atggcggcga tcgctagcca ggttgttgac aagtatttcg agttcatgga gaccaagagc
        :
        -- The rest of sequence is omitted --
<a id="EndA" href="/ddbj/flat-file-e#EndB">//</a></code></pre>

Example of TPA-assembly
: Basically, a TPA-Assembly entry submitted to DDBJ is assigned an accession number that consists of 2 alphabet characters and 6 digits or 4 alphabet characters and 8 digits.
  
<pre><code><a id="LocusA" href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file-e#LocusNameB">EZZZ01000001</a>              <a id="SequenceLengthA" href="/ddbj/flat-file-e#SequenceLengthB">259680 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">DNA</a>    <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file-e#DivisionB">VRT</a> <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">24-OCT-2023</a>
<a id="DefinitionA" href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  TPA_asm: Casuarius casuarius DNA, secondary_bubble21.
<a id="AccessionA" href="/ddbj/flat-file-e#AccessionB">ACCESSION</a>   EZZZ01000001 EZZZ01000000
<a id="VersionA" href="/ddbj/flat-file-e#VersionB">VERSION</a>     EZZZ01000001.1
<a id="DblinkA" href="/ddbj/flat-file-e#DblinkB">DBLINK</a>      BioProject:PRJDB99999
            Sequence Read Archive:SRR9999990, SRR9999991, 
            SRR9999992, SRR9999993
            BioSample:SAMD99999999
<a id="KeywordsA" href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    WGS; Third Party Data; TPA; TPA:assembly.
<a id="SourceA" href="/ddbj/flat-file-e#SourceB">SOURCE</a>      Casuarius casuarius (southern cassowary)
  <a id="OrganismA" href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  Casuarius casuarius
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; 
            Euteleostomi; Archelosauria; Archosauria; Dinosauria;
            Saurischia; Theropoda; Coelurosauria; Aves;
            Palaeognathae; Casuariiformes; Casuariidae; Casuarius.
<a id="Reference1A" href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 259680)
  <a id="AuthorsA" href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (11-NOV-2022)
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Diploid genome assembly of Analysis of the Casuarius 
            casuarius.
  JOURNAL   Genome Biol Evol (2023)
  REMARK    Publication Status: Available-Online prior to print
            DOI:10.xxx/xxxx/xxxxxx
<a id="CommentA" href="/ddbj/flat-file-e#CommentB">COMMENT</a>    
            ##Genome-Assembly-Data-START##
            Assembly Method       :: HGAP v. 1.0; Celera Assembler v. 7.0; 
                                     Quiver v. 1.4.0; Sequencher v. 5.1
            Assembly Name         :: MusC56 v1
            Genome Coverage       :: 238x
            Sequencing Technology :: PacBio RS, Illumina GAIIx
            ##Genome-Assembly-Data-END##
            
            Third party assembly of primary data, 
            SRR9999990-SRR9999993.
            This is a diploid assembly of female cassowary 
            individual. Thealternate pseudohaplotype (secondary 
            bubble) contigs are secondary_bubble21 - 
            secondary_bubble181348. The unassigned (non
            bubble hetero) contigs are non_bubble_hetero3148954 -
            non_bubble_hetero3150069.The homologous (non bubble 
            other) contigs are      
            non_bubble_other181349-non_bubble_other181377.
<a id="FeaturesA" href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file-e#FeaturesSourceB">source</a>          <a href="/ddbj/location-e.html">1..259680</a>
                     /<a href="/ddbj/qualifiers-e.html#db_xref">db_xref</a>="taxon:8787"
                     /<a href="/ddbj/qualifiers-e.html#geo_loc_name">geo_loc_name</a>="missing: thrid party data"
                     /<a href="/ddbj/qualifiers-e.html#collection_date">collection_date</a>="missing: thrid party data"
                     /<a href="/ddbj/qualifiers-e.html#submitter_seqid">submitter_seqid=</a>"secondary_bubble21"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Casuarius casuarius"
     <a href="/ddbj/features.html#CDS">CDS</a>             <a href="/ddbj/location-e.html">join(36..256,321..597,712..891)</a> 
                     /<a href="/ddbj/qualifiers-e.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers-e.html#locus_tag">locus_tag</a>="ABCDS_000010"
                     /<a href="/ddbj/qualifiers-e.html#product">product</a>="hypothetical protein"
                     /<a href="/ddbj/qualifiers-e.html#protein_id">protein_id</a>="xxxxxxxxxx.1"
                     /<a href="/ddbj/qualifiers-e.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers-e.html#translation">translation</a>="MSKSIRNPIYPPVKGTVFDQLFYNRLYDYQTEM
                     ANIEHVLKTNFSKYSKGKYNQDIVSDIFGQGIFVVDGEKWKQQRKLA
                     SFFSTRVLRDFSCSVFRRNAFEISGATKSFDMQDILMRCTLDSIFKV
                     GFGIDLNCLEGSSKEGTAFMDPEENDTYLRDIILNFMIAGKDTSANT
                     LSWFLYMLCKNPLIQEKVAQEVRDVVGGQVGDPDELVANITDAALEK
                     MHYL"
     <a href="/ddbj/features.html#assembly_gap">assembly_gap</a>    <a href="/ddbj/location-e.html">921..1156</a> 
                     /<a href="/ddbj/qualifiers-e.html#estimated_length=">estimated_length</a>=236
                     /<a href="/ddbj/qualifiers-e.html#gap_type=">gap_type</a>="within scaffold"
                     /<a href="/ddbj/qualifiers-e.html#linkage_evidence=">linkage_evidence</a>="paired_ends"

<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          54123 a          69116 c          62143 g          62168 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 aaaaaaagag gttaaaaaat ctgggagttg cttagctaca ctagactgat ccttgaggaa
        :
        -- The rest of sequence is omitted --
<a id="EndA" href="/ddbj/flat-file-e#EndB">//</a></code></pre>