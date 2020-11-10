---
layout: indexed_content
title: Submissions Overview
pathname: overview-e
category: gea
lang: en
---

## Overview <a name="over"></a>

GEA accepts all functional genomics data generated from microarray or next-generation sequencing (NGS) platforms. Popular experiment types are transcription profiling (mRNA and miRNA), chromatin immunoprecipitation (ChIP) and SNP genotyping. Here is the [full list of experiment types](/gea/experiment-types-e.html) in GEA.

Microarray-based and sequencing-based submissions should follow the [MIAME](http://fged.org/projects/miame/) and [MINSEQE](http://fged.org/projects/minseqe/) guidelines, respectively.

<table>
<thead>
<tr>
<th>GEA accepts</th>
<th>GEA does not accept</th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Studies concerning quantitative gene expression, gene regulation, epigenetics, or other functional genomics studies.</p>
<p>Examples include:</p>
<ul>
<li>mRNA profiling, RNA-seq</li>
<li>small RNA profiling, miRNA-seq</li>
<li>ChIP-Seq</li>
<li>HiC-seq</li>
<li>methyl-seq, bisulfite-seq</li>
</ul>
<p>If you have questions about whether GEA can accept your data type, please <a href="/contact-e.html">contact us</a>.</p></td>
<td><ul>
<li>human data that require controlled access (submit to <a href="/jga/index-e.html">JGA</a>)</li>
<li>transcript assemblies (submit directly to <a href="/dra/services/index.html">DRA</a> and the <a href="/ddbj/tsa-e.html">Transcriptome Shotgun Assembly of DDBJ</a>)</li>
<li>whole genome sequencing (submit directly to <a href="/dra/services/index.html">DRA</a> and <a href="/ddbj/wgs-e.html">WGS of DDBJ</a> )</li>
<li>metagenomic sequencing (submit directly to <a href="/dra/services/index.html">DRA</a> and <a href="/ddbj/environmental-e.html">environmental sequences of DDBJ</a>)</li>
<li>resequencing, variation or copy number projects (submit directly to <a href="/dra/services/index.html">DRA</a> and the appropriate <a href="https://www.ncbi.nlm.nih.gov/snp/docs/submission/hts_launch_and_introductory_material/">NCBI (human-only)</a> and <a href="https://www.ebi.ac.uk/eva/">EBI variation resources</a>)</li>
<li>survey sequencing, whole exome (submit directly to <a href="/dra/services/index.html">DRA</a>)</li>
<li>metabolomics and proteomics data (submit proteomics data to <a href="https://jpostdb.org/">jPOST</a>)</li>
</ul>
<p>For information on how to submit these types of data, please refer to the <a href="/services/index.html">DDBJ website</a>.</p></td>
</tr>
</tbody>
</table>

{::options parse_block_html="true" /}
<div class="attention">
<span class="red">Submission of research data from human subjects</span>  
: For submitting data from human subjects (human data) to the databases of DDBJ center, it is submitter's responsibility to ensure that the dignity and right of human subject are protected in accordance with all applicable laws, ordinances, guidelines and policies of submitter's institution. In principle, make sure to remove any direct personal identifiers of human subjects from your data to be submitted. Before submitting human data, read the "[Submission of research data from human subjects](/policies-e.html#human)"
</div>

## Submission files <a name="sub-files"></a>

### Microarray experiment <a name="array-exp"></a>

[Submit microarray experiment](/gea/submit-array-e.html)

  - [Metadata IDF and SDRF](/gea/metadata-e.html)
  - [Raw data](/gea/datafile-e.html#array_data)
  - [Processed data](/gea/datafile-e.html#array-proc)
  - [Array design file (if not registered)](/gea/adf-e.html)

### Sequencing experiment <a name="seq-exp"></a>

[Submit sequencing experiment](/gea/submit-sequence-e.html)

  - [Metadata IDF and SDRF](/gea/metadata-e.html)
  - [Raw data (should be pre-registered to](/gea/datafile-e.html#seq_raw) [DRA](/dra/services/index.html))
  - [Processed data](/gea/datafile-e.html#seq_proc)

## Accession numbers <a name="acc"></a>

Experiments and array designs in GEA are given unique accession numbers in the following formats (n is a number). For the middle four-letter codes, please see the ArrayExpress [accession codes](https://www.ebi.ac.uk/arrayexpress/help/accession_codes.html).

  - E-GEAD-n for experiments
  - A-GEAD-n for array designs

Accessions numbers are generated when sufficient metadata and data files are provided for a submission.

## Data release <a name="rel"></a>

The data can be kept private until your paper is published. You can set the hold date for a maximum of 4 years and can change it. Registered records are released according to the [Data Release Policy](/documents/data-release-policy-e.html).

## Reviewer access <a name="reviewer-access"></a>

Submitters are able to generate an access token for journal reviewers after a pre-published experiment or array design is loaded into the GEA database. For instructions, see [reviewer accesss page](/gea/reviewer-access-e.html) for how to obtain an access token and communicate it to journal editors and reviewers.

## Update <a name="update"></a>

After submitting data to GEA, please [contact us](/contact-e.html) to update or withdraw your data.
