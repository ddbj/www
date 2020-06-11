---
layout: indexed_content
title: getentry
category: services
---

## About getentry

  - getentry is the DDBJ flat file search system, by accession numbers.
  - getentry is, as well as a simple web form, available by WebAPI
    program which calls up the data directly.
  - WebAPI also provides a [gethistory](#ge_program) (revision history
    search) function.
  - Keyword search of DDBJ flat file is now avialable in
    [ARSA](http://ddbj.nig.ac.jp/arsa)
  - DRA data retrieval is unavilable in getentry, please refer [DRA
    Search](http://ddbj.nig.ac.jp/DRASearch)

<div class="section chapter">

## Search from Web Browser

URL : <http://getentry.ddbj.nig.ac.jp/top-e.html>

<div class="section section">

### Default value

<div class="main_table format">

|               |                                                               |
| ------------- | ------------------------------------------------------------- |
| ID            | Accession Number                                              |
| Database      | [DNA database:DDBJ/EMBL/GenBank INSD.](http://www.insdc.org/) |
| Output format | [flatfile（DDBJ）](/ddbj/flat-file-e.html)                      |
| Result        | html                                                          |
| Limit         | 10                                                            |

</div>

</div>

<div class="section section">

### ID

Input the Accession Number(s). Multiple number search, range search, and
version seach are available.

<div class="main_table format">

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr class="odd">
<td>version search</td>
<td><ul>
<li>If you do not have a version number, you will find the latest version.</li>
<li>If you search with a version number, you will find the version specified.</li>
</ul></td>
<td>AB669632.1<br />
AB669632.2</td>
</tr>
<tr class="even">
<td>multiple number search</td>
<td><ul>
<li>You can specify more than one accession numbers, separating with comma (",").</li>
<li>When more than one accession numbers being separated by "," are specified, output order is the same with the input order.</li>
<li>Range search can be done by connecting the two accession number with hyphen ("-") .</li>
<li>Version search is available</li>
</ul></td>
<td>AB669632.1,AB669632.2,AB669633.1,AB669633.2<br />
AK377101 - AK377200,AK377210,AK377211</td>
</tr>
<tr class="odd">
<td>range search</td>
<td><ul>
<li>Range search can accept the truncation both in the low and high numbers of the range.</li>
<li>By separating with comma (", "), more than one range search can be specified.</li>
<li>Version search is ignored.</li>
</ul></td>
<td>FY782000-FY7830<br />
AK377101 - AK377200,AK377211- AK388100</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="section section">

### Database and Output format

Select the database. The output format should be selected from either
"database specific format" or FASTA.

#### DNA database

<div class="main_table format">

Database

|                   |                                                                            |
| ----------------- | -------------------------------------------------------------------------- |
| DDBJ/EMBL/GenBank | [International Nucleotide Sequence Databases（INSD）](http://www.insdc.org/) |
| MGA               | [Mass sequence for Genome Annotation(MGA)](/ddbj/mga-e.html)               |

</div>

DDBJ/EMBL/GenBank includes the following databases.

  - DDBJ periodical release
  - daily updates
  - accession numbers consisting of "4 letters + 8 digits"  
    （[WGS(Whole Genome Shotgun)](/ddbj/wgs-e.html), some
    [TSA(Transcriptome Shotgun Assembly)](/ddbj/tsa-e.html)）
  - [TPA(Third Party Data)](/ddbj/tpa-e.html)

"4 letters + 8 digits" accession numbers(WGS and TSA) and TPA are not
contained in the DDBJ releases.

Please refrer the [Latest Release Information](/stats/relinfo-e.html),
for the current status of searchable databases and related information.

<div class="main_table format">

Output format

|                          |                                                                        |
| ------------------------ | ---------------------------------------------------------------------- |
| flatfile(DDBJ)           | [DDBJ flat file format](/ddbj/flat-file-e.html)                        |
| Total nt seq FASTA       | [nucleotide total sequence in FASTA format](#nfasta)                   |
| CDS Amino acid seq FASTA | [amino acid translated sequence of CDS region in FASTA format](#trans) |
| CDS nt seq FASTA         | [nucleotide sequence of CDS region in FASTA](#cdsfasta)                |
| INSD-XML\_v1.4           | [INSD-XML\_v1.4 format](#xml)                                          |

</div>

These 5 format types are selectable only after specification of
"DDBJ/EMBL/GenBank".

When the MGA is selected as the target database, only "flatfile" can be
specified.

#### Protein database

<div class="main_table format">

Database

|                                     |                                                                                              |
| ----------------------------------- | -------------------------------------------------------------------------------------------- |
| [UniProt](https://www.uniprot.org/) | Amino acid database (UniProt/Swiss-Prot and UniProt/TrEMBL)                                  |
| [PDB](https://www.rcsb.org)         | 3D structure database of protein                                                             |
| [DAD](/stats/relnote.html)          | translated sequences database extracting from DDBJ                                           |
| Patent                              | Amino acid data from [JPO](https://www.jpo.go.jp/e/index.html) and [KIPO](//www.kipo.go.kr). |

</div>

Please refrer [Latest Release Information](/stats/relinfo-e.html), for
the current status of searchable databases and related information.

#### Output Format

<div class="main_table format">

default

</div>

</div>

</div>

Database specific format

FASTA

[Amino acid seq FASTA](#trans)

Amino acid sequence in FASTA format

available in UniProt, DAD, Patent

[Nucleotide seq FASTA (for DAD)](#dadfasta)

Nucleotide sequence in FASTA format

DAD limited

[seqres](#seqres)

PDB specific amino acid sequence FASTA format

PDB limited

Output format of Protein database search differs depending on the
selected target databases.

<div class="section section">

### Filetype of the Result

<div class="main_table format">

|         |                                              |
| ------- | -------------------------------------------- |
| default | html                                         |
| html    | HTML (with link to ACCESSION, ORGANISM, etc) |
| text    | text                                         |
| gz      | gzip compressed                              |

</div>

The name of the gzip files corresponding to the specified formats are as
follows.

<div class="news_post_container glossary">

|                     |                  |
| ------------------- | ---------------- |
| \[DNA\]flatfile     | flatfile.txt.gz  |
| \[DNA\]xml          | insd.xml.gz      |
| \[DNA\]fasta        | fasta\_na.txt.gz |
| \[DNA\]trans        | cds\_aa.txt.gz   |
| \[DNA\]cds          | cds\_na.txt.gz   |
| \[Protein\]flatfile | flatfile.txt.gz  |
| \[Protein\]fasta    | fasta\_aa.txt.gz |
| \[Protein\]cds      | cds\_aa.txt.gz   |

</div>

</div>

<div class="section section">

### Limit（upper limit of the data acquisition）

<div class="main_table format">

|                    |                             |
| ------------------ | --------------------------- |
| default            | 10 entries                  |
| specify the number | specified number of entries |
| 0≥                 | no limit                    |

</div>

</div>

<div class="section chapter">

## Search by WebAPI

getentry is available from WebAPI program, as well as a simple web form,
which calls up the data directly.

<div class="section section">

### Program

WebAPI of getentry consists of two following programs.

<div class="main_table format">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>getentry</td>
<td>Get the flat file of the specified accession number (ID of entries in the database)</td>
</tr>
<tr class="even">
<td>gethistory</td>
<td>Get the revision history of the specified accession number (ID of entries in the database)<br />
Revision history of the amino acid sequence derived from the Patent Office has not been taken so far.</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="section section">

### How to Specify the Parameter

There are the following 2 methods.

<div class="main_table format">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>GET method</td>
<td>http://getentry.ddbj.nig.ac.jp/getentry?database=<span class="bold italic">database name</span>&amp;accession_number=<span class="bold italic">accession number</span>&amp;<span class="bold italic">additional parameters (optional)</span></td>
</tr>
<tr class="even">
<td>smart URL</td>
<td>http://getentry.ddbj.nig.ac.jp/getentry/<span class="bold italic">database name</span>/<span class="bold italic">accession number</span><br />
http://getentry.ddbj.nig.ac.jp/getentry/<span class="bold italic">database name</span>/<span class="bold italic">accession number</span>/?<span class="bold italic">additional parameters (optional)</span><br />
http://getentry.ddbj.nig.ac.jp/getentry/<span class="bold italic">database name</span>/<span class="bold italic">accession number</span>/<span class="bold italic">revision ID </span>/?<span class="bold italic">additional parameters (optional)</span></td>
</tr>
</tbody>
</table>

</div>

example

  - AB601234 by Get method  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=ddbj&accession_number=AB601234>

  - BD500001(amino acid sequence data originated from Patent Office) by
    smart URL  
    <http://getentry.ddbj.nig.ac.jp/getentry/patent_aa/BD500001>

</div>

<div class="section section">

### Specifiable Parameters in getentry

#### accession 番号<span class="red">(mandatory)</span><span class="normal">：Specify the accession number.</span>

<div class="main_table format">

version number

</div>

</div>

</div>

  - If you do not have a version number, you will find the latest
    version.
  - If you search with a version number, you will find the version
    specified.

multiple accession search

  - You can specify more than one accession number, separated by ",".
  - When more than one accession numbers being separated by "," are
    specified, output order is the same with the input order.
  - Range search can be done by connecting the two accession number with
    "-" .
  - Version number is avilable.

range search

  - The range search can accept the truncation in the low and high
    numbers of the range .
  - By separating with ", ", more than one range search can be
    specified.
  - Version number is ignored.

<div class="attention no_color">

In case of not existing the target result and/or can not be displayed in
the screen, no result are displayed in the screen, nor counted in the
limit number.

Please change the number of the entries viewed in the screen if
necessay. The default is 10.

It may take a long time to display a large number of results.According
to the performance of the browser, all of that might not be displayed.

</div>

example (upper:Get method / lower: smart URL)

  - AB055395  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB055395>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/AB055395>

  - multiple accessions（multiple items, view 100 results）  
    [http://getentry.ddbj.nig.ac.jp/getentry?database=na\&accession\_number=AK377101
    - AK377200,AK377210,AK377211-
    AK388100\&limit=100](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AK377101%20-%20AK377200,AK377210,AK377211-%20AK388100&limit=100)
    [http://getentry.ddbj.nig.ac.jp/getentry/na/AK377101 -
    AK377200,AK377210,AK377211-
    AK388100?limit=100](http://getentry.ddbj.nig.ac.jp/getentry/na/AK377101%20-%20AK377200,AK377210,AK377211-%20AK388100?limit=100)

  - multiple accessions（range search, view 1000 results）  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=FY782000-FY783000&limit=1000>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/FY782000-FYFY783000?limit=1000>

  - multiple accessions with version numbers：  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB669632.1,AB669632.2,AB669633.1,AB669633.2,AB669634.1>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/AB669632.1,AB669632.2,AB669633.1,AB66963.2,AB669634.1>

  - range search with version numbers：version search is ignored(latest
    version is searched)
    <http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB669632.1-AB6696356.1>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/AB669632.1-AB6696356.1>

#### database<span class="red">(optional)</span><span class="normal">：Specify the database for searching.</span>

<div class="main_table format">

DNA

</div>

na

DDBJ/EMBL/GenBank

[International Nucleotide Sequence
Databases（INSD）](http://www.insdc.org/)

mga

MGA

[Mass sequence for Genome Annotation(MGA)](/ddbj/mga-e.html)

Protein

aa

DAD, Patent, UniProt, PDB

search these 4 dbs in this order

uniprot

[UniProt](https://www.uniprot.org/)

Amino acid database (UniProt/Swiss-Prot and UniProt/TrEMBL)

pdb

[PDB](https://www.rcsb.org/)

3D structure database of protein

dad

[DAD](/stats/relnote.html)

translated sequences database extracting from DDBJ

patent\_aa

Patent

Amino acid data from [JPO](https://www.jpo.go.jp/e/index.html) and
[KIPO](//www.kipo.go.kr)

<div class="attention no_color">

Omitting the database specification is processed as t

DDBJ/EMBL/GenBank includes the following databases.

  - DDBJ periodical release
  - DDBJ daily updates
  - accession numbers consisting of "4 letters + 8 digits"  
    （[WGS(Whole Genome Shotgun)](/ddbj/wgs-e.html), some
    [TSA(Transcriptome Shotgun Assembly)](/ddbj/tsa-e.html)）
  - [TPA(Third Party Data)](/ddbj/tpa-e.html)

4 letters + 8 digits" accession numbers(WGS and TSA) and TPA are not
contained in the DDBJ releases.

Please refrer [Latest Release Information](/stats/relinfo-e.html) , for
the current status of searchable databases and related information.

</div>

example <span class="normal"> (upper:Get method / lower: smart
URL)</span>

  - TSA( IAAA01000001) search  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=IAAA01000001>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/IAAA01000001>

  - WGS(BAET01000001) search  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=BAET01000001>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/BAET01000001>

  - AB628096, not selecting the database  
    <http://getentry.ddbj.nig.ac.jp/getentry?accession_number=AB628096>

  - MGA( AAAAA0000001)search  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=mga&accession_number=AAAAA0000001>  
    <http://getentry.ddbj.nig.ac.jp/getentry/mga/AAAAA0000001>

  - Patent amino acid data search  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=patent_aa&accession_number=DI500001>  
    <http://getentry.ddbj.nig.ac.jp/getentry/patent_aa/DI500001>  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=aa&accession_number=BD500001>  
    <http://getentry.ddbj.nig.ac.jp/getentry/aa/BD500001>

  - DAD search  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=dad&accession_number=AB000714-1>  
    <http://getentry.ddbj.nig.ac.jp/getentry/dad/AB000714-1>

  - UniProt search  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=aa&accession_number=P06213>  
    <http://getentry.ddbj.nig.ac.jp/getentry/aa/P06213>  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=uniprot&accession_number=P06213>  
    <http://getentry.ddbj.nig.ac.jp/getentry/uniprot/P06213>

#### revision<span class="red">(optional)</span><span class="normal">： Search the revised entry at the specified time.</span>

<div class="main_table format">

|         |                             |
| ------- | --------------------------- |
| general | yyyy-MM-dd hh:mm:ss         |
| release | yyyy-MM-dd hh:mm:ss release |

</div>

<div class="attention no_color">

When both the version number and revision are specified, revision takes
priority.

</div>

example <span class="normal"> (upper:Get method / lower: smart
URL)</span>

  - AB479935 as of 2011-05-31 23:07:30  
    [http://getentry.ddbj.nig.ac.jp/getentry?database=na\&accession\_number=AB479935\&revision=2011-05-31 23:07:30](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB479935&revision=2011-05-31%2023:07:30)  
    [http://getentry.ddbj.nig.ac.jp/getentry/na/AB479935?revision=2011-05-31 23:07:30](http://getentry.ddbj.nig.ac.jp/getentry/na/AB479935?revision=2011-05-31%2023:07:30)

  - Update history is avilable using [gethistory](#gh_accession).  
    <http://getentry.ddbj.nig.ac.jp/gethistory?database=na&accession_number=AB479935>  
    <http://getentry.ddbj.nig.ac.jp/gethistory/na/AB479935>

#### format<span class="red">(optional)</span>

<div class="main_table format">

default

</div>

flatfile

flatfile

[DDBJ flat file format](/ddbj/flat-file-e.html)

xml

[INSDSeq-XML
version 1.4](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/ddbj/xml/insdxml/v1.4/)

fasta

\[DNA\]Total nt seq FASTA

\[Protein\]Amino acid seq FASTA

trans

\[DNA\]CDS amino acid seq FASTA

cds

\[DNA\] CDS nt seq FASTA

\[DAD\] Nucleotide seq FASTA (for DAD)

seqres

\[Protein\] PDB amino acid

Available output formats by specified database are as follows.

<div class="main_table format">

DNA database

</div>

DDBJ / EMBL / GenBank  
MGA

flatfile(DDBJ),  
Total nt seq FASTA,  
CDS amino acid seq FASTA,  
CDS nt seq FASTA,  
INSD-XML\_v1.4

Protein database

UniProt

default, Amino acid seq FASTA

PDB

default, seqres

DAD

default, Amino acid seq FASTA, nt seq FASTA

Patent

default, Amino acid seq FASTA

example <span class="normal"> (upper:Get method / lower: smart
URL)</span>

  - AB628096 in the flatfile format  
    <http://getentry.ddbj.nig.ac.jp/getentry?accession_number=AB628096>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096>

<!-- end list -->

``` code
LOCUS       AB628096                 390 bp    RNA     linear   VRL 24-FEB-2012
DEFINITION  Human rhinovirus C gene for polyprotein, partial cds, strain:
            HRV/Yamaguchi/2010/89.
ACCESSION   AB628096
VERSION     AB628096.1
KEYWORDS    .
SOURCE      Human rhinovirus C
  ORGANISM  Human rhinovirus C
            Viruses; ssRNA positive-strand viruses, no DNA stage;
            Picornavirales; Picornaviridae; Enterovirus.
REFERENCE   1  (bases 1 to 390)
  AUTHORS   Kobayashi,M., Arakawa,M., Okamoto,R., Tsukagoshi,H., Ryo,A.,
            Mizuta,K., Hasegawa,S., Hirano,R., Wakiguchi,H., Kudo,K.,
            Tanaka,R., Morita,Y., Noda,M., Kozawa,K., Ichiyama,T., Shirabe,K.
            and Kimura,H.
  TITLE     Direct Submission
  JOURNAL   Submitted (06-MAY-2011) to the DDBJ/EMBL/GenBank databases.
            Contact:Miho Kobayashi
            Gunma Prefectural Institute of Public Health and Environmental
            Sciences; Kamiokimachi 378, Maebashi, Gunma 371-0052, Japan
REFERENCE   2  
  AUTHORS   Arakawa,M., Okamoto-Nakagawa,R., Toda,S., Tsukagoshi,H.,
            Kobayashi,M., Ryo,A., Mizuta,K., Hasegawa,S., Hirano,R.,
            Wakiguchi,H., Kudo,K., Tanaka,R., Morita,Y., Noda,M., Kozawa,K.,
            Ichiyama,T., Shirabe,K. and Kimura,H.
  TITLE     Molecular epidemiological study of human rhinovirus species A, B
            and C from patients with acute respiratory illnesses in Japan
  JOURNAL   J. Med. Microbiol. 61, 410-419 (2012)
  REMARK    DOI:10.1099/jmm.0.035006-0
COMMENT     
FEATURES             Location/Qualifiers
     source          1..390
                     /collection_date="14-Jan-2010"
                     /country="Japan:Yamaguchi"
                     /db_xref="taxon:463676"
                     /host="Homo sapiens"
                     /isolation_source="Nasopharyngeal swab"
                     /mol_type="genomic RNA"
                     /organism="Human rhinovirus C"
                     /strain="HRV/Yamaguchi/2010/89"
     CDS             1..>390
                     /codon_start=1
                     /product="polyprotein"
                     /protein_id="BAK22546.1"
                     /transl_table=1
                     /translation="MGAQVSKQNVGSHENSVSATGGSVIKYFNINYYKDSASSGLTKQ
                     DFSQDPSKFTQPLAEALTNPALMSPTVEACGMSDRLKQITIGNSTITTQDTLNSILAY
                     GEWPKYLSDLDASSVDKPTHPETSSDRF"
BASE COUNT          124 a           95 c           77 g           94 t
ORIGIN      
        1 atgggcgcac aggtgagcaa gcaaaatgtc ggctcgcacg aaaattcagt ctcagccacg
       61 ggtggatccg tgattaagta tttcaacatc aattactaca aggattctgc tagctctggc
      121 ttgactaaac aagatttttc ccaagaccca tcgaaattca cacaacctct agcagaagca
      181 cttacaaatc cagctttaat gtcaccaact gttgaagcat gtgggatgtc cgataggctt
      241 aaacaaatta ctatcgggaa ttccactata acaacacaag atacactaaa ctctatactg
      301 gcatatgggg agtggcccaa atacttgagt gacctggacg cttcctcagt ggataagcct
      361 acccacccag agacatcatc tgatagattt
//

      
```

  - Amino acid patent data in Amino acid FASTA format  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=patent_aa&accession_number=BD500001&format=fasta>  
    <http://getentry.ddbj.nig.ac.jp/getentry/patent_aa/BD500001?format=fasta>

<!-- end list -->

``` code
>BD500001|JP 2000316586-A/3: Recombinant microorganism expressing small rubber particle-bound protein  (SRPP).

MAEEVEEERLKYLDFVRAAGVYAVDSFSTLYLYAKDISGPLKPGVDTIENVVKTVVTPVY
YIPLEAVKFVDKTVDVSVTSLDGVVPPVIKQVSAQTYSVAQDAPRIVLDVASSVFNTGVQ
EGAKALYANLEPKAEQYAVITWRALNKLPLVPQVANVVVPTAVYFSEKYNDVVRGTTEQG
YRVSSYLPLLPTEKITKVFGDEAS
 
      
```

  - AB601234 in nucleotide fasta format  
    <http://getentry.ddbj.nig.ac.jp/getentry?accession_number=AB601234&format=fasta>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/AB601234?format=fasta>

<!-- end list -->

``` code
>AB601234|AB601234.1 Ainsliaea faurieana chs gene for chalcone synthase, partial cds, haplotype: 2.

ggaccttgctaaaaacaataagggctcacatgtccttgttgtctgctctgagatcattgc
ttccatttttcgtagaccagataagaaccacattgtcagccaagctctctttggggatgg
agcttctgcgctcattgtgggttcagacccagacttctccaaggaacatccattattcaa
gattgtgtctacaactcagacaatcttacagaacactgaaagggcgatgaacttacaatt
gagggaagaagggttgaccattcacctgcacagggatgtaccccagatgacatcaaagaa
tatagaggaggcattagtgcacatatttttgccactgggcataagagactggaactcg
 
      
```

  - AB601234 in xml format  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AB601234&format=xml>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/AB601234/?format=xml>

<!-- end list -->

``` code
<?xml version="1.0"?>

<!DOCTYPE INSDSet SYSTEM "INSD_INSDSeq.dtd">
-<INSDSet>
 -<INSDSeq> <INSDSeq_locus>AB601234</INSDSeq_locus>
  <INSDSeq_length>358</INSDSeq_length>
   <INSDSeq_moltype>DNA</INSDSeq_moltype>
    <INSDSeq_topology>linear</INSDSeq_topology>
     <INSDSeq_division>PLN</INSDSeq_division>
      <INSDSeq_update-date>18-MAY-2011</INSDSeq_update-date>
       <INSDSeq_definition>Ainsliaea faurieana chs gene for chalcone ......
         <INSDSeq_primary-accession>AB601234</INSDSeq_primary-accession>
         <INSDSeq_accession-version>AB601234.1</INSDSeq_accession-version>
          <INSDSeq_source>Ainsliaea faurieana</INSDSeq_source>
           <INSDSeq_organism>Ainsliaea faurieana</INSDSeq_organism>
            <INSDSeq_taxonomy>Eukaryota; Viridiplantae; Streptophyta; .......
             -<INSDSeq_references>
              -<INSDReference>
              <INSDReference_reference>1</INSDReference_reference>
               <INSDReference_position>1..358</INSDReference_position>
                -<INSDReference_authors> <INSDAuthor>Mitsui,Y.</INSDAuthor>
                 <INSDAuthor>Setoguchi,H.</INSDAuthor> </INSDReference_authors>
                  <INSDReference_title>Direct Submission</INSDReference_title>
                   <INSDReference_journal>Submitted (17-NOV-2010) to the DDBJ/.....
                    -<INSDReference>

                                   -------   以下略    -----
      
```

  - HE963104 in CDS nucleotide fasta format  
    [http://getentry.ddbj.nig.ac.jp/getentry?database=na\&accession\_number=
    HE963104\&format=cds](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=%20HE963104&format=cds)  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/HE963104/?format=cds>

<!-- end list -->

``` code
 >HE963104-1|CCJ27876.1|111|<1..111|Streptococcus thermophilus|predicted.....
gggttgtcctgtgatgagggaatgctggcagtaggaggacttggtgctgtaggtggcccg
tggggagctgtcggtggggtgttagtaggtgcagccttatactgtttctaa

>HE963104-2|CCJ27877.1|201|130..330|Streptococcus thermophilus|hypothetical.....
atgaataataaacaacttgaaagatttaaaaaactggatacaaatgcattgtctaatgta
agtggtcaaggctatggtgctcaatgtgttattggtactgccggaatgacgattgtcggt
gcagctttctttggcatcgcaggtgcaggagctggatttgcaggcggtagcacagcattt
tgttatggtacagctgaataa

>HE963104-3|CCJ27878.1|219|686..>904|Streptococcus thermophilus|.....
atggcaactcaaacaattgaaaactttaacacccttaacctcgaaacacttgctagtgtt
gaaggaggtggatgtggttggagaggcgcaggtggagcgactgttcaaggagctatcggg
ggagcgtttggaggtaatgtagttttaccagttgtaggctcagttcctggttatctagct
ggtggtgttctaggtggtgcaggtggtactgttgcctat
 

      
```

  - JQ677812 in CDS Amino acid translated FASTA format  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=JQ677812&format=trans>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/JQ677812/?format=trans>

<!-- end list -->

``` code
>JQ677812-1|AFN26948.1|74|Triticum aestivum (bread wheat) HKT1;5
HLAGYSLMLVYLSVVSGARAVLTGKRISLHTFSVFTVVSTFANCGFVPNNEAMIAFRSFP
GLLLLVMPHVLLGI
      
```

  - DAD (AB000714-1) in nucleotide sequence FASTA format  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=dad&accession_number=AB000714-1&format=cds>  
    <http://getentry.ddbj.nig.ac.jp/getentry/dad/AB000714-1/?format=cds>

<!-- end list -->

``` code
>AB000714-1|BAA22986.1|663|199..861|Homo sapiens|RVP1
atgtccatgggcctggagatcacgggcaccgcgctggccgtgctgggctggctgggcacc
atcgtgtgctgcgcgttgcccatgtggcgcgtgtcggccttcatcggcagcaacatcatc
acgtcgcagaacatctgggagggcctgtggatgaactgcgtggtgcagagcaccggccag
atgcagtgcaaggtgtacgactcgctgctggcactgccacaggaccttcaggcggcccgc
gccctcatcgtggtggccatcctgctggccgccttcgggctgctagtggcgctggtgggc
gcccagtgcaccaactgcgtgcaggacgacacggccaaggccaagatcaccatcgtggca
ggcgtgctgttccttctcgccgccctgctcaccctcgtgccggtgtcctggtcggccaac
accattatccgggacttctacaaccccgtggtgcccgaggcgcagaagcgcgagatgggc
gcgggcctgtacgtgggctgggcggccgcggcgctgcagctgctggggggcgcgctgctc
tgctgctcgtgtcccccacgcgagaagaagtacacggccaccaaggtcgtctactccgcg
ccgcgctccaccggcccgggagccagcctgggcacaggctacgaccgcaaggactacgtc
taa
      
```

  - View the PDBs in the amino acid FASTA  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=pdb&accession_number=0-Z&format=seqres&limit=5>  
    <http://getentry.ddbj.nig.ac.jp/getentry/pdb/0-Z/?format=seqres&limit=5>

<!-- end list -->

``` code
 >100d_A mol:na length:10  DNA/RNA (5'-R(*CP*)-D(*CP*GP*GP*CP*GP*CP*CP*G
CCGGCGCCGG
>100d_B mol:na length:10  DNA/RNA (5'-R(*CP*)-D(*CP*GP*GP*CP*GP*CP*CP*G
CCGGCGCCGG
>101d_A mol:na length:12  DNA (5'-D(*CP*GP*CP*GP*AP*AP*TP*TP*(CBR)P*GP*
CGCGAATTCGCG
>101d_B mol:na length:12  DNA (5'-D(*CP*GP*CP*GP*AP*AP*TP*TP*(CBR)P*GP*
CGCGAATTCGCG
>101m_A mol:protein length:154  MYOGLOBIN
----（以下略）----
      
```

#### filetype<span class="red">(optional)</span><span class="normal">：Specify the filetype for the result</span>

<div class="main_table format">

|         |                                         |
| ------- | --------------------------------------- |
| default | text                                    |
| html    | HTML（links to ACCESSION, ORGANISM, etc） |
| text    | TEXT                                    |
| gz      | gz compressed                           |

</div>

The name of the gzip files corresponding to the specified formats are as
follows.

<div class="news_post_container glossary">

|                     |                  |
| ------------------- | ---------------- |
| \[DNA\]flatfile     | flatfile.txt.gz  |
| \[DNA\]xml          | insd.xml.gz      |
| \[DNA\]fasta        | fasta\_na.txt.gz |
| \[DNA\]trans        | cds\_aa.txt.gz   |
| \[DNA\]cds          | cds\_na.txt.gz   |
| \[Protein\]flatfile | flatfile.txt.gz  |
| \[Protein\]fasta    | fasta\_aa.txt.gz |
| \[Protein\]cds      | cds\_aa.txt.gz   |

</div>

example <span class="normal"> (upper:Get method / lower: smart
URL)</span>

  - download gz of AK377185-AK378194(1000 entries)  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AK377185-AK378194&filetype=gz&limit=1000>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/AK377185-AK378194?filetype=gz&limit=1000>

Following is shown on the display

![](/images/help/getentry-gz-e.gif "getentry-gz")

  - FW383979 in html  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=FW383979&filetype=html>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/AB601234/?filetype=html>

<!-- end list -->

``` code
LOCUS       FW383979                2675 bp    DNA     linear   PAT 14-OCT-2010
DEFINITION  JP 2006521812-A/1: GENETIC POLYMORPHISMS ASSOCIATED WITH RHEUMATOID
            ARTHRITIS, METHODS OF DETECTION AND USES THEREOF.
ACCESSION   FW383979
VERSION     FW383979.1
KEYWORDS    JP 2006521812-A/1.
SOURCE      Homo sapiens (human)
  ORGANISM  Homo sapiens
            Eukaryota; Metazoa; Chordata; Craniata; Vertebrata; Euteleostomi;
            Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini;
            Catarrhini; Hominidae; Homo.
REFERENCE   1  (bases 1 to 2675)
  AUTHORS   Alexander,H.C., Bigobikku,A.B. and Kagiru,M.
  TITLE     GENETIC POLYMORPHISMS ASSOCIATED WITH RHEUMATOID
            ARTHRITIS, METHODS 
            OF DETECTION AND USES THEREOF 
  JOURNAL   Patent: JP 2006521812-A 1 28-Sep-2006;
            APLERA CORPORATION
COMMENT     OS   Homo sapiens
            PN   JP 2006521812-A/1
            PD   28-Sep-2006
                               
 
      
```

#### show\_suppressed<span class="red">(optional)</span><span class="normal">：To display the suppressed data.</span>

<div class="main_table format">

|       |                                 |
| ----- | ------------------------------- |
| true  | display the suppressed data.    |
| false | NOT display the suppressed data |

</div>

example <span class="normal"> (upper:Get method / lower: smart
URL)</span>

  - HE602933 (suppressed)  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=HE602933&show_suppressed=true>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/HE602933?show_suppressed=true>

#### limit<span class="red">(optional)</span><span class="normal">： Sets an upper limit of the data acquisition</span>

<div class="main_table format">

|                    |                             |
| ------------------ | --------------------------- |
| default            | 10 entries                  |
| specify the number | specified number of entries |
| 0                  | no limit                    |

</div>

example <span class="normal"> (upper:Get method / lower: smart
URL)</span>

  - view all results of FY736910 - FY762881(25,972 entries)  
    [http://getentry.ddbj.nig.ac.jp/getentry?database=na\&accession\_number=FY736910
    -
    FY762881\&limit=0](http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=FY736910%20-%20FY762881&limit=0)  
    [http://getentry.ddbj.nig.ac.jp/getentry/na/FY736910 -
    FY762881?limit=0](http://getentry.ddbj.nig.ac.jp/getentry/na/FY736910%20-%20FY762881?limit=0)

#### trace<span class="red">(optional)</span><span class="normal">：When Secondary Accession numberis specified, the result transfers to that of Primary Accession number</span>

<div class="main_table format">

|       |                                    |
| ----- | ---------------------------------- |
| true  | display Primary Accession number   |
| false | display Secondary Accession number |

</div>

example <span class="normal"> (upper:Get method / lower: smart
URL)</span>

  - show the primary of AB233943(primary)-AF530906(secondary)  
    <http://getentry.ddbj.nig.ac.jp/getentry?database=na&accession_number=AF530906&format=flatfile&trace=true>  
    <http://getentry.ddbj.nig.ac.jp/getentry/na/AF530906/?format=flatfile&trace=true>

<div class="section section">

### pecifiable parameters in gethistory

#### accession number<span class="red">(mandatory)</span><span class="normal">：Specify the accession number for searching.Specification method is the same as [getentry](#ge_accession) </span>

<div class="attention no_color">

History of the amino acid sequence derived from the Patent Office is not
available.

</div>

example <span class="normal"> (upper:Get method / lower: smart
URL)</span>

  - history search of AB628096  
    <http://getentry.ddbj.nig.ac.jp/gethistory?database=na&accession_number=AB628096>  
    <http://getentry.ddbj.nig.ac.jp/gethistory/na/AB628096>

<!-- end list -->

``` code
AB628096
1 2012-05-25 12:00:00 release 2012-05-25 12:00:00 release live
1 2012-02-24 07:02:55         2012-02-24 07:02:55         live
1 2011-11-25 11:27:22 release 2011-11-25 11:27:22 release live
1 2011-10-22 23:01:47         2011-10-22 23:01:47         live
1 2011-08-26 10:33:50 release 2011-08-26 10:33:50 release live
1 2011-05-27 12:38:45 release 2011-05-27 12:38:45 release live
1 2011-05-11 23:09:49         2011-05-11 23:09:49         live
      
```

#### database<span class="red">(optional)</span><span class="normal">：Specify the database for searching.</span>

<div class="main_table format">

|         |    |
| ------- | -- |
| default | na |
| DNA     | na |

</div>

<div class="attention no_color">

When the specified database does not correspond to gethistory function,
an empty result is returned.

</div>

example <span class="normal"> (upper:Get method / lower: smart
URL)</span>

  - history search of WGS( BAET01000001)  
    <http://getentry.ddbj.nig.ac.jp/gethistory?database=na&accession_number=BAET01000001>  
    <http://getentry.ddbj.nig.ac.jp/gethistory/na/BAET01000001>

<!-- end list -->

``` code
BAET01000001   BAET01000001 
1 2015-09-15 16:20:47 2015-09-15 16:20:47 live   
1 2014-06-28 09:14:29 2014-06-28 09:14:29 live   
1 2012-06-07 07:05:36 2012-06-07 07:05:36 live   
1 2012-06-01 07:05:51 2012-06-01 07:05:51 live   
1 2012-03-10 07:10:00 2012-03-10 07:10:00 live   
1 2012-03-10 07:03:37 2012-03-10 07:03:37 live   
1 2012-02-21 07:03:15 2012-02-21 07:03:15 live   
      
```

#### filetype<span class="red">(optional)</span><span class="normal">：Specify the filetype for the result.</span>

<div class="main_table format">

|         |      |
| ------- | ---- |
| default | text |
| html    | HTML |
| text    | TEXT |

</div>

example <span class="normal"> (upper:Get method / lower: smart
URL)</span>

  - display the result of AB628096 history search in html format  
    <http://getentry.ddbj.nig.ac.jp/gethistory?database=na&accession_number=AB628096&filetype=html>  
    <http://getentry.ddbj.nig.ac.jp/gethistory/na/AB628096/?filetype=html>

<div class="news_post_container glossary">

accession

</div>

</div>

version

revision

change

state

AB628096

1

[2015-05-29 18:00:00
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2015-05-29+18%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2015-05-29 18:00:00 release

live

[2015-02-27 14:00:00
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2015-02-27+14%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2015-02-27 14:00:00 release

live

[2014-11-25 13:00:00
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2014-11-25+13%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2014-11-25 13:00:00 release

live

[2014-08-29 21:00:00
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2014-08-29+21%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2014-08-29 21:00:00 release

live

[2014-05-30 12:00:00
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2014-05-30+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2014-05-30 12:00:00 release

live

[2014-02-21 12:00:00
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2014-02-21+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2014-02-21 12:00:00 release

live

[2013-11-29 12:00:00
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2013-11-29+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2013-11-29 12:00:00 release

live

[2013-08-30 07:00:00
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2013-08-30+07%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2013-08-30 07:00:00 release

live

[2013-05-24 12:00:00
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2013-05-24+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2013-05-24 12:00:00 release

live

[2013-02-22 12:00:00
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2013-02-22+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2013-02-22 12:00:00 release

live

[2012-11-22 15:00:00
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2012-11-22+15%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2012-11-22 15:00:00 release

live

[2012-08-24 12:00:00
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2012-08-24+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2012-08-24 12:00:00 release

live

[2012-05-25 12:00:00
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2012-05-25+12%3A00%3A00+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2012-05-25 12:00:00 release

live

[2012-02-24 07:17:46](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2012-02-24+07%3A17%3A46/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2012-02-24 07:17:46

live

[2012-02-24 07:02:55](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2012-02-24+07%3A02%3A55/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2012-02-24 07:02:55

live

[2011-11-25 11:27:22
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2011-11-25+11%3A27%3A22+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2011-11-25 11:27:22 release

live

[2011-10-22 23:01:47](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2011-10-22+23%3A01%3A47/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2011-10-22 23:01:47

live

[2011-08-26 10:33:50
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2011-08-26+10%3A33%3A50+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2011-08-26 10:33:50 release

live

[2011-05-27 12:38:45
release](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2011-05-27+12%3A38%3A45+release/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2011-05-27 12:38:45 release

live

[2011-05-11 23:09:49](http://getentry.ddbj.nig.ac.jp/getentry/na/AB628096/2011-05-11+23%3A09%3A49/?format=flatfile&filetype=text&trace=false&show_suppressed=true)

2011-05-11 23:09:49

live

<div class="section chapter">

## How to Create Links to DDBJ Entries

<div class="section section">

### You can create links to individual DDBJ entries.

http://getentry.ddbj.nig.ac.jp/getentry?database=database
name\&accession\_number=accession number\&additional parameters
(optional)  
http://getentry.ddbj.nig.ac.jp/getentry/database name/accession number  
http://getentry.ddbj.nig.ac.jp/getentry/database name/accession
number/?additional parameters (optional)

For example, a link to AB000001 is  
http://getentry.ddbj.nig.ac.jp/getentry?database=na\&accession\_number=AB000001  
http://getentry.ddbj.nig.ac.jp/getentry/na/AB000001

For example,a link to BD500001, an entry of the amino acid sequence
originated in the Patent is not available.  
http://getentry.ddbj.nig.ac.jp/getentry?database=aa\&accession\_number=BD500001  
http://getentry.ddbj.nig.ac.jp/getentry/patent\_aa/BD500001

As a practical case, please crick the following number to see how the
entry can be viewed.
[AB000001](http://getentry.ddbj.nig.ac.jp/getentry/na/AB000001)  
[BD500001](http://getentry.ddbj.nig.ac.jp/getentry/patent_aa/BD500001)

<div class="attention no_color">

Creating links to DRA entries is different from the above method. Please
refer to the [DRA Web site](/dra/index.html).

</div>

</div>

</div>
