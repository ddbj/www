---
layout: indexed_content
title: JGA submission steps
pathname: substep-e
category: aboutjga
lang: en
---

## JGA overview

The [DNA Data Bank of Japan (DDBJ) Center](../) operates the Japanese Genotype-phenotype Archive (JGA) for human genotype and phenotype data in collaboration with [National Bioscience Database Center (NBDC)](http://humandbs.biosciencedbc.jp/en/).

{::options parse_block_html="true" /}
<div class="attention red">
  - JGA is a controlled-access database and is different from the other INSDC unrestricted-access databases.
  - Submission account system of the JGA is separated from the [D-way](https://ddbj.nig.ac.jp/D-way/) account system for the other DDBJ Center's unrestricted-access databases.
  - To submit data to the JGA, an approval from [NBDC](https://humandbs.biosciencedbc.jp/en/data-submission) is necessary.
  - Login details for the JGA submission account are notified from [NBDC](http://humandbs.biosciencedbc.jp/en).
</div>

This page explains how to submit data to the JGA.  
For JGA overview, see [this slide (Japanese only)](https://drive.google.com/file/d/12IaBZHub6s9fNK55S0r6x0U7MD2oQsk_).

## Create metadata by using excel

### Enter metadata into the excel

Download and fill in the metadata in English. For the JGA metadata, see [this page](/jga/submission-e.html).

[![JGA metadata excel]({{ site.baseurl }}/assets/images/parts/download.png "JGA metadata excel"){:.w40}.]({{ site.baseurl }}/assets/files/submission/JGA_metadata.xlsx)

last updated: 2019-06-07

{::options parse_block_html="true" /}
<div class="attention red">
The excel file name must end with "\_metadata.xlsx". Before the "\_metadata", Submission ID and NBDC hum number can be freely added.
</div>

<div class="attention red">
Do NOT include any white spaces in the names of files to be uploaded to JGA.
</div>

<div class="attention red">
When possible, concatenate the multiple data files in the Data/Analysis object to reduce the number of files per object for smoother download.
</div>

### Example metadata excel

[Example metadata excel](https://docs.google.com/spreadsheets/d/1HHlxItj89fQv2oWUNBIHZ4VVGwbcC09WGD5tEiXAQZ4/edit#gid=744299318).

### JGA submission tool

Download the latest JGA submission tool (last updated: 2018-04-16，v3.5.0) and run the tool by executing JGATool.bat.

{::options parse_block_html="true" /}
<div class="attention red">
Execute in the Java 8. In the Java 7, the tool does not work. [How to use in the proxy envinronment.](#How_to_use_in_the_proxy_environment)
</div>

#### Windows

[JGA submission tool (Windows)]({{ site.baseurl }}/assets/files/submission/3-5-0/JGA_tool.zip)

Execute the tool by double clicking the bat file in the expanded files.

<span class="red">Java Runtime Environment Version 8 Update 45 and newer are required.</span>

#### Unix

[JGA submission tool (Unix)]({{ site.baseurl }}/assets/files/submission/3-5-0/JGA_tool_unix.zip)

Excecute the sh file by shell in the expanded files.

<span class="red">Java SE Development Kit 8u45 and newer are required. Does not work in the OpenJDK.</span>

### Upload the excel

Execute the JGA tool and login it by using the login ID and password sent from [NBDC](http://humandbs.biosciencedbc.jp/).

{::nomarkdown}
{% include image.html url="submission/jgasub1.jpg" caption="Login the JGA tool" class="w200" %}
{:/}

The left window is your local computer and the right one is secure JGA server.

In the Submission ID of the right window, select the JGA submission id (for example, example-0003) in the pulldown menu. In the left window, select the metadata excel (for example, JGA\_example-0003\_metadata.xlsx) and click the "Encrypt & Upload".

{::nomarkdown}
{% include image.html url="submission/jgasub2.jpg" caption="Select the submission and metadata excel." class="w500" %}
{:/}

The excel file is uploaded to the JGA server securely. Ignore the error messages in the bottom window.

After uploading the excel, contact the [JGA team](/contact-e.html).

{::nomarkdown}
{% include image.html url="submission/jgasub3.jpg" caption="Uploaded excel file" class="w500" %}
{:/}

<div class="attention red">
Do NOT send the metadata excel by e-mail.
</div>

### Download Excel/XML files

Users can download the excel with filename ended with "\_metadata.xlsx" and XML files by using the tool.

Right-click the excel (for example, JGA\_example-0003\_r1\_metadata.xlsx) and select Download from the menu. Then the selected excel file is downloaded to your computer.

{::nomarkdown}
{% include image.html url="submission/jgadown1.jpg" caption="Download excel" class="w500" %}
{:/}

Right-click the XML file (for example, example-0003\_Data.xml) and
select the "Download" in the menu. Users can download the XML files
one-by-one to your computer.

{::nomarkdown}
{% include image.html url="submission/jgadown2.jpg" caption="Download XML" class="w500" %}
{:/}

## Upload data files

### Data file format

In the JGA submission system, file and archive, compression formats are judged by the file extensions.

  - The extensions, zip, tar, tar.gz, tgz, tar.bz2, tbz2, gz, bz2 are treated as the standard archive and compression formats. The other files with other archive and compression formats cause errors.
  - Do not compress the bam file.
  - Do not tar archive the compressed files by gz or bzip, instead, tar.gz the un-compressed files.

### File formats for submission

Register the individual-level next-generation sequencing (NGS) fastq and bam files to the Data object and the microarray, variation, questionnaire files (non-NGS data) to the Analysis object.

<div class="attention red">
It is important for making data reusable and reproducible that the processed data on which the conclusions in the related manuscript are based, are registered to JGA. Please submit processed data files such as VCF in Analysis objects.
</div>

### metadata XML file

Select the downloaded XML and data files and upload them to the target submission by using the tool.

{::nomarkdown}
{% include image.html url="submission/jgasub4.jpg" caption="Uplaod the metadata XML and data files" class="w500" %}
{:/}

### Validation of submitted files

Submitted metadata and data files are validated and the data files are
uploaded in the encrypted form.

  - The metadata XML files are validated against [JGA XML schema](https://github.com/ddbj/pub/tree/master/docs/jga).
  - [The relationships between each metadata object](/jga/submission-e.html#metadata)
  - Existence of the files listed in the Data and Analysis XML
  - Checksum validation before and after uploading. [MD5](/dra/submission-e.html#supplement-md5)

If the all validation steps succeed, "\[INFO\] upload succeeded" is displayed in the bottom window. The [JGA accessions](/jga/submission-e.html#accession) will be issued after reviewing.

When an error message is shown, contact [the JGA team](/contact-e.html).

{::nomarkdown}
{% include image.html url="submission/jgasub5.jpg" caption="Validated metadata XML and data files" class="w500" %}
{:/}

### How to select files

Users can select multile files in the left window.

#### Range selection

Select the stating filename and then select the ending filename with pressing Shift, the files in the range are selected. Right click the "check (selected item)" and check the selected files.

{::nomarkdown}
{% include image.html url="submission/jga_range_select.jpg" caption="Range select the files" class="w500" %}
{:/}

#### How to select distinct files

Select the distinct files by pressing the Control, then select the "check (selected item)" and check the selected files.

{::nomarkdown}
{% include image.html url="submission/jga_multi_select.jpg" caption="Check the selected files" class="w500" %}
{:/}
#### Select sub-directory

All files in the directory are selected by clicking the folder checkbox.

{::nomarkdown}
{% include image.html url="submission/jga_dir_select.jpg" caption="Check the sub-directory" class="w500" %}
{:/}

### How to use in the proxy environment

To use the tool in the proxy environment, users need to configure the file.

Edit the "proxy.properties" in the tool folder and enter the proxy name (server=) and port number (port=).

```
# Enter the server name and port number of the proxy server 
  to connect the JGA server via the proxy.
# For example:
# server=proxy.example.ac.jp
# port=8080
server=
port=
```

When the proxy server require the authentication, enter the credentials in the window after logging in the tool.

The v3.2.0 can handle the BASIC authentification but can not handle the Digest one.

## Send the data files in hard disk

When uploading files by the JGA tool takes too long time, for uploading large number and size of files, we accept the files in the hard disk drives.

<div class="attention red">
Be sure to inform the JGA team before sending your disk to us.<br>
Disk format should be NTFS, ext3 or ext4.<br>
Check the entire disk by anti-virus checker.<br>
Shipping fee should be paid by the user.
</div>

### Encrypt data files

Encrypt the data files by using the JGA data encryption tool and copy them into the hard disk. Upload the XML files by using the JGA submission tool and do not include them in the disk.

[![JGA data encryption tool]({{ site.baseurl }}/assets/images/parts/download.png "JGA data encryption tool"){:.w40}.]({{ site.baseurl }}/assets/files/submission/jga-data-encrypt.tar.gz)

last updated: 2015-12-09

<div class="attention red">
Encrypt the file one-by-one. Do NOT encrypt tar archived files or directory.
</div>

Operating envinronment

  - The disk space as large as the total size of the target files is necessary.
  - Confirmed in CentOS 6.4
  - Java Runtime Environment Version 8 Update 45 newer is neccesary.

Expand the "jga-data-encrypt.tar.gz" by tar command. Following directories are expanded. Do NOT change the directory structure.

jga-data-encrypt.sh (shell script) jar/ -\> directory for execution files (do NOT change this directory)

Move to the tool directory and execute the command.  
sh jga-data-encrypt.sh\[space\]-t\[target files\]\[space\]-o\[output directory path\]  
example)

```
$ sh jga-data-encrypt.sh -t target.fastq -o output
```

Command options

\-t --target  
Sepecify the path to target files.  
The tool can encrypt one file. Multiple files by wild card cannot be
specified.  
Use shell script to encrypt multiple files.

\-o --output  
Path to the directory to output encrypted files, encryption key and the
MD5 file.  
When the directory is not found, the directory is automatically
created.  

Output files

In the output directory, the following 3 files are generated per 1
target file.

1. encrypted file (.encrypt)  
The encrypted filename is \[filename before encryption\].encrypt (for example, file1.fastq will be file1.fastq.encrypt)

2. key file (.encrypt.dat)  
The key file used for encryption. One key file is generated per one target file. The key file is encrypted by the public key. The filename is \[encrypted target file name\].dat. (for example, file1.fastq will be file1.fastq.encrypt.dat)

MD5 file before and after encryption(.md5)  
The file recording the MD5 checksum values before and after encryption. One MD5 file is generated per one target file. The filename is \[unencrypted filename\].md5. (for example, file1.fastq will be file1.fastq.md5)

Output messages

The tool's messages are recorded in the log file (\[server hostname\].jga-data-encrypt.log in the tool directory) and shown on the standard screen. Normal messages are as follows.

```
$ sh jgacmd.sh -t /home/hoge/file.txt -o /tmp/output
START encrypt file ←start processing
start encryption : /home/hoge/file.txt ←target filename
encryption complete : /tmp/output /file.txt.encrypt ←output filename
FINISH encrypt file ←processing finished
```

Error messages

| Message                                                | Meaning                                                                |
| ------------------------------------------------------ | ---------------------------------------------------------------------- |
| \[code 11\] encryption error : \<target\>              | An error occurred during encryption process.                           |
| \[code 12\] make md5 file error : \<target\>           | An error occurred during obtaining the md5 or writing md5 to the file. |
| \[code 13\] output dir is not a directory : \<target\> | \-o soecified path id not a directory.                                 |
| \[code 14\] target is not a file : \<target\>          | \-t path id not a file.                                                |

### Sending files

For the JGA submission, three files "encrypted data files", "key file" and "md5 file" are neccesary. Copy them to the hard disk.

Do NOT copy the metadata in the disk, instead, upload the metadata by using the JGA Submission Tool.

Copy the data to the USB hard disk and send the disk to the address below. <span class="red">Shipping fee should be paid by the user. Include the cash on delibery slip for rerurn filled with the return address</span>. <span class="red">We recommend to label the disk.</span>

{::options parse_block_html="true" /}
<address>

JGA team<br> 
1111 Yata, Mishima, Shizuoka 411-8540, Japan  
Phone:+81-55-981-6853

</address>