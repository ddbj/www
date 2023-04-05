---
layout: tabbed_indexed_content
title: transChecker User's Manual
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
  - title: Parser User's Manual
    url: /ddbj/parser-e.html
  - title: Validator error message
    url: /ddbj/validator-e.html
  - title: Application form for MSS
    url: /ddbj/mss-form-e.html
---

TransChecker is a CUI tool developed by DDBJ for checking translation into amino acid sequence from 
[CDS features](/ddbj/cds-e.html) of [annotation](/ddbj/file-format-e.html#annotation) and [nucleotide sequence](/ddbj/file-format-e.html#sequence) files, which are needed for Mass Submission System (MSS).

## Installation  {#install}

### 1. Getting the transChecker file   {#install-1}
Download transChecker_V#.##.tar.gz (# shows the version number) file from [Validation tools for MSS data files](/ddbj/mss-tool-e.html).

### 2. Decompressing   {#install-2}
```
$ gunzip -c transChecker_V#.##.tar.gz | tar xvf -
```

The transChecker directory is created after decompressing the tar.gz file. The transChecker directory contains the following files and directories.

```
$ ls -FC transChecker/
jar/  license.txt  transChecker.sh*
```

<table><tbody>
<tr>
	<th>jar/</th>
	<td>Includes class-library of Java (DO NOT change)</td>
</tr>
<tr>
	<th>license.txt</th>
	<td>End-user license agreement (DO NOT change)</td>
</tr>
<tr>
	<th>transChecker.sh</th>
	<td>Executable shell script</td>
</tr>
</tbody></table>

### Editing the shell script   {#install-3}
Edit the part of transChecker.sh in accordance with the installed directory. You can use nano, vi etc. to edit the file.

e.g.) You have decompressed the parser file on /home/mass directory.
```
$ cd /home/mass/transChecker
$ nano transChecker.sh
```
Specify the full directory path of transChecker against PARSER_DIR=.
```
# Installed directory
TRANS_DIR=./
  ↓
# Installed directory
TRANS_DIR=/home/mass/transChecker
```

## Before running   {#beforeuse}
You should remove the errors from the annotation and nucleotide sequence files by using [Parser](/ddbj/parser-e.html) before running transChecker.

## How to use  {#exec}
```
cd <transChecker directory>
./transChecker.sh -x <filename> -s <filename> [-e <filename> -o <filename> -t <filename> -M <memory size>]
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
Optional. Specify the output file name to save the errors caused by amino acid translation. The result is displayed on the screen when the option is not used. The transChecker will display nothing when there are no errors.
```
-e result.txt
```
**-o \<Output file name for amino acid sequence\>**    
Optional. Specify the output file name to save the translated amino acid sequences. The transChecker does not output the amino acid sequences without this option. The file format is [FASTA-like format].
```
-o aaseq.txt
```
**-t \<Output file name for nucleotide sequence with the translation\>**    
Optional. Specify the output file name to save the nucleotide sequence with the corresponding amino acid sequence obtained from each CDS. The transChecker does not output the sequences without this option. The file format is described at [Nucleotide sequence with corresponding amino acid].
```
-t nucwithaa.txt
```
**-M \<Maximum memory size\>**    
Optional. Specify the maximum memory in megabyte size for running the command. You should use the option when the file size of the annotation or nucleotide sequence is large. If the option is not applied, the value of DEFAULT_MAX_HEAP in transChecker.sh script is used for the memory size.
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
$ cd /home/mass/transChecker
$ ./transChecker.sh -x sample1.ann -s sample1.fasta
```
e.g. 2
```
$ cd /home/mass/transChecker
$ ./transChecker.sh -x sample2.ann -s sample2.fasta -e result.txt -o aaseq.txt -t nucwithaa.txt -M 16384m
```

## Output format for -o and -t options  {#exec-1}
Even though some errors are occurred, the nucleotide sequence of CDS feature is translated into amino acid as is, however, some translation processes are likely skipped depending on the degree of the error.

### FASTA-like format (-o option)  {#exec-1-1}
Amino acid sequences shown in a similar format of FASTA.

Format
```
>[entry name].[sequential serial number][space][CDS feature location]
[amino acid sequence (60 letters/line)]
//
```

Example
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

### Nucleotide sequence with corresponding amino acid (-t option)  {#exec-1-2}
Each nucleotide sequence from CDS feature is shown with the corresponding amino acid sequence.

Format
```
>[entry name].[sequential serial Number][space][CDS feature location]
/codon_start=[value of codon_start; in case of null, 1]
/transl_table=[value of transl_table; in case of null, 1]
[number of bases][nucleotide sequence (60 letters/line)]
[number of residues][amino acid sequence (20 letters/line)]
[blank line]
  :
  :
//
```

Example
```
>ENT01.1 <1..179
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

## Error messages  {#error}
When an error occurs, the transChecker outputs an error message. Please refer to [Validator error message: transChecker](/ddbj/validator-e.html#transChecker) for details.
