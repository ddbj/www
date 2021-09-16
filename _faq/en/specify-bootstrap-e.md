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

In ClustalW, BOOTSTRAP calculations are performed for all analyses.    
Select [Download Tree File] at the end of the output file to download a .phb file.

Note that .phb files will not be produced if the following combinations of options are chosen for the [FORMAT] and [CLUSTERING] fields of the input form.

| [FORMAT] | [CLUSTERING]|
|---|
| PHYLIP | NJ |
| NEXUS | NJ |
| PHYLIP | UPGMA |
| NEXUS | UPGMA |