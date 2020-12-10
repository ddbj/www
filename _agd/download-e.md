---
layout: indexed_content
title: Download steps
category: agd
current_tab: submission
tab_menu:
  - id: home
    title: Home
    url: /agd/index-e.html
  - id: submission
    title: Submission
    url: /agd/submission-e.html
    children:
      - title: How to submit
        url: /agd/submission-step-e.html
      - title: Example submission
        url: https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318
      - title: How to download
        url: /agd/download-e.html
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/jga/xsd/
  - id: ga4gh beacon
    title: GA4GH Beacon
    url: /agd/beacon-e.html
lang: en
---

## AGD data use request <a name="request"></a>

Apply data use request to [National Bioscience Database Center (NBDC)](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines) with the AGD Study (e.g., AGDS\_00000000005) and Dataset (e.g., AGDD\_00000000005) IDs.

{::options parse_block_html="true" /}
<div class="attention">
Approved users should follow the [NBDC Security Guidelines for Human Data (for Data Users)](https://gr-sharingdbs.biosciencedbc.jp/group-security-guidelines-for-users).
</div>

NBDC will notify user ID and password to approved users. The download account will expire in three months after assignment.

This page explains how to use the AGD data.

## Download data <a name="download-data"></a>

### AGD download tool <a name="agd-download-tool"></a>

Download the AGD download tool (last updated: 2018-11-22，v3.5.0).

<div class="attention">
Use this tool in Java 8. This tool does not work in Java 7.
</div>

#### Windows

[AGD download tool for Windows]({{ site.baseurl }}/assets/files/submission/3-5-0/AGD_tool.zip)

Run the tool by clicking the "bat" file in the folder.

#### Unix

[AGD download tool for Unix]({{ site.baseurl }}/assets/files/submission/3-5-0/AGD_tool_unix.zip)

Run the tool by executing the sh file in the directory.

Use "Java SE Development Kit 8" and not OpenJDK.

### Login <a name="login"></a>

Run the AGD tool and login the AGD system with user ID and password notified by [NBDC](http://gr-sharingdbs.biosciencedbc.jp/agd-guidelines).

<div class="attention">
AGD submission and download tool is the same software behave in different mode according to the account used.
</div>

{::nomarkdown}
{% include image.html url="submission/agdsub1.jpg" caption="Login the AGD tool" class="w200" %}
{:/}

The left window is your local computer and the right window is the secure AGD file server.

In the right window, data sets approved to use are listed. Check the data sets you want to download. Total number of files and size are displayed at below.

{::nomarkdown}
{% include image.html url="books/agddown01.jpg" caption="Select data sets to download" class="w500" %}
{:/}

Click the \[Download\] button and the tool download and decrypt the data sets. The number of parallel download can be adusted from 1-5 at
"Parallel Download count".

When this process finishes, decrypted data set are downloaded to your local computer.

In the created directory with data set accession number, the metadata
XML and data files have been downloaded.

{::nomarkdown}
{% include image.html url="books/agddown03.jpg" caption="metadata XML and data files" class="w300" %}
{:/}

You can expand the directory tree by clicking the arrowhead left to the dataset directory icon. By selecting each data directory and file, you can download individual files.

{::nomarkdown}
{% include image.html url="books/agddown02.jpg" caption="Download data set" class="w500" %}
{:/}

### Download via a proxy server <a name="download-via-proxy-server"></a>

To use the tool via the proxy server, you need to set the name and port number of the proxy server.

Edit the "proxy.properties" file in the tool folder and enter the name (server=) and port number (port=) of the proxy server.

```
# Enter the server name and port number of the proxy server to connect the AGD server via the proxy.
# For example:
# server=proxy.example.ac.jp
# port=8080
server=
port=
```

After login, when the proxy requires user authentication, enter the authentication information in the displayed window. The v3.5.0 (2018-11-21) tool is compatible with the BASIC authentication but not with the Digest authentication.

### View metadata in website <a name="view-metadata-in-website"></a>

Users can view AGD metadata also in website.

From the ["AGD studies" page](https://ddbj.nig.ac.jp/agd/viewer/view/studies), move to the AGD datasets page.

{::nomarkdown}
{% include image.html url="books/agddown04.jpg" caption="AGD studies" class="w500" %}
{:/}

Select data sets with data use permission.

{::nomarkdown}
{% include image.html url="books/agddown05.jpg" caption="Select data sets to view metadata" class="w500" %}
{:/}

As in the AGD tool, login the website by using user ID and password notified by NBDC.

{::nomarkdown}
{% include image.html url="books/agddown06.jpg" caption="Login with data use account" class="w300" %}
{:/}

Users can view metadata in the website after login.

{::nomarkdown}
{% include image.html url="books/agddown07.jpg" caption="Users can view metadata in the website after login" class="w500" %}
{:/}

Logout from the metadata view site

<div class="attention">
Access to the metadata view site is limited to 1 from same account. After viewing metadata, do NOT close your browser but logout at right-top "Logout".  
When an error "Maximum sessions of 1 for this principal exceeded" is displayed, login again after 30 min interval.
</div>

After viewing metadata, do NOT close your browser but logout at right-top "Logout".

{::nomarkdown}
{% include image.html url="books/agddown08.jpg" caption="Logout from metadata view site" class="w500" %}
{:/}

The following error is displayed when access from single account exceeds "1". Login again after 30 min interval.

{::nomarkdown}
{% include image.html url="books/jgadown09.jpg" caption="Error when access from single account exceeds 1" class="w500" %}
{:/}

### Data file transfer by hard disk <a name="data-file-transfer-by-hard-disk"></a>

{::options parse_block_html="true" /}
<div class="attention">
For all hard drive request please contact [AGD team](/contact-ddbj-e.html) and let us know the permitted datasets you would like to have transferred.
</div>

<span class="red">If you would like the data in hard disk, please prepare the USB hard disk drive (filesystem should be NTFS, ext3 or ext4) with enough space for the approved dataset. Be sure to virus check the entire filesystem and send us the empty drive.</span>

Please send your disk to the following address. Be sure to label your disk.

{::options parse_block_html="true" /}
<address>

Postal code: 411-8540  
Kodama Yuichi  
1111 Yata, Mishima, Shizuoka 411-8540, Japan  
Phone:+81-55-981-6853

</address>