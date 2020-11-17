---
layout: indexed_content
title: How are my data files processed?
category: faq
db:
  - dra
tags: 
  - Sequencing data
date: 2014-12-25T10:38:13
lang: en
---

## How are my data files processed?

<p>Uploaded data files are processed per Run. All files under a Run are merged into single <a href="http://www.ncbi.nlm.nih.gov/books/NBK47539/#SRA_Overview_BK.SRA_Architecture">binary SRA file</a> by using <a href="http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc">SRA toolkit</a>. During this conversion, length and format of all reads are checked.</p>
<p>Read names are editted and identifiers (DRR accession number + serial number) are automatically inserted (<a href="http://trace.ncbi.nlm.nih.gov/Traces/sra/?view=run_browser&amp;run=DRR000001">example: DRR000001</a>). <span class="red">Original read names should be unique in a Run.</span> A DRR accession number is used as a filename. If the <a href="/dra/submission.html#File_Type">"generic_fastq"</a> is selected for the filetype, read names are replaced with the DRR accession number + serial number. (<a href="http://trace.ncbi.nlm.nih.gov/Traces/sra/?view=run_browser&amp;run=DRR030615">example: DRR030615</a>).</p>
<p class="no_bottom">Example of read names:</p>
<pre class="code"><code>@DRR000001.1 3060N:7:1:1116:340 length=36nnGATGGTAAGATAGAAGCAGTTGAAGTTTACAAACCGnn+DRR000001.1 3060N:7:1:1116:340 length=36nnIIIII%IIIIIIIIII7IHII26:C6EI)+,9,%%*nn@DRR000001.2 3060N:7:1:1114:186 length=36nnGATATTGGCCTGCAGAAGTTCTTCCTGAAAGATGATnn+DRR000001.2 3060N:7:1:1114:186 length=36nnIIIIIIIIIIIIIGI8IIDI6II;?:,+9+&gt;.A1,Inn@DRR000001.3 3060N:7:1:945:361 length=36nnGTCAGGATCGGTCTCGCCTTTTAATAGAGGGAGATAnn+DRR000001.3 3060N:7:1:945:361 length=36nnIIIIIIIIIIIIIIII=3IIII&gt;&gt;I;-52/./+.I,</code></pre>
<p>When "PAIRED" is selected in Experiment, paired reads are grouped in a Run.</p>
<p>DRA generates fastq from SRA files by using <a href="http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc">SRA toolkit</a> and provide sequencing data in both file formats.</p>
<p>More than two fastq files are provided for paired reads. Paired reads are divided into a file with "_1" (example, DRR000001_1.fastq.bz2) and "_2" (example, DRR000001_2.fastq.bz2). Reads without pair are provided in a file without "_1" nor "_2" (example, DRR000001.fastq.bz2).</p>
