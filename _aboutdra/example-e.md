---
layout: indexed_content
title: Example of metadata
pathname: example-e
category: aboutdra
---

<div id="page" class="top">

<div id="header" class="clearfix">

<div id="header-top">

[![](/images/parts/ddbj-logo-white.svg)](/index-e.html "DNA Data Bank of Japan")

<div id="header-top-left">

<span class="resources-btn">Services**</span>

</div>

<div id="header-top-right">

  - [Login & Submit](https://ddbj.nig.ac.jp/D-way)
  - [Policies and Disclaimers](/policies-e.html)
  - [Contact](/contact-e.html)
  - [Japanese](/dra/example.html)

</div>

</div>

<div class="resources-contents">

<div class="boxContainer">

<div class="resources-box">

  - ### ![](/images/logos/service-org.svg)Search

  - [getentry](http://getentry.ddbj.nig.ac.jp/top-e.html "Retrieve sequence records by accession numbers")

  - [ARSA](http://ddbj.nig.ac.jp/arsa/ "Retrieve sequence and annotation by keywords")

  - [DRA
    Search](http://ddbj.nig.ac.jp/DRASearch "Search and retrieve sequencing data.")

  - [TXSearch](http://ddbj.nig.ac.jp/tx_search/?lang=en "Search unified taxonomy database")

  - [BLAST](http://blast.ddbj.nig.ac.jp/blastn?lang=en "Search nucleotide sequences by sequence similarity")

<!-- end list -->

  - ### ![](/images/logos/wrench.svg)Analysis

  - [Vector Screening
    System](http://ddbj.nig.ac.jp/vecscreen/ "Screen vector sequences")

  - [ClustalW](http://clustalw.ddbj.nig.ac.jp/index.php?lang=en "Multiple alignment and tree-making")

  - [WABI (Web API for
    Biology)](/search/help/wabi/wabi-e.html "Web API for using the search services of DDB")

  - [DDBJ FTP
    Site](ftp://ftp.ddbj.nig.ac.jp/ "Download public data by ftp")

</div>

<div class="resources-box">

  - ### ![](/images/logos/database-org.svg)Databases

  - [Annotated/Assembled Sequences
    (DDBJ)](/ddbj/index-e.html "Annotated/Assembled Sequences (DDBJ)")

  - [Sequence Read Archive
    (DRA)](/dra/index-e.html "Sequence Read Archive")

  - [Genomic Expression Archive
    (GEA)](/gea/index-e.html "Genomic Expression Archive")

  - [BioProject](/bioproject/index-e.html "BioProject")

  - [BioSample](/biosample/index-e.html "BioSample")

  - [Japanese Genotype-phenotype Archive
    (JGA)](/jga/index-e.html "Japanese Genotype-phenotype Archive")

  - [Submission portal
    D-way](https://ddbj.nig.ac.jp/D-way "Submission portal D-way")

<!-- end list -->

  - ### ![](/images/logos/sc-org.svg)NIG SuperComputer

  - [NIG
    SuperComputer](https://sc.ddbj.nig.ac.jp/en "NIG SuperComputer")

</div>

<div class="resources-box dbcls">

  - ### ![](/images/logos/dbcls-s.svg)DBCLS Services

  - [AOE](http://aoe.dbcls.jp/en "Statistics and trends of gene expression data")

  - [CRISPRdirect](https://crispr.dbcls.jp/ "Designing CRISPR/Cas9 guide RNA with reduced off-target sites")

  - [DBCLS
    SRA](http://sra.dbcls.jp/ "Statistics and trends of SRA data")

  - [Gendoo](http://gendoo.dbcls.jp/ "Functional profiling of gene and disease features for omics analysis")

  - [GGGenome](https://gggenome.dbcls.jp/en/ "A ultrafast sequence search")

  - [GGRNA](https://ggrna.dbcls.jp/en/ "A Google-like, ultrafast search engine for genes and transcripts")

  - [RefEx](http://refex.dbcls.jp/index.php?lang=en "A web tool for a comfortable search of reference data for gene expression analysis")

</div>

</div>

</div>

<div id="header-middle" class="clearfix">

<div class="page-title">

[Sequence Read Archive](/dra/index-e.html)

</div>

<div class="search-box">

<div id="search-box-flex">

<div class="search-options-wrapper">

BI-DDBJ Web Sites Annotated/Assembled Sequences Sequence Read Archive

</div>

</div>

</div>

</div>

<div id="header-bottom">

  - [Home](/dra/index-e.html)
  - [Handbook![](/images/parts/arrow_down.svg)](/dra/submission.html)
      - [Metadata
        examples](https://docs.google.com/spreadsheets/d/1DTdUQ-WWOMjOA2eYQWmFYUB24hJysuwhvHLJoDFX4rc/edit#gid=0)
  - [FAQ](/dra/faq-e.html)
  - [Search](http://ddbj.nig.ac.jp/DRASearch/)
  - [Downloads![](/images/parts/arrow_down.svg)](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq)
      - [FASTQ](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq)
      - [SRA](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/sralite/ByExp/litesra/)
      - [XML
        Schema](https://github.com/ddbj/pub/tree/master/docs/dra/xsd)
  - [About DRA](/dra/about-e.html)

</div>

</div>

<div id="main" class="clearfix">

<div id="breadcrumb" class="clearfix">

  - [HOME](/dra/index-e.html "DDBJ Sequence Read Archive top page")
  - \>
  - Example

</div>

<div id="primary">

<div id="page_main">

# Example of metadata

<div id="main_index">

  - [Experiment (Spot, Platform)](#Experiment)
  - [454 single reads](#454_single)
  - [454 paired reads](#454_paired)
  - [Illumina single reads](#illumina_single)
  - [Illumina paired reads](#illumina_paired)
  - [SOLiD single reads](#SOLiD_single)
  - [SOLiD paired reads](#SOLiD_paired)
  - [Ion torrent single reads](#Ion_single)
  - [PacBio single reads (Standard sequencing)](#PacBio_standard)
  - [PacBio single reads (Circular consensus sequencing)](#PacBio_CCS)
  - [Typical examples causing errors in data validation](#errors)
  - [Reads having no application read](#no_application)
  - [Reads with inconsistent base coordinate](#inconsistent_base)
  - [Reads with relative order which cannot be
    specified](#cannot_specified)
  - [Experiment (Pipeline)](#Experiment_pipeline)
  - [Example 1 of Experiment XML Pipeline](#pipeline1)
  - [Example 2 of Experiment XML Pipeline](#pipeline2)

</div>

<div class="attention">

The DRA metadata submission tool cannot describe technical reads
(adapter, primer and barcode sequences). When sequencing data contain
technical reads to be submitted, [submitters need to create Experiment
XML files](/dra/submission-e.html#create-metadata-in-xml-files) and
describe technical reads in the \<SPOT\_DESCRIPTOR\>.

</div>

<div class="section">

## Experiment (Spot, Platform)

<div class="example">

### 454 single reads

<div class="example_read">

#### Read

Read composition

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Read Index <span class="normal">:</span></td>
<td>0</td>
<td>1</td>
</tr>
<tr class="even">
<td>Read <span class="normal">:</span></td>
<td>TCAG</td>
<td>ATAGAGTTGATCCTGGCTCAT……………</td>
</tr>
<tr class="odd">
<td>Base Coordinate <span class="normal">:</span></td>
<td>1</td>
<td><div class="base_left">
5
</div>
<div class="base_right">
80
</div></td>
</tr>
<tr class="even">
<td>Read Type <span class="normal">:</span></td>
<td>Adapter</td>
<td>Forward</td>
</tr>
</tbody>
</table>

</div>

<div class="example_metadata">

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Technical Read   | Adapter   | BaseCoord = 1   |
| 1          | Application Read | Forward   | BaseCoord = 5   |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Technical Read</READ_CLASS>
      <READ_TYPE>Adapter</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
    <READ_SPEC>
      <READ_INDEX>1</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>5</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission-e.html#Instrument)

| Platform | Instrument Model    |
| -------- | ------------------- |
| LS454    | 454 GS FLX Titanium |

</div>

</div>

<div class="example">

### 454 paired reads

<div class="example_read">

#### Read

Read composition

|                                               |         |                   |                    |            |
| --------------------------------------------- | ------- | ----------------- | ------------------ | ---------- |
| Read Index <span class="normal">:</span>      | 0       | 1                 | 2                  | 3          |
| Read <span class="normal">:</span>            | TCAG    | ATAGAGT……………CCTGG | TCGTAT……………TATTACG | CTCAT…………… |
| Base Coordinate <span class="normal">:</span> | 1       | 5                 |                    |            |
| Read Type <span class="normal">:</span>       | Adapter | Forward           | Linker             | Forward    |

</div>

<div class="example_metadata">

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method       |
| ---------- | ---------------- | --------- | --------------------- |
| 0          | Technical Read   | Adapter   | BaseCoord = 1         |
| 1          | Application Read | Forward   | BaseCoord = 5         |
| 2          | Technical Read   | Linker    | ExpectedBasecallTable |
| 3          | Application Read | Forward   | RelativeOrder         |

Expected Basecall Table

| Base Call                                  | Min Match | Max Mismatch | Match Edge |
| ------------------------------------------ | --------- | ------------ | ---------- |
| TCGTATAACTTCGTATAATGTATGCTATACGAAGTTATTACG | 38        | 5            | full       |
| CGTAATAACTTCGTATAGCATACATTATACGAAGTTATACGA | 38        | 5            | full       |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Technical Read</READ_CLASS>
      <READ_TYPE>Adapter</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
    <READ_SPEC>
      <READ_INDEX>1</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>5</BASE_COORD>
    </READ_SPEC>
    <READ_SPEC>
      <READ_INDEX>2</READ_INDEX>
      <READ_CLASS>Technical Read</READ_CLASS>
      <READ_TYPE>Linker</READ_TYPE>
      <EXPECTED_BASECALL_TABLE>
        <BASECALL min_match="38" max_mismatch="5" match_edge="full">TCGTATAACTTCGTATAATGTATGCTATACGAAGTTATTACG</BASECALL>
        <BASECALL min_match="38" max_mismatch="5" match_edge="full">CGTAATAACTTCGTATAGCATACATTATACGAAGTTATACGA</BASECALL>
      </EXPECTED_BASECALL_TABLE>          
    </READ_SPEC>   
    <READ_SPEC>
      <READ_INDEX>3</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <RELATIVE_ORDER follows_read_index="2"/>
    </READ_SPEC>        
  </SPOT_DECODE_SPEC>      
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission-e.html#Instrument)

| Platform | Instrument Model    |
| -------- | ------------------- |
| LS454    | 454 GS FLX Titanium |

</div>

</div>

<div class="example">

### Illumina single reads

<div class="example_read">

#### Read

Read composition

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Read Index <span class="normal">:</span></td>
<td>0</td>
</tr>
<tr class="even">
<td>Read <span class="normal">:</span></td>
<td>ATAGAGTTGATCCTGG……………CCTGGCTCA</td>
</tr>
<tr class="odd">
<td>Base Coordinate <span class="normal">:</span></td>
<td><div class="base_left">
1
</div>
<div class="base_right">
72
</div></td>
</tr>
<tr class="even">
<td>Read Type <span class="normal">:</span></td>
<td>Forward</td>
</tr>
</tbody>
</table>

</div>

<div class="example_metadata">

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Forward   | BaseCoord = 1   |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
    <SPOT_LENGTH>72</SPOT_LENGTH>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission-e.html#Instrument)

| Platform | Instrument Model             | Sequence Length |
| -------- | ---------------------------- | --------------- |
| Illumina | Illumina Genome Analyzer IIx | 72              |

</div>

</div>

<div class="example">

### Illumina paired reads

<div class="example_read">

#### Read

Read composition

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Read Index <span class="normal">:</span></td>
<td>0</td>
<td>1</td>
</tr>
<tr class="even">
<td>Read <span class="normal">:</span></td>
<td>ATAGAGTTGATCCTGG……………</td>
<td>CCTGGCTCATCAGTTGAT……………</td>
</tr>
<tr class="odd">
<td>Base Coordinate <span class="normal">:</span></td>
<td>1</td>
<td><div class="base_left">
101
</div>
<div class="base_right">
200
</div></td>
</tr>
<tr class="even">
<td>Read Type <span class="normal">:</span></td>
<td>Forward</td>
<td>Reverse</td>
</tr>
</tbody>
</table>

</div>

<div class="example_metadata">

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Forward   | BaseCoord = 1   |
| 1          | Application Read | Reverse   | BaseCoord = 101 |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
  <SPOT_LENGTH>200</SPOT_LENGTH>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
    <READ_SPEC>
      <READ_INDEX>1</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Reverse</READ_TYPE>
      <BASE_COORD>101</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission-e.html#Instrument)

| Platform | Instrument Model             | Sequence Length |
| -------- | ---------------------------- | --------------- |
| Illumina | Illumina Genome Analyzer IIx | 200             |

</div>

</div>

<div class="example">

### SOLiD single reads

<div class="example_read">

#### Read

Read composition

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Read Index <span class="normal">:</span></td>
<td>0</td>
</tr>
<tr class="even">
<td>Read <span class="normal">:</span></td>
<td>TTGATCCTGG……………CGCTCA</td>
</tr>
<tr class="odd">
<td>Base Coordinate <span class="normal">:</span></td>
<td><div class="base_left">
1
</div>
<div class="base_right">
50
</div></td>
</tr>
<tr class="even">
<td>Read Type <span class="normal">:</span></td>
<td>Forward</td>
</tr>
</tbody>
</table>

</div>

<div class="example_metadata">

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Forward   | BaseCoord = 1   |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
  <SPOT_LENGTH>50</SPOT_LENGTH>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission-e.html#Instrument)

| Platform  | Instrument Model    | Sequence Length |
| --------- | ------------------- | --------------- |
| ABI SOLID | AB SOLiD System 3.0 | 50              |

</div>

</div>

<div class="example">

### SOLiD paired reads

<div class="example_read">

#### Read

Read composition

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Read Index <span class="normal">:</span></td>
<td>0</td>
<td>1</td>
</tr>
<tr class="even">
<td>Read <span class="normal">:</span></td>
<td>ATCCTGG……………</td>
<td>CATCAGTTGAT……………</td>
</tr>
<tr class="odd">
<td>Base Coordinate <span class="normal">:</span></td>
<td>1</td>
<td><div class="base_left">
26
</div>
<div class="base_right">
50
</div></td>
</tr>
<tr class="even">
<td>Read Type <span class="normal">:</span></td>
<td>Forward</td>
<td>Forward</td>
</tr>
</tbody>
</table>

</div>

<div class="example_metadata">

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Forward   | BaseCoord = 1   |
| 0          | Application Read | Forward   | BaseCoord = 26  |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
  <SPOT_LENGTH>50</SPOT_LENGTH>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
    <READ_SPEC>
      <READ_INDEX>1</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>26</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission-e.html#Instrument)

| Platform  | Instrument Model    | Sequence Length |
| --------- | ------------------- | --------------- |
| ABI SOLID | AB SOLiD System 3.0 | 50              |

</div>

</div>

<div class="example">

### Ion torrent single reads

<div class="example_read">

#### Read

Read composition

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Read Index <span class="normal">:</span></td>
<td>0</td>
</tr>
<tr class="even">
<td>Read <span class="normal">:</span></td>
<td>AGCCGTATATAG……………CGTCAGAA</td>
</tr>
<tr class="odd">
<td>Base Coordinate <span class="normal">:</span></td>
<td><div class="base_left">
1
</div>
<div class="base_right">
(x)
</div></td>
</tr>
<tr class="even">
<td>Read Type <span class="normal">:</span></td>
<td>Forward</td>
</tr>
</tbody>
</table>

</div>

<div class="example_metadata">

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Forward   | BaseCoord = 1   |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission-e.html#Instrument)

| Platform    | Instrument Model       | Sequence Length |
| ----------- | ---------------------- | --------------- |
| Ion torrent | Ion torrent PGM/Proton |                 |

</div>

</div>

<div class="example">

### PacBio single reads (Standard sequencing)

<div class="example_metadata">

#### Metadata

Spot (Read Spec)

| Adapter Spec                                  |
| --------------------------------------------- |
| ATCTCTCTCTTTTCCTCCTCCTCCGTTGTTGTTGTTGAGAGAGAT |

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Forward   | BaseCoord = 1   |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission-e.html#Instrument)

| Platform     | Instrument Model |
| ------------ | ---------------- |
| Pacbio Smart | PacBio RS        |

Experiment Attribute

| Tag                 | Value               | Units |
| ------------------- | ------------------- | ----- |
| Sequencing Protocol | Standard sequencing |       |
| Insert size         | 8000                |       |

Experiment XML (EXPERIMENT\_ATTRIBUTES)

``` example_xml
<EXPERIMENT_ATTRIBUTES>
  <EXPERIMENT_ATTRIBUTE>
    <TAG>Sequencing Protocol</TAG>
    <VALUE>Standard sequencing</VALUE>
  </EXPERIMENT_ATTRIBUTE>
  <EXPERIMENT_ATTRIBUTE>
    <TAG>Insert size</TAG>
    <VALUE>8000</VALUE>
  </EXPERIMENT_ATTRIBUTE>    
</EXPERIMENT_ATTRIBUTES>
```

</div>

</div>

<div class="example">

### PacBio single reads (Circular consensus sequencing)

<div class="example_metadata">

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Other     | BaseCoord = 1   |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission-e.html#Instrument)

| Platform     | Instrument Model |
| ------------ | ---------------- |
| Pacbio Smart | PacBio RS        |

Experiment Attribute

| Tag                 | Value                         | Units |
| ------------------- | ----------------------------- | ----- |
| Sequencing Protocol | Circular consensus sequencing |       |
| Insert size         | 700                           |       |

Experiment XML (EXPERIMENT\_ATTRIBUTES)

``` example_xml
<EXPERIMENT_ATTRIBUTES>
  <EXPERIMENT_ATTRIBUTE>
    <TAG>Sequencing Protocol</TAG>
    <VALUE>Circular consensus sequencing</VALUE>
  </EXPERIMENT_ATTRIBUTE>
  <EXPERIMENT_ATTRIBUTE>
    <TAG>Insert size</TAG>
    <VALUE>700</VALUE>
  </EXPERIMENT_ATTRIBUTE>    
</EXPERIMENT_ATTRIBUTES>
```

</div>

</div>

<div class="section">

## Typical examples causing errors in data validation

In the case of validation error, correct the metadata and re-upload data
files after stopping validation process.

<div class="sub_index">

  - [Reads having no application read](#no_application)
  - [Reads with inconsistent base coordinate](#inconsistent_base)
  - [Reads with relative order which cannot be
    specified](#cannot_specified)

</div>

<div class="example">

### Reads having no application read

<div class="example_read">

#### Read

Read composition

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Read Index <span class="normal">:</span></td>
<td>0</td>
<td>1</td>
</tr>
<tr class="even">
<td>Read <span class="normal">:</span></td>
<td>ATCCGG</td>
<td>CATCAGTTGAT…………………………………………………</td>
</tr>
<tr class="odd">
<td>Base Coordinate <span class="normal">:</span></td>
<td>1</td>
<td><div class="base_left">
7
</div>
<div class="base_right">
50
</div></td>
</tr>
<tr class="even">
<td>Read Type <span class="normal">:</span></td>
<td>Primer</td>
<td>Linker <span class="attention_text">(should have at least one application)</span></td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="example">

### Reads with inconsistent base coordinate

<div class="example_read">

#### Read 1

Read composition

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Read Index <span class="normal">:</span></td>
<td>0</td>
<td>1</td>
</tr>
<tr class="even">
<td>Read <span class="normal">:</span></td>
<td>ATCCGG……………</td>
<td>CATCAG……………</td>
</tr>
<tr class="odd">
<td>Base Coordinate <span class="normal">:</span></td>
<td>1</td>
<td><div class="base_left">
<span class="attention_text">1 (should be &gt; 1)</span>
</div></td>
</tr>
<tr class="even">
<td>Read Type <span class="normal">:</span></td>
<td>Forward</td>
<td>Reverse</td>
</tr>
</tbody>
</table>

</div>

<div class="example_read">

#### Read 2

Read composition

|                                               |         |              |                                                        |
| --------------------------------------------- | ------- | ------------ | ------------------------------------------------------ |
| Read Index <span class="normal">:</span>      | 0       | 1            | 2                                                      |
| Read <span class="normal">:</span>            | TCAG    | ATAGAGTTG……… | TCGTATAACTTCGTATAATGTATGCTATACGAAGTT                   |
| Base Coordinate <span class="normal">:</span> | 1       | 5            | <span class="attention_text">4 (should be \> 5)</span> |
| Read Type <span class="normal">:</span>       | Adapter | Forward      | Reverse                                                |

</div>

<div class="example_read">

#### Read 3

Read composition

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Read Index <span class="normal">:</span></td>
<td>0</td>
<td>1</td>
</tr>
<tr class="even">
<td>Read <span class="normal">:</span></td>
<td>ATCCGGGTGTGTCATCAG</td>
<td>CATCAG……………</td>
</tr>
<tr class="odd">
<td>Base Coordinate <span class="normal">:</span></td>
<td><span class="attention_text">2 (should start at 1)</span></td>
<td><div class="base_left">
19
</div></td>
</tr>
<tr class="even">
<td>Read Type <span class="normal">:</span></td>
<td>Adapter</td>
<td>Forward</td>
</tr>
</tbody>
</table>

</div>

</div>

<div class="example">

### Reads with relative order which cannot be specified

<div class="example_read">

#### Read

Read composition

|                                               |         |            |         |                                                                                |
| --------------------------------------------- | ------- | ---------- | ------- | ------------------------------------------------------------------------------ |
| Read Index <span class="normal">:</span>      | 0       | 1          | 2       | 3                                                                              |
| Read <span class="normal">:</span>            | TCAG    | ATAGA…………… | ………………… | CTCAT…………………………………………………………                                                    |
| Base Coordinate <span class="normal">:</span> | 1       | 5          |         |                                                                                |
| Read Type <span class="normal">:</span>       | Adapter | Forward    | Linker  | Forward <span class="attention_text">(This forward cannot be specified)</span> |

</div>

<div class="example_metadata">

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Technical Read   | Adapter   | BaseCoord = 1   |
| 1          | Application Read | Forward   | BaseCoord = 5   |
| 2          | Technical Read   | Linker    | RelativeOrder   |
| 3          | Application Read | Forward   | RelativeOrder   |

</div>

</div>

</div>

<div class="section">

## Experiment (Pipeline)

<div class="example">

### Example 1 of Experiment XML Pipeline

<div class="example_metadata">

``` example_xml
<PROCESSING>
  <PIPELINE>
    <PIPE_SECTION section_name="Base Caller">
      <STEP_INDEX>1</STEP_INDEX>
      <PREV_STEP_INDEX>NIL</PREV_STEP_INDEX>
      <PROGRAM>Casava</PROGRAM>
      <VERSION>V1.8.3_V3.2.1</VERSION>
      <NOTES/>
    </PIPE_SECTION>
    <PIPE_SECTION section_name="Quality Scores">
      <STEP_INDEX>2</STEP_INDEX>
      <PREV_STEP_INDEX>1</PREV_STEP_INDEX>
      <PROGRAM>Casava</PROGRAM>
      <VERSION>V1.8.3_V3.2.1</VERSION>
      <NOTES/>
    </PIPE_SECTION>
  </PIPELINE>
</PROCESSING>
```

</div>

</div>

<div class="example">

### Example 2 of Experiment XML Pipeline

<div class="example_metadata">

``` example_xml
<PROCESSING>
  <PIPELINE>
    <PIPE_SECTION>
      <STEP_INDEX>1</STEP_INDEX>
      <PREV_STEP_INDEX/>
      <PROGRAM>bwa</PROGRAM>
      <VERSION>0.5.9-r16</VERSION>
      <NOTES>BWA-MEM algorithm alignment</NOTES>
    </PIPE_SECTION>
    <PIPE_SECTION>
      <STEP_INDEX>2</STEP_INDEX>
      <PREV_STEP_INDEX>1</PREV_STEP_INDEX>
      <PROGRAM>Picard</PROGRAM>
      <VERSION>1.74(1243)</VERSION>
      <NOTES>Duplicate reads marked</NOTES>
    </PIPE_SECTION>
    <PIPE_SECTION>
      <STEP_INDEX>3</STEP_INDEX>
      <PREV_STEP_INDEX>2</PREV_STEP_INDEX>
      <PROGRAM>GATK</PROGRAM>
      <VERSION>1.4-29</VERSION>
      <NOTES>Indel realignment</NOTES>
    </PIPE_SECTION>
    <PIPE_SECTION>
      <STEP_INDEX>4</STEP_INDEX>
      <PREV_STEP_INDEX>3</PREV_STEP_INDEX>
      <PROGRAM>GATK</PROGRAM>
      <VERSION>1.4-29</VERSION>
      <NOTES>Base quality score recalibration</NOTES>
    </PIPE_SECTION>
  </PIPELINE>
</PROCESSING>
```

</div>

</div>

</div>

</div>

</div>

</div>

<div id="side_navigation">

<div class="side_nav_menu handbook_contents page-noside">

<div id="in_this_page">

## In this page

</div>

</div>

</div>

</div>

<div id="footer_original" class="clearfix">

  - [Policies and
    Disclaimers](/policies-e.html "Policies and Disclaimers")
  - [News](/news/en/index-e.html "News archives")
  - [FAQs](/faq/en/index-e.html "Frequently asked questions")
  - [Sitemap](/sitemap-e.html "Sitemap")
  - [Calendar](/calendar-e.html "DDBJ Center Calendar")
  - [Address](/access-e.html "DDBJ Center address")
  - [Contact](/contact-e.html "Contact to DDBJ Center")
  - Last modified: 2018-02-20

</div>

</div>
