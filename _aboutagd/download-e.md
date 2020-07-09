---
layout: indexed_content
title: Download steps
pathname: download-e
category: aboutagd
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
  - [Japanese](/agd/download.html)

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

[AMED Genome group sharing Database](/agd/index-e.html)

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

  - [Home](/agd/index-e.html)
  - [Studies](https://ddbj.nig.ac.jp/agd/viewer/view/studies)
  - [Submission![](/images/parts/arrow_down.svg)](/agd/submission-e.html)
      - [How to submit](/agd/substep-e.html)
      - [Example
        submission](https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318)
      - [How to download](/agd/download-e.html)
      - [XML
        Schema](https://github.com/ddbj/pub/tree/master/docs/jga/xsd/)

</div>

</div>

<div id="main" class="clearfix">

<div id="breadcrumb" class="clearfix">

  - [HOME](/agd/index-e.html "AMED Genome group sharing Database top page")
  - \>
  - Download steps

</div>

<div id="primary">

<div id="page_main">

<div id="book">

# Download steps

<div class="section book">

<div class="section chapter">

## AGD data use request

Apply data use request to [National Bioscience Database Center
(NBDC)](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines) with the
AGD Study (e.g., AGDS\_00000000005) and Dataset (e.g.,
AGDD\_00000000005) IDs.

Approved users should follow the [NBDC Security Guidelines for Human
Data (for Data
Users)](https://gr-sharingdbs.biosciencedbc.jp/group-security-guidelines-for-users).

NBDC will notify user ID and password to approved users. The download
account will expire in three months after assignment.

This page explains how to use the AGD data.

</div>

<div class="section chapter">

## Download data

<div class="section section">

### AGD download tool

Download the AGD download tool (last updated: 2018-11-22，v3.5.0).

<div class="attention no_top">

Use this tool in Java 8. This tool does not work in Java 7.

</div>

#### Windows

[AGD download tool for Windows]({{ site.baseurl }}/assets/files/submission/3-5-0/AGD_tool.zip)

Run the tool by clicking the "bat" file in the folder.

#### Unix

[AGD download tool for Unix]({{ site.baseurl }}/assets/files/submission/3-5-0/AGD_tool_unix.zip)

Run the tool by executing the sh file in the directory.

Use "Java SE Development Kit 8" and not OpenJDK.

</div>

<div class="section section">

### Login

Run the AGD tool and login the AGD system with user ID and password
notified by
[NBDC](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines).

AGD submission and download tool is the same software behave in
different mode according to the account used.

![Login the AGD tool](/images/submission/agdsub1.jpg
"Login the AGD tool")

The left window is your local computer and the right window is the
secure AGD file server.

In the right window, data sets approved to use are listed. Check the
data sets you want to download. Total number of files and size are
displayed at below.

![Select data sets to download](/images/books/agddown01.jpg
"Select data sets to download")

Click the \[Download\] button and the tool download and decrypt the data
sets. The number of parallel download can be adusted from 1-5 at
"Parallel Download count".

When this process finishes, decrypted data set are downloaded to your
local computer.

In the created directory with data set accession number, the metadata
XML and data files have been downloaded.

![metadata XML and data files](/images/books/agddown03.jpg
"metadata XML and data files")

You can expand the directory tree by clicking the arrowhead left to the
dataset directory icon. By selecting each data directory and file, you
can download individual files.

![Download data set](/images/books/agddown02.jpg "Download data set")

</div>

<div class="section section">

### Download via a proxy server

To use the tool via the proxy server, you need to set the name and port
number of the proxy server.

Edit the "proxy.properties" file in the tool folder and enter the name
(server=) and port number (port=) of the proxy server.

``` code
# Enter the server name and port number of the proxy server to connect the AGD server via the proxy.
# For example:
# server=proxy.example.ac.jp
# port=8080
server=
port=
```

After login, when the proxy requires user authentication, enter the
authentication information in the displayed window. The v3.5.0
(2018-11-21) tool is compatible with the BASIC authentication but not
with the Digest authentication.

</div>

<div class="section section">

### View metadata in website

Users can view AGD metadata also in website.

From the ["AGD studies"
page](https://ddbj.nig.ac.jp/agd/viewer/view/studies), move to the AGD
datasets page.

![AGD studies](/images/books/agddown04.jpg "AGD studies")

Select data sets with data use permission.

![Select data sets to view metadata](/images/books/agddown05.jpg
"Select data sets to view metadata")

As in the AGD tool, login the website by using user ID and password
notified by NBDC.

![Login with data use account](/images/books/agddown06.jpg
"Login with data use account")

Users can view metadata in the website after login.

![Users can view metadata in the website after
login](/images/books/agddown07.jpg
"Users can view metadata in the website after login")

Logout from the metadata view site

Access to the metadata view site is limited to 1 from same account.
After viewing metadata, do NOT close your browser but logout at
right-top "Logout".  
When an error "Maximum sessions of 1 for this principal exceeded" is
displayed, login again after 30 min interval.

After viewing metadata, do NOT close your browser but logout at
right-top "Logout".

![Logout from metadata view site](/images/books/agddown08.jpg
"Logout from metadata view site")

The following error is displayed when access from single account exceeds
"1". Login again after 30 min interval.

![Error when access from single account exceeds
1](/images/books/jgadown09.jpg
"Error when access from single account exceeds 1")

</div>

<div class="section section">

### Data file transfer by hard disk

For all hard drive request please contact [AGD team](/contact-e.html)
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
    Center](https://gr-sharingdbs.biosciencedbc.jp/agd-guidelines "National Bioscience Database Center")</span>

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
  - Last modified: 2018-11-22

</div>

</div>
