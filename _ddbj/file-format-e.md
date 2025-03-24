---
layout: tabbed_indexed_content
title: Submission File Format
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: home
lang: en
related_pages:
  - title: Validation tools for MSS data files
    url: /ddbj/mss-tool-e.html
  - title: UME User’s manual
    url: /ddbj/ume-e.html
  - title: Parser User’s Manual
    url: /ddbj/parser-e.html
  - title: transChecker User’s Manual
    url: /ddbj/transchecker-e.html
  - title: Validator error message
    url: /ddbj/validator-e.html
  - title: Application form for MSS
    url: /ddbj/mss-form-e.html
---

## Sequence File {#sequence}

The sequence file is a text file in FASTA-like format contains all nucleotide sequences. In the sequence file, one array data consists of a line of header lines starting with "\>" and a sequence of entities of the second and subsequent lines. You must insert the end flag (//) at the end of each sequence.

Example: Sequence File

```
>CLN01  <-- Entry name for the first one
ggacaggctgccgcaggagccaggccgggagcaggaagaggcttcgggggagccggagaa
ctgggccagatgcgcttcgtgggcgaagcctgaggaaaaagagagtgaggcaggagaatc
gcttgaaccccggaggcggaaccgcactccagcctgggcgacagagtgagactta
//      <-- End flag
>CLN02  <-- Entry name for the second one
ctcacacagatgcgcgcacaccagtggttgtaacagaagcctgaggtgcgctcgtggtca
gaagagggcatgcgcttcagtcgtgggcgaagcctgaggaaaaaatagtcattcatataa
atttgaacacacctgctgtggctgtaactctgagatgtgctaaataaaccctctt
//      <-- End flag
```

### Format and Syntax  {#agp_format}

It is required to validate formats of sequence file by [UME](/ddbj/ume-e.html) or [Parser](/ddbj/parser-e.html).

  - First line starts with \[\>\], followed by the Entry name at the head of each sequence.
  - Entry names must be unique in the sequence file.It is common to use clone name or isolate name as unique Entry name.
  - Entry name is required to be described in less than 32 letters of characters which do not contain space,
     " double-quote, = equal, | pipe, \> greater-than, \[\] angled brackets or \\ back-slash.
  - The names and the orders of Entry in the both of sequence and [annotation files](#annotation) should be matched.The accession numbers will be assigned in the order of entries.
  - Sequence file is required to contain NO space or blank line.
  - You can use not only a, t, g and c but also characters in Nucleotide base codes for your nucleotide sequences, if necessary.
  - In principle, please remove the base code 'n' locating 5' or 3' end of sequences. For especially EST submissions, please do not send the raw outputs of a sequencer. You should screen your sequences to remove unreliable output(s) often locating at 5'-end.
  - Remove the sequences derived from vector, linker or adaptor.If you would like to submit some artificially constructed sequence itself, such as an expression vector etc., you do not have to remove that.
  - Please be sure to input the end flag \[//\] at the end of each sequence.
  - In case of [CON entry](/insdc/data-categories-e.html#con), [AGP file](#agp) can be used as a substitute for sequence file.

## Annotation File {#annotation} 

The annotation file is the tab delimited text file consisting of five columns of Entry, Feature, Location, Qualifier, and Value that contains your data other than sequences, such as submitters, references and biological features.  
You can make the files with some scripts, spread sheets (such as MS Excel), text editors and so on.

Example:Annotation file (<span class="red">Required</span>)

| Entry             | Feature                            | Location                                                         | Qualifier                          | Value                           |
|---|
| [COMMON](#common) | <span class="red">SUBMITTER</span> |                                                                  | <span class="red">ab\_name</span>  | Robertson,G.R.                  |
|                   |                                    |                                                                  | ab\_name                           | Mishima,H.                      |
|                   |                                    |                                                                  | <span class="red">contact</span>   | Hanako Mishima                  |
|                   |                                    |                                                                  | <span class="red">email</span>     | mishima@ddbj.nig.ac.jp          |
|                   |                                    |                                                                  | <span class="red">institute</span> | National Institute of Genetics  |
|                   |                                    |                                                                  | department                         | DNA Data Bank of Japan          |
|                   |                                    |                                                                  | <span class="red">country</span>   | Japan                           |
|                   |                                    |                                                                  | state                              | Shizuoka                        |
|                   |                                    |                                                                  | <span class="red">city</span>      | Mishima                         |
|                   |                                    |                                                                  | <span class="red">street</span>    | Yata 1111                       |
|                   |                                    |                                                                  | <span class="red">zip</span>       | 411-8540                        |
|                   | <span class="red">REFERENCE</span> |                                                                  | <span class="red">title</span>     | Mouse Genome Sequencing         |
|                   |                                    |                                                                  | <span class="red">ab\_name</span>  | Robertson,G.R.                  |
|                   |                                    |                                                                  | ab\_name                           | Mishima,H                       |
|                   |                                    |                                                                  | <span class="red">year</span>      | 2012                            |
|                   |                                    |                                                                  | <span class="red">status</span>    | Unpublished                     |
|                   | [COMMENT](#comment)                |                                                                  | line                               | Please visit our website        |
|                   |                                    |                                                                  | line                               | URL: http://www.ddbj.nig.ac.jp/ |
| CLN01             | <span class="red">source</span>    | <span class="red">1..12297</span>                                | <span class="red">organism</span>  | Mus musculus                    |
|                   |                                    |                                                                  | <span class="red">mol\_type</span> | genomic DNA                     |
|                   |                                    |                                                                  | clone                              | PC0110                          |
|                   |                                    |                                                                  | chromosome                         | 8                               |
|                   | CDS                                | <span class="small_80">join(\<1..456,609..879,1070..1213)</span> | product                            | protein kinase                  |
|                   |                                    |                                                                  | codon\_start                       | 2                               |
| CLN02             | <span class="red">source</span>    | <span class="red">1..12393</span>                                | <span class="red">organism</span>  | Mus musculus                    |
|                   |                                    |                                                                  | <span class="red">mol\_type</span> | genomic DNA                     |
|                   |                                    |                                                                  | clone                              | PC0210                          |
|                   |                                    |                                                                  | chromosome                         | 8                               |
|                   | CDS                                | 9365..9640                                                       | product                            | hypothetical protein            |

## Format and Syntax  {#annotation_format}

It is required to validate formats of annotation file by
[UME](/ddbj/ume-e.html) or [Parser](/ddbj/parser-e.html).

Entry  
: Please enter the Entry name into Entry column. Entry name has to correspond to each name in the sequence file as described at [How to Make Sequence File](#sequence).
: Do not enter anything in the Entry column until the first line for the next entry.

Feature  
: There are two types of Features, [Biological feature](#biological_feature) and DDBJ original features. The detail descriptions for Features are explained below.<
: Do not enter anything in Feature columns until the first line for the next feature.

Location  
: Location can be described in the columns adjacent Feature columns filed with either of [Biological feature](#biological_feature) or [PRIMARY\_CONTIG](#primary_contig) feature.

Qualifier  
: Qualifier is described in every line, in principle. It depends on the Feature whether each Qualifier is mandatory, available, or not to use for the Feature. Details are explained below.

Value  
: The format of Value is different depending on Qualifiers. Details will be explained below.

Other  
: In annotation file, it is judged as end when a blank line was found. Therefore, when you input multiple entries, please be sure not to make a blank line until the end of file.

## References for Describing Biological Features  {#describing}

| Name                                                       | Remarks                                                        |
|---|
| [Feature Table Definition](/ddbj/feature-table-e.html)        | version 11.3                                                   |
| [Feature/Qualifier usage matrix](https://docs.google.com/spreadsheets/d/1qosakEKo-y9JjwUO_OFcmGCUfssxhbFAm5NXUAnT3eM/edit?gid=0#gid=0) |                                                                |
| [Description Examples of Sequence Data](/ddbj/example-e.html) | Examples of features in [DDBJ flat file](/ddbj/flat-file.html) |

## COMMON {#common} 

### COMMON entry for the common information to all entries  {#common_entry}

  - In annotation file, entry name COMMON can be described in Entry column for the common information to all entries.
  - The information described in COMMON entry will be reflected in all entries.
  - Usually, COMMON is used for SUBMITTER/REFERENCE/DATE/COMMENT, but it can also be used for [Biological feature](#biological_feature) when all the information of Feature, Location, Qualifiers and Values are common to all entries.

### Use of COMMON entry  {#use_common}

Meta-base position 'E' for the location description  
: Example: rRNA feature in COMMON entry
    
  | Entry  | Feature | Location                           | Qualifier | Value    |
  |---|
  | COMMON | rRNA    | \<1..\>**E** | product   | 16S rRNA |
     
  There are many submissions that have common Feature information for all entries in their Qualifiers, and Values except their Locations because of difference of their sequence lengths, such as phylogenic studies with rRNA sequences.
    
  In such cases, you can describe the common Feature in COMMON entry by using meta-base position '**E**' in its Location instead of the number of the sequence end points.

Meta-description '@@\[entry\]@@ 'is available for clone, note, ff\_definition  
: Example: source feature in COMMON entry
       
  | Entry  | Feature | Location                       | Qualifier        | Value                                                                                               |
  |---|
  | COMMON | source  | 1..**E** | organism         | Homo sapiens                                                                                        |
  |        |         |                                | mol\_type        | genomic DNA                                                                                         |
  |        |         |                                | submitter\_seqid | **@@\[entry\]@@**                                                            |
  |        |         |                                | ff\_definition   | **@@\[organism\]@@** DNA, **@@\[submitter\_seqid\]@@** |
     
  There are some submissions that have common Feature information for all entries in their Qualifiers, and Values except their Locations and clone name or contig names, such as EST, GSS, TSA, TLS, WGS, WGS scaffold (CON division), and so on.
    
  In such cases, you can describe the Feature: source in COMMON entry only if you use clone or contig names as entry name.
    
  - You can use meta-base position '**E**' in its Location instead of the number of the sequence end points.
  - For the Value of clone, submitter\_seqid, note, ff\_definition, a meta description **@@\[entry\]@@, entry** enclosed by "**@@\[**" and "**\]@@**", is available to quote entry names. It will be replaced by the entry names which are quoted from a sequence file.

## SUBMITTER  {#submitter}

Example: SUBMITTER in annotation file　(<span class="red">Requierd</span>)

| Entry  | Feature                            | Location | Qualifier                          | Value                          |
|---|
| COMMON | <span class="red">SUBMITTER</span> |          | <span class="red">ab\_name</span>  | Robertson,G.R.                 |
|        |                                    |          | ab\_name                           | Mishima,H.                     |
|        |                                    |          | consrtm                            | Mouse Genome Consortium        |
|        |                                    |          | <span class="red">contact</span>   | Hanako Mishima                 |
|        |                                    |          | <span class="red">email</span>     | mishima@ddbj.nig.ac.jp         |
|        |                                    |          | url                                | http://www.ddbj.nig.ac.jp      |
|        |                                    |          | <span class="red">institute</span> | National Institute of Genetics |
|        |                                    |          | department                         | DNA Data Bank of Japan         |
|        |                                    |          | <span class="red">country</span>   | Japan                          |
|        |                                    |          | state                              | Shizuoka                       |
|        |                                    |          | <span class="red">city</span>      | Mishima                        |
|        |                                    |          | <span class="red">street</span>    | Yata 1111                      |
|        |                                    |          | <span class="red">zip</span>       | 411-8540                       |


List of Qualifiers for SUBMITTER

|  Qualifier  |  Legal characters for each Value (Remarks)   |  Number of letters  |
|---|
|  ab_name (abbreviation of author name)  |  alphabets, .[period], ,[comma], -[hyphen], ' [single quote as apostrophe]  |  64  |
|  contact (contact person)  |  alphabets, .[period], ,[comma], -[hyphen], ' [single quote as apostrophe],  [space] (In order of first, middle, and last names delimited with)  |  first(64),middle(128), last(64)  |
|  consrtm (consortium)  |  alphabets, digits,  [space], -[hyphen], ' [single quote as apostrophe], .[period], _[underscore], .[comma], ( ) # & @ / ; : + *  |  255  |
|  email   |  alphabets, digits, @, .[period], -[hyphen], _[underscore]   |  64  |
|  url  |  All printable characters but [space]  |  255  |
|  institute, department  |  All printable characters but [back-slash], ` [back-quote]   |  255  |
|  country, state   |  alphabets, digits,  [space], -[hyphen], '[single quote as apostrophe], .[period], _[underscore], ,[comma], ( ) # & @ / ; : + *  |  32  |
|  city  |  alphabets, digits,  [space], -[hyphen], '[single quote as apostrophe], .[period], _[underscore], ,[comma], ( ) # & @ / ; : + *  |  64  |
|  street  |  alphabets, digits,  [space], -[hyphen], '[single quote as apostrophe], .[period], _[underscore], ,[comma], ( ) # & @ / ; : + *  |  255  |
|  zip  |  alphabets, digits, -[hyphen]  |  16  |                             

### Requirements for Describing SUBMITTER  {#describing_submitter}

  - Basically it is necessary to enter one SUBMITTER for each entry. But [COMMON](#common) can be used for describing SUBMITTER that is common to all entries.  
    When SUBMITTER is written by using COMMON, SUBMITTER cannot be used for the other entries in the same annotation file.
  - [Submitters](/ddbj/submission-e.html#submitter) are the persons who have the responsibility in the contents of the submitted data and have the right to update the data.
  - Qualifier: ab\_name in SUBMITTER can be used repeatedly for multiple submitters and those submitters are shown in the released file in
    the order of this annotation file.
  - It is necessary to specify a contact person whom DDBJ will contact with about the data by using Qualifier: contact.
  - The abbreviation of the author name according to the format of REFERENCE author should be described in Value of Qualifier: ab\_name.

    Value format:
    : last name\[comma\]initial of first name\[period\]initial of middle name\[period\]

    Example:  
    : Miyashita,Y.
    : Robertson,G.R.

    Although some names (e.g. name with a hyphen) may show a warning message owing to format error, it is possible to input.

  - Each Value for the Qualifier except ab\_name in SUBMITTER cannot be used repeatedly. They can be used for only contact person. If you would like to submit the information of multiple institutes, please contact us before your submission.

## REFERENCE  {#reference}

Example: REFERENCE in annotation file　(<span class="red">Requierd</span>)

| Entry | Feature                            | Location | Qualifier                         | Value                               |
|---|
|       | <span class="red">REFERENCE</span> |          | <span class="red">title</span>    | Sequence and analysis of mouse ch.8 |
|       |                                    |          | <span class="red">ab\_name</span> | Robertson,G.R.                      |
|       |                                    |          | ab\_name                          | Mishima,H.                          |
|       |                                    |          | <span class="red">status</span>   | Published                           |
|       |                                    |          | <span class="red">year</span>     | 2003                                |
|       |                                    |          | journal                           | Nature                              |
|       |                                    |          | volume                            | 8                                   |
|       |                                    |          | start\_page                       | 15                                  |
|       |                                    |          | end\_page                         | 20                                  |

List of Qualifiers for REFERENCE

<table>
  <thead>
    <tr class="header">
      <th>Qualifier</th>
      <th>Legal characters for each Value (Remarks)</th>
      <th>Number of letters</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>title</td>
      <td>All printable characters but [back-slash], ` [back-quote]</td>
      <td>255</td>
    </tr>
    <tr class="even">
      <td>ab_name?(abbreviation of author name)</td>
      <td>alphabets, .[period], ,[comma], -[hyphen], ' [single quote as apostrophe]</td>
      <td>64</td>
    </tr>
    <tr class="odd">
      <td>consrtm(consortium)</td>
      <td>alphabets, digits, [space], -[hyphen], ' [single quote as apostrophe], .[period], _[underscore],<br/>,[comma], ( ) # &amp; @ / ; : + *</td>
      <td>255</td>
    </tr>
    <tr class="even">
      <td>status</td>
      <td>Either one of follows;<br/>Unpublished, In press, Published</td>
      <td>-</td>
    </tr>
    <tr class="odd">
      <td>year</td>
      <td>digits(4 figures of A.D.)</td>
      <td>4</td>
    </tr>
    <tr class="even">
      <td>journal</td>
      <td>All printable characters but [back-slash], ` [back-quote] (PubMed type abbreviation)</td>
      <td>128</td>
    </tr>
    <tr class="odd">
      <td>volume, start_page, end_page</td>
      <td>alphabets, digits, -[hyphen]</td>
      <td>8</td>
    </tr>
  </tbody>
</table>

### Requirements for Describing REFERENCE  {#describing_reference}

  - It is necessary to specify at least one REFERENCE for each entry. However, [COMMON](#common) can be used for describing the REFERENCE
    that is common to all entries.
  - The abbreviation of the author name according to the format of REFERENCE author should be described in Value of Qualifier: ab\_name.

    Value format:  
    : last name\[comma\]initial of first name\[period\]initial of middle name\[period\]

    Example:  
    : Miyashita,Y.
    : Robertson,G.R.

    Please pay no attention to a warning message about name format error (e.g. name with a hyphen).
  - If the Value of status is "In Press", Qualifier: journal is also a mandatory item.
  - If the Value of status is "Published", Qualifier: journal, volume, start\_page and end\_page are also mandatory items.
  - Please input "Unpublished" in the status, if you do not prepare any publication.
  - Please input ISO abbreviation in the journal if you have.
  - If you need to enter more than two REFERENCE features, please input the first REFERENCE directly related to your sequences and then put the other(s) that would be helpful for understanding the data after the first one.
  - When you use REFERENCE features for both [COMMON](#common) entry and other entries, the REFERENCE feature(s) specified for each entry will be loaded into DDBJ after one(s) given by COMMON entry.
  - When you cite two or more REFERENCE features for an entry, they will be shown on the DDBJ flat file in the same order on the annotation file.

## DATE  {#date}

Example: DATE/hold\_date in annotation file

| Entry  | Feature | Location | Qualifier  | Value    |
|---|
| COMMON | DATE    |          | hold\_date | 20231125 |


### Requirements for Describing DATE  {#describing_date}

  - DATE and hold\_date are required to be described in [COMMON](#common) entry.
  - If you want to keep confidential your data until a specific date, please set the date with 8 digits (e.g. 20231125).
  - Delimiters (i.e. -- (hyphen), / (slash) etc.) is not allowed to use for Value of hold\_date.
  - Do not enter any DATE, if your data should be open to public immediately.
  - DATE should be included for [COMMON](#common) entry. If the date is not common to all entries, please prepare the file for each.
  - If you set a hold\_date, your data will be released according to [Principle of "Hold-Until-Published" data release](/insdc/data-release-policy-e.html).

## COMMENT/ST\_COMMENT {#comment} 

Example: COMMENT and ST\_COMMENT in annotation file

| Entry | Feature     | Location | Qualifier                | Value                                      |
|---|
|       | COMMENT     |          | line                     | This clone was obtained at our laboratory. |
|       | COMMENT     |          | line                     | Please visit our web site.                 |
|       |             |          | line                     | URL:http://www.ddbj.nig.ac.jp              |
|       | ST\_COMMENT |          | tagset\_id               | Genome-Assembly-Data                       |
|       |             |          | Assembly Method          | GS De Novo Assembler v. 2.0                |
|       |             |          | Assembly Name            | Mmus\_1.0                                  |
|       |             |          | Genome Coverage          | 50x                                        |
|       |             |          | Sequencing Technology    | 454 GS FLX; ABI 3730                       |

<span class="red">※</span> There are two kinds of COMMENTs, "general COMMENT" and "structured COMMENT".

### Requirements for Describing COMMENT (General COMMENT)  {#describing_comment}

  - Please use general COMMENT if you want to describe additional information for your data.
  - It will automatically start a new-line by 60 letters including spaces. If you want to start a new-line other than 60 letters, please add Qualifier: line.
  - All printable characters except \[back-slash\] are legal for the Value of Qualifier: line.
  - [COMMON](#common) entry can be used for describing COMMENT that is common to all entries.
  - When you put multiple COMMENT features, please put each COMMENT for a Feature column, separately.
  - When an entry has both COMMENT features specific to it and common with all other entries described in COMMON entry, those will be shown on DDBJ flat file in the order, COMMENT in COMMON entry at first, then followed by one specific to the entry. On DDBJ flat files, in the case of plural COMMENTs, they will be shown in DDBJ format on same order of the annotation file.
  - When you use COMMENT features for both COMMON entry and other entries, the COMMENT feature(s) specified for each entry will be loaded into DDBJ after one(s) given by COMMON entry.
  - When you describe two or more COMMENT features for an entry, they will be shown on the DDBJ flat file in the same order on the annotation file.
  - For EST submissions, some particular COMMENT description is required.[Details](#wgs_con)

### Requirements for Describing ST\_COMMENT (Structured Comment)  {#describing_st_comment}

  - ST\_COMMENT is a feature to describe the structured comment in the flat file.

  - Though ST\_COMMENT can be defined by user community, ST\_COMMENT in predetermined format is required to submit sequence data derived from [genome Project](/ddbj/genome-e.html) (including [WGS](/ddbj/wgs-e.html)) or [transcriptome Project](/ddbj/transcriptome-e.html) (including [TSA](/ddbj/tsa-e.html)).

  - ST\_COMMENT is composed of dataset name (tagset\_id), names of items (user-defined Qualifier) and values of items (Value).

  - In the initial line of Structured COMMENT feature, describe tagset\_id as Qualifier and dataset name as its Value.
    
    In case of genome project, describe "Genome-Assembly-Data" for the value of tagset\_id qualifier.  
    In case of transcriptome project, describe "Assembly-Data" for the value of tagset\_id qualifier.

  - Describe a name of item as Qualifier name and its value as Value. In case of Genome-Assembly-Data, use following Qualifiers.  
    In case of Assembly-Data, use following Qualifiers.
    
  - List of Qualifiers for Genome-Assembly-Data (<span class="red">Requierd</span>)

    | Qualifier | Description | Remarks |
    |---|
    | <span class="red">Assembly Method</span>       | Name of program and the version used assembling sequences. Mandatory.      | The program version must be presented just after " v. " (e.g. Velvet v. 2.0) |
    | Assembly Name | Name that the submitter has given to that assembly of the genome. Mandatory for Eukaryote. | We recommend to describe in the format： [abbreviated name of species or common name of organism] + [version] (i.e. Btau_4.0) |
    | <span class="red">Genome Coverage</span>       | Approximate sequencing depth. Mandatory. (e.g. 125x) | Use "Unknown" when the coverage is not known. |
    | <span class="red">Sequencing Technology</span> | Platform(s) used to generate the sequence. Mandatory. | Use semicolon with a space to describe the multiple platforms (e.g. 454 GS FLX; ABI 3730) |
    
  - List of Qualifiers for Assembly-Data (<span class="red">Requierd</span>)

    | Qualifier | Description | Remarks |
    |---|
    |  <span class="red">Assembly Method</span>	  |  Name of program and the version used assembling sequences. Mandatory.  | The program version must be presented just after " v. " (e.g. Velvet v. 2.0) |
    |  Assembly Name	  |  Name and version for assembled sequences  | Recommended format： [abbreviated name of species or common name of organism] + [version] (i.e. Btau_4.0) |
    |  Coverage	  |  Approximate sequencing depth. (e.g. 125x) | Use “Unknown” when the coverage is not known. |
    |  <span class="red">Sequencing Technology</span>	  |  Platform(s) used to generate the sequence. Mandatory.  | Use semicolon with a space to describe the multiple platforms (e.g. 454 GS FLX; ABI 3730) |
  
  - If you have any question to describe ST\_COMMENT, please contact us by email prior to your submission.

## Biological Features {#biological_feature} 

Example: source and CDS features in annotation file (<span class="red">Requierd</span>)

| Entry | Feature                         | Location                                                    | Qualifier                          | Value                    |
|---|
|       | <span class="red">source</span> | <span class="red">1..12297</span>                           | <span class="red">organism</span>  | Mus musculus             |
|       |                                 |                                                             | <span class="red">mol\_type</span> | genomic\_DNA             |
|       |                                 |                                                             | chromosome                         | 8                        |
|       |                                 |                                                             | clone                              | PC0110                   |
|       | <span class="red">CDS</span>    | <span class="red">join(\<1..456,609..879,1070..1213)</span> | <span class="red">product</span>   | protein kinase           |
|       |                                 |                                                             | codon\_start                       | 2                        |
|       | rRNA                            | 1279..3000                                                  | product                            | 18S rRNA                 |
|       | CDS                             | complement(join(3213..4981,9901..11677))                    | gene                               | tbpA                     |
|       |                                 |                                                             | product                            | TATA-box binding protein |

<span class="red">※</span>For detail definitions and descriptions of Biological features, please read [Feature Table Definition](/ddbj/feature-table-e.html).

### Requirements for Describing Feature/Location/Qualifier  {#describing_feature}

  - In [Feature Table Definition](/ddbj/feature-table-e.html), each Qualifier has a / \[slash\] on its head, however do not use slashes for Qualifiers in the annotation file.
  - Qualifiers marked with \* (organism、mol\_type) are mandatory items. Features, source and at least one other feature are mandatory items for each entry. Please be sure to input them correctly.
  - You can find the rule to describe Location on [Description of Location](/ddbj/location-e.html).
  - You can see Qualifiers are legal for each Feature in [Feature/Qualifier Usage Matrix](/assets/files/pdf/ddbj/fq-e.pdf). Some of
    Features have mandatory Qualifier(s). Please be sure to specify Features and Qualifiers according to their name in the table. They are strictly defined such as case-sensitive (to distinguish upper case or lower), to use "\_" \[underscore\], and so on.
  - See also [Sample annotation file](#sample) and [Description Examples of Sequence Data](/ddbj/example-e.html)
  - When you describe CDS features, [Protein Coding Sequence; CDS feature](/ddbj/cds-e.html) would be helpful.
  - Files containing CDS feature(s) should be checked with [UME](/ddbj/ume-e.html) or [transChecker](/ddbj/transchecker-e.html).

### Requirements for Describing Value  {#describing_value}

  - The legal character type for Values depends on the Qualifiers as shown in the table, [Feature/Qualifier Usage Matrix](/assets/files/pdf/ddbj/fq-e.pdf) and [Feature Table Definition](/ddbj/feature-table-e.html).
  - Please be sure to input (or not to input) Values in accordance with value types in tables.

## DIVISION {#division}

DIVISION feature in annotation file indicates that entries are corresponding only to one of [CON](/insdc/data-categories-e.html#con) / [ENV](/documents/data-categories.html#env) / [EST](/documents/data-categories-e.html#est) / [GSS](/documents/data-categories-e.html#est) / [HTC](/documents/data-categories-e.html#est) / [HTG](/documents/data-categories-e.html#est) / [STS](/documents/data-categories-e.html#est) / [SYN](/documents/data-categories-e.html#env) / [TSA](/documents/data-categories-e.html#tsa).

Example: DIVISION in annotation file

| Entry  | Feature  | Location | Qualifier | Value |
|---|
| COMMON | DIVISION |          | division  | EST   |

### Requirements for Describing DIVISION  {#Requirements_for_Describing_DIVISION}

  - Please enter the division name, 3 capital letters in the Value for Qualifier: division.
  - In principle, please describe the DIVISION feature in the [COMMON](#common) entry.

## DATATYPE {#datatype} 

DATATYPE feature indicates that entries are corresponding to either of [WGS](/ddbj/wgs-e.html), [TLS](/ddbj/tls-e.html), [TPA](/ddbj/tpa-e.html), or TPA-WGS.

Example: DATATYPE in annotation file

| Entry  | Feature  | Location | Qualifier | Value |
|---|
| COMMON | DATATYPE |          | type      | WGS   |

### Requirements for Describing DATATYPE  {#Requirements_for_Describing_DATATYPE}

  - Please enter the name of type, WGS, TLS, TPA, or TPA-WGS in the Value for Qualifier: type.
  - Please describe the DATATYPE feature in the [COMMON](#common) entry.

## KEYWORD  {#keyword}

On the basis of categories indicated at the sections, [DIVISION](#division) and [DATATYPE](#datatype), KEYWORDs with controlled vocabulary describe more detail and specified information, such as experimental methods.  
Please see [INSDC agreed methodological keywords](https://insdc.org/submitting-standards/methodological-keywords/), which qualify controlled keyword terms.

Example: KEYWORD in annotation file

| Entry | Feature                                | Location | Qualifier                              | Value                              |
|---|
|       | <span class="font-bold">KEYWORD</span> |          | <span class="font-bold">keyword</span> | <span class="font-bold">ENV</span> |

Specified values for KEYWORD/keyword(<span class="red">Requierd</span>)

<table>
  <thead>
    <tr>
      <th>Categories</th>
      <th>the values for keyword</th>
      <th>Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/ddbj/wgs-e.html">WGS</a></td>
      <td><span class="red">WGS</span></td>
      <td>see also <a href="#wgs_con">For WGS and scaffold CON</a>.</td>
    </tr>
    <tr>
      <td><a href="/ddbj/env-e.html">ENV</a></td>
      <td><span class="red">ENV</span></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2"><a href="/ddbj/est-e.html">EST</a></td>
      <td><span class="red">EST</span></td>
      <td></td>
    </tr>
    <tr>
      <td>some other terms</td>
      <td>Please refer to <a href="#est">For EST Submissions</a>.</td>
    </tr>
    <tr>
      <td><a href="/ddbj/htc-e.html">HTC</a></td>
      <td>
      <span class="red">HTC</span> some other terms</td>
      <td>Please contact us before your submission.</td>
    </tr>
    <tr>
      <td><a href="/ddbj/htg-e.html">HTG</a></td>
      <td><span class="red">HTG</span>, <a href="#htg">some other terms</a></td>
      <td>Depending on the <a href="/insdc/data-categories-e.html#est">phase</a>. Please contact us before your submission.</td>
    </tr>
    <tr>
      <td><a href="/ddbj/gss-e.html">GSS</a></td>
      <td><span class="red">GSS</span></td>
      <td></td>
    </tr>
    <tr>
      <td>STS</td>
      <td><span class="red">STS</span></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="2"><a href="/ddbj/tpa-e.html">TPA</a></td>
      <td><span class="red">TPA, Third Party Data</span></td>
      <td></td>
    </tr>
    <tr>
      <td><span class="red">TPA:inferential</span> or <span class="red">TPA:experimental</span></td>
      <td>Either of two is mandatory.</td>
    </tr>
    <tr>
      <td><a href="/ddbj/tsa-e.html">TSA</a></td>
      <td><span class="red">TSA, Transcriptome Shotgun Assembly</span></td>
      <td></td>
    </tr>
    <tr>
      <td><a href="/ddbj/tls-e.html">TLS</a></td>
      <td><span class="red">TLS, Targeted Locus Study</span></td>
      <td></td>
    </tr>
    <tr>
      <td>Others</td>
      <td></td>
      <td>Please contact us before your submission.</td>
    </tr>
  </tbody>
</table>

### Requirements for Describing KEYWORD  {#Requirements_for_Describing_KEYWORD}

  - Please describe the specified values for Qualifier: keyword.
  - Please contact us before your submission to make sure the detail descriptions of KEYWORD.

##### For WGS and scaffold CON {#wgs_con}

  - For WGS and scaffold CON, please select a keyword from the following list.
    
      - STANDARD\_DRAFT
      - HIGH\_QUALITY\_DRAFT
      - IMPROVED\_HIGH\_QUALITY\_DRAFT
      - NON\_CONTIGUOUS\_FINISHED
    
    Example: WGS draft genome (<span class="red">Requierd</span>)
    
    | Entry | Feature                          | Location | Qualifier                        | Value                                    |
    |---|
    |       | <span class="red">KEYWORD</span> |          | <span class="red">keyword</span> | <span class="red">WGS</span>             |
    |       |                                  |          | <span class="red">keyword</span> | <span class="red">STANDARD\_DRAFT</span> |
    
##### For EST Submissions {#est}

  - For EST submissions, at least two keywords are required; EST and one of following three terms;
    
      - For 5' EST submissions --- 5'-end sequence (5'-EST)
      - For 3' EST submissions --- 3'-end sequence (3'-EST)
      - Other than above two cases --- unspecified EST
    
    Example : 5' EST (<span class="red">Requierd</span>)
    
    | Entry | Feature                          | Location | Qualifier                        | Value                                             |
    |---|
    |       | <span class="red">KEYWORD</span> |          | <span class="red">keyword</span> | <span class="red">EST</span>                      |
    |       |                                  |          | <span class="red">keyword</span> | <span class="red">5'-end sequence (5'-EST)</span> |
    
  - In the case of 3' EST, to distinguish whether your sequences are corresponding to anti-sense or sense strand, please describe either of following two COMMENTs.
    
    Example : For 3’ EST, anti-sense strand (<span class="red">Requierd</span>)
      
    | Entry | Feature                          | Location | Qualifier                     | Value                                                                         |
    |---|
    |       | <span class="red">COMMENT</span> |          | <span class="red">line</span> | <span class="red">3'-EST sequences are presented as anti-sense strand.</span> |
    
    Example : For 3’ EST, sense strand (<span class="red">Requierd</span>)
    
    | Entry | Feature                          | Location | Qualifier                     | Value                                                                    |
    |---|
    |       | <span class="red">COMMENT</span> |          | <span class="red">line</span> | <span class="red">3'-EST sequences are presented as sense strand.</span> |
    
##### For HTG submissions {#htg}

  - For HTG submissions, we recommend to use keywords to indicate sequencing status of [HTG data](/ddbj/htg-e.html).

    Example I: containing unordered pieces (<span class="red">Requierd</span>)

    |  Entry  |  Feature  |  Location  |  Qualifier  |  Value  |
    |---|
    |    |  <span class="red">KEYWORD</span>  |    |  <span class="red">keyword</span>  |  <span class="red">HTG</span>  |
    |    |    |    |  <span class="red">keywrod</span>  |  <span class="red">HTGS_PHASE1</span>  |
    |    |    |    |  <span class="red">keyword</span>  |  <span class="red">HTGS_DRAFT</span>   |

    Example II: containing only ordered pieces (<span class="red">Requierd</span>)

    |  Entry  |  Feature  |  Location  |  Qualifier  |  Value  |
    |---|
    |    |  <span class="red">KEYWORD</span>  |    |  <span class="red">keyword</span>   |  <span class="red">HTG</span>  |
    |    |    |    |  <span class="red">keyword</span>  |  <span class="red">HTGS_PHASE2</span>  |

## DBLINK  {#dblink}

The DBLINK line is used to link other databases, such as BioProject ID, BioSample ID and Sequence Read Archive (DRA/ERA/SRA).

Example: DBLINK in annotation file (<span class="red">Requierd</span>)

| Entry | Feature                         | Location | Qualifier                                      | Value                                 |
|---|
|       | <span class="red">DBLINK</span> |          | <span class="red">project</span>               | <span class="red">PRJDB12345</span>   |
|       |                                 |          | <span class="red">biosample</span>             | <span class="red">SAMD90000000</span> |
|       |                                 |          | <span class="red">sequence read archive</span> | <span class="red">DRR999000</span>    |
|       |                                 |          | <span class="red">sequence read archive</span> | <span class="red">DRR999001</span>    |

### Requirements for Describing DBLINK  {#Requirements_for_Describing_DBLINK}

  - If you have registered your project to the [DDBJ BioProject Database](/bioproject/index-e.html), please enter the project ID in
    the Value for Qualifier: The sample ID of [DDBJ BioSample](/biosample/index-e.html) also writes in the Value of for Qualifier.
  - An assembly from raw reads of Sequence Read Archive is required to have [run accession number(s)](/insdc/prefix-e.html#dra) in the Value for Qualifier.
  - See also [DDBJ BioProject Database](/bioproject/index-e.html), [DDBJ BioSample Database](/biosample/index-e.html) and [DDBJ Sequence Read Archive](/dra/index-e.html).

## locus\_tag  {#locus_tag}

For the submission in the whole genome scale with many annotated features, we recommend to use the qualifier [locus\_tag](/ddbj/locus_tag.html), for the [Biological Features](#biological_feature) indicating protein products ([CDSs](/ddbj/cds-e.html)), and transcripts (rRNA, tRNA and so on).  
The locus\_tag prefix and BioSample ID should be registered at [DDBJ BioSample Database](/biosample/index-e.html) in advance.

## source: ff\_definition  {#ff_definition}

ff\_definition is a Qualifier that is not defined in The DDBJ/EMBL/GenBank Feature Table: Definition. One ff\_definition can be
described in an entry, if necessary.

Example: ff\_definition in annotation file

| Entry | Feature | Location | Qualifier      | Value                                                                                           |
|---|
|       | source  | 1..516   | organism       | Mus musculus                                                                                    |
|       |         |          | mol\_type      | mRNA                                                                                            |
|       |         |          | ff\_definition | <span class="bold">@@\[organism\]@@</span> mRNA, clone: <span class="bold">@@\[clone\]@@</span> |
|       |         |          | clone          | PC0110                                                                                          |

Value formats of ff\_definition

<table>
  <thead>
    <tr>
      <th>Categories</th>
      <th>Format for the value of ff_definition</th>
    </tr>
  </thead>
  <tbody> 
    <tr>
      <td><a href="/ddbj/wgs-e.html">WGS</a></td>
      <td>@@[organism]@@ @@[strain]@@ DNA, @@[submitter_seqid]@@, [other information]</td>
    </tr>
    <tr>
      <td>BAC/YAC genomic clones in unfinished phase (<a href="/ddbj/htg-e.html">HTG</a>)</td>
      <td>@@[organism]@@ DNA, chromosome @@[map]@@, [BAC/YAC] clone: @@[clone]@@, *** SEQUENCING IN PROGRESS ***</td>
    </tr>
    <tr>
      <td>BAC/YAC genomic clones in finished phase</td>
      <td>@@[organism]@@ DNA, chromosome @@[map]@@, [BAC/YAC] clone: @@[clone]@@</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="/ddbj/est-e.html">EST</a></td>
      <td>@@[organism]@@ mRNA, clone: @@[clone]@@, [other information]</td>
    </tr>
    <tr>              
      <td>@@[organism]@@ cDNA, clone: @@[clone]@@, [other information]</td>     
    </tr>
    <tr>
      <td><a href="/ddbj/gss-e.html">GSS</a></td>
      <td>@@[organism]@@ DNA, clone: @@[clone]@@, [other information]</td>
    </tr>
    <tr>
      <td>STS</td>
      <td>@@[organism]@@ DNA, @@[map]@@, [marker name], sequence tagged site</td>
    </tr>
    <tr>
      <td>Others</td>
      <td>Please contact us before your submission, if necessary. </td>
    </tr>
  </tbody>
</table>

### Requirements for Describing source: ff\_definition  {#Requirements_for_Describing_source__ff_definition}

  - The Qualifier: ff\_definition can be described on source, one of [Biological features](#biological_feature).
  - You can describe only one ff\_difinition for one entry.
  - The value of ff\_definition will be used for the DEFINITION line in the format of [DDBJ flat file](/ddbj/flat-file-e.html).  Please refer to [Sample annotation file and The relationships between annotation file and DDBJ flat file](#sample).
  - For the Value of ff\_definition, a meta description (e.g. @@\[organism\]@@ and @@\[clone\]@@) is available to quote values of other qualifiers. The meta description, Qualifier name enclosed by "**@@\[** and **\]@@**", will be replaced by the value of target Qualifier ("organism", "clone" in the above sample) when ff\_definition is reflected in DEFINITION line on DDBJ flat file.
  - In principle, you can describe DEFINITION according to the above table, however, if you like to input the values of ff\_definition qualifiers, please contact us before your submission.

## assembly\_gap: Sequencing Gap Region  {#assembly_gap}

In cases of whole genome scale sequencing such as [HTG](/ddbj/htg-e.html) or large scale of assembled EST sequences such as [TSA](/ddbj/tsa-e.html) division, the entries may have some sequencing gaps that would be resulted from the process of assembling or the region difficult to read. You can indicate them by describing "n" in its sequence. In annotation file, you have to indicate the regions of sequencing gaps with [assembly\_gap](/ddbj/features-e.html#assembly_gap) features.

Example: assembly\_gap in annotation file (<span class="red">Requierd</span>)

| Entry | Feature       | Location | Qualifier         | Value                                    |
|---|
|       | assembly\_gap | 101..200 | estimated\_length | <span class="red">unknown</span>         |
|       |               |          | gap\_type         | <span class="red">within scaffold</span> |
|       |               |          | linkage\_evidence | <span class="red">paired-ends</span>     |


### Requirements for Describing assembly\_gap: Sequencing Gap Region  {#Requirements_for_Describing_assembly_gap__Sequencing_Gap_Region}

  - Though the assembly\_gap feature is one of [Biological features](/ddbj/file-format-e.html#biological_feature), the format
    is slightly different from others.
  - You can NOT use join, order, complement for the Location of assembly\_gap features.

##### Length of the gap is unknown

The location of span of the assembly\_gap feature for an unknown gap has to be specified by the submitter; the specified gap length has to be reasonable (less or = 1000) and will be indicated as "n"'s in the sequence.  
It is required to indicate unknown for the Value of Qualifier: estimated\_length on the assembly\_gap feature.

In case of transcriptome record (TSA division), the value of the estimated\_length of assembly\_gap features must be in an integer, not be “unknown”.

##### Length of the gap is estimated

The location span of the assembly\_gap feature for "known" gap should be indicated by the number of "n"'s in the sequence. It is required to indicate known for the Value of Qualifier: estimated\_length on the assembly\_gap feature.

## TOPOLOGY  {#topology}

Please enter circular for the Qualifier of TOPOLOGY feature, when the topology of whole nucleotide molecule is circular and the first and the end positions are conjugated on real molecules.  
i.e. Complete genome sequence of a circular virus

Example: TOPOLOGY in annotation file

| Entry | Feature  | Location | Qualifier | Value |
|---|
|       | TOPOLOGY |          | circular  |       |

### Requirements for Describing TOPOLOGY  {#Requirements_for_Describing_TOPOLOGY}

  - In DDBJ flat file, topology is indicated in the [LOCUS](/ddbj/flat-file-e.html#Locus) line. See also [Sample annotation file](#sample).

## TPA/TSA: PRIMARY\_CONTIG, Citation of Primary Entries {#primary_contig} 

PRIMARY\_CONTIG, entry, and primary\_bases are the Feature and Qualifiers prepared to describe the alignments of primary entries for
TPA/TSA submission.

Example: PRIMARY\_CONTIG in annotation file

| Entry | Feature         | Location  | Qualifier      | Value      |
|---|
|       | PRIMARY\_CONTIG | 1..438    | entry          | ZZ000010.1 |
|       |                 |           | primary\_bases | 1..438     |
|       | PRIMARY\_CONTIG | 377..696  | entry          | ZZ000011.1 |
|       |                 |           | primary\_bases | 1..320     |
|       |                 |           | complement     |            |
|       | PRIMARY\_CONTIG | 590..1191 | entry          | ZZ000022.0 |
|       |                 |           | primary\_bases | 1..601     |

Qualifiers available for PRIMARY\_CONTIG

<table>
<thead>
<tr class="header">
<th>Qualifier</th>
<th>Remarks for the value description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>entry</td>
<td>Accession number of the cited primary entry (with version number)</td>
</tr>
<tr class="even">
<td>primary_bases</td>
<td>input the base span cited from the primary sequence.<br />
The base span of the cited primary sequence. Example) 1..500</td>
</tr>
<tr class="odd">
<td>complement</td>
<td>To indicate citing the complementary strand of primary sequence</td>
</tr>
</tbody>
</table>

### Requirements for Describing TPA/TSA: PRIMARY\_CONTIG, Citation of Primary Entries  {#Requirements_for_Describing_TPA_TSA__PRIMARY_CONTIG_Citation_of_Primary_Entries}

- Please specify the value for [DATATYPE/type](#datatype), TPA or [DIVISION/division](#division), TSA in the annotation file.

- In PRIMARY\_CONTIG, it is necessary to refer to accession number(s) (with version) in the primary database and enter the base spans of the primary sequences that contribute to the TPA/TSA sequence.

- You can not use join, order, complement for Location column. Please
describe each PRIMARY\_CONTIG and location even in the same entry.

- If the primary entry has been submitted to DDBJ/EMBL-Bank/GenBank, a
version number is required for accession number. If the primary entry is
not public, please use 0 \[zero\] for the version. e.g. ZZ000022.0

- If primary sequence is corresponding to reverse strand in the TPA/TSA
sequence, please put complement qualifier.

- In detail, refer to [Sample annotation file and The relationships
between annotation file and DDBJ flat file](#sample).

  - TPA (Third Party Annotation)： [Sample](#TPA)
  - TSA (Transcriptome Shotgun Assembly)： [Sample](#TSA)
  - TSA; assembled from short reads： [Sample](#TSA_SRA_assemble_Ann)

## Sample annotation {#sample}

<table>
  <tbody>
    <tr>
      <td rowspan="6">General data</td>
      <td>Protein coding sequence (CDS)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=505600445">CDS</a></td>
    </tr>
    <tr>
      <td>Ribosomal RNA</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=1380986730">16S_rRNA</a></td>
    </tr>
    <tr>
      <td>ITS (Internal Transcribed Spacer)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=162924670">ITS</a></td>
    </tr>
    <tr>
      <td>Microsatellite marker</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=282901241">Microsatellite marker</a></td>
    </tr>
    <tr>
      <td>Mitochondrial sequence</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=545461927">mtDNA</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/env-e.html">ENV</a> (Environmental Samples)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/#gid=585575811">ENV</a></td>
    </tr>
    <tr>
      <td rowspan="11">Genome data</td>
      <td><a href="/ddbj/genome-e.html">complete genome sequence (Bacteria)</a></td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=862924679">complete_genome_BCT</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/genome-e.html">Finished level genome sequence with biological feature (Eukaryote)</a></td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1575396051">Finished_genome_eukaryote</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/wgs-e.html">WGS</a> (Whole Genome Shotgun) without annotation</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=382116224">WGS</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/wgs-e.html">WGS</a> (Whole Genome Shotgun) with annotation</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1134992157">WGS_annotation</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/wgs-e.html">WGS</a>; piece of scaffold CON</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=595699065">WGS_piece_CON</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/con-e.html">CON</a> entries for WGS scaffold</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1885054586">WGS_scaffold</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/metagenome-assembly-e.html">MAGs</a> (Metagenome-Assembled Genomes, MAGs) for Complete genome</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=11301438">MAGs_CompleteGenome</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/metagenome-assembly-e.html">MAGs</a> (Metagenome-Assembled Genomes, MAGs) for Draft genome</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1453206143">MAGs_WGS</a></td>
    </tr>  
    <tr>
      <td>AGP file for <a href="/ddbj/con-e.html">CON</a> entries</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1672995780">AGP</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/gss-e.html">GSS</a> (Genome Survey Sequences)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=460036592">GSS</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/htg-e.html">HTG</a> (High Throughput Genomic Sequences)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=199977055">HTG</a></td>
    </tr>
    <tr id="TSA">
      <td rowspan="4">Large transcripts data</td>
      <td><a href="/ddbj/tsa-e.html">TSA</a> (Transcriptome Shotgun Assembly); assembled from EST</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=2130672006">TSA</a></td>
    </tr>
    <tr id="TSA_SRA_assemble_NoANN">
      <td><a href="/ddbj/tsa-e.html">TSA</a>; assembled from short reads without annotation</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=931177555">TSA_SRA_assemble_NoANN</a></td>
    </tr>
    <tr id="TSA_SRA_assemble_Ann">
      <td><a href="/ddbj/tsa-e.html">TSA</a>; assembled from short reads with annotation</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1607251813">TSA_SRA_assemble_Ann</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/est-e.html">EST</a> (Expressed Sequence Tags)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1753678626">EST</a></td>
    </tr>
    <tr>
      <td>TLS (Targeted Locus Study)</td>
      <td><a href="/ddbj/tls-e.html">TLS (Targeted Locus Study)</a></td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=580470761">TLS</a></td>
    </tr>
    <tr>
      <td rowspan="3"><a href="/ddbj/tpa-e.html">TPA</a> (Third Party Data)</td>
      <td><a href="/ddbj/tpa.html">TPA</a> (Third Party Data)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=123381270">TPA</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/tpa-e.html">TPA</a> assembly (Third Party Data)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=80322930">TPA-assembly_WGS</a></td>
    </tr>
    <tr>
      <td><a href="/ddbj/tpa-e.html">TPA</a> assembly (Third Party Data)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=1394019205">TPA-assembly</a></td>
    </tr>
    <tr id="ann2-ff">
      <td>Annotation: Flat file</td>
      <td>Protein coding sequence (CDS)</td>
      <td><a href="https://docs.google.com/spreadsheets/d/15gLGL5FMV8gRt46ezc2Gmb-R1NbYsIGMssB0MyHkcwE/edit#gid=961825804">ann2-ff</a></td>
    </tr>
  </tbody>
</table>

## AGP File {#agp} 

AGP file is required to submit [CON entries](/ddbj/con-e.html). An AGP file is the tab delimited text file consisting of nine columns of the order and orientation etc of the piece entries to construct CON entry. You can make the files with some scripts, spread sheets (such as MS Excel), text editors and so on.

Sequence file is not required when the sequence can be constructed from AGP file.

[The AGP file](https://www.ncbi.nlm.nih.gov/assembly/agp/AGP_Specification/) format was initially developed by UCSC, EBI and NCBI.

Example: AGP file

| \#1       | 2    | 3    | 4 | 5 | 6              | 7        | 8    | 9            |
|---|
| scaffold1 | 1    | 1345 | 1 | W | BZZZ01123456.1 | 1        | 1345 | \+           |
| scaffold1 | 1346 | 2845 | 2 | N | 1500           | scaffold | yes  | align\_genus |
| scaffold1 | 2846 | 4301 | 3 | W | BZZZ01123457.1 | 1        | 1456 | \+           |
| scaffold1 | 4302 | 4401 | 4 | U | 100            | scaffold | yes  | align\_genus |
| scaffold1 | 4402 | 5631 | 5 | W | BZZZ01123458.1 | 1        | 1230 | \-           |
| scaffold2 | 1    | 650  | 1 | W | BZZZ01123486.1 | 1        | 1345 | \+           |
| scaffold2 | 651  | 750  | 2 | N | 100            | scaffold | yes  | align\_genus |
| scaffold2 | 751  | 2980 | 3 | W | BZZZ01123488.1 | 1        | 1230 | \-           |

### Format and Syntax  {#agp_format}

It is required to validate formats of AGP file by [UME](/ddbj/ume-e.html).

  - AGP file consists of nine columns.
  - Columns should be tab delimited.
  - AGP file is required to contain NO space or blank line.
  - The use of comment lines, starting with a \# symbol, at the head of the file is encouraged.

Description on each column（column 1 - column 5）

<table>
  <caption>* component: a sequence used to construct a larger sequence (i.e. piece entry)</caption>
  <thead>
    <tr>
      <th>column</th>
      <th>content</th>
      <th colspan="2">description</th>
    </tr>
  </thead>
  <tbody> 
    <tr>
      <td>1</td>
      <td>object</td>
      <td colspan="2">CON entry name, the identifier for the object being assembled.<br>i.e. a chromosome, scaffold or contig.<br>CON entry name has to correspond to each name in the annotation file as described at <a href="#annotation">Annotation File</a>.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>object_beg</td>
      <td colspan="2">The starting coordinates of the component/gap on the object.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>object_end</td>
      <td colspan="2">The ending coordinates of the component/gap on the object.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>part_number</td>
      <td colspan="2">The line count for the components/gaps that make up the object.</td>
    </tr>
    <tr>
      <td rowspan="10" class="borderbtm">5</td>
      <td rowspan="10" class="borderbtm">component_type</td>
      <td colspan="2">The sequencing status of the component. These typically correspond to keywords in the International Sequence Database (GenBank/EMBL/DDBJ) submission. Current acceptable values are:</td>
    </tr>
    <tr>
      <td>A</td>
      <td> Active Finishing</td>
    </tr>
    <tr>
      <td>D</td>
      <td>Draft HTG (often phase1 and phase2 are called Draft, whether or not they have the draft keyword)</td>
    </tr>
    <tr>
      <td>F</td>
      <td>Finished HTG (phase3)</td>
    </tr>
    <tr>
      <td>G</td>
      <td>Whole Genome Finishing</td>
    </tr>
    <tr>
      <td>O</td>
      <td>Other sequence (typically means no HTG keyword)</td>
    </tr>
    <tr>
      <td>P</td>
      <td>Pre Draft</td>
    </tr>
    <tr>
      <td>W</td>
      <td>WGS contig</td>
    </tr>
    <tr>
      <td>N</td>
      <td>gap with specified size</td>
    </tr>
    <tr>
      <td>U</td>
      <td>gap of unknown size, defaulting to 100 bases</td>
    </tr>
  </tbody>
</table>

<span class="icon_d-triangle">The description of column 6 to 9 depends on the value in column 5 whether it has gap or not.</span>

Description on each column（column 6 - column 9）： If column 5 contains A, D, F, G, O, P and W except from N and U

<table>
  <caption>* component: a sequence used to construct a larger sequence (i.e. piece entry)</caption>
  <thead>
    <tr>
      <th>column</th>
      <th>content</th>
      <th colspan="2">Description</th>
    </tr>
  </thead>
  <tbody> 
    <tr>
      <td>6</td>
      <td>component_id</td>
      <td colspan="2">The accession number with version or <br>local identifier for the component</td>
    </tr>
    <tr>
      <td>7</td>
      <td>component_beg</td>
      <td colspan="2">The beginning of the part of the component that contributes to the object</td>
    </tr>
    <tr>
      <td>8</td>
      <td>component_end</td>
      <td colspan="2">The end of the part of the component that contributes to the object</td>
    </tr>
    <tr>
      <td rowspan="7" class="borderbtm">9</td>
      <td rowspan="7" class="borderbtm">orientation</td>
      <td colspan="2">The orientation of the component relative to the object.<br>Acceptable values are:</td>
    </tr>
    <tr>
      <td>+</td>
      <td>plus</td>
    </tr>
    <tr>
      <td>-</td>
      <td>minus</td>
    </tr>
    <tr>
      <td>?</td>
      <td>unknown</td>
    </tr>
    <tr>
      <td>0</td>
      <td>zero; unknown (deprecated)</td>
    </tr>
    <tr>
      <td>na</td>
      <td>irrelevant</td>
    </tr>
    <tr>
      <td colspan="2">By default, components with "?", "0" or "na" are treated as if they had + orientation.</td>
    </tr>
  </tbody>
</table>

Description on each column（column 6 - column 9）：If column 5 contains N and U

<table>
  <thead>
    <tr>
      <th>column</th>
      <th>content</th>
      <th colspan="2">description</th>
    </tr>
  </thead>
  <tbody> 
    <tr>
      <td>6</td>
      <td>gap_length</td>
      <td colspan="2">[component_type: N] The length of gap (bp)<br>[component_type: U] 100</td>
    </tr>
    <tr>
      <td rowspan="8">7</td>
      <td rowspan="8">gap_type</td>
      <td colspan="2">This column specifies the gap type. Accepted values:</td>
    </tr>
    <tr>
      <td>scaffold</td>
      <td>a gap between two sequence contigs in a scaffold (superscaffold or ultra-scaffold).</td>
    </tr>
    <tr>
      <td>contig</td>
      <td>an unspanned gap between two sequence contigs.</td>
    </tr>
    <tr>
      <td>centromere</td>
      <td>a gap inserted for the centromere.</td>
    </tr>
    <tr>
      <td>short_arm</td>
      <td>a gap inserted at the start of an acrocentric chromosome.</td>
    </tr>
    <tr>
      <td>heterochromatin</td>
      <td>a gap inserted for an especially large region of heterochromatic sequence (may also include the centromere)</td>
    </tr>
    <tr>
      <td>telomere</td>
      <td>a gap inserted for the telomere.</td>
    </tr>
    <tr>
      <td>repeat</td>
      <td>an unresolvable repeat.</td>
    </tr>
    <tr>
      <td>8</td>
      <td>linkage</td>
      <td colspan="2">The linkage between the adjacent lines (Values: "yes" or "no")</td>
    </tr>
    <tr>
      <td rowspan="12" class="borderbtm">9</td>
      <td rowspan="12" class="borderbtm">linkage evidence</td>
      <td colspan="2">This specifies the type of evidence used to assert linkage (as indicated in column 8b). Accepted values:</td>
    </tr>
    <tr>
      <td>na</td>
      <td>used when no linkage is being asserted (column 8b is 'no')</td>
    </tr>
    <tr>
      <td>paired-ends</td>
      <td>paired sequences from the two ends of a DNA fragment.</td>
    </tr>
    <tr>
      <td>align_genus</td>
      <td>alignment to a reference genome within the same genus.</td>
    </tr>
    <tr>
      <td>align_xgenus</td>
      <td>alignment to a reference genome within another genus.</td>
    </tr>
    <tr>
      <td>align_trnscpt</td>
      <td>alignment to a transcript from the same species.</td>
    </tr>
    <tr>
      <td>within_clone</td>
      <td>sequence on both sides of the gap is derived from the same clone, but the gap is not spanned by paired-ends. The adjacent sequence contigs have unknown order and orientation</td>
    </tr>
    <tr>
      <td>clone_contig</td>
      <td>linkage is provided by a clone contig in the tiling path (TPF). For example, a gap where there is a known clone, but there is not yet sequence for that clone.</td>
    </tr>
    <tr>
      <td>map</td>
      <td>linkage asserted using a non-sequence based map such as RH, linkage, fingerprint or optical.</td>
    </tr>
    <tr>
      <td>strobe</td>
      <td>strobe sequencing (PacBio).</td>
    </tr>
    <tr>
      <td>unspecified</td>
      <td>used when converting old AGPs that lack a field for linkage evidence into the new format.</td>
    </tr>
    <tr>
      <td colspan="2">If there are multiple lines of evidence to support linkage, all can be listed using a ‘;’ delimiter.<br>(e.g. "paired-ends;align_xgenus ")</td>
    </tr>
  </tbody>
</table>

- The length of gap for an 'unknown' gap should be 100 bp. It is required to indicate "U" for the value of component\_type and "100" for the value of gap\_length.

- Information about continuity is provided by a combination of the value in the gap\_type and linkage. 
  Please refer to the following table.
    
  Example: source feature in COMMON entry
    
<table>
  <thead>
    <tr>
      <th>gap_type</th>
      <th>linkage</th>
      <th>Interpretation and description</th>
    </tr>
  </thead>
  <tbody> 
    <tr>
      <td colspan="3">Within-scaffold gaps: sequences on either side of the gap are in a single scaffold.</td>
    </tr>
    <tr>
      <td>scaffold</td>
      <td>yes</td>
      <td>Do not break scaffold<br>There is evidence linking sequence contigs on both sides of the gap.</td>
    </tr>
    <tr>
      <td>repeat</td>
      <td>yes</td>
      <td>Do not break scaffold<br>If an unresolvable repeat unit is spanned by linkage evidence, the linkage will be 'yes'.</td>
    </tr>
    <tr>
      <td colspan="3">Scaffold-breaking gaps: sequences on either side of the gap are in separate scaffolds.</td>
    </tr>
    <tr>
      <td>contig</td>
      <td>no</td>
      <td> Break scaffold<br>A contig gap indicates there is no evidence to link the adjacent sequence contigs.</td>
    </tr>
    <tr>
      <td>repeat</td>
      <td>no</td>
      <td>Break scaffold<br>If an unresolvable repeat unit is not spanned by linkage evidence, the linkage will be 'no'.</td>
    </tr>
    <tr>
      <td>centromere<br>short_arm<br>heterochromatin<br>telomer</td>
      <td>no</td>
      <td>Break scaffold<br>Gaps with these biological types are used for laying out scaffolds along a chromosome.</td>
    </tr>
    <tr>
      <td colspan="3">Invalid gap/linkage combinations</td>
    </tr>
    <tr>
      <td>contig</td>
      <td>yes</td>
      <td>Invalid<br>If there is evidence of linkage between the adjacent sequence contigs, the gap type should be scaffold.</td>
    </tr>
    <tr>
      <td>scaffold</td>
      <td>no</td>
      <td>Invalid<br>If there is no evidence of linkage between the adjacent sequence contigs, the gap type should be contig.</td>
    </tr>
    <tr>
      <td>centromere<br>short_arm<br>heterochromatin<br>telomere</td>
      <td>yes</td>
      <td>Invalid<br>It is invalid to use these biological types within a scaffold.</td>
    </tr>
  </tbody>
</table>
