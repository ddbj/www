---
layout: tabbed_indexed_content
service_name: Genomic Expression Archive
title: Spatial gene expression
category: gea
current_tab: submission overview
lang: en
---

## Spatial gene expression data

In the spatial gene expression data submission, it is important for data interpretation that measured gene expression levels and spatial positions are related.

### Visium

Submission of output files from the 10xGenomics [Visium](https://www.10xgenomics.com/jp/products/spatial-gene-expression) is explained in this section. Submit barcode sequences, position of spots containing the barcodes, tissue images, and scaling factors that converts pixel positions in the original, full-resolution images to pixel positions in the tissue image files.    

[Spatial Gene Expression - Image Outputs](https://support.10xgenomics.com/spatial-gene-expression/software/pipelines/latest/output/images)

Among the files indicated in the above page, submit the following files along with raw and processed data files. The other related files may also be included.

* tissue_hires_image.png, tissue_lowres_image.png: these files are downsampled versions of the original, full-resolution brightfield image provided by the user.
* scalefactors_json.json: scaling factor that converts pixel positions in the original, full-resolution image to pixel positions in the tissue image files.
* tissue_positions_list.csv: this text file contains a table with rows that correspond to spots.

After entering your data in D-way, please [contact the GEA team](/contact-ddbj-e.html) before submitting.


