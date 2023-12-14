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
MAGE-TAB consists of two parts, IDF and SDRF. IDF describes study design, and SDRF describes sample characteristics and relationship between sample and data files. IDF and SDRF are linked by protocols. Metadata and data files are linked by SDRF.

{% include image.html url="magetab/mb-mage-tab.jpg" caption="IDF，SDRF, raw, processed data files and MAF" class="w500" %}

## Metadata excel  {#metadata-excel}

Download a metadata excel file designed for each submission type and fill in the file. 
Submit data of different types as separate studies.  

* Mass spectrometry, chromatography
    * Liquid chromatography-mass spectrometry (LC-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_LC-MS_metadata.xlsx))
    * Liquid chromatography, diode array detector-mass spectrometry (LC-DAD-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_LC-DAD-MS_metadata.xlsx))
    * Gas chromatography-mass spectrometry (GC-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_GC-MS_metadata.xlsx))
    * Two dimensional gas chromatography-mass spectrometry (GCGC-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_GCGC-MS_metadata.xlsx))
    * Gas chromatography, flame ionization detector-mass spectrometry (GC-FID-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_GC-FID-MS_metadata.xlsx))
    * Capillary electrophoresis-mass spectrometry (CE-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_CE-MS_metadata.xlsx))
* Mass spectrometry, direct injection
    * Direct infusion-mass spectrometry (DI-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_DI-MS_metadata.xlsx))
    * Flow injection analysis-mass spectrometry (FIA-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_FIA-MS_metadata.xlsx))
    * Matrix-assisted laser desorption-ionisation mass spectrometry (MALDI-MS, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_MALDI-MS_metadata.xlsx))
* Mass spectrometry imaging (MSI, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_MSI_metadata.xlsx))
* Nuclear magnetic resonance spectroscopy (NMR, [download](https://github.com/ddbj/pub/raw/master/docs/metabobank/metadata_excel/MetaboBank_NMR_metadata.xlsx))

## IDF  {#idf}

IDF (Investigation Description Format) is a file describing study overview, experimental design, protocols, publication and submitter information.   
   
[IDF example](https://docs.google.com/spreadsheets/d/1PziXaK3Cic1xQXdcCgBZ1g-4LIKvZRZt71nYCH5e22k/edit#gid=30173120)  

## IDF fields {#IDF_fields}

[MAGE-TAB Version](#MAGE-TAB_Version)<a name="MAGE-TAB_Version"></a>
: Version number of MAGE-TAB. Fixed to 1.1. Filled by MetaboBank.

[Comment\[MetaboBank accession\]](#MetaboBank_accession)<a name="MetaboBank_accession"></a>
: Accession number assigned by Metabobank (e.g. MTBKS1). Filled by MetaboBank.

[Study Title](#Study_Title)<a name="Study_Title"></a>
: The overall title of the study.

[Study Description](#Study_Description)<a name="Study_Description"></a>
: A short paragraph describing the study as free-text. The text should clearly explain what you did in your study. In this field, ASCII, Greek characters and symbols \[° μ ± ≠ &#8786; &#060; &#062; ← ↑ ↓ → ↔ Å\] are allowed for richer description.

[Experimental Design](#Experimental_Design)<a name="Experimental_Design"></a>
: The experiment design types which are applicable to this study. These terms should come from [controlled terms](https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY).

[Experimental Factor Name](#Experimental_Factor_Name)<a name="Experimental_Factor_Name"></a>
: A user-defined name for each experimental factor studied by the experiment. These experimental factors represent the variables (parameters) within the investigation. The actual values of these variables will be listed in the SDRF file, in "Factor value\[\<factor name\>\]" columns. For example, an experiment studying the effect of different temperature (heat stress) on a cell culture would have "temperature" as an experimental variable with "Unit" column to indicate the unit in the accompanying SDRF [Factor Value\[\]](#Factor_Value) columns (e.g. Factor Value\[temperature\]).

[Experimental Factor Type](#Experimental_Factor_Type)<a name="Experimental_Factor_Type"></a>
: A term describing the type of each experimental factor. Filled by MetaboBank.

[Person Last Name](#Person_Last_Name)<a name="Person_Last_Name"></a>
: The last name of each submitter. Enter last names of submitters in each column. Submitters have edit rights to the submission and correspondence will be directed to the submitter. They will also be the main contact for once the study is public. Use [Comment\[Contributor\]](#Contributor) to list contributors.

[Person First Name](#Person_First_Name)<a name="Person_First_Name"></a>
: The first name of each submitter. Enter first names of submitters in each column.

[Person Mid Initials](#Person_Mid_Initials)<a name="Person_Mid_Initials"></a>
: The middle name of each submitter. Enter middle names of submitters in each column.

[Person Email](#Person_Email)<a name="Person_Email"></a>
: The Email address of each submitter. Enter addresses of submitters in each column. The Email address is not publicly displayed.

[Person Affiliation](#Person_Affiliation)<a name="Person_Affiliation"></a>
: The organization affiliation of each submitter. Enter affiliations of submitters in each column.

[Person Roles](#Person_Roles)<a name="Person_Roles"></a>
: The role(s) performed by each person. Only "submitter" role is permitted. Filled by MetaboBank.

[PubMed ID](#PubMed_ID)<a name="PubMed_ID"></a>
: The PubMed IDs of the publication(s) associated with this study (where available).

[Publication DOI](#Publication_DOI)<a name="Publication_DOI"></a>
: A Digital Object Identifier (DOI) for each publication (where available). When PubMed ID and DOI are available, use PubMed ID.

[Public Release Date](#Public_Release_Date)<a name="Public_Release_Date"></a>
: The date the submission was initially released publicly. Filled by MetaboBank.

[Term Source Name](#Term_Source_Name)<a name="Term_Source_Name"></a>
: The names of the Term Sources (ontologies or databases) used within the IDF and SDRF. The "Term Sources" are defined in the IDF and may be used throughout the IDF and SDRF. This name will be used in all corresponding "Term Source REF" fields.

[Term Source File](#Term_Source_File)<a name="Term_Source_File"></a>
: A filename or valid URI at which the Term Source may be accessed.

[Term Source Version](#Term_Source_Version)<a name="Term_Source_Version"></a>
: The version of the Term Source used throughout the IDF and SDRF.

[SDRF File](#SDRF_File)<a name="SDRF_File"></a>
: The name of the SDRF file accompanying this IDF file. Filled by MetaboBank.

[Comment\[Study type\]](#Study_type)<a name="Study_type"></a>
: The study types which are applicable to this study (e.g. targeted metabolite profiling, lipid profiling). These terms should come from [controlled terms](https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY).

[Comment\[Experiment type\]](#Experiment_type)<a name="Experiment_type"></a>
: The experiment types which are applicable to this study (e.g. liquid chromatography-mass spectrometry, capillary electrophoresis-mass spectrometry). These terms should come from [controlled terms](https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY). More than one type can be added. Fixed terms for the submission type are filled by MetaboBank.

[Comment\[Submission type\]](#Submission_type)<a name="Submission_type"></a>
: The type of this submission (e.g. LC-MS, GC-MS). These terms should come from [controlled terms](https://docs.google.com/spreadsheets/d/1b34kjYemmQj-4m5zcp2n7QHCnQA98EjYcf6pOJ9xDTY). Filled by MetaboBank.

[Comment\[BioProject\]](#BioProject)<a name="BioProject"></a>
: A related BioProject accession (for example, PRJDB1).

[Comment\[Related study\]](#Related_study)<a name="Related_study"></a>
: Related accession number(s) of MetaboBank (MB) or other databases. List accessions in the format of "DB:ID" in tab-delimited fields. Example, MB:MTBKS202\<tab\>MB:MTBKS203\<tab\>Metabolonote:SE112.

[Comment\[Contributor\]](#Contributor)<a name="Contributor"></a>
: Name of each contributor. Contributors such as technical staffs can be listed in the [Comment\[Contributor\]](#Contributor) regardless of they are submitters or not. The contributors do not automatically have edit rights if they are not specified as submitters.  
Example, Mishima Naoko, Fuji San, Shizuoka Ken.

[Comment\[Submission Date\]](#Submission_Date)<a name="Submission_Date"></a>
: The date this data was submitted. Filled by MetaboBank.

[Comment\[Last Update Date\]](#Last_Update_Date)<a name="Last_Update_Date"></a>
: The date of last update. Filled by MetaboBank.

## IDF Protocols {#IDF_Protocols}

Protocols are central for reproducibility purposes and should provide a detailed description of the steps taken in the study.

[Protocol Name](#Protocol_Name)<a name="Protocol_Name"></a>
: The names of the protocols used. Use the protocol type for the name when there is one protocol for the type. If there are more than one protocols for the type, differentiate them by adding 1, 2, ... (e.g. Data transformation 1, Data transformation 2).

[Protocol Type](#Protocol_Type)<a name="Protocol_Type"></a>
: The type of the protocol. Required protocols are different for each submission type.

|Protocol type|Description|Submission type|
|---|
|[Sample collection](#Sample_collection_protocol)|Describe the origin of samples, any relevant treatment, time points etc and the collection and storage procedure.|All types|
|[Extraction](#Extraction_protocol)|Describe any extraction or preparation methods applied to the sample before analysis. Please also include any control samples prepared for the assay, e.g. pooled samples, standards, quality control, solvent blank etc|Other than MSI|
|[Chromatography](#Chromatography_protocol)|Provide details of the instrument and column used (manufacturer), mobile phase and gradient, and settings such as temperatures, flow rate, injection volume.|LC-MS,LC-DAD-MS,GC-MS,GCGC-MS,GC-FID-MS|
|[Mass spectrometry](#Mass_spectrometry_protocol)|Provide details of the instrument used (manufacturer), ion source, ionisation mode (positive/negative), m/z range, and specific parameters such as temperatures, voltages, flow rates, scan rates.|Other than NMR|
|[Data processing](#Data_processing_protocol)|Provide details of methods/pipelines and software used to transform the raw data.|All types|
|[Metabolite identification](#Metabolite_identification_protocol)|Provide details of methods/pipelines, reference databases and software used to identify features and/or annotate metabolites.|All types|
|[Capillary Electrophoresis](#Capillary_Electrophoresis_protocol)|Provide details of the instrument and column used (manufacturer), mobile phase and gradient, and settings.|CE-MS|
|[Direct infusion](#Direct_infusion_protocol)|Provide details of the direct infusion methods.|DI-MS|
|[Flow injection analysis](#Flow_injection_analysis_protocol)|Provide details of the flow injection analysis methods.|FIA-MS|
|[Preparation](#Preparation_protocol)|Describe sample preparations such as mounting, preservation, tissue modification, sectioning and matrix.|MSI|
|[Histology](#Histology_protocol)|Describe histological details such as stain.|MSI|
|[NMR sample](#NMR_sample_protocol)|Describe NMR samples such as tube type, solvent, sample pH and temperature.|NMR|
|[NMR spectroscopy](#NMR_spectroscopy_protocol)|Provide details of NMR instrument, probe and magnetic field strength etc|NMR|
|[NMR assay](#NMR_assay_protocol)|Provide details of NMR assay.|NMR|

[Protocol Description](#Protocol_Description)<a name="Protocol_Description"></a>
: A free-text description of the protocol. This text should be included in a single tab-delimited field. In this field, ASCII, Greek characters and symbols \[° μ ± ≠ &#8786; &#060; &#062; ← ↑ ↓ → ↔ Å\] are allowed for richer description.

[Protocol Parameters](#Protocol_Parameters)<a name="Protocol_Parameters"></a>
: A semicolon-delimited list of parameter names. Required parameters are different for each submission type. 
See [SDRF Protocol Parameters](#SDRF_Protocol_Parameters) for details.

[Protocol Hardware](#Protocol_Hardware)<a name="Protocol_Hardware"></a>
: The protocol hardware is the instrument that was used to capture the sample. If multiple instruments are used, they should be separated by semicolon (;). In this field, ASCII, Greek characters and symbols \[° μ ± ≠ &#8786; &#060; &#062; ← ↑ ↓ → ↔ Å\] are allowed for richer description.

[Protocol Software](#Protocol_Software)<a name="Protocol_Software"></a>
: The software used by the protocol.

## SDRF  {#sdrf}

SDRF (Sample and Data Relationship Format) is a file describing sample characteristics and relationship between samples, measurement instruments and data files.
SDRF is a table represents omics experimental flow, starts from source samples and ends with data files.

{% include image.html url="magetab/mb-sdrf.jpg" caption="SDRF structure" class="w550" %}


[SDRF example](https://docs.google.com/spreadsheets/d/1PziXaK3Cic1xQXdcCgBZ1g-4LIKvZRZt71nYCH5e22k/edit#gid=513795053)  

## SDRF columns {#SDRF_columns}

[Source Name](#Source_Name)<a name="Source_Name"></a>
: A unique identifier from a particular source. Use a sample name of BioSample in most cases.

[Characteristics](#Characteristics)<a name="Characteristics"></a>
: Sample attributes. Use BioSample attributes used to describe sample characteristics (e.g. organism, strain). The sample_title, description and BioSample accessions are entered in the Comment columns of Source Name. The other non-sample characteristics attributes such as bioproject_id and locus_tag_prefix are excluded from SDRF.

[Protocol REF](#Protocol_REF)<a name="Protocol_REF"></a>
: The column for referencing a protocol defined in IDF by its name. This is the column marking the start of data pertaining to the referencing protocol. The protocol name must be present in all rows of this column.

[Sample Name](#Sample_Name)<a name="Sample_Name"></a>
: A unique identifier from a particular sample. Use a sample name of BioSample in most cases.

[Extract Name](#Extract_Name)<a name="Extract_Name"></a>
: A unique identifier from a particular extracted material.

[Labeled Extract Name](#Labeled_Extract_Name)<a name="Labeled_Extract_Name"></a>
: A unique identifier from a particular extract chemically labeled by isotopes. Optional for non-labeled samples. Leave blank if you don't have one. See [FAQ: How to describe samples labeled by isotopes?](/faq/en/isotope-labeling-e.html) for details. 

[Label](#Label)<a name="Label"></a>
: If you used a chemical or biochemical marker in the sample such as a radioactive isotope which is bound to a material in order to make it detectable in an analytical instrument then enter it here. Leave blank if you don't have one. See [FAQ: How to describe samples labeled by isotopes?](/faq/en/isotope-labeling-e.html) for details. 

[Assay Name](#Assay_Name)<a name="Assay_Name"></a>
: A unique identifier from a particular assay name. Technical replicates are represented by rows having same sample names and different assay names with technical replicate comments.

[Comment\[technical_replicate\]](#technical_replicate)<a name="technical_replicate"></a>
: Technical replicates such as 1, 2 and 3.

[Raw Data File](#Raw_Data_File)<a name="Raw_Data_File"></a>
: The column to enter raw (unprocessed) data files. If your data has been processed into one of the open-source raw data formats (e.g. mzML and nmrML etc), then add them here.  
Files can be specified in several ways.

Enter each filename for each sample in single column.

|Raw Data File|Comment\[Raw Data File md5\]|
|---|
|sample1.RAW.gz|...|
|sample2.RAW.gz|...|

Enter each tar/zip archived filename for each sample in single column.

|Raw Data File|Comment\[Raw Data File md5\]|
|---|
|sample1.RAW.tar.gz|...|
|sample1.RAW.tar.gz|...|

Enter each subdirectory name containing files for each sample in single column.

|Raw Data File|Comment\[Raw Data File md5\]|
|---|
|sample1/|...|
|sample2/|...|

Enter two filenames for a sample in two columns.

|Raw Data File|Comment\[Raw Data File md5\]|Raw Data File|Comment\[Raw Data File md5\]|
|---|
|sample1.RAW.gz|...|sample1.mzML|...|
|sample2.RAW.gz|...|sample2.mzML|...|

[Comment\[Raw Data File md5\]](#Raw_Data_File_md5)<a name="Raw_Data_File_md5"></a>
: Enter [MD5 hash value](/checksum-e.html) of raw data file here.

[Processed Data File](#Processed_Data_File)<a name="Processed_Data_File"></a>
: The column to enter processed data files. The processed data file has a broad meaning which ranges from processed raw data files to summary table. 
Files can be specified in several ways.

Enter each filename for each sample in single column.

|Processed Data File|Comment\[Processed Data File md5\]|
|---|
|sample1.tsv|...|
|sample2.tsv|...|

Enter each tar/zip archived filename for each sample in single column.

|Processed Data File|Comment\[Processed Data File md5\]|
|---|
|sample1.tsv.tar.gz|...|
|sample1.tsv.tar.gz|...|

Enter each subdirectory name containing files for each sample in single column.

|Processed Data File|Comment\[Processed Data File md5\]|
|---|
|sample1/|...|
|sample2/|...|

Enter two filenames for a sample in two columns.

|Processed Data File|Comment\[Processed Data File md5\]|Processed Data File|Comment\[Processed Data File md5\]|
|---|
|sample1.tsv|...|sample1.xlsx|...|
|sample2.tsv|...|sample2.xlsx|...|

[Comment\[Processed Data File md5\]](#Processed_Data_File_md5)<a name="Processed_Data_File_md5"></a>
: Enter [MD5 hash value](/checksum-e.html) of processed data file here.

[Metabolite Assignment File](#Metabolite_Assignment_File)<a name="Metabolite_Assignment_File"></a>
: A TSV file containing information about the metabolites investigated in the study. Information regarding database accession IDs, where in the spectra the metabolite is found and data pertaining to its abundance within the study samples should be reported in this file format. See [Metabolite assignment file](/metabobank/datafile-e.html#ms-maf) for details.

[Comment\[Metabolite Assignment File md5\]](#Metabolite_Assignment_File_md5)<a name="Metabolite_Assignment_File_md5"></a>
: Enter [MD5 hash value](/checksum-e.html) of metabolite assignment file here.

[Comment\[maf_value_unit\]](#maf_value_unit)<a name="maf_value_unit"></a>
: Value unit used for the experimental data in metabolite assignment file (e.g. peak area, pico mole etc).

[Factor Value\[\]](#Factor_Value)<a name="Factor_Value"></a>
: The factor values for an experiment are the values of the variables (parameters) under investigation. For example, an experiment studying the effect of different temperature (heat stress) on a cell culture would have "temperature" as an experimental variable with "Unit" column to indicate the unit.

|Factor Value\[temperature\]|Unit\[temperature\]|
|---|
|37|degree_C|
|40|degree_C|

[Unit\[\<unit category\>\]](#Unit)<a name="Unit"></a>
: Used as an attribute column following [Characteristics](#Characteristics), [Factor Value](#Factor_Value) or [Parameter Value](#SDRF_Protocol_Parameters). This column contains terms describing the unit(s) to be applied to the values in the preceding column. The type of unit is included in the column heading, e.g. "Unit[temperature]". 

[Image Data File](#Image_Data_File)<a name="Image_Data_File"></a>
: Data files obtained in imaging experiments. The open-source data format files [imzML](https://ms-imaging.org/imzml/) and ibd are recommended to be included. Also submit tissue image files (png, jpg).

[Comment\[Image Data File md5\]](#Comment_Image_Data_File_md5)<a name="Comment_Image_Data_File_md5"></a>
: Enter [MD5 hash value](/checksum-e.html) of image data file here.

[Acquisition Parameter Data File](#Acquisition_Parameter_Data_File)<a name="Acquisition_Parameter_Data_File"></a>
: These should contain the acquisition parameter data. In the Bruker raw data file structure, the file is called 'acqus.txt'. Example, acqus1.txt.

[Comment\[Acquisition Parameter Data File md5\]](#Acquisition_Parameter_Data_File_md5)<a name="Acquisition_Parameter_Data_File_md5"></a>
: Enter [MD5 hash value](/checksum-e.html) of acquisition parameter data file here.

[Free Induction Decay Data File](#Free_Induction_Decay_Data_File)<a name="Free_Induction_Decay_Data_File"></a>
: These should contain the free induction decay data file.

[Comment\[Free Induction Decay Data File md5\]](#Free_Induction_Decay_Data_File_md5)<a name="Free_Induction_Decay_Data_File_md5"></a>
: Enter [MD5 hash value](/checksum-e.html) of free induction decay data file here.

## SDRF Protocol Parameters {#SDRF_Protocol_Parameters}

Protocol Parameters supplement protocols described in IDF. 
The necessary and recommended parameters are different for each Submission and Protocol type.

|Protocol parameter|Submission type|Protocol type|
|---|
|[Post extraction](#Post_extraction)|Other than MSI,NMR|Extraction|
|[Derivatization](#Derivatization)|Other than MSI,NMR|Extraction|
|[Chromatography instrument](#Chromatography_instrument)|LC-MS,LC-DAD-MS,GC-MS,GCGC-MS,GC-FID-MS|Chromatography|
|[Autosampler model](#Autosampler_model_Ch)|LC-MS,LC-DAD-MS,GC-MS,GCGC-MS,GC-FID-MS|Chromatography|
|[Column model](#Column_model_Ch)|LC-MS,LC-DAD-MS,GC-MS,GC-FID-MS|Chromatography|
|[Column type](#Column_type_Ch)|LC-MS,LC-DAD-MS,GC-MS,GC-FID-MS|Chromatography|
|[Guard column](#Guard_column_Ch)|LC-MS,LC-DAD-MS,GC-MS,GCGC-MS,GC-FID-MS|Chromatography|
|[Column model 1](#Column_model_1)|GCGC-MS|Chromatography|
|[Column type 1](#Column_type_1)|GCGC-MS|Chromatography|
|[Column model 2](#Column_model_2)|GCGC-MS|Chromatography|
|[Column type 2](#Column_type_2)|GCGC-MS|Chromatography|
|[Detector_Ch](#Detector_Ch)|LC-DAD-MS,GC-FID-MS|Chromatography|
|[Signal range](#Signal_range)|LC-DAD-MS|Chromatography|
|[Resolution](#Resolution)|LC-DAD-MS|Chromatography|
|[Temperature](#Temperature_Ch)|GC-FID-MS|Chromatography|
|[Scan polarity](#Scan_polarity)|All MS types|Mass spectrometry|
|[Scan m/z range](#Scan_mz_range)|All MS types|Mass spectrometry|
|[Instrument](#Instrument_MS)|All MS types|Mass spectrometry|
|[Ion source](#Ion_source)|All MS types|Mass spectrometry|
|[Mass analyzer](#Mass_analyzer)|All MS types|Mass spectrometry|
|[CE instrument](#CE_instrument)|CE-MS|Capillary Electrophoresis|
|[Autosampler model](#Autosampler_model_CE)|CE-MS|Capillary Electrophoresis|
|[Column model](#Column_model_CE)|CE-MS|Capillary Electrophoresis|
|[Column type](#Column_type_CE)|CE-MS|Capillary Electrophoresis|
|[DI instrument](#DI_instrument)|DI-MS|Direct infusion|
|[FIA instrument](#FIA_instrument)|FIA-MS|Flow injection analysis|
|[Instrument manufacturer](#Instrument_manufacturer)|MSI|Mass spectrometry|
|[Solvent](#Solvent_MSI)|MSI|Mass spectrometry|
|[Target material](#Target_material)|MSI|Mass spectrometry|
|[Spatial resolution](#Spatial_resolution)|MSI|Mass spectrometry|
|[Pixel size x](#Pixel_size_x)|MSI|Mass spectrometry|
|[Pixel size y](#Pixel_size_y)|MSI|Mass spectrometry|
|[Max count of pixel x](#Max_count_of_pixel_x)|MSI|Mass spectrometry|
|[Max count of pixel y](#Max_count_of_pixel_y)|MSI|Mass spectrometry|
|[Max dimension x](#Max_dimension_x)|MSI|Mass spectrometry|
|[Max dimension y](#Max_dimension_y)|MSI|Mass spectrometry|
|[Inlet type](#Inlet_type)|MSI|Mass spectrometry|
|[Detector](#Detector_MSI)|MSI|Mass spectrometry|
|[Detector mode](#Detector_mode)|MSI|Mass spectrometry|
|[Resolving power](#Resolving_power)|MSI|Mass spectrometry|
|[Resolving power m/z](#Resolving_power_mz)|MSI|Mass spectrometry|
|[Native spectrum identifier format](#Native_spectrum_identifier_format)|MSI|Mass spectrometry|
|[Data file content](#Data_file_content)|MSI|Mass spectrometry|
|[Spectrum representation](#Spectrum_representation)|MSI|Mass spectrometry|
|[Raw data file format](#Raw_data_file_format)|MSI|Mass spectrometry|
|[Instrument software](#Instrument_software)|MSI|Mass spectrometry|
|[Instrument software version](#Instrument_software_version)|MSI|Mass spectrometry|
|[Line scan direction](#Line_scan_direction)|MSI|Mass spectrometry|
|[Line scan sequence](#Line_scan_sequence)|MSI|Mass spectrometry|
|[Scan pattern](#Scan_pattern)|MSI|Mass spectrometry|
|[Scan type](#Scan_type)|MSI|Mass spectrometry|
|[Number of scans](#Number_of_scans)|MSI|Mass spectrometry|
|[Sample mounting](#Sample_mounting)|MSI|Preparation|
|[Sample preservation](#Sample_preservation)|MSI|Preparation|
|[Tissue modification](#Tissue_modification)|MSI|Preparation|
|[Sectioning instrument](#Sectioning_instrument)|MSI|Preparation|
|[Section thickness](#Section_thickness)|MSI|Preparation|
|[Matrix](#Matrix)|MSI|Preparation|
|[Matrix application](#Matrix_application)|MSI|Preparation|
|[Stain](#Stain)|MSI|Histology|
|[Data processing software](#Data_processing_software)|MSI|Data processing|
|[Data processing software version](#Data_processing_software_version)|MSI|Data processing|
|[Extraction method](#Extraction_method)|NMR|Extraction|
|[NMR tube type](#NMR_tube_type)|NMR|NMR sample|
|[Solvent](#Solvent_NMR)|NMR|NMR sample|
|[Sample pH](#Sample_pH)|NMR|NMR sample|
|[Temperature](#Temperature_NMR)|NMR|NMR sample|
|[Instrument](#Instrument_NMR)|NMR|NMR spectroscopy|
|[NMR probe](#NMR_probe)|NMR|NMR spectroscopy|
|[Number of transients](#Number_of_transients)|NMR|NMR spectroscopy|
|[Pulse sequence name](#Pulse_sequence_name)|NMR|NMR spectroscopy|
|[Magnetic field strength](#Magnetic_field_strength)|NMR|NMR spectroscopy|

[Parameter Value\[Post extraction\]](#Post_extraction)<a name="Post_extraction"></a>
: This column describes how the sample was extracted into a solvent prior to being injected into the analytical instrument of choice. Example, 400 µL water.

[Parameter Value\[Derivatization\]](#Derivatization)<a name="Derivatization"></a>
: If the sample has been subjected to chemical modification prior to injection, describe the modification. Example, sylilation.

[Parameter Value\[Chromatography instrument\]](#Chromatography_instrument)<a name="Chromatography_instrument"></a>
: Add the full name of the instrument used for the Chromatographic part of this assay, including the manufacturer and model number as reported in manufacturer's brochures, user manuals, or on their website. Example, Shimadzu Nexera UHPLC system.

[Parameter Value\[Autosampler model\]](#Autosampler_model_Ch)<a name="Autosampler_model_Ch"></a>
: Manufacturer and model number of the autosampler used.

[Parameter Value\[Column model\]](#Column_model_Ch)<a name="Column_model_Ch"></a>
: Manufacturer, model number and dimensions of the column used. Example, HSS T3 C18 (1.8 μm, 1.0 x 100 mm; Waters).

[Parameter Value\[Column type\]](#Column_type_Ch)<a name="Column_type_Ch"></a>
: Type or phase of column used. Example, reverse phase.

[Parameter Value\[Guard column\]](#Guard_column_Ch)<a name="Guard_column_Ch"></a>
: Type of guard column used.

[Parameter Value\[Column model 1\]](#Column_model_1)<a name="Column_model_1"></a>
: Model of first GCGC column.

[Parameter Value\[Column type 1\]](#Column_type_1)<a name="Column_type_1"></a>
: Type of first GCGC column.

[Parameter Value\[Column model 2\]](#Column_model_2)<a name="Column_model_2"></a>
: Model of second GCGC column.

[Parameter Value\[Column type 2\]](#Column_type_2)<a name="Column_type_2"></a>
: Type of second GCGC column.

[Parameter Value\[Detector\]](#Detector_Ch)<a name="Detector_Ch"></a>
: TBD.

[Parameter Value\[Signal range\]](#Signal_range)<a name="Signal_range"></a>
: TBD.

[Parameter Value\[Resolution\]](#Resolution)<a name="Resolution"></a>
: TBD.

[Parameter Value\[Temperature\]](#Temperature_Ch)<a name="Temperature_Ch"></a>
: TBD.

[Parameter Value\[Scan polarity\]](#Scan_polarity)<a name="Scan_polarity"></a>
: An acquisition mode to which specifies weather polarity is negative, positive or alternating.

[Parameter Value\[Scan m/z range\]](#Scan_mz_range)<a name="Scan_mz_range"></a>
: The m/z range used in the assay. Example, 100-1000.

[Parameter Value\[Instrument\]](#Instrument_MS)<a name="Instrument_MS"></a>
: Add the full name of the mass spectrometer/detector you used for this LC-MS assay, including the instrument manufacturer and model number as reported in manufacturer's brochures, user manuals, or on their website. Example, Bruker micrOTOF-Q II.

[Parameter Value\[Ion source\]](#Ion_source)<a name="Ion_source"></a>
: The ion source where applicable to the instrument, e.g. ESI.

[Parameter Value\[Mass analyzer\]](#Mass_analyzer)<a name="Mass_analyzer"></a>
: The analyser/detector of the mass fragments generated during the assay. Example, Triple quadrupole.

[Parameter Value\[CE instrument\]](#CE_instrument)<a name="CE_instrument"></a>
: The name of the capillary electrophoresis instrument, manufacturer, model.

[Parameter Value\[Autosampler model\]](#Autosampler_model_CE)<a name="Autosampler_model_CE"></a>
: Manufacturer and model number of the autosampler used for the capillary electrophoresis.

[Parameter Value\[Column model\]](#Column_model_CE)<a name="Column_model"></a>
: Manufacturer and model number of capillary column used.

[Parameter Value\[Column type\]](#Column_type_CE)<a name="Column_type"></a>
: Type of capillary column used.

[Parameter Value\[DI instrument\]](#DI_instrument)<a name="DI_instrument"></a>
: The name of the direct infusion instrument.

[Parameter Value\[FIA instrument\]](#FIA_instrument)<a name="FIA_instrument"></a>
: The name of the flow injection analysis instrument.

[Parameter Value\[Instrument manufacturer\]](#Instrument_manufacturer_MSI)<a name="Instrument_manufacturer_MSI"></a>
: The manufacturer of the mass spectrometry imaging instrument.

[Parameter Value\[Solvent\]](#Solvent_MSI)<a name="Solvent_MSI"></a>
: TBD.

[Parameter Value\[Target material\]](#Target_material)<a name="Target_material"></a>
: TBD.

[Parameter Value\[Spatial resolution\]](#Spatial_resolution)<a name="Spatial_resolution"></a>
: TBD.

[Parameter Value\[Pixel size x\]](#Pixel_size_x)<a name="Pixel_size_x"></a>
: TBD.

[Parameter Value\[Pixel size y\]](#Pixel_size_y)<a name="Pixel_size_y"></a>
: TBD.

[Parameter Value\[Max count of pixel x\]](#Max_count_of_pixel_x)<a name="Max_count_of_pixel_x"></a>
: TBD.

[Parameter Value\[Max count of pixel y\]](#Max_count_of_pixel_y)<a name="Max_count_of_pixel_y"></a>
: TBD.

[Parameter Value\[Max dimension x\]](#Max_dimension_x)<a name="Max_dimension_x"></a>
: TBD.

[Parameter Value\[Max dimension y\]](#Max_dimension_y)<a name="Max_dimension_y"></a>
: TBD.

[Parameter Value\[Inlet type\]](#Inlet_type)<a name="Inlet_type"></a>
: TBD.

[Parameter Value\[Detector\]](#Detector_MSI)<a name="Detector_MSI"></a>
: TBD.

[Parameter Value\[Detector mode\]](#Detector_mode)<a name="Detector_mode"></a>
: TBD.

[Parameter Value\[Resolving power\]](#Resolving_power)<a name="Resolving_power"></a>
: TBD.

[Parameter Value\[Resolving power m/z\]](#Resolving_power_mz)<a name="Resolving_power_m/z"></a>
: TBD.

[Parameter Value\[Native spectrum identifier format\]](#Native_spectrum_identifier_format)<a name="Native_spectrum_identifier_format"></a>
: TBD.

[Parameter Value\[Data file content\]](#Data_file_content)<a name="Data_file_content"></a>
: TBD.

[Parameter Value\[Spectrum representation\]](#Spectrum_representation)<a name="Spectrum_representation"></a>
: TBD.

[Parameter Value\[Raw data file format\]](#Raw_data_file_format)<a name="Raw_data_file_format"></a>
: TBD.

[Parameter Value\[Instrument software\]](#Instrument_software)<a name="Instrument_software"></a>
: TBD.

[Parameter Value\[Instrument software version\]](#Instrument_software_version)<a name="Instrument_software_version"></a>
: TBD.

[Parameter Value\[Line scan direction\]](#Line_scan_direction)<a name="Line_scan_direction"></a>
: TBD.

[Parameter Value\[Line scan sequence\]](#Line_scan_sequence)<a name="Line_scan_sequence"></a>
: TBD.

[Parameter Value\[Scan pattern\]](#Scan_pattern)<a name="Scan_pattern"></a>
: TBD.

[Parameter Value\[Scan type\]](#Scan_type)<a name="Scan_type"></a>
: TBD.

[Parameter Value\[Number of scans\]](#Number_of_scans)<a name="Number_of_scans"></a>
: TBD.

[Parameter Value\[Sample mounting\]](#Sample_mounting)<a name="Sample_mounting"></a>
: TBD.

[Parameter Value\[Sample preservation\]](#Sample_preservation)<a name="Sample_preservation"></a>
: TBD.

[Parameter Value\[Tissue modification\]](#Tissue_modification)<a name="Tissue_modification"></a>
: TBD.

[Parameter Value\[Sectioning instrument\]](#Sectioning_instrument)<a name="Sectioning_instrument"></a>
: TBD.

[Parameter Value\[Section thickness\]](#Section_thickness)<a name="Section_thickness"></a>
: TBD.

[Parameter Value\[Matrix\]](#Matrix)<a name="Matrix"></a>
: TBD.

[Parameter Value\[Matrix application\]](#Matrix_application)<a name="Matrix_application"></a>
: TBD.

[Parameter Value\[Stain\]](#Stain)<a name="Stain"></a>
: TBD.

[Parameter Value\[Data processing software\]](#Data_processing_software)<a name="Data_processing_software"></a>
: TBD.

[Parameter Value\[Data processing software version\]](#Data_processing_software_version)<a name="Data_processing_software_version"></a>
: TBD.

[Parameter Value\[Extraction method\]](#Extraction_method)<a name="Extraction_method"></a>
: How a sample was extracted from its source material, e.g. Methanol.

[Parameter Value\[NMR tube type\]](#NMR_tube_type)<a name="NMR_tube_type"></a>
: Size and type of tube. Example, standard 5 mm glass NMR tube (Wilmad, LabGlass, USA).

[Parameter Value\[Solvent\]](#Solvent)<a name="Solvent"></a>
: Solvent used in the NMR sample, e.g. D2O.

[Parameter Value\[Sample pH\]](#Sample_pH)<a name="Sample_pH"></a>
: Sample pH value, e.g. 7.

[Parameter Value\[Temperature\]](#Temperature_NMR)<a name="Temperature_NMR"></a>
: Sample temperature value with relevant temperature [unit](#Unit).

[Parameter Value\[Instrument\]](#Instrument_NMR)<a name="Instrument_NMR"></a>
: Add the full name of the instrument you used for the NMR study in this assay, including the model number and its operating frequency. Example, Varian Unity Inova 500 MHz spectrometer.

[Parameter Value\[NMR probe\]](#NMR_probe)<a name="NMR_probe"></a>
: Add a full description including the name and type of probe used. This information can be found in the 'Acquisition Parameter Data File', 'acqus.txt' found within the Bruker raw data file structure, in the field marked '$PROBHD=' Example, 5 mm CPTCI 1H-13C/15N/D Z-GRD.

[Parameter Value\[Number of transients\]](#Number_of_transients)<a name="Number_of_transients"></a>
: The number of scans acquired. This information can be found in the 'Acquisition Parameter Data File', 'acqus.txt' found within the Bruker raw data file structure, in the field marked '$NS='. Example, 128.

[Parameter Value\[Pulse sequence name\]](#Pulse_sequence_name)<a name="Pulse_sequence_name"></a>
: The pulse sequence program used with a short description. This information can be found in the 'Acquisition Parameter Data File', 'acqus.txt' found within the Bruker raw data file structure, in the field marked '$PULPROG=' and in the file 'pulseprogram.txt'. Example, 1D 1H with presaturation (presat).

[Parameter Value\[Magnetic field strength\]](#Magnetic_field_strength)<a name="Magnetic_field_strength"></a>
: Magnetic field strength in Tesla (T), e.g. 11.7.
