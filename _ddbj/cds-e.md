---
layout: tabbed_indexed_content
title: Protein Coding Sequence; CDS feature
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: flat_file
lang: en
related_pages:
  - title: DDBJ flat file format
    url: /ddbj/flat-file-e.html
  - title: Feature Key
    url: /ddbj/features-e.html
  - title: Qualifier key
    url: /ddbj/qualifiers-e.html
  - title: Organism qualifier
    url: /ddbj/organism-e.html
  - title: Description of Location
    url: /ddbj/location-e.html
  - title: The Genetic Codes
    url: /ddbj/geneticcode-e.html
  - title: Codes Used in Sequence Description
    url: /ddbj/code-e.html
  - title: Example of Submission
    url: /ddbj/example-e.html
---

## Outline  {#outline}

One of the most frequently used feature keys is "CDS" to describe coding
sequence for protein. The location of CDS feature basically indicates
the base range(s) from the start point of initiation codon to the end
point termination codon location. CDS feature indicates the amino acid
translation with codon table (indicated by
[transl_table](/ddbj/qualifiers-e.html#transl_table) qualifier) of the
source organism and the description of the frame
[codon_start](/ddbj/qualifiers-e.html#codon_start) and
[transl_except](/ddbj/qualifiers-e.html#transl_except), on the basis of
the information provided from submitter (In the case of setting the
qualifier, [pseudo](/ddbj/qualifiers-e.html#pseudo) or
[pseudogene](/ddbj/qualifiers-e.html#pseudogene), translation is NOT
indicated).

Some qualifiers are also described to indicate the
[product](/ddbj/qualifiers-e.html#product) name and/or
[function](/ddbj/qualifiers-e.html#function) of the corresponding
protein on the basis of the information provided from submitter. If the
information is confirmed experimentally,
[experiment](/ddbj/qualifiers-e.html#experiment) qualifier can be
described. In the case of the predicted information by the homology of
the sequence etc., [inference](/ddbj/qualifiers-e.html#inference)
qualifier can be described.

Since the criteria of similarity and homology is not defined in the
international nucleotide database, whether the gene is a homolog of some
other gene(s) or not is judged by submitters, entirely. In principle,
the information about motif and higher-order structure of protein is NOT
described on the flat file.

## Gene nomenclature at DDBJ  {#product}

DDBJ does not have any right for the gene nomenclature. Also, DDBJ does
not make any official collaboration with any committee of gene
nomenclature. If there is no particular incident, the descriptions
related to gene nomenclature are described as provided by submitter.

DDBJ recommends to describe 'symbolic ID of locus' in
[gene](/ddbj/qualifiers-e.html#gene) qualifier, and the name of protein
product in [product](/ddbj/qualifiers-e.html#product) qualifier.

DDBJ also recommends to use the comprehensible description for product,
because the value for product qualifier is frequently use for the
summary information in many result logs of similarity searches or some
other retrieval systems.

DDBJ policies for the descriptions of gene and product are follows,
though they have no binding force to submitters;

  - The descriptions of items should be reflected submitter's scientific
    claims.
  - As far as along with submitter's opinions, names of 'gene' and
    'product' should be in common with previous reports in reference
    databases.
  - The name of 'gene' should be assigned for each locus.
  - The name of 'product' should be assigned for each protein product.

For user's convenience to refer contents of database, DDBJ recommends to
describe the names of gene and product as follows;

[gene](/ddbj/qualifiers-e.html#gene): symbol of the gene corresponding to a sequence region  
: Example: ilvE
: Notices:
  - Please enter the abbreviation as gene symbol.
  - Even if there are multiple general abbreviations for the same
    gene, do not enter multiple abbreviations in 'gene'.  
    Do not use needless symbolic letters as delimiter for multiple
    names. If you would like to describe more than two, please enter
    one of the most representative abbreviation in 'gene', and
    other(s) in
    [gene_synonym](/ddbj/qualifiers-e.html#gene_synonym) qualifier.

[product](/ddbj/qualifiers-e.html#product): name of the product associated with the feature, e.g. the polypeptide of a CDS  
: Example: trypsinogen
: Notices:
  - In principle, please enter a general name, not abbreviation.
  - Do not include the organism name.
  - Even if there are multiple general names for the same product,
    do not enter multiple names in 'product'.  
    Do not use needless symbolic letters as delimiter for multiple
    names.  
    If you would like to describe more than two names, please enter
    one of the most representative name in 'product',and other(s) in
    '[note](/ddbj/qualifiers-e.html#note)' qualifier.
  - If the name and function are not known, we recommend to describe as "hypothetical protein".
  - It is recommended to comply with [the international protein nomenclature guidelines](https://www.ncbi.nlm.nih.gov/genome/doc/internatprot_nomenguide/).
: Though we recognize that there are many exceptions in which the gene nomenclature of some model organisms do not fall into the above rule, we recommend the above rule, because we wish to make contents of DDBJ/ENA/GenBank as useful as possible.
: Please do not hesitate to contact us when you like to update the informnation of protein in your entry after once submitted to DDBJ. See also the page, [Data Updates/Correction: after getting your accession number](/ddbj/update-e.html), when you like to update your data.

## How to describe CDS feature, when termination codon is found in the range  {#stop}

When you find termination codon(s) in the range of CDS feature that you
presume, at first, please confirm that following items are appropriately
specified.

  - Location of CDS feature (See also [Description of
    Location](/ddbj/location-e.html))
  - [The Genetic Codes](/ddbj/geneticcode-e.html) in
    [transl_table](/ddbj/qualifiers-e.html#transl_table)
  - [codon_start](/ddbj/qualifiers-e.html#codon_start)(See also [Offset
    of the translation initiation by codon_start frame](#frame))

If all of above items are correct and termination codon is still found
in the range of CDS feature, it should be processed by either of
following ways, in principle.

  - [a) Putative nonsense mutation, frameshift caused by uncertain
    reason, or on the process of diversity increasing related to
    acquired immunity for IgG etc.](#stop_a)
  - [b) considered pseudogene](#stop_b)
  - [c) In case that you assume that the truncated protein exists in
    vivo](#stop_c)
  - [d) ribosomal slippage](#stop_d)
  - [e) RNA editing](#stop_e)
  - [f) translated with selenocystein or pyrrolysine](#stop_f)
  - [g) gene disruption by transpon insertion etc.](#stop_g)
  - [h) low accuracy of draft sequences from genome or transcriptome
    project](#stop_h)

<!-- end list -->

a) Putative nonsense mutation, frameshift caused by uncertain reason, or on the process of diversity increasing related to acquired immunity for IgG etc.<a name="stop_a"></a>  
: <span class="red">In case of low accuracy of sequencing, use this solution, in principle.</span>  
: Describe with [misc_feature](/ddbj/features-e.html#misc_feature), not CDS.
: Because it is not sure if the corresponding protein exist or not.  
Describe referred information in
[inference](/ddbj/qualifiers-e.html#inference) qualifier.  
Describe a short explanation in [note](/ddbj/qualifiers-e.html#note)
qualifier; "putative frameshift mutation", "Ig rearrangement", "TCR
beta rearrangement" or else.

b) considered pseudogene<a name="stop_b"></a>  
: <span class="red">If you have not yet confirmed any collateral evidence to identify a pseugdogene (i.e. relationship of orthologues and paralogues in other species, missing any corresponding transcript, or some), you shuold not call it pseudogene.</span>  
: Describe original CDS location with
[pseudogene](/ddbj/qualifiers-e.html#pseudogene) qualifier.
: When you use pseudogene qualifier,
[translation](/ddbj/qualifiers.html#translation) is not described
for the CDS feature, because the corresponding protein would not
exist in vivo.
: 
  - Describe referred information in
    [inference](/ddbj/qualifiers-e.html#inference) qualifier.
  - Describe a short explanation in
    [note](/ddbj/qualifiers-e.html#note) qualifier like as
    "pseudogene of [protein name]".
  - About controlled values of
    [pseudogene](/ddbj/qualifiers-e.html#pseudogene) qualifier, see
    [Controlled vocabulary for /pseudogene
    qualifier](/ddbj/pseudogene-e.html).
  - Since there is no protein product for the CDS feature, do NOT
    describe [product](/ddbj/qualifiers.html#product) qualifier, in
    principle.
: See also [Example of Submission B06](/ddbj/example-e.html#B06).

c) In case that you assume that the truncated protein exists in vivo<a name="stop_c"></a>  
: Describe CDS location corresponding to the truncated protein.  
i.e. The CDS location should be shortened.

d) ribosomal slippage<a name="stop_d"></a>  
: Adjust CDS location with "join" operator at the point of ribosomal
slippage.
: In case of + 1 frameshift at the 90th base
```
      CDS             join(21..90,90..449)
```
: In case of - 1 frameshift at the 91st base
```
      CDS             join(21..90,92..451)
```
: Then, add
[ribosomal_slippage](/ddbj/qualifiers-e.html#ribosomal_slippage)
qualifier as a flag to indicate the adjustment is legal.  
After this adjustment of location, the amino acid sequence in
[translation](/ddbj/qualifiers-e.html#translation) qualifier is
conceptually translated one.
: See also [Example of Submission B10](/ddbj/example-e.html#B10).
On submission via Nucleotide Sequence Submission System, please use "Submission Information" box to tell us the ribosomal slippage in detail.

e) RNA editing<a name="stop_e"></a>  
: <span class="red">Basically, it should be described for genome annotation.</span>
: Describe original CDS location with
[exception](/ddbj/qualifiers-e.html#exception) qualifier
qualifier.  
When the exception qualifier is described, amino acid sequence for
translation qualifier can be provided by submitter. So, you can use
the amino acid sequence confirmed via cDNA or some for the CDS
feature on the genomic sequence.  
Describe referred information in
[inference](/ddbj/qualifiers-e.html#inference) qualifier.
: See also [Example of Submission B09](/ddbj/example.html#B09).
: On submission via Nucleotide Sequence Submission System, please use
"Submission Information" box to tell us translational exceptions in
detail.

f) translated with selenocystein or pyrrolysine<a name="stop_f"></a>  
: Describe original CDS location with
[transl_except](/ddbj/qualifiers-e.html#transl_except) qualifier.

: For example;
  
  | /transl_except=(pos:213..215,aa:Sec) | # To use "U" (one letter abbreviation for selenocystein) for amino acid translation |
  | /transl_except=(pos:213..215,aa:Pyl) | # To use "O" (one letter abbreviation for pyrrolysine) for amino acid translation   |

g) gene disruption by transpon insertion etc.<a name="stop_g"></a>  
: Describe with [misc_feature](/ddbj/features-e.html#misc_feature),
not CDS.

h) low accuracy of draft sequences from genome or transcriptome project<a name="stop_h"></a>  
: To avoid the point of frameshift, adjust CDS location with "join" operator, operatively, to make amino acid sequence with conceptual translation.  
Add [artificial_location](/ddbj/qualifiers-e.html#artificial_location)
qualifier as a flag to indicate the operative adjustment.
: <span class="red">For submissions via Nucleotide Sequence Submission System, it is forbidden to use artificial_location qualifier.</span>

## Locations with "join" operators are basically described to indicate splicing results  {#join}

In general, the rule about description of location for CDS is in common
with all other features.See [Description of
Location](/ddbj/location-e.html) in detail.

In general, on prokaryotic genome or mature mRNA, the location of CDS
feature should be described as a simple span, so, there is no need to
use "join" operator.

In case of using a 'join'ed location for CDS feature, it should indicate
how to conjugate exons specified in the genomic sequence each other, on
the process of mRNA maturation. Basically, we can not accept any CDS
feature with 'join'ed location other than to indicate splicing pattern
of the CDS.

However, there are three major exceptions as below;

  - On the circular genome sequence, to indicate the conjugation of the
    end of the sequence and the start of it
  - For viruses or some, to indicate [ribosomal
    slippage](/ddbj/qualifiers-e.html#ribosomal_slippage) is occured in
    the process of translation.
  - CDS locations operatively adjusted to avoid frameshift errors in
    draft sequences from genome or transcriptome projects, with a flag
    [artificial_location
    qualifier](/ddbj/qualifiers-e.html#artificial_location)qualifier.

## Translated amino acid sequence described at translation qualifier  {#translation}

For example, in the page, [Explanation of DDBJ flat file
format](/ddbj/flat-file-e.html), the amino acid sequence in the value of
[translation qualifer](/ddbj/qualifiers-e.html#translation) qualifier is
processed from the nucleotide sequence by using following items;

i.e.

```
     CDS             86..>450
                     /codon_start=1
                     /transl_table=1
```

| <code>CDS   86.. &gt;450</code> | The region from 86th to 450th base of the sequence is coding a protein described with following qualifiers.<br />"&gt;" means that 3'end is not completed for the region of CDS.<br />See the rule for [Description of Location](/ddbj/location-e.html) in detail. |
| <code>/codon_start=1</code> | The frame reading amino acid translation of the first codon is the 1st base of the above CDS location (86th base of the entry). |
| <code>/transl_table=1</code> | The nucleotide sequence of CDS region is translated into amino acid sequence according to [The Genetic Codes](/ddbj/geneticcode-e.html), No. 1 table. |


Acording to above items, the region from 86th to 450th bases of the
nucleotide sequence is translated into the amino acid sequence as with
[1 letter abbreviation](/ddbj/code-e.html#amino-1) below;

```
      86 atg gcg aag att aag atc ggg atc aat ggg ttc ggg agg atc ggg 
     aa: M   A   K   I   K   I   G   I   N   G   F   G   R   I   G   

     131 agg ctc gtg gcc agg gtg gcc ctg cag agc gac gac gtc gag ctc 
     aa: R   L   V   A   R   V   A   L   Q   S   D   D   V   E   L   
         
     176 gtc gcc gtc aac gac ccc ttc atc acc acc gac tac atg aca tac 
     aa: V   A   V   N   D   P   F   I   T   T   D   Y   M   T   Y   

     221 atg ttc aag tat gac act gtg cac ggc cag tgg aag cat cat gag 
     aa: M   F   K   Y   D   T   V   H   G   Q   W   K   H   H   E   
         
     266 gtt aag gtg aag gac tcc aag acc ctt ctc ttc ggt gag aag gag 
     aa: V   K   V   K   D   S   K   T   L   L   F   G   E   K   E   

     311 gtc acc gtg ttc ggc tgc agg aac cct aag gag atc cca tgg ggt 
     aa: V   T   V   F   G   C   R   N   P   K   E   I   P   W   G   
         
     356 gag act agc gct gag ttt gtt gtg gag tac act ggt gtt ttc act 
     aa: E   T   S   A   E   F   V   V   E   Y   T   G   V   F   T   
         
     401 gac aag gac aag gcc gtt gct caa ctt aag ggt ggt gct aag aag 
     aa: D   K   D   K   A   V   A   Q   L   K   G   G   A   K   K   
         
     446 gtc tg 
     aa: V   ?
```

The last two bases, "tg", can not be specified to be traslated into
either of amino acids, C (cysteine), W (tryptphan), or \* (termination
codon), so, it is not described.Finally, the translated amino acid
sequence is described in the value of translation as below.

```
          /translation="MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
         YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
         VFTDKDKAVAQLKGGAKKV"
```

## Offset of the frame at translation initiation by codon_start  {#frame}

The [codon_start](/ddbj/qualifiers-e.html#codon_start) qualifier
indicates the offset at which the first complete codon of a CDS feature
can be found, relative to the first base of that feature.

When the location of CDS feature is started from initiation codon, the
value of codon_start is 1, consistently.

If the location of CDS feature is not started from initiation codon,
codon_start is required to specify from either of 1, 2, or 3,
appropriately. Although the nucleotide sequence is same, depending on
the description of codon_start, translated amino acid sequence is
different as followings.

```
    the number of base position: tens place           11111111112222222 
    the number of base position: ones place  12345678901234567890123456 
    nucelotide sequence                      ttcggctgcagaagataaataaataa 
    translated amino acid sequence, case 1   F  G  C  R  R  *  
    translated amino acid sequence, case 2    S  A  A  E  D  K  *  
    translated amino acid sequence, case 3     R  L  Q  K  I  N  K  * 
```

case１

```
    CDS     <1..18
            /codon_start=1
            /transl_table=1
            /translation="FGCRR" 
```

case 2

```
 
    CDS     <1..22
            /codon_start=2
            /transl_table=1
            /translation="SAAEDK" 
```

case 3

```
          
    CDS     <1..26
            /codon_start=3
            /transl_table=1
            /translation="RLQKINK"
```


