---
layout: indexed_content
title: MAGE-TAB format for raw and processed data matrix
pathname: matrix-e
category: gea
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /gea/index-e.html
  - id: submission overview
    title: Submission Overview
    url: /gea/overview-e.html
    children:
      - title: Submit microarray experiment
        url: /gea/submit-array-e.html
      - title: Submit sequencing experiment
        url: /gea/submit-sequence-e.html
      - title: Metadata
        url: /gea/metadata-e.html
      - title: Data File
        url: /gea/datafile-e.html
      - title: Validation
        url: /gea/validation-e.html
      - title: Single-cell submission guide
        url: /gea/single-cell-e.html
      - title: Example
        url: /gea/example-e.html
      - title: Array Design
        url: /gea/adf-e.html
      - title: Data matrix
        url: /gea/matrix-e.html
      - title: Reviewer Access
        url: /gea/reviewer-access-e.html
  - id: faq
    title: FAQ
    url: /faq/en/index-e.html
  - id: search
    title: Search (AOE)
    url: http://aoe.dbcls.jp/
    children:
      - title: RefEx
        url: http://refex.dbcls.jp/index.php?lang=en
      - title: Search (ArrayExpress)
        url: https://www.ebi.ac.uk/arrayexpress/browse.html
  - id: downloads
    title: Downloads
    url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/gea
  - id: about gea
    title: About GEA
    url: /gea/about-gea-e.html
lang: en
---

## Data matrix format <a name="data-matrix"></a>

This format allows each data point in the file to be mapped to a particular assay in the experiment, and to a particular probe/probe set in the array design file of your experiment. For the mapping to work smoothly, each matrix file should contain data from assays on a single array design (i.e if you use multiple array designs in your experiment, mutliple matrix files will be needed), and the column/row headings and the order of columns are strictly controlled:

**Column/row headings:**

The first header line of a matrix file, Hybridization REF, allows assay-mapping via assay names. The second header row lists the "quantitation types" for each column (i.e. the type of measurement recorded in the column, e.g. log2 ratio). Finally, the first column, Reporter REF is used to map the data rows to probe identifiers from the array design file.

**Measurements calculated from multiple assays:**

Measurements such as Log2 fold-changes are often calculated from more than one assay (e.g. for every given gene, calculate the average of 3 knockout samples vs the average of 3 wild-type controls). In that case, you can put down multiple assay names per column, with the assay names separated by semi-colons:

| **Hybridization REF** | Hyb1;Hyb2;Hyb3 | Hyb4;Hyb5;Hyb6 |
| **Reporter REF**      | log2 FC        | log2 FC        |

**Order of data columns:**

The format requires an ordered and regular organization of the columns: first by assay, and then by quantitation type:

Correct

| **Hybridization REF** | Hyb1    | Hyb1   | Hyb2     | Hyb2    |
| **Reporter REF**      | log2 FC | p-value | log2 FC | p-value |

Wrong

| **Hybridization REF** | Hyb1    | Hyb2     | Hyb1   | Hyb2    |
| **Reporter REF**      | log2 FC | log2 FC | p-value | p-value |

### Example non-Affymetrix data matrix <a name="ex-matrix-non-affy"></a>

In this example, four of the six assays are being mapped to log2 ratio values in the matrix file. Each row of data is mapped to a Reporter Name defined in the [array design file](/gea/adf-e.html), in this case, [A-AGIL-6](https://www.ebi.ac.uk/arrayexpress/files/A-AGIL-6/A-AGIL-6.adf.txt).

Assay Name nodes in SDRF:

| Assay Name   |
| ------------ |
| Sample 1:Cy3 |
| Sample 2:Cy3 |
| Sample 3:Cy3 |
| Sample 4:Cy3 |

Non-Affymetrix data matrix:

| **Hybridization REF** | Sample 1:Cy3;Sample 2:Cy3 | Sample 3:Cy3;Sample 4:Cy3 |
| **Reporter REF**      | log2 ratio                | log2 ratio                |
| **A_42_P834147**      | 4.2                     | 2.6                       |
| **A_43_P19480**       | 1.9                     | 1.3                       |
| **A_42_P495989**      | 5.3                     | 9.8                       |

### Example Affymetrix data matrix <a name="ex-matrix-affy"></a>

In this example, two of the six assays are being mapped to data with two different quantitation types (CELIntensity, CELStdev). Each row of data is mapped to a CompositeElement Name (because each Affymetrix probe set is made up of a number of probes), defined in the [array design file](/gea/adf-e.html), in this case, [A-AFFY-44](https://www.ebi.ac.uk/arrayexpress/files/A-AFFY-44/A-AFFY-44.adf.txt).

Assay Name nodes in SDRF:

| Assay Name      |
| --------------- |
| Sample 1:biotin |
| Sample 2:biotin |

Affymetrix data matrix:

| **Hybridization REF**    | Sample 1:biotin | Sample 1:biotin | Sample 2:biotin | Sample 2:biotin |
| **CompositeElement REF** | CELIntensity    | CELStdev        | CELIntensity    | CELStdev        |
| **AFFX_ThrX-M_at**      | 142.1                | 2.6                  | 199.1                | 6.5                  |
| **20050_at**            | 70.4                 | 1.3                  | 88.3                 | 4.7                  |
| **20051_at**            | 227.3                | 9.8                  | 213.2                | 3.5                  |
