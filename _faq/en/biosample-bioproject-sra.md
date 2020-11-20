---
layout: simple
title: What is the relationship between BioSamples, SRA Experiments, SRA Runs, and my data files?
category: faq
db:
  - biosample
  - dra
tags: 
  - Metadata
date: 2014-06-04T17:01:19
lang: en
---

## What is the relationship between BioSamples, SRA Experiments, SRA Runs, and my data files?

<p>BioSample is descriptive information about the biological source materials, or samples, used to generate experimental data in any of primary data archives. Biological and technical replicates need to be registered as separate BioSamples distinguished by the "replicate" attribute having values such as "biological replicate 1" and "biological replicate 2".</p>
<p>Each SRA Experiment is a unique sequencing library for a specific sample. Importantly, much of the descriptive information that is displayed in the public record of your data is captured at the level of the DRA Experiment. </p>
<p>SRA Runs are simply a manifest of data file(s) that should be linked to a given sequencing library – no information present in the Run is displayed on the public record of your project. Note that all data files listed in a Run will be merged into a single SRA archive file (and fastq file for distribution), so files from different samples should not be grouped in the same Run. Paired-end data files (forward/reverse), conversely, MUST be listed in a single run in order for the two files to be correctly processed as paired-end. Do not divide a sample for a paired-end library (for example, forward and reverse).</p>