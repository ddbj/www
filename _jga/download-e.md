---
layout: indexed_content
title: Download steps
pathname: download-e
category: jga
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /jga/index-e.html
  - id: browse researches at nbdc
    title: Browse researches at NBDC
    url: https://humandbs.biosciencedbc.jp/en/data-use/all-researches
    children:
      - title: DDBJ Search
        url: https://ddbj.nig.ac.jp/search
  - id: submission
    title: Submission
    url: /jga/submission-e.html
    children:
      - title: How to submit
        url: /jga/submission-step-e.html
      - title: How to access data
        url: /jga/download-e.html
      - title: Groups
        url: /jga/group-e.html
      - title: Example submission
        url: https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318
      - title: Updates in 2020
        url: /jga/update-202009-e.html
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/jga/xsd/
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html?keyword%5B%5D=jga?keyword%5B%5D=jga
lang: en
---

## JGA data use request <a name="request"></a>

Apply data use request to [National Bioscience Database Center (NBDC)](https://humandbs.biosciencedbc.jp/en/data-use) with the JGA Study (e.g., JGAS00000000025) and Dataset (e.g., JGAD00000000025) accession numbers.

{::options parse_block_html="true" /}
<div class="attention red">
Approved users should follow the [NBDC Security Guidelines for Human Data (for Data Users)](http://humandbs.biosciencedbc.jp/en/guidelines/security-guidelines-for-users).
</div>

NBDC will notify user ID and password to approved users. The download account will expire in two weeks after assignment.

This page explains how to use the JGA data.

## Download data by using the GUI tool <a name="data-download-using-gui-tool"></a>

### JGA GUI download tool <a name="jga-gui-download-tool"></a>

Download the JGA GUI download tool (last updated: 2018-04-16，v3.5.0).

<div class="attention red">
Use this tool in Java 8. This tool does not work in Java 7.
</div>

#### Windows <a name="Windows"></a>

[JGA download tool for Windows]({{ site.baseurl }}/assets/files/submission/3-5-0/JGA_tool.zip)

Run the tool by clicking the "bat" file in the folder.

#### Unix <a name="Unix"></a>

[JGA download tool for Unix]({{ site.baseurl }}/assets/files/submission/3-5-0/JGA_tool_unix.zip)

Run the tool by executing the sh file in the directory.

Use "Java SE Development Kit 8" and not OpenJDK.

### Login <a name="login-by-using-cui"></a> 

Run the JGA tool and login the JGA system with user ID and password notified by [NBDC](http://humandbs.biosciencedbc.jp/en/).

<div class="attention red">
JGA submission and download tool is the same software behave in different mode according to the account used.
</div>

{::nomarkdown}
{% include image.html url="submission/jgasub1.jpg" caption="Login the JGA tool" class="w200" %}
{:/}

The left window is your local computer and the right window is the secure JGA file server.

In the right window, data sets approved to use are listed. Check the data sets you want to download. Total number of files and size are displayed at below.

{::nomarkdown}
{% include image.html url="books/jgadown01.jpg" caption="Select data sets to download" class="w500" %}
{:/}

Click the \[Download\] button and the tool download and decrypt the data sets. The number of parallel download can be adusted from 1-5 at
"Parallel Download count".

When this process finishes, decrypted data set are downloaded to your local computer.

In the created directory with data set accession number, the metadata XML and data files have been downloaded.

{::nomarkdown}
{% include image.html url="books/jgadown03.jpg" caption="metadata XML and data files" class="w300" %}
{:/}

You can expand the directory tree by clicking the arrowhead left to the dataset directory icon. By selecting each data directory and file, you can download individual files.

{::nomarkdown}
{% include image.html url="books/jgadown02.jpg" caption="Download data set" class="w500" %}
{:/}

### Download via a proxy server <a name="download-via-a-proxy-server"></a>

To use the tool via the proxy server, you need to set the name and port number of the proxy server.

Edit the "proxy.properties" file in the tool folder and enter the name (server=) and port number (port=) of the proxy server.

```
# Enter the server name and port number of the proxy server to connect the JGA server via the proxy.
# For example:
# server=proxy.example.ac.jp
# port=8080
server=
port=
```

After login, when the proxy requires user authentication, enter the authentication information in the displayed window. The v3.2.0 (2016-11-17) tool is compatible with the BASIC authentication but not with the Digest authentication.

### View metadata in website <a name="view-metadata-in-website"></a>

Users can view JGA metadata also in website.

From the ["JGA studies" page](https://ddbj.nig.ac.jp/jga/viewer/view/studies), move to the JGA datasets page.

{::nomarkdown}
{% include image.html url="books/jgadown04.jpg" caption="JGA studies" class="w500" %}
{:/}

Select data sets with data use permission.

{::nomarkdown}
{% include image.html url="books/jgadown05.jpg" caption="Select data sets to view metadata" class="w500" %}
{:/}

As in the JGA tool, login the website by using user ID and password notified by NBDC.

{::nomarkdown}
{% include image.html url="books/jgadown06.jpg" caption="Login with data use account" class="w300" %}
{:/}

Users can view metadata in the website after login.

{::nomarkdown}
{% include image.html url="books/jgadown07.jpg" caption="Users can view metadata in the website after login" class="w500" %}
{:/}

Logout from the metadata view site

<div class="attention red">
Access to the metadata view site is limited to 1 from same account. After viewing metadata, do NOT close your browser but logout at
right-top "Logout".  
When an error "Maximum sessions of 1 for this principal exceeded" is displayed, login again after 30 min interval.
</div>

After viewing metadata, do NOT close your browser but logout at right-top "Logout".

{::nomarkdown}
{% include image.html url="books/jgadown08.jpg" caption="Logout from metadata view site" class="w500" %}
{:/}

The following error is displayed when access from single account exceeds "1". Login again after 30 min interval.

{::nomarkdown}
{% include image.html url="books/jgadown09.jpg" caption="Error when access from single account exceeds 1" class="w500" %}
{:/}

### Data file transfer by hard disk <a name="data-file-transfer-by-hard-disk"></a>

{::options parse_block_html="true" /}
<div class="attention red">
For all hard drive request please contact [JGA team](/contact-ddbj-e.html) and let us know the permitted datasets you would like to have transferred.
</div>

<span class="red">If you would like the data in hard disk, please prepare the USB hard disk drive (filesystem should be NTFS, ext3 or ext4) with enough space for the approved dataset. Be sure to virus check the entire filesystem and send us the empty drive.</span>

Please send your disk to the following address. Be sure to label your disk.

Postal code: 411-8540  
Kodama Yuichi  
1111 Yata, Mishima, Shizuoka 411-8540, Japan  
Phone:+81-55-981-6853

## Download data by using the CUI tool <a name="data-download-using-cui-tool"></a>

### JGA CUI download tool <a name="jga-cui-download-tool"></a>

Download the JGA CUI download tool (Last updated: 2018-04-16, v3.5.0). At present, only the Unix tool is available.

#### Unix

[Unix JGA tool]({{ site.baseurl }}/assets/files/submission/3-5-0/JGA_tool_unix.zip)

### Login <a name="login-by-using-cui"></a>

Run the JGA tool in the tool directory.

```
$ ./JgaDownload.sh  
```

Login with the user name and password notified by [NBDC](https://humandbs.biosciencedbc.jp/en).

```
JGA login user name : 
JGA Login Password  : 
```

The user name and password can be configured.

```
$ . ./JgaSetUser.sh
or
$ source ./JgaSetUser.sh
```

Configure the user name and password.

```
JGA login user name : 
JGA Login Password  : 
```

After configuration, run the tool.

### Download via the proxy server <a name="download-via-the-proxy-server"></a>

Configure the proxy server and port by editting the proxy.properties file. Execute as below for the proxy BASIC authentification.

```
$ . ./JgaSetProxyUser.sh
or
$ source ./JgaSetProxyUser.sh
```

Enter the user name and password for the proxy.

```
Proxy server user name : 
Proxy server password  : 
```

After configuration, run the tool. The tool dose not handle the Digest authentification.

### Command line options and arguments. <a name="command-line-options-arguments"></a>

```
-h,--help
-v,--version
-l,--list {datasets|}
-f,--files [/metadata]
-d,--download 
-i,--download-list 
-q,--quiet
-o,--output-dir 
```

### List approved Dataset, object and data files <a name="dataset-object-data-files"></a>

List all approved Datasets.

```
$ sh JgaDownload.sh --list datasets
accession       size
JGAD00000000002 14.35KB
JGAD00000000003 15.37KB
JGAD00000000004 31.77KB
```

List all Data/Analysis objects in the approved Dataset.

```
$ sh JgaDownload.sh --list JGAD00000000004
accession       size
JGAR00000000004 19
JGAR00000000005 19576
JGAZ00000000004 25
JGAZ00000000005 5066
```

List data and metadata files in the approved Dataset.

```
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

```
$ ./JgaDownload.sh --download JGAR00000000005
```

```
$ ./JgaDownload.sh --download JGAD00000000004
```

Download files by specifying a list file.

```
$ cat samplelist.txt 
JGAD00000000004/metadata/dac
JGAD00000000004/metadata/dataset
JGAD00000000004/metadata/policy
JGAR00000000004/Data-Test1-1.txt
JGAZ00000000005/Analysis-Test2-1.txt
$ ./JgaDownload.sh --download-list samplelist.txt 
```

Download files into a specified directory.

```
$ ./JgaDownload.sh --download JGAD00000000004 --output-dir /tmp
```