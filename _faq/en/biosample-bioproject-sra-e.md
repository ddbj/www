---
layout: simple
title: What is the relationship between BioSamples, SRA Experiments, Runs and my data files?
category: faq
db:
  - biosample
  - dra
tags: 
  - Metadata
date: 2014-06-04T17:01:19
lang: en
---

BioSample is descriptive information about the biological source materials, or samples, used to generate experimental data in any of primary data archives.  
Please see [Sample granularity](/biosample/overview-e.html#granularity).

Each SRA [Experiment](/dra/metadata-e.html#Experiment) is a unique sequencing library and sequencing method for a specific sample. 
Importantly, much of the descriptive information that is displayed in the public record of your data is captured at the level of the DRA Experiment.

SRA [Runs](/dra/metadata-e.html#Run) are simply a manifest of data file(s) that should be linked to a given sequencing library – no information present in the Run is displayed on the public record of your project.  
Note that all data files listed in a Run will be merged into a single SRA archive file (and fastq file for distribution).