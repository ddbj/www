---
layout: simple
title: How many samples do I need for my DRA submission?
category: faq
db:
  - biosample
  - dra
tags: 
  - Metadata
date: 2014-06-04T12:15:52
lang: en
---



<p>BioSample is descriptive information about the biological source materials, or samples, used to generate experimental data in any of primary data archives. Biological and technical replicates are represented by separate BioSamples with distinct 'replicate' attribute, e.g., 'replicate = biological replicate 1'.</p>
<p>For environmental samples, each physical isolate should be considered a BioSample, whereas uniquely attributable reads within an isolate are not. Note that a given DRA data file can be linked to a single BioSample only.</p>Basic guidance for BioSample registration are:
<div class="sub_index">
  <ul class="disc">
    <li>Register a separate BioSample for each unique source, e.g.,RNA from the wings is a separate BioSample than RNA from legs if those two sources were sequenced independently.</li>
    <li>A genome assembly can have only one BioSample. For a genome assembled from reads of multiple BioSamples, register a new BioSample and indicate which other BioSamples were used to generate the assembly. For example, if the reads from a male and from a female were submitted to DRA separately but the reads were combined to assemble the genome, register a new BioSample for the male plus the female, providing the accessions of the male and the female BioSamples in the new BioSample registration. Example genome entry.</ahref>
    </li>
    <li>Endosymbionts: Because sequences are annotated by genome, one would need separate BioSamples for an insect and its endosymbiont. In the insect genome assembly submission, we recommend indicating that the endosymbiont’s BioSample is separate and references the insect BioSample.</li>
  </ul>
</div>Examples:
<div class="sub_index">
  <ul class="disc">
    <li>23,000 unique 16S amplicons from a single seawater collection point - 1 BioSample (1 sample was collected and then analyzed to deduce 16S diversity)</li>
    <li>3 "identical" transgenic mice treated with the same drug as part of an experiment - 3 BioSamples (biological and technical replicates are represented by separate BioSamples)</li>
    <li>To examine gene expression profiles, CHO cells infected with a virus and sampled at 0, 2, 4, and 8 hours post infection - 4 BioSamples (4 time points)</li>
    <li>To analyze differences in gene expression levels, RNA-seq data from a single male anteater taken from the brain, heart, lungs, testes, and liver - 5 BioSamples (5 different tissues isolated)</li>
  </ul>
</div>