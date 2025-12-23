---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Single-cell data submission guide
category: gea
current_tab: submission overview
lang: en
---

## How to submit single-cell data  {#single-cell-data}

For single-cell gene expression data, submit raw data to DRA and
processed data to GEA. <span class="red">Submit
de-multiplexed (divided) sample and data files in the case of dozens
cells (samples). In the case of more number of cells and de-multiplexed
data affect reproducibility, submit multiplexed (mixed) sample and data
files.</span>

Regarding the 10x Genomics data files, please refer to [What format of 10x Genomics data should I submit to NCBI GEO/SRA?](https://kb.10xgenomics.com/hc/en-us/articles/360024716391-What-format-of-10x-Genomics-data-should-I-submit-to-NCBI-GEO-SRA).

### Library information  {#library}

In both de-multiplexed and multiplexed submissions, describe methods,
name and version of kit (e.g., Smart-seq2, 10x, Drop-seq) used for
single-cell library construction in [Library Construction
Protocol](/dra/submission-e.html#Library_Construction_Protocol) of the
DRA Experiment. For 10x technology, describe version of 10x chemistry
(e.g., v1, v2).

#### Data file formats  {#data-file-format}

Submit raw data in [fastq or bam](/dra/submission-e.html#run-data-files)
to DRA. Include barcode sequences.

For 10x bam files without barcode sequences, submit fastq instead.
Please see [Generating FASTQs with cellranger
mkfastq](https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/using/mkfastq)

#### GEA Experiment Type  {#experiment-type}

Select 'RNA-seq of coding RNA from single cells' or 'RNA-seq of non
coding RNA from single cells'. [GEA Experiment
Type](https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=1327621011)

## De-multiplexed submission  {#de-multiplexed}

### BioSample  {#biosample} 

Create a sample for each cell in BioSample and describe cell-specific
information in sample attributes.

| \*sample\_name | ... | single\_cell\_identifier | inferred\_cell\_type | single\_cell\_well\_quality |
|---|
| sample 1       | ... | cell 1                   | cell type A          | OK                          |
| sample 2       | ... | cell 2                   | cell type B          | OK                          |
| sample 3       | ... | cell 3                   | not applicable       | 2 cells                     |

### DRA  {#multiplexed-dra} 

Submit [fastq or bam](/dra/submission-e.html#run-data-files)
de-multiplexed for each cell (sample).

### GEA  {#de-multiplexed-gea}

Submit [processed data files](/gea/datafile-e.html#seq_proc)
de-multiplexed for each cell (sample).

## Multiplexed submission  {#multiplexed}

### BioSample  {#biosample}

Create a sample for each library (usually contains hundreds to thousands
of cells) in BioSample.

| \*sample\_name | ... | tissue |
|---|
| library 1      | ... | liver  |
| library 2      | ... | heart  |
| library 3      | ... | brain  |

### DRA  {#multiplexed-dra}

Submit [fastq or bam](/dra/submission-e.html#run-data-files) including
barcode sequences. For 10x bam files without barcode sequences, submit
fastq ([Generating FASTQs with cellranger
mkfastq](https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/using/mkfastq)).

### GEA  {#multiplexed-gea}

Since there is no information about the individual cells at the sample
annotation or file level, <span class="red">include the analysis results, cell-specific
attributes, read count matrix and barcode sequences in</span> [processed data
files](/gea/datafile-e.html#seq_proc).

