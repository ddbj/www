---
layout: tabbed_indexed_content
title: Qualifier key
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: flat_file
lang: en
---

The qualifier keys that are used and recommended for DDBJ new submissions are as follows.    

For further information of INSDC qualifier keys, read 
[7.3.1 Qualifier List](/ddbj/feature-table-e.html#7-3-1) of 
[Feature Table Definition](/ddbj/feature-table-e.html).    

## Feature/Qualifier Usage Matrix  {#usage}

The chart, [Feature/Qualifier usage matrix](https://docs.google.com/spreadsheets/u/3/d/1qosakEKo-y9JjwUO_OFcmGCUfssxhbFAm5NXUAnT3eM/), 
explains recommended combinations of feature and qualifier keys for DDBJ submissions.    

For more detail of available combinations of feature and qualifier keys in INSDC entries, read: 
[7.2 Appendix II: Feature keys reference.](/ddbj/feature-table-e.html#7-2) of 
[Feature Table Definition](/ddbj/feature-table-e.html).    

## Definition of Qualifier key

### /allele<a name="allele"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#allele)</span>
 
Definition  
: name of the allele for the given gene.    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example    
: <pre>adh1-1</pre>


### /altitude<a name="altitude"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#altitude)</span>
   
Definition
: geographical altitude of the location from which the sample was collected    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example
: <pre>-256 m
330.12 m </pre>

Comment
: Values indicate altitudes above or below nominal sea level provided in metres    

### /anticodon<a name="anticodon"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#anticodon)</span>
     
Definition
: location of the anticodon of [tRNA](/ddbj/features-e.html#tRNA) and the amino acid for which it codes    

Value format for input
: (pos:&lt;location&gt;,aa:&lt;amino_acid&gt;)    
where location is the position of the anticodon and amino_acid is the abbreviation either for the abbreviation for [Amino Acid Codes](/ddbj/code-e.html#amino-1), or for [Modified and unusual Amino Acids](/ddbj/code-e.html#amino-2).    

Example for input
: <pre>(pos:34..36,aa:Phe)
(pos:join(5,495..496),aa:Leu)
(pos:complement(4156..4158),aa:Gln)</pre>

Value format for output
: (pos:&lt;location&gt;,aa:&lt;amino_acid&gt;,seq:&lt;nucleotides&gt;)    

Example for output
: <pre>(pos:34..36,aa:Phe,seq:aaa)
(pos:join(5,495..496),aa:Leu,seq:tag)
(pos:complement(4156..4158),aa:Gln,seq:ttg)</pre>

### /artificial_location<a name="artificial_location"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#artificial_location)</span> 

Definition  
: indicates that [location](/ddbj/location-e.html) of the [CDS](/ddbj/features-e.html#cds) or [mRNA](/ddbj/features-e.html#mRNA) is modified to adjust for the presence of a frameshift or internal stop codon and not because of biological processing between the regions.    

Value format  
: "heterogeneous population sequenced" or "low-quality sequence region"    

Comment    
: expected to be used only for genome-scale annotation, either because a heterogeneous population was sequenced or because the feature is in a region of low-quality sequence.    


### /bio_material<a name="bio_material"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#bio_material)</span>

Definition
: identifier for the biological material (living individual or strain) from which the nucleic acid sequence was obtained, with optional institution code and collection code for the place where it is currently stored.    

Value format
: [&lt;institution_code&gt;:[&lt;collection_code&gt;:]]&lt;material_id&gt;    
See also [Identifiers](/ddbj/identifiers-e.html).    

Example
: For Caenorhabditis stock centre 

<pre>CGC:CB3912</pre> 


Comment
: the bio_material qualifier should be used to annotate the identifiers of material in biological collections that are not appropriate to annotate as either /specimen_voucher or /culture_collection; these include zoos and aquaria, stock centres, seed banks, germplasm repositories and DNA banks; material_id is mandatory, institution_code and collection_code are optional; institution code is mandatory where collection code is present.    
    
You can find &lt;institution_code&gt; at    
[institution_code list](https://ftp.ncbi.nlm.nih.gov/pub/taxonomy/coll_dump.txt ) (NCBI FTP site)    


### /bound_moiety<a name="bound_moiety"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#bound_moiety)</span>

Definition  
: name of the molecule/complex that may bind to the given feature    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example    
: <pre>GAL4 </pre>


### /cell_line<a name="cell_line"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#cell_line)</span>

Definition  
: cell line from which the sequence was obtained    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example     
: <pre>MCF7</pre> 


### /cell_type<a name="cell_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#cell_type)</span>

Definition  
: cell type from which the sequence was obtained    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example     
: <pre>leukocyte </pre>


### /chromosome<a name="chromosome"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#chromosome)</span>

Definition  
: chromosome (e.g. Chromosome number) from which the sequence was obtained    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example    
: <pre>1 </pre>


### /circular_RNA<a name="circular_RNA"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#circular_RNA)</span>

Definition  
: indicates that exons are out-of-order or overlapping because this spliced RNA product is a circular RNA created by backsplicing    

Value format
: no value.    

Comment
: should be used on features such as [CDS](/ddbj/features-e.html#cds), [mRNA](/ddbj/features-e.html#mRNA), [tRNA](/ddbj/features-e.html#tRNA) and others that are produced as a result of a backsplicing event.    
This qualifier should be used only when the splice event is indicated by the "join" operator in [the feature location](/ddbj/location.html).    


### /clone<a name="clone"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#clone)</span>

Definition  
: clone from which the sequence was obtained    
See also [Identifiers](/ddbj/identifiers-e.html).    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example     
: <pre>lambda-hIL7.3 </pre>


### /codon_start<a name="codon_start"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#codon_start)</span>

Definition  
: indicates [the offset at which the first complete codon](/ddbj/cds-e.html#frame) of a coding feature can be found, relative to the first base of that feature.    

Value format
: 1, 2 or 3    

### /collected_by<a name="collected_by"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#collected_by)</span>

Definition  
: name of persons or institute who collected the specimen    
recommended using full names

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example     
: <pre>Dan Janzen</pre>


### /collection_date<a name="collection_date"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#collection_date)</span>
   
Definition 
: The date on which the specimen was collected.    
Date/time ranges are supported by providing two collection dates from among the supported value formats, delimited by a forward-slash character.    
Collection times are supported by adding "T", then the hour and minute, after the date.    
Collection times must be in Coordinated Universal Time (UTC), otherwise known as "Zulu Time" (Z).    
If it is difficult to describe the values for some reason, the submitter should indicate the reason as [missing value](https://www.insdc.org/submitting-standards/missing-value-reporting/ ) .    

Value format
:    

YYYY-MM-DDThh:mm:ssZ    
YYYY-MM-DDThh:mmZ    
YYYY-MM-DDThhZ    
YYYY-MM-DD    
YYYY-MM    
YYYY    
    
YYYY/YYYY    
YYYY-MM-DD/YYYY-MM-DD    
YYYY-MM/YYYY-MM    
YYYY-MM-DDThh:mmZ/YYYY-MM-DDThh:mmZ    
    
'YYYY' is a four-digit value representing the year.    
'MM' is a two-digit value representing the month (01 to 12) .    
'DD' is a two-digit value representing the day of the month (01 to 31).    
'hh' is a two-digit value representing the hour of the day (00 to 23).    
'mm' is a two-digit value representing the minute of the hour (00 to 59).    
'ss' is a two-digit value representing the second of the hour (00 to 59).    

Example
: <pre>2015-10-11T17:53:03Z
1952-10-21T11:43Z
1952-10-21T11Z
1952-10-21
1952-10
1952
1952/1953
1952-10-21/1953-02-15
1952-10/1953-02
1952-10-21T11:43Z/1952-10-21T17:43Z
missing: control sample</pre>

Comment
: Collection dates that are specified to at least the day, month, and year (YYYY-MM-DD) are strongly encouraged.    
Though INSDC still keep and accept old value formats that make use of 'Mmm' (month abbreviations), such as "21-Oct-1952", DDBJ no longer accepts new data submissions with old value formats of collection_date.    


### /country<a name="country"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#country)</span>

<span class="red">The /country qualifier has been renamed to</span> <a href="#geo_loc_name">/geo_loc_name</a> <span class="red">from June 2024.</span>    


### /cultivar<a name="cultivar"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#cultivar)</span>
    
Definition  
: cultivar (cultivated variety) of plant from which sequence was obtained.    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example     
: <pre>Nipponbare </pre>



### /culture_collection<a name="culture_collection"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#culture_collection)</span>

Definition
: institution_code and identifier for the culture from which the nucleic acid sequence was obtained, with optional collection code.    
See also [Identifiers](/ddbj/identifiers-e.html).    

Value format
: &lt;institution_code&gt;:[&lt;collection_code&gt;:]&lt;culture_id&gt;    

Example
: <pre>ATCC:26370 </pre>

Comment
: Both &lt;institution-code&gt; and &lt;culture_id&gt; are required.    
the culture_collection qualifier should be used to annotate live microbial and viral cultures, and cell lines that have been deposited in curated culture collections; microbial cultures in personal or laboratory collections should be annotated in strain qualifiers.    
culture_id and institution_code are mandatory, collection_code is optional.    
    
You can find &lt;institution_code&gt; at    
[institution_code list](https://ftp.ncbi.nlm.nih.gov/pub/taxonomy/coll_dump.txt ) (NCBI FTP site)    


### /db_xref<a name="db_xref"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#db_xref)</span>

Definition
: database cross-reference: pointer to related information in another database.    

Value format Value format
:&lt;database&gt;:&lt;identifier&gt;, excluding double quotation mark (")    

Example
: <pre>UniProtKB/Swiss-Prot:P28763</pre>

Comment
: In principle, the db_xref qualifier can not be entered in new submissions.    
When you referred records in other database as evidence for annotation, use /[inference](#inference), not db_xref.    
The controlled values of &lt;database&gt; are in [the database list](/ddbj/db_xref-e.html).    


### /dev_stage<a name="dev_stage"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#dev_stage)</span>

Definition  
: if the sequence was obtained from an organism in a specific developmental stage, it is specified with this qualifier    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>fourth instar larva</pre>


### /direction<a name="direction"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#direction)</span>
    
Definition  
: direction of DNA replication    

Value format
: left, right, or both    

Comment     
: Where left indicates toward the 5' end of the entry sequence (as presented) and right indicates toward the 3' end.    


### /EC_number<a name="EC_number"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#EC_number)</span>
    
Definition
: Enzyme Commission number for enzyme product of sequence    

Value format
: &lt;identifier&gt;.&lt;identifier&gt;.&lt;identifier&gt;.&lt;identifier&gt;    

Example
: <pre>1.1.2.4
1.1.2.-
1.1.2.n</pre>

Comment
: The format represents a string of four numbers separated by full stops; up to three numbers starting from the end of the string can be replaced by dash "-" to indicate uncertain assignment. Symbol "n" can be used in the last position instead of a number where the EC number is awaiting assignment.    


### /ecotype<a name="ecotype"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#ecotype)</span>

Definition  
: a population within a given species displaying genetically based, phenotypic traits that reflect adaptation to a local habitat.    

Value format
: &lt;text>, excluding double quotation mark (")    

Example    
: <pre>Columbia </pre>


### /environmental_sample<a name="environmental_sample"></a><span class="right-alignment">[Feature T e Definition](/ddbj/feature-table-e.html#environmental_sample)</span><a name="environmental_sample"></a>

Definition
: identifies sequences derived by direct molecular isolation from a bulk environmental DNA sample (by PCR with or without subsequent cloning of the product, DGGE, or other anonymous methods) with no reliable identification of the source organism.    
See also [environmental samples](/ddbj/env-e.html) in detail.    

Value format
: no value.    

Comment
: source feature keys containing the /environmental_sample qualifier should also contain the /[isolation_source](#isolation_source) qualifier.    
entries including /environmental_sample must not include the /[strain](#strain) qualifier    


### /estimated_length<a name="estimated_length"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#estimated_length)</span>  

Definition
: estimated length of the gap in the sequence    

Value format for input
: unknown or known    

Example for input
: <pre>unknown
known</pre>

Value format for output
: unknown or &lt;integer-number&gt;    

Example for output
: <pre>unknown
342</pre>



### /exception<a name="exception"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#exception)</span><a name="exception"></a>

Definition
: indicates that the amino acid or RNA sequence will not translate or agree with the DNA sequence according to standard biological rules.    

Value format
: one of followings; 


RNA editing    
reasons given in citation    
rearrangement required for product    
annotated by transcript or proteomic data    


Comment
: An [/inference](#inference) qualifier should accompany any use of /exception="annotated by transcript or proteomic data", to provide support for the existence of the transcript/protein.    


### /experiment<a name="experiment"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#experiment)</span>

Definition
: a brief description of the nature of the experimental evidence that supports the feature identification or assignment.    

Value format
: [CATEGORY:]&lt;text&gt;, excluding double quotation mark (")    
CATEGORY is optional. if describing it, use either of followings; 


- COORDINATES    
- DESCRIPTION    
- EXISTENCE    

Example
: <pre>COORDINATES: 5' and 3' RACE    
Northern blot    
heterologous expression system of Xenopus laevis oocytes</pre>

Comment
: detailed experimental details should not be included, and would normally be found in the cited publications; value    
"experimental evidence, no additional details recorded" was used to replace instances of /evidence=EXPERIMENTAL in December 2005    


### /focus<a name="focus"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#focus)</span>

Definition  
: identifies the source feature of primary biological interest for records that have multiple source features originating from different organisms and that are not transgenic.    

Value format
: none    


### /frequency<a name="frequency"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#frequency)</span>

Definition
: frequency of the occurrence of a feature    

Value format
: &lt;number of observed instances&gt; in &lt;total number of sequenced isolates&gt;,    
&lt;number of observed instances&gt;/&lt;total number of sequenced isolates&gt;, or &lt;decimal fraction&gt;    

Example
: <pre>1 in 12
23/108
.85</pre>


### /function<a name="function"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#function)</span>

Definition  
: function attributed to a sequence    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>essential for recognition of cofactor</pre>


### /gap_type<a name="gap_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#gap_type)</span><a name="gap_type"></a>

Definition
: type of gap connecting components in records of a genome assembly, or the type of biological gap in a record that is part of a genome assembly    

Value format
: one of the followings    


between scaffolds    
within scaffold    
telomere    
centromere    
short arm    
heterochromatin    
repeat within scaffold    
repeat between scaffolds    
contamination    
unknown    


Comment
: This qualifier is used only for [assembly_gap](/ddbj/features-e.html#assembly_gap) features and its values are controlled by 
[the AGP Specification](https://www.ncbi.nlm.nih.gov/assembly/agp/AGP_Specification/ )    


### /gene<a name="gene"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#q_gene)</span><a name="gene"></a>

Definition
: symbol of the gene corresponding to a sequence region    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example
: <pre>ilvE</pre>

Guidance for Submission:
: See also [Gene nomenclature at DDBJ](/ddbj/cds-e.html#product).    
- Even if there are multiple general abbreviations for the same gene, do not enter multiple abbreviations in 'gene'. 
- Do not use needless symbolic letters as delimiter for multiple names. 
- If you would like to describe more than two, please enter one of the most representative abbreviation in /gene qualifier, and other(s) in /gene_synonym qualifier.


### /gene_synonym<a name="gene_synonym"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#gene_synonym)</span>

Definition
: symbol of the gene corresponding to a sequence region, synonym for the value used for gene or locus_tag qualifier    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example
: <pre>ilvE</pre>


### /geo_loc_name<a name="geo_loc_name"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#geo_loc_name)</span>

Definition 
: locality of isolation of the sequenced sample indicated in terms of political names for nations, oceans or seas, followed by regions and localities     
If it is difficult to describe the values for some reason, the submitter should indicate the reason as 
[missing value](https://www.insdc.org/submitting-standards/missing-value-reporting/ ) .    
We can NOT accept multiple localities in one qualifier.    
In cases of identical sequences observed, in principle, please separately submit your data into [multiple records per locality](/ddbj/representative-sequence-e.html ).    

Value format
: &lt;country&gt;[:&lt;free-text for geographical name&gt;]    

Example     
: <pre>Japan:Kanagawa, Hakone, Lake Ashi
missing: lab stock</pre>

Comment     
: any &lt;country&gt; from [the country list](/ddbj/country-e.html).    
The /country qualifier has been renamed to /geo_loc_name from June 2024.


### /germline<a name="germline"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#germline)</span><a name="germline"></a>

Definition  
: the sequence presented in the entry has not undergone somatic rearrangement as part of an adaptive immune response; it is the unrearranged sequence that was inherited from the parental germline.    

Value format
: none    

Comment    
: Do not use with /[rearranged](#rearranged) qualifier.    


### /haplogroup<a name="haplogroup"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#haplogroup)</span>

Definition    
: name for a group of similar haplotypes that share some sequence variation. Haplogroups are often used to track migration of population groups.    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>H*</pre>


### /haplotype<a name="haplotype"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#haplotype)</span>

Definition  
: name for a combination of alleles that are linked together on the same physical chromosome.    
In the absence of recombination, each haplotype is inherited as a unit, and may be used to track gene flow in populations.    
See also [Identifiers](/ddbj/identifiers-e.html).    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>M3 [.42]
Dw3 B5 Cw1 A1</pre>


### /host<a name="host"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#host)</span>
 
Definition
: Natural (as opposed to laboratory) host to the organism from which sequenced molecule was obtained    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example
: <pre>Homo sapiens
Homo sapiens 12 years old girl</pre>



### /inference<a name="inference"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#inference)</span><a name="inference"></a>
     
Definition
: a structured description of non-experimental evidence that supports the feature identification or assignment.    

Value format
: [CATEGORY:]TYPE[ (same species)][:EVIDENCE_BASIS]    
CATEGORY is optional. if describing it, use either of followings; 

COORDINATES    
DESCRIPTION    
EXISTENCE    
    
where TYPE is one of the following 
    
similar to sequence    
similar to AA sequence    
similar to DNA sequence    
similar to RNA sequence    
similar to RNA sequence, mRNA    
similar to RNA sequence, EST    
similar to RNA sequence, other RNA    
profile    
nucleotide motif    
protein motif    
ab initio prediction    
alignment 


Example
: <pre>similar to DNA sequence:INSD:AY411252.1
similar to RNA sequence, mRNA:RefSeq:NM_000041.2
similar to DNA sequence (same species):INSD:AACN010222672.1
profile:tRNAscan:2.1
protein motif:InterPro:IPR001900
ab initio prediction:Genscan:2.0
alignment:Splign:1.26p:RefSeq:NM_000041.2,INSD:BC003557.1</pre>


Comment
: [Recommendations for vocabulary in INSDC /inference qualifiers.](https://www.insdc.org/submitting-standards/inference-qualifiers/ ) 

- where the optional "EVIDENCE_BASIS" is either a reference to a database entry (including accession and version) or an algorithm (including version)    
- where the optional text "(same species)" is included when the inference comes from the same species as the entry.    


### /isolate<a name="isolate"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#isolate)</span>

Definition
: individual isolate from which the sequence was obtained    
In most cases, an identifier for the sample individual    
See also [Identifiers](/ddbj/identifiers-e.html).    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example
: <pre> SI-152
DGGE: C12</pre>


### /isolation_source<a name="isolation_source"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#isolation_source)</span><a name="isolation_source"></a>

Definition  
: describes the physical and/or environmental source of the biological sample from which the sequence was derived.     Please describe the contents that should be described in other qualifiers such as [/dev_stage](#dev_stage), [/tissue_type](#tissue_type) in each qualifier.    

Value format
: &lt;text>, excluding double quotation mark (")    

Example    
: <pre>rumen isolates from standard pelleted ration-fed steer #6</pre>


### /lab_host<a name="lab_host"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#lab_host)</span>

Definition
: scientific name of the laboratory host used to propagate the source organism from which the sequenced molecule was obtained    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example
: <pre>Gallus gallus
Gallus gallus embryo
Escherichia coli strain DH5 alpha
Homo sapiens HeLa cells</pre>


### /lat_lon<a name="lat_lon"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#lat_lon)</span>

Definition
: geographical coordinates of the location (latitude and longitude) where the sequenced sample was collected    

Value format
: d[d.dddddddd] &lt;N or S&gt; d[dd.dddddddd] &lt;W or E&gt;    

Example
: <pre>47.94 N 28.12 W
45.0123 S 4.1234 E
45.01234567 S 4.12345678 E</pre>

Comment
: N: north latitude, S: south latitude, W: west longitude, E: east longitude      
Please describe the figure below the decimal point by not minute or second but the decimal.     
This qualifier can include the 8th decimal places.    


### /linkage_evidence<a name="linkage_evidence"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#linkage_evidence)</span>

Definition
: type of evidence establishing linkage across an [assembly_gap](/ddbj/features-e.html#assembly_gap).    
Only allowed to be used with [assembly_gap](/ddbj/features-e.html#assembly_gap) features that have a /[gap_type](#gap_type) value of "within scaffold" or "repeat within scaffold" or "contamination";  
Please note if [/gap_type](#gap_type)="contamination", /linkage_evidence must be used and the value of /linkage_evidence must be "unspecified".    

Value format
: one of the followings 


align genus    
align xgenus    
align trnscpt    
clone contig    
map    
paired-ends    
pcr    
proximity ligation    
strobe    
within clone    
unspecified    

Comment
: This qualifier is used only for [assembly_gap](/ddbj/features-e.html#assembly_gap) features and its values are controlled by 
[the AGP Specification](https://www.ncbi.nlm.nih.gov/assembly/agp/AGP_Specification/ )    


### /locus_tag<a name="locus_tag"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#locus_tag)</span>

Definition    
: a submitter-supplied (mainly genome project), systematic, stable identifier for a gene and its associated features, used for tracking purpose    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example
: <pre>ABC_0022
A1C_00001</pre>

Comment
: identical /locus_tag values may be used within an entry/record, but only if the identical /locus_tag values are associated with the same gene; in all other circumstances the /locus_tag value must be unique within that entry/record.    
INSDC requires [prior registrations of the prefix for values of /locus_tag](/ddbj/locus_tag-e.html) to keep uniqueness of the /locus_tag value through the database    


### /macronuclear<a name="macronuclear"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#macronuclear)</span>

Definition  
: if the sequence shown is DNA and from an organism which undergoes chromosomal differentiation between macronuclear and micronuclear stages, this qualifier is used to denote that the sequence is from macronuclear DNA.    

Value format
: none    


### /map<a name="map"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#map)</span>
 
Definition  
: genomic map position of feature    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>8q12-q13</pre>


### /mating_type<a name="mating_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#mating_type)</span><a name="mating_type"></a>

Definition
: mating type of the organism from which the sequence was obtained. mating type is used for prokaryotes, and for eukaryotes that undergo meiosis without sexually dimorphic gametes (cf. [sex](#sex)).    

Value format
: &lt;text&gt;, excluding double quotation mark (") 

Example
: <pre>MAT-1
plus
-
odd
even</pre>


### /metagenome_source<a name="metagenome_source"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#metagenome_source)</span>

Definition
: sequences from a Metagenome Assembled Genome (MAG), i.e a single-taxon assembly drawn from a binned metagenome, are specified with this qualifier to indicate that the assembly is derived from a metagenomic source, rather than from an isolated organism.    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example
: <pre>human gut metagenome
soil metagenome</pre>
It must contain [the word "metagenome" and must exist in the taxonomy database](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Undef&amp;id=408169&amp;lvl=3&amp;keep=1&amp;srchmode=1&amp;unlock).    

Comment
: To use metagenome_source, /[environmental_sample](#environmental_sample) is required.    


### /mobile_element_type<a name="mobile_element_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#mobile_element_type)</span>

Definition
: type and name or identifier of the mobile element which is described by the parent feature    

Value format
: &lt;mobile_element_type&gt; [:&lt;mobile_element_name&gt;] where mobile_element_type is one of the following;    


transposon    
retrotransposon    
integron    
insertion sequence    
non-LTR retrotransposon    
SINE    
MITE    
LINE    
other 

Example
: <pre>transposon:Tnp9</pre>


### /mod_base<a name="mod_base"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#mod_base)</span>

Definition  
: abbreviation for a modified nucleotide base    

Value format
: modified_base where modified_base is the abbreviation for [Modified Base Abbreviation](/ddbj/code-e.html#nucleotide-2).    

Example    
: <pre>m2g</pre>


### /mol_type<a name="mol_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#mol_type)</span>

Definition
: describes the in vivo, synthetic or hypothetical molecule represented in sequence corresponding to the parent feature    

Value format
: limited to followings;    


genomic DNA    
genomic RNA    
mRNA    
tRNA    
rRNA    
transcribed RNA    
other RNA    
other DNA    
viral cRNA    
unassigned DNA    
unassigned RNA 

Comment
: all values refer to the in vivo or synthetic molecule for primary entries and the hypothetical molecule in Third Party data; 

- The value "genomic DNA" does not imply that the molecule is nuclear (e.g. organelle and plasmid DNAs should be described by using "genomic DNA").
- For ribosomal RNA genes (rDNA), select "genomic DNA".
- For cDNA sequence, template of mRNA, select "mRNA".
- For cDNA sequence, template of premature RNA, select "transcribed RNA".
- "other RNA" and "other DNA" should be applied to synthetic molecules.
- In general, select "genomic RNA" for RNA viruses.
- For ssRNA negative-strand virus, select "viral cRNA", in principal.    
"viral cRNA" is a plus-strand copy of a minus strand RNA genome which serves as a template to make viral progeny genomes.    
For genomic sequence data derived from ssRNA negative-strand viruses, in principle, DDBJ uniformly uses following values for mol_type qualifier;    
    - Protein-coding sequences exist in positive orientation: viral cRNA 
    - Protein-coding sequences exist in complementary orientation: genomic RNA 


### /ncRNA_class<a name="ncRNA_class"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#ncRNA_class)</span>

Definition
: the classification of the non-protein-coding RNA ([ncRNA](/ddbj/features-e.html#ncRNA))    

Value format
: &lt;TYPE&gt;    

Example
: <pre>miRNA
siRNA</pre>

Comment
: [Controlled vocabulary for ncRNA classes](https://www.insdc.org/submitting-standards/ncrna-vocabulary/ ) is valid for &lt;TYPE&gt;.    
/ncRNA_class="other" with /product="&lt;name of novel ncRNA_class&gt;" or /note="&lt;brief explanation of novel ncRNA_class&gt;"    


### /note<a name="note"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#note)</span><a name="note"></a>
 
Definition  
: any comment or additional information    

Value format
: &lt;text>, excluding double quotation mark (")    


### /number<a name="number"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#number)</span>
 
Definition  
: a number to indicate the order of genetic elements (e.g., [exon](/ddbj/features-e.html#exon)s or [intron](/ddbj/features-e.html#intron)s) in the 5' to 3' direction    

Value format
: unquoted text (single token)    

Example    
: <pre>5a</pre>


### /old_locus_tag<a name="old_locus_tag"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#old_locus_tag)</span>

Definition  
: feature tag assigned for tracking purposes    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>RSc0382</pre>


### /operon<a name="operon"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#q_operon)</span>

Definition 
: name of the group of contiguous genes transcribed into a single transcript to which that feature belongs.    

Value format
: &lt;text>, excluding double quotation mark (")    

Example    
: <pre>lac</pre>


### /organelle<a name="organelle"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#organelle)</span>

Definition
: type of membrane-bound intracellular structure from which the sequence was obtained    

Value format
: limited to followings:  


mitochondrion    
mitochondrion:kinetoplast    
hydrogenosome    
plastid:chloroplast    
plastid:apicoplast    
plastid:chromoplast    
plastid:cyanelle    
plastid:leucoplast    
plastid:proplastid    
plastid    
chromatophore    
nucleomorph    


### /organism<a name="organism"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#organism)</span>
     
Definition  
: scientific name or higher-level classification of the organism or agent that provided the sequenced genetic material.     

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>Homo sapiens
Lactobacillaceae bacterium
West Nile virus
synthetic construct
uncultured bacterium</pre>

Comment     
: For further information of this Qualifier key read [Organism Qualifier](/ddbj/organism-e.html)    


### /PCR_conditions<a name="PCR_conditions"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#PCR_conditions)</span>

Definition  
: description of reaction conditions and components for PCR    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>Initial denaturation:94degC,1.5min</pre>



### /PCR_primers<a name="PCR_primers"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#PCR_primers)</span>

Definition
: A single /PCR_primers qualifier should contain all the primers used for a single PCR reaction. If multiple forward or reverse primers are present in a single PCR reaction, multiple sets of fwd_name/fwd_seq or rev_name/rev_seq values will be present.    

Value format
: [fwd_name: XXX1, ]fwd_seq: xxxxx1,[fwd_name: XXX2, ]fwd_seq: xxxxx2, [rev_name: YYY1, ]rev_seq: yyyyy1, [rev_name: YYY2, ]rev_seq: yyyyy2    


Example
: 1)
<pre>fwd_name: CO1P1, fwd_seq: ttgattttttggtcayccwgaagt, rev_name: CO1R4, rev_seq: ccwvytardcctarraartgttg</pre>
 2)
<pre>fwd_seq: tgtgtgtgtgactgaca, rev_seq: tagcgatacggtcaatgc</pre>
 3)
<pre>fwd_name: hoge1, fwd_seq: cgkgtgtatcttact, rev_name: hoge2, rev_seq: cggtgtatcttact</pre>
 4)
<pre>fwd_name: CO1P1, fwd_seq:ttgattttttggtcayccwgaagt, fwd_name: CO1P2, fwd_seq: gatacacaggtcayccwgaagt, rev_name: CO1R4, rev_seq: ccwvytardcctarraartgttg</pre>

Comment
: - fwd_seq and rev_seq are both mandatory; fwd_name and rev_name are both optional.    
- Both sequences should be presented in 5' to 3' order.    
- The sequences should be given in [the IUPAC degenerate-base alphabet](/ddbj/code-e.html#nucleotide-1),    
except for [the modified bases](/ddbj/code-e.html#nucleotide-2); those must be enclosed within angle brackets &lt; &gt;    


### /plasmid<a name="plasmid"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#plasmid)</span>

Definition  
: name of naturally occurring plasmid from which the sequence was obtained. Must not be used for description of cloning vector.    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>C-589</pre>


### /product<a name="product"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#product)</span>
 
Definition
: name of the product associated with the feature, e.g. the [mRNA](/ddbj/features-e.html#mRNA) of an mRNA feature, the protein of a [CDS](/ddbj/features-e.html#cds), the mature peptide of a [mat_peptide](/ddbj/features-e.html#mat_peptide), etc.    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example
:    
when qualifier appears in CDS feature 
<pre>trypsinogen</pre>
when qualifier appears in mat_peptide feature
<pre>trypsin</pre> 
when qualifier appears in mRNA feature
<pre>XYZ neural-specific transcript</pre>

Guidance for Submission:
: See also [Gene nomenclature at DDBJ](/ddbj/cds-e.html#product).    
- In principle, please enter a general name, not abbreviation.
- Do not include the organism name.
- Even if there are multiple general names for the same product, 
do not enter multiple names in 'product'. 
Do not use needless symbolic letters as delimiter for multiple names. 
If you would like to describe more than two names, 
please enter one of the most representative name in /product qualifier, 
and other(s) in /<a href="#note">note</a> qualifier.
- If the name and function are not known, we recommend to describe as "hypothetical protein".    


### /protein_id<a name="protein_id"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#protein_id)</span>

Definition
: Protein Identifier for [CDS feature](/ddbj/features-e.html#cds), issued by INSDC.    

Value format
: &lt;identifier&gt;.&lt;version&gt;    

Example
: <pre>BAA12345.1
AAA1234567.1</pre>

Comment
: This qualifier consists of a stable ID portion (accepted data before the end of 
2018 uses a 3+5 format with 3 position letters and 5 numbers; from the end of 
2018 new data may be extended to a 3+7 accession format with 3 position letters 
and 7 numbers) plus a version number after the decimal point.    
When the protein sequence encoded by the CDS changes, only the version number of 
the /protein_id value is incremented.    
The stable part of the /protein_id remains unchanged and as a result will 
permanently be associated with a given protein.    
This qualifier is valid only on CDS features which translate into a valid protein.    


### /proviral<a name="proviral"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#proviral)</span>

Definition  
: this qualifier is used to flag sequence obtained from a virus or phage that is integrated into the genome of another organism    

Value format
: none    


### /pseudo<a name="pseudo"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#pseudo)</span><a name="pseudo"></a>

Definition  
: indicates that this feature is a non-functional version of the element named by the feature key.    
When pseudo qualifier is shown, [CDS feature](/ddbj/features-e.html#cds) does not have [translation](#translation).    

Value format
: none    

Comment     
: Do not use for new submission. If necessary, describe /[pseudogene](#pseudogene) qualifier.    


### /pseudogene<a name="pseudogene"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#pseudogene)</span><a name="pseudogene"></a>
     
Definition
: indicates that this feature is considered a pseudogene of the element named by the feature key. When pseudogene qualifier is shown, [CDS feature](/ddbj/features-e.html#cds) does not have [translation](#translation).    

Value format
: "TYPE"    
where TYPE is one of the following: 


processed    
unprocessed    
unitary    
allelic    
unknown    


Comment
: See [Controlled vocabulary for /pseudogene qualifier](https://www.insdc.org/submitting-standards/pseudogene-qualifier-vocabulary/ ) for TYPE, in detail.    


### /rearranged<a name="rearranged"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#rearranged)</span><a name="rearranged"></a>

Definition  
: the sequence presented in the entry has undergone somatic rearrangement as part of an adaptive immune response; it is not the unrearranged sequence that was inherited from the parental germline.    

Value format
: none    

Comment     
: Do not use with /[germline](#germline) qualifier.    


### /regulatory_class<a name="regulatory_class"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#regulatory_class)</span>

Definition
: a structured description of the classification of transcriptional, translational, replicational and chromatin structure related regulatory elements in a sequence    

Value format
: &lt;TYPE&gt; where TYPE is one of the following: 

attenuator    
CAAT_signal    
DNase_I_hypersensitive_site    
enhancer    
enhancer_blocking_element    
GC_signal    
imprinting_control_region    
insulator    
locus_control_region    
matrix_attachment_region    
minus_35_signal    
minus_10_signal    
polyA_signal_sequence    
promoter    
recoding_stimulatory_region    
recombination_enhancer    
replication_regulatory_region    
response_element    
ribosome_binding_site    
riboswitch    
silencer    
TATA_box    
terminator    
transcriptional_cis_regulatory_region    
uORF    
other    

Comment
: See [Controlled vocabulary for /regulatory_class](https://www.insdc.org/submitting-standards/controlled-vocabulary-regulatoryclass/ ) for TYPE, in detail.    


### /replace<a name="replace"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#replace)</span>

Definition  
: indicates that the sequence identified a feature's intervals is replaced by the sequence shown in "text"    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>a</pre>


### /ribosomal_slippage<a name="ribosomal_slippage"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#ribosomal_slippage)</span>

Definition  
: during protein translation, certain sequences can program ribosomes to change to an alternative reading frame by a mechanism known as ribosomal slippage    

Value format
: none    

Comment     
: a join operator, e.g.: [join(486..1784,1784..4810)] should be used in the [CDS](/ddbj/features-e.html#cds) spans to indicate the [location](/ddbj/location-e.html) of ribosomal_slippage    


### /rpt_family<a name="rpt_family"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#rpt_family)</span>

Definition
: type of repeated sequence    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example
: <pre>Alu
Kpn</pre>


### /rpt_type<a name="rpt_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#rpt_type)</span>
     
Definition
: organization of repeated sequence    

Value format
: limited to followings;    

tandem    
inverted    
flanking    
terminal    
direct    
dispersed    
nested    
long_terminal_repeat    
non_ltr_retrotransposon_polymeric_tract    
x_element_combinatorial_repeat    
y_prime_element    
telomeric_repeat    
centromeric_repeat    
other    

Comment
: See [Controlled vocabulary for /rpt_type qualifier](https://www.insdc.org/submitting-standards/controlled-vocabulary-rpttype-qualifier/ ), in detail.    


### /rpt_unit_seq<a name="rpt_unit_seq"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#rpt_unit_seq)</span>

Definition
: identity of a repeat sequence    

Value format
: text; limited to following letters; acgtmrwsykvhdbn0123456798()    

Example
: <pre>aagggc
ag(5)tg(8)
(aaaga)6(aaaa)1(aaaga)12</pre>


### /satellite<a name="satellite"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#satellite)</span>

Definition
: identifier for satellite DNA marker; many tandem repeats (identical or related) of a short basic repeating unit

Value format
: &lt;satellite_type&gt;[:&lt;class&gt;][&lt;identifier&gt;]

Example
: <pre>satellite: S1a
satellite: alpha
satellite: gamma III
microsatellite: DC130</pre>

Comment
: &lt;satellite_type&gt; is mandatory. Please select from either of followings; 

satellite    
microsatellite    
minisatellite    


### /segment<a name="segment"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#segment)</span>

Definition  
: name of viral or phage segment from which sequence was obtained.    

Value format
: &lt;text>, excluding double quotation mark (")    

Example    
: <pre>6</pre>


### /serotype<a name="serotype"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#serotype)</span>

Definition  
: variety of a species (usually bacteria or virus) characterized by its antigenic properties    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>B1</pre>


### /serovar<a name="serovar"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#serovar)</span>

Definition  
: serological variety of a species (usually a prokaryote) characterized by its antigenic properties    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example     
: <pre>O157:H7</pre>


### /sex<a name="sex"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#sex)</span><a name="sex"></a>
 
Definition
: sex of the organism from which the sequence was obtained. sex is used for eukaryotic organisms that undergo meiosis and have sexually dimorphic gametes (cf. [mating_type](#mating_type)).    

Value format
: &lt;text&gt;, excluding double quotation mark (")    

Example
: <pre>female
male
hermaphrodite
monoecious
dioecious</pre>


### /specimen_voucher<a name="specimen_voucher"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#specimen_voucher)</span>

Definition
: identifier for the specimen (a part or an individual of a typical animal or plant) from which the sequence was obtained    
See also [Identifiers](/ddbj/identifiers-e.html).    

Value format
: [&lt;institution_code&gt;:[&lt;collection_code&gt;:]]&lt;specimen_id&gt;    

Example
: <pre>UAM:Mamm:52179
AMCC:101706
USNM:field series 8798
personal:Dan Janzen:99-SRNP-2003</pre>

Comment
: the /specimen_voucher qualifier is intended to annotate a reference to the physical specimen that remains after the sequence has been obtained; 

- &lt;collection_code&gt;is optional.    
- You can find &lt;institution_code&gt; at    
[institution_code list](https://ftp.ncbi.nlm.nih.gov/pub/taxonomy/coll_dump.txt ) (NCBI FTP site)    



### /strain<a name="strain"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#strain)</span><a name="strain"></a>

Definition  
: strain from which the sequence was obtained     
In most cases, a strain name of the cultured cells    
See also [Identifiers](/ddbj/identifiers-e.html).    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>BALB/c</pre>



### /submitter_seqid<a name="submitter_seqid"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#submitter_seqid)</span>

Definition
: unique identifier within whole of the set version for [WGS](/ddbj/wgs-e.html), [TSA](/ddbj/tsa-e.html), [TLS](/ddbj/tls-e.html) and [CON](/ddbj/con-e.html)    
See also [Identifiers](/ddbj/identifiers-e.html).    

Value format
: &lt;text&gt;, excluding double quotation ("), vertical bar (\|), equal (=), greater than (&gt;),    
left/right square brackets ([ ]) and space    

Example
: <pre>contig53    
scaffold25</pre>


### /sub_species<a name="sub_species"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#sub_species)</span>

Definition  
: subspecies name of organism from which the sequence was obtained    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>troglodytes</pre>



### /tag_peptide<a name="tag_peptide"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#tag_peptide)</span>

Definition  
: base location encoding the polypeptide for proteolysis tag of tmRNA and its termination codon    

Value format
: &lt;base_range>    

Example    
: <pre>90..122</pre>


### /tissue_type<a name="tissue_type"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#tissue_type)</span>

Definition  
: tissue type from which the sequence was obtained    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>brain
liver</pre>


### /trans_splicing<a name="trans_splicing"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#trans_splicing)</span>

Definition  
: indicates that exons from two RNA molecules are ligated in intermolecular reaction to form mature RNA    

Value format
: none    

Comment     
: should be used on features such as [CDS](/ddbj/features-e.html#cds), [mRNA](/ddbj/features-e.html#mRNA) and other features that are produced as a result of a trans-splicing event.     
This qualifier should be used only when the splice event is indicated in the join operator eg join(complement(69611..69724),139856..140087)    


### /transgenic<a name="transgenic"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#transgenic)</span>

Definition  
: identifies the source feature of the organism which was the recipient of transgenic DNA    

Value format
: no value    


### /transl_except<a name="transl_except"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#transl_except)</span><a name="transl_except"></a>

Definition
: translational exception: single codon the translation of which does not conform to genetic code indicated by /[transl_table](#transl_table)    

Value format
: (pos:location,aa:&lt;amino_acid&gt;)    
where amino_acid is the amino acid coded by the codon at the base_range position. Amino acids are limited to the abbreviation either for [Amino Acid Codes](/ddbj/code-e.html#amino-1), or for [Modified and Unusual Amino Acids.](/ddbj/code-e.html#amino-2)    

Example
: 
- For exceptional translation at the specific position;    
<pre>/transl_except=(pos:213..215,aa:Sec)</pre>
The codon at base 213 to 215 is exceptionally translated to selenocysteine(one letter code 'U' in amino-acid sequence)    
- For partial termination codons;    
<pre>/transl_except=(pos:1017,aa:TERM)
/transl_except=(pos:2000..2001,aa:TERM)</pre>
TAA stop codon, either a single base T at base 1017, or two bases TA at base 2000 to 2001, are completed by the addition of 3' A residues to the mRNA.    
- If the amino acid is not on the restricted vocabulary list use;    
<pre>/transl_except=(pos:213..215,aa:OTHER)    
/note="unusual amino acid" </pre>
The codon at the position at base 213 to 215 is exceptionally translated to the amino acid defined in the /note qualifier (one letter code 'X' in amino-acid sequence).    


### /transl_table<a name="transl_table"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#transl_table)</span><a name="transl_table"></a>

Definition
: definition of genetic code table used if other than universal genetic code table.    

Value format
: &lt;integer&gt; (1 - 6, 9 - 16, 21 - 31, 33)    

Example
: <pre>11</pre>

Comment
: Nucleotide sequence of [CDS](/ddbj/features-e.html#cds) is automatically translated to one-letter abbreviated amino acid sequence.    
Genetic code exceptions should be reported in [/transl_except](#transl_except) or [/exception](#exception).    
    
See [the genetic code list](/ddbj/geneticcode-e.html).    
When /transl_table is not specified, standard code (/transl_table=1) is used for translation automatically.    

Input method
: - for Nucleotide Sequence Submission System    
If the organism name is not found in the taxonomy database, please enter 'genetic code' for source feature.    
Then the value is reflected to /transl_table qualifier of each [CDS](/ddbj/features-e.html#cds) feature.    
- for MSS    
Please specify the appropriate genetic code corresponds to the organism and organelle. 


### /translation<a name="translation"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#translation)</span><a name="translation"></a>

Definition  
: In usual, [automatically generated one-letter abbreviated amino acid sequence](/ddbj/cds-e.html#translation) derived from either the universal genetic code or the table as specified in [/transl_table](#transl_table) and as determined by exceptions in the [/transl_except](#transl_except) qualifiers. So, it is not required for submitter to describe except using [exception](#exception) qualifier.    

Value format
: IUPAC one-letter amino acid abbreviation as shown in [Amino Acid Codes](/ddbj/code-e.html#amino-1),"X" is to be used for AA exceptions.    

Example     
: <pre>MERRYCHRISTMASANDHAPPYNEWYEAR</pre>

Comment     
: When /[pseudo](#pseudo) or /[pseudogene](#pseudogene) qualifier is shown, [CDS](/ddbj/features-e.html#cds) does not have /translation.    


### /variety<a name="variety"></a><span class="right-alignment">[Feature Table Definition](/ddbj/feature-table-e.html#variety)</span>
 
Definition  
: variety (= varietas, a formal Linnaean rank) of organism from which sequence was derived.    

Value format
: &lt;text>, excluding double quotation mark (")    

Example     
: <pre>insularis</pre>
