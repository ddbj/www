---
layout: indexed_content
title: Parser User’s Manual
category: ddbj
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /ddbj/index-e.html
  - id: submission
    title: Submission
    url: /ddbj/submission-e.html
    children:
      - title: Before Submission
        url: /ddbj/submission-e.html
      - title: Web submission
        url: /ddbj/web-submission-e.html
      - title: Mass Submission
        url: /ddbj/mss-e.html
      - title: Data Update
        url: /ddbj/update-e.html
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/arsa/?lang=en
    children:
      - title: getentry
        url: http://getentry.ddbj.nig.ac.jp/top-e.html
      - title: ARSA
        url: http://ddbj.nig.ac.jp/arsa/?lang=en
  - id: flat_file
    title: Flat file
    url: /ddbj/flat-file-e.html
    children:
      - title: Feature key
        url: /ddbj/features-e.html
      - title: Qualifier key
        url: /ddbj/qualifiers-e.html
      - title: Organism qualifier
        url: /ddbj/organism-e.html
      - title: Description of Location
        url: /ddbj/location-e.html
      - title: Protein Coding Sequence
        url: /ddbj/cds-e.html
      - title: The Genetic Codes
        url: /ddbj/geneticcode-e.html
      - title: Codes Used in Sequence Description
        url: /ddbj/code-e.html
      - title: Example of Submission
        url: /ddbj/example-e.html
  - id: data_categories
    title: Data categories
    url: /ddbj/data-categories-e.html
    children:
      - title: Data Submission from Genome Project
        url: /ddbj/genome-e.html
      - title: Pseudohaplotype
        url: /ddbj/pseudohaplotype-e.html
      - title: WGS
        url: /ddbj/wgs-e.html
      - title: Metagenome Assembly
        url: /ddbj/metagenome-assembly-e.html
      - title: Single amplified genome
        url: /ddbj/single-amplified-genome-e.html
      - title: CON
        url: /ddbj/con-e.html
      - title: GSS
        url: /ddbj/gss-e.html
      - title: HTG
        url: /ddbj/htg-e.html
      - title: Submission of environmental sequences
        url: /ddbj/environmental-e.html
      - title: ENV
        url: /ddbj/env-e.html
      - title: TLS
        url: /ddbj/tls-e.html
      - title: Data Submission from Transcriptome Project
        url: /ddbj/transcriptome-e.html
      - title: TSA
        url: /ddbj/tsa-e.html
      - title: EST
        url: /ddbj/est-e.html
      - title: HTC
        url: /ddbj/htc-e.html
      - title: Third Party Data (TPA)
        url: /ddbj/tpa-e.html
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html
  - id: other
    title: Other
    url: /ddbj/index-e.html
    children:
      - title: Patent
        url: /ddbj/patent-data-e.html
      - title: MGA
        url: /ddbj/mga-e.html
lang: en
related_pages:
  - title: Submission File Format
    url: /ddbj/file-format-e.html
  - title: Validation tools for MSS data files
    url: /ddbj/mss-tool-e.html
  - title: UME User’s manual
    url: /ddbj/ume-e.html
  - title: transChecker User’s Manual
    url: /ddbj/transchecker-e.html
  - title: Validator error message
    url: /ddbj/validator-e.html
  - title: Application form for MSS
    url: /ddbj/mss-form-e.html
---

Parser is a software tool developed by DDBJ for checking the format and the syntax of the [sequence](/ddbj/file-format-e.html#sequence) and [annotation](/ddbj/file-format-e.html#annotation) files.

## Install <a name="install"></a>

<ol>
  <li>
    Access and get Parser.tar.gz file from <a href="/ddbj/mss-tool.html">Validation tools for MSS data files</a>.
  </li>
  <li>
    Uncompress tar.gz file.<br>
<pre>
<code>
$ gunzip Parser.tar.gz
</code>
</pre>
  </li>
  <li>
    Extract the file tar command<br>
<pre>
<code>
$ tar xvf Parser.tar
</code>
</pre>
  </li>
  <li>
    directory is created<br>  
    Check the contents of the directory<br>
  <pre>
    <code>
$ cd jParser
$ ls -FC
jParser.sh* jar/    license.txt resource/
    </code>
  </pre><br>
    <table>
      <tbody>
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
      </tbody>
    </table>
  </li>
  <li>
    Change the file jParser.sh according to your system environment.
<pre>
  <code>
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
      </code>
    </pre>
  <dl>
      <dt>[PARSER\_DIR parameter\]</dt>  
      <dd>Enter the full path name of jParser directory.</dd>
      <dd>ex) PARSER\_DIR=/home/mass/jParser</dd>
      <dt>[HEAP\_SIZE parameter\]</dt> 
      <dd>Enter the maximum memory of jParser.</dd>
      <dd>ex) HEAP\_SIZE=128m</dd>
    </dl>
  </li>
  <li>
  Set PATH<br>  
  Set PATH the directory which includes jParser.sh.
  </li>
</ol>

## Execution <a name="exec"></a>

Execute jParser.sh by the command below;

```
$ jParser.sh[space]-x[annotation file name][space]-s[sequence file name]
```

ex)

```
$ jParser.sh -xsample.ann -ssample.fasta
```

You can specify locations of files in both ways, relative and full path names.  
**macOS: Regarding the available file names**<br> 
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