---
layout: simple
title: Is it possible to specify BOOTSTRAP when performing analyses with ClustalW?
category: faq
db:
  - clustalw
tags: 
  - Analysis
date: 2015-06-08T15:44:40
lang: en
---

## Is it possible to specify BOOTSTRAP when performing analyses with ClustalW?

In ClustalW, BOOTSTRAP calculations are performed for all analyses. <br>Select [Download Tree File] at the end of the output file to download a .phb file.<br><br>Note that .phb files will not be produced if the following combinations of options are chosen for the [FORMAT] and [CLUSTERING] fields of the input form.<br>
<table id="mktable_noline" style="margin-left:50px;">
  <tr>
    <td id="mktable_left_noline" style="font-weight:bold; width:100px;"> [FORMAT] </td>
    <td id="mktable_left_noline" style="font-weight:bold;"> [CLUSTERING]</td>
  </tr>
  <tr>
    <td id="mktable_left_noline" style="width:100px;"> PHYLIP</td>
    <td id="mktable_left_noline"> NJ</td>
  </tr>
  <tr>
    <td id="mktable_left_noline" style="width:100px;"> NEXUS</td>
    <td id="mktable_left_noline"> NJ</td>
  </tr>
  <tr>
    <td id="mktable_left_noline" style="width:100px;"> PHYLIP</td>
    <td id="mktable_left_noline"> UPGMA</td>
  </tr>
  <tr>
    <td id="mktable_left_noline" style="width:100px;"> NEXUS</td>
    <td id="mktable_left_noline"> UPGMA</td>
  </tr>
</table>