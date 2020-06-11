---
layout: indexed_content
title: Accepted Data File Formats
pathname: datafile-e
category: aboutgea
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
  - [Japanese](/gea/datafile.html)

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

[Genomic Expression Archive](/gea/index-e.html)

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

  - [Home](/gea/index-e.html)
  - [Submission
    Overview![](/images/parts/arrow_down.svg)](/gea/overview-e.html)
      - [Submit microarray experiment](/gea/submit-array-e.html)
      - [Submit sequencing experiment](/gea/submit-seq-e.html)
      - [Metadata](/gea/metadata-e.html)
      - [Data File](/gea/datafile-e.html)
      - [Validation](/gea/validation-e.html)
      - [Example](/gea/example-e.html)
      - [Array Design](/gea/adf-e.html)
      - [Data matrix](/gea/matrix-e.html)
      - [Reviewer Access](/gea/reviewer-access-e.html)
  - [FAQ](/gea/faq-e.html)
  - [Search
    (AOE)![](/images/parts/arrow_down.svg)](http://aoe.dbcls.jp/en)
      - [RefEx](http://refex.dbcls.jp/index.php?lang=en)
      - [Search
        (ArrayExpress)](https://www.ebi.ac.uk/arrayexpress/browse.html)
  - [Downloads](ftp://ftp.ddbj.nig.ac.jp/ddbj_database/gea)
  - [About GEA](/gea/about-e.html)

</div>

</div>

<div id="main" class="clearfix">

<div id="breadcrumb" class="clearfix">

  - [HOME](/gea/index-e.html "Genomic Expression Archive top page")
  - \>
  - Accepted Data File Formats

</div>

<div id="primary">

<div id="page_main">

<div id="book">

# Accepted Data File Formats

<div class="section book">

<div class="section chapter">

## Important notes on file preparation:

<div class="sub_index">

1.  Submit raw or raw matrix file(s) for every sample/hybridization of
    your experiment.
2.  Make sure the file names are constructed only from alphanumerals
    \[A-Z,a-z,0-9\], underscores \[\_\], hyphens \[-\] and dots \[.\],
    with no whitespaces, brackets, other punctuations or symbols.
3.  Any spreadsheet/matrix file should be saved in tab-delimited text
    (\*.txt) format and not Excel format (\*.xls, \*.xlsx)

</div>

</div>

<div class="section chapter">

## Microarray file formats

<div class="section section">

### Raw data file formats

Per assay raw file (recommended):

The "native" files generated by the microarray scanner software. Make
sure you do not change/edit the native files in any way, and submit one
raw file per hybridization assay. One assay can consist of just one
channel, as in Affymetrix experiments, or two channels, as in spotted
arrays often with red and green channels from two different
dyes/fluorophores.

Commercial microarray manufacturers have developed different raw data
file formats over the years. If you are unsure about whether your raw
files are in an accepted format, please check the list below.

Raw Matrix (not recommended):

A raw file in tab-delimited text (.txt) format, that contains data from
more than one hybridization assay (probes in rows and assays in
columns). The format requirements are strict (except for Illumina
GenomeStudio data files). See [matrix guidelines and
examples](/gea/matrix-e.html).

</div>

<div class="section section">

### Accepted formats by platform

The raw data file platform is recognized by using column headings in the
file's header:

<div class="sub_index">

  - Common platforms:
      - [Affymetrix](#affymetrix)
      - [Agilent](#agilent)
      - [Illumina](#illumina)
      - [GenePix](#genepix)
      - [NimbleScan](#nimblescan)
  - Others:
      - [ScanAlyze](#scanalyze)
      - [ScanArray](#scanarray-quantarry)
      - [QuantArray](#scanarray-quantarry)
      - [Arrayvision](#arrayvision)
      - [Spotfinder](#spotfinder)
      - [BlueFuse](#bluefuse)
      - [UCSF Spot](#ucsfspot)
      - [Applied Biosystems](#appliedbiosystems)
      - [CodeLink](#codelink)
      - [Imagene](#imagene)
      - [CSIRO Spot](#csirospot)
      - [Generic (for spotted arrays, non-platform specific)](#generic)

</div>

<div class="array">

  - Affymetrix  
    Our system recognizes .CEL and .EXP files using both the old GDAC
    formats and the newer GCOS/XDA formats.

  

  - Agilent  
    A file containing these headings is recognized as Agilent format
    file:

|     |     |           |           |
| --- | --- | --------- | --------- |
| Row | Col | PositionX | PositionY |

  - Illumina  
    Illumina raw data files are usually either in plain text or binary
    format. Plain text files are generated by the [Illumina GenomeStudio
    software](https://www.illumina.com/techniques/microarrays/array-data-analysis-experimental-design/genomestudio.html).
    The binary "IDAT" files (stands for "intensity data file") are
    generated by the scanner and can be parsed using R/BioConductor
    packages such as
    [illuminaio](http://www.bioconductor.org/packages/release/bioc/html/illuminaio.html)).
    IDAT is the preferred file format, as it is a binary format,
    containing all information required to analyse the data. In
    contrast, plain-text files can be missing information such as which
    are the control probes; this is sometimes provided in a separate
    file, but not always, and heterogeneity in raw data file formats
    makes systematic analysis of data difficult. Another disadvantage of
    plain-text files is that they are susceptible to human-introduced
    errors, as it is easy for someone to open the file in a text editor
    or spreadsheet program and accidentally change its content. If
    you're submitting a GenomeStudio text file, below is an example of
    the expected column headings:
    PROBE\_IDs are always in the format of "ILMN\_123456". QT stands for
    quantitation type, i.e. the type of measurement recorded in the
    column, e.g. AVGSignal. You can have as many quantitation types as
    required. Order the columns by sample names, then by quantitation
    types.

  

  - GenePix  
    GenePix format files (usually with file extension .gpr or .txt) are
    recognised using the following column headings:

|       |        |     |   |   |
| ----- | ------ | --- | - | - |
| Block | Column | Row | X | Y |

  - NimbleScan  
    NimbleScan files (Feature, Probe and Pair) all contain the following
    headings:

|           |   |   |
| --------- | - | - |
| PROBE\_ID | X | Y |

  - ScanAlyze  
    The following column headings are recognized as being from a
    ScanAlyze format file:

|      |     |     |      |     |       |     |
| ---- | --- | --- | ---- | --- | ----- | --- |
| GRID | COL | ROW | LEFT | TOP | RIGHT | BOT |

  - ScanArray/QuantArray  
    ScanArray Express files are recognized from the following headings:

|              |           |             |          |   |   |
| ------------ | --------- | ----------- | -------- | - | - |
| Array Column | Array Row | Spot Column | Spot Row | X | Y |

while the older QuantArray format has these headings:

|              |           |        |     |
| ------------ | --------- | ------ | --- |
| Array Column | Array Row | Column | Row |

  - ArrayVision  
    The following column headings are recognized as indicating an
    ArrayVision format file:

|         |           |
| ------- | --------- |
| Primary | Secondary |

Newer "lg2" ArrayVision files are identified by the following column
headings:

|             |
| ----------- |
| Spot labels |

  - Spotfinder  
    Spotfinder files are recognized by the following column headings:

|    |    |    |    |
| -- | -- | -- | -- |
| MC | MR | SC | SR |

  - BlueFuse  
    A file containing the following headings is recognized as a BlueFuse
    file:

|     |     |            |            |
| --- | --- | ---------- | ---------- |
| COL | ROW | SUBGRIDCOL | SUBGRIDROW |

  - UCSF Spot  
    UCSF Spot files are recognized by the following column headings:

|          |          |           |           |
| -------- | -------- | --------- | --------- |
| Arr-colx | Arr-coly | Spot-colx | Spot-coly |

  - Applied Biosystems  
    Files generated by Applied Biosystems software have the following
    headings:

|           |          |
| --------- | -------- |
| Probe\_ID | Gene\_ID |

  - CodeLink  
    CodeLink Expression Analysis files are identified using the
    following:

|              |              |           |           |
| ------------ | ------------ | --------- | --------- |
| Logical\_row | Logical\_col | Center\_X | Center\_Y |

  - ImaGene  
    ImaGene files are recognized using the following columns:

|             |          |        |     |       |         |
| ----------- | -------- | ------ | --- | ----- | ------- |
| Meta Column | Meta Row | Column | Row | Field | Gene ID |

The ImaGene 3.0 format is also supported:

|           |           |          |          |      |          |
| --------- | --------- | -------- | -------- | ---- | -------- |
| Meta\_col | Meta\_row | Sub\_col | Sub\_row | Name | Selected |

  - CSIRO Spot  
    CSIRO Spot files contain the following columns:

|         |         |         |         |        |
| ------- | ------- | ------- | ------- | ------ |
| grid\_c | grid\_r | spot\_c | spot\_r | indexs |

  - Generic (for spotted arrays, non-platform specific)  
    If your raw data file contains BlockColumn/BlockRow/Column/Row
    fields denoting [probe location on a spotted
    array](/gea/adf-e.html#feature), you can use this generic format
    with four columns followed by columns of data:

|            |         |        |     |
| ---------- | ------- | ------ | --- |
| MetaColumn | MetaRow | Column | Row |

</div>

</div>

<div class="section section">

### Processed data files

Processed files are generated from raw files by procedures such as
background correction, normalization, and further statistical analyses
(e.g. calculating fold-changes and associated p-values). The final
processed data are defined as the data on which the conclusions in the
related manuscript are based. We accept either "native" processed files
from microarray scanner software (e.g. ".chp" files from Affymetrix
scanners, output files from GenomeStudio software for Illumina
BeadChip), or two-dimensional spreadsheet files in tab-delimited text
(.txt) format. For the latter, the probes/probesets/gene names are in
rows, and data from one or more hybridizations are in columns. We accept
processed files from the following scenarios:

<div class="sub_index">

  - one processed file per hybridization (recommended), i.e. you have a
    series of processed files.
  - one spreadsheet ("matrix") file containing normalised data from all
    hybridizations (not recommended).
  - several spreadsheet ("matrix") files containing normalised data from
    different stages of data processing, e.g. one file containing
    normalized probe intensities and another containing fold-change data
    summarized at the gene level.

</div>

</div>

<div class="section section">

### Processed text file format

In the two-dimensional table, you should have probes/genes in rows and
samples/data in columns:

Probes/genes in rows: Where possible, as row headers, you should use
official probe names/identifiers, matching those in the array design
file, so one can map each row of data to the correct probe. Put the
probe identifiers in the first column under a heading Reporter
Identifier (for probes) or CompositeSequence Identifier (for "composite"
collation of probes, most common example being Affymetrix probe sets).
If probe identifiers are not available, try to use proper gene symbols
or other identifiers (e.g. GenBank cDNA accession, UniProt protein
accession).

Samples/Data in columns: Where possible, label each data column with the
same sample names as you declare on the SDRF. This would allow mapping
of a column of data to correct sample(s).

A processed .txt file containing data from one single hybridization
should look like this:

<div class="sdrf_ex">

|                     |                               |                     |
| ------------------- | ----------------------------- | ------------------- |
| Reporter Identifier | sample 1 normalised intensity | sample 1 background |
| probe\_name\_1      | 233.5                         | 69.1                |
| probe\_name\_2      | 129.4                         | 27.6                |

And here is an example where gene names are used as row headings:

|                      |                               |                     |
| -------------------- | ----------------------------- | ------------------- |
| Human HGNC gene name | sample 1 normalised intensity | sample 1 background |
| CDKN2A               | 233.5                         | 69.1                |
| BRCA2                | 129.4                         | 27.6                |

Processed "matrixes" summarising data from multiple hybridizations
should look like the following. Again, as for per-hybridization
processed files, if probe identifiers are not available, try to use
proper gene symbols or other identifiers (e.g. GenBank cDNA accession,
UniProt protein accession).

Matrix of normalised values per sample:

|                     |                     |                     |                     |                     |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| Reporter Identifier | sample 1 normalised | sample 2 normalised | sample 3 normalised | sample 4 normalised |
| probe\_name\_1      | 26.9                | 44.3                | 62.3                | 58.5                |
| probe\_name\_2      | 22.9                | 43.7                | 58.2                | 67.4                |

|                   |                     |                     |                     |                     |
| ----------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| GenBank accession | sample 1 normalised | sample 2 normalised | sample 3 normalised | sample 4 normalised |
| BC000578          | 26.9                | 44.3                | 62.3                | 58.5                |
| M31642            | 22.9                | 43.7                | 58.2                | 67.4                |

Matrix of summarised values (one column of data maps to multiple
samples):

|                     |                        |                        |                           |
| ------------------- | ---------------------- | ---------------------- | ------------------------- |
| Reporter Identifier | drug A treated average | drug B treated average | untreated control average |
| probe\_name\_1      | 44.6                   | 89.3                   | 290.15                    |
| probe\_name\_2      | 98.3                   | 36.7                   | 100.52                    |

</div>

</div>

<div class="section section">

### Additional files

A spike-in list for single-cell analysis or supplementary files for data
analysis can be attached to GEA experiment as "additional files"
(example,
[E-MTAB-3624](https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-3624/))
Please [contact GEA team](/contact-e.html) to submit additional files.

</div>

</div>

<div class="section chapter">

## Sequencing data

<div class="sub_index">

  - [Raw data files](#seq_raw)
  - [Processed data files](#seq_proc)

</div>

<div class="section section">

### Raw data files

Sequencing raw data files need to be pre-registered to DDBJ Sequence
Read Archive (DRA). Please see the [accepted data
files](/dra/submission-e.html#run-data-files) for DRA.

</div>

<div class="section section">

### Processed data files

The final processed data are defined as the data on which the
conclusions in the related manuscript are based. We do not expect
standard alignment files (e.g., BAM, SAM, BED) as processed data since
conclusions are expected to be based on further-processed data. When
standard alignments are the only processed data available, please [write
to us](/contact-e.html) to inquire about whether your data are suitable
for submission to GEA. Requirements for processed data files are not
fully standardized and will depend on the nature of the experiment.

Expression profiling analysis usually generates quantitative data for
features of interest. Features of interest may be genes, transcripts,
exons, miRNA, or some other genetic entity. Two levels of data are often
generated:

<div class="sub_index">

  - raw counts of sequencing reads for the features of interest, and/or
  - normalized abundance measurements, e.g., output from Cufflinks,
    Cuffdiff, DESeq, edgeR, etc.

</div>

Either or both of these data types may be supplied as processed data.
They may be formatted either as a matrix table or individual files for
each sample (recommended). Provide complete data with values for all
features (e.g., genes) and all samples, not only lists of
differentially-expressed genes.

ChIP-Seq data might include peak files with quantitative data, tag
density files, etc. Common formats include WIG, bigWig, bedGraph.

Features (e.g., genes, transcripts) in processed data files should be
traceable using public accession numbers or chromosome coordinates. The
[reference assembly](https://www.ncbi.nlm.nih.gov/assembly/) used (e.g.,
hg19, mm9, GCF\_000001405.13) should be provided in normalization data
transformation protocol and/or high throughput sequence alignment
protocol. In addition, a description of the format and content of
processed data files should be provided in these protocols.

If you provide WIG, bedGraph, GFF, or GTF files, please refer to the
[UCSC file format FAQ](http://www.genome.ucsc.edu/FAQ/FAQformat.html)
for format requirements.

</div>

<div class="section section">

### Processed matrix files (for advanced users)

For submitters who are familiar with MAGE-TAB specification, we also
accept matrix files in strict MAGE-TAB format, which allows each data
point in the file (in a given row and a given column) to be mapped to a
particular assay in the experiment and to a particular probe/probe set
in the array design file in a human readable way and also
programmatically. Check out [this guide](/gea/matrix-e.html) on the
strict matrix format for more information.

</div>

<div class="section section">

### Additional files

A spike-in list for single-cell analysis or supplementary files for data
analysis can be attached to GEA experiment as "additional files"
(example,
[E-MTAB-3624](https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-3624/))
Please [contact GEA team](/contact-e.html) to submit additional files.

</div>

</div>

</div>

</div>

</div>

</div>

<div id="side_navigation">

<div class="side_nav_menu handbook_contents handbook datafile">

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
  - Last modified: 2018-08-10

</div>

</div>
