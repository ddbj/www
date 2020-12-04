---
layout: indexed_content
title: INSDC standards for genome assembly submission

category: ddbj
current_tab: home
tab_menu:
  - id: home
    title: Home
    url: /ddbj/index.html
  - id: submission
    title: Submission
    url: /ddbj/submission.html
    children:
      - title: 塩基配列の登録
        url: /ddbj/submission.html
      - title: Web 版塩基配列登録システム
        url: /ddbj/web-submission.html
      - title: Mass Submission System
        url: /ddbj/mss.html
      - title: 登録データの修正・更新
        url: /ddbj/update.html
  - id: search
    title: Search
    url: http://ddbj.nig.ac.jp/arsa/?lang=ja
    children:
      - title: getentry
        url: http://getentry.ddbj.nig.ac.jp/top-j.html
      - title: ARSA
        url: http://ddbj.nig.ac.jp/arsa/?lang=ja
  - id: flat_file
    title: Flat file
    url: /ddbj/flat-file.html
    children:
      - title: Feature key の定義
        url: /ddbj/features.html
      - title: Qualifier key の定義
        url: /ddbj/qualifiers.html
      - title: Organism qualifier に記載する生物名
        url: /ddbj/organism.html
      - title: Location の記述法
        url: /ddbj/location.html
      - title: タンパク質コード配列
        url: /ddbj/cds.html
      - title: The Genetic Codes
        url: /ddbj/geneticcode.html
      - title: 配列の記載に用いる略号
        url: /ddbj/code.html
      - title: 登録の見本
        url: /ddbj/example.html
  - id: data_categories
    title: Data categories
    url: /ddbj/data-categories.html
    children:
      - title: Genome project のデータ登録
        url: /ddbj/genome.html
      - title: Pseudohaplotype
        url: /ddbj/pseudohaplotype.html
      - title: WGS
        url: /ddbj/wgs.html
      - title: メタゲノムアセンブリ
        url: /ddbj/metagenome-assembly.html
      - title: Single amplified genome
        url: /ddbj/single-amplified-genome.html
      - title: CON
        url: /ddbj/con.html
      - title: GSS
        url: /ddbj/gss.html
      - title: HTG
        url: /ddbj/htg.html
      - title: Environmental sequence の登録
        url: /ddbj/environmental.html
      - title: ENV
        url: /ddbj/env.html
      - title: TLS
        url: /ddbj/tls.html
      - title: Transcriptome Project のデータ登録
        url: /ddbj/transcriptome.html
      - title: TSA
        url: /ddbj/tsa.html
      - title: EST
        url: /ddbj/est.html
      - title: HTC
        url: /ddbj/htc.html
      - title: Third Party Data (TPA)
        url: /ddbj/tpa.html
  - id: faq
    title: FAQ
    url: /faq/ja/index.html?keyword%5B%5D=ddbj
  - id: other
    title: Other
    url: /ddbj/index-e.html
    children:
      - title: Patent
        url: /ddbj/patent-data.html
      - title: MGA
        url: /ddbj/mga.html
lang: ja
---

The original site; [INSDC standards for genome assembly submission](http://www.insdc.org/insdc-standards-genome-assembly-submission) 2013.08.14 version

Genome assemblies comprise a number of possible layers of information, including reads, contigs, scaffolds and chromosomes (see figure I). This document lays out the requirements for submission of genome assembly information into INSDC databases.

## Figure I. Three typical assembly processes <a name="Figure_I._Three_typical_assembly_processes"></a>

![]({{ site.baseurl }}/assets/images/ddbj/assembly1.gif)

![]({{ site.baseurl }}/assets/images/ddbj/assembly2.gif)

![]({{ site.baseurl }}/assets/images/ddbj/assembly3.gif)

Figure I. The figure shows three typical assembly processes and the layers of information that they yield.  
A) Clone-based assembly with scaffolding and finishing steps.  
B) Shotgun assembly direct to chromosomes.  
C) Partial assembly to contigs only.  

## Table I. New genome assembly submissions <a name="Table_I._New_genome_assembly_submissions"></a>

<table>
  <tbody>
    <tr>
      <td>Component</td>
      <td>Level</td>
      <td>Comment</td>
    </tr>
    <tr>
      <td>Reads</td>
      <td>Recommended</td>
      <td>Complete read and quality data</td>
    </tr>
    <tr>
      <td>ReRead to contig mappingads</td>
      <td rowspan="2">One of, as appropriate, optional</td>
      <td>e.g. BAM alignment of reads to contigs</td>
    </tr>
    <tr>
      <td>Read to chromosome mapping</td>
      <td>e.g. BAM alignment of reads to new chromosome</td>
    </tr>
    <tr>
      <td>Contigs</td>
      <td rowspan="3">At least one layer mandatory</td>
      <td rowspan="3"></td>
    </tr>
    <tr>
      <td>Scaffolds</td>
    </tr>
    <tr>
      <td>Chromosomes</td>
    </tr>
    <tr>
      <td>Scaffold to chromosome mapping</td>
      <td>Mandatory if both layers are present</td>
      <td>e.g. AGP file</td>
    </tr>
    <tr>
      <td>Contig to scaffold mapping</td>
      <td>Mandatory if both layers are present</td>
      <td>e.g. AGP file</td>
    </tr>
    <tr>
      <td>Assembly description</td>
      <td>Mandatory</td>
      <td>Brief information relating to assembly and future plans</td>
    </tr>
    <tr>
      <td>Functional annotation</td>
      <td>Optional</td>
      <td></td>
    </tr>
  </tbody>
</table>

Consistent with the variety of assembly processes, submitters to INSDC　approach with data for the layers in different combinations of　layers.　Tables I and II shows requirements for new genome assembly　submissions　and updates to existing assembly submissions.

## Table II. Update to existing genome assembly <a name="Table_II._Update_to_existing_genome_assembly"></a>

<table>
  <tbody>
    <tr>
      <td>Component</td>
      <td>Level</td>
      <td>Comment</td>
    </tr>
    <tr>
      <td>Reads</td>
      <td>Recommended</td>
      <td>Complete read and quality data</td>
    </tr>
    <tr>
      <td>Read to contig mapping</td>
      <td rowspan="2">One of, as appropriate, optional</td>
      <td>e.g. BAM alignment of reads to contigs</td>
    </tr>
    <tr>
      <td>Read to chromosome mapping</td>
      <td>e.g. BAM alignment of reads to new chromosome</td>
    </tr>
    <tr>
      <td>Contigs</td>
      <td rowspan="3">At least one layer mandatory, with highest layer no lower than for existing assembly</td>
      <td rowspan="3"></td>
    </tr>
    <tr>
      <td>Scaffolds</td>
    </tr>
    <tr>
      <td>Chromosomes</td>
    </tr>
    <tr>
      <td>Scaffold to chromosome mapping</td>
      <td>Mandatory if both layers are present</td>
      <td>e.g. AGP file</td>
    </tr>
    <tr>
      <td>Contig to scaffold mapping</td>
      <td>Mandatory if both layers are present</td>
      <td>e.g. AGP file</td>
    </tr>
    <tr>
      <td>Assembly description</td>
      <td>Mandatory</td>
      <td>Brief information relating to assembly and future plans</td>
    </tr>
    <tr>
      <td>Regenerated (or lifted-over) functional annotation</td>
      <td>Recommended</td>
      <td>If associated with existing assembly</td>
    </tr>
    <tr>
      <td>Coding annotation mappings between old and new assemblies</td>
      <td>Recommended where functional annotation is provided for the updated assembly</td>
      <td>Typically through INSDC protein ID mappings</td>
    </tr>
  </tbody>
</table>

Third party genome assembly submissions and updates, in which the　submitting group does not hold complete ownership of data, are subject　to existing third party annotation rules, including the requirement for　presentation of the new/updated genome assembly in a peer reviewed　publication prior to public release from INSDC.
