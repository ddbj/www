---
layout: indexed_content
title: Qualifier key
pathname: qualifiers-e
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

The qualifier keys that are used and recommended for DDBJ new
submissions are as follows.  
For further information of INSDC qualifier keys, read [Feature Table
Definition](/ddbj/feature-table-e.html): [7.3.1 Qualifier
List](/ddbj/feature-table-e.html#7.3.1).

## Feature/Qualifier Usage Matrix <a name="usage"></a>

The chart below explains recommended combinations of feature and
qualifier keys for DDBJ submissions.

[Feature/Qualifier usage matrix ![]({{ site.baseurl }}/assets/images/parts/pdf.png "pdficon"){:.pdficon}](https://drive.google.com/open?id=1b4TRlgUIyMi9f_CryLLTiBkgBn0lnNF7)(December 20, 2018)

For more detail of available combinations of feature and qualifier keys
in INSDC entries, read: [Feature Table
Definition](/ddbj/feature-table-e.html): [7.2 Appendix II: Feature keys
reference](/ddbj/feature-table-e.html#7.2).

## Definision of Qualifier key

allele<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#allele)</span>
: 
| Definition   | name of the allele for the given gene.        |
| Value format | \<text>, excluding double quotation mark (") |
| Example      | adh1-1                                        |
    

altitude<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#altitude)</span>
:     
| Definition| geographical altitude of the location from which the sample was collected |
| Value format| &lt;text&gt;, excluding double quotation mark (") |
| Example| -256 m<br />330.12 m |
| Comment| Values indicate altitudes above or below nominal sea level provided in metres |

anticodon<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#anticodon)</span>
:     
| Definition | location of the anticodon of [tRNA](/ddbj/features-e.html#tRNA) and the amino acid for which it codes  |
| Value format for input: | (pos:&lt;location&gt;,aa:&lt;amino_acid&gt;)<br />where location is the position of the anticodon and amino_acid is the abbreviation either for the abbreviation for [Amino Acid Codes](/ddbj/code-e.html#amino-1), or for [Modified and unusual Amino Acids](/ddbj/code-e.html#amino-2).  |
| Example for input: | (pos:34..36,aa:Phe)<br />(pos:join(5,495..496),aa:Leu)<br />(pos:complement(4156..4158),aa:Gln)  |
| Value format for output: | (pos:&lt;location&gt;,aa:&lt;amino_acid&gt;,seq:&lt;nucleotides&gt;)  |
| Example for output: | (pos:34..36,aa:Phe,seq:aaa)<br />(pos:join(5,495..496),aa:Leu,seq:tag)<br />(pos:complement(4156..4158),aa:Gln,seq:ttg)  |

artificial_location<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#artificial_location)</span>
:  
| Definition   | indicates that [location](/ddbj/location-e.html) of the [CDS](/ddbj/features-e.html#cds) or [mRNA](/ddbj/features-e.html#mRNA) is modified to adjust for the presence of a frameshift or internal stop codon and not because of biological processing between the regions. |
| Value format | "heterogeneous population sequenced" or "low-quality sequence region"             |
| Comment      | expected to be used only for genome-scale annotation, either because a heterogeneous population was sequenced or because the feature is in a region of low-quality sequence.                |


bio_material<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#bio_material)</span>
:     
| Definition | identifier for the biological material (living individual or strain) from which the nucleic acid sequence was obtained, with optional institution code and collection code for the place where it is currently stored. |
| Value format | [&lt;institution_code&gt;:[&lt;collection_code&gt;:]]&lt;material_id&gt; |
| Example | CGC:CB3912      &lt;- Caenorhabditis stock centre |
| Comment | the bio_material qualifier should be used to annotate the identifiers of material in biological collections that are not appropriate to annotate as either /specimen_voucher or /culture_collection; these include zoos and aquaria, stock centres, seed banks, germplasm repositories and DNA banks; material_id is mandatory, institution_code and collection_code are optional; institution code is mandatory where collection code is present.<br /><br />You can find &lt;institution_code&gt; at<br />[institution_code list](ftp://ftp.ncbi.nlm.nih.gov/pub/taxonomy/coll_dump.txt) (NCBI FTP site)<br />[BioCollections](https://www.ncbi.nlm.nih.gov/biocollections) |

bound_moiety<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#bound_moiety)</span>
:     
| Definition   | name of the molecule/complex that may bind to the given feature |
| Value format | \<text>, excluding double quotation mark (")                   |
| Example      | GAL4                                                            |


cell_line<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#cell_line)</span>
:     
| Definition   | cell line from which the sequence was obtained |
| Value format | \<text>, excluding double quotation mark (")  |
| Example      | MCF7                                           |


cell_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#cell_type)</span>
:     
| Definition   | cell type from which the sequence was obtained |
| Value format | \<text>, excluding double quotation mark (")  |
| Example      | leukocyte                                      |


chromosome<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#chromosome)</span>
:     
| Definition   | chromosome (e.g. Chromosome number) from which the sequence was obtained |
| Value format | \<text>, excluding double quotation mark (")                            |
| Example      | 1                                                                        |


clone<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#clone)</span>
: 
| Definition   | clone from which the sequence was obtained    |
| Value format | \<text>, excluding double quotation mark (") |
| Example      | lambda-hIL7.3                                 |


clone_lib<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#clone_lib)</span>
:     
| Definition   | clone library from which the sequence was obtained |
| Value format | \<text>, excluding double quotation mark (")      |
| Example      | lambda-hIL7                                        |


codon_start<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#codon_start)</span>
:     
| Definition   | indicates [the offset at which the first complete codon](/ddbj/cds-e.html#frame) of a coding feature can be found, relative to the first base of that feature. |
| Value format | 1, 2 or 3                                                                                                                                                      |


collected_by<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#collected_by)</span>
:     
| Definition   | name of persons or institute who collected the specimen |
| Value format | \<text>, excluding double quotation mark (")           |
| Example      | Dan Janzen                                              |


collection_date<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#collection_date)</span>
:     
| Definition | The date on which the specimen was collected.<br />Date/time ranges are supported by providing two collection dates from among the supported value formats, delimited by a forward-slash character.<br />Collection times are supported by adding "T", then the hour and minute, after the date.<br />Collection times must be in Coordinated Universal Time (UTC), otherwise known as "Zulu Time" (Z). |
| Value format | YYYY-MM-DDThh:mm:ssZ<br />YYYY-MM-DDThh:mmZ<br />YYYY-MM-DDThhZ<br />YYYY-MM-DD<br />YYYY-MM<br />YYYY<br /><br />YYYY/YYYY<br />YYYY-MM-DD/YYYY-MM-DD<br />YYYY-MM/YYYY-MM<br />YYYY-MM-DDThh:mmZ/YYYY-MM-DDThh:mmZ<br /><br />'YYYY' is a four-digit value representing the year.<br />'MM' is a two-digit value representing the month (01 to 12) .<br />'DD' is a two-digit value representing the day of the month (01 to 31) .<br />'hh' is a two-digit value representing the hour of the day (00 to 23).<br />'mm' is a two-digit value representing the minute of the hour (00 to 59).<br />'ss' is a two-digit value representing the second of the hour (00 to 59). |
| Example | 2015-10-11T17:53:03Z<br />1952-10-21T11:43Z<br />1952-10-21T11Z<br />1952-10-21<br />1952-10<br />1952<br /><br />1952/1953<br />1952-10-21/1953-02-15<br />1952-10/1953-02<br />1952-10-21T11:43Z/1952-10-21T17:43Z |
| Comment | Collection dates that are specified to at least the month, day, and year (YYYY-MM-DD) are strongly encouraged.<br /><br />Though INSDC still keep and accept old value formats that make use of 'Mmm' (month abbreviations), such as "21-Oct-1952", DDBJ no longer accepts new data submissions with old value formats of collection_date. |


compare<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#compare)</span>
: 
| Definition   | Reference details of an existing public INSD entry to which a comparison is made. |
| Value format | \<accession number>.\<version>                                                  |
| Example      | AB123456.1                                                                        |


country<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#country)</span>
: 
| Definition   | locality of isolation of the sequenced organism indicated in terms of political names for nations, oceans or seas, followed by regions and localities |
| Value format | \<country>[:\<free-text for geographical name>]                         |
| Example      | Japan:Kanagawa, Hakone, Lake Ashi                              |
| Comment      | any \<country> from [the country list](/ddbj/country-e.html).               |


cultivar<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#cultivar)</span>
:     
| Definition   | cultivar (cultivated variety) of plant from which sequence was obtained. |
| Value format | \<text>, excluding double quotation mark (")                            |
| Example      | Nipponbare                                                               |


culture_collection<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#culture_collection)</span>
:     
| Definition | institution_code and identifier for the culture from which the nucleic acid sequence was obtained, with optional collection code. |
| Value format | &lt;institution_code&gt;:[&lt;collection_code&gt;:]&lt;culture_id&gt; |
| Example | ATCC:26370 |
| Comment | the culture_collection qualifier should be used to annotate live microbial and viral cultures, and cell lines that have been deposited in curated culture collections; microbial cultures in personal or laboratory collections should be annotated in strain qualifiers.<br />culture_id and institution_code are mandatory, collection_code is optional.<br /><br />You can find &lt;institution_code&gt; at<br />[institution_code list](ftp://ftp.ncbi.nlm.nih.gov/pub/taxonomy/coll_dump.txt">) (NCBI FTP site)<br />[BioCollections](https://www.ncbi.nlm.nih.gov/biocollections">) |


db_xref<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#db_xref)</span>
: 
| Definition | database cross-reference: pointer to related information in another database.   |
| Value format Value format | &lt;database&gt;:&lt;identifier&gt;, excluding double quotation mark (")  |
| Example | UniProtKB/Swiss-Prot:P28763 | 
| Comment | In principle, the db_xref qualifier can not be entered in new submissions.<br />When you referred records in other database as evidence for annotation, use [inference](#inference), not db_xref.<br />The controlled values of &lt;database&gt; are in [the database list](/ddbj/db_xref-e.html). |  

dev_stage<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#dev_stage)</span>
:     
| Definition   | if the sequence was obtained from an organism in a specific developmental stage, it is specified with this qualifier |
| Value format | \<text>, excluding double quotation mark (")                                                                        |
| Example      | fourth instar larva                                                                                                  |


direction<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#direction)</span>
:     
| Definition   | direction of DNA replication                                                                                       |
| Value format | left, right, or both                                                                                               |
| Comment      | Where left indicates toward the 5' end of the entry sequence (as presented) and right indicates toward the 3' end. |


EC_number<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#EC_number)</span>
:     
| Definition | Enzyme Commission number for enzyme product of sequence |
| Value format | &lt;identifier&gt;.&lt;identifier&gt;.&lt;identifier&gt;.&lt;identifier&gt; |
| Example | 1.1.2.4<br />1.1.2.-<br />1.1.2.n |
| Comment | The format represents a string of four numbers separated by full stops; up to three numbers starting from the end of the string can be replaced by dash "-" to indicate uncertain assignment. Symbol "n" can be used in the last position instead of a number where the EC number is awaiting assignment. |


ecotype<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#ecotype)</span>
: 
| Definition   | a population within a given species displaying genetically based, phenotypic traits that reflect adaptation to a local habitat. |
| Value format | \<text>, excluding double quotation mark (")                                                                                   |
| Example      | Columbia                                                                                                                        |


environmental_sample<span class="right-alignment">[Feature T e Definition](/ddbj/feature-table-e.html#environmental_sample)</span><a name="environmental_sample"></a>
: 
| Definition | identifies sequences derived by direct molecular isolation from a bulk environmental DNA sample (by PCR with or without subsequent cloning of the product, DGGE, or other anonymous methods) with no reliable identification of the source organism.<br />See also [environmental samples](/ddbj/env-e.html) in detail. |
| Value format | no value. |
| Comment | source feature keys containing the /environmental_sample qualifier should also contain the [/isolation_source](#isolation_source) qualifier.<br />entries including /environmental_sample must not include the [/strain](#strain) qualifier |


estimated_length<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#estimated_length)</span>  
: 
| Definition | estimated length of the gap in the sequence |
| Value format for input | unknown or known |
| Example for input | unknown<br>known |
| Value format for output | unknown or &lt;integer-number&gt; |
| Example for output | unknown<br>342 |

exception<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#exception)</span><a name="exception"></a>
:     
| Definition | indicates that the amino acid or RNA sequence will not translate or agree with the DNA sequence according to standard biological rules. |
| Value format | one of followings; {::nomarkdown}<ul><li>RNA editing</li><li>reasons given in citation</li><li>rearrangement required for product</li><li>annotated by transcript or proteomic data</li></ul>{:/}  |
| Comment | An [/inference qualifier](#inference) should accompany any use of /exception="annotated by transcript or proteomic data", to provide support for the existence of the transcript/protein. |


experiment<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#experiment)</span>
:     
| Definition | a brief description of the nature of the experimental evidence that supports the feature identification or assignment. |
| Value format | [CATEGORY:]&lt;text&gt;, excluding double quotation mark (")<br />CATEGORY is optional. if describing it, use either of followings; {::nomarkdown}<ul><li>COORDINATES</li><li>DESCRIPTION</li><li>EXISTENCE</li></ul>{:/}  |
| Example | COORDINATES: 5' and 3' RACE<br />Northern blot<br />heterologous expression system of Xenopus laevis oocytes. |
| Comment | detailed experimental details should not be included, and would normally be found in the cited publications; value<br />"experimental evidence, no additional details recorded"<br />was used to replace instances of /evidence=EXPERIMENTAL in December 2005 |


focus<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#focus)</span>
: 
| Definition   | identifies the source feature of primary biological interest for records that have multiple source features originating from different organisms and that are not transgenic. |
| Value format | none   |


frequency<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#frequency)</span>
:     
| Definition | frequency of the occurrence of a feature |
| Value format | &lt;number of observed instances&gt; in &lt;total number of sequenced isolates&gt;,<br />&lt;number of observed instances&gt;/&lt;total number of sequenced isolates&gt;, or &lt;decimal fraction&gt; |
| Example | 1 in 12<br />23/108<br />.85 |


function<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#function)</span>
:     
| Definition   | function attributed to a sequence             |
| Value format | \<text>, excluding double quotation mark (") |
| Example      | essential for recognition of cofactor         |


gap_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#gap_type)</span><a name="gap_type"></a>
:     
| Definition | type of gap connecting components in records of a genome assembly, or the type of biological gap in a record that is part of a genome assembly |
| Value format | one of the followings {::nomarkdown}<ul><li>between scaffolds</li><li>within scaffold</li><li>telomere</li><li>centromere</li><li>short arm</li><li>heterochromatin</li><li>repeat within scaffold</li><li>repeat between scaffolds</li><li>unknown</li></ul>{:/}  |
| Comment | This qualifier is used only for [assembly_gap](/ddbj/features-e.html#assembly_gap) features and its values are controlled by [the AGP Specification](https://www.ncbi.nlm.nih.gov/assembly/agp/AGP_Specification/) |


gene<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#q_gene)</span><a name="gene"></a>
: 
| Definition | symbol of the gene corresponding to a sequence region |
| Value format | &lt;text&gt;, excluding double quotation mark (") |
| Example | ilvE |
| Guidance for Submission: | See also [Gene nomenclature at DDBJ](/ddbj/cds-e.html#product). {::nomarkdown}<ul><li>Please enter the abbreviation as gene symbol.</li><li>Even if there are multiple general abbreviations for the same gene, do not enter multiple abbreviations in 'gene'. Do not use needless symbolic letters as delimiter for multiple names. If you would like to describe more than two, please enter one of the most representative abbreviation in 'gene', and other(s) in [gene_synonym](#gene_synonym) qualifier.</li></ul>{:/}  |


gene_synonym<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#gene_synonym)</span>
:     
| Definition | symbol of the gene corresponding to a sequence region, synonym for the value used for gene or locus_tag qualifier |
| Value format | &lt;text&gt;, excluding double quotation mark (") |
| Example | ilvE |
| Guidance for Submission: | See also [Gene nomenclature at DDBJ](/ddbj/cds-e.html#product). {::nomarkdown}<ul><li>Please enter the abbreviation as gene symbol.</li><li>Even if there are multiple general abbreviations for the same gene, do not enter multiple abbreviations in 'gene'. Do not use needless symbolic letters as delimiter for multiple names. If you would like to describe more than two, please enter one of the most representative abbreviation in '<a href="#gene">gene</a>', and other(s) in gene_synonym qualifier.</li></ul>{:/}  |


germline<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#germline)</span><a name="germline"></a>
:     
| Definition   | the sequence presented in the entry has not undergone somatic rearrangement as part of an adaptive immune response; it is the unrearranged sequence that was inherited from the parental germline. |
| Value format | none                                                                                                                                                                                               |
| Comment      | Do not use with [rearranged](#rearranged) qualifier.                                                                                                                                               |


haplogroup<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#haplogroup)</span>
:     
| Definition   | name for a group of similar haplotypes that share some sequence variation. Haplogroups are often used to track migration of population groups. |
| Value format | \<text>, excluding double quotation mark (")                                                                                                  |
| Example      | H*                                                                                                                                            |


haplotype<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#haplotype)</span>
:     
| Definition   | name for a combination of alleles that are linked together on the same physical chromosome. In the absence of recombination, each haplotype is inherited as a unit, and may be used to track gene flow in populations. |
| Value format | \<text>, excluding double quotation mark (")                                                                                                                                                                          |
| Example      | Dw3 B5 Cw1 A1                                                                                                                                                                                                          |


host<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#host)</span>
: 
| Definition | Natural (as opposed to laboratory) host to the organism from which sequenced molecule was obtained |
| Value format | &lt;text&gt;, excluding double quotation mark (") |
| Example | Homo sapiens<br />Homo sapiens 12 years old girl |


identified_by<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#identified_by)</span>
:     
| Definition   | name of the expert who identified the specimen taxonomically |
| Value format | \<text>, excluding double quotation mark (")                |
| Example      | John Burns                                                   |


inference<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#inference)</span><a name="inference"></a>
:     
| Definition | a structured description of non-experimental evidence that supports the feature identification or assignment. |
| Value format | [CATEGORY:]TYPE[ (same species)][:EVIDENCE_BASIS]<br />CATEGORY is optional. if describing it, use either of followings; {::nomarkdown}<ul><li>COORDINATES</li><li>DESCRIPTION</li><li>EXISTENCE</li></ul>{:/} <br /><br />where TYPE is one of the following {::nomarkdown}<ul><li>similar to sequence</li><li>similar to AA sequence</li><li>similar to DNA sequence</li><li>similar to RNA sequence</li><li>similar to RNA sequence, mRNA</li><li>similar to RNA sequence, EST</li><li>similar to RNA sequence, other RNA</li><li>profile</li><li>nucleotide motif</li><li>protein motif</li><li>ab initio prediction</li><li>alignment</li></ul>{:/}  |
| Example | similar to DNA sequence:INSD:AY411252.1<br />similar to RNA sequence, mRNA:RefSeq:NM_000041.2<br />similar to DNA sequence (same species):INSD:AACN010222672.1<br />profile:tRNAscan:2.1<br />protein motif:InterPro:IPR001900<br />ab initio prediction:Genscan:2.0<br />alignment:Splign:1.26p:RefSeq:NM_000041.2,INSD:BC003557.1 |
| Comment | where the optional text "(same species)" is included when the inference comes from the same species as the entry.<br />where the optional "EVIDENCE_BASIS" is either a reference to a database entry (including accession and version) or an algorithm (including version)<br />[Recommendations for vocabulary in INSDC /inference qualifiers.](http://www.insdc.org/documents/inference-qualifiers)<br />\* /inference="non-experimental evidence, no additional details recorded" was used to replace instances of /evidence=NOT_EXPERIMENTAL in December 2005 |


isolate<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#isolate)</span>
: 
| Definition | individual isolate from which the sequence was obtained |
| Value format | &lt;text&gt;, excluding double quotation mark (") |
| Example | SI-152<br />DGGE: C12 |


isolation_source<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#isolation_source)</span><a name="isolation_source"></a>
:     
| Definition   | describes the physical, environmental and/or local geographical source of the biological sample from which the sequence was derived |
| Value format | \<text>, excluding double quotation mark (")             |
| Example      | rumen isolates from standard Pelleted ration-fed steer #67         |


lab_host<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#lab_host)</span>
:     
| Definition | scientific name of the laboratory host used to propagate the source organism from which the sequenced molecule was obtained |
| Value format | &lt;text&gt;, excluding double quotation mark (") |
| Example | Gallus gallus<br />Gallus gallus embryo<br />Escherichia coli strain DH5 alpha<br />Homo sapiens HeLa cells<br /> |


lat_lon<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#lat_lon)</span>
: 
| Definition | geographical coordinates of the location where the sequenced sample was collected |
| Value format | d[d.dddd] &lt;N or S&gt; d[dd.dddd] &lt;W or E&gt; |
| Example | 47.94 N 28.12 W<br />45.0123 S 4.1234 E |
| Comment | Please describe the figure below the decimal point by not minute and second but the decimal. |


linkage_evidence<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#linkage_evidence)</span>
:     
| Definition | type of evidence establishing linkage across an [assembly_gap](/ddbj/features-e.html#assembly_gap). Only allowed to be used with [assembly_gap](/ddbj/features-e.html#assembly_gap) features that have a [/gap_type](#gap_type) value of "within scaffold" or "repeat within scaffold" or "contamination"; Please note if [/gap_type](#gap_type)="contamination", /linkage_evidence must be used and the value of /linkage_evidence must be "unspecified". |
| Value format | one of the followings {::nomarkdown}<ul><li>paired-ends</li><li>pcr</li><li>align genus</li><li>align xgenus</li><li>align trnscpt</li><li>within clone</li><li>clone contig</li><li>map</li><li>strobe</li><li>unspecified</li></ul>{:/}  |
| Comment | This qualifier is used only for [assembly_gap](/ddbj/features-e.html#assembly_gap) features and its values are controlled by [the AGP Specification](https://www.ncbi.nlm.nih.gov/assembly/agp/AGP_Specification/) |


locus_tag<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#locus_tag)</span>
:     
| Definition | a submitter-supplied (mainly genome project), systematic, stable identifier for a gene and its associated features, used for tracking purpose |
| Value format | &lt;text&gt;, excluding double quotation mark (") |
| Example | ABC_0022<br />A1C_00001 |
| Comment | identical /locus_tag values may be used within an entry/record, but only if the identical /locus_tag values are associated with the same gene; in all other circumstances the /locus_tag value must be unique within that entry/record.<br />INSDC requires [prior registrations of the prefix for values of /locus_tag](/ddbj/locus_tag-e.html) to keep uniqueness of the /locus_tag value through the database |


macronuclear<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#macronuclear)</span>
:     
| Definition   | if the sequence shown is DNA and from an organism which undergoes chromosomal differentiation between macronuclear and micronuclear stages, this qualifier is used to denote that the sequence is from macronuclear DNA. |
| Value format | none           |


map<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#map)</span>
: 
| Definition   | genomic map position of feature               |
| Value format | \<text>, excluding double quotation mark (") |
| Example      | 8q12-13                                       |


mating_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#mating_type)</span><a name="mating_type"></a>
:     
| Definition | mating type of the organism from which the sequence was obtained. mating type is used for prokaryotes, and for eukaryotes that undergo meiosis without sexually dimorphic gametes (cf. [sex](#sex)). |
| Value format | &lt;text&gt;, excluding double quotation mark (") |
| Example | MAT-1<br />plus<br />-<br />odd<br />even |


metagenome_source<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#metagenome_source)</span>
:     
| Definition | sequences from a Metagenome Assembled Genome (MAG), i.e a single-taxon<br />assembly drawn from a binned metagenome, are specified with this qualifier to<br />indicate that the assembly is derived from a metagenomic source, rather than from<br />an isolated organism. |
| Value format | &lt;text&gt;, excluding double quotation mark (")<br />It must contain [the word "metagenome" and must exist in the taxonomy database](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&amp;id=408169&amp;lvl=3&amp;keep=1&amp;srchmode=1&amp;unlock). |
| Example | human gut metagenome<br />soil metagenome |
| Comment | To use metagenome_source, [environmental_sample](#environmental_sample) is required. |


mobile_element_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#mobile_element_type)</span>
: 
| Definition | type and name or identifier of the mobile element which is described by the parent feature |
| Value format | &lt;mobile_element_type&gt; [:&lt;mobile_element_name&gt;] where mobile_element_type is one of the following; {::nomarkdown}<ul><li>transposon</li><li>retrotransposon</li><li>integron</li><li>insertion sequence</li><li>non-LTR retrotransposon</li><li>SINE</li><li>MITE</li><li>LINE</li><li>other</li></ul>{:/} |
| Example | transposon:Tnp9 |


mod_base<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#mod_base)</span>
:     
| Definition   | abbreviation for a modified nucleotide base              |
| Value format | modified_base where modified_base is the abbreviation for [Modified Base Abbreviation](/ddbj/code-e.html#nucleotide-2). |
| Example      | m2g                      |


mol_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#mol_type)</span>
:     
| Definition | describes the in vivo, synthetic or hypothetical molecule represented in sequence corresponding to the parent feature |
| Value format | limited to followings;<br />genomic DNA, genomic RNA, mRNA, tRNA, rRNA, transcribed RNA,<br />other RNA, other DNA ,viral cRNA, unassigned DNA, unassigned RNA |
| Comment | all values refer to the in vivo or synthetic molecule for primary entries and the hypothetical molecule in Third Party Annotation entries; {::nomarkdown}<ul><li>The value "genomic DNA" does not imply that the molecule is nuclear (e.g. organelle and plasmid DNAs should be described by using "genomic DNA").</li><li>For ribosomal RNA genes (rDNA), select "genomic DNA".</li><li>For cDNA sequence, template of mRNA, select "mRNA".</li><li>For cDNA sequence, template of premature RNA, select "transcribed RNA".</li><li>"other RNA" and "other DNA" should be applied to synthetic molecules.</li><li>In general, select "genomic RNA" for RNA viruses.</li><li>For ssRNA negative-strand virus, select "viral cRNA", in principal.<br />"viral cRNA" is a plus-strand copy of a minus strand RNA genome which serves as a template to make viral progeny genomes.<br />For genomic sequence data derived from ssRNA negative-strand viruses, in principle, DDBJ uniformly uses following values for mol_type qualifier;</li></ul>{:/} Protein-coding sequences exist in positive orientation: viral cRNA Protein-coding sequences exist in complementary orientation: genomic RNA |


ncRNA_class<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#ncRNA_class)</span>
:     
| Definition | the classification of the non-protein-coding RNA ([ncRNA](/ddbj/features-e.html#ncRNA)) |
| Value format | &lt;TYPE&gt; |
| Example | miRNA<br />
siRNA |
| Comment | [Controlled vocabulary for ncRNA classes](http://www.insdc.org/documents/ncrna-vocabulary) is valid for &lt;TYPE&gt;. /ncRNA_class="other" with /product="&lt;name of novel ncRNA_class&gt;" or /note="&lt;brief explanation of novel ncRNA_class&gt;" |


note<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#note)</span><a name="note"></a>
: 
| Definition   | any comment or additional information         |
| Value format | \<text>, excluding double quotation mark (") |


number<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#number)</span>
: 
| Definition   | a number to indicate the order of genetic elements (e.g., [exon](/ddbj/features-e.html#exon)s or [intron](/ddbj/features-e.html#intron)s) in the 5' to 3' direction |
| Value format | unquoted text (single token)         |
| Example      | 5a                           |


old_locus_tag<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#old_locus_tag)</span>
:     
| Definition   | feature tag assigned for tracking purposes    |
| Value format | \<text>, excluding double quotation mark (") |
| Example      | RSc0382                                       |


operon<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#q_operon)</span>
: 
| Definition   | name of the group of contiguous genes transcribed into a single transcript to which that feature belongs. |
| Value format | \<text>, excluding double quotation mark (")                     |
| Example      | lac                  |


organelle<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#organelle)</span>
:     
| Definition | type of membrane-bound intracellular structure from which the sequence was obtained |
| Value format | limited to followings {::nomarkdown}<ul><li>mitochondrion</li><li>mitochondrion:kinetoplast</li><li>hydrogenosome</li><li>plastid:chloroplast</li><li>plastid:apicoplast</li><li>plastid:chromoplast</li><li>plastid:cyanelle</li><li>plastid:leucoplast</li><li>plastid:proplastid</li><li>plastid</li><li>chromatophore</li><li>nucleomorph</li></ul>{:/}  |


organism<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#organism)</span>
:     
| Definition   | The scientific name of the organism that provided the sequenced genetic material.              |
| Value format | \<text>, excluding double quotation mark (")                 |
| Example      | Homo sapiens                    |
| Comment      | For further information of this Qualifier key read [Organism Qualifier](/ddbj/organism-e.html) |


PCR_conditions<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#PCR_conditions)</span>
:     
| Definition   | description of reaction conditions and components for PCR |
| Value format | \<text>, excluding double quotation mark (")             |
| Example      | Initial denaturation:94degC,1.5min                        |


PCR_primers<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#PCR_primers)</span>
:     
| Definition | A single /PCR_primers qualifier should contain all the primers used for a single PCR reaction. If multiple forward or reverse primers are present in a single PCR reaction, multiple sets of fwd_name/fwd_seq or rev_name/rev_seq values will be present. |
| Value format | [fwd_name: XXX1, ]fwd_seq: xxxxx1,[fwd_name: XXX2, ]fwd_seq: xxxxx2, [rev_name: YYY1, ]rev_seq: yyyyy1, [rev_name: YYY2, ]rev_seq: yyyyy2<br />Example 1<br />fwd_name: CO1P1, fwd_seq: ttgattttttggtcayccwgaagt, rev_name: CO1R4, rev_seq: ccwvytardcctarraartgttg<br />Example 2<br />fwd_seq: tgtgtgtgtgactgaca, rev_seq: tagcgatacggtcaatgc<br />Example 3<br />fwd_name: hoge1, fwd_seq: cgkgtgtatcttact, rev_name: hoge2, rev_seq: cggtgtatcttact<br />Example 4<br />fwd_name: CO1P1, fwd_seq: ttgattttttggtcayccwgaagt, fwd_name: CO1P2, fwd_seq: gatacacaggtcayccwgaagt, rev_name: CO1R4, rev_seq: ccwvytardcctarraartgttg" |
| Comment | fwd_seq and rev_seq are both mandatory; fwd_name and rev_name are both optional.<br />Both sequences should be presented in 5' to 3' order.<br />The sequences should be given in [the IUPAC degenerate-base alphabet](/ddbj/code-e.html#nucleotide-1), except for [the modified bases](/ddbj/code-e.html#nucleotide-2); those must be enclosed within angle brackets &lt; &gt; |


plasmid<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#plasmid)</span>
: 
| Definition   | name of naturally occurring plasmid from which the sequence was obtained. Must not be used for description of cloning vector. |
| Value format | \<text>, excluding double quotation mark (")               |
| Example      | C-589                |


product<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#product)</span>
: 
| Definition | name of the product associated with the feature, e.g. the [mRNA](/ddbj/features-e.html#mRNA) of an mRNA feature, the polypeptide of a [CDS](/ddbj/features-e.html#cds), the mature peptide of a [mat_peptide](/ddbj/features-e.html#mat_peptide), etc. |
| Value format | &lt;text&gt;, excluding double quotation mark (") |
| Example | trypsinogen (when qualifier appears in CDS feature)<br />trypsin (when qualifier appears in mat_peptide feature)<br />XYZ neural-specific transcript (when qualifier appears in mRNA feature) |
| Guidance for Submission: | See also [Gene nomenclature at DDBJ](/ddbj/cds-e.html#product).<br /> {::nomarkdown}<ul><li>In principle, please enter a general name, not abbreviation.</li><li>Do not include the organism name.</li><li>Even if there are multiple general names for the same product, do not enter multiple names in 'product'. Do not use needless symbolic letters as delimiter for multiple names. If you would like to describe more than two names, please enter one of the most representative name in 'product', and other(s) in '<a href="#note">note</a>' qualifier.</li><li>If the name and function are not known, we recommend to describe as "hypothetical protein".</li></ul>{:/}  |


protein_id<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#protein_id)</span>
:     
| Definition | Protein Identifier for [CDS feature](/ddbj/features-e.html#cds), issued by INSDC. |
| Value format | &lt;identifier&gt;.&lt;version&gt; |
| Example | BAA12345.1<br />AAA1234567.1 |
| Comment | This qualifier consists of a stable ID portion (accepted data before the end of<br />2018 uses a 3+5 format with 3 position letters and 5 numbers; from the end of<br />2018 new data may be extended to a 3+7 accession format with 3 position letters<br />and 7 numbers) plus a version number after the decimal point.<br />When the protein sequence encoded by the CDS changes, only the version number of<br />the /protein_id value is incremented.<br />The stable part of the /protein_id remains unchanged and as a result will permanently<br />be associated with a given protein.<br />This qualifier is valid only on CDS features which translate into a valid protein. |


proviral<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#proviral)</span>
:     
| Definition   | this qualifier is used to flag sequence obtained from a virus or phage that is integrated into the genome of another organism |
| Value format | none             |


pseudo<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#pseudo)</span><a name="pseudo"></a>
: 
| Definition   | indicates that this feature is a non-functional version of the element named by the feature key. When pseudo qualifier is shown, [CDS feature](/ddbj/features-e.html#cds) does not have [translation](#translation). |
| Value format | none               |
| Comment      | Do not use for new submission. If necessary, describe [pseudogene](#pseudogene).      |


pseudogene<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#pseudogene)</span><a name="pseudogene"></a>
:     
| Definition | indicates that this feature is considered a pseudogene of the element named by the feature key. When pseudogene qualifier is shown, [CDS feature](/ddbj/features-e.html#cds) does not have [translation](#translation). |
| Value format | "TYPE"<br />where TYPE is one of the following: {::nomarkdown}<ul><li>processed</li><li>unprocessed</li><li>unitary</li><li>allelic</li><li>unknown</li></ul>{:/}  |
| Comment | See [Controlled vocabulary for /pseudogene qualifier](http://www.insdc.org/documents/pseudogene-qualifier-vocabulary) for TYPE, in detail. |


rearranged<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#rearranged)</span><a name="rearranged"></a>
:     
| Definition   | the sequence presented in the entry has undergone somatic rearrangement as part of an adaptive immune response; it is not the unrearranged sequence that was inherited from the parental germline. |
| Value format | none                        |
| Comment      | Do not use with [germline](#germline) qualifier.         |


regulatory_class<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#regulatory_class)</span>
:     
| Definition | a structured description of the classification of transcriptional, translational, replicational and chromatin structure related regulatory elements in a sequence |
| Value format | TYPE<br />where TYPE is one of the following: {::nomarkdown}<ul><li>attenuator</li><li>CAAT_signal</li><li>DNase_I_hypersensitive_site</li><li>enhancer</li><li>enhancer_blocking_element</li><li>GC_signal</li><li>imprinting_control_region</li><li>insulator</li><li>locus_control_region</li><li>matrix_attachment_region</li><li>minus_35_signal</li><li>minus_10_signal</li><li>polyA_signal_sequence</li><li>promoter</li><li>recoding_stimulatory_region</li><li>replication_regulatory_region</li><li>response_element</li><li>ribosome_binding_site</li><li>riboswitch</li><li>silencer</li><li>TATA_box</li><li>terminator</li><li>transcriptional_cis_regulatory_region</li><li>other</li></ul>{:/}  |
| Comment | See [Controlled vocabulary for /regulatory_class](http://www.insdc.org/controlled-vocabulary-regulatoryclass) for TYPE, in detail. |


replace<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#replace)</span>
: 
| Definition   | indicates that the sequence identified a feature's intervals is replaced by the sequence shown in "text" |
| Value format | \<text>, excluding double quotation mark (")                                 |
| Example      | a                  |


ribosomal_slippage<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#ribosomal_slippage)</span>
:     
| Definition   | during protein translation, certain sequences can program ribosomes to change to an alternative reading frame by a mechanism known as ribosomal slippage                  |
| Value format | none                         |
| Comment      | a join operator, e.g.: [join(486..1784,1784..4810)] should be used in the [CDS](/ddbj/features-e.html#cds) spans to indicate the [location](/ddbj/location-e.html) of ribosomal_slippage |


rpt_family<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#rpt_family)</span>
:     
| Definition | type of repeated sequence |
| Value format | &lt;text&gt;, excluding double quotation mark (") |
| Example | Alu<br />Kpn |


rpt_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#rpt_type)</span>
:     
| Definition | organization of repeated sequence |
| Value format | limited to followings;<br /> {::nomarkdown}<ul><li>tandem</li><li>inverted</li><li>flanking</li><li>terminal</li><li>direct</li><li>dispersed</li><li>nested</li><li>long_terminal_repeat</li><li>non_ltr_retrotransposon_polymeric_tract</li><li>x_element_combinatorial_repeat</li><li>y_prime_element</li><li>telomeric_repeat</li><li>centromeric_repeat</li><li>other</li></ul>{:/}  |
| Comment | See [Controlled vocabulary for /rpt_type qualifier](http://www.insdc.org/controlled-vocabulary-rpttype-qualifier), in detail. |


rpt_unit_seq<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#rpt_unit_seq)</span>
:     
| Definition | identity of a repeat sequence |
| Value format | text; limited to following letters; acgtmrwsykvhdbn0123456798() |
| Example | aagggc<br />ag(5)tg(8)<br />(aaaga)6(aaaa)1(aaaga)12 |


satellite<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#satellite)</span>
:     
| Definition | identifier for satellite DNA marker; many tandem repeats (identical or related) of a short basic repeating unit |  |
| Value format | &lt;satellite_type&gt;[:&lt;class&gt;][ &lt;identifier&gt;] |  |
| Example | satellite: S1a<br />satellite: alpha<br />satellite: gamma III<br />microsatellite: DC130<br />Comment | &lt;satellite_type&gt; is mandatory. Please select from either of followings; {::nomarkdown}<ul><li>satellite</li><li>microsatellite</li><li>minisatellite</li></ul>{:/}  |


segment<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#segment)</span>
: 
| Definition   | name of viral or phage segment from which sequence was obtained. |
| Value format | \<text>, excluding double quotation mark (")                    |
| Example      | 6                                                                |


serotype<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#serotype)</span>
:     
| Definition   | variety of a species (usually bacteria or virus) characterized by its antigenic properties |
| Value format | \<text>, excluding double quotation mark (")                                              |
| Example      | B1                                                                                         |


serovar<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#serovar)</span>
: 
| Definition   | serological variety of a species (usually a prokaryote) characterized by its antigenic properties |
| Value format | \<text>, excluding double quotation mark (")                                                     |
| Example      | O157:H7                                                                                           |


sex<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#sex)</span><a name="sex"></a>
: 
| Definition | sex of the organism from which the sequence was obtained. sex is used for eukaryotic organisms that undergo meiosis and have sexually dimorphic gametes (cf. [mating_type](#mating_type)). |
| Value format | &lt;text&gt;, excluding double quotation mark (") |
| Example | female<br />male<br />hermaphrodite<br />monoecious<br />dioecious |


specimen_voucher<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#specimen_voucher)</span>
:     
| Definition | identifier for the specimen (a part or an individual of a typical animal or plant) from which the sequence was obtained |
| Value format | [&lt;institution_code&gt;:[&lt;collection_code&gt;:]]&lt;specimen_id&gt; |
| Example | UAM:Mamm:52179<br />AMCC:101706<br />USNM:field series 8798<br />personal:Dan Janzen:99-SRNP-2003 |
| Comment | the /specimen_voucher qualifier is intended to annotate a reference to the physical specimen that remains after the sequence has been obtained; &lt;collection_code&gt;is optional.<br /><br />You can find &lt;institution_code&gt; at<br />[institution_code list](ftp://ftp.ncbi.nlm.nih.gov/pub/taxonomy/coll_dump.txt) (NCBI FTP site)<br />[BioCollections](https://www.ncbi.nlm.nih.gov/biocollections) |


strain<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#strain)</span><a name="strain"></a>
: 
| Definition   | strain from which the sequence was obtained   |
| Value format | \<text>, excluding double quotation mark (") |
| Example      | BALB/c                                        |


sub_clone<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#sub_clone)</span>
:     
| Definition   | sub-clone from which the sequence was obtained |
| Value format | \<text>, excluding double quotation mark (")  |
| Example      | lambda-hIL7.20g                                |


submitter_seqid<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#submitter_seqid)</span>
:     
| Definition | unique identifier within whole of the set version for [WGS](/ddbj/wgs-e.html), [TSA](/ddbj/tsa-e.html), [TLS](/ddbj/tls-e.html) and [CON](/ddbj/con-e.html) |
| Value format | &lt;text&gt;, excluding double quotation ("), vertical bar (\|), equal (=), greater than (&gt;),<br />left/right square brackets ([ ]) and space |
| Example | contig53<br />scaffold25 |


sub_species<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#sub_species)</span>
:     
| Definition   | subspecies name of organism from which the sequence was obtained |
| Value format | \<text>, excluding double quotation mark (")                    |
| Example      | troglodytes                                                      |


sub_strain<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#sub_strain)</span>
:     
| Definition | sub_strain from which sequence was obtained. name or identifier of a genetically or otherwise modified strain from which sequence was obtained, derived from a parental strain (which should be annotated in the /[strain](#strain) qualifier).  |
| Value format | &lt;text&gt;, excluding double quotation mark (") |
| Example | abis |
| Comment | If the parental strain is not given, this should be annotated in the strain qualifier instead of sub_strain.  {::nomarkdown}<ul><li>In general: /strain="K-12", /sub_strain="MG1655"</li><li>not given parental: /strain="MG1655"</li></ul>{:/}  |


tag_peptide<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#tag_peptide)</span>
:     
| Definition   | base location encoding the polypeptide for proteolysis tag of tmRNA and its termination codon |
| Value format | \<base_range>               |
| Example      | 90..122             |


tissue_type<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#tissue_type)</span>
:     
| Definition   | tissue type from which the sequence was obtained |
| Value format | \<text>, excluding double quotation mark (")    |
| Example      | liver            |


trans_splicing<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#trans_splicing)</span>
:     
| Definition   | indicates that exons from two RNA molecules are ligated in intermolecular reaction to form mature RNA                       |
| Value format | none                   |
| Comment      | should be used on features such as [CDS](/ddbj/features-e.html#cds), [mRNA](/ddbj/features-e.html#mRNA) and other features that are produced as a result of a trans-splicing event. This qualifier should be used only when the splice event is indicated in the join operator eg join(complement(69611..69724),139856..140087) |


transgenic<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#transgenic)</span>
:     
| Definition   | identifies the source feature of the organism which was the recipient of transgenic DNA |
| Value format | no value               |


transl_except<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#transl_except)</span><a name="transl_except"></a>
:     
| Definition | translational exception: single codon the translation of which does not conform to genetic code indicated by [transl_table](#transl_table) |
| Value format | (pos:location,aa:&lt;amino_acid&gt;)<br />where amino_acid is the amino acid coded by the codon at the base_range position. Amino acids are limited to the abbreviation either for [Amino Acid Codes](/ddbj/code-e.html#amino-1), or for [Modified and Unusual Amino Acids.](/ddbj/code-e.html#amino-2) |
| Example 1 | For exceptional translation at the specific position;<br />/transl_except=(pos:213..215,aa:Sec)<br /><br />The codon at base 213 to 215 is exceptionally translated to selenocysteine(one letter code 'U' in amino-acid sequence) |
| Example 2 | For partial termination codons;<br />/transl_except=(pos:1017,aa:TERM)<br />/transl_except=(pos:2000..2001,aa:TERM)<br />TAA stop codon, either a single base T at base 1017, or two bases TA at base 2000 to 2001, are completed by the addition of 3' A residues to the mRNA. |
| Example 3 | If the amino acid is not on the restricted vocabulary list use;<br />/transl_except=(pos:213..215,aa:OTHER)<br /><br />/note="name of unusual amino acid"<br />The codon at the position at base 213 to 215 is exceptionally translated to the amino acid defined in the /note qualifier (one letter code 'X' in amino-acid sequence). |


transl_table<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#transl_table)</span><a name="transl_table"></a>
:     
| Definition | definition of genetic code table used if other than universal genetic code table. |
| Value format | &lt;integer&gt; (1 - 6, 9 - 14, 16, 21 - 31) |
| Example | 11 |
| Comment | Nucleotide sequence of [CDS](/ddbj/features-e.html#cds) is automatically translated to one-letter abbreviated<br />amino acid sequence.<br />Genetic code exceptions should be reported in [/transl_except](#transl_except) or [/exception](#exception).<br /><br />See [the genetic code list](/ddbj/geneticcode-e.html).<br />When /transl_table is not specified, standard code (/transl_table=1) is used for<br />translation automatically. |
| Input method | for Nucleotide Sequence Submission System<br />If the organism name is not found in the taxonomy database, please enter 'genetic<br />code' for source feature. Then the value is reflected to transl_table qualifier of<br />each [CDS](/ddbj/features-e.html#cds) feature.<br />for MSS<br />Please specify the appropriate genetic code corresponds to the organism and<br />organelle. |


translation<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#translation)</span><a name="translation"></a>
:     
| Definition   | In usual, [automatically generated one-letter abbreviated amino acid sequence](/ddbj/cds-e.html#translation) derived from either the universal genetic code or the table as specified in [/transl_table](#transl_table) and as determined by exceptions in the [/transl_except](#transl_except) qualifiers. So, it is not required for submitter to describe except using [exception](#exception) qualifier. |
| Value format | IUPAC one-letter amino acid abbreviation as shown in [Amino Acid Codes](/ddbj/code-e.html#amino-1),"X" is to be used for AA exceptions.        |
| Example      | MERRYCHRISTMASANDHAPPYNEWYEAR               |
| Comment      | When [pseudo](#pseudo) or [pseudogene](#pseudogene) qualifier is shown, [CDS](/ddbj/features-e.html#cds) does not have /translation.                |


variety<span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#variety)</span>
: 
| Definition   | variety (= varietas, a formal Linnaean rank) of organism from which sequence was derived. |
| Value format | \<text>, excluding double quotation mark (")                                             |
| Example      | insularis                |
