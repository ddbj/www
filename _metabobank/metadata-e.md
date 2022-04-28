---
layout: tabbed_indexed_content
service_name: MetaboBank
title: Metadata
category: metabobank
current_tab: submission
lang: en
---

## MAGE-TAB  {#mage-tab}

MicroArray Gene Expression Tabular ([MAGE-TAB](/assets/files/magetab/MAGE-TABv1.1.pdf)) was developed to represent functional genomics data in a structured way and has been used by ArrayExpress and [GEA](/gea/metadata-e.html). MAGE-TAB is also used in [proteomics fields](https://github.com/bigbio/proteomics-metadata-standard) and is becoming a standard in omics fields.  
MAGE-TAB consists of two parts, IDF and SDRF. IDF describes study design and SDRF describes sample characteristics and relationship between sample and data files. IDF and SDRF are linked by protocols. Metadata and data files are linked by SDRF.

{% include image.html url="magetab/mb-mage-tab.jpg" caption="IDF，SDRF, raw, processed data files and MAF" class="w500" %}

## Metadata excel  {#metadata-excel}

Download a metadata excel file designed for each submission type and enter metadata. 
Submit data of different types as separate studies.  

* Mass spectrometry, chromatography
    * Liquid chromatography-mass spectrometry (LC-MS, [download](/assets/files/submission/metabobank/MetaboBank_LC-MS_metadata.xlsx))
    * Liquid chromatography, diode array detector-mass spectrometry (LC-DAD-MS, [download](/assets/files/submission/metabobank/MetaboBank_LC-DAD-MS_metadata.xlsx))
    * Gas chromatography-mass spectrometry (GC-MS, [download](/assets/files/submission/metabobank/MetaboBank_GC-MS_metadata.xlsx))
    * Two dimensional gas chromatography-mass spectrometry (GCGC-MS, [download](/assets/files/submission/metabobank/MetaboBank_GCGC-MS_metadata.xlsx))
    * Gas chromatography, flame ionization detector-mass spectrometry (GC-FID-MS, [download](/assets/files/submission/metabobank/MetaboBank_GC-FID-MS_metadata.xlsx))
    * Capillary electrophoresis-mass spectrometry (CE-MS, [download](/assets/files/submission/metabobank/MetaboBank_CE-MS_metadata.xlsx))
* Mass spectrometry, direct injection
    * Direct infusion-mass spectrometry (DI-MS, [download](/assets/files/submission/metabobank/MetaboBank_DI-MS_metadata.xlsx))
    * Flow injection analysis-mass spectrometry (FIA-MS, [download](/assets/files/submission/metabobank/MetaboBank_FIA-MS_metadata.xlsx))
    * Matrix-assisted laser desorption-ionisation mass spectrometry (MALDI-MS, [download](/assets/files/submission/metabobank/MetaboBank_MALDI-MS_metadata.xlsx))
* Mass spectrometry imaging (MSI, [download](/assets/files/submission/metabobank/MetaboBank_MSI_metadata.xlsx))
* Nuclear magnetic resonance spectroscopy (NMR, [download](/assets/files/submission/metabobank/MetaboBank_NMR_metadata.xlsx))

## IDF  {#idf}

IDF (Investigation Description Format) is a file describing study overview, experimental design, protocols, publication and submitter information.

[IDF example](https://docs.google.com/spreadsheets/d/1PziXaK3Cic1xQXdcCgBZ1g-4LIKvZRZt71nYCH5e22k/edit#gid=30173120)  

Please see the HELP sheet of the excel for details.

## SDRF  {#sdrf}

SDRF (Sample and Data Relationship Format) is a file describing sample characteristics and relationship between samples, measurement instruments and data files.
SDRF is a table represents omics experiment flow, starts from source samples and ends with data files.

[SDRF example](https://docs.google.com/spreadsheets/d/1PziXaK3Cic1xQXdcCgBZ1g-4LIKvZRZt71nYCH5e22k/edit#gid=513795053)  

Please see the HELP sheet of the excel for details.

{% include image.html url="magetab/mb-sdrf.jpg" caption="SDRF structure" class="w550" %}
