---
layout: simple
title: The submission status is not changed for a day after uploading DRA metadata XML files
category: faq
db:
  - dra
tags: 
  - Metadata
date: 2021-12-16T01:39:46
lang: en
---

After uploading [DRA metadata XML files](/dra/submission-e.html#metadata-excel) in the DRA submission page in D-way, the submission status may not change even after a day.   
In that case, check the following points. In necessary, revise your XML files and re-upload them. Or [contact us](/contact-ddbj-e.html) if you have any questions.

Run XML checksum contains space(s).

```
<FILE checksum="20e7fbbe6e8 2265383ad4d9e92a7463e" checksum_method="MD5" ascii_offset="!" quality_encoding="ascii" quality_scoring_system="phred" filetype="fastq" filename="Y1_Read1.fq.gz"/>
```

