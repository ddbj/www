---
layout: indexed_content
title: Single-cell submission guide
pathname: single-cell
category: tentative
lang: en
---

## How to submit single-cell data <a name="single-cell-data"></a>

For single-cell gene expression data, submit raw data to DRA and
processed data to GEA. <span class="red">Submit
de-multiplexed (divided) sample and data files in the case of dozens
cells (samples). In the case of more number of cells and de-multiplexed
data affect reproducibility, submit multiplexed (mixed) sample and data
files.</span>

### Library information <a name="library"></a>

In both de-multiplexed and multiplexed submissions, describe methods,
name and version of kit (e.g., Smart-seq2, 10x, Drop-seq) used for
single-cell library construction in [Library Construction
Protocol](/dra/submission-e.html#Library_Construction_Protocol) of the
DRA Experiment. For 10x technology, describe version of 10x chemistry
(e.g., v1, v2).

#### Data file formats <a name="data-file-format"></a>

Submit raw data in [fastq or bam](/dra/submission-e.html#run-data-files)
to DRA. Include barcode sequences.

For 10x bam files without barcode sequences, submit fastq instead.
Please see [Generating FASTQs with cellranger
mkfastq](https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/using/mkfastq)

#### GEA Experiment Type <a name="experiment-type"></a>

Select 'RNA-seq of coding RNA from single cells' or 'RNA-seq of non
coding RNA from single cells'. [GEA Experiment
Type](https://docs.google.com/spreadsheets/d/1HZs21QDMonbP-vA_5O1R5HiWJjkT8kL3NsVu2GG_kXE/edit#gid=1327621011)

## De-multiplexed submission <a name="de-multiplexed"></a>

### BioSample <a name="biosample"></a> 

Create a sample for each cell in BioSample and describe cell-specific
information in sample attributes.

| \*sample\_name | ... | single\_cell\_identifier | inferred\_cell\_type | single\_cell\_well\_quality |
|----------------|-----|--------------------------|----------------------|-----------------------------|
| sample 1       | ... | cell 1                   | cell type A          | OK                          |
| sample 2       | ... | cell 2                   | cell type B          | OK                          |
| sample 3       | ... | cell 3                   | not applicable       | 2 cells                     |

### DRA <a name="multiplexed-dra"></a> 

Submit [fastq or bam](/dra/submission-e.html#run-data-files)
de-multiplexed for each cell (sample).

### GEA <a name="de-multiplexed-gea"></a>

Submit [processed data files](/gea/datafile-e.html#seq_proc)
de-multiplexed for each cell (sample).

## Multiplexed submission <a name="multiplexed"></a>

### BioSample <a name="biosample"></a>

Create a sample for each library (usually contains hundreds to thousands
of cells) in BioSample.

| \*sample\_name | ... | tissue |
|----------------|-----|--------|
| library 1      | ... | liver  |
| library 2      | ... | heart  |
| library 3      | ... | brain  |

### DRA <a name="multiplexed-dra"></a>

Submit [fastq or bam](/dra/submission-e.html#run-data-files) including
barcode sequences. For 10x bam files without barcode sequences, submit
fastq ([Generating FASTQs with cellranger
mkfastq](https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/using/mkfastq)).

### GEA <a name="multiplexed-gea"></a>

Since there is no information about the individual cells at the sample
annotation or file level, <span class="red">include the analysis results, cell-specific
attributes, read count matrix and barcode sequences in</span> [processed data
files](/gea/datafile-e.html#seq_proc).
