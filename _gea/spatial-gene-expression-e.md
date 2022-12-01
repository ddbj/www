---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Spatial gene expression
category: gea
current_tab: submission overview
lang: en
---

## Spatial gene expression data {#spatial}

In the spatial gene expression data submission, it is important for data interpretation that measured gene expression levels and spatial positions are related.

### Visium {#visium}

Submission of output files from the 10xGenomics [Visium](https://www.10xgenomics.com/jp/products/spatial-gene-expression) is explained in this section. Submit barcode sequences, position of spots containing the barcodes, tissue images, and scaling factors that converts pixel positions in the original, full-resolution images to pixel positions in the tissue image files.    

* [What format of 10x Genomics data should I submit to NCBI GEO/SRA?](https://kb.10xgenomics.com/hc/en-us/articles/360024716391-What-format-of-10x-Genomics-data-should-I-submit-to-NCBI-GEO-SRA) 
* [Spatial Gene Expression - Image Outputs](https://support.10xgenomics.com/spatial-gene-expression/software/pipelines/latest/output/spatial)
* [Understanding Outputs](https://support.10xgenomics.com/spatial-gene-expression/software/pipelines/latest/output/overview)

Among the files indicated in the above page, submit the following files along with raw and processed data files. The other related files may also be included.

#### DRA {#dra} 

* fastq or bam

Describe methods, name and version of kit (e.g., Smart-seq2, 10x, Drop-seq) used for
single-cell library construction in [Library Construction Protocol](/dra/submission-e.html#Library_Construction_Protocol) of the
DRA Experiment. For 10x technology, describe version of 10x chemistry (e.g., v1, v2).

#### GEA {#gea}

GEA processed data  
* GEX Matrix: gene expression data
* tissue_hires_image.png, tissue_lowres_image.png: these files are downsampled versions of the original, full-resolution brightfield image provided by the user.
* scalefactors_json.json: scaling factor that converts pixel positions in the original, full-resolution image to pixel positions in the tissue image files.
* tissue_positions_list.csv: this text file contains a table with rows that correspond to spots.
* web_summary.html: Summary data (optional)
* cloupe.cloupe: Loupe Browser file for data visualization and analysis (optional)

Submit these files in single tar file as GEA processed data.


