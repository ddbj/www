---
layout: indexed_content
title: CON
pathname: con-e
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


# CON

Many genome projects submitting a lot of [HTG](/ddbj/htg-e.html) or
[WGS](/ddbj/wgs-e.html) entries can often provide the information to
assemble a series of their entries and reconstruct a genome structure.
An accession number would be assigned for such contig tiling path, and
call it "CON entry", which is classified into CON division.

CON entries have [CONTIG](#ContigB) lines that indicate accession
numbers of citation sequences (piece entries) and their tiling order to
construct the contig. The nucleotide sequence of CON entry is not shown
on DDBJ flat file.

We can NOT directly accept the submission of CON entry. At you
have to submit all piece entries to construct the contig, then a CON
entry will be constructed.

[AGP File](/ddbj/file-format-e.html#agp) is required to submit CON
entries.

You can submit CON data to DDBJ via [Mass Submission System
(MSS)](/ddbj/mss-e.html).

## Sample flat file


<pre><a id="LocusA" href="#LocusB">LOCUS</a>       <a id="LocusNameA" href="#LocusNameB">BA001000</a>              <a id="SequenceLengthA" href="#SequenceLengthB">5631 bp</a>    <a id="MoleculeTypeA" href="#MoleculeTypeB">DNA</a>    <a id="MoleculeFormA" href="#MoleculeFormB">linear</a>   <a id="DivisionA" href="#DivisionB">CON</a> <a id="ModificationDateA" href="#ModificationDateB">06-DEC-2008</a>
<a id="DefinitionA" href="#DefinitionB">DEFINITION</a>  Homo sapiens DNA, chromosome 7, scaffold_ASE1. 
<a id="AccessionA" href="#AccessionB">ACCESSION</a>   BA001000 BZZZ01000000
<a id="VersionA" href="#VersionB">VERSION</a>     BA001000.1
<a id="DblinkA" href="#DblinkB">DBLINK</a>      BioProject:PRJDA12345
<a id="KeywordsA" href="#KeywordsB">KEYWORDS</a>    WGS.
<a id="SourceA" href="#SourceB">SOURCE</a>      Homo sapiens (human)
  <a id="OrganismA" href="#OrganismB">ORGANISM</a>  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
<a id="Reference1A" href="#Reference1B">REFERENCE</a>   1  (bases 1 to 5631)
  <a id="AuthorsA" href="#AuthorsB">AUTHORS</a>   Mishima,H. and Shizuoka,T.
  <a id="TitleA" href="#TitleB">TITLE</a>     Direct Submission
  <a id="JournalA" href="#JournalB">JOURNAL</a>   Submitted (01-APR-2003) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
<a id="Reference2A" href="#Reference2B">REFERENCE</a>   2
  AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
  TITLE     Human WGS scaffold CON
  JOURNAL   Unpublished (2003)
<a id="CommentA" href="#CommentB">COMMENT</a>     Whole genome shotgun sequencing project.
            Please visit our web site
            URL:http://www.ddbj.nig.ac.jp/
<a id="FeaturesA" href="#FeaturesB">FEATURES</a>             Location/Qualifiers
     <a id="FeaturesSourceA" href="#FeaturesSourceB">source</a>          <a href="/ddbj/location.html">1..5631</a>
                     /<a href="/ddbj/qualifiers.html#db_xref">db_xref</a>="taxon:9606"
                     /<a href="/ddbj/qualifiers.html#mol_type">mol_type</a>="genomic DNA"
                     /<a href="/ddbj/qualifiers.html#organism">organism</a>="Homo sapiens"
                     /<a href="/ddbj/qualifiers.html#submitter_seqid">submitter_seqid</a>="scaffold_ASE1"
     <a href="/ddbj/features.html#assembly_gap">assembly_gap</a>    <a href="/ddbj/location.html">1346..2845</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=1500
                     /<a href="/ddbj/qualifiers.html#gap_type">gap_type</a>="within scaffold"
                     /<a href="/ddbj/qualifiers.html#linkage_evidence">linkage_evidence</a>="paired-ends"
     <a href="/ddbj/features.html#assembly_gap">assembly_gap</a>    <a href="/ddbj/location.html">4302..4401</a>
                     /<a href="/ddbj/qualifiers.html#estimated_length">estimated_length</a>=unknown
                     /<a href="/ddbj/qualifiers.html#gap_type">gap_type</a>="within scaffold"
                     /<a href="/ddbj/qualifiers.html#linkage_evidence">linkage_evidence</a>="align trnscpt"
<a id="ContigA" href="#ContigB">CONTIG</a>      join(BZZZ01123456.1:1..1345,gap(1500),BZZZ01123457.1:1..1456,
            gap(unk100),complement(BZZZ01123458.1:1..1230))
<a id="EndA" href="#EndB">//</a>
</pre>


## FIELD COMMENTS

### [LOCUS](#LocusA) <a name="LocusB"></a>

locus name, sequence length, molecule type, molecular form, division, the date of last release

#### [Locus Name](#LocusNameA) <a name="LocusNameB"></a>

Locus name is a unique ID of the entry in the database.
In DDBJ, since July 1996, the locus name has been assigned the same as [accession number](#Accession).

#### [Length of Sequence](#SequenceLengthA) <a name="SequenceLengthB"></a>

Notice: No information is available on the Master record of MGA data.


#### [Molecule Type](#MoleculeTypeA) <a name="MoleculeTypeB"></a>

According to the value of /mol_type qualifier for source feature, it is described as DNA, RNA, mRNA, rRNA, tRNA, or cRNA.


### [Molecular Form](#MoleculeFormA) <a name="MoleculeFormB"></a>

This column indicates whether molecular form of nucleotide sequence is "linear" or "circular". If the entry is the full length of circular form, "circular" is appeared.

### [Division](#DivisionA) <a name="DivisionB"></a>

DDBJ classifies entries into 21 divisions as below;

a: taxonomic divisions

| **HUM** | human |
| **PRI** | primates (other than human) |
| **ROD** | rodents |
| **MAM** | mammals (other than primates and rodents) |
| **VRT** | vertebrates (other than mammals) |
| **INV** | invertebrates (animals other than vertebrates) |
| **PLN** | plants, fungi, plastids (eukaryotes other than animals) |
| **BCT** | bacteria (including both Eubacteria and Archaea) |
| **VRL** | viruses |
| **PHG** | bacteriophages |


b: other divisions

| [**PAT**](/ddbj/pat-data-e.html) | sequence data related to patent application<br>The data those which Japan Patent Office (JPO), United States Patent and Trademark Office (USPTO), European Patent Office (EPO), and Korean Intellectual Property Office (KIPO) collected, processed and released. |
| [**ENV**](/ddbj/env-e.html) | sequences obtained via environmental sampling methods |
| **SYN** | synthetic constructs; artificially constructed sequences | 
| [**EST**](/ddbj/est-e.html) | expressed sequence tags; short single pass cDNA sequences |
| [**TSA**](/ddbj/tsa-e.html) | transcriptome shotgun assemblies; assembled mRNA sequences |
| [**GSS**](/ddbj/gss-e.html) | genome survey sequences; short single pass genomic sequences | 
| [**HTC**](/ddbj/htc-e.html) | high throughput cDNA sequences; <br>The sequence submitted from cDNA sequencing projects except for EST. This division is to include unfinished high throughput cDNA sequences, each of which has 5'UTR and 3'UTR at both ends and part of a coding region. The sequence may also include introns. When the sequence becomes finished later, it moves to the corresponding taxonomic division. |
| [**HTG**](/ddbj/htg-e.html) | high throughput genomic sequences;<br> The sequence submitted mainly from genome sequencing projects which regarded a clone as a sequencing unit. |
| **STS** | sequence tagged sites<br>The tag site for genome sequencing. The information of chromosome, map, PCR_condition is necessary for this division. |
| **UNA** | the data not annotated<br> The UNA division is not used recently. |
| [**CON**](con-e.html) | Contig / Constructed<br>To conjugate a series of entries, such as those submitted from a genome project, each of the three data banks constructs an entry and assign an accession number to a large scale sequence dataset. Such entries are classified into the CON division. The entry in the CON division has the information of joined accession numbers instead of the sequence data. The corresponding entries of the CON entry have been submitted to other divisions. |




#### [The date of last release](#ModificationDateA)<a name="ModificationDateB"></a>

The current publicized date is described. If the entry is updated and reopened to public site, this date will be changed.

### [DEFINITION](#DefinitionA)<a name="DefinitionB"></a>

The definition briefly describes the information of gene(s). "DEFINITION" is constructed by each of the three data banks in accordance with standard rules in principle.However, in the case of EST or GSS submission using Mass Submission System, DDBJ will sometimes ask submitters to construct "DEFINITION".

[Sample]


Complete sequence of maize catalase coding gene
: 
```
DEFINITION  Zea mays Cat3 gene for catalase, complete cds.
```
: Format: [organism name] [gene name] gene for [product name], complete cds.
: 
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

: 
Format: [organism name] mRNA for [product name], partial cds.

: 
  - partial cds: this protein coding sequence is partial
  - The gene name is omitted, because the submitter did not describe.


Partial sequence of Bacillus 16S rRNA
: 
```
DEFINITION  Bacillus sp. AZ25 gene for 16S rRNA, partial
                sequence.
```

: Format: [organism name] [strain name] gene for [product name], partial sequence.

: 
  - In cases of unidentified species, comparison of intraspecies, and so on, describe name of strain, isolate or some, as identifier.
  - partial sequence: this sequence is part of 16S rRNA.


Multiple CDS of rat mitochondrial DNA
: 
```
DEFINITION  Rattus norvegicus mitochondrial genes for cytochrome
                c oxidase subunit II, ATPase subunit 6, cytochrome c
                oxidase subunit III, partial and complete cds.
```

: Format: [organism name] [gene name 1], [gene name 2], ....  genes for [product name 1], [product name 2], ..... , partial and complete cds.

: 
  - The gene names and/or product names are subsequently described from 5'to 3' end.
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

: 
  - The clone name is mandatory.


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
DEFINITION  TPA_exp: Homo sapiens GAPD mRNA for
                glyceraldehyde-3-phosphate dehydrogenase, complete cds.
```

: Format: [TPA header]: [organism name] [gene name] mRNA for [product name], complete cds.
  - In the case of [TPA (Third Party data)]("/ddbj/tpa-e.html), either of "TPA_exp" (for TPA:experimental) or "TPA_inf" (for TPA:inferential) is described at the beginning of DEFINITION.






### [ACCESSION](#AccessionA)<a name="AccessionB"></a>

This line shows accession number of the entry data.


Conventional sequence data
: A unique accession number is issued to the data submitter by each of the three data banks. The accession number is composed of 1 alphabet character and 5 digits (ex. A12345) or 2 alphabet characters and 6 digits (ex. AB123456). The former style was used in 1980s, but later the latter style was introduced because of data explosion.<br>The alphabet part is called "prefix". Please refer [the prefix list](/ddbj/prefix-e.html).

: If multiple entries are united to an entry, or if an entry is extensively modified after the submission, the responsible data banks may assign a new accession number to it. In these cases, the new accession number is called the primary accession number, and the old accession number(s) is/are called the secondary accession number(s). In the flat file, the primary accession number is indicated first, then the secondary accession number(s) follows. You can find the same updated entry with both the primary and the secondary accession numbers.

: 
```
ACCESSION   AB999999 AB888888 AB777777
```
: 
| AB999999 | primary accession number |
| AB888888 AB777777 | secondary accession number |

Bulk sequence data; WGS, TSA, TLS<a name="bulk_sequence"></a>
: The accession number assigned to each entry of <a href="/ddbj/wgs-e.html">WGS</a>, <a href="/ddbj/tsa-e.html">TSA</a> and TLS data consists of 4 alphabet characters and 8 (sometimes 9 or 10, if necessary) digits. <br>The alphabet part is called <a href="/ddbj/prefix-e.html"> prefix</a>.<br>See also <a href="/ddbj/prefix-e.html#large">For Large Scale Data (four prefix)</a>.

: Example:ZZZZ<span class="red">01</span><span class="blue">000001</span>

: 
| ZZZZ (4 letters) | Prefix to distinguish each project, project_id |
| <span class="red">01</span> (2 digits) | Version number of the data set, set_version |
| <span class="blue">000001</span> (6 digits) | ID of each individual sequence (It might be 7 or 8 digits depended on the number of entries.) |  

    The set_version goes up for every update of the dataset. Example:ZZZZ<span class="red">02</span>000001

: 
```
ACCESSION   ZZZZ01000001 ZZZZ01000000
```

: 
| ZZZZ01000001 | primary accession number |
| ZZZZ01000000 | set ID |

For MGA data <a name="accession_MGA"></a>
: This (ACEESSION) line shows a number assigned by INSDC to a resource.

: The number is composed of 5 alphabet characters and 7 digits (ex. ABCDE0000001).An accession number assigned to an entry of a resource units is displayed in the MGA lines.

: Example:AB<span class="red">CDE</span><span class="blue">0000001</span>

: 
| AB (first two characters) | identifier to each project. |
| <span class="red">CDE</span> (third to fifth characters) | identifier to each of resources on each project. |
| <span class="blue">0000001</span> (7 digit numeric numbers) | number for each sequence entry in a resource. |

    \*1 The information about each project id is avilable at the [project_index](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/mga/project_index-e.html) page.  
    \*2 "resource" here means a unit of identical origin, such as tissue, cells, from which sequence are obtained.

: 
```
ACCESSION   ZZZZZ0000000
```

: 
| ZZZZZ0000000 | number to a resource unit |






### [VERSION](#VersionA)<a name="VersionB"></a>

This line consists of an accession number and a version number, like "AB123456.1", in which the digit(s) after the period is a version number.
The data open to public for the first time is version number as "1". The reason for adding VERSION is that since a released sequence sometimes revised by the submitter, the accession number alone cannot specify the sequence in question causing the user a trouble. The number is increased by one every time when a revised sequence is made public. And accession number will NOT be changed generally.


```
VERSION      AB000000.1
```

| AB000000 | accession number |
| 1 | version number |


For MGA data
: This line consists of a number assigned to a resources unit in which the digit(s) after the period is a version number.

: Since the sequence of an MGA entry is not allowed to update, the version number has to be "1".

: 
```
VERSION    ZZZZZ0000000.1
```

: 
| ZZZZZ000000 | number to a resource unit |
| 1 | version number |


### [DBLINK](#DblinkA)<a name="DblinkB"></a>

The DBLINK line is used to link other databases for BioProject, BioSample accession numbers, Sequence Read Archive Run accession numbers and so on.
DDBJ has replaced the PROJECT line by DBLINK line format since 2009 to expand for other data resources than projects.


```
DBLINK      BioProject:PRJDA12345  
            BioSample:SAMD01234567  
            Sequence Read Archive:DRR012345, DRR012346
```

| BioProject | The name of linked database: [BioProject Database](/bioproject/index-e.html) |
| PRJDA12345 | Linked ID in the database; BioProject accession number |
| BioSample | The name of linked database: [BioSample Database](/biosample/index-e.html) |
| SAMD01234567 | Linked ID in the database; BioSample accession number |
| Sequence Read Archive | The name of linked database: [Sequence Read Archive](/dra/index-e.html) (SRA) |
| DRR012345, DRR012346 | Linked ID in the database; SRA Run accession numbers |


### [KEYWORDS](#KeywordsA)<a name="KeywordsB"></a>

The KEYWORDS lines were used for indexing [gene](/ddbj/qualifiers-e.html#gene) and [product](/ddbj/qualifiers-e.html#product) names in the past.
For now, KEYWORDS lines are used to indicate [the detail category of the data](/data-categories-e.html#detail) ([EST](/ddbj/est-e.html), [TSA](/ddbj/tsa-e.html), [HTC](/ddbj/htc-e.html), [HTG](/sub/htg-e.html), [GSS](/ddbj/gss-e.html), [WGS](/ddbj/wgs-e.html), [TPA](/ddbj/tpa-e.html) etc), information about experimental method, "finishing level" of genome sequencing and else, if necessary. See also [INSDC agreed methodological keywords](/ddbj/keyword-e.html).



### [SOURCE](#SourceA)<a name="SourceB"></a>

This line shows the scientific name (and common name, if defined) on organism from which the sequence is obtained and an organelle type if the sequence is derived from an organelle other than the nucleus.


```
SOURCE      Homo sapiens (human)
```

Homo sapiens (human) | The scientific name from which the sequence is obtained. |


#### [ORGANISM](#OrganismA)<a name="OrganismB"></a>

The organism name and its phylogenic lineage from which the sequence is obtained are described.
The scientific name is indicated as the organism name in 1st line. If the sequence is obtained from an unidentified organism or artificially synthesized, the name registered on the Unified Taxonomy Database is described instead of scientific name.
The phylogenic lineage information based on the Unified Taxonomy Database is started from 2nd line.


```
  ORGANISM  Homo sapiens  
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi  
            Mammalia; Eutheria; Primates; Catarrhini; Hominidae; Homo.  
```


| Homo sapiens | The scientific name from which the sequence is obtained |
| Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;<br>Mammalia; Eutheria; Primates; Catarrhini; Hominidae; Homo. | The phylogenic lineage information of Homo sapiens |


#### [REFERENCE 1](#Reference1A)<a name="Reference1B"></a>

The information of submitter(s) is described as REFERENCE 1 (except old entries and some [CON](/ddbj/con-e.html) entries).  
In the case of [Nucleotide Sequence Submission System](/ddbj/websub-e.html), REFERENCE 1 is processed with the information entered on "Contact person" and "Submitter" pages. In the case of Mass Submission System, REFERENCE 1 is processed with the information entered in annotation file.


```
REFERENCE   1   (bases 1 to 450)
```

Notice: The portion, "(bases 1 to 450)", is not available on the Master record of MGA data.


#### [AUTHORS](#AuthorsA)<a name="AuthorsB"></a>

Submitter(s) of the entry is/are indicated in principle. Submitter is responsible for the data and can update it.


```
  AUTHORS   Mishima,H. and Shizuoka,T.
```


| Mishima,H. and Shizuoka,T | The submitters of this entry |


#### [TITLE](#TitleA)<a name="TitleB"></a>

"Direct Submission" is indicated to follow the standard form.


```
  TITLE     Direct Submission
```

#### [JOURNAL](#JournalA)<a name="JournalB"></a>

At first, "Accept Date" of the entry is indicated. "Accept Date" is defined as the date when DDBJ have received the acceptable data to assign accession number in principle.  
Even if the entry is updated, "Accept Date" is NOT changed. Then, the information about the address and the affiliation of "Contact Person" is indicated.


```
  JOURNAL   Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
```


| Submitted (30-NOV-2008) to the DDBJ/EMBL/GenBank databases. | Accept date of this entry is 30-NOV-2008 |
| Contact:Hanako Mishima<br>National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,<br>Mishima, Shizuoka 411-8540, Japan | The information about the address and the affiliation of Hanako Mishima. |


**E-mail address, phone & fax nos.**<a name="submitter-info"></a>

- To follow the Japanese law of protecting personal information, DDBJ will delete both phone and fax numbers, and E-mail address from the flat files of the entries submitted to DDBJ.However, if you wish to disclose any of the three items, please contact us with [contact form](/contact-e.html#to-ddbj), specifying the item(s) to be disclosed.
- When you wish to contact to the submitter(s) of an entry of your interest,please contact us with [the inquiry form](/contact-e.html#to-submitters) with reasons briefly;i.e. asking to transfer cloned sequences, etc, then we will forward your messeage to the submitter(s).



Phone and fax numbers and E-mail address are deleted.

```
  JOURNAL   Submitted (30-NOV-2000) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
```

When the submitters wish to keep their contact information disclosed, it 
will be described as,

```
  JOURNAL   Submitted (30-NOV-2000) to the DDBJ/EMBL/GenBank databases.
            Contact:Hanako Mishima
            National Institute of Genetics, DNA Data Bank of Japan; Yata 1111,
            Mishima, Shizuoka 411-8540, Japan
            E-mail :mishima@supernig.nig.ac.jp
            Phone  :81-55-981-6853
            Fax    :81-55-981-6849
```


### [REFERENCE 2](#Reference2A)<a name="Reference2B"></a>

The information of references related to the submitted sequence is indicated on REFERENCE line (other than [REFERENCE 1](#Reference1B)). Since REFERENCE 2 indicates [the publication status of the sequence](/ddbj/submission-e.html#pcite), the reference which does not describe about the submitting sequence is indicated as REFERENCE 3 or after, not as REFERENCE 2.  
  
When DDBJ notices a paper publication with an accession number, DDBJ will update the entry with the accession number, if necessary. During the process of the update, the prepublication paper(s) described in the line(s), REFERENCE 2 and/or later, will be revised without any notice to submitters, if applicable; i.e. When the submitted data, submitters' affiliation, author names, title, and journal name of the prepublication paper, are enough reasonable to be revised.



In the cases of the manuscript in preparation, submitted for publication, in press, or published
: 
```
REFERENCE   2
        AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
        TITLE     Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver
        JOURNAL   Unpublished (2009)
```

: 
| AUTHORS | The (presumptive) author(s) of the reference is/are described. |
| TITLE | The (presumptive) title of the reference is described. |
| JOURNAL | In the cases of the paper published or In Press, the journal name is described. In the case of unpublished manuscript, "Unpublished" is described to follow the standard form. |


In the case of no schedule for publication except the international nucleotide database.
: 
```
REFERENCE   2
        AUTHORS   Mishima,H., Shizuoka,T. and Fuji,I.
        TITLE     Glyceraldehyde-3-phosphate dehydrogenase expressed in human liver
        JOURNAL   Published Only in Database(2009)
```



| AUTHORS | The author(s) of the submission entered by submitter(s) is/are described. |
| TITLE | The title of the submission entered by submitter(s) is described. |
| JOURNAL | "Published Only in Database" is indicated.<br>The parenthetic number is the year when the entry has been firstly publicized. |



### [COMMENT](#CommentA)<a name="CommentB"></a>

The information about an entry that can not be described using FEATURES or the other fields. For instance, if submitter has the other affiliation to [REFERENCE 1](#Reference1B), it can be described on COMMENT line.


```
COMMENT     Human cDNA sequencing project.
```

Structured COMMENT
: Structured COMMENT is a format to describe and to share some datasets undefined in feature/qualifier.  
Using structured COMMENTs, datasets can be shared via flatfiles of INSDC in the community of submitters and users.  
To describe structured COMMENT, the dataset is required to be describe in structured sets of [names of items] and [values of items] on COMMENT line.  
There are some predetermined formats of structured COMMENTs that are required to submit some kinds of sequence data derived from genome projects (including [WGS](/ddbj/wgs-e.html)), transcriptome projects (including [TSA](/ddbj/tsa-e.html)) and so on.

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


: The above example is an additional information, "Genome-Assembly-Data", that is required for genome projects.  
The contents between ##Genome-Assembly-Data-START## and ##Genome-Assembly-Data-END## are delimited item names and their values by " :: ".

: 
| ##Genome-Assembly-Data-START## | The first line of the structured COMMENT defined as "Genome-Assembly-Data". |
| ##Genome-Assembly-Data-END## | The last line of the structured COMMENT defined as "Genome-Assembly-Data". |
| Finishing Goal           :: Finished | The final goal of the genome project is "Finished" level. |
| Current Finishing Status :: High Quality Draft | The current status of the genome project is "High Quality Draft" level. |
| Assembly Method          :: Newbler v. 2.3 | The software to assemble reads of sequences is Newbler and its version is 2.3. |
| Genome Coverage          :: 30x | The sequencing depth of the genome sequences is approximately 30 fold. |
| Sequencing Technology    :: 454 GS Junior; Illumina GA II  | 454 GS Junior; Illumina GA II -- the platforms (sequencers) to determine the genome sequences are "454 GS Junior" and "Illumina GA II". |



For MGA data
: For [MGA Submission](/sub/mga-e.html), the process for obtaining the submitted sequence data e.g.; (methods for preparing sequences from tissues or cells and processing the sequences for submission) is described.

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

### [FEATURES](#FeaturesA)<a name="FeaturesB"></a>

Biological features of a submitted sequence data are described with "Feature" key (the biological nature of the annotated feature), "Location" (the region of the sequence which corresponds to Feature), and "Qualifier" (supplementary information about Feature). In principle, EST or GSS entries are not described with any features except the "source" key.  
FEATURES are indicated on the basis of the information provided by submitter and modified by databanks to describe the appropriate annotation. The rules of feature description agreed with three databanks are explained at [The DDBJ/ENA/GenBank Feature Table Definition](/ddbj/full_index-e.html)in detail.

Feature keys are briefly classified into 3 groups;

- group 1: biological source of the sequence (source)<br>The feature, "source" (group 1) is mandatory for all entries in the international nucleotide database. The qualifiers "/organism" and "/mol_type" are mandatory for source feature.
- group 2: biological function features of the region <br>Feature keys in group 2 fall into families which are in some sense similar in function and which are annotated in a similar manner.A functional family may have a "generic" or miscellaneous key, which can be recognized by the 'misc_' prefix, that can used for instances not covered by the other defined keys of that group.<br>e.g. CDS, rRNA, etc.
- group 3: difference and/or change of the sequence data <br>e.g. variation, conflict, etc.

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
     CDS             86..&gt;450
                     /codon_start=1
                     /gene="GAPD"
                     /product="glyceraldehyde-3-phosphate dehydrogenase"
                     /protein_id="BAA12345.1"
                     /transl_table=1
                     /translation="MAKIKIGINGFGRIGRLVARVALQSDDVELVAVNDPFITTDYMT
                     YMFKYDTVHGQWKHHEVKVKDSKTLLFGEKEVTVFGCRNPKEIPWGETSAEFVVEYTG
                     VFTDKDKAVAQLKGGAKKV"

```


### [source](#FeaturesSourceA)<a name="FeaturesSourceB"></a>

Identifies the biological source of the specified span of the sequence.


| source    1..450 | The region from 1st to 450th base of the sequence is derived from the source described with following qualifiers. |
| /chromosome="1 | The sequence is obtained from chromosome 12. |
| /clone="GT200015" | The clone name which the sequence is obtained. |
| /clone_lib="lambda gt11 human liver cDNA (GeneTech. No.20)" | The clone library name which the sequence is obtained. |
| /map="12p13" |  The sequence is located on 12p13. |
| /db_xref="taxon:9606"  | The sequence is derived from a organism correspond to taxonomy database ID: 9606 (human). |
| /mol_type="mRNA" | The sequence is derived from mRNA. |
| /organism="Homo sapiens" | The sequence is obtained from human. |
| /tissue_type="liver"  | The sequence is obtained from liver. |


### [CONTIG](#ContigA)<a name="ContigB"></a>

The CONTIG line is used for only CON data.
The CONTIG line is used to describe the order of cited sequences and gaps with a format similar to [Description of Location](/ddbj/location-e.html) for features.


```
CONTIG      join(BZZZ01123456.1:1..1345,gap(1500),BZZZ01123457.1:1..1456,
            gap(unk100),complement(BZZZ01123458.1:1..1230))
```

| join([location1],[location2], ... [location3]) | the indicated elements should be joined (placed end-to-end) to form one contiguous sequence |
| BZZZ01123456.1:1..1345 | the sequence cited from 1st to 1345th nucleotides of WGS entry, BZZZ0112346. |
| gap(1500) | estimated length gap, replaced by 1500 "n"s |
| BZZZ01123457.1:1..14 | the sequence cited from 1st to 1456th nucleotides of WGS entry, BZZZ0112347. |
| gap(unk100) | unknown length gap, replaced by 100 "n"s |
| complement(BZZZ01123458.1:1..1230) | complementary strand of the sequence cited from 1st to 1230th nucleotides of WGS entry, BZZZ0112348. |

### [//](#EndA)<a name="EndB"></a>

"//" is the terminal symbol of the entry.