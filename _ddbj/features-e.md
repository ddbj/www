---
layout: indexed_content
title: Feature key

category: ddbj
current_tab: flat_file
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
---

The feature keys used and recommended for DDBJ submissions are as follows.  

## Feature/Qualifier Usage Matrix <a name="usage"></a>

The chart, [Feature/Qualifier usage matrix](https://docs.google.com/spreadsheets/d/1qosakEKo-y9JjwUO_OFcmGCUfssxhbFAm5NXUAnT3eM/), explains recommended combinations of feature and qualifier keys for DDBJ submissions.

For more detail of available combinations of feature and qualifier keys
in INSDC entries, read: [Feature Table Definition](/ddbj/feature-table-e.html): [7.2 Appendix II: Feature keys
reference](/ddbj/feature-table-e.html#7.2).

## Definision of Feature key

assembly_gap<a name="assembly_gap"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#assembly_gap)</span>  
: gap between two components of a [genome](/ddbj/genome-e.html) or
[transcriptome](/ddbj/transcriptome-e.html) assembly

C_region<a name="C_region"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#C_region)</span>  
: Constant region of immunoglobulin light and heavy chains, and T-cell
receptor alpha, beta, and gamma chains.  
Includes one or more exons depending on the particular chain.

CDS<a name="cds"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#CDS)</span>  
: coding sequence; sequence of nucleotides that corresponds with the
sequence of amino acids in a protein (location includes stop
codon).  
See also [the page about CDS feature](/ddbj/cds-e.html).

centromere<a name="centromere"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#centromere)</span>  
: region of biological interest identified as a centromere and which
has been experimentally characterized

D-loop<a name="D-loop"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#D-loop)</span>  
: displacement loop; a region within mitochondrial DNA in which a
short stretch of RNA is paired with one strand of DNA, displacing
the original partner DNA strand in this region;  
also used to describe the displacement of a region of one strand of
duplex DNA by a single stranded invader in the reaction catalyzed by
RecA protein

D_segment<a name="D_segment"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#D_segment)</span>  
: Diversity segment of immunoglobulin heavy chain, and T-cell receptor
beta chain.

exon<a name="exon"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#exon)</span>  
: region of genome that codes for portion of spliced
[mRNA](/ddbj/feature-table-e.html#mRNA),
[rRNA](/ddbj/feature-table-e.html#rRNA) and
[tRNA](/ddbj/feature-table-e.html#tRNA)

gap<a name="gap"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#gap)</span>  
: gap in the sequence; sequencing gap other than
[assembly_gap](#assembly_gap)

intron<a name="intron"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#intron)</span>  
: a segment of DNA that is transcribed, but removed from within the
transcript by splicing together the sequences
([exon](/ddbj/feature-table-e.html#exon)s) on either side of it

J_segment<a name="J_segment"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#J_segment)</span>  
: Joining segment of immunoglobulin light and heavy chains, and T-cell
receptor alpha, beta, and gamma chains.

mat_peptide<a name="mat_peptide"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#mat_peptide)</span>  
: mature peptide or protein coding sequence; coding sequence for the mature or final peptide or protein product following
post-translational modification.  
The location does not include the stop codon (unlike the
corresponding [CDS](/ddbj/feature-table-e.html#CDS))

misc_binding<a name="misc_binding"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#misc_binding)</span>  
: site in nucleic acid which covalently or non-covalently binds
another moiety that cannot be described by any other binding key
([primer_bind](/ddbj/feature-table-e.html#primer_bind) or
[protein_bind](/ddbj/feature-table-e.html#protein_bind))

misc_difference<a name="misc_difference"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#misc_difference)</span>  
: feature sequence is different from that presented in the entry and
cannot be described by any other "difference" key;  
[variation](/ddbj/feature-table-e.html#variation),
[modified_base](/ddbj/feature-table-e.html#modified_base)  
Comment  
The misc_difference feature should be used to describe variability
that arises as a result of genetic manipulation (e.g. site directed
mutagenesis).

misc_feature<a name="misc_feature"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#misc_feature)</span>  
: region of biological interest which cannot be described by any other
feature key; a new or rare feature.

misc_RNA<a name="misc_RNA"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#misc_RNA)</span>  
: any transcript or RNA product that cannot be defined by other RNA
keys  
[prim_transcript](/ddbj/feature-table-e.html#prim_transcript),
[precursor_RNA](/ddbj/feature-table-e.html#precursor_RNA),
[mRNA](/ddbj/feature-table-e.html#mRNA),
[5'UTR](/ddbj/feature-table-e.html#5UTR),
[3'UTR](/ddbj/feature-table-e.html#3UTR),
[exon](/ddbj/feature-table-e.html#exon),
[CDS](/ddbj/feature-table-e.html#CDS),
[sig_peptide](/ddbj/feature-table-e.html#sig_peptide),
[transit_peptide](/ddbj/feature-table-e.html#transit_peptide),
[mat_peptide](/ddbj/feature-table-e.html#mat_peptide),
[intron](/ddbj/feature-table-e.html#intron),
[polyA_site](/ddbj/feature-table-e.html#polyA_site),
[ncRNA](/ddbj/feature-table-e.html#ncRNA),
[rRNA](/ddbj/feature-table-e.html#rRNA),
[tRNA](/ddbj/feature-table-e.html#tRNA),
[tmRNA](/ddbj/feature-table-e.html#tmRNA)

misc_structure<a name="misc_structure"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#misc_structure)</span>  
: any secondary or tertiary nucleotide structure or conformation that
cannot be described by other "Structure" keys;  
[stem_loop](/ddbj/feature-table-e.html#stem_loop),
[D-loop](/ddbj/feature-table-e.html#D-loop)

mobile_element<a name="mobile_element"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#mobile_element)</span>  
: region of genome sequence containing mobile element

modified_base<a name="modified_base"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#modified_base)</span>  
: the indicated nucleotide is a modified nucleotide and should be
substituted for by the indicated molecule (given in the
[mod_base](/ddbj/qualifiers-e.html#mod_base) qualifier value)

mRNA<a name="mRNA"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#mRNA)</span>  
: messenger RNA; includes 5'untranslated region
([5'UTR](/ddbj/feature-table-e.html#5UTR)), coding sequences
([CDS](/ddbj/feature-table-e.html#CDS),
[exon](/ddbj/feature-table-e.html#exon)) and 3'untranslated region
([3'UTR](/ddbj/feature-table-e.html#3UTR))

ncRNA<a name="ncRNA"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#ncRNA)</span>  
: a non-protein-coding gene, other than ribosomal RNA
([rRNA](/ddbj/feature-table-e.html#rRNA)) and transfer RNA
([tRNA](/ddbj/feature-table-e.html#tRNA)), the functional molecule of
which is the RNA transcript

operon<a name="operon"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#operon)</span>  
: region containing polycistronic transcript including a cluster of
genes that are under the control of the same regulatory
sequences/promoter and in the same biological pathway

oriT<a name="oriT"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#oriT)</span>  
: iorigin of transfer; region of a DNA molecule where transfer is
initiated during the process of conjugation or mobilization

precursor_RNA<a name="precursor_RNA"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#precursor_RNA)</span>  
: any RNA species that is not yet the mature RNA product

primer_bind<a name="primer_bind"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#primer_bind)</span>  
: Non-covalent primer binding site for initiation of replication,
transcription, or reverse transcription. Includes site(s) for
synthetic e.g., PCR primer elements

propeptide<a name="propeptide"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#propeptide)</span>  
: propeptide coding sequence; coding sequence for the domain of a
proprotein that is cleaved to form the mature protein product.

protein_bind<a name="protein_bind"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#protein_bind)</span>  
: non-covalent protein binding site on nucleic acid

regulatory<a name="regulatory"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#regulatory)</span>  
: any region of sequence that functions in the regulation of
transcription or translation  
Since December 2014, the following old features have been merged
into this feature.

- attenuator --> regulatory feature with /[regulatory_class](/ddbj/qualifiers-e.html#regulatory_class)="attenuator"
- CAAT_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers-e.html#regulatory_class)="CAAT_signal"
- enhancer --> regulatory feature with /[regulatory_class](/ddbj/qualifiers-e.html#regulatory_class)="enhancer"
- GC_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers-e.html#regulatory_class)="GC_signal"
- -35_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers-e.html#regulatory_class)="minus_35_signal"
- -10_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers-e.html#regulatory_class)="minus_10_signal"
- polyA_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers-e.html#regulatory_class)="polyA_signal_sequence"
- promoter --> regulatory feature with /[regulatory_class](/ddbj/qualifiers-e.html#regulatory_class)="promoter"
- RBS --> regulatory feature with /[regulatory_class](/ddbj/qualifiers-e.html#regulatory_class)="ribosome_binding_site"
- TATA_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers-e.html#regulatory_class)="TATA_box"
- terminator --> regulatory feature with /[regulatory_class](/ddbj/qualifiers-e.html#regulatory_class)="terminator"
- misc_signal --> regulatory feature with /[regulatory_class](/ddbj/qualifiers-e.html#regulatory_class)="other"


repeat_region<a name="repeat_region"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#repeat_region)</span>  
: region of genome containing repeating units

rep_origin<a name="rep_origin"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#rep_origin)</span>  
: origin of replication; starting site for duplication of nucleic acid
to give two identical copies

rRNA<a name="rRNA"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#rRNA)</span>  
: mature ribosomal RNA; the RNA component of the ribonucleoprotein
particle (ribosome) which assembles amino acids into proteins

sig_peptide<a name="sig_peptide"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#sig_peptide)</span>  
: signal peptide coding sequence; coding sequence for an N-terminal
domain of a secreted protein;  
this domain is involved in attaching nascent polypeptide to the
membrane; leader sequence

source<a name="source"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#source)</span>  
: identifies the biological source of the specified span of the
sequence.  
This key is mandatory. Every entry will have, as a minimum, a single
source key spanning the entire sequence.  
More than one source key per sequence is permissible

stem_loop<a name="stem_loop"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#stem_loop)</span>  
: hairpin; a double-helical region formed by base-pairing between
adjacent (inverted) complementary sequences in a single strand of
RNA or DNA

telomere<a name="telomere"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#telomere)</span>  
: region of biological interest identified as a telomere and which has
been experimentally characterized

tmRNA<a name="tmRNA"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#tmRNA)</span>  
: transfer messenger RNA; tmRNA acts as a tRNA first, and then as an
mRNA that encodes a peptide tag;  
the ribosome translates this mRNA region of tmRNA and attaches the
encoded peptide tag to the C-terminus of the unfinished protein;  
this attached tag targets the protein for destruction or
proteolysis;

transit_peptide<a name="transit_peptide"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#transit_peptide)</span>  
: transit peptide coding sequence; coding sequence for an N-terminal
domain of a nuclear-encoded organellar protein;  
this domain is involved in post-translational import of the protein
into the organelle

tRNA<a name="tRNA"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#tRNA)</span>  
: mature transfer RNA, a small RNA molecule (75-85 bases long) that
mediates the translation of a nucleic acid sequence into an amino
acid sequence

unsure<a name="unsure"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#unsure)</span>  
: A small region of sequenced bases, generally 10 or fewer in its
length, which could not be confidently identified.

V_region<a name="V_region"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#V_region)</span>  
: Variable region of immunoglobulin light and heavy chains, and T-cell
receptor alpha, beta, and gamma chains. Codes for the variable amino
terminal portion. Can be made up from V_segments, D_segments,
N_regions and J_segments.

V_segment<a name="V_segment"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#V_segment)</span>  
: Variable segment of immunoglobulin light and heavy chains, and
T-cell receptor alpha, beta, and gamma chains. Codes for most of the
variable region (V_region) and the last few amino acids of the
leader peptide

variation<a name="variation"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#variation)</span>  
: a related strain contains stable mutations from the same gene (e.g.,
RFLPs, polymorphisms, etc.) which differ from the presented sequence
at this location (and possibly others).

3'UTR<a name="3UTR"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#3UTR)</span>  
: 1) region at the 3' end of a mature transcript (following the stop
codon) that is not translated into a protein;  
2) region at the 3' end of an RNA virus (following the last stop
codon) that is not translated into a protein;

5'UTR<a name="5UTR"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#5UTR)</span>  
: 1) region at the 5' end of a mature transcript (preceding the
initiation codon) that is not translated into a protein;  
2) region at the 5' end of an RNA virus genome (preceding the first
initiation codon) that is not translated into a protein;
