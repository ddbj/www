---
layout: simple
title: What is a SRA secondary accession?
category: faq
db:
  - dra

tags: 
  - Accession number
date: 2023-03-16T11:16:30
lang: en
---

If a public SRA Run is replaced by a new Run, the previous accession will be a secondary accession of the new one to track replacement.  
For example, when DRR046787 was replaced by DRR049544, 
DRR049544 became primary and DRR046787 became secondary accession (below is the DRR049544 Run XML).

```
<RUN accession="DRR049544" center_name="HOKU_FS" alias="DRR049544">
  <IDENTIFIERS>
    <PRIMARY_ID>DRR049544</PRIMARY_ID>
    <SECONDARY_ID>DRR046787</SECONDARY_ID>
  </IDENTIFIERS>
  <TITLE>454 GS Junior sequencing of SAMD00041397</TITLE>
  <EXPERIMENT_REF accession="DRX042075" refcenter="HOKU_FS" refname="DRX042075"/>
</RUN>
```

DRR049544 is displayed when searching DRR046787 at NCBI SRA ([https://www.ncbi.nlm.nih.gov/sra/?term=DRR046787](https://www.ncbi.nlm.nih.gov/sra/?term=DRR046787))  .
In the NCBI SRA Run Browser, the secondary DRR046787 is displayed in small characters with the primary DRR049544 ([DRR049544](https://trace.ncbi.nlm.nih.gov/Traces/?view=run_browser&acc=DRR049544&display=metadata)).  
  
Secondary accessions of Experiment DRX and Submission DRA are treated similarly.
