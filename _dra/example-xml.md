---
layout: tabbed_indexed_content
service_name: Sequence Read Archive
title: メタデータ XML の例
category: dra
current_tab: submission
lang: ja
---

## Experiment (Spot, Platform)  {#Experiment}

メタデータ作成ウェブツールは technical read (アダプター，プライマーやバーコード配列) 記載に対応していません。  
Technical read を含むデータを登録する場合は [Experiment XML を作成](/dra/submission.html#create-metadata-in-xml-files)し、
\<SPOT_DESCRIPTOR\>で technical read を記載します。

### 454 single reads  {#r454-single}

#### リード

Read composition

|  Read Index : |  0  |  1  |
|  Read : |  TCAG  |  ATAGAGTTGATCCTGGCTCAT……………  |
|  Base Coordinate :  |  1  |  {::nomarkdown}<div class="float-left">5</div><div class="float-right">80</div>{:/}  |
|  Read Type :  |  Adapter  |  Forward  |

#### メタデータ

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

### 454 paired reads {#r454-paired}

#### リード

Read composition

| Read Index :      | 0       | 1                 | 2                  | 3          |
| Read :            | TCAG    | ATAGAGT……………CCTGG | TCGTAT……………TATTACG | CTCAT…………… |
| Base Coordinate : | 1       | 5                 |                    |            |
| Read Type :       | Adapter | Forward           | Linker             | Forward    |

#### メタデータ

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

## Experiment (Pipeline)  {#Experiment_pipeline}

解析に使用した一連のプログラム（パイプライン）の記載例は以下を参考にしてください。

### Experiment XML Pipeline の例1  {#pipeline1}

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

### Experiment XML Pipeline の例2  {#pipeline1}

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
