---
layout: tabbed_indexed_content
title: Parser User's Manual
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

Parser is a CUI tool developed by DDBJ for checking the format and the syntax of the [annotation](/ddbj/file-format-e.html#annotation) and [nucleotide sequence](/ddbj/file-format-e.html#sequence) files.

## Installation  {#install}

### 1. Getting the Parser file  {#install-1}
Download Parser_V#.##.tar.gz (# shows the version number) file from [Validation tools for MSS data files](/ddbj/mss-tool-e.html).

### 2. Decompressing  {#install-2}
```
$ gunzip -c Parser_V#.##.tar.gz | tar xvf -
```

The jParser directory is created after decompressing the tar.gz file. The jParser directory contains the following files and directories.

```
$ ls -FC jParser/
jParser.sh*  jar/    license.txt resource/
```

<table><tbody>
<tr>
	<th>jParser.sh</th>
	<td>Executable shell script</td>
</tr>
<tr>
	<th>jar/</th>
	<td>Includes class-library of Java (DO NOT change)</td>
</tr>
<tr>
	<th>license.txt</th>
	<td>End-user license agreement (DO NOT change)</td>
</tr>
<tr>
	<th>resources/</th>
	<td>Includes resource files (DO NOT change)</td>
</tr>
</tbody></table>

### 3. Editing the shell script  {#install-3}
Edit the part of jParser.sh in accordance with the installed directory. You can use nano, vi etc. to edit the file.

e.g.) You have decompressed the parser file on /home/mass directory.
```
$ cd /home/mass/jParser
$ nano jParser.sh
```
Specify the full directory path of jParser against PARSER_DIR=.
```
# Parser installed directory
PARSER_DIR=./
  ↓
# Parser installed directory
PARSER_DIR=/home/mass/jParser
```

## How to use  {#exec}
```
cd <jParser directory>
./jParser.sh -x <filename> -s <filename> [-e <filename> -M <memory size>]
```

Available options. Regarding the filename, you can specify the location in relative path or full path.

**-x \<Annotation file\>**    
Mandatory. Specify the annotation file here. Please refer to [Submission File Format：Annotation File](/ddbj/file-format-e.html#annotation) as to the file format and the syntax of the annotation file.
```
-x sample.ann
```
**-s \<Nucleotide sequence file\>**    
Mandatory. Specify the nucleotide sequence file here. Please refer to [Submission File Format：Sequence File](/ddbj/file-format-e.html#sequence) as to the format of the nucleotide sequence file.
```
-s sample.fasta
```
**-e \<Output file name\>**    
Optional. Specify the output file name to save the result. The result is displayed on the screen when the option is not used.
```
-e result.txt
```
**-M \<Maximum memory size\>**    
Optional. Specify the maximum memory in megabyte size for running the command. You should use the option when the file size of the annotation or nucleotide sequence is large. If the option is not applied, the value of DEFAULT_MAX_HEAP in jParser.sh script is used for the memory size.
```
-M 8192m
```

<div class="attention" markdown="1">
**macOS: Regarding the available file names**

DO NOT use multibyte character(s) for any file or folder name of [Annotation file](/ddbj/file-format-e.html#annotation) or [Nucleotide sequence file](/ddbj/file-format-e.html#sequence) when you use our tools on some versions of macOS. Tools may not work when multibyte character is included in the file or folder name.
</div>

### Examples  {#exec-eg}
e.g. 1
```
$ cd /home/mass/jParser
$ ./jParser.sh -x sample1.ann -s sample1.fasta
```
e.g. 2
```
$ cd /home/mass/jParser
$ ./jParser.sh -x sample2.ann -s sample2.fasta -M 16384m -e result.txt
```

## Error messages  {#error}
When an error occurs, the parser outputs an error message. Please refer to [Validator error message: Parser](/ddbj/validator-e.html#Parser) for details.