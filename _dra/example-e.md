---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: Example of metadata
category: dra
current_tab: handbook
panels:	
- title: Search	
  url: https://ddbj.nig.ac.jp/search	
  icon: ../assets/images/icon-search_analysis.png	
- title: How_to_submit	
  url: /dra/submission-e.html	
  icon: ../assets/images/icon-search_analysis.png	
- title: Login_and_submit	
  url: https://ddbj.nig.ac.jp/D-way/	
  icon: ../assets/images/icon-search_analysis.png
lang: en
---


<div class="attention" markdown="1">
The DRA metadata submission tool cannot describe technical reads (adapter, primer and barcode sequences). When sequencing data contain technical reads to be submitted,
[submitters need to create ExperimentXML files](/dra/submission.html#create-metadata-in-xml-files)
and describe technical reads in the \<SPOT_DESCRIPTOR>.
</div>

## Experiment (Spot, Platform)  {#Experiment}

### 454 single reads  {#r454_single}

#### Read

Read composition

|  Read Index : |  0  |  1  |
|  Read : |  TCAG  |  ATAGAGTTGATCCTGGCTCAT……………  |
|  Base Coordinate :  |  1  |  {::nomarkdown}<div class="float-left">5</div><div class="float-right">80</div>{:/}  |
|  Read Type :  |  Adapter  |  Forward  |

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
|---|
| 0          | Technical Read   | Adapter   | BaseCoord = 1   |
| 1          | Application Read | Forward   | BaseCoord = 5   |

Experiment XML (SPOT_DESCRIPTOR)

```
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Technical Read</READ_CLASS>
      <READ_TYPE>Adapter</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
    <READ_SPEC>
      <READ_INDEX>1</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>5</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission.html#Instrument)

| Platform | Instrument Model    |
|---|
| LS454    | 454 GS FLX Titanium |

### 454 paired reads  <a name="454-paired"></a>

#### Read

Read composition

| Read Index :      | 0       | 1                 | 2                  | 3          |
| Read :            | TCAG    | ATAGAGT……………CCTGG | TCGTAT……………TATTACG | CTCAT…………… |
| Base Coordinate : | 1       | 5                 |                    |            |
| Read Type :       | Adapter | Forward           | Linker             | Forward    |

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method       |
|---|
| 0          | Technical Read   | Adapter   | BaseCoord = 1         |
| 1          | Application Read | Forward   | BaseCoord = 5         |
| 2          | Technical Read   | Linker    | ExpectedBasecallTable |
| 3          | Application Read | Forward   | RelativeOrder         |

Expected Basecall Table

| Base Call                                  | Min Match | Max Mismatch | Match Edge |
|---|
| TCGTATAACTTCGTATAATGTATGCTATACGAAGTTATTACG | 38        | 5            | full       |
| CGTAATAACTTCGTATAGCATACATTATACGAAGTTATACGA | 38        | 5            | full       |

Experiment XML (SPOT_DESCRIPTOR)

```
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Technical Read</READ_CLASS>
      <READ_TYPE>Adapter</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
    <READ_SPEC>
      <READ_INDEX>1</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>5</BASE_COORD>
    </READ_SPEC>
    <READ_SPEC>
      <READ_INDEX>2</READ_INDEX>
      <READ_CLASS>Technical Read</READ_CLASS>
      <READ_TYPE>Linker</READ_TYPE>
      <EXPECTED_BASECALL_TABLE>
        <BASECALL min_match="38" max_mismatch="5" match_edge="full">TCGTATAACTTCGTATAATGTATGCTATACGAAGTTATTACG</BASECALL>
        <BASECALL min_match="38" max_mismatch="5" match_edge="full">CGTAATAACTTCGTATAGCATACATTATACGAAGTTATACGA</BASECALL>
      </EXPECTED_BASECALL_TABLE>          
    </READ_SPEC>   
    <READ_SPEC>
      <READ_INDEX>3</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <RELATIVE_ORDER follows_read_index="2"/>
    </READ_SPEC>        
  </SPOT_DECODE_SPEC>      
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission.html#Instrument)

| Platform | Instrument Model    |
|---|
| LS454    | 454 GS FLX Titanium |

### Illumina single reads  {#illumina_single}

#### Read

Read composition

|  Read Index :  |  0  |
|  Read :  |  ATAGAGTTGATCCTGG……………CCTGGCTCA  |
|  Base Coordinate :  |  {::nomarkdown}<div class="float-left">１</div><div class="float-right">72</div>{:/} |
|  Read Type :  |  Forward  |

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
|---|
| 0          | Application Read | Forward   | BaseCoord = 1   |

Experiment XML (SPOT_DESCRIPTOR)

```
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
    <SPOT_LENGTH>72</SPOT_LENGTH>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission.html#Instrument)

| Platform | Instrument Model             | Sequence Length |
|---|
| Illumina | Illumina Genome Analyzer IIx | 72              |

### Illumina paired reads  {#illumina_paired}

#### Read

Read composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATAGAGTTGATCCTGG……………  |  CCTGGCTCATCAGTTGAT……………  |
|  Base Coordinate :  |  1  |  {::nomarkdown}<div class="float-left">101</div><div class="float-right">200</div>{:/} |
|  Read Type :  |  Forward  |  Reverse  |


#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
|---|
| 0          | Application Read | Forward   | BaseCoord = 1   |
| 1          | Application Read | Reverse   | BaseCoord = 101 |

Experiment XML (SPOT_DESCRIPTOR)

```
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
  <SPOT_LENGTH>200</SPOT_LENGTH>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
    <READ_SPEC>
      <READ_INDEX>1</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Reverse</READ_TYPE>
      <BASE_COORD>101</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission.html#Instrument)

| Platform | Instrument Model             | Sequence Length |
|---|
| Illumina | Illumina Genome Analyzer IIx | 200             |


### SOLiD single reads  {#SOLiD_single}

#### Read

Read composition

|  Read Index :  |  0  |
|  Read :  |  TTGATCCTGG……………CGCTCA  |
|  Base Coordinate :  |  {::nomarkdown}<div class="float-left">1</div><div class="float-right">50</div>{:/}  |
|  Read Type :  |  Forward  |


#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
|---|
| 0          | Application Read | Forward   | BaseCoord = 1   |

Experiment XML (SPOT_DESCRIPTOR)

```
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
  <SPOT_LENGTH>50</SPOT_LENGTH>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission.html#Instrument)

| Platform  | Instrument Model    | Sequence Length |
|---|
| ABI SOLID | AB SOLiD System 3.0 | 50              |


### SOLiD paired reads  {#SOLiD_paired}

#### Read

Read composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCTGG……………  |  CATCAGTTGAT……………  |
|  Base Coordinate :  |  1  |  {::nomarkdown}<div class="float-left">26</div><div class="float-right">50</div>{:/}  |
|  Read Type :  |  Forward  |  Forward  |


#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
|---|
| 0          | Application Read | Forward   | BaseCoord = 1   |
| 0          | Application Read | Forward   | BaseCoord = 26  |

Experiment XML (SPOT_DESCRIPTOR)

```
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
  <SPOT_LENGTH>50</SPOT_LENGTH>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
    <READ_SPEC>
      <READ_INDEX>1</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>26</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission.html#Instrument)

| Platform  | Instrument Model    | Sequence Length |
|---|
| ABI SOLID | AB SOLiD System 3.0 | 50              |


### Ion torrent single reads  {#Ion_single}

#### Read

Read composition

|  Read Index :  |  0  |
|  Read :  |  AGCCGTATATAG……………CGTCAGAA  |
|  Base Coordinate :  |  {::nomarkdown}<div class="float-left">1</div><div class="float-right">(x)</div>{:/} |
|  Read Type :  |  Forward  |

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
|---|
| 0          | Application Read | Forward   | BaseCoord = 1   |

Experiment XML (SPOT_DESCRIPTOR)

```
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission.html#Instrument)

| Platform    | Instrument Model       | Sequence Length |
|---|
| Ion torrent | Ion torrent PGM/Proton |                 |

### PacBio single reads (Standard sequencing)  {#PacBio_standard}

#### Metadata

Spot (Read Spec)

| Adapter Spec                                  |
|---|
| ATCTCTCTCTTTTCCTCCTCCTCCGTTGTTGTTGTTGAGAGAGAT |

{::nomarkdown}<br>{:/}

| Read Index | Read Class       | Read Type | Ordering Method |
|---|
| 0          | Application Read | Forward   | BaseCoord = 1   |

Experiment XML (SPOT_DESCRIPTOR)

```
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission.html#Instrument)

| Platform     | Instrument Model |
|---|
| Pacbio Smart | PacBio RS        |

Experiment Attribute

| Tag                 | Value               | Units |
|---|
| Sequencing Protocol | Standard sequencing |       |
| Insert size         | 8000                |       |

Experiment XML (EXPERIMENT_ATTRIBUTES)

```
<EXPERIMENT_ATTRIBUTES>
  <EXPERIMENT_ATTRIBUTE>
    <TAG>Sequencing Protocol</TAG>
    <VALUE>Standard sequencing</VALUE>
  </EXPERIMENT_ATTRIBUTE>
  <EXPERIMENT_ATTRIBUTE>
    <TAG>Insert size</TAG>
    <VALUE>8000</VALUE>
  </EXPERIMENT_ATTRIBUTE>    
</EXPERIMENT_ATTRIBUTES>
```

### PacBio single reads (Circular consensus sequencing)  {#PacBio_CCS}

#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
|---|
| 0          | Application Read | Other     | BaseCoord = 1   |

Experiment XML (SPOT_DESCRIPTOR)

```
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission.html#Instrument)

| Platform     | Instrument Model |
|---|
| Pacbio Smart | PacBio RS        |

Experiment Attribute

| Tag                 | Value                         | Units |
|---|
| Sequencing Protocol | Circular consensus sequencing |       |
| Insert size         | 700                           |       |

Experiment XML (EXPERIMENT_ATTRIBUTES)

```
<EXPERIMENT_ATTRIBUTES>
  <EXPERIMENT_ATTRIBUTE>
    <TAG>Sequencing Protocol</TAG>
    <VALUE>Circular consensus sequencing</VALUE>
  </EXPERIMENT_ATTRIBUTE>
  <EXPERIMENT_ATTRIBUTE>
    <TAG>Insert size</TAG>
    <VALUE>700</VALUE>
  </EXPERIMENT_ATTRIBUTE>    
</EXPERIMENT_ATTRIBUTES>
```

## Typical examples causing errors in data validation  {#errors}

In the case of validation error, correct the metadata and re-upload data
files after stopping validation process.

  - [Reads having no application read](#no_application)
  - [Reads with inconsistent base coordinate](#inconsistent_base)
  - [Reads with relative order which cannot be specified](#cannot_specified)


### Reads having no application read  {#no_application}

#### Read

Read composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCGG  |  CATCAGTTGAT…………………………………………………  |
|  Base Coordinate :  |  1  |  {::nomarkdown}<div class="float-left">7</div><div class="float-right">50</div>{:/} |
|  Read Type :  |  Primer  |  Linker <span class="red">(should have at least one application)</span>  |

### Reads with inconsistent base coordinate  {#inconsistent_base}

#### Read 1

Read composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCGG……………  |  CATCAG……………  |
|  Base Coordinate :  |  1  |  <span class="red">1 (should be &gt; 1)</span>  |
|  Read Type :  |  Forward  |  Reverse  |


#### Read 2

Read composition

| Read Index :      | 0       | 1            | 2                                                    |
| Read :            | TCAG    | ATAGAGTTG……… | TCGTATAACTTCGTATAATGTATGCTATACGAAGTT                 |
| Base Coordinate : | 1       | 5            | <span class="red">4 (should be > 5)</span> |
| Read Type :       | Adapter | Forward      | Reverse                                              |

#### Read 3

Read composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCGGGTGTGTCATCAG  |  CATCAG……………  |
|  Base Coordinate :  |  <span class="red">2 (should start at 1)</span>  |  19  |
|  Read Type :  |  Adapter  |  Forward  |

### Reads with relative order which cannot be specified  {#cannot_specified}

#### Read

Read composition

| Read Index :      | 0       | 1          | 2       | 3                                                                   |
| Read :            | TCAG    | ATAGA…………… | ………………… | CTCAT…………………………………………………………                                         |
| Base Coordinate : | 1       | 5          |         |                                                                     |
| Read Type :       | Adapter | Forward    | Linker  | Forward <span class="red"> (This forward cannot be specified)</span> |


#### Metadata

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
|---|
| 0          | Technical Read   | Adapter   | BaseCoord = 1   |
| 1          | Application Read | Forward   | BaseCoord = 5   |
| 2          | Technical Read   | Linker    | RelativeOrder   |
| 3          | Application Read | Forward   | RelativeOrder   |


## Experiment (Pipeline)  {#Experiment_pipeline}

### Example 1 of Experiment XML Pipeline  {#pipeline1}


```
<PROCESSING>
  <PIPELINE>
    <PIPE_SECTION section_name="Base Caller">
      <STEP_INDEX>1</STEP_INDEX>
      <PREV_STEP_INDEX>NIL</PREV_STEP_INDEX>
      <PROGRAM>Casava</PROGRAM>
      <VERSION>V1.8.3_V3.2.1</VERSION>
      <NOTES/>
    </PIPE_SECTION>
    <PIPE_SECTION section_name="Quality Scores">
      <STEP_INDEX>2</STEP_INDEX>
      <PREV_STEP_INDEX>1</PREV_STEP_INDEX>
      <PROGRAM>Casava</PROGRAM>
      <VERSION>V1.8.3_V3.2.1</VERSION>
      <NOTES/>
    </PIPE_SECTION>
  </PIPELINE>
</PROCESSING>
```

### Example 2 of Experiment XML Pipeline  {#pipeline2}


```
<PROCESSING>
  <PIPELINE>
    <PIPE_SECTION>
      <STEP_INDEX>1</STEP_INDEX>
      <PREV_STEP_INDEX/>
      <PROGRAM>bwa</PROGRAM>
      <VERSION>0.5.9-r16</VERSION>
      <NOTES>BWA-MEM algorithm alignment</NOTES>
    </PIPE_SECTION>
    <PIPE_SECTION>
      <STEP_INDEX>2</STEP_INDEX>
      <PREV_STEP_INDEX>1</PREV_STEP_INDEX>
      <PROGRAM>Picard</PROGRAM>
      <VERSION>1.74(1243)</VERSION>
      <NOTES>Duplicate reads marked</NOTES>
    </PIPE_SECTION>
    <PIPE_SECTION>
      <STEP_INDEX>3</STEP_INDEX>
      <PREV_STEP_INDEX>2</PREV_STEP_INDEX>
      <PROGRAM>GATK</PROGRAM>
      <VERSION>1.4-29</VERSION>
      <NOTES>Indel realignment</NOTES>
    </PIPE_SECTION>
    <PIPE_SECTION>
      <STEP_INDEX>4</STEP_INDEX>
      <PREV_STEP_INDEX>3</PREV_STEP_INDEX>
      <PROGRAM>GATK</PROGRAM>
      <VERSION>1.4-29</VERSION>
      <NOTES>Base quality score recalibration</NOTES>
    </PIPE_SECTION>
  </PIPELINE>
</PROCESSING>
```
