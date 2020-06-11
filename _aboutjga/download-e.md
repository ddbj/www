---
layout: indexed_content
title: Download steps
pathname: download-e
category: aboutjga
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
  - [Japanese](/jga/download.html)

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

[Japanese Genotype-phenotype Archive](/jga/index-e.html)

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

  - [Home](/jga/index-e.html)
  - [Studies](https://ddbj.nig.ac.jp/jga/viewer/view/studies)
  - [Submission![](/images/parts/arrow_down.svg)](/jga/submission-e.html)
      - [How to submit](/jga/substep-e.html)
      - [Example
        submission](https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318)
      - [How to download](/jga/download-e.html)
      - [XML
        Schema](https://github.com/ddbj/pub/tree/master/docs/jga/xsd/)
  - [FAQ](/jga/faq-e.html)

</div>

</div>

<div id="main" class="clearfix">

<div id="breadcrumb" class="clearfix">

  - [HOME](/jga/index-e.html "Japanese Genotype-phenotype Archive top page")
  - \>
  - Download steps

</div>

<div id="primary">

<div id="page_main">

<div id="book">

# Download steps

<div class="section book">

<div class="section chapter">

## JGA data use request

Apply data use request to [National Bioscience Database Center
(NBDC)](https://humandbs.biosciencedbc.jp/en/data-use) with the JGA
Study (e.g., JGAS00000000025) and Dataset (e.g., JGAD00000000025)
accession numbers.

Approved users should follow the [NBDC Security Guidelines for Human
Data (for Data
Users)](http://humandbs.biosciencedbc.jp/en/guidelines/security-guidelines-for-users).

NBDC will notify user ID and password to approved users. The download
account will expire in two weeks after assignment.

This page explains how to use the JGA data.

</div>

<div class="section chapter">

## Download data by using the GUI tool

<div class="section section">

### JGA GUI download tool

Download the JGA GUI download tool (last updated: 2018-04-16，v3.5.0).

<div class="attention no_top">

Use this tool in Java 8. This tool does not work in Java 7.

</div>

#### Windows

[JGA download tool for Windows](/files/submission/3-5-0/JGA_tool.zip)

Run the tool by clicking the "bat" file in the folder.

#### Unix

[JGA download tool for Unix](/files/submission/3-5-0/JGA_tool_unix.zip)

Run the tool by executing the sh file in the directory.

Use "Java SE Development Kit 8" and not OpenJDK.

</div>

<div class="section section">

### Login

Run the JGA tool and login the JGA system with user ID and password
notified by [NBDC](http://humandbs.biosciencedbc.jp/en/).

JGA submission and download tool is the same software behave in
different mode according to the account used.

![Login the JGA tool](/images/submission/jgasub1.jpg
"Login the JGA tool")

The left window is your local computer and the right window is the
secure JGA file server.

In the right window, data sets approved to use are listed. Check the
data sets you want to download. Total number of files and size are
displayed at below.

![Select data sets to download](/images/books/jgadown01.jpg
"Select data sets to download")

Click the \[Download\] button and the tool download and decrypt the data
sets. The number of parallel download can be adusted from 1-5 at
"Parallel Download count".

When this process finishes, decrypted data set are downloaded to your
local computer.

In the created directory with data set accession number, the metadata
XML and data files have been downloaded.

![metadata XML and data files](/images/books/jgadown03.jpg
"metadata XML and data files")

You can expand the directory tree by clicking the arrowhead left to the
dataset directory icon. By selecting each data directory and file, you
can download individual files.

![Download data set](/images/books/jgadown02.jpg "Download data set")

</div>

<div class="section section">

### Download via a proxy server

To use the tool via the proxy server, you need to set the name and port
number of the proxy server.

Edit the "proxy.properties" file in the tool folder and enter the name
(server=) and port number (port=) of the proxy server.

``` code
# Enter the server name and port number of the proxy server to connect the JGA server via the proxy.
# For example:
# server=proxy.example.ac.jp
# port=8080
server=
port=
```

After login, when the proxy requires user authentication, enter the
authentication information in the displayed window. The v3.2.0
(2016-11-17) tool is compatible with the BASIC authentication but not
with the Digest authentication.

</div>

<div class="section section">

### View metadata in website

Users can view JGA metadata also in website.

From the ["JGA studies"
page](https://ddbj.nig.ac.jp/jga/viewer/view/studies), move to the JGA
datasets page.

![JGA studies](/images/books/jgadown04.jpg "JGA studies")

Select data sets with data use permission.

![Select data sets to view metadata](/images/books/jgadown05.jpg
"Select data sets to view metadata")

As in the JGA tool, login the website by using user ID and password
notified by NBDC.

![Login with data use account](/images/books/jgadown06.jpg
"Login with data use account")

Users can view metadata in the website after login.

![Users can view metadata in the website after
login](/images/books/jgadown07.jpg
"Users can view metadata in the website after login")

Logout from the metadata view site

Access to the metadata view site is limited to 1 from same account.
After viewing metadata, do NOT close your browser but logout at
right-top "Logout".  
When an error "Maximum sessions of 1 for this principal exceeded" is
displayed, login again after 30 min interval.

After viewing metadata, do NOT close your browser but logout at
right-top "Logout".

![Logout from metadata view site](/images/books/jgadown08.jpg
"Logout from metadata view site")

The following error is displayed when access from single account exceeds
"1". Login again after 30 min interval.

![Error when access from single account exceeds
1](/images/books/jgadown09.jpg
"Error when access from single account exceeds 1")

</div>

<div class="section section">

### Data file transfer by hard disk

For all hard drive request please contact [JGA team](/contact-e.html)
and let us know the permitted datasets you would like to have
transferred.

<span class="attention_text">If you would like the data in hard disk,
please prepare the USB hard disk drive (filesystem should be NTFS, ext3
or ext4) with enough space for the approved dataset. Be sure to virus
check the entire filesystem and send us the empty drive.</span>

Please send your disk to the following address. Be sure to label your
disk.

Postal code: 411-8540  
Kodama Yuichi  
1111 Yata, Mishima, Shizuoka 411-8540, Japan  
Phone:+81-55-981-6853

</div>

</div>

</div>

<div class="section chapter">

## Download data by using the CUI tool

<div class="section section">

### JGA CUI download tool

Download the JGA CUI download tool (Last updated: 2018-04-16, v3.5.0).
At present, only the Unix tool is available.

#### Unix

[Unix JGA tool](/files/submission/3-5-0/JGA_tool_unix.zip)

</div>

<div class="section section">

### Login

Run the JGA tool in the tool directory.

``` code
$ ./JgaDownload.sh  
```

Login with the user name and password notified by
[NBDC](https://humandbs.biosciencedbc.jp/en).

``` code
JGA login user name : 
JGA Login Password  : 
```

The user name and password can be configured.

``` code
$ . ./JgaSetUser.sh
or
$ source ./JgaSetUser.sh
```

Configure the user name and password.

``` code
JGA login user name : 
JGA Login Password  : 
```

After configuration, run the tool.

</div>

<div class="section section">

### Download via the proxy server

Configure the proxy server and port by editting the proxy.properties
file. Execute as below for the proxy BASIC authentification.

``` code
$ . ./JgaSetProxyUser.sh
or
$ source ./JgaSetProxyUser.sh
```

Enter the user name and password for the proxy.

``` code
Proxy server user name : 
Proxy server password  : 
```

After configuration, run the tool. The tool dose not handle the Digest
authentification.

</div>

<div class="section section">

### Command line options and arguments.

``` code
-h,--help
-v,--version
-l,--list {datasets|}
-f,--files [/metadata]
-d,--download 
-i,--download-list 
-q,--quiet
-o,--output-dir 
```

</div>

<div class="section section">

### List approved Dataset, object and data files

List all approved Datasets.

``` code
$ sh JgaDownload.sh --list datasets
accession       size
JGAD00000000002 14.35KB
JGAD00000000003 15.37KB
JGAD00000000004 31.77KB
```

List all Data/Analysis objects in the approved Dataset.

``` code
$ sh JgaDownload.sh --list JGAD00000000004
accession       size
JGAR00000000004 19
JGAR00000000005 19576
JGAZ00000000004 25
JGAZ00000000005 5066
```

List data and metadata files in the approved Dataset.

``` code
$ ./JgaDownload.sh --files JGAD00000000004
file                                                 size
JGAD00000000004/JGAR00000000004/Data-Test1-1.txt     19
JGAD00000000004/JGAR00000000005/Data-Test2-1.txt     4635
JGAD00000000004/JGAR00000000005/Data-Test2-2.txt     14941
JGAD00000000004/JGAZ00000000004/Analysis-Test1-1.txt 25
JGAD00000000004/JGAZ00000000005/Analysis-Test2-1.txt 1943
JGAD00000000004/JGAZ00000000005/Analysis-Test2-2.txt 3123

$ ./JgaDownload.sh --files JGAD00000000004/metadata
file                                                    size
JGAD00000000004/metadata/JGAD00000000004.analysis.xml   2145
JGAD00000000004/metadata/JGAD00000000004.dac.xml        274
JGAD00000000004/metadata/JGAD00000000004.data.xml       1121
JGAD00000000004/metadata/JGAD00000000004.dataset.xml    917
JGAD00000000004/metadata/JGAD00000000004.experiment.xml 1375
JGAD00000000004/metadata/JGAD00000000004.policy.xml     536
JGAD00000000004/metadata/JGAD00000000004.sample.xml     447
JGAD00000000004/metadata/JGAD00000000004.study.xml      1035

$ ./JgaDownload.sh --files JGAR00000000005
file                                             size
JGAD00000000004/JGAR00000000005/Data-Test2-1.txt 4635
JGAD00000000004/JGAR00000000005/Data-Test2-2.txt 14941
```

Download files by specifying an object.

``` code
$ ./JgaDownload.sh --download JGAR00000000005
```

``` code
$ ./JgaDownload.sh --download JGAD00000000004
```

Download files by specifying a list file.

``` code
$ cat samplelist.txt 
JGAD00000000004/metadata/dac
JGAD00000000004/metadata/dataset
JGAD00000000004/metadata/policy
JGAR00000000004/Data-Test1-1.txt
JGAZ00000000005/Analysis-Test2-1.txt
$ ./JgaDownload.sh --download-list samplelist.txt 
```

Download files into a specified directory.

``` code
$ ./JgaDownload.sh --download JGAD00000000004 --output-dir /tmp
```

</div>

</div>

</div>

</div>

</div>

<div id="side_navigation">

<div class="side_nav_menu handbook_contents handbook download">

<div id="in_this_page">

## In this page

</div>

</div>

<div class="side_nav_menu">

## Apply data access/submission

<div id="links">

  - <span id="nbdc">[![](/images/parts/nbdc_logo.png)National Bioscience
    Database
    Center](https://humandbs.biosciencedbc.jp/en/ "National Bioscience Database Center")</span>

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
  - Last modified: 2018-08-03

</div>

</div>
