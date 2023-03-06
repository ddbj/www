---
layout: tabbed_indexed_content
title: Parser User' Manual
service_name: DDBJ Annotated/Assembled Sequences
category: ddbj
current_tab: home
lang: en
related_pages:
  - title: Submission File Format
    url: /ddbj/file-format-e.html
  - title: Validation tools for MSS data files
    url: /ddbj/mss-tool-e.html
  - title: UME User's manual
    url: /ddbj/ume-e.html
  - title: transChecker User's Manual
    url: /ddbj/transchecker-e.html
  - title: Validator error message
    url: /ddbj/validator-e.html
  - title: Application form for MSS
    url: /ddbj/mss-form-e.html
---

Parser is a software tool developed by DDBJ for checking the format and the syntax of the [sequence](/ddbj/file-format-e.html#sequence) and [annotation](/ddbj/file-format-e.html#annotation) files.

## Install  {#install}

#### 1) Get Parser.tar.gz file

Download Parser.tar.gz file from <a href="/ddbj/mss-tool.html">Validation tools for MSS data files</a>.    
    

#### 2) Uncompress tar.gz file
<pre>$ gunzip Parser.tar.gz</pre>


#### 3) Extract the file tar command

<pre>$ tar xvf Parser.tar</pre>

#### 4) Confirm the created directory

Check the contents of the directory.    

<pre>$ cd jParser
$ ls -FC
jParser.sh* jar/    license.txt resource/</pre>

<table><tbody>
<tr>
	<th>jParser.sh</th>
	<td>executable file</td>
</tr>
<tr>
	<th>jar/</th>
	<td>directory which includes class-library of Java (DO NOT change)</td>
</tr>
<tr>
	<th>license.txt</th>
	<td>End-user license agreement (DO NOT change)</td>
</tr>
<tr>
	<th>resources/</th>
	<td>directory which includes resource files (DO NOT change)</td>
</tr>
</tbody></table>
    
    

#### 5) Change the file jParser.sh according to your system environment.
<pre>#!/bin/sh

# Parser installed directory
PARSER_DIR=./

# Set maximum Java heap size
HEAP_SIZE=128m

# Parser's resource files(qual.list, ... *.list) path
# Don't change.
RESOURCE_FILE_PATH=$PARSER_DIR/resource

# Parser's main class
# Don't change.
PARSER=tsunami.util.excel.ExcelParser

# Execution Command
# Don't change.
java -Xmx$HEAP_SIZE -classpath $PARSER_DIR/jar/jParser.jar
-DPARSER_RESOURCE_PATH=$RESOURCE_FILE_PATH $PARSER -Cclean $@

RETVAL=$?

exit $RETVAL
#EOF</pre>

<dl>
<dt>[PARSER\_DIR parameter\]</dt>  
	<dd>Enter the full path name of jParser directory.</dd>
	<dd>ex) PARSER\_DIR=/home/mass/jParser</dd>
<dt>[HEAP\_SIZE parameter\]</dt> 
	<dd>Enter the maximum memory of jParser.</dd>
	<dd>ex) HEAP\_SIZE=128m</dd>
</dl>

#### 6. Set PATH

Set PATH the directory which includes jParser.sh.

## Execution  {#exec}

Execute jParser.sh by the command below.    
<pre>$ jParser.sh[space]-x[annotation file name][space]-s[sequence file name]</pre>

Example: 
<pre>$ jParser.sh -xsample.ann -ssample.fasta</pre>

You can specify locations of files in both ways, relative and full path names.    
    
**macOS: Regarding the available file names**    
DO NOT use multibyte character(s) for any file or folder name of [Sequence file](/ddbj/file-format-e.html#sequence) or [Annotation file](/ddbj/file-format-e.html#annotation) when you use our tools on some versions of macOS. Tools may not work when multibyte character is included in the file or folder name.

\-x\[<span class="font-br font-normal">annotation file name</span>\]  
: This option is required. When the option is not specified, this tool is terminated. An annotation file is the tab delimited text file consisting of five columns of Entry, Feature, Location, Qualifier, and Value that contains your data other than sequences, such as submitters, references and biological features. Please refer to [Submission File Format：Annotation File](/ddbj/file-format-e.html#annotation), in detail.

\-s\[<span class="font-br font-normal">sequence file name</span>\]  
: This option is required. When the option is not specified, this tool is terminated. The sequence file is a text file in FASTA format contains all nucleotide sequences. Please refer to [Submission File Format：Sequence File](/ddbj/file-format-e.html#sequence), in detail.


<div class="attention" markdown="1">
When an error occurs, the parser outputs an error message.  
Please reffer: [Parser Error Messages](/ddbj/validator-e.html#parser), in detail.
</div>
