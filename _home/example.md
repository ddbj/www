---
layout: indexed_content
title: メタデータの例
pathname: example
category: _home
---

<div id="main_index">

  - [Experiment (Spot, Platform)](#Experiment)
  - [454 single reads](#454_single)
  - [454 paired reads](#454_paired)
  - [Illumina single reads](#illumina_single)
  - [Illumina paired reads](#illumina_paired)
  - [Illumina paired reads 10x Genomics](#illumina_paired_10x)
  - [SOLiD single reads](#SOLiD_single)
  - [SOLiD paired reads](#SOLiD_paired)
  - [Ion torrent single reads](#Ion_single)
  - [PacBio single reads (Standard sequencing)](#PacBio_standard)
  - [PacBio single reads (Circular consensus sequencing)](#PacBio_CCS)
  - [data validation でエラーになる典型的な例](#errors)
  - [Application read のないリード](#no_application)
  - [矛盾する塩基座標を持つリード](#inconsistent_base)
  - [位置の特定できない Relative order を持ったリード](#cannot_specified)
  - [Experiment (Pipeline)](#Experiment_pipeline)
  - [Experiment XML Pipeline の例1](#pipeline1)
  - [Experiment XML Pipeline の例2](#pipeline2)

</div>

<div class="attention">

メタデータ作成ツールは technical read (アダプター，プライマーやバーコード配列) の記載に対応していません。[Technical read を含むデータを登録する場合は Experiment XML を作成](/dra/submission.html#create-metadata-in-xml-files)し，下記の例を参考に \<SPOT\_DESCRIPTOR\>で technical read を記載する必要があります。

</div>

<div class="section">

## Experiment (Spot, Platform)

<div class="example">

### 454 single reads

<div class="example_read">

#### リード

Read composition

|  Read Index <span class="normal">:</span>  |  0  |  1  |
| ---- | ---- | ---- |
|  Read <span class="normal">:</span>  |  TCAG  |  ATAGAGTTGATCCTGGCTCAT……………  |
|  Base Coordinate <span class="normal">:  |  1  |  <div class="base_left">5</div><div class="base_right">80</div>  |
|  Read Type <span class="normal">:  |  Adapter  |  Forward  |

</div>

<div class="example_metadata">

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Technical Read   | Adapter   | BaseCoord = 1   |
| 1          | Application Read | Forward   | BaseCoord = 5   |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
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
| -------- | ------------------- |
| LS454    | 454 GS FLX Titanium |

</div>

</div>

<div class="example">

### 454 paired reads

<div class="example_read">

#### リード

Read composition

|                                               |         |                   |                    |            |
| --------------------------------------------- | ------- | ----------------- | ------------------ | ---------- |
| Read Index <span class="normal">:</span>      | 0       | 1                 | 2                  | 3          |
| Read <span class="normal">:</span>            | TCAG    | ATAGAGT……………CCTGG | TCGTAT……………TATTACG | CTCAT…………… |
| Base Coordinate <span class="normal">:</span> | 1       | 5                 |                    |            |
| Read Type <span class="normal">:</span>       | Adapter | Forward           | Linker             | Forward    |

</div>

<div class="example_metadata">

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method       |
| ---------- | ---------------- | --------- | --------------------- |
| 0          | Technical Read   | Adapter   | BaseCoord = 1         |
| 1          | Application Read | Forward   | BaseCoord = 5         |
| 2          | Technical Read   | Linker    | ExpectedBasecallTable |
| 3          | Application Read | Forward   | RelativeOrder         |

Expected Basecall Table

| Base Call                                  | Min Match | Max Mismatch | Match Edge |
| ------------------------------------------ | --------- | ------------ | ---------- |
| TCGTATAACTTCGTATAATGTATGCTATACGAAGTTATTACG | 38        | 5            | full       |
| CGTAATAACTTCGTATAGCATACATTATACGAAGTTATACGA | 38        | 5            | full       |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
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
| -------- | ------------------- |
| LS454    | 454 GS FLX Titanium |

</div>

</div>

<div class="example">

### Illumina single reads

<div class="example_read">

#### リード

Read composition

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Read Index <span class="normal">:</span></td>
<td>0</td>
</tr>
<tr class="even">
<td>Read <span class="normal">:</span></td>
<td>ATAGAGTTGATCCTGG……………CCTGGCTCA</td>
</tr>
<tr class="odd">
<td>Base Coordinate <span class="normal">:</span></td>
<td><div class="base_left">
1
</div>
<div class="base_right">
72
</div></td>
</tr>
<tr class="even">
<td>Read Type <span class="normal">:</span></td>
<td>Forward</td>
</tr>
</tbody>
</table>

</div>

<div class="example_metadata">

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Forward   | BaseCoord = 1   |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
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
| -------- | ---------------------------- | --------------- |
| Illumina | Illumina Genome Analyzer IIx | 72              |

</div>

</div>

<div class="example">

### Illumina paired reads

<div class="example_read">

#### リード

Read composition

|  Read Index <span class="normal">:</span>  |  0  |  1  |
| ---- | ---- | ---- |
|  Read <span class="normal">:</span>  |  ATAGAGTTGATCCTGG……………  |  CCTGGCTCATCAGTTGAT……………  |
|  Base Coordinate <span class="normal">:</span>  |  1  |  <div class="base_left">101</div><div class="base_right">200</div>  |
|  Read Type <span class="normal">:</span>  |  Forward  |  Reverse  |

</div>

<div class="example_metadata">

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Forward   | BaseCoord = 1   |
| 1          | Application Read | Reverse   | BaseCoord = 101 |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
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
| -------- | ---------------------------- | --------------- |
| Illumina | Illumina Genome Analyzer IIx | 200             |

</div>

</div>

<div class="example">

### Illumina paired reads 10x Genomics

<div class="example_read">

#### リード

Read composition

|                                               |          |             |                          |                          |     |
| --------------------------------------------- | -------- | ----------- | ------------------------ | ------------------------ | --- |
| Read Index <span class="normal">:</span>      | 0        | 1           | 2                        | 3                        |     |
| Read <span class="normal">:</span>            | ATTCCTCG | CCA.....ACT | GG...................... | CT...................... |     |
| Base Coordinate <span class="normal">:</span> | 1        | 9           | 23                       | 123                      | 223 |
| Read Type <span class="normal">:</span>       | Adapter  | Adapter     | Forward                  | Reverse                  |     |

</div>

<div class="example_metadata">

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Technical Read   | Adapter   | BaseCoord = 1   |
| 1          | Technical Read   | Adapter   | BaseCoord = 9   |
| 2          | Application Read | Forward   | BaseCoord = 23  |
| 3          | Application Read | Reverse   | BaseCoord = 123 |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
<SPOT_DESCRIPTOR>
  <SPOT_DECODE_SPEC>
  <SPOT_LENGTH>223</SPOT_LENGTH>
    <READ_SPEC>
      <READ_INDEX>0</READ_INDEX>
      <READ_CLASS>Technical Read</READ_CLASS>
      <READ_TYPE>Adapter</READ_TYPE>
      <BASE_COORD>1</BASE_COORD>
    </READ_SPEC>
    <READ_SPEC>
      <READ_INDEX>1</READ_INDEX>
      <READ_CLASS>Technical Read</READ_CLASS>
      <READ_TYPE>Adapter</READ_TYPE>
      <BASE_COORD>9</BASE_COORD>
    </READ_SPEC>
    <READ_SPEC>
      <READ_INDEX>2</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Forward</READ_TYPE>
      <BASE_COORD>23</BASE_COORD>
    </READ_SPEC>    
    <READ_SPEC>
      <READ_INDEX>3</READ_INDEX>
      <READ_CLASS>Application Read</READ_CLASS>
      <READ_TYPE>Reverse</READ_TYPE>
      <BASE_COORD>123</BASE_COORD>
    </READ_SPEC>
  </SPOT_DECODE_SPEC>
</SPOT_DESCRIPTOR>
```

[Platform](/dra/submission.html#Instrument)

| Platform | Instrument Model             | Sequence Length |
| -------- | ---------------------------- | --------------- |
| Illumina | Illumina Genome Analyzer IIx | 223             |

</div>

</div>

<div class="example">

### SOLiD single reads

<div class="example_read">

#### リード

Read composition

|  Read Index <span class="normal">:</span>  |  0  |
| ---- | ---- |
|  Read <span class="normal">:</span>  |  TTGATCCTGG……………CGCTCA  |
|  Base Coordinate <span class="normal">:</span>  |  <div class="base_left">1</div><div class="base_right">50</div>  |
|  Read Type <span class="normal">:</span>  |  Forward  |

</div>

<div class="example_metadata">

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Forward   | BaseCoord = 1   |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
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
| --------- | ------------------- | --------------- |
| ABI SOLID | AB SOLiD System 3.0 | 50              |

</div>

</div>

<div class="example">

### SOLiD paired reads

<div class="example_read">

#### リード

Read composition

|  Read Index <span class="normal">:</span>  |  0  |  1  |
| ---- | ---- | ---- |
|  Read <span class="normal">:</span>  |  ATCCTGG……………  |  CATCAGTTGAT……………  |
|  Base Coordinate <span class="normal">:</span>  |  1  |  <div class="base_left">26</div><div class="base_right">50</div>  |
|  Read Type <span class="normal">:</span>  |  Forward  |  Forward  |

</div>

<div class="example_metadata">

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Forward   | BaseCoord = 1   |
| 0          | Application Read | Forward   | BaseCoord = 26  |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
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
| --------- | ------------------- | --------------- |
| ABI SOLID | AB SOLiD System 3.0 | 50              |

</div>

</div>

<div class="example">

### Ion torrent single reads

<div class="example_read">

#### リード

Read composition

|  Read Index <span class="normal">:</span>  |  0  |
| ---- | ---- |
|  Read <span class="normal">:</span>  |  AGCCGTATATAG……………CGTCAGAA  |
|  Base Coordinate <span class="normal">:</span>  |  <div class="base_left">1</div><div class="base_right">(x)</div>  |
|  Read Type <span class="normal">:</span>  |  Forward  |

</div>

<div class="example_metadata">

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Forward   | BaseCoord = 1   |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
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
| ----------- | ---------------------- | --------------- |
| Ion torrent | Ion torrent PGM/Proton |                 |

</div>

</div>

<div class="example">

### PacBio single reads (Standard sequencing)

<div class="example_metadata">

#### メタデータ

Spot (Read Spec)

| Adapter Spec                                  |
| --------------------------------------------- |
| ATCTCTCTCTTTTCCTCCTCCTCCGTTGTTGTTGTTGAGAGAGAT |

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Forward   | BaseCoord = 1   |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
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
| ------------ | ---------------- |
| Pacbio Smart | PacBio RS        |

Experiment Attribute

| Tag                 | Value               | Units |
| ------------------- | ------------------- | ----- |
| Sequencing Protocol | Standard sequencing |       |
| Insert size         | 8000                |       |

Experiment XML (EXPERIMENT\_ATTRIBUTES)

``` example_xml
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

</div>

</div>

<div class="example">

### PacBio single reads (Circular consensus sequencing)

<div class="example_metadata">

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Application Read | Other     | BaseCoord = 1   |

Experiment XML (SPOT\_DESCRIPTOR)

``` example_xml
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
| ------------ | ---------------- |
| Pacbio Smart | PacBio RS        |

Experiment Attribute

| Tag                 | Value                         | Units |
| ------------------- | ----------------------------- | ----- |
| Sequencing Protocol | Circular consensus sequencing |       |
| Insert size         | 700                           |       |

Experiment XML (EXPERIMENT\_ATTRIBUTES)

``` example_xml
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

</div>

</div>

<div class="section">

## data validation でエラーになる典型的な例

data validation でエラーになった場合， validation
プロセスを停止し，メタデータを修正するかデータファイルを再アップロードしてください。

<div class="sub_index">

  - [Application read のないリード](#no_application)
  - [矛盾する塩基座標を持つリード](#inconsistent_base)
  - [位置の特定できない Relative order を持ったリード](#cannot_specified)

</div>

<div class="example">

### Application read のないリード

<div class="example_read">

#### リード

Read composition

|  Read Index <span class="normal">:</span>  |  0  |  1  |
| ---- | ---- | ---- |
|  Read <span class="normal">:</span>  |  ATCCGG  |  CATCAGTTGAT…………………………………………………  |
|  Base Coordinate <span class="normal">:</span>  |  1  |  <div class="base_left">7</div><div class="base_right">50</div>  |
|  Read Type <span class="normal">:</span>  |  Primer  |  Linker <span class="attention_text">(少なくとも一つの application を持っている必要がある)</span>  |

</div>

</div>

<div class="example">

### 矛盾する塩基座標を持つリード

<div class="example_read">

#### リード 1

Read composition

|  Read Index <span class="normal">:</span>  |  0  |  1  |
| ---- | ---- | ---- |
|  Read <span class="normal">:</span>  |  ATCCGG……………  |  CATCAG……………  |
|  Base Coordinate <span class="normal">:</span>  |  1  |  <div class="base_left"><span class="attention_text">1 (1 以上である必要がある)</span></div>  |
|  Read Type <span class="normal">:</span>  |  Forward  |  Reverse  |

</div>

<div class="example_read">

#### リード 2

Read composition

|                                               |         |              |                                                      |
| --------------------------------------------- | ------- | ------------ | ---------------------------------------------------- |
| Read Index <span class="normal">:</span>      | 0       | 1            | 2                                                    |
| Read <span class="normal">:</span>            | TCAG    | ATAGAGTTG……… | TCGTATAACTTCGTATAATGTATGCTATACGAAGTT                 |
| Base Coordinate <span class="normal">:</span> | 1       | 5            | <span class="attention_text">4 (5 以上である必要がある)</span> |
| Read Type <span class="normal">:</span>       | Adapter | Forward      | Reverse                                              |

</div>

<div class="example_read">

#### リード 3

Read composition

|  Read Index <span class="normal">:</span>  |  0  |  1  |
| ---- | ---- | ---- |
|  Read <span class="normal">:</span>  |  ATCCGGGTGTGTCATCAG  |  CATCAG……………  |
|  Base Coordinate <span class="normal">:</span>  |  <span class="attention_text">2 (1 から始まる必要がある)</span>  |  <div class="base_left">19</div>  |
|  Read Type <span class="normal">:</span>  |  Adapter  |  Forward  |

</div>

</div>

<div class="example">

### 位置の特定できない Relative order を持ったリード

<div class="example_read">

#### リード

Read composition

|                                               |         |            |         |                                                                     |
| --------------------------------------------- | ------- | ---------- | ------- | ------------------------------------------------------------------- |
| Read Index <span class="normal">:</span>      | 0       | 1          | 2       | 3                                                                   |
| Read <span class="normal">:</span>            | TCAG    | ATAGA…………… | ………………… | CTCAT…………………………………………………………                                         |
| Base Coordinate <span class="normal">:</span> | 1       | 5          |         |                                                                     |
| Read Type <span class="normal">:</span>       | Adapter | Forward    | Linker  | Forward <span class="attention_text">(この forward の位置が特定できない)</span> |

</div>

<div class="example_metadata">

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Technical Read   | Adapter   | BaseCoord = 1   |
| 1          | Application Read | Forward   | BaseCoord = 5   |
| 2          | Technical Read   | Linker    | RelativeOrder   |
| 3          | Application Read | Forward   | RelativeOrder   |

</div>

</div>

</div>

<div class="section">

## Experiment (Pipeline)

<div class="example">

### Experiment XML Pipeline の例1

<div class="example_metadata">

``` example_xml
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

</div>

</div>

<div class="example">

### Experiment XML Pipeline の例2

<div class="example_metadata">

``` example_xml
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

</div>

</div>

</div>

</div>
