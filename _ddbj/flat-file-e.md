---
layout: indexed_content
title: DDBJ flat file format
pathname: flat-file-e
category: ddbj
lang: en
related_pages:
  - title: Description of Location
    url: /ddbj/location-e.html
  - title: Protein Coding Sequence; CDS feature
    url: /ddbj/cds-e.html
  - title: Example of Submission
    url: /ddbj/example-e.html
  - title: Codes Used in Sequence Description
    url: /ddbj/code-e.html
  - title: Organism qualifier
    url: /ddbj/organism-e.html
  - title: Feature Key
    url: /ddbj/features-e.html
  - title: Qualifier key
    url: /ddbj/qualifiers-e.html
  - title: The Genetic Codes
    url: /ddbj/geneticcode-e.html
  - title: The Genetic Codes
    url: /ddbj/codontable-e.html
---


# DDBJ flat file format

DDBJ/EMBL-Bank/GenBank, the International Nucleotide Sequence Database
Collaboration ([INSDC](/insdc-e.html)) collects the nucleotide sequences
experimentally determined, and constructs the database in accordance
with the rule agreed with the three databanks.

The database also includes the data from [Japan Patent
Office](//www.jpo.go.jp/index.htm) (JPO), [European Patent
Office](//www.epo.org/) (EPO), [United States Patent and Trademark
Office](https://www.uspto.gov/) (USPTO), and [Korean Intellectual
Property Office](//www.kipo.go.kr/) (KIPO).

The database is a collection of "entry" which is the unit of the data.
The entry submitted to DDBJ is processed and publicized according to the
DDBJ format for distribution (flat file). The flat file includes the
sequence and the information of submitters, references, source
organisms, and "feature" information, etc. The "feature" is defined by
[The DDBJ/ENA/GenBank Feature Table Definition](/ddbj/full_index-e.html)
to describe the biological nature such as gene function and other
property of the nucleotide sequence.

## The virtual sample of DDBJ flat file <a name="The_virtual_sample_of_DDBJ_flat_file"></a>

<pre><code><a id="LocusA" href="#LocusB">LOCUS</a>       <a id="LocusNameA" href="#LocusNameB">AB000000</a>              <a id="SequenceLengthA" href="#SequenceLengthB">450 bp</a>    <a id="MoleculeTypeA" href="#MoleculeTypeB">mRNA</a>    <a id="MoleculeFormA" href="#MoleculeFormB">linear</a>   <a id="DivisionA" href="#DivisionB">HUM</a> <a id="ModificationDateA" href="#ModificationDateB">01-JUN-2009</a>
<a id="DefinitionA" href="#DefinitionB">DEFINITION</a>  Homo sapiens GAPD mRNA for glyceraldehyde-3-phosphate
            dehydrogenase, partial cds.
<a id="AccessionA" href="#AccessionB">ACCESSION</a>   AB000000
<a id="VersionA" href="#VersionB">VERSION</a>     AB000000.1
<a id="KeywordsA" href="#KeywordsB">KEYWORDS</a>    .
<a id="SourceA" href="#SourceB">SOURCE</a>      Homo sapiens (human)
  <a id="OrganismA" href="#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a id="Reference1A" href="#Reference1B">REFERENCE   1</a>  (bases 1 to 450)
  <a id="AuthorsA" href="#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="#JournalB">JOURNAL</a>   Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="#Reference2B">REFERENCE   2</a>
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver
  JOURNAL   Unpublished (2009)
<a id="CommentA" href="#CommentB">COMMENT</a>     Human cDNA sequencing project.
<a id="FeaturesA" href="#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="#FeaturesSourceB">source</a>          <a href="/ddbj/location-e.html">1..450</a>
                     /<a href="/ddbj/qualifiers-e.html#chromosome">chromosome</a>="12"
                     /<a href="/ddbj/qualifiers-e.html#clone">clone</a>="GT200015"
                     /<a href="/ddbj/qualifiers-e.html#clone_lib">clone_lib</a>="lambda gt11 human liver cDNA (GeneTech.
                     No.20)"
                     /<a href="/ddbj/qualifiers-e.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers-e.html#map">map</a>="12p13"
                     /<a href="/ddbj/qualifiers-e.html#mol_type">mol_type</a>="mRNA"
                     /<a href="/ddbj/qualifiers-e.html#organism">organism</a>="Homo sapiens"
                     /<a href="/ddbj/qualifiers-e.html#tissue_type">tissue_type</a>="liver"
     <a id="CDSA" href="#CDSB">CDS</a>             <a href="/ddbj/location-e.html">86..&gt;450</a>
                     /<a href="/ddbj/qualifiers-e.html#codon_start">codon_start</a>=1
                     /<a href="/ddbj/qualifiers-e.html#gene">gene</a>="GAPD"
                     /<a href="/ddbj/qualifiers-e.html#product">product</a>="glyceraldehyde-3-phosphate dehydrogenase"
                     /<a href="/ddbj/qualifiers-e.html#protein_id">protein_id</a>="BAA12345.1"
                     /<a href="/ddbj/qualifiers-e.html#transl_table">transl_table</a>=1
                     /<a href="/ddbj/qualifiers-e.html#translation">translation</a>="MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
                     YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
                     VFTDKDKAVAQLKGGAKKV"
<a id="BaseCountA" href="#BaseCountB">BASE COUNT</a>          102 a          119 c          131 g           98 t
<a id="OriginA" href="#OriginB">ORIGIN</a>
        1 cccacgcgtc cggtcgcatc gcacttgtag ctctcgaccc ccgcatctca tccctcctct
       61 cgcttagttc agatcgaaat cgcaaatggc gaagattaag atcgggatca atgggttcgg
      121 gaggatcggg aggctcgtgg ccagggtggc cctgcagagc gacgacgtcg agctcgtcgc
      181 cgtcaacgac cccttcatca ccaccgacta catgacatac atgttcaagt atgacactgt
      241 gcacggccag tggaagcatc atgaggttaa ggtgaaggac tccaagaccc ttctcttcgg
      301 tgagaaggag gtcaccgtgt tcggctgcag gaaccctaag gagatcccat ggggtgagac
      361 tagcgctgag tttgttgtgg agtacactgg tgttttcact gacaaggaca aggccgttgc
      421 tcaacttaag ggtggtgcta agaaggtctg
<a id="EndA" href="#EndB">//</a></code></pre>

Flat file displays the information provided by submitters with DDBJ
format.  
Even when the sequences are similar, the contents on the flat files may
vary according to the submitter's research aim etc.  
Please take that point into consideration when you refer search results.

## FIELD COMMENTS <a name="FIELD_COMMENTS"></a>

{::options parse_block_html="true" /}
<div id="LocusB">
<h3><a href="#LocusA">LOCUS</a></h3>
</div>

locus name, sequence length, molecule type, molecular form, division, the date of last release

{::options parse_block_html="true" /}
<div id="LocusNameB">
<h4><a href="#LocusNameA">Locus Name</a></h4>
</div>

Locus name is a unique ID of the entry in the database.
In DDBJ, since July 1996, the locus name has been assigned the same as[accession number](#AccessionB).

{::options parse_block_html="true" /}
<div id="SequenceLengthB">
<h4><a href="#SequenceLengthA">Length of Sequence</a></h4>
</div>

Notice: No information is available on the Master record of MGA data.

{::options parse_block_html="true" /}
<div id="MoleculeTypeB">
<h4><a href="#MoleculeTypeA">Molecule Type</a></h4>
</div>

According to the value of /[mol_type](/ddbj/qualifiers-e.html#mol_type) qqualifier for source feature, it is described as DNA, RNA, mRNA, rRNA, tRNA, or cRNA.

{::options parse_block_html="true" /}
<div id="MoleculeFormB">
<h4><a href="#MoleculeFormA">Molecular Form</a></h4>
</div>

This column indicates whether molecular form of nucleotide sequence is "linear" or "circular". If the entry is the full length of circular form, "circular" is appeared.

{::options parse_block_html="true" /}
<div id="DivisionB">
<h4><a href="#DivisionA">Division</a></h4>
</div>

DDBJ classifies entries into 21 divisions as below;

a: taxonomic divisions

| HUM | human                       |
| PRI | primates (other than human)              |
| ROD | rodents                      |
| MAM | mammals (other than primates and rodents)   |
| VRT | vertebrates (other than mammals) |
| INV | invertebrates (animals other than vertebrates)                    |
| PLN | plants, fungi, plastids (eukaryotes other than animals)           |
| BCT | bacteria (including both Eubacteria and Archaea)                  |
| VRL | viruses                     |
| PHG | bacteriophages                |

b: other divisions

|  [PAT](/ddbj/patent-data-e.html)  |  sequence data related to patent application<br>The data those which Japan Patent Office (JPO), United States Patent and Trademark Office (USPTO), European Patent Office (EPO), and Korean Intellectual Property Office (KIPO) collected, processed and released.  |
|  [ENV](/ddbj/env-e.html)  |  sequences obtained via environmental sampling methods  |
|  SYN  |  synthetic constructs; artificially constructed sequences  |
|  [EST](/ddbj/est-e.html)  |  expressed sequence tags; short single pass cDNA sequences  |
|  [TSA](/ddbj/tsa-e.html)  |  transcriptome shotgun assemblies; assembled mRNA sequences  |
|  [GSS](/ddbj/gss-e.html)  |  genome survey sequences; short single pass genomic sequences  |
|  [HTC](/ddbj/htc-e.html)  |  high throughput cDNA sequences;<br>The sequence submitted from cDNA sequencing projects except for EST. This division is to include unfinished high throughput cDNA sequences, each of which has 5'UTR and 3'UTR at both ends and part of a coding region. The sequence may also include introns. When the sequence becomes finished later, it moves to the corresponding taxonomic division.  |
|  [HTG](/ddbj/htg-e.html)  |  high throughput genomic sequences;<br>The sequence submitted mainly from genome sequencing projects which regarded a clone as a sequencing unit.   |
|  STS  |  sequence tagged sites<br>The tag site for genome sequencing. The information of chromosome, map, PCR_condition is necessary for this division.  |
|  UNA  |  the data not annotated<br>The UNA division is not used recently.  |
|  [CON](con-j-e.html)  |  Contig / Constructed<br>To conjugate a series of entries, such as those submitted from a genome project, each of the three data banks constructs an entry and assign an accession number to a large scale sequence dataset. Such entries are classified into the CON division. The entry in the CON division has the information of joined accession numbers instead of the sequence data. The corresponding entries of the CON entry have been submitted to other divisions.  |

{::options parse_block_html="true" /}
<div id="ModificationDateB">
<h4><a href="#ModificationDateA">The date of last release</a></h4>
</div>

The current publicized date is described. If the entry is updated and reopened to public site, this date will be changed.

{::options parse_block_html="true" /}
<div id="DefinitionB">
<h3><a href="#DefinitionA">DEFINITION</a></h3>
</div>

The definition briefly describes the information of gene(s). "DEFINITION" is constructed by each of the three data banks in accordance with standard rules in principle.However, in the case of EST or GSS submission using Mass Submission System, DDBJ will sometimes ask submitters to construct "DEFINITION".

[Sample]

Complete sequence of maize catalase coding gene
: 
  ```
  DEFINITION  Zea mays Cat3 gene for catalase, complete cds.
  ```

: Format: [organism name] [gene name] gene for [product name], complete cds.
  - organism name: The scientific name is indicated as the organism name, in principle.
  - gene name: the symbol of the gene
  - product name: the general name of product
  - complete cds: this coding sequence is complete

Partial sequence of human glyceraldehyde-3-phosphate dehydrogenase coding cDNA
: 
  ```
  DEFINITION  Homo sapiens mRNA for glyceraldehyde-3-phosphate 
              dehydrogenase, partial cds.
  ```

: Format: [organism name] mRNA for [product name], partial cds.

: - partial cds: this protein coding sequence is partial
  - The gene name is omitted, because the submitter did not describe.

Partial sequence of Bacillus 16S rRNA
: 
  ```
  DEFINITION  Bacillus sp. AZ25 gene for 16S rRNA, partial 
              sequence.
  ```

: Format: [organism name] [strain name] gene for [product name], partial sequence.
  - In cases of unidentified species, comparison of intraspecies, and so on, describe name of strain, isolate or some, as identifier.
  - partial sequence: this sequence is part of 16S rRNA.

Multiple CDS of rat mitochondrial DNA
: 
  ```
  DEFINITION  Rattus norvegicus mitochondrial genes for cytochrome 
              c oxidase subunit II, ATPase subunit 6, cytochrome c 
              oxidase subunit III, partial and complete cds.
  ```

: Format: [organism name] [gene name 1], [gene name 2], .... genes for [product name 1], [product name 2], ..... , partial and complete cds.

: - The gene names and/or product names are subsequently described from 5'to 3' end.
  - "partial, complete and partial cds" is abbreviated to "partial and complete cds".
  - If some genes have only gene names or product names, only gene name or product name is described principally.
  - If the "DEFINITION" is too long, some information, such as map position, is described instead of the gene or product names.
  - Sometimes gene cluster or operon name is described, if it is considered reasonable.


EST data of human liver 3' end
: 
  ```
  DEFINITION  Homo sapiens cDNA, clone:ABC123, 3' end, expressed 
              in liver.
  ```

: Format: [organism name] cDNA, clone:[clone name], [other information].
: - The clone name is mandatory.

GSS data of mouse chromosome 1q
: 
  ```
  DEFINITION  Mus musculus DNA, clone:1H11A14, 1q region.
  ```
  Format: [organism name] DNA, clone:[clone name], [other information].
  - The clone name is mandatory.

TPA (Third Party Data) of human GAPD
: 
  ```
  DEFINITION  TPA_exp: Homo sapiens GAPD mRNA forglyceraldehyde-3-phosphate 
              dehydrogenase, complete cds.
  ```

: Format: [TPA header]: [organism name] [gene name] mRNA for [product name], complete cds.

: - In the case of [TPA (Third Party data)](/ddbj/tpa-e.html), either of "TPA_exp" (for TPA:experimental) or "TPA_inf" (for TPA:inferential) is described at the beginning of DEFINITION.

{::options parse_block_html="true" /}
<div id="AccessionB">
<h3><a href="#AccessionA">ACCESSION</a></h3>
</div>

This line shows accession number of the entry data.

Conventional sequence data  
: A unique accession number is issued to the data submitter by each of the three data banks. The accession number is composed of 1 alphabet character and 5 digits (ex. A12345) or 2 alphabet characters and 6 digits (ex. AB123456). The former style was used in 1980s, but later the latter style was introduced because of data explosion.
<br>The alphabet part is called "prefix". Please refer [the prefix list](/ddbj/prefix-e.html).

: If multiple entries are united to an entry, or if an entry is extensively modified after the submission, the responsible data banks may assign a new accession number to it. In these cases, the new accession number is called the primary accession number, and the old accession number(s) is/are called the secondary accession number(s). In the flat file, the primary accession number is indicated first, then the secondary accession number(s) follows. You can find the same updated entry with both the primary and the secondary accession numbers.

: 
  ```
  ACCESSION   AB999999 AB888888 AB777777
  ```

: 
  |  ```AB999999```  |  primary accession number  |
  |  ```AB888888 AB777777```  |  secondary accession number  |

Bulk sequence data; WGS, TSA, TLS  
: The accession number assigned to each entry of [WGS](/ddbj/wgs-e.html), [TSA](/ddbj/tsa-e.html) and TLS data consists of 4 alphabet characters and 8 (sometimes 9 or 10, if necessary) digits.<br>The alphabet part is called [prefix](/ddbj/prefix-e.html).<br>See also [For Large Scale Data (four prefix)](/ddbj/prefix-e.html#large).<br>Example:ZZZZ01000001

: | ZZZZ (4 letters) | Prefix to distinguish each project, project_id                 |
  | 01 (2 digits)        | Version number of the data set, set_version                |
  | 000001 (6 digits)	    | ID of each individual sequence (It might be 7 or 8 digits depended on the number of entries.) |

  The set_version goes up for every update of the dataset. Example:ZZZZ02000001

: 
  ```
  ACCESSION   ZZZZ01000001 ZZZZ01000000
  ```
: 
  | ```ZZZZ01000001``` | primary accession number   |
  | ```ZZZZ01000000``` | set ID   |

For MGA data
: This (ACEESSION) line shows a number assigned by INSDC to a resource.
: The number is composed of 5 alphabet characters and 7 digits (ex. ABCDE0000001).An accession number assigned to an entry of a resource units is displayed in the MGA lines.
: Example:ABCDE0000001

: |AB (first two characters)	identi  | identifier to each project. |
  | CDE (third to fifth characters)	   | identifier to each of resources on each project.  |
  | 0000001 (7 digit numeric numbers)	 | number for each sequence entry in a resource.    |

  \*1 The information about each project id is avilable at the [project_index ](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/mga/project_index-e.html) page.<br>\*2 "resource" here means a unit of identical origin, such as tissue, cells, from which sequence are obtained.

: 
  ```
  ACCESSION   ZZZZZ0000000
  ```
: 
  | ```ZZZZZ0000000``` | number to a resource unit   |

{::options parse_block_html="true" /}
<div id="VersionB">
<h3><a href="#VersionA">VERSION</a></h3>
</div>

This line consists of an accession number and a version number, like "AB123456.1", in which the digit(s) after the period is a version number.

The data open to public for the first time is version number as "1". The reason for adding VERSION is that since a released sequence sometimes revised by the submitter, the accession number alone cannot specify the sequence in question causing the user a trouble. The number is increased by one every time when a revised sequence is made public. And accession number will NOT be changed generally.

```
VERSION      AB000000.1
```

| ```AB000000``` | accession number   |
| ```1``` | version number   |

For MGA data
: This line consists of a number assigned to a resources unit in which the digit(s) after the period is a version number.  
Since the sequence of an MGA entry is not allowed to update, the version number has to be "1".

: 
  ```
  VERSION    ZZZZZ0000000.1
  ```

: | ```ZZZZZ000000```  | number to a resource unit |
  | ```1```   | version number   |  

{::options parse_block_html="true" /}
<div id="DblinkB">
<h3><a href="#DblinkA">DBLINK</a></h3>
</div>

The DBLINK line is used to link other databases for BioProject, BioSample accession numbers, Sequence Read Archive Run accession numbers and so on.

DDBJ has replaced the PROJECT line by DBLINK line format since 2009 to expand for other data resources than projects.

```
DBLINK      BioProject:PRJDA12345
            BioSample:SAMD01234567
            Sequence Read Archive:DRR012345, DRR012346     
```

| ```BioProject``` | The name of linked database: [BioProject Database](/bioproject/index-e.html) |
| ```PRJDA12345``` | Linked ID in the database; BioProject accession number   |
| ```BioSample``` | The name of linked database: [BioSample Database](/biosample/index-e.html)  |
| ```SAMD01234567``` | Linked ID in the database; BioSample accession number  |
| ```Sequence Read Archive``` | The name of linked database: [Sequence Read Archive](/dra/index-e.html) (SRA)  |
| ```DRR012345, DRR012346``` | Linked ID in the database; SRA Run accession numbers  |

{::options parse_block_html="true" /}
<div id="KeywordsB">
<h3><a href="#KeywordsA">KEYWORDS</a></h3>
</div>

The KEYWORDS lines were used for indexing ([gene](/ddbj/qualifiers-e.html#gene)) and 
([product](/ddbj/qualifiers-e.html#product)) names in the past.

For now, KEYWORDS lines are used to indicate [the detail category of the data](/documents/data-categories-e.html#detail) ([EST](/ddbj/est-e.html),
[TSA](/ddbj/tsa-e.html), [HTC](/ddbj/htc-e.html), [HTG](/ddbj/htg-e.html),
[GSS](/ddbj/gss-e.html), [WGS](/ddbj/wgs-e.html), [TPA](/ddbj/tpa-e.html) etc) information about experimental method, "finishing level" of genome sequencing and else, if necessary. See also [INSDC agreed methodological keywords](/ddbj/keyword-e.html).

{::options parse_block_html="true" /}
<div id="SourceB">
<h3><a href="#SourceA">SOURCE</a></h3>
</div>

This line shows the scientific name (and common name, if defined) on organism from which the sequence is obtained and an organelle type if the sequence is derived from an organelle other than the nucleus.

```
SOURCE      Homo sapiens (human)
```

| ```Homo sapiens (human)``` | The scientific name from which the sequence is obtained. |

{::options parse_block_html="true" /}
<div id="OrganismB">
<h4><a href="#OrganismA">ORGANISM</a></h4>
</div>

The organism name and its phylogenic lineage from which the sequence is obtained are described.

The scientific name is indicated as the organism name in 1st line. If the sequence is obtained from an unidentified organism or artificially synthesized, the name registered on the Unified Taxonomy Database is described instead of scientific name.

The phylogenic lineage information based on the Unified Taxonomy Database is started from 2nd line.

```
  ORGANISM  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi
            Mammalia; Eutheria; Primates; Catarrhini; Hominidae; Homo.
```

| ```Homo sapiens``` | The scientific name from which the sequence is obtained |
| ```Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi; Mammalia; Eutheria; Primates; Catarrhini; Hominidae; Homo.``` | The phylogenic lineage information of Homo sapiens |

{::options parse_block_html="true" /}
<div id="Reference1B">
<h3><a href="#Reference1A">REFERENCE 1</a></h3>
</div>

The information of submitter(s) is described as REFERENCE 1 (except old entries and some [CON](/ddbj/con-e.html) entries).

In the case of [Nucleotide Sequence Submission System](/ddbj/web-submission-e.html), REFERENCE 1 is processed with the information entered on "Contact person" and "Submitter" pages. In the case of Mass Submission System, REFERENCE 1 is processed with the information entered in annotation file.

```
REFERENCE   1   (bases 1 to 450)
```

Notice: The portion, "(bases 1 to 450)", is not available on the Master record of MGA data.

{::options parse_block_html="true" /}
<div id="AuthorsB">
<h4><a href="#AuthorsA">AUTHORS</a></h4>
</div>

Submitter(s) of the entry is/are indicated in principle. Submitter is responsible for the data and can update it.

```
 AUTHORS   Mishima,H. and Shizuoka,T.
```

| ```Mishima,H. and Shizuoka,T``` | The submitters of this entry |

{::options parse_block_html="true" /}
<div id="TitleB">
<h4><a href="#TitleA">TITLE</a></h4>
</div>

"Direct Submission" is indicated to follow the standard form.

```
  TITLE     Direct Submission
```

{::options parse_block_html="true" /}
<div id="JournalB">
<h4><a href="#JournalA">JOURNAL</a></h4>
</div>

At first, "Accept Date" of the entry is indicated. "Accept Date" is defined as the date when DDBJ have received the acceptable data to assign accession number in principle.
Even if the entry is updated, "Accept Date" is NOT changed. Then, the information about the address and the affiliation of "Contact Person" is indicated.

```
  JOURNAL   Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
```

| ```Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases.``` | Accept date of this entry is 30-NOV-2008 |
| ```Contact:Hanako Mishima```<br>```National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,```<br> ```Mishima, Shizuoka 411-8540, Japan``` | The information about the address and the affiliation of Hanako Mishima. |

E-mail address, phone & fax nos.

  - To follow the Japanese law of protecting personal information, DDBJ will delete both phone and fax numbers, and E-mail address from the flat files of the entries submitted to DDBJ.However, if you wish to disclose any of the three items, please contact us with [contact form](/contact-e.html#to-ddbj), specifying the item(s) to be disclosed.
  - When you wish to contact to the submitter(s) of an entry of your interest,please contact us with [the inquiry form](/contact-e.html#to-submitters) with reasons briefly;i.e. asking to transfer cloned sequences, etc, then we will forward your messeage to the submitter(s).

Phone and fax numbers and E-mail address are deleted.

```
  JOURNAL   Submitted (30-NOV-2000) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
```

When the submitters wish to keep their contact information disclosed, it will be described as,

```
  JOURNAL   Submitted (30-NOV-2000) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
            E-mail :mishima@supernig.nig.ac.jp
            Phone  :81-55-981-6853
            Fax    :81-55-981-6849
```

{::options parse_block_html="true" /}
<div id="Reference2B">
<h3><a href="#Reference2A">REFERENCE 2</a></h3>
</div>

The information of references related to the submitted sequence is indicated on REFERENCE line (other than ([REFERENCE 1](#Reference1B)). Since REFERENCE 2 indicates [the publication status of the sequence](/ddbj/services/index.html#pcite), the reference which does not describe about the submitting sequence is indicated as REFERENCE 3 or after, not as REFERENCE 2.

When DDBJ notices a paper publication with an accession number, DDBJ will update the entry with the accession number, if necessary. During the process of the update, the prepublication paper(s) described in the line(s), REFERENCE 2 and/or later, will be revised without any notice to submitters, if applicable; i.e. When the submitted data, submitters' affiliation, author names, title, and journal name of the prepublication paper, are enough reasonable to be revised.

In the cases of the manuscript in preparation, submitted for publication, in press, or published
: 
  ```
  REFERENCE   2
    AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
    TITLE     Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver
    JOURNAL   Unpublished (2009)
  ```

: | ```AUTHORS``` | The (presumptive) author(s) of the reference is/are described. |
  | ```TITLE``` | The (presumptive) title of the reference is described. |
  | ```JOURNAL``` | In the cases of the paper published or In Press, the journal name is described. In the case of unpublished manuscript, "Unpublished" is described to follow the standard form. |

In the case of no schedule for publication except the international nucleotide database.
: 
  ```
  REFERENCE   2
    AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
    TITLE     Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver
    JOURNAL   Published Only in Database(2009)
  ```

: | ```AUTHORS``` | The author(s) of the submission entered by submitter(s) is/are described. |
  | ```TITLE``` | The title of the submission entered by submitter(s) is described. |
  | ```JOURNAL``` | "Published Only in Database" is indicated.<br/>The parenthetic number is the year when the entry has been firstly publicized.  |
  
{::options parse_block_html="true" /}
<div id="CommentB">
<h3><a href="#CommentA">COMMENT</a></h3>
</div>

The information about an entry that can not be described using FEATURES or the other fields. For instance, if submitter has the other affiliation to [REFERENCE 1](#Reference1B), it can be described on COMMENT line.

```
COMMENT     Human cDNA sequencing project.
```

Structured COMMENT  
: Structured COMMENT is a format to describe and to share some datasets undefined in feature/qualifier.<br>SUsing structured COMMENTs, datasets can be shared via flatfiles of INSDC in the community of submitters and users.<br>To describe structured COMMENT, the dataset is required to be describe in structured sets of [names of items] and [values of items] on COMMENT line.<br>There are some predetermined formats of structured COMMENTs that are required to submit some kinds of sequence data derived from genome projects (including[WGS](/ddbj/wgs-e.html), transcriptome projects (including [TSA](/ddbj/tsa-e.html)) and so on.
: 
  ```
  COMMENT     ##Genome-Assembly-Data-START##
              Finishing Goal           :: Finished
              Current Finishing Status :: High Quality Draft
              Assembly Method          :: Newbler v. 2.3
              Genome Coverage          :: 30x
              Sequencing Technology    :: 454 GS Junior; Illumina GA II
              ##Genome-Assembly-Data-END##
  ```
:   
  The above example is an additional information, "Genome-Assembly-Data", that is required for genome projects.<br>The contents between ##Genome-Assembly-Data-START## and ##Genome-Assembly-Data-END## are delimited item names and their values by " :: ".

: | ```##Genome-Assembly-Data-START##``` |The first line of the structured COMMENT defined as "Genome-Assembly-Data". |
  | ```##Genome-Assembly-Data-END##``` | The last line of the structured COMMENT defined as "Genome-Assembly-Data". |
  | ```Finishing Goal           :: Finished``` | The final goal of the genome project is "Finished" level. |
  | ```Current Finishing Status :: High Quality Draft``` | The current status of the genome project is "High Quality Draft" level. |
  | ```Assembly Method          :: Newbler v. 2.3``` | The software to assemble reads of sequences is Newbler and its version is 2.3. |
  | ```Genome Coverage          :: 30x``` | The sequencing depth of the genome sequences is approximately 30 fold. |
  | ```Sequencing Technology    :: 454 GS Junior; Illumina GA II ``` | 454 GS Junior; Illumina GA II -- the platforms (sequencers) to determine the genome sequences are "454 GS Junior" and "Illumina GA II". |

For MGA data
: For [MGA Submission](/ddbj/mga-e.html), the process for obtaining the submitted sequence data e.g.; (methods for preparing sequences from tissues or cells and processing the sequences for submission) is described.
: 
  ```
  COMMENT     The CAGE (cap analysis gene expression) is based on preparation
              and sequencing of concatamers of DNA tags deriving from the
              initial 20/21 nucleotides from 5' end mRNAs.
              Full-length cDNAs were at first selected with the Cap-Trapper
              method. Then, a specific linker (Linker1, some linker contain 5 bp
              sequences that have 15 variations for each rna sample) containing
              the ClassIIs restriction enzyme site MmeI was then ligated to the
              single-strand cDNA and then the second strand of cDNA synthesized.
              The resulting double-stranded cDNA was cleaved by the restriction
              enzyme MmeI and a second linker (Linker2) was ligated to the 2 bp
              overhang at the MmeI cleaved site, to produce a 5' 20/21 tag
              having two linkers at both sides. The ligation products were
              separated from unmodified DNA with magnetic beads. The 5' end cDNA
              tags were released from the beads, and the DNA fragments were
              amplified in a PCR step by using the two linker-specific primers
              (Primer1 (uni-PCR), Primer2 (MmeI-PCR)). The desired 32-37 bp tags
              were purified and ligated to form concatamers, and then the
              concatamer were fractionated and ligated to the plasmid ZErO-2.
              The ligations were finally electroporated into DH10b cells
              (Invitrogen) and obtained plasmids were sequenced with forward
              primers.
              CAGE libraries were sequenced with forward primers essentially as
              described with minor modifications to use zeocin for selection of
              recombinants. We used in-house developed algorithms for the
              extraction of tags and for masking the vectors. CAGE tags were
              extracted with the following parameters: vector masking, minimum
              12 bp recognition allowed; linker (13 bp) masking: maximum
              mismatch, 2 bp allowed; XmaJI site maximum mismatch, 2 bp allowed;
              tag length, 17-24 bp.
              Linker1: "Upper oligonucleotide GN6":
              biotin-agagagagacctcgagtaactataacggtcctaaggtagcgacctagg (5 bp)
              tccgacGNNNNN and "Upper oligonucleotide N6":
  ```

{::options parse_block_html="true" /}
<div id="FeaturesB">
<h3><a href="#FeaturesA">FEATURES</a></h3>
</div>

Biological features of a submitted sequence data are described with "Feature" key (the biological nature of the annotated feature), "Location" (the region of the sequence which corresponds to Feature), and "Qualifier" (supplementary information about Feature). In principle, EST or GSS entries are not described with any features except the "source" key.

FEATURES are indicated on the basis of the information provided by submitter and modified by databanks to describe the appropriate annotation. The rules of feature description agreed with three databanks are explained at [The DDBJ/ENA/GenBank Feature Table Definition](/ddbj/full_index-e.html) in detail.

Feature keys are briefly classified into 3 groups;

- group 1: biological source of the sequence (source)<br>The feature, "source" (group 1) is mandatory for all entries in the international nucleotide database.<br>The qualifiers "/organism" and "/mol_type" are mandatory for source feature.
- group 2: biological function features of the region<br>Feature keys in group 2 fall into families which are in some sense similar in function and which are annotated in a similar manner.A functional family may have a "generic" or miscellaneous key, which can be recognized by the 'misc_' prefix, that can used for instances not covered by the other defined keys of that group.<br>e.g. CDS, rRNA, etc.
- group 3: difference and/or change of the sequence data<br>e.g. variation, conflict, etc.

One of the most frequently used feature key is "CDS" to describe coding sequence for protein. See also [CDS feature](/ddbj/cds-e.html) page.

```
FEATURES             Location/Qualifiers
     source          1..450
                     /chromosome="12"
                     /clone="GT200015"
                     /clone_lib="lambda gt11 human liver cDNA (GeneTech.
                     No.20)"
                     /db_xref="taxon:9606"
                     /map="12p13"
                     /mol_type="mRNA"
                     /organism="Homo sapiens"
                     /tissue_type="liver"
     CDS             86..>450
                     /codon_start=1
                     /gene="GAPD"
                     /product="glyceraldehyde-3-phosphate dehydrogenase"
                     /protein_id="BAA12345.1"
                     /transl_table=1
                     /translation="MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
                     YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
                     VFTDKDKAVAQLKGGAKKV"
```

{::options parse_block_html="true" /}
<div id="FeaturesSourceB">
<h3><a href="#FeaturesSourceA">source</a></h3>
</div>

Identifies the biological source of the specified span of the sequence.

|  ```source    1..450```  |  The region from 1st to 450th base of the sequence is derived from the source described with following qualifiers.  |
|  ```/chromosome="12"```  |  The sequence is obtained from chromosome 12.  |
|  ```/clone="GT200015"```  |  The clone name which the sequence is obtained.  |
|  ```/clone_lib="lambda gt11 human liver cDNA (GeneTech. No.20)"```  |  The clone library name which the sequence is obtained. |
|  ```/map="12p13"```  |  The sequence is located on 12p13.  |
|  ```/db_xref="taxon:9606"```   |  The sequence is derived from a organism correspond to taxonomy database ID: 9606 (human). |
|  ```/mol_type="mRNA"```  |  The sequence is derived from mRNA.  |
|  ```/organism="Homo sapiens"```  |  The sequence is obtained from human.  |
|  ```/tissue_type="liver"```   |  The sequence is obtained from liver.  |

{::options parse_block_html="true" /}
<div id="CDSB">
<h3><a href="#CDSA">CDS</a></h3>
</div>

Coding sequence; sequence of nucleotides that corresponds with the sequence of amino acids in a protein (location includes stop codon).

|  ```CDS      86..>450```  |  The region from 86th to 450th base of the sequence is coding a protein described with following qualifiers.">" means that 3'end is not completed for the region of CDS. The rule to describe "Location" is explained at [Description of Location](/ddbj/location-e.html) in detail. |
|  ```/codon_start=1```  |  The [frame](/ddbj/cds-e.html#frame) reading amino acid translation of the first codon is the 1st base of this region (86th base of the entry).  |
|  ```/gene="GAPD"```  |  gene symbol, see [gene](/ddbj/qualifiers-e.html#gene) qualifier  |
|  ```/product="glyceraldehyde-3-phosphate dehydrogenase"```  |  product name, see [product](/ddbj/qualifiers-e.html#product) qualifier　|
|  ```/protein_id="BAA12345.1"```  |  This is the ID assigned to amino acid sequence by the international nucleotide database.<br/> It is indicated as 3 alphabet characters and 5 digits.<br>The number next to "." indicates he version number of protein ID. If the amino acid sequence is updated, the version number goes up (the protein_id is NOT changed).  |
|  ```/transl_table=1```   |  The nucleotide sequence of CDS region is translated into amino acid sequence according to genetic code table 1.  |
|  ```/translation="MAKIKIGINGF(syncopation)AVAQLKGGAKKV"```  |  The nucleotide sequence of CDS region is conceptually translated into one-letter abbreviated amino acid sequence ([Amino Acid Codes](/ddbj/code-e.html#amino-1)), except setting the qualifier[exception](/ddbj/qualifiers-e.html#exception).<br/>In the case of setting the qualifier [pseudogene](/ddbj/qualifiers-e.html#pseudogene) or [pseudo](/ddbj/qualifiers-e.html#pseudo), /translation is NOT indicated.  |

{::options parse_block_html="true" /}
<div id="EndB">
<h3><a href="#EndA">//</a></h3>
</div>

"//" is the terminal symbol of the entry.

