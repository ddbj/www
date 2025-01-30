---
layout: simple
title: How to deal with validation errors in the DRA submission?
category: faq
db:
  - dra
tags: 
  - Sequencing data
date: 2014-01-23T11:16:53
lang: en
---

### Make Sra Error {#make_sra_error}

**constraint violated while executing function within virtual database module**

Read names are possibly not unique in Run.  
Please see the FAQ: [How are my data files processed?](/faq/en/data-files-sra-e.html) and revise duplicated read names if there.

**path not found while accessing directory within file system module - no message text available**

Files are not recognized. This error occurs in the following cases:
- filename contains whitespace
- files are in sub-directories
- fastq files are tar archived

### CheckSum Error {#check_sum_error}

The [MD5 values](/checksum-e.html) in the Run metadata(Expected MD5) are different from those of the uploaded files(Uploaded MD5). 
Please check the followings.

Check whether the MD5 values of the files in your local computer match those entered in the Run metadata or not.
- If the MD5 values in the Run metadata are not correct, revise the values in the metadata. 
- If those values match, corresponding uploaded files may be corrupted during file transfer, so please re-upload the files.

### File Name Error {#file_name_error}

**Undefined or File not found: @SQ SN:**

Please upload the SN-reference mapping table files to the directory.  
See the [Data Files](/dra/datafile-e.html#bam_submit) for details.

### Metadata XML registration {#xml}

When registering metadata XML files whose SPOT_DESCRIPTOR elements have been added or modified, 
following errors may occur.

#### Reads having no application read  {#no_application}

Read composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCGG  |  CATCAGTTGAT…………………………………………………  |
|  Base Coordinate :  |  1  |  {::nomarkdown}<div class="float-left">7</div><div class="float-right">50</div>{:/} |
|  Read Type :  |  Primer  |  Linker <span class="red">(should have at least one application)</span>  |

#### Reads with inconsistent base coordinate  {#inconsistent_base}

Read 1 composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCGG……………  |  CATCAG……………  |
|  Base Coordinate :  |  1  |  <span class="red">1 (should be &gt; 1)</span>  |
|  Read Type :  |  Forward  |  Reverse  |

Read 2 composition

| Read Index :      | 0       | 1            | 2                                                    |
| Read :            | TCAG    | ATAGAGTTG……… | TCGTATAACTTCGTATAATGTATGCTATACGAAGTT                 |
| Base Coordinate : | 1       | 5            | <span class="red">4 (should be > 5)</span> |
| Read Type :       | Adapter | Forward      | Reverse                                              |

Read 3 composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCGGGTGTGTCATCAG  |  CATCAG……………  |
|  Base Coordinate :  |  <span class="red">2 (should start at 1)</span>  |  19  |
|  Read Type :  |  Adapter  |  Forward  |

### Reads with relative order which cannot be specified  {#cannot_specified}

Read composition

| Read Index :      | 0       | 1          | 2       | 3                                                                   |
| Read :            | TCAG    | ATAGA…………… | ………………… | CTCAT…………………………………………………………                                         |
| Base Coordinate : | 1       | 5          |         |                                                                     |
| Read Type :       | Adapter | Forward    | Linker  | Forward <span class="red"> (This forward cannot be specified)</span> |

Spot (Read Spec) metadata

| Read Index | Read Class       | Read Type | Ordering Method |
|---|
| 0          | Technical Read   | Adapter   | BaseCoord = 1   |
| 1          | Application Read | Forward   | BaseCoord = 5   |
| 2          | Technical Read   | Linker    | RelativeOrder   |
| 3          | Application Read | Forward   | RelativeOrder   |

