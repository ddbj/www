---
layout: indexed_content
title: Parser User’s Manual
category: services
---

# Parser User’s Manual

Parser is a software tool developed by DDBJ for checking the format and the syntax of the [sequence](/ddbj/file-format-e.html#sequence) and [annotation](/ddbj/file-format-e.html#annotation) files.

## Install

  - 1\. Access and get Parser.tar.gz file from [Validation tools for MSS data files](/ddbj/mss-tool-e.html).  
    2\. Uncompress tar.gz file.

    ```
    $ gunzip Parser.tar.gz
    ```

  - 3\. Extract the file tar command

    ```
    $ tar xvf Parser.tar
    ```

  - 4\. directory is created  
    Check the contents of the directory

    ```
    $ cd jParser
    $ ls -FC
    jParser.sh* jar/    license.txt resource/
    ```

    | ----------- | -------------------------------------------------------------- |
    | jParser.sh  | executable file                                                |
    | jar/        | directory which includes class-library of Java (DO NOT change) |
    | license.txt | End-user license agreement (DO NOT change)                     |
    | resources/  | directory which includes resource files (DO NOT change)        |

  - 5\. Change the file jParser.sh according to your system environment.

    ```
    #!/bin/sh

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
    #EOF
    ```

\[PARSER\_DIR parameter\]  
: Enter the full path name of jParser directory.
ex) PARSER\_DIR=/home/mass/jParser

\[HEAP\_SIZE parameter\]  
: Enter the maximum memory of jParser.
ex) HEAP\_SIZE=128m

  - 6\. Set PATH  
    Set PATH the directory which includes jParser.sh.

## Execution

Execute jParser.sh by the command below;

```
$ jParser.sh[space]-x[annotation file name][space]-s[sequence file name]
```

ex)

```
$ jParser.sh -xsample.ann -ssample.fasta
```

You can specify locations of files in both ways, relative and full path names.  
<span class="bold">macOS: Regarding the available file names</span>  
DO NOT use multibyte character(s) for any file or folder name of [Sequence file](/ddbj/file-format-e.html#sequence) or [Annotation file](/ddbj/file-format-e.html#annotation) when you use our tools on some versions of macOS. Tools may not work when multibyte character is included in the file or folder name.

\-x\[<span class="font-br font-normal">annotation file name</span>\]  
: This option is required. When the option is not specified, this tool is terminated. An annotation file is the tab delimited text file consisting of five columns of Entry, Feature, Location, Qualifier, and Value that contains your data other than sequences, such as submitters, references and biological features. Please refer to [Submission File Format：Annotation File](/ddbj/file-format-e.html#annotation), in detail.

\-s\[<span class="font-br font-normal">sequence file name</span>\]  
: This option is required. When the option is not specified, this tool is terminated. The sequence file is a text file in FASTA format contains all nucleotide sequences. Please refer to [Submission File Format：Sequence File](/ddbj/file-format-e.html#sequence), in detail.

{::options parse_block_html="true" /}
<div class="attention">
When an error occurs, the parser outputs an error message.  
Please reffer: [Parser Error Messages](/ddbj/validator-e.html#parser), in detail.
</div>
