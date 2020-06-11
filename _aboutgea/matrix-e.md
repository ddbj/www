---
layout: indexed_content
title: MAGE-TAB format for raw and processed data matrix
pathname: matrix-e
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
  - [Japanese](/gea/matrix.html)

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
  - MAGE-TAB format for raw and processed data matrix

</div>

<div id="primary">

<div id="page_main">

<div id="book">

# MAGE-TAB format for raw and processed data matrix

<div class="section book">

<div class="section chapter">

## Data matrix format

This format allows each data point in the file to be mapped to a
particular assay in the experiment, and to a particular probe/probe set
in the array design file of your experiment. For the mapping to work
smoothly, each matrix file should contain data from assays on a single
array design (i.e if you use multiple array designs in your experiment,
mutliple matrix files will be needed), and the column/row headings and
the order of columns are strictly controlled:

Column/row headings:

The first header line of a matrix file, Hybridization REF, allows
assay-mapping via assay names. The second header row lists the
"quantitation types" for each column (i.e. the type of measurement
recorded in the column, e.g. log2 ratio). Finally, the first column,
Reporter REF is used to map the data rows to probe identifiers from the
array design file.

Measurements calculated from multiple assays:

Measurements such as Log2 fold-changes are often calculated from more
than one assay (e.g. for every given gene, calculate the average of 3
knockout samples vs the average of 3 wild-type controls). In that case,
you can put down multiple assay names per column, with the assay names
separated by semi-colons:

<div class="sdrf_ex">

|                   |                                          |                                          |
| ----------------- | ---------------------------------------- | ---------------------------------------- |
| Hybridization REF | <span class="blue">Hyb1;Hyb2;Hyb3</span> | <span class="blue">Hyb4;Hyb5;Hyb6</span> |
| Reporter REF      | <span class="blue">log2 FC</span>        | <span class="blue">log2 FC</span>        |

</div>

Order of data columns:

The format requires an ordered and regular organization of the columns:
first by assay, and then by quantitation type:

Correct

<div class="sdrf_ex">

|                   |                                   |                                  |                                   |                                  |
| ----------------- | --------------------------------- | -------------------------------- | --------------------------------- | -------------------------------- |
| Hybridization REF | <span class="blue">Hyb1</span>    | <span class="blue">Hyb1</span>   | <span class="red">Hyb2</span>     | <span class="red">Hyb2</span>    |
| Reporter REF      | <span class="blue">log2 FC</span> | <span class="red">p-value</span> | <span class="blue">log2 FC</span> | <span class="red">p-value</span> |

</div>

Wrong

<div class="sdrf_ex">

|                   |                                   |                                   |                                  |                                  |
| ----------------- | --------------------------------- | --------------------------------- | -------------------------------- | -------------------------------- |
| Hybridization REF | <span class="blue">Hyb1</span>    | <span class="red">Hyb2</span>     | <span class="blue">Hyb1</span>   | <span class="red">Hyb2</span>    |
| Reporter REF      | <span class="blue">log2 FC</span> | <span class="blue">log2 FC</span> | <span class="red">p-value</span> | <span class="red">p-value</span> |

</div>

<div class="section section">

### Example non-Affymetrix data matrix

In this example, four of the six assays are being mapped to log2 ratio
values in the matrix file. Each row of data is mapped to a Reporter Name
defined in the [array design file](/gea/adf-e.html), in this case,
[A-AGIL-6](https://www.ebi.ac.uk/arrayexpress/files/A-AGIL-6/A-AGIL-6.adf.txt).

Assay Name nodes in SDRF:

<div class="sdrf_ex">

|              |
| ------------ |
| Assay Name   |
| Sample 1:Cy3 |
| Sample 2:Cy3 |
| Sample 3:Cy3 |
| Sample 4:Cy3 |

</div>

Non-Affymetrix data matrix:

<div class="sdrf_ex">

|                   |                                                     |                                                     |
| ----------------- | --------------------------------------------------- | --------------------------------------------------- |
| Hybridization REF | <span class="blue">Sample 1:Cy3;Sample 2:Cy3</span> | <span class="blue">Sample 3:Cy3;Sample 4:Cy3</span> |
| Reporter REF      | <span class="blue">log2 ratio</span>                | <span class="blue">log2 ratio</span>                |
| A\_42\_P834147    | <span>4.2</span>                                    | <span>2.6</span>                                    |
| A\_43\_P19480     | <span>1.9</span>                                    | <span>1.3</span>                                    |
| A\_42\_P495989    | <span>5.3</span>                                    | <span>9.8</span>                                    |

</div>

</div>

### Example Affymetrix data matrix

In this example, two of the six assays are being mapped to data with two
different quantitation types (CELIntensity, CELStdev). Each row of data
is mapped to a CompositeElement Name (because each Affymetrix probe set
is made up of a number of probes), defined in the [array design
file](/gea/adf-e.html), in this case,
[A-AFFY-44](https://www.ebi.ac.uk/arrayexpress/files/A-AFFY-44/A-AFFY-44.adf.txt).

Assay Name nodes in SDRF:

<div class="sdrf_ex">

|                 |
| --------------- |
| Assay Name      |
| Sample 1:biotin |
| Sample 2:biotin |

</div>

Affymetrix data matrix:

<div class="sdrf_ex">

|                      |                                           |                                           |                                           |                                           |
| -------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| Hybridization REF    | <span class="blue">Sample 1:biotin</span> | <span class="blue">Sample 1:biotin</span> | <span class="blue">Sample 2:biotin</span> | <span class="blue">Sample 2:biotin</span> |
| CompositeElement REF | <span class="blue">CELIntensity</span>    | <span class="blue">CELStdev</span>        | <span class="blue">CELIntensity</span>    | <span class="blue">CELStdev</span>        |
| AFFX\_ThrX-M\_at     | <span>142.1</span>                        | <span>2.6</span>                          | <span>199.1</span>                        | <span>6.5</span>                          |
| 20050\_at            | <span>70.4</span>                         | <span>1.3</span>                          | <span>88.3</span>                         | <span>4.7</span>                          |
| 20051\_at            | <span>227.3</span>                        | <span>9.8</span>                          | <span>213.2</span>                        | <span>3.5</span>                          |

</div>

</div>

</div>

</div>

</div>

</div>

<div id="side_navigation">

<div class="side_nav_menu handbook_contents handbook matrix">

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
  - Last modified: 2018-07-23

</div>

</div>
