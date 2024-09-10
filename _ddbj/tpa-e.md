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

<span class="red">[Caution]</span> [From January 2025 TPA-Exp and TPA-Inf submission types will no longer be accepted as new submissions](/news/en/2024-09-05-e.html )    

TPA (Third Party Data) is a nucleotide sequence data collection in which each primary is obtained by assembling 
[primary entries](#definition_of_primary) publicized from with 
additional feature annotation(s) determined by experimental or inferential methods by TPA submitter.    
Those assemblies include two cases; one or more [primary entries](#definition_of_primary) are used and newly determined sequence is contained. 
TPA sequence data should be submitted to DDBJ/EMBL-Bank/GenBank as a part of the process to publish biological research for primary nucleotide sequences.

Reference Literature: [Cochrane,G. et al. (2006) OMICS,10(2): 105-113](https://www.liebertpub.com/doi/abs/10.1089/omi.2006.10.105)

Definition of primary entry for TPA <a name="definition_of_primary"></a>
: Primary entries used to build a TPA sequence are those that have
been experimentally determined and are publicly available in the
DDBJ/EMBL-Bank/GenBank databases.Each primary entry must be
identified in the TPA entry.

: Primary entries are sometimes not yet publicized at the submission
of TPA sequence.However, the primary entries must be publicized when
TPA sequence is opened to the public.

Acceptable TPA sequence data  
: In order to draw a distinction between annotation supported by
wet-lab. experimental evidence and inferred annotation, the TPA
dataset is divided into TPA:experimental and TPA:inferential.  
Please refer to [the detailed list of TPA
rule](/ddbj/tpa-table-e.html).

: 
| [TPA:experimental](/ddbj/tpa-table-e.html#exp) | describes records that include functional annotation derived at least in part from peer-reviewed wet-lab experimental investigation.    |
| [TPA:inferential](/ddbj/tpa-table-e.html#inf)  | describes records that include functional annotation derived from peer-reviewed bioinformatic investigation. |
| [TPA:assembly](/ddbj/tpa-table-e.html#ass)  | describes records reporting assembly or reassembly, for which the generation, whether it is purely informatic or informed by experimentation, has been subject to peer review. Annotation may or may not be available and does not require to be part of the peer review for this TPA class. |
| [TPA:specialist_db](/ddbj/tpa-table-e.html#spe)  | describes records whose sequences are submitted from an existing authoritative public database that is built using INSDC sequence data and is described in an accepted peer-reviewed publication. The existing database is therefore recognized to be comprehensive, to have added value, and to be maintained long term. |
    

[Note]Until 2005, the only entries which were supported by biological (wet-lab.) experiment were accepted in TPA. 
Since 2006, entries which are not supported by wet-lab. experiment have been included into TPA when the entry meets the requirements of [TPA Submission Guidelines](/ddbj/tpa-table-e.html).


The following cases are NOT acceptable in TPA
: 
  - Annotation of repeat (and no other) features.
  - Annotation that has arisen from an automated tool, such as
    GeneMark,tRNA scan or ORF finder, where no further evidence,
    experimental or otherwise, is presented for the annotation. The
    annotation in these cases has not been the subject of the peer
    review of the publication.
  - A record representing a completely sequenced genome including
    only features that have not been assigned gene symbols or
    product identifiers, for which none has wet laboratory
    experimental evidence.
    
    [Refer also this page](/ddbj/tpa-table-e.html#nottpa)

Notes on the TPA submission
: 
  - Consensus sequences obtained from multiple species are not
    acceptable.
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

The sequence alignment rule between TPA and primary entries
: 
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

Aspects of TPA on DDBJ flat file
: 
  - [LOCUS](#LocusA) line provides the taxonomic division except CON and TSA cases.
  - Either of "TPA_exp:" (for TPA:experimental) or "TPA_inf:" (for TPA:inferential) is shown at the beginning of [DEFINITION](#DefinitionA) line.
  - Either set of the following values is indicated in [KEYWORDS](#KeywordsA) line.<br>{::nomarkdown}<table><tbody><tr><td>for <a href="/ddbj/tpa-table-e.html#exp">TPA:experimental</a></td><td>Third Party Data; TPA; TPA:experimental.</td></tr><tr><td>for <a href="/ddbj/tpa-table-e.html#inf">TPA:inferential</a></td><td>Third Party Data; TPA; TPA:inferential.</td></tr><tr><td>for <a href="/ddbj/tpa-table-e.html#ass">TPA:assembly</a></td><td class="second">Third Party Data; TPA; TPA:assembly.</td></tr><tr><td>for <a href="/ddbj/tpa-table-e.html#spe">TPA:specialist_db</a></td><td>Third Party Data; TPA; TPA:specialist_db.</td></tr></tbody></table>{:/}
  - [PRIMARY](#PrimaryA) block provides base spans cited from
    sequeces of primary entries that contribute to regions of the
    TPA sequence.


## Sample of TPA flat file  {#Sample_of_TPA_flat_file}


<pre><code><a id="LocusA" href="/ddbj/flat-file-e#LocusB">LOCUS</a>       <a id="LocusNameA" href="/ddbj/flat-file-e#LocusNameB">BR000000</a>              <a id="SequenceLengthA" href="/ddbj/flat-file-e#SequenceLengthB">2000 bp</a>    <a id="MoleculeTypeA" href="/ddbj/flat-file-e#MoleculeTypeB">mRNA</a>    <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">linear</a>   <a id="DivisionA" href="/ddbj/flat-file-e#DivisionB">HUM</a> <a id="ModificationDateA" href="/ddbj/flat-file-e#ModificationDateB">17-SEP-2006</a>
<a id="DefinitionA" href="/ddbj/flat-file-e#DefinitionB">DEFINITION</a>  TPA_exp: Homo sapiens GAPD gene for glyceraldehyde-3-phosphate
            dehydrogenase, complete cds.
<a id="AccessionA" href="/ddbj/flat-file-e#AccessionB">ACCESSION</a>   BR000000
<a id="VersionA" href="/ddbj/flat-file-e#VersionB">VERSION</a>     BR000000.1
<a id="KeywordsA" href="/ddbj/flat-file-e#KeywordsB">KEYWORDS</a>    Third Party Data; TPA; TPA:experimental.
<a id="SourceA" href="/ddbj/flat-file-e#SourceB">SOURCE</a>      Homo sapiens (human)
  <a id="OrganismA" href="/ddbj/flat-file-e#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a id="Reference1A" href="/ddbj/flat-file-e#Reference1B">REFERENCE   1</a>  (bases 1 to 2000)
  <a id="AuthorsA" href="/ddbj/flat-file-e#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="/ddbj/flat-file-e#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="/ddbj/flat-file-e#JournalB">JOURNAL</a>   Submitted (30-NOV-2005) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="/ddbj/flat-file-e#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Glyceraldehyde-3-phosphate dehydrogenase of human
  JOURNAL   TPA Biol Chem 10, 50-59 (2006)
<a id="CommentA" href="/ddbj/flat-file-e#CommentB">COMMENT</a>             
<a id="PrimaryA" href="#PrimaryB">PRIMARY</a>     TPA_SPAN            PRIMARY_IDENTIFIER PRIMARY_SPAN        COMP
            1-1000              ZZ000001.1         50001-51000
            101-200             ZZ000003.1         1-100
            501-600             ZZ000003.1         101-200
            901-2000            ZZ000002.1         25001-26100         c
            1451-1550           ZZ000003.1         201-300
<a id="FeaturesA" href="/ddbj/flat-file-e#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="/ddbj/flat-file-e#FeaturesSourceB">source</a>          <a href="/ddbj/location-e.html">1..2000</a>
                     /<a href="/ddbj/qualifiers-e.html#collection_date">collection_date</a>="2007"
                     /<a href="/ddbj/qualifiers-e.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers-e.html#geo_loc_name">geo_loc_name</a>="Japan"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Homo sapiens"
     <a href="/ddbj/features-e.html#CDS">CDS</a>             <a href="/ddbj/location-e.html">join(153..200,501..600,1451..1500)</a> 
                     /<a href="/ddbj/qualifiers-e.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers-e.html#gene">gene</a>="GAPD"
                     /<a href="/ddbj/qualifiers-e.html#product">product</a>="glyceraldehyde-3-phosphate dehydrogenase"
                     /<a href="/ddbj/qualifiers-e.html#protein_id">protein_id</a>="FAA00000.1"
                     /<a href="/ddbj/qualifiers-e.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers-e.html#translation">translation</a>="MWYQSLVIIEKLNLEANIGKLINTKDNINIRCRLSHTEEHSWHS
                     NNSQLNLIVDLIYNFYINWSK"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          522 a          493 c          524 g          461 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of sequence is omitted --
        :
<a id="EndA" href="/ddbj/flat-file-e#EndB">//</a></code></pre>
