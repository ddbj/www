---
layout: indexed_content
title: メタデータの例
category: dra
current_tab: handbook
tab_menu:
  - id: home
    title: Home
    url: /dra/index.html
  - id: handbook
    title: Handbook
    url: /dra/submission.html
    children:
      - title: Metadata examples
        url: https://docs.google.com/spreadsheets/d/1DTdUQ-WWOMjOA2eYQWmFYUB24hJysuwhvHLJoDFX4rc/edit#gid=0
      - title: XML examples
        url: /dra/example.html
      - title: XML schema
        url: https://github.com/ddbj/pub/tree/master/docs/dra
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=dra
  - id: search
    title: Search
    url: https://ddbj.nig.ac.jp/DRASearch/
  - id: downloads
    title: Downloads
    url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq
    children:
      - title: FASTQ
        url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/fastq
      - title: SRA
        url: ftp://ftp.ddbj.nig.ac.jp/ddbj_database/dra/sralite/ByExp/litesra/
      - title: XML Schema
        url: https://github.com/ddbj/pub/tree/master/docs/dra/xsd
  - id: about dra
    title: About DRA
    url: /dra/about-dra.html
lang: ja
---

{::options parse_block_html="true" /}
<div class="attention red">
メタデータ作成ツールは technical read (アダプター，プライマーやバーコード配列) の記載に対応していません。  
[Technical read を含むデータを登録する場合は Experiment XML を作成]({{ site.baseurl }}/dra/submission.html#create-metadata-in-xml-files)し，下記の例を参考に&lt;SPOT_DESCRIPTOR&gt;で technical read を記載する必要があります。
</div>

## Experiment (Spot, Platform) <a name="Experiment"></a>

### 454 single reads <a name="454_single"></a>

#### リード

Read composition

|  Read Index : |  0  |  1  |
|  Read : |  TCAG  |  ATAGAGTTGATCCTGGCTCAT……………  |
|  Base Coordinate :  |  1  |  {::nomarkdown}<div class="float-left">5</div><div class="float-right">80</div>{:/}  |
|  Read Type :  |  Adapter  |  Forward  |

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
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

[Platform]({{ site.baseurl }}/dra/submission.html#Instrument)

| Platform | Instrument Model    |
| -------- | ------------------- |
| LS454    | 454 GS FLX Titanium |

### 454 paired reads <a name="454_paired"></a>

#### リード

Read composition

| Read Index :      | 0       | 1                 | 2                  | 3          |
| Read :            | TCAG    | ATAGAGT……………CCTGG | TCGTAT……………TATTACG | CTCAT…………… |
| Base Coordinate : | 1       | 5                 |                    |            |
| Read Type :       | Adapter | Forward           | Linker             | Forward    |

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

[Platform]({{ site.baseurl }}/dra/submission.html#Instrument)

| Platform | Instrument Model    |
| -------- | ------------------- |
| LS454    | 454 GS FLX Titanium |

### Illumina single reads <a name="illumina_single"></a>

#### リード

Read composition

|  Read Index :  |  0  |
|  Read :  |  ATAGAGTTGATCCTGG……………CCTGGCTCA  |
|  Base Coordinate :  |  {::nomarkdown}<div class="float-left">１</div><div class="float-right">72</div>{:/} |
|  Read Type :  |  Forward  |

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
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

[Platform]({{ site.baseurl }}/dra/submission.html#Instrument)

| Platform | Instrument Model             | Sequence Length |
| -------- | ---------------------------- | --------------- |
| Illumina | Illumina Genome Analyzer IIx | 72              |

### Illumina paired reads <a name="illumina_paired"></a>

#### リード

Read composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATAGAGTTGATCCTGG……………  |  CCTGGCTCATCAGTTGAT……………  |
|  Base Coordinate :  |  1  |  {::nomarkdown}<div class="float-left">101</div><div class="float-right">200</div>{:/} |
|  Read Type :  |  Forward  |  Reverse  |

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
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

[Platform]({{ site.baseurl }}/dra/submission.html#Instrument)

| Platform | Instrument Model             | Sequence Length |
| -------- | ---------------------------- | --------------- |
| Illumina | Illumina Genome Analyzer IIx | 200             |

### Illumina paired reads 10x Genomics <a name="illumina_paired_10x"></a>

#### リード

Read composition

| Read Index :      | 0        | 1           | 2                        | 3                        |     |
| Read :            | ATTCCTCG | CCA.....ACT | GG...................... | CT...................... |     |
| Base Coordinate : | 1        | 9           | 23                       | 123                      | 223 |
| Read Type :       | Adapter  | Adapter     | Forward                  | Reverse                  |     |

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Technical Read   | Adapter   | BaseCoord = 1   |
| 1          | Technical Read   | Adapter   | BaseCoord = 9   |
| 2          | Application Read | Forward   | BaseCoord = 23  |
| 3          | Application Read | Reverse   | BaseCoord = 123 |

Experiment XML (SPOT_DESCRIPTOR)

```
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

[Platform]({{ site.baseurl }}/dra/submission.html#Instrument)

| Platform | Instrument Model             | Sequence Length |
| -------- | ---------------------------- | --------------- |
| Illumina | Illumina Genome Analyzer IIx | 223             |

### SOLiD single reads <a name="SOLiD_single"></a>

#### リード

Read composition

|  Read Index :  |  0  |
|  Read :  |  TTGATCCTGG……………CGCTCA  |
|  Base Coordinate :  |  {::nomarkdown}<div class="float-left">1</div><div class="float-right">50</div>{:/}  |
|  Read Type :  |  Forward  |

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
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

[Platform]({{ site.baseurl }}/dra/submission.html#Instrument)

| Platform  | Instrument Model    | Sequence Length |
| --------- | ------------------- | --------------- |
| ABI SOLID | AB SOLiD System 3.0 | 50              |

### SOLiD paired reads <a name="SOLiD_paired"></a>

#### リード

Read composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCTGG……………  |  CATCAGTTGAT……………  |
|  Base Coordinate :  |  1  |  {::nomarkdown}<div class="float-left">26</div><div class="float-right">50</div>{:/}  |
|  Read Type :  |  Forward  |  Forward  |

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
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

[Platform]({{ site.baseurl }}/dra/submission.html#Instrument)

| Platform  | Instrument Model    | Sequence Length |
| --------- | ------------------- | --------------- |
| ABI SOLID | AB SOLiD System 3.0 | 50              |

### Ion torrent single reads <a name="Ion_single"></a>

#### リード

Read composition

|  Read Index :  |  0  |
|  Read :  |  AGCCGTATATAG……………CGTCAGAA  |
|  Base Coordinate :  |  {::nomarkdown}<div class="float-left">1</div><div class="float-right">(x)</div>{:/} |
|  Read Type :  |  Forward  |

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
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

[Platform]({{ site.baseurl }}/dra/submission.html#Instrument)

| Platform    | Instrument Model       | Sequence Length |
| ----------- | ---------------------- | --------------- |
| Ion torrent | Ion torrent PGM/Proton |                 |

### PacBio single reads (Standard sequencing) <a name="PacBio_standard"></a>

#### メタデータ

Spot (Read Spec)

| Adapter Spec                                  |
| --------------------------------------------- |
| ATCTCTCTCTTTTCCTCCTCCTCCGTTGTTGTTGTTGAGAGAGAT |

{::nomarkdown}<br>{:/}

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
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

[Platform]({{ site.baseurl }}/dra/submission.html#Instrument)

| Platform     | Instrument Model |
| ------------ | ---------------- |
| Pacbio Smart | PacBio RS        |

Experiment Attribute

| Tag                 | Value               | Units |
| ------------------- | ------------------- | ----- |
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

### PacBio single reads (Circular consensus sequencing) <a name="PacBio_CCS"></a>

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
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

[Platform]({{ site.baseurl }}/dra/submission.html#Instrument)

| Platform     | Instrument Model |
| ------------ | ---------------- |
| Pacbio Smart | PacBio RS        |

Experiment Attribute

| Tag                 | Value                         | Units |
| ------------------- | ----------------------------- | ----- |
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

## data validation でエラーになる典型的な例 <a name="errors"></a>

data validation でエラーになった場合， validation
プロセスを停止し，メタデータを修正するかデータファイルを再アップロードしてください。

  - [Application read のないリード](#no_application)
  - [矛盾する塩基座標を持つリード](#inconsistent_base)
  - [位置の特定できない Relative order を持ったリード](#cannot_specified)

### Application read のないリード <a name="no_application"></a> 

#### リード

Read composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCGG  |  CATCAGTTGAT…………………………………………………  |
|  Base Coordinate :  |  1  |  {::nomarkdown}<div class="float-left">7</div><div class="float-right">50</div>{:/} |
|  Read Type :  |  Primer  |  Linker <span class="red">(少なくとも一つの application を持っている必要がある)</span>  |

### 矛盾する塩基座標を持つリード <a name="inconsistent_base"></a> 

#### リード 1

Read composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCGG……………  |  CATCAG……………  |
|  Base Coordinate :  |  1  |  <span class="red">1 (1 以上である必要がある)</span>  |
|  Read Type :  |  Forward  |  Reverse  |

#### リード 2

Read composition

| Read Index :      | 0       | 1            | 2                                                    |
| Read :            | TCAG    | ATAGAGTTG……… | TCGTATAACTTCGTATAATGTATGCTATACGAAGTT                 |
| Base Coordinate : | 1       | 5            | <span class="red">4 (5 以上である必要がある)</span> |
| Read Type :       | Adapter | Forward      | Reverse                                              |

#### リード 3

Read composition

|  Read Index :  |  0  |  1  |
|  Read :  |  ATCCGGGTGTGTCATCAG  |  CATCAG……………  |
|  Base Coordinate :  |  <span class="red">2 (1 から始まる必要がある)</span>  |  19  |
|  Read Type :  |  Adapter  |  Forward  |

### 位置の特定できない Relative order を持ったリード <a name="cannot_specified"></a> 

#### リード

Read composition

| Read Index :      | 0       | 1          | 2       | 3                                                                   |
| Read :            | TCAG    | ATAGA…………… | ………………… | CTCAT…………………………………………………………                                         |
| Base Coordinate : | 1       | 5          |         |                                                                     |
| Read Type :       | Adapter | Forward    | Linker  | Forward <span class="red">(この forward の位置が特定できない)</span> |

#### メタデータ

Spot (Read Spec)

| Read Index | Read Class       | Read Type | Ordering Method |
| ---------- | ---------------- | --------- | --------------- |
| 0          | Technical Read   | Adapter   | BaseCoord = 1   |
| 1          | Application Read | Forward   | BaseCoord = 5   |
| 2          | Technical Read   | Linker    | RelativeOrder   |
| 3          | Application Read | Forward   | RelativeOrder   |

## Experiment (Pipeline) <a name="Experiment_pipeline"></a>

### Experiment XML Pipeline の例1 <a name="pipeline1"></a>

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

### Experiment XML Pipeline の例2 <a name="pipeline1"></a>

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
