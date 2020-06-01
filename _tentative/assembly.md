---
layout: indexed_content
title: INSDC standards for genome assembly submission
pathname: assembly
category: tentative
pdf: https://www.ddbj.nig.ac.jp/pdf/ddbj/assembly.pdf
---

The original site; [INSDC standards for genome assembly submission](http://www.insdc.org/insdc-standards-genome-assembly-submission) 2013.08.14 version

Genome assemblies comprise a number of possible layers of information, including reads, contigs, scaffolds and chromosomes (see figure I). This document lays out the requirements for submission of genome assembly information into INSDC databases.

## Figure I. Three typical assembly processes

![]({{ site.baseurl }}/assets/images/ddbj/assembly1.gif)

![]({{ site.baseurl }}/assets/images/ddbj/assembly2.gif)

![]({{ site.baseurl }}/assets/images/ddbj/assembly3.gif)

Figure I. The figure shows three typical assembly processes and the layers of information that they yield.  
A) Clone-based assembly with scaffolding and finishing steps.  
B) Shotgun assembly direct to chromosomes.  
C) Partial assembly to contigs only.  

## Table I. New genome assembly submissions

<table>
  <tbody>
    <tr>
      <th>Component</th>
      <th>Level</th>
      <th>Comment</th>
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

## Table II. Update to existing genome assembly

<table>
  <tbody>
    <tr>
      <th>Component</th>
      <th>Level</th>
      <th>Comment</th>
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
