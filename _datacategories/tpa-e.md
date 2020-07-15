---
layout: indexed_content
title: TPA
pathname: tpa-e
category: datacategories
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

TPA (Third Party Data) is a nucleotide sequence data collection in which
each primary is obtained by assembling [primary
entries](#definition_of_primary) publicized from DDBJ/EMBL-Bank/GenBank,
International Nucleotide Sequence Database Collaboration (INSDC) and/or
[Trace Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi) with
additional feature annotation(s) determined by experimental or
inferential methods by TPA submitter.Those assemblies include two cases;
one or more [primary entries](#definition_of_primary) are used and newly
determined sequence is contained.TPA sequence data should be submitted
to DDBJ/EMBL-Bank/GenBank as a part of the process to publish biological
research for primary nucleotide sequences.

Reference Literature: [Cochrane,G. et al. (2006)
OMICS,10(2): 105-113](http://online.liebertpub.com/doi/abs/10.1089/omi.2006.10.105)

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
    

[Note]Until 2005, the only entries which were supported by
biological (wet-lab.) experiment were accepted in TPA. Since 2006,
entries which are not supported by wet-lab. experiment have been
included into TPA when the entry meets the requirements of [TPA Submission Guidelines](/ddbj/tpa-table-e.html).


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
    as 'primary data (i.e. not TPA)' or [Trace
    Archive](https://www.ncbi.nlm.nih.gov/Traces/trace.cgi). If your
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
  - Either set of the following values is indicated in [KEYWORDS](#KeywordA) line.<br>{::nomarkdown}<table><tbody><tr><td>for <a href="/ddbj/tpa-table-e.html#exp">TPA:experimental</a></td><td>Third Party Data; TPA; TPA:experimental.</td></tr><tr><td>for <a href="/ddbj/tpa-table-e.html#inf">TPA:inferential</a></td><td>Third Party Data; TPA; TPA:inferential.</td></tr><tr><td>for <a href="/ddbj/tpa-table-e.html#ass">TPA:assembly</a></td><td class="second">Third Party Data; TPA; TPA:assembly.</td></tr><tr><td>for <a href="/ddbj/tpa-table-e.html#spe">TPA:specialist_db</a></td><td>Third Party Data; TPA; TPA:specialist_db.</td></tr></tbody></table>{:/}
  - [PRIMARY](#PrimaryA) block provides base spans cited from
    sequeces of primary entries that contribute to regions of the
    TPA sequence.


## Sample of TPA flat file


<pre><a id="LocusA" href="#LocusB">LOCUS</a>       <a id="LocusNameA" href="#LocusNameB">BR000000</a>              <a id="SequenceLengthA" href="#SequenceLengthB">2000 bp</a>    <a id="MoleculeTypeA" href="#MoleculeTypeB">mRNA</a>    <a id="ModificationDateA" href="#ModificationDateB">linear</a>   <a id="DivisionA" href="#DivisionB">HUM</a> <a id="ModificationDateA" href="#ModificationDateB">17-SEP-2006</a>
<a id="DefinitionA" href="#DefinitionB">DEFINITION</a>  TPA_exp: Homo sapiens GAPD gene for glyceraldehyde-3-phosphate
            dehydrogenase, complete cds.
<a id="AccessionA" href="#AccessionB">ACCESSION</a>   BR000000
<a id="VersionA" href="#VersionB">VERSION</a>     BR000000.1
<a id="KeywordsA" href="#KeywordsB">KEYWORDS</a>    Third Party Data; TPA; TPA:experimental.
<a id="SourceA" href="#SourceB">SOURCE</a>      Homo sapiens (human)
  <a id="OrganismA" href="#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a id="Reference1A" href="#Reference1B">REFERENCE   1</a>  (bases 1 to 2000)
  <a id="AuthorsA" href="#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="#JournalB">JOURNAL</a>   Submitted (30-NOV-2005) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Glyceraldehyde-3-phosphate dehydrogenase of human
  JOURNAL   TPA Biol Chem 10, 50-59 (2006)
<a id="CommentA" href="#CommentB">COMMENT</a>             
<a id="PrimaryA" href="#PrimaryB">PRIMARY</a>     TPA_SPAN            PRIMARY_IDENTIFIER PRIMARY_SPAN        COMP
            1-1000              ZZ000001.1         50001-51000
            101-200             ZZ000003.1         1-100
            501-600             ZZ000003.1         101-200
            901-2000            ZZ000002.1         25001-26100         c
            1451-1550           ZZ000003.1         201-300
<a id="FeaturesA" href="#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="#FeaturesSourceB">source</a>          <a href="/sub/ref9-j.html">1..2000</a> 
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens"
     <a href="/sub/ref5-j.html#CDS">CDS</a>             <a href="/sub/ref9-j.html">join(153..200,501..600,1451..1500)</a> 
                     /<a href="/ddbj/qualifiers.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers.html#gene">gene</a>="GAPD"
                     /<a href="/ddbj/qualifiers.html#product">product</a>="glyceraldehyde-3-phosphate dehydrogenase"
                     /<a href="/ddbj/qualifiers.html#protein_id">protein_id</a>="FAA00000.1"
                     /<a href="/ddbj/qualifiers.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers.html#translation">translation</a>="MWYQSLVIIEKLNLEANIGKLINTKDNINIRCRLSHTEEHSWHS
                     NNSQLNLIVDLIYNFYINWSK"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          522 a          493 c          524 g          461 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 attaatataa gctaaatatg tttttcaata tatattgata atagaatatc aacaatttgg
        :
        -- The rest of sequence is omitted --
        :
<a id="EndA" href="#EndB">//</a></pre>