---
layout: indexed_content
title: transChecker User’s Manual
category: services
related_pages:
  - title: Submission File Format
    url: services/file-format-e.html
  - title: Validation tools for MSS data files
    url: services/mss-tool-e.html
  - title: UME User’s manual
    url: services/ume-e.html
  - title: Parser User’s Manual
    url: services/parser-e.html
  - title: Validator error message
    url: services/validator-e.html
  - title: Application form for MSS
    url: services/mass-form-e.html
---

# transChecker User’s Manual

TransChecker is a software tool developed by DDBJ for checking translation into amino acid sequence from [CDS features](/ddbj/cds-e.html) that are described in
[sequence](/ddbj/file-format-e.html#sequence) and [annotation](/ddbj/file-format-e.html#annotation) files.

## Install
<ol>
  <li>
    Access and get transChecker.tar.gz file from <a href="/ddbj/mss-tool-e.html">Validation tools for MSS data files</a>.
  </li>     
  <li>  
    Uncompress tar.gz file.<br>
    <code>
      $ gunzip transChecker.tar.gz
    </code>   
  </li>   
  <li>
    Extract the file tar command<br>
    <code>
      $ tar xvf transChecker.tar
    </code>
  </li>  
  <li>
    directory is created<br>
    Check the contents of the directory。<br>
    <code>  
      $ cd transChecker
      $ ls -FC
      jar/license.txt   transChecker.sh*
    </code>
    <table>
      <tbody>
        <tr>
          <th>jar/</th>
          <td>directory which includes class-library of Java (DO NOT change)</td>
        </tr>
        <tr>
          <th>license.txt</th>
          <td>End-user license agreement (DO NOT change)</td>
        </tr>
        <tr>
          <th>transChecker.sh</th>
          <td>executable file</td>
        </tr>
      </tbody>
    </table>
</li>
<li>Change the file jParser.sh according to your system environment.<br>
    <pre>
      <code>

#!/bin/sh

# Installed directory
TRANS_DIR=./

# Set maximum Java heap size
HEAP_SIZE=128m

# Execution Command
# Don't change.
java -Xmx$HEAP_SIZE -jar $TRANS_DIR/jar/transChecker.jar -Cclean $@

RETVAL=$?

exit $RETVAL
#EOF
      </code>
    </pre>

<dl>
  <dt>[TRANS_DIR 変数]</dt>
  <dd>transChecker ディレクトリのある場所をフルパスで入力して下さい。</dd>
  <dd>例) TRANS_DIR=/home/mass/transChecker</dd>
  <dt>[HEAP_SIZE 変数]</dt>
  <dd>transChecker が使用できる最大メモリ量を指定してください。</dd>
  <dd>例) HEAP_SIZE=128m</dd>
</dl>
  </li>  
  <li>
    Set PATH<br>
    Set PATH the directory which includes jParser.sh.
  </li>
</ol>

## Execution

Execute transChecker.sh by the command below;

{::options parse_block_html="true" /}
<div class="attention">
$ transChecker.sh\[space\]-x\[annotation file name\]\[space\]-s\[nucleotide sequence file name\]\[space\]-e\[executed log file name\]\[space\]-o\[amino acid sequence file name\]\[space\]-t\[file name for alignments of nucleotide and amino acid sequences\]
</div>

ex)

```
$ transChecker.sh -xsample.ann -ssample.fasta -eerrmsg.txt -orsl.fasta -taln.txt
```

You can specify locations of files in both ways, relative and full path names.  

**macOS: Regarding the available file names**<br>  
DO NOT use multibyte character(s) for any file or folder name of [Sequence file](/ddbj/file-format-e.html#sequence) or [Annotation file](/ddbj/file-format-e.html#annotation) when you use our tools on some versions of macOS. Tools may not work when multibyte character is included in the file or folder name.

\-x\[<span class="font-br font-normal">annotation file name</span>\]  
: This option is required. When the option is not specified, this tool is terminated. Annotation file is a kind of tab-delimited text. Please refer to [Submission File Format：Annotation File](/ddbj/file-format-e.html#annotation) , in detail. The file should be checked with Parser tool before using transChecker.

\-s\[<span class="font-br font-normal">nucleotide sequence file name</span>\]  
: This option is required. When the option is not specified, this tool is terminated. Sequence file is a kind of fasta format text. Please refer to [Submission File Format：Sequence File](/ddbj/file-format-e.html#sequence), in detail. The file should be checked with Parser tool before using transChecker.

\-e\[<span class="font-br font-normal">executed log file name</span>\]  
: This option is to specify the output file for the error messages found on the process of creating CDS translation. When this option is not specified, error messages are dumped into stdout. See also [transChecker Error Messages](/ddbj/validator-e.html#transchecker).

\-o\[<span class="font-br font-normal">amino acid sequence file name</span>\]  
: This option is to specify the output file for translated amino acid sequences. When this option is not specified, no amino acid sequence is dumped. See also [Format of amino acid sequences](#output-1-1).

\-t\[<span class="font-br font-normal">file name for alignments of nucleotide and amino acid sequences</span>\]  
: This option is to specify the output file for alignments of nucleotide and amino acid sequences. When this option is not specified, no alignment is dumped. See also [Format of amino acid sequences](#output-1-2).

### Format of amino acid sequences

he transChecker provides two options for translated amino acid sequences.  
Even though some errors are occurred, the sequence of [CDS feature](/ddbj/cds-e.html) is translated into amino acid as is, however, some translation processes are likely skipped because of severe errors.

#### FASTA-like format

The amino acid sequences are in a kind of fasta format as follows.

Format

```
>[Entry name].[Serial Number][space][CDS feature location]
[Amino acid sequence (60 letters/line)]
//
```

For example

```
>entry1.1 89..406
MLARISELTKIGTTIFIVAIDQVAEPNSWGSSQLVLLAKIAGALKAIPPNPVCTSRHRQA
ASVSPFRSAIVGTLLQLEAIKNLLTVSVDTIQQNGVLFIFVALLR
//
>entry1.2 684..1325
MSIGILGTKLGMTQIFDESGKAVPVTVIQAGPCPITQIKTVATDGYNAIQIGFLEVREKQ
LSKPELGHLSKAGAPPLRHLLEYRVPSTDGLELGQALTADRFEAGQKVDVQGHTIGRGFT
GYQKRHGFARGPMSHGSKNHRLPGSTGAGTTPGRVYPGKRMAGRSGNDKTTIRGLTVVRV
DADRNLLLVKGSVPGKPGALLNITPATVVGQQA
//
```

#### Alignment with nucleotide sequence

The alignments for nucleotide and translated amino acid sequences are in the following format.

Format

```
>[Entry name].[Serial Number][space][CDS feature location]
/codon_start=[value of codon_start; in case of null, 1]
/transl_table=[value of transl_table; in case of null,1]
[Nucleotide number][Nucleotide sequence (60 letters/line)]
[Amino acid number][Amino acid sequence (20 letters/line)]
[空行]
:
//
```

For example

```
ENT01.1 <1..179
/codon_start=3
/transl_table=1
         1 tgtacccactcaattttgtaaccccgggtatcatgctcccaggtgcattgatgttggatt
         1   Y  P  L  N  F  V  T  P  G  I  M  L  P  G  A  L  M  L  D  F

        61 tcacgatgtatctgacgcgtaactggctggtgaccgcattggttggaggtggattctttg
        21   T  M  Y  L  T  R  N  W  L  V  T  A  L  V  G  G  G  F  F  G

       121 gtctgctgttttacccaggtaactggccaatctttggcccgacccatctgccaatctaa
        41   L  L  F  Y  P  G  N  W  P  I  F  G  P  T  H  L  P  I  
//
>ENT02.1 101..280
/codon_start=1
/transl_table=1
         1 atgtacccactcaattttgtaaccccgggtatcatgctcccaggtgcattgatgttggat
         1 M  Y  P  L  N  F  V  T  P  G  I  M  L  P  G  A  L  M  L  D

        61 ttcacgatgtatctgacgcgtaactggctggtgaccgcattggttggaggtggattcttt
        21 F  T  M  Y  L  T  R  N  W  L  V  T  A  L  V  G  G  G  F  F

       121 ggtctgctgttttacccaggtaactggccaatctttggcccgacccatctgccaatctaa
        41 G  L  L  F  Y  P  G  N  W  P  I  F  G  P  T  H  L  P  I  
//
```

{::options parse_block_html="true" /}
<div class="attention">
When an error occurs, the transChecker outputs an error message.  
Please reffer: [transChecker Error Messages](/ddbj/validator-e.html#transchecker), in detail.
</div>
