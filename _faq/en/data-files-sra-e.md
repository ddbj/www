---
layout: simple
title: How are my data files processed?
category: faq
db:
  - dra
tags: 
  - Sequencing data
date: 2014-12-25T10:38:13
lang: en
---

Uploaded data files are processed per Run. All files under a Run are
merged into single [binary SRA
file](http://www.ncbi.nlm.nih.gov/books/NBK47539/#SRA_Overview_BK.SRA_Architecture)
by using [SRA
toolkit](http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc).
During this conversion, length and format of all reads are checked.

Read names are editted and identifiers (DRR accession number + serial
number) are automatically inserted ([example:
DRR000001](http://trace.ncbi.nlm.nih.gov/Traces/sra/?view=run_browser&run=DRR000001)).
<span class="red">Original read names should be unique in a Run.</span>
A DRR accession number is used as a filename. If the
["generic\_fastq"](/dra/submission-e.html#File_Type) is selected for the
filetype, read names are replaced with the DRR accession number + serial
number. ([example:
DRR030615](http://trace.ncbi.nlm.nih.gov/Traces/sra/?view=run_browser&run=DRR030615)).

Example of read names:

``` code
@DRR000001.1 3060N:7:1:1116:340 length=36nnGATGGTAAGATAGAAGCAGTTGAAGTTTACAAACCGnn+DRR000001.1 3060N:7:1:1116:340 length=36nnIIIII%IIIIIIIIII7IHII26:C6EI)+,9,%%*nn@DRR000001.2 3060N:7:1:1114:186 length=36nnGATATTGGCCTGCAGAAGTTCTTCCTGAAAGATGATnn+DRR000001.2 3060N:7:1:1114:186 length=36nnIIIIIIIIIIIIIGI8IIDI6II;?:,+9+>.A1,Inn@DRR000001.3 3060N:7:1:945:361 length=36nnGTCAGGATCGGTCTCGCCTTTTAATAGAGGGAGATAnn+DRR000001.3 3060N:7:1:945:361 length=36nnIIIIIIIIIIIIIIII=3IIII>>I;-52/./+.I,
```

When "PAIRED" is selected in Experiment, paired reads are grouped in a
Run.

DRA generates fastq from SRA files by using [SRA
toolkit](http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc)
and provide sequencing data in both file formats.

More than two fastq files are provided for paired reads. Paired reads
are divided into a file with "\_1" (example, DRR000001\_1.fastq.bz2) and
"\_2" (example, DRR000001\_2.fastq.bz2). Reads without pair are provided
in a file without "\_1" nor "\_2" (example, DRR000001.fastq.bz2).
