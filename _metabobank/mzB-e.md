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
The mzB format is one of the common formats for mass spectrometry data that conforms to the Hive format proposed by Reifycs. MetaboBank provides mass spectrometry raw data from various vendors (Thermo RAW, Waters RAW, Shimadzu LCD, Shimadzu QGD, Agilent D, Bruker D, Sciex WIFF, Reifycs ABF, cdf, mzML, mzXML) with this format, a proprietary binary format, to reduce file size, and allow for fast data processing by a dedicated API. 　

With the use of this format, all of MetaboBank's raw data (135study, total data size: 1240GB, August 2024) were reduced to 217GB, 17.5% of the original data size. Similarly, the MS imaging raw data (1study, total data size: 95GB, August 2024) were reduced to 4GB, 4.3% of the original data size.  

## Tools
The free [Data Checker program](https://www.reifycs.com/products/hive/baseapp-dl) is available for viewing mzB format files. Currently only available for Microsoft Windows.  

To develop software and APIs for mzB format files, you can use the Hive SDK, a free development environment. For more information, please see [here](https://www.reifycs.com/products/hive/).  
