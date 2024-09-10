---
layout: tabbed_indexed_content
service_name: MetaboBank
title: mzB format
category: metabobank
current_tab: resource
lang: en
---

MetaboBank provides raw mass spectrometry data in mzB format in addition to the original data format.

## Overview
The mzB format is a common format for mass spectrometry data proposed by Reifycs.
Mass spectrometry raw data files from various vendors (Thermo RAW, Waters RAW, Shimadzu LCD, Shimadzu QGD, Agilent D, Bruker D, Sciex WIFF, Reifycs ABF, cdf, mzML, mzXML) can be converted to mzB format files.  

Since the mzB format is a binary file, the data size is smaller than text format files such as the mzXML and mzML formats. Converting all of MetaboBank's raw data (135study, total data size: 1240GB, August 2024) to mzB format files resulted in 217GB, reducing the total data size to 17.5%. Converting the MS imaging raw data (1study, total data size: 95GB, August 2024) to mzB format files resulted in 4GB, reducing the total data size to 4.3%.

## Tools
The free [Data Checker program](https://www.reifycs.com/products/hive/baseapp-dl) is available for viewing mzB format files. Currently only available for Microsoft Windows.  

To develop software and APIs for mzB format files, you can use the Hive SDK, a free development environment. For more information, please see [here](https://ja.reifycs.com/products/hive/).  
